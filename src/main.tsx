import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN_HERE", // TODO: Replace with your actual DSN
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0, // Capture 100% of transactions for performance monitoring
  // We recommend adjusting this value in production
});

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
