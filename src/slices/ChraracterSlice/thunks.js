import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { setCharacters, setEmplyCharacter} from "./ChraracterSlcie";
import { startChatacters } from "../../helpers/startCharacters";




export const createNewFavorite = (characterss) => {
    return async(dispatch, getState) => {

        const {uid} = (getState().auth);    

        const newCharacter = {
            ...characterss
        };
        
        
        const newDoc = doc( collection( FirebaseDB, `${uid}/Favorite/characters`));
        await setDoc(newDoc, newCharacter);
        // newCharacter.id = newDoc.id;
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