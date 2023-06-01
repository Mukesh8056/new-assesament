// 3.Example for Promise.all, resolve, and reject:

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 2000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2 resolved');
    }, 1000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise 3 rejected');
    }, 1500);
  });
  
  Promise.all([promise1, promise2])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.log(error);
    });

    //4.Example for Aggregate Lookup property:

    const User = require('./models/User');
const Post = require('./models/Post');

Post.aggregate([
  {
    $lookup: {
      from: 'users',
      localField: 'userId',
      foreignField: '_id',
      as: 'user',
    },
  },
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });


  //5.Example for populating an array field (where the ref id is shown in an array):

  const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
});

const postSchema = new mongoose.Schema({
  title: String,
  userIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

Post.findOne()
  .populate('userIds')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

  //6.Socket emit and on function example including socket connection:

  const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('A user connected.');

  // Emit an event to the connected client
  socket.emit('greeting', 'Welcome to the chat app!');

  // Listen for events from the client
  socket.on('message', (data) => {
    console.log('Received message:', data);

    // Broadcast the message to all connected clients
    socket.broadcast.emit('message', data);
  });

  // Disconnect event
  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  });
});

//7.Adding indexing for Schemas with output:

const mongoose = require('mongoose');

const userSchema1 = new mongoose.Schema({
  name: { type: String, index: true },
  email: { type: String, index: true, unique: true },
});

const User1 = mongoose.model('User', userSchema);

User.createIndexes()
  .then(() => {
    console.log('Indexes created successfully.');
  })
  .catch((error) => {
    console.log('Error creating indexes:', error);
  });
