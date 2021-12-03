import { useEffect } from 'react'
import create from 'zustand'

type Types = {
  title: string | boolean
  updateTitle: (newValue: string | boolean) => void
  showEditButton: boolean
  setShowEditButton: (newValue: boolean) => void
}

const useAppBarStore = create<Types>((set) => ({
  title: '',
  updateTitle: (newValue) => set(() => ({ title: newValue })),

  showEditButton: false,
  setShowEditButton: (newValue) => set(() => ({ showEditButton: newValue })),
}))

type Props = {
  title?: string | boolean
  showEditButton?: boolean
  hideEditButtonOnUnmount?: boolean
}

export default function useAppBar({
  title,
  showEditButton,
  hideEditButtonOnUnmount,
}: Props) {
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
