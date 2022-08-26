import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "primary.main",
      }}
      className="min-h-[calc(100vh-120px)] rounded-md"
    >
      <Grid item xs={12}>
        <StarOutlineIcon sx={{ fontSize: 80, color: 'white' }}/>
      </Grid>
       <Grid item xs={12}>
        <Typography variant='h5' color="white">
            Selecciona o crea una nota 
        </Typography>
      </Grid>
    </Grid>
  );
};
