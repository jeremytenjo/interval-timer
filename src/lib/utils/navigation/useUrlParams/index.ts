import { useLocation } from 'react-router-dom'

/**
 * [Docs](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
 */
export default function useUrlParams() {
  return new URLSearchParams(useLocation().search)
}
