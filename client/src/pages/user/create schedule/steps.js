import { Col, Row, Steps } from 'antd'
import './createSchedule.css'

export default function FormSteps () {
    return (
        <Row>
            <Col className='steps' xl={18}>
                <Steps progressDot current={0}>
                    <Steps.Step title='Tạo đăng ký' />
                    <Steps.Step title='Thêm thành viên' />
                    <Steps.Step title='Kiểm tra' />
                </Steps>
            </Col>
        </Row>
    )
}
