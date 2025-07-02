import { Card } from '@/components/ui/card';
import { BlogPost as BlogPostType } from '@/types/blog';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost = ({ post }: BlogPostProps) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Card className="project-card group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-orbitron font-bold neon-text group-hover:animate-neon-pulse">
            {post.title}
          </h3>
          {post.createdAt && (
            <span className="text-sm text-muted-foreground font-fira">
              {formatDate(post.createdAt)}
            </span>
          )}
        </div>
        
        <div className="mb-4">
          <p className="text-muted-foreground font-fira whitespace-pre-wrap">
            {post.content}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="tech-badge">
            By {post.author}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default BlogPost;