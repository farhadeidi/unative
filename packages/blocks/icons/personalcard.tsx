import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const PersonalcardBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 3H6C3.79 3 2 4.78 2 6.97V17.03C2 19.22 3.79 21 6 21H18C20.21 21 22 19.22 22 17.03V6.97C22 4.78 20.21 3 18 3ZM8.5 7.17C9.77 7.17 10.81 8.21 10.81 9.48C10.81 10.75 9.77 11.79 8.5 11.79C7.23 11.79 6.19 10.75 6.19 9.48C6.19 8.21 7.23 7.17 8.5 7.17ZM12.37 16.66C12.28 16.76 12.14 16.82 12 16.82H5C4.86 16.82 4.72 16.76 4.63 16.66C4.54 16.56 4.49 16.42 4.5 16.28C4.67 14.6 6.01 13.27 7.69 13.11C8.22 13.06 8.77 13.06 9.3 13.11C10.98 13.27 12.33 14.6 12.49 16.28C12.51 16.42 12.46 16.56 12.37 16.66ZM19 16.75H17C16.59 16.75 16.25 16.41 16.25 16C16.25 15.59 16.59 15.25 17 15.25H19C19.41 15.25 19.75 15.59 19.75 16C19.75 16.41 19.41 16.75 19 16.75ZM19 12.75H15C14.59 12.75 14.25 12.41 14.25 12C14.25 11.59 14.59 11.25 15 11.25H19C19.41 11.25 19.75 11.59 19.75 12C19.75 12.41 19.41 12.75 19 12.75ZM19 8.75H14C13.59 8.75 13.25 8.41 13.25 8C13.25 7.59 13.59 7.25 14 7.25H19C19.41 7.25 19.75 7.59 19.75 8C19.75 8.41 19.41 8.75 19 8.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PersonalcardBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21H7C3 21 2 20 2 16V12.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 8H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 12H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 16H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.49945 11.2899C9.49909 11.2899 10.3095 10.4796 10.3095 9.47992C10.3095 8.48029 9.49909 7.66992 8.49945 7.66992C7.49982 7.66992 6.68945 8.48029 6.68945 9.47992C6.68945 10.4796 7.49982 11.2899 8.49945 11.2899Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PersonalcardBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 3H6C3.79 3 2 4.78 2 6.97V17.03C2 19.22 3.79 21 6 21H18C20.21 21 22 19.22 22 17.03V6.97C22 4.78 20.21 3 18 3Z"
        fill="currentColor"
      />
      <Path
        d="M19 8.75H14C13.59 8.75 13.25 8.41 13.25 8C13.25 7.59 13.59 7.25 14 7.25H19C19.41 7.25 19.75 7.59 19.75 8C19.75 8.41 19.41 8.75 19 8.75Z"
        fill="currentColor"
      />
      <Path
        d="M19 12.75H15C14.59 12.75 14.25 12.41 14.25 12C14.25 11.59 14.59 11.25 15 11.25H19C19.41 11.25 19.75 11.59 19.75 12C19.75 12.41 19.41 12.75 19 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M19 16.75H17C16.59 16.75 16.25 16.41 16.25 16C16.25 15.59 16.59 15.25 17 15.25H19C19.41 15.25 19.75 15.59 19.75 16C19.75 16.41 19.41 16.75 19 16.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.49945 11.7899C9.77523 11.7899 10.8095 10.7557 10.8095 9.47992C10.8095 8.20414 9.77523 7.16992 8.49945 7.16992C7.22368 7.16992 6.18945 8.20414 6.18945 9.47992C6.18945 10.7557 7.22368 11.7899 8.49945 11.7899Z"
        fill="currentColor"
      />
      <Path
        d="M9.29954 13.1098C8.76954 13.0598 8.21954 13.0598 7.68954 13.1098C6.00954 13.2698 4.65954 14.5998 4.49954 16.2798C4.48954 16.4198 4.52954 16.5598 4.62954 16.6598C4.72954 16.7598 4.85954 16.8298 4.99954 16.8298H11.9995C12.1395 16.8298 12.2795 16.7698 12.3695 16.6698C12.4595 16.5698 12.5095 16.4298 12.4995 16.2898C12.3295 14.5998 10.9895 13.2698 9.29954 13.1098Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PersonalcardLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 8H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 12H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 16H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.49994 11.2899C9.49958 11.2899 10.3099 10.4796 10.3099 9.47992C10.3099 8.48029 9.49958 7.66992 8.49994 7.66992C7.50031 7.66992 6.68994 8.48029 6.68994 9.47992C6.68994 10.4796 7.50031 11.2899 8.49994 11.2899Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PersonalcardOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 21.75H7C2.59 21.75 1.25 20.41 1.25 16V8C1.25 3.59 2.59 2.25 7 2.25H17C21.41 2.25 22.75 3.59 22.75 8V16C22.75 20.41 21.41 21.75 17 21.75ZM7 3.75C3.42 3.75 2.75 4.43 2.75 8V16C2.75 19.57 3.42 20.25 7 20.25H17C20.58 20.25 21.25 19.57 21.25 16V8C21.25 4.43 20.58 3.75 17 3.75H7Z"
        fill="currentColor"
      />
      <Path
        d="M19 8.75H14C13.59 8.75 13.25 8.41 13.25 8C13.25 7.59 13.59 7.25 14 7.25H19C19.41 7.25 19.75 7.59 19.75 8C19.75 8.41 19.41 8.75 19 8.75Z"
        fill="currentColor"
      />
      <Path
        d="M19 12.75H15C14.59 12.75 14.25 12.41 14.25 12C14.25 11.59 14.59 11.25 15 11.25H19C19.41 11.25 19.75 11.59 19.75 12C19.75 12.41 19.41 12.75 19 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M19 16.75H17C16.59 16.75 16.25 16.41 16.25 16C16.25 15.59 16.59 15.25 17 15.25H19C19.41 15.25 19.75 15.59 19.75 16C19.75 16.41 19.41 16.75 19 16.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.50043 12.0399C7.09043 12.0399 5.94043 10.8899 5.94043 9.47992C5.94043 8.06992 7.09043 6.91992 8.50043 6.91992C9.91043 6.91992 11.0604 8.06992 11.0604 9.47992C11.0604 10.8899 9.91043 12.0399 8.50043 12.0399ZM8.50043 8.41992C7.92043 8.41992 7.44043 8.89992 7.44043 9.47992C7.44043 10.0599 7.92043 10.5399 8.50043 10.5399C9.08043 10.5399 9.56043 10.0599 9.56043 9.47992C9.56043 8.89992 9.08043 8.41992 8.50043 8.41992Z"
        fill="currentColor"
      />
      <Path
        d="M11.9999 17.0798C11.6199 17.0798 11.2899 16.7898 11.2499 16.3998C11.1399 15.3198 10.2699 14.4498 9.17991 14.3498C8.71991 14.3098 8.25991 14.3098 7.79991 14.3498C6.70991 14.4498 5.83991 15.3098 5.72991 16.3998C5.68991 16.8098 5.31991 17.1198 4.90991 17.0698C4.49991 17.0298 4.19991 16.6598 4.23991 16.2498C4.41991 14.4498 5.84991 13.0198 7.65991 12.8598C8.20991 12.8098 8.76991 12.8098 9.31991 12.8598C11.1199 13.0298 12.5599 14.4598 12.7399 16.2498C12.7799 16.6598 12.4799 17.0298 12.0699 17.0698C12.0499 17.0798 12.0199 17.0798 11.9999 17.0798Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PersonalcardTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M14 8H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15 12H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M17 16H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.50043 11.2899C9.50007 11.2899 10.3104 10.4796 10.3104 9.47992C10.3104 8.48029 9.50007 7.66992 8.50043 7.66992C7.50079 7.66992 6.69043 8.48029 6.69043 9.47992C6.69043 10.4796 7.50079 11.2899 8.50043 11.2899Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 16.3298C11.86 14.8798 10.71 13.7398 9.26 13.6098C8.76 13.5598 8.25 13.5598 7.74 13.6098C6.29 13.7498 5.14 14.8798 5 16.3298"
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
  bold: PersonalcardBold,
  broken: PersonalcardBroken,
  bulk: PersonalcardBulk,
  linear: PersonalcardLinear,
  outline: PersonalcardOutline,
  twotone: PersonalcardTwotone,
};

export const PersonalcardIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
