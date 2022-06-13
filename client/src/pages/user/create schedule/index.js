import { Layout } from "antd";
import { useState } from "react";
import FormCreate from "./formCreate";
import ListMember from './listMemberRegister'
import moment from "moment";
import FormSteps from "./steps";

const { Content } = Layout

export default function CreateSchedule() {
    const [creatorInfo, setCreatorInfo] = useState({
        userName: '',
        userCode: '',
        phone: 0,
        email: '',
        dayStart: moment(new Date()).format('YYYY-MM-DD'),
        timeStart: moment(new Date()).format('HH:MM:SS'),
        dayEnd: moment(new Date()).format('YYYY-MM-DD'),
        timeEnd: moment(new Date()).format('HH:MM:SS'),
        purpose: '',
        checkShare: false
    })
    const [listMember, setListMember] = useState([])
    console.log(creatorInfo)
    const onChangeUserName = (e) => {
        setCreatorInfo({
            ...creatorInfo,
            userName: e.target.value
        })
    }
    const onChangeUserCode = (e) => {
        setCreatorInfo({
            ...creatorInfo,
            userCode: e.target.value
        })
    }
    const onChangePhone = (e) => {
        setCreatorInfo({
            ...creatorInfo,
            phone: e.target.value
        })
    }
    const onChangeEmail = (e) => {
        setCreatorInfo({
            ...creatorInfo,
            email: e.target.value
        })
    }
    const onChangeDayStart = (e) => {
        setCreatorInfo({
            ...creatorInfo,
            dayStart: e ? e.format('YYYY-MM-DD') : moment(new Date()).format('YYYY-MM-DD')
        })
    }
    const onChangeDayEnd = (e) => {
        console.log(e ? e.format('YYYY-MM-DD') : undefined)
        console.log(e ? e.format('HH:MM:SS') : undefined)
    }
    const onChangePurpose = (e) => {
        setCreatorInfo({
            ...creatorInfo,
            purpose: e.target.value
        })
    }
    const onChangeCheckShare = (e) => {
        setCreatorInfo({
            ...creatorInfo,
            checkShare: e.target.checked
        })
    }
    const onAddMember = () => {
        // setListMember([
        //     ...listMember,
        //     {
        //         key: listMember.length + 1,
        //         no: listMember.length + 1,
        //         userName: creatorInfo.userName,
        //         userCode: creatorInfo.userCode,
        //         phone: creatorInfo.phone,
        //         purpose: creatorInfo.purpose
        //     }
        // ])
        console.log('abc')
    }
    return (
        <Layout>
            <Content>
                <FormSteps />
                <FormCreate
                    data={listMember} 
                    onChangeUserName={onChangeUserName}
                    onChangeUserCode={onChangeUserCode}
                    onChangePhone={onChangePhone}
                    onChangeEmail={onChangeEmail}
                    onChangeDayStart={onChangeDayStart}
                    onChangeDayEnd={onChangeDayEnd}
                    onChangePurpose={onChangePurpose}
                    onChangeCheckShare={onChangeCheckShare}
                    onAddMember={onAddMember}
                />
                {Array.isArray(listMember) && listMember.length !== 0 &&
                    <ListMember data={listMember} />
                }
            </Content>            
        </Layout>
    )
}