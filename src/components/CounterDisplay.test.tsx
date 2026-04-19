import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CounterDisplay from './CounterDisplay'

describe('CounterDisplay', () => {
  it('boş durum: 0 gösterir ve açıklama metni vardır', () => {
    render(<CounterDisplay count={0} />)
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText(/henüz başlanmadı/i)).toBeInTheDocument()
  })

  it('pozitif sayıyı büyük fontla gösterir', () => {
    render(<CounterDisplay count={42} />)
    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('negatif sayıyı gösterir', () => {
    render(<CounterDisplay count={-5} />)
    expect(screen.getByText('-5')).toBeInTheDocument()
  })

  it('sıfırda boş durum metni gösterir, sıfır olmadığında göstermez', () => {
    const { rerender } = render(<CounterDisplay count={0} />)
    expect(screen.getByText(/henüz başlanmadı/i)).toBeInTheDocument()

    rerender(<CounterDisplay count={1} />)
    expect(screen.queryByText(/henüz başlanmadı/i)).not.toBeInTheDocument()
  })

  it('büyük sayıları doğru gösterir', () => {
    render(<CounterDisplay count={9999} />)
    expect(screen.getByText('9999')).toBeInTheDocument()
  })
})
