import React, { useState, useEffect } from 'react';

const Frontenddata = () => {
    // const [data, setData] = useState({
    //     name: '',
    //     email: ''
    //   });
    
    //   const handleChange = (e) => {
    //     setData({
    //       ...data,
    //       [e.target.name]: e.target.value
    //     });
    //   };
    
    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     const response = await fetch('http://localhost:5002', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data)
    //     });
    
    //     if (response.ok) {
    //       console.log('Data sent successfully');
    //     } else {
    //       console.error('Error sending data');
    //     }
    //   };
    
    //   return (
    //     <form onSubmit={handleSubmit}>
    //       <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Name" />
    //       <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Email" />
    //       <button type="submit">Submit</button>
    //     </form>
    //   );
    // }
    const [data, setData] = React.useState(null);
    const [inputValue, setInputValue] = useState('');
    const [postId, setPostId] = useState(null);

    useEffect(() => {
      // POST request using fetch inside useEffect React hook
      const dataToSend = {
        message: "Hello from megfromfrontend!",
        message1: "Hello from megfromfrontend!",
        message2: "Hello from tosinfromfrontend!"
      };
      const requestOptions = {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      };
      fetch("/api", requestOptions)
        .then(response => response.json())
        .then(data => {
          // Log the response from the backend
          console.log("Response from backend:", data)
          console.log('Message:', data.message);
          console.log('Received data:', data.data); // Log the parsed JSON data
        })
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);


  //fetchdata from back end
 
   React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => {
          // Log the response from fetching data from the backend
          console.log("Response from fetching data from backend:", data)
          setPostId(data.data);
          console.log('data',postId)
        })
    
    }, [data]); 
    
    console.log('data',postId)
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
      console.log('inputValue', inputValue)
    };
    
    return (
      <div className="card text-center m-3">
      <h5 className="card-header">POST Request with React Hooks</h5>
      <div className="card-body">
          Returned Id: {data}
      </div>
  </div>
    );
  }

export default Frontenddata;
