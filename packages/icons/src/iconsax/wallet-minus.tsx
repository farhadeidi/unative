import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const WalletMinusBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9392 2.21178L9.52922 7.82178H7.11922C6.71922 7.82178 6.32922 7.85178 5.94922 7.93178L6.94922 5.53178L6.98922 5.44178L7.04922 5.28178C7.07922 5.21178 7.09922 5.15178 7.12922 5.10178C8.28922 2.41178 9.58922 1.57178 11.9392 2.21178Z"
        fill="currentColor"
      />
      <Path
        d="M18.7311 8.08953L18.7111 8.07953C18.1111 7.90953 17.5011 7.81953 16.8811 7.81953H10.6211L12.8711 2.58953L12.9011 2.51953C13.0411 2.56953 13.1911 2.63953 13.3411 2.68953L15.5511 3.61953C16.7811 4.12953 17.6411 4.65953 18.1711 5.29953C18.2611 5.41953 18.3411 5.52953 18.4211 5.65953C18.5111 5.79953 18.5811 5.93953 18.6211 6.08953C18.6611 6.17953 18.6911 6.25953 18.7111 6.34953C18.8611 6.85953 18.8711 7.43953 18.7311 8.08953Z"
        fill="currentColor"
      />
      <Path
        d="M18.2883 9.52031C17.8383 9.39031 17.3683 9.32031 16.8783 9.32031H7.11828C6.43828 9.32031 5.79828 9.45031 5.19828 9.71031C3.45828 10.4603 2.23828 12.1903 2.23828 14.2003V16.1503C2.23828 16.3903 2.25828 16.6203 2.28828 16.8603C2.50828 20.0403 4.20828 21.7403 7.38828 21.9503C7.61828 21.9803 7.84828 22.0003 8.09828 22.0003H15.8983C19.5983 22.0003 21.5483 20.2403 21.7383 16.7403C21.7483 16.5503 21.7583 16.3503 21.7583 16.1503V14.2003C21.7583 11.9903 20.2883 10.1303 18.2883 9.52031ZM14.4983 16.7503H9.49828C9.08828 16.7503 8.74828 16.4103 8.74828 16.0003C8.74828 15.5903 9.08828 15.2503 9.49828 15.2503H14.4983C14.9083 15.2503 15.2483 15.5903 15.2483 16.0003C15.2483 16.4103 14.9083 16.7503 14.4983 16.7503Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletMinusBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5 16H9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.8992 2.52009L12.8692 2.59009L9.96922 9.32009H7.11922C6.43922 9.32009 5.78922 9.46009 5.19922 9.71009L6.94922 5.53009L6.98922 5.43009L7.05922 5.27009C7.07922 5.21009 7.09922 5.15009 7.12922 5.10009C8.43922 2.07009 9.91922 1.38009 12.8992 2.52009Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.2907 9.52002C17.8407 9.38002 17.3607 9.32002 16.8807 9.32002H9.9707L12.8707 2.59002L12.9007 2.52002C13.0507 2.57002 13.1907 2.64002 13.3407 2.70002L15.5507 3.63002C16.7807 4.14002 17.6407 4.67002 18.1607 5.31002C18.2607 5.43002 18.3407 5.54002 18.4107 5.67002C18.5007 5.81002 18.5707 5.95002 18.6107 6.10002C18.6507 6.19002 18.6807 6.28002 18.7007 6.36002C18.9707 7.20002 18.8107 8.23002 18.2907 9.52002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22.0001H8.1C7.86 22.0001 7.62 21.9801 7.39 21.9501C4.21 21.7401 2.51 20.0401 2.3 16.8601C2.27 16.6301 2.25 16.3901 2.25 16.1501V14.2001C2.25 12.1901 3.47 10.4601 5.21 9.71007C5.81 9.46007 6.45 9.32007 7.13 9.32007H16.89C17.38 9.32007 17.86 9.39007 18.3 9.52007C20.3 10.1201 21.76 11.9901 21.76 14.1901V16.1401C21.76 16.3401 21.75 16.5401 21.74 16.7401C21.55 20.2401 19.6 22.0001 15.9 22.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.95023 5.53003L5.20023 9.71003C3.46023 10.46 2.24023 12.19 2.24023 14.2V11.27C2.24023 8.43003 4.26023 6.06003 6.95023 5.53003Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.7608 11.2701V14.2001C21.7608 12.0001 20.3008 10.1301 18.3008 9.5301C18.8208 8.2301 18.9708 7.2101 18.7208 6.3601C18.7008 6.2701 18.6708 6.1801 18.6308 6.1001C20.4908 7.0601 21.7608 9.0301 21.7608 11.2701Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WalletMinusBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        opacity="0.8"
        d="M12.8992 2.52009L12.8692 2.59009L9.96922 9.32009H7.11922C6.43922 9.32009 5.79922 9.45009 5.19922 9.71009L6.94922 5.53009L6.98922 5.44009L7.04922 5.28009C7.07922 5.21009 7.09922 5.15009 7.12922 5.10009C8.43922 2.07009 9.91922 1.38009 12.8992 2.52009Z"
        fill="currentColor"
      />
      <Path
        d="M18.2907 9.52002C17.8407 9.39002 17.3707 9.32002 16.8807 9.32002H9.9707L12.8707 2.59002L12.9007 2.52002C13.0407 2.57002 13.1907 2.64002 13.3407 2.69002L15.5507 3.62002C16.7807 4.13002 17.6407 4.66002 18.1707 5.30002C18.2607 5.42002 18.3407 5.53002 18.4207 5.66002C18.5107 5.80002 18.5807 5.94002 18.6207 6.09002C18.6607 6.18002 18.6907 6.26002 18.7107 6.35002C18.9707 7.20002 18.8107 8.23002 18.2907 9.52002Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.7602 14.1998V16.1498C21.7602 16.3498 21.7502 16.5498 21.7402 16.7398C21.5502 20.2398 19.6002 21.9998 15.9002 21.9998H8.10023C7.85023 21.9998 7.62023 21.9798 7.39023 21.9498C4.21023 21.7398 2.51023 20.0398 2.29023 16.8598C2.26023 16.6198 2.24023 16.3898 2.24023 16.1498V14.1998C2.24023 12.1898 3.46023 10.4598 5.20023 9.70982C5.80023 9.44982 6.44023 9.31982 7.12023 9.31982H16.8802C17.3702 9.31982 17.8402 9.38982 18.2902 9.51982C20.2902 10.1298 21.7602 11.9898 21.7602 14.1998Z"
        fill="currentColor"
      />
      <Path
        opacity="0.6"
        d="M6.95023 5.52979L5.20023 9.70978C3.46023 10.4598 2.24023 12.1898 2.24023 14.1998V11.2698C2.24023 8.42979 4.26023 6.05979 6.95023 5.52979Z"
        fill="currentColor"
      />
      <Path
        opacity="0.6"
        d="M21.7591 11.2698V14.1998C21.7591 11.9898 20.2891 10.1298 18.2891 9.51984C18.8091 8.22984 18.9691 7.19984 18.7091 6.34984C18.6891 6.25984 18.6591 6.17984 18.6191 6.08984C20.4891 7.05984 21.7591 9.02984 21.7591 11.2698Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 16.75H9.5C9.09 16.75 8.75 16.41 8.75 16C8.75 15.59 9.09 15.25 9.5 15.25H14.5C14.91 15.25 15.25 15.59 15.25 16C15.25 16.41 14.91 16.75 14.5 16.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletMinusLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.2617 15.998H9.26172"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.66 2.51814L12.63 2.58814L9.72996 9.31814H6.87996C6.19996 9.31814 5.54996 9.45814 4.95996 9.70814L6.70996 5.52814L6.74996 5.42814L6.81996 5.26814C6.83996 5.20814 6.85996 5.14814 6.88996 5.09814C8.19996 2.06814 9.67996 1.37814 12.66 2.51814Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.05 9.51807C17.6 9.37807 17.12 9.31807 16.64 9.31807H9.72998L12.63 2.58807L12.66 2.51807C12.81 2.56807 12.95 2.63807 13.1 2.69807L15.31 3.62807C16.54 4.13807 17.4 4.66807 17.92 5.30807C18.02 5.42807 18.1 5.53807 18.17 5.66807C18.26 5.80807 18.33 5.94807 18.37 6.09807C18.41 6.18807 18.44 6.27807 18.46 6.35807C18.73 7.19807 18.57 8.22807 18.05 9.51807Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.71 5.52808L4.96 9.70808C3.22 10.4581 2 12.1881 2 14.1981V11.2681C2 8.42808 4.02 6.05808 6.71 5.52808Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const WalletMinusOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.5 16.75H9.5C9.09 16.75 8.75 16.41 8.75 16C8.75 15.59 9.09 15.25 9.5 15.25H14.5C14.91 15.25 15.25 15.59 15.25 16C15.25 16.41 14.91 16.75 14.5 16.75Z"
        fill="currentColor"
      />
      <Path
        d="M5.1997 10.4599C5.0097 10.4599 4.8197 10.3799 4.6697 10.2399C4.4597 10.0299 4.3897 9.69988 4.5097 9.41988L6.3697 4.97988C6.4097 4.88988 6.4297 4.82988 6.4597 4.77988C7.9397 1.36988 9.8297 0.539877 13.1697 1.81988C13.3597 1.88988 13.5097 2.03988 13.5897 2.22988C13.6697 2.41988 13.6697 2.62988 13.5897 2.81988L10.6597 9.61988C10.5397 9.88988 10.2697 10.0699 9.9697 10.0699H7.1197C6.5497 10.0699 6.0097 10.1799 5.4897 10.3999C5.3997 10.4399 5.2997 10.4599 5.1997 10.4599ZM10.6097 2.74988C9.3697 2.74988 8.6097 3.55988 7.8197 5.39988C7.8097 5.42988 7.7897 5.45988 7.7797 5.48988L6.4697 8.59988C6.6897 8.57988 6.8997 8.56988 7.1197 8.56988H9.4697L11.8797 2.96988C11.4097 2.81988 10.9897 2.74988 10.6097 2.74988Z"
        fill="currentColor"
      />
      <Path
        d="M18.2902 10.27C18.2202 10.27 18.1402 10.26 18.0702 10.24C17.7002 10.13 17.2902 10.07 16.8702 10.07H9.97023C9.72023 10.07 9.48023 9.94002 9.34023 9.73002C9.21023 9.52002 9.18023 9.25002 9.28023 9.02002L12.1802 2.29002C12.3302 1.93002 12.7602 1.69002 13.1402 1.81002C13.2602 1.85002 13.3702 1.90002 13.4902 1.95002L15.8502 2.94002C17.2302 3.51002 18.1502 4.11002 18.7502 4.83002C18.8702 4.97002 18.9702 5.12002 19.0602 5.27002C19.1702 5.44002 19.2702 5.65002 19.3402 5.86002C19.3702 5.93002 19.4202 6.06002 19.4502 6.20002C19.7302 7.14002 19.5902 8.31002 18.9902 9.81002C18.8702 10.09 18.5902 10.27 18.2902 10.27ZM11.1102 8.57002H16.8802C17.2002 8.57002 17.5102 8.60002 17.8202 8.65002C18.1002 7.78002 18.1602 7.11002 18.0002 6.57002C17.9802 6.48002 17.9602 6.44002 17.9502 6.40002C17.8902 6.24002 17.8502 6.15002 17.8002 6.07002C17.7302 5.96002 17.6802 5.87002 17.6002 5.78002C17.1702 5.26002 16.4102 4.78002 15.2802 4.32002L13.3002 3.49002L11.1102 8.57002Z"
        fill="currentColor"
      />
      <Path
        d="M15.9 22.7498H8.1C7.82 22.7498 7.56 22.7298 7.3 22.6998C3.79 22.4598 1.79 20.4598 1.55 16.9098C1.52 16.6898 1.5 16.4198 1.5 16.1498V14.1998C1.5 11.9498 2.84 9.91982 4.91 9.01982C5.61 8.71982 6.36 8.56982 7.13 8.56982H16.89C17.46 8.56982 18.01 8.64982 18.52 8.80982C20.87 9.51982 22.52 11.7398 22.52 14.1998V16.1498C22.52 16.3698 22.51 16.5798 22.5 16.7798C22.28 20.6898 20 22.7498 15.9 22.7498ZM7.12 10.0698C6.55 10.0698 6.01 10.1798 5.49 10.3998C3.97 11.0598 2.99 12.5498 2.99 14.1998V16.1498C2.99 16.3598 3.01 16.5698 3.03 16.7698C3.22 19.6198 4.62 21.0198 7.43 21.2098C7.68 21.2398 7.88 21.2598 8.09 21.2598H15.89C19.19 21.2598 20.81 19.8098 20.97 16.7098C20.98 16.5298 20.99 16.3498 20.99 16.1498V14.1998C20.99 12.3898 19.78 10.7698 18.06 10.2398C17.69 10.1298 17.28 10.0698 16.86 10.0698H7.12Z"
        fill="currentColor"
      />
      <Path
        d="M2.24023 14.9498C1.83023 14.9498 1.49023 14.6098 1.49023 14.1998V11.2698C1.49023 8.1198 3.72023 5.3998 6.80023 4.7998C7.07023 4.7498 7.35023 4.8498 7.53023 5.0598C7.70023 5.2698 7.75023 5.5698 7.64023 5.8198L5.89023 9.9998C5.81023 10.1798 5.67023 10.3198 5.50023 10.3998C3.98023 11.0598 3.00023 12.5498 3.00023 14.1998C2.99023 14.6098 2.66023 14.9498 2.24023 14.9498ZM5.60023 6.8198C4.32023 7.5398 3.39023 8.7998 3.10023 10.2698C3.54023 9.8198 4.05023 9.4398 4.63023 9.1598L5.60023 6.8198Z"
        fill="currentColor"
      />
      <Path
        d="M21.7592 14.9498C21.3492 14.9498 21.0092 14.6098 21.0092 14.1998C21.0092 12.3898 19.7992 10.7698 18.0792 10.2398C17.8792 10.1798 17.7092 10.0398 17.6192 9.84978C17.5292 9.65978 17.5192 9.43978 17.5992 9.24978C18.0692 8.07978 18.1892 7.22978 17.9992 6.56978C17.9792 6.47978 17.9592 6.43978 17.9492 6.39978C17.8192 6.10978 17.8892 5.76978 18.1192 5.54978C18.3492 5.32978 18.6992 5.27978 18.9792 5.42978C21.1592 6.56978 22.5092 8.80978 22.5092 11.2698V14.1998C22.5092 14.6098 22.1692 14.9498 21.7592 14.9498ZM19.2492 9.08978C19.8792 9.37978 20.4392 9.78978 20.9092 10.2798C20.7192 9.29978 20.2492 8.40978 19.5592 7.70978C19.5092 8.12978 19.4092 8.58978 19.2492 9.08978Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const WalletMinusTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.2617 15.998H9.26172"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.6609 2.51814L12.6309 2.58814L9.73094 9.31814H6.88094C6.20094 9.31814 5.55094 9.45814 4.96094 9.70814L6.71094 5.52814L6.75094 5.42814L6.82094 5.26814C6.84094 5.20814 6.86094 5.14814 6.89094 5.09814C8.20094 2.06814 9.68094 1.37814 12.6609 2.51814Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.0505 9.51807C17.6005 9.37807 17.1205 9.31807 16.6405 9.31807H9.73047L12.6305 2.58807L12.6605 2.51807C12.8105 2.56807 12.9505 2.63807 13.1005 2.69807L15.3105 3.62807C16.5405 4.13807 17.4005 4.66807 17.9205 5.30807C18.0205 5.42807 18.1005 5.53807 18.1705 5.66807C18.2605 5.80807 18.3305 5.94807 18.3705 6.09807C18.4105 6.18807 18.4405 6.27807 18.4605 6.35807C18.7305 7.19807 18.5705 8.22807 18.0505 9.51807Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.71 5.52832L4.96 9.70832C3.22 10.4583 2 12.1883 2 14.1983V11.2683C2 8.42832 4.02 6.05832 6.71 5.52832Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: WalletMinusBold,
  broken: WalletMinusBroken,
  bulk: WalletMinusBulk,
  linear: WalletMinusLinear,
  outline: WalletMinusOutline,
  twotone: WalletMinusTwotone,
};

export const WalletMinusIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default WalletMinusIcon;
