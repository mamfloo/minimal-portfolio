"use client"

import { useTheme } from "next-themes"
import { Button } from "./button"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const changeMode = () => {
    if(theme === 'dark') {
        setTheme('light'); 
    } else {
        setTheme('dark');
    }
  } 

  

  return (
    <Button variant="link" size="icon" onClick={changeMode} className="text-muted-foreground pb-1 hover:text-primary">
        {
            theme === "light" ? <Moon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
                            : <Sun className="h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
        }
        <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
