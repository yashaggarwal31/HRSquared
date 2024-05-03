'use server'
import React from 'react'
import { handleSubmit } from './page'

export async function component (res) {
  console.log('component ', res)
  handleSubmit(res)
}
