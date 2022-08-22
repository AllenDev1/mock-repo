import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import Blog from "./component/Blog/Blog";
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
import Furniture from "./component/dropdowns/Furniture/Furniture";
import Decor from "./component/dropdowns/Furniture/sub-furniture/Decor";
import Bedmat from "./component/dropdowns/Furniture/sub-furniture/Bedmat";
import Homefurniture from "./component/dropdowns/Furniture/sub-furniture/Homefurniture";
import Sofa from "./component/dropdowns/Furniture/sub-furniture/sofa";
import Householdf from "./component/dropdowns/Furniture/sub-furniture/Householdf";
import Kidsfurniture from "./component/dropdowns/Furniture/sub-furniture/Kidsfurniture";
import Officefurniture from "./component/dropdowns/Furniture/sub-furniture/Officefurniture";
import Printers from "./component/dropdowns/Electronics & Appliance/sub-Electronics & Appliance/Printers";
import ComputerMonitors from "./component/dropdowns/Electronics & Appliance/sub-Electronics & Appliance/ComputersMonitors";
import Laptops from "./component/dropdowns/Electronics & Appliance/sub-Electronics & Appliance/Laptops";
import CameraLenses from "./component/dropdowns/Electronics & Appliance/sub-Electronics & Appliance/CamerasLenses";
import AccessoriesParts from "./component/dropdowns/Electronics & Appliance/sub-Electronics & Appliance/AccessoriesParts";
import GamesEntertainment from "./component/dropdowns/Electronics & Appliance/sub-Electronics & Appliance/GamesEntertainment";
import AudioVideoDevies from "./component/dropdowns/Electronics & Appliance/sub-Electronics & Appliance/AudioVideodevices";
import TVs from "./component/dropdowns/Electronics & Appliance/sub-Electronics & Appliance/TVs";
import Fridges from "./component/dropdowns/Electronics & Appliance/sub-Electronics & Appliance/Fridges";
import ACHeaters from "./component/dropdowns/Electronics & Appliance/sub-Electronics & Appliance/ACsHeater";
import WashingMachines from "./component/dropdowns/Electronics & Appliance/sub-Electronics & Appliance/WashingMachines";
import KitchenOtherAppliances from "./component/dropdowns/Electronics & Appliance/sub-Electronics & Appliance/KitchenotherAppliances";
import ElectronicsAppliance from "./component/dropdowns/Electronics & Appliance/ElectronicsAppliance";
import BooksSportsHobbies from "./component/dropdowns/BooksSportsHobbies/BooksSportsHobbies";
import Books from "./component/dropdowns/BooksSportsHobbies/sub-BooksSportsHobbies/Books";
import GymFitness from "./component/dropdowns/BooksSportsHobbies/sub-BooksSportsHobbies/GymFitness";
import MusicalInstruments from "./component/dropdowns/BooksSportsHobbies/sub-BooksSportsHobbies/MusicalInstruments";
import SportsEquiments from "./component/dropdowns/BooksSportsHobbies/sub-BooksSportsHobbies/SportEquipments";
import OtherHobbies from "./component/dropdowns/BooksSportsHobbies/sub-BooksSportsHobbies/OtherHobbies";
import TravelsTrips from "./component/dropdowns/TravelsTrips/TravelsTrips";
import Tourism from "./component/dropdowns/TravelsTrips/sub-TravelsTrips/Tourism";
import HotelsHomeStays from "./component/dropdowns/TravelsTrips/sub-TravelsTrips/HotelsHomestays";
import Others from "./component/dropdowns/TravelsTrips/sub-TravelsTrips/others";
import CarBikeRentals from "./component/dropdowns/TravelsTrips/sub-TravelsTrips/CarBikeRentals";
import TripCampaing from "./component/dropdowns/TravelsTrips/sub-TravelsTrips/TripsCamping";
import Pets from "./component/dropdowns/Pets/Pets";
import FishsAquarium from "./component/dropdowns/Pets/sub-pets/FishesAquarium";
import PetfoodAccessories from "./component/dropdowns/Pets/sub-pets/PetfoodAccessories";
import DogsCats from "./component/dropdowns/Pets/sub-pets/DogsCats";
import Birds from "./component/dropdowns/Pets/sub-pets/Birds";
import GoatBuffalootherpets from "./component/dropdowns/Pets/sub-pets/GoatBuffalootherpets";
import Otherss from "./component/dropdowns/Others/sub-others/others";
import Other from "./component/dropdowns/Others/Others";
import Arts from "./component/dropdowns/Others/sub-others/Arts & Handicrafts";
import Antique from "./component/dropdowns/Others/sub-others/Antique-Items";
import Charity from "./component/dropdowns/Others/sub-others/Charity";
import GoogleCallback from "./auth/GoogleCallback";
import BlogArticle from "./component/Blog/BlogArticle";

function App() {
	return (
		<>
			<Router>
				<Routes>
					{/* blog */}

					<Route path="blog" element={<Blog />} />

					<Route path="blogpost" element={<BlogArticle />} />

					<Route exact index element={<Home />} />
					<Route
						path="product-details"
						element={<Productdetails />}
					/>
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
					<Route
						path="housesapartments"
						element={<HouseApartments />}
					/>
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
					<Route
						path="education-classes"
						element={<EducationClasses />}
					/>
					<Route path="move-furnitures" element={<MoveFurniture />} />
					<Route path="agriculture" element={<Agriculture />} />
					<Route path="maintainance" element={<Mainrainance />} />
					<Route path="construction" element={<Constructions />} />
					<Route
						path="electronics-repair"
						element={<ElectronicsRepair />}
					/>
					<Route path="occassion" element={<Occasions />} />
					<Route path="health-beauty" element={<HealthBeauty />} />
					<Route path="cleaning" element={<Cleaning />} />
					<Route path="other-services" element={<OtherServices />} />
					{/**************************************************************** */}
					<Route path="furnitures" element={<Furniture />} />
					<Route
						path="office-furnitures"
						element={<Officefurniture />}
					/>
					<Route path="bed-mat" element={<Bedmat />} />
					<Route path="kids-furnitures" element={<Kidsfurniture />} />
					<Route path="sofa" element={<Sofa />} />
					<Route
						path="household-furnitures"
						element={<Householdf />}
					/>
					<Route path="decor" element={<Decor />} />
					<Route path="home-furnitures" element={<Homefurniture />} />
					{/**************************************************************** */}
					<Route
						path="electronics-appliances"
						element={<ElectronicsAppliance />}
					/>
					<Route
						path="computers-monitors"
						element={<ComputerMonitors />}
					/>
					<Route path="laptops" element={<Laptops />} />
					<Route path="printers" element={<Printers />} />
					<Route path="cameras-lenses" element={<CameraLenses />} />
					<Route
						path="accessories-parts"
						element={<AccessoriesParts />}
					/>
					<Route
						path="game-entertainment"
						element={<GamesEntertainment />}
					/>
					<Route path="audio-video" element={<AudioVideoDevies />} />
					<Route path="tvs" element={<TVs />} />
					<Route path="Fridge" element={<Fridges />} />
					<Route path="ac-heater" element={<ACHeaters />} />
					<Route
						path="washing-machines"
						element={<WashingMachines />}
					/>
					<Route
						path="kitchen-other-appliances"
						element={<KitchenOtherAppliances />}
					/>
					{/**************************************************************** */}
					<Route
						path="books-sports-hobbies"
						element={<BooksSportsHobbies />}
					/>
					<Route path="books" element={<Books />} />
					<Route path="gym-fitness" element={<GymFitness />} />
					<Route
						path="musical-instruments"
						element={<MusicalInstruments />}
					/>
					<Route
						path="sports-equipments"
						element={<SportsEquiments />}
					/>
					<Route path="other-hobbies" element={<OtherHobbies />} />
					{/**************************************************************** */}
					<Route path="travels-trips" element={<TravelsTrips />} />
					<Route path="tourism" element={<Tourism />} />
					<Route
						path="hotels-homestays"
						element={<HotelsHomeStays />}
					/>
					<Route path="other" element={<Others />} />
					<Route
						path="cars-bike-rentals"
						element={<CarBikeRentals />}
					/>
					<Route path="trips-camping" element={<TripCampaing />} />

					{/**************************************************************** */}
					<Route path="pets" element={<Pets />} />
					<Route path="fishes-aquarium" element={<FishsAquarium />} />
					<Route
						path="pet-foods-accessories"
						element={<PetfoodAccessories />}
					/>
					<Route path="dogs-cats" element={<DogsCats />} />
					<Route path="birds" element={<Birds />} />
					<Route
						path="goat-buffalo-other-pets"
						element={<GoatBuffalootherpets />}
					/>

					{/**************************************************************** */}
					<Route path="others" element={<Other />} />
					<Route path="charity" element={<Charity />} />
					<Route path="antique-items" element={<Antique />} />
					<Route path="arts-handicrafts" element={<Arts />} />
					<Route path="others-other" element={<Otherss />} />

					{/**************************************************************** */}

					{/* is user logged in function need to be added here */}
					<Route path="user-profile" element={<Profile />} />
					<Route path="seller-profile" element={<SellerProfile />} />
					<Route
						path="user-profile-edit"
						element={<UserProfileEdit />}
					>
						<Route index element={<Editprofile />} />
						<Route
							index
							path="editprofile"
							element={<Editprofile />}
						/>
						<Route
							path="appformessage"
							element={<Appformessage />}
						/>
						<Route
							path="user-notification"
							element={<Usernotification />}
						/>
						<Route path="*" element={<NotFound />} />
					</Route>
					{/* auth */}
					<Route path="/google/login/success" element={<GoogleCallback />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
			<Footer />
		</>
	);
}

export default App;
