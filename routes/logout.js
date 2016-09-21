'use strict';

const { Router } = require('express')
const router = Router()
const { destroy, edit } = require('../controllers/logout')

router.post('/logout', destroy)
router.get('/logout', edit)

module.exports = router