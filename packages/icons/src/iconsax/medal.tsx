import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const MedalBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z"
        fill="currentColor"
      />
      <Path
        d="M15.79 15.6091C16.12 15.4391 16.5 15.6891 16.5 16.0591V20.9091C16.5 21.8091 15.87 22.2491 15.09 21.8791L12.41 20.6091C12.18 20.5091 11.82 20.5091 11.59 20.6091L8.91 21.8791C8.13 22.2391 7.5 21.7991 7.5 20.8991L7.52 16.0591C7.52 15.6891 7.91 15.4491 8.23 15.6091C9.36 16.1791 10.64 16.4991 12 16.4991C13.36 16.4991 14.65 16.1791 15.79 15.6091Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MedalBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.5 3.66C17.88 4.85 18.75 6.58 18.75 8.5C18.75 12.09 15.73 15 12 15C8.27 15 5.25 12.09 5.25 8.5C5.25 4.91 8.27 2 12 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.51974 13.52L7.50977 20.9C7.50977 21.8 8.13977 22.24 8.91977 21.87L11.5998 20.6C11.8198 20.49 12.1898 20.49 12.4098 20.6L15.0998 21.87C15.8698 22.23 16.5098 21.8 16.5098 20.9V13.34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MedalBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M7.51974 13.5201L7.50977 20.9001C7.50977 21.8001 8.13977 22.2401 8.91977 21.8701L11.5998 20.6001C11.8198 20.4901 12.1898 20.4901 12.4098 20.6001L15.0998 21.8701C15.8698 22.2301 16.5098 21.8001 16.5098 20.9001V13.3401"
        fill="currentColor"
      />
    </Svg>
  );
};

const MedalLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.51999 13.52L7.51001 20.9C7.51001 21.8 8.14001 22.24 8.92001 21.87L11.6 20.6C11.82 20.49 12.19 20.49 12.41 20.6L15.1 21.87C15.87 22.23 16.51 21.8 16.51 20.9V13.34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MedalOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 15.75C7.86 15.75 4.5 12.5 4.5 8.5C4.5 4.5 7.86 1.25 12 1.25C16.14 1.25 19.5 4.5 19.5 8.5C19.5 12.5 16.14 15.75 12 15.75ZM12 2.75C8.69 2.75 6 5.33 6 8.5C6 11.67 8.69 14.25 12 14.25C15.31 14.25 18 11.67 18 8.5C18 5.33 15.31 2.75 12 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.62 22.7501C15.34 22.7501 15.06 22.6801 14.77 22.5501L12.08 21.2801C12.05 21.2701 11.94 21.2701 11.9 21.2801L9.23002 22.5401C8.64002 22.8201 8.02001 22.8101 7.54001 22.5001C7.04001 22.1801 6.75002 21.5901 6.76002 20.8901L6.77 13.5101C6.77 13.1001 7.09 12.7401 7.52 12.7601C7.93 12.7601 8.27 13.1001 8.27 13.5101L8.26002 20.8901C8.26002 21.1101 8.32001 21.2201 8.35001 21.2301C8.37001 21.2401 8.46001 21.2501 8.60001 21.1801L11.28 19.9101C11.71 19.7101 12.3 19.7101 12.73 19.9101L15.42 21.1801C15.56 21.2501 15.65 21.2401 15.67 21.2301C15.7 21.2101 15.76 21.1001 15.76 20.8901V13.3301C15.76 12.9201 16.1 12.5801 16.51 12.5801C16.92 12.5801 17.26 12.9201 17.26 13.3301V20.8901C17.26 21.6001 16.97 22.1801 16.47 22.5001C16.21 22.6701 15.92 22.7501 15.62 22.7501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MedalTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.51974 13.5198L7.50977 20.8998C7.50977 21.7998 8.13977 22.2398 8.91977 21.8698L11.5998 20.5999C11.8198 20.4899 12.1898 20.4899 12.4098 20.5999L15.0998 21.8698C15.8698 22.2298 16.5098 21.7998 16.5098 20.8998V13.3398"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MedalBold,
  broken: MedalBroken,
  bulk: MedalBulk,
  linear: MedalLinear,
  outline: MedalOutline,
  twotone: MedalTwotone,
};

export const MedalIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default MedalIcon;
