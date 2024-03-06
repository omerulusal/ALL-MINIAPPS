"use client"
import React from "react"
import { IconType } from "react-icons"

type Props = {
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
    btnLabel: string
    outline?: boolean
    icon?: IconType
}

const Button: React.FC<Props> = ({ onSubmit, btnLabel, outline, icon: Icon }) => {
    return (
        <button className={`flex w-full items-center justify-center gap-2 bg-${outline ? "white" : "black"} text-${outline ? "black" : "white"} p-2 rounded-lg border`} onClick={onSubmit} type="button">
            {Icon && <Icon size={24} />}
            {btnLabel}
        </button>
    )
}

export default Button