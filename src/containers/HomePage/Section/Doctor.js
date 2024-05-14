import React, { Component } from "react";
import { connect } from "react-redux";
import "./Doctor.scss";
// import { FormattedMessage } from "react-intl";
// import slick

class Doctor extends Component {
  render() {
    return (
      <div className="section-share section-Doctor">
        <div className="specialty-content">
          <div className="specialty-header">
            <span className="title-section">Quy trình trả phòng</span>
            <button className="btn-section">Xem thêm</button>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);