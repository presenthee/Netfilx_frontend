import Image from "next/image";

export default function Register() {
	return (
		<>
			<div>
				<Image
					src="/images/Netflix.jpg"
					height={50}
					width={50}
					alt="Netflix.jpg"
				/>
				<h5>넷플릭스</h5>
			</div>
			<div>
				<Image src="/images/Tving.jpg" height={50} width={50} alt="Tving.jpg" />
				<h5>티빙</h5>
			</div>
			<div>
				<Image src="/images/Wave.jpg" height={50} width={50} alt="Wave.jpg" />
				<h5>웨이브</h5>
			</div>
		</>
	);
}
