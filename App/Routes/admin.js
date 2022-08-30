module.exports = function (app) { 

    app.get('/formulario_inclusao_noticia', function(req,res){
        res.render("admin/form_add_noticia");
    });

    app.post("/noticias/salvar", function(req,res){
        var noticia = req.body;
        
   
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarnoticia(noticia, function(error, result){
            res.redirect('/noticias');       
        });
    });
}