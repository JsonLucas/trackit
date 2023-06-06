import 'react-native-gesture-handler';
import { AppRoutes } from './src/routes';
import React from 'react';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
	<NativeBaseProvider>
		<AppRoutes />
	</NativeBaseProvider>
  );
}