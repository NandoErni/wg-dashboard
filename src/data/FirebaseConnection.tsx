import {
  collection,
  addDoc,
  Timestamp,
  doc,
  getDocs,
} from "firebase/firestore";
import { db, handleGoogleSignInIfNeeded } from "./Firestore";

export const AddImage = async (imageData: any) => {
  try {
    await handleGoogleSignInIfNeeded();
    const docRef = await addDoc(collection(db, "PhotoBoothImages"), {
      image: imageData,
      captureTimestamp: Timestamp.fromDate(new Date()),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const GetImages = async () => {
  try {
    await handleGoogleSignInIfNeeded();
    const docRef: any = collection(db, "PhotoBoothImages");
    const snapshot = await getDocs(docRef);

    return snapshot.docs.map((doc: any) => doc.data().image);
  } catch (e) {
    console.error("Error getting document: ", e);
  }
};
