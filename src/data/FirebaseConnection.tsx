import { collection, addDoc, Timestamp } from "firebase/firestore";
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
