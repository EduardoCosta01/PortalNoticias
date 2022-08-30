function NoticiasDAO(connection){
    this._connection = connection
}

NoticiasDAO.prototype.getnoticias =function(callback){
    this._connection.query('select * from noticias', callback); 
};

NoticiasDAO.prototype.getnoticia =function(callback){
    this._connection.query('select * from noticias where id = 2', callback);
};

NoticiasDAO.prototype.salvarnoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ?', noticia, callback);
}

module.exports = function(){
    return NoticiasDAO;
};