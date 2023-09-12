import Link from "next/link"
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
      {session ? (
        <Link href="/dashboard">Dashboards</Link>
      ) : (<></>)}
      <h1>Home</h1>
    </>
  )
}
