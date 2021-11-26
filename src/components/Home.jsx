import React, { useRef, useState } from 'react'
import { useInfo } from '../contexts/Context'
import { useEffect } from 'react'
import db from '../database'

export default function Home() {
       const [result, setresult] = useState()
       const weightRef = useRef()
       const heightRef = useRef()
       const { height, setHeight, weight, setWeight } = useInfo()
       const [check, setcheck] = useState(true)
       let phw;
       let phh;
       if (check) {
              phw = "Weight in kg.."
              phh = "Height in cm.."
       }
       else {
              phw = "Weight in lbs.."
              phh = "Height in in.."
       }
       const toggleChecked = (e) => {
              setcheck(!check);
       }
       useEffect(() => {
              if (check)
                     setresult(parseFloat((weight / (height * height)) * 10000).toFixed(2))
              else
                     setresult(parseFloat((weight / (height * height)) * 703).toFixed(2))
       }, [weight, height, check])
       const handleSubmit = (e) => {
              e.preventDefault()
              if (isNaN(weightRef.current.value) || isNaN(heightRef.current.value))
                     alert("Verify number integrity")
              if ((weightRef.current.value <= 0) || (heightRef.current.value <= 0))
                     alert("Make sure the numbers are positive")
              else {
                     setHeight(heightRef.current.value)
                     setWeight(weightRef.current.value)
              }
       }
       return (
              <div className="personal-container">
                     <h1>BMI calculator</h1>
                     <form className="form-container" onSubmit={handleSubmit}>
                            <div style={{ display: "flex" }}>
                                   <label>
                                          Weight
                                          <input placeholder={phw} className="input-text" type="text" ref={weightRef} />
                                   </label>
                                   <label >
                                          Height
                                          <input placeholder={phh} className="input-text" type="text" ref={heightRef} />
                                   </label>
                            </div>
                            <label className="switch">
                                   <input onClick={toggleChecked} type="checkbox" checked={check} readOnly />
                                   <span className="slider round"></span>
                            </label>
                            <input type="submit" className="input-button" />

                     </form>
                     {!isNaN(result) && <h2 style={{ marginTop: "3em" }}>{result}</h2>}
              </div>
       )
}
