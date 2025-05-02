import { NextResponse } from 'next/server'
import { data } from '@/lib/data/pagedata'
import type { NextRequest } from 'next/server'

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const product = data.find(p => p.id === params.id)

    if (!product) {
        return NextResponse.json({ message: 'Producto no encontrado' }, { status: 404 })
    }

    return NextResponse.json(product)
}
