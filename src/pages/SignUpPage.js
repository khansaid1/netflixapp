import React,{useState} from 'react';
import styled from 'styled-components';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateCurrentUser } from 'firebase/auth';
import {firebaseAuth} from "../utils/firebase-config";
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {

  const [showPassword, SetShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({email:"", password:""})

const navigate = useNavigate()

const handleSignIn = async()=>{
  try {
    const{email, password} = formValues;
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
  } catch (error){
    console.log(error)

  }
}

onAuthStateChanged(firebaseAuth,(updateCurrentUser)=>{
  if(updateCurrentUser)navigate('/')
})


  return (
    <Container>
      <BackgroundImage/>
     <div className='content'>
      <Header Login/>
      <div className='body'>
        <div className='text'>
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>watch anywhere, cancel anytime</h4>
          <h6>ready to watch? enter your email to create or restart membership</h6>
        </div>
        <div className='form'>
          {
            showPassword ? (
              <input type="text" placeholder='password' name="password" 
              value={formValues.password}
              onChange={(e)=>setFormValues({
                ...formValues, [e.target.name]: e.target.value
              })}
              />
            ): <input type="email" placeholder='email address' name="email"
            value={formValues.email}
              onChange={(e)=>setFormValues({
                ...formValues, [e.target.name]: e.target.value
              })}
            />
          }
          
          {
            !showPassword ? (
              <button onClick={()=>SetShowPassword(true)}>Get Started</button>
            ):  <button onClick={handleSignIn}>Sign Up</button>
          }
         
         
        </div>
      </div>
     </div>
    </Container>
  )
}

const Container = styled.div`
position: relative;
.content{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.79);
  height: 100vh; 
  width: 100vw;
  grid-template-columns: 15vh 85vh;

.body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text{
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 2rem;
  color: white;
}
h1{
  padding: .25rem;
}
h4{
  margin: -1.5rem;
}
h6{
  margin-top:-1.5;
}
.form{
  display: grid;
  width: 60%;
  grid-template-columns: ${({showPassword})=>showPassword? "1fr 1fr" : "2fr 1fr"};
  input{
    color: black;
    padding: 1.5rem;
    font-size:1.2rem ;
    width: 45rem;
    &:focus{
      outline: none;
    }
  }
  button{
    padding: 0.5rem 1rem;
    background-color: red;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1.05rem;
    width: 10rem;
  }
}
}
`

export default SignUpPage