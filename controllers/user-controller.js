const { User } = require('../models');

// Get all users
const UserController = {
  getAllUsers(req, res) {
    User.find({})
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

// Get one user by ID
  getUserById(req, res) {
    User.findById(req.params.userId)
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },
  
// Create a user
  createUser(req, res) {
    User.create(req.body)
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

// Update a user 
  updateUserById(req, res) {
    User.findOneAndUpdate(req.params.id, req.body, { new: true })
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User unknown' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  },

// Delete a user 
  deleteUserById(req, res) {
    User.findOneAndDelete(req.params.id)
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User unkown' });
        }
        res.json({ message: 'User successfully deleted' });
      })
      .catch(err => res.status(500).json(err));
  },

// Add friend to friend list
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body.friendId || req.params.friendId} },
      { new: true }
    )
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User unknown' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  },


// Delete friend from  friend list

  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "User Unkown" });
        }
        const removed = !dbUserData.friends.includes(params.friendId);

        // return response with appropriate message if friend was removed
        if (removed) {
          res.json({ message: "Friend successfully removed!", dbUserData });
        } else {
          res.json(dbUserData);
        }
      })
      .catch((err) => res.status(400).json(err));
  },
};


// Export User-Controller

module.exports = UserController;