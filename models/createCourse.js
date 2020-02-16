const ShemaCource  = require('../shema/cources')

module.exports.create = async (req, res) => {
  const Data = new ShemaCource({
    cource: req.body.course,
    price: req.body.price,
    text: req.body.text,
    url: req.file.filename,
  })
  await Data.save()
  .then(() =>  res.status(200).json() )
  .catch(() =>  res.status(400).json() )
}