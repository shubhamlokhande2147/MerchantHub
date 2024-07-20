
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


function Transaction()
{
    const { id } = useParams(); // Access the id parameter

    useEffect(() => {
        console.log("Props", { id }); // Logging the props
    }, [id]);

    return(
        <>
          <h2>Transaction Page</h2>
        </>
    )
}

export default Transaction;