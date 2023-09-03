import { Flex, Image, VStack, Button, Text, Box, useToast, Spinner } from 'native-base';
import { useForm } from 'react-hook-form';
import { Field } from '../../components/Field';
import { signInRequest } from '../../services/user';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import HomeIcon from '../../../assets/home-icon.svg';

export function Login({ navigation }: any) {
	const { setLocalStorageData, getLocalStorageData } = useLocalStorage();
	const { control, handleSubmit } = useForm();
	const [isLoading, setIsLoading] = useState(false);
	const toast = useToast();
	const login = async (data: any) => {
		setIsLoading(true);
		try {
			const signInRes = await signInRequest(data);
			setLocalStorageData('accessToken', signInRes.data.accessToken);
			toast.show({
				colorScheme: 'success',
				title: signInRes.message,
				duration: 3000
			});
			navigation.navigate('Home');
		} catch (e: any) {
			console.log(e);
			toast.show({
				colorScheme: 'danger',
				title: 'Erro ao fazer login',
				description: e.message,
				duration: 3000
			});
		}
		setIsLoading(false);
	}

	useEffect(() => {
		(async () => {
			const access = await getLocalStorageData('accessToken');
			if (access) navigation.navigate('Home');
		})()
	}, []);

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
					<Button onPress={handleSubmit(login)} disabled={isLoading} bgColor='#52B6FF'>
						{!isLoading && <Text color='white' fontSize='20.98px' fontWeight='400' w='100%'>Entrar</Text>}
						{isLoading && <Spinner color='white' size={20} />}
					</Button>
				</Box>
				<Text onPress={() => navigation.navigate('SignUp')} fontSize='13.98px' fontWeight='400' color='#52B6FF' textDecoration='underline' w='100%' textAlign='center'>
					Não tem uma conta? Cadastre-se!
				</Text>
			</VStack>
		</Flex>
	);
}