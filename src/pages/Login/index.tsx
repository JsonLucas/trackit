import { Flex, Image, VStack, Button, Text, Box } from 'native-base';
import { useForm } from 'react-hook-form';
import { Field } from '../../components/Field';
import HomeIcon from '../../../assets/home-icon.svg';

export function Login({ navigation }: any) {
	const { control, handleSubmit } = useForm();
	const login = async (data: any) => {
		console.log(data);
		navigation.navigate('Home');
	}
	return (
		<Flex h='100%' w='100%' bgColor='white' alignItems='center' justifyContent='center' safeAreaTop>
			<Image h='180px' w='180px' source={HomeIcon} alt='Home Icon' />
			<VStack space={2} w='90%'>
				<Box>
					<Field name='email' placeholder='Email. . .' control={control} type='text' />
				</Box>
				<Box>
					<Field name='password' placeholder='Password. . .' control={control} type='password' />
				</Box>
				<Box>
					<Button onPress={handleSubmit(login)} bgColor='#52B6FF'>
						<Text color='white' fontSize='20.98px' fontWeight='400' w='100%'>Entrar</Text>
					</Button>
				</Box>
				<Text onPress={() => navigation.navigate('SignUp')} fontSize='13.98px' fontWeight='400' color='#52B6FF' textDecoration='underline' w='100%' textAlign='center'>
					Não tem uma conta? Cadastre-se!
				</Text>
			</VStack>
		</Flex>
	);
}