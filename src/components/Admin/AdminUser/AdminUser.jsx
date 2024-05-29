import React from "react";
import "./AdminUser.css";
const AdminUser = () => {
    return (
        <div className="Admin-check-user">
            <div className="Admin-table-user">
                <div class="container mt-3 container-user">
                    <h2>Thông tin người dùng</h2>
                    <p>Danh sách người dùng hiện đang có:</p>
                    <table class="table-user ">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                    </table>
                    <br />
                    <form className="Form-show-user ">
                        <div>1</div>
                        <div>Thành</div>
                        <div>Thanh123@gmail.com</div>
                        <div>
                            <button class=" btn-outline-user">Xem thêm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminUser;
