const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    selected: false,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [
      "admin", 
      "vendor",
      "farmer",
      "golden_member",
      "wholesaler",
      "agriculture",
      "logistics",
      "machinery",
      "seeds",
      "rawMaterial",
      "landBrokers",
      "transport",
      "account",
      "customer",
    ],
    default: "customer",
  },
  reqRole: {
    type: String,
    enum: [
      "admin", 
      "vendor",
      "farmer",
      "golden_member",
      "wholesaler",
      "agriculture",
      "logistics",
      "customer",
    ],
    default: "customer",
  },
  subRole: {
    type: String,
    enum: [
      "machinery",
      "seeds",
      "rawMaterial",
      "landBrokers",
      "transport",
      "account",
      "customer",
    ],
    default: "customer",
  },
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  vendorInfo: {
    vendorId: String,
    storeName: String,
  },
  profilePicture: String,
  paymentInfo: {
    paymentMethods: [String],
  },
  additionalContacts: [
    {
      type: String,
      value: String,
    },
  ],
},
{ timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
