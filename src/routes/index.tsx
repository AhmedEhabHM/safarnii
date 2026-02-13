import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import AuthLayout from "@/components/layout/AuthLayout";
import { Home } from "../pages/home/Home";

// Auth Pages
import SignUpPage from "@/pages/auth/signup/SignUpPage";
import WelcomePage from "@/pages/auth/welcome/WelcomePage";
import LoginPage from "@/pages/auth/login/LoginPage";
import ForgotPassword from "@/pages/auth/passwordManagementPages/ForgotPassword";
import OTPVerification from "@/pages/auth/passwordManagementPages/OTPVerification";
import NewPassword from "@/pages/auth/passwordManagementPages/NewPassword";

// Booking Pages
import FlightBooking from "@/pages/flight-booking/FlightBooking";
import SeatBookingPage from "@/pages/flight-booking/SeatBookingPage";
import BoardingPassPage from "@/pages/flight-booking/BoardingPassPage";
import FilterPanelPage from "@/pages/flight-booking/FilterPanelPage";
import { FlightBookingForm } from "@/pages/flight-booking/FlightBookingForm";

// Destination & Hotel
import Destination from "@/pages/destination/Destination";
import HotelPage from "@/pages/hotel/HotelPage";
import HotelAboutPage from "@/pages/hotel/HotelAboutPage";

// Other Pages
import { Favorites } from "@/pages/favourite/Favorites";
import CarsPage from "@/pages/cars";
import CarDetailsPage from "@/pages/cars/details";
import PickUpPage from "@/pages/cars/pickup";
import ProfileSettings from "@/components/profile/ProfileSettings";
import CompareToursPage from "@/pages/compare/CompareToursPage";
import Search from "@/pages/Search/Search";
import { PersonalInformation } from "@/components/profile";
import { AccountSecurity } from "@/components/profile/AccountSecurity";
import PaymentPage from "@/components/checkout/PaymentPage";
import SuccessPage from "@/components/checkout/pages/SuccessPage";
import ErrorPage from "@/components/checkout/pages/ErrorPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* 1. مسارات المصادقة (بدون Navbar) */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="welcome" replace />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="otp-verify" element={<OTPVerification />} />
        <Route path="new-password" element={<NewPassword />} />
      </Route>

      {/* اختصارات لمسارات المصادقة (للتوافق مع الروابط القديمة) */}
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      
      {/* 2. المسارات الرئيسية (داخل MainLayout الذي يحتوي على Navbar) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        
        {/* Search & Maps */}
        <Route path="search" element={<div className="pt-20"><Search /></div>} />
        <Route path="maps" element={<div className="pt-[110px] p-8"><h1>Maps Page</h1></div>} />
        
        {/* Favorites & Compare */}
        <Route path="favorite" element={<Favorites />} />
        <Route path="compare" element={<CompareToursPage />} />

        {/* Destination */}
        <Route path="destination" element={<Destination />} />

        {/* Hotel Routes */}
        <Route path="hotel" element={<HotelPage />} />
        <Route path="hotel/:hotelId" element={<HotelAboutPage />} />
        <Route path="hotel/:hotelId/:tab" element={<HotelAboutPage />} />

        {/* Car Routes */}
        <Route path="cars" element={<CarsPage />} />
        <Route path="cars/:id" element={<CarDetailsPage />} />
        <Route path="cars/:id/pick-up" element={<PickUpPage />} />

        {/* Flight Routes */}
        <Route path="flight-booking" element={<FlightBooking />} />
        <Route path="seat-booking" element={<SeatBookingPage />} />
        <Route path="boarding-pass" element={<BoardingPassPage />} />
        <Route path="filter-panel" element={<FilterPanelPage />} />
        <Route path="flight-form" element={<FlightBookingForm />} />

        {/* Profile Routes */}
        <Route path="profile" element={<ProfileSettings />} />
        <Route path="personal-info" element={<PersonalInformation profile={null} loading={false} uploadingImage={false} onUpdate={async()=>{}} onImageUpload={async()=>{}} />} />
        <Route path="security" element={<AccountSecurity />} />

        {/* Payment Routes */}
        <Route path="payment/:id" element={<PaymentPage />} />
        <Route path="payment/success" element={<SuccessPage />} />
        <Route path="payment/error/:paymentId" element={<ErrorPage />} />
      </Route>

      {/* Redirect unknown routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}