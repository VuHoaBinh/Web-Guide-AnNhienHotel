import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";
import { changeLanguageApp } from "../../../store/actions";
import img1 from "../../../assets/1.jpg";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/3.jpg";
import img4 from "../../../assets/4.jpg";
import img5 from "../../../assets/5.jpg";
class Specialty extends Component {
  render() {
    return (
      <div className="section-share section-specialty">
        <div className="specialty-content">
          <div className="specialty-header">
            <span className="title-section">
              <FormattedMessage id="HomeHeader.Specialist" />
            </span>
            <button className="btn-section">
              <FormattedMessage id="HomeHeader.More" />
            </button>
          </div>
          <div style={{ paddingLeft: "50px" }}>
            <img src={img1} />
            <div style={{ padding: "50px" }}></div>
            <img src={img2} />
            <div style={{ padding: "50px" }}></div>
            <img src={img3} />
            <div style={{ padding: "50px" }}></div>
            <img src={img4} />
            <div style={{ padding: "50px" }}></div>
            <img src={img5} />
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
