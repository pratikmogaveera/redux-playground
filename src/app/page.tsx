import Counter from "@/components/CounterComp";
import DarkMode from "@/components/DarkMode";
import Message from "@/components/MessageComp";
import ModalComp from "@/components/ModalComp";
import Todo from "@/components/TodoComp";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {


    return (
        <ScrollArea className="w-full h-screen">
            <main className="flex flex-col items-center py-20">
                <div className="flex flex-col gap-8 items-center">
                    <h1 className="font-extrabold text-6xl md:text-7xl text-center inline-block cursor-default">
                        <span className="redux-title">
                            Redux
                        </span>
                        <br className="block md:hidden" />
                        &nbsp;Playground
                    </h1>
                    <Counter />
                    <Message />
                    <Todo />
                    <ModalComp />
                </div>

                <DarkMode />
            </main>
            <ScrollBar />
        </ScrollArea>
    );
}
