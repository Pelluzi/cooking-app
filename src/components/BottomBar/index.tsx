import { Box } from "@mui/material"

const text = "Please don’t try these recipes at home. We hope that they will inspire you to cook more, but consider that their main idea is your coding task for Devexperts."
const copyRightText = "Copyright © 2022. All right reserved";

export function BottomBar() {
	return (
		<Box
			sx={{
				alignItems:"center",
				boxShadow:"0px -2px 5px rgb(0 0 0 / 20%)",
				display:"flex",
				flexDirection:"column",
				justifyContent:"center",
				padding:"42px 0",
				marginTop: "36px"
			}}
		>
			<p className="read-the-docs">
				{text}
			</p>
			<p className="read-the-docs">
				{copyRightText}
			</p>
	</Box>
  )
}