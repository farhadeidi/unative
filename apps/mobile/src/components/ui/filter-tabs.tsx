import { useEffect, useRef, useState } from "react";
import { FlatList, FlatListProps } from "react-native";
import { tv, VariantProps } from "tailwind-variants";

import { Pill, PillProps, PillVariantProps } from "./pill";
import { Text } from "./text";

export const filterTabsVariants = tv({
  slots: {
    base: "px-4 py-2",
    text: "",
  },
  variants: {
    variant: {
      default: {
        base: "",
        text: "",
      },
    },
    size: {
      default: {
        base: "",
        text: "",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type FilterTabsVariantProps = VariantProps<typeof filterTabsVariants>;

type ItemProps<T> = {
  label: string;
  value: string;
  data?: T;
};

export type FilterTabsProps<T> = FilterTabsVariantProps & {
  data: ItemProps<T>[] | null | undefined;
  value: string;
  onChange: (value: string) => void;
  flatListProps?: Partial<FlatListProps<ItemProps<T>>>;
  activeViewPosition?: number;
  defaultPillVariant?: PillVariantProps["variant"];
  activePillVariant?: PillVariantProps["variant"];
  pillProps?: PillProps;
};

export const FilterTabs = <T,>({
  value,
  onChange,
  data,
  flatListProps,
  activeViewPosition = 0.5,
  defaultPillVariant = "ghost",
  activePillVariant = "secondary",
  pillProps,
}: FilterTabsProps<T>) => {
  const [isReady, setIsReady] = useState(false);
  const ref = useRef<FlatList | null>(null);

  useEffect(() => {
    const init = async () => {
      // delay to ensure the ref is ready
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsReady(true);
    };

    if (!data || data.length < 1 || !value) return;
    if (!isReady) {
      init();
      return;
    }

    const valueIndex = data?.findIndex((el) => el.value === value) ?? 0;
    ref.current?.scrollToIndex({
      index: valueIndex,
      animated: true,
      viewPosition: activeViewPosition,
    });
  }, [isReady, data, value]);

  return (
    <FlatList
      ref={ref}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(el) => el.value}
      contentContainerClassName="px-2 flex flex-row gap-1"
      renderItem={({ item }) => {
        const isActive = item.value === value;
        return (
          <Pill
            variant={isActive ? activePillVariant : defaultPillVariant}
            onPress={() => {
              onChange(item.value);
            }}
            {...pillProps}
          >
            <Text>{item.label}</Text>
          </Pill>
        );
      }}
      {...flatListProps}
    />
  );
};
FilterTabs.displayName = "FilterTabs";
