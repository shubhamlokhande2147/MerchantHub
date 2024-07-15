// import { useState,useEffect } from 'react';

// export default function Merchant_Table()
// {
//     const [data,setData] = useState();

//     useEffect( async ()=>{
//                   let result = await fetch('http://localhost:7373/merchant/getallmerchants');
//                   result = await result.json();
//                   setData(result);
//     },[])
//     console.log("data",data); 

//     return(
//         <>
//           <h1>Merchant_Table</h1>

//         </>
//     )
// }

// import { useState, useEffect } from 'react';
// import { Table } from 'react-bootstrap';


// export default function Merchant_Table() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 let result = await fetch('http://localhost:7373/merchant/getallmerchants');
//                 result = await result.json();
//                 setData(result);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     console.log("data", data);

//     return (
//         <>
//             <h1>Merchant Table</h1>
//             {data ? (
//                 <ul>
//                     {data.map((merchant, index) => (
//                         <li key={index}>{merchant.name}</li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Loading...</p>
//             )}



//             //////
//     <Table striped bordered hover>
//     <thead>
//         <tr>
//         <th>#</th>
//         <th>First Name</th>
//         <th>Last Name</th>
//         <th>Username</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//         <td>1</td>
//         <td>Mark</td>
//         <td>Otto</td>
//         <td>@mdo</td>
//         </tr>
//         <tr>
//         <td>2</td>
//         <td>Jacob</td>
//         <td>Thornton</td>
//         <td>@fat</td>
//         </tr>
//         <tr>
//         <td>3</td>
//         <td colSpan={2}>Larry the Bird</td>
//         <td>@twitter</td>
//         </tr>
//     </tbody>
//     </Table>


//         </>
//     );
// }

import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Merchant_Table() {
    const [data, setData] = useState(null);

        //GetAll Merchants Operation - 
    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await fetch('http://localhost:7373/merchant/getallmerchants');
                result = await result.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log("data", data);

    //Delete Operation - 

    // async function deleteMerchant(m_id)
    // {
    //     let result = await fetch('http://localhost:7373/merchant/deletemerchant' + m_id,{
    //         method:'DELETE"'
    //      });
    //      result =await result.json();
    //      console.log("result",result);
         
    // }

    return (
        <>
            <h1>Merchant Table</h1>
            {data ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((merchant, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{merchant.name}</td>
                                <td>{merchant.email}</td>
                                <td>{merchant.mobile}</td>
                                <td>{merchant.address}</td>
                                <td>
                                    <Button variant="success">View Bills</Button>{' '}
                                    <Button variant="primary">Update</Button>{' '}
                                    <Button variant="danger">Delete</Button>{' '}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
