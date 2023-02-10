import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../Application";
import axios from "axios";
export const Morefields = ({ data, handleInput }) => {
  const { error } = useContext(userContext);

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
    <div
      className="form-page mt-5 d-flex flex-column"
      style={{ gridGap: "10px" }}
    >
      <div className="form-row position-relative">
        <label htmlFor="">სასწავლებელი</label>
        <input
          name="place"
          type="text"
          onChange={handleInput}
          value={data.place}
          id={data.id}
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
            class="form-select p-2"
            onChange={handleInput}
            value={data.degree}
            id={data.id}
            placeholder="აირჩიეთ ხარისხი"
            name="degree"
          >
            <option selected disabled hidden>
              აირჩიეთ ხარისხი
            </option>
            {degree &&
              degree.map((each) => {
                return (
                  <>
                    <option>{each.title}</option>
                  </>
                );
              })}
          </select>
        </div>
        <div className="form-group col-md-6 ">
          <label htmlFor="">დასრულების თარიღი</label>
          <input
            name="enddate"
            onChange={handleInput}
            value={data.degEnd}
            id={data.id}
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
            name="degdec"
            type="file"
            onChange={handleInput}
            value={data.degDec}
            id={data.id}
            placeholder="განათლების აღწერა"
            className="p-3 custom-file-input"
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};
