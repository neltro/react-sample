import { useContext } from 'react';
import { AuthContext } from '../context/auth-context'

const useAuthContext = () => {
    const [state, setState] = useContext(AuthContext);
    function setAuth(login){
        setState({...state, isAuth: login});
    }
    return {
        setAuth: setAuth,
        isAuth: state.isAuth
    }
}
export default useAuthContext;