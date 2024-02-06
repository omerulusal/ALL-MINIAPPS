import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const istemci = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={istemci}>
        <App />
    </QueryClientProvider>
)
