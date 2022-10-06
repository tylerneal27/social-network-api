const router = require("express").Router();
const {
  getAllThoughts,
  createThought,
  deleteThought,
  getThought,
  updateThought,
  createReaction,
  deleteReaction
} = require("../../controllers/thoughtController");

router.route("/").get(getAllThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(createReaction);

router.route("/:thoughtId/reaction/:reactionId").delete(deleteReaction);

module.exports = router;
