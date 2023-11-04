import { SearchedHospital } from "../database/SearchedHospitalModel.mjs";
import { connectDB } from "../database/connectDb.mjs";
// Connect to MongoDB
connectDB();

const fetchSearchedHospitals = async function () {
  try {
    const SearchedHospitals = await SearchedHospital.find();
    return SearchedHospitals;  
  } catch (error) {
    return error;
  }
};

export { fetchSearchedHospitals };
