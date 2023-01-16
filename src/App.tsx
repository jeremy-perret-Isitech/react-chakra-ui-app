import { Fragment } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import FirebaseFirestore from "./services/Firebase/Firestore";
import HomePage from "./module/HomePage/HomePage";
import ListMoviesPage from "./module/ListMovies/ListMoviesPage";
import AuthenticationPage from "./module/AuthenticationPage/AuthenticationPage";

export const App = () => {
  return (
    <Fragment>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/auth" element={<AuthenticationPage />} />
            <Route path="/movies" element={<ListMoviesPage />} />
            <Route path="/db" element={<FirebaseFirestore />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Fragment>
  )
}
