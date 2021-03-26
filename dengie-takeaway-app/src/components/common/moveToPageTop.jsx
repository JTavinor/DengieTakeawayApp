import React from "react";
import { withRouter } from "react-router-dom";

// Sets the window to the top of the page when linking to a new page using a React Router DOM Link component
// Needed because when routing to a new page using React Router DOM, page location is preserved
class MoveToPageTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(MoveToPageTop);
