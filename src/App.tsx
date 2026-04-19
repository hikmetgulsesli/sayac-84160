import { useState } from 'react'
import CounterDisplay from './components/CounterDisplay'

export default function App() {
  const [count] = useState(0)
  return (
    <div className="bg-background text-on-surface font-body h-screen flex flex-col overflow-hidden antialiased select-none">
      <CounterDisplay count={count} />
    </div>
  )
}
