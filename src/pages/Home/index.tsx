import { VStack } from "native-base";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BodyHome } from "../../components/BodyHome";

export function Home() {
	return (
		<>
			<Header />
			<VStack flex={1}>
				<BodyHome />
			</VStack>
			<Footer />
		</>
	);
}