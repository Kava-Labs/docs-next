const { rmSync, existsSync } = require("fs"); 
const { resolve } = require("path");



const docModulesPath = resolve(__dirname, '..', 'pages', 'modules'); 

(
    function(){
        existsSync(docModulesPath) && rmSync(docModulesPath, { recursive : true});
    }
)();