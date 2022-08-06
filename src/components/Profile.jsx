import React, { useEffect } from 'react'
import { Descriptions } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getme, selectautheduser, uploadavatar } from '../features/users/usersSlice';
import { CameraOutlined } from '@ant-design/icons';
const Profile = () => {

    const dispatch = useDispatch()

    const user = useSelector(selectautheduser)

    useEffect(() => {
        dispatch(getme())
    }, []);

    const changeavatar = (e) => {

        const data = new FormData()

        data.append('avatar', e.target.files[0])


        dispatch(uploadavatar(data))
    }

    return (
        <>

            {user && <div className='container'>
                <div style={{ dispaly: 'flex', flexDirection: 'column', justifyContent: "center" }}  >
                    <div>
                        <Avatar
                            size={160}
                            src={'http://localhost:5000/getfile/' + user.avatar}
                        />
                    </div>
                    <div style={{ dispaly: "flex", justifyContent: 'center' }} >
                        <CameraOutlined onClick={() => document.getElementById('upload').click()} style={{ fontSize: "25px", color: "orange", cursor: 'pointer' }} />
                    </div>
                    <input onChange={(e) => changeavatar(e)} type="file" id="upload" hidden />
                </div>

                <Descriptions style={{ marginTop: "50px" }} title="User Info">
                    <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                    <Descriptions.Item label="Email">{user.email}</Descriptions.Item>

                </Descriptions>
            </div>}
        </>
    )
}

export default Profile
