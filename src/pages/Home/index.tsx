import { VStack, Box, useToast } from "native-base";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BodyHome } from "../../components/BodyHome";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getHabits } from "../../services/habit";
import { useDispatch } from 'react-redux';
import { getHabitsAction } from "../../redux/actions/habitsAction";
import LxdDeca from '../../../assets/lexend-deca/LexendDeca-VariableFont_wght.ttf';

export function Home({ navigation }: any) {
	const [fontsLoaded] = useFonts({
		'Lexend Deca': LxdDeca,
	});
	const { getLocalStorageData } = useLocalStorage();
	const [isLoading, setIsLoading] = useState(false);
	const toast = useToast();
	const dispatch = useDispatch();

	if (!fontsLoaded) {
		return <Box>Failed to load the fonts files.</Box>;
	}

	return (
		<>
			<Header navigation={navigation} />
			<VStack flex={1} fontFamily='Lexend Deca'>
				<BodyHome />
			</VStack>
			<Footer navigation={navigation} />
		</>
	);
}