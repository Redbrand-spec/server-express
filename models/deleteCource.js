const ShemaCource = require('../shema/cources')
const path = require('path')
const fs = require('fs')

module.exports.DeleteCource = async ( req, res ) => {
  try {
    const URL = '../public/img/' + req.body.url

    fs.unlinkSync(path.resolve(__dirname, URL ))

    await ShemaCource.deleteOne({_id: req.body.id})
    .then(() =>{
      res.status(200).json()
    })
    .catch(() =>  res.status(400).json())
  } catch (e) {
    res.status(400).json({err: e})
  }
  
} 