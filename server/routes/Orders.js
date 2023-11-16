const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/", (req, res) => {
    orderController.displayAllOrders(req, res);
    }
);

router.get("/:id", (req, res) => {
    orderController.displayOrder(req, res);
    }
);

router.post("/", (req, res) => {
    orderController.addOrder(req, res);
    }
);

//update assignedTo field only in the order
router.put("/:id", (req, res) => {
    orderController.updateAssignedTo(req, res);
    }
);

module.exports = router;