import { Col, Form, Input, Row, DatePicker } from 'antd'
import './createSchedule.css'

const { TextArea } = Input
export default function FormCreate(props) {
    const { onChangeDayStart, onChangeDayEnd } = props
    return (
        <>
            <Row>
                <Col className='form' xl={22}>
                    <Form className='form__row'>
                        <Col xl={10}>
                            <Form.Item className='form__row-input' label='User Name'>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xl={10}>
                            <Form.Item className='form__row-input' label='User Code'>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Form>
                    <Form className='form__row'>
                        <Col xl={10}>
                            <Form.Item className='form__row-input' label='Phone'>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xl={10}>
                            <Form.Item className='form__row-input' label='Email'>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Form>
                    <Form className='form__row'>
                        <Col xl={10}>
                            <Form.Item className='form__row-input' label='Day Start'>
                                <DatePicker showTime onChange={onChangeDayStart} />
                            </Form.Item>
                        </Col>
                        <Col xl={10}>
                            <Form.Item className='form__row-input' label='Day End'>
                                <DatePicker showTime onChange={onChangeDayEnd} />
                            </Form.Item>
                        </Col>
                    </Form>
                    <Form className='form__row'>
                        <Col xl={24}>
                            <Form.Item className='form__row-input' label='Purpose'>
                                <TextArea 
                                    rows={4}
                                />
                            </Form.Item>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </>
    )
}