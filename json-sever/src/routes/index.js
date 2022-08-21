const newsRouter = require('./news');
const homeRouter = require('./home');

function route(app) {
    // app.get('/', (req, res) => {
    //     //res.send('Hello World!')
    //     res.render('home');
    // });
    app.use('/news', newsRouter);
    
    app.use('/home', homeRouter);
      
    // app.post('/', (req, res) => {
    //     //res.send('Không tìm thấy kết quả bạn đang tìm kiếm !')
    //     res.render('news');
    // });
};

module.exports = route;
