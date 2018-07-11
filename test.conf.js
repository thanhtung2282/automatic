exports.config={
    specs:[
        './test_scripts/manyTab.js'
    ],
    host:'localhost',
    port:9515,
    path:'/',
    capabilities:[
        {
            browserName:'chrome'
        }
    ],
    framework:'mocha',
    mochaOpts:{
        ui:'bdd',
        timeout:600000
    },
    logLevel:'verbose'
}