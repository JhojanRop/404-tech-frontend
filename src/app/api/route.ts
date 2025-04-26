import { NextResponse } from 'next/server';
import { data } from '@/lib/data/pagedata';

export async function GET() {
    return NextResponse.json(data);
}