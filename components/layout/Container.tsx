import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({
  size = 'default',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        {
          'max-w-5xl': size === 'narrow',
          'max-w-7xl': size === 'default',
          'max-w-[1440px]': size === 'wide',
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}