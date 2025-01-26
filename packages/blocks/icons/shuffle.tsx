import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const ShuffleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.7507 17.9809C21.7507 17.9609 21.7407 17.9409 21.7407 17.9209C21.7307 17.8409 21.7207 17.7609 21.6907 17.6909C21.6507 17.6009 21.6007 17.5309 21.5407 17.4609C21.5407 17.4609 21.5407 17.4509 21.5307 17.4509C21.4607 17.3809 21.3807 17.3309 21.2907 17.2909C21.2007 17.2509 21.1007 17.2309 21.0007 17.2309L16.3307 17.2509C16.3307 17.2509 16.3307 17.2509 16.3207 17.2509C15.7207 17.2509 15.1407 16.9709 14.7807 16.4909L13.5607 14.9209C13.3107 14.5909 12.8407 14.5309 12.5107 14.7909C12.1807 15.0509 12.1207 15.5109 12.3807 15.8409L13.6007 17.4109C14.2507 18.2509 15.2707 18.7509 16.3307 18.7509H16.3407L19.1907 18.7409L18.4807 19.4509C18.1907 19.7409 18.1907 20.2209 18.4807 20.5109C18.6307 20.6609 18.8207 20.7309 19.0107 20.7309C19.2007 20.7309 19.3907 20.6609 19.5407 20.5109L21.5407 18.5109C21.6107 18.4409 21.6607 18.3609 21.7007 18.2709C21.7307 18.1709 21.7507 18.0709 21.7507 17.9809Z"
        fill="currentColor"
      />
      <Path
        d="M8.42 6.69172C7.77 5.79172 6.73 5.26172 5.62 5.26172C5.61 5.26172 5.61 5.26172 5.6 5.26172L3 5.27172C2.59 5.27172 2.25 5.61172 2.25 6.02172C2.25 6.43172 2.59 6.77172 3 6.77172L5.61 6.76172H5.62C6.25 6.76172 6.84 7.06172 7.2 7.57172L8.28 9.07172C8.43 9.27172 8.66 9.38172 8.89 9.38172C9.04 9.38172 9.2 9.33172 9.33 9.24172C9.67 8.99172 9.74 8.52172 9.5 8.19172L8.42 6.69172Z"
        fill="currentColor"
      />
      <Path
        d="M21.74 6.07875C21.74 6.05875 21.75 6.03875 21.75 6.02875C21.75 5.92875 21.73 5.82875 21.69 5.73875C21.65 5.64875 21.6 5.56875 21.53 5.49875L19.53 3.49875C19.24 3.20875 18.76 3.20875 18.47 3.49875C18.18 3.78875 18.18 4.26875 18.47 4.55875L19.18 5.26875L16.45 5.25875C16.44 5.25875 16.44 5.25875 16.43 5.25875C15.28 5.25875 14.2 5.82875 13.56 6.79875L7.17 16.3787C6.81 16.9187 6.2 17.2487 5.55 17.2487H5.54L3 17.2287C2.59 17.2287 2.25 17.5587 2.25 17.9787C2.25 18.3887 2.58 18.7287 3 18.7287L5.55 18.7387C5.56 18.7387 5.56 18.7387 5.57 18.7387C6.73 18.7387 7.8 18.1688 8.44 17.1988L14.83 7.61875C15.19 7.07875 15.8 6.74875 16.45 6.74875H16.46L21 6.76875C21.1 6.76875 21.19 6.74875 21.29 6.70875C21.38 6.66875 21.46 6.61875 21.53 6.54875C21.53 6.54875 21.53 6.53875 21.54 6.53875C21.6 6.46875 21.66 6.39875 21.69 6.30875C21.72 6.23875 21.73 6.15875 21.74 6.07875Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShuffleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.4492 6L20.9992 6.02002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 17.98L5.54999 17.99C6.45999 17.99 7.31 17.54 7.81 16.79L8.98999 15.02L9.75 13.88L13.67 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 19.98L21 17.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.89001 8.61993L7.81 7.11993C7.3 6.40993 6.47999 5.98993 5.60999 5.99993L3 6.00994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.9707 15.3799L14.1907 16.9499C14.7007 17.6099 15.5007 17.9999 16.3407 17.9999L21.0107 17.9799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 6.02002L19 4.02002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShuffleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.7507 17.9799C21.7507 17.9599 21.7407 17.9399 21.7407 17.9199C21.7307 17.8399 21.7207 17.7599 21.6907 17.6899C21.6507 17.5999 21.6007 17.5299 21.5407 17.4599C21.5407 17.4599 21.5407 17.4499 21.5307 17.4499C21.4607 17.3799 21.3807 17.3299 21.2907 17.2899C21.2007 17.2499 21.1007 17.2299 21.0007 17.2299L16.3307 17.2499C16.3307 17.2499 16.3307 17.2499 16.3207 17.2499C15.7207 17.2499 15.1407 16.9699 14.7807 16.4899L13.5607 14.9199C13.3107 14.5899 12.8407 14.5299 12.5107 14.7899C12.1807 15.0499 12.1207 15.5099 12.3807 15.8399L13.6007 17.4099C14.2507 18.2499 15.2707 18.7499 16.3307 18.7499H16.3407L19.1907 18.7399L18.4807 19.4499C18.1907 19.7399 18.1907 20.2199 18.4807 20.5099C18.6307 20.6599 18.8207 20.7299 19.0107 20.7299C19.2007 20.7299 19.3907 20.6599 19.5407 20.5099L21.5407 18.5099C21.6107 18.4399 21.6607 18.3599 21.7007 18.2699C21.7307 18.1699 21.7507 18.0699 21.7507 17.9799Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M8.42026 6.68976C7.77026 5.78976 6.73024 5.25977 5.62024 5.25977C5.61024 5.25977 5.61025 5.25977 5.60025 5.25977L2.99023 5.26978C2.58023 5.26978 2.24023 5.60978 2.24023 6.01978C2.24023 6.42978 2.58023 6.76978 2.99023 6.76978L5.60025 6.75977H5.61023C6.24023 6.75977 6.83025 7.05976 7.19025 7.56976L8.27023 9.06976C8.42023 9.26976 8.65025 9.37976 8.88025 9.37976C9.03025 9.37976 9.19025 9.32975 9.32025 9.23975C9.66025 8.99975 9.73023 8.52976 9.49023 8.18976L8.42026 6.68976Z"
        fill="currentColor"
      />
      <Path
        d="M21.7402 6.07974C21.7402 6.05974 21.7502 6.03976 21.7502 6.02976C21.7502 5.92976 21.7302 5.82972 21.6902 5.73972C21.6502 5.64972 21.6002 5.56973 21.5302 5.49973L19.5302 3.49973C19.2402 3.20973 18.7602 3.20973 18.4702 3.49973C18.1802 3.78973 18.1802 4.26972 18.4702 4.55972L19.1802 5.26975L16.4503 5.25974C16.4403 5.25974 16.4402 5.25974 16.4302 5.25974C15.2802 5.25974 14.2002 5.82971 13.5602 6.79971L7.17026 16.3797C6.81026 16.9197 6.20023 17.2497 5.55023 17.2497H5.54025L2.99023 17.2397C2.58023 17.2397 2.24023 17.5697 2.24023 17.9897C2.24023 18.3997 2.57023 18.7397 2.99023 18.7397L5.54025 18.7497C5.55025 18.7497 5.55024 18.7497 5.56024 18.7497C6.72024 18.7497 7.79024 18.1797 8.43024 17.2097L14.8203 7.62973C15.1803 7.08973 15.7902 6.75974 16.4402 6.75974H16.4503L21.0002 6.77976C21.1002 6.77976 21.1903 6.7597 21.2903 6.7197C21.3803 6.6797 21.4602 6.62972 21.5302 6.55972C21.5302 6.55972 21.5303 6.54971 21.5403 6.54971C21.6003 6.47971 21.6602 6.40973 21.6902 6.31973C21.7202 6.23973 21.7302 6.15974 21.7402 6.07974Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShuffleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.56024 18.74C5.56024 18.74 5.55025 18.74 5.54025 18.74L2.99023 18.73C2.58023 18.73 2.24023 18.39 2.24023 17.98C2.24023 17.57 2.58023 17.23 2.99023 17.23L5.54025 17.24H5.55023C6.20023 17.24 6.81026 16.92 7.17026 16.37L13.5602 6.78998C14.2002 5.82998 15.2702 5.25 16.4302 5.25C16.4302 5.25 16.4403 5.25 16.4503 5.25L21.0002 5.27002C21.4102 5.27002 21.7502 5.61002 21.7502 6.02002C21.7502 6.43002 21.4102 6.77002 21.0002 6.77002L16.4503 6.75H16.4402C15.7902 6.75 15.1803 7.07 14.8203 7.62L8.43024 17.2C7.79024 18.17 6.72024 18.74 5.56024 18.74Z"
        fill="currentColor"
      />
      <Path
        d="M18.9995 20.7299C18.8095 20.7299 18.6195 20.6599 18.4695 20.5099C18.1795 20.2199 18.1795 19.7399 18.4695 19.4499L20.4695 17.4499C20.7595 17.1599 21.2395 17.1599 21.5295 17.4499C21.8195 17.7399 21.8195 18.2199 21.5295 18.5099L19.5295 20.5099C19.3795 20.6599 19.1895 20.7299 18.9995 20.7299Z"
        fill="currentColor"
      />
      <Path
        d="M8.89001 9.37976C8.66001 9.37976 8.43 9.26976 8.28 9.06976L7.20001 7.56976C6.83001 7.05976 6.21999 6.75977 5.60999 6.75977L3 6.76978C2.54 6.75978 2.25 6.43978 2.25 6.01978C2.25 5.60978 2.58 5.26978 3 5.26978L5.60999 5.25977C5.61999 5.25977 5.62 5.25977 5.63 5.25977C6.74001 5.25977 7.77999 5.79976 8.42999 6.68976L9.51001 8.18976C9.75001 8.52976 9.68 8.98975 9.34 9.23975C9.2 9.32975 9.05001 9.37976 8.89001 9.37976Z"
        fill="currentColor"
      />
      <Path
        d="M16.3195 18.7499C15.2595 18.7499 14.2395 18.2499 13.5895 17.4099L12.3695 15.84C12.1195 15.51 12.1795 15.0399 12.4995 14.7899C12.8295 14.5399 13.2995 14.5999 13.5495 14.9199L14.7695 16.4899C15.1395 16.9699 15.7295 17.2099 16.3195 17.2499L20.9895 17.2299C21.3995 17.2299 21.7395 17.5599 21.7395 17.9799C21.7395 18.3899 21.4095 18.7299 20.9895 18.7299L16.3195 18.7499C16.3295 18.7499 16.3195 18.7499 16.3195 18.7499Z"
        fill="currentColor"
      />
      <Path
        d="M20.9995 6.76999C20.8095 6.76999 20.6195 6.69996 20.4695 6.54996L18.4695 4.54996C18.1795 4.25996 18.1795 3.77996 18.4695 3.48996C18.7595 3.19996 19.2395 3.19996 19.5295 3.48996L21.5295 5.48996C21.8195 5.77996 21.8195 6.25996 21.5295 6.54996C21.3795 6.69996 21.1895 6.76999 20.9995 6.76999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShuffleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.56024 18.74C5.56024 18.74 5.55025 18.74 5.54025 18.74L2.99023 18.73C2.58023 18.73 2.24023 18.39 2.24023 17.98C2.24023 17.57 2.58023 17.23 2.99023 17.23L5.54025 17.24H5.55023C6.20023 17.24 6.81026 16.92 7.17026 16.37L13.5602 6.78998C14.2002 5.82998 15.2702 5.25 16.4302 5.25C16.4302 5.25 16.4403 5.25 16.4503 5.25L21.0002 5.27002C21.4102 5.27002 21.7502 5.61002 21.7502 6.02002C21.7502 6.43002 21.4102 6.77002 21.0002 6.77002L16.4503 6.75H16.4402C15.7902 6.75 15.1803 7.07 14.8203 7.62L8.43024 17.2C7.79024 18.17 6.72024 18.74 5.56024 18.74Z"
        fill="currentColor"
      />
      <Path
        d="M18.9995 20.7299C18.8095 20.7299 18.6195 20.6599 18.4695 20.5099C18.1795 20.2199 18.1795 19.7399 18.4695 19.4499L20.4695 17.4499C20.7595 17.1599 21.2395 17.1599 21.5295 17.4499C21.8195 17.7399 21.8195 18.2199 21.5295 18.5099L19.5295 20.5099C19.3795 20.6599 19.1895 20.7299 18.9995 20.7299Z"
        fill="currentColor"
      />
      <Path
        d="M8.89001 9.37976C8.66001 9.37976 8.43 9.26976 8.28 9.06976L7.20001 7.56976C6.83001 7.05976 6.21999 6.75977 5.60999 6.75977L3 6.76978C2.54 6.75978 2.25 6.43978 2.25 6.01978C2.25 5.60978 2.58 5.26978 3 5.26978L5.60999 5.25977C5.61999 5.25977 5.62 5.25977 5.63 5.25977C6.74001 5.25977 7.77999 5.79976 8.42999 6.68976L9.51001 8.18976C9.75001 8.52976 9.68 8.98975 9.34 9.23975C9.2 9.32975 9.05001 9.37976 8.89001 9.37976Z"
        fill="currentColor"
      />
      <Path
        d="M16.3195 18.7499C15.2595 18.7499 14.2395 18.2499 13.5895 17.4099L12.3695 15.84C12.1195 15.51 12.1795 15.0399 12.4995 14.7899C12.8295 14.5399 13.2995 14.5999 13.5495 14.9199L14.7695 16.4899C15.1395 16.9699 15.7295 17.2099 16.3195 17.2499L20.9895 17.2299C21.3995 17.2299 21.7395 17.5599 21.7395 17.9799C21.7395 18.3899 21.4095 18.7299 20.9895 18.7299L16.3195 18.7499C16.3295 18.7499 16.3195 18.7499 16.3195 18.7499Z"
        fill="currentColor"
      />
      <Path
        d="M20.9995 6.76999C20.8095 6.76999 20.6195 6.69996 20.4695 6.54996L18.4695 4.54996C18.1795 4.25996 18.1795 3.77996 18.4695 3.48996C18.7595 3.19996 19.2395 3.19996 19.5295 3.48996L21.5295 5.48996C21.8195 5.77996 21.8195 6.25996 21.5295 6.54996C21.3795 6.69996 21.1895 6.76999 20.9995 6.76999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShuffleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3 17.9799L5.54999 17.9899C6.45999 17.9899 7.31 17.5399 7.81 16.7899L14.2 7.20994C14.7 6.45994 15.55 5.99993 16.46 6.00993L21.01 6.02994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.89001 8.62017L7.81 7.12017C7.3 6.41017 6.47999 5.99017 5.60999 6.00017L3 6.01018"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M19 19.9805L21 17.9805"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.9707 15.3799L14.1907 16.9499C14.7007 17.6099 15.5007 17.9999 16.3407 17.9999L21.0107 17.9799"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M21 6.02002L19 4.02002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ShuffleBold,
  broken: ShuffleBroken,
  bulk: ShuffleBulk,
  linear: ShuffleLinear,
  outline: ShuffleOutline,
  twotone: ShuffleTwotone,
};

export const ShuffleIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
