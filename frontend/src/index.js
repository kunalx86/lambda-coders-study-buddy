import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import RTLLayout from "layouts/rtl";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import IndexPage from "views";
import { AuthProvider } from "contexts/AuthContext";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <AuthProvider>
        <ThemeEditorProvider>
          <HashRouter>
            <Switch>
              <Route path={`/auth`} component={AuthLayout} />
              <Route path={`/admin`} component={AdminLayout} />
              <Route path={`/rtl`} component={RTLLayout} />
              <Route path={`/`} component={IndexPage} />
            </Switch>
          </HashRouter>
        </ThemeEditorProvider>
      </AuthProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
