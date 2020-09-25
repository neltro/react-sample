import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

const SystemNavigator = createStackNavigator({
    Dashboard: DashboardScreen,
    Login: LoginScreen
},{
    initialRoutName: Login
});

export default createAppContainer(SystemNavigator);