using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Namotion.Reflection;
using NuGet.Protocol;
using System.Net.Http.Headers;
using System.Runtime.InteropServices;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class EtaController : ControllerBase
    {
        private HttpClient _httpClient;
        private IConfiguration _config;

        public EtaController(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _config = config;
        }

        [HttpGet("GetInvoicesDetailsByDateRange")]
        public async Task<IActionResult> GetData(string fromDate, string toDate)
        {
            // Step 1: Request access token

            var tokenResponse = await RequestAccessToken();
            var accessToken = tokenResponse.Value?.ToString();


            // Step 2: Use token to fetch protected data
            string urlGetRecentDocument = $"https://api.invoicing.eta.gov.eg/api/v1.0/documents/recent?pageNo=1&pageSize=100&submissionDateFrom={fromDate}&submissionDateTo={toDate}&status=Valid&documentType=i";

            var request = new HttpRequestMessage(HttpMethod.Get, urlGetRecentDocument);
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

            var apiResponse = await _httpClient.SendAsync(request);

            if (!apiResponse.IsSuccessStatusCode)
                return StatusCode((int)apiResponse.StatusCode, "API call failed");

            var dataOfRecentDocuments = await apiResponse.Content.ReadAsStringAsync();

            var invoicesResult = JsonDocument.Parse(dataOfRecentDocuments);
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true // allows mapping even if property casing is different
            };

            InvoiceResponse? response = JsonSerializer.Deserialize<InvoiceResponse>(invoicesResult, options);
            List<InvoiceResult>? invoices = response?.Result;

            List<EtaDocumentExtended> invoicesByUuid = new List<EtaDocumentExtended>();
            if (response?.Result != null)
            {
                var uuids = invoices?.Select(i => i.Uuid).ToList();
                invoicesByUuid = await GetInvoiceDetailsForUuids(uuids!, accessToken!);
            }
            return Ok(invoicesByUuid);
        }
        [HttpGet("GetDocumentsSummaryByDateRange")]
        public async Task<IActionResult> GetDocumentsByDate(string fromDate, string toDate)
        {
            // Step 1: Request access token

            var tokenResponse = await RequestAccessToken();
            var accessToken = tokenResponse.Value?.ToString();


            // Step 2: Use token to fetch protected data
            string urlGetRecentDocument = $"https://api.invoicing.eta.gov.eg/api/v1.0/documents/recent?pageNo=1&pageSize=100&submissionDateFrom={fromDate}&submissionDateTo={toDate}&status=Valid&documentType=i";

            var request = new HttpRequestMessage(HttpMethod.Get, urlGetRecentDocument);
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

            var apiResponse = await _httpClient.SendAsync(request);

            if (!apiResponse.IsSuccessStatusCode)
                return StatusCode((int)apiResponse.StatusCode, "API call failed");

            var dataOfRecentDocuments = await apiResponse.Content.ReadAsStringAsync();

            var invoicesResult = JsonDocument.Parse(dataOfRecentDocuments);
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true // allows mapping even if property casing is different
            };

            InvoiceResponse? response = JsonSerializer.Deserialize<InvoiceResponse>(invoicesResult, options);
            List<InvoiceResult>? invoices = response?.Result;

            Console.WriteLine(invoices?.Count);
            return Ok(invoices);
        }
 [HttpGet("GetInvoicesListByDateRange")]
        public async Task<IActionResult> GetInvoicesListByDateRange(string fromDate, string toDate)
        {
            // Step 1: Request access token

            var tokenResponse = await RequestAccessToken();
            var accessToken = tokenResponse.Value?.ToString();
            var request = new HttpRequestMessage();
            List<InvoiceResult>? invoices = new List<InvoiceResult>(); 
            InvoiceResponse? response = new InvoiceResponse();
            string urlGetRecentDocument = "";


            // Step 2: Use token to fetch protected data
            do
            {
                if (response?.Metadata?.ContinuationToken != "EndofResultSet")
                {
                    // &status=Valid
                    urlGetRecentDocument = $"https://api.invoicing.eta.gov.eg/api/v1.0/documents/search?continuationToken={response?.Metadata?.ContinuationToken}&pageSize=100&issueDateFrom={fromDate}&issueDateTo={toDate}&documentType=i";
                    // urlGetRecentDocument = $"https://api.invoicing.eta.gov.eg/api/v1.0/documents/search?continuationToken={response?.Metadata?.ContinuationToken}&pageSize=100&issueDateFrom={fromDate}&issueDateTo={toDate}&direction=Sent&documentType=i";
                    request = new HttpRequestMessage(HttpMethod.Get, urlGetRecentDocument);
                    request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
                    var apiResponse = await _httpClient.SendAsync(request);
                    if (!apiResponse.IsSuccessStatusCode)
                        return StatusCode((int)apiResponse.StatusCode, "API call failed");
                    var dataOfRecentDocuments = await apiResponse.Content.ReadAsStringAsync();
                    var invoicesResult = JsonDocument.Parse(dataOfRecentDocuments);
                    var options = new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true // allows mapping even if property casing is different
                    };
                    response = JsonSerializer.Deserialize<InvoiceResponse>(invoicesResult, options);
                    invoices.AddRange(response?.Result!);
                    Console.WriteLine(response?.Metadata?.ContinuationToken);
                    Thread.Sleep(3000);
                }
                
            } while (response?.Metadata?.ContinuationToken != "EndofResultSet");
            return Ok(invoices);
        }
        private async Task<List<EtaDocumentExtended>> GetInvoiceDetailsForUuids(List<string> uuids, string token)
        {
            List<EtaDocumentExtended> invoices = new List<EtaDocumentExtended>();
            Console.WriteLine("Count of UUIDs: " + uuids.Count);
            foreach (var uuid in uuids)
            {
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };
                string urlInvoiceByUuid = $"https://api.invoicing.eta.gov.eg/api/v1/documents/{uuid}/details";
                var requestByUuid = new HttpRequestMessage(HttpMethod.Get, urlInvoiceByUuid);
                requestByUuid.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);
                var apiResponseByUuid = await _httpClient.SendAsync(requestByUuid);
                if (apiResponseByUuid.IsSuccessStatusCode)
                {
                    var docByUuid = await apiResponseByUuid.Content.ReadAsStringAsync();
                    var invoicesResult = JsonDocument.Parse(docByUuid);
                    invoices.Add(JsonSerializer.Deserialize<EtaDocumentExtended>(invoicesResult, options)!);
                }
                Thread.Sleep(500);
            }
            return invoices;
        }
        [HttpGet("GetInvoiceByUuid")]
        public async Task<EtaDocumentExtended?> GetInvoiceDetailsByUuid(string uuid)
        {
            var tokenResponse = await RequestAccessToken();
            var accessToken = tokenResponse.Value?.ToString();
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };
            string urlInvoiceByUuid = $"https://api.invoicing.eta.gov.eg/api/v1/documents/{uuid}/details";
            var requestByUuid = new HttpRequestMessage(HttpMethod.Get, urlInvoiceByUuid);
            requestByUuid.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
            var apiResponseByUuid = await _httpClient.SendAsync(requestByUuid);
            if (apiResponseByUuid.IsSuccessStatusCode)
            {
                var docByUuid = await apiResponseByUuid.Content.ReadAsStringAsync();
                var invoicesResult = JsonDocument.Parse(docByUuid);
                return JsonSerializer.Deserialize<EtaDocumentExtended>(invoicesResult, options);
            }
            return null;
        }
        private async Task<ObjectResult> RequestAccessToken()
        {
            // Step 1: Request access token
            var tokenResponse = await _httpClient.PostAsync("https://id.eta.gov.eg/connect/token",
            new FormUrlEncodedContent(new[]
            {
                new KeyValuePair<string, string>("grant_type", "client_credentials"),
                new KeyValuePair<string, string>("client_id", _config["Oauth:ClientId"]!),
                new KeyValuePair<string, string>("client_secret", _config["OAuth:ClientSecret"]!),
                new KeyValuePair<string, string>("scope", "InvoicingAPI")
            }));

            if (!tokenResponse.IsSuccessStatusCode)
                return StatusCode((int)tokenResponse.StatusCode, "Token request failed");

            var tokenResult = JsonSerializer.Deserialize<JsonElement>(
                await tokenResponse.Content.ReadAsStringAsync());

            var accessToken = tokenResult.GetProperty("access_token").GetString();

            return Ok(accessToken);
        }
        
    }
}
