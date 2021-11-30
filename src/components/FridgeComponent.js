import React, {useEffect, useState } from 'react';
import AddProductsForm from '../components/AddProductsForm';
import { Button } from 'react-bootstrap-v5';
import { Modal } from 'react-bootstrap-v5';
import GetDairyProducts from '../services/GetDairyProducts';
import GetMeatProducts from '../services/GetMeatProducts';
import GetAllFtsAndVgs from '../services/GetAllFtsAndVgs';
import FooterComponent from './FooterComponent';

function FridgeComponent () {

    const [show, setShow] = useState(false);
    const handleShow = ()=> setShow(true);
    const handleClose =()=> setShow(false);

        return (
            <div>
                <h1>Fridge</h1>
                <div className="container product-container">
                    <div className="row">
                        <div className="col-lg dairy-product">
                             <h3 className="section-title">Dairy Product Section</h3>
                             <hr style={{color: 'blue'}}/>
                                <GetDairyProducts />
                        </div>
                        <div className="col-lg meat">
                             <h3 className="section-title">Meat Product Section</h3>
                             <hr style={{color: 'blue'}}/>
                                <GetMeatProducts />
                        </div>
                        <div className="col-lg vegetables">
                             <h3 className="section-title">Vegetables/Fruits Section</h3>
                             <hr style={{color: 'blue'}}/>
                                <GetAllFtsAndVgs />
                        </div>
                    </div>
                    {/* Add product button */}
                    <Button onClick={handleShow} variant="primary">Add Product</Button>   
                    {/* Add Product Modal */}
                     <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Add Product
                            </Modal.Title>
                        </Modal.Header>    
                        <Modal.Body>
                                {/* how to close modal from another component */}
                                <AddProductsForm onSubmit={handleClose}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
}

export default FridgeComponent;