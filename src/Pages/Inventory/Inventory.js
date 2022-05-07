import { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { FcApproval } from 'react-icons/fc';
import { MdOutlineSystemUpdateAlt } from 'react-icons/md';

const Inventory = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  const [products, setProducts] = useState({});


  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  })

  function removeOne() {
    const { quantity, sold, ...rest } = products;
    const newQuantity = parseInt(quantity) - 1;
    const newSold = parseInt(sold) + 1;
    const newProduct = { ...rest, quantity: newQuantity, sold: newSold }
    setProducts(newProduct);
    const url = `http://localhost:5000/quantity/${id}`
    console.log(url)
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newQuantity, newSold)

    })
  }
  const onSubmit = (data) => {
    const quantityValue = data.quantity;
    const { quantity, ...rest } = products;
    const newQuantity = parseInt(quantity) + parseInt(quantityValue);
    const newProducts = { quantity: newQuantity, ...rest }
    setProducts(newProducts);
    const url = `http://localhost:5000/quantity/${id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newQuantity)

    })
      .then(res => res.json())
  }
  // const handleUpdateStock = event => {
  //   event.preventDefault();
  //   const quantity = event.target.stock.value;
  //   const newProduct = { quantity };
  //   const url = `http://localhost:5000/quantity/${Id}`
  //   fetch('url',)
  // }



  return (
    <div className='product-container'>
      <div>
        <h3>Instock : {products.stock}</h3>
        <div className='m-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={products?.img} />
            <Card.Body>
              <Card.Title className='fs-2'>{products?.name}</Card.Title>
              <h3 className='fw-bold fs-3'>${products?.price}</h3>
              <h5 className='mt-3'>InStock: {products?.stock}</h5>
              <h5 className='mt-3'>Supplied by: {products?.supplier}</h5>
              <Card.Text className='p-2 fst-italic'>
                {products?.description}
              </Card.Text>
              <Button onClick={() => removeOne(products.quantity)} variant="dark" className='text-light fw-bold'>Delivered <FcApproval></FcApproval></Button>
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
    </div>
  );
};

export default Inventory;