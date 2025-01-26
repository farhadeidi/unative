import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Box1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.0984 6.94C20.0984 7.48 19.8084 7.97 19.3484 8.22L17.6084 9.16L16.1284 9.95L13.0584 11.61C12.7284 11.79 12.3684 11.88 11.9984 11.88C11.6284 11.88 11.2684 11.79 10.9384 11.61L4.64844 8.22C4.18844 7.97 3.89844 7.48 3.89844 6.94C3.89844 6.4 4.18844 5.91 4.64844 5.66L6.61844 4.6L8.18844 3.75L10.9384 2.27C11.5984 1.91 12.3984 1.91 13.0584 2.27L19.3484 5.66C19.8084 5.91 20.0984 6.4 20.0984 6.94Z"
        fill="currentColor"
      />
      <Path
        d="M9.89875 12.7901L4.04875 9.87014C3.59875 9.64014 3.07875 9.67014 2.64875 9.93014C2.21875 10.1901 1.96875 10.6501 1.96875 11.1501V16.6801C1.96875 17.6401 2.49875 18.5001 3.35875 18.9301L9.20875 21.8501C9.40875 21.9501 9.62875 22.0001 9.84875 22.0001C10.1088 22.0001 10.3688 21.9301 10.5988 21.7801C11.0288 21.5201 11.2787 21.0601 11.2787 20.5601V15.0301C11.2887 14.0801 10.7587 13.2201 9.89875 12.7901Z"
        fill="currentColor"
      />
      <Path
        d="M22.0309 11.1496V16.6796C22.0309 17.6296 21.5009 18.4896 20.6409 18.9196L14.7909 21.8496C14.5909 21.9496 14.3709 21.9996 14.1509 21.9996C13.8909 21.9996 13.6309 21.9296 13.3909 21.7796C12.9709 21.5196 12.7109 21.0596 12.7109 20.5596V15.0396C12.7109 14.0796 13.2409 13.2196 14.1009 12.7896L16.2509 11.7196L17.7509 10.9696L19.9509 9.86964C20.4009 9.63964 20.9209 9.65964 21.3509 9.92964C21.7709 10.1896 22.0309 10.6496 22.0309 11.1496Z"
        fill="currentColor"
      />
      <Path
        d="M17.6111 9.16L16.1311 9.95L6.62109 4.6L8.19109 3.75L17.3711 8.93C17.4711 8.99 17.5511 9.07 17.6111 9.16Z"
        fill="currentColor"
      />
      <Path
        d="M17.75 10.9688V13.2387C17.75 13.6487 17.41 13.9887 17 13.9887C16.59 13.9887 16.25 13.6487 16.25 13.2387V11.7188L17.75 10.9688Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Box1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.61V12.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.39062 13.2501V14.8301C2.39062 16.2101 3.38063 17.8901 4.59063 18.5601L9.93062 21.5301C11.0706 22.1601 12.9406 22.1601 14.0806 21.5301L19.4206 18.5601C20.6306 17.8901 21.6206 16.2101 21.6206 14.8301V9.17006C21.6206 7.79006 20.6306 6.11006 19.4206 5.44006L14.0806 2.47006C12.9406 1.84006 11.0706 1.84006 9.93062 2.47006L4.59063 5.44006C3.38063 6.11006 2.39062 7.79006 2.39062 9.17006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Box1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.0409 7.19L12.0009 12.42L2.96094 7.19C3.36094 6.45 3.94094 5.8 4.59094 5.44L9.93094 2.48C11.0709 1.84 12.9309 1.84 14.0709 2.48L19.4109 5.44C20.0609 5.8 20.6409 6.45 21.0409 7.19Z"
        fill="currentColor"
      />
      <Path
        opacity="0.6"
        d="M12.0006 12.4199V21.9999C11.2506 21.9999 10.5006 21.8399 9.93062 21.5199L4.59063 18.5599C3.38063 17.8899 2.39062 16.2099 2.39062 14.8299V9.16994C2.39062 8.52994 2.61062 7.82994 2.96062 7.18994L12.0006 12.4199Z"
        fill="currentColor"
      />
      <Path
        d="M21.61 9.16994V14.8299C21.61 16.2099 20.62 17.8899 19.41 18.5599L14.07 21.5199C13.5 21.8399 12.75 21.9999 12 21.9999V12.4199L21.04 7.18994C21.39 7.82994 21.61 8.52994 21.61 9.16994Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Box1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.17004 7.43994L12 12.5499L20.77 7.46994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.61V12.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.93001 2.48004L4.59001 5.44004C3.38001 6.11004 2.39001 7.79004 2.39001 9.17004V14.82C2.39001 16.2 3.38001 17.88 4.59001 18.55L9.93001 21.52C11.07 22.15 12.94 22.15 14.08 21.52L19.42 18.55C20.63 17.88 21.62 16.2 21.62 14.82V9.17004C21.62 7.79004 20.63 6.11004 19.42 5.44004L14.08 2.47004C12.93 1.84004 11.07 1.84004 9.93001 2.48004Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Box1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9991 13.3001C11.8691 13.3001 11.7391 13.2701 11.6191 13.2001L2.78911 8.0901C2.43911 7.8801 2.30911 7.4201 2.51911 7.0601C2.72911 6.7001 3.18911 6.5801 3.54911 6.7901L11.9991 11.6801L20.3991 6.8201C20.7591 6.6101 21.2191 6.7401 21.4291 7.0901C21.6391 7.4501 21.5091 7.9101 21.1591 8.1201L12.3891 13.2001C12.2591 13.2601 12.1291 13.3001 11.9991 13.3001Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.36C11.59 22.36 11.25 22.02 11.25 21.61V12.54C11.25 12.13 11.59 11.79 12 11.79C12.41 11.79 12.75 12.13 12.75 12.54V21.61C12.75 22.02 12.41 22.36 12 22.36Z"
        fill="currentColor"
      />
      <Path
        d="M12.0006 22.75C11.1206 22.75 10.2506 22.56 9.56063 22.18L4.22062 19.21C2.77062 18.41 1.64062 16.48 1.64062 14.82V9.17C1.64062 7.51 2.77062 5.59 4.22062 4.78L9.56063 1.82C10.9306 1.06 13.0706 1.06 14.4406 1.82L19.7806 4.79C21.2306 5.59 22.3606 7.52 22.3606 9.18V14.83C22.3606 16.49 21.2306 18.41 19.7806 19.22L14.4406 22.18C13.7506 22.56 12.8806 22.75 12.0006 22.75ZM12.0006 2.75C11.3706 2.75 10.7506 2.88 10.2906 3.13L4.95062 6.1C3.99062 6.63 3.14063 8.07 3.14063 9.17V14.82C3.14063 15.92 3.99062 17.36 4.95062 17.9L10.2906 20.87C11.2006 21.38 12.8006 21.38 13.7106 20.87L19.0506 17.9C20.0106 17.36 20.8606 15.93 20.8606 14.82V9.17C20.8606 8.07 20.0106 6.63 19.0506 6.09L13.7106 3.12C13.2506 2.88 12.6306 2.75 12.0006 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Box1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
          d="M3.16992 7.44043L11.9999 12.5504L20.7699 7.47043"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 21.61V12.54"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M9.93062 2.47979L4.59063 5.43979C3.38063 6.10979 2.39062 7.78979 2.39062 9.16979V14.8198C2.39062 16.1998 3.38063 17.8798 4.59063 18.5498L9.93062 21.5198C11.0706 22.1498 12.9406 22.1498 14.0806 21.5198L19.4206 18.5498C20.6306 17.8798 21.6206 16.1998 21.6206 14.8198V9.16979C21.6206 7.78979 20.6306 6.10979 19.4206 5.43979L14.0806 2.46979C12.9306 1.83979 11.0706 1.83979 9.93062 2.47979Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Box1Bold,
  broken: Box1Broken,
  bulk: Box1Bulk,
  linear: Box1Linear,
  outline: Box1Outline,
  twotone: Box1Twotone,
};

export const Box1Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
