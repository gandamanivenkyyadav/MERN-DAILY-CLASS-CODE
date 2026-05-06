import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function DumiProducts() {
    let Products=[{imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLFVDwYoEXONen7Fdyurid6HaeTFSfduOQw&s",title :"cloths"},
    {imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYthLdXjB3KD94CBn-xKcKu05ZmBCvTpTyg&s",title:"shoes"},
     {imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-t9Ix5P-jFp6ksUffJ8lRS8HxcgbwHvopw&s", title:"laptop"}]
  return (
    <Row xs={1} md={3} className="g-4">
      {Products.map((item, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={item.imgsrc} height="290px" />
            <Card.Body>
              <Card.Title>{item.Title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <button className='btn btn-warning'>Add to cart</button>
              <button className='btn btn-warning'>buy</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default DumiProducts;