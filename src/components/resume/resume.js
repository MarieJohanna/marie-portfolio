import React from "react"
import Header from "./../header/header"
import Footer from "./../footer/footer"
import marie from "./../../data/images/M.jpg"
import "./resume.css"

class Resume extends React.Component {

  render() {
    return (

      <div className="resume_page">
        <Header />
        <div className="resume_container">
          <div className="resume_info">
            <div className="resume_info_aside">
              <span className="mobile_image">
                <span>
                  <img src={marie} alt="of me" />
                </span>
                <span>
                  <h3>Personal Data</h3>
                  <p className="bottom">Birthday: 20 June 1985 </p>
                  <p className="line-space">Address: Stockholm, Sweden </p>
                  <p className="line-space">Contact: +46 70 626 30 70 </p>
                  <p className="line-space">mariejohannanilsson@gmail.com</p>
                </span>
              </span>
              <h5>Skills</h5>
              <p>HTML / CSS / JavaScript – React/Node.js /
              Problem Solving /
              Business Analysis / Financial Analysis /
              Business Process Management /
              Robotic Process Automation /
              Cash Management / Treasury / Banking /
              Payments / Transaction management /
              Team Building / Networking /
              Microsoft Office
              </p>
              <h5>Soft Skills</h5>
              <p>Trustworthy / Dependable / Honest / Positive / Proactive
              </p>
              <span className="mobile">
                <span>
              <h5>Languages</h5>
              <p className="bottom">Swedish - Native</p>
              <p className="line-space">English - Bilingual level</p>
              <p className="line-space">Spanish – Bilingual level</p>
              <p className="line-space">French - Intermediate</p>
              </span>
              {/* <h5>Other</h5>
              <h6>Social Engagement</h6>
              <p className="line-space">Mentor for a teenage girl during a year
                through mentor.se, and now friends.
              </p>
              <p>Fashion for Kenya, 2010
                Charity event in support of a Kenyan
                orphanage. Awarded “Project of the Year” by
                the Economic Student Association at the
                University of Linköping. Mainly responsible
                for marketing activities.
              </p> */}
              <span>
              <h5>Interests</h5>
              <p className="line-space">Fitness & Well-being</p>
              <p className="line-space">Travel</p>
              <p className="line-space">Designing Dresses</p>
              </span>
              </span>
            </div>
            <div className="resume_info_main">
              <h3 className="resume_info_main_top">Career Progression</h3>
              <div>
                <h5>Virtusa AB, Stockholm, Sweden (2016-Present) - <i>Senior Business Consultant</i>
                </h5>
                <ul>
                  <li>Currently part of the Digital transformation team, helping to build better
                    customer experiences with support from applicable software depending on the
                    task at hand.
                  </li>
                  <li>Project based assignments in the financial industry including business
                    analysis, interview-based data gathering, process evaluation as well as
                    structure presentation material of client’s solution.
                  </li>
                </ul>
              </div>
              <div>
                <h5>Elekta AB, Stockholm, Sweden (2014-2016) - <i>Treasury Controller</i></h5>
                <ul>
                  <li>Established a well-functioning follow-up, controlling and analysis routine
                    for the treasury activities. In addition, I designed, facilitated and improved
                    the month-end analysis report to management. Transfer Price management and
                    accounting related questions connected to Treasury activities are handled
                    within this role.
                    <ul className="sub-list">
                      <li>Accomplished a successful implementation of Kyriba cash forecasting
                        system, involving 30 entities globally, and over 75 bank accounts.
                        {/* Additionally, integration to Elekta’s Business Intelligence software
                        facilitated the financial analysis for Group Control. */}
                      </li>
                      <li>Managed a successful RFP and transition of a Lead Tax advisor firm,
                        including evaluation and cost-benefit analysis of offers.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h5>Holmen AB, Stockholm, Sweden (2011-2014) - <i>Back Office & Cash Management</i>
                </h5>
                <ul>
                  <li>Responsible for Cash Management; handling everything from bank accounts and
                    foreign exchange to budgeting and intercompany reconciliation. The role involved
                    a high degree of coordination between different entities within the company
                    group.
                    <ul className="sub-list">
                      <li>Holmen Shared Service Center – Managed an impeccable transition during the
                      centralization of accounts payable/receivables and accounting, as responsible
                        for the setup of our banks to make the processes more efficient during the
                        implementation and start up of the Shared service center.
                      </li>
                      <li>Responsible for recruitment for temporary positions at Group Treasury.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h5>Atlas Copco AB, Stockholm,
                  Sweden (part time 2008 – 2011) - <i>Assistant, Group Treasury Center</i>
                </h5>
                <ul>
                  <li>Worked for Back-Office and Accounting handling different assignments
                    concerning payments, reconciliations, transactions and currency exchange.
                  </li>
                </ul>
              </div>

              <h3>Education</h3>
              <div>
                <h5>Technigo - Frontend development course (Nov 2017 - Feb 2018)</h5>
                <ul>
                  <li>Intensive course over three months divided in six sprints covering HTML,
                    CSS, JavaScript (React, Node.js). Each day includes an individual assignment and
                    each sprint a group assignment in collaboration with various companies,
                    including a presentation at the company in the end of the sprint.
                  </li>
                </ul>
              </div>
              <div>
                <h5>Master of Science in Business Administration<br />
                University of Linköping 2006-2011
                </h5>
                <ul>
                  <li>Developed analytical skills and widened interest towards management
                    control, finance and marketing which has led to a good foundation for
                    an international career.
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="line-space">Universidad Torcuato di Tella, Buenos Aires, Argentina</h5>
                <h5 className="line-space">Universidad EAFIT, Medellín, Colombia</h5>
                <h5 className="line-space">Exchange program Aug 2008 - June 2009</h5>
                <ul>
                  <li>I had the opportunity to gain new perspectives of marketing, strategy and
                    management. Along with this I improved my Spanish, gained new experiences of
                    both the Argentinean and the Colombian culture and established contacts with
                    new friends from all over the world.
                  </li>
                </ul>
              </div>
              <div>
                <h5>Language studies</h5>
                <ul>
                  <li>Nueva Lengua (Jan-Feb 2006, July 2007) -
                    Spanish studies in Bogotá, Colombia
                  </li>
                  <li>L’Institut Catholique (Feb-June 2005) - French studies in Paris, France</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    )
  }

}

export default Resume
