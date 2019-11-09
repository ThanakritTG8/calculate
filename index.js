const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://72c8c5ff156e4006895a1c87a0087f70@sentry.io/1814035'});

Sentry.configureScope(function(scope) {
    scope.setTag("my-tag", "6030213040");
    scope.setUser({
      email: "john.doe@example.com",
      username: 'Thanakrit Thongkhamdee'
    });
   });
   
const calculator = require('./calculate');



myUndefinedFunction();


