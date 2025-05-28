public class InvoiceResponse
{
    public List<InvoiceResult>? Result { get; set; }
    public Metadata? Metadata { get; set; }
}

public class InvoiceResult
{
    public string? PublicUrl { get; set; }
    public string? Uuid { get; set; }
    public string? SubmissionUUID { get; set; }
    public string? LongId { get; set; }
    public string? InternalId { get; set; }
    public string? TypeName { get; set; }
    public string? DocumentTypeNamePrimaryLang { get; set; }
    public string? DocumentTypeNameSecondaryLang { get; set; }
    public string? TypeVersionName { get; set; }
    public string? IssuerId { get; set; }
    public string? IssuerName { get; set; }
    public string? IssuerType { get; set; }
    public string? ReceiverId { get; set; }
    public string? ReceiverName { get; set; }
    public string? ReceiverType { get; set; }
    public DateTime DateTimeIssued { get; set; }
    public DateTime DateTimeReceived { get; set; }
    public decimal TotalSales { get; set; }
    public decimal TotalDiscount { get; set; }
    public decimal NetAmount { get; set; }
    public decimal Total { get; set; }
    public DateTime? CancelRequestDate { get; set; }
    public DateTime? RejectRequestDate { get; set; }
    public DateTime? CancelRequestDelayedDate { get; set; }
    public DateTime? RejectRequestDelayedDate { get; set; }
    public DateTime? DeclineCancelRequestDate { get; set; }
    public DateTime? DeclineRejectRequestDate { get; set; }
    public string? Status { get; set; }
    public string? CreatedByUserId { get; set; }
    public FreezeStatus? FreezeStatus { get; set; }
    public int MaxPercision { get; set; }
    public object? InvoiceLineItemCodes { get; set; }
    public int DocumentLinesTotalCount { get; set; }
    public string? DocumentStatusReason { get; set; }
    public object? LateSubmissionRequestNumber { get; set; }
}

public class FreezeStatus
{
    public bool Frozen { get; set; }
    public string? Type { get; set; }
    public string? Scope { get; set; }
    public DateTime? ActionDate { get; set; }
    public string? AuCode { get; set; }
    public string? AuName { get; set; }
}

public class Metadata
{
    public string? ContinuationToken { get; set; }
}
