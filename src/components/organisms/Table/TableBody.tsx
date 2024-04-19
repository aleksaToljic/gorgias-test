import React from "react";
import { clsx } from "../../../utilities";

type TableBodyProps = React.ComponentPropsWithoutRef<"tbody">;

export const TableBody = React.forwardRef(
  (props: TableBodyProps, ref: React.Ref<HTMLTableSectionElement>) => {
    return (
      <tbody
        ref={ref}
        {...props}
        className={clsx(["m-table__body", props.className])}
      />
    );
  },
);
