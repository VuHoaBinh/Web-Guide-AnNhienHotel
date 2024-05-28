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
          <div className="describe" style={{ textAlign: "center" }}>
            <img
              src="https://sanhotelseries.com/wp-content/uploads/2023/03/2.jpg"
              alt="myphoto"
            />
            <div>
              <FormattedMessage id="HomeHeader.Describe" />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
