import mongoose from "mongoose";

const searchedHospitalSchema = new mongoose.Schema({
  HospitalID: {
    type: String,
  },
  HospitalName: {
    type: String,
  },
  City: {
    type: String,
  },
  State: {
    type: String,
  },
  TotalDoctors: {
    type: Number,
  },
  TotalBeds: {
    type: Number,
  },
  TotalSpecialities: {
    type: Number,
  },
  MortalityRate: {
    type: Number,
  },
  CleanlinessScore: {
    type: Number,
  },
  Stars: {
    type: Number,
  },
  SpecialitiesName: {
    type: [String],
  },
  GeneralRoomCost: {
    type: String,
  },
  GeneralNumRooms: {
    type: Number,
  },
  GeneralRoomsOccupied: {
    type: Number,
  },
  GeneralAvailableRooms: {
    type: Number,
  },
  SemiPrivateRoomCost: {
    type: String,
  },
  SemiPrivateNumRooms: {
    type: Number,
  },
  SemiPrivateRoomsOccupied: {
    type: Number,
  },
  SemiPrivateAvailableRooms: {
    type: Number,
  },
  PrivateRoomCost: {
    type: String,
  },
  PrivateNumRooms: {
    type: Number,
  },
  PrivateRoomsOccupied: {
    type: Number,
  },
  PrivateAvailableRooms: {
    type: Number,
  },
});

const SearchedHospital = mongoose.model('SearchedHospital', searchedHospitalSchema);

export { SearchedHospital };
