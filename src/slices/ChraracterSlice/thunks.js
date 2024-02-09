import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { delectCharacter, setCharacters, setEmplyCharacter} from "./ChraracterSlcie";
import { startChatacters } from "../../helpers/startCharacters";




export const createNewFavorite = (characterss) => {
    return async(dispatch, getState) => {

        const {uid} = (getState().auth);    

        const newCharacter = {
            ...characterss,
            dni:null    

        };
        
        
        const newDoc = doc( collection( FirebaseDB, `${uid}/Favorite/characters`));
        await setDoc(newDoc, newCharacter);
        newCharacter.dni = newDoc.id;
        dispatch(setCharacters(newCharacter))
    
       
    }
}


export const startLoadingCharacters = () => {
        return async (dispatch,getState) =>{
            const {uid} = (getState().auth);  
          
           
          const notes = await startChatacters(uid)
       
            dispatch(setEmplyCharacter(notes))
            
        }
}


export const startDeletCharacter = () => {
    return async(dispatch,getState) => {
        const {uid} = (getState().auth);
        const {active: acti} = getState().characters;
        const docRef = doc(  FirebaseDB, `${uid}/Favorite/characters/${acti.dni}`);
        await deleteDoc(docRef);
        dispatch(delectCharacter(acti.dni))
        console.log(acti.dni)
    }
}