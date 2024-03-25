import { fetchFunction } from '@/api/fetchFunction';
import { trendingApiUrl } from '@/utils/apiConstants';
import { NextResponse } from 'next/server';

export const defaultGet = async (req: Request, category: string) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get('page');
  const search = searchParams.get('search');

  const data = await fetchFunction(
    `${trendingApiUrl(category as any)}${search}&page=${page}`
  );

  return NextResponse.json(data);
};
