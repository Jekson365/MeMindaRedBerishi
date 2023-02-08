import React, { useContext, useEffect, useState } from 'react'
import '../../resume.scss'
import { userContext } from '../Application'

export const Resume = () => {
    const { formData } = useContext(userContext)


    const [allItem, setAllItem] = useState()

    async function getAllItem() {
        const A = await JSON.parse(localStorage.getItem("additionaldata"))
        setAllItem(A)
    }
    setInterval(()=> {
        getAllItem()
    })
    return (
        <>
            <div className="gap"></div>
            <div className="container" style={{ "height": "100vh", 'maxWidth': "800px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className='h1 color-orange'>{formData.name}  {formData.surname}</h1>
                            <p className="p">{formData.mail}</p>
                            <p className="p">{formData.mobile}</p>
                            <h3 className="h3 color-orange">ჩემს შესახებ</h3>
                            <p className="p mw-70">{formData.about}</p>
                        </div>
                        <div className="col-md-4">
                            <div className="profile-image" style={{ 'backgroundImage': `url('${formData.photo}')`, 'backgroundSize': "cover" }}></div>
                        </div>
                        <div className="ll"></div>
                    </div>
                </div>
                <div className="gap"></div>
                <div className="container" >
                    <h3 className="h3 color-orange">გამოცდილება</h3>
                    <p className="p">{formData.post} - {formData.emp}</p>
                    <div className="text-dark">{formData.startDate} - {formData.endDate}</div>
                    <p className="mw-70">
                        {formData.expDesc}
                    </p>
                </div>
                <div className="ll"></div>
                <div className="gap"></div>
                <div className="container">
                    <h3 className="h3 color-orange">განათლება</h3>
                    <p className="p ">{formData.place} - {formData.degree}</p>
                    <div className="text-dark">{formData.degEndDate}</div>
                    <p className=" mw-70">
                        {formData.degDec}
                    </p>
                </div>
                {allItem && allItem.map((each) => {
                    const { degDec, degree, endDate, id, place } = each
                    return (
                        <>
                            <div className="container">
                                <h3 className="h3 color-orange">განათლება</h3>
                                <p className="p ">{place} - {degree}</p>
                                <div className="text-dark">{endDate}</div>
                                <p className=" mw-70">
                                    {degDec}
                                </p>
                            </div>
                        </>
                    )
                })}
                <div className="ll"></div>
            </div>
        </>
    )
}

