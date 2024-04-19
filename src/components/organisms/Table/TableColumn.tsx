import React from "react";
import {clsx} from "../../../utilities";

type TableColumnProps = React.ComponentPropsWithoutRef<"th">;

export const TableColumn = React.forwardRef(
  (props: TableColumnProps, ref: React.Ref<HTMLTableCellElement>) => {
    return (
      <th
        ref={ref}
        {...props}
        className={clsx(["m-table__column", props.className])}
      />
    );
  },
);
