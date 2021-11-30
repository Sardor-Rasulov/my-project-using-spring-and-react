import { Form } from "react-bootstrap-v5";
import { Button } from "react-bootstrap-v5";

function Forms(){


return(
<Form>
    <Form.Group>
        {/* <Form.Label>Product Name <span className="asterisk">*</span></Form.Label> */}
        <Form.Control type="text" placeholder="Product Name" required/>
    </Form.Group>
    <br />
</Form>
);
}

export default Forms