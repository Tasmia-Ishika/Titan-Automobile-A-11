
import { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { FcApproval } from 'react-icons/fc';
import { MdOutlineSystemUpdateAlt } from 'react-icons/md';

const Inventory = () => {
  const { register } = useForm();
  const { Id } = useParams();

  const [products, setProducts] = useState({});
  const { quantity } = products;

  useEffect(() => {
    const url = `http://localhost:5000/product/${Id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  })

  /*function removeOne() {
    let newQuantity = quantity - 1;
    const newProduct = { ...products, quantity: newQuantity }
    setProducts(newProduct);
    fetch(`http://localhost:5000/product/${Id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
  }*/



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
              <Button /*onClick={ () => removeOne(Id)}*/ variant="dark" className='text-light fw-bold'>Delivered <FcApproval></FcApproval></Button>
            </Card.Body>
          </Card>
        </div>

        <div>
          <form className='bg-dark m-4 p-4 text-center'>
            <h3 className='text-danger mb-4'>Stock Items</h3>
            <input className='mb-2' placeholder='Stock Quantity' type="number" {...register("stock")} />
            <br />
            <button className='btn btn-danger fw-bold '>Update Stock <MdOutlineSystemUpdateAlt></MdOutlineSystemUpdateAlt></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inventory;