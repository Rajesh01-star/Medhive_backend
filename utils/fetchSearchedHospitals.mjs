import { SearchedHospital } from "../database/SearchedHospitalModel.mjs";
import { connectDB } from "../database/connectDb.mjs";
// Connect to MongoDB
connectDB();

const fetchSearchedHospitals = async function (initials) {
  try {
    // Use initials to filter hospitals that match the provided initials
    const SearchedHospitals = await SearchedHospital.find({ HospitalName: { $regex: `^${initials}`, $options: 'i' } });
    return SearchedHospitals;
  } catch (error) {
    return error;
  }
};

export { fetchSearchedHospitals };
