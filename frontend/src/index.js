import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { Route, Switch } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import TeacherLayout from "layouts/teacher";
import RTLLayout from "layouts/rtl";
import { ChakraProvider, Box, Heading, Text } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import IndexPage from "views";
import { AuthProvider } from "contexts/AuthContext";
import { BrowserRouter, Router } from "react-router-dom/cjs/react-router-dom.min";
import TestPage1 from "views/student/Tests/TestPage1";
import TestPage2 from "views/student/Tests/TestPage2";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import WeeklyTest from "views/student/Tests/WeeklyTest";
import AptitudeTest from "views/student/Tests/AptitudeTest";
import Slidebar from "views/student/community/Slidebar";
import Coding from "views/student/community/Coding";
import Sidebar from "components/sidebar/Sidebar";
import Sports from "views/student/community/Sports";
import Volunteer from "views/student/community/Volunteer";
import Entrepreneurship from "views/student/community/Entrepreneurship";
import Maths from "views/student/recommendation/Maths";
import RecomSidebar from "views/student/recommendation/RecomSlidebar";
import English from "views/student/recommendation/English";
import Science from "views/student/recommendation/Science";
import Geography from "views/student/recommendation/Geography";
import History from "views/student/recommendation/History";

const queryClient = new QueryClient();

const AptitudeResult = () => {
  const video = <iframe width="560" height="315" src="https://www.youtube.com/embed/4e6KSaCxcHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>;

  return (
    <Box>
      <Heading>
        <Text>We hope that the Aptitude Test help you in making a choice for your career!</Text>
      </Heading>
      {video}
    </Box>
  )
}

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
                <Route exact path={`/student/aptituderesult`} component={AptitudeResult} />
                <Route exact path={"/student/test1"} component={WeeklyTest} />
                <Route exact path={`/student/test2`} component={AptitudeTest} />
                <Route exact path={'/student/community'} component={Slidebar} />
                <Route exact path={"/student/coding"} component={Coding} />
                <Route exact path={"/student/sports"} component={Sports} />
                <Route exact path={"/student/volunteer"} component={Volunteer} />
                <Route exact path={"/student/entrepreneurship"} component={Entrepreneurship} />
                <Route exact path={"/student/Recommendations"} component={RecomSidebar} />
                <Route exact path={"/student/Maths"} component={Maths} />
                <Route exact path={"/student/English"} component={English} />
                <Route exact path={"/student/History"} component={History} />
                <Route exact path={"/student/Science"} component={Science} />
                <Route exact path={"/student/Geography"} component={Geography} />
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
