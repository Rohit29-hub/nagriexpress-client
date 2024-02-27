"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/src/components/ui/button"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const [toggle,setToggle] = React.useState(true);

  const handleTheme = () => {
    if(toggle == true){
      setTheme("dark")
      setToggle(false);
    }else{
      setTheme("light")
      setToggle(true);
    }
  }

  return (
    <Button variant="outline" size="icon" onClick={handleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
