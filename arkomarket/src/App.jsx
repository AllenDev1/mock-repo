import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Querieslink from "./component/querieslink";
import SellerProfile from "./component/sellerprofile";
import Vehicles from "../src/component/dropdowns/Vehicles/Vehicles";
import Properties from "./component/dropdowns/Properties/Properties";
import Mobile from "./component/dropdowns/Mobile/Mobile";
import FamilyNeeds from "./component/dropdowns/Family Needs/FamilyNeeds";
import Cars from "./component/dropdowns/Vehicles/sub-Vehicles/cars";
import Motorcycles from "./component/dropdowns/Vehicles/sub-Vehicles/Motorcycles";
import Scooter from "./component/dropdowns/Vehicles/sub-Vehicles/Scooter";
import Bicycle from "./component/dropdowns/Vehicles/sub-Vehicles/Bicycles";
import OtherVehicles from "./component/dropdowns/Vehicles/sub-Vehicles/othervehicles";
import SpareParts from "./component/dropdowns/Vehicles/sub-Vehicles/Spareparts";
import LandsPlots from "./component/dropdowns/Properties/sub-properties/LandsPlots";
import HouseApartments from "./component/dropdowns/Properties/sub-properties/HousesApartments";
import ShopsOffices from "./component/dropdowns/Properties/sub-properties/ShopsOffices";
import RoomsFlat from "./component/dropdowns/Properties/sub-properties/RoomsFlat";
import MobilesPhones from "./component/dropdowns/Mobile/sub-mobiles/MobilesPhones";
import Tablets from "./component/dropdowns/Mobile/sub-mobiles/Tablets";
import Wearables from "./component/dropdowns/Mobile/sub-mobiles/Wearables";
import Accessories from "./component/dropdowns/Mobile/sub-mobiles/Accessories";
import Foods from "./component/dropdowns/Family Needs/sub Family needs/Foods";
import MenStuffs from "./component/dropdowns/Family Needs/sub Family needs/MenStuff";
import Gifts from "./component/dropdowns/Family Needs/sub Family needs/Gifts";
import KidsStuffs from "./component/dropdowns/Family Needs/sub Family needs/KidsStuff";
import Jobs from "./component/dropdowns/Family Needs/sub Family needs/Jobs";
import WomenStuffs from "./component/dropdowns/Family Needs/sub Family needs/WomenStuffs";
import OtherServices from "./component/dropdowns/Services/sub-Services/OtherServices";
import Services from "./component/dropdowns/Services/Services";
import EducationClasses from "./component/dropdowns/Services/sub-Services/EducationClasses";
import MoveFurniture from "./component/dropdowns/Services/sub-Services/MoveFurniture";
import ElectronicsRepair from "./component/dropdowns/Services/sub-Services/ElectronicsRepair";
import Agriculture from "./component/dropdowns/Services/sub-Services/Agriculture";
import Constructions from "./component/dropdowns/Services/sub-Services/Constructions";
import Mainrainance from "./component/dropdowns/Services/sub-Services/Maintainance";
import Occasions from "./component/dropdowns/Services/sub-Services/Occasions";
import HealthBeauty from "./component/dropdowns/Services/sub-Services/HealthBeauty";
import Cleaning from "./component/dropdowns/Services/sub-Services/Cleaning";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact index element={<Home />} />
          <Route path="product-details" element={<Productdetails />} />
          <Route path="post-new-ads" element={<PostNewAds />} />
          <Route path="helpdesk" element={<Querieslink />} />
          {/**************************************************************** */}
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="cars" element={<Cars />} />
          <Route path="motorcycles" element={<Motorcycles />} />
          <Route path="scooters" element={<Scooter />} />
          <Route path="bicycle" element={<Bicycle />} />
          <Route path="other-vehicles" element={<OtherVehicles />} />
          <Route path="spare-parts" element={<SpareParts />} />

          {/**************************************************************** */}
          <Route path="properties" element={<Properties />} />
          <Route path="lands-plots" element={<LandsPlots />} />
          <Route path="shops-offices" element={<ShopsOffices />} />
          <Route path="housesapartments" element={<HouseApartments />} />
          <Route path="roomsflats" element={<RoomsFlat />} />

          {/**************************************************************** */}
          <Route path="mobile" element={<Mobile />} />
          <Route path="mobile-phones" element={<MobilesPhones />} />
          <Route path="tablets" element={<Tablets />} />
          <Route path="wearables" element={<Wearables />} />
          <Route path="accessories" element={<Accessories />} />

          {/**************************************************************** */}
          <Route path="gifts" element={<Gifts />} />
          <Route path="men-stuffs" element={<MenStuffs />} />
          <Route path="women-stuffs" element={<WomenStuffs />} />
          <Route path="kids-stuffs" element={<KidsStuffs />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="foods" element={<Foods />} />
          <Route path="family-needs" element={<FamilyNeeds />} />
          {/**************************************************************** */}
          <Route path="services" element={<Services />} />
          <Route path="education-classes" element={<EducationClasses />} />
          <Route path="move-furnitures" element={<MoveFurniture />} />
          <Route path="agriculture" element={<Agriculture />} />
          <Route path="maintainance" element={<Mainrainance />} />
          <Route path="construction" element={<Constructions />} />
          <Route path="electronics-repair" element={<ElectronicsRepair />} />
          <Route path="occassion" element={<Occasions />} />
          <Route path="health-beauty" element={<HealthBeauty />} />
          <Route path="cleaning" element={<Cleaning />} />
          <Route path="other-services" element={<OtherServices />} />
          {/**************************************************************** */}

          {/* is user logged in function need to be added here */}
          <Route path="user-profile" element={<Profile />} />
          <Route path="seller-profile" element={<SellerProfile />} />
          <Route path="user-profile-edit" element={<UserProfileEdit />}>
            <Route index element={<Editprofile />} />
            <Route index path="editprofile" element={<Editprofile />} />
            <Route path="appformessage" element={<Appformessage />} />
            <Route path="user-notification" element={<Usernotification />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
