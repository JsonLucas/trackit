import { Flex, Text, Box } from "native-base";

export function Footer({navigation}: any) {
	return (
		<Flex fontFamily='Lexend Deca' direction='row' justifyContent='space-evenly' alignItems='center' w='100%' bgColor='transparent' padding='5px'>
			<Text color='#52B6FF' fontSize='17.98px' fontWeight={400} onPress={() => navigation.navigate('Habits')}>Hábitos</Text>
			<Box w='91px' h='91px' borderRadius='50%' bgColor='#52B6FF'></Box>
			<Text color='#52B6FF' fontSize='17.98px' fontWeight={400} onPress={() => navigation.navigate('History')}>Histórico</Text>
		</Flex>
	);
}