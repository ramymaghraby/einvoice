public class EtaDocumentExtended
{
    public string? SubmissionUUID { get; set; }
    public DateTime DateTimeRecevied { get; set; }
    public ValidationResults? ValidationResults { get; set; }
    public string? TransformationStatus { get; set; }
    public int StatusId { get; set; }
    public string? Status { get; set; }
    public string? DocumentStatusReason { get; set; }
    public DateTime? CancelRequestDate { get; set; }
    public DateTime? RejectRequestDate { get; set; }
    public DateTime? CancelRequestDelayedDate { get; set; }
    public DateTime? RejectRequestDelayedDate { get; set; }
    public DateTime? DeclineCancelRequestDate { get; set; }
    public DateTime? DeclineRejectRequestDate { get; set; }
    public DateTime CanbeCancelledUntil { get; set; }
    public DateTime CanbeRejectedUntil { get; set; }
    public int SubmissionChannel { get; set; }
    public FreezeStatus? FreezeStatus { get; set; }
    public DateTime? ServiceDeliveryDate { get; set; }
    public DateTime? CustomsClearanceDate { get; set; }
    public string? CustomsDeclarationNumber { get; set; }
    public string? EPaymentNumber { get; set; }
    public List<object>? AdditionalMetadata { get; set; }
    public object? AlertDetails { get; set; }
    public string? Uuid { get; set; }
    public string? PublicUrl { get; set; }
    public string? PurchaseOrderDescription { get; set; }
    public double TotalItemsDiscountAmount { get; set; }
    public Delivery? Delivery { get; set; }
    public Payment? Payment { get; set; }
    public double TotalAmount { get; set; }
    public List<TaxTotal>? TaxTotals { get; set; }
    public double NetAmount { get; set; }
    public double TotalDiscount { get; set; }
    public double TotalSales { get; set; }
    public List<InvoiceLine>? InvoiceLines { get; set; }
    public int DocumentLinesTotalCount { get; set; }
    public List<object>? References { get; set; }
    public string? SalesOrderDescription { get; set; }
    public string? SalesOrderReference { get; set; }
    public string? ProformaInvoiceNumber { get; set; }
    public List<Signature>? Signatures { get; set; }
    public string? PurchaseOrderReference { get; set; }
    public string? InternalID { get; set; }
    public string? TaxpayerActivityCode { get; set; }
    public DateTime DateTimeIssued { get; set; }
    // Add remaining properties if needed (documentTypeVersion etc.)
}

public class ValidationResults
{
    public string? Status { get; set; }
    public List<ValidationStep>? ValidationSteps { get; set; }
}

public class ValidationStep
{
    public string? Status { get; set; }
    public string? Error { get; set; }
    public string? StepName { get; set; }
    public string? StepId { get; set; }
}

public class Delivery
{
    public string? Approach { get; set; }
    public string? Packaging { get; set; }
    public DateTime? DateValidity { get; set; }
    public string? ExportPort { get; set; }
    public string? CountryOfOrigin { get; set; }
    public double GrossWeight { get; set; }
    public double? NetWeight { get; set; }
    public string? Terms { get; set; }
}

public class Payment
{
    public string? BankName { get; set; }
    public string? BankAddress { get; set; }
    public string? BankAccountNo { get; set; }
    public string? BankAccountIBAN { get; set; }
    public string? SwiftCode { get; set; }
    public string? Terms { get; set; }
}

public class TaxTotal
{
    public string? TaxType { get; set; }
    public double Amount { get; set; }
}

public class InvoiceLine
{
    public string? ItemPrimaryName { get; set; }
    public string? ItemPrimaryDescription { get; set; }
    public string? ItemSecondaryName { get; set; }
    public string? ItemSecondaryDescription { get; set; }
    public string? UnitTypePrimaryName { get; set; }
    public string? UnitTypePrimaryDescription { get; set; }
    public string? UnitTypeSecondaryName { get; set; }
    public string? UnitTypeSecondaryDescription { get; set; }
    public string? WeightUnitTypePrimaryName { get; set; }
    public string? WeightUnitTypePrimaryDescription { get; set; }
    public string? WeightUnitTypeSecondaryName { get; set; }
    public string? WeightUnitTypeSecondaryDescription { get; set; }
    public double SalesTotalForeign { get; set; }
    public double NetTotalForeign { get; set; }
    public double TotalForeign { get; set; }
    public double TotalTaxableFeesForeign { get; set; }
    public double ItemsDiscountForeign { get; set; }
    public double ValueDifferenceForeign { get; set; }
    public DiscountForeign? DiscountForeign { get; set; }
    public List<LineTaxableItem>? LineTaxableItems { get; set; }
    public string? Description { get; set; }
    public string? ItemType { get; set; }
    public string? ItemCode { get; set; }
    public string? UnitType { get; set; }
    public double Quantity { get; set; }
    public string? WeightUnitType { get; set; }
    public double WeightQuantity { get; set; }
    public UnitValue? UnitValue { get; set; }
    public object? FactoryUnitValue { get; set; }
    public double SalesTotal { get; set; }
    public Discount? Discount { get; set; }
    public object? TaxableItems { get; set; }
    public string? InternalCode { get; set; }
    public double ItemsDiscount { get; set; }
    public double NetTotal { get; set; }
    public double TotalTaxableFees { get; set; }
    public double ValueDifference { get; set; }
    public double Total { get; set; }
}

public class Discount
{
    public double? Rate { get; set; }
    public double Amount { get; set; }
}

public class LineTaxableItem
{
    public double AmountForeign { get; set; }
    public string? TaxType { get; set; }
    public double Amount { get; set; }
    public string? SubType { get; set; }
    public double Rate { get; set; }
}

public class UnitValue
{
    public string? CurrencySold { get; set; }
    public decimal? AmountSold { get; set; }
    public double? AmountEGP { get; set; }
    public double? CurrencyExchangeRate { get; set; }
}

public class Signature
{
    public string? SignatureType { get; set; }
    public string? Value { get; set; }
    public string? SignedBy { get; set; }
}
public class DiscountForeign
{
    public decimal? Rate { get; set; }
    public decimal? Amount { get; set; }
    public decimal? AmountForeign { get; set; }
}