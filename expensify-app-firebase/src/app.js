import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { createRoot } from 'react-dom/client';
import React from 'react';
import { FirebaseAppProvider } from 'reactfire';
import FirebaseComponents from './components/FirebaseComponents';

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};

const root = createRoot(document.getElementById('app'));

root.render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <FirebaseComponents />
        </FirebaseAppProvider>
    </React.StrictMode>
);

