import React, { useState } from 'react'
import {firebaseAuth} from "../utils/firebase-config";
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assests/logo-yellow.png'
import {FaPowerOff, FaSearch} from 'react-icons/fa';
export default function Navbar({isScrolled}) {
    const navigate = useNavigate();
     const links = [
        { name: "Home", link: "/" },
        { name: "TV", link: "/tv" },
        { name: "Movies", link: "/movies" },
        { name: "My List", link: "/mylist" },
     ]

     onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate("/login");
    });

     const [showSearch, setShowSearch] = useState(false);
     const [inputHover, setInputHover] = useState(false);

    return (
        <Container>
            <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
                <div className="left flex a-center">
                    <div className="brand flex a-center j-center">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="links flex">
                        {
                            links.map(({name,link})=>{
                                return(
                                    <li key={name}>
                                    <Link to={link}>{name}</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="right flex a-center">
                <div className={`search ${showSearch ? "show-search" : ""}`}>
                        <button onFocus={()=> setShowSearch(true)} onBlur={()=>{
                            if(!inputHover) setShowSearch(false);
                        }}>
                            <FaSearch/>
                        </button>
                        <input type="text" placeholder='Search' onMouseEnter={()=>setInputHover(true)} onMouseLeave={()=>setInputHover(false)}
                        onBlur={()=>{
                            setShowSearch(false);
                            setInputHover(false);
                        }} />
                    </div>
                    <button onClick={()=>signOut(firebaseAuth)}>
                        <FaPowerOff/>
                    </button>
                </div>
            </nav>
        </Container>
    )
}

const Container = styled.div`
    .scrolled{
        backdrop-filter: blur(50px);
        transition: 0.3s ease-in-out;
    }

    nav{
        position: sticky;
        top: 0;
        height: 6.5rem;
        width: 100%;
        justify-content: space-between;
        position: fixed;
        z-index: 2;
        padding: 0 4rem;
        align-items: center;
        transition: 0.3s ease-in-out;
        .left{
            gap: 2rem;
            .brand{
                img{
                    height: 1.5rem;
                }
            }
            .links{
                list-style-type: none;
                gap: 2rem;
                li{
                    a{
                        color: white;
                        text-decoration: none;
                    }
                }
            }
        }
        .right{
            gap: 1rem;
            button{
                background-color: transparent;
                border: none;
                cursor: pointer;
                &: focus{
                    outline: none;
                }
                svg{
                    color: #fac402;
                    font-size: 1.2rem;
                }
            }
             .search{
                display: flex;
                gap: 0.4rem;
                align-items: center;
                justify-content: center;
                padding: 0.2rem;
                padding-left: 0.2rem;
                button{
                    background-color: transparent;
                }
                svg{
                    color: #fac402;;
                }
             }
             input{
                width: 0;
                text-color:
                opeacity: 1;
                visibility: hidden;
                transition: 0.4s ease-in;
                background-color: #fff;
                border:none;
                outline: none;
                color: black;
                &: focus{
                    outline:none;
                }
             }

        }
        .show-search{
            ${'' /* border: 1px solid white; */}
            outline: none;
            
            
            ${'' /* background-color: rgba(0,0,0,0.6); */}
            input{
                width: 100%;
                outline: none;
                
                border-radius: 1rem;
                opeacity: 1;
                visibility: visible;
                padding: 0.5rem;
            }
        }
    }
`;