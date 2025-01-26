import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Path2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.1505 22.0003H9.83047C8.29047 22.0003 7.15047 20.7503 7.45047 19.4203L7.97047 17.1003C8.07047 16.6403 8.48047 16.3203 8.95047 16.3203H15.0405C15.5105 16.3203 15.9105 16.6403 16.0205 17.1003L16.5405 19.4103C16.8605 20.8403 15.7905 22.0003 14.1505 22.0003Z"
        fill="currentColor"
      />
      <Path
        d="M18.8198 13.69L17.7498 14.63C17.3798 14.95 16.9098 15.13 16.4298 15.13H7.58983C7.09983 15.13 6.61983 14.95 6.25983 14.62L5.20983 13.68C3.48983 12.27 3.47983 11.19 4.79983 9.53L10.0298 2.92C10.0664 2.87094 10.1039 2.82374 10.1423 2.77836C10.5832 2.25735 11.2698 2.70487 11.2698 3.38743V6.86C11.2598 7.29 11.5998 7.63 12.0198 7.62C12.4398 7.63 12.7698 7.29 12.7798 6.86V3.38743C12.7798 2.70487 13.4562 2.2676 13.9088 2.77848C13.9463 2.82077 13.9833 2.8646 14.0198 2.91L19.2298 9.53C20.5298 11.19 20.4798 12.22 18.8198 13.69Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Path2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.87007 22.0001H14.1601C15.7801 22.0001 16.8501 20.8401 16.5301 19.4301L15.8401 16.3501H8.20007L7.51007 19.4301C7.20007 20.7601 8.34007 22.0001 9.87007 22.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7692 13.7401C20.4092 12.2801 20.4792 11.2601 19.1792 9.61012L13.9892 3.03012C12.8992 1.65012 11.1192 1.65012 10.0192 3.03012L4.83916 9.61012C3.53916 11.2601 3.53916 12.3301 5.24916 13.7401L8.18916 16.3501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0098 2.66992V6.96992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Path2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.1506 22.0001H9.87057C8.34057 22.0001 7.20057 20.7601 7.49057 19.4301L8.19057 16.3501H15.8306L16.5306 19.4301C16.8506 20.8401 15.7806 22.0001 14.1506 22.0001Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.7692 13.7402L15.8292 16.3502H8.18916L5.24916 13.7402C3.53916 12.3402 3.53916 11.2602 4.83916 9.61018L10.0292 3.04018C10.3892 2.59018 10.8092 2.28018 11.2592 2.12018C11.7492 1.95018 12.2692 1.95018 12.7592 2.12018C13.2092 2.28018 13.6292 2.59018 13.9892 3.04018L19.1792 9.61018C20.4792 11.2602 20.4192 12.2802 18.7692 13.7402Z"
        fill="currentColor"
      />
      <Path
        d="M12.7598 2.12018V6.97018C12.7598 7.38018 12.4198 7.72018 12.0098 7.72018C11.5998 7.72018 11.2598 7.38018 11.2598 6.97018V2.12018C11.7498 1.95018 12.2698 1.95018 12.7598 2.12018Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Path2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.87001 22.0001H14.16C15.78 22.0001 16.85 20.8401 16.53 19.4301L15.84 16.3501H8.20001L7.51001 19.4301C7.20001 20.7601 8.34001 22.0001 9.87001 22.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.83 16.3501L18.77 13.7401C20.41 12.2801 20.48 11.2601 19.18 9.61012L13.99 3.03012C12.9 1.65012 11.12 1.65012 10.02 3.03012L4.84 9.61012C3.54 11.2601 3.54 12.3301 5.25 13.7401L8.19 16.3501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.01 2.66992V6.96992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Path2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.1492 22.7501H9.86924C8.84924 22.7501 7.90924 22.3201 7.30924 21.5601C6.77924 20.9001 6.58924 20.0601 6.76924 19.2601L7.45924 16.1801C7.53924 15.8401 7.83924 15.6001 8.18924 15.6001H15.8292C16.1792 15.6001 16.4792 15.8401 16.5592 16.1801L17.2592 19.2601C17.4492 20.1201 17.2692 20.9501 16.7492 21.6001C16.1692 22.3301 15.2192 22.7501 14.1492 22.7501ZM8.78924 17.1001L8.22924 19.6001C8.14924 19.9601 8.23924 20.3201 8.47924 20.6301C8.78924 21.0201 9.30924 21.2501 9.86924 21.2501H14.1592C14.7692 21.2501 15.2892 21.0401 15.5792 20.6701C15.8192 20.3801 15.8892 20.0001 15.7992 19.6001L15.2392 17.1001H8.78924Z"
        fill="currentColor"
      />
      <Path
        d="M8.18957 17.1C8.00957 17.1 7.82957 17.04 7.68957 16.91L4.74957 14.3C2.81957 12.71 2.65957 11.17 4.24957 9.15L9.43957 2.57C10.1096 1.72 11.0296 1.25 12.0096 1.25C12.9996 1.25 13.9096 1.72 14.5796 2.57L19.7696 9.15C21.3396 11.14 21.1996 12.59 19.2696 14.3L16.3296 16.91C16.0196 17.18 15.5396 17.16 15.2696 16.85C14.9996 16.54 15.0196 16.07 15.3296 15.79L18.2696 13.18C19.5896 12.01 19.6496 11.43 18.5896 10.08L13.4096 3.5C12.6496 2.53 11.3796 2.53 10.6196 3.5L5.42957 10.08C4.33957 11.46 4.38957 12.07 5.71957 13.16L8.67957 15.79C8.98957 16.06 9.01957 16.54 8.73957 16.85C8.59957 17.01 8.39957 17.1 8.18957 17.1Z"
        fill="currentColor"
      />
      <Path
        d="M12.0098 7.71992C11.5998 7.71992 11.2598 7.37992 11.2598 6.96992V2.66992C11.2598 2.25992 11.5998 1.91992 12.0098 1.91992C12.4198 1.91992 12.7598 2.25992 12.7598 2.66992V6.96992C12.7598 7.37992 12.4198 7.71992 12.0098 7.71992Z"
        fill="currentColor"
      />
      <Path
        d="M14.1492 22.7501H9.86924C8.84924 22.7501 7.90924 22.3201 7.30924 21.5601C6.77924 20.9001 6.58924 20.0601 6.76924 19.2601L7.45924 16.1801C7.53924 15.8401 7.83924 15.6001 8.18924 15.6001H15.8292C16.1792 15.6001 16.4792 15.8401 16.5592 16.1801L17.2592 19.2601C17.4492 20.1201 17.2692 20.9501 16.7492 21.6001C16.1692 22.3301 15.2192 22.7501 14.1492 22.7501ZM8.78924 17.1001L8.22924 19.6001C8.14924 19.9601 8.23924 20.3201 8.47924 20.6301C8.78924 21.0201 9.30924 21.2501 9.86924 21.2501H14.1592C14.7692 21.2501 15.2892 21.0401 15.5792 20.6701C15.8192 20.3801 15.8892 20.0001 15.7992 19.6001L15.2392 17.1001H8.78924Z"
        fill="currentColor"
      />
      <Path
        d="M8.18957 17.1C8.00957 17.1 7.82957 17.04 7.68957 16.91L4.74957 14.3C2.81957 12.71 2.65957 11.17 4.24957 9.15L9.43957 2.57C10.1096 1.72 11.0296 1.25 12.0096 1.25C12.9996 1.25 13.9096 1.72 14.5796 2.57L19.7696 9.15C21.3396 11.14 21.1996 12.59 19.2696 14.3L16.3296 16.91C16.0196 17.18 15.5396 17.16 15.2696 16.85C14.9996 16.54 15.0196 16.07 15.3296 15.79L18.2696 13.18C19.5896 12.01 19.6496 11.43 18.5896 10.08L13.4096 3.5C12.6496 2.53 11.3796 2.53 10.6196 3.5L5.42957 10.08C4.33957 11.46 4.38957 12.07 5.71957 13.16L8.67957 15.79C8.98957 16.06 9.01957 16.54 8.73957 16.85C8.59957 17.01 8.39957 17.1 8.18957 17.1Z"
        fill="currentColor"
      />
      <Path
        d="M12.0098 7.71992C11.5998 7.71992 11.2598 7.37992 11.2598 6.96992V2.66992C11.2598 2.25992 11.5998 1.91992 12.0098 1.91992C12.4198 1.91992 12.7598 2.25992 12.7598 2.66992V6.96992C12.7598 7.37992 12.4198 7.71992 12.0098 7.71992Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Path2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.87007 22.0001H14.1601C15.7801 22.0001 16.8501 20.8401 16.5301 19.4301L15.8401 16.3501H8.20007L7.51007 19.4301C7.20007 20.7601 8.34007 22.0001 9.87007 22.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8292 16.3501L18.7692 13.7401C20.4092 12.2801 20.4792 11.2601 19.1792 9.61012L13.9892 3.03012C12.8992 1.65012 11.1192 1.65012 10.0192 3.03012L4.83916 9.61012C3.53916 11.2601 3.53916 12.3301 5.24916 13.7401L8.18916 16.3501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.0098 2.66992V6.96992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Path2Bold,
  broken: Path2Broken,
  bulk: Path2Bulk,
  linear: Path2Linear,
  outline: Path2Outline,
  twotone: Path2Twotone,
};

export const Path2Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
