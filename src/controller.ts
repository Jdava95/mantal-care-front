import "firebase/compat/firestore";
import "firebase/compat/auth";

import { initializeApp } from "firebase/app";
import { getAuth, User } from "firebase/auth";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

export const API_KEY = process.env.API_KEY as string;
export const AUTH_DOMAIN = process.env.AUTH_DOMAIN as string;
export const PROJECT_ID = process.env.PROJECT_ID as string;
export const STORAGE_BUCKET = process.env.STORAGE_BUCKET as string;
export const MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID as string;
export const APP_ID = process.env.APP_ID as string;
export const MEASUREMENT_ID = process.env.MEASUREMENT_ID as string;

const appSettings = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
};

export const app = initializeApp(appSettings);
export const firestore = getFirestore(app);

export const auth = getAuth(app);

// db requests
export const questionsCollection = collection(firestore, "questions");

export const userDataCollection = collection(firestore, "user-data");

export const setAnswer = (
    collect: string,
    document: string,
    data: Array<Record<string, string>>
) => setDoc(doc(firestore, collect, document), { answers: data });

export const getCurrentUser = (collect: string, user: string) =>
    doc(firestore, collect, user);

export const createNewUser = (user: User) =>
    setDoc(doc(firestore, "user-data", user?.email as string), {
        answers: {},
        info: {
            email: user?.email,
            name: user?.displayName,
            uuid: user?.uid,
        },
        settings: {
            init: false,
        },
        createdAt: Date.now(),
    });
