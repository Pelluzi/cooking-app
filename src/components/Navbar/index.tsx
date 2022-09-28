import { Container ,Box, TextField, Typography } from "@mui/material";
import { AppLogo } from "../../assets/icons/AppLogo";

function LogoContainer() {
  return (
    <Box 
      sx={{
        display: "flex",
        textAlign: "left"
      }}
    >
      <AppLogo fontSize="large" />
      <Box marginLeft={"17px"}>
        <Typography fontSize={"1rem"} variant="h1">
          CookWell
        </Typography>
        <Typography fontSize={"0.75rem"} variant="h1">
          by Devexperts
        </Typography>
      </Box>
    </Box>
  )
}

interface props {
  setSearchQuery: Function;
}

export function Navbar({ setSearchQuery }: props) {


  return (
    <Container maxWidth={'xl'} sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "24px",
        boxShadow: "0px 2px 5px rgb(0 0 0 / 20%)",
        marginBottom: "36px"
      }}>
      <LogoContainer />
      <TextField
        sx={{
          marginLeft: "auto"
        }}
        id="search-bar"
        onInput={(event) => {
          setSearchQuery((event.target as HTMLInputElement).value);
        }}
        label="Filter Ingridients"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
    </Container>
  )
}