// Dependencies imported
const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// Get and Post all users
router.route('/').get(getAllUsers).post(createUser);

// Get user id, Put update for user id, delete user by id


router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);
// Post add friend and Delete friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

// Export router
module.exports =router;