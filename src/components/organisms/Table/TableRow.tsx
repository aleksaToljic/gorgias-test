import React from "react";
import { clsx } from "../../../utilities";

type TableRowProps = React.ComponentPropsWithoutRef<"tr">;

export const TableRow = React.forwardRef(
  (props: TableRowProps, ref: React.Ref<HTMLTableRowElement>) => {
    return (
      <tr
        ref={ref}
        {...props}
        className={clsx(["m-table__row", props.className])}
      />
    );
  },
);
