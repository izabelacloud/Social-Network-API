const router = require('express').Router();
const { getAllThought,
        getThoughtById,
        addThought, 
        updateThought,
        removeThought,
        addReaction,
        removeReaction
} = require('../../controllers/thought-controller');


// /api/thoughts
router
  .route('/')
  .get(getAllThought)
  .post(addThought)

// /api/thoughts/<userId>
router
.route('/:userId')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought)

//reaction routes 
router
.route('/:id/reaction')
.post(addReaction)

router
.route('/:id/reaction/:reactionId')
.delete(removeReaction);


module.exports = router;