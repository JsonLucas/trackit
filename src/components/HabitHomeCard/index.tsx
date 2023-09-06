import { Flex, VStack, Text, Box, useToast, Spinner, Center } from "native-base";
import { IoIosTrash } from "react-icons/io";
import { weekDays } from "../../constants";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getHabits } from "../../services/habit";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export function HabitHomeCard() {
	const { getLocalStorageData } = useLocalStorage();
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState();
	const toast = useToast();
	const dispatch = useDispatch();

	useEffect(() => {
		setIsLoading(true);
		(async () => {
			const access = await getLocalStorageData('accessToken');
			if (access) {
				try {
					const habitRes = await getHabits();
					// dispatch(getHabitsAction(habitRes.data));
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
		setIsLoading(false);
	}, [data]);

	return (
		<>
			{isLoading && <Center><Spinner /></Center>}
			{!isLoading &&
				<VStack fontFamily='Lexend Deca' pt="10px" pb='10px'>
					{!data && <Text fontSize='17.98px' fontWeight='400' color='#666666'>
						Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
					</Text>}
					{data && <>
						<Flex direction="row" alignItems="center" justifyContent="space-between">
							<Text fontSize='19.98px' color='#666666' fontWeight='400'>Nome do hábito aqui</Text>
							<IoIosTrash size={22} color="black" />
						</Flex>
						<Flex direction="row" justifyContent='space-around'>
							{weekDays.map((item, index) => (
								<Box
									key={`${index}-${item}`}
									p="10px"
									borderRadius="5px"
									borderWidth="1px"
									borderColor="#D4D4D4"
									color="#D4D4D4"
									fontSize='19px'
								>
									{item.charAt(0)}
								</Box>
							))}
						</Flex>
					</>}
				</VStack>
			}
		</>
	);
}
