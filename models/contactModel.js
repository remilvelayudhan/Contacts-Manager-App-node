const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User"
        },
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        phone: {
            type: String,
            required: [true, "Phone is required"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports =mongoose.model("Contact",contactSchema);