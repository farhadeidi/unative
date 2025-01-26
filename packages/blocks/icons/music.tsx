import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const MusicBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.8894 5.1786V16.4786C20.8894 18.4586 19.2794 20.0686 17.2994 20.0686C15.3294 20.0686 13.7094 18.4586 13.7094 16.4786C13.7094 14.5086 15.3294 12.8986 17.2994 12.8986C18.1394 12.8986 18.8894 13.1886 19.4994 13.6686V7.7186L10.2894 10.3386V18.4086C10.2894 20.3886 8.66937 21.9986 6.69937 21.9986C4.71937 21.9986 3.10938 20.3886 3.10938 18.4086C3.10938 16.4386 4.71937 14.8286 6.69937 14.8286C7.52938 14.8286 8.27938 15.1186 8.88938 15.5886V6.7486C8.88938 5.2786 9.77938 4.1386 11.1894 3.7586L16.9694 2.1786C18.1394 1.8586 19.1294 1.9686 19.8294 2.5086C20.5394 3.0386 20.8894 3.9386 20.8894 5.1786Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.28016 22C8.00328 22 9.40016 20.6031 9.40016 18.88C9.40016 17.1569 8.00328 15.76 6.28016 15.76C4.55703 15.76 3.16016 17.1569 3.16016 18.88C3.16016 20.6031 4.55703 22 6.28016 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.8404 7.96009V4.60009C20.8404 2.00009 19.2104 1.64009 17.5604 2.09009L11.3204 3.79009C10.1804 4.10009 9.40039 5.00009 9.40039 6.30009V8.47009V9.93009V18.8701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.8398 16.8V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.7196 19.9199C19.4427 19.9199 20.8396 18.5231 20.8396 16.7999C20.8396 15.0768 19.4427 13.6799 17.7196 13.6799C15.9965 13.6799 14.5996 15.0768 14.5996 16.7999C14.5996 18.5231 15.9965 19.9199 17.7196 19.9199Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.40039 9.5199L20.8404 6.3999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.2894 10.3398V18.4098C10.2894 20.3898 8.66937 21.9998 6.69937 21.9998C4.71937 21.9998 3.10938 20.3898 3.10938 18.4098C3.10938 16.4398 4.71937 14.8298 6.69937 14.8298C7.52938 14.8298 8.27938 15.1198 8.88938 15.5898V10.7398L10.2894 10.3398Z"
        fill="currentColor"
      />
      <Path
        d="M20.8909 7.31982V16.4798C20.8909 18.4598 19.2809 20.0698 17.3009 20.0698C15.3309 20.0698 13.7109 18.4598 13.7109 16.4798C13.7109 14.5098 15.3309 12.8998 17.3009 12.8998C18.1409 12.8998 18.8909 13.1898 19.5009 13.6698V7.71982L20.8909 7.31982Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.8906 5.18007V7.32007L8.89062 10.7401V6.75007C8.89062 5.28007 9.78062 4.14007 11.1906 3.76007L16.9706 2.18007C18.1406 1.86007 19.1306 1.97007 19.8306 2.51007C20.5406 3.04007 20.8906 3.94007 20.8906 5.18007Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.28003 22C8.00316 22 9.40003 20.6031 9.40003 18.88C9.40003 17.1569 8.00316 15.76 6.28003 15.76C4.55691 15.76 3.16003 17.1569 3.16003 18.88C3.16003 20.6031 4.55691 22 6.28003 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.84 16.8001V4.60009C20.84 2.00009 19.21 1.64009 17.56 2.09009L11.32 3.79009C10.18 4.10009 9.40002 5.00009 9.40002 6.30009V8.47009V9.93009V18.8701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.72 19.9199C19.4431 19.9199 20.84 18.5231 20.84 16.7999C20.84 15.0768 19.4431 13.6799 17.72 13.6799C15.9968 13.6799 14.6 15.0768 14.6 16.7999C14.6 18.5231 15.9968 19.9199 17.72 19.9199Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.40002 9.5199L20.84 6.3999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.28016 22.7498C4.15016 22.7498 2.41016 21.0098 2.41016 18.8798C2.41016 16.7498 4.15016 15.0098 6.28016 15.0098C8.41016 15.0098 10.1502 16.7498 10.1502 18.8798C10.1502 21.0098 8.41016 22.7498 6.28016 22.7498ZM6.28016 16.5098C4.97016 16.5098 3.91016 17.5698 3.91016 18.8798C3.91016 20.1898 4.97016 21.2498 6.28016 21.2498C7.59016 21.2498 8.65016 20.1898 8.65016 18.8798C8.65016 17.5698 7.59016 16.5098 6.28016 16.5098Z"
        fill="currentColor"
      />
      <Path
        d="M9.40039 19.6301C8.99039 19.6301 8.65039 19.2901 8.65039 18.8801V6.30013C8.65039 4.72013 9.60039 3.48013 11.1204 3.07013L17.3604 1.37013C18.6304 1.02013 19.7004 1.15013 20.4504 1.73013C21.2104 2.31013 21.5904 3.28013 21.5904 4.61013V16.8101C21.5904 17.2201 21.2504 17.5601 20.8404 17.5601C20.4304 17.5601 20.0904 17.2201 20.0904 16.8101V4.60013C20.0904 4.02013 19.9904 3.26013 19.5404 2.92013C19.0504 2.54013 18.2104 2.69013 17.7504 2.82013L11.5104 4.52013C10.6404 4.76013 10.1504 5.41013 10.1504 6.31013V18.8901C10.1504 19.2901 9.81039 19.6301 9.40039 19.6301Z"
        fill="currentColor"
      />
      <Path
        d="M17.7196 20.6702C15.5896 20.6702 13.8496 18.9302 13.8496 16.8002C13.8496 14.6702 15.5896 12.9302 17.7196 12.9302C19.8496 12.9302 21.5896 14.6702 21.5896 16.8002C21.5896 18.9302 19.8496 20.6702 17.7196 20.6702ZM17.7196 14.4302C16.4096 14.4302 15.3496 15.4902 15.3496 16.8002C15.3496 18.1102 16.4096 19.1702 17.7196 19.1702C19.0296 19.1702 20.0896 18.1102 20.0896 16.8002C20.0896 15.4902 19.0296 14.4302 17.7196 14.4302Z"
        fill="currentColor"
      />
      <Path
        d="M9.3998 10.2698C9.0698 10.2698 8.7698 10.0498 8.6798 9.71978C8.5698 9.31978 8.7998 8.89978 9.1998 8.78978L20.6398 5.66978C21.0398 5.55978 21.4498 5.79978 21.5598 6.19978C21.6698 6.59978 21.4298 7.00978 21.0298 7.11978L9.5998 10.2398C9.5298 10.2598 9.4598 10.2698 9.3998 10.2698Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.28016 21.9998C8.00328 21.9998 9.40016 20.6029 9.40016 18.8798C9.40016 17.1566 8.00328 15.7598 6.28016 15.7598C4.55703 15.7598 3.16016 17.1566 3.16016 18.8798C3.16016 20.6029 4.55703 21.9998 6.28016 21.9998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.7196 19.9202C19.4427 19.9202 20.8396 18.5233 20.8396 16.8002C20.8396 15.077 19.4427 13.6802 17.7196 13.6802C15.9965 13.6802 14.5996 15.077 14.5996 16.8002C14.5996 18.5233 15.9965 19.9202 17.7196 19.9202Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M20.8404 16.8003V4.60034C20.8404 2.00034 19.2104 1.64034 17.5604 2.09034L11.3204 3.79034C10.1804 4.10034 9.40039 5.00034 9.40039 6.30034V8.47034V9.93034V18.8703"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.40039 9.52039L20.8404 6.40039"
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
  bold: MusicBold,
  broken: MusicBroken,
  bulk: MusicBulk,
  linear: MusicLinear,
  outline: MusicOutline,
  twotone: MusicTwotone,
};

export const MusicIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
