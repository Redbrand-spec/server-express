const { Router } = require('express')
const router = Router()
const Upload = require('./midlleware/ImgLoader')
const Create = require('./models/createCourse')
const GetCource = require('./models/getCources')
const DeleteCource = require('./models/deleteCource')

router.post('/create',Upload.single('img'), Create.create)
router.get('/get', GetCource.get)
router.post('/delete', DeleteCource.DeleteCource)

module.exports = router