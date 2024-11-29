require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

const createUsers = async () => {
  await connectDB();

  try {
    // Check if users already exist
    const existingBuyer = await User.findOne({ username: 'testbuyer' });
    const existingVendor = await User.findOne({ username: 'testvendor' });

    if (!existingBuyer) {
      // Create a buyer
      const buyer = new User({
        username: 'testbuyer',
        password: await bcrypt.hash('buyerpassword', 10),
        role: 'buyer'
      });
      await buyer.save();
      console.log('Default buyer created');
    } else {
      console.log('Default buyer already exists');
    }

    if (!existingVendor) {
      // Create a vendor
      const vendor = new User({
        username: 'testvendor',
        password: await bcrypt.hash('vendorpassword', 10),
        role: 'vendor'
      });
      await vendor.save();
      console.log('Default vendor created');
    } else {
      console.log('Default vendor already exists');
    }

  } catch (error) {
    console.error('Error creating default users:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

createUsers();