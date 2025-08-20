import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { delectCharacter, setCharacters, setEmplyCharacter} from "./ChraracterSlcie";
import { startChatacters } from "../../helpers/startCharacters";





export const createNewFavorite = (characterss) => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;    

        const newDoc = doc(collection(FirebaseDB, `${uid}/Favorite/characters`));
        
        const newCharacter = {
            ...characterss,
            dni: newDoc.id   // ✅ asignamos el ID antes de guardar
        };


        await setDoc(newDoc, newCharacter);
        
        dispatch(setCharacters(newCharacter));
    }
}

// export const createNewFavorite = (characterss) => {
//     return async(dispatch, getState) => {

//         const {uid} = (getState().auth);    

    
//         const newDoc = doc( collection( FirebaseDB, `${uid}/Favorite/characters`));

//         // newCharacter.dni = newDoc.id;

//             const newCharacter = {
//             ...characterss,
//             dni:null    

//         };

//          dispatch(setCharacters(newCharacter));

   
        // await setDoc(newDoc, newCharacter);


        // dispatch(setCharacters(newCharacter))
    
       
    



export const startLoadingCharacters = () => {
        return async (dispatch,getState) =>{
            const {uid} = (getState().auth);  
          
           
          const notes = await startChatacters(uid)
       
            dispatch(setEmplyCharacter(notes))
            
        }
}

// export const startDeletCharacter = (id) => {
//   return async (dispatch, getState) => {
//     const { uid } = getState().auth;

//     // 🔥 ruta correcta
//     const docRef = doc(FirebaseDB, `Favorite/${uid}/characters/${id}`);
//     await deleteDoc(docRef);

//     dispatch(delectCharacter(id));
//     console.log("Eliminado:", id);
//   };
// };
export const startDeletCharacter = () => {
    return async(dispatch,getState) => {
        const {uid} = (getState().auth);
        const {active: acti} = getState().characters;
        const docRef = doc(  FirebaseDB, `${uid}/Favorite/characters/${acti.dni}`);
        await deleteDoc(docRef);
        dispatch(delectCharacter(acti.dni))
    
    }
}

// export const startDeletCharacter = (id) => {
//   return async (dispatch, getState) => {
//     const { uid } = getState().auth;

//     const docRef = doc(FirebaseDB, `${uid}/Favorite/characters/${id}`);
//     await deleteDoc(docRef);

//     dispatch(delectCharacter(id));
//     console.log("Eliminado:", id);
//   };
// };