import React, { useEffect, useState } from "react";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Switcher from "../components/Switcher/Switcher";
import Avatar from "@mui/material/Avatar";
import person from "../assets/profile.jpg";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router-dom";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Search from "../components/Search/Search";
import { axiosRequest, destroyToken, getToken } from "../utils/AxiosRequest";
import ReactFileReader from "react-file-reader";
import { createMuiTheme } from "@mui/material";
import { multiFiles } from "../api/files";

const Layout = () => {
  const [input, setInput] = useState([]);

  const [filles, setFilles] = useState(null);
  const [title, setTitle] = useState("");

  const addPost = async () => {
    if (!filles) {
      return alert("please select img");
    }
    let post = {
      title: title,
      date: Date.now(),
      likes: 0,
      likesBy: 0,
      comments: [],
      media: [],
      userId: +getToken().sub,
    };

    let formData = new FormData();

    for (let file of filles) {
      formData.append("files", file);
    }
    const imgs = await multiFiles(formData);
    let media = [];
    imgs.img.forEach((elem) => {
      media.push({
        type: elem.mimetype,
        src: elem.path,
      });
    });

    post.media = media;
    try {
      const { data } = await axiosRequest.post("posts", post);
      handleClose4();
    } catch (error) {
      console.log(error);
    }
  };

  function _treat(e) {
    const { files } = e.target;
    let images = [];
    const selecteds = [...[...files]];

    selecteds.forEach((i) => images.push(URL.createObjectURL(i)));

    setInput(images);
  }
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [searchModal, setsearchModal] = useState(false);
  const anchorRef = React.useRef(null);
  const anchorRef1 = React.useRef(null);

  const handleClickOpenSearch = () => {
    setsearchModal(true);
  };
  const handleClickCloseSearch = () => {
    setsearchModal(false);
  };
  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose3 = () => {
    setOpen2(false);
  };
  const handleClickOpen1 = () => {
    setOpen3(true);
  };

  const handleClose4 = () => {
    setOpen3(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleToggle1 = () => {
    setOpen1((prevOpen1) => !prevOpen1);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleClose1 = (event) => {
    if (anchorRef1.current && anchorRef1.current.contains(event.target)) {
      return;
    }
    setOpen1(false);
  };

  function handleListKeyDown1(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen1(false);
    } else if (event.key === "Escape") {
      setOpen1(false);
    }
  }

  const { t, i18n } = useTranslation();
  const changeLanguages = (Language) => {
    i18n.changeLanguage(Language);
  };
  const location = useLocation();
  return (
    <>
      <div className="flex bg-[#fff] dark:bg-[#000] w-full">
        <div className="appBar w-[245px] app:w-[70px] md:hidden fixed z-40 top-0 left-0 h-screen border-r dark:border-[#2b2b2b] border-[#d3d3d3] bg-[#fff] dark:bg-[#000] py-[15px] px-[10px]">
          <div className="logo flex items-center justify-start h-[73px] px-[15px] py-[20px]">
            <h1 className="hidden app:block">
              <div className="hidden dark:block">
                <svg
                  aria-label="Instagram"
                  color="rgb(245, 245, 245)"
                  fill="rgb(245, 245, 245)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Instagram</title>
                  <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
                </svg>
              </div>
              <div className="dark:hidden">
                <svg
                  aria-label="Instagram"
                  color="#000"
                  fill="#000"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Instagram</title>
                  <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
                </svg>
              </div>
            </h1>
            <h1 className="text-[#000] dark:text-[#FFF] text-[25px] app:hidden">
              <div className="dark:hidden">
                <svg
                  aria-label="Instagram"
                  class="_ab6-"
                  color="#000"
                  fill="#000"
                  height="29"
                  role="img"
                  viewBox="32 4 113 32"
                  width="103"
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
                  height="29"
                  role="img"
                  viewBox="32 4 113 32"
                  width="103"
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
          {/* <Search modalShow={searchModal}/> */}
          <div className="pt-[20px] flex flex-col justify-between h-[90%] bg-[#fff] dark:bg-[#000]">
            <ul className="flex flex-col gap-y-[5px]">
              <Link
                to={"/"}
                className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  {location.pathname == "/" ? (
                    <div>
                      <div className="hidden dark:block">
                        <svg
                          aria-label="Главная"
                          class="_ab6-"
                          color="rgb(245, 245, 245)"
                          fill="rgb(245, 245, 245)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                            fill="rgb(245, 245, 245)"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                      <div className="dark:hidden">
                        <svg
                          aria-label="Главная"
                          class="_ab6-"
                          color="#000"
                          fill="#000"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                            fill="#000"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="hidden dark:block">
                        <svg
                          aria-label="Главная"
                          class="_ab6-"
                          color="rgb(245, 245, 245)"
                          fill="rgb(245, 245, 245)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                            fill="#000"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                      <div className="dark:hidden">
                        <svg
                          aria-label="Главная"
                          class="_ab6-"
                          color="#000"
                          fill="#000"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                            fill="rgb(245, 245, 245)"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="hidden">
                  <Switcher />
                </div>
                <h1
                  className="text-[15px] font-[600] text-[#000] dark:text-[#F5F5F5] app:hidden"
                  style={
                    location.pathname == "/"
                      ? { fontWeight: "600" }
                      : { fontWeight: "500" }
                  }
                >
                  Главная
                </h1>
              </Link>
              <div
                onClick={() => setsearchModal(!searchModal)}
                className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <div>
                    <div className="hidden dark:block">
                      <svg
                        aria-label="Поисковый запрос"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path
                          d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="16.511"
                          x2="22"
                          y1="16.511"
                          y2="22"
                        ></line>
                      </svg>
                    </div>
                    <div className="dark:hidden">
                      <svg
                        aria-label="Поисковый запрос"
                        class="_ab6-"
                        color="#000"
                        fill="#000"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path
                          d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="16.511"
                          x2="22"
                          y1="16.511"
                          y2="22"
                        ></line>
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="text-[14px] font-[500] text-[#000] dark:text-[#F5F5F5] app:hidden">
                  Поисковый запрос
                </h1>
              </div>
              <Link
                to={"/interesting"}
                className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <div>
                    <div className="hidden dark:block">
                      <svg
                        aria-label="Интересное"
                        class="_ab6-"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <polygon
                          fill="none"
                          points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                        <polygon
                          fill-rule="evenodd"
                          points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                        ></polygon>
                        <circle
                          cx="12.001"
                          cy="12.005"
                          fill="none"
                          r="10.5"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></circle>
                      </svg>
                    </div>
                    <div className="dark:hidden">
                      <svg
                        aria-label="Интересное"
                        class="_ab6-"
                        color="#000"
                        fill="#000"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <polygon
                          fill="none"
                          points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                        <polygon
                          fill-rule="evenodd"
                          points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                        ></polygon>
                        <circle
                          cx="12.001"
                          cy="12.005"
                          fill="none"
                          r="10.5"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="text-[14px] font-[500] text-[#000] dark:text-[#F5F5F5] app:hidden">
                  Интересное
                </h1>
              </Link>
              <Link
                to={"/reels"}
                className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  {location.pathname == "/reels" ? (
                    <div>
                      <div className="hidden dark:block">
                        <svg
                          aria-label="Reels"
                          class="_ab6-"
                          color="rgb(245, 245, 245)"
                          fill="rgb(245, 245, 245)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="2.049"
                            x2="21.95"
                            y1="7.002"
                            y2="7.002"
                          ></line>
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="13.504"
                            x2="16.362"
                            y1="2.001"
                            y2="7.002"
                          ></line>
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="7.207"
                            x2="10.002"
                            y1="2.11"
                            y2="7.002"
                          ></line>
                          <path
                            d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                          <path
                            d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="dark:hidden">
                        <svg
                          aria-label="Reels"
                          class="_ab6-"
                          color="#000"
                          fill="#000"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <line
                            fill="#000"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="2.049"
                            x2="21.95"
                            y1="7.002"
                            y2="7.002"
                          ></line>
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="13.504"
                            x2="16.362"
                            y1="2.001"
                            y2="7.002"
                          ></line>
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="7.207"
                            x2="10.002"
                            y1="2.11"
                            y2="7.002"
                          ></line>
                          <path
                            d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                          <path
                            d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="hidden dark:block">
                        <svg
                          aria-label="Reels"
                          class="_ab6-"
                          color="rgb(245, 245, 245)"
                          fill="rgb(245, 245, 245)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="2.049"
                            x2="21.95"
                            y1="7.002"
                            y2="7.002"
                          ></line>
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="13.504"
                            x2="16.362"
                            y1="2.001"
                            y2="7.002"
                          ></line>
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="7.207"
                            x2="10.002"
                            y1="2.11"
                            y2="7.002"
                          ></line>
                          <path
                            d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                          <path
                            d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="dark:hidden">
                        <svg
                          aria-label="Reels"
                          class="_ab6-"
                          color="#000"
                          fill="#000"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <line
                            fill="#000"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="2.049"
                            x2="21.95"
                            y1="7.002"
                            y2="7.002"
                          ></line>
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="13.504"
                            x2="16.362"
                            y1="2.001"
                            y2="7.002"
                          ></line>
                          <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="7.207"
                            x2="10.002"
                            y1="2.11"
                            y2="7.002"
                          ></line>
                          <path
                            d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                          <path
                            d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <h1
                  className="text-[14px] font-[500] text-[#000] dark:text-[#F5F5F5] app:hidden"
                  style={
                    location.pathname == "/reels"
                      ? { fontWeight: "700" }
                      : { fontWeight: "500" }
                  }
                >
                  Reels
                </h1>
              </Link>
              <Link className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer">
                <div className="flex items-center justify-center">
                  <div>
                    <div className="hidden dark:block">
                      <svg
                        aria-label="Messenger"
                        class="_ab6-"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path
                          d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="1.739"
                        ></path>
                        <path
                          d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="dark:hidden">
                      <svg
                        aria-label="Messenger"
                        class="_ab6-"
                        color="#000"
                        fill="#000"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path
                          d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="1.739"
                        ></path>
                        <path
                          d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="text-[14px] font-[500] text-[#000] dark:text-[#F5F5F5] app:hidden">
                  Сообщения
                </h1>
              </Link>
              <Link className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer">
                <div className="flex items-center justify-center">
                  <div>
                    <div className="hidden dark:block">
                      <svg
                        aria-label="Уведомления"
                        class="x1lliihq x1n2onr6"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Уведомления</title>
                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                      </svg>
                    </div>
                    <div className="dark:hidden">
                      <svg
                        aria-label="Уведомления"
                        class="x1lliihq x1n2onr6"
                        color="#000"
                        fill="#000"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Уведомления</title>
                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="text-[14px] font-[500] text-[#000] dark:text-[#F5F5F5] app:hidden">
                  Уведомления
                </h1>
              </Link>
              <button
                onClick={handleClickOpen}
                className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <div>
                    <div className="hidden dark:block">
                      <svg
                        aria-label="Новая публикация"
                        class="_ab6-"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path
                          d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="6.545"
                          x2="17.455"
                          y1="12.001"
                          y2="12.001"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="12.003"
                          x2="12.003"
                          y1="6.545"
                          y2="17.455"
                        ></line>
                      </svg>
                    </div>
                    <div className="dark:hidden">
                      <svg
                        aria-label="Новая публикация"
                        class="_ab6-"
                        color="#000"
                        fill="#000"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path
                          d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="6.545"
                          x2="17.455"
                          y1="12.001"
                          y2="12.001"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="12.003"
                          x2="12.003"
                          y1="6.545"
                          y2="17.455"
                        ></line>
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="text-[14px] font-[500] text-[#000] dark:text-[#F5F5F5] app:hidden">
                  Создать
                </h1>
              </button>
              <Link
                to={"account"}
                className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <div
                    className="rounded-[50%] border-[#000] dark:border-[#FFF]"
                    style={
                      location.pathname == "/account"
                        ? { borderWidth: "2px", borderStyle: "solid" }
                        : null
                    }
                  >
                    <Stack direction="row" spacing={2}>
                      <Avatar sx={{ width: "24px", height: "24px" }}>
                        <img src={person} alt="" />
                      </Avatar>
                    </Stack>
                  </div>
                </div>
                <h1
                  className="text-[14px] font-[500] text-[#000] dark:text-[#F5F5F5] app:hidden"
                  style={
                    location.pathname == "/account"
                      ? { fontWeight: "600" }
                      : { fontWeight: "500" }
                  }
                >
                  Профиль
                </h1>
              </Link>
            </ul>
            <div>
              <div
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <div>
                    <div className="hidden dark:block">
                      <svg
                        aria-label="Настройки"
                        class="_ab6-"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="3"
                          x2="21"
                          y1="4"
                          y2="4"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="3"
                          x2="21"
                          y1="12"
                          y2="12"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="3"
                          x2="21"
                          y1="20"
                          y2="20"
                        ></line>
                      </svg>
                    </div>
                    <div className="dark:hidden">
                      <svg
                        aria-label="Настройки"
                        class="_ab6-"
                        color="#000"
                        fill="#000"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="3"
                          x2="21"
                          y1="4"
                          y2="4"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="3"
                          x2="21"
                          y1="12"
                          y2="12"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="3"
                          x2="21"
                          y1="20"
                          y2="20"
                        ></line>
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="text-[14px] font-[500] text-[#000] dark:text-[#F5F5F5] app:hidden">
                  Ещё
                </h1>
              </div>
              <div className="flex items-center justify-center">
                <Stack direction="row" spacing={2}>
                  <div>
                    <Popper
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      placement="bottom-start"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom-start"
                                ? "left top"
                                : "left bottom",
                          }}
                        >
                          <Paper
                            className="w-[270px] app:ml-[50px]"
                            style={{
                              backgroundColor: "#373636",
                              borderRadius: "18px",
                            }}
                          >
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                className="bg-[#FFF] dark:bg-[#373636] rounded-[18px]"
                              >
                                <div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[8px]  hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] text-[#000] dark:text-[#FFF]">
                                    <Link
                                      to={"/account/edit"}
                                      onClick={handleClose}
                                      className="flex items-center gap-x-[10px] px-[15px] py-[5px] font-[500]"
                                      style={{ fontSize: "14px" }}
                                    >
                                      <div className="dark:hidden">
                                        <svg
                                          aria-label="Настройки"
                                          color="#000"
                                          fill="#000"
                                          height="20"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="20"
                                        >
                                          <title>Настройки</title>
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
                                      <div className="hidden dark:block">
                                        <svg
                                          aria-label="Настройки"
                                          color="rgb(245, 245, 245)"
                                          fill="rgb(245, 245, 245)"
                                          height="20"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="20"
                                        >
                                          <title>Настройки</title>
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
                                      Настройки
                                    </Link>
                                  </div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[8px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] text-[#000] dark:text-[#FFF]">
                                    <Link
                                      onClick={handleClose}
                                      className="flex items-center gap-x-[10px] px-[15px] py-[5px] font-[500]"
                                      style={{ fontSize: "14px" }}
                                    >
                                      <div className="dark:hidden">
                                        <svg
                                          aria-label="Ваши действия"
                                          class="x1lliihq x1n2onr6"
                                          color="#000"
                                          fill=" #000"
                                          height="20"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="20"
                                        >
                                          <title>Ваши действия</title>
                                          <path
                                            d="M12 1.505a10.5 10.5 0 1 1-7.424 17.924"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></path>
                                          <polyline
                                            fill="none"
                                            points="8.893 15.108 12 12 12.012 12.012 12.012 5.793"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></polyline>
                                          <circle
                                            cx="7.24"
                                            cy="2.651"
                                            r="1.125"
                                          ></circle>
                                          <circle
                                            cx="3.515"
                                            cy="5.83"
                                            r="1.125"
                                          ></circle>
                                          <circle
                                            cx="1.636"
                                            cy="10.353"
                                            r="1.125"
                                          ></circle>
                                          <circle
                                            cx="2.01"
                                            cy="15.235"
                                            r="1.125"
                                          ></circle>
                                        </svg>
                                      </div>
                                      <div className="hidden dark:block">
                                        <svg
                                          aria-label="Ваши действия"
                                          class="x1lliihq x1n2onr6"
                                          color="rgb(245, 245, 245)"
                                          fill="rgb(245, 245, 245)"
                                          height="20"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="20"
                                        >
                                          <title>Ваши действия</title>
                                          <path
                                            d="M12 1.505a10.5 10.5 0 1 1-7.424 17.924"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></path>
                                          <polyline
                                            fill="none"
                                            points="8.893 15.108 12 12 12.012 12.012 12.012 5.793"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                          ></polyline>
                                          <circle
                                            cx="7.24"
                                            cy="2.651"
                                            r="1.125"
                                          ></circle>
                                          <circle
                                            cx="3.515"
                                            cy="5.83"
                                            r="1.125"
                                          ></circle>
                                          <circle
                                            cx="1.636"
                                            cy="10.353"
                                            r="1.125"
                                          ></circle>
                                          <circle
                                            cx="2.01"
                                            cy="15.235"
                                            r="1.125"
                                          ></circle>
                                        </svg>
                                      </div>
                                      Ваши действия
                                    </Link>
                                  </div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[8px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] text-[#000] dark:text-[#FFF]">
                                    <Link
                                      onClick={handleClose}
                                      className="flex items-center gap-x-[10px] px-[15px] py-[5px] font-[500]"
                                      style={{ fontSize: "14px" }}
                                    >
                                      <div className="dark:hidden">
                                        <svg
                                          aria-label="Сохраненное"
                                          class="x1lliihq x1n2onr6"
                                          color="#000"
                                          fill="#000"
                                          height="20"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="20"
                                        >
                                          <title>Сохраненное</title>
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
                                      <div className="hidden dark:block">
                                        <svg
                                          aria-label="Сохраненное"
                                          class="x1lliihq x1n2onr6"
                                          color="rgb(245, 245, 245)"
                                          fill="rgb(245, 245, 245)"
                                          height="20"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="20"
                                        >
                                          <title>Сохраненное</title>
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
                                      Сохраненное
                                    </Link>
                                  </div>
                                  <div
                                    ref={anchorRef1}
                                    id="composition-button"
                                    aria-controls={
                                      open1 ? "composition-menu" : undefined
                                    }
                                    aria-expanded={open1 ? "true" : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle1}
                                    className="mx-[7px] px-[5px] rounded-[7px] py-[8px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] text-[#000] dark:text-[#FFF]"
                                  >
                                    <MenuItem
                                      onClick={handleClose}
                                      className="flex items-center gap-x-[10px] py-[50px]"
                                      style={{
                                        fontSize: "14px",
                                        width: "100%",
                                        height: "100%",
                                      }}
                                    >
                                      <div className="dark:hidden">
                                        <svg
                                          aria-label="Значок темы"
                                          class="x1lliihq x1n2onr6"
                                          color="rgb(0, 0, 0)"
                                          fill="rgb(0, 0, 0)"
                                          height="20"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="20"
                                        >
                                          <title>Значок темы</title>
                                          <path d="M12.00018,4.5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V3.5A1.00005,1.00005,0,0,0,12.00018,4.5ZM5.28241,6.69678A.99989.99989,0,1,0,6.69647,5.28271l-1.06054-1.061A.99989.99989,0,0,0,4.22186,5.63574ZM4.50018,12a1,1,0,0,0-1-1h-1.5a1,1,0,0,0,0,2h1.5A1,1,0,0,0,4.50018,12Zm.78223,5.30322-1.06055,1.061a.99989.99989,0,1,0,1.41407,1.41406l1.06054-1.061a.99989.99989,0,0,0-1.41406-1.41407ZM12.00018,19.5a1.00005,1.00005,0,0,0-1,1V22a1,1,0,0,0,2,0V20.5A1,1,0,0,0,12.00018,19.5Zm6.71729-2.19678a.99989.99989,0,0,0-1.41406,1.41407l1.06054,1.061A.99989.99989,0,0,0,19.778,18.36426ZM22.00018,11h-1.5a1,1,0,0,0,0,2h1.5a1,1,0,0,0,0-2ZM18.01044,6.98975a.996.996,0,0,0,.707-.293l1.06055-1.061A.99989.99989,0,0,0,18.364,4.22168l-1.06054,1.061a1,1,0,0,0,.707,1.707ZM12.00018,6a6,6,0,1,0,6,6A6.00657,6.00657,0,0,0,12.00018,6Zm0,10a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,12.00018,16Z"></path>
                                        </svg>
                                      </div>
                                      <div className="hidden dark:block">
                                        <svg
                                          aria-label="Значок темы"
                                          class="x1lliihq x1n2onr6"
                                          color="rgb(245, 245, 245)"
                                          fill="rgb(245, 245, 245)"
                                          height="20"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="20"
                                        >
                                          <title>Значок темы</title>
                                          <path d="M11.502,22.99805A11.4313,11.4313,0,0,1,.49512,14.83691a.99889.99889,0,0,1,.251-.998,1.01148,1.01148,0,0,1,.99707-.249,9.43041,9.43041,0,0,0,2.75879.40821A9.5082,9.5082,0,0,0,13.5957,1.74023a1.00039,1.00039,0,0,1,1.24707-1.248A11.501,11.501,0,0,1,11.502,22.99805ZM3.08984,15.91211A9.49991,9.49991,0,0,0,21.002,11.498,9.57875,9.57875,0,0,0,15.916,3.08594,11.5083,11.5083,0,0,1,3.08984,15.91211Z"></path>
                                        </svg>
                                      </div>
                                      Переключить тему
                                    </MenuItem>
                                  </div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[8px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] text-[#000] dark:text-[#FFF]">
                                    <MenuItem
                                      onClick={handleClose}
                                      className="flex items-center gap-x-[10px] px-[15px] py-[5px] font-[500]"
                                      style={{
                                        fontSize: "14px",
                                        width: "100%",
                                        height: "100%",
                                      }}
                                    >
                                      <div className="dark:hidden">
                                        <svg
                                          aria-label="Сообщение о проблеме"
                                          class="x1lliihq x1n2onr6"
                                          color="#000"
                                          fill="#000"
                                          height="20"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="20"
                                        >
                                          <title>Сообщение о проблеме</title>
                                          <path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path>
                                        </svg>
                                      </div>
                                      <div className="hidden dark:block">
                                        <svg
                                          aria-label="Сообщение о проблеме"
                                          class="x1lliihq x1n2onr6"
                                          color="rgb(245,245,245)"
                                          fill="rgb(245,245,245)"
                                          height="20"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="20"
                                        >
                                          <title>Сообщение о проблеме</title>
                                          <path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path>
                                        </svg>
                                      </div>
                                      Сообщение о проблеме
                                    </MenuItem>
                                  </div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[8px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] text-[#000] dark:text-[#FFF]">
                                    <MenuItem
                                      onClick={handleClose}
                                      className="flex items-center gap-x-[10px] py-[50px]"
                                      style={{
                                        fontSize: "14px",
                                        width: "100%",
                                        height: "100%",
                                      }}
                                    >
                                      Переключение между аккаунта...
                                    </MenuItem>
                                  </div>
                                  <div className="border-t border-[#5a5a5a] my-[12px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] text-[#000] dark:text-[#FFF]"></div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[8px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] text-[#000] dark:text-[#FFF]">
                                    <div
                                      onClick={destroyToken}
                                      className="flex items-center px-[15px] py-[5px] font-[500] cursor-pointer"
                                      style={{
                                        fontSize: "14px",
                                        width: "100%",
                                        height: "100%",
                                      }}
                                    >
                                      Выйти
                                    </div>
                                  </div>
                                </div>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                  <div></div>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <div>
                    <Popper
                      open={open1}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      placement="bottom-start"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom-start"
                                ? "left top"
                                : "left bottom",
                          }}
                        >
                          <Paper
                            className="w-[270px] app:ml-[50px] bg-[#FFF] dark:bg-[#373636]"
                            style={{
                              backgroundColor: "#373636",
                              borderRadius: "18px",
                            }}
                          >
                            <ClickAwayListener onClickAway={handleClose1}>
                              <MenuList
                                autoFocusItem={open1}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown1}
                                className="bg-[#FFF] dark:bg-[#373636] rounded-[18px]"
                              >
                                <div>
                                  <div
                                    onClick={handleClose1}
                                    className="mx-[7px] px-[5px] rounded-[7px] py-[10px] text-[#000] dark:text-[#FFF] flex items-center justify-between"
                                  >
                                    <div className="flex items-center gap-x-[10px]">
                                      <svg
                                        aria-label="Назад"
                                        className="rotate-[270deg] cursor-pointer"
                                        onClick={() => {
                                          handleClose1();
                                          handleToggle();
                                        }}
                                        color="rgb(115, 115, 115)"
                                        fill="rgb(115, 115, 115)"
                                        height="12"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="12"
                                      >
                                        <title>Назад</title>
                                        <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                                      </svg>
                                      <h1 className="text-[#000] dark:text-[#F5F5F5] font-[600]">
                                        Переключить тему
                                      </h1>
                                    </div>
                                    <div className="flex items-center justify-center pr-[5px]">
                                      <div className="dark:hidden">
                                        <svg
                                          aria-label="Значок темы"
                                          class="x1lliihq x1n2onr6"
                                          color="rgb(0, 0, 0)"
                                          fill="rgb(0, 0, 0)"
                                          height="15"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="15"
                                        >
                                          <title>Значок темы</title>
                                          <path d="M12.00018,4.5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V3.5A1.00005,1.00005,0,0,0,12.00018,4.5ZM5.28241,6.69678A.99989.99989,0,1,0,6.69647,5.28271l-1.06054-1.061A.99989.99989,0,0,0,4.22186,5.63574ZM4.50018,12a1,1,0,0,0-1-1h-1.5a1,1,0,0,0,0,2h1.5A1,1,0,0,0,4.50018,12Zm.78223,5.30322-1.06055,1.061a.99989.99989,0,1,0,1.41407,1.41406l1.06054-1.061a.99989.99989,0,0,0-1.41406-1.41407ZM12.00018,19.5a1.00005,1.00005,0,0,0-1,1V22a1,1,0,0,0,2,0V20.5A1,1,0,0,0,12.00018,19.5Zm6.71729-2.19678a.99989.99989,0,0,0-1.41406,1.41407l1.06054,1.061A.99989.99989,0,0,0,19.778,18.36426ZM22.00018,11h-1.5a1,1,0,0,0,0,2h1.5a1,1,0,0,0,0-2ZM18.01044,6.98975a.996.996,0,0,0,.707-.293l1.06055-1.061A.99989.99989,0,0,0,18.364,4.22168l-1.06054,1.061a1,1,0,0,0,.707,1.707ZM12.00018,6a6,6,0,1,0,6,6A6.00657,6.00657,0,0,0,12.00018,6Zm0,10a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,12.00018,16Z"></path>
                                        </svg>
                                      </div>
                                      <div className="hidden dark:block">
                                        <svg
                                          aria-label="Значок темы"
                                          class="x1lliihq x1n2onr6"
                                          color="rgb(245, 245, 245)"
                                          fill="rgb(245, 245, 245)"
                                          height="15"
                                          role="img"
                                          viewBox="0 0 24 24"
                                          width="15"
                                        >
                                          <title>Значок темы</title>
                                          <path d="M11.502,22.99805A11.4313,11.4313,0,0,1,.49512,14.83691a.99889.99889,0,0,1,.251-.998,1.01148,1.01148,0,0,1,.99707-.249,9.43041,9.43041,0,0,0,2.75879.40821A9.5082,9.5082,0,0,0,13.5957,1.74023a1.00039,1.00039,0,0,1,1.24707-1.248A11.501,11.501,0,0,1,11.502,22.99805ZM3.08984,15.91211A9.49991,9.49991,0,0,0,21.002,11.498,9.57875,9.57875,0,0,0,15.916,3.08594,11.5083,11.5083,0,0,1,3.08984,15.91211Z"></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="border-t border-[#e4e4e4] dark:border-[#5a5a5a] my-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] text-[#000] dark:text-[#F5F5F5]"></div>
                                  <div className="mx-[7px] px-[5px] rounded-[7px] py-[5px] hover:bg-[#e7e7e7]  dark:hover:bg-[#1f1f1f] text-[#000] dark:text-[#F5F5F5] flex items-center justify-between">
                                    <MenuItem
                                      onClick={handleClose}
                                      className="flex items-center gap-x-[10px] py-[50px]"
                                      style={{
                                        fontSize: "14px",
                                        width: "100%",
                                        height: "100%",
                                      }}
                                    >
                                      Ночной режим
                                    </MenuItem>
                                    <div className="pr-[5px]">
                                      <Switcher />
                                    </div>
                                  </div>
                                </div>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                </Stack>
              </div>
            </div>
          </div>
        </div>
        <div className="appBar w-full border-t  z-20 hidden fixed md:block bottom-0 left-0  border-[#d6d6d6] dark:border-[#2b2b2b] bg-[#fff] dark:bg-[#000] px-[10px]">
          <div className=" flex flex-col justify-between">
            <ul className="flex justify-around gap-y-[5px]">
              <Link
                to={"/"}
                className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  {location.pathname == "/" ? (
                    <div>
                      <div className="hidden dark:block">
                        <svg
                          aria-label="Главная"
                          class="_ab6-"
                          color="rgb(245, 245, 245)"
                          fill="rgb(245, 245, 245)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                            fill="rgb(245, 245, 245)"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                      <div className="dark:hidden">
                        <svg
                          aria-label="Главная"
                          class="_ab6-"
                          color="#000"
                          fill="#000"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                            fill="#000"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="hidden dark:block">
                        <svg
                          aria-label="Главная"
                          class="_ab6-"
                          color="rgb(245, 245, 245)"
                          fill="rgb(245, 245, 245)"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                            fill="#000"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                      <div className="dark:hidden">
                        <svg
                          aria-label="Главная"
                          class="_ab6-"
                          color="#000"
                          fill="#000"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                            fill="rgb(245, 245, 245)"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
              <Link
                to={"/interesting"}
                className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <div>
                    <div className="hidden dark:block">
                      <svg
                        aria-label="Интересное"
                        class="_ab6-"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <polygon
                          fill="none"
                          points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                        <polygon
                          fill-rule="evenodd"
                          points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                        ></polygon>
                        <circle
                          cx="12.001"
                          cy="12.005"
                          fill="none"
                          r="10.5"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></circle>
                      </svg>
                    </div>
                    <div className="dark:hidden">
                      <svg
                        aria-label="Интересное"
                        class="_ab6-"
                        color="#000"
                        fill="#000"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <polygon
                          fill="none"
                          points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                        <polygon
                          fill-rule="evenodd"
                          points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                        ></polygon>
                        <circle
                          cx="12.001"
                          cy="12.005"
                          fill="none"
                          r="10.5"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer">
                <div className="flex items-center justify-center">
                  <div>
                    <div className="hidden dark:block">
                      <svg
                        aria-label="Reels"
                        class="_ab6-"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="2.049"
                          x2="21.95"
                          y1="7.002"
                          y2="7.002"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="13.504"
                          x2="16.362"
                          y1="2.001"
                          y2="7.002"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="7.207"
                          x2="10.002"
                          y1="2.11"
                          y2="7.002"
                        ></line>
                        <path
                          d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                        <path
                          d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="dark:hidden">
                      <svg
                        aria-label="Reels"
                        class="_ab6-"
                        color="#000"
                        fill="#000"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="2.049"
                          x2="21.95"
                          y1="7.002"
                          y2="7.002"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="13.504"
                          x2="16.362"
                          y1="2.001"
                          y2="7.002"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="7.207"
                          x2="10.002"
                          y1="2.11"
                          y2="7.002"
                        ></line>
                        <path
                          d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                        <path
                          d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <div
                onClick={handleClickOpen}
                className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <div>
                    <div className="hidden dark:block">
                      <svg
                        aria-label="Новая публикация"
                        class="_ab6-"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path
                          d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="6.545"
                          x2="17.455"
                          y1="12.001"
                          y2="12.001"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="12.003"
                          x2="12.003"
                          y1="6.545"
                          y2="17.455"
                        ></line>
                      </svg>
                    </div>
                    <div className="dark:hidden">
                      <svg
                        aria-label="Новая публикация"
                        class="_ab6-"
                        color="#000"
                        fill="#000"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path
                          d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="6.545"
                          x2="17.455"
                          y1="12.001"
                          y2="12.001"
                        ></line>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="12.003"
                          x2="12.003"
                          y1="6.545"
                          y2="17.455"
                        ></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer">
                <div className="flex items-center justify-center">
                  <div>
                    <div className="hidden dark:block">
                      <svg
                        aria-label="Messenger"
                        class="_ab6-"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path
                          d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="1.739"
                        ></path>
                        <path
                          d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="dark:hidden">
                      <svg
                        aria-label="Messenger"
                        class="_ab6-"
                        color="#000"
                        fill="#000"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path
                          d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="1.739"
                        ></path>
                        <path
                          d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to={"account"}
                className="flex items-center gap-x-[15px] h-[50px] p-[12px] rounded-[10px] hover:bg-[#ebeaea] dark:hover:bg-[#1f1f1f] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <div
                    className="rounded-[50%] border-[#000] dark:border-[#FFF]"
                    style={
                      location.pathname == "/account"
                        ? { borderWidth: "2px", borderStyle: "solid" }
                        : null
                    }
                  >
                    <Stack direction="row" spacing={2}>
                      <Avatar sx={{ width: "24px", height: "24px" }}>
                        <img src={person} alt="" />
                      </Avatar>
                    </Stack>
                  </div>
                </div>
              </Link>
            </ul>
          </div>
        </div>
        <div className="w-full relative flex flex-col justify-between">
          <div className="bg-[#fff] dark:bg-[#000] ml-[10%] app:ml-0 md:pb-[30px]">
            <Outlet />
          </div>
          <footer className="w-full bg-[#fff] dark:bg-[#000] pl-[17%] md:pl-0 flex items-center px-[20px] pt-[20px] pb-[30px] md:hidden">
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
                <select className="dark:bg-[#000] dark:text-[#fff]">
                  <option value="">Русский</option>
                  <option value="">English</option>
                </select>
                <p className="dark:text-[#A8A8A8] text-[#000] ">
                  © 2023 Instagram from Meta
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div>
        <Dialog
          open={open2}
          onClose={handleClose3}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent
            className="w-[500px] h-[540px] sm:w-[350px] sm:h-[400px] sm1:w-[270px]"
            sx={{
              padding: 0,
              backgroundColor: "#2f2f2f",
            }}
          >
            <ul className="flex flex-col bg-[#FFF] dark:bg-[#2f2f2f]">
              <h1 className="py-[14px] border-b border-[#d2d2d2] dark:border-[#414141] text-center text-[#000] dark:text-[#FFF] text-[14px] font-[600]">
                Создание публикации
              </h1>
            </ul>
            <div className="grid place-items-center h-[90.8%] bg-[#FFF] dark:bg-[#2f2f2f]">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <div>
                    <div className="hidden dark:block">
                      <svg
                        aria-label="Значок, соответствующий медиафайлам, например изображениям или видео"
                        class="x1lliihq x1n2onr6"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="77"
                        role="img"
                        viewBox="0 0 97.6 77.3"
                        width="96"
                      >
                        <title>
                          Значок, соответствующий медиафайлам, например
                          изображениям или видео
                        </title>
                        <path
                          d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="dark:hidden">
                      <svg
                        aria-label="Значок, соответствующий медиафайлам, например изображениям или видео"
                        class="x1lliihq x1n2onr6"
                        color="#000"
                        fill="#000"
                        height="77"
                        role="img"
                        viewBox="0 0 97.6 77.3"
                        width="96"
                      >
                        <title>
                          Значок, соответствующий медиафайлам, например
                          изображениям или видео
                        </title>
                        <path
                          d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="text-[#000] dark:text-[#FFF] font-[500] text-[18px] py-[10px] sm1:text-[15px]">
                  Перетащите сюда фото и видео
                </h1>
                <div className="py-[15px]">
                  <label
                    htmlFor="files"
                    className="bg-[#0095F6] px-[15px] py-[8px] text-[#FFF] dark:text-[#FFF] font-[600] rounded-[10px] text-[13px] cursor-pointer  "
                  >
                    Выбрать на компьютере
                  </label>
                  <input
                    type="file"
                    id="files"
                    className="hidden"
                    multiple
                    onChange={(e) => {
                      handleClickOpen1();
                      handleClose3();
                      setFilles(e.target.files);
                    }}
                  />
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {/* POST */}
      <div>
        <Dialog
          open={open3}
          onClose={handleClose4}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="md"
        >
          <DialogContent
            sx={{
              padding: 0,
              backgroundColor: "#2f2f2f",
            }}
            className=""
          >
            <div className="flex items-center justify-between py-[10px] px-[15px] border-b dark:border-[#424141] border-[#d3d3d3] dark:bg-[#2f2f2f] bg-[#FFF]">
              <div
                className="cursor-pointer"
                onClick={() => {
                  handleClose4();
                  handleClickOpen();
                }}
              >
                <div className="flex items-center justify-center">
                  <div>
                    <div className="hidden dark:block">
                      <svg
                        aria-label="Назад"
                        class="x1lliihq x1n2onr6"
                        color="rgb(245, 245, 245)"
                        fill="rgb(245, 245, 245)"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Назад</title>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="2.909"
                          x2="22.001"
                          y1="12.004"
                          y2="12.004"
                        ></line>
                        <polyline
                          fill="none"
                          points="9.276 4.726 2.001 12.004 9.276 19.274"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polyline>
                      </svg>
                    </div>
                    <div className="dark:hidden">
                      <svg
                        aria-label="Назад"
                        class="x1lliihq x1n2onr6"
                        color="#000"
                        fill="#000"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Назад</title>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="2.909"
                          x2="22.001"
                          y1="12.004"
                          y2="12.004"
                        ></line>
                        <polyline
                          fill="none"
                          points="9.276 4.726 2.001 12.004 9.276 19.274"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-[#000] dark:text-[#FFF] font-[600] dark:font-[500]  sm:text-[10px]">
                  Создание публикации
                </h1>
              </div>
              <div>
                <button onClick={addPost} className="text-[#0095F6] font-[600]">
                  Поделиться
                </button>
              </div>
            </div>
            <div className="flex items-start justify-center w-full md:flex-col bg-[#FFF] dark:bg-[#2f2f2f]">
              <div className="w-[500px] h-[500px] relative flex items-center justify-center md:w-[300px] md:h-[300px] sm1:w-full sm1:h-full">
                <img
                  src={input}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-[15px] py-[20px] w-[300px] md:w-full">
                <Stack
                  direction="row"
                  spacing={2}
                  className="flex items-center"
                >
                  <Avatar sx={{ width: "30px", height: "30px" }}>
                    <img src={person} alt="" />
                  </Avatar>
                  <h1 className="text-[#000] dark:text-[#FFF] font-[600]">
                    thexasan_
                  </h1>
                </Stack>
                <div className="py-[15px] w-full">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full h-auto bg-transparent text-[#000] dark:text-[#FFF] outline-none"
                    placeholder="Добавьте описание…"
                  ></input>
                  <div className="flex items-center justify-between"></div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Layout;
