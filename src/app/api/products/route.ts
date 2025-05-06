import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server';
import { data } from '@/lib/data/pagedata';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const limit = parseInt(searchParams.get('limit') || '15')
    const page = parseInt(searchParams.get('page') || '1')
    const category = searchParams.get('category') || ''

    const start = (page - 1) * limit
    const end = start + limit

    const filteredData = category ? data.filter(product => product.category === category) : data
    const paginatedData = filteredData.slice(start, end)

    return NextResponse.json({
        products: paginatedData,
        total: filteredData.length,
        limit: limit,
        page: page,
        category: category,
    });
}