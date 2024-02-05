// const astrometry = new Astrometry('zlwawjrthmpelnsq')
// await astrometry.login()

import { Astrometry } from '@/app/lib/astrometry';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';



export async function GET(req: NextApiRequest, context: any) {

    try {
        const astrometry = new Astrometry('zlwawjrthmpelnsq')
        await astrometry.login()
        console.log(await astrometry.uploadImage('https://turbo-orbit-4v47xx7xqqrfj946-3000.app.github.dev/api/images/' + context.params.astrometry))
        return new NextResponse()
    } catch (error) {
        console.log(error)
        return new NextResponse()
    }
}