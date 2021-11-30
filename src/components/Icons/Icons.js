import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faSignOutAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { toast } from 'react-toastify';



export function Icons({date, onClick, proId}){

    const DELETE_EXPIRED_PRODUCT_URL = "http://localhost:8080/api/v1/deleteProduct"
    const useIcon = <FontAwesomeIcon icon="sign-out-alt" />;
    const deleteIcon = <FontAwesomeIcon icon="trash-alt" />;
    library.add(fab, faCheckSquare, faSignOutAlt, faTrashAlt);

     // Delete expired product by it's id
     const deleteExpiredProduct = ()=> {

        axios({
            method: 'GET',
            url: DELETE_EXPIRED_PRODUCT_URL + '?id=' + proId,
            data: proId
        }).then(res=>{
            const resData = res.data;
            console.log(resData);
                toast.success(resData, 
                    {position: toast.POSITION.TOP_CENTER});
        })

    }
    
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const expDay = new Date([date]); // expiration Date
    const currentDate = new Date(); //current Date
    
    const diffInTime = expDay.getTime() - currentDate.getTime(); // difference in time
    const diffInDays = Math.round(diffInTime/oneDay); // difference in days
    console.log(diffInDays)

    if(diffInDays <= 0){
        return <span onClick={deleteExpiredProduct} className="cutIcon">{deleteIcon} </span>;
    } else{
        return <span onClick={onClick} className="cutIcon">{useIcon} </span>;
    }
}