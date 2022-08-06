import { Badge, Table, Tag } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getclientorders, selectclientorders } from '../features/orders/ordersSlice';

const ClientOrder = () => {

    const dispatch  = useDispatch()

    const orders = useSelector(selectclientorders)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every second!');
            dispatch(getclientorders())
        }, 1000);
        return () => clearInterval(interval);
       
    }, []);

    const columns = [
        {
            title: 'Date',
            key: 'createdAt',
            dataIndex: 'createdAt'
        },
        {
            title: 'Products',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <>
                    {record.products.length}
                </>
            ),
        },
        {
            title: 'Total',
            dataIndex: 'total_price',
            key: 'total_price',
            render: (text, record) => (
                <>
                    ${record.total_price}
                </>
            ),
        },
        {
            title: 'Livred',
            key: 'livred',
            dataIndex: 'livred',
            render: (text, record) => (
                <>
                    {record.livred === 1 && <Tag color="cyan">in progress</Tag>}
                    {record.livred === 2 && <Tag color="lime">livred</Tag>}
                    {record.livred === 3 && <Tag color="red">canceled</Tag>}
                </>
            ),
        },
    ];

    return (
        <div className="container"  >
            <h2>Orders <Badge count={orders.length} showZero /></h2>
            <Table columns={columns} dataSource={orders} />

        </div>
    )
}

export default ClientOrder
