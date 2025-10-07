import ReCAPTCHA from 'react-google-recaptcha'

import { LiquidEther } from '../liquid-ether'
import { Button } from '../ui/button'

type MainProps = {
  handleConnectToMetaMask: () => void
  message: { message: string; error: boolean }
  onChange: (value: string | null) => void
}

export function Main({ handleConnectToMetaMask, message, onChange }: MainProps) {
  return (
    <>
      <div style={{ width: '100%', height: 1000, position: 'absolute', top: 0, left: 0 }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <main className="bg-background h-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 z-99999">
        <div className="flex flex-col items-center justify-center gap-12 bg-white/2 backdrop-blur-2xl border border-border rounded-2xl p-8 w-full h-160">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-primary text-5xl font-bold">Get your MyCoins</h2>
            <p className="text-muted-foreground text-xl w-124 text-center">
              Once a day, you can claim 10.000 coins. Is free just connecting your MetaMask wallet.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-primary font-bold text-xl px-8 py-8 text-primary-foreground hover:bg-primary/90 rounded-2xl gap-3 transition-all duration-300"
            onClick={handleConnectToMetaMask}
          >
            <img src="/meta-mask.svg" alt="MetaMask Logo" className="w-8 h-8" />
            Get MYCO tokens
          </Button>
          {message && (
            <div
              className={`flex flex-col items-center justify-center gap-4 max-w-5xl  ${message.error && 'border-3 border-red-500 bg-amber-700/20'} p-6 rounded-2xl`}
            >
              <p className={`text-xl w-full text-center break-all ${message.error ? 'text-red-500' : 'text-primary'}`}>
                {message.message}
              </p>
            </div>
          )}
          <ReCAPTCHA sitekey={`${import.meta.env.VITE_RECAPTCHA_KEY}`} onChange={onChange} theme="dark" type="image" />
        </div>
      </main>
    </>
  )
}
