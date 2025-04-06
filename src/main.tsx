import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import Tracker from '@openreplay/tracker';

const tracker = new Tracker({
    projectKey: "qtaMMHXWdI8uLOZEot6S",
    __DISABLE_SECURE_MODE: true,
});

tracker.setUserID('personalblog_v1.0.ipfs');

//tracker.configure({
//    session: {
//        maskInputs: false,  // Mask sensitive form inputs
//    },
//});


tracker.start()


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
