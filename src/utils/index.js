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



const placeholder = "./img/placeholder.png";

function formatUsersData (list, status) {
  const idUsersOnline = status
                            .filter( el => el.stream != null)
                            .map( el =>   el.stream.channel._id );
  
  const usersOffline  = list
                            .filter( el => !idUsersOnline.includes( el._id ) )
                            .map( ele => Object.assign( {},
                                    ({
                                        name: ele.display_name,
                                        logo: ele.logo || placeholder,
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
                                  logo: ele.stream.channel.logo || placeholder,
                                  id: ele.stream.channel._id,
                                  status: 'online',
                                   game: ele.stream.game
                             })));

 return usersOnline.concat( usersOffline );
}


exports.formatUsersData = formatUsersData;
exports.USER_URL_ARR= USER_URL_ARR;
exports.STREAM_URL_ARR= STREAM_URL_ARR;
