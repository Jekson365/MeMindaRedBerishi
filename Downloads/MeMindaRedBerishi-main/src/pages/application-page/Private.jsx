import React, { useState } from "react";
import { useContext } from "react";
import { userContext } from "../Application";
import ErrorMsg from "../additional/ErrorMsg";

export const Private = () => {
  const { handleData, handleImage, formData, error } = useContext(userContext);


  return (
    <>
      <div className="head d-flex w-100 align-items-center justify-content-between ">
        <h3 className="h5">პირადი ინფო</h3>
        <div className="coubt">1/3</div>
      </div>
      <div className="form-page d-flex flex-column" style={{ gridGap: "10px" }}>
        <div className="form-row d-flex w-100 justify-content-between">
          <div className="form-group col-md-6 position-relative">
            <label htmlFor="">სახელი</label>
            <input
              type="text"
              className="form-control p-2"
              placeholder="სახელი"
              onChange={handleData}
              name="name"
              value={formData.name}
            />
            {error ? <ErrorMsg error={error} /> : ""}
            <label htmlFor="" className="min ">
              მინიმუმ ორი ასო,ქართული ასოები
            </label>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="">გვარი</label>
            <input
              type="text"
              className="form-control p-2"
              placeholder="გვარი"
              onChange={handleData}
              name="surname"
              value={formData.surname}
            />
            <label htmlFor="" className="min">
              მინიმუმ ორი ასო,ქართული ასოები
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="">პირადი ფოტოს ატვირთვა</label>
            <input
              onChange={handleImage}
              name="photo"
              accept="image/*"
              file={formData.photo}
              type="file"
              placeholder="ატვირთვა"
              className="custom-file-input"
              id="inputGroupFile01"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group d-flex flex-column">
            <label htmlFor="">ჩემს შესახებ (არასავალდებულო)</label>
            <textarea
              onChange={handleData}
              name="about"
              value={formData.about}
              type="file"
              placeholder="ატვირთვა"
              className="custom-file-input"
              rows={4}
              id="inputGroupFile01"
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="">ელ.ფოსტა</label>
          <input
            onChange={handleData}
            name="mail"
            value={formData.mail || ""}
            type="email"
            className="form-control p-2"
            placeholder="anzor666@redberry.ge"
          />
          <label htmlFor="" className="min">
            უნდა მთავრდებოდეს @redberry.ge.com
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="">მობილურის ნომერი</label>
          <input
            onChange={handleData}
            name="mobile"
            value={formData.mobile}
            type="number"
            className="form-control p-2"
            placeholder="+995 557 98 37 62"
          />
          <label htmlFor="" className="min">
            უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს
          </label>
        </div>
      </div>
    </>
  );
};
