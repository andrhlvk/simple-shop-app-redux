import { createAsyncThunk } from '@reduxjs/toolkit'
import { FIREBASE_DOMAIN } from '../KEYS'

export const fetchCartData = createAsyncThunk('cart/fetchData', async () => {
  const response = await fetch(`${FIREBASE_DOMAIN}`)
  if (!response.ok) throw new Error()
  const data = await response.json()
  return {
    items: data.items || [],
    totalQuantity: data?.totalQuantity || 0,
  }
})

export const sendCartData = createAsyncThunk('cart/sendData', async cart => {
  const config = {
    method: 'PUT',
    body: JSON.stringify({
      items: cart.items,
      totalQuantity: cart.totalQuantity,
    }),
  }
  const response = await fetch(`${FIREBASE_DOMAIN}`, config)
  if (!response.ok) throw new Error()
})
