import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const Scissor1Bold = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M5.5 10C7.433 10 9 8.433 9 6.5C9 4.567 7.433 3 5.5 3C3.567 3 2 4.567 2 6.5C2 8.433 3.567 10 5.5 10Z"
        fill="currentColor"
      />
      <Path
        d="M5.5 21C7.433 21 9 19.433 9 17.5C9 15.567 7.433 14 5.5 14C3.567 14 2 15.567 2 17.5C2 19.433 3.567 21 5.5 21Z"
        fill="currentColor"
      />
      <Path
        d="M15.2491 11.9803L22.4491 6.60027C22.7791 6.35027 22.8491 5.88027 22.5991 5.55027C22.3491 5.22027 21.8791 5.15027 21.5491 5.40027L13.9991 11.0503L8.4491 6.89027C8.1191 6.65027 7.6491 6.71027 7.3991 7.04027C7.1491 7.37027 7.2191 7.84027 7.5491 8.09027L12.7491 11.9803L6.8491 16.4003C6.5191 16.6503 6.4491 17.1203 6.6991 17.4503C6.8491 17.6503 7.0691 17.7503 7.2991 17.7503C7.4591 17.7503 7.6091 17.7003 7.7491 17.6003L13.9991 12.9203L21.5491 18.5703C21.6791 18.6703 21.8391 18.7203 21.9991 18.7203C22.2291 18.7203 22.4491 18.6203 22.5991 18.4203C22.8491 18.0903 22.7791 17.6203 22.4491 17.3703L15.2491 11.9803Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Scissor1Broken = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M5.5 3C7.43 3 9 4.57 9 6.5C9 8.43 7.43 10 5.5 10C3.57 10 2 8.43 2 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 21C7.433 21 9 19.433 9 17.5C9 15.567 7.433 14 5.5 14C3.567 14 2 15.567 2 17.5C2 19.433 3.567 21 5.5 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0004 6L8.65039 15.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0004 17.97L8.65039 7.97998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Scissor1Bulk = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        opacity="0.4"
        d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="currentColor"
      />
      <Path
        d="M14.1692 11.9899L17.7692 9.29992C18.0992 9.04992 18.1692 8.57992 17.9192 8.24992C17.6692 7.91992 17.1992 7.84992 16.8692 8.09992L12.9192 11.0499L10.5192 9.24992C10.5292 9.15992 10.5492 9.06992 10.5492 8.96992C10.5492 7.69992 9.51921 6.66992 8.24921 6.66992C6.97921 6.66992 5.94922 7.69992 5.94922 8.96992C5.94922 10.2399 6.97921 11.2699 8.24921 11.2699C8.86921 11.2699 9.42918 11.0199 9.84918 10.6199L11.6792 11.9899L9.83923 13.3699C9.42923 12.9799 8.86922 12.7299 8.25922 12.7299C6.98922 12.7299 5.95923 13.7599 5.95923 15.0299C5.95923 16.2999 6.98922 17.3299 8.25922 17.3299C9.52922 17.3299 10.5592 16.2999 10.5592 15.0299C10.5592 14.9299 10.5392 14.8299 10.5292 14.7299L12.9392 12.9299L16.8892 15.8799C17.0192 15.9799 17.1792 16.0299 17.3392 16.0299C17.5692 16.0299 17.7892 15.9299 17.9392 15.7299C18.1892 15.3999 18.1192 14.9299 17.7892 14.6799L14.1692 11.9899Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Scissor1Linear = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M5.5 10C7.433 10 9 8.433 9 6.5C9 4.567 7.433 3 5.5 3C3.567 3 2 4.567 2 6.5C2 8.433 3.567 10 5.5 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 21C7.433 21 9 19.433 9 17.5C9 15.567 7.433 14 5.5 14C3.567 14 2 15.567 2 17.5C2 19.433 3.567 21 5.5 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 6L8.64999 15.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 17.97L8.64999 7.97998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Scissor1Outline = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M5.5 10.75C3.16 10.75 1.25 8.84 1.25 6.5C1.25 4.16 3.16 2.25 5.5 2.25C7.84 2.25 9.75 4.16 9.75 6.5C9.75 8.84 7.84 10.75 5.5 10.75ZM5.5 3.75C3.98 3.75 2.75 4.98 2.75 6.5C2.75 8.02 3.98 9.25 5.5 9.25C7.02 9.25 8.25 8.02 8.25 6.5C8.25 4.98 7.02 3.75 5.5 3.75Z"
        fill="currentColor"
      />
      <Path
        d="M5.5 21.75C3.16 21.75 1.25 19.84 1.25 17.5C1.25 15.16 3.16 13.25 5.5 13.25C7.84 13.25 9.75 15.16 9.75 17.5C9.75 19.84 7.84 21.75 5.5 21.75ZM5.5 14.75C3.98 14.75 2.75 15.98 2.75 17.5C2.75 19.02 3.98 20.25 5.5 20.25C7.02 20.25 8.25 19.02 8.25 17.5C8.25 15.98 7.02 14.75 5.5 14.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.65066 16.7303C8.42066 16.7303 8.20065 16.6303 8.05065 16.4303C7.80065 16.1003 7.87068 15.6303 8.20068 15.3803L21.5507 5.40027C21.8807 5.15027 22.3507 5.22027 22.6007 5.55027C22.8507 5.88027 22.7807 6.35027 22.4507 6.60027L9.10067 16.5803C8.97067 16.6803 8.81066 16.7303 8.65066 16.7303Z"
        fill="currentColor"
      />
      <Path
        d="M22.0007 18.72C21.8407 18.72 21.6907 18.67 21.5507 18.57L8.20068 8.59002C7.87068 8.34002 7.80065 7.87002 8.05065 7.54002C8.30065 7.21002 8.77067 7.14002 9.10067 7.39002L22.4507 17.37C22.7807 17.62 22.8507 18.09 22.6007 18.42C22.4507 18.61 22.2307 18.72 22.0007 18.72Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Scissor1Twotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M5.5 10C7.433 10 9 8.433 9 6.5C9 4.567 7.433 3 5.5 3C3.567 3 2 4.567 2 6.5C2 8.433 3.567 10 5.5 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 21C7.433 21 9 19.433 9 17.5C9 15.567 7.433 14 5.5 14C3.567 14 2 15.567 2 17.5C2 19.433 3.567 21 5.5 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M22.0004 6L8.65039 15.98"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M22.0004 17.97L8.65039 7.97998"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Scissor1Bold,
  broken: Scissor1Broken,
  bulk: Scissor1Bulk,
  linear: Scissor1Linear,
  outline: Scissor1Outline,
  twotone: Scissor1Twotone,
};

export const Scissor1Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
