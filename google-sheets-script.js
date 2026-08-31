// Google Apps Script for form submissions
// Deploy as Web App: Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add timestamp
    const timestamp = new Date().toISOString();
    
    // Append row: Name, Email, Phone, Timestamp
    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      timestamp
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
