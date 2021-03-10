const express = require('express')
const path = require('path')
const proxy = require('express-http-proxy');
const app = express();
app.engine('.html', require('ejs').__express);

app.use('/api', proxy('http://www.***.com', {
    proxyReqPathResolver: function(req, res) {
        return req.originalUrl.replace(/\api/, '');
    },
    proxyReqOptDecorator: function(proxyReq, originalReq) {
        if (!proxyReq.headers['sign']) {
            proxyReq.headers['sign'] = 'RwKLJ+e4UGwgdsPQQxUAP/aBXcRQrM3/y1QQGAmWWZ8=';
        };
        proxyReq.headers['apptype'] = 'pc';
        return proxyReq;
    }
}));

app.use(express.static(path.join(__dirname, 'build')));
app.use('*', function (req,res) {
    res.render(path.join(__dirname+'/build/index.html'))
});

var server = app.listen(2020, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
/*
/www/server/panel/vhost/apache
1326px
*/