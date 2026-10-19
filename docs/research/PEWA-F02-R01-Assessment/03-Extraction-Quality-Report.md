# Extraction Quality Report

## Process and file outcomes

All **21** files now in the assessment research folders were processed. The original 13 source-branch files were not modified; eight recovered Consultant 6 deliverables were copied byte-for-byte on the assessment branch. RTF was decoded from text; DOCX paragraphs, tables and hyperlink relationships were read; PDFs were converted with `pdftotext -layout`; XLSX worksheets were read with `openpyxl`; Markdown was read as UTF-8. Original files remain byte-for-byte outside assessment changes.

| Consultant | File | Type | Extraction result / limitations |
|---|---|---|---|
| Consultant 1 | `Report 1_PEWA-F02-R01 .rtf` | RTF | Text extracted; RTF control words removed. Unicode/control-code rendering may affect special punctuation; CSV-like content retained as raw source lines. |
| Consultant 2 | `Report 2_ PEWA-F02-R01.rtf` | RTF | Text extracted; RTF control words removed. Unicode/control-code rendering may affect special punctuation; CSV-like content retained as raw source lines. |
| Consultant 3 | `PEWA-F02-R01_D1_Research_Report.docx` | DOCX | 204 paragraphs and 6 tables extracted. Embedded hyperlinks counted from document relationships; anchor association is not fully represented in source register. |
| Consultant 3 | `PEWA-F02-R01_D2_Classification_Catalogue.xlsx` | XLSX | Workbook sheets and cell values extracted. Read Me: 11 non-empty body rows/2 columns; Classification Catalogue: 165 non-empty body rows/14 columns; Course & Role: 10 non-empty body rows/9 columns; Meal Occasions: 12 non-empty body rows/9 columns; Cuisines: 17 non-empty body rows/9 columns; Structure Concepts: 11 non-empty body rows/5 columns; Sources: 81 non-empty body rows/6 columns. |
| Consultant 3 | `PEWA-F02-R01_D4_Menu_Structure_Examples.docx` | DOCX | 56 paragraphs and 6 tables extracted. Embedded hyperlinks counted from document relationships; anchor association is not fully represented in source register. |
| Consultant 3 | `PEWA-F02-R01_D5_Reconciliation_and_Gap_Report.docx` | DOCX | 33 paragraphs and 4 tables extracted. Embedded hyperlinks counted from document relationships; anchor association is not fully represented in source register. |
| Consultant 4 | `PEWA-F02-R01_Classification_Catalogue.xlsx` | XLSX | Workbook sheets and cell values extracted. Classification Catalogue: 39 non-empty body rows/14 columns; Catalogue Notes: 12 non-empty body rows/1 columns. |
| Consultant 4 | `PEWA-F02-R01_Comprehensive_Research_Report.pdf` | PDF | pdftotext exit 0; 10588 characters extracted. No URL strings surfaced in extracted text; PDF link annotations were not enumerated. |
| Consultant 4 | `PEWA-F02-R01_Menu_Structure_Examples.pdf` | PDF | pdftotext exit 0; 5167 characters extracted. No URL strings surfaced in extracted text; PDF link annotations were not enumerated. |
| Consultant 4 | `PEWA-F02-R01_Reconciliation_Gap_Report.pdf` | PDF | pdftotext exit 0; 4642 characters extracted. No URL strings surfaced in extracted text; PDF link annotations were not enumerated. |
| Consultant 4 | `PEWA-F02-R01_Tags_Filters_Catalogue.xlsx` | XLSX | Workbook sheets and cell values extracted. Tags and Filters: 30 non-empty body rows/11 columns; Governance Notes: 7 non-empty body rows/1 columns. |
| Consultant 5 | `PEWA-F02-R01 — Comprehensive Food & Beverage Menu....md` | MD | Markdown extracted; 74155 source characters. D2/D3 catalogue records are parsed and classified below; original lines are retained verbatim. |
| Consultant 6 | `Report 4_ PEWA-F02-R01.rtf` | RTF | Text extracted; RTF control words removed. Unicode/control-code rendering may affect special punctuation; CSV-like content retained as raw source lines. |

## Extraction and source-quality flags

- Consultant 1: 8 classification and 8 attribute rows embedded as CSV. Citation markers and named sources occur in text, but a resolvable bibliography/URL register was not found in the submitted file.
- Consultant 2: 7 classification and 5 tag rows are explicitly marked sample; the report claims 200+ classification rows without supplying them. No resolvable URL bibliography was found.
- Consultant 3: classification workbook has 165 culinary entries in `Classification Catalogue`. Separate rows: Course & Role 10, Meal Occasions 12, Cuisines 17, Structure Concepts 11. `Sources` has 81 data rows plus header. Its separately referenced D3 remains unavailable after the documented local search.
- Consultant 4: classification workbook catalogue has 39 body rows; tags and filters workbook has 30 body rows. Reference cells are largely named sources or standards without direct URLs.
- Consultant 5: 35 D2 classification and 25 D3 attribute/filter records are embedded in Markdown code blocks. Each physical record was parsed with Python’s standards-compliant `csv` module, preserving quoted commas and literal Markdown escapes. D2: 31/35 rows have the expected 14 fields; four rows (source lines 451, 453, 454, 463) contain one extra unquoted delimiter in the label. Their label cells were schema-aligned and rejoined in separate parsed columns; all original lines remain verbatim. D3: all 25/25 rows have the expected 10 fields, including quoted comma-containing values. Fully parsed without structural exceptions: 56; partial/schema-aligned: 4; unresolved: 0. No direct URLs or source register file was supplied.
- Consultant 6: recovered D2 workbook/CSV (63 rows each), D3 workbook/CSV (58 each), D4 workbook/CSV (8 each), D5 Markdown, and Source Key CSV (36 references). Companion files match the report attachment manifest and their XLSX/CSV records match after blank-cell normalization. RTF report has 36 numbered reference occurrences.
- Consultant 3 report has 81 embedded hyperlinks; the extracted register includes targets, but anchor text-to-target mapping was not resolved here.
- Consultant 4 PDFs yielded selectable text; URLs were not visible in extracted text. Hyperlink annotations were not inventoried.

## Recovered-file extraction outcomes

| Consultant | Recovered file | Extraction result | Data records |
|---|---|---|---:|
| Consultant 6 | `PEWA-F02-R01_Deliverable-2_Classification-Catalogue.xlsx` | Success; both worksheets read | 63 classifications; 36 source-key rows |
| Consultant 6 | `PEWA-F02-R01_Deliverable-2_Classification-Catalogue.csv` | Success; 14-column CSV parsed | 63 classifications |
| Consultant 6 | `PEWA-F02-R01_Deliverable-3_Tags-and-Filters-Catalogue.xlsx` | Success; both worksheets read | 58 attributes; 36 source-key rows |
| Consultant 6 | `PEWA-F02-R01_Deliverable-3_Tags-and-Filters-Catalogue.csv` | Success; 15-column CSV parsed | 58 attributes |
| Consultant 6 | `PEWA-F02-R01_Deliverable-4_Menu-Structure-Examples.xlsx` | Success; both worksheets read | 8 examples; 36 source-key rows |
| Consultant 6 | `PEWA-F02-R01_Deliverable-4_Menu-Structure-Examples.csv` | Success; 14-column CSV parsed | 8 examples |
| Consultant 6 | `PEWA-F02-R01_Deliverable-5_Reconciliation-and-Gap-Report.md` | Success; Markdown text read | Narrative report; no structured row count |
| Consultant 6 | `PEWA-F02-R01_Source-Key.csv` | Success; 3-column CSV parsed | 36 source references |

## Consultant 5 record-level parsing results

| Deliverable | Records | Structurally valid, semantically unambiguous | Structurally valid, semantically ambiguous | Malformed, partially parsed | Unresolved |
|---|---:|---:|---:|---:|---:|
| D2 classification | 35 | 31 | 0 | 4 | 0 |
| D3 attributes and filters | 25 | 25 | 0 | 0 | 0 |
| **Total** | **60** | **56** | **0** | **4** | **0** |

The four D2 exceptions are source lines 451 (`CL-FD-06`), 453 (`CL-FD-07`), 454 (`CL-FD-08`), and 463 (`CL-BV-05`). Each has 15 CSV fields against a 14-column header because an extra unquoted comma splits the source label. The label cells were rejoined at the schema-defined label position; remaining fields then align to the source header. This is a working interpretation only. The raw source line is retained verbatim, including Markdown backslashes and trailing spaces. No original terminology or source record was changed.

For every Consultant 5 row, source-schema fields are exposed in separately named `Consultant 5 parsed:` columns in the corresponding raw inventory. Structural assessment and semantic interpretation status are recorded independently. The two terminal spaces used as Markdown hard-break markers are excluded from parsed final-field values; they remain present in the verbatim source-record column.

## Comparative catalogue counts by dimension

Counts below distinguish culinary classification rows from non-category dimensions. For Consultant 6, the catalogue count is logical entries in one XLSX/CSV deliverable pair; both representations are present in the raw inventory with separate provenance.

| Consultant | Culinary category/classification rows | Courses / roles | Meal occasions | Cuisines | Structural concepts / rules |
|---|---:|---:|---:|---:|---:|
| Consultant 1 | 8 | 0 | 0 | 0 | 0 |
| Consultant 2 | 6 | 0 | 1 | 0 | 0 |
| Consultant 3 | 165 | 10 | 12 | 17 | 11 |
| Consultant 4 | 39 | 0 | 0 | 0 | 0 |
| Consultant 5 | 35 | 0 | 0 | 0 | 0 |
| Consultant 6 | 59 (40 Family; 19 Category) | 0 | 0 | 0 | 4 structural rules |

## URL occurrence count

The source register now contains **342 URL-bearing reference occurrences**: the previous 198 rows plus 144 occurrences from the recovered Consultant 6 Source Key CSV and its three workbook copies. These are occurrences, not an independently verified unique-source count. URLs and claims were not externally verified.

## Recovered Consultant 6 workbook details

- D2: `Classification Catalogue` 63 rows/14 columns; `Source Key` 36 rows/3 columns.
- D3: `Tags and Filters` 58 rows/15 columns; `Source Key` 36 rows/3 columns.
- D4: `Menu Structure Examples` 8 rows/14 columns; `Source Key` 36 rows/3 columns.
- D2, D3, and D4 CSV counterparts have 63, 58, and 8 records respectively; row values match their workbook sheet after normalizing blank XLSX cells to empty CSV fields.
- Source Key CSV: 36 data rows/3 columns; matching Source Key rows also appear in each of the three workbooks.

## Raw record occurrences and logical catalogue counts

| Consultant | Classification inventory occurrences | Logical culinary classification rows | Attribute/filter occurrences | Logical attribute rows |
|---|---:|---:|---:|---:|
| Consultant 1 | 8 | 8 | 8 | 8 |
| Consultant 2 | 7 | 6 | 5 | 5 |
| Consultant 3 | 215 | 165 | 0 | 0 |
| Consultant 4 | 39 | 39 | 30 | 30 |
| Consultant 5 | 35 | 35 | 25 | 25 |
| Consultant 6 | 126 (XLSX+CSV mirror) | 59 | 116 (XLSX+CSV mirror) | 58 |
| **Total** | **430** | **312** | **184** | **126** |

Consultant 5’s raw D2/D3 source lines are stored verbatim in the raw inventories, alongside separately named parsed source-schema columns. The four malformed D2 records have a transparent schema-aligned label interpretation; no unresolved record fields remain.

## Workbook dimensions

| Consultant | Workbook / worksheet | Non-empty rows incl. header | Body rows | Columns | Header / row 1 |
|---|---|---:|---:|---:|---|
| Consultant 3 | `PEWA-F02-R01_D2_Classification_Catalogue.xlsx` / `Read Me` | 12 | 11 | 2 | PEWA-F02-R01 · Deliverable 2 – Structured Classification Catalogue |
| Consultant 3 | `PEWA-F02-R01_D2_Classification_Catalogue.xlsx` / `Classification Catalogue` | 166 | 165 | 14 | Classification ID; Parent ID; Classification type; Category family; Category / subcategory name; Definition; Inclusion rule; Exclusion rule; Alternative names & synonyms; Regional / cuisine relevance; Applicable business types; Source references; Evidence strength; Proposed status |
| Consultant 3 | `PEWA-F02-R01_D2_Classification_Catalogue.xlsx` / `Course & Role` | 11 | 10 | 9 | ID; Dimension; Value; Definition; Rule / note; Synonyms; Source references; Evidence strength; Proposed status |
| Consultant 3 | `PEWA-F02-R01_D2_Classification_Catalogue.xlsx` / `Meal Occasions` | 13 | 12 | 9 | ID; Dimension; Value; Definition; Rule / note; Synonyms; Source references; Evidence strength; Proposed status |
| Consultant 3 | `PEWA-F02-R01_D2_Classification_Catalogue.xlsx` / `Cuisines` | 18 | 17 | 9 | ID; Dimension; Value; Definition; Rule / note; Synonyms; Source references; Evidence strength; Proposed status |
| Consultant 3 | `PEWA-F02-R01_D2_Classification_Catalogue.xlsx` / `Structure Concepts` | 12 | 11 | 5 | ID; Concept; Definition; Classification rule; Source references |
| Consultant 3 | `PEWA-F02-R01_D2_Classification_Catalogue.xlsx` / `Sources` | 82 | 81 | 6 | Source ID; Title; Publisher / type; URL; Evidence type; What it supports |
| Consultant 4 | `PEWA-F02-R01_Classification_Catalogue.xlsx` / `Classification Catalogue` | 40 | 39 | 14 | Classification ID; Parent ID; Classification Type; Category Family; Category / Subcategory Name; Definition; Inclusion Rules; Exclusion Rules; Alternative Names / Synonyms; Regional / Cuisine Relevance; Applicable Business Types; Source References; Evidence Strength; Proposed Status |
| Consultant 4 | `PEWA-F02-R01_Classification_Catalogue.xlsx` / `Catalogue Notes` | 13 | 12 | 1 | PEWA-F02-R01 Classification Catalogue — Notes |
| Consultant 4 | `PEWA-F02-R01_Tags_Filters_Catalogue.xlsx` / `Tags and Filters` | 31 | 30 | 11 | Attribute ID; Attribute Name; Attribute Type; Definition; Permitted Values / Examples; Synonyms / Regional Names; Search / Filter Relevance; Safety / Governance Notes; Factual vs Claim; Evidence Strength; Proposed Status |
| Consultant 4 | `PEWA-F02-R01_Tags_Filters_Catalogue.xlsx` / `Governance Notes` | 8 | 7 | 1 | PEWA Tags & Filters Catalogue — Governance Notes |
| Consultant 6 | `PEWA-F02-R01_Deliverable-2_Classification-Catalogue.xlsx` / `Classification Catalogue` | 64 | 63 | 14 | Proposed ID; Parent ID; Classification type; Category family; Category / subcategory name; Definition; Inclusion rules; Exclusion rules; Alternative names and synonyms; Regional or cuisine relevance; Applicable business types; Source references; Evidence strength; Proposed status |
| Consultant 6 | same / `Source Key` | 37 | 36 | 3 | Ref; Source; URL |
| Consultant 6 | `PEWA-F02-R01_Deliverable-3_Tags-and-Filters-Catalogue.xlsx` / `Tags and Filters` | 59 | 58 | 15 | Attribute ID; Attribute name; Definition; Applies to; Permitted values; Value governance; Alternative names and synonyms; Search and filter relevance; Trust band; Safety considerations; Regional relevance; Applicable business types; Source references; Evidence strength; Proposed status |
| Consultant 6 | same / `Source Key` | 37 | 36 | 3 | Ref; Source; URL |
| Consultant 6 | `PEWA-F02-R01_Deliverable-4_Menu-Structure-Examples.xlsx` / `Menu Structure Examples` | 9 | 8 | 14 | Example ID; Business archetype; Menu collections; Named menus; Menu types; Service periods; Category families used; Representative observed categories and items; Combos, bundles and modifiers; Item reuse and placement; Dimensions exercised; Notes on applying the model; Evidence basis; Source references |
| Consultant 6 | same / `Source Key` | 37 | 36 | 3 | Ref; Source; URL |
