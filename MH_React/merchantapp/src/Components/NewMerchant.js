
import React, { useState } from 'react'

export default function NewMerchant() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [sell, setSell] = useState("");
  const [statusMessage, setStatusMessage] = useState('');


  async function addMerchant() {
    console.log(name, email, mobile, address, sell);
    try {
    const item = { name, email, mobile, address, sell };
    const response = await fetch('http://localhost:7373/merchant/addmerchant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(item),
    });

    const data = await response.json();

    if (response.ok) {
      // setStatusMessage(data); // Assuming the message is returned from the server
      setStatusMessage(`New Merchant is Added`);

    } else {
      setStatusMessage(`Not Merchant is Added`);
    }
    } catch (error) {
      setStatusMessage(`Error during password reset`);
    }
  }

  return (
    <>

      <h2>New Merchant</h2>

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

        <button type="button" className="btn btn-primary" onClick={addMerchant} style={{ marginTop: '4%' }}>Add Merchant</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}

    </>
  )

}