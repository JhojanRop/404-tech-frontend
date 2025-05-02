import { NextResponse } from 'next/server';
import { data } from '@/lib/data/pagedata';

export async function GET() {
    const newestProducts = data.filter(product =>
        product.tags.includes('nuevo')
    )

    return NextResponse.json(newestProducts)
}