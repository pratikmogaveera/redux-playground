"use client"
import { toggleModal } from '@/app/_store/modal'
import { AppDispatch, useAppSelector } from '@/app/_store/store'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { X } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { Button } from './ui/button'

const ModalComp = () => {
    const dispatch = useDispatch<AppDispatch>()
    const isOpen = useAppSelector(state => state.modalSlice.isOpen)

    return (
        <div className="flex flex-col items-start px-8 py-6 gap-2 w-full md:w-[450px] items-center border-muted border rounded-md">
            <h2 className='w-full text-2xl font-bold mb-4'>Modal</h2>
            <div className='w-full text-center'>
                <Dialog open={isOpen}>
                    <DialogTrigger onClick={() => dispatch(toggleModal())} asChild>
                        <Button variant={"outline"}>Open</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogClose onClick={() => dispatch(toggleModal())} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </DialogClose>
                    </DialogContent>
                </Dialog>
            </div>
        </div >
    )
}

export default ModalComp