import { StyledEngineProvider } from "@mui/material";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

const JournalApp = () => {
  return (
    <StyledEngineProvider injectFirst>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </StyledEngineProvider>
  );
};

export default JournalApp;
