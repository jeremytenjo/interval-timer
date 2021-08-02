import { useNavigate } from 'react-router'

export default function ReactRouterChanger({ url, children }) {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(url)
  }, [url])

  return children
}
