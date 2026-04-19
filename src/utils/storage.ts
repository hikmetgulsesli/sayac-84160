import type { CounterState } from '../types'

const STORAGE_KEY = 'sayac_state'

export function saveState(state: CounterState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Storage hatası sessizce yoksay
  }
}

export function loadState(): CounterState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as CounterState
  } catch {
    return null
  }
}

export function clearState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Storage hatası sessizce yoksay
  }
}
