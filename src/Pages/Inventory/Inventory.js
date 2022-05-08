import { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { FcApproval } from 'react-icons/fc';
import { MdOutlineSystemUpdateAlt } from 'react-icons/md';

const Inventory = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { stock } = product;

  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data));
  })

  function removeOne() {
    const { stock, sold } = product;
    const newQuantity = stock - 1;

    const newSold = parseInt(sold) + 1;

    const newProduct = { ...product, stock: newQuantity, sold: newSold }
    setProduct(newProduct);

    const url = `http://localhost:5000/product/${id}`
    console.log(url)
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)

    })

  }
  const onSubmit = (data) => {
    const quantityValue = data.stock;
    const { stock, ...rest } = product;
    const newQuantity = parseInt(stock) + parseInt(quantityValue);
    const newProduct = { stock: newQuantity, ...rest }
    setProduct(newProduct);
    const url = `http://localhost:5000/product/${id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)

    })
      .then(res => res.json())
  }
  return (
    <div className='product-container'>
      <div>
        <div className='m-3'>
          <Card className='text-center' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product?.img} />
            <Card.Body>
              <Card.Title className='fs-2'>{product?.name}</Card.Title>
              <h3 className='fw-bold fs-3'>${product?.price}</h3>
              <h5 className='mt-3'>InStock: {product?.stock}</h5>
              <h5 className='mt-3'>Supplied by: {product?.supplier}</h5>
              <Card.Text className='p-2 fst-italic'>
                {product?.description}
              </Card.Text>
              <Button onClick={() => removeOne(product.quantity)} variant="dark" className='text-light fw-bold'>Delivered <FcApproval></FcApproval></Button>
            </Card.Body>
          </Card>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className='bg-dark m-4 p-4 text-center'>
            <h3 className='text-danger mb-4'>Stock Items</h3>
            <input className='mb-2' placeholder='Stock Quantity' type="number" {...register("stock")} />
            <br />
            <button type='submit' className='btn btn-danger fw-bold'>Update Stock <MdOutlineSystemUpdateAlt></MdOutlineSystemUpdateAlt></button>
          </form>
        </div>
      </div>
      <div className='mt-4 text-center'>
            <Link to="/manageInventory" className='btn btn-danger  m-5 text-light fw-bold'>Go to Manage Inventory</Link>
            </div>
    </div>
  );
};

export default Inventory;