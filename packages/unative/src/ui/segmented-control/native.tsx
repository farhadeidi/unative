import type { SegmentedControlProps as SegmentedControlLibProps } from "@react-native-segmented-control/segmented-control";
import SegmentedControlLib from "@react-native-segmented-control/segmented-control";

export type SegmentedControlItemProps = {
  label: string;
  value: string;
};

export type SegmentedControlProps = {
  items: SegmentedControlItemProps[];
  value: string;
  onChange: (value: string, item: SegmentedControlItemProps) => void;
  nativeProps?: SegmentedControlLibProps;
};

export const SegmentedControl = ({
  items,
  value,
  onChange,
  nativeProps,
}: SegmentedControlProps) => {
  return (
    <SegmentedControlLib
      values={items.map((item) => item.label)}
      selectedIndex={items.findIndex((item) => item.value === value)}
      onChange={(event) => {
        const item = items[event.nativeEvent.selectedSegmentIndex];
        onChange(item.value, item);
      }}
      {...nativeProps}
    />
  );
};
