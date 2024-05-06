'use client'
import { signOut } from '@/app/auth';
import React from 'react'

export default function Signouttest() {
  return (
    <div>

        <form action={async () => {await signOut();}}>
          <button className="ml-4 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-700 hover:text-white">
          Sign Out
          </button>
        </form>

    </div>
  )
}
