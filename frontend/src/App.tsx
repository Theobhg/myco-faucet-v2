import { useState } from 'react'

import { Footer, Header, Main } from './components/sections'
import { mint } from './services/web3'

export function App() {
  const [captcha, setCaptcha] = useState<string>('')
  const [message, setMessage] = useState<{ message: string; error?: boolean }>({
    message: '',
    error: false,
  })

  function onChange(value: string | null) {
    setCaptcha(value || '')
  }

  async function handleConnectToMetaMask() {
    setMessage({ message: 'Requesting your tokens... wait a moment...' })
    try {
      if (!captcha) {
        setMessage({ message: 'Please verify you are not a robot', error: true })
        return
      }

      const { tx } = await mint()
      setMessage({ message: `Your tokens were sent to ${localStorage.getItem('wallet')}. Transaction hash: ${tx}` })
    } catch (error: any) {
      console.error(error)
      setMessage({
        message: error.message
          ? `Error: ${error.response?.data?.message || error.message}`
          : `Error: ${error.response?.data?.message} - ${error.response?.data?.error.cause.errorArgs[0]}`,
        error: true,
      })
    }
  }

  return (
    <div className="h-[calc(100vh-236px)] container mx-auto">
      <Header />
      <Main handleConnectToMetaMask={handleConnectToMetaMask} message={message} onChange={onChange} />
      <Footer />
    </div>
  )
}
