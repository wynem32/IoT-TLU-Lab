import { Col, Form, Input, Row, DatePicker, Typography, Checkbox, Button } from 'antd'
import './createSchedule.css'

const { TextArea } = Input
export default function FormCreate(props) {
    const { data,
            onChangeUserName,
            onChangeUserCode,
            onChangePhone,
            onChangeEmail,
            onChangeDayStart,
            onChangeDayEnd,
            onChangePurpose,
            onChangeCheckShare,
            onAddMember            
        } = props
    return (
        <>
            <Row>
                <Col className='form-create' xl={20}>
                    <Form
                        className='form'
                        name='form'
                        layout='vertical'
                        onFinish={onAddMember}
                    >
                        <Col className='form__row' xl={24}>
                            <Col xl={10}>
                                <Form.Item 
                                    className='form__row-input'
                                    name='username'
                                    label='User Name'
                                    onChange={e => onChangeUserName(e)}
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input placeholder='Fill your name...' />
                                </Form.Item>
                            </Col>
                            <Col xl={10}>
                                <Form.Item 
                                    className='form__row-input'
                                    name='usercode'
                                    label='User Code'
                                    onChange={e => onChangeUserCode(e)}
                                    rules={[{ required: true, message: 'Please input your code!' }]}
                                >
                                    <Input placeholder='Fill your code...' />
                                </Form.Item>
                            </Col>
                        </Col>
                        <Col className='form__row' xl={24}>
                            <Col xl={10}>
                                <Form.Item 
                                    className='form__row-input'
                                    name='phone'
                                    label='Phone'
                                    onChange={e => onChangePhone(e)}
                                    rules={[{ required: true, message: 'Please input your phone number!' },
                                            { pattern: /^(?:\d*)$/, message: 'It is not a valid phone number'}]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xl={10}>
                                <Form.Item 
                                    className='form__row-input'
                                    name='email'
                                    label='Email'
                                    onChange={e => onChangeEmail(e)}
                                    rules={[{ required: true, message: 'Please input your email!' },
                                            { type: 'email', message:'It is not a valid email'}]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Col>
                        <Col className='form__row' xl={24}>
                            <Col xl={10}>
                                <Form.Item 
                                    className='form__row-input'
                                    name='dayStart'
                                    label='Day Start'
                                    rules={[{ required: true, message: 'Please choose the date!' }]}
                                >
                                    <DatePicker showTime onChange={onChangeDayStart} />
                                </Form.Item>
                            </Col>
                            <Col xl={10}>
                                <Form.Item 
                                    className='form__row-input'
                                    name='dayEnd'
                                    label='Day End'
                                    rules={[{ required: true, message: 'Please choose the date!' }]}
                                >
                                    <DatePicker showTime onChange={onChangeDayEnd} />
                                </Form.Item>
                            </Col>
                        </Col>
                        <Col className='form__row' xl={24}>
                            <Col xl={10}>
                               <Form.Item>
                               <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                               </Form.Item>
                            </Col>
                        </Col>
                    </Form> 
                </Col>
            </Row>
        </>
    )
}