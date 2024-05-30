const express = require("express");
const router = express.Router();
const motorcycleController = require("../controllers/motorcycleController");

router.get("/", motorcycleController.crud_index);
router.post("/", motorcycleController.crud_create_post);
router.get("/:id", motorcycleController.crud_details);
router.patch("/:id", motorcycleController.crud_update);
router.delete("/:id", motorcycleController.crud_delete);

module.exports = router;
