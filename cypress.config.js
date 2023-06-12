const { defineConfig } = require("cypress");
const xlsx = require("node-xlsx").default;
const fs = require("fs");

  module.exports = defineConfig({
    e2e: {
      reporter: 'cypress-mochawesome-reporter',
      reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
        html: true
      },
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on),
        //  read file excel
       // implement node event listeners here
       on("task", {
          parseXlsx() {
            return new Promise((resolve, reject) => {
              try {
                const jsonData = xlsx.parse(fs.readFileSync('TestData.xlsx'));
                
                resolve(jsonData);
              } catch (e) {
                reject(e);
              }
            });
          },
          
      });
      },
      baseUrl: 'https://juice-shop.oliveit.info/#/',   
    },
  });
