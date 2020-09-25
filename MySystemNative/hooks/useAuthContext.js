import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';

const useAuthContext = () => {
    const [state, setState] = useContext(AuthContext);
    function setAuthUser(user){
        console.log('inside autcontext');
        console.log(user);
        setState({...state, 
                  authUser: { 
                      email: user.email, 
                      name: user.name, 
                      token: user.token 
                    }});
    }
    return {
        setAuthUser: setAuthUser,
        authUser: state.authUser
    }
}
export default useAuthContext;