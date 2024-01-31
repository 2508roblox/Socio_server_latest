
import { config } from "dotenv";
import { envConfig } from "../constants/config.js";
import mongoose from 'mongoose';

const connectDB = async () => {

  try {
    const conn = await mongoose.connect(`mongodb+srv://${envConfig.dbUsername}:${envConfig.dbPassword}@cluster0.qofi8wl.mongodb.net/?retryWrites=true&w=majority`)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('Failed to connect to MongoDB', error);
      });
    console.log(`MongoDB Connected `);

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;