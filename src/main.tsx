import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/main.scss';
import App from './App.tsx'
import { ErrorBoundary } from 'react-error-boundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
