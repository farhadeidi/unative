import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const Paperclip2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.37 14.63L14.15 16.85C13.61 17.39 12.91 17.65 12.21 17.65C11.51 17.65 10.8 17.38 10.27 16.85C9.2 15.78 9.2 14.03 10.27 12.96L11.68 11.55C11.97 11.26 12.45 11.26 12.74 11.55C13.03 11.84 13.03 12.32 12.74 12.61L11.33 14.02C10.84 14.51 10.84 15.3 11.33 15.79C11.82 16.28 12.61 16.28 13.1 15.79L15.32 13.57C15.93 12.96 16.27 12.14 16.27 11.27C16.27 10.4 15.93 9.59 15.32 8.97C14.09 7.74 11.95 7.74 10.72 8.97L8.29 11.4C7.25 12.44 7.25 14.14 8.29 15.19C8.58 15.48 8.58 15.96 8.29 16.25C8 16.54 7.52 16.54 7.23 16.25C5.6 14.62 5.6 11.97 7.23 10.34L9.65 7.92C10.55 7.02 11.74 6.53 13.01 6.53C14.28 6.53 15.47 7.02 16.37 7.92C17.27 8.82 17.76 10.01 17.76 11.28C17.76 12.55 17.27 13.74 16.37 14.63Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Paperclip2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.75992 8.81006L4.54992 10.0201C2.20992 12.3601 2.20992 16.1601 4.54992 18.5101"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.3308 12.1499L9.86078 14.6199C8.49078 15.9899 8.49078 18.1999 9.86078 19.5699C11.2308 20.9399 13.4408 20.9399 14.8108 19.5699L18.7008 15.6799C21.4308 12.9499 21.4308 8.50992 18.7008 5.77992C15.9708 3.04992 11.5308 3.04992 8.80078 5.77992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Paperclip2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M12.2003 17.6598C11.5003 17.6598 10.7903 17.3898 10.2603 16.8598C9.19031 15.7898 9.19031 14.0398 10.2603 12.9698L11.6703 11.5598C11.9603 11.2698 12.4403 11.2698 12.7303 11.5598C13.0203 11.8498 13.0203 12.3298 12.7303 12.6198L11.3203 14.0298C10.8303 14.5198 10.8303 15.3098 11.3203 15.7998C11.8103 16.2898 12.6003 16.2898 13.0903 15.7998L15.3103 13.5798C15.9203 12.9698 16.2603 12.1498 16.2603 11.2798C16.2603 10.4098 15.9203 9.59978 15.3103 8.97978C14.0803 7.74978 11.9403 7.74978 10.7103 8.97978L8.29031 11.3998C7.25031 12.4398 7.25031 14.1398 8.29031 15.1898C8.58031 15.4798 8.58031 15.9598 8.29031 16.2498C8.00031 16.5398 7.52031 16.5398 7.23031 16.2498C5.60031 14.6198 5.60031 11.9698 7.23031 10.3398L9.65031 7.91979C10.5503 7.01979 11.7403 6.52979 13.0103 6.52979C14.2803 6.52979 15.4703 7.01979 16.3703 7.91979C17.2703 8.81979 17.7603 10.0098 17.7603 11.2798C17.7603 12.5498 17.2703 13.7398 16.3703 14.6398L14.1503 16.8598C13.6103 17.3898 12.9103 17.6598 12.2003 17.6598Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Paperclip2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.3299 12.1499L9.85993 14.6199C8.48993 15.9899 8.48993 18.1999 9.85993 19.5699C11.2299 20.9399 13.4399 20.9399 14.8099 19.5699L18.6999 15.6799C21.4299 12.9499 21.4299 8.50992 18.6999 5.77992C15.9699 3.04992 11.5299 3.04992 8.79993 5.77992L4.55993 10.0199C2.21993 12.3599 2.21993 16.1599 4.55993 18.5099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Paperclip2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.3291 21.3399C11.2391 21.3399 10.1491 20.9299 9.31906 20.0999C7.65906 18.4399 7.65906 15.7499 9.31906 14.0899L11.7991 11.6199C12.0891 11.3299 12.5691 11.3299 12.8591 11.6199C13.1491 11.9099 13.1491 12.3899 12.8591 12.6799L10.3791 15.1499C9.30906 16.2199 9.30906 17.9699 10.3791 19.0399C11.4491 20.1099 13.1991 20.1099 14.2691 19.0399L18.1591 15.1499C19.3391 13.9699 19.9891 12.3999 19.9891 10.7299C19.9891 9.05986 19.3391 7.48986 18.1591 6.30986C15.7191 3.86986 11.7591 3.86986 9.31906 6.30986L5.07906 10.5499C4.08906 11.5399 3.53906 12.8599 3.53906 14.2599C3.53906 15.6599 4.08906 16.9799 5.07906 17.9699C5.36906 18.2599 5.36906 18.7399 5.07906 19.0299C4.78906 19.3199 4.30906 19.3199 4.01906 19.0299C2.74906 17.7499 2.03906 16.0599 2.03906 14.2599C2.03906 12.4599 2.73906 10.7599 4.01906 9.48986L8.25906 5.24986C11.2791 2.22986 16.1991 2.22986 19.2191 5.24986C20.6791 6.70986 21.4891 8.65986 21.4891 10.7299C21.4891 12.7999 20.6791 14.7499 19.2191 16.2099L15.3291 20.0999C14.4991 20.9299 13.4191 21.3399 12.3291 21.3399Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Paperclip2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.3297 12.1499L9.85969 14.6199C8.48969 15.9899 8.48969 18.1999 9.85969 19.5699C11.2297 20.9399 13.4397 20.9399 14.8097 19.5699L18.6997 15.6799C21.4297 12.9499 21.4297 8.50992 18.6997 5.77992C15.9697 3.04992 11.5297 3.04992 8.79969 5.77992L4.55969 10.0199C2.21969 12.3599 2.21969 16.1599 4.55969 18.5099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Paperclip2Bold,
  broken: Paperclip2Broken,
  bulk: Paperclip2Bulk,
  linear: Paperclip2Linear,
  outline: Paperclip2Outline,
  twotone: Paperclip2Twotone,
};

export const Paperclip2Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
