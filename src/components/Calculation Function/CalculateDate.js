// Calculate expiration days
export function CalculateDate({calculate}){
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const expDay = new Date([calculate]); // expiration Date
    const currentDate = new Date(); //current Date
    const expirationDayMessage = <span className="exp-day-message">The Product date is expired it's not usable anymore!</span>;
    
    // check if expiration Date biggre than current Date
    // in order to be able to do calculation
    if(expDay >= currentDate){
        const diffInTime = expDay.getTime() - currentDate.getTime(); // difference in time
        const diffInDays = Math.round(diffInTime/oneDay); // difference in days
        const spanExpIn = <span>Expires in: </span>; 
        const strongDiffDays = <strong>{diffInDays} </strong>
        const spanDays = <span>days</span>

        // if one day left make it red
        if(diffInDays === 1){
            const strongDiffDays = <strong className="one-day-left">{diffInDays} </strong>
            return  <>{spanExpIn} {strongDiffDays} day</>;
        } else{
            return  <>{spanExpIn} {strongDiffDays} {spanDays}</>;
        }
        
    }else{
        return expirationDayMessage;   // returns if the date expired  
    }
   
}