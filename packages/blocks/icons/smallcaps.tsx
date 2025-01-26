import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const SmallcapsBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM11.39 15.88H8.52C8.11 15.88 7.77 15.54 7.77 15.13C7.77 14.72 8.11 14.38 8.52 14.38H9.52V7.91H6.95C6.84 7.91 6.75 8 6.75 8.11V8.89C6.75 9.3 6.41 9.63 6 9.63C5.59 9.63 5.25 9.3 5.25 8.88V8.1C5.25 7.16 6.01 6.4 6.95 6.4H13.59C14.53 6.4 15.29 7.16 15.29 8.1V8.88C15.29 9.29 14.95 9.63 14.54 9.63C14.13 9.63 13.79 9.29 13.79 8.88V8.1C13.79 7.99 13.7 7.9 13.59 7.9H11.02V14.38H11.39C11.8 14.38 12.14 14.72 12.14 15.13C12.14 15.54 11.8 15.88 11.39 15.88ZM18.75 12.23C18.75 12.64 18.41 12.98 18 12.98C17.59 12.98 17.25 12.64 17.25 12.23V11.9H15.7V16.1H16.05C16.46 16.1 16.8 16.44 16.8 16.85C16.8 17.26 16.46 17.6 16.05 17.6H13.85C13.44 17.6 13.1 17.26 13.1 16.85C13.1 16.44 13.44 16.1 13.85 16.1H14.2V11.9H13.72C13.31 11.9 12.97 11.56 12.97 11.15C12.97 10.74 13.31 10.4 13.72 10.4H17.32C18.11 10.4 18.75 11.04 18.75 11.83V12.23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmallcapsBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.4004 2.57007H16.7604C17.7804 2.57007 18.6104 3.40007 18.6104 4.42007V5.93007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.99023 5.93007V4.42007C1.99023 3.40007 2.82023 2.57007 3.84023 2.57007H6.59023"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3008 18.1001V3.32007V2.57007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.90039 18.1001H12.4804"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.6797 10.3401H20.6897C21.4197 10.3401 22.0097 10.9301 22.0097 11.6601V12.4601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.0801 21.4301V10.8701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.9395 21.4299H18.2195"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SmallcapsBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z"
        fill="currentColor"
      />
      <Path
        d="M11.39 14.3799H11.02V7.9099H13.59C13.7 7.9099 13.79 7.9999 13.79 8.1099V8.8899C13.79 9.2999 14.13 9.6399 14.54 9.6399C14.95 9.6399 15.29 9.2999 15.29 8.8899V8.0999C15.29 7.1599 14.53 6.3999 13.59 6.3999H6.95C6.01 6.3999 5.25 7.1599 5.25 8.0999V8.8799C5.25 9.2999 5.59 9.6299 6 9.6299C6.41 9.6299 6.75 9.2999 6.75 8.8799V8.0999C6.75 7.9899 6.84 7.8999 6.95 7.8999H9.52V14.3799H8.52C8.11 14.3799 7.77 14.7199 7.77 15.1299C7.77 15.5399 8.11 15.8799 8.52 15.8799H11.38C11.79 15.8799 12.13 15.5399 12.13 15.1299C12.13 14.7199 11.8 14.3799 11.39 14.3799Z"
        fill="currentColor"
      />
      <Path
        d="M17.3207 10.3999H13.7207C13.3107 10.3999 12.9707 10.7399 12.9707 11.1499C12.9707 11.5599 13.3107 11.8999 13.7207 11.8999H14.2007V16.0999H13.8507C13.4407 16.0999 13.1007 16.4399 13.1007 16.8499C13.1007 17.2599 13.4407 17.5999 13.8507 17.5999H16.0507C16.4607 17.5999 16.8007 17.2599 16.8007 16.8499C16.8007 16.4399 16.4607 16.0999 16.0507 16.0999H15.7007V11.8999H17.2507V12.2399C17.2507 12.6499 17.5907 12.9899 18.0007 12.9899C18.4107 12.9899 18.7507 12.6499 18.7507 12.2399V11.8299C18.7507 11.0399 18.1107 10.3999 17.3207 10.3999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmallcapsLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M1.98999 5.93007V4.42007C1.98999 3.40007 2.81999 2.57007 3.83999 2.57007H16.76C17.78 2.57007 18.61 3.40007 18.61 4.42007V5.93007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3 18.1001V3.32007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.8999 18.1001H12.4799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.6799 10.3401H20.6899C21.4199 10.3401 22.0099 10.9301 22.0099 11.6601V12.4601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.0801 21.4301V10.8701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.9399 21.4299H18.2199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SmallcapsOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.6102 6.67982C18.2002 6.67982 17.8602 6.33982 17.8602 5.92982V4.41982C17.8602 3.81982 17.3702 3.31982 16.7602 3.31982H3.83023C3.23023 3.31982 2.73023 3.80982 2.73023 4.41982V5.92982C2.73023 6.33982 2.39023 6.67982 1.98023 6.67982C1.57023 6.67982 1.24023 6.33982 1.24023 5.92982V4.41982C1.24023 2.98982 2.41023 1.81982 3.84023 1.81982H16.7602C18.1902 1.81982 19.3602 2.97982 19.3602 4.41982V5.92982C19.3602 6.33982 19.0202 6.67982 18.6102 6.67982Z"
        fill="currentColor"
      />
      <Path
        d="M10.3008 18.8498C9.89078 18.8498 9.55078 18.5098 9.55078 18.0998V3.31982C9.55078 2.90982 9.89078 2.56982 10.3008 2.56982C10.7108 2.56982 11.0508 2.90982 11.0508 3.31982V18.0998C11.0508 18.5198 10.7108 18.8498 10.3008 18.8498Z"
        fill="currentColor"
      />
      <Path
        d="M12.4804 18.8501H6.90039C6.49039 18.8501 6.15039 18.5101 6.15039 18.1001C6.15039 17.6901 6.49039 17.3501 6.90039 17.3501H12.4804C12.8904 17.3501 13.2304 17.6901 13.2304 18.1001C13.2304 18.5101 12.8904 18.8501 12.4804 18.8501Z"
        fill="currentColor"
      />
      <Path
        d="M22.0097 13.2001C21.5997 13.2001 21.2597 12.8601 21.2597 12.4501V11.6501C21.2597 11.3401 20.9997 11.0801 20.6897 11.0801H13.6797C13.2697 11.0801 12.9297 10.7401 12.9297 10.3301C12.9297 9.92008 13.2697 9.58008 13.6797 9.58008H20.6897C21.8297 9.58008 22.7597 10.5101 22.7597 11.6501V12.4501C22.7597 12.8701 22.4297 13.2001 22.0097 13.2001Z"
        fill="currentColor"
      />
      <Path
        d="M16.0801 22.1801C15.6701 22.1801 15.3301 21.8401 15.3301 21.4301V10.8701C15.3301 10.4601 15.6701 10.1201 16.0801 10.1201C16.4901 10.1201 16.8301 10.4601 16.8301 10.8701V21.4301C16.8301 21.8401 16.4901 22.1801 16.0801 22.1801Z"
        fill="currentColor"
      />
      <Path
        d="M18.2195 22.1802H13.9395C13.5295 22.1802 13.1895 21.8402 13.1895 21.4302C13.1895 21.0202 13.5295 20.6802 13.9395 20.6802H18.2195C18.6295 20.6802 18.9695 21.0202 18.9695 21.4302C18.9695 21.8402 18.6295 22.1802 18.2195 22.1802Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SmallcapsTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M1.99023 5.92982V4.41982C1.99023 3.39982 2.82023 2.56982 3.84023 2.56982H16.7602C17.7802 2.56982 18.6102 3.39982 18.6102 4.41982V5.92982"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3008 18.0998V3.31982"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.90039 18.1001H12.4804"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M13.6797 10.3398H20.6897C21.4197 10.3398 22.0097 10.9298 22.0097 11.6598V12.4598"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.0801 21.4301V10.8701"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.9395 21.4297H18.2195"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SmallcapsBold,
  broken: SmallcapsBroken,
  bulk: SmallcapsBulk,
  linear: SmallcapsLinear,
  outline: SmallcapsOutline,
  twotone: SmallcapsTwotone,
};

export const SmallcapsIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
