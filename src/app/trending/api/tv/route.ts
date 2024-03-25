import { NextResponse } from 'next/server';
import { fetchFunction } from '@/api/fetchFunction';
import { TRENDING_TV_URL } from '@/utils/apiConstants';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get('page');
  const search = searchParams.get('search');

  const data = await fetchFunction(`${TRENDING_TV_URL}${search}&page=${page}`);
  return NextResponse.json(data);
}
