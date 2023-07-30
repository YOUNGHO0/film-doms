import { atom } from 'recoil'

type ModalType = {
  isOpen: boolean
  title: string
  content: JSX.Element | string
  callBack?: () => any
  theme: 'dark' | 'white'
}

export const modalState = atom<ModalType>({
  key: 'modalState',
  default: {
    isOpen: false,
    title: '',
    content: '',
    theme: 'dark',
  },
})

export const pureModalState = atom<ModalType>({
  key: 'pureModalState',
  default: {
    isOpen: false,
    title: '',
    content: '',
    theme: 'dark',
  },
})
