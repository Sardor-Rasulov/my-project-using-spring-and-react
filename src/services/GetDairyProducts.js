import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Button, Modal, Form, Container, ProgressBar, Row, OverlayTrigger, Popover } from 'react-bootstrap-v5';
import { toast } from "react-toastify";
import { CalculateDate } from '../components/Calculation Function/CalculateDate';
import { Icons } from '../components/Icons/Icons';

function GetDairyProducts(){

    const [productName, setProductName] = useState(null);
    const [productId, setProductId] = useState(null);
    const handleClose =()=> setProductName(null);
    const [productDisplay, setProductDisplay] = useState([]);
    const GET_ALL_DAIRY = "http://localhost:8080/api/v1/getAllDairy"
    const [productQuantity, setProductQuantity] = useState('');
    const EDIT_PRODUCT_QUANTITY_URL = "http://localhost:8080/api/v1/updateDairyQuantity"

    const handleClick = ()=>{
    
        const product = {productQuantity}
        
        // Update product quantity
        axios({
            method: 'post',
            url: EDIT_PRODUCT_QUANTITY_URL + '?id=' + productId + '&productQuantity=' + productQuantity,
            data: productId, product
          }).then(res => {
            const resData = res.data.status
            const resMsg = res.data.msg

            if(resData === 0){
                toast.success("Done!", 
                    {position: toast.POSITION.TOP_CENTER})
            } else if(resData === 3){
                toast.error(resMsg, 
                {position: toast.POSITION.TOP_CENTER})            
            } else if(resData === 1){
                toast.error(resMsg, 
                {position: toast.POSITION.TOP_CENTER})
            }
          })
        }

    useEffect(()=>{
        axios
        .get(GET_ALL_DAIRY)
        .then(res => {
            console.log(res)
            setProductDisplay(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const quantityList = productDisplay.map((displayQuantity) => (
        displayQuantity.productQuantity
    ))

    const sum = quantityList.reduce((previousValue, cuurentValue) => {
    return previousValue + cuurentValue;
    }, 0)

    return(
        <>
        <Container fluid="md">
            {productDisplay.map((displayMeat) => (
                <Row className="prduct-area" key={displayMeat.id}>
                   
                    <Col xs={6}>
                        <span className="product-items">
                        <OverlayTrigger trigger={['hover', 'focus']} placement="top" 
                        overlay={
                            <Popover id="popover-basic">
                                 <Popover.Title as="h3"><strong>{displayMeat.productName}</strong></Popover.Title>
                                 <Popover.Content>
                                    <strong>Expiration Date: </strong>
                                        <span className="popover-expiration-date">{displayMeat.expirationDate}</span>
                                    <br />
                                    <span>
                                        {
                                            <CalculateDate calculate = {displayMeat.expirationDate} />
                                        }
                                    </span>
                                 </Popover.Content>
                             </Popover>
                        }>
                            <span>
                            {displayMeat.productName}
                            </span>
                            </OverlayTrigger></span>:    
                    </Col>
                    <Col xs={4}>
                        <ProgressBar max={10} min={0} now={displayMeat.productQuantity} label={`${displayMeat.productQuantity}kg`} />
                    </Col>
                    <Col xs={2}>
                    <Icons  onClick={() => {setProductName(displayMeat.productName);
                                           setProductId(displayMeat.id)}}           
                                 date={displayMeat.expirationDate} 
                                 proId={displayMeat.id} />
                    </Col>
                </Row>
            ))}

        </Container>
         <>
         <br />
            </>
        <Container>
            <Row className="prduct-area">
                <Col xs={6}>
                    <span className="total-quantity">Total</span>:
                </Col>
                <Col xs={4}>
                    <ProgressBar max={30} min={0} now={sum} label={`${sum}kg`} />
                </Col>
            </Row>
        </Container>
          {/* Modal for product use */}
          <Modal show={!!productName} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                       {productName}
                </Modal.Title>
            </Modal.Header>    
            <Modal.Body>
                    Set How Much <span className="modal-product-name">{productName}</span> You Would Like To Use
                    <span hidden>{productId}</span>
                        <Form>
                            <Form.Group>
                                {/* <Form.Label>Product Name <span className="asterisk">*</span></Form.Label> */}
                                <Form.Control onChange={(e)=>setProductQuantity(e.target.value)} type="number" placeholder="amount" required/>
                            </Form.Group>
                            <br />
                        </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button disabled={!productQuantity} variant="success" type="submit" block onClick={()=>{handleClick();
                handleClose()}}>
                    Submit
                </Button>
                 <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
            </>
    );
}
export default GetDairyProducts