import ReCAPTCHA from 'react-google-recaptcha'

import { Button } from './ui/button'

export type GetCoinsProps = {
  handleConnectToMetaMask: () => void
  message: { message: string; error?: boolean }
  onChange: (value: string | null) => void
}

export function GetCoins({ handleConnectToMetaMask, message, onChange }: GetCoinsProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:gap-12 p-2 sm:p-4 w-full lg:w-auto">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Get your MyCoins</h2>
        <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-full sm:max-w-xl lg:w-124 text-center px-2">
          Once a day, you can claim 10.000 coins. Is free just connecting your MetaMask wallet.
        </p>
      </div>
      <Button
        size="lg"
        className="bg-primary font-bold text-lg sm:text-xl px-6 py-6 sm:px-8 sm:py-8 text-primary-foreground hover:bg-primary/90 rounded-2xl gap-3 transition-all duration-300 w-full sm:w-auto"
        onClick={handleConnectToMetaMask}
      >
        <img src="/meta-mask.svg" alt="MetaMask Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
        Get MYCO tokens
      </Button>
      {message && (
        <div
          className={`flex flex-col items-center justify-center gap-4 w-full max-w-full sm:max-w-2xl ${message.error && 'border-3 border-red-500 bg-amber-700/20'} p-4 sm:p-6 rounded-2xl`}
        >
          <p
            className={`text-base sm:text-lg lg:text-xl w-full text-center break-words ${message.error ? 'text-red-500' : 'text-primary'}`}
          >
            {message.message}
          </p>
        </div>
      )}
      <div className="flex justify-center w-full">
        <ReCAPTCHA sitekey={`${import.meta.env.VITE_RECAPTCHA_KEY}`} onChange={onChange} theme="dark" type="image" />
      </div>
    </div>
  )
}
