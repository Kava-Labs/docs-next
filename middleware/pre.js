const {existsSync, mkdirSync, readdirSync, rmSync, readFileSync, writeFileSync} = require("fs"); 
const { execSync } = require("child_process");
const { resolve } = require("path");

const kavaDirPath = resolve(__dirname, '..', 'kava'); 
const baseGitURL = 'https://raw.githubusercontent.com/Kava-Labs';


// resolves to a module spec sub dir inside the kava reop 
const moduleSpecFolderPath = (moduleName) => resolve(kavaDirPath, 'x', moduleName, 'spec'); 

// resolves to a module spec file inside the kava repo 
const moduleSpecFilePath = (moduleName, file) => resolve(kavaDirPath, 'x', moduleName, 'spec', file); 

// clones the main kava repository 
function cloneKavaRepo(){
    // ensure that it doesn't exist first, which it shoudn't unless the process didn't exit gracefully on the last run and post.js wasn't ran or pre.js failed 
    existsSync(kavaDirPath) && rmSync(kavaDirPath, {recursive: true}); 

    // runs a command in a child process in this case a git command 
    execSync('git clone https://github.com/Kava-Labs/kava.git', {cwd: resolve(__dirname, '..')});
};

// convert the md file to mdx and inject into Main component such that it renders properly with the React components 
function toMDX(md, destinationPath, isPath = true){
    // those two snippets allow us to render the markdown inside of the defined template 
    const importSnippet = `import Main from 'components/Main';\n\n`;
    const exportSnippet = `\n\nexport default ({children}) => <Main>{children}</Main>`; 

    let fileContent;
    if (isPath){
        fileContent = readFileSync(md).toString().replace(/<!--.*-->/gms, '\n'); 
    } else {
        fileContent = md;
    }
   

    writeFileSync(destinationPath, importSnippet + fileContent + exportSnippet);
};

function extractDocsFromKavaRepo(){
    const modulePaths = readdirSync(resolve(kavaDirPath, 'x'));
    const docDestinationPath = resolve(__dirname, '..', 'pages', 'cosmos', 'modules');

    if (!existsSync(docDestinationPath)){
        mkdirSync(docDestinationPath); 
    } else {
        // stale docs 
        // usually happens when the proccess didn't exit gracefully
        // in that case remove and remake an empty dir 
        rmSync(docDestinationPath, {recursive : true});
        mkdirSync(docDestinationPath); 
    }

    for (const moduleName of modulePaths){
        // if the module contains a subdir with name spec then it contains documentaion we would want to copy 
        if (existsSync(moduleSpecFolderPath(moduleName))){

            // make a directory matching the module name in our destination folder 
            mkdirSync(resolve(docDestinationPath, moduleName));

            // traverse the files inside the module spec looking for markdown files 
            readdirSync(moduleSpecFolderPath(moduleName)).forEach((file)=>{
            
                // if the current subdir file ends with an .md let's copy it and paste it inside our destination subdir named after our module 
                if (file.endsWith(".md")){
                    toMDX(moduleSpecFilePath(moduleName, file), resolve(docDestinationPath, moduleName, `${file}x`));
                };

            });
        };

    };

    // removes the kava repo once we are done extracting the docs from it
    // ensure it exists before removing to avoid errors
    //(it should exist but just incase... usually happens when the proccess didn't exit gracefully) and post.js wasn't ran
    existsSync(kavaDirPath) && rmSync(kavaDirPath, { recursive : true}); 
}; 

function fetchJavascriptSDKDocs(){
    // route name will be the sub dir name inside the pages directory 
    const jsSDKRepoName = "javascript-sdk";
    const branch = "master"; 
    const routeName = 'building';
    const docFileName = 'javascriptSDK.md';
    const outDir = resolve(__dirname, '..', 'pages', routeName);
    // remove dir if it exists
    if (existsSync(outDir)){
        rmSync(outDir, { recursive : true})
    };
    // make a fresh empty directory 
    mkdirSync(outDir); 

    const md = execSync(`curl ${baseGitURL}/${jsSDKRepoName}/${branch}/README.md`);

    toMDX(md.toString(), `${outDir}/${docFileName}x`, false);
}; 


function fetchToolsDocs(){
    const routeName = "tools";
    const branch = "master"; 
    const kavaToolsRepo = "kava-tools";
    const goToolsRepo = "go-tools";
    const toolDocs = ['auction', 'oracle'];
    const goToolDocs = ['sentinel'];
    const outDir = resolve(__dirname, '..', 'pages', routeName);
  
    // remove dir if it exists
    if (existsSync(outDir)){
        rmSync(outDir, { recursive : true})
    };
    // make a fresh empty directory 
    mkdirSync(outDir); 

    toolDocs.forEach(doc => {
        const md = execSync(`curl ${baseGitURL}/${kavaToolsRepo}/${branch}/${doc}/README.md`);
        toMDX(md.toString(), `${outDir}/${doc}.mdx`, false);
    }); 


    goToolDocs.forEach(doc => {
        const md = execSync(`curl ${baseGitURL}/${goToolsRepo}/${branch}/${doc}/README.md`);
        toMDX(md.toString(), `${outDir}/${doc}.mdx`, false);
    })

}; 




(
    function(){
        // colorful logs to make life prettier 
        const magentaLog = "\x1b[35m";
        const greenLog   = "\x1b[32m";

        console.log(magentaLog,'fetching remote docs ...');
        cloneKavaRepo();
        extractDocsFromKavaRepo();
        fetchJavascriptSDKDocs();
        fetchToolsDocs();
       
        console.log(greenLog, 'success... fetched all remote docs');
    }
)();