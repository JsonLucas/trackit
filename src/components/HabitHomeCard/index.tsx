import { Flex, VStack, Text, Box } from "native-base";
import { IoIosTrash } from "react-icons/io";
import { weekDays } from "../../constants";

export function HabitHomeCard() {
	return (
		<VStack fontFamily='Lexend Deca' p="10px">
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
		</VStack>
	);
}
