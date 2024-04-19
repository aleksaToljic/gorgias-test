import { act, render, screen } from "@testing-library/react";
import Homepage from "../index";

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("Homepage", () => {
  it("should show correct percentage", async () => {
    //arrange
    fetchMock.mockIf(/^http?:\/\/localhost:3000.*$/, (req) => {
      if (req.url.endsWith("/analytics")) {
        return Promise.resolve(
          JSON.stringify({
            data: [
              {
                customerId: "abc123",
                views: 100,
                clicks: 50,
                checkouts: 25,
                payments: 5,
              },
              {
                customerId: "abc456",
                views: 200,
                clicks: 50,
                checkouts: 25,
                payments: 10,
              },
            ],
          }),
        );
      } else if (req.url.endsWith("/customers")) {
        return Promise.resolve(
          JSON.stringify({
            data: [
              {
                type: "customer",
                id: "abc123",
                firstName: "John",
                lastName: "Doe",
              },
              {
                type: "customer",
                id: "abc456",
                firstName: "Ann",
                lastName: "Carpenter",
              },
            ],
          }),
        );
      } else {
        return Promise.resolve({
          status: 404,
          body: "Not Found",
        });
      }
    });

    //act
    await act(async () => {
      render(<Homepage />);
    });

    //assert
    //Let's assert that we have two rows, and last columns have proper percentage values
    expect(screen.getByTestId("row0-col-6")).toHaveTextContent("50%");
    expect(screen.getByTestId("row0-col-7")).toHaveTextContent("5%");
    expect(screen.getByTestId("row1-col-6")).toHaveTextContent("25%");
    expect(screen.getByTestId("row1-col-7")).toHaveTextContent("5%");
  });
});
