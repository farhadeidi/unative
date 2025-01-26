import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const HeartSearchBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.74 20.5083L20.88 19.6483C21.33 18.9683 21.59 18.1583 21.59 17.2883C21.59 14.9183 19.67 12.9883 17.29 12.9883C14.91 12.9883 13 14.9183 13 17.2983C13 19.6783 14.92 21.5983 17.3 21.5983C18.17 21.5983 18.98 21.3383 19.66 20.8883L20.52 21.7483C20.69 21.9183 20.91 22.0083 21.14 22.0083C21.37 22.0083 21.59 21.9183 21.76 21.7483C22.09 21.3983 22.09 20.8483 21.74 20.5083Z"
        fill="currentColor"
      />
      <Path
        d="M22 8.73062C22 9.92062 21.81 11.0206 21.48 12.0406C21.42 12.2506 21.17 12.3106 20.99 12.1806C19.9 11.3706 18.57 10.9406 17.2 10.9406C13.73 10.9406 10.9 13.7706 10.9 17.2406C10.9 18.3206 11.18 19.3806 11.71 20.3206C11.87 20.6006 11.68 20.9606 11.38 20.8506C8.97 20.0306 4.1 17.0406 2.52 12.0406C2.19 11.0206 2 9.92062 2 8.73062C2 5.64062 4.49 3.14063 7.56 3.14063C9.37 3.14063 10.99 4.02062 12 5.37062C13.01 4.02062 14.63 3.14063 16.44 3.14063C19.51 3.14062 22 5.64062 22 8.73062Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartSearchBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 20.9C11.78 20.9 11.55 20.87 11.38 20.81C8.48 19.82 2 15.69 2 8.67999C2 7.27999 2.51 6.00002 3.36 5.02002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.4905 12C21.8105 10.98 22.0005 9.88 22.0005 8.69C22.0005 5.6 19.5106 3.09998 16.4406 3.09998C14.6206 3.09998 13.0105 3.98003 12.0005 5.34003C10.9905 3.98003 9.37055 3.09998 7.56055 3.09998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.7391 21C19.5064 21 20.9391 19.5673 20.9391 17.8C20.9391 16.0327 19.5064 14.6 17.7391 14.6C15.9717 14.6 14.5391 16.0327 14.5391 17.8C14.5391 19.5673 15.9717 21 17.7391 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5391 21.6L20.5391 20.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartSearchBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.44 3.1001C14.63 3.1001 13.01 3.98008 12 5.33008C10.99 3.98008 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60009 2 8.69009C2 9.88009 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.88009 22 8.69009C22 5.60009 19.51 3.1001 16.44 3.1001Z"
        fill="currentColor"
      />
      <Path
        d="M21.77 20.68L21.01 19.92C21.41 19.32 21.64 18.6 21.64 17.83C21.64 15.72 19.93 14.01 17.82 14.01C15.71 14.01 14 15.72 14 17.83C14 19.94 15.71 21.65 17.82 21.65C18.59 21.65 19.31 21.42 19.91 21.02L20.67 21.78C20.82 21.93 21.02 22.01 21.22 22.01C21.42 22.01 21.62 21.93 21.77 21.78C22.08 21.47 22.08 20.98 21.77 20.68Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartSearchLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.49 12C21.81 10.98 22 9.88 22 8.69C22 5.6 19.51 3.09998 16.44 3.09998C14.62 3.09998 13.01 3.98003 12 5.34003C10.99 3.98003 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.6 2 8.69C2 15.69 8.48 19.82 11.38 20.82C11.55 20.88 11.77 20.91 12 20.91"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.74 21C19.5073 21 20.94 19.5673 20.94 17.8C20.94 16.0327 19.5073 14.6 17.74 14.6C15.9727 14.6 14.54 16.0327 14.54 17.8C14.54 19.5673 15.9727 21 17.74 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.54 21.6L20.54 20.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartSearchOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 21.6501C11.78 21.6501 11.45 21.6301 11.14 21.5201C7.32 20.2101 1.25 15.5701 1.25 8.69012C1.25 5.19012 4.08 2.3501 7.56 2.3501C9.25 2.3501 10.83 3.01012 12 4.19012C13.17 3.01012 14.75 2.3501 16.44 2.3501C19.92 2.3501 22.75 5.19012 22.75 8.69012C22.75 9.90012 22.57 11.0901 22.21 12.2301C22.09 12.6201 21.66 12.8501 21.27 12.7201C20.87 12.6001 20.66 12.1702 20.78 11.7802C21.09 10.7902 21.25 9.75013 21.25 8.70013C21.25 6.03013 19.09 3.86011 16.44 3.86011C14.92 3.86011 13.51 4.5701 12.6 5.7901C12.32 6.1701 11.68 6.1701 11.4 5.7901C10.48 4.5601 9.08 3.86011 7.56 3.86011C4.91 3.86011 2.75 6.03013 2.75 8.70013C2.75 15.5401 9.32 19.3301 11.63 20.1201C11.69 20.1401 11.83 20.1701 12 20.1701C12.41 20.1701 12.75 20.5101 12.75 20.9201C12.75 21.3301 12.41 21.6501 12 21.6501Z"
        fill="currentColor"
      />
      <Path
        d="M17.7391 21.7501C15.5591 21.7501 13.7891 19.9801 13.7891 17.8001C13.7891 15.6201 15.5591 13.8501 17.7391 13.8501C19.9191 13.8501 21.6891 15.6201 21.6891 17.8001C21.6891 19.9801 19.9191 21.7501 17.7391 21.7501ZM17.7391 15.3501C16.3891 15.3501 15.2891 16.4501 15.2891 17.8001C15.2891 19.1501 16.3891 20.2501 17.7391 20.2501C19.0891 20.2501 20.1891 19.1501 20.1891 17.8001C20.1891 16.4501 19.0891 15.3501 17.7391 15.3501Z"
        fill="currentColor"
      />
      <Path
        d="M21.5405 22.35C21.3505 22.35 21.1605 22.28 21.0105 22.13L20.0105 21.13C19.7205 20.84 19.7205 20.36 20.0105 20.07C20.3005 19.78 20.7805 19.78 21.0705 20.07L22.0705 21.07C22.3605 21.36 22.3605 21.84 22.0705 22.13C21.9205 22.27 21.7305 22.35 21.5405 22.35Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartSearchTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.49 12.0001C21.81 10.9801 22 9.88012 22 8.69012C22 5.60012 19.51 3.1001 16.44 3.1001C14.62 3.1001 13.01 3.98015 12 5.34015C10.99 3.98015 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60012 2 8.69012C2 15.6901 8.48 19.8201 11.38 20.8201C11.55 20.8801 11.77 20.9101 12 20.9101"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.7391 21.0001C19.5064 21.0001 20.9391 19.5674 20.9391 17.8001C20.9391 16.0328 19.5064 14.6001 17.7391 14.6001C15.9717 14.6001 14.5391 16.0328 14.5391 17.8001C14.5391 19.5674 15.9717 21.0001 17.7391 21.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5391 21.6001L20.5391 20.6001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: HeartSearchBold,
  broken: HeartSearchBroken,
  bulk: HeartSearchBulk,
  linear: HeartSearchLinear,
  outline: HeartSearchOutline,
  twotone: HeartSearchTwotone,
};

export const HeartSearchIcon = ({
  variant = "linear",
  ...props
}: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
