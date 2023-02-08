import React, { createContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";

import { Education } from "./application-page/Education";
import { Experience } from "./application-page/Experience";
import { Private } from "./application-page/Private";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Resume } from "./cv-page/Resume";
import { useContext } from "react";

export const userContext = createContext();

export const Application = () => {
  const [allItem, setAllItem] = useState();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    photo: "",
    mail: "",
    mobile: "",
    post: "",
    about: "",
    emp: "",
    startDate: "",
    endDate: "",
    expDesc: "",
    place: "",
    degree: "",
    degEndDate: "",
    degDec: "",
  });
  const test = new RegExp("/^[ა-ჰ]+$/g");
  setInterval(() => {
    const savedName = localStorage.getItem("name");
    const savedSurname = localStorage.getItem("surname");
    const savedPhoto = localStorage.getItem("photo");
    const savedAbout = localStorage.getItem("about");
    const savedMail = localStorage.getItem("mail");
    const savedMobile = localStorage.getItem("mobile");
    const savedPost = localStorage.getItem("post");
    const savedEmp = localStorage.getItem("emp");
    const savedStartDate = localStorage.getItem("startdate");
    const savedEndDate = localStorage.getItem("enddate");
    const savedExpDesc = localStorage.getItem("expdesc");
    const savedPlace = localStorage.getItem("place");
    const savedDegEndDate = localStorage.getItem("degend");
    const savedDeg = localStorage.getItem("degree");
    const savedDegDec = localStorage.getItem("degdec");

    setFormData({
      name: savedName || "",
      surname: savedSurname || "",
      photo: savedPhoto || "",
      about: savedAbout || "",
      mail: savedMail || "",
      mobile: savedMobile || "",
      post: savedPost || "",
      emp: savedEmp || "",
      startDate: savedStartDate || "",
      endDate: savedEndDate || "",
      expDesc: savedExpDesc || "",
      place: savedPlace || "",
      degEndDate: savedDegEndDate || "",
      degDec: savedDegDec || "",
      degree: savedDeg || "",
    });
  });
  const panels = [
    {
      id: 1,
      elemnt: <Private />,
    },
    {
      id: 2,
      elemnt: <Experience />,
    },
    {
      id: 3,
      elemnt: <Education />,
    },
  ];
  const [page, setPage] = useState(0);

  // states

  const handleData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    localStorage.setItem(event.target.name, event.target.value);
  };
  const handleImage = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: URL.createObjectURL(event.target.files[0]),
    });
    localStorage.setItem(
      event.target.name,
      URL.createObjectURL(event.target.files[0])
    );
  };
  // states
  return (
    <>
      <div
        className="continer-fluid"
        style={{ eight: "100vh", background: "rgba(240,240,240)" }}
      >
        <div className="row h-100">
          <userContext.Provider
            value={{
              formData,
              handleData,
              handleImage,
              setAllItem,
            }}
          >
            <div className="col-md-7">
              <div
                className="all p-5 d-flex flex-column justify-content-between"
                style={{
                  maxWidth: "760px",
                  margin: "0 auto",
                  "overflow-y": "scroll",
                  height: "900px",
                }}
              >
                <DisplayPage singlePage={panels[page].elemnt} />
                <div className="buttons-con d-flex justify-content-between  w-100 p-5">
                  <div className={`button-prev ${page == 0 ? "o-0" : ""}`}>
                    <button onClick={() => setPage(page - 1)}>წინა</button>
                  </div>
                  <div className={`button-prev ${page == 2 ? "o-0" : ""}`}>
                    <button onClick={() => setPage(page + 1)}>შემდეგი</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 " style={{ background: "white" }}>
              <Resume />
            </div>
          </userContext.Provider>
        </div>
      </div>
    </>
  );
};

function DisplayPage({ singlePage }) {
  return <>{singlePage}</>;
}
