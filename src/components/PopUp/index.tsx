import { Box, IconButton, Modal, Typography } from "@mui/material";
import { Close } from "@mui/icons-material"
import { Steps } from "./Steps";

interface RecipeProps {
	step: number;
	text: string;
}

interface PopUpProps {
	preparationMethod: [RecipeProps];
	open: boolean;
	handleClose: () => void;
}

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: "min(90vw, 563px)",
	bgcolor: '#fff',
	filter: "drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.14)) drop-shadow(0px 6px 30px rgba(0, 0, 0, 0.12)) drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.2))",
	borderRadius: '4px',
	padding: "24px",
};


export function PopUp({ preparationMethod, open, handleClose }: PopUpProps) {

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
			<IconButton
				sx={{
					position: "absolute",
					top: "0",
					right: "0",
				}}
				onClick={handleClose}
			>
			<Close sx={{ color: "rgba(0, 0, 0, 0.87)" }} />
			</IconButton>
				<Steps preparationMethod={preparationMethod} />
			</Box>
		</Modal>
	)
}