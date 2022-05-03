import { Col, Form, Row, Typography, Select, Table } from "antd";
import CustomizeTable from "../../../components/table/table";

const headCells = [
    {
        title: 'No',
        dataIndex: 'no',
        key: 'no'
    },
    {
        title: 'Equitment',
        dataIndex: 'equitment',
        key: 'equitment'
    },
    {
        title: 'Code',
        dataIndex: 'code',
        key: 'code'
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type'
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity'
    },
    {
        title: 'Note',
        dataIndex: 'note',
        key: 'note'
    }
]

export default function ListMember() {
    return (
        <>
            <CustomizeTable 
                headCells={headCells}
            />
        </>
    )
}