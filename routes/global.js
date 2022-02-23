const router = global.router

router.get('/', (req, res) => {
    res.sendFile(global.__basedir + '/index.html');
});

module.exports = router