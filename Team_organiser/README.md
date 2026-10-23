
<div align="center">

# 📊 Google Sheets Team Table Generator

### Turn a master registration sheet into clean, organized team tables, automatically.

A Google Apps Script that groups players by **Team ID** and **Team Name**, then builds a new sheet with a neat table for every team.

<br />

![Google Apps Script](https://img.shields.io/badge/Google_Apps_Script-4285F4?style=flat-square&logo=google&logoColor=white)
![Google Sheets](https://img.shields.io/badge/Google_Sheets-34A853?style=flat-square&logo=googlesheets&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

[Features](#-features) · [Source Format](#-source-sheet-format) · [Output](#-output) · [Installation](#-installation) · [How It Works](#-how-it-works)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%" valign="top">
<h3>🆕 Auto-Created Output Sheet</h3>
<p>Generates a fresh <code>Team Tables</code> sheet every time you run it.</p>
</td>
<td width="50%" valign="top">
<h3>🔒 Original Data Untouched</h3>
<p>Your source sheet is never modified.</p>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<h3>👥 Smart Grouping</h3>
<p>Players are grouped by Team ID + Team Name.</p>
</td>
<td width="50%" valign="top">
<h3>🗂️ One Table Per Team</h3>
<p>Each team gets its own clean, separate table.</p>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<h3>♻️ Safe Regeneration</h3>
<p>The old generated sheet is deleted before a new one is created.</p>
</td>
<td width="50%" valign="top">
<h3>📏 Auto-Resized Columns</h3>
<p>Columns fit their content automatically.</p>
</td>
</tr>
<tr>
<td colspan="2" valign="top">
<h3>📈 Scales to Any Size</h3>
<p>Works with any number of teams and players, from a handful to thousands of registrations.</p>
</td>
</tr>
</table>

---

## 📋 Source Sheet Format
## Input
**Example:**

| Registration ID | Team ID | Team Name | Discord ID | Email | IGN | UID |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1001 | T001 | Team Alpha | 123456789 | ... | Player1 | 12345 |
| 1002 | T001 | Team Alpha | 987654321 | ... | Player2 | 67890 |
| 1003 | T002 | Team Bravo | 456123789 | ... | Player3 | 11111 |

> [!NOTE]
> The first row is treated as a header and skipped.

---

## 📤 Output

A new sheet named **`Team Tables`** is generated:

```text
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

## 🚀 Installation

| Step | Action |
| :---: | :--- |
| **1** | Open your Google Spreadsheet. |
| **2** | Click **Extensions → Apps Script**. |
| **3** | Delete the default code. |
| **4** | Paste the provided script. |
| **5** | Save the project. |

---

## ⚙️ Configuration

Edit these constants if your sheet names are different:

```javascript
const SOURCE_SHEET = "Sheet1";
const OUTPUT_SHEET = "Team Tables";
```

---

## ▶️ Running the Script

1. Open **Apps Script**.
2. Select the function **`createTeamTables`**.
3. Click **Run**.
4. Authorize the script the first time.
5. The new sheet is generated automatically.

---

## 🧭 How It Works

| Step | What Happens |
| :---: | :--- |
| **1** | 📥 Reads all rows from the source sheet. |
| **2** | ⏭️ Skips the header row. |
| **3** | 🧩 Groups records by **Team ID + Team Name**. |
| **4** | 👤 Collects Registration ID, Discord ID, IGN, and UID. |
| **5** | 🆕 Creates a brand-new output sheet. |
| **6** | 🗂️ Writes one formatted table for each team. |
| **7** | 📏 Resizes columns automatically. |

---

## ⚠️ Notes

> [!IMPORTANT]
> The existing **Team Tables** sheet is **deleted** before a new one is generated. Don't store anything you want to keep in that sheet.

> [!TIP]
> The original sheet is never modified, so it's safe to run the script as many times as you like.

- Empty teams are ignored.
- Supports hundreds or thousands of registrations.

---

## 🔧 Function Reference

```javascript
createTeamTables()
```

---

## 📜 License

Released under the **MIT License**. Feel free to modify and use this project in your own Google Sheets workflows.

---

<div align="center">

**Built for faster tournament and team management** 🏆

⭐ If this script saved you time, consider giving the repo a star!

</div>
