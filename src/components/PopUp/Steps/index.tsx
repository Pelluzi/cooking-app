import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

interface RecipeProps {
  step: number;
  text: string;
}

interface StepsProps {
  preparationMethod: [RecipeProps];
}

const listItemIconStyle = {
	color: "#fff",
	display: "block",
	backgroundColor: "#3593E9",
	borderRadius: "50%",
	margin: "4px 16px auto 0",
	minWidth: "32px",
	marginTop: "4px",
	marginBottom: "auto",
	lineHeight: "32px",
	textAlign: "center",
	fontSize: "18px",
};

export function Steps({ preparationMethod }: StepsProps) {

	return (
		<List>
			{preparationMethod.map(({ step, text }, index) => {
				return (
					<ListItem key={index} disablePadding>
							<ListItemButton>
								<ListItemIcon sx={listItemIconStyle} >
										{step}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
					</ListItem>
				)
			})}
		</List>
	)
}