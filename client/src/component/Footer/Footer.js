import "./Footer.css";
/* eslint-disable jsx-a11y/anchor-has-content */

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
              <label for="exampleInputEmail1">আপনার নাম </label>
              <input
                type="name"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="name"
              />
            </div>
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
                typeof="comment"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <button
              onSubmit={handleSubmit}
              type="submit"
              class="btn btn-primary"
            >
              পাঠিয়ে দিন
            </button>
          </form>
        </div>
        <div className="footer-three px-5">
          <h2>ডেভেলপার তথ্যসমূহ</h2>
          <div>
            <ul className="list-group text-center text-dark">
              <a className="m-1" href="https://www.facebook.com/Depressed021">
                <li className="list-group-item active">মোঃ শিমুল মাহমুদ</li>
              </a>
              <a className="m-1" href="https://www.facebook.com/RHN.RR">
                <li className="list-group-item active">
                  আবুবকর সিদ্দিক রায়হান
                </li>
              </a>
              <a
                className="m-1"
                href="https://www.facebook.com/me.tanzim.dipto"
              >
                <li className="list-group-item active">তানজিম রহমান</li>
              </a>
            </ul>
          </div>
          <div className="m-8 p-1">
            <address>
              ইমেইল পাঠাতে এখানে{" "}
              <a href="mailto:chologhurbangladesh@gmail.com">
                <strong className="p-2">ক্লিক করুন</strong>
              </a>{" "}
              <br />
            </address>
            <p>
              ঠিকানাঃ <br /> চট্টগ্রাম প্রকৌশল বিশ্ববিদ্যালয় <br />
              পাহাড়তলি, রাউজান-৪৩৪৯ <br /> চট্টগ্রাম, বাংলাদেশ
            </p>

            <p className="text-success">অনুসরণ করুন</p>
            <div className="">
              <a href="https://www.facebook.com">
                <i
                  class="fa fa-facebook-square  px-2"
                  style={{ fontSize: "40px", color: "red" }}
                ></i>
              </a>
              <a href="https://www.youtube.com">
                <i
                  class="fa fa-youtube px-2"
                  style={{ fontSize: "40px", color: "red" }}
                ></i>
              </a>
              <a href="https://www.twitter.com">
                <i
                  class="fa fa-twitter px-2"
                  style={{ fontSize: "40px", color: "red" }}
                ></i>
              </a>
              <a href="https://www.instagram.com">
                <i
                  class="fa fa-instagram  px-2"
                  style={{ fontSize: "40px", color: "red" }}
                ></i>
              </a>
              <a href="https://www.github.com">
                <i
                  class="fa fa-github  px-2"
                  style={{ fontSize: "40px", color: "red" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright  p-1 m-0 ">
        <h6 className="text-center ">
          এই ওয়েবসাইটের সর্বসত্ত্ব সংরক্ষিত থাকবে কর্তৃপক্ষ &copy;{" "}
          {new Date().getFullYear()}
        </h6>
      </div>
    </>
  );
};

export default Footer;
