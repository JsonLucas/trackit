import { useFonts } from 'expo-font';
import { VStack, Flex, Text, Box, IconButton, Input, Button } from 'native-base';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { weekDays } from '../../constants';
import LxdDeca from '../../../assets/lexend-deca/LexendDeca-VariableFont_wght.ttf';
import { HabitCard } from '../HabitCard';

export function BodyHome() {
	const [showCard, setShowCard] = useState(false);
	const [fontsLoaded] = useFonts({
		'Lexend Deca': LxdDeca,
	});

	if (!fontsLoaded) {
		return <Box>Failed to load the fonts files.</Box>;
	}

	return (
		<VStack space='md' fontFamily='Lexend Deca' p='10px'>
			<Flex direction='row' justifyContent='space-between' alignItems='center'>
				<Text color='#52B6FF' fontSize='22.98px' fontWeight='400'>Meus hábitos</Text>
				<IconButton children={<AiOutlinePlus color='white' size={22} />} bgColor='#52B6FF' onPress={() => setShowCard(!showCard)} />
			</Flex>
			<VStack w='100%' p='10px' space='4' display={showCard ? undefined : 'none'}>
				<Input placeholder='Nome do hábito' variant='filled' p='10px' />
				<Flex direction='row' justifyContent='space-around' alignItems='center'>
					{weekDays.map((item, index) => <Box key={`${item}-${index}`} p='10px' borderRadius='5px'  borderWidth='1px' borderColor='#D4D4D4' color='#D4D4D4' fontSize='19px'>{item.toUpperCase()}</Box>)}
				</Flex>
				<Flex direction='row-reverse' alignItems='center'>
					<Button bgColor='#52B6FF' fontSize='15.98px' fontWeight='400' color='white'>Salvar</Button>
					<Text color='#52B6FF' fontSize='15.98px' fontWeight='400' p='10px'>Cancelar</Text>
				</Flex>
			</VStack>
			<Text fontSize='17.98px' fontWeight='400' color='#666666'>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
			<HabitCard />
		</VStack>
	);
}