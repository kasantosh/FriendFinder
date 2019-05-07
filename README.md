# Friend Finder

This app is created using an express server. The user enters his/her data into the fields and also answers 10 survey questions. 

Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

The answers are then compared with other users in the database and on submit there's a pop-up which responds with the profile of a best match from the database based on the answers given by other users.

The compatability is measured with the following logic.

Example:

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5

___


Applications used: HTML, CSS, Bootstrap, JQuery, Javascript, Express.

File Structure:
  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
