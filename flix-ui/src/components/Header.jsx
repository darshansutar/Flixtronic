import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assests/logo.png"
import styled from 'styled-components'

export default function Header(props) {
    const navigate = useNavigate();
    return (
        <Container className='flex a-center j-between'>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <button onClick={()=>navigate(props.login? "/login": "/signup")}>
                {props.login ? "Log In": "Sign In"}
            </button>
        </Container>
    )
}

const Container = styled.div`
  padding: 0 4rem;
  .logo{
    img{
        height: 1.8rem;
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
`;
