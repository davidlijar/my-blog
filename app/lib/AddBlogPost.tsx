import {sql} from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function AddBlogPost(request: Request){
    const {searchParams} = new URL(request.url);
    const petName = searchParams.get('petName');
    const ownerName = searchParams.get('ownerName');

    return (
        <h1>Test To add</h1>

    )
}