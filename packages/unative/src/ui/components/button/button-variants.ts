import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  slots: {
    base: "group flex items-center justify-center rounded-md web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 flex-row gap-2",
    text: "web:whitespace-nowrap font-medium text-foreground web:transition-colors",
  },
  variants: {
    variant: {
      default: {
        base: "bg-border web:hover:opacity-90 active:opacity-90",
        text: "text-accent-foreground",
      },
      primary: {
        base: "bg-primary web:hover:opacity-90 active:opacity-90",
        text: "text-primary-foreground",
      },
      positive: {
        base: "bg-positive web:hover:opacity-90 active:opacity-90",
        text: "text-positive-foreground",
      },
      destructive: {
        base: "bg-destructive web:hover:opacity-90 active:opacity-90",
        text: "text-destructive-foreground",
      },
      outline: {
        base: "border border-input bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        text: "group-active:text-accent-foreground",
      },
      secondary: {
        base: "bg-secondary web:hover:opacity-80 active:opacity-80",
        text: "text-secondary-foreground group-active:text-secondary-foreground",
      },
      ghost: {
        base: "web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        text: "group-active:text-accent-foreground",
      },
      link: {
        base: "web:underline-offset-4 web:hover:underline web:focus:underline",
        text: "text-primary group-active:underline",
      },
      "destructive-link": {
        base: "web:underline-offset-4 web:hover:underline web:focus:underline",
        text: "text-destructive group-active:underline",
      },
      "destructive-outline": {
        base: "border border-destructive bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        text: "text-destructive group-active:text-destructive",
      },
      unstyled: {
        base: "web:hover:opacity-80 active:opacity-80",
        text: "",
      },
    },
    size: {
      default: {
        base: "h-10 px-4 py-2 native:h-12 native:px-5 native:py-3",
        text: "",
      },
      sm: {
        base: "h-9 rounded-md px-3",
        text: "",
      },
      lg: {
        base: "h-11 rounded-md px-8 native:h-14",
        text: "",
      },
      xl: {
        base: "h-14 rounded-md px-8 native:h-16",
        text: "",
      },
      icon: {
        base: "h-10 w-10",
        text: "",
      },
      iconLg: {
        base: "h-14 w-14",
        text: "",
      },
      iconXl: {
        base: "h-16 w-16",
        text: "",
      },
      unstyled: {
        base: "",
        text: "",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
