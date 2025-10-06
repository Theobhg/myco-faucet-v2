import { useState } from 'react'

import { Footer, Header, Main } from './components/sections'
import { mint } from './services/web3-service'

export function App() {
  const [message, setMessage] = useState<{ message: string; error: boolean }>({
    message: '',
    error: false,
  })

  async function handleConnectToMetaMask() {
    setMessage({ message: 'Requesting your tokens... wait a moment...', error: false })
    try {
      const tx = await mint()
      setMessage({ message: `Your tokens are on the way. Transaction hash: ${tx}`, error: false })
    } catch (error: any) {
      console.log(error)
      setMessage({ message: `Error: ${error.message}`, error: true })
    }
  }

  return (
    <div className="h-[calc(100vh-224px)]">
      <Header />
      <Main handleConnectToMetaMask={handleConnectToMetaMask} message={message} />
      <Footer />
    </div>
  )
}
