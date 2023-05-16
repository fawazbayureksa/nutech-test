import React, { useState } from 'react';
import Template from '../../../components/template/dashboard/template';
import Modal from '../../../components/helpers/Modal';
import ModalComponent from '../../../components/helpers/Modal';

const Product = () => {

    const [show, setShow] = useState(false)


    const handleClose = () => {
        setShow(!show);
    }

    return (
        <Template>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <span className='brand-dashbord text-dark'>
                    Product List
                </span>
                <button className='btn btn-primary btn-md h-50' onClick={() => setShow(true)}>Create Product</button>
            </div>
            <div className='w-100 mt-3'>
                <table class="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nama Barang</th>
                            <th>Foto Barang</th>
                            <th>Harga Beli</th>
                            <th>Harga Jual</th>
                            <th>Stok</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Tshirt Polos</td>
                            <td>
                                <img
                                    src="/images/tshirt1.jpg"
                                    className='p-1'
                                />
                            </td>
                            <td>Rp100.000</td>
                            <td>Rp110.000</td>
                            <td>10</td>
                            <td className='d-flex justify-content-center'>
                                <button className='btn btn-warning btmn-sm me-3'>Edit</button>
                                <button className='btn btn-danger btmn-sm'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ModalComponent
                title={"Add Product"}
                content={
                    <div className=''>
                        <div className='form-group'>
                            <input
                                name="productName"
                                type="text"
                                className="form-control mb-3"
                                placeholder="Product Name"
                            />
                            <div>
                                <label className='mb-2'>Image Product</label>
                                <input
                                    name="imageName"
                                    type="file"
                                    className="form-control mb-3"
                                // onChange={}
                                />
                            </div>
                            <input
                                name="purchasingPrice"
                                type="text"
                                className="form-control mb-3"
                                placeholder="Purchasing Price"
                            // onChange={}
                            />
                            <input
                                name="sellingPrice"
                                type="text"
                                className="form-control mb-3"
                                placeholder="Selling Price"
                            // onChange={}
                            />
                            <input
                                name="stock"
                                type="text"
                                className="form-control mb-3"
                                placeholder="Stock"
                            // onChange={}
                            />
                        </div>
                    </div>
                }
                show={show}
                handleClose={handleClose}

            />
        </Template>
    );
}

export default Product;
