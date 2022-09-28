import { DotIcon } from "../../../assets/icons/DotIcon";

interface BulletItemProps {
  ingredient: string;
}

export function BulletItem({ ingredient } : BulletItemProps) {
  return (
    <li 
      style={{
        display: "flex",
        alignItems: "baseline",

      }}>
        <DotIcon sx={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "8px", marginLeft: "5px", marginRight: "10px" }} />
        { ingredient }
    </li>
  )
}