import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

const rootEl = document.getElementById('root')

if (!rootEl) {
  document.body.innerHTML =
    '<div style="padding:2rem;font-family:sans-serif;color:#fca5a5;background:#0a0f1c;min-height:100vh">' +
    '<h1>FocusRecall AI — root element missing</h1>' +
    '<p>index.html does not contain <code>&lt;div id="root"&gt;&lt;/div&gt;</code>.</p></div>'
} else {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
  )
}
