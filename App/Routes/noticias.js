module.exports = function (app) { 

        app.get('/noticias', function(req,res){

            var connection = app.config.dbConnection();
            var noticiasModel = new app.app.models.NoticiasDAO(connection);

            noticiasModel.getnoticias(function(error, result){
                if(error)
                console.log(error)            
                res.render('noticias/noticias', {noticias : result}); 
            });
        });  
    
};