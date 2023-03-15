const Reservation = require("../models/reservation");

// Get all reservations
exports.getReservations = (req, res) => {
  Reservation.find({}, (error, reservations) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(200).send(reservations);
  });
};

// Create a new reservation
exports.createReservation = (req, res) => {
  const newReservation = new Reservation(req.body);
  newReservation.save((error, reservation) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(201).send(reservation);
  });
};

// Get a single reservation
exports.getReservation = (req, res) => {
  Reservation.findById(req.params.reservationId, (error, reservation) => {
    if (error) {
      return res.status(500).send(error);
    }
    if (!reservation) {
      return res.status(404).send({ message: "Reservation not found" });
    }
    return res.status(200).send(reservation);
  });
};

// Update a reservation
exports.updateReservation = (req, res) => {
  Reservation.findByIdAndUpdate(
    req.params.reservationId,
    req.body,
    { new: true },
    (error, reservation) => {
      if (error) {
        return res.status(500).send(error);
      }
      if (!reservation) {
        return res.status(404).send({ message: "Reservation not found" });
      }
      return res.status(200).send(reservation);
    }
  );
};

// Delete a reservation
exports.deleteReservation = (req, res) => {
  Reservation.findByIdAndDelete(
    req.params.reservationId,
    (error, reservation) => {
      if (error) {
        return res.status(500).send(error);
      }
      if (!reservation) {
        return res.status(404).send({ message: "Reservation not found" });
      }
      return res
        .status(200)
        .send({ message: "Reservation deleted successfully" });
    }
  );
};
