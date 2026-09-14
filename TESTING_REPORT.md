# Testing Report: BBP & Infection Control Training Tracker V2

Date: 2026-09-15. Run by Poli International against the files in this repository, served locally and driven with Playwright (Chromium). No automated test suite ships with this tool; these are the checks that were actually run.

## The expiry view, which is the reason the tool exists

Three people were added with training dates chosen so the derived expiries land in each window:

| Person | Expiry | Expected | Shown |
|---|---|---|---|
| Cara Lapsed | 10 days ago | lapsed | "● Lapsed 10d ago" |
| Anna Soon | in 20 days | 30-day window | "▲ DUE IN 20d" |
| Ben Later | in 75 days | 90-day window | "■ Due in 75d" |

Cards read: Already lapsed 1, Due in 30 days 1, Due in 60 days 0, Due in 90 days 1. Repeated in German with the same result and German wording. All date arithmetic uses local calendar dates; no UTC slicing.

## Records and renewal cycles

- Add, edit, delete and renew a record: pass.
- Renewal cycle 12 / 24 / 36 months, and a custom figure: a training date of 2025-10-05 with an 18-month cycle gives an expiry of 2027-04-05 and a status of current: pass.
- A blank custom renewal period is refused with a message in the active language, and no record is written. Before this release it silently became 12 months.

## Exports, printing, profiles

- CSV export (full roster and filtered view): BOM present, fields quoted, headers correct.
- CSV import, JSON backup and restore, `.ics` calendar export: pass.
- Print inspection roster: the print header renders and `window.print` is called once.
- Record card for one person: opens, carries the studio name, training date, provider, filing reference and status, and states that it reproduces the studio's own record and is not a certificate.
- Studio profiles: add, switch, rename; each profile keeps its own records.
- Self-check (Inspection Audit Checklist): six checks, reported as "4 of 6 record-keeping checks passed (67%)", with plain wording that it does not assess compliance with any regulation.

## Languages

255 keys in each of English, French, German, Italian, Spanish, Portuguese and Dutch: identical key sets, nothing left in English, no placeholder mismatches. Verified by parsing the dictionaries.

Before this release, 35 keys the code asked for existed in no dictionary, so the audit checklist and the studio profile selector displayed raw key names; and there was no language selector at all, so only a visitor's browser language could reach the other six. Both fixed and re-checked in German end to end.

## Browser behaviour

- No page or console errors in English or German; no horizontal overflow at 1360px or 390px.
- No external hosts, no network calls, no service worker.
- Removed in this release and confirmed absent from the DOM: the compliance donut (which displayed a hard-coded 100%), the QR "inspection verification" modal and its library, the batch-renew and team-email modals.

## Not tested

- Real printing to paper and PDF output quality.
- Screen readers.
- Browsers other than Chromium.
- Importing a CSV produced by a different spreadsheet locale.
