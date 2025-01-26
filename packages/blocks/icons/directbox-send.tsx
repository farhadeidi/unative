import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const DirectboxSendBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.6684 4.3L13.3184 4.95C13.5784 5.21 14.0084 5.21 14.2684 4.95C14.5284 4.69 14.5284 4.26 14.2684 4L12.4684 2.2C12.4084 2.14 12.3284 2.09 12.2484 2.05C12.1684 2.02 12.0884 2 11.9984 2C11.9084 2 11.8284 2.02 11.7384 2.05C11.6584 2.08 11.5984 2.13 11.5384 2.18C11.5284 2.19 11.5284 2.19 11.5184 2.19L9.71844 4C9.45844 4.26 9.45844 4.69 9.71844 4.95C9.97844 5.21 10.4084 5.21 10.6684 4.95L11.3184 4.3V6H12.6684V4.3Z"
        fill="currentColor"
      />
      <Path
        d="M19.2091 10.12C19.1691 10.1 19.1191 10.09 19.0791 10.08H19.0691C18.3591 9.89 17.5691 9.8 16.6491 9.8C15.1091 9.8 14.3791 10.25 13.7191 10.75C13.5791 10.85 13.4791 10.95 13.3791 11.05L12.4291 12.06C12.3291 12.16 12.1691 12.22 11.9991 12.22C11.9391 12.22 11.7191 12.21 11.5691 12.05L10.5891 11.02C10.4891 10.91 10.3691 10.82 10.3391 10.8C9.61906 10.25 8.88906 9.8 7.34906 9.8C6.42906 9.8 5.63906 9.89 4.91906 10.08C4.87906 10.09 4.82906 10.1 4.78906 10.12C4.79906 8.13 4.99906 6 9.20906 6H11.3291V9.08C11.3291 9.45 11.6291 9.75 11.9991 9.75C12.3691 9.75 12.6691 9.45 12.6691 9.08V6H14.7891C18.9991 6 19.1991 8.13 19.2091 10.12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectboxSendBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 8V2L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2L14 4"
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
        d="M5 12V10C5 7.99004 5 6.33004 8 6.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12V10C19 7.99004 19 6.33004 16 6.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectboxSendBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.7891 6H9.20906C4.78906 6 4.78906 8.35 4.78906 10.42V12.21C4.78906 12.43 4.88906 12.63 5.05906 12.76C5.22906 12.89 5.45906 12.94 5.66906 12.88C6.11906 12.76 6.67906 12.7 7.34906 12.7C8.01906 12.7 8.15906 12.78 8.55906 13.08L9.46906 14.04C10.1191 14.74 11.0491 15.14 12.0091 15.14C12.9691 15.14 13.8891 14.74 14.5491 14.04L15.4591 13.08C15.8591 12.78 15.9991 12.7 16.6691 12.7C17.3391 12.7 17.8991 12.76 18.3491 12.88C18.5591 12.94 18.7791 12.89 18.9591 12.76C19.1291 12.63 19.2291 12.42 19.2291 12.21V10.42C19.2091 8.35 19.2091 6 14.7891 6Z"
        fill="currentColor"
      />
      <Path
        d="M14.2804 4.95C14.0204 5.21 13.5904 5.21 13.3304 4.95L12.6804 4.3V9.07C12.6804 9.44 12.3804 9.75 12.0004 9.75C11.6204 9.75 11.3204 9.45 11.3204 9.07V4.3L10.6704 4.95C10.4104 5.21 9.98039 5.21 9.72039 4.95C9.46039 4.69 9.46039 4.26 9.72039 4L11.5204 2.2C11.5304 2.19 11.5304 2.19 11.5404 2.19C11.6004 2.14 11.6604 2.09 11.7404 2.06C11.8304 2.02 11.9104 2 12.0004 2C12.0904 2 12.1704 2.02 12.2604 2.05C12.3404 2.08 12.4204 2.13 12.4804 2.2L14.2804 4C14.5404 4.26 14.5404 4.69 14.2804 4.95Z"
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

const DirectboxSendLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 8V2L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2L14 4"
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
        d="M5 12V10C5 7.99004 5 6.33004 8 6.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12V10C19 7.99004 19 6.33004 16 6.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DirectboxSendOutline = ({
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
        d="M11.9995 8.74999C11.5895 8.74999 11.2495 8.40999 11.2495 7.99999V3.80999L10.5295 4.52999C10.2395 4.81999 9.75945 4.81999 9.46945 4.52999C9.17945 4.23999 9.17945 3.75999 9.46945 3.46999L11.4695 1.46999C11.6795 1.25999 12.0095 1.18999 12.2895 1.30999C12.5695 1.41999 12.7495 1.69999 12.7495 1.99999V7.99999C12.7495 8.40999 12.4095 8.74999 11.9995 8.74999Z"
        fill="currentColor"
      />
      <Path
        d="M13.9995 4.74994C13.8095 4.74994 13.6195 4.67994 13.4695 4.52994L11.4695 2.52994C11.1795 2.23994 11.1795 1.75994 11.4695 1.46994C11.7595 1.17994 12.2395 1.17994 12.5295 1.46994L14.5295 3.46994C14.8195 3.75994 14.8195 4.23994 14.5295 4.52994C14.3795 4.67994 14.1895 4.74994 13.9995 4.74994Z"
        fill="currentColor"
      />
      <Path
        d="M16 22.75H8C2.25 22.75 2.25 19.7 2.25 17V16C2.25 13.77 2.25 11.25 7 11.25C8.19 11.25 8.63 11.54 9.25 12C9.28 12.03 9.32 12.05 9.35 12.09L10.37 13.17C11.23 14.08 12.79 14.08 13.65 13.17L14.67 12.09C14.7 12.06 14.73 12.03 14.77 12C15.39 11.53 15.83 11.25 17.02 11.25C21.77 11.25 21.77 13.77 21.77 16V17C21.75 20.82 19.82 22.75 16 22.75ZM7 12.75C3.75 12.75 3.75 13.77 3.75 16V17C3.75 19.74 3.75 21.25 8 21.25H16C18.98 21.25 20.25 19.98 20.25 17V16C20.25 13.77 20.25 12.75 17 12.75C16.28 12.75 16.13 12.84 15.7 13.16L14.73 14.19C14.01 14.95 13.04 15.37 12 15.37C10.96 15.37 9.99 14.95 9.27 14.19L8.3 13.16C7.87 12.84 7.72 12.75 7 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M5 12.7502C4.59 12.7502 4.25 12.4102 4.25 12.0002V10.0002C4.25 8.06022 4.25 5.65022 7.93 5.30022C8.33 5.25022 8.71 5.56022 8.75 5.98022C8.79 6.39022 8.49 6.76022 8.07 6.80022C5.75 7.01022 5.75 7.95022 5.75 10.0002V12.0002C5.75 12.4102 5.41 12.7502 5 12.7502Z"
        fill="currentColor"
      />
      <Path
        d="M18.9994 12.7502C18.5894 12.7502 18.2494 12.4102 18.2494 12.0002V10.0002C18.2494 7.95022 18.2494 7.01022 15.9294 6.79022C15.5194 6.75022 15.2194 6.38022 15.2594 5.97022C15.2994 5.56022 15.6594 5.25022 16.0794 5.30022C19.7594 5.65022 19.7594 8.06022 19.7594 10.0002V12.0002C19.7494 12.4102 19.4094 12.7502 18.9994 12.7502Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DirectboxSendTwotone = ({
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
          d="M12 8V2L10 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 2L14 4"
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
        d="M5 12V10C5 7.99004 5 6.33004 8 6.04004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M19 12V10C19 7.99004 19 6.33004 16 6.04004"
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
  bold: DirectboxSendBold,
  broken: DirectboxSendBroken,
  bulk: DirectboxSendBulk,
  linear: DirectboxSendLinear,
  outline: DirectboxSendOutline,
  twotone: DirectboxSendTwotone,
};

export const DirectboxSendIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
