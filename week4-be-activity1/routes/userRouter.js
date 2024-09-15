const express = require("express");
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/userController");

// GET /blogs
router.get("/", getAllUsers);

// POST /blogs
router.post("/", getUserById);

// GET /blogs/:blogId
router.get("/:userId", createUser);

// PUT /blogs/:blogId
router.put("/:userId", updateUser);

// DELETE /blogs/:blogId
router.delete("/:userId", deleteUser);

module.exports = router;
