interface CounterControlsProps {
  onIncrement: (amount: number) => void
  onDecrement: () => void
  onReset: () => void
}

export default function CounterControls({ onIncrement, onDecrement, onReset }: CounterControlsProps) {
  return (
    <div className="w-full flex items-center justify-between gap-4">
      <button
        onClick={onDecrement}
        aria-label="Azalt"
        className="flex-1 flex flex-col items-center justify-center py-6 bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-colors shadow-[0_12px_40px_rgba(0,0,0,0.4)] group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <span
          className="material-symbols-outlined text-on-surface-variant text-3xl mb-2 group-hover:text-primary transition-colors"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          remove
        </span>
        <span className="font-label font-medium text-sm text-on-surface-variant tracking-wider uppercase">Azalt</span>
      </button>

      <button
        onClick={onReset}
        aria-label="Sıfırla"
        className="flex-none flex flex-col items-center justify-center w-24 py-6 bg-surface-container rounded-xl hover:bg-surface-container-high transition-colors shadow-[0_12px_40px_rgba(0,0,0,0.2)] group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <span
          className="material-symbols-outlined text-outline text-2xl mb-2 group-hover:text-on-surface transition-colors"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          refresh
        </span>
        <span className="font-label text-xs text-outline tracking-wider uppercase">Sıfırla</span>
      </button>

      <button
        onClick={() => onIncrement(1)}
        aria-label="Arttır"
        className="flex-[1.5] flex flex-col items-center justify-center py-6 bg-gradient-to-br from-primary to-primary-container rounded-xl shadow-[0_12px_40px_rgba(252,83,109,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        <span
          className="material-symbols-outlined text-on-primary-container text-4xl mb-1"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          add
        </span>
        <span className="font-label font-bold text-base text-on-primary-container tracking-widest uppercase">Arttır</span>
      </button>
    </div>
  )
}
