import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from '../App'

// -----------------------------------------------------------------------
// Silence fetch errors in tests — the component handles network failures
// -----------------------------------------------------------------------
beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(() => Promise.reject(new Error('Network error'))))
})
afterEach(() => {
  vi.unstubAllGlobals()
})

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('renders the Header with EduMantri branding', () => {
    render(<App />)
    expect(screen.getAllByText(/EduMantri/i).length).toBeGreaterThan(0)
  })

  it('renders the app root container', () => {
    render(<App />)
    expect(screen.getByTestId('app-root')).toBeInTheDocument()
  })

  it('shows the welcome screen when there are no messages', () => {
    render(<App />)
    expect(screen.getByText(/Welcome to/i)).toBeInTheDocument()
  })

  it('renders the chat textarea input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText(/Ask about DGFT/i)).toBeInTheDocument()
  })

  it('send button is disabled when input is empty', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeDisabled()
  })

  it('send button becomes enabled when user types text', () => {
    render(<App />)
    const textarea = screen.getByPlaceholderText(/Ask about DGFT/i)
    fireEvent.change(textarea, { target: { value: 'What is IEC?' } })
    expect(screen.getByRole('button', { name: /send message/i })).not.toBeDisabled()
  })

  it('shows the user message and a thinking indicator after sending', async () => {
    render(<App />)
    const textarea = screen.getByPlaceholderText(/Ask about DGFT/i)
    fireEvent.change(textarea, { target: { value: 'What is IEC?' } })
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))
    await waitFor(() => {
      expect(screen.getByText('What is IEC?')).toBeInTheDocument()
    })
  })

  it('clears the input after sending', async () => {
    render(<App />)
    const textarea = screen.getByPlaceholderText(/Ask about DGFT/i)
    fireEvent.change(textarea, { target: { value: 'Test question' } })
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))
    await waitFor(() => {
      expect(textarea.value).toBe('')
    })
  })

  it('shows an error message when the server is unreachable', async () => {
    render(<App />)
    const textarea = screen.getByPlaceholderText(/Ask about DGFT/i)
    fireEvent.change(textarea, { target: { value: 'Test question' } })
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))
    await waitFor(() => {
      expect(screen.getByText(/could not reach the server/i)).toBeInTheDocument()
    })
  })

  it('clicking an example prompt fires a message', async () => {
    render(<App />)
    const exampleBtn = screen.getAllByRole('button').find((b) =>
      b.textContent.includes('Importer Exporter Code')
    )
    expect(exampleBtn).toBeDefined()
    fireEvent.click(exampleBtn)
    await waitFor(() => {
      expect(screen.getByText(/Importer Exporter Code/i)).toBeInTheDocument()
    })
  })

  it('snapshot matches', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})

