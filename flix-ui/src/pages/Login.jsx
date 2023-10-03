import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import {firebaseAuth} from "../utils/firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate();
    
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const handleLogin = async () => {
        try {
            console.log(formValues);
            const {email,password} = formValues;
            await signInWithEmailAndPassword(firebaseAuth,email.toString(),password.toString());
        } catch (err) {
            console.log(err)
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    });

    return (
        <Container>
            <BackgroundImage />
           <div className="content">
               <Header/>
               <div className="form-container flex column a-center j-center">
                  <div className="form flex column a-center j-center ">
                    <div className="title">
                        <h3>Login</h3>
                    </div>
                     <div className="container flex column">
                     <input type="email" placeholder='Email Address' name="email" value={formValues.email} onChange={(e) => setFormValues({...formValues, [e.target.name]: [e.target.value] })} />
                        {
                            <input type="password" placeholder='Password' name="password" value={formValues.password} onChange={(e) => setFormValues({...formValues, [e.target.name]: [e.target.value] })} />
                        }

                        <button onClick={handleLogin}>Login</button>
                        

                    </div>
                     </div>
                  </div>
               </div>
           
        </Container>
    );
}

const Container = styled.div`
position: relative;

.content{
    position: absolute;
    top: 0;
    left: 0;
    ${'' /* background-color: rgba(0,0,0,0.5); */}
    height:100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .form-container{
        gap: 2rem;
        height: 85vh;
       
       
        
        .form{
            padding: 3rem;
            background : transparent;
            box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(8px);
            border-radius: 0.8rem;
            width:25vw;
            ${'' /* border: none; */}
            gap:2rem;
            color: white;
            .container{
                gap: 2rem;
                input{
                    background-color: #fff;
                   border-radius: 0.8rem;
                    padding: 1rem 1rem;
                    width:15rem;
                    border:none;
                    box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);
                    &:focus{
            ${'' /* background: rgba(0, 119, 255, 0.1); */}
            outline: none;
            border:none;
            border: 0.1rem solid #cda101;
            transition: 0.5s ease-in-out;
        }
                }
                
                button{
    padding: 0.5rem 1rem;
    background-color: #001f3f;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 2rem;
    font-weight: bolder;
    font-size:1.05rem;
            }

            }
        }
    }
}
`;
