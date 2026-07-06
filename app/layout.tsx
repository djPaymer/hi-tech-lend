import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry' ;  
import { ConfigProvider } from 'antd';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body>
				<AntdRegistry>
					<ConfigProvider
						theme={{
							token: {
							
							},
							components: {
								Anchor: {
									colorText: 'white'
								}
							}
						}}
					>
						{ children } 
					</ConfigProvider>
				</AntdRegistry>
			</body>
		</html>
	);
}
