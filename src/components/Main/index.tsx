import { useEffect, useRef, useState } from 'react';
import { Recipes } from '../../components/Recipes';
import { BottomBar } from '../../components/BottomBar';
import { Navbar } from '../../components/Navbar';
import { Container } from '@mui/system';

interface RecipeProps {
  categories: [];
  id: number;
  imageUrl: string;
  ingredients: [];
  portions: number;
  preparationMethod: [];
  timeToPrepare: string;
  title: string;
}

interface Recipes {
  recipes: [RecipeProps];
}

const filterData = (query: string, recipes: any[]) => {
  if (!query || query.length < 3) {
    return recipes;
  } else {
    return recipes.filter(recipe => recipe.ingredients.some((ingredient:any) => ingredient.toLowerCase().includes(query.toLowerCase())));
  }
};

export function Main() {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const runOnce = useRef(true);

  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, recipes);

  async function loadRecipes() {
    runOnce.current = false;
    const response = await fetch('https://api.jsonbin.io/v3/b/62d56dbd5ecb581b56c3e44d');
    const data = await response.json();
    const recipesData = data?.record?.recipes;
    setRecipes(recipesData);
  }

  useEffect(() => {
      runOnce.current && loadRecipes()
  }, []);

  return (
    <Container
      maxWidth={'xl'}
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        justifyCcontent: "space-between",
      }}
    >
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Recipes recipes={dataFiltered} />
      <BottomBar  />
    </Container>
  )
}
