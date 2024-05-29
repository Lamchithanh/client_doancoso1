import React from "react";
import "./AdminHome.css";

const AdminHome = () => {
    return (
        <div className="Admin-main">
            <h2 style={{ marginTop: "30px" }}>Admin Application</h2>
            <div className="Admin-table-value">
                <div id="Product" className="Admin-card-table-value">
                    <h2>Sản phẩm</h2>
                    <div id="" className="Actual-data">
                        <img
                            width="96"
                            height="96"
                            src="https://img.icons8.com/pulsar-color/96/shopping-bag.png"
                            alt="shopping-bag"
                        />
                        <p className="item-data-right">
                            <strong>9,626</strong>
                        </p>
                    </div>
                </div>
                <div id="User" className="Admin-card-table-value">
                    <h2>Người dùng</h2>
                    <div className="Actual-data">
                        <img
                            width="64"
                            height="64"
                            src="https://img.icons8.com/cotton/64/user.png"
                            alt="user"
                        />
                        <p className="item-data-right">
                            <strong>9,626</strong>
                        </p>
                    </div>
                </div>{" "}
                <div id="Dealhot" className="Admin-card-table-value">
                    <h2>Dealhot</h2>
                    <div className="Actual-data">
                        <img
                            width="64"
                            height="64"
                            src="https://img.icons8.com/cotton/64/mega-sales--v2.png"
                            alt="mega-sales--v2"
                        />
                        <p className="item-data-right">
                            <strong>9,626</strong>
                        </p>
                    </div>
                </div>{" "}
                <div id="statistical" className="Admin-card-table-value">
                    <h2>Thống kê</h2>
                    <div className="Actual-data">
                        <img
                            width="64"
                            height="64"
                            src="https://img.icons8.com/dusk/64/price-tag-euro.png"
                            alt="price-tag-euro"
                        />
                        <p className="item-data-right">
                            <strong>$9,626</strong>
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <h5>Thông tin thêm</h5>
            <hr />
            <div className="Admin-show-add">
              
            </div>
        </div>
    );
};

export default AdminHome;
