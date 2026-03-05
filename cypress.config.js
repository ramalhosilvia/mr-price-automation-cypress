// const { defineConfig } = require("cypress");

// // module.exports = defineConfig({
// //   e2e: {
// //     baseUrl: 'https://www.notion.com',

// //     setupNodeEvents(on, config) {
// //       // implement node event listeners here
// //     },
// //   },
// // });

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://www.notion.com',

//     env: {
//       COUNTRY: 'US',
//       LANGUAGE: 'en',
//       CURRENCY: 'USD',
//       TIMEZONE: 'America/New_York',
//     },


//   }
// })
// cypress.config.js


const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.mrprice.online',   
  }
});