import 'react-native-gesture-handler';
import { AppRoutes } from './src/routes';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
	<NativeBaseProvider>
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	</NativeBaseProvider>
  );
}