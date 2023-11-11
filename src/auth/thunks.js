
import { registerWithEmailPassword, singInWihtFacebook, singInWihtGoogle, loginWithEmailPassword, logOutFire } from "../firebase/providers"
import { inlogin, inlogout, checkincredential} from '../store/auth/AuthSlice'



export const loginAuthenticate = (email, password) => {
    return async dispatch => {
        dispatch (checkincredential()) 
    }
}


export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkincredential())
        const result = await singInWihtGoogle()
        {
           if (!result.ok ) return dispatch( inlogout(result.errorMessage))
           dispatch( inlogin(result))

        } 
    }
}


export const startFacebookSingIn = () => {
    return async(dispatch) => {
        dispatch(checkincredential())
        const resp = singInWihtFacebook()
    }
}



export const startCreatingUserWithEmailPassword = ({ email, displayName, password}) =>{
    return async( dispatch ) => {

        dispatch( checkincredential() );

        const {uid, ok, photoURL, errorMessage} = await registerWithEmailPassword({ email, password, displayName });
        if ( !ok ) return dispatch(inlogout( {errorMessage} ) );

        dispatch( inlogin( {uid, displayName, email, photoURL}))

    
            }
}


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkincredential() );
        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( inlogout( result.errorMessage ) );
        dispatch( inlogin( result ));

    }
}

export const startLogOut = () => {
    return async(dispatch) => {
        await logOutFire()

        dispatch(inlogout())
    }
}