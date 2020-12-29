const express = require('express');
const router = express.Router();

const {requireSignin, adminMiddleware}= require('../controllers/auth');


const {runValidation} = require('../validators');
const {createTagValidator} = require('../validators/tag');

router.post('/tag', createTagValidator, runValidation, requireSignin, adminMiddleware, create);
router.get('/tags', list);
router.get('/tag/:slug', read);
router.remove('/tag/:slug', requireSignin, adminMiddleware, remove);

module.exports = router;
