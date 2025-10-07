import { CopyIcon } from 'lucide-react'
import { useState } from 'react'

import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export function UserGuide() {
  const [isCopied, setIsCopied] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTooltipOpen(true)
    setTimeout(() => {
      setIsCopied(false)
      setTooltipOpen(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col gap-4 items-center p-2 sm:p-4 w-full lg:w-auto">
      <a
        href="https://academy.binance.com/pt/articles/connecting-metamask-to-binance-smart-chain"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-300 text-sm sm:text-base lg:text-lg text-center font-bold underline hover:text-pink-500/80 transition-all duration-300 cursor-pointer px-2"
      >
        To test, add bsc testnet to your wallet following the official guide
      </a>
      <div className="flex flex-col gap-2 items-center w-full">
        <p className="text-muted-foreground text-sm sm:text-md text-center px-2">
          Dont forget to add the token contract address to your wallet
        </p>
        <p className="text-muted-foreground text-xs sm:text-sm lg:text-md flex items-center gap-2 break-all p-4 rounded-2xl border-2 border-dotted border-muted-foreground hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer mt-1 ">
          <Tooltip open={isCopied ? tooltipOpen : undefined} onOpenChange={setTooltipOpen}>
            <TooltipTrigger asChild>
              <CopyIcon
                className="w-4 h-4 cursor-pointer hover:text-primary transition-all duration-300 flex-shrink-0"
                onClick={() => handleCopyToClipboard('0xfe4Fce76FCC47469bCB0F92C8d0B95Fe26279782')}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{isCopied ? 'Copied!' : 'Click to copy'}</p>
            </TooltipContent>
          </Tooltip>

          <span className="break-all">0xfe4Fce76FCC47469bCB0F92C8d0B95Fe26279782</span>
        </p>
      </div>
    </div>
  )
}
