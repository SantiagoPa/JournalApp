import { Box, Toolbar } from "@mui/material"
import { ReactElement } from "react"
import { NavBar, SideBar } from "../components";

interface Props {
    children: ReactElement | ReactElement[]
}

const drawerWidth = 240;

export const JournalLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: 'flex', }}>
        {/* Navbar drawerWidth*/}
        <NavBar drawerWidth={drawerWidth} />

        {/* SideBar drawerWidth*/}
        <SideBar drawerWidth={drawerWidth} />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />
            { children }
        </Box>
    </Box>
  )
}
