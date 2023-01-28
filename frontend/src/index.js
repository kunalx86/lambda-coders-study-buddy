import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { Route, Switch } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import TeacherLayout from "layouts/teacher";
import RTLLayout from "layouts/rtl";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import IndexPage from "views";
import { AuthProvider } from "contexts/AuthContext";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import TestPage from "views/student/Tests/TestPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemeEditorProvider>
            <BrowserRouter>
              <Switch>
                <Route path={`/auth`} component={AuthLayout} />
                <Route path={`/admin`} component={AdminLayout} />
                <Route path={`/teacher`} component={TeacherLayout} />
                <Route path={`/rtl`} component={RTLLayout} />
                <Route exact path={`/`} component={IndexPage} />
              </Switch>
            </BrowserRouter>
          </ThemeEditorProvider>
        </AuthProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
