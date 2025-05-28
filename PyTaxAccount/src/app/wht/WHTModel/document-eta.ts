export interface documentETA {
  documentType?: string;
  documentTypeVersion?: string;
  dateTimeIssued?: string;
  taxpayerActivityCode?: string;
  internalID?: string;
  purchaseOrderReference?: string;
  purchaseOrderDescription?: string;
  salesOrderReference?: string;
  salesOrderDescription?: string;
  proformaInvoiceNumber?: string;
  totalDiscountAmount?: number;
  totalSalesAmount?: number;
  netAmount?: number;
  totalAmount?: number;
  extraDiscountAmount?: number;
  totalItemsDiscountAmount?: number;
  issuer?: Issuer;
  receiver?: Receiver;
  payment?: Payment;
  delivery?: Delivery;
  invoiceLines?: InvoiceLine[];
  taxTotals?: TaxTotal[];
  signatures?: Signature[];
}

export interface Issuer {
  type?: string;
  id?: string;
  name?: string;
  address?: AddressIssuer;
}

export interface Receiver {
  type?: string;
  // TaxID
  id?: string;
  name?: string;
  address?: AddressReceiver;
}

export interface Payment {
  bankName?: string;
  bankAddress?: string;
  bankAccountNo?: string;
  bankAccountIBAN?: string;
  swiftCode?: string;
  terms?: string;
}

export interface Delivery {
  countryOfOrigin?: string;
  approach?: string;
  packaging?: string;
  dateValidity?: string;
  exportPort?: string;
  grossWeight?: number;
  netWeight?: number;
  terms?: string;
}

export interface InvoiceLine {
  description?: string;
  itemType?: string;
  itemCode?: string;
  unitType?: string;
  quantity?: number;
  internalCode?: string;
  salesTotal?: number;
  total?: number;
  valueDifference?: number;
  totalTaxableFees?: number;
  netTotal?: number;
  itemsDiscount?: number;
  taxableItems?: TaxableItem[];
  unitValue?: UnitValue;
  discount?: Discount;
}

export interface TaxTotal {
  taxType?: string;
  amount?: number;
}

export interface Signature {
  signatureType?: string;
  value?: string;
}

export interface AddressIssuer {
  branchID?: string;
  country?: string;
  governate?: string;
  regionCity?: string;
  street?: string;
  buildingNumber?: string;
  postalCode?: string;
  floor?: string;
  room?: string;
  landmark?: string;
  additionalInformation?: string;
}

export interface AddressReceiver {
  country?: string;
  governate?: string;
  regionCity?: string;
  street?: string;
  buildingNumber?: string;
  postalCode?: string;
  floor?: string;
  room?: string;
  landmark?: string;
  additionalInformation?: string;
}

export interface UnitValue {
  currencySold?: string;
  amountEGP?: number;
  amountSold?: number;
  currencyExchangeRate?: number;
}

export interface Discount {
  rate?: number;
  amount?: number;
}

export interface TaxableItem {
  taxType?: string;
  amount?: number;
  subType?: string;
  rate?: number;
}
