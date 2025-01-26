import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const I3DSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2.32812H7.81C4.17 2.32812 2 4.50812 2 8.14812V16.5181C2 20.1581 4.17 22.3281 7.81 22.3281H16.18C19.82 22.3281 21.99 20.1581 21.99 16.5181V8.14812C22 4.50812 19.83 2.32812 16.19 2.32812ZM11.57 17.1181C11.57 17.4181 11.42 17.6881 11.16 17.8481C11.02 17.9381 10.87 17.9781 10.71 17.9781C10.58 17.9781 10.45 17.9481 10.32 17.8881L6.82 16.1381C6.32 15.8781 6 15.3681 6 14.7981V11.4881C6 11.1881 6.15 10.9181 6.41 10.7581C6.67 10.5981 6.98 10.5881 7.25 10.7181L10.75 12.4681C11.26 12.7281 11.58 13.2381 11.58 13.8081V17.1181H11.57ZM11.36 11.7681L7.6 9.73812C7.33 9.58812 7.16 9.29813 7.16 8.96813C7.16 8.64813 7.33 8.34812 7.6 8.19812L11.36 6.16813C11.76 5.95813 12.23 5.95813 12.63 6.16813L16.39 8.19812C16.66 8.34812 16.83 8.63813 16.83 8.96813C16.83 9.29813 16.66 9.58812 16.39 9.73812L12.63 11.7681C12.43 11.8781 12.21 11.9281 11.99 11.9281C11.77 11.9281 11.56 11.8781 11.36 11.7681ZM18 14.7981C18 15.3681 17.68 15.8881 17.17 16.1381L13.67 17.8881C13.55 17.9481 13.42 17.9781 13.28 17.9781C13.12 17.9781 12.97 17.9381 12.83 17.8481C12.57 17.6881 12.42 17.4181 12.42 17.1181V13.8081C12.42 13.2381 12.74 12.7181 13.25 12.4681L16.75 10.7181C17.02 10.5881 17.33 10.5981 17.59 10.7581C17.85 10.9181 18 11.1881 18 11.4881V14.7981Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const I3DSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 14V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.70117 9.26001L12.0012 12.33L17.2612 9.28001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.002 17.7701V12.3201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7603 6.2901L7.56024 8.0701C6.84024 8.4701 6.24023 9.4801 6.24023 10.3101V13.7001C6.24023 14.5301 6.83024 15.5401 7.56024 15.9401L10.7603 17.7201C11.4403 18.1001 12.5602 18.1001 13.2502 17.7201L16.4503 15.9401C17.1703 15.5401 17.7702 14.5301 17.7702 13.7001V10.3001C17.7702 9.4701 17.1803 8.4601 16.4503 8.0601L13.2502 6.2801C12.5602 5.9001 11.4403 5.9001 10.7603 6.2901Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const I3DSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1898 2.33008H7.81976C4.17976 2.33008 2.00977 4.50008 2.00977 8.14008V16.5101C2.00977 20.1501 4.17976 22.3201 7.81976 22.3201H16.1898C19.8298 22.3201 21.9998 20.1501 21.9998 16.5101V8.15008C21.9998 4.51008 19.8298 2.33008 16.1898 2.33008Z"
        fill="currentColor"
      />
      <Path
        d="M16.3999 8.20996L12.6399 6.17996C12.2399 5.96996 11.7699 5.96996 11.3699 6.17996L7.60989 8.20996C7.33989 8.35996 7.16992 8.64996 7.16992 8.97996C7.16992 9.30996 7.33989 9.59996 7.60989 9.74996L11.3699 11.78C11.5699 11.89 11.7899 11.94 12.0099 11.94C12.2299 11.94 12.4499 11.89 12.6499 11.78L16.4099 9.74996C16.6799 9.59996 16.8499 9.30996 16.8499 8.97996C16.8399 8.64996 16.6699 8.35996 16.3999 8.20996Z"
        fill="currentColor"
      />
      <Path
        d="M10.7402 12.4699L7.24023 10.7199C6.97023 10.5899 6.66024 10.5999 6.40024 10.7599C6.14024 10.9199 5.99023 11.1899 5.99023 11.4899V14.7999C5.99023 15.3699 6.31025 15.8899 6.82025 16.1399L10.3203 17.8899C10.4403 17.9499 10.5702 17.9799 10.7102 17.9799C10.8702 17.9799 11.0202 17.9399 11.1602 17.8499C11.4202 17.6899 11.5703 17.4199 11.5703 17.1199V13.8099C11.5703 13.2399 11.2602 12.7299 10.7402 12.4699Z"
        fill="currentColor"
      />
      <Path
        d="M17.5899 10.7599C17.3299 10.5999 17.0199 10.5899 16.7499 10.7199L13.2499 12.4699C12.7399 12.7299 12.4199 13.2399 12.4199 13.8099V17.1199C12.4199 17.4199 12.5699 17.6899 12.8299 17.8499C12.9699 17.9399 13.1199 17.9799 13.2799 17.9799C13.4099 17.9799 13.5399 17.9499 13.6699 17.8899L17.1699 16.1399C17.6799 15.8799 17.9999 15.3699 17.9999 14.7999V11.4899C17.9999 11.1899 17.8499 10.9199 17.5899 10.7599Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const I3DSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.69995 9.26001L11.9999 12.33L17.2599 9.28001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 17.7701V12.3201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.76 6.28998L7.56 8.06998C6.84 8.46998 6.23999 9.47998 6.23999 10.31V13.7C6.23999 14.53 6.83 15.54 7.56 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.3C17.77 9.46998 17.18 8.45998 16.45 8.05998L13.25 6.27998C12.56 5.89998 11.44 5.89998 10.76 6.28998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const I3DSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M12.0006 13.0799C11.8706 13.0799 11.7406 13.0499 11.6206 12.9799L6.32061 9.91994C5.96061 9.70994 5.84059 9.24995 6.05059 8.89995C6.26059 8.53995 6.72061 8.41994 7.07061 8.62994L11.9906 11.4799L16.8806 8.64995C17.2406 8.43995 17.7006 8.56994 17.9006 8.91994C18.1006 9.26994 17.9806 9.73995 17.6306 9.93995L12.3706 12.9799C12.2606 13.0399 12.1306 13.0799 12.0006 13.0799Z"
        fill="currentColor"
      />
      <Path
        d="M12 18.5201C11.59 18.5201 11.25 18.1801 11.25 17.7701V12.3301C11.25 11.9201 11.59 11.5801 12 11.5801C12.41 11.5801 12.75 11.9201 12.75 12.3301V17.7701C12.75 18.1801 12.41 18.5201 12 18.5201Z"
        fill="currentColor"
      />
      <Path
        d="M12.0002 18.75C11.4202 18.75 10.8503 18.62 10.3903 18.37L7.19025 16.59C6.23025 16.06 5.49023 14.79 5.49023 13.69V10.3C5.49023 9.21005 6.24025 7.94005 7.19025 7.40005L10.3903 5.62005C11.3103 5.11005 12.6902 5.11005 13.6102 5.62005L16.8102 7.40005C17.7702 7.93005 18.5103 9.20005 18.5103 10.3V13.69C18.5103 14.78 17.7602 16.05 16.8102 16.59L13.6102 18.37C13.1502 18.63 12.5802 18.75 12.0002 18.75ZM12.0002 6.75005C11.6702 6.75005 11.3502 6.81005 11.1202 6.94005L7.92026 8.72005C7.43026 8.99005 6.99023 9.75005 6.99023 10.3V13.69C6.99023 14.25 7.43026 15 7.92026 15.27L11.1202 17.05C11.5802 17.31 12.4202 17.31 12.8802 17.05L16.0802 15.27C16.5702 15 17.0103 14.24 17.0103 13.69V10.3C17.0103 9.74005 16.5702 8.99005 16.0802 8.72005L12.8802 6.94005C12.6502 6.81005 12.3302 6.75005 12.0002 6.75005Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const I3DSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.69922 9.25977L11.9992 12.3298L17.2592 9.27976"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 17.7698V12.3198"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7603 6.28986L7.56024 8.06986C6.84024 8.46986 6.24023 9.47985 6.24023 10.3099V13.6999C6.24023 14.5299 6.83024 15.5399 7.56024 15.9399L10.7603 17.7199C11.4403 18.0999 12.5602 18.0999 13.2502 17.7199L16.4503 15.9399C17.1703 15.5399 17.7702 14.5299 17.7702 13.6999V10.2999C17.7702 9.46986 17.1803 8.45985 16.4503 8.05985L13.2502 6.27985C12.5602 5.89985 11.4403 5.89986 10.7603 6.28986Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: I3DSquareBold,
  broken: I3DSquareBroken,
  bulk: I3DSquareBulk,
  linear: I3DSquareLinear,
  outline: I3DSquareOutline,
  twotone: I3DSquareTwotone,
};

export const I3DSquareIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
