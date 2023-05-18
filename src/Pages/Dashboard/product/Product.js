import {
    addDoc,
    collection,
    collectionGroup,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
    query,
    updateDoc,
    where
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Template from '../../../components/template/dashboard/template';
import Modal from '../../../components/helpers/Modal';
import Paginate from '../../../components/helpers/Paginate';
import ModalComponent from '../../../components/helpers/Modal';
import firebase, { storage } from '../../../Firebase';
import { CurrencyFormat } from '../../../components/currencyFormat';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Product = () => {
    const db = getFirestore(firebase);

    const [show, setShow] = useState(false)
    const [modalConfirm, setModalConfirm] = useState(false)
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [image, set_image] = useState()
    const [product_name, set_product_name] = useState()
    const [purchase_price, set_purchase_price] = useState()
    const [selling_price, set_selling_price] = useState()
    const [stock, set_stock] = useState()
    const [ids, set_ids] = useState()
    const [url, set_url] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(5);

    useEffect(() => {
        getData();

    }, [currentPage]);


    const getData = async () => {
        const arr = [];
        const querySnapshot = await getDocs(collection(db, "product"));
        querySnapshot.forEach((doc) => {
            arr.push({ data: doc.data(), id: doc.id });
        });
        const indexOfLastData = currentPage * dataPerPage;
        const indexOfFirstData = indexOfLastData - dataPerPage;
        const currentData = arr.slice(indexOfFirstData, indexOfLastData);
        setData(currentData)
    }


    const handleSave = () => {
        const query = addDoc(collection(db, "product"), {
            image_product: image.name,
            product_name: product_name,
            purchase_price: purchase_price,
            selling_price: selling_price,
            stock: stock,
            url: url
        });
        setShow(false);
        getData()
    }

    const handleUpload = (e) => {
        const imageSize = Math.floor(e.size / 1024);

        const validExtensions = ['.jpg', '.jpeg', '.png'];
        const fileExtension = e.name.substring(e.name.lastIndexOf('.')).toLowerCase();

        // console.log(imageSize)
        // console.log(validExtensions.includes(fileExtension))
        // return

        if ((imageSize <= 100) && (validExtensions.includes(fileExtension) === true)) {
            const imageRef = ref(storage, `images/${e.name}`);
            set_image(e)

            uploadBytes(imageRef, e).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    console.log(url);
                    set_url(url)
                });
            });
        } else {
            alert("The file must be smaller than 100kb and be of jpg and png type!")
            return
        }
    }

    const handleClose = () => {
        setShow(false);
        set_ids()
        set_product_name();
        set_purchase_price();
        set_selling_price();
        set_stock();
        set_url();
    }


    const handleEdit = (item) => {
        set_product_name(item.data.product_name);
        set_purchase_price(item.data.purchase_price);
        set_selling_price(item.data.selling_price);
        set_url(item.data.url);
        set_stock(item.data.stock);
        set_ids(item.id)
        setShow(true);

    }
    const handleButtonEdit = () => {
        const productRef = doc(db, "product", ids);
        updateDoc(productRef, {
            image_product: image.name,
            product_name: product_name,
            purchase_price: purchase_price,
            selling_price: selling_price,
            stock: stock,
            url: url
        });
        handleClose()
        set_ids()
        getData();
    }

    const handleButtonDelete = (id) => {
        set_ids(id);
        setModalConfirm(true);
    }

    const handleDelete = () => {
        deleteDoc(doc(db, "product", ids));
        setModalConfirm(false);
        getData()
    }


    return (
        <Template>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <span className='brand-dashbord text-dark'>
                    Product List
                </span>
                <button className='btn btn-primary btn-md h-50' onClick={() => setShow(true)}>Create Product</button>
            </div>
            <div className='w-25'>
                <input
                    name="search"
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className='w-100 mt-3'>
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Product Picture</th>
                            <th>Purchase Price</th>
                            <th>Selling Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 && data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.data.product_name}</td>
                                <td width={"30%"}>
                                    <img
                                        src={`${item.data.url}` || "/images/no-image.png"}
                                        className='img-thumbnail w-25'
                                    />
                                </td>
                                <td>Rp{CurrencyFormat(item.data.purchase_price)}</td>
                                <td>Rp{CurrencyFormat(item.data.selling_price)}</td>
                                <td>{item.data.stock}</td>
                                <td className='d-flex justify-content-center'>
                                    <button className='btn btn-warning btmn-sm me-3' onClick={() => handleEdit(item)}>Edit</button>
                                    <button className='btn btn-danger btmn-sm' onClick={() => handleButtonDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Paginate
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
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
                                value={product_name}
                                onChange={(e) => set_product_name(e.target.value)}
                            />
                            <div>
                                <label className='mb-2'>Image Product</label>
                                <input
                                    name="imageName"
                                    type="file"
                                    className="form-control mb-3"
                                    onChange={(e) => handleUpload(e.target.files[0])}
                                />
                                {url &&
                                    <img
                                        src={`${url}`}
                                        className='p-1 img-thumbnail w-25'
                                    />
                                }
                            </div>
                            <input
                                name="purchasingPrice"
                                type="number"
                                className="form-control mb-3"
                                placeholder="Purchasing Price"
                                value={purchase_price}
                                onChange={(e) => set_purchase_price(e.target.value)}
                            />
                            <input
                                name="sellingPrice"
                                type="number"
                                className="form-control mb-3"
                                placeholder="Selling Price"
                                value={selling_price}
                                onChange={(e) => set_selling_price(e.target.value)}
                            />
                            <input
                                name="stock"
                                type="number"
                                className="form-control mb-3"
                                placeholder="Stock"
                                value={stock}
                                onChange={(e) => set_stock(e.target.value)}
                            />
                        </div>
                    </div>
                }
                show={show}
                handleClose={handleClose}
                handleSave={!ids ? handleSave : handleButtonEdit}
            // handleSave={handleUpload}

            />
            <ModalComponent
                title={"Delete Product"}
                content={
                    <div className=''>
                        <p>Are you sure for delete this product?</p>
                    </div>
                }
                show={modalConfirm}
                handleClose={() => setModalConfirm(false)}
                handleSave={handleDelete}

            />
        </Template>
    );
}

export default Product;
