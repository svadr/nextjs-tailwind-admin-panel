"use client";

import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";

export default function SingIn() {
	const [userInfo, setUserInfo] = useState({ email: "", password: "" });
	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		const res = await signIn("credentials", { ...userInfo, redirect: false });
        console.log("🚀 ~ consthandleSubmit:FormEventHandler<HTMLFormElement>= ~ res:", res)
	};

	return (
		<div className="h-full w-full self-center">
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>
				<input
					type="email"
					placeholder="email"
					value={userInfo.email}
					onChange={({ target }) => {
						setUserInfo({ ...userInfo, email: target.value });
					}}
				/>
				<input
					type="password"
					placeholder="*******"
					value={userInfo.password}
					onChange={({ target }) => {
						setUserInfo({ ...userInfo, password: target.value });
					}}
				/>
				<input type="submit" value="Login" />
			</form>
		</div>
	);
}
