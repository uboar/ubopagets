export default interface collection {
    name: string
    date: string
    queryId: string
    tag: [string]
    comment: string
    description: string
    nicoId?: string
    youtubeId?: string
    contents: [
        {
            songName: string
            songUrl?: string
            download?: string
        }
    ]
}