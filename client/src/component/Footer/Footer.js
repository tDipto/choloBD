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
          <h2>যোগাযোগ করুন </h2>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">ই-মেইল</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            {/* <div class="form-group">
              <label for="exampleInputPassword1">পাসওয়ার্ড </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div> */}
            <div class="form-group">
              <label for="exampleFormControlTextarea1">মতামত দিন </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              পাঠিয়ে দিন
            </button>
          </form>
        </div>
        <div className="footer-three">
          <h2>ডেভেলপার তথ্যসমূহ</h2>
          <div>
            <p>মোঃ শিমুল মাহমুদ</p>
          </div>
          <div>
            <p>তানজিম রহমান</p>
          </div>
          <div>
            <p>মোঃ শিমুল মাহমুদ</p>
          </div>
          {/* <div>Icons</div> */}
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
