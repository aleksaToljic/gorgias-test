/**
 * Easier to track the requests urls, their response mapping, etc.
 * In the future, let's move the requests by their domains (perhaps http/analytics/index.ts and http/customers/index.ts)
 */

import { AnalyticsResponse, CustomerResponse } from "../types";

const BASE_URL = "http://localhost:3000/";
function requestUrl(url: string) {
  return BASE_URL + url;
}

export const Http = {
  async getAnalytics(): Promise<AnalyticsResponse[]> {
    //TODO we could do our mapping here, if we add some createdAt that is some string like date, we could map the response here to more dev friendly data
    return fetch(requestUrl("analytics")).then((response) =>
      response.json().then((result) => result.data),
    );
  },

  async getCustomers(): Promise<CustomerResponse[]> {
    return fetch(requestUrl("customers"))
      .then((response) => response.json())
      .then((result) => result.data);
  },
};
