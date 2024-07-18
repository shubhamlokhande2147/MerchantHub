
// import { withRouter } from 'react-router-dom';


// function Update_Merchant(props)
// {
//     console.log("Props",props)
//     return(
//         <>
//          <h2>Update_Merchant Page</h2>

//         </>
//     )
// }


// export default Update_Merchant

// import { useParams } from 'react-router-dom';
// import { useEffect,useState } from 'react';

// function Update_Merchant() {
//     const { id } = useParams(); // Access the id parameter

//     useEffect(() => {
//         console.log("Props", { id }); // Logging the props
//     }, [id]);


//     //fetch data -

//     const [data,setData] = useState([]);
//     useEffect(async ()=>{
//         let result = await fetch("http://localhost:7373/merchant/getmerchants/" + id);
//         result = await result.json()
//         setData(result);
//     },[])


//     return (
//         <>
//             <h2>Update_Merchant Page</h2>
//             {/* You can use the id parameter as needed */}

            
//       <form>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             defaultvalue={data.name}
//             //onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="text"
//             defaultValue={data.email}
//             //onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Mobile:</label>
//           <input
//             type="text"
//             defaultValue={data.mobile}
//            // onChange={(e) => setMobile(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             defaultValue={data.address}
//            // onChange={(e) => setAddress(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Sells Names:</label>
//           <input
//             type="text"
//             defaultValue={data.sell}
//             //onChange={(e) => setSell(e.target.value)}
//             required
//           />
//         </div>

//         <button type="button" className="btn btn-primary"  style={{ marginTop: '4%' }}>Update Merchant</button>
//       </form>
//         </>
//     );
// }

// export default Update_Merchant;

// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// function Update_Merchant() {
//     const { id } = useParams(); // Access the id parameter
//     const [data, setData] = useState({}); // Initialize as an object

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [address, setAddress] = useState("");
//     const [sell, setSell] = useState("");


//     useEffect(() => {
//         console.log("Props", { id }); // Logging the props
//     }, [id]);

//     // Fetch data
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 let result = await fetch("http://localhost:7373/merchant/getmerchants/" + id);
//                 result = await result.json();
//                 setData(result);
//                 setName(data.name);
//                 setEmail(data.Email);
//                 setMobile(data.Mobile);
//                 setAddress(data.address);
//                 setSell(data.sell);


//             } catch (error) {
//                 console.error('Error fetching merchant:', error);
//             }
//         };
//         fetchData();
//     }, []);


//     //update function - 
   

//     async function updateMerchant(id)
//     {
//         const formdata = new FormData();
//         formdata.append('name',name);
//         formdata.append('email',email);
//         formdata.append('mobile',mobile);
//         formdata.append('address',address);
//         formdata.append('sell',sell);
        
//         let result = await fetch(`http://localhost:7373/merchant/updatemerchant/${id}?_method=PUT`, {
//             method: 'PUT',
//             body: formdata
//         });
//  }
//     return (
//         <>
//             <h2>Update_Merchant Page</h2>
//             <form>
//                 <div>
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         defaultValue={data.name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="text"
//                         defaultValue={data.email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Mobile:</label>
//                     <input
//                         type="text"
//                         defaultValue={data.mobile}
//                         onChange={(e) => setMobile(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Address:</label>
//                     <input
//                         type="text"
//                         defaultValue={data.address}
//                         onChange={(e) => setAddress(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Sells Names:</label>
//                     <input
//                         type="text"
//                         defaultValue={data.sell}
//                         onChange={(e) => setSell(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="button" className="btn btn-primary" onClick={()=>updateMerchant(data.m_id)} style={{ marginTop: '4%' }}>Update Merchant</button>
//             </form>
//         </>
//     );
// }

// export default Update_Merchant;


import { useParams,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Update_Merchant() {
    const { id } = useParams(); // Access the id parameter
    const [data, setData] = useState({}); // Initialize as an object
    const navigate = useNavigate(); // Initialize the navigate function


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [sell, setSell] = useState("");

    useEffect(() => {
        console.log("Props", { id }); // Logging the props
    }, [id]);

    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await fetch("http://localhost:7373/merchant/getmerchants/" + id);
                result = await result.json();
                setData(result);
                setName(result.name);
                setEmail(result.email);
                setMobile(result.mobile);
                setAddress(result.address);
                setSell(result.sell);
            } catch (error) {
                console.error('Error fetching merchant:', error);
            }
        };
        fetchData();
    }, [id]);

    // Update function
    async function updateMerchant(id) {
        const merchantData = {
            name: name,
            email: email,
            mobile: mobile,
            address: address,
            sell: sell
        };

        let result = await fetch(`http://localhost:7373/merchant/updatemerchant/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(merchantData)
        });

        if (result.ok) {
            console.log("Merchant updated successfully");
            navigate('/allmerchant'); // Navigate to the allmerchant page

        } else {
            console.error('Error updating merchant:', result.statusText);
        }
    }

    return (
        <>
            <h2>Update_Merchant Page</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mobile:</label>
                    <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Sells Names:</label>
                    <input
                        type="text"
                        value={sell}
                        onChange={(e) => setSell(e.target.value)}
                        required
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => updateMerchant(id)} style={{ marginTop: '4%' }}>Update Merchant</button>
            </form>
        </>
    );
}

export default Update_Merchant;
