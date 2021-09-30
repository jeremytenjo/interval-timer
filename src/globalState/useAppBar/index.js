import create from 'zustand'

const useAppBarStore = create((set) => ({
  title: '',
  showEditButton: false,

  updateTitle: (newTitle) => set(() => ({ title: newTitle })),
  setShowEditButton: (show) => set(() => ({ showEditButton: show })),
}))

export default function useAppBar({
  title,
  showEditButton,
  hideEditButtonOnUnmount,
} = {}) {
  const appBarStore = useAppBarStore()

  useEffect(() => {
    appBarStore.setShowEditButton(showEditButton)

    appBarStore.updateTitle(title)

    return () => {
      if (hideEditButtonOnUnmount) {
        appBarStore.setShowEditButton(false)
      }
    }
  }, [title, showEditButton])

  return {
    title: appBarStore.title,
  }
}
