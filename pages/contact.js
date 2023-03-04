import React from "react";
import Link from "next/link";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";

const Contact = () => {
  return (
    <>
      <Link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossOrigin="anonymous"
      />
      <div className="container justify-center items-center mx-auto font-bold text-xl mt-4 text-white">
        Fill the form , Our team will get back to you within 24hours
      </div>
      <form
        className="p-5 bg-slate-700 container border border-warning rounded my-4 text-light font-weight-bolder"
        action="https://formsubmit.co/asassociates0412@gmail.com"
        method="post"
      >
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault01">First name</label>
            <input
              name="First Name"
              type="text"
              className="form-control"
              id="validationDefault01"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault02">Last name</label>
            <input
              name="Last Name"
              type="text"
              className="form-control"
              id="validationDefault02"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="emailInfo" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="emailInfo"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone{" "}
            </label>
            <input
              name="phoneNumber"
              type="tel"
              id="phoneNumber"
              className="form-control input-tel-bg"
              pattern="^[1-9]{1}[0-9]{9}$"
              placeholder="Enter Mobile Number"
              autoComplete="off"
              autoCorrect="off"
              minLength="10"
              maxLength="10"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03">City</label>
            <input
              name="City"
              type="text"
              className="form-control"
              id="validationDefault03"
              required
            />
          </div>
          <div className="col-md-3 mb-3 mt-4">
            <label htmlFor="validationDefault04">State</label>
            <select
              name="State"
              className="custom-select bg-slate-800 text-xl mx-3 p-1 px-2 rounded-lg"
              id="validationDefault04"
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault05">Zip</label>
            <input
              name="Zip"
              type="text"
              className="form-control"
              id="validationDefault05"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Service Related Information
          </label>
          <textarea
            name="Message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mt-4" type="submit">
          Submit form
        </button>
      </form>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Contact;
