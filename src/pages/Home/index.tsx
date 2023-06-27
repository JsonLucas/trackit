import { VStack, Box } from "native-base";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BodyHome } from "../../components/BodyHome";
import { useFonts } from "expo-font";
import LxdDeca from '../../../assets/lexend-deca/LexendDeca-VariableFont_wght.ttf';

export function Home({navigation}: any) {
	const [fontsLoaded] = useFonts({
		'Lexend Deca': LxdDeca,
	});

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