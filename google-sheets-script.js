// Google Apps Script for form submissions
// Deploy as Web App: Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Full Name", "Email Address", "Phone Number", "Submitted At"]);
      sheet.getRange(1, 1, 1, 4).setFontWeight("bold");
    }

    // Use submittedAt from payload or generate now
    const submittedAt = data.submittedAt || new Date().toISOString();

    // Append row: Full Name, Email, Phone, SubmittedAt
    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      submittedAt
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
