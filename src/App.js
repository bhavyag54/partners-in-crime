import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/source-code-pro/700.css';
import '@fontsource/roboto/400.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';

import FindPartnerPage from './pages/FIndPartnerPage';
import AddAProjectPage from './pages/AddAProjectPage';
import MessagesPage from './pages/MessagesPage';
import NotificationsPage from './pages/NotificationsPage';
import Landing from './pages/Landing';
import Profile from './pages/ProfilePage';
import useAuth from './context/AuthContext';
import AboutUs from './components/AboutUs';
import PrivateRoute from './utils/PrivateRoute';

import Searchpage from './pages/Searchpage';
import MyProjectsPage from './pages/MyProjectsPage';
import FavouriteHackathonsPage from './pages/FavouriteHackathonsPage';
import SpecificProjectPage from './pages/SpecificProjectPage';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/project"
          element={
            <PrivateRoute>
              <SpecificProjectPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
        <Route
          path="/find"
          element={
            <PrivateRoute>
              <FindPartnerPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddAProjectPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <PrivateRoute>
              <MessagesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <PrivateRoute>
              <NotificationsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/search"
          element={
            <PrivateRoute>
              <Searchpage />
            </PrivateRoute>
          }
        />
        <Route
          path="/myprojects"
          element={
            <PrivateRoute>
              <MyProjectsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/favouritehackathons"
          element={
            <PrivateRoute>
              <FavouriteHackathonsPage />
            </PrivateRoute>
          }
        />

        <Route path="/aboutus" element={<AboutUs />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
