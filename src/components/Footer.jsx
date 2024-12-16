import React from "react";
import "./Navbar.css";
import facebook from "../assets/fb.png";
import twitter from "../assets/twt.png";
import insta from "../assets/inst.png";
import pintrest from "../assets/pint.png";
import googleplus from "../assets/google+.png";
import youtube from "../assets/yt.png";
import telegram from "../assets/tele.png";
import message from "../assets/msg.png";

const Footer = () => {
  return (
    <div className=" " style={{ backgroundColor: "#F7F5F9" }}>
      <div className="row mt-5 pt-4 container mx-auto">
        <div className=" col-md-5">
          <div className="row">
            {/* one */}
            <div className="col-lg-6 pl-4 footer  ">
              <h5 className="footer-heading">Hobbycue</h5>
              <ul className=" list-unstyled">
                <li>About Us</li>
                <li>Our Services</li>
                <li>Work with Us</li>
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>
            {/* two */}
            <div className="col-lg-6 pl-4 footer  ">
              <h5 className="footer-heading">How Do I</h5>
              <ul className=" list-unstyled">
                <li>Sign Up</li>
                <li>Add a Listing</li>
                <li>Claim Listing</li>
                <li>Post a Query</li>
                <li>Add a Blog Post</li>
                <li>Other Queries</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" col-md-7">
          <div className="row footer">
            <div className="col-lg-4">
              <h5 className="footer-heading">Quick Links</h5>
              <ul className=" list-unstyled">
                <li>Listings</li>
                <li>Listings</li>
                <li>Shop / Store</li>
                <li>Community</li>
              </ul>
            </div>
            <div className="col-lg-8 ">
              <h5 className="footer-heading">Social Media</h5>
              <ul className="  list-unstyled w-100  d-flex justify-content-evenly gap-1">
                <li>
                  <img src={facebook} alt="" />
                </li>
                <li>
                  <img src={twitter} alt="" />
                </li>
                <li>
                  <img src={insta} alt="" />
                </li>
                <li>
                  <img src={pintrest} alt="" />
                </li>
                <li>
                  <img src={googleplus} alt="" />
                </li>
                <li>
                  <img src={youtube} alt="" />
                </li>
                <li>
                  <img src={telegram} alt="" />
                </li>
                <li>
                  <img src={message} alt="" />
                </li>
              </ul>

              <h5 className="footer-heading">Invite Friends</h5>
              <div
                className="input-group mb-3 mt-3"
                style={{
                  border: "1px solid #8064A2",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text"
                  id="basic-addon2"
                  style={{ backgroundColor: "#8064A2", color: "white" }}
                >
                  Invite
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ height: "78px", width: "100%", backgroundColor: "#F7F5F9" }}
        className=" d-flex justify-content-center align-items-center"
      >
        © Purple Cues Private Limited
      </div>
    </div>
  );
};

export default Footer;
