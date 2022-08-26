import { Link as LinkRouter } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              mt: 2,
            }}
          >
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              required
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: 2,
            }}
          >
            <TextField
              label="contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              required
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography
                  sx={{
                    ml: 1,
                  }}
                >
                  Google
                </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={LinkRouter} color="inherit" to="/auth/register">
              Crear Cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
