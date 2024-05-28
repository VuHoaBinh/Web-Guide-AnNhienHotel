import React, { Component } from "react";
import { connect } from "react-redux";
import "./Facility.scss";
import { FormattedMessage } from "react-intl";
import { changeLanguageApp } from "../../../store/actions";
import img1 from "../../../assets/7.jpg";
import img2 from "../../../assets/8.jpg";

class Facility extends Component {
  render() {
    return (
      <div className="section-share section-Facility">
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

export default connect(mapStateToProps, mapDispatchToProps)(Facility);
