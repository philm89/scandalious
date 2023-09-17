import { SignUp } from "@clerk/remix"

export default function SignUpPage() {
	return (
		<div className="flex flex-row min-h-screen justify-center items-center" style={{ border: "2px solid blue", padding: "2rem" }}>
			<SignUp routing={"path"} path={"/sign-up"} />
		</div>
	)
}