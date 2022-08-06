import React, { useEffect, useState } from 'react'
import { createcategory, deleteactegory, getcategories, selectcategories, selectdatachanged } from '../../features/categories/categoriesSlice';
import { Badge, Button, Table, Tooltip } from 'antd';
import { PlusOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {

    const dispatch = useDispatch()

    const categories = useSelector(selectcategories)
    const datachanged = useSelector(selectdatachanged)


    useEffect(() => {

        dispatch(getcategories())
    }, [datachanged])

  
    const [displayform, setdisplayform] = useState(false);

    const [name, setname] = useState('');
    const [icon, seticon] = useState(null);

    const addcategory = () => {
        const data = new FormData()

        data.append('name', name)
        data.append('image', icon)

        dispatch(createcategory(data))
        setdisplayform(false)
    }


    const columns = [
        {
            title: 'Icon',
            key: 'icon',
            dataIndex: 'icon',
            render: (text, record) => (
                <>
                    <img style={{ height: "25px", width: '25px' }} src={"http://localhost:5000/getfile/" + record.icon} alt="" />
                </>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },

        {
            title: 'Delete',
            key: 'delete',
            dataIndex: 'delete',
            render: (text, record) => (
                <>
                    <DeleteOutlined onClick={() => dispatch(deleteactegory(record._id))}  style={{ color: 'red', cursor: 'pointer' }} />
                </>
            ),
        },
    ];

    return (
        <div className='container'>

            <h2>Categories <Badge count={categories.length} /></h2>


            <Tooltip title="search">
                <Button style={{ background: `${displayform ? 'red' : 'blue'}` }} onClick={() => setdisplayform(!displayform)} type="primary" shape="circle" icon={displayform ? <CloseOutlined /> : <PlusOutlined />} />
            </Tooltip>


            {displayform && <div style={{ marginTop: "20px" }}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input value={name} onChange={(e) => setname(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="product name" />
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input onChange={(e) => seticon(e.target.files[0])} class="form-control" type="file" id="formFile" />
                </div>
                <Button onClick={() => addcategory()} style={{ marginTop: '15px' }} type="primary">Create</Button>
            </div>}

            <Table style={{ marginTop: '15px' }} columns={columns} dataSource={categories} />

        </div>
    )
}

export default Categories
