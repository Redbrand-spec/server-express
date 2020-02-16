const ShemaCource = require('../shema/cources')

module.exports.get = async (req, res) => {
  await ShemaCource.find()
  .then(req =>  res.status(200).json({ cources: req}) )
  .catch(() =>  res.status(400).json({mess: 'ошибка'}) )
}