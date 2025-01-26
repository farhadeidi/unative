import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const SmsEditBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17 3H7C4 3 2 4.5 2 8V15C2 18.5 4 20 7 20H10.57C11.16 20 11.64 19.48 11.56 18.89C11.46 18.18 11.48 17.44 11.63 16.68C12.16 14.08 14.3 12.01 16.92 11.58C18.23 11.37 19.48 11.55 20.58 12.03C21.25 12.32 22 11.86 22 11.13V8C22 4.5 20 3 17 3ZM17.47 8.59L14.34 11.09C13.68 11.62 12.84 11.88 12 11.88C11.16 11.88 10.31 11.62 9.66 11.09L6.53 8.59C6.21 8.33 6.16 7.86 6.41 7.53C6.67 7.21 7.14 7.15 7.46 7.41L10.59 9.91C11.35 10.52 12.64 10.52 13.4 9.91L16.53 7.41C16.85 7.15 17.33 7.2 17.58 7.53C17.84 7.86 17.79 8.33 17.47 8.59Z"
        fill="currentColor"
      />
      <Path
        d="M18 13C15.24 13 13 15.23 13 18C13 20.76 15.24 23 18 23C20.77 23 23 20.76 23 18C23 15.23 20.77 13 18 13ZM20.05 17.55L19.68 17.91L17.5 20.1C17.4 20.19 17.21 20.29 17.07 20.31L16.09 20.45C15.74 20.5 15.49 20.25 15.54 19.9L15.68 18.92C15.7 18.78 15.79 18.59 15.89 18.49L18.07 16.32L18.43 15.95C18.67 15.71 18.94 15.55 19.22 15.55C19.46 15.55 19.73 15.66 20.03 15.95C20.7 16.6 20.49 17.11 20.05 17.55Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmsEditBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 20.5H7C4 20.5 2 19 2 15.5V12.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2091 14.77L15.6691 18.31C15.5291 18.45 15.3991 18.71 15.3691 18.9L15.1791 20.25C15.1091 20.74 15.4491 21.0801 15.9391 21.0101L17.2891 20.82C17.4791 20.79 17.7491 20.66 17.8791 20.52L21.4191 16.9801C22.0291 16.3701 22.3191 15.6601 21.4191 14.7601C20.5291 13.8701 19.8191 14.16 19.2091 14.77Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.6992 15.28C18.9992 16.36 19.8392 17.2 20.9192 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SmsEditBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 3H17C20 3 22 4.5 22 8V11.14C22 11.87 21.25 12.33 20.58 12.04C19.48 11.56 18.23 11.38 16.92 11.59C14.3 12.02 12.16 14.09 11.63 16.69C11.48 17.45 11.46 18.19 11.56 18.9C11.64 19.49 11.16 20.01 10.57 20.01H7C4 20.01 2 18.51 2 15.01V8.01001C2 4.50001 4 3 7 3Z"
        fill="currentColor"
      />
      <Path
        d="M12.0008 11.87C11.1608 11.87 10.3108 11.61 9.66076 11.08L6.53075 8.57996C6.21075 8.31996 6.15076 7.84997 6.41076 7.52997C6.67076 7.20997 7.14075 7.14997 7.46075 7.40997L10.5908 9.90997C11.3508 10.52 12.6407 10.52 13.4007 9.90997L16.5308 7.40997C16.8508 7.14997 17.3307 7.19997 17.5807 7.52997C17.8407 7.84997 17.7907 8.32996 17.4607 8.57996L14.3307 11.08C13.6907 11.61 12.8408 11.87 12.0008 11.87Z"
        fill="currentColor"
      />
      <Path
        d="M18 13C15.24 13 13 15.23 13 18C13 20.76 15.24 23 18 23C20.77 23 23 20.76 23 18C23 15.23 20.77 13 18 13ZM20.05 17.55L19.68 17.91L17.51 20.09C17.41 20.18 17.22 20.28 17.08 20.3L16.1 20.44C15.75 20.49 15.5 20.24 15.55 19.89L15.69 18.91C15.71 18.77 15.8 18.58 15.9 18.48L18.08 16.31L18.44 15.94C18.68 15.7 18.95 15.54 19.23 15.54C19.47 15.54 19.74 15.65 20.04 15.94C20.7 16.6 20.49 17.11 20.05 17.55Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmsEditLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.21 14.77L15.6701 18.31C15.5301 18.45 15.4 18.71 15.37 18.9L15.18 20.25C15.11 20.74 15.45 21.0801 15.94 21.0101L17.29 20.82C17.48 20.79 17.75 20.66 17.88 20.52L21.4201 16.9801C22.0301 16.3701 22.3201 15.6601 21.4201 14.7601C20.5301 13.8701 19.82 14.16 19.21 14.77Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7001 15.28C19.0001 16.36 19.8401 17.2 20.9201 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SmsEditOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V11.5C22.75 11.91 22.41 12.25 22 12.25C21.59 12.25 21.25 11.91 21.25 11.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H12C12.41 19.75 12.75 20.09 12.75 20.5C12.75 20.91 12.41 21.25 12 21.25Z"
        fill="currentColor"
      />
      <Path
        d="M11.9988 12.87C11.1588 12.87 10.3088 12.61 9.6588 12.08L6.5288 9.57996C6.2088 9.31996 6.14881 8.84997 6.4088 8.52997C6.66881 8.20997 7.13879 8.15997 7.45879 8.40997L10.5888 10.91C11.3488 11.52 12.6388 11.52 13.3988 10.91L16.5288 8.40997C16.8488 8.14997 17.3188 8.19997 17.5788 8.52997C17.8388 8.84997 17.7888 9.32996 17.4588 9.57996L14.3288 12.08C13.6888 12.61 12.8388 12.87 11.9988 12.87Z"
        fill="currentColor"
      />
      <Path
        d="M15.8196 21.7801C15.4396 21.7801 15.0796 21.6401 14.8196 21.3801C14.5096 21.0701 14.3696 20.6201 14.4396 20.1501L14.6296 18.8001C14.6796 18.4501 14.8896 18.0301 15.1396 17.7801L18.6796 14.2401C19.1596 13.7601 19.6296 13.5101 20.1396 13.4601C20.7596 13.4001 21.3796 13.6601 21.9596 14.2401C22.5396 14.8201 22.7996 15.4301 22.7396 16.0601C22.6896 16.5601 22.4296 17.0401 21.9596 17.5201L18.4196 21.0601C18.1696 21.3101 17.7496 21.5201 17.3996 21.5701L16.0495 21.7601C15.9695 21.7701 15.8996 21.7801 15.8196 21.7801ZM20.3096 14.9501C20.2996 14.9501 20.2896 14.9501 20.2796 14.9501C20.1396 14.9601 19.9496 15.0901 19.7396 15.3001L16.1996 18.8401C16.1696 18.8701 16.1196 18.9701 16.1196 19.0101L15.9396 20.2601L17.1896 20.0801C17.2296 20.0701 17.3295 20.0201 17.3595 19.9901L20.8996 16.4501C21.1096 16.2301 21.2396 16.0501 21.2496 15.9101C21.2696 15.7101 21.0696 15.4701 20.8996 15.3001C20.7396 15.1401 20.5096 14.9501 20.3096 14.9501Z"
        fill="currentColor"
      />
      <Path
        d="M20.9206 18.2499C20.8506 18.2499 20.7806 18.2399 20.7206 18.2199C19.4006 17.8499 18.3506 16.7999 17.9806 15.4799C17.8706 15.0799 18.1006 14.6699 18.5006 14.5499C18.9006 14.4399 19.3106 14.6699 19.4206 15.0699C19.6506 15.8899 20.3006 16.5399 21.1206 16.7699C21.5206 16.8799 21.7506 17.2999 21.6406 17.6999C21.5506 18.0299 21.2506 18.2499 20.9206 18.2499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmsEditTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M19.2091 14.7698L15.6691 18.3098C15.5291 18.4498 15.3991 18.7098 15.3691 18.8998L15.1791 20.2498C15.1091 20.7398 15.4491 21.0798 15.9391 21.0098L17.2891 20.8198C17.4791 20.7898 17.7491 20.6598 17.8791 20.5198L21.4191 16.9798C22.0291 16.3698 22.3191 15.6598 21.4191 14.7598C20.5291 13.8698 19.8191 14.1598 19.2091 14.7698Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.6992 15.2798C18.9992 16.3598 19.8392 17.1998 20.9192 17.4998"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SmsEditBold,
  broken: SmsEditBroken,
  bulk: SmsEditBulk,
  linear: SmsEditLinear,
  outline: SmsEditOutline,
  twotone: SmsEditTwotone,
};

export const SmsEditIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
