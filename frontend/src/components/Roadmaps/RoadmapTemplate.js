import React from 'react'
import "./Roadmap.css"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const ShowRoadmap = () => {
  const navigate = useNavigate();
   const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
   const [isSubMenuVisible_2, setIsSubMenuVisible_2] = useState(false);
   const [isSubMenuVisible_3, setIsSubMenuVisible_3] = useState(false);
   const [isSubMenuVisible_4, setIsSubMenuVisible_4] = useState(false);
   const [isSubMenuVisible_5, setIsSubMenuVisible_5] = useState(false);
   const [isSubMenuVisible_6, setIsSubMenuVisible_6] = useState(false);

  
    function toggleSubMenu() {
        console.log("toggle")
       setIsSubMenuVisible(!isSubMenuVisible);
       console.log(isSubMenuVisible)
   
     }
    function toggleSubMenu_2() {
      console.log("toggle-2")
     setIsSubMenuVisible_2(!isSubMenuVisible_2);
     console.log(isSubMenuVisible_2)
     }
   function toggleSubMenu_3() {
    console.log("toggle-3")
   setIsSubMenuVisible_3(!isSubMenuVisible_3);
   console.log(isSubMenuVisible_3)
    }
    function toggleSubMenu_4() {
      console.log("toggle-4")
     setIsSubMenuVisible_4(!isSubMenuVisible_4);
     console.log(isSubMenuVisible_4)
      }
      function toggleSubMenu_5() {
        console.log("toggle-5")
       setIsSubMenuVisible_5(!isSubMenuVisible_5);
       console.log(isSubMenuVisible_5)
        }
        function toggleSubMenu_6() {
          console.log("toggle-6")
         setIsSubMenuVisible_6(!isSubMenuVisible_6);
         console.log(isSubMenuVisible_6)
          }
         
 
 


    return (
        
<div>
<html lang="en">
  <head>
    
    <title>Career Guidance</title>
  </head>
  <body>
   <section className="introd">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="fluid">
              <p id="par">
                Career interests are your preferences regarding work activities
                and environment. Identifying your career interest helps you make
                a well-informed and more strategic decision on your career
                path.<br />
                Following your career interest means your are pursuing a career
                that uses your talents and aligns with your passion and
                preferences. Understanding and being able to determine your
                passion helps you find fulfillment and success in your chosen
                profession.<br />
                In this webpage we provide you with several options that will enable you to explore and make the
                right career decisions.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
          </div>
        </div>
    </div>
    </section>
    <section class="mycourse">
      <div class="container" id="table">
        <div class="row">
          <div class="col-md-12">
            <div class="content">
              <div class="humanities">
                <h3 onClick={toggleSubMenu}>Humanities</h3>
                {isSubMenuVisible && (
                <div id="course1"  style={{ display: isSubMenuVisible ? "block" : "none" }}>
                  <button class="btn" onClick={() => navigate('/humanities/History')}>History</button>
                  <button class="btn" onClick={() => navigate('/humanities/philosophy')}>Philosophy</button>
                  <button class="btn" onClick={() => navigate('/humanities/Literature')}>Literature</button>
                  <button class="btn" onClick={() => navigate('/humanities/ReligiousStudies')}>Religious Studies</button>
                  <button class="btn" onClick={() => navigate('/humanities/Languages')} id="itB">Languages</button>
                  <button class="btn" onClick={() => navigate('/humanities/VisualandPerformingArts')} id="itB">Visual and performing Arts</button>
                  <button class="btn" onClick={() => navigate('/humanities/Communication')} id="itB">Communication</button>
                  <button class="btn" onClick={() => navigate('/humanities/Anthropology')} id="itB">Anthropology</button>
                  <button class="btn" onClick={() => navigate('/humanities/CulturalStudies')} id="itB">Cultural Studies</button>
                </div>
                )}
              </div>
              <hr />
              <div class="arts">
                <h3 onClick={toggleSubMenu_2} id="two">Arts</h3>
                {isSubMenuVisible_2 && (
                <div id="course2"style={{ display: isSubMenuVisible_2 ? "block" : "none" }}>
                  <button class="btn" onClick={() => navigate('/arts/DiplomainEducation')} >Diploma in education</button>
                  <button class="btn" onClick={() => navigate('/arts/Law')}>Law</button>
                  <button class="btn" onClick={() => navigate('/arts/FashionDesign')}>Fashion Design</button>
                  <button class="btn" onClick={() => navigate('/arts/InteriorDesign')}>Interior Design</button>
                  <button class="btn" onClick={() => navigate('/arts/BusinessManagement')}id="itA">Business Management</button>
                  <button class="btn" onClick={() => navigate('/arts/ForeignLanguagesDiploma')}id="itA">Foreign Languages Diploma</button>
                  <button class="btn" onClick={() => navigate('/arts/BArch')}id="itA">B. Arch</button>
                  <button class="btn" onClick={() => navigate('/arts/Journalism')}id="itA">Journalism</button>
                  <button class="btn" onClick={() => navigate('/arts/DiplomaInDramatization')}id="itA">Diploma in Dramatization</button>
                  <button class="btn" onClick={() => navigate('/arts/AdvertisingManagement')}id="itA">Advertising Management</button>
                  <button class="btn" onClick={() => navigate('/arts/EventManagement')}id="itA">Event Management</button>
                </div>
                 )}
              </div>
              <hr />
              <div class="commerce">
                <h3 onClick={toggleSubMenu_3} id="three">Commerce</h3>
                {isSubMenuVisible_3 && (
                <div id="course3"style={{ display: isSubMenuVisible_3 ? "block" : "none" }}>
                  <button class="btn" onClick={() => navigate('/commerce/CharteredAccountant')} id="acc">Chartered Accountant</button>
                  <button class="btn" onClick={() => navigate('/commerce/BCom')}>B. Com</button>
                  <button class="btn" onClick={() => navigate('/commerce/BankingInsurance')}>Banking/Insurance</button>
                  <button class="btn" onClick={() => navigate('/commerce/UPSC')}>UPSC</button>
                  <button class="btn" onClick={() => navigate('/commerce/BusinessManagement')}>Business Management</button>
                  <button class="btn" onClick={() => navigate('/commerce/BachelorOfEducation')}>Bachelor of Education</button>
                </div>
                )}
              </div>
              <hr />
              <div class="science">
                <h3 onClick={toggleSubMenu_4} id="four">Science</h3>
                {isSubMenuVisible_4 && (
                <div id="course4"style={{ display: isSubMenuVisible_4 ? "block" : "none" }}>
                  <button class="btn" onClick={() => navigate('/science/Technology')}>Technology</button>
                  <button class="btn" onClick={() => navigate('/science/MBBS')}>MBBS</button>
                  <button class="btn" onClick={() => navigate('/science/BachelorofScience')}id="ENG">
                  Bachelor of Science
                  </button>
                  <button class="btn" onClick={() => navigate('/science/Agriculture')}>Agriculture</button>
                  <button class="btn" onClick={() => navigate('/science/Pharmacy')}>Pharmacy</button>
                  <button class="btn" onClick={() => navigate('/science/Nursing')}>Nursing</button>
                  <button class="btn" onClick={() => navigate('/science/HomeScience')}>Home Science</button>
                  <button class="btn" onClick={() => navigate('/science/HotelManagement')}>Hotel Management</button>
                  <button class="btn" onClick={() => navigate('/science/NDA')}>Indian Armed Forces (Navy, Defence and Army)</button>
                </div>
                )}
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>

  </body>
</html>
</div>
    )
}
export default ShowRoadmap