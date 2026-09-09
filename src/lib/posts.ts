export interface PostFrontmatter {
  title: string;
  date?: string;
  lastupdate?: string;
  description?: string;
  tags?: string[];
  favourite?: boolean;
}

export interface Post {
  url: string;
  frontmatter: PostFrontmatter;
}

export function loadPosts(modules: Record<string, unknown>): Post[] {
  return Object.entries(modules)
    .sort(([pathA], [pathB]) => pathB.localeCompare(pathA))
    .map(([, module]) => module as Post);
}

export function collectTags(posts: Post[]): string[] {
  return [...new Set(posts.flatMap((post) => post.frontmatter.tags ?? []))].sort();
}

export function postsWithTag(posts: Post[], tag: string): Post[] {
  return posts.filter((post) => (post.frontmatter.tags ?? []).includes(tag));
}

export function tagRoutes(posts: Post[]) {
  return collectTags(posts).map((tag) => ({
    params: { tag },
    props: { posts: postsWithTag(posts, tag) },
  }));
}
