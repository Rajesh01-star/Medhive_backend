import express from "express";
import cors from "cors";

import { connectDB } from "./database/connectDb.mjs";
import { fetchHospitals } from "./utils/fetchHospitals.mjs";
import { fetchNews } from "./utils/fetchNews.mjs";
import { fetchIndividualHospital } from "./utils/fetchIndividualHospital.mjs";
import { Hospital } from "./database/model.mjs";
import { SearchedHospital } from "./database/SearchedHospitalModel.mjs";
import { fetchSearchedHospitals } from "./utils/fetchSearchedHospitals.mjs";

const app = express();
const port = process.env.PORT || 4000; // Use the cors middleware
app.use(cors());

// Connect to MongoDB
connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/hospitals", async (req, res) => {
  const fetchedHospitals = await fetchHospitals();
  res.send(fetchedHospitals);
});

app.get("/Hospitaldetails", async (req, res) => {
  const id = req.query.ID;
  res.setHeader("Cache-Control", "no-store");
  try {
    const response = await fetchIndividualHospital(id);
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response));
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/News", async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  try {
    const response = await fetchNews();
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(response));
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// app.get("/createSearchHospitalsCollection", async (req, res) => {
//   try {

//     // Assuming "hospitalsArr" contains the data you want to save
//     const hospitalsToSave = hospitalsArr;

//     // Use the SearchHospitals model to insert the data into your database
//     const savedHospitals = await SearchedHospital.insertMany(hospitalsToSave);

//     res.status(200).json({ message: "searchHospitals collection created and data saved successfully", data: savedHospitals });
//   } catch (err) {
//     res.status(500).json({ error: "Internal Server Error" });
//     console.log(err);
//   }
// });

app.get("/getSearchHospitals", async (req, res) => {
  try {
    const initials = req.query.initials; // Get initials from the request
    const searchedHospitals = await fetchSearchedHospitals(initials);
    const matchingHospitalNames = searchedHospitals.map(hospital => hospital.HospitalName);
    console.log(matchingHospitalNames);
    res.status(200).json(matchingHospitalNames);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(err);
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
