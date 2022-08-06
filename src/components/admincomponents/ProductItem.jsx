import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react'

const ProductItem = ({ product }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <div class="col-sm-4">
                <div class="product-image-wrapper">
                    <div class="single-products">
                        <div class="productinfo text-center">
                            <img src={'http://localhost:5000/getfile/' + product.image} alt="" />
                            <h2>${product.price}</h2>
                            <p>{product.name}</p>
                        </div>
                        <div class="product-overlay">
                            <div class="overlay-content">
                                <h2>${product.price}</h2>
                                <p>{product.name}</p>
                            </div>
                        </div>
                    </div>
                    <div class="choose">
                        {/*<ul class="nav nav-pills nav-justified">
                            <li><a onClick={()=> showModal()} ><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                            <li><a href=""><i class="fa fa-plus-square"></i>Add to compare</a></li>
    </ul>*/}
                    </div>
                </div>
            </div>


          {/*  <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
</Modal>*/}


        </div>
    )
}

export default ProductItem
