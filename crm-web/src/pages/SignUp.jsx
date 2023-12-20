import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

const SignUp = () => {
const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'customer',
    agreeTerms: false,
    agreeVendor: false,
    errors: {}
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, agreeTerms, agreeVendor, ...rest } = formData;

    // Perform validation checks here
    const errors = {};
    if (password !== confirmPassword) {
      errors.password = 'Passwords do not match';
    }
    // ... other validation checks

    if (Object.keys(errors).length === 0) {
      // If no errors, proceed with the API request
      const user = agreeVendor ? { ...rest, role: 'vendor' } : rest;
      try {
        // Make axios request to your API
        const response = await axios.post('http://localhost:5000/fruit/user', user);
        // Handle success - redirect based on conditions
        if (agreeVendor) {
          navigate('/add-vendor-data')
        } else {
          navigate('/login')
          // Navigate to 
        }
      } catch (error) {
        // Handle API request error
      }
    } else {
      setFormData({
        ...formData,
        errors
      });
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
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div className="form-group">
                          <input
                          onChange={handleChange}
                            type="text"
                            required=""
                            name="name"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                          onChange={handleChange}
                            type="email"
                            required
                            name="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                          onChange={handleChange}
                            type="number"
                            required
                            name="phone"
                            placeholder="Phone Number"
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
                          onChange={handleChange}
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <input
                          onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder="Confirm password"
                          />
                        </div>
                        <div className="login_footer form-group mb-10">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                              onChange={handleChange}
                                className="form-check-input"
                                type="checkbox"
                                name="role"
                                id="exampleCheckbox123"
                                defaultValue=""
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
                            onClick={handleSubmit}
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
