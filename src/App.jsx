import { createBrowserRouter, RouterProvider } from 'react-router';
import MainContext from './MainContext';
import Layout from './Website/Layout';
import Home from './Website/Pages/Home';

export default function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />
          }
        ]
      }
    ],
    { basename: "/Kitchik" }  // <-- set your GitHub repo name here
  );

  return (
    <>
      <MainContext>
        <RouterProvider router={routes} />
      </MainContext>
    </>
  );
}
