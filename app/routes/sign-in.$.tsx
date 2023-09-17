import { SignIn, useAuth } from "@clerk/remix"

export default function SignInPage() {
	return (
		<div className="flex flex-row min-h-screen justify-center items-center" style={{ border: "2px solid blue", padding: "2rem" }}>
			<SignIn routing={"path"} path={"/sign-in"} />
		</div>
	)
}