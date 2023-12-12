import { initializeApp, cert, getApps } from "firebase-admin/app";

export function initialFirebase() {
  if (getApps().length <= 0) {
    initializeApp({
      credential: cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: process.env.PRIVATE_KEY,
      }),
    });
  }
}
