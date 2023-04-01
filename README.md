# Notes
Please run `npm install` in the root directory and also in the server directory to get all the required dependencies.

# Issues
## Question 3
 Please note that the server at https://myapi.smartcode.com.ng does not have CORS enabled. Therefore, it is not possible to query the server directly from client-side code due to browser security restrictions.To bypass this issue, a proxy server has been created to act as an intermediary between client-side code and the target API. To start the proxy server, navigate to the server directory located in the root directory and execute the command `node main.js` or npm run dev. Once the proxy server is running, it will allow the client-side code to access the required resources through the designated API routes.

 ## Question 4
 Please be informed that the URL provided in Question Four returns an incorrectly formatted JSON string as it lacks a closing double quote. As a result, the JavaScript code is unable to parse it into a JSON object. I have taken the initiative to manually query the endpoint to extract the required data and proceed with the subsequent steps. Thank you for your cooperation and understanding in this matter.