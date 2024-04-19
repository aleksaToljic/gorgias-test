import React from "react";
import { clsx } from "../../../utilities";

type TableCellProps = React.ComponentPropsWithoutRef<"td">;

export const TableCell = React.forwardRef(
  (props: TableCellProps, ref: React.Ref<HTMLTableCellElement>) => {
    return (
      <td
        ref={ref}
        {...props}
        className={clsx(["m-table__cell", props.className])}
      />
    );
  },
);
