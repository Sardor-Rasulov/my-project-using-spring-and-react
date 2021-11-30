import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

// succsess alert
toast.configure()
const succsess = () =>{
    toast.success('Product successfuly added!', {position: toast.POSITION.TOP_CENTER})
}

//error alert
const error = ()=>{
    toast.error(<><span>Something went wrong!</span> <br/>
         <span>Product is not added</span></>, 
        {position: toast.POSITION.TOP_CENTER})
}

export default{succsess, error}
