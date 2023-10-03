import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import video from '../assests/vedio.mp4'
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
export default function Card({movieData, isLiked=false}) {
    const [isHoverd, setIsHovered] = useState(false);
    const navigate = useNavigate();
    return (
        <Container onMouseEnter={()=> setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(false)}>
            <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie" />
            {
                isHoverd && (
                    <div className="hover">
                    <div className="image-video-container">
                    <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movie"
                    onClick={()=>navigate("/player")} />
                    <video src={video} autoPlay loop muted></video>
                    </div>
                      <div className="info-container flex column">
                        <h3 className='name' onClick={()=> navigate("/player")}>{movieData.name}</h3>
                        <div className="icons flex j-between">
                            <div className="controls flex"></div>
                        </div>
                      </div>
                    </div>
                )
            }
        </Container>
    )
}

const Container = styled.div`
      
`;
