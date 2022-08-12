import React, { useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    overflowY: "scroll",
  },
};

Modal.setAppElement("#root");

const ReviewForm = ({ modalIsOpen, closeModal }) => {
  const params = useParams();

  // const[info,setInfo] = useState({});
  // const handleBlur = e => {
  //   const newInfo = {..info};
  //   newInfo[e.target.name] = e.target.value;
  //    setInfo(newInfo )
  // }

  const [placeName, setName] = useState("");
  const [placeNameEn, setPlaceNameEn] = useState("");
  const [distName, setdistName] = useState("");
  const [distNameBn, setdistNameBn] = useState("");
  const [divName, setDivName] = useState("");
  const [roadmap, setRoadmap] = useState();
  const [hotel, setHotel] = useState();
  const [placeDesc, setPlaceDesc] = useState();
  const [file, setFile] = useState(null);
  const [pic, setPic] = useState();

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    /* console.log(placeNameEn); */
    /* setPlaceName(placeNameEn); */
    /*  const dist = distName.split(" ");
    setdistName(dist[0]);
    setdistNameBn(dist[1]); */
    /* console.log(dist[1]); */

    let info = {
      placeName,
      divName,
      placeNameEn,
      distName,
      distNameBn,
      roadmap,
      hotel,
      placeDesc,
      file,
    };

    console.log(info);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("placeName", placeName);
    formData.append("distName", distName);
    formData.append("divName", divName);
    formData.append("roadmap", roadmap);
    formData.append("placeNameEn", placeNameEn);
    formData.append("distNameBn", distNameBn);
    formData.append("hotel", hotel);
    formData.append("placeDesc", placeDesc);
    formData.append("pic", file.name);
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      // headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // fetch('http://localhost:5000//addAPlace', {
  //   method: 'POST',
  //   body: formData
  // })
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data)
  // })
  // .catch(error => {
  //   console.error(error)
  // })
  // const handleFileChange= (e) =>{
  //   const newFile = e.target.files[0];
  //   setFile(newFile);
  // }
  /*  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data); */
  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}> close</button>
        <div
          className=""
          style={{
            width: "110vh",
            height: "90vh",
            position: "",
            margin: "0 auto",
          }}
        >
          <h2>{} নতুনভাবে যোগ করুন </h2>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">জায়গার নাম </label>
              <input
                required
                onChange={(e) => setName(e.target.value)}
                type="text"
                class="form-control"
                name="placeNameBangla"
                id="exampleInputEmail1"
                value={placeName}
                placeholder="বাংলায় লিখুন"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">জায়গার নাম </label>
              <input
                required
                onChange={(e) =>
                  setPlaceNameEn(
                    e.target.value.replace(/\s+/g, "").toLowerCase()
                  )
                }
                type="text"
                class="form-control"
                name="placeNameEng"
                id="exampleInputEmail1"
                value={placeNameEn}
                placeholder="ইংরেজিতে লিখুন"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">বিভাগ</label>
              <select
                required
                onChange={(e) => setDivName(e.target.value)}
                value={divName}
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option value="dhaka">ঢাকা</option>
                <option value="sylhet">সিলেট</option>
                <option value="rajshahi">রাজশাহী</option>
                <option value="khulna">খুলনা</option>
                <option value="rangpur">রংপুর</option>
                <option value="chittagong">চট্টগ্রাম</option>
                <option value="mymensingh">ময়মনসিংহ</option>
                <option value="barisal">বরিশাল</option>
              </select>
              {divName === "dhaka" && (
                <>
                  <label for="1" className="py-2">
                    জেলা{" "}
                  </label>
                  <select
                    required
                    onChange={(e) => {
                      // eslint-disable-next-line no-lone-blocks
                      {
                        setdistName(e.target.value);
                        /* setdistName(e.target.value.split(" ")[0]); */
                        setdistNameBn(e.target.value.split(",")[1]);
                        /*    let dist = distName.split(" ");
                        console.log(dist);
                        setdistName(dist[0]);
                        setdistNameBn(dist[1]); */
                      }
                    }}
                    value={distName}
                    class="form-control"
                    id="1"
                  >
                    <option value="">--</option>
                    <option value="dhaka,ঢাকা">ঢাকা</option>
                    <option value="gajipur,গাজীপুর">গাজীপুর</option>
                    <option value="kishoreganj,কিশোরগঞ্জ">কিশোরগঞ্জ</option>
                    <option value="tangail,টাঙ্গাইল">টাঙ্গাইল</option>
                    <option value="faridpur,ফরিদপুর">ফরিদপুর</option>
                    <option value="narayanganj,নারায়ণগঞ্জ">নারায়ণগঞ্জ</option>
                    <option value="narsingdi,নরসিংদী">নরসিংদী</option>
                    <option value="munshiganj,মুন্সীগঞ্জ">মুন্সীগঞ্জ</option>
                    <option value="dhaka,ঢাকা">ঢাকা</option>
                  </select>
                </>
              )}
              {divName === "sylhet" && (
                <>
                  <label for="2" className="py-2">
                    জেলা{" "}
                  </label>
                  <select
                    required
                    onChange={(e) => {
                      setdistName(e.target.value);
                      /* setdistName(e.target.value.split(" ")[0]); */
                      setdistNameBn(e.target.value.split(",")[1]);
                    }}
                    value={distName}
                    class="form-control"
                    id="2"
                  >
                    <option value="">--</option>
                    <option value="sylhet,সিলেট">সিলেট</option>
                    <option value="habiganj,হবিগঞ্জ">হবিগঞ্জ</option>
                    <option value="moulvibazar,মৌলভীবাজার">মৌলভীবাজার</option>
                    <option value="sunamganj,সুনামগঞ্জ">সুনামগঞ্জ</option>
                  </select>
                </>
              )}
              {divName === "rajshahi" && (
                <>
                  <label for="3" className="py-2">
                    জেলা{" "}
                  </label>
                  <select
                    required
                    onChange={(e) => {
                      setdistName(e.target.value);
                      /* setdistName(e.target.value.split(" ")[0]); */
                      setdistNameBn(e.target.value.split(",")[1]);
                    }}
                    value={distName}
                    class="form-control"
                    id="3"
                  >
                    <option value="">--</option>
                    <option value="bogra,বগুড়া">বগুড়া</option>
                    <option value="chapinawabganj,চাপাইনবাবগঞ্জ">
                      চাপাইনবাবগঞ্জ
                    </option>
                    <option value="joypurhat,জয়পুরহাট">জয়পুরহাট</option>
                    <option value="naogaon,নওগাঁ">নওগাঁ</option>
                    <option value="natore,নাটোর">নাটোর</option>
                    <option value="rajshahi,রাজশাহী">রাজশাহী</option>
                    <option value="pabna,পাবনা">পাবনা</option>
                    <option value="sirajganj,সিরাজগঞ্জ">সিরাজগঞ্জ</option>
                  </select>
                </>
              )}
              {divName === "rangpur" && (
                <>
                  <label for="4" className="py-2">
                    জেলা{" "}
                  </label>
                  <select
                    required
                    onChange={(e) => {
                      setdistName(e.target.value);
                      /* setdistName(e.target.value.split(" ")[0]); */
                      setdistNameBn(e.target.value.split(",")[1]);
                    }}
                    value={distName}
                    class="form-control"
                    id="4"
                  >
                    <option value="">--</option>
                    <option value="dinajpur,দিনাজপুর">দিনাজপুর</option>
                    <option value="gaibandha,গাইবান্ধা">গাইবান্ধা</option>
                    <option value="kurigram,কুড়িগ্রাম">কুড়িগ্রাম</option>
                    <option value="lalmonirhat,লালমনিরহাট">লালমনিরহাট</option>
                    <option value="panchagarh,পঞ্চগড়">পঞ্চগড়</option>
                    <option value="thakurgaon,ঠাকুরগাঁও">ঠাকুরগাঁও</option>
                    <option value="rangpur,রংপুর">রংপুর</option>
                    <option value="nilphamari,নীলফামারী">নীলফামারী</option>
                  </select>
                </>
              )}
              {divName === "chittagong" && (
                <>
                  <label for="6" className="py-2">
                    জেলা{" "}
                  </label>
                  <select
                    required
                    onChange={(e) => {
                      setdistName(e.target.value);
                      /* setdistName(e.target.value.split(" ")[0]); */
                      setdistNameBn(e.target.value.split(",")[1]);
                    }}
                    value={distName}
                    class="form-control"
                    id="6"
                  >
                    <option value="">--</option>
                    <option value="chittagong,চট্টগ্রাম">চট্টগ্রাম</option>
                    <option value="coxsbazar,কক্সবাজার">কক্সবাজার</option>
                    <option value="feni,ফেনী">ফেনী</option>
                    <option value="chandpur,চাঁদপুর">চাঁদপুর</option>
                    <option value="brahmanbaria,ব্রাহ্মণবাড়িয়া">
                      ব্রাহ্মণবাড়িয়া
                    </option>
                    <option value="bandarban,বান্দরবান">বান্দরবান</option>
                    <option value="rangamati,রাঙ্গামাটি">রাঙ্গামাটি</option>
                    <option value="khagrachhari,খাগড়াছড়ি">খাগড়াছড়ি</option>
                  </select>
                </>
              )}
              {divName === "mymensingh" && (
                <>
                  <label for="5" className="py-2">
                    জেলা{" "}
                  </label>
                  <select
                    required
                    onChange={(e) => {
                      setdistName(e.target.value);
                      /* setdistName(e.target.value.split(" ")[0]); */
                      setdistNameBn(e.target.value.split(",")[1]);
                    }}
                    value={distName}
                    class="form-control"
                    id="5"
                  >
                    <option value="">--</option>
                    <option value="mymensingh,ময়মনসিংহ">ময়মনসিংহ</option>
                    <option value="netrokona,নেত্রকোনা">নেত্রকোনা</option>
                    <option value="jamalpur,জামালপুর">জামালপুর</option>
                    <option value="sherpur,শেরপুর">শেরপুর</option>
                  </select>
                </>
              )}
              {divName === "barisal" && (
                <>
                  <label for="7" className="py-2">
                    জেলা{" "}
                  </label>
                  <select
                    required
                    onChange={(e) => {
                      setdistName(e.target.value);
                      /* setdistName(e.target.value.split(" ")[0]); */
                      setdistNameBn(e.target.value.split(",")[1]);
                    }}
                    value={distName}
                    class="form-control"
                    id="7"
                  >
                    <option value="">--</option>
                    <option value="barisal,বরিশাল">বরিশাল</option>
                    <option value="barguna,বরগুনা">বরগুনা</option>
                    <option value="bhola,ভোলা">ভোলা</option>
                    <option value="jhalokati,ঝালকাঠি">ঝালকাঠি</option>
                    <option value="patuakhali,পটুয়াখালি">পটুয়াখালি</option>
                    <option value="pirojpur,পিরোজপুর"> পিরোজপুর</option>
                  </select>
                </>
              )}
              {divName === "khulna" && (
                <>
                  <label for="8" className="py-2">
                    জেলা{" "}
                  </label>
                  <select
                    required
                    onChange={(e) => {
                      setdistName(e.target.value);
                      /* setdistName(e.target.value.split(" ")[0]); */
                      setdistNameBn(e.target.value.split(",")[1]);
                    }}
                    value={distName}
                    class="form-control"
                    id="8"
                  >
                    <option value="">--</option>
                    <option value="khulna,খুলনা">খুলনা</option>
                    <option value="magura,মাগুরা">মাগুরা</option>
                    <option value="bagerhat,বাগেরহাট">বাগেরহাট</option>
                    <option value="satkhira,সাতক্ষীরা">সাতক্ষীরা</option>
                    <option value="jashore,যশোর">যশোর</option>
                    <option value="chuadanga,চুয়াডাঙ্গা"> চুয়াডাঙ্গা</option>
                    <option value="kushtia,কুষ্টিয়া"> কুষ্টিয়া</option>
                  </select>
                </>
              )}
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">রোডম্যাপ </label>
              <textarea
                required
                typeof="comment"
                onChange={(e) => setRoadmap(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeName="comment"
                placeholder="বাংলায় লিখুন"
                value={roadmap}
              ></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                জায়গার বর্ণনা দিন{" "}
              </label>
              <textarea
                required
                typeof="comment"
                onChange={(e) => setPlaceDesc(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeName="comment"
                placeholder="বাংলায় লিখুন"
                value={placeDesc}
              ></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">হোটেলের তথ্য দিন </label>
              <textarea
                required
                typeof="comment"
                onChange={(e) => setHotel(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeName="comment"
                placeholder="বাংলায় লিখুন"
                value={hotel}
              ></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">ছবি যোগ করুন</label>
              <input
                required
                onChange={handleFileChange}
                type="file"
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Picture"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              পোস্ট করুন
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ReviewForm;
