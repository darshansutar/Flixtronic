import React, { useState } from 'react'
import styled from 'styled-components'

import BackgroundImage from '../components/BackgroundImage';
import {firebaseAuth} from "../utils/firebase-config";
import { createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom'
export default function SignUp() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
   

    const handleSignIn = async () => {
        try {
            console.log(formValues);
            const {email,password} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth,email.toString(),password.toString());
      
           
        } catch (err) {
            console.log(err)
        }
    }
     
   
     
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    });

    return (
        <Container showPassword={showPassword}>
            <BackgroundImage />
            <div className="content">
                <Header login />
                <div className="body flex column a-center j-center">
                    <div className="text flex column">
                        <h1>Unlimited Movies, TV shows and More</h1>
                        <h4>Watch anywhere. Cancel anytime</h4>
                        <h6>Ready to Watch? Enter your email to create or restart membership</h6>
                    </div>
                    <div className="form">
                        <input type="email" placeholder='Email Address' name="email" value={formValues.email} onChange={(e) => setFormValues({...formValues, [e.target.name]: [e.target.value] })} />
                        {
                            showPassword && (<input type="password" placeholder='Password' name="password" value={formValues.password} onChange={(e) => setFormValues({...formValues, [e.target.name]: [e.target.value] })} />)
                        }

                        {
                            !showPassword && (<button onClick={() => setShowPassword(true)}>Get Started</button>)
                        }

                    </div>
                    <button className='sign'   onClick={handleSignIn}>SignUp</button>
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
    .body{
        gap: 1rem;
        .text{
            gap: 1rem;
            text-align: center;
            font-size: 2rem;
            color: #001f3f;
            h1{
                padding: 0 25rem;
            }
        }
        .form{
            display: grid;
           grid-template-columns: ${({showPassword})=>showPassword?"1fr 1fr":"2fr 1fr"}; 
            width: 60%;
            gap: 0.5rem;
            input{
                color: black;
                border: none;
                outline: none;
                padding: 1.5rem;
                font-size:1.2rem;
                
                border-radius: 2rem;
                &: focus{
                    outline: none;
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

        button{
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 2rem;
    
    font-weight: bolder;
    font-size:1.05rem;
            }

    .sign{
    padding: 0.8rem 1rem;
    background-color: #001f3f;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 1.5rem;
    font-weight: bolder;
    font-size:1.05rem;
            }
    }

}
`;
