"use client"

import * as React from "react"
import { useState } from "react"

import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"


export function ModeToggle() {
  const { setTheme } = useTheme()
  const [isChecked, setIsChecked] = useState(false);
  const handlechange = (checked:boolean) => {
    // if (checked) {
    //   setTheme("dark")
    // } else {
    //   setTheme("light")
    // }
    setIsChecked(checked);
  }

  return (
    <div>
        <Switch checked={isChecked} onCheckedChange={handlechange} />
    </div>
  )
}
