const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        selected: false
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "vendor", "customer"], // Modify or expand the roles as needed
        default: "customer" // Set a default role if needed
    },
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        postalCode: String
    },
    vendorInfo: {
        vendorId: String,
        storeName: String
        // Add more vendor-specific details if required
    },
    profilePicture: String, // URL or file path for profile picture
    paymentInfo: {
        paymentMethods: [String] // Array of payment methods
        // Add more payment-related details if needed
    },
    additionalContacts: [{
        type: String, // Type of contact (e.g., "phone", "email", "social")
        value: String // Contact value (e.g., phone number, email address, social media handle)
    }]
});

module.exports = mongoose.model("users", userSchema);
