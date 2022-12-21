const router = require('express').Router()
const model = require('../database/models')
router.get('signup', async (req, res) => {
    const { user } = model()
    if (await user.find({ email: req?.body?.email })) return res.status(402).json({ data: 'already avilable' })
    else {
        await user.save(req.body)
        res.status(200).json({ data: 'signup success full' });
    }
})
module.exports = router;