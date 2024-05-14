import React, { Component } from "react";
import { connect } from "react-redux";
import "./About.scss";
import { FormattedMessage } from "react-intl";
import { changeLanguageApp } from "../../../store/actions";

class About extends Component {
  render() {
    return (
      <div className="section-share section-About">
        <div className="header">Về khách sạn của chúng tôi</div>
        <div className="content">
          <div className="describe">
            <img
              src="https://sanhotelseries.com/wp-content/uploads/2023/03/2.jpg"
              alt="myphoto"
              style={{ margin: "10px", paddingLeft: "100px" }}
            />
            <div>
              Khách sạn An Nhiên, một thiên đường nghỉ dưỡng 5 sao, nằm giữa
              lòng thành phố với thiết kế hiện đại và sang trọng. Từ những phòng
              nghỉ tiện nghi, trang bị đầy đủ các tiện ích cao cấp, đến nhà hàng
              ẩm thực đa dạng, khách sạn An Nhiên hứa hẹn mang đến cho du khách
              trải nghiệm tuyệt vời. Du khách có thể thư giãn tại spa cao cấp,
              tận hưởng bể bơi vô cực với tầm nhìn toàn cảnh thành phố, hoặc rèn
              luyện sức khỏe tại phòng gym hiện đại. Đội ngũ nhân viên chuyên
              nghiệp và nhiệt tình luôn sẵn sàng phục vụ, đảm bảo mọi nhu cầu
              của khách hàng đều được đáp ứng một cách hoàn hảo. Không chỉ vậy,
              khách sạn còn cung cấp các dịch vụ hỗ trợ đặc biệt như tổ chức sự
              kiện, hội nghị, và các buổi tiệc riêng tư, mang đến những trải
              nghiệm đáng nhớ và độc đáo. Khách sạn An Nhiên chính là sự lựa
              chọn lý tưởng cho những ai tìm kiếm sự thoải mái, đẳng cấp và sang
              trọng trong từng chi tiết.
            </div>
          </div>
        </div>
        <div
          className="section-share section-About"
          style={{ marginTop: "100px" }}
        >
          <footer
            className="text-center text-lg-start text-dark"
            style={{ backgroundColor: "#ECEFF1" }}
          >
            <section
              className="d-flex justify-content-between p-4 text-white"
              style={{ backgroundColor: "#21D192" }}
            >
              <div className="me-5">
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <a href="" className="text-white me-4">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-google"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="text-white me-4">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </section>
            <section className="">
              <div className=" text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Company name</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "60px",
                        backgroundColor: "#7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </p>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Thành viên</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "60px",
                        backgroundColor: "#7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      <a href="#!" className="text-dark">
                        Mr. Quang Nhan Tran
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-dark">
                        Mr. Hoang Long Pham
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-dark">
                        Mr. Tien Dat Nguyen
                      </a>
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Quy trình</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "60px",
                        backgroundColor: "#7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      <a href="#!" className="text-dark">
                        <FormattedMessage id="HomeHeader.Specialist" />
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-dark">
                        <FormattedMessage id="HomeHeader.HealthFacilities" />
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-dark">
                        <FormattedMessage id="HomeHeader.Doctor" />
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-dark">
                        <FormattedMessage id="HomeHeader.MedicalPackage" />
                      </a>
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold">Contact</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "60px",
                        backgroundColor: "#7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      <i className="fas fa-home mr-3"></i> 102-103-104-105-106
                      Nguyễn Huệ, Quận 1, HCM, VN.
                    </p>
                    <p>
                      <i className="fas fa-envelope mr-3"></i>{" "}
                      annhien.hotel@annhien.com
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> 0988-123-789
                    </p>
                    <p>
                      <i className="fas fa-print mr-3"></i> 0988-123-789
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2024 Copyright:
              <a className="text-dark" href="#">
                VuHoaBinh.com
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageReduxAction: (lang) => dispatch(changeLanguageApp(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
