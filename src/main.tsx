import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// added a non conflicting comment
function someStuff({ param, otherParam }: { param: string; otherParam: string }) {
    return param + otherParam;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
