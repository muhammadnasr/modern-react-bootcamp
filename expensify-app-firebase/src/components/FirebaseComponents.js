import { DatabaseProvider, useFirebaseApp } from 'reactfire';
import { getDatabase } from 'firebase/database'; // Firebase v9+
import AppRouter from '../routers/AppRouter';

const FirebaseComponents =({ children }) => {
    const app = useFirebaseApp(); // a parent component contains a `FirebaseAppProvider`

    // initialize Database and Auth with the normal Firebase SDK functions
    const database = getDatabase(app);
    // any child components will be able to use `useUser`, `useDatabaseObjectData`, etc
    return (
        <DatabaseProvider sdk={database}>
            <AppRouter/>
        </DatabaseProvider>
    );
}

export default FirebaseComponents