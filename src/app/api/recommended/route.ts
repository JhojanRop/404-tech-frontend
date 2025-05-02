import { NextResponse } from 'next/server';
import { data } from '@/lib/data/pagedata';

export async function GET() {
    const recommendedProducts = data.filter(product =>
        product.tags.includes('recomendado')
    )

    return NextResponse.json(recommendedProducts)
}