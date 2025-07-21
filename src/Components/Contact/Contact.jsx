import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="bg-secound pb-5 my-5 w-75 m-auto">
      <header>
        <h1 className="text-uppercase text-center Bold text.">conatct section</h1>
        <div className="decor d-flex justify-content-center align-items-center">
          <div className="me-3 line"></div>
          <i className="bi bi-star-fill"></i>
          <div className="ms-3 line"></div>
        </div>
      </header>
      <main>
        <form className="w-75 m-auto" action="">
          <div className="input-group">
            <input type="text" id="username" placeholder=" " required />
            <label htmlFor="username">userName</label>
          </div>

          <div className="input-group">
            <input type="text" id="phone" placeholder=" " required />
            <label htmlFor="phone">userAge</label>
          </div>

          <div className="input-group">
            <input type="text" id="email" placeholder=" " required />
            <label htmlFor="email">userEmail</label>
          </div>

          <div className="input-group">
            <input type="text" id="address" placeholder=" " required />
            <label htmlFor="address">userPassword</label>
          </div>

          <button className="submit text-white px-5 py-2">send Message</button>
        </form>
      </main>
    </section>
  );
};

export default Contact;
