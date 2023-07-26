import React from "react";
import "./Profile.css"
import person from "../../assets/profile.jpg";
// import person1 from "./1.png";
import person2 from "./2.jpg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk",
    title: "Burger",
  },
  {
    img: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863",
    title: "Camera",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIZbidgJqFKZbuI5xZRSVllIHG1RxhA2R-pBVs84&s",
    title: "Coffee",
  },
  {
    img: "data:image/jpeg;base64,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",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
import DialogContent from "@mui/material/DialogContent";
import Switcher from "../../components/Switcher/Switcher";
const Profile = () => {
  const [menuMobile, setMenuMobile] = React.useState(false);

  const handleClickOpenMobile = () => {
    setMenuMobile(true);
  };

  const handleCloseMobile = () => {
    setMenuMobile(false);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="w-full fixed top-0 left-0 py-[5px] bg-[#FFF] dark:bg-[#000] hidden z-20 px-[20px] md:block border-b border-[#dfdede] dark:border-[#2b2b2b] smm:py-[10px]">
        <div className="flex items-center justify-between">
          <div className="w-[30%]">
            <div onClick={handleClickOpenMobile} className="text-[25px] py-[10px]">
            <div className="">
                    <div>
                      <div className="hidden dark:block">
                      <svg
                  aria-label="Параметры"
                  class="x1lliihq x1n2onr6"
                  color="rgb(245, 245, 245)"
                  fill="rgb(245, 245, 245)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Параметры</title>
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
                      </div>
                      <div className="dark:hidden">
                      <svg
                  aria-label="Параметры"
                  class="x1lliihq x1n2onr6"
                  color="#000"
                  fill="#000"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Параметры</title>
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
                      </div>
                    </div>
                    </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-[30%]">
            <h1 className="text-[#000] dark:text-[#FFF] text-[15px] py-[10px] px-[5px] font-[600]">
              thexasan_
            </h1>
          </div>
          <div className="flex items-center justify-end w-[30%]">
            <h1 className="text-[#000] dark:text-[#FFF] text-[15px] px-[5px] font-[600] text-center flex items-center">
            <div className="">
                    <div>
                      <div className="hidden dark:block">
                      <svg
                aria-label="Интересные люди"
                class="x1lliihq x1n2onr6"
                color="rgb(245, 245, 245)"
                fill="rgb(245, 245, 245)"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <title>Интересные люди</title>
                <path d="M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z"></path>
              </svg>
                      </div>
                      <div className="dark:hidden">
                      <svg
                aria-label="Интересные люди"
                class="x1lliihq x1n2onr6"
                color="#000"
                fill="#000"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <title>Интересные люди</title>
                <path d="M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z"></path>
              </svg>
                      </div>
                    </div>
                    </div>
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto md:pt-[20px]">
        <div className="flex items-center justify-center  md:justify-start sm1:justify-center md:gap-x-[20px] border-b border-[#5f5f5f] pt-[70px] pb-[30px] px-[10px] md:border-none">
          <div className="w-[30%] flex items-center justify-center md:w-[20%]">
            <img
              src={person}
              alt=""
              className="w-[150px] h-[150px] sm1:min-w-[80px] rounded-[50%]"
            />
          </div>
          <div className="w-[50%] md:w-[50%] sm1:w-[60%]">
            <div className="flex items-center justify-start gap-x-[30px] sm:gap-y-[5px] sm:flex-wrap sm:gap-x-[20px]">
              <h1 className="text-[#000] dark:text-[#FFF] text-[25px] sm:text-[20px]">
                thexasan_
              </h1>
              <Link
                to={"/account/edit"}
                className="w-auto px-[10px] py-[5px] sm1:order-3  rounded-[10px] bg-[#f0f0f0] dark:bg-[#363636] text-[#000] dark:text-[#F5F5F5] font-[600] text-center leading-[15px] md:px-[5px]"
              >
                Редактировать <br /> профиль
              </Link>
              <button onClick={handleClickOpen}>
              <div className="flex items-center justify-center">
                    <div>
                      <div className="hidden dark:block">
                      <svg
                  aria-label="Параметры"
                  class="x1lliihq x1n2onr6"
                  color="rgb(245, 245, 245)"
                  fill="rgb(245, 245, 245)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Параметры</title>
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
                      </div>
                      <div className="dark:hidden">
                      <svg
                  aria-label="Параметры"
                  class="x1lliihq x1n2onr6"
                  color="#000"
                  fill="#000"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Параметры</title>
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
                      </div>
                    </div>
                    </div>
                
              </button>
            </div>
            <div className="flex items-center justify-start gap-x-[30px] text-[#000] dark:text-[#FFF] py-[15px] md:hidden">
              <h1 className="text-center">
                <span className="font-[600]"> 20 </span> публикаций
              </h1>
              <h1 className="text-center">
                <span className="font-[600]"> 3440</span> подписчиков
              </h1>
              <h1 className="text-center">
                <span className="font-[600]"> 10 </span> подписок
              </h1>
            </div>
            <div className="py-[10px]  md:hidden">
              <h1 className="text-[#000] dark:text-[#FFF] font-[500]">thexasan_</h1>
              <p className="text-[#000] dark:text-[#FFF] text-[12px] font-[500]">
                Frontend developer <br />
                Лучшие вещи в жизни — бесплатны: объятия, улыбки, друзья,
                поцелуи, семья, сон, любовь, смех и хорошее настроение.
              </p>
            </div>
          </div>
        </div>
        <div className="py-[10px] px-[15px] hidden md:block">
          <h1 className="text-[#000] dark:text-[#FFF] font-[500]">thexasan_</h1>
          <p className="text-[#000] dark:text-[#FFF] text-[12px] font-[500]">
            Frontend developer <br />
            Лучшие вещи в жизни — бесплатны: объятия, улыбки, друзья, поцелуи,
            семья, сон, любовь, смех и хорошее настроение.
          </p>
        </div>
        <div className="">
          <div>
            <div className="items-center justify-evenly px-[20px] gap-x-[30px] text-[#000] dark:text-[#FFF] py-[15px] hidden md:flex border-t border-[#5f5f5f]">
              <h1 className="text-center flex flex-col sm:text-[13px]">
                <span className="font-[600]"> 20 </span> публикаций
              </h1>
              <h1 className="text-center flex flex-col sm:text-[13px]">
                <span className="font-[600]"> 3440</span> подписчиков
              </h1>
              <h1 className="text-center flex flex-col sm:text-[13px]">
                <span className="font-[600]"> 10 </span> подписок
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link className="inline-flex items-center justify-center gap-x-[10px] py-[10px] border-t border-t-[#000] dark:border-t-[#FFF]">
            <div className="dark:hidden">
            <svg
                aria-label=""
                class="_ab6-"
                color="#000"
                fill="#000"
                height="12"
                className="md:h-[25px] md:w-[25px]"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <rect
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  width="18"
                  x="3"
                  y="3"
                ></rect>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="9.015"
                  x2="9.015"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="14.985"
                  x2="14.985"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="21"
                  x2="3"
                  y1="9.015"
                  y2="9.015"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="21"
                  x2="3"
                  y1="14.985"
                  y2="14.985"
                ></line>
              </svg>
              </div>
              <div className="hidden dark:block">
              <svg
                aria-label=""
                class="_ab6-"
                color="rgb(245, 245, 245)"
                fill="rgb(245, 245, 245)"
                height="12"
                className="md:h-[25px] md:w-[25px]"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <rect
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  width="18"
                  x="3"
                  y="3"
                ></rect>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="9.015"
                  x2="9.015"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="14.985"
                  x2="14.985"
                  y1="3"
                  y2="21"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="21"
                  x2="3"
                  y1="9.015"
                  y2="9.015"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="21"
                  x2="3"
                  y1="14.985"
                  y2="14.985"
                ></line>
              </svg>
              </div>
              
              <h1 className="text-[#000] dark:text-[#FFF] text-center uppercase text-[12px] font-[500] md:hidden">
                Публикации
              </h1>
            </Link>
          </div>
          <div className="md:pb-[60px]">
            <ImageList cols={3}>
              {itemData.map((item) => (
                <ImageListItem key={item.img} className="">
                  <img
                    src={item.img}
                    // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    className="image"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent
            sx={{
              padding: 0,
              backgroundColor: "#2f2f2f",
            }}
            className="min-w-[400px] md:min-w-[350px] sm:min-w-[270px]"
          >
              <ul className="flex flex-col bg-[#FFF] dark:bg-[#2f2f2f]">
              <Link 
                to={"/account/password/change"}
                className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#FFF] text-[13px]"
              >
                Сменить пароль
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#FFF] text-[13px]">
                Профессиональный аккаунт
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#FFF] text-[13px]">
                QR-код
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#FFF] text-[13px]">
                Приложения и сайты
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#FFF] text-[13px]">
                Уведомления
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#FFF] text-[13px]">
                Конфиденциальность и безопасность
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#FFF] text-[13px]">
                Контроль
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#FFF] text-[13px]">
                Входы в аккаунт
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#FFF] text-[13px]">
                Электронные письма от Instagram
              </Link>
              <Link
                to={"/login"}
                className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#FFF] text-[13px]"
              >
                Выйти
              </Link>
              <button
                onClick={handleClose}
                className="py-[12px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#FFF] text-[13px]"
              >
                Отмена
              </button>
            </ul>
          </DialogContent>
        </Dialog>
      </div>
      <Dialog
      fullScreen
        open={menuMobile}
        onClose={handleCloseMobile}
        TransitionComponent={Transition}
      >
        <AppBar sx={{boxShadow:'none'}}>
          <Toolbar className="bg-[#ffffff] dark:bg-[#000]">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseMobile}
              aria-label="close"
            >
              <CloseIcon className="text-[#000] dark:text-[#FFF]"/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <List className="bg-[#fff] dark:bg-[#000] pt-[50px]">
        <div className="flex items-center  px-[15px] py-[12px] bg-[#535353]">
          <h1 className="font-[500]">Аккаунт</h1>
          </div>
          <Divider />
          <div className="flex items-center  px-[15px] py-[5px] bg-[#f4f4f4] dark:bg-[#131313] dark:text-[#a1a1a1]">
          {/* <h1 className="font-[500] uppercase">Аккаунт</h1> */}
          </div>
          <Divider />
          <div className="flex items-center  px-[15px] py-[12px] bg-[#f4f4f4] dark:bg-[#131313] dark:text-[#a1a1a1]">
          <h1 className="font-[500] uppercase">Аккаунт</h1>
          </div>
          <Divider />
          <Link to={"/account/edit"} className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Редактировать профиль</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link  className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Профессиональный аккаунт</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Ваши действия</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link  className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">QR-код</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link to={"/account/password/change"} className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Сменить пароль</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link  className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Конфиденциальность и безопасность</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link  className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Реклама</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Контроль</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link  className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Входы в аккаунт</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link  className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Электронные письма от Instagram</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link  className="flex items-center justify-between pl-[30px] py-[12px]">
          <h1 className="font-[600] text-[13px] text-[#0095F6]">Переключиться на личный аккаунт</h1>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <div className="flex items-center  px-[15px] py-[12px] bg-[#f4f4f4] dark:bg-[#131313] dark:text-[#a1a1a1]">
          <h1 className="font-[500] uppercase">Настройки</h1>
          </div>
          <Divider />
          <Link  className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Язык</h1>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          
          <div className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Переключить тему</h1>
          <Switcher/>
          </div>
          <Divider className="dark:bg-[#404040]"/>
          <Link  className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Приложения и сайты</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link  className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Уведомления</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <div className="flex items-center  px-[15px] py-[12px] bg-[#f4f4f4] dark:bg-[#131313] dark:text-[#a1a1a1]">
          <h1 className="font-[500] uppercase">Информация</h1>
          </div>
          <Divider />
          <Link  className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Реклама</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link  className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Помощь</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link    className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Сообщение о проблеме</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <Link  className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] dark:text-[#FFF]">Ещё</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
          <div className="flex items-center px-[15px] py-[5px] bg-[#f4f4f4] dark:bg-[#131313] dark:text-[#a1a1a1]">
          <h1 className="font-[500] uppercase"></h1>
          </div>
          <Divider />
          <Link to={"/login"} className="flex items-center justify-between px-[15px] py-[12px]">
          <h1 className="font-[500] text-[#ED4956]">Выйти</h1>
<ArrowForwardIosIcon className="text-[#6b6b6b]" sx={{fontSize:"16px"}}/>
          </Link>
          <Divider className="dark:bg-[#404040]"/>
        </List>
      </Dialog>
    </>
  );
};

export default Profile;
