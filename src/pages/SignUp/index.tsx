import { Flex, Image, VStack, Input, Button, Text, Box, useToast, Spinner } from 'native-base';
import { useForm, useController } from 'react-hook-form';
import { Field } from '../../components/Field';
import { signUpRequest } from '../../services/user';
import { useState } from 'react';
import HomeIcon from '../../../assets/home-icon.svg';

export function SignUp({ navigation }: any) {
	const { control, handleSubmit } = useForm();
	const [isLoading, setIsLoading] = useState(false);
	const toast = useToast();
	const signUp = async (data: any) => {
		setIsLoading(true);
		try{
			const signUpRes = await signUpRequest(data);
			toast.show({
				title: signUpRes.message,
				duration: 3000,
				color: 'success.500'
			});
			navigation.navigate('Login');
		}catch(e: any) {
			console.log(e);
			toast.show({
				title: 'Erro ao criar usuário',
				description: e.message,
				duration: 3000,
				color: 'error.500'
			});
		}
		setIsLoading(false);
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
					<Button onPress={handleSubmit(signUp)} disabled={isLoading} bgColor='#52B6FF'>
						{!isLoading && <Text color='white' fontSize='20.98px' fontWeight='400' w='100%'>Entrar</Text>}
						{isLoading && <Spinner color='white' size={20} />}
					</Button>
				</Box>
				<Text onPress={() => navigation.navigate('Login')} fontSize='13.98px' fontWeight='400' color='#52B6FF' textDecoration='underline' w='100%' textAlign='center'>
					Já possui uma conta? Faça login!
				</Text>
			</VStack>
		</Flex>
	);
}