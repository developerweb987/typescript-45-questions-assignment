// Exercise 40

// Define the interface for an album
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

// Define the function make_album
function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Create three different albums and print them
let album1 = make_album("Ali Azmat", "Junoon");
let album2 = make_album("Atif Aslam", "Wo Lamhay");
let album3 = make_album("Asim Azhar", "Jo tu na mila", 12);

console.log(album1);
console.log(album2);
console.log(album3);
