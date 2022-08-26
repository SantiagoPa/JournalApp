import { Link as LinkRouter } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear una cuenta">
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
              label="nombre completo"
              type="text"
              placeholder="ej: Carlos Mario"
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
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography
            sx={{
              mr:1
            }}
            >
              ¿Ya tienes una cuenta?
            </Typography>
            <Link component={LinkRouter} color="inherit" to="/auth/login">
              Autenticarme
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
