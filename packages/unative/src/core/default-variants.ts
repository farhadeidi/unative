/** @jsxImportSource nativewind */

export const DEFAULT_VARIANTS = {
  default: {
    base: "bg-accent web:hover:opacity-70 active:opacity-70",
    text: "text-accent-foreground",
  },
  primary: {
    base: "bg-primary web:hover:opacity-70 active:opacity-70",
    text: "text-primary-foreground",
  },
  positive: {
    base: "bg-positive web:hover:opacity-70 active:opacity-70",
    text: "text-positive-foreground",
  },
  destructive: {
    base: "bg-destructive web:hover:opacity-70 active:opacity-70",
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
};
