import { cn } from '@/lib/utils';
import type { HeadlineToken } from '@/content/types';

type HeadlineTag = 'h1' | 'h2' | 'h3';

interface HeadlineProps {
  tokens: HeadlineToken[];
  as?: HeadlineTag;
  className?: string;
}

export function Headline({ tokens, as: Tag = 'h2', className }: HeadlineProps) {
  return (
    <Tag className={cn(className)}>
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
