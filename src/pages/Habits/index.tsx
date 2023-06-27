import { ScrollView, Box, Text } from "native-base";
import { Header } from "../../components/Header";
import { HabitCard } from "../../components/HabitCard";
import { Footer } from "../../components/Footer";
import { weekDays } from "../../constants";
import { useFonts } from "expo-font";
import LxdDeca from '../../../assets/lexend-deca/LexendDeca-VariableFont_wght.ttf';
import dayjs from "dayjs";

export function Habits({ navigation }: any) {
	const date = new Date();
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
				<Text color='#126BA5' fontSize='22.98px' fontFamily='Lexend Deca'>
					{weekDays[date.getDay()]}, {dayjs(date).format('DD/MM')}
				</Text>
				<Text color='#BABABA' fontSize='17.98px' fontWeight='400'>
					Nenhum hábito foi concluído ainda.
				</Text>
			</Box>
			<ScrollView size='lg'>
				<HabitCard spacing={5} />
			</ScrollView>
			<Footer navigation={navigation} />
		</>
	);
}