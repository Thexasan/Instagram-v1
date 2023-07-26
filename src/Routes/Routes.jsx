import { lazy } from "react"




export const Home = lazy (() => import ("../pages/Home/Home.jsx"))
export const Profile = lazy (() => import ("../pages/Profile/Profile.jsx"))
export const Login = lazy (() => import ("../pages/SignIn/Login.jsx"))
export const SignUp = lazy (() => import ("../pages/SignUp/SignUp.jsx"))
export const Edit = lazy (() => import ("../pages/Edit/Edit.jsx"))
export const ChangePassword = lazy (() => import ("../pages/ChangePassword/ChangePassword.jsx"))
export const Reels = lazy (() => import ("../pages/Reels/Reels.jsx"))
export const Interesting = lazy (() => import ("../pages/Interesting/Interesting.jsx"))