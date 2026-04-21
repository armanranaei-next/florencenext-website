import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  theme?: 'light' | 'cream' | 'dark' | 'navy';
  spacing?: 'sm' | 'md' | 'lg';
}

export function Section({
  theme = 'light',
  spacing = 'lg',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'w-full',
        {
          'bg-background text-foreground': theme === 'light',
          'bg-brand-cream text-foreground': theme === 'cream',
          'bg-brand-navy text-white': theme === 'dark' || theme === 'navy',
          'py-12 md:py-16': spacing === 'sm',
          'py-16 md:py-20': spacing === 'md',
          'py-20 md:py-28': spacing === 'lg',
        },
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}