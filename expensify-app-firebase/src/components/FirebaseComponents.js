import { DatabaseProvider, useFirebaseApp, AuthProvider } from 'reactfire';
import { getDatabase } from 'firebase/database'; // Firebase v9+
import AppRouter from '../routers/AppRouter';
import { getAuth } from 'firebase/auth';

const FirebaseComponents = ({ children }) => {
    const app = useFirebaseApp(); // a parent component contains a `FirebaseAppProvider`

    // initialize Database and Auth with the normal Firebase SDK functions
    const database = getDatabase(app);
    const auth = getAuth(app)
    // any child components will be able to use `useUser`, `useDatabaseObjectData`, etc
    return (
        <AuthProvider sdk={auth}>
            <DatabaseProvider sdk={database}>
                <AppRouter />
            </DatabaseProvider>
        </AuthProvider>
    );
}

export default FirebaseComponents