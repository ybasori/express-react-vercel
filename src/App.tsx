import "react-toastify/dist/ReactToastify.css";

import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import ErrorBoundaryLayout from "./Layouts/ErrorBoundaryLayout/ErrorBoundaryLayout";
import ProtectedRoute from "./Layouts/ProtectedRoute/ProtectedRoute";
import ProtectedRouteNoAuth from "./Layouts/ProtectedRouteNoAuth/ProtectedRouteNoAuth";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import { store } from "./store";

const persistor = persistStore(store);
const Home = React.lazy(() => import("./Pages/Home/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const Login = React.lazy(() => import("./Pages/Login/Login"));
const Register = React.lazy(() => import("./Pages/Register/Register"));
const Profile = React.lazy(() => import("./Pages/Profile/Profile"));

interface IScopeRoute {
  path?: string;
  children?: IScopeRoute[];
  element: React.ReactNode;
}

// eslint-disable-next-line no-unused-vars
const scopeRoute: (route: IScopeRoute) => IScopeRoute = (route) => {
  return {
    ...route,
    ...(!!route.children ? { children: route.children.map(scopeRoute) } : {}),
    element: <ErrorBoundaryLayout>{route.element}</ErrorBoundaryLayout>,
  };
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/",
      element: <ProtectedRouteNoAuth />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/*",
      element: <PageNotFound />,
    },
  ].map(scopeRoute)
);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </PersistGate>
    </Provider>
  );
}

export default App;
