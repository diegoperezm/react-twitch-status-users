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
