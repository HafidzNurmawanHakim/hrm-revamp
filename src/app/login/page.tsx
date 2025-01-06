import Image from "next/image";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const LoginForm = dynamic(() => import("@/components/ui/auth/LoginForm"));

function LoginPage() {
	return (
		<div className="h-full h-screen flex items-center justify-center bg-soft-gray">
			<div className=" w-11/12 md:w-4/5 lg:w-4/5 xl:w-3/5 lg:max-h-[32rem] 2xl:max-h-[40rem] shadow-xl flex justify-center lg:h-3/4 h-fit xl:h-4/5 bg-white rounded-xl">
				<LoginForm />
				<div
					className={cn("hidden lg:block w-1/2 h-full relative p-3")}
				>
					<div className="w-full h-full bg-soft-gray rounded-xl relative">
						<Image
							src={"/assets/images/common/login.png"}
							alt="login"
							fill
							className="object-contain mx-auto "
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
