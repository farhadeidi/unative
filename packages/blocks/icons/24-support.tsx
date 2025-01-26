import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const I24SupportBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM10.38 13.01C10.79 13.01 11.13 13.35 11.13 13.76C11.13 14.17 10.79 14.51 10.38 14.51H7.7C7.26 14.51 6.85 14.3 6.59 13.94C6.34 13.6 6.28 13.18 6.4 12.78C6.75 11.71 7.61 11.13 8.37 10.61C9.17 10.07 9.62 9.73 9.62 9.15C9.62 8.63 9.2 8.21 8.68 8.21C8.16 8.21 7.75 8.64 7.75 9.16C7.75 9.57 7.41 9.91 7 9.91C6.59 9.91 6.25 9.57 6.25 9.16C6.25 7.82 7.34 6.72 8.69 6.72C10.04 6.72 11.13 7.81 11.13 9.16C11.13 10.57 10.07 11.29 9.22 11.87C8.69 12.23 8.19 12.57 7.94 13.02H10.38V13.01ZM17 13.08H16.79V13.77C16.79 14.18 16.45 14.52 16.04 14.52C15.63 14.52 15.29 14.18 15.29 13.77V13.08H13.33C13.33 13.08 13.33 13.08 13.32 13.08C12.83 13.08 12.38 12.82 12.13 12.4C11.88 11.97 11.88 11.44 12.13 11.02C12.81 9.85 13.6 8.52 14.32 7.36C14.64 6.85 15.25 6.62 15.82 6.78C16.39 6.95 16.79 7.47 16.78 8.07V11.59H17C17.41 11.59 17.75 11.93 17.75 12.34C17.75 12.75 17.41 13.08 17 13.08Z"
        fill="currentColor"
      />
      <Path
        d="M15.2891 11.5806V8.64062C14.6991 9.60062 14.0891 10.6306 13.5391 11.5706H15.2891V11.5806Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const I24SupportBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3 4.96997C3 3.32997 4.34 2 6 2H18C19.66 2 21 3.32997 21 4.96997V15.88C21 17.52 19.66 18.85 18 18.85H17.24C16.44 18.85 15.68 19.16 15.12 19.72L13.41 21.41C12.63 22.18 11.36 22.18 10.58 21.41L8.87 19.72C8.31 19.16 7.54 18.85 6.75 18.85H6C4.34 18.85 3 17.52 3 15.88V9.06995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 9.16003C7 8.23003 7.76 7.46997 8.69 7.46997C9.62 7.46997 10.38 8.23003 10.38 9.16003C10.38 11.04 7.71 11.24 7.12 13.03C7 13.4 7.31 13.77 7.7 13.77H10.38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.0398 13.76V8.05003C16.0398 7.79003 15.8698 7.55997 15.6198 7.48997C15.3698 7.41997 15.0998 7.51997 14.9598 7.73997C14.2398 8.89997 13.4598 10.22 12.7798 11.38C12.6698 11.57 12.6698 11.82 12.7798 12.01C12.8898 12.2 13.0998 12.3199 13.3298 12.3199H16.9998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const I24SupportBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.3802 14.5099H7.70023C7.26023 14.5099 6.85023 14.2999 6.59023 13.9399C6.34023 13.5999 6.28022 13.18 6.40022 12.78C6.75022 11.71 7.61022 11.1299 8.37022 10.6099C9.17022 10.0699 9.62022 9.72996 9.62022 9.14996C9.62022 8.62996 9.20022 8.20996 8.68022 8.20996C8.16022 8.20996 7.74023 8.62996 7.74023 9.14996C7.74023 9.55996 7.40023 9.89996 6.99023 9.89996C6.58023 9.89996 6.24023 9.55996 6.24023 9.14996C6.24023 7.80996 7.33022 6.70996 8.68022 6.70996C10.0302 6.70996 11.1202 7.79996 11.1202 9.14996C11.1202 10.56 10.0602 11.2799 9.21024 11.8599C8.68024 12.2199 8.18022 12.5599 7.93022 13.0099H10.3702C10.7802 13.0099 11.1202 13.3499 11.1202 13.7599C11.1202 14.1699 10.7902 14.5099 10.3802 14.5099Z"
        fill="currentColor"
      />
      <Path
        d="M16.0408 14.5099C15.6308 14.5099 15.2908 14.1699 15.2908 13.7599V13.0699H13.3309C13.3309 13.0699 13.3309 13.0699 13.3209 13.0699C12.8309 13.0699 12.3809 12.81 12.1309 12.39C11.8809 11.96 11.8809 11.4299 12.1309 11.0099C12.8109 9.83995 13.6009 8.50991 14.3209 7.34991C14.6409 6.83991 15.2509 6.60996 15.8209 6.76996C16.3909 6.93996 16.7909 7.45993 16.7809 8.05993V11.58H17.0009C17.4109 11.58 17.7509 11.92 17.7509 12.33C17.7509 12.74 17.4109 13.08 17.0009 13.08H16.7908V13.77C16.7908 14.18 16.4608 14.5099 16.0408 14.5099ZM15.2908 8.63995C14.7008 9.59995 14.0908 10.6299 13.5408 11.5699H15.2908V8.63995Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const I24SupportLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 9.16003C7 8.23003 7.76 7.46997 8.69 7.46997C9.62 7.46997 10.38 8.23003 10.38 9.16003C10.38 11.04 7.71 11.24 7.12 13.03C7 13.4 7.31 13.77 7.7 13.77H10.38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.04 13.76V8.05003C16.04 7.79003 15.87 7.55997 15.62 7.48997C15.37 7.41997 15.1 7.51997 14.96 7.73997C14.24 8.89997 13.46 10.22 12.78 11.38C12.67 11.57 12.67 11.82 12.78 12.01C12.89 12.2 13.1 12.3199 13.33 12.3199H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const I24SupportOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.75C11.3 22.75 10.59 22.48 10.06 21.95L8.35001 20.26C7.92001 19.84 7.35999 19.61 6.75999 19.61H6C3.93 19.61 2.25 17.94 2.25 15.89V4.97998C2.25 2.92998 3.93 1.26001 6 1.26001H18C20.07 1.26001 21.75 2.92998 21.75 4.97998V15.89C21.75 17.94 20.07 19.61 18 19.61H17.24C16.64 19.61 16.07 19.84 15.65 20.26L13.94 21.95C13.41 22.48 12.7 22.75 12 22.75ZM6 2.75C4.76 2.75 3.75 3.74997 3.75 4.96997V15.88C3.75 17.11 4.76 18.1 6 18.1H6.75999C7.75999 18.1 8.7 18.4899 9.41 19.1899L11.12 20.88C11.61 21.36 12.4 21.36 12.89 20.88L14.6 19.1899C15.31 18.4899 16.25 18.1 17.25 18.1H18C19.24 18.1 20.25 17.1 20.25 15.88V4.96997C20.25 3.73997 19.24 2.75 18 2.75H6Z"
        fill="currentColor"
      />
      <Path
        d="M10.3802 14.51H7.70023C7.26023 14.51 6.85023 14.2999 6.59023 13.9399C6.34023 13.5999 6.28022 13.18 6.40022 12.78C6.75022 11.71 7.61022 11.13 8.37022 10.61C9.17022 10.07 9.62022 9.73002 9.62022 9.15002C9.62022 8.63002 9.20022 8.20996 8.68022 8.20996C8.16022 8.20996 7.74023 8.63002 7.74023 9.15002C7.74023 9.56002 7.40023 9.90002 6.99023 9.90002C6.58023 9.90002 6.24023 9.56002 6.24023 9.15002C6.24023 7.81002 7.33022 6.70996 8.68022 6.70996C10.0302 6.70996 11.1202 7.80002 11.1202 9.15002C11.1202 10.56 10.0602 11.28 9.21024 11.86C8.68024 12.22 8.18022 12.56 7.93022 13.01H10.3702C10.7802 13.01 11.1202 13.35 11.1202 13.76C11.1202 14.17 10.7902 14.51 10.3802 14.51Z"
        fill="currentColor"
      />
      <Path
        d="M16.0389 14.5099C15.6289 14.5099 15.2889 14.1699 15.2889 13.7599V13.0699H13.3289C13.3289 13.0699 13.3289 13.0699 13.3189 13.0699C12.8289 13.0699 12.3789 12.81 12.1289 12.39C11.8789 11.96 11.8789 11.4299 12.1289 11.0099C12.8089 9.83995 13.5989 8.50991 14.3189 7.34991C14.6389 6.83991 15.2489 6.60996 15.8189 6.76996C16.3889 6.93996 16.7889 7.45999 16.7789 8.05999V11.5799H16.9989C17.4089 11.5799 17.7489 11.9199 17.7489 12.3299C17.7489 12.7399 17.4089 13.0799 16.9989 13.0799H16.7889V13.77C16.7889 14.18 16.4589 14.5099 16.0389 14.5099ZM15.2889 8.63995C14.6989 9.59995 14.0889 10.6299 13.5389 11.5699H15.2889V8.63995Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const I24SupportTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4198C12.63 22.1898 11.36 22.1898 10.58 21.4198L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7 9.15979C7 8.22979 7.76 7.46973 8.69 7.46973C9.62 7.46973 10.38 8.22979 10.38 9.15979C10.38 11.0398 7.71 11.2398 7.12 13.0298C7 13.3998 7.31 13.7698 7.7 13.7698H10.38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16.0398 13.7599V8.04991C16.0398 7.78991 15.8698 7.55985 15.6198 7.48985C15.3698 7.41985 15.0998 7.51985 14.9598 7.73985C14.2398 8.89985 13.4598 10.2199 12.7798 11.3799C12.6698 11.5699 12.6698 11.8199 12.7798 12.0099C12.8898 12.1999 13.0998 12.3198 13.3298 12.3198H16.9998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: I24SupportBold,
  broken: I24SupportBroken,
  bulk: I24SupportBulk,
  linear: I24SupportLinear,
  outline: I24SupportOutline,
  twotone: I24SupportTwotone,
};

export const I24SupportIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
