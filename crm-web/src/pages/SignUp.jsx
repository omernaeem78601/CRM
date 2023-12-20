import { Link } from "react-router-dom";

const SignUp = () => {
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
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div className="form-group">
                          <input
                            type="text"
                            required=""
                            name="username"
                            placeholder="Username"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            required=""
                            name="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            required=""
                            name="phone"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            required=""
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            required=""
                            type="password"
                            name="password"
                            placeholder="Confirm password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Continue with Google will be here*/}
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div className="form-group">
                          <input
                            type="text"
                            required=""
                            name="username"
                            placeholder="Username"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            required=""
                            name="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            required=""
                            name="phone"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            required=""
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            required=""
                            type="password"
                            name="password"
                            placeholder="Confirm password"
                          />
                        </div>
                        <div className="payment_option mb-50">
                          <div className="custome-radio">
                            <input
                              className="form-check-input"
                              required=""
                              type="radio"
                              name="payment_option"
                              id="exampleRadios3"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios3"
                              data-bs-toggle="collapse"
                              data-target="#bankTranfer"
                              aria-controls="bankTranfer"
                            >
                              I am a customer
                            </label>
                          </div>
                          <div className="custome-radio">
                            <input
                              className="form-check-input"
                              required=""
                              type="radio"
                              name="payment_option"
                              id="exampleRadios4"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios4"
                              data-bs-toggle="collapse"
                              data-target="#checkPayment"
                              aria-controls="checkPayment"
                            >
                              I am a vendor
                            </label>
                          </div>
                        </div>
                        <div className="login_footer form-group mb-50">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="checkbox"
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
                          </div>
                          <Link to={`/privacy-policy`}>
                            <i className="fi-rs-book-alt mr-5 text-muted" />
                            Lean more
                          </Link>
                        </div>
                        <div className="form-group d-flex flex-row-reverse mb-30">
                          <button
                            type="submit"
                            className="btn btn-fill-out btn-block hover-up font-weight-bold"
                            name="login"
                          >
                            Submit &amp; Register
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

export default SignUp;
