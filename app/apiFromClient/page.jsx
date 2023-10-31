"use client"
import { useState, useEffect } from "react"

export default function APITestPage() {
    const [name, setName] = useState("")

    useEffect(() => {
        fetch("/api/whoAmI")
        .then((res) => res.json())
        .then((data) => setName(data.name))
    }, [])

    return (
    <div>
        <div>
            API Route From <span className="text-blue-600">Client</span>
        </div>
        <div>Name: {name}</div>
    </div>   
    )
}