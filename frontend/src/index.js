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
import TestPage1 from "views/student/Tests/TestPage1";
import TestPage2 from "views/student/Tests/TestPage2";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import WeeklyTest from "views/student/Tests/WeeklyTest";
import AptitudeTest from "views/student/Tests/AptitudeTest";
import Community from "views/student/Community";

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
                <Route exact path={`/student/weeklytest`} component={TestPage1} />
                <Route exact path={`/student/aptitudetest`} component={TestPage2} />
                <Route exact path={"/student/test1"} component={WeeklyTest} />
                <Route exact path={`/student/test2`} component={AptitudeTest} />
                <Route exact path={'/student/community'} component={Community} />
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
