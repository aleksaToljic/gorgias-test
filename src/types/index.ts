
export interface CustomerResponse {
  type: string;
  id: string;
  firstName: string;
  lastName: string;
}

export type Customer = CustomerResponse;

export interface AnalyticsResponse {
  customerId: CustomerResponse["id"];
  views: number;
  clicks: number;
  checkouts: number;
  payments: number;
}

export type Analytics = AnalyticsResponse;
