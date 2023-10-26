"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { usePathname } from "next/navigation"

const ACTIVE_ROUTE = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
const INACTIVE_ROUTE = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"

function AuthButton() {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
                {session?.user?.name} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}

export default function NavMenu() {
    return (
        <div>
            <AuthButton />

        </div>
    )
}