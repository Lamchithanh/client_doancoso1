import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <><div className="btn-thong-tin-dat-hang">
      <Button variant="black" onClick={handleShow} >
        Nhập thông tin đặt hàng
      </Button></div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo địa chỉ mới</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Modalbody">
          <form action="" className="form-updata-info">
            <div className="modal-ten-sdt">
              <label htmlFor="">Họ tên đầy đủ</label>
              <br />
              <input type="text" placeholder="Họ tên đầy đủ" />
              <label htmlFor="">Điện thoại</label>
              <br />
              <input type="text" placeholder="Điện thoại" />
              <p style={{ fontSize: "13px", margin: "5px 0" }}>
                T&T sẽ cần liên hệ theo số điện thoại này để xác nhận hoặc
                thông báo hẹn thời gian giao hàng / thu tiền trước.
              </p>
            </div>
            <div className="modal-sdt">
              <label htmlFor="Email">Email</label>
              <br />
              <input type="text" />
              <p>
                <span>Dùng để tạo tài khoản và đặt hàng:</span> T&T sẽ tự động
                khởi tạo và gửi mail thông tin đăng nhập tài khoản cho Quý
                Khách. Mọi thông tin, trạng thái của đơn hàng cũng sẽ được thông
                báo, cập nhật liên tục qua email này.
              </p>
            </div>
            <div className="modal-dia-diem">
              <label htmlFor="Địa điểm">Địa điểm</label>
              <br />
              <div className="modal-option-dia-diem">
                <select aria-label="Default select example" >
                  <option>chọn tỉnh / thành</option>
                  <option value="1">Cần Thơ</option>
                  <option value="2">An Giang</option>
                  <option value="3">Sóc Trăng</option>
                </select><br />
                <select aria-label="Default select example">
                  <option>Chọn Quận / Huyện</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select><br />
                <select aria-label="Default select example">
                  <option>Chọn phường / Xã</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="modal-dia-chi-chinh-xac">
              <p>
                {" "}
                <span>Địa chỉ chính xác</span> (nhập chính xác và chi tiết địa
                chỉ để đảm bảo nhận hàng đúng thời gian)
              </p>
              <textarea
                type="text"
                placeholder="địa chỉ chính xác: chung cư, số nhà, tên đường... "
                class="mz-form-control__input correct-address-input"
                style={{ height: "16px;" }}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ width: "100px" }}
          >
            <span>Hủy bỏ</span>
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{
              width: "100px",
              color: "#fff",
              background: "#000",
              border: "none",
            }}
            className="btn-lg"
          >
            <span> Cập nhật</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
