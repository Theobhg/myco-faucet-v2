import { Button } from '../ui/button'

type MainProps = {
  handleConnectToMetaMask: () => void
  message: { message: string; error: boolean }
}

export function Main({ handleConnectToMetaMask, message }: MainProps) {
  return (
    <main className="bg-background h-full max-w-7xl mx-auto flex flex-col items-center justify-center  gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-primary text-5xl font-bold">Get your MyCoins</h2>
        <p className="text-muted-foreground text-xl w-124 text-center">
          Once a day, you can claim 1000 coins. Is free just connecting your MetaMask wallet.
        </p>
      </div>
      <Button
        size="lg"
        className="bg-primary font-bold text-xl px-8 py-8 text-primary-foreground hover:bg-primary/90 rounded-2xl gap-3 transition-all duration-300"
        onClick={handleConnectToMetaMask}
      >
        <img src="/meta-mask.svg" alt="MetaMask Logo" className="w-8 h-8" />
        Connect MetaMask
      </Button>
      {message && (
        <div
          className={`flex flex-col items-center justify-center gap-4 max-w-5xl  ${message.error && 'border-3 border-red-500 bg-amber-700/20'} p-6 rounded-2xl`}
        >
          <p className={`text-xl pt-8 w-full text-center break-all ${message.error ? 'text-red-500' : 'text-primary'}`}>
            {message.message}
          </p>
        </div>
      )}
    </main>
  )
}
