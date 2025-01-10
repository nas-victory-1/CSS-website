import { useState } from "react";
import "../styles/Register.css";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase'

const Register = () => {

  //States for membership info
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const membersColRef = collection(db,"members");

 

  const onSubmitForm = async(e)=> {
    e.preventDefault(); // Prevent page reload
    if (!fullName || !email) {
      alert("Please fill in all required fields.");
      return;
    }
    try{
    await addDoc(membersColRef, {
      fullName: fullName,
      email: email
    });
    alert("Your information has been submitted!");
      // Reset form fields
      setFullName("");
      setEmail("");
  }catch(err){
      console.error(err);
      alert("Failed to submit. Please try again.");
    }
  };
  
  return (
    <div className="register">
      <div className="form">
        <h1>Want to join Us</h1>
        <form>
          <label>Full name: </label>
          <input 
            type="text" 
            placeholder="Kweku Ananse"
            onChange={(e) => setFullName(e.target.value)}
            required/>

          <label>Email: </label>

          <input 
            type="email" 
            placeholder="kwekuananse2@gmail.com" 
            onChange={(e) => setEmail(e.target.value)}
            required/>

          <label>Message: </label>

          <input type="text" />
          <button 
            className="registerBtn"
            onClick={onSubmitForm} >Send</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
