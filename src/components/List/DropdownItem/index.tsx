interface CardItemProps {
    id: number
}

export function CardItem({ id } : CardItemProps) {
  return (
    <p>
        { id }
    </p>
  )
}