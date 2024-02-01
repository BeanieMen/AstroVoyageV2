// import type { NextApiResponse } from 'next'
// import { NextRequest } from 'next/server'
// export async function GET(
//     req: NextRequest,
//     res: NextApiResponse<object>
// ) {
//     let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=' + process.env.apod)
//     let data = await response.json()
//     res.status(200).json({ url: data.hdurl })
// }