import { Flex, Box, Text } from 'native-base';
import { useFonts } from 'expo-font';
import PlayballFont from '../../../assets/fonts/playball/Playball-Regular.ttf';

export function Header() {
	const [fontsLoaded] = useFonts({
		'playball': PlayballFont,
	});

	if (!fontsLoaded) {
		return <Box>Failed to load the fonts files.</Box>;
	}

	return (
		<Flex direction='row' justifyContent='space-between' alignItems='center' p='10px' bgColor='#126BA5'>
			<Text fontWeight='400' fontSize='38.98px' fontFamily='playball' color='white'>Trackit</Text>
			<Box borderRadius='50%' h='51px' w='51px' bgColor='aqua'></Box>
		</Flex>
	);
}