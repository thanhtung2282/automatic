exports.config={
    maxInstances: 10,
    specs:[
        './pageObject/test_scripts/LoginFormActionChain.js',
        './pageObject/test_scripts/LoginFormActionChain_2.js',
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