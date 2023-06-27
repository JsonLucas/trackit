import { VStack, Flex, Text, Box, IconButton, Button, ScrollView } from 'native-base';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { weekDays } from '../../constants';
import { HabitHomeCard } from '../HabitHomeCard';
import { Field } from '../Field';
import { useForm } from 'react-hook-form';

export function BodyHome() {
	const [showCard, setShowCard] = useState(false);
	const { control, handleSubmit } = useForm();
	return (
		<VStack space='md' fontFamily='Lexend Deca' p='10px'>
			<Flex direction='row' justifyContent='space-between' alignItems='center'>
				<Text color='#52B6FF' fontSize='22.98px' fontWeight='400'>Meus hábitos</Text>
				<IconButton children={<AiOutlinePlus color='white' size={22} />} bgColor='#52B6FF' onPress={() => setShowCard(!showCard)} />
			</Flex>
			<VStack w='100%' p='10px' space='4' display={showCard ? undefined : 'none'}>
				<Field control={control} name='name' placeholder='Nome do hábito' type='text' />
				<Flex direction='row' justifyContent='space-around' alignItems='center'>
					{weekDays.map((item, index) => <Box key={`${item}-${index}`} p='10px' borderRadius='5px'  borderWidth='1px' borderColor='#D4D4D4' color='#D4D4D4' fontSize='19px'>{item.charAt(0)}</Box>)}
				</Flex>
				<Flex direction='row-reverse' alignItems='center'>
					<Button bgColor='#52B6FF' fontSize='15.98px' fontWeight='400' color='white'>Salvar</Button>
					<Text color='#52B6FF' fontSize='15.98px' fontWeight='400' p='10px'>Cancelar</Text>
				</Flex>
			</VStack>
			<Text fontSize='17.98px' fontWeight='400' color='#666666'>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
			<ScrollView size='lg' w='100%'>
				<HabitHomeCard />
			</ScrollView>
		</VStack>
	);
}