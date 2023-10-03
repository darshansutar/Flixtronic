import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'
import backgroundImage from "../assests/home.png";
import MovieLogo from "../assests/homeTitle1.png";
import { FaPlay } from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';

export default function Flix() {
    const[isScrolled, setIsScrolled]=useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const genresLoaded = useSelector((state)=>state.flix.genresLoaded);
    const movies = useSelector((state)=>state.flix.movies);
    useEffect(() => {
        dispatch(getGenres())
    }, []);


    useEffect(()=>{
        if(genresLoaded) dispatch(fetchMovies({type: "all"}));
    },[genresLoaded]);


    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset === 0? false : true);
        return ()=>(window.onscroll=null)
    }
  
 
    return (
        <Container>
            <Navbar isScrolled={isScrolled}/>
            <div className="hero">
                <img src={backgroundImage} alt="background-image" className='background-image' />
                <div className="container">
                <div className="logo">
                    <img src={MovieLogo} alt="Movie Logo" />
                </div>
                <div className="buttons flex" onClick={()=>{navigate('/player')}}>
                    <button className='flex j-center a-center'><FaPlay/>Play</button>

                    <button className='flex j-center a-center'><AiOutlineInfoCircle/>More Info</button>
                </div>

                </div>
            </div>
            <Slider movies={movies}/>
        </Container>
    )
}

const Container = styled.div`
 background-color: black;
 .hero{
    position: relative;
    .background-image{
           filter: brightness(85%);
        }
    img{
        height:100vh;
        width:100vw;
       
    }
    .container{
        position: absolute;
        bottom: 5rem;
        .logo{
            img{
                width:40%;
                height:40%;
                margin-left: 2.5rem;
                margin-bottom: -3rem;
                
            }
        }

        .buttons{
            margin: 5rem;
            gap: 2rem;
            

            
            
            button {
                color:#001f3f;
                font-size: 1.4rem;
                gap: 1rem;
                border-radius: 2rem;
                padding: 0.5rem;
                padding-left: 2rem;
                padding-right: 2.4rem;
                border: none;
                cursor: pointer;
                background-color:#fac402;
                transition: 0.3s ease-in-out;
                &:hover{
                opacity: 0.7;
                }
                &:nth-of-type(2) {
                    background-color: white;
                    color:#001f3f;;
                    svg{
                        font-size: 1.8rem;
                    }
            }
        }
    }
 `;
