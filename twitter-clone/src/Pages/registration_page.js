import React, {useState} from 'react';
import Xlogo from '../assets/logo.svg';
import BoxComponent from '../Component/BoxComponent';
import FormRegister from '../Component/formregister';

const RegistrationPage = () => {
    const [clicked, setClicked] = useState(false);
    const handleCreatingAccount = () => {
        // Your click event logic goes here
        alert('BoxComponent clicked!');
        setClicked(!clicked);
        console.log(clicked)
      };
  return (
    <div className="flex flex-row w-screen h-screen bg-black p-4">
  <div className=" bg-black p-4">
    <img className="w-full h-full object-cover p-60" src={Xlogo} alt="Your SVG" />
  </div>
  <div className="border-2 border-red-500 w-1/2 justify-center mb-10">
    <p className="text-white">Happening now</p>
    <p className="text-white">Join today.</p>
      <div className="border-2 border-red-500 flex items-center justify-center mb-[10px] hover:cursor-pointer " onClick={handleCreatingAccount}>
        <BoxComponent backgroundColor="tw_extralightgray" textColor="tw_black" boxText="Sign Up with Google" borderColor="tw_blue" />
      </div>
      <div className="border-2 border-red-500 flex items-center justify-center mb-[10px] hover:cursor-pointer " onClick={handleCreatingAccount}>
        <BoxComponent backgroundColor="blue-500" textColor="tw_black" boxText="Create an Account"  borderColor="tw_blue" />
      </div>
      <div className="border-2 border-red-500 flex items-center justify-center mb-[10px] hover:cursor-pointer " onClick={handleCreatingAccount}>
        <BoxComponent backgroundColor="tw_extralightgray" textColor="tw_black" boxText="Sign Up"  borderColor="tw_extralightgray"  />
      </div>
      {clicked && (
        <FormRegister/>
      )}
    </div>
    <div>
  </div>
</div>
  );
};

export default RegistrationPage;