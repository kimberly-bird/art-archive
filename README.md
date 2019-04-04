![Artwork Inventory](/src/images/screenshots/1.png)

# Welcome to Art Archive!
I created this app because I collect artwork from my great-grandfather (he was an artist and graphic designer in the 50s-60s in Chicago), as well as pieces I've purchased from travels abroad. I wanted a central repository to easily track the artwork I own as well as its details.

[View Deployed Site](https://art-archive.herokuapp.com/) **This site is not secure and is for demo purposes only. Please use a password that you are not using as a password in the real world.*

Main functionality: 
1. Adding new artwork (including image upload to Cloudinary)
1. View artwork collection
1. View artwork detail
1. Edit artwork
1. Delete artwork

Future functionality:
1. Down the road, I would like to create the functionality for users to "follow" other user's specific pieces of artwork. The reason for this is because many of my family members have my great-grandfather's artwork, and we don't know who has what piece(s).
1. I would also like to create functionality that would allow users to give authorization to other users to add notes about pieces of artwork. For example, my aunt has a lot of details in her memory about some of the pieces I have from my great-grandfather. I would love for her to add notes to the pieces so I can know more about the history of the piece.
1. I am also working on a Django REST API - I will be connecting this frontend app to that API, replacing the json-server.

<details><summary>App Screenshots</summary>
<p>

### View your artwork collection

![Artwork Inventory](/src/images/screenshots/2.png)

### Artwork details

![Artwork Inventory](/src/images/screenshots/3.png)

## Add new artwork (or edit existing artwork)

![Artwork Inventory](/src/images/screenshots/5.png)

## View artwork by specific artist

![Artwork Inventory](/src/images/screenshots/4.png)

</p>
</details>

## Details
Art Archive is a front-end application built with React, Bootstrap, and Cloudinary to store images. All data is user-generated and stored in a json-server database. 

## To Clone

Clone the repo to your computer and run `npm install` in the directory<br>

Start the json-server:
1. `cd` into api folder
1. run `json-server -p 5001 -w db.json`

When you're ready to start the server:
1. make sure you are in the root folder (same level as `README.md`)
1. run `npm start`

This will run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Data will be served from the main API hosted online.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).