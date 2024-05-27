"use client"
import { setMessage } from "@/app/_store/message"
import { AppDispatch, useAppSelector } from "@/app/_store/store"
import { Send } from "lucide-react"
import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "./ui/button"
import { Input } from "./ui/input"


const MessageComp = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [localValue, setLocalValue] = useState("")
    const message = useAppSelector(state => state.messageSlice.value)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setMessage({ value: localValue }))
        setLocalValue("")
    }

    return (
        <div className="flex flex-col items-start px-8 py-6 gap-2 w-full md:w-[450px] items-center border-muted border rounded-md">
            <h2 className='w-full text-2xl font-bold mb-4'>Message</h2>
            <p className="text-lg flex items-center gap-1 font-medium w-full">
                <span className="font-bold">Text:</span>
                <span className="text-muted-foreground">{message.length ? message : "(null)"}</span>
            </p>
            <form onSubmit={(e) => handleSubmit(e)} className='flex gap-2 items-center w-full shrink-0'>
                <Input value={localValue} onChange={(e) => setLocalValue(e.target.value)} placeholder="Input.." className="text-base" />
                <Button variant={"outline"} size={"icon"} type="submit" className="shrink-0">
                    <Send size={20} />
                </Button>
            </form>
        </div >
    )
}

export default MessageComp