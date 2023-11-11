
import {useSelector, useDispatch} from 'react-redux'

import { onAuthStateChanged } from 'firebase/auth'
import { FireBaseAuth } from '../firebase/config'
import { inlogin, inlogout } from '../store/auth/AuthSlice'
import { useEffect } from 'react'




export const useCheckAuth = () => {
    const dispatch = useDispatch()

    const {status} = useSelector(state => state.auth)
  
  
    useEffect(() => {
      onAuthStateChanged(FireBaseAuth, async(user) => {
        if (!user) return dispatch(inlogout());
        const {uid, displayName, photoURL} = user;
        dispatch(inlogin({uid, displayName, photoURL}))
      })
    }, [])
    
  
    return {
        status
    }

}
