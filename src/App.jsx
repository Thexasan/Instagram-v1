import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import {
  Home,
  Profile,
  Login,
  Edit,
  ChangePassword,
  SignUp,
  Reels,
  Interesting
} from "./Routes/Routes";
import { Suspense } from "react";
import LoaderPage from "./components/LoaderPage/LoaderPage";
import AuthCheck from "./utils/AuthCheck";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:
      <ProtectedRoute>
      <Layout />
      </ProtectedRoute>,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoaderPage />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/account",
          element: (
            <Suspense fallback={<LoaderPage />}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: "/account/edit",
          element: (
            <Suspense fallback={<LoaderPage />}>
              <Edit />
            </Suspense>
          ),
        },
        {
          path: "/account/password/change",
          element: (
            <Suspense fallback={<LoaderPage />}>
              <ChangePassword />
            </Suspense>
          ),
        },
        {
          path: "/reels",
          element: (
            <Suspense fallback={<LoaderPage />}>
              <Reels />
            </Suspense>
          ),
        },
        {
          path: "/interesting",
          element: (
            <Suspense fallback={<LoaderPage />}>
              <Interesting />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<LoaderPage />}>
          <AuthCheck>
          <Login />
         </AuthCheck>
        </Suspense>
      ),
    },
    {
      path: "/accounts/emailsignup",
      element: (
        <Suspense fallback={<LoaderPage />}>
          <AuthCheck>
            <SignUp />
          </AuthCheck>
        </Suspense>
      ),
    },
  ]);

// setTimeout(function(){
//     location.reload();
// }, 1000);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
