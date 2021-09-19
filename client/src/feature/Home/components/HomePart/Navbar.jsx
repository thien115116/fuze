import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="close-nav-menu outer-shadow hover-in-shadow">&times;</div>
      <div className="nav-menu-inner">
        <ul>
          <li>
            <a href="#home" className="link-item outer-shadow active">
              home
            </a>
          </li>
          <li>
            <a href="#about" className="link-item outer-shadow hover-in-shadow">
              about
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="link-item outer-shadow hover-in-shadow"
            >
              services
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="link-item outer-shadow hover-in-shadow"
            >
              portfolio
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className="link-item outer-shadow hover-in-shadow"
            >
              testimonial
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="link-item outer-shadow hover-in-shadow"
            >
              contact
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- copyright text --> */}
      <p className="copyright-text">&copy; Trần Thiên</p>
    </>
  );
}
