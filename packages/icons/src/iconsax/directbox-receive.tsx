import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const DirectboxReceiveBold = ({
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
        d="M18.6897 11.5308C18.1197 11.3808 17.4497 11.3008 16.6497 11.3008C15.5397 11.3008 15.1297 11.5708 14.5597 12.0008C14.5297 12.0208 14.4997 12.0508 14.4697 12.0808L13.5197 13.0908C12.7197 13.9308 11.2797 13.9408 10.4797 13.0808L9.52969 12.0808C9.49969 12.0508 9.46969 12.0208 9.43969 12.0008C8.86969 11.5708 8.45969 11.3008 7.34969 11.3008C6.54969 11.3008 5.87969 11.3808 5.30969 11.5308C2.92969 12.1708 2.92969 14.0608 2.92969 15.7208V16.6508C2.92969 19.1608 2.92969 22.0008 8.27969 22.0008H15.7197C19.2697 22.0008 21.0697 20.2008 21.0697 16.6508V15.7208C21.0697 14.0608 21.0697 12.1708 18.6897 11.5308ZM14.3297 18.4008H9.66969C9.28969 18.4008 8.97969 18.0908 8.97969 17.7008C8.97969 17.3108 9.28969 17.0008 9.66969 17.0008H14.3297C14.7097 17.0008 15.0197 17.3108 15.0197 17.7008C15.0197 18.0908 14.7097 18.4008 14.3297 18.4008Z"
        fill="currentColor"
      />
      <Path
        d="M12.6681 2.67C12.6681 2.3 12.3681 2 11.9981 2C11.6281 2 11.3281 2.3 11.3281 2.67V4H12.6781V2.67H12.6681Z"
        fill="currentColor"
      />
      <Path
        d="M19.2091 8.42V10.12C19.1691 10.1 19.1191 10.09 19.0791 10.08H19.0691C18.3591 9.89 17.5691 9.8 16.6491 9.8C15.1091 9.8 14.3791 10.25 13.7191 10.75C13.5791 10.85 13.4791 10.95 13.3791 11.05L12.4291 12.06C12.3291 12.16 12.1691 12.22 11.9991 12.22C11.9191 12.22 11.7191 12.21 11.5691 12.05L10.5891 11.02C10.4891 10.91 10.3691 10.82 10.3391 10.8C9.61906 10.25 8.88906 9.8 7.34906 9.8C6.42906 9.8 5.63906 9.89 4.91906 10.08C4.87906 10.09 4.82906 10.1 4.78906 10.12V8.42C4.78906 6.35 4.78906 4 9.20906 4H11.3291V7.45L10.6791 6.8C10.4091 6.53 9.98906 6.53 9.71906 6.8C9.45906 7.06 9.45906 7.49 9.71906 7.75L11.5191 9.55C11.5291 9.56 11.5391 9.56 11.5391 9.57C11.5991 9.62 11.6691 9.67 11.7391 9.7C11.8291 9.73 11.9091 9.75 11.9991 9.75C12.0891 9.75 12.1691 9.73 12.2591 9.7C12.3391 9.67 12.4091 9.62 12.4791 9.55L14.2791 7.75C14.5391 7.49 14.5391 7.06 14.2791 6.8C14.0091 6.53 13.5891 6.53 13.3191 6.8L12.6691 7.45V4H14.7891C19.2091 4 19.2091 6.35 19.2091 8.42Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectboxReceiveBroken = ({
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
        d="M12 2V8L14 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 8L10 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 12V8.00004C5 5.99004 5 4.33004 8 4.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12V8.00004C19 5.99004 19 4.33004 16 4.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectboxReceiveBulk = ({
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
        d="M14.7891 4H9.20906C4.78906 4 4.78906 6.35 4.78906 8.42V12.21C4.78906 12.43 4.88906 12.63 5.05906 12.76C5.22906 12.89 5.45906 12.94 5.66906 12.88C6.11906 12.76 6.67906 12.7 7.34906 12.7C8.01906 12.7 8.15906 12.78 8.55906 13.08L9.46906 14.04C10.1191 14.74 11.0491 15.14 12.0091 15.14C12.9691 15.14 13.8891 14.74 14.5491 14.04L15.4591 13.08C15.8591 12.78 15.9991 12.7 16.6691 12.7C17.3391 12.7 17.8991 12.76 18.3491 12.88C18.5591 12.94 18.7791 12.89 18.9591 12.76C19.1291 12.63 19.2291 12.42 19.2291 12.21V8.42C19.2091 6.35 19.2091 4 14.7891 4Z"
        fill="currentColor"
      />
      <Path
        d="M14.2743 6.8C14.0143 6.54 13.5843 6.54 13.3243 6.8L12.6743 7.45V2.67C12.6743 2.3 12.3643 2 11.9943 2C11.6243 2 11.3143 2.3 11.3143 2.67V7.44L10.6743 6.8C10.4143 6.54 9.9843 6.54 9.7243 6.8C9.4643 7.06 9.4643 7.49 9.7243 7.75L11.5243 9.55C11.5343 9.56 11.5343 9.56 11.5443 9.56C11.6043 9.61 11.6643 9.66 11.7443 9.69C11.8243 9.72 11.9143 9.74 12.0043 9.74C12.0943 9.74 12.1743 9.72 12.2643 9.69C12.3443 9.66 12.4243 9.61 12.4843 9.54L14.2843 7.74C14.5343 7.49 14.5343 7.06 14.2743 6.8Z"
        fill="currentColor"
      />
      <Path
        d="M18.6897 11.5298C18.1197 11.3798 17.4497 11.2998 16.6497 11.2998C15.5397 11.2998 15.1297 11.5698 14.5597 11.9998C14.5297 12.0198 14.4997 12.0498 14.4697 12.0798L13.5197 13.0898C12.7197 13.9298 11.2797 13.9398 10.4797 13.0798L9.52969 12.0798C9.49969 12.0498 9.46969 12.0198 9.43969 11.9998C8.86969 11.5698 8.45969 11.2998 7.34969 11.2998C6.54969 11.2998 5.87969 11.3798 5.30969 11.5298C2.92969 12.1698 2.92969 14.0598 2.92969 15.7198V16.6498C2.92969 19.1598 2.92969 21.9998 8.27969 21.9998H15.7197C19.2697 21.9998 21.0697 20.1998 21.0697 16.6498V15.7198C21.0697 14.0598 21.0697 12.1698 18.6897 11.5298ZM14.3297 18.3998H9.66969C9.28969 18.3998 8.97969 18.0898 8.97969 17.6998C8.97969 17.3098 9.28969 16.9998 9.66969 16.9998H14.3297C14.7097 16.9998 15.0197 17.3098 15.0197 17.6998C15.0197 18.0898 14.7097 18.3998 14.3297 18.3998Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.0205 17.7C15.0205 18.09 14.7105 18.4 14.3305 18.4H9.67047C9.29047 18.4 8.98047 18.09 8.98047 17.7C8.98047 17.31 9.29047 17 9.67047 17H14.3305C14.7105 17 15.0205 17.31 15.0205 17.7Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectboxReceiveLinear = ({
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
        d="M12 2V8L14 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 8L10 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 12V8.00004C5 5.99004 5 4.33004 8 4.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12V8.00004C19 5.99004 19 4.33004 16 4.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectboxReceiveOutline = ({
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
        d="M12 8.75C11.9 8.75 11.81 8.73 11.71 8.69C11.43 8.58 11.25 8.3 11.25 8V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V6.19L13.47 5.47C13.76 5.18 14.24 5.18 14.53 5.47C14.82 5.76 14.82 6.24 14.53 6.53L12.53 8.53C12.39 8.67 12.19 8.75 12 8.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.9995 8.74994C11.8095 8.74994 11.6195 8.67994 11.4695 8.52994L9.46945 6.52994C9.17945 6.23994 9.17945 5.75994 9.46945 5.46994C9.75945 5.17994 10.2395 5.17994 10.5295 5.46994L12.5295 7.46994C12.8195 7.75994 12.8195 8.23994 12.5295 8.52994C12.3795 8.67994 12.1895 8.74994 11.9995 8.74994Z"
        fill="currentColor"
      />
      <Path
        d="M16 22.75H8C2.25 22.75 2.25 19.7 2.25 17V16C2.25 13.77 2.25 11.25 7 11.25C8.19 11.25 8.63 11.54 9.25 12C9.28 12.03 9.32 12.05 9.35 12.09L10.37 13.17C11.23 14.08 12.79 14.08 13.65 13.17L14.67 12.09C14.7 12.06 14.73 12.03 14.77 12C15.39 11.53 15.83 11.25 17.02 11.25C21.77 11.25 21.77 13.77 21.77 16V17C21.75 20.82 19.82 22.75 16 22.75ZM7 12.75C3.75 12.75 3.75 13.77 3.75 16V17C3.75 19.74 3.75 21.25 8 21.25H16C18.98 21.25 20.25 19.98 20.25 17V16C20.25 13.77 20.25 12.75 17 12.75C16.28 12.75 16.13 12.84 15.7 13.16L14.73 14.19C14.01 14.95 13.04 15.37 12 15.37C10.96 15.37 9.99 14.95 9.27 14.19L8.3 13.16C7.87 12.84 7.72 12.75 7 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M5 12.75C4.59 12.75 4.25 12.41 4.25 12V7.99996C4.25 6.05996 4.25 3.64996 7.93 3.29996C8.34 3.25996 8.71 3.55996 8.75 3.97996C8.79 4.38996 8.49 4.75996 8.07 4.79996C5.75 5.00996 5.75 5.94996 5.75 7.99996V12C5.75 12.41 5.41 12.75 5 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.9994 12.7502C18.5894 12.7502 18.2494 12.4102 18.2494 12.0002V8.00022C18.2494 5.95022 18.2494 5.01022 15.9294 4.79022C15.5194 4.75022 15.2194 4.38022 15.2594 3.97022C15.2994 3.56022 15.6594 3.25022 16.0794 3.30022C19.7594 3.65022 19.7594 6.06022 19.7594 8.00022V12.0002C19.7494 12.4102 19.4094 12.7502 18.9994 12.7502Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectboxReceiveTwotone = ({
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
      <G opacity="0.4">
        <Path
          d="M12 2V8L14 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 8L10 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5 12V8.00004C5 5.99004 5 4.33004 8 4.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M19 12V8.00004C19 5.99004 19 4.33004 16 4.04004"
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
  bold: DirectboxReceiveBold,
  broken: DirectboxReceiveBroken,
  bulk: DirectboxReceiveBulk,
  linear: DirectboxReceiveLinear,
  outline: DirectboxReceiveOutline,
  twotone: DirectboxReceiveTwotone,
};

export const DirectboxReceiveIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default DirectboxReceiveIcon;
