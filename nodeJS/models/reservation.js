const mongoose = require("mongoose");

class Reservation {
  constructor() {
    this.reservationSchema = new mongoose.Schema({
      ReservationNumber: {
        type: Number,
        required: true,
      },
      UniversityID: {
        type: Number,
        required: true,
      },
      DeviceID: {
        type: Number,
        required: true,
      },
      LabID: {
        type: Number,
        required: true,
      },
      ReservationTime: {
        type: String,
        required: true,
      },
      ReservationDate: {
        type: String,
        required: true,
      },
      ReservationPurpose: {
        type: String,
        required: true,
      },
      approval: {
        type: Boolean,
        default: false,
      },
    });
    this.model = mongoose.model("Reservation", this.reservationSchema);
  }

  getModel() {
    return this.model;
  }
}

module.exports = Reservation;
