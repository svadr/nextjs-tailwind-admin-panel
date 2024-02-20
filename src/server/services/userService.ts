export const userService = {
	authenticate,
};

function authenticate(username: string, password: string) {
	if (username !== "admin" || password !== "admin") {
		console.log('is null')
		return null;
	}

	const calculateExpiration = (): string => {
		const now = new Date();
		now.setDate(now.getDate() + 30); // Add 30 days
		return now.toISOString();
	};

	const user = {
		id: "9001",
		name: "Web Admin",
		email: "admin@example.com",
		expires: calculateExpiration(),
	};

	return user;
}
