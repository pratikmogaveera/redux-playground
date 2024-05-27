"use client"
import { Cog, Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/app/_store/store"
import { Theme, setTheme } from "@/app/_store/theme"


const DarkMode = () => {
    const dispatch = useDispatch<AppDispatch>()
    const theme = useAppSelector(state => state.themeSlice.theme)
    const changeTheme = (theme: Theme) => {
        dispatch(setTheme({ theme }))
    }

    return (
        <div className="absolute top-8 right-10 md:right-16">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"outline"} size={"icon"}>
                        {theme === "light"
                            ? <Sun />
                            : theme === "dark"
                                ? <Moon />
                                : <Cog />}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => changeTheme("dark")} disabled={theme === "dark"}>Dark</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeTheme("light")} disabled={theme === "light"}>Light</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeTheme("system")} disabled={theme === "system"}>System</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default DarkMode