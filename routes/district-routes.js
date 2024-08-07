/* imports */
const express = require("express");
const router = express.Router();
const districtControllers = require("../controllers/district-controllers");
const { check } = require("express-validator");

/*
 * GET to get all districts in the DB
 */
router.get("/all", districtControllers.getAllDistricts);

/*
 * GET for a specific district given district number
 */
router.get("/zipcode/:ZipCode", districtControllers.getDistrictByZipCode);

/*
 * POST for creating new place (has validation via check())
 */
router.post(
  "/",
  [
    check("districtNumber").not().isEmpty(),
    check("districtName").not().isEmpty(),
    check("districtZipCode").not().isEmpty(),
  ],
  districtControllers.createDistrict
);

// export
module.exports = router;
