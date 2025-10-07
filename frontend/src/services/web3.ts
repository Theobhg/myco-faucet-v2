import Web3 from 'web3'

import { httpClient } from './http-client'

export async function mint() {
  if (!window.ethereum) {
    throw new Error('MetaMask is not installed.')
  }

  const web3 = new Web3(window.ethereum)
  const accounts = await web3.eth.requestAccounts()

  if (!accounts || !accounts.length) {
    throw new Error('No account allowed.')
  }

  const response = await httpClient.post(`/mint/${accounts[0]}`)

  return response.data
}
