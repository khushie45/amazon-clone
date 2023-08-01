import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StateProvider } from "./StateProvider"
import reducer, { initialState } from "./reducer"
import ErrorBoundary from './ErrorBoundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback="404 Error">
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)