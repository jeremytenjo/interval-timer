import { useEffect, useMemo, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import getObjectDiff from '../../objects/getObjectDiff'

type Props = {
  onUpdate?: (newValue: any) => void
}

/**
 * [Docs](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
 */
export default function useUrlSearchParams(props: Props = {}): any {
  const previousDataRef = useRef(null)
  const searchParamsString = useLocation().search
  const newUrlSearchParams = new URLSearchParams(searchParamsString)
  const urlSearchParams = useMemo(() => {
    const paramsObj = {}
    for (const pair of newUrlSearchParams.entries()) {
      paramsObj[pair[0]] = pair[1]
    }
    return paramsObj
  }, [searchParamsString])

  useEffect(() => {
    const previousData = previousDataRef.current
    const newData = urlSearchParams
    previousDataRef.current = newData

    if (previousData) {
      const changedParamsArray = getObjectDiff(previousData, newData)
      const changedParams = {}

      changedParamsArray.forEach((changedParam) => {
        changedParams[changedParam] = newData[changedParam]
      })

      props.onUpdate &&
        Object.keys(changedParams)?.length &&
        props.onUpdate(changedParams)
    }
  }, [searchParamsString])

  return {
    ...urlSearchParams,
  }
}
