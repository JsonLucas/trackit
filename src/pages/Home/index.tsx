import { VStack, Box, useToast } from "native-base";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BodyHome } from "../../components/BodyHome";
import { useFonts } from "expo-font";
import { useEffect } from "react";
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
	const toast = useToast();
	const dispatch = useDispatch();

	if (!fontsLoaded) {
		return <Box>Failed to load the fonts files.</Box>;
	}

	useEffect(() => {
		(async () => {
			const access = await getLocalStorageData('accessToken');
			if (access) {
				try {
					const habitRes = await getHabits();
					dispatch(getHabitsAction(habitRes.data));
				} catch (e: any) {
					console.log(e);
					toast.show({
						title: 'Não foi possível obter dados de hábitos.',
						description: e.message,
						colorScheme: 'danger',
						duration: 3000
					});
				}
			}
		})()
	}, []);

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