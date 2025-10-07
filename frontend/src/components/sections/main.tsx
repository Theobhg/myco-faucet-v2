import { GetCoins, type GetCoinsProps } from '../get-coins'
import { LiquidEther } from '../liquid-ether'
import { UserGuide } from '../user-guide'

export function Main({ props }: { props: GetCoinsProps }) {
  return (
    <>
      <div style={{ width: '100%', height: 1000, position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
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
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 bg-white/2 backdrop-blur-2xl border border-border rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-full h-156">
          <GetCoins {...props} />
          <div className="hidden lg:block w-[1px] h-78 bg-border mx-8" />
          <UserGuide />
        </div>
      </main>
    </>
  )
}
