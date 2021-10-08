export default function useDocumentTitle({ title }) {
  useEffect(() => {
    document.title = `My Interval Timer | ${title}`
  }, [title])
}
