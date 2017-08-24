exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Tests/GoogleTest.js'],
    capabilities: {
        'browserName': 'firefox',
        'args': ['--window-size=800,600']
    }
};