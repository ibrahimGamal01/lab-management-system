const express = require("express");

const reservationController = require("../controllers/reservation");

const router = express.Router();

// Get all reservations
router.get("/", reservationController.getReservations);

// Create a new reservation
router.post("/", reservationController.createReservation);

// Get a single reservation
router.get("/:reservationId", reservationController.getReservation);

// Update a reservation
router.patch("/:reservationId", reservationController.updateReservation);

// Delete a reservation
router.delete("/:reservationId", reservationController.deleteReservation);

module.exports = router;
