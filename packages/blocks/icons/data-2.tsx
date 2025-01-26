import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const Data2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 8H4C2.9 8 2 7.1 2 6V4C2 2.9 2.9 2 4 2H7C8.1 2 9 2.9 9 4V6C9 7.1 8.1 8 7 8Z"
        fill="currentColor"
      />
      <Path
        d="M20.8 7H17.2C16.54 7 16 6.46 16 5.8V4.2C16 3.54 16.54 3 17.2 3H20.8C21.46 3 22 3.54 22 4.2V5.8C22 6.46 21.46 7 20.8 7Z"
        fill="currentColor"
      />
      <Path
        d="M20.8 14.5H17.2C16.54 14.5 16 13.96 16 13.3V11.7C16 11.04 16.54 10.5 17.2 10.5H20.8C21.46 10.5 22 11.04 22 11.7V13.3C22 13.96 21.46 14.5 20.8 14.5Z"
        fill="currentColor"
      />
      <Path
        opacity="0.96"
        d="M16 13.25C16.41 13.25 16.75 12.91 16.75 12.5C16.75 12.09 16.41 11.75 16 11.75H13.25V5.75H16C16.41 5.75 16.75 5.41 16.75 5C16.75 4.59 16.41 4.25 16 4.25H9C8.59 4.25 8.25 4.59 8.25 5C8.25 5.41 8.59 5.75 9 5.75H11.75V18C11.75 19.52 12.98 20.75 14.5 20.75H16C16.41 20.75 16.75 20.41 16.75 20C16.75 19.59 16.41 19.25 16 19.25H14.5C13.81 19.25 13.25 18.69 13.25 18V13.25H16Z"
        fill="currentColor"
      />
      <Path
        d="M20.8 22H17.2C16.54 22 16 21.46 16 20.8V19.2C16 18.54 16.54 18 17.2 18H20.8C21.46 18 22 18.54 22 19.2V20.8C22 21.46 21.46 22 20.8 22Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Data2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 8H4C2.9 8 2 7.1 2 6V4C2 2.9 2.9 2 4 2H7C8.1 2 9 2.9 9 4V6C9 7.1 8.1 8 7 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.8 7H17.2C16.54 7 16 6.45999 16 5.79999V4.20001C16 3.54001 16.54 3 17.2 3H20.8C21.46 3 22 3.54001 22 4.20001V5.79999C22 6.45999 21.46 7 20.8 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.8 14.5H17.2C16.54 14.5 16 13.96 16 13.3V11.7C16 11.04 16.54 10.5 17.2 10.5H20.8C21.46 10.5 22 11.04 22 11.7V13.3C22 13.96 21.46 14.5 20.8 14.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 5H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 16.3599V17.9999C12.5 19.0999 13.4 19.9999 14.5 19.9999H16"
        fill="white"
      />
      <Path
        d="M12.5 16.3599V17.9999C12.5 19.0999 13.4 19.9999 14.5 19.9999H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 5V12.32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 12.5H12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.8 22H17.2C16.54 22 16 21.46 16 20.8V19.2C16 18.54 16.54 18 17.2 18H20.8C21.46 18 22 18.54 22 19.2V20.8C22 21.46 21.46 22 20.8 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Data2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 8H4C2.9 8 2 7.1 2 6V4C2 2.9 2.9 2 4 2H7C8.1 2 9 2.9 9 4V6C9 7.1 8.1 8 7 8Z"
        fill="currentColor"
      />
      <Path
        d="M20.8 7H17.2C16.54 7 16 6.45999 16 5.79999V4.20001C16 3.54001 16.54 3 17.2 3H20.8C21.46 3 22 3.54001 22 4.20001V5.79999C22 6.45999 21.46 7 20.8 7Z"
        fill="currentColor"
      />
      <Path
        d="M20.8 14.5H17.2C16.54 14.5 16 13.96 16 13.3V11.7C16 11.04 16.54 10.5 17.2 10.5H20.8C21.46 10.5 22 11.04 22 11.7V13.3C22 13.96 21.46 14.5 20.8 14.5Z"
        fill="currentColor"
      />
      <Path
        opacity="0.37"
        d="M16 13.25C16.41 13.25 16.75 12.91 16.75 12.5C16.75 12.09 16.41 11.75 16 11.75H13.25V5.75H16C16.41 5.75 16.75 5.41 16.75 5C16.75 4.59 16.41 4.25 16 4.25H9C8.59 4.25 8.25 4.59 8.25 5C8.25 5.41 8.59 5.75 9 5.75H11.75V18C11.75 19.52 12.98 20.75 14.5 20.75H16C16.41 20.75 16.75 20.41 16.75 20C16.75 19.59 16.41 19.25 16 19.25H14.5C13.81 19.25 13.25 18.69 13.25 18V13.25H16Z"
        fill="currentColor"
      />
      <Path
        d="M20.8 22H17.2C16.54 22 16 21.46 16 20.8V19.2C16 18.54 16.54 18 17.2 18H20.8C21.46 18 22 18.54 22 19.2V20.8C22 21.46 21.46 22 20.8 22Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Data2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 8H4C2.9 8 2 7.1 2 6V4C2 2.9 2.9 2 4 2H7C8.1 2 9 2.9 9 4V6C9 7.1 8.1 8 7 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.8 7H17.2C16.54 7 16 6.45999 16 5.79999V4.20001C16 3.54001 16.54 3 17.2 3H20.8C21.46 3 22 3.54001 22 4.20001V5.79999C22 6.45999 21.46 7 20.8 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.8 14.5H17.2C16.54 14.5 16 13.96 16 13.3V11.7C16 11.04 16.54 10.5 17.2 10.5H20.8C21.46 10.5 22 11.04 22 11.7V13.3C22 13.96 21.46 14.5 20.8 14.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 5H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M12.5 5V18C12.5 19.1 13.4 20 14.5 20H16" fill="white" />
      <Path
        d="M12.5 5V18C12.5 19.1 13.4 20 14.5 20H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 12.5H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.8 22H17.2C16.54 22 16 21.46 16 20.8V19.2C16 18.54 16.54 18 17.2 18H20.8C21.46 18 22 18.54 22 19.2V20.8C22 21.46 21.46 22 20.8 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Data2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 8.75H4C2.48 8.75 1.25 7.52 1.25 6V4C1.25 2.48 2.48 1.25 4 1.25H7C8.52 1.25 9.75 2.48 9.75 4V6C9.75 7.52 8.52 8.75 7 8.75ZM4 2.75C3.31 2.75 2.75 3.31 2.75 4V6C2.75 6.69 3.31 7.25 4 7.25H7C7.69 7.25 8.25 6.69 8.25 6V4C8.25 3.31 7.69 2.75 7 2.75H4Z"
        fill="currentColor"
      />
      <Path
        d="M20.8 7.75H17.2C16.12 7.75 15.25 6.86999 15.25 5.79999V4.20001C15.25 3.12001 16.13 2.25 17.2 2.25H20.8C21.88 2.25 22.75 3.13001 22.75 4.20001V5.79999C22.75 6.87999 21.88 7.75 20.8 7.75ZM17.2 3.75C16.96 3.75 16.75 3.96001 16.75 4.20001V5.79999C16.75 6.03999 16.96 6.25 17.2 6.25H20.8C21.04 6.25 21.25 6.03999 21.25 5.79999V4.20001C21.25 3.96001 21.04 3.75 20.8 3.75H17.2Z"
        fill="currentColor"
      />
      <Path
        d="M20.8 15.25H17.2C16.12 15.25 15.25 14.37 15.25 13.3V11.7C15.25 10.62 16.13 9.75 17.2 9.75H20.8C21.88 9.75 22.75 10.63 22.75 11.7V13.3C22.75 14.38 21.88 15.25 20.8 15.25ZM17.2 11.25C16.96 11.25 16.75 11.46 16.75 11.7V13.3C16.75 13.54 16.96 13.75 17.2 13.75H20.8C21.04 13.75 21.25 13.54 21.25 13.3V11.7C21.25 11.46 21.04 11.25 20.8 11.25H17.2Z"
        fill="currentColor"
      />
      <Path
        d="M16 5.75H9C8.59 5.75 8.25 5.41 8.25 5C8.25 4.59 8.59 4.25 9 4.25H16C16.41 4.25 16.75 4.59 16.75 5C16.75 5.41 16.41 5.75 16 5.75Z"
        fill="currentColor"
      />
      <Path d="M12.5 5V18C12.5 19.1 13.4 20 14.5 20H16" fill="white" />
      <Path
        d="M16 20.75H14.5C12.98 20.75 11.75 19.52 11.75 18V5C11.75 4.59 12.09 4.25 12.5 4.25C12.91 4.25 13.25 4.59 13.25 5V18C13.25 18.69 13.81 19.25 14.5 19.25H16C16.41 19.25 16.75 19.59 16.75 20C16.75 20.41 16.41 20.75 16 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M16 13.25H12.5C12.09 13.25 11.75 12.91 11.75 12.5C11.75 12.09 12.09 11.75 12.5 11.75H16C16.41 11.75 16.75 12.09 16.75 12.5C16.75 12.91 16.41 13.25 16 13.25Z"
        fill="currentColor"
      />
      <Path
        d="M20.8 22.75H17.2C16.12 22.75 15.25 21.87 15.25 20.8V19.2C15.25 18.12 16.13 17.25 17.2 17.25H20.8C21.88 17.25 22.75 18.13 22.75 19.2V20.8C22.75 21.88 21.88 22.75 20.8 22.75ZM17.2 18.75C16.96 18.75 16.75 18.96 16.75 19.2V20.8C16.75 21.04 16.96 21.25 17.2 21.25H20.8C21.04 21.25 21.25 21.04 21.25 20.8V19.2C21.25 18.96 21.04 18.75 20.8 18.75H17.2Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Data2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 8H4C2.9 8 2 7.1 2 6V4C2 2.9 2.9 2 4 2H7C8.1 2 9 2.9 9 4V6C9 7.1 8.1 8 7 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.8 7H17.2C16.54 7 16 6.45999 16 5.79999V4.20001C16 3.54001 16.54 3 17.2 3H20.8C21.46 3 22 3.54001 22 4.20001V5.79999C22 6.45999 21.46 7 20.8 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.8 14.5H17.2C16.54 14.5 16 13.96 16 13.3V11.7C16 11.04 16.54 10.5 17.2 10.5H20.8C21.46 10.5 22 11.04 22 11.7V13.3C22 13.96 21.46 14.5 20.8 14.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M9 5H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M12.5 5V18C12.5 19.1 13.4 20 14.5 20H16" fill="white" />
        <Path
          d="M12.5 5V18C12.5 19.1 13.4 20 14.5 20H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.5 12.5H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M20.8 22H17.2C16.54 22 16 21.46 16 20.8V19.2C16 18.54 16.54 18 17.2 18H20.8C21.46 18 22 18.54 22 19.2V20.8C22 21.46 21.46 22 20.8 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Data2Bold,
  broken: Data2Broken,
  bulk: Data2Bulk,
  linear: Data2Linear,
  outline: Data2Outline,
  twotone: Data2Twotone,
};

export const Data2Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
