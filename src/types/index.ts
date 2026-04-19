export interface CounterRecord {
  id: string
  value: number
  timestamp: number
}

export interface CounterState {
  count: number
  history: CounterRecord[]
}

export type CounterAction =
  | { type: 'INCREMENT'; amount: number }
  | { type: 'RESET' }
  | { type: 'LOAD'; state: CounterState }
