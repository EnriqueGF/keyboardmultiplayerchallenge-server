const router = global.router

router.get('/', (req, res) => {
    res.sendFile(global.__basedir + '/views/index/index.html');
});

router.get('/roomsTemplate', (req, res) => {
    res.sendFile(global.__basedir + '/views/index/rooms.html');
});

// Resources
router.get('/resources/custom.css', (req, res) => {
    res.sendFile(global.__basedir + '/resources/custom.css');
});


module.exports = router