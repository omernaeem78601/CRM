import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequestPartner = () => {
  const navigate = useNavigate();
  const initialValue = {
    reqRole: "",
    subRole: "",
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
  };
  const [errorMsg, setErrorMsg] = useState(false);
  const [request, setRequest] = useState(initialValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("address")) {
      setRequest({
        ...request,
        address: {
          ...request.address,
          [name.split(".")[1]]: value,
        },
      });
    } else {
      setRequest({
        ...request,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!request.reqRole || !request.subRole || !request.address) {
      setErrorMsg(true);
      return false;
    }
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/fruit/user/edit`,
        request,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/");
      toast.success("Request Send");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const DashboardRoute = () => {
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
                  <Link onClick={DashboardRoute}>Login to Dashboard</Link>
                </p>
              </div>
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div>
                          <label htmlFor="street" className="required">
                            Partner Program
                          </label>
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

                        <label htmlFor="street">Address</label>
                        <div className="form-group">
                          <label htmlFor="street">Street</label>
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg &&
                              !request.address.street &&
                              "border-danger"
                            } `}
                            type="text"
                            required
                            name="address.street"
                            placeholder="Street"
                          />
                          {errorMsg && !request.address.street && (
                            <span className="text-danger">
                              Please Enter Street
                            </span>
                          )}
                        </div>

                        <div className="form-group">
                          <label htmlFor="city">City</label>
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg &&
                              !request.address.city &&
                              "border-danger"
                            } `}
                            type="text"
                            required=""
                            name="address.city"
                            placeholder="City"
                          />
                          {errorMsg && !request.address.city && (
                            <span className="text-danger">
                              Please Enter City
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        {request.reqRole === "agriculture" ? (
                          <>
                            <div>
                              <label htmlFor="street" className="required">
                                Agriculture Categories
                              </label>
                              <select
                                className="form-select mb-10 p-3"
                                name="subRole"
                                onChange={handleChange}
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
                                <label htmlFor="street" className="required">
                                  Logistics Categories
                                </label>
                                <select
                                  className="form-select mb-10 p-3"
                                  name="subRole"
                                  onChange={handleChange}
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

                        <label htmlFor="address">Address</label>
                        <div className="form-group">
                          <label htmlFor="state">State</label>
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg &&
                              !request.address.state &&
                              "border-danger"
                            } `}
                            type="text"
                            required=""
                            name="address.state"
                            placeholder="State"
                          />
                          {errorMsg && !request.address.state && (
                            <span className="text-danger">
                              Please Enter State
                            </span>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="country">Country</label>
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg &&
                              !request.address.country &&
                              "border-danger"
                            } `}
                            type="text"
                            required
                            name="address.country"
                            placeholder="Country"
                          />
                          {errorMsg && !request.address.country && (
                            <span className="text-danger">
                              Please Enter Country
                            </span>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="postalCode">Postal Code</label>
                          <input
                            onChange={handleChange}
                            className={`${
                              errorMsg &&
                              !request.address.postalCode &&
                              "border-danger"
                            } `}
                            type="number"
                            required
                            name="address.postalCode"
                            placeholder="Postal Code"
                          />
                          {errorMsg && !request.address.postalCode && (
                            <span className="text-danger">
                              Please Enter Postal Code
                            </span>
                          )}
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
