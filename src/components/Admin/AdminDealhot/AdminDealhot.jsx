import React from "react";
import "./AdminDealhot.css";
import { ToastContainer, toast } from "react-toastify";

const AdminDealhot = () => {
    const toastdelete = () => toast("Sản phẩm đã được xóa thành công!");

    return (
        <div>
            <div className="Dealhot-main">
                <div className="Dealhot-logo-title">
                    <img
                        width="64"
                        height="64"
                        src="https://img.icons8.com/cotton/64/sale-time--v2.png"
                        alt="sale-time--v2"
                    />

                    <h2>Dealhot</h2>
                </div>
                <hr />
                <div className="form-Dealhot">
                    <button
                        type="button"
                        class="btn btn-primary btn-Dealhot"
                        data-bs-toggle="collapse"
                        data-bs-target="#Dealhot"
                    >
                        Thêm Sản phẩm
                    </button>
                    <div id="Dealhot" class="collapse">
                        <div class="container container-Dealhot">
                            <form action="" className="From-Dealhot">
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
                                <input type="submit" value="Thêm" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="Admin-table-Product">
                    <div class="container mt-3">
                        <h2>Thông tin Dealhot</h2>
                        <p>Danh sách các sản phẩm hiện đang có:</p>
                        <table class="table-Dealhot ">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Made in</th>
                                    <th>Price</th>
                                    <th>Discount(%)</th>
                                    <th>Order</th>
                                </tr>
                            </thead>
                        </table>
                        <br />
                        <table className="table-showadd">
                            <tbody>
                                <tr>
                                    <td className="col-Image-Dealhot">
                                        <img
                                            src="https://cdn-jms.woka.io/media/catalog/product/g/i/giorgio-armani-mens-acqua-di-gio-profondo-parfum-34-oz-fragrances-3614273953696.jpg"
                                            alt=""
                                        />
                                    </td>
                                    <td>NH</td>
                                    <td>Nước hoa</td>
                                    <td>Mỹ</td>
                                    <td>2.000.000</td>
                                    <td>20</td>
                                    <td>
                                        <button class=" btn-outline-edit">
                                            Edit
                                        </button>
                                        {/* vừa thêm vào */}
                                        <button
                                            onClick={toastdelete}
                                            class=" btn-outline-delete"
                                        >
                                            <ToastContainer />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDealhot;
