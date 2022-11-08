import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Move this to env variables
const firebaseConfig = {
    apiKey: 'AIzaSyCMhZ1bH7YcFBUSosNro4kWXnd6-_4ruyw',
    authDomain: 'gastos-ad836.firebaseapp.com',
    projectId: 'gastos-ad836',
    storageBucket: 'gastos-ad836.appspot.com',
    messagingSenderId: '1033625427074',
    appId: '1:1033625427074:web:3138ebe3c6bc00b9dde89b',
    measurementId: 'G-P7NS73LHR1',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const fs = getFirestore(app);
