import React from 'react'
import styled from 'styled-components'
import Card from './Card'
export default function CardSlider({data,title}) {
    return (
        <Container>
            {
                data.map((movie,index)=>{
                    return <Card movieData={movie} index={index} key={movie.id} />
                })
            }
        </Container>
    )
}
const Container = styled.div``;
