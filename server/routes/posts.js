const router = require('express').Router();
const Post = require('../models/post');

const API_ERROR =
  JSON.stringify({
    error: true,
    message: 'Internal Server Error:',
    resource: 'posts',
    status: 500
  });

router.use((req, res, next) => {
  res.set('Content-type', 'application/json');

  next()
})

router.get('/posts', function (req, res) {
  Post.all()
    .then((data) => res.send(JSON.stringify(data)))
    .catch(() => res.status(500).send(API_ERROR))
})

router.get('/posts/:id', function (req, res) {
  Post.find(req.params.id)
    .then((data) => res.send(JSON.stringify(data)))
    .catch(() => res.status(500).send(API_ERROR))
})

router.post('/posts',
  function (req, res) {
    console.log(req.user);
    Post.create(Object.assign(req.body, {user_id: 1}))
      .then((data) => res.send(JSON.stringify(data)))
      .catch((err) => res.status(500).send(err))
})



module.exports = router;
