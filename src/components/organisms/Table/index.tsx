import React from "react";
import { clsx } from "../../../utilities";
import { TableBody } from "./TableBody";
import { TableCell } from "./TableCell";
import { TableColumn } from "./TableColumn";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

//TODO when this component get's a bit complex, and it's used on multiple places,
// we should create a detailed unit test that will cover all cases of this component,
// at the moment this component is tested in homepage.spec.tsx (it's only usage currently)

type TableProps = React.ComponentPropsWithoutRef<"table">;

/**
 * Simple Table component. For children, use the predefined components.
 */
export interface Table
  extends React.ForwardRefExoticComponent<
    TableProps & React.RefAttributes<HTMLTableElement>
  > {
  /**
   * Use this component as a customized <tbody> element
   */
  Body: typeof TableBody;
  /**
   * Use this component as a customized <td> element
   */
  Cell: typeof TableCell;
  /**
   * Use this component as a customized <th> element
   */
  Column: typeof TableColumn;
  /**
   * Use this component as a customized <thead> element
   */
  Header: typeof TableHeader;
  /**
   * Use this component as a customized <tr> element
   */
  Row: typeof TableRow;
}

export const Table = Object.assign(
  React.forwardRef(function Table(
    props: TableProps,
    //TODO if we need to use ref in this component, we should use a hook like this `const forwardedRef = useForwardedRef(ref)`;
    ref: React.Ref<HTMLTableElement>,
  ) {
    return (
      <table
        ref={ref}
        {...props}
        className={clsx(["m-table", props.className])}
      >
        {props.children}
      </table>
    );
  }),
  {
    Body: TableBody,
    Cell: TableCell,
    Column: TableColumn,
    Header: TableHeader,
    Row: TableRow,
  },
);
