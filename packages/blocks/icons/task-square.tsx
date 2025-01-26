import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const TaskSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.97 14.9L7.72 17.15C7.57 17.3 7.38 17.37 7.19 17.37C7 17.37 6.8 17.3 6.66 17.15L5.91 16.4C5.61 16.11 5.61 15.63 5.91 15.34C6.2 15.05 6.67 15.05 6.97 15.34L7.19 15.56L8.91 13.84C9.2 13.55 9.67 13.55 9.97 13.84C10.26 14.13 10.26 14.61 9.97 14.9ZM9.97 7.9L7.72 10.15C7.57 10.3 7.38 10.37 7.19 10.37C7 10.37 6.8 10.3 6.66 10.15L5.91 9.4C5.61 9.11 5.61 8.63 5.91 8.34C6.2 8.05 6.67 8.05 6.97 8.34L7.19 8.56L8.91 6.84C9.2 6.55 9.67 6.55 9.97 6.84C10.26 7.13 10.26 7.61 9.97 7.9ZM17.56 16.62H12.31C11.9 16.62 11.56 16.28 11.56 15.87C11.56 15.46 11.9 15.12 12.31 15.12H17.56C17.98 15.12 18.31 15.46 18.31 15.87C18.31 16.28 17.98 16.62 17.56 16.62ZM17.56 9.62H12.31C11.9 9.62 11.56 9.28 11.56 8.87C11.56 8.46 11.9 8.12 12.31 8.12H17.56C17.98 8.12 18.31 8.46 18.31 8.87C18.31 9.28 17.98 9.62 17.56 9.62Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TaskSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.3691 8.87988H17.6191"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.38086 8.87988L7.13086 9.62988L9.38086 7.37988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.3691 15.8799H17.6191"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.38086 15.8799L7.13086 16.6299L9.38086 14.3799"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.95V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TaskSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.19 0.970215H5.81C2.17 0.970215 0 3.14022 0 6.78022V15.1602C0 18.8002 2.17 20.9702 5.81 20.9702H14.19C17.83 20.9702 20 18.8002 20 15.1602V6.78022C20 3.14022 17.83 0.970215 14.19 0.970215Z"
        fill="currentColor"
      />
      <Path
        d="M16.3105 7.84033C16.3105 8.25033 15.9805 8.59033 15.5605 8.59033H10.3105C9.90055 8.59033 9.56055 8.25033 9.56055 7.84033C9.56055 7.43033 9.90055 7.09033 10.3105 7.09033H15.5605C15.9805 7.09033 16.3105 7.43033 16.3105 7.84033Z"
        fill="currentColor"
      />
      <Path
        d="M7.97055 6.87027L5.72055 9.12027C5.57055 9.27027 5.38055 9.34027 5.19055 9.34027C5.00055 9.34027 4.80055 9.27027 4.66055 9.12027L3.91055 8.37027C3.61055 8.08027 3.61055 7.60027 3.91055 7.31027C4.20055 7.02027 4.67055 7.02027 4.97055 7.31027L5.19055 7.53027L6.91055 5.81027C7.20055 5.52027 7.67055 5.52027 7.97055 5.81027C8.26055 6.10027 8.26055 6.58027 7.97055 6.87027Z"
        fill="currentColor"
      />
      <Path
        d="M16.3105 14.8403C16.3105 15.2503 15.9805 15.5903 15.5605 15.5903H10.3105C9.90055 15.5903 9.56055 15.2503 9.56055 14.8403C9.56055 14.4303 9.90055 14.0903 10.3105 14.0903H15.5605C15.9805 14.0903 16.3105 14.4303 16.3105 14.8403Z"
        fill="currentColor"
      />
      <Path
        d="M7.97055 13.8703L5.72055 16.1203C5.57055 16.2703 5.38055 16.3403 5.19055 16.3403C5.00055 16.3403 4.80055 16.2703 4.66055 16.1203L3.91055 15.3703C3.61055 15.0803 3.61055 14.6003 3.91055 14.3103C4.20055 14.0203 4.67055 14.0203 4.97055 14.3103L5.19055 14.5303L6.91055 12.8103C7.20055 12.5203 7.67055 12.5203 7.97055 12.8103C8.26055 13.1003 8.26055 13.5803 7.97055 13.8703Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TaskSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.37 8.87988H17.62"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.38 8.87988L7.13 9.62988L9.38 7.37988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.37 15.8799H17.62"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.38 15.8799L7.13 16.6299L9.38 14.3799"
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

const TaskSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.6191 9.62012H12.3691C11.9591 9.62012 11.6191 9.28012 11.6191 8.87012C11.6191 8.46012 11.9591 8.12012 12.3691 8.12012H17.6191C18.0291 8.12012 18.3691 8.46012 18.3691 8.87012C18.3691 9.28012 18.0391 9.62012 17.6191 9.62012Z"
        fill="currentColor"
      />
      <Path
        d="M7.12055 10.3798C6.93055 10.3798 6.74055 10.3098 6.59055 10.1598L5.84055 9.40982C5.55055 9.11982 5.55055 8.63982 5.84055 8.34982C6.13055 8.05982 6.61055 8.05982 6.90055 8.34982L7.12055 8.56982L8.84055 6.84982C9.13055 6.55982 9.61055 6.55982 9.90055 6.84982C10.1905 7.13982 10.1905 7.61982 9.90055 7.90982L7.65055 10.1598C7.51055 10.2998 7.32055 10.3798 7.12055 10.3798Z"
        fill="currentColor"
      />
      <Path
        d="M17.6191 16.6201H12.3691C11.9591 16.6201 11.6191 16.2801 11.6191 15.8701C11.6191 15.4601 11.9591 15.1201 12.3691 15.1201H17.6191C18.0291 15.1201 18.3691 15.4601 18.3691 15.8701C18.3691 16.2801 18.0391 16.6201 17.6191 16.6201Z"
        fill="currentColor"
      />
      <Path
        d="M7.12055 17.3798C6.93055 17.3798 6.74055 17.3098 6.59055 17.1598L5.84055 16.4098C5.55055 16.1198 5.55055 15.6398 5.84055 15.3498C6.13055 15.0598 6.61055 15.0598 6.90055 15.3498L7.12055 15.5698L8.84055 13.8498C9.13055 13.5598 9.61055 13.5598 9.90055 13.8498C10.1905 14.1398 10.1905 14.6198 9.90055 14.9098L7.65055 17.1598C7.51055 17.2998 7.32055 17.3798 7.12055 17.3798Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TaskSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.3691 8.87988H17.6191"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.38086 8.87988L7.13086 9.62988L9.38086 7.37988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.3691 15.8799H17.6191"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.38086 15.8799L7.13086 16.6299L9.38086 14.3799"
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

const variants: IconVariants = {
  bold: TaskSquareBold,
  broken: TaskSquareBroken,
  bulk: TaskSquareBulk,
  linear: TaskSquareLinear,
  outline: TaskSquareOutline,
  twotone: TaskSquareTwotone,
};

export const TaskSquareIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
