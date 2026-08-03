function createTeamTables() {

  function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Tournament")
    .addItem("Generate Team Tables", "createTeamTables")
    .addToUi();
}

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Name of your original data sheet
 // const SOURCE_SHEET = "Sheet1";

  // Name of generated sheet
  const OUTPUT_SHEET = "Team Tables";

  //const source = ss.getSheetByName(SOURCE_SHEET);
  const source = ss.getActiveSheet();

  if (!source) {
    SpreadsheetApp.getUi().alert("Source sheet not found!");
    return;
  }

  // Delete old output sheet if it exists
  const oldSheet = ss.getSheetByName(OUTPUT_SHEET);
  if (oldSheet) {
    ss.deleteSheet(oldSheet);
  }

  // Create a fresh output sheet
  const output = ss.insertSheet(OUTPUT_SHEET);

  const data = source.getDataRange().getValues();

  if (data.length <= 1) return;

  const teams = {};

  // Skip header row
  for (let i = 1; i < data.length; i++) {
    const row = data[i];

    const teamId = row[1];
    const teamName = row[2];
    const key = teamId + "|" + teamName;

    if (!teams[key]) {
      teams[key] = {
        id: teamId,
        name: teamName,
        players: []
      };
    }

    teams[key].players.push([
      row[0], // Registration ID
      row[3], // Discord ID
      row[5], // IGN
      row[6]  // UID
    ]);
  }

  let r = 1;

  Object.values(teams).forEach(team => {

    output.getRange(r,1).setValue("Team: " + team.name).setFontWeight("bold").setFontSize(14);
    r++;

    output.getRange(r,1).setValue("Team ID: " + team.id).setFontWeight("bold");
    r += 2;

    output.getRange(r,1,1,4).setValues([[
      "ID",
      "Discord ID",
      "IGN",
      "UID"
    ]]).setFontWeight("bold");

    r++;

    output.getRange(r,1,team.players.length,4).setValues(team.players);

    r += team.players.length + 3;
  });

  output.autoResizeColumns(1,4);

  SpreadsheetApp.getUi().alert("Finished! New sheet created.");
}
