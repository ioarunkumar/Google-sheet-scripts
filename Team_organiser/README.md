# Google Sheets Team Table Generator

A Google Apps Script that automatically creates organized team tables from a master registration sheet.

Instead of manually filtering teams, this script groups all players by **Team ID** and **Team Name**, then generates a new sheet containing a clean table for every team.

---

## Features

- ✅ Creates a new output sheet automatically
- ✅ Keeps the original sheet unchanged
- ✅ Groups players by Team ID + Team Name
- ✅ Displays each team in its own table
- ✅ Deletes the old generated sheet before creating a new one
- ✅ Automatically resizes columns
- ✅ Works with any number of teams and players

---

## Source Sheet Format

The script expects the following column layout.

| Column | Data |
|---------|------|
| A | Registration ID |
| B | Team ID |
| C | Team Name |
| D | Discord ID |
| E | (Unused) |
| F | IGN |
| G | UID |

Example:

| Registration ID | Team ID | Team Name | Discord ID | Email | IGN | UID |
|-----------------|---------|-----------|------------|-------|-----|-----|
| 1001 | T001 | Team Alpha | 123456789 | ... | Player1 | 12345 |
| 1002 | T001 | Team Alpha | 987654321 | ... | Player2 | 67890 |
| 1003 | T002 | Team Bravo | 456123789 | ... | Player3 | 11111 |

---

## Output

A new sheet named:

```
Team Tables
```

is generated.

Example:

```
Team: Team Alpha

Team ID: T001

------------------------------------------
ID      Discord ID      IGN       UID
------------------------------------------
1001    123456789       Player1   12345
1002    987654321       Player2   67890



Team: Team Bravo

Team ID: T002

------------------------------------------
ID      Discord ID      IGN       UID
------------------------------------------
1003    456123789       Player3   11111
```

---

## Installation

1. Open your Google Spreadsheet.
2. Click **Extensions → Apps Script**.
3. Delete the default code.
4. Paste the provided script.
5. Save the project.

---

## Configuration

Edit these constants if your sheet names are different.

```javascript
const SOURCE_SHEET = "Sheet1";
const OUTPUT_SHEET = "Team Tables";
```

---

## Running the Script

1. Open **Apps Script**.
2. Select:

```
createTeamTables
```

3. Click **Run**.
4. Authorize the script the first time.
5. A new sheet will be generated automatically.

---

## How It Works

1. Reads all rows from the source sheet.
2. Skips the header row.
3. Groups records using:

```
Team ID + Team Name
```

4. Collects player information:

- Registration ID
- Discord ID
- IGN
- UID

5. Creates a brand-new output sheet.
6. Writes one formatted table for each team.
7. Resizes columns automatically.

---

## Notes

- The original sheet is never modified.
- Existing **Team Tables** sheet is deleted before generating a new one.
- Empty teams are ignored.
- Supports hundreds or thousands of registrations.

---

## Function

```javascript
createTeamTables()
```

---

## License

MIT License

Feel free to modify and use this project in your own Google Sheets workflows.
