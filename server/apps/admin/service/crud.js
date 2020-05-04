module.exports = {
  create(Model, item) {
    const data = Model.create(item);
    return data;
  },
};
