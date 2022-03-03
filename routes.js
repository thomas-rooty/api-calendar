const express = require('express');
const Event = require('./Event');
const router = express.Router();

// Get all events
router.get('/events', async (req, res) => {
    try {
        const events = await Event.find();
        // console.log each events _id
        res.json(events);
    } catch (err) {
        res.json({message: err});
    }
});

// Get an event by id
router.get('/events/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        console.log(event);
        res.json(event);
    } catch (err) {
        res.json({message: err});
    }
});

// Delete an event by _id
router.delete('/events/delete/:id', async (req, res) => {
    try {
        const removedEvent = await Event.deleteOne({_id: req.params.id});
        res.json(removedEvent);
    } catch (err) {
        res.json({message: err});
    }
});

// Create an event with title, start and end
router.post('/events', async (req, res) => {
    const event = new Event({
        title: req.body.title,
        content: req.body.content,
        start: req.body.start,
        end: req.body.end
    });
    try {
        const savedEvent = await event.save();
        res.json(savedEvent);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;