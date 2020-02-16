const App = require('./app')
const mongoose = require('mongoose')

const port = parseInt(process.env.PORT, 10) || 4000
mongoose.connect('mongodb+srv://Redbrand:18364123Zz@fullstack-cejs7.gcp.mongodb.net/test',
{ useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('база запущена'))
.catch((e) => console.log(e))

App.listen(port, err => {
  if (err) throw err
  console.log(`-----------------------------------`)
  console.log(`Сервер запущен на порте ---> ${port}`)
  console.log(`-----------------------------------`)
})