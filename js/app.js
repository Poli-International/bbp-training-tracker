/**
 * Bloodborne Pathogen Training Tracker V2
 * Pure client-side JavaScript. Zero external dependencies.
 * Respects strict Content-Security-Policy script-src 'self'.
 */

(function() {
  'use strict';

  // Storage Keys
  const STORAGE_KEY = 'poli-bbp-tracker';
  const STUDIO_KEY = 'poli-bbp-studio-name';
  const PROFILES_STORAGE_KEY = 'poli-bbp-profiles';
  const ACTIVE_PROFILE_KEY = 'poli-bbp-active-profile';

  // Translation helper shorthand
  const t = (key, params) => window.t ? window.t(key, params) : key;

  // DOM Elements - Navigation & Theme
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const auditChecklistBtn = document.getElementById('audit-checklist-btn');

  // DOM Elements - Profile Switcher
  const profileSelect = document.getElementById('profile-select');
  const activeProfileNameEl = document.getElementById('active-profile-name');
  const btnAddProfile = document.getElementById('btn-add-profile');
  const btnManageProfile = document.getElementById('btn-manage-profile');

  // DOM Elements - Profile Modals
  const profileAddModal = document.getElementById('profile-add-modal');
  const newProfileNameInput = document.getElementById('new-profile-name-input');
  const profileAddCancelBtn = document.getElementById('profile-add-cancel-btn');
  const profileAddConfirmBtn = document.getElementById('profile-add-confirm-btn');

  const profileManageModal = document.getElementById('profile-manage-modal');
  const manageProfileNameInput = document.getElementById('manage-profile-name-input');
  const profileRenameBtn = document.getElementById('profile-rename-btn');
  const profileDeleteBtn = document.getElementById('profile-delete-btn');
  const profileManageCloseBtn = document.getElementById('profile-manage-close-btn');

  // DOM Elements - Expiry Summary Cards
  const countTotalEl = document.getElementById('count-total');
  const countLapsedEl = document.getElementById('count-lapsed');
  const count30El = document.getElementById('count-30');
  const count60El = document.getElementById('count-60');
  const count90El = document.getElementById('count-90');
  const filterCards = document.querySelectorAll('.filter-card');
  const filterPills = document.querySelectorAll('.pill-btn');

  // DOM Elements - Form
  const recordForm = document.getElementById('training-record-form');
  const formCardTitle = document.getElementById('form-card-title');
  const editRecordIdInput = document.getElementById('edit-record-id');
  const cancelEditBtn = document.getElementById('cancel-edit-btn');
  const staffNameInput = document.getElementById('staff-name');
  const staffRoleInput = document.getElementById('staff-role');
  const trainingDateInput = document.getElementById('training-date');
  const trainingProviderInput = document.getElementById('training-provider');
  const renewalPeriodSelect = document.getElementById('renewal-period');
  const customRenewalMonthsInput = document.getElementById('custom-renewal-months');
  const filingRefInput = document.getElementById('filing-ref');
  const recordNotesInput = document.getElementById('record-notes');
  const submitRecordBtn = document.getElementById('submit-record-btn');

  // DOM Elements - Datalists
  const roleSuggestionsDatalist = document.getElementById('role-suggestions');
  const providerSuggestionsDatalist = document.getElementById('provider-suggestions');

  // DOM Elements - Roster Controls & Actions
  const staffSearchInput = document.getElementById('staff-search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const searchResultsCount = document.getElementById('search-results-count');
  const sortableThs = document.querySelectorAll('.sortable-th');

  const studioNameInput = document.getElementById('studio-name-input');
  const printRosterBtn = document.getElementById('print-roster-btn');
  const exportCsvBtn = document.getElementById('export-csv-btn');
  const exportIcsBtn = document.getElementById('export-ics-btn');
  const importCsvBtn = document.getElementById('import-csv-btn');
  const backupJsonBtn = document.getElementById('backup-json-btn');
  const restoreJsonBtn = document.getElementById('restore-json-btn');
  const clearAllBtn = document.getElementById('clear-all-btn');

  // DOM Elements - Table
  const rosterTbody = document.getElementById('roster-tbody');
  const emptyStateNotice = document.getElementById('empty-state-notice');
  const emptyStateText = document.getElementById('empty-state-text');
  const printDateDisplay = document.getElementById('print-date-display');
  const printStudioDisplay = document.getElementById('print-studio-display');

  // DOM Elements - Modals & Toasts
  const toastContainer = document.getElementById('toast-container');
  const confirmModalOverlay = document.getElementById('confirm-modal-overlay');
  const confirmModalTitle = document.getElementById('confirm-modal-title');
  const confirmModalMsg = document.getElementById('confirm-modal-msg');
  const confirmCancelBtn = document.getElementById('confirm-cancel-btn');
  const confirmOkBtn = document.getElementById('confirm-ok-btn');

  const exportModalOverlay = document.getElementById('export-modal-overlay');
  const exportCloseX = document.getElementById('export-close-x');
  const exportCancelBtn = document.getElementById('export-cancel-btn');
  const exportConfirmBtn = document.getElementById('export-confirm-btn');
  const exportOptFullLabel = document.getElementById('export-opt-full-label');
  const exportOptFilteredLabel = document.getElementById('export-opt-filtered-label');

  const importModalOverlay = document.getElementById('import-modal-overlay');
  const importCloseX = document.getElementById('import-close-x');
  const importCancelBtn = document.getElementById('import-cancel-btn');
  const importConfirmBtn = document.getElementById('import-confirm-btn');
  const csvDropzone = document.getElementById('csv-dropzone');
  const csvFileInput = document.getElementById('csv-file-input');
  const importPreviewSection = document.getElementById('import-preview-section');
  const previewCountText = document.getElementById('preview-count-text');

  // DOM Elements - JSON Restore Modal
  const restoreModalOverlay = document.getElementById('restore-modal-overlay');
  const restoreCloseX = document.getElementById('restore-close-x');
  const restoreCancelBtn = document.getElementById('restore-cancel-btn');
  const restoreConfirmBtn = document.getElementById('restore-confirm-btn');
  const restoreDropzone = document.getElementById('restore-dropzone');
  const restoreFileInput = document.getElementById('restore-file-input');
  const restorePreviewSection = document.getElementById('restore-preview-section');
  const restorePreviewCountText = document.getElementById('restore-preview-count-text');

  // DOM Elements - Pass Modal
  const passModalOverlay = document.getElementById('pass-modal-overlay');
  const passCloseX = document.getElementById('pass-close-x');
  const passCloseBtn = document.getElementById('pass-close-btn');
  const passPrintBtn = document.getElementById('pass-print-btn');
  const passStudioName = document.getElementById('pass-studio-name');
  const passStaffName = document.getElementById('pass-staff-name');
  const passStaffRole = document.getElementById('pass-staff-role');
  const passStatusBadge = document.getElementById('pass-status-badge');
  const passCompletedDate = document.getElementById('pass-completed-date');
  const passExpiryDate = document.getElementById('pass-expiry-date');
  const passRenewalCycle = document.getElementById('pass-renewal-cycle');
  const passProvider = document.getElementById('pass-provider');
  const passFilingRef = document.getElementById('pass-filing-ref');

  // DOM Elements - Audit Modal
  const auditModalOverlay = document.getElementById('audit-modal-overlay');
  const auditCloseX = document.getElementById('audit-close-x');
  const auditCloseBtn = document.getElementById('audit-close-btn');
  const auditPrintBtn = document.getElementById('audit-print-btn');
  const auditOverallBadge = document.getElementById('audit-overall-badge');
  const auditProgressBar = document.getElementById('audit-progress-bar');
  const auditScoreSummary = document.getElementById('audit-score-summary');
  const auditListContainer = document.getElementById('audit-list-container');

  // Application State
  let activeFilter = 'all'; // 'all', 'lapsed', '30', '60', '90', 'current'
  let searchQuery = '';
  let sortColumn = null; // 'name', 'date', 'expiry'
  let sortDirection = 'asc'; // 'asc', 'desc'
  let parsedImportRecords = [];
  let parsedRestoreData = null;
  let pendingConfirmAction = null;

  // --- Date Helpers (Ban 19: Local Dates, Zero UTC Drift) ---
  function getLocalDateString(d = new Date()) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function addMonthsToLocalDate(dateStr, months) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const d = new Date(year, month, day);
    d.setMonth(d.getMonth() + months);
    return getLocalDateString(d);
  }

  function getDaysRemaining(expiryStr) {
    if (!expiryStr) return 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const parts = expiryStr.split('-');
    if (parts.length !== 3) return 0;
    const expiry = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    expiry.setHours(0, 0, 0, 0);
    return Math.round((expiry - today) / 86400000);
  }

  function formatDisplayDate(dateStr) {
    if (!dateStr) return '-';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    return `${parts[0]}-${parts[1]}-${parts[2]}`;
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // --- Multi-Location & Studio Profile Engine ---
  function getProfiles() {
    try {
      const raw = localStorage.getItem(PROFILES_STORAGE_KEY);
      if (!raw) {
        return [{ id: 'default', name: t('profile.defaultProfileName') }];
      }
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
      return [{ id: 'default', name: t('profile.defaultProfileName') }];
    } catch (e) {
      return [{ id: 'default', name: t('profile.defaultProfileName') }];
    }
  }

  function saveProfiles(profiles) {
    try {
      localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(profiles));
    } catch (e) {
      console.error('Error saving profiles:', e);
    }
  }

  function getActiveProfileId() {
    return localStorage.getItem(ACTIVE_PROFILE_KEY) || 'default';
  }

  function setActiveProfileId(id) {
    localStorage.setItem(ACTIVE_PROFILE_KEY, id);
  }

  function getProfileStorageKey(profileId) {
    return profileId === 'default' ? STORAGE_KEY : `${STORAGE_KEY}_${profileId}`;
  }

  function getProfileStudioKey(profileId) {
    return profileId === 'default' ? STUDIO_KEY : `${STUDIO_KEY}_${profileId}`;
  }

  // --- Data Persistence ---
  function loadRecordsForProfile(profileId) {
    try {
      const key = getProfileStorageKey(profileId);
      const raw = localStorage.getItem(key);
      if (!raw) return [];
      const data = JSON.parse(raw);
      if (!Array.isArray(data)) return [];
      return data.map((rec, index) => {
        const id = rec.id || `rec_${Date.now()}_${index}`;
        const name = (rec.name || '').trim();
        const role = (rec.role || '').trim();
        const completed = rec.completed || rec.trainingDate || getLocalDateString();
        const provider = (rec.provider || rec.cert || '').trim();
        const renewalMonths = parseInt(rec.renewalMonths, 10) || 12;
        const expiry = rec.expiry || addMonthsToLocalDate(completed, renewalMonths);
        const filingRef = (rec.filingRef || rec.filingReference || '').trim();
        const notes = (rec.notes || '').trim();
        return { id, name, role, completed, provider, renewalMonths, expiry, filingRef, notes };
      });
    } catch (e) {
      console.error('Error loading records for profile:', profileId, e);
      return [];
    }
  }

  function loadRecords() {
    return loadRecordsForProfile(getActiveProfileId());
  }

  function saveRecordsForProfile(profileId, records) {
    try {
      const key = getProfileStorageKey(profileId);
      localStorage.setItem(key, JSON.stringify(records));
      updateDatalistSuggestions();
    } catch (e) {
      console.error('Error saving records for profile:', profileId, e);
    }
  }

  function saveRecords(records) {
    saveRecordsForProfile(getActiveProfileId(), records);
  }

  function loadStudioForProfile(profileId) {
    return localStorage.getItem(getProfileStudioKey(profileId)) || '';
  }

  function saveStudioForProfile(profileId, studioName) {
    localStorage.setItem(getProfileStudioKey(profileId), studioName);
  }

  // --- Freeform Datalist Suggestions Engine ---
  function updateDatalistSuggestions() {
    if (!roleSuggestionsDatalist || !providerSuggestionsDatalist) return;

    const standardRoles = [
      'Body Piercer',
      'Tattoo Artist',
      'Counter Staff',
      'Apprentice Piercer',
      'Studio Manager',
      'Guest Artist',
      'Sterilization Technician'
    ];

    const standardProviders = [
      'American Red Cross',
      'ProTrainings',
      'National CPR Foundation',
      'Medic First Aid',
      'Local Health Department',
      'Cathy Montie Environmental Health',
      'Body Art Training Group'
    ];

    const currentRecords = loadRecords();
    const existingRoles = currentRecords.map(r => r.role).filter(Boolean);
    const existingProviders = currentRecords.map(r => r.provider).filter(Boolean);

    const mergedRoles = Array.from(new Set([...standardRoles, ...existingRoles])).sort();
    const mergedProviders = Array.from(new Set([...standardProviders, ...existingProviders])).sort();

    roleSuggestionsDatalist.innerHTML = mergedRoles.map(role => `<option value="${escapeHtml(role)}"></option>`).join('');
    providerSuggestionsDatalist.innerHTML = mergedProviders.map(prov => `<option value="${escapeHtml(prov)}"></option>`).join('');
  }

  // --- Status & Horizon Engine ---
  function getStatusInfo(expiryStr) {
    const days = getDaysRemaining(expiryStr);
    if (days < 0) {
      return {
        key: 'lapsed',
        category: 'lapsed',
        symbol: '●',
        badgeClass: 'status-badge-lapsed',
        daysLeft: days,
        label: t('status.lapsedDays', { days: Math.abs(days) })
      };
    }
    if (days === 0) {
      return {
        key: 'today',
        category: 'lapsed',
        symbol: '●',
        badgeClass: 'status-badge-lapsed',
        daysLeft: 0,
        label: t('status.today')
      };
    }
    if (days <= 30) {
      return {
        key: '30',
        category: '30',
        symbol: '▲',
        badgeClass: 'status-badge-30',
        daysLeft: days,
        label: t('status.dueWithin30', { days: days })
      };
    }
    if (days <= 60) {
      return {
        key: '60',
        category: '60',
        symbol: '◆',
        badgeClass: 'status-badge-60',
        daysLeft: days,
        label: t('status.dueWithin60', { days: days })
      };
    }
    if (days <= 90) {
      return {
        key: '90',
        category: '90',
        symbol: '■',
        badgeClass: 'status-badge-90',
        daysLeft: days,
        label: t('status.dueWithin90', { days: days })
      };
    }
    return {
      key: 'current',
      category: 'current',
      symbol: '✓',
      badgeClass: 'status-badge-current',
      daysLeft: days,
      label: t('status.current', { days: days })
    };
  }

  function matchesFilter(rec, filter) {
    const status = getStatusInfo(rec.expiry);
    if (filter === 'all') return true;
    if (filter === 'lapsed') return status.daysLeft <= 0;
    if (filter === '30') return status.daysLeft >= 0 && status.daysLeft <= 30;
    if (filter === '60') return status.daysLeft > 30 && status.daysLeft <= 60;
    if (filter === '90') return status.daysLeft > 60 && status.daysLeft <= 90;
    if (filter === 'current') return status.daysLeft > 90;
    return true;
  }

  // --- Rendering Functions ---
  function updateSummaryCounts(records) {
    let lapsed = 0;
    let within30 = 0;
    let within60 = 0;
    let within90 = 0;

    records.forEach(rec => {
      const days = getDaysRemaining(rec.expiry);
      if (days <= 0) {
        lapsed++;
      } else if (days <= 30) {
        within30++;
      } else if (days <= 60) {
        within60++;
      } else if (days <= 90) {
        within90++;
      }
    });

    countTotalEl.textContent = records.length;
    countLapsedEl.textContent = lapsed;
    count30El.textContent = within30;
    count60El.textContent = within60;
    count90El.textContent = within90;
  }

  function getFilteredAndSortedRecords() {
    const allRecords = loadRecords();
    const q = searchQuery.toLowerCase();

    let result = allRecords.filter(rec => {
      const passHorizon = matchesFilter(rec, activeFilter);
      if (!passHorizon) return false;
      if (!q) return true;
      const nameMatch = rec.name.toLowerCase().includes(q);
      const roleMatch = rec.role && rec.role.toLowerCase().includes(q);
      return nameMatch || roleMatch;
    });

    if (sortColumn === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }) * (sortDirection === 'asc' ? 1 : -1));
    } else if (sortColumn === 'date') {
      result.sort((a, b) => a.completed.localeCompare(b.completed) * (sortDirection === 'asc' ? 1 : -1));
    } else if (sortColumn === 'expiry') {
      result.sort((a, b) => a.expiry.localeCompare(b.expiry) * (sortDirection === 'asc' ? 1 : -1));
    } else {
      // Default: sort by expiration date ascending (most urgent first)
      result.sort((a, b) => a.expiry.localeCompare(b.expiry));
    }

    return result;
  }

  function renderTable() {
    const allRecords = loadRecords();
    updateSummaryCounts(allRecords);

    // Sync active state in filter cards and pills
    filterCards.forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-filter') === activeFilter);
    });
    filterPills.forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-filter') === activeFilter);
    });

    // Update sortable header indicators and aria-sort
    sortableThs.forEach(th => {
      const col = th.getAttribute('data-sort');
      const indicator = th.querySelector('.sort-indicator');
      if (col === sortColumn) {
        th.setAttribute('aria-sort', sortDirection === 'asc' ? 'ascending' : 'descending');
        if (indicator) indicator.textContent = sortDirection === 'asc' ? '▲' : '▼';
      } else {
        th.setAttribute('aria-sort', 'none');
        if (indicator) indicator.textContent = '↕';
      }
    });

    // Update search clear button and count label
    if (searchQuery) {
      searchClearBtn.style.display = 'inline-flex';
    } else {
      searchClearBtn.style.display = 'none';
    }

    const filtered = getFilteredAndSortedRecords();

    if (searchQuery) {
      searchResultsCount.textContent = t('search.resultsCount', { count: filtered.length });
    } else {
      searchResultsCount.textContent = '';
    }

    if (allRecords.length === 0) {
      emptyStateNotice.style.display = 'block';
      emptyStateText.textContent = t('table.emptyState');
      rosterTbody.innerHTML = '';
      return;
    }

    if (filtered.length === 0) {
      emptyStateNotice.style.display = 'block';
      emptyStateText.textContent = searchQuery ? t('table.emptySearch') : t('table.emptyFilter');
      rosterTbody.innerHTML = '';
      return;
    }

    emptyStateNotice.style.display = 'none';

    rosterTbody.innerHTML = filtered.map(rec => {
      const status = getStatusInfo(rec.expiry);
      const roleHtml = rec.role ? `<span class="person-role">${escapeHtml(rec.role)}</span>` : '';
      const filingDisplay = rec.filingRef ? escapeHtml(rec.filingRef) : '-';
      const notesDisplay = rec.notes ? escapeHtml(rec.notes) : '-';

      return `
        <tr data-id="${escapeHtml(rec.id)}">
          <td class="person-cell" data-label="${t('table.colName')}">
            <span class="person-name">${escapeHtml(rec.name)}</span>
            ${roleHtml}
          </td>
          <td class="provider-cell" data-label="${t('table.colProvider')}">${escapeHtml(rec.provider)}</td>
          <td class="date-cell" data-label="${t('table.colDate')}">${formatDisplayDate(rec.completed)}</td>
          <td class="expiry-cell" data-label="${t('table.colExpiry')}">${formatDisplayDate(rec.expiry)}</td>
          <td data-label="${t('table.colStatus')}">
            <span class="badge-status ${status.badgeClass}">
              <span class="status-symbol" aria-hidden="true">${status.symbol}</span>
              <span class="status-text">${escapeHtml(status.label)}</span>
            </span>
          </td>
          <td class="filing-cell" data-label="${t('table.colFiling')}" title="${escapeHtml(rec.filingRef)}">${filingDisplay}</td>
          <td class="notes-cell" data-label="${t('table.colNotes')}" title="${escapeHtml(rec.notes)}">${notesDisplay}</td>
          <td class="actions-cell no-print" data-label="${t('table.colActions')}">
            <button type="button" class="row-action-btn row-action-renew" data-id="${escapeHtml(rec.id)}" aria-label="${t('table.actionRenew')} ${escapeHtml(rec.name)}" title="${t('table.actionRenew')}">${t('table.actionRenew')}</button>
            <button type="button" class="row-action-btn row-action-cal" data-id="${escapeHtml(rec.id)}" aria-label="${t('table.actionCalendar')} ${escapeHtml(rec.name)}" title="${t('table.actionCalendar')}">${t('table.actionCalendar')}</button>
            <button type="button" class="row-action-btn row-action-pass" data-id="${escapeHtml(rec.id)}" aria-label="${t('table.actionPass')} ${escapeHtml(rec.name)}" title="${t('table.actionPass')}">${t('table.actionPass')}</button>
            <button type="button" class="row-action-btn row-action-edit" data-id="${escapeHtml(rec.id)}" aria-label="${t('table.actionEdit')} ${escapeHtml(rec.name)}" title="${t('table.actionEdit')}">${t('table.actionEdit')}</button>
            <button type="button" class="row-action-btn row-action-del" data-id="${escapeHtml(rec.id)}" aria-label="${t('table.actionDelete')} ${escapeHtml(rec.name)}" title="${t('table.actionDelete')}">${t('table.actionDelete')}</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // --- UI Toast & Modals ---
  function showToast(message, isDanger = false) {
    const toast = document.createElement('div');
    toast.className = `toast-item ${isDanger ? 'toast-item-danger' : ''}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.2s ease-out';
      setTimeout(() => toast.remove(), 250);
    }, 3500);
  }

  function openConfirmModal(title, msg, onConfirm) {
    confirmModalTitle.textContent = title;
    confirmModalMsg.textContent = msg;
    pendingConfirmAction = onConfirm;
    confirmModalOverlay.style.display = 'flex';
  }

  function closeConfirmModal() {
    confirmModalOverlay.style.display = 'none';
    pendingConfirmAction = null;
  }

  confirmCancelBtn.addEventListener('click', closeConfirmModal);
  confirmOkBtn.addEventListener('click', () => {
    if (typeof pendingConfirmAction === 'function') {
      pendingConfirmAction();
    }
    closeConfirmModal();
  });

  // --- Form Handling (Add / Edit) ---
  function resetForm() {
    recordForm.reset();
    editRecordIdInput.value = '';
    formCardTitle.textContent = t('form.title');
    submitRecordBtn.textContent = t('form.submitAdd');
    cancelEditBtn.style.display = 'none';
    renewalPeriodSelect.value = '12';
    customRenewalMonthsInput.style.display = 'none';
    customRenewalMonthsInput.value = '12';
    trainingDateInput.value = getLocalDateString();
  }

  renewalPeriodSelect.addEventListener('change', () => {
    if (renewalPeriodSelect.value === 'custom') {
      customRenewalMonthsInput.style.display = 'block';
      customRenewalMonthsInput.focus();
    } else {
      customRenewalMonthsInput.style.display = 'none';
    }
  });

  cancelEditBtn.addEventListener('click', resetForm);

  recordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = staffNameInput.value.trim();
    const role = staffRoleInput.value.trim();
    const completed = trainingDateInput.value;
    const provider = trainingProviderInput.value.trim();
    const filingRef = filingRefInput.value.trim();
    const notes = recordNotesInput.value.trim();

    // A renewal period is the studio's own policy: it is never assumed here.
    let months;
    if (renewalPeriodSelect.value === 'custom') {
      months = parseInt(customRenewalMonthsInput.value, 10);
      if (!Number.isFinite(months) || months < 1 || months > 120) {
        showToast(t('form.errCustomRenewal'), true);
        return;
      }
    } else {
      months = parseInt(renewalPeriodSelect.value, 10);
    }

    if (!name || !completed || !provider || !Number.isFinite(months) || months <= 0) {
      showToast(t('toasts.validationError'), true);
      return;
    }

    const expiry = addMonthsToLocalDate(completed, months);
    const records = loadRecords();
    const editId = editRecordIdInput.value;

    if (editId) {
      // Edit existing record
      const idx = records.findIndex(r => r.id === editId);
      if (idx !== -1) {
        records[idx] = { id: editId, name, role, completed, provider, renewalMonths: months, expiry, filingRef, notes };
        saveRecords(records);
        showToast(t('toasts.recordUpdated', { name }));
      }
    } else {
      // Add new record
      const newRec = {
        id: `rec_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        name,
        role,
        completed,
        provider,
        renewalMonths: months,
        expiry,
        filingRef,
        notes
      };
      records.push(newRec);
      saveRecords(records);
      showToast(t('toasts.recordAdded', { name }));
    }

    resetForm();
    renderTable();
  });

  // Table row action delegation (Renew / Calendar / Pass / Edit / Delete)
  rosterTbody.addEventListener('click', (e) => {
    const renewBtn = e.target.closest('.row-action-renew');
    const calBtn = e.target.closest('.row-action-cal');
    const passBtn = e.target.closest('.row-action-pass');
    const editBtn = e.target.closest('.row-action-edit');
    const delBtn = e.target.closest('.row-action-del');

    if (renewBtn) {
      const id = renewBtn.getAttribute('data-id');
      const records = loadRecords();
      const rec = records.find(r => r.id === id);
      if (!rec) return;

      editRecordIdInput.value = rec.id;
      staffNameInput.value = rec.name;
      staffRoleInput.value = rec.role || '';
      trainingDateInput.value = getLocalDateString();
      trainingProviderInput.value = rec.provider;
      filingRefInput.value = rec.filingRef || '';
      recordNotesInput.value = rec.notes || '';

      const m = rec.renewalMonths || 12;
      if (m === 12 || m === 24 || m === 36) {
        renewalPeriodSelect.value = String(m);
        customRenewalMonthsInput.style.display = 'none';
      } else {
        renewalPeriodSelect.value = 'custom';
        customRenewalMonthsInput.style.display = 'block';
        customRenewalMonthsInput.value = m;
      }

      formCardTitle.textContent = t('form.renewTitle', { name: rec.name });
      submitRecordBtn.textContent = t('form.submitRenew');
      cancelEditBtn.style.display = 'inline-block';
      recordForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      trainingDateInput.focus();
      showToast(t('toasts.quickRenewReady', { name: rec.name }));
      return;
    }

    if (calBtn) {
      const id = calBtn.getAttribute('data-id');
      const records = loadRecords();
      const rec = records.find(r => r.id === id);
      if (!rec) return;
      const studioName = studioNameInput.value.trim() || t('print.defaultStudio');
      downloadIcsCalendar([rec], `bbp-renewal-${rec.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.ics`, studioName);
      return;
    }

    if (passBtn) {
      const id = passBtn.getAttribute('data-id');
      const records = loadRecords();
      const rec = records.find(r => r.id === id);
      if (!rec) return;
      openPassModal(rec);
      return;
    }

    if (editBtn) {
      const id = editBtn.getAttribute('data-id');
      const records = loadRecords();
      const rec = records.find(r => r.id === id);
      if (!rec) return;

      editRecordIdInput.value = rec.id;
      staffNameInput.value = rec.name;
      staffRoleInput.value = rec.role || '';
      trainingDateInput.value = rec.completed;
      trainingProviderInput.value = rec.provider;
      filingRefInput.value = rec.filingRef || '';
      recordNotesInput.value = rec.notes || '';

      const m = rec.renewalMonths || 12;
      if (m === 12 || m === 24 || m === 36) {
        renewalPeriodSelect.value = String(m);
        customRenewalMonthsInput.style.display = 'none';
      } else {
        renewalPeriodSelect.value = 'custom';
        customRenewalMonthsInput.style.display = 'block';
        customRenewalMonthsInput.value = m;
      }

      formCardTitle.textContent = t('form.editTitle');
      submitRecordBtn.textContent = t('form.submitUpdate');
      cancelEditBtn.style.display = 'inline-block';
      recordForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      staffNameInput.focus();
      return;
    }

    if (delBtn) {
      const id = delBtn.getAttribute('data-id');
      const records = loadRecords();
      const rec = records.find(r => r.id === id);
      if (!rec) return;

      openConfirmModal(
        t('confirm.deleteTitle'),
        t('confirm.deleteMsg', { name: rec.name }),
        () => {
          const updated = records.filter(r => r.id !== id);
          saveRecords(updated);
          showToast(t('toasts.recordDeleted'));
          renderTable();
        }
      );
    }
  });

  // --- Filtering Handlers ---
  function setFilter(filterKey) {
    activeFilter = filterKey;
    renderTable();
  }

  filterCards.forEach(card => {
    card.addEventListener('click', () => {
      const f = card.getAttribute('data-filter');
      if (f) setFilter(f);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const f = card.getAttribute('data-filter');
        if (f) setFilter(f);
      }
    });
  });

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const f = pill.getAttribute('data-filter');
      if (f) setFilter(f);
    });
  });

  // --- Search Bar Handlers ---
  staffSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderTable();
  });

  searchClearBtn.addEventListener('click', () => {
    staffSearchInput.value = '';
    searchQuery = '';
    staffSearchInput.focus();
    renderTable();
  });

  // --- Sortable Table Header Handlers ---
  function handleSort(column) {
    if (sortColumn === column) {
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn = column;
      sortDirection = 'asc';
    }
    renderTable();
  }

  sortableThs.forEach(th => {
    const col = th.getAttribute('data-sort');
    th.addEventListener('click', () => handleSort(col));
    th.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSort(col);
      }
    });
  });

  // --- Clear All Records ---
  clearAllBtn.addEventListener('click', () => {
    const records = loadRecords();
    if (records.length === 0) return;

    openConfirmModal(
      t('confirm.clearTitle'),
      t('confirm.clearMsg'),
      () => {
        saveRecords([]);
        resetForm();
        renderTable();
        showToast(t('toasts.allCleared'));
      }
    );
  });

  // --- Print Roster for Inspection ---
  function prepareAndPrintRoster() {
    const studioName = studioNameInput.value.trim() || t('print.defaultStudio');
    localStorage.setItem(STUDIO_KEY, studioName);
    printStudioDisplay.textContent = studioName;
    printDateDisplay.textContent = formatDisplayDate(getLocalDateString());

    // Print all records regardless of UI active filter
    const previousFilter = activeFilter;
    const previousSearch = searchQuery;
    activeFilter = 'all';
    searchQuery = '';
    renderTable();

    window.print();

    // Restore user filter and search
    activeFilter = previousFilter;
    searchQuery = previousSearch;
    renderTable();
  }

  printRosterBtn.addEventListener('click', prepareAndPrintRoster);
  studioNameInput.addEventListener('change', () => {
    localStorage.setItem(STUDIO_KEY, studioNameInput.value.trim());
  });

  // --- CSV Export (RFC-4180 Compliant with Scope Selection) ---
  function downloadCsv(recordsToExport, isFiltered = false) {
    if (recordsToExport.length === 0) {
      showToast(t('toasts.noExportRecords'), true);
      return;
    }

    const headers = [
      t('csv.headerName'),
      t('csv.headerRole'),
      t('csv.headerDate'),
      t('csv.headerProvider'),
      t('csv.headerExpiry'),
      t('csv.headerRenewalMonths'),
      t('csv.headerFilingRef'),
      t('csv.headerNotes')
    ];

    const escapeCsvField = (val) => {
      const str = String(val === undefined || val === null ? '' : val);
      return `"${str.replace(/"/g, '""')}"`;
    };

    const rows = recordsToExport.map(r => [
      escapeCsvField(r.name),
      escapeCsvField(r.role || ''),
      escapeCsvField(r.completed),
      escapeCsvField(r.provider),
      escapeCsvField(r.expiry),
      escapeCsvField(r.renewalMonths || 12),
      escapeCsvField(r.filingRef || ''),
      escapeCsvField(r.notes || '')
    ].join(','));

    const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const fileSuffix = isFiltered ? '-filtered' : '';
    link.download = `bbp-training-roster${fileSuffix}-${getLocalDateString()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(t('toasts.csvExported'));
  }

  function openExportModal() {
    const allRecords = loadRecords();
    if (allRecords.length === 0) {
      showToast(t('toasts.noExportRecords'), true);
      return;
    }

    const filtered = getFilteredAndSortedRecords();
    exportOptFullLabel.textContent = t('exportModal.optFull', { count: allRecords.length });
    exportOptFilteredLabel.textContent = t('exportModal.optFiltered', { count: filtered.length });

    const fullRadio = document.querySelector('input[name="export-scope"][value="full"]');
    if (fullRadio) fullRadio.checked = true;

    exportModalOverlay.style.display = 'flex';
  }

  function closeExportModal() {
    exportModalOverlay.style.display = 'none';
  }

  exportCsvBtn.addEventListener('click', openExportModal);
  exportCloseX.addEventListener('click', closeExportModal);
  exportCancelBtn.addEventListener('click', closeExportModal);

  exportConfirmBtn.addEventListener('click', () => {
    const selectedScopeRadio = document.querySelector('input[name="export-scope"]:checked');
    const selectedScope = selectedScopeRadio ? selectedScopeRadio.value : 'full';
    closeExportModal();

    if (selectedScope === 'filtered') {
      const filtered = getFilteredAndSortedRecords();
      downloadCsv(filtered, true);
    } else {
      const allRecords = loadRecords();
      downloadCsv(allRecords, false);
    }
  });

  // --- CSV Import ---
  function openImportModal() {
    parsedImportRecords = [];
    importPreviewSection.style.display = 'none';
    importConfirmBtn.disabled = true;
    csvFileInput.value = '';
    importModalOverlay.style.display = 'flex';
  }

  function closeImportModal() {
    importModalOverlay.style.display = 'none';
    parsedImportRecords = [];
  }

  importCsvBtn.addEventListener('click', openImportModal);
  importCloseX.addEventListener('click', closeImportModal);
  importCancelBtn.addEventListener('click', closeImportModal);

  // Simple RFC-4180 CSV line parser
  function parseCSV(text) {
    const lines = [];
    let row = [];
    let inQuote = false;
    let curVal = '';

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      const next = text[i + 1];

      if (inQuote) {
        if (ch === '"') {
          if (next === '"') {
            curVal += '"';
            i++; // skip escaped quote
          } else {
            inQuote = false;
          }
        } else {
          curVal += ch;
        }
      } else {
        if (ch === '"') {
          inQuote = true;
        } else if (ch === ',') {
          row.push(curVal.trim());
          curVal = '';
        } else if (ch === '\r') {
          if (next === '\n') i++;
          row.push(curVal.trim());
          lines.push(row);
          row = [];
          curVal = '';
        } else if (ch === '\n') {
          row.push(curVal.trim());
          lines.push(row);
          row = [];
          curVal = '';
        } else {
          curVal += ch;
        }
      }
    }

    if (curVal || row.length > 0) {
      row.push(curVal.trim());
      lines.push(row);
    }

    return lines;
  }

  function handleFileRead(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target.result;
        const rows = parseCSV(text);
        if (!rows || rows.length < 2) {
          showToast(t('importModal.errNoRecords'), true);
          return;
        }

        // Header mapping
        const headerRow = rows[0].map(h => h.toLowerCase().replace(/[^a-z0-9]/g, ''));
        const findColIdx = (aliases) => headerRow.findIndex(h => aliases.some(a => h.includes(a)));

        const nameIdx = findColIdx(['name', 'staff']);
        const roleIdx = findColIdx(['role', 'position', 'title']);
        const dateIdx = findColIdx(['trainingdate', 'completed', 'date']);
        const providerIdx = findColIdx(['provider', 'cert', 'certification']);
        const expiryIdx = findColIdx(['expiry', 'expires']);
        const renewalIdx = findColIdx(['renewal', 'months']);
        const filingIdx = findColIdx(['filing', 'reference', 'file', 'certlocation']);
        const notesIdx = findColIdx(['notes', 'comment']);

        if (nameIdx === -1) {
          showToast(t('importModal.errParse'), true);
          return;
        }

        const validRecords = [];
        for (let i = 1; i < rows.length; i++) {
          const r = rows[i];
          if (!r || r.length === 0 || (r.length === 1 && !r[0])) continue;

          const name = (r[nameIdx] || '').trim();
          if (!name) continue;

          const role = roleIdx !== -1 ? (r[roleIdx] || '').trim() : '';
          const completed = dateIdx !== -1 && r[dateIdx] ? r[dateIdx].trim() : getLocalDateString();
          const provider = providerIdx !== -1 ? (r[providerIdx] || t('csv.defaultProvider')).trim() : t('csv.defaultProvider');
          const renewalMonths = renewalIdx !== -1 ? (parseInt(r[renewalIdx], 10) || 12) : 12;
          const expiry = expiryIdx !== -1 && r[expiryIdx] ? r[expiryIdx].trim() : addMonthsToLocalDate(completed, renewalMonths);
          const filingRef = filingIdx !== -1 ? (r[filingIdx] || '').trim() : '';
          const notes = notesIdx !== -1 ? (r[notesIdx] || '').trim() : '';

          validRecords.push({
            id: `rec_${Date.now()}_${i}_${Math.random().toString(36).substring(2, 6)}`,
            name,
            role,
            completed,
            provider,
            renewalMonths,
            expiry,
            filingRef,
            notes
          });
        }

        if (validRecords.length === 0) {
          showToast(t('importModal.errNoRecords'), true);
          return;
        }

        parsedImportRecords = validRecords;
        previewCountText.textContent = t('importModal.previewCount', { count: validRecords.length });
        importPreviewSection.style.display = 'block';
        importConfirmBtn.disabled = false;
      } catch (err) {
        console.error('CSV Parsing error:', err);
        showToast(t('importModal.errParse'), true);
      }
    };
    reader.readAsText(file);
  }

  csvFileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) handleFileRead(file);
  });

  csvDropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    csvDropzone.classList.add('drag-over');
  });

  csvDropzone.addEventListener('dragleave', () => {
    csvDropzone.classList.remove('drag-over');
  });

  csvDropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    csvDropzone.classList.remove('drag-over');
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) handleFileRead(file);
  });

  importConfirmBtn.addEventListener('click', () => {
    if (!parsedImportRecords || parsedImportRecords.length === 0) return;
    const mode = document.querySelector('input[name="import-mode"]:checked').value;
    const current = loadRecords();
    let finalRecords = [];

    if (mode === 'replace') {
      finalRecords = parsedImportRecords;
    } else {
      // Merge: append new records
      finalRecords = [...current, ...parsedImportRecords];
    }

    saveRecords(finalRecords);
    closeImportModal();
    renderTable();
    showToast(t('toasts.importSuccess', { count: parsedImportRecords.length }));
  });

  // --- iCalendar (.ics) Renewal Alerts Engine (RFC-5545 Compliant) ---
  function downloadIcsCalendar(recordsToExport, filename, studioName) {
    if (!recordsToExport || recordsToExport.length === 0) {
      showToast(t('toasts.noExportRecords'), true);
      return;
    }

    const pad = (n) => String(n).padStart(2, '0');
    const now = new Date();
    const dtstamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;

    const escapeIcs = (str) => {
      return String(str || '')
        .replace(/\\/g, '\\\\')
        .replace(/;/g, '\\;')
        .replace(/,/g, '\\,')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '');
    };

    const events = recordsToExport.map(rec => {
      const cleanDate = (rec.expiry || '').replace(/-/g, '');
      if (!cleanDate || cleanDate.length !== 8) return '';

      // All day event: DTEND is the next day
      const parts = rec.expiry.split('-');
      const expDate = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      expDate.setDate(expDate.getDate() + 1);
      const cleanEnd = `${expDate.getFullYear()}${pad(expDate.getMonth() + 1)}${pad(expDate.getDate())}`;

      const summary = `BBP Renewal Due: ${rec.name}${rec.role ? ` (${rec.role})` : ''}`;
      const desc = `Bloodborne Pathogen certification renewal due for ${rec.name}.\\nStudio: ${studioName}\\nProvider: ${rec.provider}\\nLast Completed: ${rec.completed}\\nFiling Ref: ${rec.filingRef || 'N/A'}`;

      return [
        'BEGIN:VEVENT',
        `UID:bbp-${rec.id}@poliinternational.com`,
        `DTSTAMP:${dtstamp}`,
        `DTSTART;VALUE=DATE:${cleanDate}`,
        `DTEND;VALUE=DATE:${cleanEnd}`,
        `SUMMARY:${escapeIcs(summary)}`,
        `DESCRIPTION:${escapeIcs(desc)}`,
        'STATUS:CONFIRMED',
        'TRANSP:TRANSPARENT',
        'BEGIN:VALARM',
        'TRIGGER:-P30D',
        'ACTION:DISPLAY',
        `DESCRIPTION:${escapeIcs(summary)} - 30 Day Advance Notice`,
        'END:VALARM',
        'BEGIN:VALARM',
        'TRIGGER:-P7D',
        'ACTION:DISPLAY',
        `DESCRIPTION:${escapeIcs(summary)} - 7 Day Final Notice`,
        'END:VALARM',
        'END:VEVENT'
      ].join('\r\n');
    }).filter(Boolean);

    if (events.length === 0) {
      showToast(t('toasts.noExportRecords'), true);
      return;
    }

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Poli International//Bloodborne Pathogen Tracker//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      ...events,
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(t('toasts.calendarExported'));
  }

  exportIcsBtn.addEventListener('click', () => {
    const allRecords = loadRecords();
    if (allRecords.length === 0) {
      showToast(t('toasts.noExportRecords'), true);
      return;
    }
    const studioName = studioNameInput.value.trim() || t('print.defaultStudio');
    const recordsToExport = getFilteredAndSortedRecords();
    const filename = `bbp-training-renewals-${getLocalDateString()}.ics`;
    downloadIcsCalendar(recordsToExport, filename, studioName);
  });

  // --- Individual Training Pass Slip Engine ---
  function openPassModal(rec) {
    const studioName = studioNameInput.value.trim() || t('print.defaultStudio');
    const status = getStatusInfo(rec.expiry);

    passStudioName.textContent = studioName;
    passStaffName.textContent = rec.name;
    passStaffRole.textContent = rec.role || t('passModal.roleLabel');
    passStatusBadge.className = `badge-status ${status.badgeClass}`;
    passStatusBadge.innerHTML = `<span class="status-symbol" aria-hidden="true">${status.symbol}</span> <span class="status-text">${escapeHtml(status.label)}</span>`;

    passCompletedDate.textContent = formatDisplayDate(rec.completed);
    passExpiryDate.textContent = formatDisplayDate(rec.expiry);
    passRenewalCycle.textContent = t('passModal.cycleMonths', { months: rec.renewalMonths || 12 });
    passProvider.textContent = rec.provider || '-';
    passFilingRef.textContent = rec.filingRef || '-';

    passModalOverlay.style.display = 'flex';
  }

  function closePassModal() {
    passModalOverlay.style.display = 'none';
  }

  passCloseX.addEventListener('click', closePassModal);
  passCloseBtn.addEventListener('click', closePassModal);

  passPrintBtn.addEventListener('click', () => {
    document.body.classList.add('printing-pass');
    window.print();
    setTimeout(() => {
      document.body.classList.remove('printing-pass');
    }, 500);
  });

  // --- Multi-Location / Profile Switcher UI Engine ---
  function renderProfileOptions() {
    const profiles = getProfiles();
    const activeId = getActiveProfileId();

    profileSelect.innerHTML = profiles.map(p => {
      const isSelected = p.id === activeId ? 'selected' : '';
      return `<option value="${escapeHtml(p.id)}" ${isSelected}>${escapeHtml(p.name)}</option>`;
    }).join('');

    const activeProfile = profiles.find(p => p.id === activeId) || profiles[0];
    if (activeProfile) {
      activeProfileNameEl.textContent = activeProfile.name;
      // Also update studio name input for this profile
      const savedStudio = loadStudioForProfile(activeProfile.id);
      studioNameInput.value = savedStudio || activeProfile.name;
    }
  }

  function switchProfile(profileId) {
    setActiveProfileId(profileId);
    renderProfileOptions();
    resetForm();
    activeFilter = 'all';
    searchQuery = '';
    staffSearchInput.value = '';
    renderTable();
    updateDatalistSuggestions();
    const profiles = getProfiles();
    const activeProfile = profiles.find(p => p.id === profileId);
    if (activeProfile) {
      showToast(t('toasts.profileSwitched', { name: activeProfile.name }));
    }
  }

  profileSelect.addEventListener('change', (e) => {
    switchProfile(e.target.value);
  });

  // Add Profile Modal
  btnAddProfile.addEventListener('click', () => {
    newProfileNameInput.value = '';
    profileAddModal.style.display = 'flex';
    newProfileNameInput.focus();
  });

  profileAddCancelBtn.addEventListener('click', () => {
    profileAddModal.style.display = 'none';
  });

  profileAddConfirmBtn.addEventListener('click', () => {
    const name = newProfileNameInput.value.trim();
    if (!name) {
      showToast(t('toasts.errEmptyName'), true);
      return;
    }

    const profiles = getProfiles();
    const newId = `prof_${Date.now()}`;
    profiles.push({ id: newId, name });
    saveProfiles(profiles);
    saveStudioForProfile(newId, name);

    profileAddModal.style.display = 'none';
    switchProfile(newId);
    showToast(t('toasts.profileCreated', { name }));
  });

  // Manage Profile Modal
  btnManageProfile.addEventListener('click', () => {
    const profiles = getProfiles();
    const activeId = getActiveProfileId();
    const activeProfile = profiles.find(p => p.id === activeId);
    if (!activeProfile) return;

    manageProfileNameInput.value = activeProfile.name;
    profileManageModal.style.display = 'flex';
    manageProfileNameInput.focus();
  });

  profileManageCloseBtn.addEventListener('click', () => {
    profileManageModal.style.display = 'none';
  });

  profileRenameBtn.addEventListener('click', () => {
    const newName = manageProfileNameInput.value.trim();
    if (!newName) {
      showToast(t('toasts.errEmptyName'), true);
      return;
    }

    const profiles = getProfiles();
    const activeId = getActiveProfileId();
    const profile = profiles.find(p => p.id === activeId);
    if (profile) {
      profile.name = newName;
      saveProfiles(profiles);
      saveStudioForProfile(activeId, newName);
      renderProfileOptions();
      profileManageModal.style.display = 'none';
      showToast(t('toasts.profileRenamed', { name: newName }));
    }
  });

  profileDeleteBtn.addEventListener('click', () => {
    const profiles = getProfiles();
    if (profiles.length <= 1) {
      showToast(t('profile.deletePreventSingle'), true);
      return;
    }

    const activeId = getActiveProfileId();
    const profile = profiles.find(p => p.id === activeId);
    if (!profile) return;

    openConfirmModal(
      t('profile.deleteHeading'),
      t('profile.deleteWarning', { name: profile.name }),
      () => {
        const remainingProfiles = profiles.filter(p => p.id !== activeId);
        saveProfiles(remainingProfiles);
        // Clear data for that profile
        localStorage.removeItem(getProfileStorageKey(activeId));
        localStorage.removeItem(getProfileStudioKey(activeId));

        profileManageModal.style.display = 'none';
        switchProfile(remainingProfiles[0].id);
        showToast(t('toasts.profileDeleted', { name: profile.name }));
      }
    );
  });

  // --- Lossless JSON Backup and Restore Engine ---
  function backupJson() {
    const profiles = getProfiles();
    const backupObj = {
      format: 'poli-bbp-tracker-backup',
      version: 2,
      exportedAt: getLocalDateString(),
      profiles: profiles,
      activeProfileId: getActiveProfileId(),
      data: {},
      studioNames: {}
    };

    profiles.forEach(p => {
      backupObj.data[p.id] = loadRecordsForProfile(p.id);
      backupObj.studioNames[p.id] = loadStudioForProfile(p.id);
    });

    const jsonStr = JSON.stringify(backupObj, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bbp-tracker-backup-${getLocalDateString()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(t('toasts.backupSuccess'));
  }

  backupJsonBtn.addEventListener('click', backupJson);

  function openRestoreModal() {
    parsedRestoreData = null;
    restorePreviewSection.style.display = 'none';
    restoreConfirmBtn.disabled = true;
    restoreFileInput.value = '';
    restoreModalOverlay.style.display = 'flex';
  }

  function closeRestoreModal() {
    restoreModalOverlay.style.display = 'none';
    parsedRestoreData = null;
  }

  restoreJsonBtn.addEventListener('click', openRestoreModal);
  restoreCloseX.addEventListener('click', closeRestoreModal);
  restoreCancelBtn.addEventListener('click', closeRestoreModal);

  function handleRestoreFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target.result;
        const parsed = JSON.parse(text);

        let totalRecords = 0;
        let totalProfiles = 1;

        if (parsed.format === 'poli-bbp-tracker-backup' && parsed.data) {
          totalProfiles = (parsed.profiles && parsed.profiles.length) || Object.keys(parsed.data).length;
          Object.keys(parsed.data).forEach(k => {
            if (Array.isArray(parsed.data[k])) {
              totalRecords += parsed.data[k].length;
            }
          });
          parsedRestoreData = parsed;
        } else if (Array.isArray(parsed)) {
          // Standard/Legacy records array
          totalRecords = parsed.length;
          totalProfiles = 1;
          parsedRestoreData = {
            format: 'poli-bbp-tracker-backup',
            version: 1,
            profiles: [{ id: 'default', name: t('profile.defaultProfileName') }],
            activeProfileId: 'default',
            data: { default: parsed },
            studioNames: { default: '' }
          };
        } else {
          showToast(t('importModal.errParse'), true);
          return;
        }

        restorePreviewCountText.textContent = t('importModal.previewCount', {
          records: totalRecords,
          profiles: totalProfiles
        });
        restorePreviewSection.style.display = 'block';
        restoreConfirmBtn.disabled = false;
      } catch (err) {
        console.error('JSON restore parse error:', err);
        showToast(t('importModal.errParse'), true);
      }
    };
    reader.readAsText(file);
  }

  restoreFileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) handleRestoreFile(file);
  });

  restoreDropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    restoreDropzone.classList.add('drag-over');
  });

  restoreDropzone.addEventListener('dragleave', () => {
    restoreDropzone.classList.remove('drag-over');
  });

  restoreDropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    restoreDropzone.classList.remove('drag-over');
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) handleRestoreFile(file);
  });

  restoreConfirmBtn.addEventListener('click', () => {
    if (!parsedRestoreData || !parsedRestoreData.data) return;

    const mode = document.querySelector('input[name="restore-mode"]:checked').value;
    const backup = parsedRestoreData;

    if (mode === 'replace') {
      // Replace all profiles and datasets
      if (Array.isArray(backup.profiles) && backup.profiles.length > 0) {
        saveProfiles(backup.profiles);
      }
      Object.keys(backup.data).forEach(pid => {
        saveRecordsForProfile(pid, backup.data[pid]);
      });
      if (backup.studioNames) {
        Object.keys(backup.studioNames).forEach(pid => {
          saveStudioForProfile(pid, backup.studioNames[pid]);
        });
      }
      setActiveProfileId(backup.activeProfileId || 'default');
    } else {
      // Merge mode: merge into current active profile
      const current = loadRecords();
      const incoming = backup.data[backup.activeProfileId] || Object.values(backup.data)[0] || [];
      const merged = [...current, ...incoming];
      saveRecords(merged);
    }

    closeRestoreModal();
    renderProfileOptions();
    renderTable();
    updateDatalistSuggestions();
    showToast(t('toasts.restoreSuccess'));
  });

  // --- Inspection Audit Readiness Checklist Engine ---
  function renderAuditChecklist() {
    const allRecords = loadRecords();
    const studioName = (studioNameInput.value || '').trim();

    let lapsedCount = 0;
    let within30Count = 0;
    let missingFilingCount = 0;
    let missingRoleCount = 0;

    allRecords.forEach(rec => {
      const days = getDaysRemaining(rec.expiry);
      if (days <= 0) lapsedCount++;
      else if (days <= 30) within30Count++;

      if (!rec.filingRef || !rec.filingRef.trim()) missingFilingCount++;
      if (!rec.role || !rec.role.trim()) missingRoleCount++;
    });

    const checks = [
      {
        id: 'chk-lapsed',
        title: t('audit.checkLapsedTitle'),
        passed: lapsedCount === 0,
        desc: lapsedCount === 0 ? t('audit.checkLapsedPass') : t('audit.checkLapsedFail', { count: lapsedCount }),
        actionKey: lapsedCount > 0 ? 'viewLapsed' : null,
        actionLabel: t('audit.actionFilterLapsed'),
        actionFilter: 'lapsed'
      },
      {
        id: 'chk-30',
        title: t('audit.check30Title'),
        passed: within30Count === 0,
        desc: within30Count === 0 ? t('audit.check30Pass') : t('audit.check30Warn', { count: within30Count }),
        actionKey: within30Count > 0 ? 'view30' : null,
        actionLabel: t('audit.actionFilter30'),
        actionFilter: '30'
      },
      {
        id: 'chk-filing',
        title: t('audit.checkFilingTitle'),
        passed: allRecords.length > 0 && missingFilingCount === 0,
        desc: missingFilingCount === 0 && allRecords.length > 0 ? t('audit.checkFilingPass') : t('audit.checkFilingWarn', { count: missingFilingCount }),
        actionKey: missingFilingCount > 0 ? 'editRecords' : null,
        actionLabel: t('audit.actionFixFiling')
      },
      {
        id: 'chk-roles',
        title: t('audit.checkRolesTitle'),
        passed: allRecords.length > 0 && missingRoleCount === 0,
        desc: missingRoleCount === 0 && allRecords.length > 0 ? t('audit.checkRolesPass') : t('audit.checkRolesWarn', { count: missingRoleCount }),
        actionKey: null
      },
      {
        id: 'chk-studio',
        title: t('audit.checkStudioTitle'),
        passed: studioName.length > 0,
        desc: studioName.length > 0 ? t('audit.checkStudioPass', { name: studioName }) : t('audit.checkStudioWarn'),
        actionKey: studioName.length === 0 ? 'focusStudio' : null,
        actionLabel: t('audit.actionSetStudio')
      },
      {
        id: 'chk-roster',
        title: t('audit.checkRosterTitle'),
        passed: allRecords.length > 0,
        desc: allRecords.length > 0 ? t('audit.checkRosterPass', { count: allRecords.length }) : t('audit.checkRosterWarn'),
        actionKey: allRecords.length === 0 ? 'addRecord' : null,
        actionLabel: t('audit.actionAddRecord')
      }
    ];

    const passedCount = checks.filter(c => c.passed).length;
    const totalCount = checks.length;
    const percent = Math.round((passedCount / totalCount) * 100);

    auditProgressBar.style.width = `${percent}%`;
    auditScoreSummary.textContent = t('audit.scoreSummary', { passed: passedCount, total: totalCount, percent });

    if (lapsedCount > 0) {
      auditOverallBadge.className = 'audit-score-badge audit-badge-crit';
      auditOverallBadge.textContent = t('audit.statusCritical');
      auditProgressBar.style.backgroundColor = 'var(--danger)';
    } else if (percent === 100) {
      auditOverallBadge.className = 'audit-score-badge audit-badge-pass';
      auditOverallBadge.textContent = t('audit.statusReady');
      auditProgressBar.style.backgroundColor = 'var(--success)';
    } else {
      auditOverallBadge.className = 'audit-score-badge audit-badge-warn';
      auditOverallBadge.textContent = t('audit.statusWarning');
      auditProgressBar.style.backgroundColor = 'var(--warning)';
    }

    auditListContainer.innerHTML = checks.map(c => {
      const icon = c.passed ? '✓' : '⚠️';
      const actionHtml = c.actionKey ? `<button type="button" class="audit-check-action-btn" data-action="${c.actionKey}" data-filter="${c.actionFilter || ''}">${escapeHtml(c.actionLabel)}</button>` : '';

      return `
        <div class="audit-check-item">
          <div class="audit-check-icon" aria-hidden="true">${icon}</div>
          <div class="audit-check-body">
            <div class="audit-check-title">${escapeHtml(c.title)}</div>
            <div class="audit-check-desc">${escapeHtml(c.desc)}</div>
            ${actionHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  function openAuditModal() {
    renderAuditChecklist();
    auditModalOverlay.style.display = 'flex';
  }

  function closeAuditModal() {
    auditModalOverlay.style.display = 'none';
  }

  auditChecklistBtn.addEventListener('click', openAuditModal);
  auditCloseX.addEventListener('click', closeAuditModal);
  auditCloseBtn.addEventListener('click', closeAuditModal);

  auditPrintBtn.addEventListener('click', () => {
    document.body.classList.add('printing-audit');
    window.print();
    setTimeout(() => {
      document.body.classList.remove('printing-audit');
    }, 500);
  });

  auditListContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.audit-check-action-btn');
    if (!btn) return;

    const action = btn.getAttribute('data-action');
    const filter = btn.getAttribute('data-filter');
    closeAuditModal();

    if (action === 'viewLapsed' || action === 'view30') {
      if (filter) setFilter(filter);
      const rosterSection = document.querySelector('.roster-section');
      if (rosterSection) rosterSection.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'focusStudio') {
      studioNameInput.focus();
    } else if (action === 'addRecord' || action === 'editRecords') {
      recordForm.scrollIntoView({ behavior: 'smooth' });
      staffNameInput.focus();
    }
  });

  // --- Theme Toggle Engine ---
  function updateThemeButtonLabel() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    themeToggleBtn.textContent = isDark ? t('header.themeToggleLight') : t('header.themeToggleDark');
  }

  // Language switcher. Inside this closure on purpose: the roster, status pills and cards
  // are rendered in JS, so a language change has to redraw them, not only re-apply the
  // data-i18n attributes. The choice is stored under the key the whole tool suite uses.
  const languageSelect = document.getElementById('language-select');
  if (languageSelect && window.i18n) {
    const available = Object.keys(window.i18n.translations || {});
    const active = window.i18n.getLanguage();
    if (available.indexOf(active) !== -1) languageSelect.value = active;
    languageSelect.addEventListener('change', () => {
      if (available.indexOf(languageSelect.value) === -1) return;
      window.i18n.setLanguage(languageSelect.value);
      renderTable();
      renderProfileOptions();
    });
  }

  themeToggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    updateThemeButtonLabel();
  });

  // Close modals on overlay backdrop click
  [
    confirmModalOverlay,
    importModalOverlay,
    exportModalOverlay,
    restoreModalOverlay,
    passModalOverlay,
    auditModalOverlay,
    profileAddModal,
    profileManageModal
  ].forEach(overlay => {
    if (!overlay) return;
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        if (overlay === confirmModalOverlay) closeConfirmModal();
        if (overlay === importModalOverlay) closeImportModal();
        if (overlay === exportModalOverlay) closeExportModal();
        if (overlay === restoreModalOverlay) closeRestoreModal();
        if (overlay === passModalOverlay) closePassModal();
        if (overlay === auditModalOverlay) closeAuditModal();
        if (overlay === profileAddModal) profileAddModal.style.display = 'none';
        if (overlay === profileManageModal) profileManageModal.style.display = 'none';
      }
    });
  });

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeConfirmModal();
      closeImportModal();
      closeExportModal();
      closeRestoreModal();
      closePassModal();
      closeAuditModal();
      if (profileAddModal) profileAddModal.style.display = 'none';
      if (profileManageModal) profileManageModal.style.display = 'none';
    }
  });

  // --- Initialization ---
  function init() {
    // 1. Synchronous translation injection
    if (window.i18n && typeof window.i18n.apply === 'function') {
      window.i18n.apply();
    }

    // 2. Initialize default dates
    trainingDateInput.value = getLocalDateString();

    // 3. Initialize studio profiles & switcher
    renderProfileOptions();

    // 4. Initialize datalist suggestions
    updateDatalistSuggestions();

    // 5. Update theme toggle text
    updateThemeButtonLabel();

    // 6. Initial table render
    renderTable();

    // 7. Automated summary notification on load if any staff have lapsed records
    const initialRecords = loadRecords();
    const lapsedCount = initialRecords.filter(r => getStatusInfo(r.expiry).daysLeft <= 0).length;
    if (lapsedCount > 0) {
      showToast(t('toasts.lapsedAlert', { count: lapsedCount }), true);
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
