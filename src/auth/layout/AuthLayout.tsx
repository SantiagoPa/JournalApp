import { Grid, Typography } from "@mui/material";
import { ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
  title: string;
}

export const AuthLayout = ({ children, title }: Props) => {
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
      className="min-h-[100vh] p-4"
    >
      <Grid
        item
        className="shadow-2xl"
        xs={3}
        sx={{
          width: { sm: 450 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 1,
          }}
        >
          {title}
        </Typography>

        {children}
        
      </Grid>
    </Grid>
  );
};
