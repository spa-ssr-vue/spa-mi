module.exports = app => {
  const inflection = require('inflection')

  return (req, res, next) => {
    const resourceName = req.params.resource ? req.params.resource : 'users'
    const modelName = inflection.classify(resourceName)
    req.Model = require(`./../../../libs/db/models/${modelName}`)
    next()
  }
}