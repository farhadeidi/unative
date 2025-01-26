import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const ShieldSlashBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.3608 4.63984L5.83078 18.1698L4.73078 17.3498C4.08078 16.8598 3.55078 15.7998 3.55078 14.9798V6.88984C3.55078 5.75984 4.41078 4.51984 5.46078 4.11984L10.9608 2.05984C11.5308 1.84984 12.4708 1.84984 13.0408 2.05984L18.5408 4.11984C18.8308 4.22984 19.1108 4.40984 19.3608 4.63984Z"
        fill="currentColor"
      />
      <Path
        d="M20.449 14.9789C20.449 15.7989 19.919 16.8589 19.269 17.3489L13.769 21.4589C12.789 22.1789 11.209 22.1789 10.229 21.4589L8.46901 20.1489C7.97901 19.7889 7.92901 19.0689 8.35901 18.6389L18.739 8.25886C19.369 7.62886 20.449 8.07886 20.449 8.96886V14.9789Z"
        fill="currentColor"
      />
      <Path
        d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShieldSlashBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.83984 20.02L9.42984 21.21C10.8398 22.27 13.1598 22.27 14.5698 21.21L18.8698 18C19.8198 17.29 20.5998 15.74 20.5998 14.56V7.12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.41016 11.04V14.56C3.41016 15.74 4.19016 17.29 5.14016 18L5.34016 18.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.9802 4.34006C18.8302 4.25006 18.6702 4.17006 18.5102 4.10006L13.5202 2.23006C12.6902 1.92006 11.3302 1.92006 10.5002 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShieldSlashBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.3608 4.64009L5.83078 18.1701L4.73078 17.3501C4.08078 16.8601 3.55078 15.8001 3.55078 14.9801V6.89009C3.55078 5.76009 4.41078 4.52009 5.46078 4.12009L10.9608 2.06009C11.5308 1.85009 12.4708 1.85009 13.0408 2.06009L18.5408 4.12009C18.8308 4.23009 19.1108 4.41009 19.3608 4.64009Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.4491 6.89008V14.9801C20.4491 15.8001 19.9191 16.8601 19.2691 17.3501L13.7691 21.4601C12.7891 22.1801 11.2091 22.1801 10.2291 21.4601L7.53906 19.4601L20.4191 6.58008C20.4391 6.68008 20.4491 6.79008 20.4491 6.89008Z"
        fill="currentColor"
      />
      <Path
        d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShieldSlashLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.84003 20.02L9.43003 21.21C10.84 22.27 13.16 22.27 14.57 21.21L18.87 18C19.82 17.29 20.6 15.74 20.6 14.56V7.12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.98 4.34006C18.83 4.25006 18.67 4.17006 18.51 4.10006L13.52 2.23006C12.69 1.92006 11.33 1.92006 10.5 2.23006L5.49997 4.11006C4.34997 4.54006 3.40997 5.90006 3.40997 7.12006V14.5501C3.40997 15.7301 4.18997 17.2801 5.13997 17.9901L5.33997 18.1401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShieldSlashOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0001 22.7601C10.9101 22.7601 9.83012 22.4401 8.98012 21.8101L7.39012 20.6201C7.06012 20.3701 6.99012 19.9001 7.24012 19.5701C7.49012 19.2401 7.96012 19.1701 8.29012 19.4201L9.88012 20.6101C11.0301 21.4701 12.9801 21.4701 14.1301 20.6101L18.4301 17.4001C19.1901 16.8301 19.8501 15.5001 19.8501 14.5601V7.12012C19.8501 6.71012 20.1901 6.37012 20.6001 6.37012C21.0101 6.37012 21.3501 6.71012 21.3501 7.12012V14.5501C21.3501 15.9701 20.4601 17.7401 19.3201 18.5901L15.0201 21.8001C14.1701 22.4401 13.0901 22.7601 12.0001 22.7601Z"
        fill="currentColor"
      />
      <Path
        d="M5.33039 18.8999C5.17039 18.8999 5.02039 18.8499 4.88039 18.7499L4.68039 18.5999C3.54039 17.7499 2.65039 15.9699 2.65039 14.5599V7.11994C2.65039 5.57994 3.78039 3.93994 5.23039 3.39994L10.2204 1.52994C11.2104 1.15994 12.7704 1.15994 13.7604 1.52994L18.7604 3.39994C18.9704 3.47994 19.1704 3.57994 19.3704 3.69994C19.7204 3.91994 19.8304 4.37994 19.6104 4.72994C19.3904 5.07994 18.9304 5.18994 18.5804 4.96994C18.4704 4.89994 18.3604 4.83994 18.2404 4.79994L13.2404 2.92994C12.5804 2.67994 11.4104 2.67994 10.7504 2.92994L5.76039 4.80994C4.90039 5.12994 4.15039 6.20994 4.15039 7.12994V14.5599C4.15039 15.5099 4.82039 16.8399 5.57039 17.3999L5.77039 17.5499C6.10039 17.7999 6.17039 18.2699 5.92039 18.5999C5.79039 18.7899 5.56039 18.8999 5.33039 18.8999Z"
        fill="currentColor"
      />
      <Path
        d="M1.99945 22.7499C1.80945 22.7499 1.61945 22.6799 1.46945 22.5299C1.17945 22.2399 1.17945 21.7599 1.46945 21.4699L21.4695 1.46994C21.7595 1.17994 22.2395 1.17994 22.5295 1.46994C22.8195 1.75994 22.8195 2.23994 22.5295 2.52994L2.52945 22.5299C2.37945 22.6799 2.18945 22.7499 1.99945 22.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShieldSlashTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.83984 20.0201L9.42984 21.2101C10.8398 22.2701 13.1598 22.2701 14.5698 21.2101L18.8698 18.0001C19.8198 17.2901 20.5998 15.7401 20.5998 14.5601V7.12012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.9802 4.34006C18.8302 4.25006 18.6702 4.17006 18.5102 4.10006L13.5202 2.23006C12.6902 1.92006 11.3302 1.92006 10.5002 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L5.34016 18.1401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ShieldSlashBold,
  broken: ShieldSlashBroken,
  bulk: ShieldSlashBulk,
  linear: ShieldSlashLinear,
  outline: ShieldSlashOutline,
  twotone: ShieldSlashTwotone,
};

export const ShieldSlashIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
