# React Twitch Status Users

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## About the Free Code Camp Twitch API Pass-through

> NOTES:
- This server caches data to lower the request rate. To prevent abuses this server accepts GET requests only, and serves only routes /users?(login=|id=), /games?id=, and /streams?(user_id|user_login). These are more than enough to complete the challenge.
- This server will keep providing a static snapshot of the old API data, for the routes /streams/:user | users/:user | /channels/:channel at the endpoint https://wind-bow.glitch.me/twitch-api. It will serve data ONLY for the streamers profiles listed in the challenge description, at freeCodeCamp - take home project. 

## Dependencies

- bootstrap
- react
- react-bootstrap
- react-dom
- react-router-dom
- react-scripts
- uuid


## Licensing

"The code in this project is licensed under MIT license."


# Demo

[Live link](https://diegoperezm.github.io/react-twitch-status-users)

