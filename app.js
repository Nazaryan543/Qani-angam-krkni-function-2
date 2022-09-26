
const http = require('http');

const server = http.createServer(function(req, res){
    for (i=1; i <=20; i++) {
        res.write("NUMBER" + i +" - " + randomTiv(1,100000)+"\n");

    }

    res.end();
})
 
server.listen(5050)
//sarqel em function vory katarum e hertakan gorcoxutyun ev nran tvel em 3 arjeq   1. qanisic sksi
function randomTiv(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }    
