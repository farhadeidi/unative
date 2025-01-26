import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const AlignBottomBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.98 19.3789H17.02C18.61 19.3789 19.25 18.7789 19.25 17.2589V5.37891H13.75V17.2589C13.76 18.7789 14.4 19.3789 15.98 19.3789Z"
        fill="currentColor"
      />
      <Path
        d="M7.48 14.3789H8.52C10.11 14.3789 10.75 13.7689 10.75 12.2589V5.37891H5.25V12.2589C5.26 13.7689 5.9 14.3789 7.48 14.3789Z"
        fill="currentColor"
      />
      <Path
        d="M21.25 6.11891H2.75C2.34 6.11891 2 5.78891 2 5.37891C2 4.96891 2.34 4.62891 2.75 4.62891H21.25C21.66 4.62891 22 4.96891 22 5.37891C22 5.78891 21.66 6.11891 21.25 6.11891Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AlignBottomBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.2598 5.1001V16.9001C19.2598 18.4001 18.6198 19.0001 17.0298 19.0001H15.9898C14.3998 19.0001 13.7598 18.4001 13.7598 16.9001V5.1001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7593 5.1001V11.9001C10.7593 13.4001 10.1193 14.0001 8.5293 14.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.25977 5.1001V11.9001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const AlignBottomBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.98 19.3799H17.02C18.61 19.3799 19.25 18.7799 19.25 17.2599V5.37988H13.75V17.2599C13.76 18.7799 14.4 19.3799 15.98 19.3799Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M7.48 14.3799H8.52C10.11 14.3799 10.75 13.7699 10.75 12.2599V5.37988H5.25V12.2599C5.26 13.7699 5.9 14.3799 7.48 14.3799Z"
        fill="currentColor"
      />
      <Path
        d="M21.25 6.11988H2.75C2.34 6.11988 2 5.78988 2 5.37988C2 4.96988 2.34 4.62988 2.75 4.62988H21.25C21.66 4.62988 22 4.96988 22 5.37988C22 5.78988 21.66 6.11988 21.25 6.11988Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AlignBottomLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.26 5.1001V16.9001C19.26 18.4001 18.62 19.0001 17.03 19.0001H15.99C14.4 19.0001 13.76 18.4001 13.76 16.9001V5.1001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.26 5.1001V11.9001C5.26 13.4001 5.9 14.0001 7.49 14.0001H8.53C10.12 14.0001 10.76 13.4001 10.76 11.9001V5.1001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const AlignBottomOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.0298 19.7501H15.9898C13.9798 19.7501 13.0098 18.8201 13.0098 16.9001V5.1001C13.0098 4.6901 13.3498 4.3501 13.7598 4.3501C14.1698 4.3501 14.5098 4.6901 14.5098 5.1001V16.9001C14.5098 17.9101 14.7198 18.2501 15.9898 18.2501H17.0298C18.2998 18.2501 18.5098 17.9101 18.5098 16.9001V5.1001C18.5098 4.6901 18.8498 4.3501 19.2598 4.3501C19.6698 4.3501 20.0098 4.6901 20.0098 5.1001V16.9001C20.0098 18.8201 19.0398 19.7501 17.0298 19.7501Z"
        fill="currentColor"
      />
      <Path
        d="M8.52977 14.7501H7.48977C5.47977 14.7501 4.50977 13.8201 4.50977 11.9001V5.1001C4.50977 4.6901 4.84977 4.3501 5.25977 4.3501C5.66977 4.3501 6.00977 4.6901 6.00977 5.1001V11.9001C6.00977 12.9101 6.21977 13.2501 7.48977 13.2501H8.52977C9.79977 13.2501 10.0098 12.9101 10.0098 11.9001V5.1001C10.0098 4.6901 10.3498 4.3501 10.7598 4.3501C11.1698 4.3501 11.5098 4.6901 11.5098 5.1001V11.9001C11.5098 13.8201 10.5398 14.7501 8.52977 14.7501Z"
        fill="currentColor"
      />
      <Path
        d="M22 5.75H2C1.58 5.75 1.25 5.41 1.25 5C1.25 4.59 1.58 4.25 2 4.25H22C22.41 4.25 22.75 4.59 22.75 5C22.75 5.41 22.42 5.75 22 5.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const AlignBottomTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.2598 5.1001V16.9001C19.2598 18.4001 18.6198 19.0001 17.0298 19.0001H15.9898C14.3998 19.0001 13.7598 18.4001 13.7598 16.9001V5.1001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.25977 5.1001V11.9001C5.25977 13.4001 5.89977 14.0001 7.48977 14.0001H8.52977C10.1198 14.0001 10.7598 13.4001 10.7598 11.9001V5.1001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 5H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: AlignBottomBold,
  broken: AlignBottomBroken,
  bulk: AlignBottomBulk,
  linear: AlignBottomLinear,
  outline: AlignBottomOutline,
  twotone: AlignBottomTwotone,
};

export const AlignBottomIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
