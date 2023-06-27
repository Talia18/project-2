import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import SignOut from "./components/signOut";
import ProtectedRoute from "./components/common/protectedRoute";
import CardCreate from "./components/cardsCreate";
import MyCards from "./components/myCards";
import CardsDelete from "./components/cardsDelete";
import CardsEdit from "./components/cardsEdit";
import { ToastContainer, Zoom } from "react-toastify";
import CardsView from "./components/cardsView";
import CardForAll from "./components/cardForAll";

function App() {
  return (
    <div className="vh-100 d-flex flex-column">
      <ToastContainer slide={Zoom} />

      <header>
        <Navbar />
      </header>

      <div id="innerMain" className="d-flex flex-fill flex-column">
        <div id="mainOverlay" className="p-2 flex-fill flex-column d-flex">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="about" element={<About />} />

            <Route path="sign-in" element={<SignIn redirect="/" />} />

            <Route path="sign-up" element={<SignUp redirect="/sign-in" />} />

            <Route path="sign-out" element={<SignOut redirect="/" />} />

            <Route
              path="my-cards"
              element={
                <ProtectedRoute onlyBiz>
                  <MyCards />
                </ProtectedRoute>
              }
            />

            <Route
              path="/create-card"
              element={
                <ProtectedRoute onlyBiz>
                  <CardCreate redirect="/my-cards" />
                </ProtectedRoute>
              }
            />

            <Route
              path="my-cards/edit/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsEdit />
                </ProtectedRoute>
              }
            />

            <Route
              path="my-cards/delete/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsDelete />
                </ProtectedRoute>
              }
            />

            <Route
              path="my-cards/view/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardsView />
                </ProtectedRoute>
              }
            />

            <Route path="card-for-all" element={<CardForAll />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
