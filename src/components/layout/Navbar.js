import React, { useEffect } from "react";
import "../../style/layout/navbar.css";
import { Link } from "react-router-dom";
import QuizContext from "../../context/quizz/quizContext";
import { useNavigate } from "react-router-dom";

const MenuIndicator = () => {
  const navigate = useNavigate();
  const quizContext = React.useContext(QuizContext);
  const { logout, login, user } = quizContext;
  if (login) {
    const { loginUser } = user;
    var { name, email } = loginUser;
  }
  useEffect(() => {
    const indicator = document.querySelector(".nav-indicator");
    const items = document.querySelectorAll(".nav-item");

    function handleIndicator(el) {
      items.forEach((item) => {
        item.classList.remove("is-active");
        item.removeAttribute("style");
      });

      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
      indicator.style.backgroundColor = el.getAttribute("active-color");

      el.classList.add("is-active");
      el.style.color = el.getAttribute("active-color");
    }

    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        handleIndicator(e.target);
      });
      item.classList.contains("is-active") && handleIndicator(item);
    });
  }, [login]);

  const logoutuser = () => {
    logout();
    navigate("/login");
  };
  //if any of the below link is clicked then the indicator will be shown on that link
  const handleIndicator = (el) => {
    const indicator = document.querySelector(".nav-indicator");
    const items = document.querySelectorAll(".nav-item");
    items.forEach((item) => {
      item.classList.remove("is-active");
      item.removeAttribute("style");
    });

    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
    indicator.style.backgroundColor = el.getAttribute("active-color");

    el.classList.add("is-active");
    el.style.color = el.getAttribute("active-color");
  };


  return (
    <React.Fragment>
      {login && (
        <div className="nav-container">
          <h1 className="title">Online Test</h1>
          <nav className="nav">
            <Link to="/" className="nav-item is-active" active-color="orange" >
              Home
            </Link>
            <Link to="/review" className="nav-item" active-color="green">
              Review
            </Link>
            <Link to="/result" className="nav-item" active-color="blue">
              Result
            </Link>

            <Link
              to="/login"
              className="nav-item"
              active-color="red"
              onClick={logoutuser}
            >
              Logout
            </Link>
            <span className="nav-indicator" />
          </nav>
          <div className="name"><i className="ri-user-line form__icon"></i>{name}</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default MenuIndicator;
