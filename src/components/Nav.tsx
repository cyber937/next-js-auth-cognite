"use client"

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Nav() {
  const { data: session } = useSession()

  console.log(session)

  let authButton: React.ReactElement | null = null;

  if (!session) {
    authButton = (
      <button onClick={() => signIn("cognito")}>
        Sign In
      </button>
    )
  } else {
    authButton = (
      <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}>
        Sign Out
      </button>
    )
  }

  return (
    <div>
      {authButton}
    </div>
  )
}