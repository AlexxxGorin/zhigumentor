const Router = require('express')
const router = new Router()
const mentorsController = require('../controller/mentors.controller')

router.post('/mentors', mentorsController.createMentor)
router.get('/mentors', mentorsController.getMentors)
router.get('/mentors/:id', mentorsController.getOneMentor)
router.put('/mentors/:id', mentorsController.updateMentor)
router.delete('/mentors/:id', mentorsController.deleteMentor)


module.exports = router