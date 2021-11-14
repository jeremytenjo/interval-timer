// https://www.samanthaming.com/tidbits/33-how-to-compare-2-objects/
const getIsEqual = (obj1, obj2) => {
  const obj1Sorted = Object.fromEntries(
    Object.entries(obj1).sort(([, a]: any, [, b]: any) => a - b),
  )
  const obj2Sorted = Object.fromEntries(
    Object.entries(obj2).sort(([, a]: any, [, b]: any) => a - b),
  )
  const isEqual = JSON.stringify(obj1Sorted) === JSON.stringify(obj2Sorted)
  return isEqual
}

export default function getObjectDiff(obj1, obj2) {
  const diff = Object.keys(obj1).reduce((result, key) => {
    if (!obj2.hasOwnProperty(key)) {
      result.push(key)
    } else if (getIsEqual(obj1[key], obj2[key])) {
      const resultKeyIndex = result.indexOf(key)
      result.splice(resultKeyIndex, 1)
    }
    return result
  }, Object.keys(obj2))

  return diff
}
