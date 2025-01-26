import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const CalendarEditBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
        fill="currentColor"
      />
      <Path
        d="M20 9.83984H4C3.45 9.83984 3 10.2898 3 10.8398V16.9998C3 19.9998 4.5 21.9998 8 21.9998H16C19.5 21.9998 21 19.9998 21 16.9998V10.8398C21 10.2898 20.55 9.83984 20 9.83984ZM14.84 14.9898L14.34 15.4998H14.33L11.3 18.5298C11.17 18.6598 10.9 18.7998 10.71 18.8198L9.36 19.0198C8.87 19.0898 8.53 18.7398 8.6 18.2598L8.79 16.8998C8.82 16.7098 8.95 16.4498 9.08 16.3098L12.12 13.2798L12.62 12.7698C12.95 12.4398 13.32 12.1998 13.72 12.1998C14.06 12.1998 14.43 12.3598 14.84 12.7698C15.74 13.6698 15.45 14.3798 14.84 14.9898Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalendarEditBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 9.08984H20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.211 15.77L15.671 19.31C15.531 19.45 15.401 19.71 15.371 19.9L15.181 21.25C15.111 21.74 15.451 22.0801 15.941 22.0101L17.291 21.82C17.481 21.79 17.751 21.66 17.881 21.52L21.421 17.9801C22.031 17.3701 22.321 16.6601 21.421 15.7601C20.531 14.8701 19.821 15.16 19.211 15.77Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.6992 16.28C18.9992 17.36 19.8392 18.2 20.9192 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 13.08V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22H8C4.5 22 3 20 3 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9945 13.7H12.0035"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29529 13.7H8.30427"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29529 16.7H8.30427"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CalendarEditBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75022V2C8.75022 1.59 8.41022 1.25 8.00022 1.25C7.59022 1.25 7.25022 1.59 7.25022 2V3.56C4.55022 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20 9.84009C20.55 9.84009 21 10.2901 21 10.8401V17.0001C21 20.0001 19.5 22.0001 16 22.0001H8C4.5 22.0001 3 20.0001 3 17.0001V10.8401C3 10.2901 3.45 9.84009 4 9.84009H20Z"
        fill="currentColor"
      />
      <Path
        d="M14.8409 14.9899L14.3409 15.4999H14.3309L11.3009 18.5299C11.1709 18.6599 10.9009 18.7999 10.7109 18.8199L9.36091 19.0199C8.87091 19.0899 8.53093 18.7399 8.60093 18.2599L8.79093 16.8999C8.82093 16.7099 8.95091 16.4499 9.08091 16.3099L12.1209 13.2799L12.6209 12.7699C12.9509 12.4399 13.3209 12.2 13.7209 12.2C14.0609 12.2 14.4309 12.3599 14.8409 12.7699C15.7409 13.6699 15.4509 14.3799 14.8409 14.9899Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalendarEditLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 9.08997H20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.21 15.77L15.6701 19.31C15.5301 19.45 15.4 19.71 15.37 19.9L15.18 21.25C15.11 21.74 15.45 22.0801 15.94 22.0101L17.29 21.82C17.48 21.79 17.75 21.66 17.88 21.52L21.4201 17.9801C22.0301 17.3701 22.3201 16.6601 21.4201 15.7601C20.5301 14.8701 19.82 15.16 19.21 15.77Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7001 16.28C19.0001 17.36 19.8401 18.2 20.9201 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 13.7H12.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29431 13.7H8.30329"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29431 16.7H8.30329"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CalendarEditOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 14.4999C8.37 14.4999 8.24 14.4699 8.12 14.4199C7.99 14.3699 7.89001 14.2999 7.79001 14.2099C7.61001 14.0199 7.5 13.7599 7.5 13.4999C7.5 13.2399 7.61001 12.9799 7.79001 12.7899C7.89001 12.6999 8 12.6299 8.12 12.5799C8.36 12.4799 8.64 12.4799 8.88 12.5799C9 12.6299 9.10999 12.6999 9.20999 12.7899C9.24999 12.8399 9.29999 12.8899 9.32999 12.9399C9.36999 12.9999 9.40001 13.0599 9.42001 13.1199C9.45001 13.1799 9.47001 13.2399 9.48001 13.2999C9.49001 13.3699 9.5 13.4399 9.5 13.4999C9.5 13.7599 9.38999 14.0199 9.20999 14.2099C9.10999 14.2999 9 14.3699 8.88 14.4199C8.76 14.4699 8.63 14.4999 8.5 14.4999Z"
        fill="currentColor"
      />
      <Path
        d="M12 14.4999C11.87 14.4999 11.74 14.47 11.62 14.42C11.49 14.37 11.39 14.2999 11.29 14.2099C11.11 14.0199 11 13.7599 11 13.4999C11 13.4399 11.01 13.3699 11.02 13.2999C11.03 13.2399 11.05 13.1799 11.08 13.1199C11.1 13.0599 11.13 12.9999 11.17 12.9399C11.21 12.8899 11.25 12.84 11.29 12.79C11.66 12.42 12.33 12.42 12.71 12.79C12.75 12.84 12.79 12.8899 12.83 12.9399C12.87 12.9999 12.9 13.0599 12.92 13.1199C12.95 13.1799 12.97 13.2399 12.98 13.2999C12.99 13.3699 13 13.4399 13 13.4999C13 13.7599 12.89 14.0199 12.71 14.2099C12.52 14.3899 12.27 14.4999 12 14.4999Z"
        fill="currentColor"
      />
      <Path
        d="M8.5 17.9999C8.37 17.9999 8.24 17.9699 8.12 17.9199C8 17.8699 7.89001 17.7999 7.79001 17.7099C7.61001 17.5199 7.5 17.2599 7.5 16.9999C7.5 16.9399 7.50999 16.8699 7.51999 16.8099C7.52999 16.7399 7.54999 16.6799 7.57999 16.6199C7.59999 16.5599 7.63001 16.4999 7.67001 16.4399C7.70001 16.3899 7.75001 16.3399 7.79001 16.2899C7.89001 16.1999 8 16.1299 8.12 16.0799C8.36 15.9799 8.64 15.9799 8.88 16.0799C9 16.1299 9.10999 16.1999 9.20999 16.2899C9.24999 16.3399 9.29999 16.3899 9.32999 16.4399C9.36999 16.4999 9.40001 16.5599 9.42001 16.6199C9.45001 16.6799 9.47001 16.7399 9.48001 16.8099C9.49001 16.8699 9.5 16.9399 9.5 16.9999C9.5 17.2599 9.38999 17.5199 9.20999 17.7099C9.10999 17.7999 9 17.8699 8.88 17.9199C8.76 17.9699 8.63 17.9999 8.5 17.9999Z"
        fill="currentColor"
      />
      <Path
        d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z"
        fill="currentColor"
      />
      <Path
        d="M15.8196 22.7801C15.4396 22.7801 15.0796 22.6401 14.8196 22.3801C14.5096 22.0701 14.3696 21.6201 14.4396 21.1501L14.6296 19.8001C14.6796 19.4501 14.8896 19.0301 15.1396 18.7801L18.6796 15.2401C19.1596 14.7601 19.6296 14.5101 20.1396 14.4601C20.7696 14.4001 21.3796 14.6601 21.9596 15.2401C22.5696 15.8501 23.3896 17.0901 21.9596 18.5201L18.4196 22.0601C18.1696 22.3101 17.7496 22.5201 17.3996 22.5701L16.0495 22.7601C15.9695 22.7701 15.8996 22.7801 15.8196 22.7801ZM20.3096 15.9501C20.2996 15.9501 20.2896 15.9501 20.2796 15.9501C20.1396 15.9601 19.9496 16.0901 19.7396 16.3001L16.1996 19.8401C16.1696 19.8701 16.1196 19.9701 16.1196 20.0101L15.9396 21.2601L17.1896 21.0801C17.2296 21.0701 17.3295 21.0201 17.3595 20.9901L20.8996 17.4501C21.3396 17.0101 21.3996 16.7901 20.8996 16.2901C20.7396 16.1401 20.5096 15.9501 20.3096 15.9501Z"
        fill="currentColor"
      />
      <Path
        d="M20.9206 19.2499C20.8506 19.2499 20.7806 19.2399 20.7206 19.2199C19.4006 18.8499 18.3506 17.7999 17.9806 16.4799C17.8706 16.0799 18.1006 15.6699 18.5006 15.5499C18.9006 15.4399 19.3106 15.6699 19.4306 16.0699C19.6606 16.8899 20.3106 17.5399 21.1306 17.7699C21.5306 17.8799 21.7606 18.2999 21.6506 18.6999C21.5506 19.0299 21.2506 19.2499 20.9206 19.2499Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V12C21.75 12.41 21.41 12.75 21 12.75C20.59 12.75 20.25 12.41 20.25 12V8.5C20.25 5.64 18.86 4.25 16 4.25H8C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H12C12.41 21.25 12.75 21.59 12.75 22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CalendarEditTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M3.5 9.08984H20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.21 15.7698L15.6701 19.3098C15.5301 19.4498 15.4 19.7098 15.37 19.8998L15.18 21.2498C15.11 21.7398 15.45 22.0798 15.94 22.0098L17.29 21.8198C17.48 21.7898 17.75 21.6598 17.88 21.5198L21.4201 17.9798C22.0301 17.3698 22.3201 16.6598 21.4201 15.7598C20.5301 14.8698 19.82 15.1598 19.21 15.7698Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7002 16.2798C19.0002 17.3598 19.8402 18.1998 20.9202 18.4998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.9955 13.7002H12.0045"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.29431 13.7002H8.30329"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.29492 16.7002H8.3039"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CalendarEditBold,
  broken: CalendarEditBroken,
  bulk: CalendarEditBulk,
  linear: CalendarEditLinear,
  outline: CalendarEditOutline,
  twotone: CalendarEditTwotone,
};

export const CalendarEditIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
