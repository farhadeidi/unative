import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const MobileProgrammingBold = ({
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
        d="M18 13C15.24 13 13 15.24 13 18C13 20.76 15.24 23 18 23C20.76 23 23 20.76 23 18C23 15.24 20.76 13 18 13ZM17.16 19.27C17.41 19.52 17.41 19.93 17.16 20.19C17.03 20.32 16.87 20.38 16.7 20.38C16.53 20.38 16.37 20.32 16.24 20.19L14.51 18.46C14.26 18.21 14.26 17.8 14.51 17.54L16.24 15.81C16.49 15.56 16.9 15.56 17.16 15.81C17.41 16.06 17.41 16.47 17.16 16.73L15.89 18L17.16 19.27ZM21.48 18.46L19.75 20.19C19.62 20.32 19.46 20.38 19.29 20.38C19.12 20.38 18.96 20.32 18.83 20.19C18.58 19.94 18.58 19.53 18.83 19.27L20.11 18L18.84 16.73C18.59 16.48 18.59 16.07 18.84 15.81C19.09 15.56 19.5 15.56 19.76 15.81L21.49 17.54C21.73 17.8 21.73 18.2 21.48 18.46Z"
        fill="currentColor"
      />
      <Path
        d="M21 7.00078V11.4708C21 11.8208 20.66 12.0608 20.34 11.9408C19.23 11.5108 17.99 11.3708 16.69 11.6308C14.09 12.1508 12.02 14.2808 11.59 16.9008C11.33 18.5008 11.65 20.0108 12.38 21.2408C12.58 21.5808 12.34 22.0008 11.95 22.0008H8C4.5 22.0008 3 20.0008 3 17.0008V7.00078C3 4.34078 4.18 2.47078 6.89 2.08078C7.18 2.04078 7.44 2.27078 7.45 2.57078L7.48 3.58078C7.51 5.18078 8.86 6.50078 10.48 6.50078H13.5C15.15 6.50078 16.5 5.15078 16.5 3.50078V2.57078C16.5 2.27078 16.76 2.03078 17.05 2.07078C19.8 2.44078 21 4.32078 21 7.00078Z"
        fill="currentColor"
      />
      <Path
        d="M14.9996 3V3.5C14.9996 4.32 14.3196 5 13.4996 5H10.4696C9.65963 5 8.98963 4.35 8.96963 3.54L8.95963 3.03C8.93963 2.46 9.38963 2 9.95963 2H13.9996C14.5496 2 14.9996 2.45 14.9996 3Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MobileProgrammingBroken = ({
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
        d="M8.92969 2L8.95969 3.53003C8.97969 4.34003 9.64969 5 10.4597 5H13.4797C14.3097 5 14.9797 4.32 14.9797 3.5V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 17L15 19L17 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 17L22 19L20 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 12.98V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 22H8C4.5 22 3 20 3 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MobileProgrammingBulk = ({
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
        d="M18 13C15.24 13 13 15.24 13 18C13 20.76 15.24 23 18 23C20.76 23 23 20.76 23 18C23 15.24 20.76 13 18 13ZM17.16 19.27C17.41 19.52 17.41 19.93 17.16 20.19C17.03 20.32 16.87 20.38 16.7 20.38C16.53 20.38 16.37 20.32 16.24 20.19L14.51 18.46C14.26 18.21 14.26 17.8 14.51 17.54L16.24 15.81C16.49 15.56 16.9 15.56 17.16 15.81C17.41 16.06 17.41 16.47 17.16 16.73L15.89 18L17.16 19.27ZM21.48 18.46L19.75 20.19C19.62 20.32 19.46 20.38 19.29 20.38C19.12 20.38 18.96 20.32 18.83 20.19C18.58 19.94 18.58 19.53 18.83 19.27L20.1 18L18.83 16.73C18.58 16.48 18.58 16.07 18.83 15.81C19.08 15.56 19.49 15.56 19.75 15.81L21.48 17.54C21.73 17.8 21.73 18.2 21.48 18.46Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21 7V14C20.17 13.37 19.13 13 18 13C15.24 13 13 15.24 13 18C13 19.63 13.79 21.09 15 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H8.92999L8.97 3.53003C8.99 4.34003 9.66 5 10.47 5H13.5C14.32 5 15 4.32 15 3.5V2H16C19.5 2 21 4 21 7Z"
        fill="currentColor"
      />
      <Path
        d="M14.9997 2V3.5C14.9997 4.32 14.3197 5 13.4997 5H10.4697C9.6597 5 8.9897 4.34003 8.9697 3.53003L8.92969 2H14.9997Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MobileProgrammingLinear = ({
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
        d="M8.92993 2L8.95993 3.53003C8.97993 4.34003 9.64993 5 10.4599 5H13.4799C14.3099 5 14.9799 4.32 14.9799 3.5V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 17L15 19L17 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 17L22 19L20 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MobileProgrammingOutline = ({
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
        d="M13.4994 5.75024H10.4794C9.25944 5.75024 8.24944 4.76022 8.22944 3.54022L8.19944 2.01025C8.18944 1.60025 8.51942 1.25023 8.92942 1.24023C8.93942 1.24023 8.93944 1.24023 8.94944 1.24023C9.35944 1.24023 9.68944 1.57021 9.69944 1.97021L9.72944 3.50024C9.73944 3.90024 10.0794 4.24023 10.4794 4.24023H13.4994C13.9194 4.24023 14.2494 3.90023 14.2494 3.49023V2.00024C14.2494 1.59024 14.5894 1.25024 14.9994 1.25024C15.4094 1.25024 15.7494 1.59024 15.7494 2.00024V3.50024C15.7494 4.74024 14.7394 5.75024 13.4994 5.75024Z"
        fill="currentColor"
      />
      <Path
        d="M16.9995 21.75C16.8095 21.75 16.6195 21.68 16.4695 21.53L14.4695 19.53C14.1795 19.24 14.1795 18.7599 14.4695 18.4699L16.4695 16.4699C16.7595 16.1799 17.2395 16.1799 17.5295 16.4699C17.8195 16.7599 17.8195 17.24 17.5295 17.53L16.0594 19L17.5295 20.4699C17.8195 20.7599 17.8195 21.24 17.5295 21.53C17.3795 21.68 17.1895 21.75 16.9995 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.9995 21.75C19.8095 21.75 19.6195 21.68 19.4695 21.53C19.1795 21.24 19.1795 20.7599 19.4695 20.4699L20.9395 19L19.4695 17.53C19.1795 17.24 19.1795 16.7599 19.4695 16.4699C19.7595 16.1799 20.2395 16.1799 20.5295 16.4699L22.5295 18.4699C22.8195 18.7599 22.8195 19.24 22.5295 19.53L20.5295 21.53C20.3795 21.68 20.1895 21.75 19.9995 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M13 22.75H8C4.35 22.75 2.25 20.65 2.25 17V7C2.25 3.35 4.35 1.25 8 1.25H16C19.65 1.25 21.75 3.35 21.75 7V14C21.75 14.41 21.41 14.75 21 14.75C20.59 14.75 20.25 14.41 20.25 14V7C20.25 4.14 18.86 2.75 16 2.75H8C5.14 2.75 3.75 4.14 3.75 7V17C3.75 19.86 5.14 21.25 8 21.25H13C13.41 21.25 13.75 21.59 13.75 22C13.75 22.41 13.41 22.75 13 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MobileProgrammingTwotone = ({
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
        d="M8.92969 2L8.95969 3.53003C8.97969 4.34003 9.64969 5 10.4597 5H13.4797C14.3097 5 14.9797 4.32 14.9797 3.5V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17 17L15 19L17 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M20 17L22 19L20 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7V14"
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
  bold: MobileProgrammingBold,
  broken: MobileProgrammingBroken,
  bulk: MobileProgrammingBulk,
  linear: MobileProgrammingLinear,
  outline: MobileProgrammingOutline,
  twotone: MobileProgrammingTwotone,
};

export const MobileProgrammingIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
