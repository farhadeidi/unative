import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const LifebuoyBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.5007 12.0005C7.5007 11.3374 7.64861 10.7076 7.91148 10.1377C8.11499 9.69642 8.07996 9.15973 7.73636 8.81613L5.15929 6.23906C4.74923 5.829 4.07311 5.85053 3.74213 6.32671C2.62168 7.93866 1.9707 9.89445 1.9707 12.0005C1.9707 14.1048 2.62067 16.0592 3.73347 17.6705C4.06348 18.1483 4.74064 18.1714 5.15178 17.7613L7.73484 15.1848C8.07922 14.8413 8.11463 14.304 7.91102 13.8623C7.64844 13.2926 7.5007 12.6632 7.5007 12.0005Z"
        fill="currentColor"
      />
      <Path
        d="M12.0009 7.5C12.6641 7.5 13.2938 7.64791 13.8637 7.91078C14.305 8.11428 14.8417 8.07926 15.1853 7.73566L17.7345 5.18643C18.1438 4.77717 18.1233 4.10256 17.6486 3.77141C16.0425 2.65097 14.0854 2 11.9709 2C9.86674 2 7.91966 2.64985 6.31072 3.76248C5.8331 4.09277 5.80998 4.76993 6.22007 5.18107L8.78114 7.74868C9.12705 8.09546 9.66901 8.12873 10.1126 7.92105C10.6864 7.6524 11.3246 7.5 12.0009 7.5Z"
        fill="currentColor"
      />
      <Path
        d="M19.8905 5.90437C19.7128 5.67475 19.3754 5.6628 19.1699 5.86784L15.9511 9.07838C15.7777 9.25133 15.7578 9.52303 15.8817 9.73427C16.2721 10.3997 16.5004 11.1705 16.5004 11.9983C16.5004 12.8263 16.2719 13.5972 15.8814 14.2628C15.7576 14.4738 15.7773 14.7452 15.9503 14.9182L19.1699 18.1377C19.3753 18.3432 19.7131 18.3315 19.8908 18.1016C21.1961 16.4133 21.9704 14.2951 21.9704 11.9983C21.9704 9.70125 21.196 7.59144 19.8905 5.90437Z"
        fill="currentColor"
      />
      <Path
        d="M11.9992 16.4984C11.1712 16.4984 10.4003 16.27 9.73473 15.8794C9.52372 15.7556 9.25233 15.7753 9.07933 15.9483L5.82976 19.1979C5.62427 19.4034 5.63601 19.7411 5.86592 19.9189C7.55424 21.2242 9.67239 21.9984 11.9692 21.9984C14.2764 21.9984 16.3961 21.2234 18.077 19.9092C18.305 19.7309 18.3156 19.3949 18.111 19.1902L14.8864 15.9656C14.7146 15.7938 14.4455 15.7731 14.2351 15.8945C13.572 16.277 12.8106 16.4984 11.9992 16.4984Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LifebuoyBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.0407 3.3C4.0107 5.02 1.9707 8.27 1.9707 12C1.9707 17.52 6.4507 22 11.9707 22C17.4907 22 21.9707 17.52 21.9707 12C21.9707 6.48 17.4907 2 11.9707 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.90039 4.92993L8.44039 8.45993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.90039 19.07L8.44039 15.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0498 19.07L15.5098 15.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0498 4.92993L15.5098 8.45993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LifebuoyBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9707 12C21.9707 14.49 21.0607 16.77 19.5507 18.52C19.2207 18.9 18.8707 19.26 18.4907 19.57C16.7507 21.09 14.4707 22 11.9707 22C9.4807 22 7.2007 21.09 5.4507 19.58C5.0707 19.25 4.7207 18.9 4.3907 18.52C2.8807 16.77 1.9707 14.49 1.9707 12C1.9707 9.51 2.8807 7.23 4.4007 5.48C4.7207 5.1 5.0807 4.74 5.4607 4.42C7.2107 2.91 9.4807 2 11.9707 2C14.4707 2 16.7507 2.91 18.4907 4.43C18.8707 4.75 19.2307 5.1 19.5507 5.49C21.0607 7.24 21.9707 9.51 21.9707 12Z"
        fill="currentColor"
      />
      <Path
        d="M15.6506 14.6199L19.5506 18.5199C19.2206 18.8999 18.8706 19.2599 18.4906 19.5699L14.5906 15.6699C13.8506 16.1899 12.9606 16.4999 12.0006 16.4999C11.0206 16.4999 10.1206 16.1799 9.38063 15.6499L5.45062 19.5799C5.07062 19.2499 4.72063 18.8999 4.39062 18.5199L8.33063 14.5899C7.81063 13.8499 7.50063 12.9599 7.50063 11.9999C7.50063 11.0399 7.81063 10.1499 8.33063 9.40992L4.40063 5.47992C4.72063 5.09992 5.08063 4.73992 5.46063 4.41992L9.38063 8.34992C10.1206 7.81992 11.0206 7.49992 12.0006 7.49992C12.9606 7.49992 13.8506 7.80992 14.5906 8.32992L18.4906 4.42992C18.8706 4.74992 19.2306 5.09992 19.5506 5.48992L15.6506 9.37992C16.1806 10.1199 16.5006 11.0199 16.5006 11.9999C16.5006 12.9799 16.1806 13.8799 15.6506 14.6199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LifebuoyLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.89999 4.92993L8.43999 8.45993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.89999 19.07L8.43999 15.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.05 19.07L15.51 15.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.05 4.92993L15.51 8.45993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LifebuoyOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9707 22.75C6.0507 22.75 1.2207 17.93 1.2207 12C1.2207 6.07 6.0507 1.25 11.9707 1.25C17.8907 1.25 22.7207 6.07 22.7207 12C22.7207 17.93 17.9007 22.75 11.9707 22.75ZM11.9707 2.75C6.8707 2.75 2.7207 6.9 2.7207 12C2.7207 17.1 6.8707 21.25 11.9707 21.25C17.0707 21.25 21.2207 17.1 21.2207 12C21.2207 6.9 17.0707 2.75 11.9707 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M12 17.25C9.1 17.25 6.75 14.89 6.75 12C6.75 9.11 9.1 6.75 12 6.75C14.9 6.75 17.25 9.11 17.25 12C17.25 14.89 14.9 17.25 12 17.25ZM12 8.25C9.93 8.25 8.25 9.93 8.25 12C8.25 14.07 9.93 15.75 12 15.75C14.07 15.75 15.75 14.07 15.75 12C15.75 9.93 14.07 8.25 12 8.25Z"
        fill="currentColor"
      />
      <Path
        d="M8.43984 9.21012C8.24984 9.21012 8.04984 9.14012 7.90984 9.00012L4.36984 5.46012C4.07984 5.17012 4.07984 4.69012 4.36984 4.40012C4.65984 4.11012 5.13984 4.11012 5.42984 4.40012L8.96984 7.94012C9.25984 8.23012 9.25984 8.70012 8.96984 9.00012C8.81984 9.14012 8.62984 9.21012 8.43984 9.21012Z"
        fill="currentColor"
      />
      <Path
        d="M4.89984 19.8202C4.70984 19.8202 4.51984 19.7502 4.36984 19.6002C4.07984 19.3102 4.07984 18.8302 4.36984 18.5402L7.90984 15.0002C8.19984 14.7102 8.67984 14.7102 8.96984 15.0002C9.25984 15.2902 9.25984 15.7702 8.96984 16.0602L5.42984 19.6002C5.28984 19.7502 5.08984 19.8202 4.89984 19.8202Z"
        fill="currentColor"
      />
      <Path
        d="M19.0395 19.8202C18.8495 19.8202 18.6595 19.7502 18.5095 19.6002L14.9695 16.0602C14.6795 15.7702 14.6795 15.2902 14.9695 15.0002C15.2595 14.7102 15.7395 14.7102 16.0295 15.0002L19.5695 18.5402C19.8595 18.8302 19.8595 19.3102 19.5695 19.6002C19.4295 19.7502 19.2395 19.8202 19.0395 19.8202Z"
        fill="currentColor"
      />
      <Path
        d="M15.5092 9.20986C15.3192 9.20986 15.1292 9.13986 14.9792 8.98986C14.6892 8.69986 14.6892 8.21986 14.9792 7.92986L18.5192 4.38986C18.8092 4.09986 19.2892 4.09986 19.5792 4.38986C19.8692 4.67986 19.8692 5.15986 19.5792 5.44986L16.0392 8.99986C15.8892 9.13986 15.6992 9.20986 15.5092 9.20986Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LifebuoyTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M4.90039 4.93018L8.44039 8.46018"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M4.90039 19.07L8.44039 15.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M19.0498 19.07L15.5098 15.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M19.0498 4.93018L15.5098 8.46018"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: LifebuoyBold,
  broken: LifebuoyBroken,
  bulk: LifebuoyBulk,
  linear: LifebuoyLinear,
  outline: LifebuoyOutline,
  twotone: LifebuoyTwotone,
};

export const LifebuoyIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default LifebuoyIcon;
