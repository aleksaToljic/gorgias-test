import { useEffect, useState } from "react";
import { Table } from "../components/organisms/Table";
import { Http } from "../http";
import { Analytics, Customer } from "../types";
import { mergeTwoArraysByKeyValue } from "../utilities";

export const TITLE = "Customer Analytics";

function CustomerAnalytics() {
  const [tableData, setTableData] = useState<Map<string, Analytics & Customer>>(
    new Map(),
  );

  useEffect(() => {
    //TODO When we add more pages we could add the AbortController.
    //TODO few other improvements are possible, like error handling and some indication (isLoading) that request is in progress
    async function init() {
      const [_analytics, _customers] = await Promise.all([
        Http.getAnalytics(),
        Http.getCustomers(),
      ]);

      const tableData = mergeTwoArraysByKeyValue<Analytics, Customer>(
        _analytics,
        _customers,
        "customerId",
        "id",
      );

      setTableData(tableData);
    }

    init();
  }, []);

  return (
    <>
      <h1>{TITLE}</h1>
      <div className="card">
        {/*TODO once we add more content on this page, we could move this table to a /src/components/CustomerAnalyticsTable.tsx  */}
        <Table>
          <Table.Header>
            {/*TODO once we have more data, we could add column sorting, and pagination to this table*/}
            <Table.Column>Id</Table.Column>
            <Table.Column>Customer Full Name</Table.Column>
            <Table.Column>Store Views</Table.Column>
            <Table.Column>Product Clicks</Table.Column>
            <Table.Column>Product checkouts</Table.Column>
            <Table.Column>Sales</Table.Column>
            <Table.Column>CTR</Table.Column>
            <Table.Column>Conversion</Table.Column>
          </Table.Header>
          <Table.Body>
            {Array.from(tableData.values()).map((rowData, index) => {
              return (
                <Table.Row key={rowData.id ?? rowData.customerId}>
                  <Table.Cell>{rowData.id ?? rowData.customerId}</Table.Cell>
                  <Table.Cell>
                    {rowData.firstName} {rowData.lastName}
                  </Table.Cell>
                  <Table.Cell>{rowData.views}</Table.Cell>
                  <Table.Cell>{rowData.clicks}</Table.Cell>
                  <Table.Cell>{rowData.checkouts}</Table.Cell>
                  <Table.Cell>{rowData.payments}</Table.Cell>
                  <Table.Cell data-testid={`row${index}-col-6`}>
                    {/*TODO in the README.md this calculation is probably wrong as it says views/clicks, it probably doesn't matter, but let's leave it as clicks/views*/}
                    {(rowData.clicks / rowData.views) * 100}%
                  </Table.Cell>
                  <Table.Cell data-testid={`row${index}-col-7`}>
                    {/*TODO maybe make a utility function `toPercentage(0.05643) => 5.64%` that will round this and if it has decimals, show up to 2*/}
                    {(rowData.payments / rowData.views) * 100}%
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default CustomerAnalytics;
