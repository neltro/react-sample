import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import LoginText from '../components/LoginText';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

const SystemNavigator = createStackNavigator({
    DashboardScreen: Dashboard,
    LoginScreen: Login,
    LoginTextLink: LoginText
});

export default createAppContainer(SystemNavigator);