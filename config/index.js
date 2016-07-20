var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://'+configValues.uname+':'+configValues.pwd+'@ds023445.mlab.com:23445/node-todo';
    }

}
