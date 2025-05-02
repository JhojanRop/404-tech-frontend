import { NextResponse } from 'next/server'
import { data } from '@/lib/data/pagedata'
import type { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const limit = parseInt(searchParams.get('limit') || '5')
    const page = parseInt(searchParams.get('page') || '1')

    const start = (page - 1) * limit
    const end = start + limit
    const paginatedData = data.slice(start, end)

    return NextResponse.json({
        page,
        limit,
        total: data.length,
        data: paginatedData
    })
}
