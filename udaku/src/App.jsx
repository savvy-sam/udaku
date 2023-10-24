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
import Footer from './components/Footer';
import { Box, CssBaseline,  } from '@mui/material';
import {theme} from "./theme.js"
import { darkTheme } from './darkTheme';
import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Politics from './pages/Politics';
import Navbar from './components/navbar';


function App() {

  const [mode, setMode] = useState("light");

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000*60*30,
        refetchOnWindowFocus: false, 
        staleTime: 1000*60*30, 
      },
    },
  });

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={mode==="dark" ? darkTheme: theme}>
          <CssBaseline />
            <Box>
                <Navbar setMode={setMode} mode={mode} />
                <Outlet />
                <Footer />
            </Box>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
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
          path: "/politics",
          element: <Politics />,
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
        {
          path: "*",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
