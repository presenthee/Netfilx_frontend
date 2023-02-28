import Link from "next/link";

export default function Navbar() {
	return (
		<nav>
			<div>
				<Link href="/">홈</Link>
				<Link href="party/register">파티추가</Link>
				<Link href="party/info">MY파티</Link>
				<Link href="guide">가이드</Link>
			</div>
		</nav>
	);
}
