import { cn } from '@/lib/utils';
import type { HeadlineToken } from '@/content/types';

type HeadlineTag = 'h1' | 'h2' | 'h3';

interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tokens: HeadlineToken[];
  as?: HeadlineTag;
}

export function Headline({ tokens, as: Tag = 'h2', className, ...props }: HeadlineProps) {
  return (
    <Tag className={cn(className)} {...props}>
      {tokens.map((token, i) => {
        const isCyan = token.color === 'cyan' || token.highlight === true;
        return (
          <span key={i} className={isCyan ? 'text-brand-cyan' : undefined}>
            {token.text}
          </span>
        );
      })}
    </Tag>
  );
}
