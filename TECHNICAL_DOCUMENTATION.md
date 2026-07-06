# BBP & Infection Control Training Tracker - Technical Documentation

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Data Schemas](#data-schemas)
3. [Calculation / Logic Algorithms](#calculation--logic-algorithms)
4. [API Reference](#api-reference)
5. [Integration Guide](#integration-guide)
6. [Customization](#customization)
7. [Performance](#performance)
8. [Browser Compatibility](#browser-compatibility)
9. [Security](#security)
10. [Version History](#version-history)
11. [Support / Contact](#support--contact)

---

## Architecture Overview

### Technology Stack

- **HTML5**, Semantic markup with ARIA-friendly labels and form elements.
- **CSS3**, Single stylesheet (`/tools/bbp-training-tracker/css/style.css`) for layout, status badges, and responsive table.
- **Vanilla JavaScript (ES6+)**, No frameworks, no libraries, no external dependencies. All logic is contained in a single file (`/tools/bbp-training-tracker/js/app.js`).
- **Web Storage API**, `localStorage` persists all staff records under the key `poli-bbp-tracker`. No server, no database, no account required.

### File Structure

```
/tools/bbp-training-tracker/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

### Component / Logic Breakdown

| Component | File | Role |
|-----------|------|------|
| **Add Staff Form** | `index.html` lines 26–53 | Collects name, certification type, completion date, renewal period, and optional notes. |
| **Records Table** | `index.html` lines 60–72 | Displays all stored records sorted by expiry date (ascending). |
| **Empty State** | `index.html` line 59 | Shown when no records exist. |
| **Control Bar** | `index.html` lines 55–58 | Shows record count, Export CSV button, and Clear All button. |
| **App Logic** | `app.js` | All CRUD operations, sorting, status calculation, CSV export, and localStorage persistence. |

---

## Data Schemas

### localStorage Record Object

Each staff member is stored as a single object in the array under the key `poli-bbp-tracker`.

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `name` | `string` | Staff member's full name | `"Jordan Lee"` |
| `cert` | `string` | Certification type label | `"OSHA BBP (annual)"` |
| `completed` | `string` | Date training was completed (YYYY-MM-DD) | `"2025-01-15"` |
| `expiry` | `string` | Calculated expiry date (YYYY-MM-DD) | `"2026-01-15"` |
| `renewalMonths` | `number` | Number of months until renewal | `12` |
| `notes` | `string` | Optional notes (cert number, provider URL, etc.) | `"Cert #12345"` |

### Example Array (JSON)

```json
[
  {
    "name": "Jordan Lee",
    "cert": "OSHA BBP (annual)",
    "completed": "2025-01-15",
    "expiry": "2026-01-15",
    "renewalMonths": 12,
    "notes": "Cert #12345"
  },
  {
    "name": "Sam Rivera",
    "cert": "Custom (biennial)",
    "completed": "2024-06-01",
    "expiry": "2026-06-01",
    "renewalMonths": 24,
    "notes": ""
  }
]
```

---

## Calculation / Logic Algorithms

### `addMonths(dateStr, months)`

**Purpose:** Calculates the expiry date by adding a given number of months to a start date.

**Steps:**
1. Parse `dateStr` (YYYY-MM-DD) into a `Date` object.
2. Call `d.setMonth(d.getMonth() + months)` to advance the date.
3. Return the new date as a YYYY-MM-DD string via `d.toISOString().slice(0, 10)`.

**Example:** `addMonths("2025-01-15", 12)` returns `"2026-01-15"`.

---

### `getStatus(expiryStr)`

**Purpose:** Determines the compliance status of a certification based on its expiry date relative to today.

**Steps:**
1. Create a `Date` object for today with hours/minutes/seconds/milliseconds zeroed.
2. Create a `Date` object from `expiryStr`.
3. Calculate `daysLeft = Math.round((expiry - today) / 86400000)`.
4. Return an object with:
   - `label`: `"Expired"` if `daysLeft < 0`, `"Expires in {n}d"` if `daysLeft <= 60`, otherwise `"Current"`.
   - `cls`: CSS class string (`"expired"`, `"soon"`, or `"current"`).
   - `daysLeft`: the raw number of days.

**Status Thresholds:**

| Condition | Label | CSS Class |
|-----------|-------|-----------|
| `daysLeft < 0` | `"Expired"` | `expired` |
| `0 <= daysLeft <= 60` | `"Expires in {n}d"` | `soon` |
| `daysLeft > 60` | `"Current"` | `current` |

---

### `render()`

**Purpose:** Reads all records from localStorage, sorts them by expiry date (ascending), and rebuilds the table body. Manages visibility of the empty state vs. the table.

**Steps:**
1. Call `load()` to get the records array.
2. Update the record count display.
3. If no records: hide the table, show the empty state message.
4. If records exist: hide the empty state, show the table.
5. Create a sorted copy of records (with original index preserved as `origIdx`).
6. For each record, call `getStatus()` to determine the status badge.
7. Build HTML rows with `escHtml()` for safe output.
8. Inject rows into `recordsBody.innerHTML`.

---

### `escHtml(s)`

**Purpose:** Prevents XSS by escaping HTML special characters.

**Steps:**
1. Convert input to string.
2. Replace `&` with `&amp;`, `<` with `&lt;`, `>` with `&gt;`, `"` with `&quot;`.
3. Return the escaped string.

---

## API Reference

All functions and event handlers are defined in `app.js`. There is no external API, the tool is fully client-side.

### Public Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `load()` | None | `Array` | Parses and returns the records array from `localStorage` under key `poli-bbp-tracker`. Defaults to `[]`. |
| `save(records)` | `records: Array` | `void` | Serializes the records array to JSON and writes it to `localStorage`. |
| `addMonths(dateStr, months)` | `dateStr: string`, `months: number` | `string` | Returns a YYYY-MM-DD date string offset by the given number of months. |
| `getStatus(expiryStr)` | `expiryStr: string` | `Object` | Returns `{ label, cls, daysLeft }` based on days until expiry. |
| `render()` | None | `void` | Reads, sorts, and displays all records in the table. |
| `escHtml(s)` | `s: any` | `string` | Returns an HTML-escaped string safe for innerHTML. |

### Event Handlers

| Element | Event | Handler Logic |
|---------|-------|---------------|
| `#cert-type` | `change` | If the selected option includes `"biennial"`, set `renewalMonths` to `24`; otherwise set to `12`. |
| `#add-btn` | `click` | Validates form fields, calculates expiry via `addMonths()`, pushes new record, saves to localStorage, resets form, calls `render()`. |
| `#records-body` | `click` (delegated) | If the clicked element is a `.del-btn`, confirms deletion, removes the record at `data-idx`, saves, and calls `render()`. |
| `#export-btn` | `click` | Builds a CSV string with headers (`Name,Certification,Completed,Expires,Renewal Months,Notes`), creates a download link, and triggers download as `bbp-training-records.csv`. |
| `#clear-btn` | `click` | Confirms action, removes `poli-bbp-tracker` from localStorage, calls `render()`. |

---

## Integration Guide

### Standalone Embedding

The tool is fully self-contained and dependency-free. To embed it on your own site:

**Option 1: Direct Link**

Provide a link to the live tool:

```
https://poliinternational.com/tools/bbp-training-tracker/
```

**Option 2: Iframe Embed**

```html
<iframe
  src="https://poliinternational.com/tools/bbp-training-tracker/"
  width="100%"
  height="800"
  style="border: none;"
  title="BBP Training Tracker"
></iframe>
```

The tool detects if it is loaded in an iframe (`window.self !== window.top`) and automatically applies a dark theme. It also listens for `postMessage` events with `{ type: 'poli-theme', light: true/false }` to toggle between light and dark themes.

**Option 3: Self-Hosted Copy**

Copy the three files (`index.html`, `css/style.css`, `js/app.js`) to your own server, preserving the directory structure. No build step or package manager is required.

---

## Customization

### Styling

All visual styles are in `/tools/bbp-training-tracker/css/style.css`. Key classes for customization:

| Class | Purpose |
|-------|---------|
| `.status-badge.expired` | Red badge for expired certifications |
| `.status-badge.soon` | Orange/amber badge for expiring within 60 days |
| `.status-badge.current` | Green badge for current certifications |
| `.add-card` | The "Add Staff Record" form container |
| `.log-table` | The records table |
| `.del-btn` | Delete button for each row |

### Default Renewal Period

The `renewalMonths` input defaults to `12`. When the certification type changes to a `biennial` option, it automatically updates to `24`. You can adjust the default value in `index.html` line 43 (`value="12"`) or in the `change` event handler in `app.js`.

### localStorage Key

To avoid conflicts with other tools, the storage key is `poli-bbp-tracker`. Change this by modifying the `KEY` constant at the top of `app.js`.

---

## Performance

- **Zero network requests** after the initial page load (no CDN, no fonts, no analytics).
- **Minimal DOM manipulation**, the table body is rebuilt only on `render()` calls (add, delete, clear).
- **localStorage operations** are synchronous and instantaneous for the expected data volume (tens to low hundreds of records).
- **No animations, no polling, no timers.**

---

## Browser Compatibility

The tool uses standard ES6+ features and the Web Storage API. It is compatible with:

- Chrome 49+
- Firefox 44+
- Safari 10+
- Edge 14+
- Opera 36+

**Not supported:** Internet Explorer 11 and below (no `String.includes`, no `Array.from`, no `localStorage` in older versions).

---

## Security

### Input Handling

- All user input displayed in the table is passed through `escHtml()` before being inserted into `innerHTML`. This prevents XSS attacks via staff names, notes, or certification labels.
- The CSV export uses proper quoting: each field is wrapped in double quotes, and any existing double quotes are escaped with `""`.
- The `confirm()` dialog is used before destructive actions (delete single record, clear all records).

### Data Privacy

- All data is stored exclusively in the browser's `localStorage`. No data is transmitted to any server, API, or third party.
- The tool sets `<meta name="robots" content="noindex, nofollow">` to prevent search engine indexing of the tool page.

### Limitations

- `localStorage` is origin-specific and can be cleared by the user at any time.
- No authentication, encryption, or backup mechanism is provided.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-01-15 | Initial release. Add, delete, sort, status badges, CSV export, localStorage persistence. |

---

## Support / Contact

For questions, bug reports, or feature requests related to this tool:

**Email:** support@poliinternational.com

**Website:** [https://poliinternational.com](https://poliinternational.com)
