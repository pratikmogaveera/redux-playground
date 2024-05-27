"use client"
import { AppDispatch, useAppSelector } from "@/app/_store/store"
import { clearTodo, fetchData, toggleTodo } from "@/app/_store/todo"
import { Check, Loader2, Trash, X } from "lucide-react"
import { useDispatch } from "react-redux"
import { Button } from "./ui/button"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const TodoComp = () => {
    const dispatch = useDispatch<AppDispatch>()
    const todo = useAppSelector(state => state.todoSlice)
    return (
        <div className="flex flex-col items-start px-8 py-6 gap-2 w-full md:w-[450px] items-center border-muted border rounded-md">
            <h2 className='w-full text-2xl font-bold mb-4'>Fetch Data</h2>
            <div className="flex gap-2 items-center w-full">
                <Button variant={"outline"} size={"lg"} onClick={() => dispatch(fetchData({ id: getRandomInt(0, 20) }))} className="w-full">
                    {todo.pending ?
                        <span className="flex gap-2 items-center justify-center">
                            <span className="animate-spin"><Loader2 /></span>
                            <span>Fetching...</span>
                        </span> :
                        <span>Fetch</span>}
                </Button>
                <Button variant={"outline"} size={"icon"} disabled={!todo.data} onClick={() => dispatch(toggleTodo())} className="shrink-0">
                    {todo.data?.completed
                        ? <X className="text-red-800 hover:text-red-800" strokeWidth={3} />
                        : <Check className="text-green-600 hover:text-green-600" strokeWidth={3} />
                    }
                </Button>
                <Button variant={"outline"} size={"icon"} disabled={!todo.data} onClick={() => dispatch(clearTodo())} className="shrink-0 text-red-800 hover:text-red-800">
                    <Trash />
                </Button>
            </div>
            <p className={`${todo.error ? "block" : "hidden"} text-sm text-destructive`}>{todo.error}</p>
            <div className='flex w-full shrink-0'>
                <ScrollArea className="w-[300px] md:w-full whitespace-nowrap rounded-md border">
                    <pre className="w-full text-muted-foreground p-4 transition-all">
                        {JSON.stringify(todo, null, 4)}
                    </pre>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div >

    )
}

export default TodoComp