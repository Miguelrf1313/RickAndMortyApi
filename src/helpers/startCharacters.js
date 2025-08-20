import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"





export const startChatacters = async(uid) =>{

    const collectionRef = collection(FirebaseDB,`${uid}/Favorite/characters`);
    const docs = await getDocs(collectionRef);
    const notes = []
    docs.forEach(doc => {
        
        notes.push({...doc.data()})
    })
    
   
 
    return notes;
}