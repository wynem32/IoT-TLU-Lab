import { Calendar, Layout } from 'antd';

const { Content } = Layout

export default function LabSchedule() {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    }

    return (
        <Layout>
            <Content>
                Lab schedule
            </Content>
        </Layout>
    )
}