import { Layout } from "antd";
import FormCreate from "./formCreate";
import ListMember from './listMemberRegister'

const { Content } = Layout

export default function CreateSchedule() {
    const onChangeDayStart = (e) => {
        console.log(e ? e.format('YYYY-MM-DD') : undefined)
    }

    const onChangeDayEnd = (e) => {
        console.log(e ? e.format('YYYY-MM-DD') : undefined)
    }
    return (
        <Layout>
            <Content>
                <FormCreate 
                    onChangeDayStart={onChangeDayStart}
                    onChangeDayEnd={onChangeDayEnd}
                />
                <ListMember />
            </Content>            
        </Layout>
    )
}