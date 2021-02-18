var configValues = require("./config");

module.exports = {

    getDbConnectionString : function(){
        return 'mongodb+srv://'+ configValues.username +":"+  configValues.password+"@cluster0.7u4mv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    ;}
    
}