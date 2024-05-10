import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Nhập thông tin đặt hàng
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="">
                
            </form>
        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose} style={{width:"100px"}}>
          <span>Hủy bỏ</span>  
          </Button>
          <Button variant="primary" onClick={handleClose} style={{width:"100px"}} className="btn-lg">
           <span> Cập nhật</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;

// function StaticExample() {
//     return (
//       <div
//         className="modal show"
//         style={{ display: 'block', position: 'initial' }}
//       >
//         <Modal.Dialog>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal title</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             <p>Modal body text goes here.</p>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button variant="secondary">Close</Button>
//             <Button variant="primary">Save changes</Button>
//           </Modal.Footer>
//         </Modal.Dialog>
//       </div>
//     );
//   }

//   export {StaticExample, Example}  ;
