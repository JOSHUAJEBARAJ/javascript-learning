// it has the input  and output file

const path = require('path')
module.exports = {
    entry: './src/index.js',
    output:{
// path takes the abosulute
path: path.resolve(__dirname,'dist/assets'),
filename: 'bundle.js'

    },
    // two parameter
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        publicPath: '/assets/'

    }


};


// __dirname -> gives the 