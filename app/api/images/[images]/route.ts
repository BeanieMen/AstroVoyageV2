import { NextApiRequest } from 'next';
import fs from 'fs';
import path from 'path';
import { NextResponse, NextRequest } from 'next/server';



export async function GET(req: NextRequest, context: any) {

  try {
    const publicDirectory = path.join(process.cwd(), 'public');
    const filePath = path.join(publicDirectory, context.params.images as string);

    const fileContent = fs.readFileSync(filePath);

    const contentType = 'image/jpeg';

    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        'Content-Type': contentType,
      },
    });
  } catch (error) {
    console.log(error)
    return new NextResponse()
  }
}