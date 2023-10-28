import { getServerSession } from "next-auth"

export default async function ServerActionPage() {
    const userName = async () => {
        'use server'
        const session = await getServerSession()
        return session?.user?.name || "Not signed in"
    }
    return (
        <div>
            <userName userAction={userName} />
        </div>
    )
}