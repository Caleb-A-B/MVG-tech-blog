const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
 const routes = require('./controllers');
 const helpers = require('./utils/helpers')

 const sequelize = require('./config/connections');
 const sequelizeStore = require('connect-session-sequelize')(session.Store);

 const app = express();
 const PORT = process.env.PORT || 3001;


 //attempt at setting up mustaches

 const hbs = exphbs.create({ helpers });

 const sess = {
    secret: 'Super secret magic',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequalizeStore({
        db: sequelize
    })
 };

 app.use(session(sess));

 //id express pn whicxh template

 app.engine('handlebars', hbs.engine);
 app.set('view engine', 'handlebars');

 app.use(express.json());
 app/use(express.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, 'public')));

 app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});