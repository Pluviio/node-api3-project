const e = require("express")
const { getUserPosts } = require("../users/users-model")

function logger(req, res, next) {

  const timestamp = new Date().toLocaleString()
  const method = req.method
  const url = req.originalUrl

  console.log(`[${timestamp}] $method to ${url}`)
  next()
  //DO YOUR MAGIC
}

function validateUserId(req, res, next) {
  console.log('validateUserId middleware')
  next()
  // DO YOUR MAGIC
  try {
    const userMaybe = await getUserPosts.getById(req.params.id)
    if (userMaybe) {
      req.users = userMaybe
      next()
    } else {
      next({ code: 404, message: "user not found" })
    }
  } catch (error) {
    next(error)
  }
}

function validateUser(req, res, next) {
  console.log('validateUser middleware')
  next()
  // DO YOUR MAGIC
  const { name } = req.body
  if (!name || typeof name !== 'string' || !name.trim()) {
    next({ code: 400, message: "missing required name field" })
  }
} else {
  next()
}



function validatePost(req, res, next) {
  console.log('validatePost middleware')
  next()
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules

moodule.exports = {
  validateUserId,
  validateUser,
  validatePost,
  logger,
}
