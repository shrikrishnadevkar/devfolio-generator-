import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Note: Config will be populated by AI Studio Build when terms are accepted.
let auth: any = null;
let db: any = null;

const initializeFirebase = async () => {
  try {
    const configPath = '../../firebase-applet-config.json';
    // @ts-ignore
    const configModule = await import(/* @vite-ignore */ configPath);
    const config = configModule.default;
    
    if (config) {
      const app = getApps().length === 0 ? initializeApp(config) : getApp();
      auth = getAuth(app);
      db = getFirestore(app);
      console.log("Firebase initialized successfully");
    }
  } catch (e) {
    console.warn("Firebase not configured or failed to load. Using fallback storage.");
  }
};

// Start initialization
initializeFirebase();

export { auth, db };
