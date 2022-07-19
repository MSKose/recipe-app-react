import HomeStyle from './Home.style'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';

const Home = () => {
  const mealType = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
  const [query, setQuery] = useState('egg');
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState('');

  const appId = "736c2a69";
  const apiKey = "2f2bafbb63b04d77acb81afb49f06bd5";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const {data} = await axios.get(url);
      console.log(data.hits);
    } catch (error) {
      console.log(error);
    }
  }

 console.log({recipes})
  return (
    <div>
      <Header setQuery={setQuery} setSelectedMeal={setSelectedMeal} mealType={mealType} getData={getData}/>
    </div>
  )
}

export default Home