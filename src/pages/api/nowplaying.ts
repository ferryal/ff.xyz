import { NextApiRequest, NextApiResponse } from 'next'
import SpotifyWebApi from 'spotify-web-api-node'

// const api = new SpotifyWebApi({
//     clientId:process.env.SPOTIFY_ID, // 76e4350daeb14d5cbc0024e5b9a0dd05
//     clientSecret:process.env.SPOTIFY_SECRET, // 57315181e58f457da2c5829588a68c97
//     redirectUri:process.env.SPOTIFY_REDIRECT // 57315181e58f457da2c5829588a68c97
// });


// const api = new SpotifyWebApi({
//     clientId:'76e4350daeb14d5cbc0024e5b9a0dd05',
//     clientSecret:'57315181e58f457da2c5829588a68c97',
//     redirectUri:'http://www.example.com/callback'
// });


// curl -H "Authorization: Basic NmQyNTE1MmMwMTc4NDUxN2JiMGM0ZDA1NTdiZjExY2Y6MGUwZmJjNjNhMmE5NDlhOWE4MmIzYjE3NDFlMTRiNDc" -d grant_type=authorization_code -d code=AQAo9qnvcy12g63XqKYy4ByX0lOjabbjP5UIY2ImcNgKxzLCkk7YaniBU2EPdVe8rFmqv6JxAy_uZgLzMFGDgqautiEnyCQNQ_d72XCsU0sUVWZVfswcwh0q7MlnAHwN3UdFysYFeGX-TQ1mN_h6vGjRP1NUDYI5M4HuSlTV1l5omRUKtGeDJu9GkBtbqbklxfzs6YII -d redirect_uri=http%3A%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token

const handler = async(req: NextApiRequest, res: NextApiResponse) => {

    // try {
    //     // api.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN)
    //     // BQDEUKx7aO4TPQ5bLiIwTU8kGPMmjnst9UyJDrFH8-vExbRxM2YKX9SDW1G4mbMIwYWQzNw9h15sVUlt-bsi32KKDhVfrwk4QqOppgdtOvdhjp-5_nCk
    //     api.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN)
    //     const data = await api.refreshAccessToken()

    //     console.log(data)

    //      api.setAccessToken(data.body['access_token'])

    //      const recentTracks = await api.getMyRecentlyPlayedTracks({
    //         limit: 1 })
    //         res.status(200).json(recentTracks.body.items[0].track)
    // }
    // catch (err) {
    //     console.log('Something went wrong!', err)
    // }
}

export default handler
