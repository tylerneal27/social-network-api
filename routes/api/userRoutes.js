const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  deleteUser,
  getUser,
  updateUser,
  createFriend,
  deleteFriend
} = require('../../controllers/userController.js');


router.route("/").get(getAllUsers).post(createUser);

router
  .route("/:userId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/:userId/friends/:friendId").post(createFriend).delete(deleteFriend);

module.exports = router;
