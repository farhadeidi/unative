import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const RepeateMusicBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.91 17.1814C3.72 17.1814 3.53 17.1114 3.38 16.9614C2.01 15.5814 1.25 13.7614 1.25 11.8314C1.25 7.82139 4.5 4.56139 8.5 4.56139L14.57 4.58139L13.48 3.54139C13.18 3.25139 13.17 2.78139 13.46 2.48139C13.75 2.18139 14.22 2.17139 14.52 2.46139L16.96 4.80139C17.18 5.01139 17.25 5.34139 17.14 5.62139C17.03 5.90139 16.75 6.09139 16.44 6.09139L8.5 6.07139C5.33 6.07139 2.75 8.66139 2.75 11.8414C2.75 13.3714 3.35 14.8214 4.44 15.9114C4.73 16.2014 4.73 16.6814 4.44 16.9714C4.29 17.1114 4.1 17.1814 3.91 17.1814Z"
        fill="currentColor"
      />
      <Path
        d="M9.9999 21.75C9.8099 21.75 9.6299 21.68 9.4799 21.54L7.0399 19.2C6.8199 18.99 6.7499 18.66 6.8599 18.38C6.9699 18.1 7.2499 17.91 7.5599 17.91L15.5099 17.93C18.6799 17.93 21.2599 15.34 21.2599 12.16C21.2599 10.63 20.6599 9.18 19.5699 8.09C19.2799 7.8 19.2799 7.32 19.5699 7.03C19.8599 6.74 20.3399 6.74 20.6299 7.03C21.9999 8.41 22.7599 10.23 22.7599 12.16C22.7599 16.17 19.5099 19.43 15.5099 19.43L9.4399 19.41L10.5299 20.45C10.8299 20.74 10.8399 21.21 10.5499 21.51C10.3899 21.67 10.1999 21.75 9.9999 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M9 15.5H15C16.92 15.5 18.5 13.93 18.5 12C18.5 10.08 16.93 8.5 15 8.5H9C7.08 8.5 5.5 10.07 5.5 12C5.5 13.93 7.07 15.5 9 15.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RepeateMusicBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.0005 21.0001L7.56055 18.66L15.5105 18.6801C19.0805 18.6801 22.0105 15.75 22.0105 12.16C22.0105 10.37 21.2806 8.74006 20.1006 7.56006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 12H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.56055 4.97998C4.99055 4.97998 2.06055 7.91 2.06055 11.5C2.06055 13.29 2.79055 14.92 3.97055 16.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.0602 2.65991L16.5002 4.99994L12.9902 4.98993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RepeateMusicBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.66 16.9314C3.47 16.9314 3.28 16.8614 3.13 16.7114C1.76 15.3314 1 13.5114 1 11.5814C1 7.57141 4.25 4.31139 8.25 4.31139L14.32 4.33141L13.23 3.29137C12.93 3.00137 12.92 2.53137 13.21 2.23137C13.5 1.93137 13.97 1.92141 14.27 2.21141L16.71 4.55138C16.93 4.76138 17 5.09139 16.89 5.37139C16.78 5.65139 16.5 5.84142 16.19 5.84142L8.24001 5.8214C5.07001 5.8214 2.49001 8.41142 2.49001 11.5914C2.49001 13.1214 3.08999 14.5714 4.17999 15.6614C4.46999 15.9514 4.46999 16.4314 4.17999 16.7214C4.03999 16.8614 3.85 16.9314 3.66 16.9314Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M9.7499 21.5014C9.5599 21.5014 9.3799 21.4314 9.2299 21.2914L6.7899 18.9514C6.5699 18.7414 6.4999 18.4114 6.6099 18.1314C6.7199 17.8514 6.9999 17.6614 7.3099 17.6614L15.2599 17.6814C18.4299 17.6814 21.0099 15.0914 21.0099 11.9114C21.0099 10.3814 20.4099 8.93146 19.3199 7.84146C19.0299 7.55146 19.0299 7.07146 19.3199 6.78146C19.6099 6.49146 20.0899 6.49146 20.3799 6.78146C21.7499 8.16146 22.5099 9.98141 22.5099 11.9114C22.5099 15.9214 19.2599 19.1814 15.2599 19.1814L9.1899 19.1614L10.2799 20.2014C10.5799 20.4914 10.5899 20.9614 10.2999 21.2614C10.1399 21.4214 9.9499 21.5014 9.7499 21.5014Z"
        fill="currentColor"
      />
      <Path
        d="M9 15.5H15C16.93 15.5 18.5 13.92 18.5 12C18.5 10.08 16.93 8.5 15 8.5H9C7.07 8.5 5.5 10.08 5.5 12C5.5 13.92 7.07 15.5 9 15.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RepeateMusicLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14 3L16.44 5.34003L8.48999 5.32001C4.91999 5.32001 1.98999 8.25003 1.98999 11.84C1.98999 13.63 2.71998 15.26 3.89998 16.44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0001 21.0001L7.56006 18.66L15.5101 18.6801C19.0801 18.6801 22.0101 15.75 22.0101 12.16C22.0101 10.37 21.2801 8.74006 20.1001 7.56006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 12H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RepeateMusicOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.91 17.1799C3.72 17.1799 3.53 17.1099 3.38 16.9599C2.01 15.5799 1.25 13.7599 1.25 11.8299C1.25 7.81994 4.5 4.55992 8.5 4.55992L14.57 4.57994L13.48 3.5399C13.18 3.2499 13.17 2.77991 13.46 2.47991C13.75 2.17991 14.22 2.16995 14.52 2.45995L16.96 4.79991C17.18 5.00991 17.25 5.33992 17.14 5.61992C17.03 5.89992 16.75 6.08995 16.44 6.08995L8.49001 6.06993C5.32001 6.06993 2.74001 8.65995 2.74001 11.84C2.74001 13.37 3.33999 14.8199 4.42999 15.9099C4.71999 16.1999 4.71999 16.6799 4.42999 16.9699C4.28999 17.1099 4.1 17.1799 3.91 17.1799Z"
        fill="currentColor"
      />
      <Path
        d="M9.9999 21.75C9.8099 21.75 9.6299 21.6799 9.4799 21.5399L7.0399 19.2C6.8199 18.99 6.7499 18.66 6.8599 18.38C6.9699 18.1 7.2499 17.9099 7.5599 17.9099L15.5099 17.93C18.6799 17.93 21.2599 15.3399 21.2599 12.1599C21.2599 10.6299 20.6599 9.18 19.5699 8.09C19.2799 7.8 19.2799 7.32 19.5699 7.03C19.8599 6.74 20.3399 6.74 20.6299 7.03C21.9999 8.41 22.7599 10.2299 22.7599 12.1599C22.7599 16.1699 19.5099 19.43 15.5099 19.43L9.4399 19.4099L10.5299 20.45C10.8299 20.74 10.8399 21.21 10.5499 21.51C10.3899 21.67 10.1999 21.75 9.9999 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M15 12.75H9C8.59 12.75 8.25 12.41 8.25 12C8.25 11.59 8.59 11.25 9 11.25H15C15.41 11.25 15.75 11.59 15.75 12C15.75 12.41 15.41 12.75 15 12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const RepeateMusicTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.0002 3L16.4402 5.34003L8.49023 5.32001C4.92023 5.32001 1.99023 8.25003 1.99023 11.84C1.99023 13.63 2.72022 15.26 3.90022 16.44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0005 21.0001L7.56055 18.66L15.5105 18.6801C19.0805 18.6801 22.0105 15.75 22.0105 12.16C22.0105 10.37 21.2806 8.74006 20.1006 7.56006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9 12H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: RepeateMusicBold,
  broken: RepeateMusicBroken,
  bulk: RepeateMusicBulk,
  linear: RepeateMusicLinear,
  outline: RepeateMusicOutline,
  twotone: RepeateMusicTwotone,
};

export const RepeateMusicIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
