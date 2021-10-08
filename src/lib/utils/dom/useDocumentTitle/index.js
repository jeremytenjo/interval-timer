export default function useDocumentTitle({ title }) {
  useEffect(() => {
    document.title = `Interval Timer | ${title}`
  }, [title])
}
