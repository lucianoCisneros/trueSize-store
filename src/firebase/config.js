const getEnv = (key) => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(
      `Falta la variable ${key}. Copia .env.example a .env.local y completa los valores de Firebase.`
    );
  }
  return value;
};

export const firebaseConfig = {
  apiKey: getEnv('VITE_FIREBASE_API_KEY'),
  authDomain: getEnv('VITE_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnv('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: getEnv('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnv('VITE_FIREBASE_APP_ID'),
};
