import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const MessageProgrammingBold = ({
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
        d="M16 1.96875H8C4 1.96875 2 3.96875 2 7.96875V12.9688C2 17.9688 4 18.9688 8 18.9688H8.5C8.78 18.9688 9.14 19.1488 9.3 19.3688L10.8 21.3688C11.46 22.2488 12.54 22.2488 13.2 21.3688L14.7 19.3688C14.89 19.1188 15.19 18.9688 15.5 18.9688H16C20 18.9688 22 16.9688 22 12.9688V7.96875C22 3.96875 20 1.96875 16 1.96875ZM8.53 12.1687C8.82 12.4587 8.82 12.9387 8.53 13.2287C8.38 13.3787 8.19 13.4487 8 13.4487C7.81 13.4487 7.62 13.3787 7.47 13.2287L5.47 11.2287C5.18 10.9387 5.18 10.4587 5.47 10.1687L7.47 8.16875C7.76 7.87875 8.24 7.87875 8.53 8.16875C8.82 8.45875 8.82 8.93875 8.53 9.22875L7.06 10.6987L8.53 12.1687ZM13.69 8.65875L11.69 13.3287C11.57 13.6087 11.29 13.7787 11 13.7787C10.9 13.7787 10.8 13.7587 10.7 13.7188C10.32 13.5588 10.14 13.1187 10.31 12.7287L12.31 8.05875C12.47 7.67875 12.91 7.49875 13.3 7.66875C13.68 7.83875 13.85 8.27875 13.69 8.65875ZM18.53 11.2287L16.53 13.2287C16.38 13.3787 16.19 13.4487 16 13.4487C15.81 13.4487 15.62 13.3787 15.47 13.2287C15.18 12.9387 15.18 12.4587 15.47 12.1687L16.94 10.6987L15.47 9.22875C15.18 8.93875 15.18 8.45875 15.47 8.16875C15.76 7.87875 16.24 7.87875 16.53 8.16875L18.53 10.1687C18.82 10.4587 18.82 10.9387 18.53 11.2287Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageProgrammingBroken = ({
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
        d="M22 12V12.97C22 16.97 20 18.97 16 18.97H15.5C15.19 18.97 14.89 19.12 14.7 19.37L13.2 21.37C12.54 22.25 11.46 22.25 10.8 21.37L9.29999 19.37C9.12999 19.15 8.77 18.97 8.5 18.97H8C4 18.97 2 17.97 2 12.97V7.96997C2 3.96997 4 1.96997 8 1.96997H16C20 1.96997 22 3.96997 22 7.96997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 8.69995L6 10.7L8 12.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 8.69995L18 10.7L16 12.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 8.37012L11 13.0302"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageProgrammingBulk = ({
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
        d="M8.5 18.9697H8C4 18.9697 2 17.9697 2 12.9697V7.96973C2 3.96973 4 1.96973 8 1.96973H16C20 1.96973 22 3.96973 22 7.96973V12.9697C22 16.9697 20 18.9697 16 18.9697H15.5C15.19 18.9697 14.89 19.1198 14.7 19.3698L13.2 21.3698C12.54 22.2498 11.46 22.2498 10.8 21.3698L9.29999 19.3698C9.13999 19.1498 8.78 18.9697 8.5 18.9697Z"
        fill="currentColor"
      />
      <Path
        d="M7.99945 13.4502C7.80945 13.4502 7.61945 13.3801 7.46945 13.2301L5.46945 11.2301C5.17945 10.9401 5.17945 10.4601 5.46945 10.1701L7.46945 8.17014C7.75945 7.88014 8.23945 7.88014 8.52945 8.17014C8.81945 8.46014 8.81945 8.94013 8.52945 9.23013L7.05945 10.7002L8.52945 12.1701C8.81945 12.4601 8.81945 12.9401 8.52945 13.2301C8.37945 13.3801 8.18945 13.4502 7.99945 13.4502Z"
        fill="currentColor"
      />
      <Path
        d="M15.9995 13.4502C15.8095 13.4502 15.6195 13.3801 15.4695 13.2301C15.1795 12.9401 15.1795 12.4601 15.4695 12.1701L16.9395 10.7002L15.4695 9.23013C15.1795 8.94013 15.1795 8.46014 15.4695 8.17014C15.7595 7.88014 16.2395 7.88014 16.5295 8.17014L18.5295 10.1701C18.8195 10.4601 18.8195 10.9401 18.5295 11.2301L16.5295 13.2301C16.3795 13.3801 16.1895 13.4502 15.9995 13.4502Z"
        fill="currentColor"
      />
      <Path
        d="M11.0004 13.7798C10.9004 13.7798 10.8004 13.7597 10.7004 13.7197C10.3204 13.5597 10.1404 13.1197 10.3104 12.7297L12.3104 8.05975C12.4704 7.67975 12.9103 7.49973 13.3003 7.66973C13.6803 7.82973 13.8604 8.26972 13.6904 8.65972L11.6904 13.3298C11.5704 13.6098 11.2904 13.7798 11.0004 13.7798Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageProgrammingLinear = ({
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
        d="M8.5 18.97H8C4 18.97 2 17.97 2 12.97V7.96997C2 3.96997 4 1.96997 8 1.96997H16C20 1.96997 22 3.96997 22 7.96997V12.97C22 16.97 20 18.97 16 18.97H15.5C15.19 18.97 14.89 19.12 14.7 19.37L13.2 21.37C12.54 22.25 11.46 22.25 10.8 21.37L9.29999 19.37C9.13999 19.15 8.78 18.97 8.5 18.97Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 8.69995L6 10.7L8 12.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 8.69995L18 10.7L16 12.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 8.37012L11 13.0302"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageProgrammingOutline = ({
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
        d="M12 22.7798C11.31 22.7798 10.66 22.4298 10.2 21.8198L8.70001 19.8198C8.67001 19.7798 8.55 19.7297 8.5 19.7197H8C3.83 19.7197 1.25 18.5897 1.25 12.9697V7.96973C1.25 3.54973 3.58 1.21973 8 1.21973H16C20.42 1.21973 22.75 3.54973 22.75 7.96973V12.9697C22.75 17.3897 20.42 19.7197 16 19.7197H15.5C15.42 19.7197 15.35 19.7598 15.3 19.8198L13.8 21.8198C13.34 22.4298 12.69 22.7798 12 22.7798ZM8 2.71973C4.42 2.71973 2.75 4.38973 2.75 7.96973V12.9697C2.75 17.4897 4.3 18.2197 8 18.2197H8.5C9.01 18.2197 9.58999 18.5097 9.89999 18.9197L11.4 20.9197C11.75 21.3797 12.25 21.3797 12.6 20.9197L14.1 18.9197C14.43 18.4797 14.95 18.2197 15.5 18.2197H16C19.58 18.2197 21.25 16.5497 21.25 12.9697V7.96973C21.25 4.38973 19.58 2.71973 16 2.71973H8Z"
        fill="currentColor"
      />
      <Path
        d="M7.99945 13.4497C7.80945 13.4497 7.61945 13.3796 7.46945 13.2296L5.46945 11.2296C5.17945 10.9396 5.17945 10.4596 5.46945 10.1696L7.46945 8.16965C7.75945 7.87965 8.23945 7.87965 8.52945 8.16965C8.81945 8.45965 8.81945 8.93965 8.52945 9.22965L7.05945 10.6997L8.52945 12.1696C8.81945 12.4596 8.81945 12.9396 8.52945 13.2296C8.37945 13.3796 8.18945 13.4497 7.99945 13.4497Z"
        fill="currentColor"
      />
      <Path
        d="M15.9995 13.4497C15.8095 13.4497 15.6195 13.3796 15.4695 13.2296C15.1795 12.9396 15.1795 12.4596 15.4695 12.1696L16.9395 10.6997L15.4695 9.22965C15.1795 8.93965 15.1795 8.45965 15.4695 8.16965C15.7595 7.87965 16.2395 7.87965 16.5295 8.16965L18.5295 10.1696C18.8195 10.4596 18.8195 10.9396 18.5295 11.2296L16.5295 13.2296C16.3795 13.3796 16.1895 13.4497 15.9995 13.4497Z"
        fill="currentColor"
      />
      <Path
        d="M11.0004 13.7798C10.9004 13.7798 10.8004 13.7597 10.7004 13.7197C10.3204 13.5597 10.1404 13.1197 10.3104 12.7297L12.3104 8.05975C12.4704 7.67975 12.9103 7.49973 13.3003 7.66973C13.6803 7.82973 13.8604 8.26972 13.6904 8.65972L11.6904 13.3298C11.5704 13.6098 11.2904 13.7798 11.0004 13.7798Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageProgrammingTwotone = ({
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
        d="M8.5 18.9697H8C4 18.9697 2 17.9697 2 12.9697V7.96973C2 3.96973 4 1.96973 8 1.96973H16C20 1.96973 22 3.96973 22 7.96973V12.9697C22 16.9697 20 18.9697 16 18.9697H15.5C15.19 18.9697 14.89 19.1198 14.7 19.3698L13.2 21.3698C12.54 22.2498 11.46 22.2498 10.8 21.3698L9.29999 19.3698C9.13999 19.1498 8.78 18.9697 8.5 18.9697Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8 8.7002L6 10.7002L8 12.7002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16 8.7002L18 10.7002L16 12.7002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M13 8.37012L11 13.0302"
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
  bold: MessageProgrammingBold,
  broken: MessageProgrammingBroken,
  bulk: MessageProgrammingBulk,
  linear: MessageProgrammingLinear,
  outline: MessageProgrammingOutline,
  twotone: MessageProgrammingTwotone,
};

export const MessageProgrammingIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
