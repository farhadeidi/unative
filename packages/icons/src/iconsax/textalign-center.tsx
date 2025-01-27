import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const TextalignCenterBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 5.25H3C2.59 5.25 2.25 4.91 2.25 4.5C2.25 4.09 2.59 3.75 3 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z"
        fill="currentColor"
      />
      <Path
        d="M16.7417 10.25H7.26172C6.85172 10.25 6.51172 9.91 6.51172 9.5C6.51172 9.09 6.85172 8.75 7.26172 8.75H16.7317C17.1417 8.75 17.4817 9.09 17.4817 9.5C17.4817 9.91 17.1517 10.25 16.7417 10.25Z"
        fill="currentColor"
      />
      <Path
        d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z"
        fill="currentColor"
      />
      <Path
        d="M16.7417 20.25H7.26172C6.85172 20.25 6.51172 19.91 6.51172 19.5C6.51172 19.09 6.85172 18.75 7.26172 18.75H16.7317C17.1417 18.75 17.4817 19.09 17.4817 19.5C17.4817 19.91 17.1517 20.25 16.7417 20.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TextalignCenterBroken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M7.25977 9.5H16.7398"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 14.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.25977 19.5H16.7398"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0508 4.5H21.0008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 4.5H5.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TextalignCenterBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 5.25H3C2.59 5.25 2.25 4.91 2.25 4.5C2.25 4.09 2.59 3.75 3 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.7398 10.25H7.25977C6.84977 10.25 6.50977 9.91 6.50977 9.5C6.50977 9.09 6.84977 8.75 7.25977 8.75H16.7298C17.1398 8.75 17.4798 9.09 17.4798 9.5C17.4798 9.91 17.1498 10.25 16.7398 10.25Z"
        fill="currentColor"
      />
      <Path
        d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.7398 20.25H7.25977C6.84977 20.25 6.50977 19.91 6.50977 19.5C6.50977 19.09 6.84977 18.75 7.25977 18.75H16.7298C17.1398 18.75 17.4798 19.09 17.4798 19.5C17.4798 19.91 17.1498 20.25 16.7398 20.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TextalignCenterLinear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M3 4.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.26001 9.5H16.74"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 14.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.26001 19.5H16.74"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TextalignCenterOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M21 5.25H3C2.59 5.25 2.25 4.91 2.25 4.5C2.25 4.09 2.59 3.75 3 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z"
        fill="currentColor"
      />
      <Path
        d="M16.7398 10.25H7.25977C6.84977 10.25 6.50977 9.91 6.50977 9.5C6.50977 9.09 6.84977 8.75 7.25977 8.75H16.7298C17.1398 8.75 17.4798 9.09 17.4798 9.5C17.4798 9.91 17.1498 10.25 16.7398 10.25Z"
        fill="currentColor"
      />
      <Path
        d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z"
        fill="currentColor"
      />
      <Path
        d="M16.7398 20.25H7.25977C6.84977 20.25 6.50977 19.91 6.50977 19.5C6.50977 19.09 6.84977 18.75 7.25977 18.75H16.7298C17.1398 18.75 17.4798 19.09 17.4798 19.5C17.4798 19.91 17.1498 20.25 16.7398 20.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TextalignCenterTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M3 4.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.25977 9.5H16.7398"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3 14.5H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.25977 19.5H16.7398"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TextalignCenterBold,
  broken: TextalignCenterBroken,
  bulk: TextalignCenterBulk,
  linear: TextalignCenterLinear,
  outline: TextalignCenterOutline,
  twotone: TextalignCenterTwotone,
};

export const TextalignCenterIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
