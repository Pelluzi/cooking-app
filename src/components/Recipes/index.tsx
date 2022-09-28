import Grid from '@mui/material/Unstable_Grid2';
import CardItem from "../CardItem"

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

interface RecipesProps {
  recipes: [RecipeProps];
}

export function Recipes({ recipes } : RecipesProps) {

  return (
    <Grid
      container
      columns={{ xs: 3, sm: 6, md: 9, lg: 12 }}
      rowSpacing={3}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {recipes.map((recipe, index) => {
        return (
          <Grid key={index} xs={3}>
            <CardItem {...recipe}></CardItem>
          </Grid>
        )
      })}
    </Grid>
  )
}