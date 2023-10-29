"use client"

import { useState } from "react"

export default function UserNameButton({ userNameAction }) {
    const [name, setName] = useState("")
    return (
        <div>
            <button
                onClick={async () => {
                    setName(await userNameAction())
                }}
            >
                What is my name?
            </button>
            {name && <div>My name is {name}</div>}
        </div>
    )
}