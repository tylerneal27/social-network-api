const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  deleteUser,
  getUser,
  updateUser,
  createUser,
  deleteUser
} = require('../../controllers/userController.js');


router.route("/").get(getAllUsers).post(createUser);

router
  .route("/:userId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/:userId/friends").post(createFriend);

router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;
