import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const PathSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.66 11.25L15.04 12.27L15.18 14.67C15.31 16.01 14.85 16.47 13.58 16.62L8.51 17.22C8.23176 17.2579 8.13732 16.9427 8.33589 16.7441L9.88 15.2C10.17 14.91 10.17 14.43 9.88 14.14C9.58 13.85 9.11 13.85 8.81 14.14L7.27478 15.683C7.07699 15.8818 6.76211 15.7879 6.8 15.51L7.39 10.44C7.55 9.17 8.01 8.76 9.35 8.84L11.74 8.98L12.77 7.35C13.24 6.61 14.2 6.57 14.9 7.27L16.75 9.12C17.41 9.77 17.37 10.8 16.66 11.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PathSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.7502 9.11998L14.9002 7.26998C14.2002 6.56998 13.2402 6.60998 12.7702 7.34998L11.7402 8.97998L15.0302 12.27L16.6602 11.24C17.3702 10.8 17.4102 9.76998 16.7502 9.11998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.7395 8.97993L9.34947 8.83993C8.00947 8.75993 7.54947 9.16993 7.39947 10.4399L6.79947 15.5099C6.66947 16.5799 7.43947 17.3399 8.50947 17.2199L13.5795 16.6199C14.8495 16.4699 15.3095 16.0099 15.1795 14.6699L15.0395 12.2799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.49023 16.5199L9.34023 14.6699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 13.03V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PathSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M16.6602 11.25L15.0402 12.27L11.7402 8.97998L12.7702 7.34998C13.2402 6.60998 14.2002 6.56998 14.9002 7.26998L16.7502 9.11998C17.4102 9.76998 17.3702 10.8 16.6602 11.25Z"
        fill="currentColor"
      />
      <Path
        opacity="0.6"
        d="M13.5796 16.6202L8.50958 17.2202C8.28958 17.2502 8.08958 17.2402 7.89958 17.1802C7.34958 17.0602 6.95958 16.6702 6.83958 16.1202C6.77958 15.9302 6.76958 15.7302 6.79958 15.5102L7.38958 10.4402C7.54958 9.17017 8.00958 8.76017 9.34958 8.84017L11.7396 8.98017L15.0396 12.2702L15.1796 14.6702C15.3096 16.0102 14.8496 16.4702 13.5796 16.6202Z"
        fill="currentColor"
      />
      <Path
        d="M9.87984 15.1999L7.89984 17.1799C7.34984 17.0599 6.95984 16.6699 6.83984 16.1199L8.80984 14.1399C9.10984 13.8499 9.57984 13.8499 9.87984 14.1399C10.1698 14.4299 10.1698 14.9099 9.87984 15.1999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PathSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.75 9.11998L14.9 7.26998C14.2 6.56998 13.24 6.60998 12.77 7.34998L11.74 8.97998L15.03 12.27L16.66 11.24C17.37 10.8 17.41 9.76998 16.75 9.11998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.74 8.97993L9.35 8.83993C8.01 8.75993 7.55 9.16993 7.4 10.4399L6.8 15.5099C6.67 16.5799 7.44 17.3399 8.51 17.2199L13.58 16.6199C14.85 16.4699 15.31 16.0099 15.18 14.6699L15.04 12.2799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.49 16.5199L9.34 14.6699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PathSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.0392 13.0198C14.8492 13.0198 14.6492 12.9398 14.5092 12.7998L11.2192 9.50978C10.9692 9.25978 10.9292 8.87978 11.1192 8.57978L12.1492 6.94978C12.4792 6.41978 12.9992 6.08978 13.5892 6.02978C14.2392 5.95978 14.9192 6.21978 15.4392 6.73978L17.2892 8.58978C17.7892 9.08978 18.0392 9.76978 17.9692 10.4398C17.8992 11.0398 17.5792 11.5598 17.0792 11.8798L15.4492 12.9098C15.3092 12.9898 15.1692 13.0198 15.0392 13.0198ZM12.6992 8.86978L15.1492 11.3198L16.2692 10.6098C16.4092 10.5198 16.4592 10.3798 16.4692 10.2698C16.4892 10.0598 16.3992 9.81978 16.2192 9.63978L14.3692 7.79978C14.1692 7.59978 13.9392 7.49978 13.7492 7.51978C13.6092 7.53978 13.4992 7.60978 13.4092 7.74978L12.6992 8.86978Z"
        fill="currentColor"
      />
      <Path
        d="M8.2902 17.98C7.6702 17.98 7.0902 17.75 6.6802 17.34C6.2002 16.86 5.9702 16.16 6.0602 15.42L6.6602 10.35C6.8602 8.66003 7.6802 7.98003 9.4002 8.09003L11.7902 8.23003C12.2002 8.26003 12.5202 8.61003 12.4902 9.02003C12.4602 9.43003 12.1102 9.75003 11.7002 9.72003L9.3002 9.59003C8.3302 9.53003 8.2402 9.68003 8.1402 10.53L7.5402 15.6C7.5102 15.88 7.5802 16.13 7.7302 16.28C7.8902 16.44 8.1302 16.51 8.4102 16.47L13.4802 15.87C14.4002 15.76 14.5102 15.62 14.4302 14.74L14.2802 12.32C14.2602 11.91 14.5702 11.55 14.9802 11.53C15.3902 11.5 15.7502 11.82 15.7702 12.23L15.9102 14.62C16.0802 16.3 15.3802 17.16 13.6502 17.36L8.5802 17.96C8.4902 17.98 8.3902 17.98 8.2902 17.98Z"
        fill="currentColor"
      />
      <Path
        d="M7.48969 17.2699C7.29969 17.2699 7.10969 17.1999 6.95969 17.0499C6.66969 16.7599 6.66969 16.2799 6.95969 15.9899L8.80969 14.1399C9.09969 13.8499 9.57969 13.8499 9.86969 14.1399C10.1597 14.4299 10.1597 14.9099 9.86969 15.1999L8.01969 17.0499C7.87969 17.1999 7.68969 17.2699 7.48969 17.2699Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PathSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M16.7502 9.11998L14.9002 7.26998C14.2002 6.56998 13.2402 6.60998 12.7702 7.34998L11.7402 8.97998L15.0302 12.27L16.6602 11.24C17.3702 10.8 17.4102 9.76998 16.7502 9.11998Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.7395 8.98017L9.34947 8.84017C8.00947 8.76017 7.54947 9.17017 7.39947 10.4402L6.79947 15.5102C6.66947 16.5802 7.43947 17.3402 8.50947 17.2202L13.5795 16.6202C14.8495 16.4702 15.3095 16.0102 15.1795 14.6702L15.0395 12.2802"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.49023 16.5199L9.34023 14.6699"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PathSquareBold,
  broken: PathSquareBroken,
  bulk: PathSquareBulk,
  linear: PathSquareLinear,
  outline: PathSquareOutline,
  twotone: PathSquareTwotone,
};

export const PathSquareIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
