import AsyncStorage from "@react-native-async-storage/async-storage"
import { Toast } from "native-base";

export const useLocalStorage = () => {
    const setLocalStorageData = async (key: string, value: any) => {
        try{
            await AsyncStorage.setItem(key, JSON.stringify(value));
            return;
        }catch(e: any){
            console.log(e);
            Toast.show({
                title: 'Erro ao gravar informação.',
                description: e.message,
                duration: 3000,
                color: 'error.500'
            });
        }
    }

    const getLocalStorageData = async (key: string) => {
        try{
            const item = await AsyncStorage.getItem(key);
            if(item) return JSON.parse(item);
            
            return null;
        }catch(e: any){
            console.log(e);
            Toast.show({
                title: 'Erro ao gravar token.',
                description: e.message,
                duration: 3000,
                color: 'error.500'
            });
        }}

    return { setLocalStorageData, getLocalStorageData };
}