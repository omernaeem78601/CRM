import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "customer",
  };
  const [confirmPassword, setConfirmPassword] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [terms, setTerms] = useState();
  const [signUpData, setSignUpData] = useState(initialValue);

  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !signUpData.name ||
      !signUpData.email ||
      !signUpData.phone ||
      !signUpData.password ||
      signUpData.password !== confirmPassword ||
      !terms
    ) {
      setErrorMsg(true);
      return false;
    }
    console.log(signUpData);
    try {
      const response = await axios.post(
        "http://localhost:5000/fruit/user",
        signUpData
      );
      console.log("response: ", response);

      console.log("signUpData");
      navigate("/login");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <main className="main pages">
      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
              <div className="heading_s1">
                <h1 className="mb-5">Create an Account</h1>
                <p className="mb-30">
                  Already have an account? <Link to={"/login"}>Login</Link>
                </p>
              </div>
              <form>
                <div className="row">
                  <div className="col-lg-4 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg && !signUpData.name && "border-danger"
                            } `}
                            type="text"
                            required=""
                            name="name"
                            placeholder="Name"
                          />
                          {errorMsg && !signUpData.name && (
                            <span className="text-danger">
                              Please Enter User Name before SignUp
                            </span>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg && !signUpData.email && "border-danger"
                            } `}
                            type="email"
                            required
                            name="email"
                            placeholder="Email"
                          />
                          {errorMsg && !signUpData.email && (
                            <span className="text-danger">
                              Please Enter Email before SignUp
                            </span>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg && !signUpData.phone && "border-danger"
                            } `}
                            type="number"
                            required
                            name="phone"
                            placeholder="Phone Number"
                          />
                          {errorMsg && !signUpData.phone && (
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
                              !signUpData.password &&
                              "border-danger"
                            } `}
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                          {errorMsg && !signUpData.password && (
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
                              signUpData.password !== confirmPassword &&
                              "border-danger"
                            } `}
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                          />
                          {errorMsg &&
                            signUpData.password !== confirmPassword && (
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
                                className="form-check-label"
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
                            Submit &amp; Register
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 pr-30 d-none d-lg-block">
                    <div className="card-login">
                      <button className="social-login facebook-login">
                        <img
                          src="assets/imgs/theme/icons/logo-facebook.svg"
                          alt="facebook"
                        />
                        <span>Continue with Facebook</span>
                      </button>
                      <button className="social-login google-login">
                        <img
                          src="assets/imgs/theme/icons/logo-google.svg"
                          alt="google"
                        />
                        <span>Continue with Google</span>
                      </button>
                      <button className="social-login apple-login">
                        <img
                          src="assets/imgs/theme/icons/logo-apple.svg"
                          alt="apple"
                        />
                        <span>Continue with Apple</span>
                      </button>
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

export default SignUp;
