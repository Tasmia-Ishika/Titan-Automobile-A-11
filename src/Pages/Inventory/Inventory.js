
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const Inventory = () => {
  const { Id } = useParams();

  const [products, setProducts] = useState({});
  // const [deliver, setDeliver]= useDeliver();

  useEffect(() => {
    const url = `http://localhost:5000/product/${Id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  })
  return (
    <div>
      <div className=''>
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
              <Button variant="dark">Delivered</Button>
            </Card.Body>
          </Card>
        </div>
        <div>

        </div>


      </div>
    </div>
  );
};

export default Inventory;