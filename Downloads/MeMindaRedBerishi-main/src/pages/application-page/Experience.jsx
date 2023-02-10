import React, { useContext, useState } from "react";
import { ExpFields } from "../additional/ExpFields";
import { userContext } from "../Application";
import ErrorMsg from "../additional/ErrorMsg";
export const Experience = () => {
  const { handleData, formData, error,setError} = useContext(userContext);
  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [savedData, setSavedData] = useState(
    JSON.parse(localStorage.getItem("additionalexp"))
  );

  async function gt() {
    var dt = await JSON.parse(localStorage.getItem("additionalexp"));

    setAfterReload(dt);
  }

  const addNewFields = () => {
    setAdditionalInfo([
      ...additionalInfo,
      {
        id: Math.floor(Math.random() * 99999),
        post: "",
        emp: "",
        startDate: "",
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
        if (targetName == "post") {
          each.post = targetValue;
        }
        if (targetName == "emp") {
          each.emp = targetValue;
        }
        if (targetName == "startdate") {
          each.startDate = targetValue;
        }

        if (targetName == "enddate") {
          each.endDate = targetValue;
        }
        if (targetName == "expdesc") {
          each.degDec = targetValue;
        }
      }
    });
    if (targetName == "post" || targetName == "emp" || targetName == "post" || targetName == "emp") {
      if (e.target.value.length <= 2) {
        setError("სიმბოლოები უნდა იყოს 2-ზე მეტი");
      } else {
        setError("");
      }
    }
    if (error == '') {
      localStorage.setItem("additionalexp", JSON.stringify(additionalInfo));
    }
  };

  return (
    <>
      <div className="head d-flex w-100 align-items-center justify-content-between ">
        <h3 className="h5">გამოცდილება</h3>
        <div className="coubt">2/3</div>
      </div>
      <div
        className="form-page mt-3 d-flex flex-column position-relative"
        style={{ gridGap: "10px" }}
      >
        <div className="form-row">
          <label htmlFor="">თანამდებობა</label>
          <input
            onChange={handleData}
            name="post"
            value={formData.post}
            type="text"
            className="form-control p-2"
            placeholder="თანამდებობა"
          />
          {error ? <ErrorMsg error={error} /> : ""}
          <label htmlFor="" className="min">
            მინიმუმ 2 სიმბოლო
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="">დამსაქმებელი</label>
          <input
            onChange={handleData}
            name="emp"
            value={formData.emp}
            type="text"
            className="form-control p-2"
            placeholder="დამსაქმებელი"
          />
          <label htmlFor="" className="min">
            მინიმუმ 2 სიმბოლო
          </label>
        </div>
        <div className="form-row d-flex w-100 justify-content-between">
          <div className="form-group col-md-6 ">
            <label htmlFor="">დაწყების თარიღი</label>
            <input
              onChange={handleData}
              name="startdate"
              value={formData.startDate}
              type="date"
              className="form-control p-2"
              placeholder="სახელი"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="">დამთავრების თარიღი</label>
            <input
              onChange={handleData}
              name="enddate"
              value={formData.endDate}
              type="date"
              className="form-control p-2"
              placeholder="გვარი"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group d-flex flex-column">
            <label htmlFor="">აღწერა</label>
            <textarea
              onChange={handleData}
              name="expdesc"
              value={formData.expDesc}
              type="file"
              placeholder="როლი თანამდებობაზე"
              className="p-3 custom-file-inpu"
              rows={4}
              id="inputGroupFile01"
            />
          </div>
        </div>
        {additionalInfo &&
          additionalInfo.map((each) => {
            return (
              <>
                <ExpFields id={each.id} data={each} handleInput={handleInput} />
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
    </>
  );
};
