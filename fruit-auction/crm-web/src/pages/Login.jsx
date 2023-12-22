import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/action";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const initialValue = {
    email: "",
    password: "",
  };
  const [errorMsg, setErrorMsg] = useState(false);
  const [signUpData, setSignUpData] = useState(initialValue);

  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signUpData.email || !signUpData.password) {
      setErrorMsg(true);
      return false;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/fruit/user/login`,
        signUpData
      );
      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        sessionStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        dispatch(logoutAction(true))
        // window.location.href = 'http://localhost:3011/billing-front/login/';
        window.open('http://localhost:3011/billing-front/login/', '_blank');

        navigate("/");
      }
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
              <div className="row">
                <div className="col-lg-6  d-none d-lg-block">
                  <img
                    className="border-radius-15 h-75"
                    src="assets/imgs/page/login-1.png"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-8">
                  <div className="login_wrap widget-taber-content background-white">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h1 className="mb-5">Login</h1>
                        <p className="mb-30">
                          Don't have an account?{" "}
                          <Link to={`/signup`}>Create here</Link>
                        </p>
                      </div>
                      <form>
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            type="text"
                            required
                            className={`${
                              errorMsg && !signUpData.email && "border-danger"
                            } `}
                            name="email"
                            placeholder="Username or Email *"
                          />
                          {errorMsg && !signUpData.email && (
                            <span className="text-danger">
                              Email is Required
                            </span>
                          )}
                        </div>
                        <div className="form-group ">
                          <input
                            onChange={handleChange}
                            required
                            className={`${
                              errorMsg &&
                              !signUpData.password &&
                              "border-danger"
                            } `}
                            type="password"
                            name="password"
                            placeholder="Your password *"
                          />
                          {errorMsg && !signUpData.password && (
                            <span className="text-danger">
                              Password is Required
                            </span>
                          )}
                        </div>

                        <div className="login_footer form-group mb-50">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="checkbox"
                                id="exampleCheckbox1"
                                defaultValue=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheckbox1"
                              >
                                <span>Remember me</span>
                              </label>
                            </div>
                          </div>
                          <a className="text-muted" href="#">
                            Forgot password?
                          </a>
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-heading btn-block hover-up"
                            name="login"
                            onClick={handleSubmit}
                          >
                            Log in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
