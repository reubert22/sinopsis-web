//

import { ITrendingItem } from '@/store/trendingStore';

export interface ITrendingPersonItem {
  adult: boolean;
  id: number;
  name: string;
  original_name: string;
  media_type: string;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string;
  known_for: ITrendingItem[];
}
