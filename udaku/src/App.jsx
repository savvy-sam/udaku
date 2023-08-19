import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Celebrities from './pages/Celebrities';
import ContactUs from './pages/ContactUs';
import Economy from './pages/Economy';
import Gossip from './pages/Gossip';
import Music from './pages/Music';
import Sports from './pages/Sports';
import ViewArticle from './pages/ViewArticle';
import Health from './pages/Health';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { Box,  } from '@mui/material';
import {theme} from "./theme.js"
import { darkTheme } from './darkTheme';
import { ThemeProvider } from '@mui/material'

function App() {

  const [mode, setMode] = useState("light");

  const Layout = () => {
    return (
      <ThemeProvider theme={mode==="dark" ? darkTheme: theme}>
      <Box bgcolor={"Background.default"} color={"text.primary"}>
          <Navbar setMode={setMode} mode={mode} />
          <Outlet />
          <Footer />
      </Box>
      </ThemeProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/celebrities",
          element: <Celebrities />,
        },
        {
          path: "/gossip",
          element: <Gossip />,
        },
        {
          path: "/economy",
          element: <Economy />,
        },
        {
          path: "/gossip",
          element: <Gossip />,
        },
        {
          path: "/health",
          element: <Health />,
        },
        {
          path: "/music",
          element: <Music />,
        },
        {
          path: "/sports",
          element: <Sports />,
        },
        {
          path: "/post/",
          element: <ViewArticle />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
