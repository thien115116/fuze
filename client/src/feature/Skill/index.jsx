import React from "react";
import "assets/css/style.css";
export default function Skill() {
  return (
    <div className="section about-section">
      <div className="row">
        <div className="about-tabs">
          <span className="tab-item outer-shadow active" data-target=".skills">
            skill
          </span>
          <span className="tab-item" data-target=".experience">
            experience
          </span>
          <span className="tab-item" data-target=".education">
            education
          </span>
        </div>
      </div>
      <div className="row">
        <div className="skills tab-content active">
          <div className="row">
            <div className="skill-item">
              <p>Html</p>
              <div className="progress outer-shadow">
                <div
                  className="progress-bar"
                  style={{ width: "calc(90% - 14px)" }}
                ></div>
              </div>
            </div>

            <div className="skill-item">
              <p>Javascript</p>
              <div className="progress outer-shadow">
                <div
                  className="progress-bar"
                  style={{ width: "calc(90% - 14px)" }}
                ></div>
              </div>
            </div>

            <div className="skill-item">
              <p>Bootstrap</p>
              <div className="progress outer-shadow">
                <div
                  className="progress-bar"
                  style={{ width: "calc(90% - 14px)" }}
                ></div>
              </div>
            </div>

            <div className="skill-item">
              <p>ReactJS</p>
              <div className="progress outer-shadow">
                <div
                  className="progress-bar"
                  style={{ width: "calc(90% - 14px)" }}
                ></div>
              </div>
            </div>

            <div className="skill-item">
              <p>Php</p>
              <div className="progress outer-shadow">
                <div
                  className="progress-bar"
                  style={{ width: "calc(90% - 14px)" }}
                ></div>
              </div>
            </div>

            <div className="skill-item">
              <p>Jquery</p>
              <div className="progress outer-shadow">
                <div
                  className="progress-bar"
                  style={{ width: "calc(90% - 14px)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="experience tab-content">
          <div className="row">
            <div className="timeline">
              <div className="row">
                <div className="timeline-item ">
                  <div className="timeline-item-inner outer-shadow">
                    <i className="fas fa-briefcase icon"></i>
                    <span>Th??ng 11, n??m 2019 - Th??ng 2, n??m 2020</span>
                    <h3>L??m giao di???n web cho m???t ???ng d???ng windows</h3>
                    <h4>C??ng vi???c Freelancer</h4>
                    <p>
                      L??m d??? ??n c??ng 2 th???y Tr???n V??n H??ng, th???y Nguy???n Ng???c L??m
                      v?? 2 b???n chung l???p l?? b???n Tr???n Qu???c H??ng v?? Tri???u Uy Ph??.
                      C??ng vi???c ch??nh c???a nh??m sinh vi??n l?? ?????c document v?? vi???t
                      giao di???n t????ng th??ch v???i y??u c???u m?? kh??ch h??ng y??u c???u (
                      Ki???n th???c ???????c s??? d???ng g???m{" "}
                      <i>
                        <u>HTML</u>, <u>CSS</u>, <u>Javascript</u>,
                        <u>Bootstrap 4</u> v?? <u>Jquery</u>
                      </i>{" "}
                      )
                    </p>
                  </div>
                </div>

                <div className="timeline-item ">
                  <div className="timeline-item-inner outer-shadow">
                    <i className="fas fa-briefcase icon"></i>
                    <span>Th??ng 6, n??m 2020 - Hi???n t???i</span>
                    <h3>
                      Gia s?? d???y k??m m??n tin h???c c?? b???n ( MS Word, MS Excel, MS
                      Powerpoint )
                    </h3>
                    <h4>Gi???ng d???y</h4>
                    <p>
                      D???y k??m tin h???c c?? b???n cho 2 b?? ( 1 b?? l???p 5, 1 b?? l???p 3).
                      Ngo??i ra c??n d???y k??m th??m SCRACT ????? k??ch th??ch s??? y??u
                      th??ch l???p tr??nh c???a b??.
                    </p>
                  </div>
                </div>

                <div className="timeline-item ">
                  <div className="timeline-item-inner outer-shadow">
                    <i className="fas fa-briefcase icon"></i>
                    <span>Th??ng 11, n??m 2020 - Hi???n t???i</span>
                    <h3>Nh???n m???t s??? c??ng vi???c Freelancer</h3>
                    <h4>C??ng vi???c Freelancer</h4>
                    <p>
                      {" "}
                      C??? th??? nh?? sau :
                      <ul>
                        <li>
                          D???ch thu???t document cho c??ng ty x??y d???ng c???a Ph??p.
                        </li>
                        <li>
                          C???t giao di???n cho m???t c??ng ty v???t li???u x??y d???ng.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="education tab-content">
          <div className="row">
            <div className="timeline">
              <div className="row">
                <div className="timeline-item ">
                  <div className="timeline-item-inner outer-shadow">
                    <i className="fas fa-graduation-cap icon"></i>
                    <span>2020 - 2021</span>
                    <h3>H???c l???p tr??nh web</h3>
                    <p>
                      Sinh vi??n h???c l???p tr??nh web t???i tr?????ng ?????i h???c C??ng Ngh???
                      S??i G??n . <br />
                      <hr />
                      ??i???m r??n luy???n: 90. <br />
                      <hr />
                      ??i???m t??ch l??y: 7.22
                    </p>
                  </div>
                </div>

                <div className="timeline-item ">
                  <div className="timeline-item-inner outer-shadow">
                    <i className="fas fa-graduation-cap icon"></i>
                    <span>2019 - 2020</span>
                    <h3>H???c l???p tr??nh web</h3>
                    <p>
                      Sinh vi??n h???c l???p tr??nh web t???i tr?????ng ?????i h???c C??ng Ngh???
                      S??i G??n . <br />
                      <hr />
                      ??i???m r??n luy???n: 90. <br />
                      <hr />
                      ??i???m t??ch l??y: 7.22
                    </p>
                  </div>
                </div>

                <div className="timeline-item ">
                  <div className="timeline-item-inner outer-shadow">
                    <i className="fas fa-graduation-cap icon"></i>
                    <span>2018 - 2019</span>
                    <h3>H???c l???p tr??nh web</h3>
                    <p>
                      Sinh vi??n h???c l???p tr??nh web t???i tr?????ng ?????i h???c C??ng Ngh???
                      S??i G??n . <br />
                      <hr />
                      ??i???m r??n luy???n: 90. <br />
                      <hr />
                      ??i???m t??ch l??y: 7.22
                    </p>
                  </div>
                </div>

                <div className="timeline-item ">
                  <div className="timeline-item-inner outer-shadow">
                    <i className="fas fa-graduation-cap icon"></i>
                    <span>2017 - 2018</span>
                    <h3>H???c l???p tr??nh web</h3>
                    <p>
                      Sinh vi??n h???c l???p tr??nh web t???i tr?????ng ?????i h???c C??ng Ngh???
                      S??i G??n . <br />
                      <hr />
                      ??i???m r??n luy???n: 90. <br />
                      <hr />
                      ??i???m t??ch l??y: 7.22
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
