import React, { useContext } from 'react'
import { userContext } from '../Application'

export const Experience = () => {
  const { handleData,formData} = useContext(userContext)
  return (
    <>
      <div className="head d-flex w-100 align-items-center justify-content-between ">
        <h3 className="h5">გამოცდილება</h3>
        <div className="coubt">2/3</div>
      </div>
      <div className="form-page mt-3 d-flex flex-column" style={{ "gridGap": "10px" }}>
        <div className="form-row">
          <label htmlFor="">თანამდებობა</label>
          <input
            onChange={handleData} name='post' value={formData.post}
            type="text" className='form-control p-2' placeholder='თანამდებობა' />
          <label htmlFor="" className='min'>მინიმუმ 2 სიმბოლო</label>
        </div>
        <div className="form-row">
          <label htmlFor="">დამსაქმებელი</label>
          <input
            onChange={handleData} name='emp' value={formData.emp}
            type="text" className='form-control p-2' placeholder='დამსაქმებელი' />
          <label htmlFor="" className='min'>მინიმუმ 2 სიმბოლო</label>
        </div>
        <div className="form-row d-flex w-100 justify-content-between">
          <div className="form-group col-md-6 ">
            <label htmlFor="">დაწყების თარიღი</label>
            <input
              onChange={handleData} name='startdate' value={formData.startDate}
              type="date" className='form-control p-2' placeholder='სახელი' />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="">დამთავრების თარიღი</label>
            <input
              onChange={handleData} name='enddate' value={formData.endDate}
              type="date" className='form-control p-2' placeholder='გვარი' />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group d-flex flex-column">
            <label htmlFor="">აღწერა</label>
            <textarea
              onChange={handleData} name='expdesc' value={formData.expDesc}
              type="file" placeholder='როლი თანამდებობაზე' className='p-3 custom-file-inpu' rows={4} id='inputGroupFile01' />
          </div>
        </div>
        <div className="underline mt-5 bg-dark"></div>
        <div className="form-row mt-3">
          <button className="add">მეტი გამოცდილების დამატება</button>
        </div>
      </div>
      
    </>
  )
}
