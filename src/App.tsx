import { useState } from 'react'
import CounterDisplay from './components/CounterDisplay'
import CounterControls from './components/CounterControls'

export default function App() {
  const [count, setCount] = useState(0)

  function handleIncrement(amount: number) {
    setCount(prev => prev + amount)
  }

  function handleDecrement() {
    setCount(prev => Math.max(0, prev - 1))
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <div className="bg-background text-on-surface font-body h-screen flex flex-col overflow-hidden antialiased select-none">
      <header className="bg-[#0c0c1f] flex justify-between items-center w-full px-8 py-6 top-0">
        <div className="flex items-center">
          <span className="text-[#fc536d] font-bold text-2xl tracking-widest font-headline">SAYAC</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            aria-label="Geçmiş"
            className="text-[#37374d] hover:text-[#fc536d] transition-colors flex items-center justify-center w-10 h-10 rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>history</span>
          </button>
          <button
            aria-label="Ayarlar"
            className="text-[#37374d] hover:text-[#fc536d] transition-colors flex items-center justify-center w-10 h-10 rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center px-8 pb-32 pt-8 relative w-full max-w-md mx-auto">
        <CounterDisplay count={count} />
        <CounterControls
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        />
      </main>

      <nav
        className="bg-[#0c0c1f]/80 backdrop-blur-xl shadow-[0_-12px_40px_rgba(0,0,0,0.4)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 rounded-t-[32px] md:hidden"
        aria-label="Alt gezinti"
      >
        <button
          aria-label="Sayaç"
          className="flex flex-col items-center justify-center bg-[#fc536d] text-white rounded-2xl px-6 py-2 w-24 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <span className="material-symbols-outlined text-2xl mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
          <span className="font-label font-medium text-[10px] uppercase tracking-widest">Sayaç</span>
        </button>
        <button
          aria-label="Geçmiş"
          className="flex flex-col items-center justify-center text-[#37374d] px-6 py-2 hover:bg-[#1e1e32] rounded-2xl w-24 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          <span className="material-symbols-outlined text-2xl mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>history</span>
          <span className="font-label font-medium text-[10px] uppercase tracking-widest">Geçmiş</span>
        </button>
        <button
          aria-label="Profil"
          className="flex flex-col items-center justify-center text-[#37374d] px-6 py-2 hover:bg-[#1e1e32] rounded-2xl w-24 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          <span className="material-symbols-outlined text-2xl mb-1" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
          <span className="font-label font-medium text-[10px] uppercase tracking-widest">Profil</span>
        </button>
      </nav>
    </div>
  )
}
