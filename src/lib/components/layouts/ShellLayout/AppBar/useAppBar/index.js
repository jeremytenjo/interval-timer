import create from 'zustand'

const useAppBar = create((set) => ({
  title: '',
  showEditButton: false,

  updateTitle: (newTitle) => set(() => ({ title: newTitle })),
  setShowEditButton: (show) => set(() => ({ showEditButton: show })),
}))

export default useAppBar
