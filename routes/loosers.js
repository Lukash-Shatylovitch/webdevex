
const express = require('express')
const res = require('express/lib/response')

const router = express.Router()
const Looser = require('../models/looser')

router.get('/', async (req, res) => {
   try {
      const loosers = await Looser.find() 
      req.json(loosers)
   } catch (err) {
       res.status(500),json({message: err.message})
   }
})

router.get('/:id',getLooser, (req, res) => {
    res.send(req.looser.name)

})

router.post('/',async (req, res) => {
    const looser = new Looser ({
        name: req.body.name,
        loosersToChannel: req.body.loosersToChannel
    })
   try {
const newLooser = await looser.save()
        res.status(201).json(newLooser)
   } catch(err) {
        res.status(400).json({message: err.message})
   }

    
})

router.patch('/', (req, res) => {

})

router.delete('/:id',getLooser, async (req, res) => {
try {
    await res.looser.remove()
    res.json({ message: 'Delated Looser'})
} catch (err) {

}
})
async function getLooser (req, res, next) {
    let looser
    try {
        looser =await Looser.findById(req.params.id)
        if (looser == null) {
        return res.status(404).json({message: "Cannot find looser"})
    }
        } catch(err) {
            return res.status(500).json({message: err.message})
        }


res.looser=looser
next()
}

module.exports = router