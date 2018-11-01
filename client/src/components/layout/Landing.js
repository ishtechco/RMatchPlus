import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-left">
                <h1 className="display-3 mb-4">
                  Recruit <br />
                  Match +
                </h1>
                <p className="lead">
                  {" "}
                  Sign up to get priority access to Recruit Match +
                </p>
                <hr />
                <Link
                  to="/learnmore"
                  className="btn btn-lg clear-button disabled more"
                >
                  Learn More
                </Link>
                <Link to="/register" className="btn btn-lg clear-button">
                  Athletes Start Here
                </Link>
                <br />
                or
                <br />
                <Link
                  to="/registercoaches"
                  className="btn btn-lg clear-button disabled"
                >
                  Coaches (coming soon)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
