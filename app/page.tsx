import SignIn from "@/components/login/use-cases/sign-in";
import UserAvatar from "@/components/login/use-cases/avatar";
export default function Home() {
	return (
		<div>
			<UserAvatar />
			<SignIn />
		</div>
	);
}
