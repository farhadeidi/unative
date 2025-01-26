import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Forward15SecondsBold = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M14.4314 16.9203H12.1414C11.7314 16.9203 11.3914 16.5803 11.3914 16.1703C11.3914 15.7603 11.7314 15.4203 12.1414 15.4203H14.4314C14.8614 15.4203 15.2114 15.0703 15.2114 14.6403C15.2114 14.2103 14.8614 13.8603 14.4314 13.8603H12.1414C11.9014 13.8603 11.6714 13.7403 11.5314 13.5503C11.3914 13.3603 11.3514 13.1003 11.4314 12.8703L12.1914 10.5803C12.2914 10.2703 12.5814 10.0703 12.9014 10.0703H15.9614C16.3714 10.0703 16.7114 10.4103 16.7114 10.8203C16.7114 11.2303 16.3714 11.5703 15.9614 11.5703H13.4414L13.1814 12.3603H14.4314C15.6914 12.3603 16.7114 13.3803 16.7114 14.6403C16.7114 15.9003 15.6814 16.9203 14.4314 16.9203Z"
        fill="currentColor"
      />
      <Path
        d="M9.54041 16.9208C9.13041 16.9208 8.79041 16.5808 8.79041 16.1708V12.7808L8.60041 13.0008C8.32041 13.3108 7.85041 13.3308 7.54041 13.0608C7.24041 12.7808 7.21041 12.3108 7.49041 12.0008L8.99041 10.3308C9.20041 10.1008 9.53041 10.0208 9.82041 10.1308C10.1104 10.2408 10.3004 10.5208 10.3004 10.8308V16.1808C10.2904 16.5908 9.96041 16.9208 9.54041 16.9208Z"
        fill="currentColor"
      />
      <Path
        d="M19.6916 7.3488C19.4416 7.0188 18.9716 6.9488 18.6416 7.1988C18.3116 7.4488 18.2416 7.9188 18.4916 8.2488C19.5716 9.6888 20.1416 11.3688 20.1416 13.1088C20.1416 17.5988 16.4916 21.2488 12.0016 21.2488C7.51156 21.2488 3.86156 17.5988 3.86156 13.1088C3.86156 8.6188 7.51156 4.9788 12.0016 4.9788C12.5816 4.9788 13.1716 5.0488 13.8116 5.1988C13.8416 5.2088 13.8716 5.1988 13.9016 5.1988C13.9316 5.1988 13.9516 5.2188 13.9716 5.2188C14.0016 5.2188 14.0216 5.2088 14.0516 5.2088C14.0816 5.2088 14.1116 5.1988 14.1516 5.1888C14.2116 5.1788 14.2616 5.1488 14.3116 5.1288C14.3416 5.1088 14.3716 5.0988 14.4016 5.0788C14.4116 5.0688 14.4316 5.0688 14.4416 5.0588C14.4716 5.0388 14.4816 5.0088 14.5016 4.9888C14.5416 4.9488 14.5716 4.9188 14.6016 4.8688C14.6316 4.8288 14.6416 4.7788 14.6616 4.7288C14.6716 4.6988 14.6916 4.6688 14.7016 4.6388C14.7016 4.6188 14.7016 4.6088 14.7016 4.5888C14.7116 4.5388 14.7116 4.4888 14.7016 4.4388C14.7016 4.3888 14.7016 4.3488 14.6916 4.2988C14.6816 4.2588 14.6616 4.2188 14.6416 4.1688C14.6216 4.1188 14.6016 4.0688 14.5716 4.0288C14.5716 4.0188 14.5716 4.0088 14.5616 3.9988L12.5816 1.5288C12.3216 1.2088 11.8516 1.1488 11.5316 1.4088C11.2116 1.6688 11.1616 2.1388 11.4116 2.4588L12.2316 3.4788C12.1516 3.4788 12.0716 3.4688 11.9916 3.4688C6.68156 3.4688 2.35156 7.7888 2.35156 13.1088C2.35156 18.4288 6.67156 22.7488 11.9916 22.7488C17.3116 22.7488 21.6316 18.4288 21.6316 13.1088C21.6416 11.0388 20.9616 9.0488 19.6916 7.3488Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Forward15SecondsBroken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M13.98 4.46997L12 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.0094 16.96C18.5794 19.94 15.5294 22 11.9994 22C7.08939 22 3.10938 18.02 3.10938 13.11C3.10938 8.19999 7.08939 4.21997 11.9994 4.21997C12.6794 4.21997 13.3394 4.31002 13.9794 4.46002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0898 7.80005C20.1998 9.28005 20.8898 11.11 20.8898 13.11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.9587 10.8301H12.8987L12.1387 13.1201H14.4286C15.2686 13.1201 15.9587 13.8001 15.9587 14.6501C15.9587 15.4901 15.2786 16.1801 14.4286 16.1801H12.1387"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.53906 16.17V10.8301L8.03906 12.5001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Forward15SecondsBulk = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M14.4294 16.9198H12.1395C11.7295 16.9198 11.3895 16.5798 11.3895 16.1698C11.3895 15.7598 11.7295 15.4198 12.1395 15.4198H14.4294C14.8594 15.4198 15.2095 15.0698 15.2095 14.6398C15.2095 14.2098 14.8594 13.8598 14.4294 13.8598H12.1395C11.8995 13.8598 11.6695 13.7398 11.5295 13.5498C11.3895 13.3598 11.3494 13.0998 11.4294 12.8698L12.1894 10.5798C12.2894 10.2698 12.5795 10.0698 12.8995 10.0698H15.9595C16.3695 10.0698 16.7095 10.4098 16.7095 10.8198C16.7095 11.2298 16.3695 11.5698 15.9595 11.5698H13.4394L13.1794 12.3598H14.4294C15.6894 12.3598 16.7095 13.3798 16.7095 14.6398C16.7095 15.8998 15.6794 16.9198 14.4294 16.9198Z"
        fill="currentColor"
      />
      <Path
        d="M9.53955 16.9198C9.12955 16.9198 8.78955 16.5798 8.78955 16.1698V12.7799L8.59955 12.9998C8.31955 13.3098 7.84955 13.3298 7.53955 13.0598C7.22955 12.7798 7.20955 12.3098 7.47955 11.9998L8.97955 10.3298C9.18955 10.0998 9.51957 10.0198 9.80957 10.1298C10.0996 10.2398 10.2895 10.5198 10.2895 10.8298V16.1798C10.2895 16.5898 9.95955 16.9198 9.53955 16.9198Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19.6898 7.35021C19.4398 7.02021 18.9698 6.95025 18.6398 7.20025C18.3098 7.45025 18.2398 7.92024 18.4898 8.25024C19.5698 9.69024 20.1398 11.3702 20.1398 13.1102C20.1398 17.6002 16.4898 21.2502 11.9998 21.2502C7.50982 21.2502 3.8598 17.6002 3.8598 13.1102C3.8598 8.62022 7.50982 4.97021 11.9998 4.97021C12.5798 4.97021 13.1698 5.04024 13.8098 5.19024C13.8398 5.20024 13.8698 5.19024 13.8998 5.19024C13.9298 5.19024 13.9498 5.21026 13.9698 5.21026C13.9998 5.21026 14.0198 5.20025 14.0498 5.20025C14.0798 5.20025 14.1098 5.19023 14.1498 5.18023C14.2098 5.17023 14.2598 5.14023 14.3098 5.12023C14.3398 5.10023 14.3698 5.09024 14.3998 5.07024C14.4098 5.06024 14.4298 5.06022 14.4398 5.05022C14.4698 5.03022 14.4798 5.00022 14.4998 4.98022C14.5398 4.94022 14.5698 4.91022 14.5998 4.86022C14.6298 4.82022 14.6398 4.77021 14.6598 4.72021C14.6698 4.69021 14.6898 4.66024 14.6998 4.63024C14.6998 4.61024 14.6998 4.60025 14.6998 4.58025C14.7098 4.53025 14.7098 4.48023 14.6998 4.43023C14.6998 4.38023 14.6998 4.34021 14.6898 4.29021C14.6798 4.25021 14.6598 4.21021 14.6398 4.16021C14.6198 4.11021 14.5998 4.06026 14.5698 4.02026C14.5598 4.01026 14.5598 3.99022 14.5498 3.98022L12.5698 1.51025C12.3098 1.19025 11.8398 1.13025 11.5198 1.39025C11.1998 1.65025 11.1498 2.12024 11.3998 2.44024L12.2198 3.46026C12.1398 3.46026 12.0598 3.45025 11.9798 3.45025C6.6698 3.45025 2.33984 7.77026 2.33984 13.0903C2.33984 18.4103 6.6598 22.7302 11.9798 22.7302C17.2998 22.7302 21.6198 18.4103 21.6198 13.0903C21.6398 11.0403 20.9598 9.05021 19.6898 7.35021Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Forward15SecondsLinear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M15.9601 10.8301H12.9001L12.1401 13.1201H14.4301C15.2701 13.1201 15.9601 13.8001 15.9601 14.6501C15.9601 15.4901 15.2801 16.1801 14.4301 16.1801H12.1401"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.54004 16.17V10.8301L8.04004 12.5001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.98 4.46997L12 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0899 7.79999C20.1999 9.27999 20.8899 11.11 20.8899 13.11C20.8899 18.02 16.9099 22 11.9999 22C7.08988 22 3.10986 18.02 3.10986 13.11C3.10986 8.19999 7.08988 4.21997 11.9999 4.21997C12.6799 4.21997 13.3399 4.31002 13.9799 4.46002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Forward15SecondsOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M14.4294 16.9203H12.1395C11.7295 16.9203 11.3895 16.5803 11.3895 16.1703C11.3895 15.7603 11.7295 15.4203 12.1395 15.4203H14.4294C14.8594 15.4203 15.2095 15.0703 15.2095 14.6403C15.2095 14.2103 14.8594 13.8603 14.4294 13.8603H12.1395C11.8995 13.8603 11.6695 13.7403 11.5295 13.5503C11.3895 13.3603 11.3494 13.1003 11.4294 12.8703L12.1894 10.5803C12.2894 10.2703 12.5795 10.0703 12.8995 10.0703H15.9595C16.3695 10.0703 16.7095 10.4103 16.7095 10.8203C16.7095 11.2303 16.3695 11.5703 15.9595 11.5703H13.4394L13.1794 12.3603H14.4294C15.6894 12.3603 16.7095 13.3803 16.7095 14.6403C16.7095 15.9003 15.6794 16.9203 14.4294 16.9203Z"
        fill="currentColor"
      />
      <Path
        d="M9.53955 16.9198C9.12955 16.9198 8.78955 16.5798 8.78955 16.1698V12.7799L8.59955 12.9998C8.31955 13.3098 7.84955 13.3298 7.53955 13.0598C7.22955 12.7798 7.20955 12.3098 7.47955 11.9998L8.97955 10.3298C9.18955 10.0998 9.51957 10.0198 9.80957 10.1298C10.0996 10.2398 10.2895 10.5198 10.2895 10.8298V16.1798C10.2895 16.5898 9.95955 16.9198 9.53955 16.9198Z"
        fill="currentColor"
      />
      <Path
        d="M13.9797 5.21973C13.7597 5.21973 13.5398 5.11976 13.3998 4.93976L11.4197 2.46973C11.1597 2.14973 11.2097 1.66974 11.5397 1.41974C11.8597 1.15974 12.3298 1.20973 12.5898 1.53973L14.5698 4.00977C14.8298 4.32977 14.7798 4.80975 14.4498 5.05975C14.3098 5.15975 14.1397 5.21973 13.9797 5.21973Z"
        fill="currentColor"
      />
      <Path
        d="M11.9994 22.7498C6.68939 22.7498 2.35938 18.4297 2.35938 13.1097C2.35938 7.78974 6.67939 3.46973 11.9994 3.46973C12.6894 3.46973 13.3894 3.54974 14.1494 3.72974C14.5494 3.81974 14.8094 4.22976 14.7094 4.62976C14.6194 5.02976 14.2094 5.28976 13.8094 5.18976C13.1694 5.03976 12.5694 4.96973 11.9994 4.96973C7.50939 4.96973 3.85938 8.61974 3.85938 13.1097C3.85938 17.5997 7.50939 21.2498 11.9994 21.2498C16.4894 21.2498 20.1394 17.5997 20.1394 13.1097C20.1394 11.3697 19.5694 9.68976 18.4894 8.24976C18.2394 7.91976 18.3094 7.44977 18.6394 7.19977C18.9694 6.94977 19.4394 7.01973 19.6894 7.34973C20.9694 9.04973 21.6394 11.0397 21.6394 13.1097C21.6394 18.4297 17.3094 22.7498 11.9994 22.7498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Forward15SecondsTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M15.9606 10.8301H12.9006L12.1406 13.1201H14.4306C15.2706 13.1201 15.9606 13.8001 15.9606 14.6501C15.9606 15.4901 15.2806 16.1801 14.4306 16.1801H12.1406"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.53906 16.17V10.8301L8.03906 12.5001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.98 4.46997L12 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.0894 7.79974C20.1994 9.27974 20.8894 11.1097 20.8894 13.1097C20.8894 18.0197 16.9094 21.9998 11.9994 21.9998C7.08939 21.9998 3.10938 18.0197 3.10938 13.1097C3.10938 8.19974 7.08939 4.21973 11.9994 4.21973C12.6794 4.21973 13.3394 4.30978 13.9794 4.45978"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Forward15SecondsBold,
  broken: Forward15SecondsBroken,
  bulk: Forward15SecondsBulk,
  linear: Forward15SecondsLinear,
  outline: Forward15SecondsOutline,
  twotone: Forward15SecondsTwotone,
};

export const Forward15SecondsIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
