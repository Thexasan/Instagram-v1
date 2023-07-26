import React, { useState } from "react";
import "./Reels.css";
import video from "../../assets/v7.mp4";
import Checkbox from "@mui/material/Checkbox";
import person from "../../assets/profile.jpg"

const Reels = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [follow,setFollow] =  useState(false)
  const [follow1,setFollow1] =  useState(false)
  return (
    <div>
      <section className="flex flex-col gap-[50px] items-center gap-y-[50px] justify-center bg-[#FFF] text-[#FFF] dark:bg-black py-[20px] md:pb-[80px]">
        <div class="reel__container rounded-[10px] relative bg-black sm1:w-[90%] w-[380px] min-h-[80vh] flex flex-col justify-between">
        <div class="reel__content px-[15px] pb-[20px] bg-transparent absolute z-10 bottom-[10px] left-0 w-full flex  justify-between">
            <div class="reel__desc">
              <div class="reel__user">
                <img
                  src={person}
                  class="reel__avatar"
                />
                <p class="reel__username">thexasan_</p>
                <button onClick={()=>setFollow1(!follow1)} className=" bg-transparent font-[600] py-[0.15rem] px-[0.3rem]">
                  {follow1?"Подписаться":"Подписки"}
                </button>
              </div>
              <p class="reel__caption">react root</p>
              <p class="reel__audio flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-tallymark-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="8" y1="7" x2="8" y2="17"></line>
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="16" y1="7" x2="16" y2="17"></line>
                </svg>
                Ohangi dili zor
              </p>
            </div>
            <div class="reel__options">
              <div className="flex flex-col items-center gap-y-[10px] py-[5px]">
                <div className="flex items-center flex-col gap-y-[10px]">
                  <Checkbox
                    {...label}
                    icon={
                      <div>
                        <div className="">
                          <svg
                            aria-label="Нравится"
                            class="x1lliihq x1n2onr6"
                            color="rgb(245, 245, 245)"
                            fill="rgb(245, 245, 245)"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <title>Нравится</title>
                            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                          </svg>
                        </div>
                      </div>
                    }
                    checkedIcon={
                      <svg
                        aria-label="Не нравится"
                        class="x1lliihq x1n2onr6"
                        color="rgb(255, 48, 64)"
                        fill="rgb(255, 48, 64)"
                        height="24"
                        role="img"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <title>Не нравится</title>
                        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                      </svg>
                    }
                  />
                  <p class="reel__likes">450</p>
                </div>
                <div className="flex flex-col items-center gap-y-[5px]">
                  <button className="">
                    <svg
                      aria-label="Комментировать"
                      class="x1lliihq x1n2onr6"
                      color="rgb(245, 245, 245)"
                      fill="rgb(245, 245, 245)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Комментировать</title>
                      <path
                        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </button>
                  <p className="text-[12px] font-[600]">18</p>
                </div>
                <button className="">
                  <svg
                    aria-label="Поделиться публикацией"
                    class="x1lliihq x1n2onr6"
                    color="rgb(245, 245, 245)"
                    fill="rgb(245, 245, 245)"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Поделиться публикацией</title>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    ></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </button>
                <div>
                    <Checkbox
                      {...label}
                      icon={
                        <div>
                          <div className="">
                            <svg
                              aria-label="Сохранить"
                              class="x1lliihq x1n2onr6"
                              color="rgb(245, 245, 245)"
                              fill="rgb(245, 245, 245)"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <title>Сохранить</title>
                              <polygon
                                fill="none"
                                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                              ></polygon>
                            </svg>
                          </div>
                        </div>
                      }
                      checkedIcon={
                        <div>
                          <div>
                            <svg
                              aria-label="Сохранить"
                              class="x1lliihq x1n2onr6"
                              color="rgb(245, 245, 245)"
                              fill="rgb(245, 245, 245)"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <title>Сохранить</title>
                              <polygon
                                fill="rgb(245, 245, 245)"
                                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                              ></polygon>
                            </svg>
                          </div>
                        </div>
                      }
                    />
                  </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-dots-vertical"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
              </svg>
              <img
                src={person}
                class="reel__audio-cover"
              />
            </div>
          </div>
          <div className="w-full min-h-[90vh]">
            <video src={video} autoPlay muted className="object-cover w-full min-h-[90vh] rounded-[10px]"></video>
          </div>
          
        </div>
        <div class="reel__container rounded-[10px] relative bg-black sm1:w-[90%] w-[380px] min-h-[80vh] flex flex-col justify-between">
        <div class="reel__content px-[15px] pb-[20px] bg-transparent absolute z-10 bottom-[10px] left-0 w-full flex  justify-between">
            <div class="reel__desc">
              <div class="reel__user">
                <img
                  src={person}
                  class="reel__avatar"
                />
                <p class="reel__username">thexasan_</p>
                <button onClick={()=>setFollow(!follow)} className=" bg-transparent font-[600] py-[0.15rem] px-[0.3rem]">
                  {follow?"Подписаться":"Подписки"}
                </button>
              </div>
              <p class="reel__caption ">react root</p>
              <p class="reel__audio flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-tallymark-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="8" y1="7" x2="8" y2="17"></line>
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="16" y1="7" x2="16" y2="17"></line>
                </svg>
                Ohangi dili zor
              </p>
            </div>
            <div class="reel__options">
              <div className="flex flex-col items-center gap-y-[10px] py-[5px]">
                <div className="flex items-center flex-col gap-y-[10px]">
                  <Checkbox
                    {...label}
                    icon={
                      <div>
                        <div className="">
                          <svg
                            aria-label="Нравится"
                            class="x1lliihq x1n2onr6"
                            color="rgb(245, 245, 245)"
                            fill="rgb(245, 245, 245)"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <title>Нравится</title>
                            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                          </svg>
                        </div>
                      </div>
                    }
                    checkedIcon={
                      <svg
                        aria-label="Не нравится"
                        class="x1lliihq x1n2onr6"
                        color="rgb(255, 48, 64)"
                        fill="rgb(255, 48, 64)"
                        height="24"
                        role="img"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <title>Не нравится</title>
                        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                      </svg>
                    }
                  />
                  <p class="reel__likes">450</p>
                </div>
                <div className="flex flex-col items-center gap-y-[5px]">
                  <button className="">
                    <svg
                      aria-label="Комментировать"
                      class="x1lliihq x1n2onr6"
                      color="rgb(245, 245, 245)"
                      fill="rgb(245, 245, 245)"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Комментировать</title>
                      <path
                        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </button>
                  <p className="text-[12px] font-[600]">18</p>
                </div>
                <button className="">
                  <svg
                    aria-label="Поделиться публикацией"
                    class="x1lliihq x1n2onr6"
                    color="rgb(245, 245, 245)"
                    fill="rgb(245, 245, 245)"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Поделиться публикацией</title>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    ></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </button>
                <div>
                    <Checkbox
                      {...label}
                      icon={
                        <div>
                          <div className="">
                            <svg
                              aria-label="Сохранить"
                              class="x1lliihq x1n2onr6"
                              color="rgb(245, 245, 245)"
                              fill="rgb(245, 245, 245)"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <title>Сохранить</title>
                              <polygon
                                fill="none"
                                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                              ></polygon>
                            </svg>
                          </div>
                        </div>
                      }
                      checkedIcon={
                        <div>
                          <div>
                            <svg
                              aria-label="Сохранить"
                              class="x1lliihq x1n2onr6"
                              color="rgb(245, 245, 245)"
                              fill="rgb(245, 245, 245)"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <title>Сохранить</title>
                              <polygon
                                fill="rgb(245, 245, 245)"
                                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                              ></polygon>
                            </svg>
                          </div>
                        </div>
                      }
                    />
                  </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-dots-vertical"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
              </svg>
              <img
                src={person}
                class="reel__audio-cover"
              />
            </div>
          </div>
          <div className="w-full min-h-[90vh]">
            <video src={video} autoPlay muted className="object-cover w-full min-h-[90vh] rounded-[10px]"></video>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Reels;
