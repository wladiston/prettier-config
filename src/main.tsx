import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

function Blahablah({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
