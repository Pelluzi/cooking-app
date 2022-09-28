import { BulletItem } from "../BulletItem"

interface ListItemProps {
  ingredients: []
}

export function ListItem({ ingredients } : ListItemProps) {
  return (
    <ul
      style={{
        textAlign: "left",
        padding: "0",
      }}
    >
      {ingredients.map((ingredient, index) => {
        return (
          <BulletItem key={index} ingredient={ingredient}></BulletItem>
        )
      })}
    </ul>
  )
}