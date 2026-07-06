import { Layout, Flex, Anchor, Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Header } = Layout;

interface LinkItem {
	title: string,
	url: string
}

interface HeaderProps {
	logo?: {
		path: string,
		altText: string
	},
	links?: LinkItem[],
}

export default function CustomHeader({
	logo = { path: '/icons/logo.svg', altText: 'Логотип' },
	links = [
		{ title: "Главная", url: "/" },
		{ title: "О нас", url: "/about" }
	],
}: HeaderProps) {
	return (
		<Header>
			<Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
				<Image
					src={logo.path}
					alt={logo.altText}
					width={125}
					height={44}
					priority
				/>
			</Link>
			<Flex>
				<Anchor
					direction="horizontal"
					items={links.map((item, index) => ({
						key: String(index + 1),
						href: item.url,
						title: item.title
					}))}
				/>
				<Button type="primary">Записаться</Button>
			</Flex>
		</Header>
	);
}