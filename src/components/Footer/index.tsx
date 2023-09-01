import { Flex, Text, Box, Progress } from "native-base";

export function Footer({ navigation }: any) {
	// colocar requisição aqui pra pegar quantos hábitos cumpriu
	return (
		<>
			<Progress max={100} value={40} color='#52B6FF' w='100%' />
			<Flex fontFamily='Lexend Deca' direction='row' justifyContent='space-around' alignItems='center' w='100%' bgColor='transparent' p='5px' pb='10px' pt='10px'>
				<Text color='#52B6FF' fontSize='17.98px' fontWeight={400} onPress={() => navigation.navigate('Habits')}>Hábitos</Text>
				<Text color='#52B6FF' fontSize='17.98px' fontWeight={400} onPress={() => navigation.navigate('History')}>Histórico</Text>
			</Flex>
		</>
	);
}