import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('renders a div with full-screen black background classes', () => {
    render(<App />)
    const container = document.querySelector('.bg-black')
    expect(container).not.toBeNull()
    expect(container.classList.contains('h-screen')).toBe(true)
    expect(container.classList.contains('w-screen')).toBe(true)
  })

  it('renders amber-coloured text class on the container', () => {
    render(<App />)
    const container = document.querySelector('.text-amber-400')
    expect(container).not.toBeNull()
  })

  it('renders the greeting text', () => {
    render(<App />)
    expect(screen.getByText(/hi bitch/i)).toBeInTheDocument()
  })

  it('snapshot matches', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
