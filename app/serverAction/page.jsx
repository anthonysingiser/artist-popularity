import { getServerSession } from "next-auth"
import UserNameButton from "./UserNameButton"

export default async function ServerActionPage() {
    const userName = async () => {
        'use server'
        const session = await getServerSession()
        return session?.user?.name || "Not signed in"
    }
    return (
        <div>
            <UserNameButton userNameAction={userName} />
        </div>
    )
}