
// import arcade from "../images/icons/arcade.png";

// import React from "react";

// function Sixthsection() {
//   return (
//     <div>
//       <section class="sixth-heghlight-wrapper">
//         <div class="container-fluid">
//           <div class="row">
//             <div class="left-side-wrapper col-sm-12 col-md-6">
//               <div class="left-side-container">
//                 <div class="top-logo-wrapper">
//                   <div class="logo-wrapper">
//                     <img src={arcade} />
//                   </div>
//                 </div>
//                 <div class="description-wraper white">
//                   Agent 8 is a small hero on a big mission.
//                 </div>
//                 <div class="links-wrapper">
//                   <ul>
//                     <li>
//                       <a href="#">
//                         Play now<sup>2</sup>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">Learn about Apple Arcade</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div class="right-side-wrapper col-sm-12 col-md-6">
//               <div class="right-side-container">
//                 <div class="title-wraper">Apple Card Monthly Installments</div>
//                 <div class="description-wraper">
//                   Pay for your next iPhone over time, interest-free with Apple
//                   Card.
//                 </div>
//                 <div class="links-wrapper">
//                   <ul>
//                     <li>
//                       <a href="#">Learn more</a>
//                     </li>
//                     <li>
//                       <a href="#">Apply now</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Sixthsection;


import arcade from "../images/icons/arcade.png";
import React from "react";

function Sixthsection() {
  return (
    <div>
      <section className="sixth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={arcade} alt="Arcade Logo" />
                  </div>
                </div>
                <div className="description-wraper white">
                  Agent 8 is a small hero on a big mission.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Play now<sup>2</sup>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Learn about Apple Arcade
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper">Apple Card Monthly Installments</div>
                <div className="description-wraper">
                  Pay for your next iPhone over time, interest-free with Apple
                  Card.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Learn more
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Apply now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sixthsection;

