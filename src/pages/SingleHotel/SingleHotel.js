import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FinalPrice,
  HotelDetails,
  HotelImages,
  Navbar,
  AuthModal,
  ProfileDropDown,
} from "../../components";
import { useAuth } from "../../context";
import "./SingleHotel.css";

export const SingleHotel = () => {
  const [singleHotel, setSingleHotel] = useState({});

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://travel-app-backend-rbzs.onrender.com/api/hotels/${id}`
        );
        setSingleHotel(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const { name, state } = singleHotel;
  const { isAuthModalOpen, isDropDownModalOpen } = useAuth();
  return (
    <div className="relative">
    
      <Navbar />
      <main className="single-hotel-page">
        <p className="hotel-name-add">
          {name},{state}
        </p>
        <HotelImages singleHotel={singleHotel} />
        <div className="d-flex">
          <HotelDetails singleHotel={singleHotel} />
          <FinalPrice  singleHotel={singleHotel}/>
        </div>
      </main>
      {isDropDownModalOpen && <ProfileDropDown />}
      {isAuthModalOpen && <AuthModal />}
      </div>
   
  );
};
