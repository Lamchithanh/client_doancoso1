import React from "react";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
    {
        /* vừa thêm vào */
    }

    const toastaddpro = () => toast("Thêm sản phẩm thành công!");
    const toastedit = () => toast("Đã cập nhật sản phẩm thành công!");
    const toastdelete = () => toast("Sản phẩm đã được xóa thành công!");
    return (
        <div className="Addproduct-main">
            <div style={{ display: "flex", alignItems: "center", gap: "20" }}>
                <img
                    width="96"
                    height="96"
                    src="https://img.icons8.com/nolan/96/sell.png"
                    alt="sell"
                />

                <h2>sản phẩm</h2>
            </div>
            <hr />
            <div className="form-AddProduct">
                <button
                    type="button"
                    class="btn btn-primary btn-Addproduct"
                    data-bs-toggle="collapse"
                    data-bs-target="#Addproduct"
                >
                    Thêm Sản phẩm
                </button>
                <div id="Addproduct" class="collapse">
                    <div class="container " id="container-Addproduct">
                        <form action="" className="From-addproduct">
                            <label for="fname">Image</label>
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                            />
                            <label for="fname"> ID</label>
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                            />
                            <label for="fname">Name</label>
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                            />
                            <label for="fname">Made in</label>
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                            />{" "}
                            {/* phan sua moi */}
                            <label for="fname">Top lavel Category</label>
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                            />{" "}
                            <label for="fname">Second</label>
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                            />{" "}
                            <label for="fname">Thir</label>
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                            />{" "}
                            <label for="fname">Brand</label>
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your name.."
                            />{" "}
                            <label for="fname">Option color one</label>
                            <div className="List-item-color">
                                <label for="fname">Color</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your name.."
                                />{" "}
                                <label for="fname">Size</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your name.."
                                />{" "}
                                <label for="fname">Stock</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your name.."
                                />{" "}
                            </div>
                            <label for="fname">Option color two</label>
                            <div className="List-item-color">
                                <label for="fname">Color</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your name.."
                                />{" "}
                                <label for="fname">Size</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your name.."
                                />{" "}
                                <label for="fname">Stock</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your name.."
                                />{" "}
                            </div>
                            <label for="fname">Option color Thir</label>
                            <div className="List-item-color">
                                <label for="fname">Color</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your name.."
                                />{" "}
                                <label for="fname">Size</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your name.."
                                />{" "}
                                <label for="fname">Stock</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your name.."
                                />{" "}
                            </div>
                            <label for="fname">Quantity</label>
                            <input
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Your product.."
                            />{" "}
                            <label for="fname">List Price</label>
                            <div className="list-value-price">
                                <label for="fname">Price</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your name.."
                                />{" "}
                                <label for="fname">Discount(%)</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your name.."
                                />{" "}
                                <label for="fname">Total price</label>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Your name.."
                                />{" "}
                            </div>
                            <label for="fname">Description</label>
                            <textarea
                                id="subject"
                                name="subject"
                                placeholder="Write something.."
                                style={{ height: "100px" }}
                            ></textarea>
                            {/* vừa thêm vào */}
                            <button
                                className="btn-xac-nhan-them"
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
                <div class="container mt-3">
                    <h2>Thông tin sản phẩm</h2>
                    <p>Danh sách các sản phẩm hiện đang có:</p>
                    <table class="table-addproduct ">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Made in</th>
                                <th>Trademark</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Discount(%)</th>
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
                                    <button class=" btn-outline-edit">
                                        Edit
                                        <ToastContainer />
                                    </button>
                                    {/* vừa thêm vào */}

                                    <button
                                        onClick={toastdelete}
                                        class=" btn-outline-delete"
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
