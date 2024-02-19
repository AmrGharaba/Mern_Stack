import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductForm = props => {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesc] = useState("");


  const createProduct = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/products', {
      title,
      price,
      description
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    setDesc("");
    setTitle("");
    setPrice("");
  }
  // useEffect(() => {
  //   axios.get('http://localhost:8000/api/products')
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(err => console.error(err));
  // }, [createProduct]);


  return (
    <>
      <form >
        <h2>Product Manager</h2>

        <div className="mb-3">
          <label htmlFor="PtoductTitle" className="form-label">Product title</label>
          <input type="text" className="form-control" id="PtoductTitle" onChange={(e) => setTitle(e.target.value)} value={title}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="PtoductPrice" className="form-label">Product price</label>
          <input type="number" className="form-control" id="PtoductPrice" onChange={(e) => setPrice(e.target.value)} value={price}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="PtoductDesc" className="form-label">Product description</label>
          <textarea type="text" className="form-control" id="PtoductDesc" onChange={(e) => setDesc(e.target.value)} value={description} />
        </div>
        <button type="submit" onClick={createProduct} className="btn btn-primary">Submit</button>


      </form>


    </>
  )
}


export default ProductForm