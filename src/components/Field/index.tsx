import { Control, FieldValues, useController } from "react-hook-form";
import { Input } from 'native-base';

interface Props {
	control: Control<FieldValues, any>,
	name: string,
	placeholder: string,
	type: "text" | "password",
}

export function Field({ control, name, placeholder, type }: Props) {
	const { field } = useController({
		control, defaultValue: '', name
	});
	return (
		<Input value={field.value} onChangeText={field.onChange} placeholder={placeholder} type={type} />
	);
}