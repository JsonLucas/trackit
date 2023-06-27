import { useFonts } from 'expo-font';
import { Box, Text, VStack } from 'native-base';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import LxdDeca from '../../../assets/lexend-deca/LexendDeca-VariableFont_wght.ttf';

export function History({ navigation }: any) {
	const [fontsLoaded] = useFonts({
		'Lexend Deca': LxdDeca,
	});

	if (!fontsLoaded) {
		return <Box>Failed to load the fonts files.</Box>;
	}
	
	return (
		<>
			<Header navigation={navigation} />
			<Box w='95vw' mt='20px' ml='2.5vw' p='10px'>
				<Text color='#126BA5' fontSize='22.98px' fontFamily='Lexend Deca'>Histórico</Text>
			</Box>
			<VStack w='100%' p='20px' flex={1}>
				<Text fontSize='17.98px' fontFamily='Lexend Deca' color='#666666'>
				Em breve você poderá ver o histórico dos seus hábitos aqui!
				</Text>
			</VStack>
			<Footer navigation={navigation} />
		</>
	);
}