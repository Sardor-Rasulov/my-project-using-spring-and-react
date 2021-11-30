import { Button, Form } from 'react-bootstrap-v5';
import { useState } from 'react';
import axios from "axios";
import AlertNotifications from '../alerts/AlertNotifications';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function AddProductsForm ({onSubmit}) {

    const [productName, setProductName] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [purchaseDate, setPurchaseDate] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [productType, setProductType] = useState('')
    const SAVE_DAIRY_PRODUCT = "http://localhost:8080/api/v1"
    const headers = {
        'Content-Type': 'application/json'
    };


    // Add Product button function
    const handleClick =(e)=>{
        e.preventDefault()
        const product = {productName, productQuantity, purchaseDate, expirationDate}
        const pType = productType;
        console.log(product);

        // sending post request with axios
        if(pType === "dairy"){
            axios({
                method: 'post',
                url: SAVE_DAIRY_PRODUCT + '/addProduct',
                headers: headers,
                data: product
              }).then(res => {
                  const resData = res.data.status;
                  //success message
                  if(resData === 0){
                    AlertNotifications.succsess();
                  } else if(resData === 9){
                    //error message  
                    AlertNotifications.error();
                  } else {
                     // if the dairy section is full 
                    toast.error(resData, 
                        {position: toast.POSITION.TOP_CENTER})
                  }
              });

        } else if(pType === "meat"){
            axios({
                method: 'post',
                url: SAVE_DAIRY_PRODUCT + '/addMeat',
                headers: headers,
                data: product
              }).then(res => {
                  const resData = res.data.status;
    
                  //success message
                  if(resData === 0){
                    AlertNotifications.succsess();
                  } else if(resData === 9){
                    //error message  
                    AlertNotifications.error();
                  } else {
                     // if the dairy section is full 
                    toast.error(resData, 
                        {position: toast.POSITION.TOP_CENTER})
                  }
              });  

        } else if(pType === "vegetableAndFruit"){
            axios({
                method: 'post',
                url: SAVE_DAIRY_PRODUCT + '/addFruitsAndVegs',
                headers: headers,
                data: product
              }).then(res => {
                  const resData = res.data.status;
    
                  //success message
                  if(resData === 0){
                    AlertNotifications.succsess();
                  } else {
                    //error message  
                    AlertNotifications.error();
                  }
              });   
        } 
        }

        return (
            <Form>
                <Form.Group>
                <Form.Label>Product Name <span className="asterisk">*</span></Form.Label>
                    <Form.Control onChange={(e)=>setProductName(e.target.value)} type="text" placeholder="Product Name" required/>
                </Form.Group>
                    <br/>
                <Form.Group>
                <Form.Label>Product Quantity <span className="asterisk">*</span></Form.Label>
                    <Form.Control onChange={(e)=>setProductQuantity(e.target.value)} type="text" placeholder="Product Quantity" required/>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Purchase Date <span className="asterisk">*</span></Form.Label>
                    <Form.Control onChange={(e)=>setPurchaseDate(e.target.value)} type="date" required/>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Expiration Date <span className="asterisk">*</span></Form.Label>
                    <Form.Control onChange={(e)=>setExpirationDate(e.target.value)} type="date" required/>
                </Form.Group>
                <br/>

                {/* Product type */}
                <Form.Group>
                    <Form.Check  label="Dairy" type="radio" name = "product" value="dairy" required inline
                    onChange={(e)=>setProductType(e.target.value)}/>
                    <Form.Check  label="Meat" type="radio" name = "product" value="meat" required inline
                    onChange={(e)=>setProductType(e.target.value)}/>
                    <Form.Check  label="Vegetables/Fruits" type="radio" name = "product" value="vegetableAndFruit" required inline
                    onChange={(e)=>setProductType(e.target.value)}/>
                </Form.Group>
                    <br/>
                <Button disabled={!productName || !productQuantity || !productType || !purchaseDate || !expirationDate} variant="success" type="submit" block onClick={(e)=> {
                    handleClick(e);
                    onSubmit(e);
                    }}> 
                    Add Product
                </Button>
            </Form>          
        );
    }

export default AddProductsForm;