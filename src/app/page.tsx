import { getServerAuthSession } from "@/server/auth";

export default async function HomePage() {
	return (
		<main className="flex h-screen items-center justify-center">
			Bienvenido al sistema
		</main>
	);
}
