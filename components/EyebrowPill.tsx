import { cn } from '@/lib/utils';

type EyebrowVariant = 'cyan' | 'cream';

interface EyebrowPillProps {
  children: React.ReactNode;
  variant?: EyebrowVariant;
  className?: string;
}

const variantClasses: Record<EyebrowVariant, string> = {
  cyan: 'bg-brand-cyan text-brand-cream',
  cream: 'bg-brand-cream text-brand-navy',
};

export function EyebrowPill({ children, variant = 'cyan', className }: EyebrowPillProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-5 py-2 text-sm md:text-base font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
