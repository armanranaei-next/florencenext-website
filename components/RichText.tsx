import type { RichTextNode } from '@/content/types';

export function RichText({ nodes }: { nodes: RichTextNode[] }) {
  return (
    <>
      {nodes.map((n, i) => {
        if (typeof n === 'string') return <span key={i}>{n}</span>;
        if ('strong_em' in n)
          return <strong key={i} className="font-medium italic">{n.strong_em}</strong>;
        if ('strong' in n)
          return <strong key={i} className="font-medium">{n.strong}</strong>;
        return <em key={i}>{n.em}</em>;
      })}
    </>
  );
}
