# Get GitHub followers with Node.js-based RESTful API

## Summary

This project is an API endpoint that allows the user to enter a GitHub account username into a browser and retrieve a JSON object with that user's followers. The project demonstrates how to route HTTP requests through Express to a second pre-existing API endpoint. In this case, the script sends requests to the GitHub API.

## Technologies

* [Node](https://nodejs.org/en/) backend JavaScript framework
* [Express](https://expressjs.com/) web framework for Node   
	
## How to run files

 1. Download and install [Node.js](https://nodejs.org/en/)
 2. Download all GitHub files from this project into a folder
 3. Navigate to the server_files folder in the project folder with console (cmd.exe) `cd [filepath]`
 4. Run the command `node server.js` in the console
 5. Open a browser to http://localhost:3001/user/octocat (or replace "octocat" with any username you want to search for); JSON output should be visible in browser
