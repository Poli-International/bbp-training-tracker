const KEY = 'poli-bbp-tracker';
const staffName = document.getElementById('staff-name');
const certType = document.getElementById('cert-type');
const completedDate = document.getElementById('completed-date');
const renewalMonths = document.getElementById('renewal-months');
const recordNotes = document.getElementById('record-notes');
const addBtn = document.getElementById('add-btn');
const exportBtn = document.getElementById('export-btn');
const clearBtn = document.getElementById('clear-btn');
const recordsBody = document.getElementById('records-body');
const recordsTable = document.getElementById('records-table');
const emptyState = document.getElementById('empty-state');
const logCount = document.getElementById('log-count');

completedDate.value = new Date().toISOString().slice(0, 10);

certType.addEventListener('change', () => {
  if (certType.value.includes('biennial')) renewalMonths.value = 24;
  else if (certType.value) renewalMonths.value = 12;
});

function load() { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
function save(r) { localStorage.setItem(KEY, JSON.stringify(r)); }
function escHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function addMonths(dateStr, months) {
  const d = new Date(dateStr);
  d.setMonth(d.getMonth() + months);
  return d.toISOString().slice(0, 10);
}

function getStatus(expiryStr) {
  const today = new Date(); today.setHours(0,0,0,0);
  const expiry = new Date(expiryStr);
  const daysLeft = Math.round((expiry - today) / 86400000);
  if (daysLeft < 0) return { label: 'Expired', cls: 'expired', daysLeft };
  if (daysLeft <= 60) return { label: `Expires in ${daysLeft}d`, cls: 'soon', daysLeft };
  return { label: 'Current', cls: 'current', daysLeft };
}

function render() {
  const records = load();
  logCount.textContent = records.length ? `${records.length} staff member${records.length === 1 ? '' : 's'}` : '';
  if (!records.length) { emptyState.style.display = ''; recordsTable.style.display = 'none'; return; }
  emptyState.style.display = 'none';
  recordsTable.style.display = '';

  const sorted = [...records].map((r, i) => ({ ...r, origIdx: i }))
    .sort((a, b) => new Date(a.expiry) - new Date(b.expiry));

  recordsBody.innerHTML = sorted.map(r => {
    const st = getStatus(r.expiry);
    return `<tr>
      <td>${escHtml(r.name)}</td>
      <td>${escHtml(r.cert)}</td>
      <td>${escHtml(r.completed)}</td>
      <td>${escHtml(r.expiry)}</td>
      <td><span class="status-badge ${st.cls}">${escHtml(st.label)}</span></td>
      <td class="notes-cell" title="${escHtml(r.notes)}">${escHtml(r.notes || '—')}</td>
      <td><button class="del-btn" data-idx="${r.origIdx}" title="Delete">×</button></td>
    </tr>`;
  }).join('');
}

addBtn.addEventListener('click', () => {
  const name = staffName.value.trim();
  const cert = certType.value;
  const completed = completedDate.value;
  const months = parseInt(renewalMonths.value, 10);
  if (!name || !cert || !completed || !months) { alert('Please fill in Name, Certification, Date, and Renewal months.'); return; }
  const expiry = addMonths(completed, months);
  const records = load();
  records.push({ name, cert, completed, expiry, renewalMonths: months, notes: recordNotes.value.trim() });
  save(records);
  staffName.value = '';
  certType.value = '';
  recordNotes.value = '';
  renewalMonths.value = 12;
  render();
});

recordsBody.addEventListener('click', (e) => {
  const btn = e.target.closest('.del-btn');
  if (!btn) return;
  if (!confirm('Remove this staff record?')) return;
  const idx = parseInt(btn.dataset.idx, 10);
  const records = load();
  records.splice(idx, 1);
  save(records);
  render();
});

exportBtn.addEventListener('click', () => {
  const records = load();
  if (!records.length) { alert('No records to export.'); return; }
  const header = 'Name,Certification,Completed,Expires,Renewal Months,Notes';
  const rows = records.map(r =>
    [r.name, r.cert, r.completed, r.expiry, r.renewalMonths, r.notes]
      .map(v => `"${String(v).replace(/"/g,'""')}"`)
      .join(',')
  );
  const csv = [header, ...rows].join('\n');
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
  a.download = 'bbp-training-records.csv';
  a.click();
});

clearBtn.addEventListener('click', () => {
  if (!confirm('Clear all staff records? This cannot be undone.')) return;
  localStorage.removeItem(KEY);
  render();
});

render();
