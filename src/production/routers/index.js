import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing production components
import Landing from "../pages/landing/Landing";
import ServiceLayout from "../pages/services/layout";


// importing all the themes from template
import Theme1 from "../template/themes/theme1"
import Theme2 from "../template/themes/theme2";
import Theme3 from "../template/themes/theme3";
import Theme4 from "../template/themes/theme4";
import Theme5 from "../template/themes/theme5";
import Theme6 from "../template/themes/theme6";
import Login1 from "../template/themes/login1";
import Login2 from "../template/themes/login2";
import SignUp1 from "../template/themes/signup1";
import SignUp2 from "../template/themes/signup2";
import ResetPassword from "../template/themes/resetPassword";
import ChangePassword from "../template/themes/changePassword";
import Download from "../template/themes/download";
import Review from "../template/themes/review";
import Faq from "../template/themes/faq";
import NotFound from "../template/themes/404";
import ComingSoon from "../template/themes/comingSoon";
import ThankYou from "../template/themes/thankyou";
import Team from "../template/themes/team";
import SingleTeam from "../template/themes/singleTeam";
import Blog from "../template/themes/blog";
import BlogLeft from "../template/themes/blogLeft";
import BlogRight from "../template/themes/blogRight";

export default class Routes extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/layout" component={ServiceLayout} />
            <Route exact path="/template" component={Theme1} />
            <Route exact path="/template/theme1" component={Theme1} />
            <Route exact path="/template/theme2" component={Theme2} />
            <Route exact path="/template/theme3" component={Theme3} />
            <Route exact path="/template/theme4" component={Theme4} />
            <Route exact path="/template/theme5" component={Theme5} />
            <Route exact path="/template/theme6" component={Theme6} />
            <Route exact path="/template/login1" component={Login1} />
            <Route exact path="/template/login2" component={Login2} />
            <Route exact path="/template/signup1" component={SignUp1} />
            <Route exact path="/template/signup2" component={SignUp2} />
            <Route exact path="/template/resetPassword" component={ResetPassword} />
            <Route exact path="/template/changePassword" component={ChangePassword} />
            <Route exact path="/template/download" component={Download} />
            <Route exact path="/template/review" component={Review} />
            <Route exact path="/template/faq" component={Faq} />
            <Route exact path="/template/404" component={NotFound} />
            <Route exact path="/template/comingSoon" component={ComingSoon} />
            <Route exact path="/template/thankyou" component={ThankYou} />
            <Route exact path="/template/team" component={Team} />
            <Route exact path="/template/singleTeam" component={SingleTeam} />
            <Route exact path="/template/blog" component={Blog} />
            <Route exact path="/template/blogLeft" component={BlogLeft} />
            <Route exact path="/template/blogRight" component={BlogRight} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
