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
    const pathname = usePathname()
    return (
        <div>
            <AuthButton />
            <hr className="my-4" />
            <ul>
                <Link href="/">
                    <li className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                        Home
                    </li>  
                </Link>
                <Link href="/protected">
                    <li className={pathname === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                        Protected
                    </li>
                </Link>
                <Link href="/serverAction">
                    <li className={pathname === "/serverAction" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                        Server Action
                    </li>
                </Link>
            </ul>
        </div>
    )
}