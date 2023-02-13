import React, { useContext, useEffect } from "react";
import { userContext } from "../Application";
import { Resume } from "../cv-page/Resume";
import { useState } from "react";

export const Final = () => {
  const [cv, setCv] = useState();

  async function getItems() {
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
    const savedDegDec = localStorage.getItem("degdec");

    const savedExpDesc = localStorage.getItem("expdesc");
    const savedPlace = localStorage.getItem("place");
    const savedDegEndDate = localStorage.getItem("degend");
    const savedDeg = localStorage.getItem("degree");

    const additionalExperience = JSON.parse(
      localStorage.getItem("additionalexp")
    );
    const additionalEducation = JSON.parse(localStorage.getItem("additional"));

    const data = {
      name: savedName,
      surname: savedSurname,
      email: savedMail,
      phone_number: savedMobile,
      image: savedPhoto,
      about_me: savedAbout,
      experiences: [
        {
          post: savedPost,
          emp: savedEmp,
          endDate: savedEndDate,
          startDate: savedStartDate,
          degDec: savedExpDesc,
        },
        additionalExperience.map((each)=>each),
      ],
      educations: [
        {
          degDec: savedDegDec,
          degree: savedDeg,
          endDate: savedDegEndDate,
          place: savedPlace,
        },
        additionalEducation.map((each)=>each),
      ],
    };
  }
  useEffect(() => {
    getItems()
  }, []);
  return (
    <>
      <>
        <div className="gap"></div>
        <div
          className="container"
          style={{ height: "900px", maxWidth: "800px", overflowY: "scroll" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1 className="h1 color-orange">
                  {cv.name} {cv.surname}
                </h1>
                <p className="p">{cv.mail}</p>
                <p className="p">{cv.mobile}</p>
                {cv.about ? (
                  <h3 className="h3 color-orange">ჩემს შესახებ</h3>
                ) : (
                  ""
                )}
                <p className="p mw-70">{cv.about}</p>
              </div>
              <div className="col-md-4">
                <div
                  className="profile-image"
                  style={{
                    backgroundImage: `url('${cv.photo}')`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div className="ll"></div>
            </div>
          </div>
          <div className="gap"></div>
          {allExp &&
            allExp.map((each) => {
              const { post, emp, startDate, endDate, degDec } = each;
              return (
                <>
                  <div className="container">
                    <h3 className="h3 color-orange">გამოცდილება</h3>
                    <p className="p">
                      {post} {emp}
                    </p>
                    <div className="text-dark">
                      {startDate} {endDate}
                    </div>
                    <p className="mw-70">{degDec}</p>
                  </div>
                </>
              );
            })}
          <div className="ll"></div>
          <div className="gap"></div>
          <div className="container">
            <h3 className="h3 color-orange">განათლება</h3>
            <p className="p ">
              {cv.place} {cv.degree}
            </p>
            <div className="text-dark">{cv.degEndDate}</div>
            <p className=" mw-70">{cv.degDec}</p>
          </div>
          {allItem &&
            allItem.map((each) => {
              const { degDec, degree, endDate, id, place } = each;
              return (
                <>
                  <div className="container">
                    <h3 className="h3 color-orange">განათლება</h3>
                    <p className="p ">
                      {place} - {degree}
                    </p>
                    <div className="text-dark">{endDate}</div>
                    <p className=" mw-70">{degDec}</p>
                  </div>
                </>
              );
            })}
          <div className="ll"></div>
        </div>
      </>
    </>
  );
};
