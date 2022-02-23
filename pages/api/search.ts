import {IncomingMessage, ServerResponse} from 'http';


function search (req : IncomingMessage, res : ServerResponse){
    res.statusCode = 200; 
    res.setHeader('content-Type', 'application/json'); 
    res.end(JSON.stringify({
        "sample" : "response",
    }));
};

export default search;