import { initializeApp, cert, getApps } from "firebase-admin/app";
const {privateKey}=JSON.parse(process.env.FIREBASE_PRIVATE_KEY as string);

export function initialFirebase() {
  if (getApps().length <= 0) {
    initializeApp({
      credential: cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey,
      }),
    });
  }
}
