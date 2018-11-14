/*
    Context
        Scraping blue letter bible text commentaries
        All commentaries are listed in this index https://www.blueletterbible.org/commentaries/index.cfm
        Commentaries have varied formats: e.g. an id on one page or new page
    Goal
        An athors name returns their corpus of commentaries in json
    Subgoals
        given an authors name, return the index of their commentaries
        given a David Guzik page, return the markup for the notes
*/


const BlbScraper = require('./BlbScraper.js')
const authorName = 'Guzik, David'
const sectionPath = ['David Guzik Study Guides (2017)', 'Psalms', 'Study Guide for Psalm 23']
const scraper = new BlbScraper()
const output = {
    index: scraper.scrapeTextCommenteryIndex(authorName),
    bio: scraper.scrapeTextCommenteryBio(authorName),
    section: scraper.scrapeTextCommenterySection(authorName, sectionPath)
}

console.log(output)