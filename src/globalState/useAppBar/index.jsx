import create from 'zustand'

const useAppBarStore = create((set) => ({
  title: '',
  updateTitle: (newValue) => set(() => ({ title: newValue })),

  showEditButton: false,
  setShowEditButton: (newValue) => set(() => ({ showEditButton: newValue })),
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
