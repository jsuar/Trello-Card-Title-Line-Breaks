# Trello Card Title Line Breaks
This Chrome extension allows Trello cards to have a line break in the card title by using a user set delimiter.

## How to Install
1. Clone this repo locally
1. In Chrome go to `chrome://extensions/`
1. Click "Load Unpacked"
1. Browse to the location of the repo

To do (Maybe):
 - [ ] More than one delimeter
 - [ ] Fix the icon
 
Completed:
 - [x] Line breaks added after card moves between lists
 - [x] Monitor changes when other users make edits to card titles

## How it works

The below element classes are monitored for changes. Anytime they change, they are looped through and the delimeter is replaced with `<br />`.

**Element Classes**
* `list-card`
* `list-cards`
* `list-card-title`
* `js-menu-action-list`