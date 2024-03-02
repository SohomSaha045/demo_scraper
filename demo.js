// Import required modules
const puppeteer = require('puppeteer');

// Define the scraper function
async function scrapeWebsite() {
    // Launch a headless browser
    const browser = await puppeteer.launch();

    // Create a new page
    const page = await browser.newPage();

    // Navigate to the target website
    await page.goto('https://google.com');

    // Extract desired information
    const title = await page.title();
    const url = page.url();

    // Close the browser
    await browser.close();

    // Return the scraped data
    return {
        title: title,
        url: url
    };
}

// Export the scraper function for use in other modules
module.exports = scrapeWebsite;
