module.exports = app => {
  require('./option')(app)
  require('./upload')(app)
  require('./crud')(app)
}