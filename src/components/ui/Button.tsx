import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-colors rounded-[var(--border-radius,0.5rem)]',
        'px-6 py-3',
        variant === 'primary' && 'bg-primary text-white hover:opacity-90',
        variant === 'secondary' && 'bg-secondary text-white hover:opacity-90',
        variant === 'outline' && 'border-2 border-primary text-primary hover:bg-primary/10',
        size === 'sm' && 'text-sm px-4 py-2',
        size === 'lg' && 'text-lg px-8 py-4',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
