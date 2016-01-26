module.exports = {

  '/api/example': require('./controllers/ExampleController'),

  '/api/people' : require('./controllers/People'),

  '/api/images' : require('./controllers/Image'),

  './api/quotes': require('./controllers/Quotes'),

  '/api/brainyQuoteScrape' : require('./scrapers/brainyQuoteScraper')


};