import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const NotificationBingBold = ({
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
        d="M20.1892 14.0608L19.0592 12.1808C18.8092 11.7708 18.5892 10.9808 18.5892 10.5008V8.63078C18.5892 5.00078 15.6392 2.05078 12.0192 2.05078C8.38923 2.06078 5.43923 5.00078 5.43923 8.63078V10.4908C5.43923 10.9708 5.21923 11.7608 4.97923 12.1708L3.84923 14.0508C3.41923 14.7808 3.31923 15.6108 3.58923 16.3308C3.85923 17.0608 4.46923 17.6408 5.26923 17.9008C6.34923 18.2608 7.43923 18.5208 8.54923 18.7108C8.65923 18.7308 8.76923 18.7408 8.87923 18.7608C9.01923 18.7808 9.16923 18.8008 9.31923 18.8208C9.57923 18.8608 9.83923 18.8908 10.1092 18.9108C10.7392 18.9708 11.3792 19.0008 12.0192 19.0008C12.6492 19.0008 13.2792 18.9708 13.8992 18.9108C14.1292 18.8908 14.3592 18.8708 14.5792 18.8408C14.7592 18.8208 14.9392 18.8008 15.1192 18.7708C15.2292 18.7608 15.3392 18.7408 15.4492 18.7208C16.5692 18.5408 17.6792 18.2608 18.7592 17.9008C19.5292 17.6408 20.1192 17.0608 20.3992 16.3208C20.6792 15.5708 20.5992 14.7508 20.1892 14.0608ZM12.7492 10.0008C12.7492 10.4208 12.4092 10.7608 11.9892 10.7608C11.5692 10.7608 11.2292 10.4208 11.2292 10.0008V6.90078C11.2292 6.48078 11.5692 6.14078 11.9892 6.14078C12.4092 6.14078 12.7492 6.48078 12.7492 6.90078V10.0008Z"
        fill="currentColor"
      />
      <Path
        d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NotificationBingBroken = ({
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
        d="M12 6.43994V9.76994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M20.5894 15.17C21.3194 16.39 20.7394 17.97 19.3894 18.42C14.6094 20.01 9.43944 20.01 4.65944 18.42C3.21944 17.94 2.66944 16.48 3.45944 15.17L4.72944 13.05C5.07944 12.47 5.35944 11.44 5.35944 10.77V8.67C5.35944 4.98 8.33944 2 12.0194 2C15.6794 2 18.6794 5 18.6794 8.66V10.76C18.6794 10.94 18.6994 11.14 18.7294 11.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M15.3299 18.8201C15.3299 20.6501 13.8299 22.1501 11.9999 22.1501C11.0899 22.1501 10.2499 21.7701 9.64992 21.1701C9.04992 20.5701 8.66992 19.7301 8.66992 18.8201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const NotificationBingBulk = ({
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
        d="M20.3992 16.3298C20.1192 17.0798 19.5292 17.6498 18.7592 17.9098C17.6792 18.2698 16.5692 18.5398 15.4492 18.7298C15.3392 18.7498 15.2292 18.7698 15.1192 18.7798C14.9392 18.8098 14.7592 18.8298 14.5792 18.8498C14.3592 18.8798 14.1292 18.8998 13.8992 18.9198C13.2692 18.9698 12.6492 18.9998 12.0192 18.9998C11.3792 18.9998 10.7392 18.9698 10.1092 18.9098C9.83923 18.8898 9.57923 18.8598 9.31923 18.8198C9.16923 18.7998 9.01923 18.7798 8.87923 18.7598C8.76923 18.7398 8.65923 18.7298 8.54923 18.7098C7.43923 18.5298 6.33923 18.2598 5.26923 17.8998C4.46923 17.6298 3.85923 17.0598 3.58923 16.3298C3.31923 15.6098 3.41923 14.7698 3.84923 14.0498L4.97923 12.1698C5.21923 11.7598 5.43923 10.9698 5.43923 10.4898V8.6298C5.43923 4.9998 8.38923 2.0498 12.0192 2.0498C15.6392 2.0498 18.5892 4.9998 18.5892 8.6298V10.4898C18.5892 10.9698 18.8092 11.7598 19.0592 12.1698L20.1892 14.0498C20.5992 14.7498 20.6792 15.5698 20.3992 16.3298Z"
        fill="currentColor"
      />
      <Path
        d="M12.0002 10.7601C11.5802 10.7601 11.2402 10.4201 11.2402 10.0001V6.90014C11.2402 6.48014 11.5802 6.14014 12.0002 6.14014C12.4202 6.14014 12.7602 6.48014 12.7602 6.90014V10.0001C12.7502 10.4201 12.4102 10.7601 12.0002 10.7601Z"
        fill="currentColor"
      />
      <Path
        d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NotificationBingLinear = ({
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
        d="M12 6.43994V9.76994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M15.33 18.8201C15.33 20.6501 13.83 22.1501 12 22.1501C11.09 22.1501 10.25 21.7701 9.65004 21.1701C9.05004 20.5701 8.67004 19.7301 8.67004 18.8201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const NotificationBingOutline = ({
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
        d="M12 10.5199C11.59 10.5199 11.25 10.1799 11.25 9.76994V6.43994C11.25 6.02994 11.59 5.68994 12 5.68994C12.41 5.68994 12.75 6.02994 12.75 6.43994V9.76994C12.75 10.1899 12.41 10.5199 12 10.5199Z"
        fill="currentColor"
      />
      <Path
        d="M12.0199 20.3502C9.43987 20.3502 6.86987 19.9402 4.41987 19.1202C3.50987 18.8202 2.81987 18.1702 2.51987 17.3502C2.21987 16.5302 2.31987 15.5902 2.80987 14.7702L4.07987 12.6502C4.35987 12.1802 4.60987 11.3002 4.60987 10.7502V8.65023C4.60987 4.56023 7.92987 1.24023 12.0199 1.24023C16.1099 1.24023 19.4299 4.56023 19.4299 8.65023V10.7502C19.4299 11.2902 19.6799 12.1802 19.9599 12.6502L21.2299 14.7702C21.6999 15.5502 21.7799 16.4802 21.4699 17.3302C21.1599 18.1802 20.4799 18.8302 19.6199 19.1202C17.1699 19.9502 14.5999 20.3502 12.0199 20.3502ZM12.0199 2.75023C8.75987 2.75023 6.10987 5.40023 6.10987 8.66023V10.7602C6.10987 11.5702 5.78987 12.7402 5.36987 13.4302L4.09987 15.5602C3.83987 15.9902 3.77987 16.4502 3.92987 16.8502C4.07987 17.2502 4.41987 17.5502 4.89987 17.7102C9.49987 19.2402 14.5599 19.2402 19.1599 17.7102C19.5899 17.5702 19.9199 17.2502 20.0699 16.8302C20.2299 16.4102 20.1799 15.9502 19.9499 15.5602L18.6799 13.4402C18.2599 12.7502 17.9399 11.5802 17.9399 10.7702V8.67023C17.9299 5.40023 15.2799 2.75023 12.0199 2.75023Z"
        fill="currentColor"
      />
      <Path
        d="M11.9999 22.8998C10.9299 22.8998 9.87992 22.4598 9.11992 21.6998C8.35992 20.9398 7.91992 19.8898 7.91992 18.8198H9.41992C9.41992 19.4998 9.69992 20.1598 10.1799 20.6398C10.6599 21.1198 11.3199 21.3998 11.9999 21.3998C13.4199 21.3998 14.5799 20.2398 14.5799 18.8198H16.0799C16.0799 21.0698 14.2499 22.8998 11.9999 22.8998Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NotificationBingTwotone = ({
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
        d="M12 6.43994V9.76994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <Path
        opacity="0.4"
        d="M15.3299 18.8198C15.3299 20.6498 13.8299 22.1498 11.9999 22.1498C11.0899 22.1498 10.2499 21.7698 9.64992 21.1698C9.04992 20.5698 8.66992 19.7298 8.66992 18.8198"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: NotificationBingBold,
  broken: NotificationBingBroken,
  bulk: NotificationBingBulk,
  linear: NotificationBingLinear,
  outline: NotificationBingOutline,
  twotone: NotificationBingTwotone,
};

export const NotificationBingIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
