 const USERS = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas"];

 const PATH_BASE  = 'https://wind-bow.glitch.me/twitch-api';
 const PARAM_USER = '/users/';
 const PARAM_STREAM =  '/streams/';

 const USER_URL_ARR = USERS.map(ele => `${PATH_BASE}${PARAM_USER}${ele}`);
 const STREAM_URL_ARR = USERS.map(ele => `${PATH_BASE}${PARAM_STREAM}${ele}`);

 const PLACEHOLDER = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAASwAAAEsBAMAAACLU5NGAAAAG1BMVEXMzMyWlpa3t7eqqqqcnJyj o6PFxcWxsbG+vr6NAD6nAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACjklEQVR4nO3XO2/bMBDA8fNT Gn2OlGS00S8QAWnnaKi7xnBQdJSBFl3joY/RRpHv3SNFykYtdKOm/w8BHOkOIM3HkRYBAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/uddvWvsI38sj+7xT/2lJ2n8WH64iMbkdCaqurTPteqd a98eX6+zKnu9OkdDckIH3W21kbmWlR5F9rrT+6ukTMv3ettFY3JC9UZyfZBJ0czrZxuWjXwtr5Km RSOnmy4ak9PJ3bc+PMveJvJ0a+OwslfNv1knG6Ks7KIhOaGxulYXsl7YmNy1j/XV4nLRXLtoSE4o czN2epLK5mRSuj/x/7tuPImfOfHDKXnRRUNyaq6l17bhu7aX/q1N1fY8Va7TIRqSE/tuS2a78i3N ludu7QsbsW4+54dlFw3JadVqM1Uf3b6XqSsO+4V/n+nrtGt7qrZdYzQkp6WuFLUtNW3DYebqzXoZ k0ZqWzZGQ3LqblmLvhFtRq5Ho9Ct9c25OI1c52M0JKftlrzpc+9ozfSilOfbctjRsv226FtbtuBv LpJmOuza8hW7Zyfa4lpeJFl5H24nZr/Fz4srReNQt9ahW5nGpn8d/azFaEhOyJ8hNi+HtnBn5yrv ClcsW+44slmL0UPyKj8Jh0/fmVjd12HxV+3hM+CZ6DZUFW4Q9+GOcPShuT6sw5o/3PovEKMhOaG5 frZBWPXdt2a2xkMV2JeNuNI62H1LqmJXF9J3O7XbQ65t4xP9+OguFMPdTr9Zkd9I313eLaxt28X5 VtUuqAPe5eVH/ckalPyl/THzFn/5jF0H9qEMZC/Fz4toTAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAEjpL514clJrNSt2AAAAAElFTkSuQmCC";


function formatUsersData (list, status) {
  const idUsersOnline = status
                            .filter( el => el.stream != null)
                            .map( el =>   el.stream.channel._id );
  
  const usersOffline  = list
                            .filter( el => !idUsersOnline.includes( el._id ) )
                            .map( ele => Object.assign( {},
                                    ({
                                        name: ele.display_name,
                                        logo: ele.logo || PLACEHOLDER,
                                        id: ele._id,
                                        status: 'offline',
                                        game: ''
                             })));


  const usersOnline = status
                           .filter( el => el.stream != null )
                           .map( ele =>
                                Object.assign( {},
                                  ({
                                  name: ele.stream.channel.display_name,
                                  logo: ele.stream.channel.logo || PLACEHOLDER,
                                  id: ele.stream.channel._id,
                                  status: 'online',
                                   game: ele.stream.game
                             })));

 return usersOnline.concat( usersOffline );
}


exports.formatUsersData = formatUsersData;
exports.USER_URL_ARR= USER_URL_ARR;
exports.STREAM_URL_ARR= STREAM_URL_ARR;
exports.PLACEHOLDER = PLACEHOLDER; 
