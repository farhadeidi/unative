import { Scope } from "@radix-ui/react-context";
import type { MenubarMenuProps } from "@radix-ui/react-menubar";

export type {
  MenubarArrowProps,
  MenubarCheckboxItemProps,
  MenubarContentProps,
  MenubarGroupProps,
  MenubarItemIndicatorProps,
  MenubarItemProps,
  MenubarLabelProps,
  MenubarMenuProps,
  MenubarPortalProps,
  MenubarProps,
  MenubarRadioGroupProps,
  MenubarRadioItemProps,
  MenubarSeparatorProps,
  MenubarSubContentProps,
  MenubarSubProps,
  MenubarSubTriggerProps,
  MenubarTriggerProps,
} from "@radix-ui/react-menubar";
export {
  Arrow,
  CheckboxItem,
  Content,
  createMenubarScope,
  Group,
  Item,
  ItemIndicator,
  Label,
  Menubar,
  MenubarArrow,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarItemIndicator,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
} from "@radix-ui/react-menubar";

type ScopedProps<P> = P & {
  __scopeMenubar?: Scope;
};

declare const MenubarMenu: {
  (props: ScopedProps<MenubarMenuProps>): React.JSX.Element;
  displayName: string;
};

export const Menu = MenubarMenu;
