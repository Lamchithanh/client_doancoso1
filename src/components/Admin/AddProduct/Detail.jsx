import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { deleteProduct } from "../../../State/Product/Action";

const Detail = ({products}) => {
  const dispatch = useDispatch();
  
  const handleDelete = (productId) => {
    toast("Sản phẩm đã được xóa thành công!");
    dispatch(deleteProduct(productId));
    // console.log("Product ID",productId );
  };
    return (
       
              <tr>
                <td style={{ width: "20px" }}>{products.id}</td>
                <td style={{ width: "10%" }} className="col-Image-Product">
                  <img src={products.imageUrl} alt="" />
                </td>
                <td style={{ width: "21%" }}>{products.title}</td>
                <td>{products.soldAt}</td>
                <td>{products.brand.name}</td>
                <td>{products.category.name}</td>
                <td>{products.price}</td>
                <td>{products.discountPersent}%</td>
                <td>{products.discountedPrice}</td>
                <td>{products.quantity}</td>
                <td style={{ width: "5%" }}>
                  <button class=" btn-outline-edit">
                    Edit
                    <ToastContainer />
                  </button>
                  {/* vừa thêm vào */}

          {/* <button onClick={toastdelete} class=" btn-outline-delete"> */}
          <button onClick={() => handleDelete(products.id)}class=" btn-outline-delete">

          
                    Delete
                  </button>
                </td>
              </tr>
    )
}
export default Detail