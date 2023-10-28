"use client"

import { useState } from "react"

export default function UserNameButton({ userAction }) {
    const [name, setName] = useState("")
    return (
        <div>
            <button
                onClick={async () => {
                    setName(await userAction())
                }}
            >
                What is my name?
            </button>
            {name && <div>My name is {name}</div>}
        </div>
    )
}