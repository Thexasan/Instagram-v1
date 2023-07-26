import React from "react";
import { Link} from "react-router-dom";
import person from "../../assets/profile.jpg";
const Edit = () => {
  const editData = (e) => {
    e.preventDefault()
    console.log(e.target["name"].value);
  };
  return (
    <div>
      <div className="w-full fixed top-0 left-0 py-[5px] bg-[#FFF] dark:bg-[#000] hidden z-20 px-[20px] md:flex items-center border-b border-[#e5e5e5] dark:border-[#2b2b2b] smm:py-[5px]">
        <Link
          to={"/account"}
          className="text-[#000] dark:text-[#FFF] text-[25px] py-[5px]"
        >
          <div className="">
            <div>
              <div className="hidden dark:block">
                <svg
                  aria-label="Назад"
                  class="x1lliihq x1n2onr6"
                  className="rotate-[270deg]"
                  color="rgb(245, 245, 245)"
                  fill="rgb(245, 245, 245)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Назад</title>
                  <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                </svg>
              </div>
              <div className="dark:hidden">
                <svg
                  aria-label="Назад"
                  class="x1lliihq x1n2onr6"
                  className="rotate-[270deg]"
                  color="#000"
                  fill="#000"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Назад</title>
                  <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex items-center justify-center w-full">
          <h1 className="text-[#000] dark:text-[#FFF] text-[15px] px-[5px] font-[600] text-center flex items-center justify-center">
            Редактировать профиль
          </h1>
        </div>
      </div>
      <div className="max-w-[950px] mx-auto py-[30px] px-[10px] sm:pt-[40px] sm:px-0">
        <div className="border border-[#e7e7e7] dark:border-[#343434] w-full flex">
          <div className=" border border-[#e7e7e7] dark:border-[#343434] w-[380px] md:hidden">
            <ul className="text-[#000] dark:text-[#FFF] flex flex-col border-b border-[#e7e7e7] dark:border-[#343434] pb-[80px]">
              <Link className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[13px] font-[700] border-l-[2px] border-l-[#000] dark:border-l-[#ebebeb]">
                Редактировать профиль
              </Link>
              <Link className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[13px] ">
                Профессиональный аккаунт
              </Link>
              <Link
                to={"/account/password/change"}
                className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[13px]"
              >
                Сменить пароль
              </Link>
              <Link className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[13px]">
                Приложения и сайты
              </Link>
              <Link className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[13px]">
                Уведомления по электронной почте
              </Link>
              <Link className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[13px]">
                Push-уведомления
              </Link>
              <Link className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[13px]">
                Управление контактами
              </Link>
              <Link className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[13px]">
                Конфиденциальность и безопасность
              </Link>
              <Link className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[13px]">
                Реклама
              </Link>
              <Link className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[13px]">
                Контроль
              </Link>
              <Link className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[13px]">
                Входы в аккаунт
              </Link>
              <Link className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[13px]">
                Электронные письма от Instagram
              </Link>
              <Link className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[13px]">
                Помощь
              </Link>
              <Link className="py-[13px] hover:bg-[#ebebeb] dark:hover:bg-[#171717] px-[30px] text-[#0095F9] font-[600] text-[12px]">
                Переключиться на личный аккаунт
              </Link>
            </ul>
            <div className="px-[30px] py-[20px]">
              <div>
                <div className="hidden dark:block">
                  <svg
                    aria-label="Словесный знак и логотип семейства приложений Facebook"
                    height="12"
                    role="img"
                    viewBox="0 0 500 100"
                    width="60"
                  >
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="b"
                        x1="125"
                        x2="160.217"
                        y1="97"
                        y2="57.435"
                      >
                        <stop offset=".21" stop-color="#0278F1"></stop>
                        <stop offset=".533" stop-color="#0180FA"></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="c"
                        x1="44"
                        x2="0"
                        y1="5"
                        y2="64"
                      >
                        <stop offset=".427" stop-color="#0165E0"></stop>
                        <stop offset=".917" stop-color="#0180FA"></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="d"
                        x1="28.5"
                        x2="135"
                        y1="29"
                        y2="72"
                      >
                        <stop stop-color="#0064E0"></stop>
                        <stop offset=".656" stop-color="#0066E2"></stop>
                        <stop offset="1" stop-color="#0278F1"></stop>
                      </linearGradient>
                      <clipPath id="a">
                        <path d="M0 0h496.236v100H0z" fill="#fff"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)">
                      <path
                        d="M182.141 3.213h18.808l31.98 57.849 31.979-57.849h18.401V98.27h-15.345V25.416l-28.042 50.448h-14.394l-28.042-50.448V98.27h-15.345V3.213ZM332.804 99.967c-7.107 0-13.353-1.573-18.739-4.718-5.387-3.146-9.586-7.504-12.595-13.07-3.011-5.569-4.515-11.95-4.515-19.148 0-7.287 1.47-13.738 4.413-19.35 2.942-5.613 7.027-10.004 12.255-13.173 5.229-3.168 11.238-4.753 18.027-4.753 6.744 0 12.55 1.596 17.416 4.787 4.865 3.191 8.611 7.661 11.237 13.41 2.624 5.749 3.938 12.492 3.938 20.233v4.21h-52.077c.95 5.794 3.292 10.354 7.027 13.68 3.735 3.328 8.453 4.991 14.157 4.991 4.571 0 8.509-.679 11.814-2.037 3.303-1.358 6.404-3.417 9.302-6.178l8.147 9.98c-8.103 7.425-18.038 11.136-29.807 11.136Zm11.204-56.389c-3.215-3.281-7.425-4.923-12.629-4.923-5.07 0-9.314 1.676-12.731 5.025-3.418 3.35-5.58 7.854-6.484 13.512h37.343c-.453-5.794-2.286-10.331-5.499-13.614ZM382.846 40.014h-14.123V27.453h14.123V6.676h14.802v20.777h21.455v12.561h-21.455v31.844c0 5.295.905 9.075 2.716 11.338 1.809 2.264 4.911 3.395 9.302 3.395 1.945 0 3.598-.078 4.956-.237a92.35 92.35 0 0 0 4.481-.646v12.425c-1.675.498-3.564.906-5.669 1.223a44.63 44.63 0 0 1-6.62.475c-15.979 0-23.968-8.735-23.968-26.208V40.014ZM496.236 98.27h-14.53v-9.913c-2.58 3.712-5.862 6.575-9.845 8.588-3.983 2.014-8.51 3.022-13.579 3.022-6.247 0-11.78-1.596-16.601-4.787s-8.612-7.581-11.373-13.172c-2.761-5.59-4.142-11.983-4.142-19.18 0-7.243 1.403-13.648 4.21-19.216 2.806-5.567 6.688-9.935 11.645-13.104 4.956-3.168 10.648-4.753 17.075-4.753 4.844 0 9.189.94 13.037 2.818a25.768 25.768 0 0 1 9.573 7.978v-9.098h14.53V98.27Zm-14.801-46.035c-1.585-4.028-4.085-7.207-7.503-9.54-3.418-2.33-7.367-3.496-11.848-3.496-6.338 0-11.384 2.128-15.141 6.382-3.758 4.255-5.635 10.004-5.635 17.246 0 7.289 1.809 13.06 5.431 17.314 3.621 4.255 8.532 6.382 14.734 6.382 4.571 0 8.645-1.176 12.222-3.53 3.575-2.353 6.155-5.522 7.74-9.506V52.235Z"
                        fill="rgb(245, 245, 245)"
                      ></path>
                      <path
                        d="M108 0C95.66 0 86.015 9.294 77.284 21.1 65.284 5.821 55.25 0 43.24 0 18.76 0 0 31.862 0 65.586 0 86.69 10.21 100 27.31 100c12.308 0 21.16-5.803 36.897-33.31 0 0 6.56-11.584 11.072-19.564 1.582 2.553 3.243 5.3 4.997 8.253l7.38 12.414C102.03 91.848 110.038 100 124.551 100c16.659 0 25.931-13.492 25.931-35.034C150.483 29.656 131.301 0 108 0ZM52.207 59.241c-12.759 20-17.172 24.483-24.276 24.483-7.31 0-11.655-6.418-11.655-17.862 0-24.483 12.207-49.517 26.759-49.517 7.88 0 14.465 4.55 24.552 18.991-9.578 14.691-15.38 23.905-15.38 23.905Zm48.153-2.517-8.823-14.715a301.425 301.425 0 0 0-6.884-10.723c7.952-12.274 14.511-18.39 22.313-18.39 16.206 0 29.172 23.863 29.172 53.173 0 11.172-3.659 17.655-11.241 17.655-7.268 0-10.739-4.8-24.537-27Z"
                        fill="#0180FA"
                      ></path>
                      <path
                        d="M145.586 35H130.66c3.452 8.746 5.478 19.482 5.478 31.069 0 11.172-3.659 17.655-11.241 17.655-1.407 0-2.672-.18-3.897-.631V99.82c1.143.122 2.324.18 3.552.18 16.659 0 25.931-13.492 25.931-35.034 0-10.737-1.774-20.95-4.897-29.966Z"
                        fill="url(#b)"
                      ></path>
                      <path
                        d="M43.241 0c.254 0 .507.003.759.008v16.36c-.32-.015-.642-.023-.965-.023-14.183 0-26.139 23.782-26.736 47.655H.014C.59 30.87 19.143 0 43.24 0Z"
                        fill="url(#c)"
                      ></path>
                      <path
                        d="M43.241 0c11.152 0 20.601 5.02 31.502 17.971 3.065 3.828 6.761 8.805 10.716 14.557l.017.025.025-.003a311.041 311.041 0 0 1 6.036 9.459l8.823 14.715c13.798 22.2 17.269 27 24.537 27H125v16.273c-.149.002-.298.003-.448.003-14.513 0-22.522-8.152-36.897-32.207l-7.38-12.414a596.368 596.368 0 0 0-2.294-3.834L78 51.5c-5.5-9-9-14.5-12-18.5l-.05.038c-9.18-12.63-15.47-16.693-22.916-16.693H43V0L43.241 0Z"
                        fill="url(#d)"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="dark:hidden">
                  <svg
                    aria-label="Словесный знак и логотип семейства приложений Facebook"
                    height="12"
                    role="img"
                    viewBox="0 0 500 100"
                    width="60"
                  >
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="b"
                        x1="125"
                        x2="160.217"
                        y1="97"
                        y2="57.435"
                      >
                        <stop offset=".21" stop-color="#000"></stop>
                        <stop offset=".533" stop-color="#000"></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="c"
                        x1="44"
                        x2="0"
                        y1="5"
                        y2="64"
                      >
                        <stop offset=".427" stop-color="#000"></stop>
                        <stop offset=".917" stop-color="#000"></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="d"
                        x1="28.5"
                        x2="135"
                        y1="29"
                        y2="72"
                      >
                        <stop stop-color="#000"></stop>
                        <stop offset=".656" stop-color="#000"></stop>
                        <stop offset="1" stop-color="#000"></stop>
                      </linearGradient>
                      <clipPath id="a">
                        <path d="M0 0h496.236v100H0z" fill="#000"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)">
                      <path
                        d="M182.141 3.213h18.808l31.98 57.849 31.979-57.849h18.401V98.27h-15.345V25.416l-28.042 50.448h-14.394l-28.042-50.448V98.27h-15.345V3.213ZM332.804 99.967c-7.107 0-13.353-1.573-18.739-4.718-5.387-3.146-9.586-7.504-12.595-13.07-3.011-5.569-4.515-11.95-4.515-19.148 0-7.287 1.47-13.738 4.413-19.35 2.942-5.613 7.027-10.004 12.255-13.173 5.229-3.168 11.238-4.753 18.027-4.753 6.744 0 12.55 1.596 17.416 4.787 4.865 3.191 8.611 7.661 11.237 13.41 2.624 5.749 3.938 12.492 3.938 20.233v4.21h-52.077c.95 5.794 3.292 10.354 7.027 13.68 3.735 3.328 8.453 4.991 14.157 4.991 4.571 0 8.509-.679 11.814-2.037 3.303-1.358 6.404-3.417 9.302-6.178l8.147 9.98c-8.103 7.425-18.038 11.136-29.807 11.136Zm11.204-56.389c-3.215-3.281-7.425-4.923-12.629-4.923-5.07 0-9.314 1.676-12.731 5.025-3.418 3.35-5.58 7.854-6.484 13.512h37.343c-.453-5.794-2.286-10.331-5.499-13.614ZM382.846 40.014h-14.123V27.453h14.123V6.676h14.802v20.777h21.455v12.561h-21.455v31.844c0 5.295.905 9.075 2.716 11.338 1.809 2.264 4.911 3.395 9.302 3.395 1.945 0 3.598-.078 4.956-.237a92.35 92.35 0 0 0 4.481-.646v12.425c-1.675.498-3.564.906-5.669 1.223a44.63 44.63 0 0 1-6.62.475c-15.979 0-23.968-8.735-23.968-26.208V40.014ZM496.236 98.27h-14.53v-9.913c-2.58 3.712-5.862 6.575-9.845 8.588-3.983 2.014-8.51 3.022-13.579 3.022-6.247 0-11.78-1.596-16.601-4.787s-8.612-7.581-11.373-13.172c-2.761-5.59-4.142-11.983-4.142-19.18 0-7.243 1.403-13.648 4.21-19.216 2.806-5.567 6.688-9.935 11.645-13.104 4.956-3.168 10.648-4.753 17.075-4.753 4.844 0 9.189.94 13.037 2.818a25.768 25.768 0 0 1 9.573 7.978v-9.098h14.53V98.27Zm-14.801-46.035c-1.585-4.028-4.085-7.207-7.503-9.54-3.418-2.33-7.367-3.496-11.848-3.496-6.338 0-11.384 2.128-15.141 6.382-3.758 4.255-5.635 10.004-5.635 17.246 0 7.289 1.809 13.06 5.431 17.314 3.621 4.255 8.532 6.382 14.734 6.382 4.571 0 8.645-1.176 12.222-3.53 3.575-2.353 6.155-5.522 7.74-9.506V52.235Z"
                        fill="#000"
                      ></path>
                      <path
                        d="M108 0C95.66 0 86.015 9.294 77.284 21.1 65.284 5.821 55.25 0 43.24 0 18.76 0 0 31.862 0 65.586 0 86.69 10.21 100 27.31 100c12.308 0 21.16-5.803 36.897-33.31 0 0 6.56-11.584 11.072-19.564 1.582 2.553 3.243 5.3 4.997 8.253l7.38 12.414C102.03 91.848 110.038 100 124.551 100c16.659 0 25.931-13.492 25.931-35.034C150.483 29.656 131.301 0 108 0ZM52.207 59.241c-12.759 20-17.172 24.483-24.276 24.483-7.31 0-11.655-6.418-11.655-17.862 0-24.483 12.207-49.517 26.759-49.517 7.88 0 14.465 4.55 24.552 18.991-9.578 14.691-15.38 23.905-15.38 23.905Zm48.153-2.517-8.823-14.715a301.425 301.425 0 0 0-6.884-10.723c7.952-12.274 14.511-18.39 22.313-18.39 16.206 0 29.172 23.863 29.172 53.173 0 11.172-3.659 17.655-11.241 17.655-7.268 0-10.739-4.8-24.537-27Z"
                        fill="#0180FA"
                      ></path>
                      <path
                        d="M145.586 35H130.66c3.452 8.746 5.478 19.482 5.478 31.069 0 11.172-3.659 17.655-11.241 17.655-1.407 0-2.672-.18-3.897-.631V99.82c1.143.122 2.324.18 3.552.18 16.659 0 25.931-13.492 25.931-35.034 0-10.737-1.774-20.95-4.897-29.966Z"
                        fill="url(#b)"
                      ></path>
                      <path
                        d="M43.241 0c.254 0 .507.003.759.008v16.36c-.32-.015-.642-.023-.965-.023-14.183 0-26.139 23.782-26.736 47.655H.014C.59 30.87 19.143 0 43.24 0Z"
                        fill="url(#c)"
                      ></path>
                      <path
                        d="M43.241 0c11.152 0 20.601 5.02 31.502 17.971 3.065 3.828 6.761 8.805 10.716 14.557l.017.025.025-.003a311.041 311.041 0 0 1 6.036 9.459l8.823 14.715c13.798 22.2 17.269 27 24.537 27H125v16.273c-.149.002-.298.003-.448.003-14.513 0-22.522-8.152-36.897-32.207l-7.38-12.414a596.368 596.368 0 0 0-2.294-3.834L78 51.5c-5.5-9-9-14.5-12-18.5l-.05.038c-9.18-12.63-15.47-16.693-22.916-16.693H43V0L43.241 0Z"
                        fill="url(#d)"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <h1 className="text-[#0095F9] font-[700] py-[13px]">
                Центр аккаунтов
              </h1>
              <p className="py-[10px] text-[#A8A8A8] text-[10px]">
                Управляйте кросс-сервисными функциями в приложениях Instagram,
                Facebook и Messenger, например входом в аккаунт и размещением
                историй и публикаций.
              </p>
            </div>
          </div>
          <div className="w-full py-[30px]">
            <form onSubmit={(e) => editData(e)} action="">
              <div className="w-[90%] mx-auto flex flex-col gap-y-[20px]">
                <div className="flex gap-x-[20px]">
                  <div className="w-[30%] flex items-center justify-end md:justify-start md:w-[20%]">
                    <img
                      src={person}
                      alt=""
                      className="w-[42px] rounded-[50%]"
                    />
                  </div>
                  <div className="w-[60%] md:w-full">
                    <h1 className="text-[#000] dark:text-[#FFF]">thexasan_</h1>
                    <h1 className="text-[#0095F6] font-[600]">
                      Изменить фото профиля
                    </h1>
                  </div>
                </div>
                <div className="flex gap-x-[20px] md:flex-col">
                  <div className="w-[30%]">
                    <h1 className="text-[#000] dark:text-[#FFF] font-[500] text-end md:text-start">
                      Имя
                    </h1>
                  </div>
                  <div className="w-[60%] md:w-full">
                    <input
                      type="text"
                      name="name"
                      className="w-[90%] bg-transparent py-[5px] text-[#000] dark:text-[#FFF] px-[10px] border"
                    />
                    <h1 className="text-[#A8A8A8] text-[12px] py-[10px]">
                      Чтобы людям было проще находить ваш аккаунт, используйте
                      имя, под которым вас знают: ваше имя и фамилию, никнейм
                      или название компании.
                    </h1>
                    <h1 className="text-[#A8A8A8] text-[11px] py-[10px]">
                      Изменить имя можно не более двух раз в течение 14 дней.
                    </h1>
                  </div>
                </div>
                <div className="flex  gap-x-[20px] md:flex-col">
                  <div className="w-[30%] text-end md:text-start md:w-full py-[5px]">
                    <h1 className="text-[#000] dark:text-[#FFF] font-[500]">
                      Имя пользователя
                    </h1>
                  </div>
                  <div className="w-[60%] md:w-full">
                    <input
                      type="text"
                      value="thexasan_"
                      className="w-[90%] bg-transparent py-[5px] text-[#000] dark:text-[#FFF] px-[10px] border"
                    />
                    <h1 className="text-[#A8A8A8] text-[12px] py-[10px]">
                      В большинстве случаев у вас будет ещё 14 дней, чтобы снова
                      изменить имя пользователя на thexasan_. Подробнее
                    </h1>
                  </div>
                </div>
                <div className="flex  gap-x-[20px] md:flex-col">
                  <div className="w-[30%] text-end md:text-start md:w-full">
                    <h1 className="text-[#000] dark:text-[#FFF] font-[500]">
                      Сайт
                    </h1>
                  </div>
                  <div className="w-[60%] md:w-full">
                    <input
                      type="text"
                      disabled
                      placeholder="Сайт"
                      className="w-[90%] bg-[#efefef] dark:bg-[#202020]  border-none py-[5px] px-[10px] border"
                    />
                    <h1 className="text-[#A8A8A8] text-[12px] py-[10px]">
                      В большинстве случаев у вас будет ещё 14 дней, чтобы снова
                      изменить имя пользователя на thexasan_. Подробнее
                    </h1>
                  </div>
                </div>
                <div className="flex  gap-x-[20px] md:flex-col">
                  <div className="w-[30%] text-end md:text-start md:w-full">
                    <h1 className="text-[#000] dark:text-[#FFF] font-[500]">
                      О себе
                    </h1>
                  </div>
                  <div className="w-[60%] md:w-full">
                    <textarea
                      type="text"
                      value="Frontend developer Лучшие вещи в жизни — бесплатны: объятия, улыбки, друзья, поцелуи, семья, сон, любовь, смех и хорошее настроение."
                      className="w-[90%] bg-transparent text-[#000] dark:text-[#FFF] py-[8px] px-[10px] border"
                    />
                  </div>
                </div>
                <div className="flex gap-x-[20px] md:flex-col">
                  <div className="w-[30%] text-end md:text-start md:w-full">
                    <h1 className="text-[#000] dark:text-[#FFF] font-[500]"></h1>
                  </div>
                  <div className="w-[60%] md:w-full">
                    <h1 className="text-[#A8A8A8] text-[13px] font-[500]">
                      Личная информация
                    </h1>
                    <h1 className="text-[#A8A8A8] text-[12px]">
                      Укажите личную информацию, даже если аккаунт используется
                      для компании, домашнего животного или в других целях. Эти
                      сведения не будут показываться в вашем общедоступном
                      профиле.
                    </h1>
                  </div>
                </div>
                <div className="flex items-center gap-x-[20px] md:flex-col">
                  <div className="w-[30%] text-end md:text-start md:w-full">
                    <h1 className="text-[#000] dark:text-[#FFF] font-[500]">
                      Эл. адрес
                    </h1>
                  </div>
                  <div className="w-[60%] md:w-full">
                    <input
                      type="text"
                      placeholder="Сайт"
                      value="thexasan@gmail.com"
                      className="w-[90%] bg-transparent text-[#000] dark:text-[#FFF] py-[5px] px-[10px] border"
                    />
                  </div>
                </div>
                <div className="flex  items-center gap-x-[20px] md:flex-col">
                  <div className="w-[30%] text-end md:text-start md:w-full">
                    <h1 className="text-[#000] dark:text-[#FFF] font-[500]">
                      Номер телефона
                    </h1>
                  </div>
                  <div className="w-[60%] md:w-full">
                    <input
                      type="text"
                      placeholder="Сайт"
                      value="+992 80 006 6698"
                      className="w-[90%] bg-transparent text-[#000] dark:text-[#FFF] py-[5px] px-[10px] border"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-x-[20px] md:flex-col">
                  <div className="w-[30%] text-end md:text-start md:w-full">
                    <h1 className="text-[#000] dark:text-[#FFF] font-[500]">
                      Пол
                    </h1>
                  </div>
                  <div className="w-[60%] md:w-full">
                    <input
                      type="text"
                      placeholder="Сайт"
                      value="Мужской"
                      className="w-[90%] bg-transparent text-[#000] dark:text-[#FFF] py-[5px] px-[10px] border"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-x-[20px] md:flex-col">
                  <div className="w-[45%] text-end md:text-start md:w-full">
                    <h1 className="text-[#000] dark:text-[#FFF] font-[500]">
                      Показывать рекомендуемые аккаунты в профилях
                    </h1>
                  </div>
                  <div className="w-[100%] flex items-center gap-x-[10px] ">
                    <input
                      type="checkbox"
                      className=" bg-transparent text-[#000] dark:text-[#FFF] py-[5px] px-[10px] border"
                    />
                    <h1 className="text-[#A8A8A8] text-[12px] py-[10px]">
                      Выберите, если хотите, чтобы люди могли видеть похожие
                      рекомендуемые аккаунты в вашем профиле, а ваш аккаунт
                      можно было рекомендовать в других профилях.[?]
                    </h1>
                  </div>
                </div>
                <div className="flex items-center gap-x-[20px] md:flex-col">
                  <div className="w-[50%] text-end md:text-start md:w-full">
                    <h1 className="text-[#000] dark:text-[#FFF] font-[500]"></h1>
                  </div>
                  <div className="w-[100%] flex items-center justify-between gap-x-[10px] sm:flex-col sm:gap-y-[10px] ">
                    <button type="submit" className="py-[5px] px-[15px] bg-[#0095F6] text-[#FFF] font-[600] dark:text-[#FFF] rounded-[10px]">
                      Отправить
                    </button>
                    <h1 className="text-[#0095F6] font-[600] text-[12px]">
                      Временная деактивация аккаунта
                    </h1>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
