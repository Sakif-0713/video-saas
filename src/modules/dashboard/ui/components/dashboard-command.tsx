import {
  CommandResponsiveDialog,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}
export default function DashboardCommand({ open, setOpen }: Props) {
  return (
    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandItem>Test</CommandItem>
        <CommandItem>Test2</CommandItem>
      </CommandList>
    </CommandResponsiveDialog>
  )
}
