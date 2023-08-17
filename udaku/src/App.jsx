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
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';



function App() {

  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const Layout = () => {
    return (
      <div className="app">
          <ThemeProvider theme={darkTheme}>
                <Navbar setMode={setMode} mode={mode} />
                <Outlet />
                <Footer />
          </ThemeProvider>
      </div>
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
          path: "/contactus",
          element: <ContactUs />,
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
          path: "/post/:id",
          element: <ViewArticle />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
