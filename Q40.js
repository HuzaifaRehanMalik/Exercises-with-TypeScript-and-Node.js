var makeAlbum = function (artist, title, tracks) { return ({ artist: artist, title: title, tracks: tracks }); };
var album1 = makeAlbum('Artist 1', 'Album 1');
var album2 = makeAlbum('Artist 2', 'Album 2', 12);
var album3 = makeAlbum('Artist 3', 'Album 3', 8);
console.log(album1, album2, album3);
