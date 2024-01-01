import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const RequestPartner = () => {
  const navigate = useNavigate();
  const initialValue = {
    reqRole: "",
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
    vendorInfo: {
      vendorId: "",
      storeName: "",
    },
  };
  const [confirmPassword, setConfirmPassword] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [terms, setTerms] = useState();
  const [request, setRequest] = useState(initialValue);

  const handleChange = (e) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !request.name ||
      !request.email ||
      !request.phone ||
      !request.password ||
      request.password !== confirmPassword ||
      !terms
    ) {
      setErrorMsg(true);
      return false;
    }
    console.log(request);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/fruit/user/`,
        request
      );
      console.log("response: ", response);

      console.log("request");
      navigate("/login");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const changeRouteBtn = () => {
    window.open("http://localhost:3011/fruit-auction/", "_blank");
  };
  return (
    <main className="main pages">
      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
              <div className="heading_s1">
                <h1 className="mb-5">Request Partner</h1>
                <p className="mb-30">
                  Already a partner?{" "}
                  <Link onClick={changeRouteBtn}>Login to Dashboard</Link>
                </p>
              </div>
              <form>
                <div className="row">
                  <div className="col-lg-4 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div>
                          <select
                            className="form-select mb-10 p-3"
                            name="reqRole"
                            onChange={handleChange}
                          >
                            <option value="#">Choose Partner Program</option>
                            <option value="vendor">Vendor</option>
                            <option value="farmer">Farmer</option>
                            <option value="golden_member">Golden Member</option>
                            <option value="wholesaler">Wholesaler</option>
                            <option value="agriculture">Agriculture</option>
                            <option value="logistics">Logistics</option>
                          </select>
                        </div>
                        {request.reqRole === "agriculture" ? (
                          <>
                            <div>
                              <select
                                className="form-select mb-10 p-3"
                                name="reqRole"
                              >
                                <option value="#">
                                  Choose Agriculture Categories
                                </option>
                                <option value="machinery">
                                  Machinery Distributer
                                </option>
                                <option value="seeds">Seeds Distributer</option>
                                <option value="rawMaterial">
                                  Raw Material Distributer
                                </option>
                                <option value="landBrokers">LandBroker</option>
                              </select>
                            </div>
                          </>
                        ) : (
                          <>
                            {request.reqRole === "logistics" ? (
                              <div>
                                <select
                                  className="form-select mb-10 p-3"
                                  name="reqRole"
                                >
                                  <option value="#">
                                    Choose Logistics Categories
                                  </option>
                                  <option value="transport">Transporter</option>
                                  <option value="account">Accountant</option>
                                </select>
                              </div>
                            ) : (
                              <></>
                            )}
                          </>
                        )}
                        <div className="form-group">
                          <label htmlFor="street">Address</label>
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg && !request.street && "border-danger"
                            } `}
                            type="text"
                            required
                            name="street"
                            placeholder="Street"
                          />
                          {errorMsg && !request.email && (
                            <span className="text-danger">
                              Please Enter Email before SignUp
                            </span>
                          )}
                        </div>

                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg && !request.city && "border-danger"
                            } `}
                            type="text"
                            required=""
                            name="city"
                            placeholder="City"
                          />
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div className="form-group">
                        <label htmlFor="state">Address</label>
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg && !request.state && "border-danger"
                            } `}
                            type="text"
                            required=""
                            name="state"
                            placeholder="State"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg && !request.country && "border-danger"
                            } `}
                            type="text"
                            required
                            name="country"
                            placeholder="Country"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg && !request.postalCode && "border-danger"
                            } `}
                            type="number"
                            required
                            name="postalCode"
                            placeholder="Postal Code"
                          />
                          {errorMsg && !request.phone && (
                            <span className="text-danger">
                              Please Enter Phone Number Before SignUp
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Continue with Google will be here*/}
                  <div className="col-lg-4 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg &&
                              !request.password &&
                              "border-danger"
                            } `}
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                          {errorMsg && !request.password && (
                            <span className="text-danger">
                              Enter Password Before Signup
                            </span>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`${
                              errorMsg &&
                              request.password !== confirmPassword &&
                              "border-danger"
                            } `}
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                          />
                          {errorMsg &&
                            request.password !== confirmPassword && (
                              <span className="text-danger">
                                Password Does Not Match
                              </span>
                            )}
                        </div>
                        <div className="login_footer form-group mb-10">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                // onChange={(e) => setVendor(e.target.checked)}
                                className="form-check-input"
                                type="checkbox"
                                name="vendor"
                                id="exampleCheckbox123"
                              />
                              <label
                                className="form-check-label "
                                htmlFor="exampleCheckbox123"
                              >
                                Register as vendor
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="login_footer form-group mb-50">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                onChange={(e) => setTerms(e.target.checked)}
                                className="form-check-input"
                                type="checkbox"
                                name="terms"
                                id="exampleCheckbox12"
                                defaultValue=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheckbox12"
                              >
                                <span>I agree to terms &amp; Policy.</span>
                              </label>
                            </div>
                            {errorMsg && !terms && (
                              <span className="text-danger">
                                Accept Terms And Policies For Proceed
                              </span>
                            )}
                          </div>
                          <Link to={`/privacy-policy`}>
                            <i className="fi-rs-book-alt mr-5 text-muted" />
                            Lean more
                          </Link>
                        </div>
                        <div className="form-group d-flex flex-row-reverse mb-1">
                          <button
                            type="submit"
                            className="btn btn-fill-out btn-block hover-up font-weight-bold"
                            onClick={handleSubmit}
                          >
                            Send Request
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Continue with Google will be here*/}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RequestPartner;
