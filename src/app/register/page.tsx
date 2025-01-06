import RegisterForm from "@/components/ui/auth/RegisterForm";
import Image from "next/image";
import Link from "next/link";

export default function page() {
	return (
		<div className="h-screen w-screen bg-soft-gray flex items-center justify-center">
			<div className="w-11/12 md:w-4/5 max-w-[51rem] h-fit xl:min-h-[33rem] shadow-xl bg-white overflow-hidden rounded-3xl pb-10 relative">
				<span className="size-64 rounded-full bg-soft-blue absolute -right-20 -top-48" />
				<span className="size-48 rounded-full bg-soft-blue absolute -left-20 -bottom-36" />

				<div className="w-full px-8 md:px-10 pt-10 flex flex-col-reverse md:flex-row justify-between">
					<div>
						<h2 className="text-xl font-bold mb-2 text-center">
							Yuk Isi Data Dirimu dengan Lengkap
						</h2>
						<p className="w-72 text-sm">
							Pastikan email dan nomor WhatsApp aktif dan bisa
							menerima pesan ya!
						</p>
					</div>
					<Link href={"/"}>
						<div className="relative h-8 w-32 mx-auto mb-4 md:mr-0 z-10">
							{/* <Image
								fill
								alt="logo-asn"
								className="object-cover"
								sizes="320px"
								src={"/static/icons/logo-akuasn.png"}
							/> */}
						</div>
					</Link>
				</div>
				<RegisterForm />
			</div>
		</div>
	);
}
