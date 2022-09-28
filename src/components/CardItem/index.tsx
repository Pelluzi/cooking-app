import { useState} from 'react';
import { Card, CardActions, CardContent, CardHeader, IconButton } from '@mui/material';
import { ListItem } from '../List/ListItem';
import { OpenInNew } from '@mui/icons-material';
import { PopUp } from '../PopUp';
import Image from '../Image';

interface Recipe {
  categories: [];
  id: number;
  imageUrl: string;
  ingredients: [];
  portions: number;
  preparationMethod: [];
  timeToPrepare: string;
  title: string;
}

export default function CardItem( recipe :Recipe) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card 
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}>
      <CardHeader
        title={recipe.title}
        subheader={recipe.timeToPrepare}
        sx={{ textAlign: "left" }}
      />
      <Image height="192" alt={recipe.title} src={recipe.imageUrl} />
      <CardContent>
        <ListItem ingredients={recipe.ingredients} />
      </CardContent>
      <CardActions sx={{marginTop: "auto"}}>
        <IconButton onClick={handleOpen} sx={{ color: "rgba(0, 0, 0, 0.6)" }} aria-label="open steps to cook">
          <OpenInNew />
        </IconButton>
        <PopUp preparationMethod={recipe.preparationMethod} open={open} handleClose={handleClose} ></PopUp>
      </CardActions>
    </Card>
  );
}