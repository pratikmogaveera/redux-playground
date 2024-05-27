"use client"
import { clear, increment } from '@/app/_store/counter'
import { AppDispatch, useAppSelector } from '@/app/_store/store'
import { BadgePlus, Plus } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { Button } from './ui/button'

const CounterComp = () => {
    const count = useAppSelector(state => state.counterSlice.count)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className="flex flex-col px-8 py-6 gap-2 w-full md:w-[450px] items-center border-muted border rounded-md">
            <h2 className='w-full text-2xl font-bold mb-4'>Counter</h2>
            <p className="bg-muted w-full text-foreground font-medium text-lg p-2 rounded-md pointer-events-none select-none">{count}</p>
            <div className='flex gap-2 items-center w-full'>
                <Button variant={"outline"} className='text-xl w-full' onClick={() => dispatch(increment())}>
                    <Plus />
                </Button>
                <Button variant={"outline"} className='text-xl w-full' onMouseDown={() => dispatch(increment())}>
                    <BadgePlus />
                </Button>
                <Button variant={"outline"} className='w-full text-lg' onMouseDown={() => dispatch(clear())}>Clear</Button>
            </div>
        </div >
    )
}

export default CounterComp