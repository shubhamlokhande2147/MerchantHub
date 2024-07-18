import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from '../../Pages/MainNavBar';

export default function Merchant_Table() {
    const [data, setData] = useState([]);

    // GetAll Merchants Operation - 
    useEffect(() => {
        getData();
    }, []);

    console.log("data", data);

    // Delete Operation - 
    async function deleteMerchant(m_id) {
        try {
            let response = await fetch('http://localhost:7373/merchant/deletemerchant/' + m_id, {
                method: 'DELETE'
            });

            // Check if response is ok
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Check if response is JSON
            let result;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                result = await response.json();
            } else {
                result = await response.text();
            }
            console.log("result", result);

            // Update state directly without re-fetching
            setData(data.filter(merchant => merchant.m_id !== m_id));
        } catch (error) {
            console.error('Error deleting merchant:', error);
        }
    }

    async function getData() {
        try {
            let result = await fetch('http://localhost:7373/merchant/getallmerchants');
            result = await result.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
                    <MainNavBar/>

            <h1>Merchant Table</h1>
            {data.length ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Sell</th>
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
                                <td>{merchant.sell}</td>
                                <td>
                                    <Button variant="success">View Bills</Button>{' '}
                                    <Link to={"updatemerchant/"+merchant.m_id}><Button variant="primary">Update</Button></Link>{' '}
                                    <Button variant="danger" onClick={() => deleteMerchant(merchant.m_id)}>Delete</Button>{' '}
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
