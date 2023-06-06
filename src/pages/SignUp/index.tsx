import { Flex, Image, VStack, Input, Button, Text, Box } from 'native-base';
import { useForm, useController } from 'react-hook-form';
import { Field } from '../../components/Field';
import HomeIcon from '../../../assets/home-icon.svg';

export function SignUp({ navigation }: any) {
	const { control, handleSubmit } = useForm();
	const signUp = async (data: any) => {
		console.log(data);
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
					<Field name='name' placeholder='Name. . .' control={control} type='text' />
				</Box>
				<Box>
					<Field name='picture' placeholder='Picture. . .' control={control} type='text' />
				</Box>
				<Box>
					<Button onPress={handleSubmit(signUp)} bgColor='#52B6FF'>
						<Text color='white' fontSize='20.98px' fontWeight='400' w='100%'>Entrar</Text>
					</Button>
				</Box>
				<Text onPress={() => navigation.navigate('Login')} fontSize='13.98px' fontWeight='400' color='#52B6FF' textDecoration='underline' w='100%' textAlign='center'>
					Já possui uma conta? Faça login!
				</Text>
			</VStack>
		</Flex>
	);
}