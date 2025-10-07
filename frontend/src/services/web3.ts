import Web3 from 'web3'

import { httpClient } from './http-client'

export async function mint() {
  const nextMint = localStorage.getItem('next-mint')

  if (nextMint && parseInt(nextMint) > Date.now()) {
    throw new Error('You can only mint once per day. Try again tomorrow.')
  }

  if (!window.ethereum) {
    throw new Error('MetaMask is not installed.')
  }

  const web3 = new Web3(window.ethereum)
  const accounts = await web3.eth.requestAccounts()

  if (!accounts || !accounts.length) {
    throw new Error('No account allowed.')
  }

  localStorage.setItem('wallet', accounts[0])
  localStorage.setItem('next-mint', `${Date.now() + 1 * 24 * 60 * 60 * 1000}`)

  const response = await httpClient.post(`/mint/${accounts[0]}`)

  return response.data
}
