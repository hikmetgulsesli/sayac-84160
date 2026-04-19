interface CounterDisplayProps {
  count: number
}

export default function CounterDisplay({ count }: CounterDisplayProps) {
  const isEmpty = count === 0

  if (isEmpty) {
    return (
      <div className="relative z-10 flex flex-col items-center mb-16">
        <h1 className="text-[140px] leading-none font-headline font-bold text-surface-tint tracking-tighter drop-shadow-lg tabular-nums">
          0
        </h1>
        <p className="font-label text-lg text-on-surface-variant mt-6 tracking-wide uppercase">
          Henüz başlanmadı
        </p>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center w-full mb-12">
      <h1 className="font-headline font-bold text-[160px] leading-none text-primary tracking-tighter drop-shadow-[0_0_60px_rgba(255,178,183,0.15)]">
        {count}
      </h1>
    </div>
  )
}
