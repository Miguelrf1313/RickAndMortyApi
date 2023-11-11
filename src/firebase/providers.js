import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FireBaseAuth } from "./config";



const googleProvider = new GoogleAuthProvider()


export const singInWihtGoogle = async () =>{
            try {
                const result = await signInWithPopup(FireBaseAuth,googleProvider )
                const {displayName, photoURL, uid, email} = result.user;
                return {
                    ok:true,
                    displayName, photoURL, uid, email
                    }
                
            } catch (error) {
                const errorCode = error.code
                const errorMessage = error.message
                return{
                    ok:false,
                    errorMessage,
                    errorCode
                }
            }
}

const facebookProvider = new FacebookAuthProvider()


export const singInWihtFacebook = async () =>{
            try {
                const result = await signInWithPopup(FireBaseAuth,facebookProvider )
                const user = result.user;
                console.log(user)
            } catch (error) {
                
            }
}


export const registerWithEmailPassword = async({email, displayName, password}) => {
    try {

        console.log({email, displayName, password})
        const resp = await createUserWithEmailAndPassword( FireBaseAuth, email, password );
        const { uid, photoURL } = resp.user;

        await updateProfile( FireBaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
    
        return { ok: false, errorMessage: error.message }
    }



}
export const loginWithEmailPassword = async({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword(FireBaseAuth,email, password );
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logOutFire = async() => {
        return await FireBaseAuth.signOut()
}