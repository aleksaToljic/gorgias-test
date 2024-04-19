import React from "react";
import { clsx } from "../../../utilities";

type TableHeaderProps = React.ComponentPropsWithoutRef<"thead">;

export const TableHeader = React.forwardRef(
  (
    { children, ...props }: TableHeaderProps,
    ref: React.Ref<HTMLTableSectionElement>,
  ) => {
    return (
      <thead
        ref={ref}
        {...props}
        className={clsx(["m-table__header", props.className])}
      >
        <tr>{children}</tr>
      </thead>
    );
  },
);
