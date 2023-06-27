import { Flex, VStack, Text, Box } from "native-base";
import { IoIosCheckmark } from 'react-icons/io';

interface Props {
	spacing?: number;
}

export function HabitCard({ spacing }: Props) {
	return (
		<Flex
			direction="row"
			alignItems="center"
			fontFamily="Lexend Deca"
			justifyContent="space-between"
			p="10px"
			ml='2.5vw'
			mb={spacing ? `${spacing * (spacing/2)}px` : undefined}
			w='95vw'
		>
			<VStack space="1">
				<Text fontSize="19.98px" fontWeight="400">
					Título do hábito
				</Text>
				<Box>
					<Text>Título do hábito</Text>
					<Text>Título do hábito</Text>
				</Box>
			</VStack>
			<Flex h='69px' w='69px' bgColor='#E7E7E7' borderColor='#EBEBEB' borderWidth='1px' justifyContent='center' alignItems='center' borderRadius='10px'>
				<IoIosCheckmark size={60} color='white' />
			</Flex>
		</Flex>
	);
}
