import { Layout, Col, Row } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWhatsapp,
    faTelegram,
    faVk,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import CustomHeader from "./ui/Header/CustomHeader";
const { Content, Footer } = Layout;


export default function AppLayout() {

    const currentYear = new Date().getFullYear();

    return (
        <Layout style={{ minHeight: '100vh' }} >
            <CustomHeader/>
            <Content>
            </Content>
            <Footer className="p-0!">
                <Row className="text-left">
                    <Col span={8}>
                        <span>HI-TECH</span>
                        <span>Текст</span>
                    </Col>
                    <Col span={8}>
                        <span>Меню</span>
                        <span>Текст</span>
                    </Col>
                    <Col span={8}>
                        <span>Контакты</span>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <FontAwesomeIcon icon={faTelegram} />
                        <FontAwesomeIcon icon={faVk} />
                    </Col>
                </Row>
                <span>© {currentYear} HI-TECH Clinic</span>
            </Footer>
        </Layout>
    )
}