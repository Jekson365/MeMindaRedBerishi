import React, { useContext, useEffect, useState } from "react";
import { Morefields } from "../additional/Morefields";
import { userContext } from "../Application";
import ErrorMsg from "../additional/ErrorMsg";
import axios from "axios";
export const Education = () => {
  const { handleData, formData, allItem, setAllItem, error } =
    useContext(userContext);

  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [savedData, setSavedData] = useState(
    JSON.parse(localStorage.getItem("additional"))
  );

  async function gt() {
    var dt = await JSON.parse(localStorage.getItem("additional"));

    setAfterReload(dt);h
  }

  const addNewFields = () => {
    setAdditionalInfo([
      ...additionalInfo,
      {
        id: Math.floor(Math.random() * 99999),
        place: "",
        degree: "",
        endDate: "",
        degDec: "",
      },
    ]);
  };
  const handleInput = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;

    additionalInfo.map((each) => {
      if (each.id == e.target.id) {
        if (targetName == "place") {
          each.place = targetValue;
        }

        if (targetName == "degree") {
          each.degree = targetValue;
        }

        if (targetName == "enddate") {
          each.endDate = targetValue;
        }

        if (targetName == "degdec") {
          each.degDec = targetValue;
        }
      }
    });

    localStorage.setItem("additional", JSON.stringify(additionalInfo));
  };
  const [degree, setDegree] = useState();
  const getDegrees = async () => {
    axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then((res) => {
        setDegree(res.data);
      });
  };
  useEffect(() => {
    getDegrees();
  }, []);
  return (
    <div>
      <div className="head d-flex w-100 align-items-center justify-content-between ">
        <h3 className="h5">განათლება</h3>
        <div className="coubt">3/3</div>
      </div>
      <div
        className="form-page mt-5 d-flex flex-column position-relative"
        style={{ gridGap: "10px" }}
      >
        <div className="form-row">
          <label htmlFor="">სასწავლებელი</label>
          <input
            onChange={handleData}
            name="place"
            value={formData.place}
            type="text"
            className="form-control p-2"
            placeholder="სასწავლებელი"
          />
          {error ? <ErrorMsg error={error} /> : ""}
          <label htmlFor="" className="min">
            მინიმუმ 2 სიმბოლო
          </label>
        </div>
        <div className="form-row d-flex w-100 justify-content-between">
          <div className="form-group col-md-6">
            <label htmlFor="">ხარისხი</label>
            <select
              onChange={handleData}
              name="degree"
              value={formData.degree}
              class="form-select p-2"
              placeholder="აირჩიეთ ხარისხი"
            >
              <option selected disabled hidden>
                აირჩიეთ ხარისხი
              </option>
              {degree && degree.map((each) => {
                return (
                  <>
                    <option>{each.title}</option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="form-group col-md-6 ">
            <label htmlFor="">დასრულების თარიღი თარიღი</label>
            <input
              onChange={handleData}
              name="degend"
              value={formData.degStartDate}
              type="date"
              className="form-control p-2"
              placeholder="სახელი"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group d-flex flex-column">
            <label htmlFor="">აღწერა</label>
            <textarea
              onChange={handleData}
              name="degdec"
              value={formData.degDec}
              type="file"
              placeholder="განათლების აღწერა"
              className="p-3 custom-file-input"
              rows={4}
              id="inputGroupFile01"
            />
          </div>
        </div>
        {additionalInfo &&
          additionalInfo.map((each) => {
            return (
              <>
                <Morefields
                  id={each.id}
                  data={each}
                  handleInput={handleInput}
                />
              </>
            );
          })}
        <div className="underline mt-5 bg-dark"></div>
        <div className="form-row mt-3">
          <button className="add" onClick={addNewFields}>
            მეტი გამოცდილების დამატება
          </button>
        </div>
      </div>
    </div>
  );
};
