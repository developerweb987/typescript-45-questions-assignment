// Exercise 40
// Define the function make_album
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three different albums and print them
var album1 = make_album("Ali Azmat", "Junoon");
var album2 = make_album("Atif Aslam", "Wo Lamhay");
var album3 = make_album("Asim Azhar", "Jo tu na mila", 12);
console.log(album1);
console.log(album2);
console.log(album3);
