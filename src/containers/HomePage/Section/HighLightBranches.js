import React, { Component } from "react";
import { connect } from "react-redux";
import "./HighLightBranches.scss";
// import { FormattedMessage } from "react-intl";
// import slick

class HighLightBranches extends Component {
  render() {
    return (
      <div className="section-share section-Branches">
        <div className="specialty-content">
          <div className="specialty-header">
            <span className="title-section">Quy trình nhận phòng</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(HighLightBranches);
