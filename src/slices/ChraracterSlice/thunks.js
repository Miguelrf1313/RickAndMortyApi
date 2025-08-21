import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { delectCharacter, setCharacters, setEmplyCharacter } from "./ChraracterSlcie";
import { startChatacters } from "../../helpers/startCharacters";


export const createNewFavorite = (characterss) => {
    return async (dispatch, getState) => {
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
export const startLoadingCharacters = () => {
    return async (dispatch, getState) => {
        const { uid } = (getState().auth);
        const notes = await startChatacters(uid)
        dispatch(setEmplyCharacter(notes))
    }
}
export const startDeletCharacter = (dni) => {
    return async (dispatch, getState) => {
        const { uid } = (getState().auth);
        const docRef = doc(FirebaseDB, `${uid}/Favorite/characters/${dni}`);
        await deleteDoc(docRef);
        dispatch(delectCharacter(dni))
    }
}

