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
                    <span>Tháng 11, năm 2019 - Tháng 2, năm 2020</span>
                    <h3>Làm giao diện web cho một ứng dụng windows</h3>
                    <h4>Công việc Freelancer</h4>
                    <p>
                      Làm dự án cùng 2 thầy Trần Văn Hùng, thầy Nguyễn Ngọc Lâm
                      và 2 bạn chung lớp là bạn Trần Quốc Hùng và Triệu Uy Phú.
                      Công việc chính của nhóm sinh viên là đọc document và viết
                      giao diện tương thích với yêu cầu mà khách hàng yêu cầu (
                      Kiến thức được sử dụng gồm{" "}
                      <i>
                        <u>HTML</u>, <u>CSS</u>, <u>Javascript</u>,
                        <u>Bootstrap 4</u> và <u>Jquery</u>
                      </i>{" "}
                      )
                    </p>
                  </div>
                </div>

                <div className="timeline-item ">
                  <div className="timeline-item-inner outer-shadow">
                    <i className="fas fa-briefcase icon"></i>
                    <span>Tháng 6, năm 2020 - Hiện tại</span>
                    <h3>
                      Gia sư dạy kèm môn tin học cơ bản ( MS Word, MS Excel, MS
                      Powerpoint )
                    </h3>
                    <h4>Giảng dạy</h4>
                    <p>
                      Dạy kèm tin học cơ bản cho 2 bé ( 1 bé lớp 5, 1 bé lớp 3).
                      Ngoài ra còn dạy kèm thêm SCRACT để kích thích sự yêu
                      thích lập trình của bé.
                    </p>
                  </div>
                </div>

                <div className="timeline-item ">
                  <div className="timeline-item-inner outer-shadow">
                    <i className="fas fa-briefcase icon"></i>
                    <span>Tháng 11, năm 2020 - Hiện tại</span>
                    <h3>Nhận một số công việc Freelancer</h3>
                    <h4>Công việc Freelancer</h4>
                    <p>
                      {" "}
                      Cụ thể như sau :
                      <ul>
                        <li>
                          Dịch thuật document cho công ty xây dựng của Pháp.
                        </li>
                        <li>
                          Cắt giao diện cho một công ty vật liệu xây dựng.
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
                    <h3>Học lập trình web</h3>
                    <p>
                      Sinh viên học lập trình web tại trường Đại học Công Nghệ
                      Sài Gòn . <br />
                      <hr />
                      Điểm rèn luyện: 90. <br />
                      <hr />
                      Điểm tích lũy: 7.22
                    </p>
                  </div>
                </div>

                <div className="timeline-item ">
                  <div className="timeline-item-inner outer-shadow">
                    <i className="fas fa-graduation-cap icon"></i>
                    <span>2019 - 2020</span>
                    <h3>Học lập trình web</h3>
                    <p>
                      Sinh viên học lập trình web tại trường Đại học Công Nghệ
                      Sài Gòn . <br />
                      <hr />
                      Điểm rèn luyện: 90. <br />
                      <hr />
                      Điểm tích lũy: 7.22
                    </p>
                  </div>
                </div>

                <div className="timeline-item ">
                  <div className="timeline-item-inner outer-shadow">
                    <i className="fas fa-graduation-cap icon"></i>
                    <span>2018 - 2019</span>
                    <h3>Học lập trình web</h3>
                    <p>
                      Sinh viên học lập trình web tại trường Đại học Công Nghệ
                      Sài Gòn . <br />
                      <hr />
                      Điểm rèn luyện: 90. <br />
                      <hr />
                      Điểm tích lũy: 7.22
                    </p>
                  </div>
                </div>

                <div className="timeline-item ">
                  <div className="timeline-item-inner outer-shadow">
                    <i className="fas fa-graduation-cap icon"></i>
                    <span>2017 - 2018</span>
                    <h3>Học lập trình web</h3>
                    <p>
                      Sinh viên học lập trình web tại trường Đại học Công Nghệ
                      Sài Gòn . <br />
                      <hr />
                      Điểm rèn luyện: 90. <br />
                      <hr />
                      Điểm tích lũy: 7.22
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
