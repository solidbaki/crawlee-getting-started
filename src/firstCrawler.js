import { CheerioCrawler } from 'crawlee';

const crawler = new CheerioCrawler({
    async requestHandler({ $, request }) {
        const title = $('title').text();
        console.log(`The title of "${request.url}" is: ${title}.`);
    }
})

// Start the crawler with the provided URLs
await crawler.run(['https://crawlee.dev']);

// Below code uses request queue for scraping website's title

// import { RequestQueue, CheerioCrawler } from "crawlee";

// const requestQueue = await RequestQueue.open();
// await requestQueue.addRequest({ url: 'https://crawlee.dev' });

// // Create the crawler and add the queue with our URL
// // and a request handler to process the page.
// const crawler = new CheerioCrawler({
//     requestQueue,
//     // The `$` argument is the Cheerio object
//     // which contains parsed HTML of the website.
//     async requestHandler({ $, request }) {
//         // Extract <title> text with Cheerio.
//         // See Cheerio documentation for API docs.
//         const title = $('title').text();
//         console.log(`The title of "${request.url}" is: ${title}.`);
//     }
// })

// // Start the crawler and wait for it to finish
// await crawler.run();