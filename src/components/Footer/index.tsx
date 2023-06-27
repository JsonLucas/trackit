import { Flex, Text, Box } from "native-base";
import { useFonts } from "expo-font";
import LxdDeca from '../../../assets/lexend-deca/LexendDeca-VariableFont_wght.ttf';

export function Footer() {
	const [fontsLoaded] = useFonts({
		'Lexend Deca': LxdDeca,
	});

	if (!fontsLoaded) {
		return <Box>Failed to load the fonts files.</Box>;
	}

	return (
		<Flex direction='row' justifyContent='space-evenly' alignItems='center' w='100%' bgColor='transparent' padding='5px' fontFamily='Lexend Deca'>
			<Text color='#52B6FF' fontSize='17.98px' fontWeight={400}>Hábitos</Text>
			<Box w='91px' h='91px' borderRadius='50%' bgColor='#52B6FF'></Box>
			<Text color='#52B6FF' fontSize='17.98px' fontWeight={400}>Histórico</Text>
		</Flex>
	);
}