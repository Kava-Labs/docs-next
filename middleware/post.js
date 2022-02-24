const { rmSync, existsSync } = require("fs"); 
const { resolve } = require("path");



const docModulesPath = resolve(__dirname, '..', 'pages', 'cosmos', 'modules'); 
const docsToolsPath = resolve(__dirname, '..', 'pages', 'tools'); 
const docsBuildingPath = resolve(__dirname, '..', 'pages', 'building'); 
(
    function(){
        existsSync(docModulesPath) && rmSync(docModulesPath, { recursive : true});
        existsSync(docsToolsPath) && rmSync(docsToolsPath, { recursive : true});
        existsSync(docsBuildingPath) && rmSync(docsBuildingPath, { recursive : true});
    }
)();