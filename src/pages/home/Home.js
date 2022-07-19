import { HeaderText, HomeImg, ImgDiv } from './Home.style'
import axios from 'axios';
import { useState } from 'react';
import Header from '../../components/header/Header';
import Cards from '../../components/cards/Cards';
import homeSvg from "../../assets/home.svg"

const Home = () => {
  const mealType = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
  const [query, setQuery] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState(null);

  const appId = "736c2a69";
  const apiKey = "2f2bafbb63b04d77acb81afb49f06bd5";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query){
      try {
      const {data} = await axios.get(url);
      // console.log(data.hits);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
    }else {
      alert('please enter a meal')
    }
    
  }

 console.log({recipes})
  return (
    <div>
      <Header setQuery={setQuery} setSelectedMeal={setSelectedMeal} mealType={mealType} getData={getData}/>

      {/* 1- The default background with a chef */}
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg}/>
        </ImgDiv>
      )}

      {/* 2- if the search value is null (nothing is typed) */}
      {recipes?.length === 0 && <HeaderText>The Food can not be found</HeaderText>}

      {/* 3- if the search value is not null (somehthing has been typed) */}
      {recipes?.length > 0 && <Cards recipes={recipes}/>}

    </div>
  )
}

export default Home