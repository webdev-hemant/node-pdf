const mongoose = require("mongoose");
const { Schema } = mongoose;

const locationSchema = new Schema({
  city: String,
  state: String,
  country: String,
});

const avatarSchema = new Schema({
  url: String,
});

const socialSchema = new Schema({
  facebook: String,
  twitter: String,
  instagram: String,
});

const profileSchema = new Schema({
  name: String,
  gender: String,
  birthdate: Date,
  location: locationSchema,
  phone: String,
  avatar: avatarSchema,
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: profileSchema,
  social: socialSchema,
  roles: {
    type: [String],
    enum: ["user", "admin"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const displaySchema = new Schema({
  type: String,
  size: Number,
  resolution: String,
});

const processorSchema = new Schema({
  type: String,
  cores: Number,
  clockSpeed: String,
});

const memorySchema = new Schema({
  ram: String,
  storage: String,
});

const cameraSchema = new Schema({
  main: {
    resolution: String,
    aperture: String,
  },
  front: {
    resolution: String,
    aperture: String,
  },
});

const batterySchema = new Schema({
  capacity: String,
  fastCharge: String,
});

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: String,
  subcategories: {
    type: [String],
    index: true,
  },
  brand: String,
  model: String,
  specifications: {
    display: displaySchema,
    processor: processorSchema,
    memory: memorySchema,
    camera: cameraSchema,
    battery: batterySchema,
  },
  images: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const productModel = mongoose.model("Product", productSchema);
const userModel = mongoose.model("User", userSchema);

const orderModel = mongoose.model(
  "Order",
  new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    status: {
      type: String,
      enum: ["processing", "shipped", "delivered"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);

module.exports = {
  Product: productModel,
  User: userModel,
  Order: orderModel,
};
