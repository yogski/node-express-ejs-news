const logger = require('./logger')

const errorHandler = (err, req, res, next) => {
  logger.error(err.message)
  res.json({ error: err.message })
  next(err)
}
