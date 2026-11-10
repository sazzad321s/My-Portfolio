import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type AnchorProps = CommonProps & {
  href: string;
  external?: boolean;
  download?: boolean;
  "aria-label"?: string;
};

type NativeButtonProps = CommonProps & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className" | "children"
  >;

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition duration-200 active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-on-brand shadow-lg shadow-accent/20 hover:-translate-y-0.5 hover:brightness-110 motion-reduce:hover:translate-y-0",
  secondary:
    "border border-line bg-surface text-ink hover:-translate-y-0.5 hover:border-accent motion-reduce:hover:translate-y-0",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, external, download } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={props["aria-label"]}
          className={classes}
        >
          {children}
        </a>
      );
    }
    if (download) {
      return (
        <a href={href} download className={classes} aria-label={props["aria-label"]}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={props["aria-label"]}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
