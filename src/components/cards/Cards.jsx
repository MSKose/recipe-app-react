import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { Card } from 'react-bootstrap'
import { Header, MainContainer, Card, Image, Button } from './Cards.style'

const Cards = ({ recipes }) => {
    const navigate = useNavigate();

  return (
    <MainContainer wrap="wrap">
        {/*we will destructure recipe on map parameter because the recipe we want is one lever deep in the recipes array  */}
        {recipes.map(({recipe},index) => (
        <Card key={index}>
            <Header>{recipe.label}</Header>
            <Image src={recipe.image}/>
            <Button onClick={() => navigate('detail', {state: recipe})}>View More</Button>
        </Card>
        ))}
    </MainContainer>
  )
}

export default Cards;