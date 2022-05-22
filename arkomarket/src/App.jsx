import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import Productdetails from "./pages/productdetails";
import Editprofile from "./component/editprofile";
import Footer from "./component/footer";
import NotFound from "./pages/NotFound";
import Appformessage from "./component/Appformessage";
import Usernotification from "./component/Usernotification";
import PostNewAds from "./pages/PostNewAds";
import UserProfileEdit from "./pages/UserProfileEdit";
import Profile from "./component/profile";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact index element={<Home />} />
          <Route path="product-details" element={<Productdetails />} />
          <Route path="*" element={<NotFound />} />

          {/* is user logged in function need to be added here */}
          <Route path="user-profile" element={<Profile />} />
          <Route path="user-profile-edit" element={<UserProfileEdit />}>
            <Route index element={<Editprofile />} />
            <Route index path="editprofile" element={<Editprofile />} />
            <Route path="appformessage" element={<Appformessage />} />
            <Route path="user-notification" element={<Usernotification />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="post-new-ads"  element={<PostNewAds />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
