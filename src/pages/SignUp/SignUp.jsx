import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import image from "./img/image.jpg"
import { axiosLogin, saveToken } from "../../utils/AxiosRequest";
const SignUp = () => {
  const navigate = useNavigate()
  const register=async (event)=>{
    event.preventDefault();
    let user ={
      email:event.target["email"].value,
      fullname:event.target["fullname"].value,
      username:event.target["username"].value,
      password:event.target["password"].value
    }
    try{
      const {data} = await axiosLogin.post('register', user)
      console.log(data);
      saveToken(data.accessToken, true)
      navigate("/login")
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className=" bg-[#FFF] h-[100%] w-full flex items-center justify-center pt-[30px]">
    <span className="">
        <section className="section-all">
        
      <main className="main flex items-center justify-center gap-x-[50px]">
      <div className="flex items-center justify-end w-[50%] md:hidden">
        <img src={image} alt="" className="w-[350px]" />
        </div>
        <div className="wrapper  w-[50%] md:w-full flex items-center justify-center">
          <article className="article md:flex md:items-center md:justify-center">
            <div className="content">
              <div className="login-box">
                <div className="header flex items-center justify-center">
                <h1 className="text-[#000] dark:text-[#FFF] text-[25px] py-[10px]">
              <div className="dark:hidden">
                <svg
                  aria-label="Instagram"
                  class="_ab6-"
                  color="#000"
                  fill="#000"
                  height="60"
                  role="img"
                  viewBox="32 4 113 32"
                  width="180"
                >
                  <path
                    clip-rule="evenodd"
                    d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="hidden dark:block">
                <svg
                  aria-label="Instagram"
                  class="_ab6-"
                  color="rgb(245, 245, 245)"
                  fill="rgb(245, 245, 245)"
                  height="60"
                  role="img"
                  viewBox="32 4 113 32"
                  width="108"
                >
                  <path
                    clip-rule="evenodd"
                    d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </h1>
                </div>
                <div>
                  <h1 className="text-[18px] w-[80%] mx-auto text-center pb-[20px] text-[#737373]">Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</h1>
                </div>
                <div className="form-wrap">
                  <form onSubmit={(e)=>register(e)} className="form">

                    <div className="input-box">
                      <input type="text" id="name" placeholder="Телефон, имя пользователя или эл. адрес" aria-required="true"  name="email" required/>
                    </div>  
                    <div className="input-box">
                      <input type="text" id="name" placeholder="Имя и фамилия" aria-required="true"  name="fullname" required/>
                    </div>  
                    <div className="input-box">
                      <input type="text" id="name"  placeholder="Имя пользователя" aria-required="true" name="username" required/>
                    </div>  

                    <div className="input-box">
                      <input type="password" name="password" id="password" placeholder="Пароль" maxlength="30" aria-required="true" required/>
                    </div>  
                    <p className="w-[80%] mx-auto text-[12px] text-center py-[10px]">Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. </p>
                    <p className="w-[80%] mx-auto text-[12px] text-center py-[10px]">Регистрируясь, вы принимаете наши <Link className="text-[#00376B]">Условия</Link>  <Link className="text-[#00376B]">Политику конфиденциальности</Link> и <Link className="text-[#00376B]">Политику в отношении файлов cookie</Link></p>

                    <span className="button-box">
                      <button className="btn" type="submit" name="submit">Регистрация</button>
                    </span>  
                  </form>
                </div>
              </div>
              <div className="login-box">
                <p className="text font-[600]">Есть аккаунт?<Link to={"/login"}>Вход</Link></p>
              </div>
              <div className="app">
                <p>Установите приложение.</p>
                <div className="app-img flex items-center pt-[20px]">
                  <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
                    <img src="data:image/png;base64,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"/>
                  </a>  
                </div> 
              </div> 
            </div>
            
          </article>
          
        </div>
        
      </main> 
       
    </section>
    
    
    <footer className="w-full bg-[#FFF] dark:bg-[#000] flex items-center pb-[30px] pt-[50px]">
            <div className="w-full">
              <ul className="flex items-center justify-center flex-wrap gap-x-[15px] gap-y-[5px] text-center">
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  Meta
                </Link>
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  Информация
                </Link>
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  Блог
                </Link>
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  Вакансия
                </Link>
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  Помощ
                </Link>
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  API
                </Link>
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  Конфиденциальность
                </Link>
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  Условия
                </Link>
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  Популярные аккаунты
                </Link>
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  Места
                </Link>
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  Instagram Lite
                </Link>
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  Threads
                </Link>
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  Загрузка контактов и лица, не являющиеся пользователями
                </Link>
                <Link className="dark:text-[#A8A8A8] text-[#000] hover:underline text-[12px] text-center">
                  Meta Verified
                </Link>
              </ul>
              <div className="flex items-center justify-center py-[20px] gap-x-[20px] mx-auto">
                <select name="" id="">
                  <option value="">Русскый</option>
                  <option value="">Русскый</option>
                  <option value="">Русскый</option>
                  <option value="">Русскый</option>
                  <option value="">Русскый</option>
                </select>
                <p className="dark:text-[#A8A8A8] text-[#000] ">
                  © 2023 Instagram from Meta
                </p>
              </div>
            </div>
          </footer>
  </span>
  </div>
  );
};

export default SignUp;
