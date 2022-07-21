import "./Footer.css";
/* eslint-disable jsx-a11y/anchor-has-content */
const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="footer-one">
          <h4 className="text-center m-5">বিভাগীয় ভ্রমণ স্থানসমূহ </h4>
          <ul className="text-center m-5 ">
            <li>
              <a href="/dhaka">ঢাকা</a>
            </li>
            <li>
              <a href="/khulna">খুলনা</a>
            </li>
            <li>
              <a href="/barisal">বরিশাল</a>
            </li>
            <li>
              <a href="/sylhet">সিলেট</a>
            </li>
            <li>
              <a href="/chittagong">চট্টগ্রাম</a>
            </li>
            <li>
              <a href="/mymensingh">ময়মনসিংহ</a>
            </li>
            <li>
              <a href="/rajshahi">রাজশাহী</a>
            </li>
            <li>
              <a href="/rangpur">রংপুর</a>
            </li>
          </ul>
        </div>
        <div className="footer-two">
          <h2>Contact Us</h2>
          <p>
            {" "}
            <input type="text" name="your name" id="" placeholder="your name" />
          </p>
          <p>
            {" "}
            <input
              type="email"
              name="your email"
              id=""
              placeholder="your email"
            />
          </p>
          <textarea placeholder="write here" cols="40" rows="5"></textarea>
          <br />
          <button type="submit">Send Message</button>
        </div>
        <div className="footer-three">
          <h2>Developer Information</h2>
          <p>
            <h6>Abu Bakkar Siddique Raihan</h6>
          </p>
          <p>
            <h6>Tanzim Rahman</h6>
          </p>
          <p>
            <h6>Md. Shimul Mahmud</h6>
          </p>
        </div>
      </div>
      <div className="copyright  p-3 m-0 ">
        <h5 className="text-center">
          All rights reserved to the team &copy; {new Date().getFullYear()}
        </h5>
      </div>
    </>
  );
};

export default Footer;
