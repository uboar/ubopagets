import albumSong from "./albumSong"

export default interface album{
    albumName: string
    theme?: string
    downloadColor: string
    releaseDate: string
    downloadUrl: string
    albumDescription: string
    albumArtUrl: string
    songList:[albumSong]
}