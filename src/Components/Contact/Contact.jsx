import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="bg-secound py-5 my-5 w-75 m-auto">
      <header>
        <h1 className="text-uppercase text-center Bold text. mt-5">ممكن نتعرف ؟</h1>
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
            <label htmlFor="username">اسمك هنا ي راااايق بعد اذنك</label>
          </div>

          <div className="input-group">
            <input type="text" id="phone" placeholder=" " required />
            <label htmlFor="phone">عندك كام سنه ي دولى</label>
          </div>

          <div className="input-group">
            <input type="text" id="email" placeholder=" " required />
            <label htmlFor="email">الميل الطرش بتاعك</label>
          </div>

          <div className="input-group">
            <input type="text" id="address" placeholder=" " required />
            <label htmlFor="address">محدش شايف قول</label>
          </div>

          <button className="submit text-white px-5 py-2">ابعتهالوو</button>
        </form>
      </main>
    </section>
  );
};

export default Contact;
