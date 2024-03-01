// import React, {useState} from 'react';
// import validator from 'validator';

// const FormRegister = () => {
//     const [inputName, setinputName] = useState('');
//     const [inputNameValid, setinputNameValid] = useState(true);
//     const [inputEmail, setInputEmail] = useState('');
//     const [inputEmailValid, setinputEmailValid] = useState(true);
//     const [inputNumber, setinputNumber] = useState('');
//     const [inputNumberValid, setinputNumberValid] = useState(true);
//     const [data, setData] = useState({
//       name: 'meghna',
//       email: 'lal12@gmail.com'
//     });

//     const handleChange = (e) => {
//       setData({
//         ...data,
//         [e.target.name]: e.target.value
//       });
//     };

//     const response = await fetch('http://localhost:5000', {
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

//     const handleInputName = (event) => {
//         const nameValue = event.target.value;
//         setinputName(nameValue);
//         const namePattern = /^[A-Za-z]+$/;
//         setinputNameValid(namePattern.test(nameValue));
//     };
//     const handleInputEmail = (event) => {
//         const emailValue = event.target.value;
//         setInputEmail(emailValue);

//         setinputEmailValid(validator.isEmail(emailValue))

//         //console.log(inputEmailValid)
//     };

//     const handleInputPhone = (event) => {
//         const locales = ['en-US', 'en-GB', 'fr-FR'];
//         const numberValue = event.target.value
//         setinputNumber(numberValue);
//         setinputNumberValid(validator.isMobilePhone(numberValue, locales))
//         console.log(inputNumberValid)

//     };

//     const handleSubmit = async () => {
//         if (inputNameValid && inputEmailValid && inputNumberValid) {
//           const usermetadata = {
//             name: inputName,
//             email: inputEmail,
//             phone: inputNumber,
//           };

//         }
//         try {
//             const response = await fetch('http://localhost:3001', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({
//                 name: inputName,
//                 email: inputEmail,
//                 phone: inputNumber,
//               }),
//             });
      
//             if (response.ok) {
//               console.log('User created successfully');
//             } else {
//               console.error('Error creating user');
//             }
//           } catch (error) {
//             console.error('Error:', error);
//           }
//         };
    
//     return (
//         <div className="absolute w-[600px] h-[650px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-tw_darkgray p-4 rounded-2xl">
//             <p class="text-5xl p-4 mb-11"> Create your accout</p>
//             <div className="flex flex-col items-center justify-center ">
//                 <input
//                     type="text"
//                     id="NameInput"
//                     value={inputName}
//                     onChange={handleInputName}
//                     className={`w-[400px] h-[50px] border-2 rounded-xl ${inputNameValid ? 'border-blue-500' : 'border-red-500'} p-2 m-2`}
//                     placeholder='Name'
//                 />
//                 <input
//                     type="text"
//                     id="EmailInput"
//                     value={inputEmail}
//                     onChange={handleInputEmail}
//                     className={`w-[400px] h-[50px] border-2 rounded-xl ${inputEmailValid ? 'border-blue-500' : 'border-red-500'} p-2 m-2`}
//                     placeholder='Email'
//                 />
//                 <input
//                     type="text"
//                     id="textInput"
//                     value={inputNumber}
//                     onChange={handleInputPhone}
//                     className={`w-[400px] h-[50px] border-2 rounded-xl ${inputNumberValid ? 'border-blue-500' : 'border-red-500'} p-2 m-2`}
//                     placeholder='Phone'
//                 />
//                 <button
//                     className="w-[400px]  h-[50px] border-2 rounded-xl border-blue-500 text-tw_white p-2 m-2"
//                     onClick={handleSubmit}
                
//                 > Submit </button>
//             </div>
//       </div>
//     );
//   };
// export default FormRegister;