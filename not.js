var http = require ('http');

var serve = http.createServer(function(req,res){

    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Notícias de tecnologia</body></html>");
    
    }else if(categoria == '/moda'){
        res.end("<html><body>Notícias de Moda</body></html>");

    }else if(categoria == '/beleza'){
        res.end("<html><body>Notícias de Beleza</body></html>");

    }else {
        res.end("<html><body>Portal de Notícias</body></html>");
    }


}).listen(3000);