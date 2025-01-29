import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const LikeTagBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM16.68 10.5L15.51 14.06C15.36 14.65 14.73 15.13 14.09 15.13H12.24C11.92 15.13 11.47 15.02 11.27 14.82L9.8 13.67C9.77 14.31 9.48 14.58 8.77 14.58H8.29C7.55 14.58 7.25 14.29 7.25 13.59V8.82C7.25 8.12 7.55 7.83 8.29 7.83H8.78C9.52 7.83 9.82 8.12 9.82 8.82V9.18L11.76 6.3C11.96 5.99 12.47 5.77 12.9 5.94C13.37 6.1 13.67 6.62 13.57 7.08L13.33 8.64C13.3 8.77 13.33 8.91 13.42 9C13.5 9.09 13.62 9.15 13.75 9.15H15.7C16.08 9.15 16.4 9.3 16.59 9.57C16.77 9.83 16.8 10.16 16.68 10.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LikeTagBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.65039 13.8L11.2604 15.05C11.4704 15.26 11.9404 15.3599 12.2504 15.3599H14.2304C14.8504 15.3599 15.5304 14.89 15.6904 14.27L16.9404 10.4799C17.2004 9.74994 16.7304 9.12996 15.9504 9.12996H13.8704C13.5604 9.12996 13.3004 8.86996 13.3504 8.50996L13.6104 6.84993C13.7104 6.37993 13.4004 5.85992 12.9304 5.70992C12.5104 5.54992 11.9904 5.7599 11.7904 6.0699L9.6604 9.23995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M7 13.8V8.70996C7 7.97996 7.30999 7.71997 8.03999 7.71997H8.56C9.29 7.71997 9.60001 7.97996 9.60001 8.70996V13.8C9.60001 14.53 9.29 14.79 8.56 14.79H8.03999C7.30999 14.79 7 14.53 7 13.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 4.96997C3 3.32997 4.34 2 6 2H18C19.66 2 21 3.32997 21 4.96997V15.88C21 17.52 19.66 18.85 18 18.85H17.24C16.44 18.85 15.68 19.16 15.12 19.72L13.41 21.41C12.63 22.18 11.36 22.18 10.58 21.41L8.87 19.72C8.31 19.16 7.54 18.85 6.75 18.85H6C4.34 18.85 3 17.52 3 15.88V9.06995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LikeTagBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z"
        fill="currentColor"
      />
      <Path
        d="M16.5805 9.56998C16.3905 9.29998 16.0705 9.15 15.6905 9.15H13.7405C13.6105 9.15 13.4905 9.09998 13.4105 8.99998C13.3305 8.89998 13.2905 8.76998 13.3105 8.62998L13.5505 7.06998C13.6505 6.60998 13.3405 6.07997 12.8805 5.92997C12.4505 5.76997 11.9405 5.98995 11.7405 6.28995L9.80048 9.16996V8.80997C9.80048 8.10997 9.50047 7.81998 8.76047 7.81998H8.27048C7.53048 7.81998 7.23047 8.10997 7.23047 8.80997V13.59C7.23047 14.29 7.53048 14.58 8.27048 14.58H8.76047C9.46047 14.58 9.76047 14.31 9.79047 13.67L11.2605 14.8C11.4605 15 11.9105 15.11 12.2305 15.11H14.0805C14.7205 15.11 15.3605 14.63 15.5005 14.04L16.6705 10.48C16.8005 10.16 16.7705 9.82998 16.5805 9.56998Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LikeTagLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.65002 13.8L11.26 15.05C11.47 15.26 11.94 15.3599 12.25 15.3599H14.23C14.85 15.3599 15.53 14.89 15.69 14.27L16.94 10.4799C17.2 9.74994 16.73 9.12996 15.95 9.12996H13.87C13.56 9.12996 13.3 8.86996 13.35 8.50996L13.61 6.84993C13.71 6.37993 13.4 5.85992 12.93 5.70992C12.51 5.54992 11.99 5.7599 11.79 6.0699L9.66003 9.23995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M7 13.8V8.70996C7 7.97996 7.30999 7.71997 8.03999 7.71997H8.56C9.29 7.71997 9.60001 7.97996 9.60001 8.70996V13.8C9.60001 14.53 9.29 14.79 8.56 14.79H8.03999C7.30999 14.79 7 14.53 7 13.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LikeTagOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.2293 16.1101H12.2493C11.7893 16.1101 11.1193 15.9701 10.7293 15.5801L9.1893 14.3901L10.1093 13.2001L11.7193 14.4501C11.8393 14.5401 12.0593 14.6001 12.2493 14.6001H14.2293C14.5293 14.6001 14.8893 14.3401 14.9593 14.0801L16.2193 10.2301C16.2493 10.1501 16.2793 10.0401 16.2293 9.96009C16.1893 9.90009 16.0793 9.86011 15.9493 9.86011H13.8693C13.4993 9.86011 13.1493 9.70017 12.8993 9.42017C12.6593 9.14017 12.5493 8.76013 12.5993 8.38013L12.8593 6.71009C12.8893 6.58009 12.7993 6.43014 12.6893 6.39014C12.5993 6.36014 12.4493 6.41009 12.4093 6.46009L10.2793 9.63013L9.0293 8.79016L11.1593 5.62012C11.5793 4.99012 12.4693 4.7001 13.1893 4.9701C13.9993 5.2401 14.5193 6.14011 14.3393 6.9801L14.1293 8.3501H15.9493C16.5793 8.3501 17.1293 8.62009 17.4593 9.09009C17.7793 9.55009 17.8493 10.1401 17.6493 10.7101L16.4093 14.4901C16.1793 15.3801 15.2193 16.1101 14.2293 16.1101Z"
        fill="currentColor"
      />
      <Path
        d="M8.56 15.54H8.03999C6.47999 15.54 6.25 14.45 6.25 13.8V8.70996C6.25 8.05996 6.47999 6.96997 8.03999 6.96997H8.56C10.12 6.96997 10.35 8.05996 10.35 8.70996V13.8C10.35 14.45 10.12 15.54 8.56 15.54ZM7.78 14.03C7.81 14.03 7.88999 14.04 8.03999 14.04H8.56C8.72 14.04 8.81 14.02 8.84 14.01C8.84 13.99 8.85001 13.93 8.85001 13.8V8.70996C8.85001 8.57996 8.84 8.50999 8.83 8.48999C8.81 8.48999 8.73 8.47998 8.56 8.47998H8.03999C7.87999 8.47998 7.78999 8.50001 7.75999 8.51001C7.75999 8.53001 7.75 8.58997 7.75 8.71997V13.8101C7.75 13.9401 7.76 14.01 7.77 14.04C7.77 14.03 7.78 14.03 7.78 14.03Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C11.3 22.75 10.59 22.48 10.06 21.95L8.35001 20.26C7.92001 19.84 7.35999 19.61 6.75999 19.61H6C3.93 19.61 2.25 17.94 2.25 15.89V4.97998C2.25 2.92998 3.93 1.26001 6 1.26001H18C20.07 1.26001 21.75 2.92998 21.75 4.97998V15.89C21.75 17.94 20.07 19.61 18 19.61H17.24C16.64 19.61 16.07 19.84 15.65 20.26L13.94 21.95C13.41 22.48 12.7 22.75 12 22.75ZM6 2.75C4.76 2.75 3.75 3.74997 3.75 4.96997V15.88C3.75 17.11 4.76 18.1 6 18.1H6.75999C7.75999 18.1 8.7 18.4899 9.41 19.1899L11.12 20.88C11.61 21.36 12.4 21.36 12.89 20.88L14.6 19.1899C15.31 18.4899 16.25 18.1 17.25 18.1H18C19.24 18.1 20.25 17.1 20.25 15.88V4.96997C20.25 3.73997 19.24 2.75 18 2.75H6Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LikeTagTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <G opacity="0.4">
        <Path
          d="M9.65039 13.7999L11.2604 15.0499C11.4704 15.2599 11.9404 15.3598 12.2504 15.3598H14.2304C14.8504 15.3598 15.5304 14.8899 15.6904 14.2699L16.9404 10.4798C17.2004 9.74981 16.7304 9.12984 15.9504 9.12984H13.8704C13.5604 9.12984 13.3004 8.86984 13.3504 8.50984L13.6104 6.84981C13.7104 6.37981 13.4004 5.85979 12.9304 5.70979C12.5104 5.54979 11.9904 5.75978 11.7904 6.06978L9.6604 9.23982"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <Path
          d="M7 13.7998V8.70972C7 7.97972 7.30999 7.71973 8.03999 7.71973H8.56C9.29 7.71973 9.60001 7.97972 9.60001 8.70972V13.7998C9.60001 14.5298 9.29 14.7898 8.56 14.7898H8.03999C7.30999 14.7898 7 14.5298 7 13.7998Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4198C12.63 22.1898 11.36 22.1898 10.58 21.4198L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: LikeTagBold,
  broken: LikeTagBroken,
  bulk: LikeTagBulk,
  linear: LikeTagLinear,
  outline: LikeTagOutline,
  twotone: LikeTagTwotone,
};

export const LikeTagIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default LikeTagIcon;
