import { DateTime } from "luxon";

export default function Calculation( {date} : {date : Date | undefined} ){

    const endAux = DateTime.now().toString().split('T')[0];
    const startAux = date.toISOString().split('T')[0];

    const end = DateTime.fromISO(endAux)
    const start = DateTime.fromISO(startAux)
    
    const diffInMonths = end.diff(start, ['months', 'days', 'years']).toObject();
    
    return(
        <>
            You're {diffInMonths.years} years, {diffInMonths.months} months and {diffInMonths.days} days old
        </>
    ) 
        
}