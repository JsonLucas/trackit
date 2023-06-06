import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';

const Tabs = createBottomTabNavigator();

export function AppRoutes() {
	return (
		<NavigationContainer>
			<Tabs.Navigator screenOptions={{ header: () => <></>, tabBarStyle: { display: 'none' } }}>
				<Tabs.Screen name="Login" component={Login} />
				<Tabs.Screen name="SignUp" component={SignUp} />
				<Tabs.Screen name="Home" component={Home} />
			</Tabs.Navigator>
		</NavigationContainer>
	);
}