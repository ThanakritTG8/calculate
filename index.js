const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://72c8c5ff156e4006895a1c87a0087f70@sentry.io/1814035' });

const calculator = require('./calculate');

myUndefinedFunction();