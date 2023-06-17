// Router imports
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';

// Pages
import Register   from './Pages/Register';
import Login      from './Pages/Login';
import Home       from './Pages/Home';
import Profile    from './Pages/Profile';
import Moments    from './Pages/Moments';
import SinglePost from './Pages/SinglePost';
import WritePost  from './Pages/WritePost';

// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Styles
import './style.scss';



// Layout
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};



const router  = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/moments",
          element: <Moments />
        },
        {
          path: "/post/:id",
          element: <SinglePost />
        },
        {
          path: "/writepost",
          element: <WritePost />
        },
      ]
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
]);

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}



export default App;
