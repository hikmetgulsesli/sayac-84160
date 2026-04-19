import { render, screen } from '@testing-library/react'
import { createElement } from 'react'
import { describe, it, expect } from 'vitest'
import CounterDisplay from '../components/CounterDisplay'

describe('CounterDisplay', () => {
  it('renders count value when count is positive', () => {
    render(createElement(CounterDisplay, { count: 42 }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('42')
  })

  it('renders count value when count is large', () => {
    render(createElement(CounterDisplay, { count: 999 }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('999')
  })

  it('shows empty state message when count is zero', () => {
    render(createElement(CounterDisplay, { count: 0 }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('0')
    expect(screen.getByText(/Henüz başlanmadı/i)).toBeInTheDocument()
  })

  it('does not show empty state message when count is non-zero', () => {
    render(createElement(CounterDisplay, { count: 5 }))
    expect(screen.queryByText(/Henüz başlanmadı/i)).not.toBeInTheDocument()
  })

  it('renders count value 1 without empty state', () => {
    render(createElement(CounterDisplay, { count: 1 }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('1')
    expect(screen.queryByText(/Henüz başlanmadı/i)).not.toBeInTheDocument()
  })
})
