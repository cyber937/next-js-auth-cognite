"use client"

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Nav() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <div>
          Singed in as {session.user?.email}
        </div>
        <button onClick={() => signOut({ callbackUrl: process.env.NEXT_PUBLIC_DOMAIN })}>
          Sign Out
        </button>
      </div>
    )
  }
  return (
    <div>
      <button onClick={() => signIn("cognito")}>
        Sign In
      </button>
    </div>
  )
}