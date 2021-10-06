import removeLastCharacter from '@useweb/remove-last-character'

export default function singularize(word) {
  const singular = removeLastCharacter(word)

  return singular
}
