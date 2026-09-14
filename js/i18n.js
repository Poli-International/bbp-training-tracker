/**
 * Bloodborne Pathogen Training Tracker V2 - Internationalization Dictionary & Engine
 * Synchronously loaded in document head/body before app.js to guarantee immediate dictionary availability.
 * Single translate function window.t(key, params) with dot-notation namespace resolution.
 * English reference dictionary with character-for-character exact values.
 */

(function() {
  'use strict';

  const translations = {
    en: {
      meta: {
        title: "Bloodborne Pathogen Training Tracker | Poli International",
        description: "Track staff bloodborne pathogen training dates, providers, expiry windows (30, 60, 90 days), certificate filing locations, and export or print inspection rosters."
      },
      header: {
        badge: "BBP Compliance Tracking",
        themeToggleAria: "Toggle visual theme",
        themeToggleLight: "☀️ Light Mode",
        themeToggleDark: "🌙 Dark Mode",
        title: "Bloodborne Pathogen Training Tracker",
        subtitle: "Log staff training dates, providers, and certificate filing locations. Monitor 30, 60, and 90-day renewal deadlines with inspection-ready printouts and CSV portability.",
        storageNotice: "Data stays entirely in your browser: zero accounts, zero cloud transmission."
      },
      nav: {
        relatedAria: "Related studio tools",
        relatedHeading: "Related Studio Safety Tools:",
        sharpsTool: "Sharps Disposal Tracker",
        autoclaveTool: "Autoclave Calculator"
      },
      disclaimer: {
        banner: "Administrative tool only. This tracker logs training records and does not substitute for accredited bloodborne pathogen training or certify jurisdictional compliance."
      },
      summary: {
        ariaOverview: "Training renewal status overview",
        totalStaff: "Total Staff Logged",
        totalStaffSub: "All active records",
        lapsed: "Already Lapsed",
        lapsedSub: "Immediate renewal needed",
        within30: "Due in 30 Days",
        within30Sub: "Renewal window open",
        within60: "Due in 60 Days",
        within60Sub: "Schedule upcoming session",
        within90: "Due in 90 Days",
        within90Sub: "Advance planning horizon"
      },
      form: {
        title: "Add Staff Training Record",
        editTitle: "Edit Staff Training Record",
        cancelEdit: "Cancel Edit",
        nameLabel: "Staff Member Name",
        namePlaceholder: "e.g. Alex Morgan",
        roleLabel: "Studio Role",
        rolePlaceholder: "e.g. Body Piercer, Tattoo Artist, Counter Staff",
        dateLabel: "Training Date",
        providerLabel: "Training Provider",
        providerPlaceholder: "e.g. Red Cross, ProTrainings, Local Health Dept",
        renewalLabel: "Renewal Period",
        monthsOption12: "12 Months (Annual)",
        monthsOption24: "24 Months (Biennial)",
        monthsOption36: "36 Months (3 Years)",
        monthsOptionCustom: "Custom Months",
        customMonthsAria: "Custom renewal months",
        filingLabel: "Certificate Filing Reference",
        filingHint: "(location note, not an upload)",
        filingPlaceholder: "e.g. Binder A - Tab 4, Staff Drive / Alex-BBP.pdf, Cabinet 2",
        notesLabel: "Additional Notes",
        notesPlaceholder: "e.g. Certificate ID #, state permit number, renewal notes",
        submitAdd: "Add Record",
        submitUpdate: "Save Changes",
        renewTitle: "Renew Training Record: {name}",
        submitRenew: "Record Renewal",
        errCustomRenewal: 'Enter the custom renewal period in months (1 to 120).'
      },
      print: {
        title: "Bloodborne Pathogen Training Compliance Roster",
        inspectionNotice: "Official studio administrative record of staff bloodborne pathogen and infection control training completion.",
        generatedOn: "Generated on:",
        studioLabel: "Studio Name:",
        defaultStudio: "Studio Staff",
        studioPlaceholder: "Studio Name for Printout",
        studioTitle: "Studio Name for Printout",
        signatureLine: "Studio Manager / Owner Signature: ___________________________   Date: ____________"
      },
      filters: {
        heading: "Expiry Horizon Filter:",
        all: "All Records",
        lapsed: "Lapsed",
        days30: "Next 30 Days",
        days60: "Next 60 Days",
        days90: "Next 90 Days",
        current: "Up to Date"
      },
      search: {
        placeholder: "Search staff by name or role...",
        ariaLabel: "Search staff by name or role",
        clearAria: "Clear search",
        resultsCount: "{count} staff member(s) found"
      },
      actions: {
        printRoster: "Print Inspection Roster",
        batchRenew: "⚡ Batch Renew Team",
        exportCsv: "Export CSV",
        importCsv: "Import CSV",
        exportIcs: "Export Calendar (.ics)",
        backupJson: "Backup (JSON)",
        restoreJson: "Restore (JSON)",
        clearAll: "Clear All Records"
      },
      table: {
        emptyState: "No staff records found. Add your first staff member above or import a CSV.",
        emptyFilter: "No records match the selected expiry horizon filter.",
        emptySearch: "No staff records match your search query.",
        ariaRoster: "Staff training roster",
        colName: "Staff Member & Role",
        colProvider: "Training Provider",
        colDate: "Training Date",
        colExpiry: "Expires",
        colStatus: "Compliance Status",
        colFiling: "Filing Reference",
        colNotes: "Notes",
        colActions: "Actions",
        actionEdit: "Edit",
        actionDelete: "Delete",
        actionRenew: "Renew",
        actionCalendar: "Calendar",
        actionPass: "Card",
        sortName: "Sort by Staff Member Name",
        sortDate: "Sort by Training Date",
        sortExpiry: "Sort by Expiry Date"
      },
      status: {
        lapsedDays: "Lapsed {days}d ago",
        today: "EXPIRES TODAY",
        dueWithin30: "DUE IN {days}d",
        dueWithin60: "Due in {days}d",
        dueWithin90: "Due in {days}d",
        current: "CURRENT ({days}d)"
      },
      exportModal: {
        title: "Export Roster to CSV",
        instruction: "Select which records to include in your CSV export:",
        optFull: "Full Roster ({count} records)",
        optFiltered: "Current Filtered View ({count} records)",
        btnCancel: "Cancel",
        btnExport: "Export CSV"
      },
      importModal: {
        title: "Import Staff Records from CSV",
        instructions: "Upload or drag a CSV file exported from this tracker or formatted with columns: Name, Role, Training Date, Provider, Expiry Date, Renewal Months, Filing Reference, Notes.",
        chooseFile: "Choose CSV File",
        dropZoneText: "or drag & drop a .csv file here",
        previewTitle: "CSV Preview",
        previewCount: "{count} valid records detected in file.",
        modeLabel: "Import Mode:",
        modeMerge: "Merge (add to existing records)",
        modeReplace: "Replace (overwrite all existing records)",
        btnCancel: "Cancel",
        btnImport: "Execute Import",
        errNoRecords: "No valid staff records found in the provided CSV file.",
        errParse: "Could not parse CSV. Please ensure standard comma-separated format."
      },
      confirm: {
        deleteTitle: "Delete Record",
        deleteMsg: "Are you sure you want to remove the training record for {name}?",
        clearTitle: "Clear All Records",
        clearMsg: "Are you sure you want to delete all staff training records? This action cannot be undone unless you have a CSV export backup.",
        btnCancel: "Cancel",
        btnConfirm: "Confirm"
      },
      toasts: {
        validationError: "Please fill in all required fields (Name, Training Date, Provider, and Renewal period).",
        recordAdded: "Added record for {name}.",
        recordUpdated: "Updated record for {name}.",
        recordDeleted: "Record deleted.",
        allCleared: "All records cleared.",
        noExportRecords: "No records available to export.",
        csvExported: "CSV file successfully exported.",
        importSuccess: "Successfully imported {count} records.",
        lapsedAlert: "Attention: {count} staff training record(s) have lapsed and require renewal.",
        calendarExported: "Calendar (.ics) file successfully exported.",
        quickRenewReady: "Loaded renewal details for {name}. Review and submit to record renewal.",
        backupSuccess: "JSON backup successfully downloaded.",
        restoreSuccess: "Successfully restored {count} records.",
        profileCreated: "Created studio profile: {name}",
        profileSwitched: "Switched to profile: {name}",
        profileRenamed: "Profile renamed to: {name}",
        profileDeleted: "Deleted profile and associated records.",
        errEmptyName: 'Enter a name for the studio profile.'
      },
      calendar: {
        eventSummary: "BBP Training Renewal: {name} ({studio})",
        eventDescription: "Bloodborne Pathogen Training Renewal for {name} ({role}). Prior Provider: {provider}. Training Date: {date}. Certificate Filing: {filing}.",
        alarm30Description: "Reminder: BBP Training for {name} expires in 30 days.",
        alarm7Description: "Urgent: BBP Training for {name} expires in 7 days!"
      },
      passModal: {
        title: "Staff Training Record Card",
        cardBadge: "TRAINING RECORD",
        cardTitle: "Staff Training Record Card",
        studioLabel: "Studio / Facility:",
        staffLabel: "Staff Member:",
        roleLabel: "Studio Role:",
        providerLabel: "Training Provider:",
        completedLabel: "Completion Date:",
        expiryLabel: "Valid Through / Expiry:",
        cycleLabel: "Renewal Cycle:",
        cycleMonths: "{months} Months",
        statusLabel: "Compliance Status:",
        filingLabel: "Filing Location:",
        attestationNotice: "This card reproduces what the studio recorded: the training date, provider and filing location entered by the studio. It is not a certificate and does not prove that the training took place. The certificate from the training provider is the proof.",
        signatureLine: "Studio Manager / Lead Signature: _______________________ Date: ____________",
        btnPrint: "Print record card",
        btnClose: "Close"
      },
      backupModal: {
        title: "Restore Tracker Data from JSON",
        instruction: "Select a previously exported JSON backup file. This will restore studio profiles and staff records.",
        chooseFile: "Choose Backup JSON File",
        dropZoneText: "or drag & drop a .json backup file here",
        previewTitle: "Backup Preview",
        previewDetails: "Backup contains {recordsCount} staff records across {profilesCount} studio profile(s).",
        modeLabel: "Restore Mode:",
        modeMerge: "Merge (add to existing profiles and records)",
        modeReplace: "Full Restore (replace all profiles and records)",
        btnCancel: "Cancel",
        btnRestore: "Execute Restore",
        errParse: "Invalid JSON backup file. Please select a file created by this tracker's Backup function.",
        errNoRecords: "The selected backup file does not contain any valid staff records."
      },
      profile: {
        label: "Studio Profile:",
        selectAria: "Select studio or department profile",
        addTitle: "Create new studio or room profile",
        addBtn: "+ New Profile",
        manageTitle: "Manage or rename active profile",
        manageBtn: "Manage",
        activePill: "Active Studio Profile:",
        defaultProfileName: "Main Studio",
        addModalTitle: "Create New Studio Profile",
        addModalInstruction: "Add a new profile to track records for another room, department, or location separately.",
        profileNameLabel: "Profile Name",
        profileNamePlaceholder: "e.g. Downtown Piercing Studio, Guest Artists, Room 2",
        btnAddSave: "Create Profile",
        manageModalTitle: "Manage Studio Profile",
        renameLabel: "Rename Current Profile",
        btnSaveRename: "Save Name",
        deleteHeading: "Delete Current Profile",
        deleteWarning: "Deleting this profile will permanently remove its {count} staff records.",
        btnDeleteProfile: "Delete Profile",
        deletePreventSingle: "You must keep at least one studio profile."
      },
      audit: {
        btnTitle: "📋 Inspection Audit Checklist",
        modalTitle: "Studio Inspection Audit Readiness",
        modalSubtitle: "A check of your own record keeping: what is missing or lapsed in this tracker. It does not assess compliance with any regulation.",
        statusReady: "INSPECTION READY",
        statusWarning: "ATTENTION NEEDED",
        statusCritical: "CRITICAL: LAPSED RECORDS",
        scoreLabel: "Audit Readiness Score:",
        checkLapsedTitle: "Zero Expired / Lapsed Certifications",
        checkLapsedPass: "All logged staff have active, unexpired training certifications.",
        checkLapsedFail: "{count} staff certification(s) have lapsed and require immediate renewal.",
        check30Title: "Advance Renewal Planning (30-Day Horizon)",
        check30Pass: "No staff certifications are due for renewal within the next 30 days.",
        check30Warn: "{count} staff member(s) have renewals due within 30 days. Advance scheduling recommended.",
        checkFilingTitle: "Certificate Filing Locations Documented",
        checkFilingPass: "All staff records include documented filing locations (binder, tab, or folder).",
        checkFilingWarn: "{count} record(s) lack a certificate filing reference note.",
        checkRolesTitle: "Studio Job Roles Specified",
        checkRolesPass: "All staff have designated studio roles.",
        checkRolesWarn: "{count} record(s) have an empty studio role field.",
        checkStudioTitle: "Studio Identification Configured",
        checkStudioPass: "Studio name is configured for inspection rosters: {studio}",
        checkStudioWarn: "Studio name is not set. Add studio name for official inspection printouts.",
        checkRosterTitle: "Roster Staffing Complete",
        checkRosterPass: "{count} staff training records currently on file.",
        checkRosterWarn: "No staff records currently logged in this studio profile.",
        actionFilterLapsed: "View Lapsed Staff",
        actionFilter30: "View Due in 30 Days",
        actionFixFiling: "Review Records",
        actionSetStudio: "Set Studio Name",
        btnPrint: "Print Audit Checklist",
        btnClose: "Close",
        scoreSummary: '{passed} of {total} record-keeping checks passed ({percent}%).',
        actionAddRecord: 'Add a record'
      },
      chart: {
        title: "Compliance Status",
        centerLabel: "Valid & Active",
        badgeValid: "{percent}% Valid",
        legendValid: "Valid Certifications",
        legendWarning: "Due Soon (≤90 Days)",
        legendLapsed: "Already Lapsed",
        empty: "No staff records"
      },
      autoBackup: {
        title: "All changes are automatically backed up in your local browser storage",
        savedJustNow: "Auto-Saved",
        savedAt: "Auto-Saved at {time}",
        restoredNotice: "Restored latest records from local auto-backup snapshot"
      },
      csv: {
        headerName: "Name",
        headerRole: "Role",
        headerDate: "Training Date",
        headerProvider: "Provider",
        headerExpiry: "Expiry Date",
        headerRenewalMonths: "Renewal Months",
        headerFilingRef: "Filing Reference",
        headerNotes: "Notes",
        defaultProvider: "BBP Training"
      },
      common: {
        languageLabel: "Language",
        ariaCloseDialog: "Close dialog"
      }
    },
    fr: {
      meta: {
        title: "Suivi des formations aux pathogènes sanguins | Poli International",
        description: "Suivez les dates de formation aux agents pathogènes transmissibles par le sang de l'équipe, les formateurs, les fenêtres d'échéance (30, 60, 90 jours), les classements des certificats, et exportez ou imprimez les registres d'inspection."
      },
      header: {
        badge: "Suivi de conformité BBP",
        themeToggleAria: "Basculer le thème visuel",
        themeToggleLight: "☀️ Mode clair",
        themeToggleDark: "🌙 Mode sombre",
        title: "Suivi des formations aux pathogènes sanguins",
        subtitle: "Enregistrez les dates de formation de l'équipe, les formateurs et les lieux de classement des certificats. Surveillez les échéances de renouvellement à 30, 60 et 90 jours avec impressions prêtes pour le contrôle sanitaire et portabilité CSV.",
        storageNotice: "Les données restent exclusivement dans votre navigateur: zéro compte, zéro transfert cloud."
      },
      nav: {
        relatedAria: "Outils de studio associés",
        relatedHeading: "Outils de sécurité studio associés :",
        sharpsTool: "Suivi de l'élimination des DASRI",
        autoclaveTool: "Calculateur d'autoclave"
      },
      disclaimer: {
        banner: "Outil purement administratif. Ce registre consigne les dates de formation et ne remplace en aucun cas une formation certifiante aux agents pathogènes transmissibles par le sang ni ne garantit la conformité réglementaire."
      },
      summary: {
        ariaOverview: "Aperçu de l'état de renouvellement des formations",
        totalStaff: "Total de l'équipe enregistrée",
        totalStaffSub: "Tous les dossiers actifs",
        lapsed: "Déjà expirés",
        lapsedSub: "Renouvellement immédiat requis",
        within30: "Échéance sous 30 jours",
        within30Sub: "Période de renouvellement ouverte",
        within60: "Échéance sous 60 jours",
        within60Sub: "Planifier la session à venir",
        within90: "Échéance sous 90 jours",
        within90Sub: "Anticipation des échéances"
      },
      form: {
        title: "Ajouter un dossier de formation",
        editTitle: "Modifier le dossier de formation",
        cancelEdit: "Annuler la modification",
        nameLabel: "Nom du membre de l'équipe",
        namePlaceholder: "ex. Alex Morgan",
        roleLabel: "Rôle au studio",
        rolePlaceholder: "ex. Perceur corporel, Artiste tatoueur, Réceptionniste",
        dateLabel: "Date de formation",
        providerLabel: "Organisme formateur",
        providerPlaceholder: "ex. Croix-Rouge, ProTrainings, ARS locale",
        renewalLabel: "Cycle de renouvellement",
        monthsOption12: "12 mois (annuel)",
        monthsOption24: "24 mois (biennal)",
        monthsOption36: "36 mois (3 ans)",
        monthsOptionCustom: "Nombre de mois personnalisé",
        customMonthsAria: "Nombre de mois de renouvellement personnalisé",
        filingLabel: "Référence de classement du certificat",
        filingHint: "(note d'emplacement, pas de téléversement)",
        filingPlaceholder: "ex. Classeur A - Onglet 4, Drive studio / Alex-BBP.pdf, Armoire 2",
        notesLabel: "Notes complémentaires",
        notesPlaceholder: "ex. N° d'attestation, n° d'agrément, remarques de renouvellement",
        submitAdd: "Ajouter le dossier",
        submitUpdate: "Enregistrer les modifications",
        renewTitle: "Renouveler le dossier de formation : {name}",
        submitRenew: "Enregistrer le renouvellement",
        errCustomRenewal: 'Saisissez la période de renouvellement personnalisée en mois (1 à 120).'
      },
      print: {
        title: "Registre de conformité aux formations sur les pathogènes sanguins",
        inspectionNotice: "Registre administratif officiel du studio attestant du suivi de formation aux agents pathogènes transmissibles par le sang et à l'hygiène.",
        generatedOn: "Établi le :",
        studioLabel: "Nom du studio :",
        defaultStudio: "Équipe du studio",
        studioPlaceholder: "Nom du studio pour l'impression",
        studioTitle: "Nom du studio pour l'impression",
        signatureLine: "Signature du gérant / responsable du studio : ___________________________   Date : ____________"
      },
      filters: {
        heading: "Filtre d'échéance :",
        all: "Tous les dossiers",
        lapsed: "Expirés",
        days30: "30 prochains jours",
        days60: "60 prochains jours",
        days90: "90 prochains jours",
        current: "À jour"
      },
      search: {
        placeholder: "Rechercher par nom ou par rôle...",
        ariaLabel: "Rechercher un membre de l'équipe par nom ou par rôle",
        clearAria: "Effacer la recherche",
        resultsCount: "{count} membre(s) de l'équipe trouvé(s)"
      },
      actions: {
        printRoster: "Imprimer le registre d'inspection",
        batchRenew: "⚡ Renouvellement groupé de l'équipe",
        exportCsv: "Exporter en CSV",
        importCsv: "Importer un CSV",
        exportIcs: "Exporter le calendrier (.ics)",
        backupJson: "Sauvegarde (JSON)",
        restoreJson: "Restaurer (JSON)",
        clearAll: "Effacer tous les dossiers"
      },
      table: {
        emptyState: "Aucun dossier d'équipe trouvé. Ajoutez un premier membre ci-dessus ou importez un fichier CSV.",
        emptyFilter: "Aucun dossier ne correspond au filtre d'échéance sélectionné.",
        emptySearch: "Aucun dossier d'équipe ne correspond à votre recherche.",
        ariaRoster: "Registre de formation de l'équipe",
        colName: "Membre de l'équipe & Rôle",
        colProvider: "Organisme formateur",
        colDate: "Date de formation",
        colExpiry: "Date d'échéance",
        colStatus: "État de conformité",
        colFiling: "Classement",
        colNotes: "Remarques",
        colActions: "Opérations",
        actionEdit: "Modifier",
        actionDelete: "Supprimer",
        actionRenew: "Renouveler",
        actionCalendar: "Calendrier",
        actionPass: "Fiche",
        sortName: "Trier par nom de membre",
        sortDate: "Trier par date de formation",
        sortExpiry: "Trier par date d'échéance"
      },
      status: {
        lapsedDays: "Expiré depuis {days} j",
        today: "EXPIRE AUJOURD'HUI",
        dueWithin30: "ÉCHÉANCE DANS {days} j",
        dueWithin60: "Échéance dans {days} j",
        dueWithin90: "Échéance dans {days} j",
        current: "À JOUR ({days} j)"
      },
      exportModal: {
        title: "Exporter le registre en CSV",
        instruction: "Sélectionnez les dossiers à inclure dans votre export CSV :",
        optFull: "Registre complet ({count} dossiers)",
        optFiltered: "Vue filtrée actuelle ({count} dossiers)",
        btnCancel: "Annuler",
        btnExport: "Exporter en CSV"
      },
      importModal: {
        title: "Importer des dossiers d'équipe depuis un CSV",
        instructions: "Téléversez ou déposez un fichier CSV exporté depuis cet outil ou structuré avec les colonnes : Nom, Rôle, Date de formation, Formateur, Date d'échéance, Mois de renouvellement, Référence de classement, Remarques.",
        chooseFile: "Choisir un fichier CSV",
        dropZoneText: "ou glissez-déposez un fichier .csv ici",
        previewTitle: "Aperçu du fichier CSV",
        previewCount: "{count} dossiers valides détectés dans le fichier.",
        modeLabel: "Mode d'importation :",
        modeMerge: "Fusionner (ajouter aux dossiers existants)",
        modeReplace: "Remplacer (écraser tous les dossiers actuels)",
        btnCancel: "Annuler",
        btnImport: "Lancer l'importation",
        errNoRecords: "Aucun dossier d'équipe valide n'a été trouvé dans le fichier CSV fourni.",
        errParse: "Impossible d'analyser le CSV. Veuillez vérifier le format délimité par des virgules."
      },
      confirm: {
        deleteTitle: "Supprimer le dossier",
        deleteMsg: "Confirmez-vous la suppression du dossier de formation de {name} ?",
        clearTitle: "Effacer tous les dossiers",
        clearMsg: "Voulez-vous vraiment supprimer l'intégralité des dossiers de formation ? Cette opération est irréversible à moins de disposer d'une sauvegarde CSV.",
        btnCancel: "Annuler",
        btnConfirm: "Confirmer"
      },
      toasts: {
        validationError: "Veuillez renseigner tous les champs obligatoires (Nom, Date de formation, Formateur et Cycle de renouvellement).",
        recordAdded: "Dossier ajouté pour {name}.",
        recordUpdated: "Dossier mis à jour pour {name}.",
        recordDeleted: "Dossier supprimé.",
        allCleared: "Tous les dossiers ont été effacés.",
        noExportRecords: "Aucun dossier disponible pour l'export.",
        csvExported: "Fichier CSV exporté avec succès.",
        importSuccess: "{count} dossiers importés avec succès.",
        lapsedAlert: "Attention : {count} dossier(s) de formation sont expirés et nécessitent un renouvellement.",
        calendarExported: "Fichier de calendrier (.ics) exporté avec succès.",
        quickRenewReady: "Informations de renouvellement chargées pour {name}. Vérifiez et validez pour enregistrer.",
        backupSuccess: "Sauvegarde JSON téléchargée avec succès.",
        restoreSuccess: "{count} dossiers restaurés avec succès.",
        profileCreated: "Profil de studio créé : {name}",
        profileSwitched: "Basculement vers le profil : {name}",
        profileRenamed: "Profil renommé en : {name}",
        profileDeleted: "Profil et dossiers associés supprimés.",
        errEmptyName: 'Saisissez un nom pour le profil de studio.'
      },
      calendar: {
        eventSummary: "Renouvellement formation pathogènes sanguins : {name} ({studio})",
        eventDescription: "Renouvellement de formation aux pathogènes sanguins pour {name} ({role}). Organisme précédent : {provider}. Date de formation : {date}. Classement du certificat : {filing}.",
        alarm30Description: "Rappel : la formation aux pathogènes sanguins de {name} expire dans 30 jours.",
        alarm7Description: "Urgent : la formation aux pathogènes sanguins de {name} expire dans 7 jours !"
      },
      passModal: {
        title: "Fiche de formation du personnel",
        cardBadge: "REGISTRE DE FORMATION",
        cardTitle: "Fiche de formation du personnel",
        studioLabel: "Studio / Établissement :",
        staffLabel: "Membre de l'équipe :",
        roleLabel: "Rôle au studio :",
        providerLabel: "Organisme formateur :",
        completedLabel: "Date de réalisation :",
        expiryLabel: "Validité / Échéance :",
        cycleLabel: "Cycle de renouvellement :",
        cycleMonths: "{months} mois",
        statusLabel: "État de conformité :",
        filingLabel: "Emplacement de classement :",
        attestationNotice: "Cette carte reproduit ce que le studio a consigné : la date de formation, l'organisme et le lieu de classement saisis par le studio. Ce n'est pas un certificat et elle ne prouve pas que la formation a eu lieu. La preuve est le certificat de l'organisme de formation.",
        signatureLine: "Signature du gérant / responsable du studio : _______________________ Date : ____________",
        btnPrint: "Imprimer la fiche",
        btnClose: "Fermer"
      },
      backupModal: {
        title: "Restaurer les données depuis un fichier JSON",
        instruction: "Sélectionnez un fichier de sauvegarde JSON préalablement exporté. Cela restaurera les profils de studio et les dossiers de formation.",
        chooseFile: "Choisir un fichier de sauvegarde JSON",
        dropZoneText: "ou glissez-déposez un fichier de sauvegarde .json ici",
        previewTitle: "Aperçu de la sauvegarde",
        previewDetails: "La sauvegarde contient {recordsCount} dossiers d'équipe répartis sur {profilesCount} profil(s) de studio.",
        modeLabel: "Mode de restauration :",
        modeMerge: "Fusionner (ajouter aux profils et dossiers actuels)",
        modeReplace: "Restauration intégrale (remplacer tous les profils et dossiers)",
        btnCancel: "Annuler",
        btnRestore: "Exécuter la restauration",
        errParse: "Fichier de sauvegarde JSON non valide. Veuillez choisir un fichier créé par la fonction Sauvegarde de cet outil.",
        errNoRecords: "Le fichier de sauvegarde choisi ne contient aucun dossier d'équipe valide."
      },
      profile: {
        label: "Profil de studio :",
        selectAria: "Sélectionner un profil de studio ou d'espace",
        addTitle: "Créer un nouveau profil de studio ou de cabine",
        addBtn: "+ Nouveau profil",
        manageTitle: "Gérer ou renommer le profil actif",
        manageBtn: "Gérer",
        activePill: "Profil de studio actif :",
        defaultProfileName: "Studio principal",
        addModalTitle: "Créer un nouveau profil de studio",
        addModalInstruction: "Ajoutez un nouveau profil pour séparer la gestion d'une autre cabine, d'un autre pôle ou d'un établissement distinct.",
        profileNameLabel: "Nom du profil",
        profileNamePlaceholder: "ex. Studio Centre-Ville, Artistes invités, Cabine 2",
        btnAddSave: "Créer le profil",
        manageModalTitle: "Gérer le profil de studio",
        renameLabel: "Renommer le profil actif",
        btnSaveRename: "Enregistrer le nom",
        deleteHeading: "Supprimer le profil actif",
        deleteWarning: "La suppression de ce profil effacera définitivement ses {count} dossiers de membres.",
        btnDeleteProfile: "Supprimer le profil",
        deletePreventSingle: "Vous devez conserver au moins un profil de studio.",
      },
      audit: {
        btnTitle: "📋 Grille d'auto-évaluation d'inspection",
        modalTitle: "Préparation au contrôle sanitaire du studio",
        modalSubtitle: "Un contrôle de votre propre tenue de registre : ce qui manque ou a expiré dans cet outil. Il n'évalue pas la conformité à une réglementation.",
        statusReady: "PRÊT POUR LE CONTRÔLE",
        statusWarning: "ATTENTION REQUISE",
        statusCritical: "CRITIQUE : DOSSIERS EXPIRÉS",
        scoreLabel: "Indice de préparation au contrôle :",
        checkLapsedTitle: "Zéro certification échue ou expirée",
        checkLapsedPass: "Tous les membres de l'équipe enregistrés possèdent une attestation en cours de validité.",
        checkLapsedFail: "{count} attestation(s) de l'équipe sont expirées et exigent un renouvellement immédiat.",
        check30Title: "Anticipation des renouvellements (horizon 30 jours)",
        check30Pass: "Aucune attestation de l'équipe n'arrive à échéance dans les 30 prochains jours.",
        check30Warn: "{count} membre(s) de l'équipe ont un renouvellement dû sous 30 jours. Planification anticipée recommandée.",
        checkFilingTitle: "Emplacements de classement des certificats documentés",
        checkFilingPass: "Tous les dossiers comportent une mention précise de classement (classeur, onglet ou dossier numérique).",
        checkFilingWarn: "{count} dossier(s) ne comportent pas de note de classement du certificat.",
        checkRolesTitle: "Rôles au sein du studio spécifiés",
        checkRolesPass: "Tous les membres de l'équipe ont un rôle défini au studio.",
        checkRolesWarn: "{count} dossier(s) présentent un champ de rôle non renseigné.",
        checkStudioTitle: "Identification du studio configurée",
        checkStudioPass: "Le nom du studio est configuré pour les registres d'inspection : {studio}",
        checkStudioWarn: "Le nom du studio n'est pas renseigné. Indiquez le nom du studio pour les impressions officielles.",
        checkRosterTitle: "Complétude du registre d'équipe",
        checkRosterPass: "{count} dossiers de formation d'équipe actuellement enregistrés.",
        checkRosterWarn: "Aucun dossier d'équipe n'est enregistré dans ce profil de studio.",
        actionFilterLapsed: "Afficher l'équipe expirée",
        actionFilter30: "Afficher les échéances à 30 jours",
        actionFixFiling: "Examiner les dossiers",
        actionSetStudio: "Définir le nom du studio",
        btnPrint: "Imprimer la grille d'auto-évaluation",
        btnClose: "Fermer",
        scoreSummary: '{passed} des {total} contrôles de tenue de registre sont satisfaits ({percent} %).',
        actionAddRecord: 'Ajouter un enregistrement'
      },
      chart: {
        title: "État de conformité",
        centerLabel: "Valides & actifs",
        badgeValid: "{percent}% valides",
        legendValid: "Attestations valides",
        legendWarning: "Échéance proche (≤90 jours)",
        legendLapsed: "Déjà expirées",
        empty: "Aucun dossier d'équipe"
      },
      autoBackup: {
        title: "Toutes les modifications sont automatiquement sauvegardées dans le stockage local de votre navigateur",
        savedJustNow: "Sauvegardé automatiquement",
        savedAt: "Sauvegarde auto à {time}",
        restoredNotice: "Derniers dossiers restaurés depuis la sauvegarde locale automatique"
      },
      csv: {
        headerName: "Nom",
        headerRole: "Rôle",
        headerDate: "Date de formation",
        headerProvider: "Formateur",
        headerExpiry: "Date d'échéance",
        headerRenewalMonths: "Mois de renouvellement",
        headerFilingRef: "Référence de classement",
        headerNotes: "Remarques",
        defaultProvider: "Formation BBP"
      },
      common: {
        languageLabel: "Langue",
        ariaCloseDialog: "Fermer la boîte de dialogue"
      }
    },
    it: {
      meta: {
        title: "Registro formazione patogeni ematici | Poli International",
        description: "Monitora le date di formazione sui patogeni a trasmissione ematica dello staff, gli enti formativi, le finestre di scadenza (30, 60, 90 giorni), le sedi dei certificati e stampa i registri ispettivi."
      },
      header: {
        badge: "Monitoraggio conformità BBP",
        themeToggleAria: "Attiva o disattiva tema visivo",
        themeToggleLight: "☀️ Modalità chiara",
        themeToggleDark: "🌙 Modalità scura",
        title: "Registro formazione patogeni ematici",
        subtitle: "Registra le date dei corsi dello staff, gli enti formativi e le posizioni di archiviazione dei certificati. Monitora le scadenze a 30, 60 e 90 giorni con stampe pronte per l'ispezione e portabilità CSV.",
        storageNotice: "I dati rimangono esclusivamente nel tuo browser: zero account, zero trasmissione cloud."
      },
      nav: {
        relatedAria: "Strumenti correlati per lo studio",
        relatedHeading: "Strumenti di sicurezza correlati per lo studio:",
        sharpsTool: "Registro smaltimento taglienti",
        autoclaveTool: "Calcolatore per autoclave"
      },
      disclaimer: {
        banner: "Strumento puramente gestionale. Questo registro annota i corsi svolti e non sostituisce un corso certificato sui patogeni a trasmissione ematica né certifica la conformità normativa locale."
      },
      summary: {
        ariaOverview: "Panoramica sullo stato di rinnovo della formazione",
        totalStaff: "Totale staff registrato",
        totalStaffSub: "Tutte le schede attive",
        lapsed: "Già scaduti",
        lapsedSub: "Rinnovo immediato necessario",
        within30: "Scadenza entro 30 giorni",
        within30Sub: "Finestra di rinnovo aperta",
        within60: "Scadenza entro 60 giorni",
        within60Sub: "Programmare la prossima sessione",
        within90: "Scadenza entro 90 giorni",
        within90Sub: "Pianificazione preventiva"
      },
      form: {
        title: "Aggiungi scheda di formazione staff",
        editTitle: "Modifica scheda di formazione",
        cancelEdit: "Annulla modifica",
        nameLabel: "Nome collaboratore",
        namePlaceholder: "es. Alex Morgan",
        roleLabel: "Ruolo nello studio",
        rolePlaceholder: "es. Body Piercer, Tatuatore, Receptionist",
        dateLabel: "Data del corso",
        providerLabel: "Ente formatore",
        providerPlaceholder: "es. Croce Rossa, ProTrainings, ASL locale",
        renewalLabel: "Periodo di rinnovo",
        monthsOption12: "12 mesi (annuale)",
        monthsOption24: "24 mesi (biennale)",
        monthsOption36: "36 mesi (3 anni)",
        monthsOptionCustom: "Mesi personalizzati",
        customMonthsAria: "Mesi di rinnovo personalizzati",
        filingLabel: "Riferimento archiviazione certificato",
        filingHint: "(nota sulla posizione fisica/digitale, non un upload)",
        filingPlaceholder: "es. Raccoglitore A - Sezione 4, Drive studio / Alex-BBP.pdf, Archivio 2",
        notesLabel: "Note aggiuntive",
        notesPlaceholder: "es. N° attestato, autorizzazione sanitaria, note sul rinnovo",
        submitAdd: "Aggiungi scheda",
        submitUpdate: "Salva modifiche",
        renewTitle: "Rinnova scheda di formazione: {name}",
        submitRenew: "Registra rinnovo",
        errCustomRenewal: 'Inserisci il periodo di rinnovo personalizzato in mesi (da 1 a 120).'
      },
      print: {
        title: "Registro di conformità formazione patogeni a trasmissione ematica",
        inspectionNotice: "Documento amministrativo ufficiale dello studio che attesta il completamento della formazione dello staff sui patogeni ematici e sul controllo delle infezioni.",
        generatedOn: "Generato il:",
        studioLabel: "Nome studio:",
        defaultStudio: "Staff dello studio",
        studioPlaceholder: "Nome studio per la stampa",
        studioTitle: "Nome studio per la stampa",
        signatureLine: "Firma titolare / responsabile dello studio: ___________________________   Data: ____________"
      },
      filters: {
        heading: "Filtro orizzonte temporale scadenze:",
        all: "Tutte le schede",
        lapsed: "Scaduti",
        days30: "Prossimi 30 giorni",
        days60: "Prossimi 60 giorni",
        days90: "Prossimi 90 giorni",
        current: "In regola"
      },
      search: {
        placeholder: "Cerca collaboratore per nome o ruolo...",
        ariaLabel: "Cerca collaboratore per nome o ruolo",
        clearAria: "Cancella ricerca",
        resultsCount: "{count} collaboratore/i trovato/i"
      },
      actions: {
        printRoster: "Stampa registro per ispezione",
        batchRenew: "⚡ Rinnovo cumulativo team",
        exportCsv: "Esporta CSV",
        importCsv: "Importa CSV",
        exportIcs: "Esporta calendario (.ics)",
        backupJson: "Salvataggio (JSON)",
        restoreJson: "Ripristina (JSON)",
        clearAll: "Cancella tutte le schede"
      },
      table: {
        emptyState: "Nessuna scheda presente. Aggiungi il primo collaboratore qui sopra oppure importa un file CSV.",
        emptyFilter: "Nessuna scheda corrisponde al filtro di scadenza selezionato.",
        emptySearch: "Nessuna scheda corrisponde ai criteri di ricerca.",
        ariaRoster: "Registro formativo dello staff",
        colName: "Collaboratore e ruolo",
        colProvider: "Ente formatore",
        colDate: "Data corso",
        colExpiry: "Scadenza",
        colStatus: "Stato conformità",
        colFiling: "Archiviazione",
        colNotes: "Note",
        colActions: "Azioni",
        actionEdit: "Modifica",
        actionDelete: "Elimina",
        actionRenew: "Rinnova",
        actionCalendar: "Calendario",
        actionPass: "Scheda",
        sortName: "Ordina per nome collaboratore",
        sortDate: "Ordina per data del corso",
        sortExpiry: "Ordina per data di scadenza"
      },
      status: {
        lapsedDays: "Scaduto da {days} g",
        today: "SCADE OGGI",
        dueWithin30: "SCADE IN {days} g",
        dueWithin60: "Scade in {days} g",
        dueWithin90: "Scade in {days} g",
        current: "IN REGOLA ({days} g)"
      },
      exportModal: {
        title: "Esporta registro in CSV",
        instruction: "Seleziona quali schede includere nell'esportazione CSV:",
        optFull: "Registro completo ({count} schede)",
        optFiltered: "Vista attualmente filtrata ({count} schede)",
        btnCancel: "Annulla",
        btnExport: "Esporta CSV"
      },
      importModal: {
        title: "Importa schede dello staff da CSV",
        instructions: "Carica o trascina un file CSV esportato da questa applicazione oppure strutturato con le colonne: Nome, Ruolo, Data del corso, Ente formatore, Data scadenza, Mesi rinnovo, Riferimento archiviazione, Note.",
        chooseFile: "Seleziona file CSV",
        dropZoneText: "o trascina qui un file .csv",
        previewTitle: "Anteprima CSV",
        previewCount: "{count} schede valide rilevate nel file.",
        modeLabel: "Modalità di importazione:",
        modeMerge: "Unisci (aggiungi alle schede esistenti)",
        modeReplace: "Sostituisci (sovrascrivi tutte le schede)",
        btnCancel: "Annulla",
        btnImport: "Esegui importazione",
        errNoRecords: "Nessuna scheda valida trovata nel file CSV fornito.",
        errParse: "Impossibile elaborare il CSV. Assicurati che sia nel formato standard separato da virgole."
      },
      confirm: {
        deleteTitle: "Elimina scheda",
        deleteMsg: "Confermi la rimozione della scheda formativa di {name}?",
        clearTitle: "Cancella tutte le schede",
        clearMsg: "Confermi la cancellazione di tutte le schede di formazione? L'operazione non può essere annullata a meno di avere un backup CSV.",
        btnCancel: "Annulla",
        btnConfirm: "Conferma"
      },
      toasts: {
        validationError: "Compila tutti i campi obbligatori (Nome, Data del corso, Ente formatore e Periodo di rinnovo).",
        recordAdded: "Scheda aggiunta per {name}.",
        recordUpdated: "Scheda aggiornata per {name}.",
        recordDeleted: "Scheda eliminata.",
        allCleared: "Tutte le schede sono state rimosse.",
        noExportRecords: "Nessuna scheda disponibile per l'esportazione.",
        csvExported: "File CSV esportato con successo.",
        importSuccess: "Importate con successo {count} schede.",
        lapsedAlert: "Attenzione: {count} scheda/e di formazione sono scadute e richiedono il rinnovo immediato.",
        calendarExported: "File calendario (.ics) esportato con successo.",
        quickRenewReady: "Dati di rinnovo caricati per {name}. Verifica e invia per registrare il rinnovo.",
        backupSuccess: "Backup JSON scaricato con successo.",
        restoreSuccess: "Ripristinate con successo {count} schede.",
        profileCreated: "Creato profilo studio: {name}",
        profileSwitched: "Passato al profilo: {name}",
        profileRenamed: "Profilo rinominato in: {name}",
        profileDeleted: "Profilo e schede collegate eliminati.",
        errEmptyName: 'Inserisci un nome per il profilo dello studio.'
      },
      calendar: {
        eventSummary: "Rinnovo formazione patogeni ematici: {name} ({studio})",
        eventDescription: "Rinnovo formazione patogeni a trasmissione ematica per {name} ({role}). Ente precedente: {provider}. Data corso: {date}. Riferimento certificato: {filing}.",
        alarm30Description: "Promemoria: il corso sui patogeni ematici per {name} scade tra 30 giorni.",
        alarm7Description: "Urgente: il corso sui patogeni ematici per {name} scade tra 7 giorni!"
      },
      passModal: {
        title: "Scheda di formazione del collaboratore",
        cardBadge: "REGISTRO FORMAZIONE",
        cardTitle: "Scheda di formazione del collaboratore",
        studioLabel: "Studio / Struttura:",
        staffLabel: "Collaboratore:",
        roleLabel: "Ruolo nello studio:",
        providerLabel: "Ente formatore:",
        completedLabel: "Data completamento:",
        expiryLabel: "Valido fino a / Scadenza:",
        cycleLabel: "Ciclo di rinnovo:",
        cycleMonths: "{months} Mesi",
        statusLabel: "Stato di conformità:",
        filingLabel: "Sede archiviazione:",
        attestationNotice: "Questa tessera riporta quanto registrato dallo studio: la data della formazione, l'ente formatore e il luogo di archiviazione inseriti dallo studio. Non è un certificato e non dimostra che la formazione sia avvenuta. La prova è il certificato dell'ente formatore.",
        signatureLine: "Firma titolare / responsabile dello studio: _______________________ Data: ____________",
        btnPrint: "Stampa la scheda",
        btnClose: "Chiudi"
      },
      backupModal: {
        title: "Ripristina dati da file JSON",
        instruction: "Seleziona un file di backup JSON esportato in precedenza. Verranno ripristinati i profili dello studio e le schede dello staff.",
        chooseFile: "Seleziona file di backup JSON",
        dropZoneText: "o trascina qui un file di backup .json",
        previewTitle: "Anteprima backup",
        previewDetails: "Il backup contiene {recordsCount} schede dello staff suddivise in {profilesCount} profilo/i di studio.",
        modeLabel: "Modalità di ripristino:",
        modeMerge: "Unisci (aggiungi ai profili e alle schede esistenti)",
        modeReplace: "Ripristino completo (sostituisci tutti i profili e le schede)",
        btnCancel: "Annulla",
        btnRestore: "Esegui ripristino",
        errParse: "File di backup JSON non valido. Seleziona un file generato dalla funzione Backup di questa applicazione.",
        errNoRecords: "Il file di backup selezionato non contiene alcuna scheda valida."
      },
      profile: {
        label: "Profilo studio:",
        selectAria: "Seleziona profilo dello studio o della sede",
        addTitle: "Crea un nuovo profilo di studio o cabina",
        addBtn: "+ Nuovo profilo",
        manageTitle: "Gestisci o rinomina il profilo attivo",
        manageBtn: "Gestisci",
        activePill: "Profilo studio attivo:",
        defaultProfileName: "Studio principale",
        addModalTitle: "Crea nuovo profilo studio",
        addModalInstruction: "Aggiungi un nuovo profilo per gestire separatamente un'altra cabina, un reparto o una seconda sede.",
        profileNameLabel: "Nome profilo",
        profileNamePlaceholder: "es. Studio Centro, Ospiti / Guest, Cabina 2",
        btnAddSave: "Crea profilo",
        manageModalTitle: "Gestione profilo studio",
        renameLabel: "Rinomina profilo corrente",
        btnSaveRename: "Salva nome",
        deleteHeading: "Elimina profilo corrente",
        deleteWarning: "L'eliminazione di questo profilo rimuoverà definitivamente le sue {count} schede dello staff.",
        btnDeleteProfile: "Elimina profilo",
        deletePreventSingle: "È obbligatorio mantenere almeno un profilo studio.",
      },
      audit: {
        btnTitle: "📋 Lista di controllo per ispezione",
        modalTitle: "Verifica preparazione all'ispezione sanitaria",
        modalSubtitle: "Un controllo della tua tenuta dei registri: cosa manca o è scaduto in questo strumento. Non valuta la conformità a nessuna normativa.",
        statusReady: "PRONTO PER L'ISPEZIONE",
        statusWarning: "ATTENZIONE RICHIESTA",
        statusCritical: "CRITICO: SCHEDE SCADUTE",
        scoreLabel: "Punteggio preparazione ispezione:",
        checkLapsedTitle: "Nessuna certificazione scaduta",
        checkLapsedPass: "Tutto il personale registrato possiede un attestato di formazione in corso di validità.",
        checkLapsedFail: "{count} attestato/i del personale sono scaduti e richiedono rinnovo immediato.",
        check30Title: "Pianificazione anticipata rinnovi (orizzonte 30 giorni)",
        check30Pass: "Nessun attestato scade nei prossimi 30 giorni.",
        check30Warn: "{count} collaboratore/i hanno il rinnovo dovuto entro 30 giorni. Si raccomanda la prenotazione anticipata.",
        checkFilingTitle: "Posizione di archiviazione dei certificati documentata",
        checkFilingPass: "Tutte le schede indicano chiaramente la posizione fisica o digitale del certificato.",
        checkFilingWarn: "{count} scheda/e non riportano la nota di archiviazione del certificato.",
        checkRolesTitle: "Ruoli nello studio specificati",
        checkRolesPass: "Tutti i collaboratori hanno un ruolo assegnato all'interno dello studio.",
        checkRolesWarn: "{count} scheda/e presentano il campo del ruolo vuoto.",
        checkStudioTitle: "Denominazione dello studio configurata",
        checkStudioPass: "Il nome dello studio è configurato per i registri ispettivi: {studio}",
        checkStudioWarn: "Il nome dello studio non è impostato. Aggiungilo per le stampe ufficiali destinate ai controlli.",
        checkRosterTitle: "Completezza dell'organico registrato",
        checkRosterPass: "{count} schede di formazione attualmente registrate in archivio.",
        checkRosterWarn: "Nessuna scheda presente in questo profilo di studio.",
        actionFilterLapsed: "Mostra staff scaduto",
        actionFilter30: "Mostra scadenze a 30 giorni",
        actionFixFiling: "Verifica schede",
        actionSetStudio: "Imposta nome studio",
        btnPrint: "Stampa lista di controllo",
        btnClose: "Chiudi",
        scoreSummary: '{passed} su {total} controlli di tenuta dei registri superati ({percent}%).',
        actionAddRecord: 'Aggiungi una scheda'
      },
      chart: {
        title: "Stato di conformità",
        centerLabel: "Validi e attivi",
        badgeValid: "{percent}% validi",
        legendValid: "Attestati in corso di validità",
        legendWarning: "In scadenza a breve (≤90 giorni)",
        legendLapsed: "Già scaduti",
        empty: "Nessuna scheda presente"
      },
      autoBackup: {
        title: "Tutte le modifiche vengono salvate automaticamente nella memoria locale del tuo browser",
        savedJustNow: "Salvataggio automatico completato",
        savedAt: "Salvataggio automatico alle {time}",
        restoredNotice: "Ultime schede ripristinate dal backup locale automatico"
      },
      csv: {
        headerName: "Nome",
        headerRole: "Ruolo",
        headerDate: "Data corso",
        headerProvider: "Ente formatore",
        headerExpiry: "Data scadenza",
        headerRenewalMonths: "Mesi rinnovo",
        headerFilingRef: "Riferimento archiviazione",
        headerNotes: "Note",
        defaultProvider: "Formazione BBP"
      },
      common: {
        languageLabel: "Lingua",
        ariaCloseDialog: "Chiudi finestra di dialogo"
      }
    },
    de: {
      meta: {
        title: "Schulungsnachweis Infektionsschutz & BBP | Poli International",
        description: "Erfassen Sie Schulungsdaten zu blutübertragbaren Krankheitserregern im Team, Lehrgangsträger, Ablaufzeiträume (30, 60, 90 Tage), Ablageorte der Zertifikate und drucken Sie Inspektionslisten."
      },
      header: {
        badge: "BBP-Konformitätsübersicht",
        themeToggleAria: "Farbschema wechseln",
        themeToggleLight: "☀️ Heller Modus",
        themeToggleDark: "🌙 Dunkler Modus",
        title: "Schulungsnachweis Infektionsschutz & BBP",
        subtitle: "Protokollieren Sie Schulungsdaten des Personals, Lehrgangsträger und Zertifikatsablageorte. Überwachen Sie 30-, 60- und 90-Tage-Ablauffristen mit druckfertigen Inspektionslisten und CSV-Portabilität.",
        storageNotice: "Die Daten verbleiben vollständig in Ihrem Browser: keine Konten, keine Cloud-Übertragung."
      },
      nav: {
        relatedAria: "Zugehörige Studio-Werkzeuge",
        relatedHeading: "Zugehörige Werkzeuge für Studiosicherheit:",
        sharpsTool: "Kanülenentsorgungs-Tracker",
        autoclaveTool: "Autoklaven-Rechner"
      },
      disclaimer: {
        banner: "Ausschließlich administratives Hilfsmittel. Dieser Tracker dokumentiert Schulungsnachweise und ersetzt weder akkreditierte Sachkundefortbildungen noch bescheinigt er behördliche Genehmigungen."
      },
      summary: {
        ariaOverview: "Statusübersicht der Schulungsfristen",
        totalStaff: "Erfasstes Personal gesamt",
        totalStaffSub: "Alle aktiven Datensätze",
        lapsed: "Bereits abgelaufen",
        lapsedSub: "Sofortige Auffrischung erforderlich",
        within30: "Fällig in 30 Tagen",
        within30Sub: "Verlängerungsfenster geöffnet",
        within60: "Fällig in 60 Tagen",
        within60Sub: "Kommenden Lehrgang planen",
        within90: "Fällig in 90 Tagen",
        within90Sub: "Vorausschauende Planung"
      },
      form: {
        title: "Schulungsnachweis hinzufügen",
        editTitle: "Schulungsnachweis bearbeiten",
        cancelEdit: "Bearbeitung abbrechen",
        nameLabel: "Name des Teammitglieds",
        namePlaceholder: "z. B. Alex Morgan",
        roleLabel: "Tätigkeit im Studio",
        rolePlaceholder: "z. B. Body Piercer, Tätowierer, Empfangspersonal",
        dateLabel: "Schulungsdatum",
        providerLabel: "Lehrgangsträger / Anbieter",
        providerPlaceholder: "z. B. Rotes Kreuz, ProTrainings, Gesundheitsamt",
        renewalLabel: "Gültigkeitsdauer / Intervall",
        monthsOption12: "12 Monate (jährlich)",
        monthsOption24: "24 Monate (zweijährlich)",
        monthsOption36: "36 Monate (3 Jahre)",
        monthsOptionCustom: "Benutzerdefinierte Monate",
        customMonthsAria: "Benutzerdefinierte Verlängerungsmonate",
        filingLabel: "Ablageort des Zertifikats",
        filingHint: "(Standorthinweis, kein Datei-Upload)",
        filingPlaceholder: "z. B. Ordner A - Register 4, Studio-Cloud / Alex-BBP.pdf, Schrank 2",
        notesLabel: "Zusätzliche Notizen",
        notesPlaceholder: "z. B. Zertifikatsnummer, behördliche Registrierung, Anmerkungen",
        submitAdd: "Nachweis hinzufügen",
        submitUpdate: "Änderungen speichern",
        renewTitle: "Schulungsnachweis erneuern: {name}",
        submitRenew: "Verlängerung erfassen",
        errCustomRenewal: 'Geben Sie den eigenen Erneuerungszeitraum in Monaten an (1 bis 120).'
      },
      print: {
        title: "Konformitätsliste Schulungsnachweise Infektionsschutz",
        inspectionNotice: "Offizieller administrativer Studionachweis über absolvierte Schulungen des Personals zu blutübertragbaren Krankheitserregern und Hygiene.",
        generatedOn: "Erstellt am:",
        studioLabel: "Studioname:",
        defaultStudio: "Studio-Team",
        studioPlaceholder: "Studioname für Ausdruck",
        studioTitle: "Studioname für Ausdruck",
        signatureLine: "Unterschrift Studioleitung / Inhaber: ___________________________   Datum: ____________"
      },
      filters: {
        heading: "Ablauffristen-Filter:",
        all: "Alle Nachweise",
        lapsed: "Abgelaufen",
        days30: "Nächste 30 Tage",
        days60: "Nächste 60 Tage",
        days90: "Nächste 90 Tage",
        current: "Aktuell & gültig"
      },
      search: {
        placeholder: "Personal nach Name oder Tätigkeit suchen...",
        ariaLabel: "Personal nach Name oder Tätigkeit suchen",
        clearAria: "Suche zurücksetzen",
        resultsCount: "{count} Mitarbeiter gefunden"
      },
      actions: {
        printRoster: "Inspektionsliste drucken",
        batchRenew: "⚡ Team gesammelt verlängern",
        exportCsv: "CSV exportieren",
        importCsv: "CSV importieren",
        exportIcs: "Kalender (.ics) exportieren",
        backupJson: "Sicherung (JSON)",
        restoreJson: "Wiederherstellen (JSON)",
        clearAll: "Alle Nachweise löschen"
      },
      table: {
        emptyState: "Keine Personaleinträge vorhanden. Fügen Sie oben das erste Teammitglied hinzu oder importieren Sie eine CSV-Datei.",
        emptyFilter: "Keine Nachweise entsprechen dem gewählten Fristenfilter.",
        emptySearch: "Keine Mitarbeiter entsprechen Ihren Suchkriterien.",
        ariaRoster: "Personalschulungsliste",
        colName: "Mitarbeiter & Tätigkeit",
        colProvider: "Lehrgangsträger",
        colDate: "Schulungsdatum",
        colExpiry: "Gültig bis",
        colStatus: "Konformitätsstatus",
        colFiling: "Ablageort",
        colNotes: "Notizen",
        colActions: "Aktionen",
        actionEdit: "Bearbeiten",
        actionDelete: "Löschen",
        actionRenew: "Verlängern",
        actionCalendar: "Kalender",
        actionPass: "Karte",
        sortName: "Nach Namen sortieren",
        sortDate: "Nach Schulungsdatum sortieren",
        sortExpiry: "Nach Ablaufdatum sortieren"
      },
      status: {
        lapsedDays: "Abgelaufen vor {days} T",
        today: "LÄUFT HEUTE AB",
        dueWithin30: "FÄLLIG IN {days} T",
        dueWithin60: "Fällig in {days} T",
        dueWithin90: "Fällig in {days} T",
        current: "GÜLTIG ({days} T)"
      },
      exportModal: {
        title: "Schulungsliste als CSV exportieren",
        instruction: "Wählen Sie aus, welche Nachweise in den CSV-Export aufgenommen werden sollen:",
        optFull: "Vollständige Liste ({count} Nachweise)",
        optFiltered: "Aktuell gefilterte Ansicht ({count} Nachweise)",
        btnCancel: "Abbrechen",
        btnExport: "CSV exportieren"
      },
      importModal: {
        title: "Personalnachweise aus CSV importieren",
        instructions: "Laden Sie eine aus diesem Tracker exportierte CSV-Datei hoch oder verwenden Sie folgende Spaltenstruktur: Name, Tätigkeit, Schulungsdatum, Anbieter, Ablaufdatum, Erneuerungsmonate, Ablageort, Notizen.",
        chooseFile: "CSV-Datei auswählen",
        dropZoneText: "oder .csv-Datei hierher ziehen",
        previewTitle: "CSV-Vorschau",
        previewCount: "{count} gültige Nachweise in der Datei erkannt.",
        modeLabel: "Importmodus:",
        modeMerge: "Zusammenführen (zu bestehenden Daten hinzufügen)",
        modeReplace: "Ersetzen (alle vorhandenen Nachweise überschreiben)",
        btnCancel: "Abbrechen",
        btnImport: "Import durchführen",
        errNoRecords: "In der bereitgestellten CSV-Datei wurden keine gültigen Nachweise gefunden.",
        errParse: "CSV-Datei konnte nicht verarbeitet werden. Bitte Standard-Kommatrennung prüfen."
      },
      confirm: {
        deleteTitle: "Nachweis löschen",
        deleteMsg: "Möchten Sie den Schulungsnachweis für {name} wirklich entfernen?",
        clearTitle: "Alle Nachweise löschen",
        clearMsg: "Möchten Sie wirklich alle Schulungsnachweise löschen? Dieser Vorgang kann nicht rückgängig gemacht werden, sofern Sie kein CSV-Backup besitzen.",
        btnCancel: "Abbrechen",
        btnConfirm: "Bestätigen"
      },
      toasts: {
        validationError: "Bitte füllen Sie alle Pflichtfelder aus (Name, Schulungsdatum, Lehrgangsträger und Gültigkeitsdauer).",
        recordAdded: "Nachweis für {name} hinzugefügt.",
        recordUpdated: "Nachweis für {name} aktualisiert.",
        recordDeleted: "Nachweis gelöscht.",
        allCleared: "Alle Nachweise wurden gelöscht.",
        noExportRecords: "Keine Nachweise für den Export vorhanden.",
        csvExported: "CSV-Datei erfolgreich exportiert.",
        importSuccess: "{count} Nachweise erfolgreich importiert.",
        lapsedAlert: "Achtung: {count} Schulungsnachweis(e) sind abgelaufen und erfordern eine Erneuerung.",
        calendarExported: "Kalenderdatei (.ics) erfolgreich exportiert.",
        quickRenewReady: "Auffrischungsdaten für {name} geladen. Prüfen und speichern.",
        backupSuccess: "JSON-Sicherung erfolgreich heruntergeladen.",
        restoreSuccess: "{count} Nachweise erfolgreich wiederhergestellt.",
        profileCreated: "Studioprofil erstellt: {name}",
        profileSwitched: "Zu Profil gewechselt: {name}",
        profileRenamed: "Profil umbenannt in: {name}",
        profileDeleted: "Profil und zugehörige Nachweise gelöscht.",
        errEmptyName: 'Geben Sie einen Namen für das Studioprofil an.'
      },
      calendar: {
        eventSummary: "BBP-Schulungsauffrischung: {name} ({studio})",
        eventDescription: "Auffrischungsschulung zu Infektionsschutz und blutübertragbaren Erregern für {name} ({role}). Bisheriger Träger: {provider}. Schulungsdatum: {date}. Zertifikatsablage: {filing}.",
        alarm30Description: "Erinnerung: Die BBP-Schulung für {name} läuft in 30 Tagen ab.",
        alarm7Description: "Dringend: Die BBP-Schulung für {name} läuft in 7 Tagen ab!"
      },
      passModal: {
        title: "Schulungskarte für Mitarbeitende",
        cardBadge: "SCHULUNGSNACHWEIS",
        cardTitle: "Schulungskarte für Mitarbeitende",
        studioLabel: "Studio / Einrichtung:",
        staffLabel: "Teammitglied:",
        roleLabel: "Tätigkeit im Studio:",
        providerLabel: "Lehrgangsträger:",
        completedLabel: "Abschlussdatum:",
        expiryLabel: "Gültig bis / Ablauf:",
        cycleLabel: "Auffrischungsintervall:",
        cycleMonths: "{months} Monate",
        statusLabel: "Konformitätsstatus:",
        filingLabel: "Ablageort des Zertifikats:",
        attestationNotice: "Diese Karte gibt wieder, was das Studio erfasst hat: Schulungsdatum, Anbieter und Ablageort, wie vom Studio eingetragen. Sie ist kein Zertifikat und belegt nicht, dass die Schulung stattgefunden hat. Der Nachweis ist das Zertifikat des Anbieters.",
        signatureLine: "Unterschrift Studioleitung / Inhaber: _______________________ Datum: ____________",
        btnPrint: "Karte drucken",
        btnClose: "Schließen"
      },
      backupModal: {
        title: "Tracker-Daten aus JSON wiederherstellen",
        instruction: "Wählen Sie eine zuvor exportierte JSON-Sicherungsdatei aus. Studioprofile und Personalnachweise werden wiederhergestellt.",
        chooseFile: "JSON-Sicherungsdatei auswählen",
        dropZoneText: "oder .json-Sicherungsdatei hierher ziehen",
        previewTitle: "Sicherungsvorschau",
        previewDetails: "Die Sicherung enthält {recordsCount} Personalnachweise in {profilesCount} Studioprofil(en).",
        modeLabel: "Wiederherstellungsmodus:",
        modeMerge: "Zusammenführen (zu bestehenden Profilen und Nachweisen hinzufügen)",
        modeReplace: "Vollständige Wiederherstellung (alle Profile und Nachweise ersetzen)",
        btnCancel: "Abbrechen",
        btnRestore: "Wiederherstellung ausführen",
        errParse: "Ungültige JSON-Sicherungsdatei. Bitte wählen Sie eine mit dieser Anwendung erstellte Datei.",
        errNoRecords: "Die ausgewählte Sicherungsdatei enthält keine gültigen Personalnachweise."
      },
      profile: {
        label: "Studioprofil:",
        selectAria: "Studio- oder Raumprofil auswählen",
        addTitle: "Neues Studio- oder Raumprofil anlegen",
        addBtn: "+ Neues Profil",
        manageTitle: "Aktives Profil verwalten oder umbenennen",
        manageBtn: "Verwalten",
        activePill: "Aktives Studioprofil:",
        defaultProfileName: "Hauptstudio",
        addModalTitle: "Neues Studioprofil anlegen",
        addModalInstruction: "Legen Sie ein neues Profil an, um Nachweise für einen separaten Raum, Bereich oder Standort getrennt zu führen.",
        profileNameLabel: "Profilname",
        profileNamePlaceholder: "z. B. Innenstadt-Studio, Gastkünstler, Raum 2",
        btnAddSave: "Profil anlegen",
        manageModalTitle: "Studioprofil verwalten",
        renameLabel: "Aktuelles Profil umbenennen",
        btnSaveRename: "Namen speichern",
        deleteHeading: "Aktuelles Profil löschen",
        deleteWarning: "Das Löschen dieses Profils entfernt die zugehörigen {count} Personalnachweise dauerhaft.",
        btnDeleteProfile: "Profil löschen",
        deletePreventSingle: "Es muss mindestens ein Studioprofil erhalten bleiben.",
      },
      audit: {
        btnTitle: "📋 Inspektions-Audit-Checkliste",
        modalTitle: "Vorbereitung auf die behördliche Hygieneinspektion",
        modalSubtitle: "Eine Prüfung Ihrer eigenen Aktenführung: was in diesem Tool fehlt oder abgelaufen ist. Sie bewertet keine Einhaltung von Vorschriften.",
        statusReady: "INSPEKTIONSBEREIT",
        statusWarning: "HANDLUNGSBEDARF",
        statusCritical: "KRITISCH: ABGELAUFENE NACHWEISE",
        scoreLabel: "Audit-Bereitschaftsindex:",
        checkLapsedTitle: "Keine abgelaufenen Zertifikate",
        checkLapsedPass: "Alle erfassten Mitarbeiter verfügen über aktive, gültige Schulungsnachweise.",
        checkLapsedFail: "{count} Schulungsnachweis(e) sind abgelaufen und müssen umgehend erneuert werden.",
        check30Title: "Vorausschauende Verlängerung (30-Tage-Horizont)",
        check30Pass: "In den nächsten 30 Tagen laufen keine Schulungsnachweise ab.",
        check30Warn: "{count} Mitarbeiter müssen innerhalb von 30 Tagen erneuern. Frühzeitige Buchung empfohlen.",
        checkFilingTitle: "Zertifikatsablageorte dokumentiert",
        checkFilingPass: "Für alle Nachweise sind physische oder digitale Ablageorte vermerkt.",
        checkFilingWarn: "Bei {count} Nachweis(en) fehlt der Vermerk zum Ablageort des Zertifikats.",
        checkRolesTitle: "Tätigkeitsbereiche im Studio definiert",
        checkRolesPass: "Allen Mitarbeitern ist ein Tätigkeitsbereich im Studio zugeordnet.",
        checkRolesWarn: "Bei {count} Nachweis(en) ist das Feld für die Tätigkeit nicht ausgefüllt.",
        checkStudioTitle: "Studiobezeichnung hinterlegt",
        checkStudioPass: "Studioname ist für Inspektionslisten konfiguriert: {studio}",
        checkStudioWarn: "Studioname ist nicht hinterlegt. Bitte für offizielle Inspektionsausdrucke ergänzen.",
        checkRosterTitle: "Vollständigkeit der Nachweisliste",
        checkRosterPass: "{count} Personalnachweise aktuell in diesem Profil erfasst.",
        checkRosterWarn: "In diesem Studioprofil sind noch keine Personalnachweise erfasst.",
        actionFilterLapsed: "Abgelaufenes Personal anzeigen",
        actionFilter30: "Fälligkeiten in 30 Tagen anzeigen",
        actionFixFiling: "Nachweise prüfen",
        actionSetStudio: "Studionamen festlegen",
        btnPrint: "Audit-Checkliste drucken",
        btnClose: "Schließen",
        scoreSummary: '{passed} von {total} Prüfungen zur Aktenführung erfüllt ({percent} %).',
        actionAddRecord: 'Eintrag hinzufügen'
      },
      chart: {
        title: "Konformitätsstatus",
        centerLabel: "Gültig & aktiv",
        badgeValid: "{percent}% gültig",
        legendValid: "Gültige Nachweise",
        legendWarning: "Demnächst fällig (≤90 Tage)",
        legendLapsed: "Bereits abgelaufen",
        empty: "Keine Personaldaten"
      },
      autoBackup: {
        title: "Alle Änderungen werden automatisch im lokalen Browserspeicher gesichert",
        savedJustNow: "Automatisch gespeichert",
        savedAt: "Automatisch gespeichert um {time}",
        restoredNotice: "Aktuellste Nachweise aus lokaler automatischer Sicherung wiederhergestellt"
      },
      csv: {
        headerName: "Mitarbeitername",
        headerRole: "Tätigkeit",
        headerDate: "Schulungsdatum",
        headerProvider: "Anbieter",
        headerExpiry: "Ablaufdatum",
        headerRenewalMonths: "Verlängerungsmonate",
        headerFilingRef: "Ablageort",
        headerNotes: "Notizen",
        defaultProvider: "BBP-Schulung"
      },
      common: {
        languageLabel: "Sprache",
        ariaCloseDialog: "Dialogfenster schließen"
      }
    },
    es: {
      meta: {
        title: "Registro de formación sobre patógenos hemáticos | Poli International",
        description: "Controle las fechas de cursos sobre patógenos transmitidos por sangre del personal, entidades formadoras, plazos de caducidad (30, 60, 90 días), ubicación de certificados e imprima registros para inspecciones."
      },
      header: {
        badge: "Control de cumplimiento BBP",
        themeToggleAria: "Alternar modo visual",
        themeToggleLight: "☀️ Aspecto claro",
        themeToggleDark: "🌙 Aspecto oscuro",
        title: "Registro de formación sobre patógenos hemáticos",
        subtitle: "Registre las fechas de acreditación del personal, entidades formadoras y ubicación de certificados. Supervise los vencimientos a 30, 60 y 90 días con informes listos para inspecciones y descarga en CSV.",
        storageNotice: "Toda la información se mantiene exclusivamente en su navegador: sin cuentas, sin envíos a la nube."
      },
      nav: {
        relatedAria: "Utilidades del estudio asociadas",
        relatedHeading: "Herramientas de seguridad para estudios:",
        sharpsTool: "Control de residuos punzocortantes",
        autoclaveTool: "Calculadora de ciclos de autoclave"
      },
      disclaimer: {
        banner: "Aplicación de uso estrictamente administrativo. Este registro anota capacitaciones y no sustituye la formación homologada en patógenos de transmisión hemática ni acredita certificaciones sanitarias oficiales."
      },
      summary: {
        ariaOverview: "Resumen del estado de renovación de cursos",
        totalStaff: "Total de personal inscrito",
        totalStaffSub: "Fichas activas del equipo",
        lapsed: "Certificaciones vencidas",
        lapsedSub: "Requieren renovación urgente",
        within30: "Vencen en 30 días",
        within30Sub: "Plazo de renovación abierto",
        within60: "Vencen en 60 días",
        within60Sub: "Planificar siguiente curso",
        within90: "Vencen en 90 días",
        within90Sub: "Previsión anticipada"
      },
      form: {
        title: "Añadir registro de formación",
        editTitle: "Modificar ficha de formación",
        cancelEdit: "Descartar edición",
        nameLabel: "Nombre del profesional",
        namePlaceholder: "ej. Alex Morgan",
        roleLabel: "Puesto en el estudio",
        rolePlaceholder: "ej. Anillador, Tatuador, Personal de recepción",
        dateLabel: "Fecha de realización del curso",
        providerLabel: "Entidad formadora",
        providerPlaceholder: "ej. Cruz Roja, ProTrainings, Sanidad local",
        renewalLabel: "Intervalo de renovación",
        monthsOption12: "12 meses (anualidad)",
        monthsOption24: "24 meses (bienal)",
        monthsOption36: "36 meses (trienal)",
        monthsOptionCustom: "Meses a medida",
        customMonthsAria: "Cantidad personalizada de meses",
        filingLabel: "Referencia de archivo del certificado",
        filingHint: "(indicación de ubicación física/digital, no requiere subida)",
        filingPlaceholder: "ej. Archivador A - Pestaña 4, Drive estudio / Alex-BBP.pdf, Cajón 2",
        notesLabel: "Anotaciones adicionales",
        notesPlaceholder: "ej. N° de certificado sanitario, registro profesional, observaciones",
        submitAdd: "Registrar formación",
        submitUpdate: "Guardar cambios",
        renewTitle: "Renovar acreditación de: {name}",
        submitRenew: "Asentar renovación",
        errCustomRenewal: 'Introduzca el periodo de renovación personalizado en meses (1 a 120).'
      },
      print: {
        title: "Libro de registro de formación en patógenos de transmisión hemática",
        inspectionNotice: "Acreditación administrativa interna del estudio sobre formación completada en patógenos sanguíneos y bioseguridad del equipo.",
        generatedOn: "Documento emitido el:",
        studioLabel: "Denominación del estudio:",
        defaultStudio: "Equipo profesional",
        studioPlaceholder: "Denominación para el informe",
        studioTitle: "Denominación del estudio para el informe impreso",
        signatureLine: "Firma de la dirección / titular del estudio: ___________________________   Fecha: ____________"
      },
      filters: {
        heading: "Filtrar por margen de vencimiento:",
        all: "Listado completo",
        lapsed: "Vencidos",
        days30: "Próximos 30 días",
        days60: "Próximos 60 días",
        days90: "Próximos 90 días",
        current: "Vigentes"
      },
      search: {
        placeholder: "Localizar personal por nombre o labor...",
        ariaLabel: "Buscar profesional por su nombre o labor",
        clearAria: "Borrar búsqueda",
        resultsCount: "{count} profesional(es) localizado(s)"
      },
      actions: {
        printRoster: "Imprimir informe de inspección",
        batchRenew: "⚡ Renovación por bloque del equipo",
        exportCsv: "Descargar CSV",
        importCsv: "Cargar archivo CSV",
        exportIcs: "Descargar agenda (.ics)",
        backupJson: "Copia de respaldo (JSON)",
        restoreJson: "Restablecer copia (JSON)",
        clearAll: "Vaciar registros"
      },
      table: {
        emptyState: "No constan profesionales registrados. Agregue el primero en el formulario superior o importe un archivo CSV.",
        emptyFilter: "Ninguna ficha coincide con el filtro de vencimiento seleccionado.",
        emptySearch: "Ningún registro coincide con los términos de búsqueda introducidos.",
        ariaRoster: "Listado general de formación del personal",
        colName: "Profesional y ocupación",
        colProvider: "Entidad formadora",
        colDate: "Fecha de realización",
        colExpiry: "Vencimiento",
        colStatus: "Estado de cumplimiento",
        colFiling: "Ubicación del archivo",
        colNotes: "Observaciones",
        colActions: "Gestiones",
        actionEdit: "Modificar",
        actionDelete: "Suprimir",
        actionRenew: "Renovar",
        actionCalendar: "Agendar",
        actionPass: "Ficha",
        sortName: "Ordenar según nombre",
        sortDate: "Ordenar según fecha de curso",
        sortExpiry: "Ordenar según fecha de vencimiento"
      },
      status: {
        lapsedDays: "Venció hace {days} d",
        today: "VENCE HOY",
        dueWithin30: "VENCE EN {days} d",
        dueWithin60: "Vence en {days} d",
        dueWithin90: "Vence en {days} d",
        current: "VIGENTE ({days} d)"
      },
      exportModal: {
        title: "Exportación del listado a CSV",
        instruction: "Indique las fichas que formarán parte de la exportación CSV:",
        optFull: "Total del registro ({count} fichas)",
        optFiltered: "Filtro visual actual ({count} fichas)",
        btnCancel: "Descartar",
        btnExport: "Generar CSV"
      },
      importModal: {
        title: "Incorporar fichas del personal desde CSV",
        instructions: "Seleccione o arrastre un documento CSV exportado desde esta utilidad o estructurado con: Nombre, Rol, Fecha de formación, Proveedor, Fecha de vencimiento, Meses de renovación, Referencia de archivo, Notas.",
        chooseFile: "Elegir archivo CSV",
        dropZoneText: "o arrastre y deposite aquí un archivo .csv",
        previewTitle: "Visualización previa del CSV",
        previewCount: "{count} registros válidos identificados en el documento.",
        modeLabel: "Tipo de incorporación:",
        modeMerge: "Combinar (sumar a los existentes)",
        modeReplace: "Sustituir (sobreescribir fichas actuales)",
        btnCancel: "Descartar",
        btnImport: "Procesar importación",
        errNoRecords: "No se identificaron fichas de personal aptas en el archivo CSV aportado.",
        errParse: "No se pudo interpretar el archivo CSV. Compruebe la separación por comas reglamentaria."
      },
      confirm: {
        deleteTitle: "Eliminar ficha",
        deleteMsg: "¿Desea retirar definitivamente el expediente de formación de {name}?",
        clearTitle: "Vaciar todos los expedientes",
        clearMsg: "¿Confirma la supresión de la totalidad de registros de formación? Esta gestión no tiene vuelta atrás salvo que posea un archivo de respaldo CSV.",
        btnCancel: "Descartar",
        btnConfirm: "Dar conformidad"
      },
      toasts: {
        validationError: "Es necesario cumplimentar los campos obligatorios (Nombre, Fecha del curso, Entidad formadora e Intervalo).",
        recordAdded: "Ficha incorporada para {name}.",
        recordUpdated: "Ficha actualizada para {name}.",
        recordDeleted: "Ficha retirada con éxito.",
        allCleared: "Se han vaciado todas las fichas.",
        noExportRecords: "No hay registros disponibles que puedan exportarse.",
        csvExported: "Archivo CSV generado correctamente.",
        importSuccess: "Se incorporaron con éxito {count} fichas.",
        lapsedAlert: "Aviso: constan {count} acreditación(es) vencida(s) que precisan renovación inmediata.",
        calendarExported: "Archivo de agenda (.ics) generado satisfactoriamente.",
        quickRenewReady: "Información de renovación cargada para {name}. Revise y confirme para formalizar.",
        backupSuccess: "Copia de respaldo JSON descargada satisfactoriamente.",
        restoreSuccess: "Se restablecieron con éxito {count} registros.",
        profileCreated: "Perfil de estudio establecido: {name}",
        profileSwitched: "Cambiado al perfil: {name}",
        profileRenamed: "Perfil renombrado a: {name}",
        profileDeleted: "Se eliminó el perfil y sus expedientes correspondientes.",
        errEmptyName: 'Introduzca un nombre para el perfil de estudio.'
      },
      calendar: {
        eventSummary: "Renovación curso patógenos sanguíneos: {name} ({studio})",
        eventDescription: "Renovación formativa en patógenos de transmisión hemática para {name} ({role}). Entidad anterior: {provider}. Fecha de realización: {date}. Referencia de archivo: {filing}.",
        alarm30Description: "Aviso: la formación en patógenos de {name} vence en 30 días.",
        alarm7Description: "Urgente: la formación en patógenos de {name} expira en 7 días."
      },
      passModal: {
        title: "Ficha de formación del personal",
        cardBadge: "REGISTRO DE FORMACIÓN",
        cardTitle: "Ficha de formación del personal",
        studioLabel: "Estudio / Espacio:",
        staffLabel: "Profesional acreditado:",
        roleLabel: "Ocupación en estudio:",
        providerLabel: "Entidad formadora:",
        completedLabel: "Fecha de expedición:",
        expiryLabel: "Período de validez / Vencimiento:",
        cycleLabel: "Cadencia de renovación:",
        cycleMonths: "{months} meses",
        statusLabel: "Situación de cumplimiento:",
        filingLabel: "Localización documental:",
        attestationNotice: "Esta tarjeta reproduce lo que registró el estudio: la fecha de formación, el proveedor y el lugar de archivo introducidos por el estudio. No es un certificado y no demuestra que la formación se realizara. La prueba es el certificado del proveedor de formación.",
        signatureLine: "Firma responsable / titular del estudio: _______________________ Fecha: ____________",
        btnPrint: "Imprimir la ficha",
        btnClose: "Cerrar ventana"
      },
      backupModal: {
        title: "Restablecer información desde copia JSON",
        instruction: "Elija un archivo de respaldo JSON generado previamente. Se restaurarán perfiles y fichas de personal.",
        chooseFile: "Seleccionar archivo JSON",
        dropZoneText: "o deposite el archivo .json de respaldo en esta área",
        previewTitle: "Contenido de la copia",
        previewDetails: "La copia contiene {recordsCount} fichas de personal distribuidas en {profilesCount} perfil(es).",
        modeLabel: "Modalidad de restitución:",
        modeMerge: "Sumar (anexar a los perfiles y registros existentes)",
        modeReplace: "Restitución integral (reemplazar la totalidad de perfiles y registros)",
        btnCancel: "Descartar",
        btnRestore: "Llevar a cabo la restitución",
        errParse: "Documento JSON no compatible. Seleccione una copia creada por esta misma aplicación.",
        errNoRecords: "El archivo de respaldo seleccionado carece de expedientes válidos."
      },
      profile: {
        label: "Perfil de estudio:",
        selectAria: "Elegir perfil de estudio o sala",
        addTitle: "Registrar nueva sala o sede del estudio",
        addBtn: "+ Nuevo perfil",
        manageTitle: "Administrar o renombrar perfil actual",
        manageBtn: "Configurar",
        activePill: "Perfil operativo del estudio:",
        defaultProfileName: "Estudio central",
        addModalTitle: "Alta de nuevo perfil de estudio",
        addModalInstruction: "Incorpore un perfil diferenciado para segmentar la documentación de otra cabina, departamento o local físico.",
        profileNameLabel: "Denominación del perfil",
        profileNamePlaceholder: "ej. Estudio Centro, Artistas invitados, Cabina 2",
        btnAddSave: "Dar de alta perfil",
        manageModalTitle: "Configurar perfil de estudio",
        renameLabel: "Renombrar perfil operativo",
        btnSaveRename: "Guardar denominación",
        deleteHeading: "Eliminar perfil operativo",
        deleteWarning: "Suprimir este perfil borrará de forma definitiva sus {count} expedientes asociados.",
        btnDeleteProfile: "Proceder con el borrado",
        deletePreventSingle: "Es imprescindible mantener al menos un perfil de estudio activo.",
      },
      audit: {
        btnTitle: "📋 Lista de comprobación para inspección sanitaria",
        modalTitle: "Preparación de la inspección higiénico-sanitaria",
        modalSubtitle: "Una comprobación de su propio registro: qué falta o ha caducado en esta herramienta. No evalúa el cumplimiento de ninguna normativa.",
        statusReady: "PREPARADO PARA INSPECCIÓN",
        statusWarning: "ATENCIÓN NECESARIA",
        statusCritical: "CRÍTICO: CERTIFICACIONES CADUCADAS",
        scoreLabel: "Índice de preparación sanitaria:",
        checkLapsedTitle: "Sin certificados vencidos",
        checkLapsedPass: "Todo el personal dado de alta cuenta con acreditación formativa en vigor.",
        checkLapsedFail: "Constan {count} acreditación(es) vencida(s) que exigen renovación sin demora.",
        check30Title: "Planificación preventiva de renovaciones (horizonte 30 días)",
        check30Pass: "Ninguna certificación concluye su vigencia en los próximos 30 días.",
        check30Warn: "{count} profesional(es) tienen su renovación prevista en 30 días. Se aconseja reservar plaza formativa.",
        checkFilingTitle: "Ubicación de certificados documentada",
        checkFilingPass: "La totalidad de las fichas recogen la ubicación física o digital de su certificado.",
        checkFilingWarn: "{count} expediente(s) carecen de nota sobre la ubicación del certificado.",
        checkRolesTitle: "Puestos del personal detallados",
        checkRolesPass: "Todos los colaboradores cuentan con un cometido especificado en el estudio.",
        checkRolesWarn: "{count} expediente(s) tienen el campo de puesto sin definir.",
        checkStudioTitle: "Identificación del establecimiento fijada",
        checkStudioPass: "Nombre del estudio configurado para las listas oficiales: {studio}",
        checkStudioWarn: "Falta fijar la denominación del estudio para los documentos oficiales de control.",
        checkRosterTitle: "Exhaustividad del registro de plantilla",
        checkRosterPass: "Constan {count} expedientes de formación registrados actualmente.",
        checkRosterWarn: "No hay constancia de personal en este perfil de estudio.",
        actionFilterLapsed: "Ver personal vencido",
        actionFilter30: "Ver vencimientos a 30 días",
        actionFixFiling: "Examinar expedientes",
        actionSetStudio: "Fijar denominación del estudio",
        btnPrint: "Imprimir lista de autoevaluación",
        btnClose: "Cerrar ventana",
        scoreSummary: '{passed} de {total} comprobaciones de registro superadas ({percent} %).',
        actionAddRecord: 'Añadir un registro'
      },
      chart: {
        title: "Distribución de cumplimiento",
        centerLabel: "Acreditados y al día",
        badgeValid: "{percent}% al día",
        legendValid: "Acreditaciones vigentes",
        legendWarning: "Vence en breve (≤90 días)",
        legendLapsed: "Certificado vencido",
        empty: "Sin registros de personal"
      },
      autoBackup: {
        title: "Todas las variaciones se resguardan de forma automática en la memoria de su navegador",
        savedJustNow: "Guardado automático completado",
        savedAt: "Guardado automático a las {time}",
        restoredNotice: "Se restauraron los últimos registros desde el resguardo local automático"
      },
      csv: {
        headerName: "Nombre del profesional",
        headerRole: "Puesto o especialidad",
        headerDate: "Fecha de realización",
        headerProvider: "Entidad formadora",
        headerExpiry: "Fecha de vencimiento",
        headerRenewalMonths: "Meses de validez",
        headerFilingRef: "Ubicación de archivo",
        headerNotes: "Anotaciones",
        defaultProvider: "Formación BBP"
      },
      common: {
        languageLabel: "Idioma",
        ariaCloseDialog: "Cerrar cuadro modal"
      }
    },
    nl: {
      meta: {
        title: "BBP-scholingstracker voor de studio | Poli International",
        description: "Houd cursusdata voor bloedoverdraagbare ziekteverwekkers bij, opleiders, verlooptermijnen (30, 60, 90 dagen), certificaatlocaties en print inspectielijsten."
      },
      header: {
        badge: "BBP-nalevingsregistratie",
        themeToggleAria: "Wissel weergavethema",
        themeToggleLight: "☀️ Lichte weergave",
        themeToggleDark: "🌙 Donkere weergave",
        title: "BBP-scholingstracker voor de studio",
        subtitle: "Registreer cursusdata van teamleden, opleidingsinstanties en bewaarplekken van certificaten. Bewaak herinneringstermijnen van 30, 60 en 90 dagen met printbare inspectielijsten en CSV-export.",
        storageNotice: "Gegevens blijven uitsluitend in uw eigen browser opgeslagen: geen accounts, geen doorgifte naar de cloud."
      },
      nav: {
        relatedAria: "Aanverwante studiogereedschappen",
        relatedHeading: "Aanverwante veiligheidstools voor studio's:",
        sharpsTool: "Naaldencontainer-registratie",
        autoclaveTool: "Autoclaaf-calculator"
      },
      disclaimer: {
        banner: "Uitsluitend een administratief hulpmiddel. Dit register noteert cursusgegevens en vervangt geen erkende opleiding infectiepreventie of wettelijke certificering."
      },
      summary: {
        ariaOverview: "Overzicht van scholingstermijnen en herhalingen",
        totalStaff: "Geregistreerde medewerkers",
        totalStaffSub: "Alle actieve dossiers",
        lapsed: "Reeds verlopen",
        lapsedSub: "Onmiddellijke herhaling vereist",
        within30: "Vervalt binnen 30 dagen",
        within30Sub: "Hernieuwingsvenster geopend",
        within60: "Vervalt binnen 60 dagen",
        within60Sub: "Aankomende training inplannen",
        within90: "Vervalt binnen 90 dagen",
        within90Sub: "Vooruitziende planning"
      },
      form: {
        title: "Scholingsdossier toevoegen",
        editTitle: "Scholingsdossier bewerken",
        cancelEdit: "Bewerking afbreken",
        nameLabel: "Naam teamlid",
        namePlaceholder: "bijv. Alex Morgan",
        roleLabel: "Functie in de studio",
        rolePlaceholder: "bijv. Piercer, Tatoeëerder, Baliemedewerker",
        dateLabel: "Cursusdatum",
        providerLabel: "Opleidingsinstantie",
        providerPlaceholder: "bijv. Rode Kruis, ProTrainings, GGD / GHOR",
        renewalLabel: "Herhalingsinterval",
        monthsOption12: "12 maanden (jaarlijks)",
        monthsOption24: "24 maanden (tweejaarlijks)",
        monthsOption36: "36 maanden (driejaarlijks)",
        monthsOptionCustom: "Aangepast aantal maanden",
        customMonthsAria: "Aangepaste herhalingsperiode in maanden",
        filingLabel: "Archiefreferentie certificaat",
        filingHint: "(locatienotitie, geen bestandsupload)",
        filingPlaceholder: "bijv. Ordner A - Tabblad 4, Studio-Drive / Alex-BBP.pdf, Kast 2",
        notesLabel: "Aanvullende notities",
        notesPlaceholder: "bijv. Certificaatnummer, vergunningvermelding, opmerkingen",
        submitAdd: "Dossier toevoegen",
        submitUpdate: "Wijzigingen opslaan",
        renewTitle: "Scholing vernieuwen voor: {name}",
        submitRenew: "Herhaling vastleggen",
        errCustomRenewal: 'Vul de eigen vernieuwingsperiode in maanden in (1 tot 120).'
      },
      print: {
        title: "Nalevingsregister scholing bloedoverdraagbare ziekteverwekkers",
        inspectionNotice: "Officieel administratief studiodocument van voltooide scholingen in infectiepreventie en pathogenen door het studioteam.",
        generatedOn: "Aangemaakt op:",
        studioLabel: "Studionaam:",
        defaultStudio: "Studiomedewerkers",
        studioPlaceholder: "Studionaam voor afdruk",
        studioTitle: "Studionaam voor printbaar overzicht",
        signatureLine: "Handtekening studio-eigenaar / leidinggevende: ___________________________   Datum: ____________"
      },
      filters: {
        heading: "Filter op verlooptermijn:",
        all: "Alle dossiers",
        lapsed: "Verlopen",
        days30: "Komende 30 dagen",
        days60: "Komende 60 dagen",
        days90: "Komende 90 dagen",
        current: "Geldig en actueel"
      },
      search: {
        placeholder: "Zoek medewerker op naam of functie...",
        ariaLabel: "Zoek medewerker op naam of functie",
        clearAria: "Zoekopdracht wissen",
        resultsCount: "{count} medewerker(s) gevonden"
      },
      actions: {
        printRoster: "Inspectielijst printen",
        batchRenew: "⚡ Team gezamenlijk verlengen",
        exportCsv: "Exporteer CSV",
        importCsv: "Importeer CSV",
        exportIcs: "Exporteer kalender (.ics)",
        backupJson: "Reservekopie (JSON)",
        restoreJson: "Herstel kopie (JSON)",
        clearAll: "Alle dossiers wissen"
      },
      table: {
        emptyState: "Geen medewerkers gevonden. Voeg hierboven uw eerste teamlid toe of importeer een CSV-bestand.",
        emptyFilter: "Geen dossiers gevonden binnen de gekozen verlooptermijn.",
        emptySearch: "Geen medewerkers gevonden die voldoen aan uw zoekterm.",
        ariaRoster: "Scholingslijst van medewerkers",
        colName: "Medewerker & functie",
        colProvider: "Opleider",
        colDate: "Cursusdatum",
        colExpiry: "Geldig tot",
        colStatus: "Nalevingsstatus",
        colFiling: "Bewaarplek certificaat",
        colNotes: "Notities",
        colActions: "Beheer",
        actionEdit: "Bewerken",
        actionDelete: "Verwijderen",
        actionRenew: "Verlengen",
        actionCalendar: "Inplannen",
        actionPass: "Kaart",
        sortName: "Sorteer op medewerkersnaam",
        sortDate: "Sorteer op cursusdatum",
        sortExpiry: "Sorteer op verloopdatum"
      },
      status: {
        lapsedDays: "{days} d geleden verlopen",
        today: "VERVALT VANDAAG",
        dueWithin30: "VERVALT OVER {days} d",
        dueWithin60: "Vervalt over {days} d",
        dueWithin90: "Vervalt over {days} d",
        current: "ACTUEEL ({days} d)"
      },
      exportModal: {
        title: "Lijst exporteren naar CSV",
        instruction: "Kies welke dossiers in de CSV-export worden opgenomen:",
        optFull: "Volledige lijst ({count} dossiers)",
        optFiltered: "Huidige gefilterde weergave ({count} dossiers)",
        btnCancel: "Annuleren",
        btnExport: "Exporteer naar CSV"
      },
      importModal: {
        title: "Medewerkers importeren vanuit CSV",
        instructions: "Upload of sleep een CSV-bestand dat vanuit deze tool is geëxporteerd of kolommen bevat voor: Naam, Functie, Cursusdatum, Opleider, Verloopdatum, Herhalingsmaanden, Archiefreferentie, Notities.",
        chooseFile: "Kies CSV-bestand",
        dropZoneText: "of sleep hier een .csv-bestand naartoe",
        previewTitle: "CSV-voorvertoning",
        previewCount: "{count} geldige dossiers aangetroffen in bestand.",
        modeLabel: "Importmethode:",
        modeMerge: "Samenvoegen (toevoegen aan bestaande gegevens)",
        modeReplace: "Vervangen (alle huidige dossiers overschrijven)",
        btnCancel: "Annuleren",
        btnImport: "Import uitvoeren",
        errNoRecords: "Geen geldige medewerkersdossiers aangetroffen in het CSV-bestand.",
        errParse: "Kon het CSV-bestand niet verwerken. Controleer of komma-gescheiden opmaak is gebruikt."
      },
      confirm: {
        deleteTitle: "Dossier verwijderen",
        deleteMsg: "Weet u zeker dat u het scholingsdossier van {name} wilt verwijderen?",
        clearTitle: "Alle dossiers wissen",
        clearMsg: "Weet u zeker dat u alle scholingsdossiers wilt wissen? Deze actie kan niet ongedaan worden gemaakt tenzij u over een CSV-reservekopie beschikt.",
        btnCancel: "Annuleren",
        btnConfirm: "Bevestigen"
      },
      toasts: {
        validationError: "Vul alle verplichte velden in (Naam, Cursusdatum, Opleider en Herhalingsinterval).",
        recordAdded: "Dossier toegevoegd voor {name}.",
        recordUpdated: "Dossier bijgewerkt voor {name}.",
        recordDeleted: "Dossier verwijderd.",
        allCleared: "Alle dossiers gewist.",
        noExportRecords: "Geen dossiers beschikbaar voor export.",
        csvExported: "CSV-bestand met succes geëxporteerd.",
        importSuccess: "Succesvol {count} dossiers geïmporteerd.",
        lapsedAlert: "Let op: {count} scholingsdossier(s) zijn verlopen en vereisen hernieuwing.",
        calendarExported: "Agendabestand (.ics) met succes geëxporteerd.",
        quickRenewReady: "Hernieuwingsgegevens geladen voor {name}. Controleer en leg vast.",
        backupSuccess: "JSON-reservekopie met succes gedownload.",
        restoreSuccess: "Succesvol {count} dossiers hersteld.",
        profileCreated: "Studioprofiel aangemaakt: {name}",
        profileSwitched: "Overgeschakeld naar profiel: {name}",
        profileRenamed: "Profiel hernoemd naar: {name}",
        profileDeleted: "Profiel en bijbehorende dossiers verwijderd.",
        errEmptyName: 'Vul een naam in voor het studioprofiel.'
      },
      calendar: {
        eventSummary: "BBP-cursusherhaling: {name} ({studio})",
        eventDescription: "Scholingsherhaling overdraagbare bloedpathogenen voor {name} ({role}). Vorige opleider: {provider}. Cursusdatum: {date}. Bewaarplek certificaat: {filing}.",
        alarm30Description: "Herinnering: BBP-scholing voor {name} vervalt over 30 dagen.",
        alarm7Description: "Dringend: BBP-scholing voor {name} vervalt over 7 dagen!"
      },
      passModal: {
        title: "Trainingskaart medewerker",
        cardBadge: "TRAININGSREGISTRATIE",
        cardTitle: "Trainingskaart medewerker",
        studioLabel: "Studio / Locatie:",
        staffLabel: "Medewerker:",
        roleLabel: "Functie in studio:",
        providerLabel: "Opleidingsinstantie:",
        completedLabel: "Voltooiingsdatum:",
        expiryLabel: "Geldig tot / Vervaldatum:",
        cycleLabel: "Herhalingscyclus:",
        cycleMonths: "{months} Maanden",
        statusLabel: "Nalevingsstatus:",
        filingLabel: "Archieflocatie:",
        attestationNotice: "Deze kaart geeft weer wat de studio heeft vastgelegd: de trainingsdatum, de aanbieder en de bewaarplaats zoals ingevuld door de studio. Het is geen certificaat en bewijst niet dat de training heeft plaatsgevonden. Het bewijs is het certificaat van de aanbieder.",
        signatureLine: "Handtekening leidinggevende / eigenaar: _______________________ Datum: ____________",
        btnPrint: "Kaart afdrukken",
        btnClose: "Venster sluiten"
      },
      backupModal: {
        title: "Gegevens herstellen uit JSON-bestand",
        instruction: "Selecteer een eerder geëxporteerd JSON-reservekopiebestand. Hiermee worden studioprofielen en personeelsdossiers hersteld.",
        chooseFile: "Kies JSON-reservekopie",
        dropZoneText: "of sleep hier een .json-reservekopie naartoe",
        previewTitle: "Voorvertoning reservekopie",
        previewDetails: "De reservekopie bevat {recordsCount} personeelsdossiers verdeeld over {profilesCount} studioprofiel(en).",
        modeLabel: "Herstelmodus:",
        modeMerge: "Samenvoegen (aanvullen op bestaande profielen en dossiers)",
        modeReplace: "Volledig herstel (alle profielen en dossiers overschrijven)",
        btnCancel: "Annuleren",
        btnRestore: "Herstel uitvoeren",
        errParse: "Ongeldig JSON-reservekopiebestand. Kies een bestand dat met deze tool is aangemaakt.",
        errNoRecords: "Het geselecteerde reservekopiebestand bevat geen geldige personeelsdossiers."
      },
      profile: {
        label: "Studioprofiel:",
        selectAria: "Selecteer studio- of ruimteprofiel",
        addTitle: "Nieuw studio- of cabineprofiel aanmaken",
        addBtn: "+ Nieuw profiel",
        manageTitle: "Actief profiel beheren of hernoemen",
        manageBtn: "Beheren",
        activePill: "Actief studioprofiel:",
        defaultProfileName: "Hoofdstudio",
        addModalTitle: "Nieuw studioprofiel aanmaken",
        addModalInstruction: "Maak een afzonderlijk profiel aan om dossiers voor een andere behandelruimte, afdeling of vestiging apart bij te houden.",
        profileNameLabel: "Profielnaam",
        profileNamePlaceholder: "bijv. Studio Centrum, Gastartiesten, Cabine 2",
        btnAddSave: "Profiel opslaan",
        manageModalTitle: "Studioprofiel beheren",
        renameLabel: "Huidig profiel hernoemen",
        btnSaveRename: "Naam opslaan",
        deleteHeading: "Huidig profiel verwijderen",
        deleteWarning: "Het verwijderen van dit profiel wist definitief de bijbehorende {count} personeelsdossiers.",
        btnDeleteProfile: "Profiel definitief wissen",
        deletePreventSingle: "Er moet ten minste één studioprofiel behouden blijven.",
      },
      audit: {
        btnTitle: "📋 Inspectie-auditcontrolelijst",
        modalTitle: "Gereedheid voor inspectie en handhaving",
        modalSubtitle: "Een controle van je eigen administratie: wat ontbreekt of verlopen is in deze tool. Het beoordeelt geen naleving van regelgeving.",
        statusReady: "GEREED VOOR INSPECTIE",
        statusWarning: "AANDACHT VEREIST",
        statusCritical: "KRITIEK: VERLOPEN DOSSIERS",
        scoreLabel: "Inspectiegereedheidsscore:",
        checkLapsedTitle: "Nul verlopen certificeringen",
        checkLapsedPass: "Alle geregistreerde medewerkers beschikken over geldige scholingscertificaten.",
        checkLapsedFail: "{count} scholingscertifica(a)t(en) zijn verlopen en moeten direct vernieuwd worden.",
        check30Title: "Tijdige herhalingsplanning (30-dagen horizon)",
        check30Pass: "Er lopen binnen de komende 30 dagen geen scholingscertificaten af.",
        check30Warn: "{count} medewerker(s) moeten binnen 30 dagen herhalen. Tijdige cursusreservering aanbevolen.",
        checkFilingTitle: "Certificaatbewaarplekken gedocumenteerd",
        checkFilingPass: "Alle dossiers vermelden een duidelijke fysieke of digitale vindplaats van het certificaat.",
        checkFilingWarn: "Bij {count} dossier(s) ontbreekt een notitie over de bewaarplek van het certificaat.",
        checkRolesTitle: "Functies binnen de studio gespecificeerd",
        checkRolesPass: "Aan alle teamleden is een duidelijke studiofunctie toegekend.",
        checkRolesWarn: "Bij {count} dossier(s) is het functieveld niet ingevuld.",
        checkStudioTitle: "Studio-identificatie ingesteld",
        checkStudioPass: "Studionaam is geconfigureerd voor officiële inspectielijsten: {studio}",
        checkStudioWarn: "Studionaam ontbreekt nog. Vul deze in voor officiële inspectie-uitdraaien.",
        checkRosterTitle: "Volledigheid van de teamlijst",
        checkRosterPass: "{count} scholingsdossiers momenteel geregistreerd.",
        checkRosterWarn: "Nog geen medewerkersdossiers aanwezig in dit studioprofiel.",
        actionFilterLapsed: "Bekijk verlopen personeel",
        actionFilter30: "Bekijk vervallen binnen 30 d",
        actionFixFiling: "Dossiers nalopen",
        actionSetStudio: "Studionaam instellen",
        btnPrint: "Auditcontrolelijst printen",
        btnClose: "Venster sluiten",
        scoreSummary: '{passed} van de {total} controles op de administratie in orde ({percent}%).',
        actionAddRecord: 'Record toevoegen'
      },
      chart: {
        title: "Nalevingsstatus",
        centerLabel: "Geldig & actief",
        badgeValid: "{percent}% in orde",
        legendValid: "Geldige certificaten",
        legendWarning: "Binnenkort herhalen (≤90 dagen)",
        legendLapsed: "Reeds verlopen",
        empty: "Geen medewerkersgegevens"
      },
      autoBackup: {
        title: "Alle bewerkingen worden automatisch bewaard in de lokale opslag van uw browser",
        savedJustNow: "Automatisch opgeslagen",
        savedAt: "Automatisch opgeslagen om {time}",
        restoredNotice: "Recente dossiers hersteld vanuit lokale automatische reservekopie"
      },
      csv: {
        headerName: "Naam medewerker",
        headerRole: "Functieomschrijving",
        headerDate: "Cursusdatum",
        headerProvider: "Opleider",
        headerExpiry: "Vervaldatum",
        headerRenewalMonths: "Geldigheidsduur in maanden",
        headerFilingRef: "Archiefreferentie",
        headerNotes: "Notities",
        defaultProvider: "BBP-scholing"
      },
      common: {
        languageLabel: "Taal",
        ariaCloseDialog: "Dialoogvenster sluiten"
      }
    },
    pt: {
      meta: {
        title: "Registo de formação em agentes patogénicos sanguíneos | Poli International",
        description: "Faça a gestão das datas de formação sobre agentes patogénicos transmitidos pelo sangue da equipa, entidades formadoras, prazos de validade (30, 60, 90 dias) e imprima listagens de inspeção."
      },
      header: {
        badge: "Controlo de conformidade BBP",
        themeToggleAria: "Alternar modo de visualização",
        themeToggleLight: "☀️ Esquema claro",
        themeToggleDark: "🌙 Esquema escuro",
        title: "Registo de formação em agentes patogénicos sanguíneos",
        subtitle: "Registe as datas das ações de formação da equipa, formadores e locais de arquivo dos certificados. Acompanhe prazos de renovação a 30, 60 e 90 dias com relatórios impressos para vistorias e ficheiros CSV.",
        storageNotice: "Os registos permanecem unicamente no seu navegador: sem necessidade de conta, sem envio para servidores externos."
      },
      nav: {
        relatedAria: "Aplicações de apoio ao estúdio",
        relatedHeading: "Ferramentas complementares de segurança:",
        sharpsTool: "Controlo de descarte de agulhas e cortantes",
        autoclaveTool: "Calculador de ciclos de autoclave"
      },
      disclaimer: {
        banner: "Instrumento meramente administrativo. Este registo serve para organização interna de datas e não substitui a formação certificada nem valida licenças sanitárias governamentais."
      },
      summary: {
        ariaOverview: "Quadro geral sobre o estado das formações",
        totalStaff: "Total de colaboradores inscritos",
        totalStaffSub: "Registos ativos do estúdio",
        lapsed: "Certificados caducados",
        lapsedSub: "Necessitam de renovação imediata",
        within30: "Caducam em 30 dias",
        within30Sub: "Janela de atualização disponível",
        within60: "Caducam em 60 dias",
        within60Sub: "Agendar próxima formação",
        within90: "Caducam em 90 dias",
        within90Sub: "Planeamento com antecedência"
      },
      form: {
        title: "Registar comprovativo de formação",
        editTitle: "Editar registo de formação",
        cancelEdit: "Cancelar alterações",
        nameLabel: "Nome do colaborador",
        namePlaceholder: "p. ex. Alex Morgan",
        roleLabel: "Função no estúdio",
        rolePlaceholder: "ex. Body Piercer, Tatuador, Balcão e Atendimento",
        dateLabel: "Data de conclusão da formação",
        providerLabel: "Entidade formadora",
        providerPlaceholder: "ex. Cruz Vermelha, ProTrainings, Autoridade de Saúde",
        renewalLabel: "Ciclo de renovação",
        monthsOption12: "12 meses (anuidade)",
        monthsOption24: "24 meses (biénio)",
        monthsOption36: "36 meses (triénio)",
        monthsOptionCustom: "Meses definidos à medida",
        customMonthsAria: "Meses de renovação personalizados",
        filingLabel: "Referência do arquivo do certificado",
        filingHint: "(indicação de localização física ou digital, sem carregamento)",
        filingPlaceholder: "ex. Pasta A - Separador 4, Nuvem do estúdio / Alex-BBP.pdf, Ficheiro 2",
        notesLabel: "Apontamentos adicionais",
        notesPlaceholder: "ex. N° da cédula ou certificado, licença profissional, notas",
        submitAdd: "Gravar registo",
        submitUpdate: "Guardar retificações",
        renewTitle: "Renovar formação de: {name}",
        submitRenew: "Registar renovação",
        errCustomRenewal: 'Informe o período de renovação personalizado em meses (1 a 120).'
      },
      print: {
        title: "Registo de conformidade: formação sobre agentes patogénicos transmitidos pelo sangue",
        inspectionNotice: "Documento oficial para gestão interna do estúdio comprovativo das formações em controlo de infeção e agentes patogénicos realizadas pela equipa.",
        generatedOn: "Documento gerado a:",
        studioLabel: "Designação do estúdio:",
        defaultStudio: "Equipa do estúdio",
        studioPlaceholder: "Nome do estúdio para impressão",
        studioTitle: "Nome do estúdio para o relatório",
        signatureLine: "Assinatura da gerência / responsável técnico: ___________________________   Data: ____________"
      },
      filters: {
        heading: "Filtragem por prazo de validade:",
        all: "Todos os registos",
        lapsed: "Caducados",
        days30: "Próximos 30 dias",
        days60: "Próximos 60 dias",
        days90: "Próximos 90 dias",
        current: "Em dia"
      },
      search: {
        placeholder: "Procurar colaborador por nome ou atividade...",
        ariaLabel: "Procurar colaborador por nome ou atividade",
        clearAria: "Limpar pesquisa",
        resultsCount: "{count} colaborador(es) encontrado(s)"
      },
      actions: {
        printRoster: "Imprimir listagem de inspeção",
        batchRenew: "⚡ Renovação coletiva da equipa",
        exportCsv: "Exportar para CSV",
        importCsv: "Importar de CSV",
        exportIcs: "Exportar para agenda (.ics)",
        backupJson: "Salvaguarda (JSON)",
        restoreJson: "Repor cópia (JSON)",
        clearAll: "Limpar todos os registos"
      },
      table: {
        emptyState: "Sem registos de colaboradores. Adicione o primeiro elemento no formulário acima ou importe através de ficheiro CSV.",
        emptyFilter: "Nenhum registo coincide com o intervalo de validade escolhido.",
        emptySearch: "Nenhum colaborador corresponde à pesquisa efetuada.",
        ariaRoster: "Listagem de formação dos membros da equipa",
        colName: "Colaborador e atividade",
        colProvider: "Entidade formadora",
        colDate: "Data da ação",
        colExpiry: "Validade",
        colStatus: "Estado da certificação",
        colFiling: "Localização documental",
        colNotes: "Apontamentos",
        colActions: "Tarefas",
        actionEdit: "Editar",
        actionDelete: "Apagar",
        actionRenew: "Revalidar",
        actionCalendar: "Calendário",
        actionPass: "Ficha",
        sortName: "Ordenar por nome de colaborador",
        sortDate: "Ordenar por data da ação",
        sortExpiry: "Ordenar por data de expiração"
      },
      status: {
        lapsedDays: "Caducou há {days} d",
        today: "EXPIRA HOJE",
        dueWithin30: "EXPIRA EM {days} d",
        dueWithin60: "Expira em {days} d",
        dueWithin90: "Expira em {days} d",
        current: "EM DIA ({days} d)"
      },
      exportModal: {
        title: "Exportar listagem para CSV",
        instruction: "Selecione quais os dados a integrar na extração CSV:",
        optFull: "Listagem integral ({count} registos)",
        optFiltered: "Filtro atualmente visível ({count} registos)",
        btnCancel: "Anular",
        btnExport: "Descarregar CSV"
      },
      importModal: {
        title: "Importar dados da equipa via CSV",
        instructions: "Envie ou arraste um ficheiro CSV gerado nesta aplicação ou formatado com: Nome, Função, Data da ação, Entidade, Data de expiração, Meses de renovação, Referência de arquivo, Notas.",
        chooseFile: "Procurar ficheiro CSV",
        dropZoneText: "ou largue um ficheiro .csv neste espaço",
        previewTitle: "Pré-visualização do ficheiro CSV",
        previewCount: "{count} registos válidos reconhecidos no ficheiro.",
        modeLabel: "Forma de importação:",
        modeMerge: "Fundir (juntar aos registos já existentes)",
        modeReplace: "Substituir (sobrescrever o arquivo completo)",
        btnCancel: "Anular",
        btnImport: "Concluir importação",
        errNoRecords: "Não foram encontrados registos válidos no ficheiro CSV facultado.",
        errParse: "Incapaz de ler o ficheiro CSV. Assegure-se de que utiliza a formatação normalizada com vírgulas."
      },
      confirm: {
        deleteTitle: "Apagar registo",
        deleteMsg: "Tem a certeza de que pretende remover o registo de formação de {name}?",
        clearTitle: "Eliminar a totalidade dos registos",
        clearMsg: "Pretende realmente limpar todos os registos de formação da equipa? Esta operação não pode ser revertida sem uma salvaguarda prévia em CSV.",
        btnCancel: "Anular",
        btnConfirm: "Confirmar decisão"
      },
      toasts: {
        validationError: "Por favor, indique todos os elementos essenciais (Nome, Data da formação, Entidade e Prazo de renovação).",
        recordAdded: "Registo adicionado para {name}.",
        recordUpdated: "Registo atualizado para {name}.",
        recordDeleted: "Registo removido.",
        allCleared: "Todos os registos foram limpos.",
        noExportRecords: "Não existem registos para exportação.",
        csvExported: "Ficheiro CSV transferido com sucesso.",
        importSuccess: "Importados {count} registos com sucesso.",
        lapsedAlert: "Atenção: {count} registo(s) de formação caducaram e carecem de renovação.",
        calendarExported: "Ficheiro de agenda (.ics) gravado com sucesso.",
        quickRenewReady: "Dados de renovação preparados para {name}. Confirme para concluir o processo.",
        backupSuccess: "Salvaguarda JSON descarregada com sucesso.",
        restoreSuccess: "Foram repostos com êxito {count} registos.",
        profileCreated: "Perfil do estúdio criado: {name}",
        profileSwitched: "Mudança efetuada para o perfil: {name}",
        profileRenamed: "Perfil renomeado para: {name}",
        profileDeleted: "Perfil e respetivos registos removidos.",
        errEmptyName: 'Informe um nome para o perfil do estúdio.'
      },
      calendar: {
        eventSummary: "Renovação formação patogénicos sanguíneos: {name} ({studio})",
        eventDescription: "Renovação da formação em agentes patogénicos transmitidos pelo sangue para {name} ({role}). Entidade anterior: {provider}. Data da ação: {date}. Arquivo do comprovativo: {filing}.",
        alarm30Description: "Lembrete: a formação em agentes patogénicos de {name} expira dentro de 30 dias.",
        alarm7Description: "Aviso urgente: a formação em agentes patogénicos de {name} expira dentro de 7 dias."
      },
      passModal: {
        title: "Ficha de formação do colaborador",
        cardBadge: "REGISTO DE FORMAÇÃO",
        cardTitle: "Ficha de formação do colaborador",
        studioLabel: "Estúdio / Instalação:",
        staffLabel: "Colaborador credenciado:",
        roleLabel: "Função desempenhada:",
        providerLabel: "Entidade formadora:",
        completedLabel: "Data de realização:",
        expiryLabel: "Prazo de validade / Expiração:",
        cycleLabel: "Periodicidade de renovação:",
        cycleMonths: "Ciclo de {months} meses",
        statusLabel: "Condição regulamentar:",
        filingLabel: "Arquivo documental:",
        attestationNotice: "Este cartão reproduz o que o estúdio registou: a data da formação, o formador e o local de arquivo introduzidos pelo estúdio. Não é um certificado e não prova que a formação ocorreu. A prova é o certificado do formador.",
        signatureLine: "Assinatura do responsável técnico / gerência: _______________________ Data: ____________",
        btnPrint: "Imprimir a ficha",
        btnClose: "Fechar janela"
      },
      backupModal: {
        title: "Restaurar informação a partir de ficheiro JSON",
        instruction: "Escolha um ficheiro de salvaguarda JSON obtido anteriormente. Irá recuperar perfis e fichas dos colaboradores.",
        chooseFile: "Escolher ficheiro de salvaguarda",
        dropZoneText: "ou arraste para este campo um ficheiro de cópia .json",
        previewTitle: "Visualização prévia do conteúdo",
        previewDetails: "A cópia contém {recordsCount} registos de colaboradores em {profilesCount} perfil(is) de estúdio.",
        modeLabel: "Opção de reposição:",
        modeMerge: "Integrar (adicionar aos perfis e dados atuais)",
        modeReplace: "Reposição completa (substituir todos os perfis e registos)",
        btnCancel: "Anular",
        btnRestore: "Proceder à reposição",
        errParse: "Ficheiro JSON de formato não reconhecido. Opte por uma cópia gerada nesta ferramenta.",
        errNoRecords: "O ficheiro de salvaguarda indicado não dispõe de dados válidos."
      },
      profile: {
        label: "Perfil do estúdio:",
        selectAria: "Selecionar perfil de estúdio ou divisão",
        addTitle: "Criar novo perfil para espaço ou estúdio",
        addBtn: "+ Criar perfil",
        manageTitle: "Gerir ou mudar o nome do perfil ativo",
        manageBtn: "Gerir",
        activePill: "Perfil ativo no estúdio:",
        defaultProfileName: "Estúdio principal",
        addModalTitle: "Registo de novo perfil de estúdio",
        addModalInstruction: "Crie um perfil à parte para organizar os registos de outra divisão, departamento ou segundo estabelecimento.",
        profileNameLabel: "Nome do perfil",
        profileNamePlaceholder: "ex. Estúdio Baixa, Artistas convidados, Sala 2",
        btnAddSave: "Concluir criação",
        manageModalTitle: "Gestão do perfil de estúdio",
        renameLabel: "Renomear o perfil atual",
        btnSaveRename: "Guardar nova designação",
        deleteHeading: "Eliminar perfil atual",
        deleteWarning: "Ao apagar este perfil perderá definitivamente os respetivos {count} registos de colaboradores.",
        btnDeleteProfile: "Eliminar este perfil",
        deletePreventSingle: "É obrigatório manter no mínimo um perfil de estúdio configurado.",
      },
      audit: {
        btnTitle: "📋 Lista de verificação para fiscalizações",
        modalTitle: "Auditoria interna de prontidão sanitária",
        modalSubtitle: "Uma verificação do seu próprio registo: o que falta ou expirou nesta ferramenta. Não avalia o cumprimento de qualquer regulamento.",
        statusReady: "PRONTO PARA VISTORIA",
        statusWarning: "ATENÇÃO NECESSÁRIA",
        statusCritical: "CRÍTICO: CERTIFICADOS EXPIRADOS",
        scoreLabel: "Classificação de prontidão:",
        checkLapsedTitle: "Nenhum certificado fora de validade",
        checkLapsedPass: "Todos os colaboradores registados contam com certificação de formação dentro do prazo.",
        checkLapsedFail: "Existem {count} certificação(ões) caducadas que exigem frequência imediata de formação.",
        check30Title: "Previsão antecipada de formações (janela de 30 dias)",
        check30Pass: "Nenhum certificado expira ao longo dos próximos 30 dias.",
        check30Warn: "{count} colaborador(es) atingem o termo da formação em 30 dias. É aconselhável marcar a renovação.",
        checkFilingTitle: "Local de arquivo dos certificados anotado",
        checkFilingPass: "Todos os registos contêm a referência do sítio de arquivo físico ou digital.",
        checkFilingWarn: "Em {count} registo(s) não consta a nota relativa ao arquivo do certificado.",
        checkRolesTitle: "Funções da equipa identificadas",
        checkRolesPass: "Todos os colaboradores têm uma atividade definida no estúdio.",
        checkRolesWarn: "Em {count} registo(s) o campo da função encontra-se em branco.",
        checkStudioTitle: "Designação do estúdio configurada",
        checkStudioPass: "A designação do estúdio está definida para os registos de inspeção: {studio}",
        checkStudioWarn: "Nome do estúdio por preencher. Insira-o para os relatórios formais de vistoria.",
        checkRosterTitle: "Preenchimento do ficheiro da equipa",
        checkRosterPass: "Existem {count} registos de formação arquivados neste perfil.",
        checkRosterWarn: "Ainda não foram inseridos registos de colaboradores neste perfil.",
        actionFilterLapsed: "Ver colaboradores caducados",
        actionFilter30: "Ver prazos a 30 dias",
        actionFixFiling: "Inspecionar registos",
        actionSetStudio: "Indicar nome do estúdio",
        btnPrint: "Imprimir lista de verificação",
        btnClose: "Fechar janela",
        scoreSummary: '{passed} de {total} verificações de registo cumpridas ({percent}%).',
        actionAddRecord: 'Adicionar um registo'
      },
      chart: {
        title: "Estado de conformidade",
        centerLabel: "Válidos e em vigor",
        badgeValid: "{percent}% regulares",
        legendValid: "Certificações vigentes",
        legendWarning: "Caducam em breve (≤90 dias)",
        legendLapsed: "Certificados caducados",
        empty: "Sem dados de colaboradores"
      },
      autoBackup: {
        title: "Todas as atualizações ficam automaticamente guardadas no armazenamento local do seu navegador",
        savedJustNow: "Guardado automaticamente",
        savedAt: "Guardado automaticamente às {time}",
        restoredNotice: "Registos mais recentes recuperados da salvaguarda automática local"
      },
      csv: {
        headerName: "Nome do colaborador",
        headerRole: "Função no estúdio",
        headerDate: "Data de realização",
        headerProvider: "Entidade formadora",
        headerExpiry: "Data de expiração",
        headerRenewalMonths: "Meses de renovação",
        headerFilingRef: "Referência documental",
        headerNotes: "Apontamentos",
        defaultProvider: "Formação BBP"
      },
      common: {
        languageLabel: "Idioma",
        ariaCloseDialog: "Fechar caixa de diálogo"
      }
    }
  };

  let currentLang = 'en';
  try {
    // poli_tools_language is the key the rest of the tool suite uses, so a choice follows the visitor.
    const savedLang = localStorage.getItem('poli_tools_language') || localStorage.getItem('poli_bbp_lang');
    if (savedLang && translations[savedLang]) {
      currentLang = savedLang;
    } else {
      const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
      if (translations[browserLang]) {
        currentLang = browserLang;
      }
    }
  } catch (e) {}

  function getNestedValue(obj, keyPath) {
    if (!keyPath || typeof keyPath !== 'string') return null;
    const parts = keyPath.split('.');
    let current = obj;
    for (let i = 0; i < parts.length; i++) {
      if (current && typeof current === 'object' && parts[i] in current) {
        current = current[parts[i]];
      } else {
        return null;
      }
    }
    return current;
  }

  function t(key, params) {
    const dict = translations[currentLang] || translations.en;
    let str = getNestedValue(dict, key);
    if (str === null || str === undefined) {
      return key;
    }
    if (params && typeof params === 'object') {
      Object.keys(params).forEach(p => {
        str = str.replace(new RegExp('\\{' + p + '\\}', 'g'), String(params[p]));
      });
    }
    return str;
  }

  function applyTranslations() {
    // Document Title & Meta Tags
    const docTitle = t('meta.title');
    if (docTitle) {
      document.title = docTitle;
    }
    const metaDesc = t('meta.description');
    if (metaDesc) {
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', metaDesc);
      const ogDescEl = document.querySelector('meta[property="og:description"]');
      if (ogDescEl) ogDescEl.setAttribute('content', metaDesc);
      const ogTitleEl = document.querySelector('meta[property="og:title"]');
      if (ogTitleEl) ogTitleEl.setAttribute('content', docTitle);
    }

    // Element textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) {
        el.textContent = val;
      }
    });

    // Element placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);
      if (val) {
        el.setAttribute('placeholder', val);
      }
    });

    // Element title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const val = t(key);
      if (val) {
        el.setAttribute('title', val);
      }
    });

    // Element aria-label attributes
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const val = t(key);
      if (val) {
        el.setAttribute('aria-label', val);
      }
    });
  }

  window.i18n = {
    t: t,
    apply: applyTranslations,
    translations: translations,
    getLanguage: function() { return currentLang; },
    setLanguage: function(lang) {
      if (translations[lang]) {
        currentLang = lang;
        try { localStorage.setItem('poli_tools_language', lang); localStorage.setItem('poli_bbp_lang', lang); } catch (e) {}
        applyTranslations();
      }
    }
  };
  window.t = t;
})();
