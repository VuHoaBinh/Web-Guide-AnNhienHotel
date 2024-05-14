import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/logo.jpg";
import { FormattedMessage } from "react-intl";
import { LANGUAGE } from "../../utils";
import { changeLanguageApp } from "../../store/actions"; // have file index export

import FlagVN from "../../assets/viet-nam.png";
import FlagEN from "../../assets/united-kingdom.png";
import avatar from "../../assets/avatar.png";

class HomeHeader extends Component {
  changeLanguage = (lang) => {
    this.props.changeLanguageReduxAction(lang);
  };

  render() {
    let langRedux = this.props.lang;
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="home-header-left">
              <i className="fa-solid fa-bars-progress"></i>
              <img src={logo} alt="MyPhoto" className="logo"></img>
            </div>
            <div className="home-header-center">
              <div className="center-child">
                <div>
                  <b>
                    <FormattedMessage id="HomeHeader.Specialist" />
                  </b>
                </div>
                <div className="subChild">
                  <FormattedMessage id="HomeHeader.FindDoctorsBySpecialty" />
                </div>
              </div>
              <div className="center-child">
                <div>
                  <b>
                    <FormattedMessage id="HomeHeader.HealthFacilities" />
                  </b>
                </div>
                <div className="subChild">
                  <FormattedMessage id="HomeHeader.ChooseAHospitalOrClinic" />
                </div>
              </div>
              <div className="center-child">
                <div>
                  <b>
                    <FormattedMessage id="HomeHeader.Doctor" />
                  </b>
                </div>
                <div className="subChild">
                  <FormattedMessage id="HomeHeader.ChooseAGoodDoctor" />
                </div>
              </div>
              <div className="center-child">
                <div>
                  <b>
                    <FormattedMessage id="HomeHeader.MedicalPackage" />
                  </b>
                </div>
                <div className="subChild">
                  <FormattedMessage id="HomeHeader.GeneralHealthExamination" />
                </div>
              </div>
            </div>
            <div className="home-header-right">
              <div className="support">
                <i className="fa-solid fa-clipboard-question"></i>{" "}
                <FormattedMessage id="HomeHeader.Support" />
              </div>
              <div
                className={
                  langRedux === LANGUAGE.VI
                    ? "flagLanguageVN active"
                    : "flagLanguageVN"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGE.VI)}>
                  <img src={FlagVN} alt="myphoto" />
                </span>
              </div>
              <div
                className={
                  langRedux === LANGUAGE.EN
                    ? "flagLanguageEN active"
                    : "flagLanguageEN "
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGE.EN)}>
                  <img src={FlagEN} alt="myphoto" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-north">
            <div className="title1">
              <FormattedMessage id="Banner.medicalPlatform" />
            </div>
            <div className="title2">
              <FormattedMessage id="Banner.ComprehensiveHealthCare" />
            </div>
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="content-south">
            <div className="options">
              <div className="options-child">
                <div className="icon-child">
                  <img src={avatar} alt="myphoto" />
                </div>
                <div className="text-child">
                  <FormattedMessage id="Banner.SpecializedExamination" />
                </div>
                <div className="text-name">Mr. Hoa Binh Vu</div>
                <div className="text-describe">
                  <i>
                    <FormattedMessage id="Banner.avatar1" />
                  </i>
                </div>
              </div>

              <div className="options-child">
                <div className="icon-child">
                  <img src={avatar} alt="myphoto" />
                </div>
                <div className="text-child">
                  <FormattedMessage id="Banner.RemoteExamination" />
                </div>
                <div className="text-name">Mr. Quang Nhan Tran</div>
                <div className="text-describe">
                  <i>
                    <FormattedMessage id="Banner.avatar2" />
                  </i>
                </div>
              </div>

              <div className="options-child">
                <div className="icon-child">
                  <img src={avatar} alt="myphoto" />
                </div>
                <div className="text-child">
                  <FormattedMessage id="Banner.GeneralExamination" />
                </div>
                <div className="text-name">Mr. Hoang Long Pham</div>
                <div className="text-describe">
                  <i>
                    <FormattedMessage id="Banner.avatar3" />
                  </i>
                </div>
              </div>

              <div className="options-child">
                <div className="icon-child">
                  <img src={avatar} alt="myphoto" />
                </div>
                <div className="text-child">
                  <FormattedMessage id="Banner.MedicalTests" />
                </div>
                <div className="text-name">Mr. Tien Dat Nguyen</div>
                <div className="text-describe">
                  <i>
                    <FormattedMessage id="Banner.avatar4" />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageReduxAction: (lang) => dispatch(changeLanguageApp(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
