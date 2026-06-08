export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  keywords: string[];
  pillar: 'farmhouse' | 'managed-farmland' | 'golf-estate' | 'investment';
  readingMinutes: number;
}

export const blogPosts: BlogPost[] = [
  // Posts added in Phase 3
];
