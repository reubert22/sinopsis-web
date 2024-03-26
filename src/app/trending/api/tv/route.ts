import { defaultGet } from '..';

export async function GET(req: Request) {
  return await defaultGet(req, 'tv');
}
