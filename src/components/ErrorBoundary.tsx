import React from 'react'

interface State { hasError: boolean; message: string }
interface Props { children: React.ReactNode }

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, message: '' }
  }

  static getDerivedStateFromError(err: unknown): State {
    const message = err instanceof Error ? `${err.name}: ${err.message}` : String(err)
    return { hasError: true, message }
  }

  componentDidCatch(err: unknown) {
    console.error('FocusRecall render error:', err)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#fca5a5', background: '#0a0f1c', minHeight: '100vh' }}>
          <h1 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>FocusRecall AI failed to render</h1>
          <p style={{ color: '#94a3b8', marginBottom: '0.75rem' }}>Something went wrong while loading the study suite.</p>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '0.8rem', color: '#fda4af' }}>{this.state.message}</pre>
          <button
            onClick={() => this.setState({ hasError: false, message: '' })}
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#10b981', color: '#0a0f1c', border: 'none', borderRadius: '0.5rem', fontWeight: 700, cursor: 'pointer' }}
          >
            Try again
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
