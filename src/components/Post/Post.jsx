import React, { useState } from "react";
import person from "../../assets/profile.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import hasan from "../../assets/hasan.jpg";
import Checkbox from "@mui/material/Checkbox";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const Post = ({
  id,
  img,
  desc,
  likes,
  comments,
  toggleLike,
  likedBy,
  addComment,
  users,
}) => {
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [like, setLike] = useState(false);
  
  return (
    <>
      <div className="max-w-[500px] mx-auto sm:w-full ">
        <div className="flex items-center justify-between sm1:px-[10px]">
          <div className="flex items-center gap-x-[15px]">
            <img
              src={`${import.meta.env.VITE_APP_FILES_URL} ${img[2]}`}
              alt=""
              className="w-[52px] h-[52px] rounded-[50%]"
            />
            <div className="flex items-center gap-x-[10px]">
              <h1 className="text-[#000] dark:text-[#FFF] font-[500]">
                thexasan_
              </h1>
              <span className="text-[30px] text-[#A8A8A8]">•</span>
              <span className="text-[#A8A8A8]"> 20 ч.</span>
            </div>
          </div>
          <div
            onClick={handleClickOpen}
            className="cursor-pointer hidden dark:block"
          >
            <svg
              aria-label="Дополнительно"
              class="_ab6-"
              color="rgb(255, 255, 255)"
              fill="rgb(255, 255, 255)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>
          <div onClick={handleClickOpen} className="cursor-pointer dark:hidden">
            <svg
              aria-label="Дополнительно"
              class="_ab6-"
              color="#000"
              fill="#000"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>
        </div>
        <div className="py-[10px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            style={{ borderRadius: "3px" }}
            keyboard={{
              enabled: true,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            // modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="w-full max-h-[585px]">
              <div className="flex items-center justify-center">
                <img
                  src={`${import.meta.env.VITE_APP_FILES_URL}${img}`}
                  alt=""
                  className="w-full image1"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full max-h-[585px]">
              <div className="flex items-center justify-center">
                <img src={hasan} alt="" className="w-full image1" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex items-center justify-between sm1:px-[10px]">
          <div className="flex items-center gap-x-[5px] py-[5px]">
            <Checkbox
              onClick={toggleLike}
              checked={likedBy?.includes(+getToken().sub)}
              icon={
                <div>
                  <div className="hidden dark:block">
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
                  <div className="dark:hidden">
                    <svg
                      aria-label="Нравится"
                      class="x1lliihq x1n2onr6"
                      color="#000"
                      fill="#000"
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
            <button className="dark:hidden">
              <svg
                aria-label="Комментировать"
                class="x1lliihq x1n2onr6"
                color="#000"
                fill="#000"
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
            <button className="hidden dark:block">
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
            <button className="px-[8px] dark:hidden">
              <svg
                aria-label="Поделиться публикацией"
                class="x1lliihq x1n2onr6"
                color="#000"
                fill="#000"
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
            <button className="px-[8px] hidden dark:block">
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
          </div>
          <div>
            <Checkbox
              {...label}
              icon={
                <div>
                  <div className="hidden dark:block">
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
                  <div className="dark:hidden">
                    <svg
                      aria-label="Сохранить"
                      class="x1lliihq x1n2onr6"
                      color="#000"
                      fill="#000"
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
                  <div className="hidden dark:block">
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
                  <div className="dark:hidden">
                    <svg
                      aria-label="Сохранить"
                      class="x1lliihq x1n2onr6"
                      color="#000"
                      fill="#000"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Сохранить</title>
                      <polygon
                        fill="#00"
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
        <div>
          <h1 className="text-[#000] dark:text-[#FFF] font-[600] py-[10px] sm1:px-[10px]">
            {likes} отметок "Нравится"
          </h1>
        </div>
        <div className="description sm1:px-[10px] text-[#000] dark:text-[#FFF] flex items-center gap-x-[10px] leading-[15px]">
          <h1>thexasan_</h1>
          <span className="text-[30px] text-[#A8A8A8]">•</span>
          <p>{desc}</p>
        </div>
        <div>
          <button className="text-[#7F7F7F] sm1:px-[10px]">ещё</button>
        </div>
        <div>
          <h1 className="text-[#7F7F7F] sm1:px-[10px]">
            Посмотреть все комментарии {comments}
          </h1>
          {comments?.length > 0
            ? comments?.map((elem) => {
                return (
                  <p key={elem.userId}>
                    <Avatar>
                      {users?.find((user) => user.id == elem.userId)?.name[0]}
                    </Avatar>
                    {elem.comment}
                  </p>
                );
              })
            : null}
        </div>
        <div className="py-[5px] sm1:px-[10px]">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Добавьте комментариий..."
              className="pb-[15px] w-full text-[14px] outline-none bg-transparent text-[#000] dark:text-[#F5F5F5] placeholder:text-[#7F7F7F] placeholder:text-[14px] border-b dark:border-[#262626] border-[#d2d2d2]"
            ></input>
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
            className="w-[400px] md:w-[260px]"
          >
            <ul className="flex flex-col bg-[#FFF] dark:bg-[#2f2f2f]">
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#eD4956] text-[13px] font-[700]">
                Пожаловаться
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#eD4956] text-[13px]  font-[700]">
                Отменить подписку
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#fff] text-[13px]">
                Добавить в избранное
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#fff] text-[13px]">
                Перейти к публикации
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#fff] text-[13px]">
                Поделиться…
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#fff] text-[13px]">
                Копировать ссылку
              </Link>
              <Link className="py-[14px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#fff] text-[13px]">
                Вставить на сайт
              </Link>
              <button
                onClick={handleClose}
                className="py-[12px] border-b border-[#d3d3d3] dark:border-[#414141] text-center text-[#000] dark:text-[#fff] text-[13px]"
              >
                Отмена
              </button>
            </ul>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Post;
