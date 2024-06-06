import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
    const toastaddpro = () => toast("Thêm sản phẩm thành công!");
    const toastdelete = () => toast("Sản phẩm đã được xóa thành công!");

    // State to hold form data
    const [formData, setFormData] = useState({
        imageUrl: "",
        id: "",
        name: "",
        madeIn: "",
        topLevelCategory: "",
        secondLevelCategory: "",
        thirdLevelCategory: "",
        brand: "",
        colors: [
            { color: "", size: "", stock: "" },
            { color: "", size: "", stock: "" },
            { color: "", size: "", stock: "" },
        ],
        quantity: "",
        price: "",
        discount: "",
        totalPrice: "", // mơi thêm vào
        description: "",
    });

    // Calculate total price when price or discount changes
    useEffect(() => {
        if (formData.price && formData.discount) {
            const price = parseFloat(formData.price.replace(/,/g, ""));
            const discount = parseFloat(formData.discount);
            if (!isNaN(price) && !isNaN(discount)) {
                const discountedPrice = price - (price * discount) / 100;
                setFormData((prevData) => ({
                    ...prevData,
                    totalPrice: formatInputValue(discountedPrice.toFixed()),
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                totalPrice: "",
            }));
        }
    }, [formData.price, formData.discount]);

    // Format input values with commas after every three digits
    const formatInputValue = (value) => {
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleRemoveColor = () => {
        // Logic for removing a color option
    };

    const handleRemoveSize = () => {
        // Logic for removing a size option
    };

    const handleAddSize = () => {
        // Logic for adding a size option
    };

    return (
        <div className="Addproduct-main">
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <img
                    width="96"
                    height="96"
                    src="https://img.icons8.com/nolan/96/sell.png"
                    alt="sell"
                />
                <h2>Sản phẩm</h2>
            </div>
            <hr />
            <div className="form-AddProduct">
                <button
                    type="button"
                    className="btn btn-primary btn-Addproduct"
                    data-bs-toggle="collapse"
                    data-bs-target="#Addproduct"
                >
                    Thêm Sản phẩm
                </button>
                <div id="Addproduct" className="collapse">
                    <div className="container" id="container-Addproduct">
                        <form action="" className="From-addproduct">
                            <label htmlFor="imageUrl">Image</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="Your image URL.."
                                value={formData.imageUrl}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="id">ID</label>
                            <input
                                type="text"
                                id="id"
                                name="id"
                                placeholder="Your product ID.."
                                value={formData.id}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your product name.."
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="madeIn">Made in</label>
                            <input
                                type="text"
                                id="madeIn"
                                name="madeIn"
                                placeholder="Country of origin.."
                                value={formData.madeIn}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="topLevelCategory">
                                Top Level Category
                            </label>
                            <input
                                type="text"
                                id="topLevelCategory"
                                name="topLevelCategory"
                                placeholder="Top level category.."
                                value={formData.topLevelCategory}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="secondLevelCategory">
                                Second Level Category
                            </label>
                            <input
                                type="text"
                                id="secondLevelCategory"
                                name="secondLevelCategory"
                                placeholder="Second level category.."
                                value={formData.secondLevelCategory}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="thirdLevelCategory">
                                Third Level Category
                            </label>
                            <input
                                type="text"
                                id="thirdLevelCategory"
                                name="thirdLevelCategory"
                                placeholder="Third level category.."
                                value={formData.thirdLevelCategory}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="brand">Brand</label>
                            <input
                                type="text"
                                id="brand"
                                name="brand"
                                placeholder="Brand.."
                                value={formData.brand}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="color1">Option Color One</label>
                            <div className="List-item-color">
                                <label htmlFor="color1">Color</label>
                                <input
                                    type="text"
                                    id="color1"
                                    name="colors[0].color"
                                    placeholder="Color.."
                                    value={formData.colors[0].color}
                                    onChange={(e) => {
                                        const newColors = [...formData.colors];
                                        newColors[0].color = e.target.value;
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            colors: newColors,
                                        }));
                                    }}
                                />
                                <label htmlFor="size1">Size</label>
                                <input
                                    type="text"
                                    id="size1"
                                    name="colors[0].size"
                                    placeholder="Size.."
                                    value={formData.colors[0].size}
                                    onChange={(e) => {
                                        const newColors = [...formData.colors];
                                        newColors[0].size = e.target.value;
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            colors: newColors,
                                        }));
                                    }}
                                />
                                <label htmlFor="stock1">Stock</label>
                                <input
                                    type="text"
                                    id="stock1"
                                    name="colors[0].stock"
                                    placeholder="Stock.."
                                    value={formData.colors[0].stock}
                                    onChange={(e) => {
                                        const newColors = [...formData.colors];
                                        newColors[0].stock = e.target.value;
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            colors: newColors,
                                        }));
                                    }}
                                />
                            </div>
                            <label htmlFor="color2">Option Color Two</label>
                            <div className="List-item-color">
                                <label htmlFor="color2">Color</label>
                                <input
                                    type="text"
                                    id="color2"
                                    name="colors[1].color"
                                    placeholder="Color.."
                                    value={formData.colors[1].color}
                                    onChange={(e) => {
                                        const newColors = [...formData.colors];
                                        newColors[1].color = e.target.value;
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            colors: newColors,
                                        }));
                                    }}
                                />
                                <label htmlFor="size2">Size</label>
                                <input
                                    type="text"
                                    id="size2"
                                    name="colors[1].size"
                                    placeholder="Size.."
                                    value={formData.colors[1].size}
                                    onChange={(e) => {
                                        const newColors = [...formData.colors];
                                        newColors[1].size = e.target.value;
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            colors: newColors,
                                        }));
                                    }}
                                />
                                <label htmlFor="stock2">Stock</label>
                                <input
                                    type="text"
                                    id="stock2"
                                    name="colors[1].stock"
                                    placeholder="Stock.."
                                    value={formData.colors[1].stock}
                                    onChange={(e) => {
                                        const newColors = [...formData.colors];
                                        newColors[1].stock = e.target.value;
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            colors: newColors,
                                        }));
                                    }}
                                />
                            </div>
                            <label htmlFor="color3">Option Color Three</label>
                            <div className="List-item-color">
                                <label htmlFor="color3">Color</label>
                                <input
                                    type="text"
                                    id="color3"
                                    name="colors[2].color"
                                    placeholder="Color.."
                                    value={formData.colors[2].color}
                                    onChange={(e) => {
                                        const newColors = [...formData.colors];
                                        newColors[2].color = e.target.value;
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            colors: newColors,
                                        }));
                                    }}
                                />
                                <label htmlFor="size3">Size</label>
                                <input
                                    type="text"
                                    id="size3"
                                    name="colors[2].size"
                                    placeholder="Size.."
                                    value={formData.colors[2].size}
                                    onChange={(e) => {
                                        const newColors = [...formData.colors];
                                        newColors[2].size = e.target.value;
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            colors: newColors,
                                        }));
                                    }}
                                />
                                <label htmlFor="stock3">Stock</label>
                                <input
                                    type="text"
                                    id="stock3"
                                    name="colors[2].stock"
                                    placeholder="Stock.."
                                    value={formData.colors[2].stock}
                                    onChange={(e) => {
                                        const newColors = [...formData.colors];
                                        newColors[2].stock = e.target.value;
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            colors: newColors,
                                        }));
                                    }}
                                />
                            </div>
                            {/* mới thêm vào */}
                            <div className="button-group">
                                <button
                                    type="button"
                                    onClick={handleRemoveColor}
                                >
                                    Remove Color
                                </button>
                                <button
                                    className="btn-removesize"
                                    type="button"
                                    onClick={handleRemoveSize}
                                >
                                    Remove Size
                                </button>
                                <button type="button" onClick={handleAddSize}>
                                    Add Size
                                </button>
                                <button type="button" >
                                    Add Color
                                </button>
                            </div>

                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="text"
                                id="quantity"
                                name="quantity"
                                placeholder="Your product quantity.."
                                value={formData.quantity}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="price">Price</label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                placeholder="Product price.."
                                value={formData.price}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="discount">Discount (%)</label>
                            <input
                                type="text"
                                id="discount"
                                name="discount"
                                placeholder="Discount percentage.."
                                value={formData.discount}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="totalPrice">Total Price</label>
                            <input
                                type="text"
                                id="totalPrice"
                                name="totalPrice"
                                placeholder="Total price.."
                                value={formData.totalPrice}
                                readOnly
                            />
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Write something.."
                                style={{ height: "100px" }}
                                value={formData.description}
                                onChange={handleInputChange}
                            ></textarea>
                            <button
                                className="btn-xac-nhan-them"
                                type="button"
                                onClick={toastaddpro}
                            >
                                Thêm
                            </button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
            <div className="Admin-table-Product">
                <div className="container mt-3">
                    <h2>Thông tin sản phẩm</h2>
                    <p>Danh sách các sản phẩm hiện đang có:</p>
                    <table className="table-addproduct ">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Made in</th>
                                <th>Trademark</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Discount (%)</th>
                                <th>Quantity</th>
                                <th>Order</th>
                            </tr>
                        </thead>
                    </table>
                    <br />
                    <table className="table-showadd">
                        <tbody>
                            <tr>
                                <td className="col-Image-Product">
                                    <img
                                        src="https://cdn-jms.woka.io/media/catalog/product/g/i/giorgio-armani-mens-acqua-di-gio-profondo-parfum-34-oz-fragrances-3614273953696.jpg"
                                        alt=""
                                    />
                                </td>
                                <td>NH</td>
                                <td>Nước hoa</td>
                                <td>Mỹ</td>
                                <td>GUCCI</td>
                                <td>Category</td>
                                <td>2.000.000</td>
                                <td>20</td>
                                <td>1000</td>
                                <td>
                                    <button className="btn-outline-edit">
                                        Edit
                                        <ToastContainer />
                                    </button>
                                    <button
                                        onClick={toastdelete}
                                        className="btn-outline-delete"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
