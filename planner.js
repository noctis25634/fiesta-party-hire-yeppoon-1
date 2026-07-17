(() => {
  "use strict";

  const root = document.querySelector(".customizer-section");
  if (!root) return;

  const blankImage = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  const storageKey = "fiesta-party-hire-event-plan-v3";
  const legacyStorageKey = "fiesta-party-hire-event-plan-v2";

  const elements = {
    form: root.querySelector(".package-builder"),
    eventType: root.querySelector("#eventType"),
    themeStyle: root.querySelector("#themeStyle"),
    venueSetting: root.querySelector("#venueSetting"),
    guestCount: root.querySelector("#guestCount"),
    basePackage: root.querySelector("#basePackage"),
    customColors: root.querySelector("#customColors"),
    packageNotes: root.querySelector("#packageNotes"),
    catalogueIncludes: root.querySelector("#catalogueIncludes"),
    paletteInputs: [...root.querySelectorAll("input[name='palette']")],
    itemOptions: [...root.querySelectorAll(".addon-option")],
    selectedItemCount: root.querySelector("#selectedItemCount"),
    itemSearch: root.querySelector("#itemSearch"),
    selectedOnly: root.querySelector("#selectedOnly"),
    clearItemSelections: root.querySelector("#clearItemSelections"),
    selectedChips: root.querySelector("#selectedChips"),
    categoryTabs: [...root.querySelectorAll("[data-category-tab]")],
    categoryPanels: [...root.querySelectorAll("[data-category-panel]")],
    progressSteps: [...root.querySelectorAll("[data-progress-step]")],
    setupStage: root.querySelector("#setupStage"),
    previewObjects: root.querySelector("#previewObjects"),
    stageEmpty: root.querySelector("#stageEmpty"),
    sceneItemKey: root.querySelector("#sceneItemKey"),
    sceneDensity: root.querySelector("#sceneDensity"),
    sceneSettingLabel: root.querySelector("#sceneSettingLabel"),
    previewSelectionSummary: root.querySelector("#previewSelectionSummary"),
    previewObjectCount: root.querySelector("#previewObjectCount"),
    previewAnnouncement: root.querySelector("#previewAnnouncement"),
    inspirationFigure: root.querySelector("#inspirationFigure"),
    inspirationEmpty: root.querySelector("#inspirationEmpty"),
    inspirationImage: root.querySelector("#stagePhoto"),
    inspirationCaption: root.querySelector("#stagePhotoCaption"),
    photoMatchBadge: root.querySelector("#photoMatchBadge"),
    photoMatchTitle: root.querySelector("#photoMatchTitle"),
    photoMatchReason: root.querySelector("#photoMatchReason"),
    packageSummary: root.querySelector("#packageSummary"),
    reviewPackage: root.querySelector("#reviewPackage"),
    mobileReviewPackage: root.querySelector("#mobileReviewPackage"),
    mobileSelectedCount: root.querySelector("#mobileSelectedCount"),
    sendPackageRequest: root.querySelector("#sendPackageRequest"),
    resetPackage: root.querySelector("#resetPackage"),
    buildPackagePreview: root.querySelector("#buildPackagePreview"),
    customizerStatus: root.querySelector("#customizerStatus"),
    draftStatus: root.querySelector("#draftStatus"),
    requestMessageWrap: root.querySelector("#requestMessageWrap"),
    requestMessage: root.querySelector("#requestMessage"),
    copyPackageRequest: root.querySelector("#copyPackageRequest"),
    resetConfirmDialog: root.querySelector("#resetConfirmDialog"),
    confirmReset: root.querySelector("#confirmReset"),
    addonsCount: root.querySelector("#addonsCount"),
    hireCount: root.querySelector("#hireCount")
  };

  const colorValues = Object.freeze({
    Pink: "#c05a78",
    Gold: "#b99052",
    White: "#fffdf8",
    Blue: "#4d789c",
    Red: "#a63d46",
    Purple: "#563060",
    Green: "#67805f",
    Neutral: "#d8c6ad"
  });

  function defineItem(id, label, category, family, layer, zone, options = {}) {
    return Object.freeze({
      id,
      label,
      category,
      family,
      layer,
      zone,
      asset: options.asset || null,
      visualWidth: options.visualWidth || 40,
      visualHeight: options.visualHeight || 24,
      quantityMode: options.quantityMode || "representative",
      maxVisuals: options.maxVisuals || 8,
      baseVisuals: options.baseVisuals || 1,
      compatibleEvents: Object.freeze(options.compatibleEvents || []),
      compatibleThemes: Object.freeze(options.compatibleThemes || []),
      previewCaption: options.previewCaption || label,
      enquirySummary: options.enquirySummary || label,
      variant: options.variant || "default",
      text: options.text || ""
    });
  }

  const itemConfig = Object.freeze({
    "Arch Backdrop": defineItem("arch-backdrop", "Arch backdrop", "package", "arch", 3, "structure", { visualWidth: 44, visualHeight: 52, compatibleEvents: ["Birthday", "Baby Shower", "Bridal Shower", "Wedding", "Engagement"], compatibleThemes: ["Birthday Theme", "Baby Shower Theme", "Elegant", "Luxury", "Pastel"], variant: "panel" }),
    "Artificial Grass Backdrop": defineItem("grass-backdrop", "Artificial grass backdrop", "package", "backdrop", 2, "structure", { visualWidth: 42, visualHeight: 48, compatibleEvents: ["Birthday", "Baby Shower", "Outdoor Celebration"], compatibleThemes: ["Baby Shower Theme", "Boho", "Kids Party"], variant: "grass" }),
    "Neon Light": defineItem("neon-light", "Neon light", "package", "neon", 7, "focal", { visualWidth: 24, visualHeight: 12, compatibleEvents: ["Birthday", "Baby Shower", "Engagement", "Graduation"], compatibleThemes: ["Birthday Theme", "Baby Shower Theme", "Gatsby", "Luxury"], text: "Celebrate" }),
    "Balloon Styling": defineItem("balloon-styling", "Balloon styling", "package", "balloons", 6, "focal", { visualWidth: 68, visualHeight: 46, baseVisuals: 12, maxVisuals: 24, compatibleEvents: ["Birthday", "Baby Shower", "Bridal Shower", "Engagement", "Graduation", "Children's Party"], compatibleThemes: ["Birthday Theme", "Baby Shower Theme", "Pastel", "Fun & Colorful", "Kids Party"] }),
    "Background Lights": defineItem("background-lights", "Background lights", "styling", "lighting", 9, "ambience", { asset: "assets/addons/lit-marquee.webp", visualWidth: 84, visualHeight: 28, baseVisuals: 8, maxVisuals: 16, variant: "background" }),
    "Artificial Flowers": defineItem("artificial-flowers", "Artificial flowers", "styling", "flowers", 8, "details", { visualWidth: 48, visualHeight: 18, baseVisuals: 5, maxVisuals: 12, compatibleEvents: ["Baby Shower", "Bridal Shower", "Wedding", "Engagement"], compatibleThemes: ["Elegant", "Pastel", "Boho"] }),
    "Extra Grass Decorations": defineItem("extra-grass", "Extra grass decorations", "styling", "greenery", 7, "details", { visualWidth: 48, visualHeight: 18, baseVisuals: 5, maxVisuals: 12, compatibleEvents: ["Outdoor Celebration", "Baby Shower"], compatibleThemes: ["Boho", "Baby Shower Theme"] }),
    "Additional Balloon Styling": defineItem("additional-balloons", "Additional balloon styling", "styling", "balloons", 6, "focal", { visualWidth: 64, visualHeight: 42, baseVisuals: 10, maxVisuals: 24, compatibleEvents: ["Birthday", "Baby Shower", "Children's Party", "Graduation"], compatibleThemes: ["Fun & Colorful", "Pastel", "Kids Party"] }),
    "Personalised Fabric Napkins": defineItem("fabric-napkins", "Personalised fabric napkins", "styling", "napkins", 11, "tabletop", { visualWidth: 48, visualHeight: 12, baseVisuals: 4, maxVisuals: 12, compatibleEvents: ["Wedding", "Formal Dinner", "Corporate"], compatibleThemes: ["Elegant", "Luxury"] }),
    "Festoon / String Lights": defineItem("festoon-lights", "Festoon or string lights", "styling", "lighting", 9, "ambience", { asset: "assets/addons/lit-marquee.webp", visualWidth: 88, visualHeight: 26, baseVisuals: 10, maxVisuals: 20, compatibleEvents: ["Wedding", "Outdoor Celebration", "Corporate"], compatibleThemes: ["Elegant", "Boho"], variant: "festoon" }),
    "Round Frame Arch": defineItem("round-frame-arch", "Round frame arch", "styling", "arch", 3, "structure", { visualWidth: 40, visualHeight: 50, compatibleEvents: ["Baby Shower", "Bridal Shower", "Wedding", "Engagement"], compatibleThemes: ["Elegant", "Pastel", "Boho"], variant: "round" }),
    "Colourful Chair Ribbons": defineItem("chair-ribbons", "Colourful chair ribbons", "styling", "chairs", 10, "furniture", { visualWidth: 86, visualHeight: 26, maxVisuals: 12, compatibleEvents: ["Wedding", "Formal Dinner", "Children's Party"], compatibleThemes: ["Elegant", "Fun & Colorful", "Kids Party"], variant: "ribbons" }),
    "Candle Holders": defineItem("candle-holders", "Candle holders", "styling", "candles", 11, "tabletop", { visualWidth: 46, visualHeight: 12, baseVisuals: 4, maxVisuals: 12, compatibleEvents: ["Wedding", "Formal Dinner", "Engagement"], compatibleThemes: ["Elegant", "Luxury"], variant: "holder" }),
    "Candle Lights": defineItem("candle-lights", "Candle lights", "styling", "candles", 11, "tabletop", { visualWidth: 46, visualHeight: 12, baseVisuals: 4, maxVisuals: 12, compatibleEvents: ["Wedding", "Formal Dinner", "Engagement"], compatibleThemes: ["Elegant", "Luxury"], variant: "lit" }),
    "Champagne Glasses": defineItem("champagne-glasses", "Champagne glasses", "styling", "glassware", 11, "tabletop", { visualWidth: 48, visualHeight: 12, maxVisuals: 12, compatibleEvents: ["Wedding", "Formal Dinner", "Engagement", "Corporate"], compatibleThemes: ["Elegant", "Luxury"], variant: "champagne" }),
    "Water Glasses": defineItem("water-glasses", "Water glasses", "styling", "glassware", 11, "tabletop", { visualWidth: 48, visualHeight: 12, maxVisuals: 12, compatibleEvents: ["Wedding", "Formal Dinner", "Corporate"], compatibleThemes: ["Elegant", "Luxury"], variant: "water" }),
    "Greenery Decorations": defineItem("greenery-decorations", "Greenery decorations", "styling", "greenery", 8, "details", { visualWidth: 48, visualHeight: 18, baseVisuals: 5, maxVisuals: 12, compatibleEvents: ["Wedding", "Outdoor Celebration", "Baby Shower"], compatibleThemes: ["Boho", "Elegant", "Baby Shower Theme"] }),
    "Flower Arrangements": defineItem("flower-arrangements", "Flower arrangements", "styling", "flowers", 8, "details", { visualWidth: 52, visualHeight: 20, baseVisuals: 5, maxVisuals: 12, compatibleEvents: ["Wedding", "Bridal Shower", "Baby Shower", "Formal Dinner"], compatibleThemes: ["Elegant", "Pastel", "Boho"] }),
    "Cake Stand": defineItem("cake-stand", "Cake stand", "styling", "cake", 10, "display", { visualWidth: 16, visualHeight: 28, compatibleEvents: ["Birthday", "Baby Shower", "Wedding", "Children's Party"], compatibleThemes: ["Birthday Theme", "Baby Shower Theme", "Elegant", "Kids Party"] }),
    "Outdoor Table Setup": defineItem("outdoor-table", "Outdoor table setup", "hire", "tables", 8, "furniture", { visualWidth: 68, visualHeight: 25, maxVisuals: 6, compatibleEvents: ["Outdoor Celebration", "Wedding", "Birthday"], compatibleThemes: ["Boho", "Elegant"], variant: "outdoor" }),
    "Formal Table Setup": defineItem("formal-table", "Formal table setup", "hire", "tables", 8, "furniture", { asset: "assets/addons/formal-table-setting.webp", visualWidth: 68, visualHeight: 25, maxVisuals: 6, compatibleEvents: ["Formal Dinner", "Wedding", "Corporate", "Engagement"], compatibleThemes: ["Elegant", "Luxury"], variant: "formal" }),
    "Round Table Setup": defineItem("round-table", "Round table setup", "hire", "tables", 8, "furniture", { asset: "assets/addons/formal-table-setting.webp", visualWidth: 66, visualHeight: 25, maxVisuals: 6, compatibleEvents: ["Formal Dinner", "Wedding", "Corporate"], compatibleThemes: ["Elegant", "Luxury"], variant: "round" }),
    "Chair Bow Table Setup": defineItem("chair-bow-setup", "Chair bow table setup", "hire", "chairs", 10, "furniture", { asset: "assets/addons/formal-table-setting.webp", visualWidth: 86, visualHeight: 26, maxVisuals: 12, compatibleEvents: ["Wedding", "Formal Dinner", "Engagement"], compatibleThemes: ["Elegant", "Pastel"], variant: "bows" }),
    "Marquee Table Setup": defineItem("marquee-table-setup", "Marquee table setup", "hire", "marquee", 1, "structure", { asset: "assets/addons/marquee-table-chair-setup.webp", visualWidth: 94, visualHeight: 60, compatibleEvents: ["Outdoor Celebration", "Wedding", "Corporate"], compatibleThemes: ["Elegant", "Custom Theme"], variant: "open" }),
    "Cocktail Table": defineItem("cocktail-table", "Cocktail table", "hire", "tables", 8, "furniture", { asset: "assets/addons/cocktail-table.webp", visualWidth: 58, visualHeight: 28, maxVisuals: 6, compatibleEvents: ["Corporate", "Engagement", "Graduation"], compatibleThemes: ["Elegant", "Luxury"], variant: "cocktail" }),
    "Chafing Dishes": defineItem("chafing-dishes", "Chafing dishes", "hire", "chafing", 11, "tabletop", { asset: "assets/addons/chafing-dishes.webp", visualWidth: 46, visualHeight: 12, baseVisuals: 3, maxVisuals: 8, compatibleEvents: ["Wedding", "Formal Dinner", "Corporate"], compatibleThemes: ["Elegant"] }),
    "Electric Soup Warmer": defineItem("electric-soup-warmer", "Electric soup warmer — 3 × 7.4 QT", "hire", "chafing", 1, "tabletop", { asset: "assets/addons/electric-soup-warmer.webp", visualWidth: 54, visualHeight: 16, baseVisuals: 3, maxVisuals: 6, compatibleEvents: ["Wedding", "Formal Dinner", "Corporate", "Outdoor Celebration"], compatibleThemes: ["Elegant", "Luxury"], previewCaption: "Electric soup warmer — 3 × 7.4 QT", enquirySummary: "Electric soup warmer — 3 × 7.4 QT", variant: "electric" }),
    "Lit Marquee Setup": defineItem("lit-marquee", "Lit marquee setup", "hire", "marquee", 1, "structure", { asset: "assets/addons/lit-marquee.webp", visualWidth: 94, visualHeight: 60, compatibleEvents: ["Wedding", "Corporate", "Outdoor Celebration"], compatibleThemes: ["Elegant", "Luxury"], variant: "lit" }),
    "Folding Table": defineItem("folding-table", "Folding table", "hire", "tables", 8, "furniture", { asset: "assets/addons/folding-table.webp", visualWidth: 64, visualHeight: 24, maxVisuals: 6, variant: "folding" }),
    "Long Folding Table": defineItem("long-folding-table", "Long folding table", "hire", "tables", 8, "furniture", { asset: "assets/addons/folding-table-long.webp", visualWidth: 72, visualHeight: 24, maxVisuals: 6, variant: "long" }),
    "White Plastic Chair": defineItem("white-plastic-chair", "White plastic chair", "hire", "chairs", 10, "furniture", { asset: "assets/addons/white-plastic-chair.webp", visualWidth: 88, visualHeight: 26, maxVisuals: 12, compatibleEvents: ["Outdoor Celebration", "Wedding", "Corporate", "Birthday"], variant: "white" }),
    "Plates and Cutlery": defineItem("plates-cutlery", "Plates and cutlery", "hire", "place-settings", 11, "tabletop", { asset: "assets/addons/plates-cutlery.webp", visualWidth: 48, visualHeight: 12, baseVisuals: 4, maxVisuals: 12, compatibleEvents: ["Formal Dinner", "Wedding", "Corporate"], compatibleThemes: ["Elegant", "Luxury"] }),
    "LOVE Sign": defineItem("love-sign", "LOVE sign", "hire", "neon", 7, "focal", { asset: "assets/addons/love-sign.webp", visualWidth: 32, visualHeight: 16, compatibleEvents: ["Wedding", "Engagement"], compatibleThemes: ["Elegant", "Luxury"], variant: "love", text: "LOVE" }),
    "Wedding Arbour": defineItem("wedding-arbour", "Wedding arbour", "hire", "arch", 3, "structure", { asset: "assets/addons/wedding-arbour.webp", visualWidth: 48, visualHeight: 54, compatibleEvents: ["Wedding", "Engagement"], compatibleThemes: ["Elegant", "Pastel", "Boho"], variant: "arbour" }),
    "Kids Colourful Chairs": defineItem("kids-colourful-chairs", "Kids colourful chairs", "hire", "chairs", 10, "furniture", { asset: "assets/addons/kids-colourful-chairs.webp", visualWidth: 82, visualHeight: 24, maxVisuals: 12, compatibleEvents: ["Children's Party", "Birthday"], compatibleThemes: ["Kids Party", "Fun & Colorful"], variant: "kids" }),
    "Bubble Machine": defineItem("bubble-machine", "Bubble machine", "hire", "bubbles", 12, "effects", { asset: "assets/addons/bubble-machine.webp", visualWidth: 76, visualHeight: 54, baseVisuals: 12, maxVisuals: 24, compatibleEvents: ["Children's Party", "Birthday", "Wedding"], compatibleThemes: ["Kids Party", "Fun & Colorful"] }),
    "Portable Speaker & Microphone": defineItem("portable-speaker", "Portable speaker and microphone", "hire", "speaker", 12, "technical", { asset: "assets/addons/portable-speaker-microphone.webp", visualWidth: 22, visualHeight: 32, compatibleEvents: ["Corporate", "Graduation", "Wedding"] }),
    "Speaker & Microphones": defineItem("speaker-microphones", "Speaker and microphones", "hire", "speaker", 12, "technical", { asset: "assets/addons/speaker-microphones.webp", visualWidth: 22, visualHeight: 32, maxVisuals: 4, compatibleEvents: ["Corporate", "Graduation", "Wedding"] }),
    "Party Light": defineItem("party-light", "Party light", "hire", "party-light", 12, "effects", { asset: "assets/addons/party-light.webp", visualWidth: 52, visualHeight: 36, baseVisuals: 6, maxVisuals: 12, compatibleEvents: ["Birthday", "Children's Party", "Graduation", "Corporate"], compatibleThemes: ["Fun & Colorful", "Kids Party", "Gatsby"] })
  });

  const packageItems = Object.freeze([
    Object.freeze({ name: "Arch Backdrop", quantity: 1, included: true }),
    Object.freeze({ name: "Artificial Grass Backdrop", quantity: 1, included: true }),
    Object.freeze({ name: "Neon Light", quantity: 1, included: true }),
    Object.freeze({ name: "Balloon Styling", quantity: 1, included: true })
  ]);

  const eventProfiles = Object.freeze({
    Birthday: { layout: "birthday", setting: "indoor", description: "central birthday focal display" },
    "Baby Shower": { layout: "baby-shower", setting: "indoor", description: "soft backdrop and display-led layout" },
    "Bridal Shower": { layout: "bridal-shower", setting: "indoor", description: "refined symmetrical celebration layout" },
    Wedding: { layout: "wedding", setting: "ceremony", description: "ceremony structure with symmetrical seating" },
    Engagement: { layout: "engagement", setting: "indoor", description: "romantic focal display and guest area" },
    Corporate: { layout: "corporate", setting: "indoor", description: "structured guest and presentation zones" },
    "Formal Dinner": { layout: "formal-dinner", setting: "indoor", description: "table-first formal dining arrangement" },
    "Children's Party": { layout: "children", setting: "indoor", description: "lower playful furniture and focal styling" },
    "Outdoor Celebration": { layout: "outdoor", setting: "outdoor", description: "open lawn event arrangement" },
    Graduation: { layout: "graduation", setting: "indoor", description: "photo focal point and presentation area" },
    Christening: { layout: "christening", setting: "indoor", description: "soft family celebration arrangement" },
    "Christmas / Seasonal": { layout: "seasonal", setting: "indoor", description: "seasonal focal display and guest area" },
    "Custom Event": { layout: "custom", setting: "indoor", description: "flexible event arrangement" }
  });

  const venueMap = Object.freeze({
    "Indoor venue": "indoor",
    "Outdoor lawn": "outdoor",
    Marquee: "marquee",
    Ceremony: "ceremony",
    "Custom setting": "custom"
  });

  const inspirationReferences = Object.freeze([
    { src: "assets/gallery/birthday-theme1.webp", label: "White and Gold Birthday Backdrop", kind: "setup", events: ["Birthday"], themes: ["Birthday Theme", "Elegant", "Pastel"], colors: ["Gold", "White", "Pink"], items: ["Arch Backdrop", "Neon Light", "Balloon Styling", "Additional Balloon Styling"] },
    { src: "assets/gallery/birthday-theme2.webp", label: "Black and Gold Birthday Display", kind: "setup", events: ["Birthday", "Corporate"], themes: ["Birthday Theme", "Gatsby", "Luxury"], colors: ["Gold"], items: ["Arch Backdrop", "Neon Light", "Balloon Styling", "Party Light"] },
    { src: "assets/gallery/birthday-theme3.webp", label: "Pink Balloon Birthday Backdrop", kind: "setup", events: ["Birthday", "Children's Party"], themes: ["Birthday Theme", "Pastel", "Kids Party"], colors: ["Pink", "White"], items: ["Balloon Styling", "Additional Balloon Styling", "Cake Stand"] },
    { src: "assets/gallery/baby-shower-set-up.webp", label: "Baby Shower Table Setting", kind: "setup", events: ["Baby Shower", "Formal Dinner"], themes: ["Baby Shower Theme", "Pastel", "Elegant"], colors: ["Pink", "Gold", "White", "Green"], items: ["Formal Table Setup", "Candle Holders", "Champagne Glasses", "Water Glasses", "Flower Arrangements", "Plates and Cutlery"] },
    { src: "assets/gallery/baby-shower-theme1.webp", label: "Sage and Gold Baby Shower Display", kind: "setup", events: ["Baby Shower"], themes: ["Baby Shower Theme", "Elegant", "Luxury"], colors: ["Gold", "White", "Green"], items: ["Arch Backdrop", "Neon Light", "Balloon Styling", "Flower Arrangements", "Cake Stand"] },
    { src: "assets/gallery/baby-shower-theme-2.webp", label: "Pastel Baby Shower Backdrop", kind: "setup", events: ["Baby Shower"], themes: ["Baby Shower Theme", "Pastel", "Fun & Colorful"], colors: ["Pink", "Purple", "Green", "Gold", "White"], items: ["Round Frame Arch", "Balloon Styling", "Artificial Flowers", "Greenery Decorations", "Cake Stand"] },
    { src: "assets/gallery/bridal-shower-set-up.webp", label: "Bridal Shower Table Setting", kind: "setup", events: ["Bridal Shower", "Wedding", "Engagement", "Formal Dinner"], themes: ["Elegant", "Pastel", "Luxury"], colors: ["Pink", "Gold", "White"], items: ["Formal Table Setup", "Colourful Chair Ribbons", "Candle Holders", "Champagne Glasses", "Flower Arrangements", "Plates and Cutlery"] },
    { src: "assets/gallery/gatsby-themed-party.webp", label: "Gatsby Themed Party Backdrop", kind: "setup", events: ["Birthday", "Corporate", "Formal Dinner"], themes: ["Gatsby", "Luxury", "Elegant"], colors: ["Gold"], items: ["Arch Backdrop", "Balloon Styling", "Party Light"] },
    { src: "assets/gallery/valentine-theme-1.webp", label: "Valentine Balloon Backdrop", kind: "setup", events: ["Engagement", "Custom Event"], themes: ["Valentine", "Pastel"], colors: ["Pink", "Purple", "Gold"], items: ["Arch Backdrop", "Balloon Styling", "Artificial Flowers", "Cake Stand"] },
    { src: "assets/gallery/christmas-theme1.webp", label: "Christmas Seasonal Display", kind: "setup", events: ["Christmas / Seasonal"], themes: ["Christmas"], colors: ["Red", "Green", "Gold", "White"], items: ["Arch Backdrop", "Balloon Styling", "Cake Stand"] },
    { src: "assets/gallery/738395988_1773032303689777_2856028005893033296_n.jpg", label: "Pink Balloon and Floral Backdrop", kind: "setup", events: ["Birthday", "Baby Shower", "Engagement", "Bridal Shower"], themes: ["Pastel", "Elegant"], colors: ["Pink", "Gold", "White", "Neutral"], items: ["Round Frame Arch", "Balloon Styling", "Artificial Flowers", "Flower Arrangements"] },
    { src: "assets/gallery/733443011_1399880695536006_6680311752568557163_n.jpg", label: "Red Carpet Balloon Setup", kind: "setup", events: ["Corporate", "Graduation", "Custom Event"], themes: ["Luxury", "Fun & Colorful", "Custom Theme"], colors: ["Red", "Gold", "White"], items: ["Arch Backdrop", "Balloon Styling", "Party Light"] },
    { src: "assets/gallery/chatgpt-image-jun-15-2026-03-16-16-am-3.webp", label: "Garden Ceremony Styling", kind: "setup", events: ["Wedding", "Outdoor Celebration", "Christening"], themes: ["Elegant", "Boho", "Pastel"], colors: ["White", "Green", "Neutral"], items: ["Wedding Arbour", "Flower Arrangements", "Greenery Decorations"] },
    { src: "assets/addons/wedding-arbour.webp", label: "Wedding Arbour", kind: "product", events: ["Wedding", "Engagement", "Outdoor Celebration"], themes: ["Elegant", "Pastel", "Boho"], colors: ["Pink", "White", "Neutral"], items: ["Wedding Arbour"] },
    { src: "assets/addons/love-sign.webp", label: "LOVE Sign", kind: "product", events: ["Wedding", "Engagement"], themes: ["Elegant", "Luxury"], colors: ["White"], items: ["LOVE Sign"] },
    { src: "assets/addons/marquee-table-chair-setup.webp", label: "Marquee Table and Chair Setup", kind: "product", events: ["Wedding", "Corporate", "Outdoor Celebration", "Custom Event"], themes: ["Elegant", "Custom Theme"], colors: ["White", "Neutral"], items: ["Marquee Table Setup", "Folding Table", "Long Folding Table", "White Plastic Chair", "Outdoor Table Setup"] },
    { src: "assets/addons/lit-marquee.webp", label: "Lit Marquee Setup", kind: "product", events: ["Wedding", "Corporate", "Outdoor Celebration"], themes: ["Elegant", "Luxury"], colors: ["White", "Neutral"], items: ["Lit Marquee Setup", "Background Lights", "Festoon / String Lights"] },
    { src: "assets/addons/formal-table-setting.webp", label: "Formal Round Table Setting", kind: "product", events: ["Wedding", "Engagement", "Corporate", "Formal Dinner"], themes: ["Elegant", "Luxury", "Pastel"], colors: ["Pink", "White"], items: ["Formal Table Setup", "Round Table Setup", "Chair Bow Table Setup", "Champagne Glasses", "Water Glasses", "Flower Arrangements", "Plates and Cutlery"] },
    { src: "assets/addons/kids-colourful-chairs.webp", label: "Kids Colourful Chairs", kind: "product", events: ["Children's Party", "Birthday"], themes: ["Kids Party", "Fun & Colorful"], colors: ["Blue", "Red", "Green"], items: ["Kids Colourful Chairs"] },
    { src: "assets/addons/bubble-machine.webp", label: "Bubble Machine", kind: "product", events: ["Children's Party", "Birthday", "Wedding"], themes: ["Kids Party", "Fun & Colorful"], colors: [], items: ["Bubble Machine"] },
    { src: "assets/addons/portable-speaker-microphone.webp", label: "Portable Speaker and Microphone", kind: "product", events: ["Corporate", "Graduation", "Wedding"], themes: [], colors: [], items: ["Portable Speaker & Microphone"] },
    { src: "assets/addons/speaker-microphones.webp", label: "Speaker and Microphones", kind: "product", events: ["Corporate", "Graduation", "Wedding"], themes: [], colors: [], items: ["Speaker & Microphones"] },
    { src: "assets/addons/cocktail-table.webp", label: "Cocktail Table", kind: "product", events: ["Corporate", "Engagement", "Graduation"], themes: ["Elegant", "Luxury"], colors: [], items: ["Cocktail Table"] },
    { src: "assets/addons/chafing-dishes.webp", label: "Chafing Dishes", kind: "product", events: ["Corporate", "Wedding", "Formal Dinner"], themes: ["Elegant"], colors: [], items: ["Chafing Dishes"] },
    { src: "assets/addons/electric-soup-warmer.webp", label: "Electric Soup Warmer — Three 7.4 QT Pots", kind: "product", events: ["Corporate", "Wedding", "Formal Dinner", "Outdoor Celebration"], themes: ["Elegant", "Luxury"], colors: [], items: ["Electric Soup Warmer"] },
    { src: "assets/addons/folding-table.webp", label: "Folding Table", kind: "product", events: ["Outdoor Celebration", "Corporate", "Custom Event"], themes: [], colors: [], items: ["Folding Table"] },
    { src: "assets/addons/folding-table-long.webp", label: "Long Folding Table", kind: "product", events: ["Outdoor Celebration", "Corporate", "Custom Event"], themes: [], colors: [], items: ["Long Folding Table"] },
    { src: "assets/addons/white-plastic-chair.webp", label: "White Plastic Chair", kind: "product", events: ["Outdoor Celebration", "Wedding", "Corporate", "Birthday"], themes: [], colors: ["White"], items: ["White Plastic Chair"] },
    { src: "assets/addons/plates-cutlery.webp", label: "Plates and Cutlery", kind: "product", events: ["Formal Dinner", "Wedding", "Corporate"], themes: ["Elegant", "Luxury"], colors: ["White"], items: ["Plates and Cutlery"] },
    { src: "assets/addons/party-light.webp", label: "Party Light", kind: "product", events: ["Birthday", "Children's Party", "Graduation", "Corporate"], themes: ["Fun & Colorful", "Kids Party", "Gatsby"], colors: ["Blue", "Purple"], items: ["Party Light"] }
  ].map((reference) => Object.freeze({
    ...reference,
    events: Object.freeze(reference.events),
    themes: Object.freeze(reference.themes),
    colors: Object.freeze(reference.colors),
    items: Object.freeze(reference.items)
  })));

  const basePositions = Object.freeze({
    marquee: [3, 3, 94, 61],
    backdrop: [29, 14, 42, 50],
    arch: [28, 12, 44, 54],
    lighting: [8, 3, 84, 28],
    balloons: [15, 13, 70, 46],
    neon: [38, 31, 24, 13],
    flowers: [24, 46, 52, 20],
    greenery: [22, 48, 56, 18],
    cake: [42, 50, 16, 28],
    tables: [15, 61, 70, 24],
    chairs: [6, 66, 88, 27],
    napkins: [26, 64, 48, 12],
    candles: [27, 62, 46, 13],
    glassware: [25, 63, 50, 13],
    "place-settings": [24, 63, 52, 14],
    chafing: [55, 61, 36, 15],
    bubbles: [10, 9, 80, 58],
    speaker: [4, 56, 24, 34],
    "party-light": [18, 8, 64, 52]
  });

  const layoutAdjustments = Object.freeze({
    birthday: { structure: [0, 0, 1], focal: [0, -1, 1.04], furniture: [0, 2, 0.96], display: [0, -1, 1], details: [0, 0, 1] },
    "baby-shower": { structure: [0, -2, 1.02], focal: [0, -2, 1.05], furniture: [0, 3, 0.9], display: [0, -2, 1.1], details: [0, -1, 1] },
    "bridal-shower": { structure: [0, -1, 1], focal: [0, -1, 0.96], furniture: [0, 0, 1.03], display: [0, 0, 1], details: [0, -1, 1.05] },
    wedding: { structure: [0, -4, 1.08], focal: [0, -3, 0.9], furniture: [0, 5, 1.05], display: [0, 0, 0.9], details: [0, -2, 1.08] },
    engagement: { structure: [0, -2, 1.02], focal: [0, -1, 1.02], furniture: [0, 3, 0.96], display: [0, -1, 1], details: [0, -1, 1] },
    corporate: { structure: [0, -1, 1.06], focal: [0, -4, 0.8], furniture: [0, 0, 1.04], technical: [0, 0, 1.08], details: [0, 0, 0.9] },
    "formal-dinner": { structure: [0, -1, 0.88], focal: [0, -5, 0.78], furniture: [0, -5, 1.14], tabletop: [0, -5, 1.14], details: [0, -2, 0.9] },
    children: { structure: [0, 1, 0.88], focal: [0, 0, 1.08], furniture: [0, 7, 0.86], display: [0, 4, 0.86], effects: [0, -1, 1] },
    outdoor: { structure: [0, -1, 1.08], focal: [0, 0, 0.94], furniture: [0, 3, 1.04], details: [0, 2, 0.96] },
    graduation: { structure: [0, -1, 1], focal: [0, -2, 1.03], furniture: [0, 4, 0.88], technical: [0, 0, 1.06] },
    christening: { structure: [0, -2, 1], focal: [0, -2, 0.96], furniture: [0, 4, 0.92], details: [0, -2, 1.04] },
    seasonal: { structure: [0, -1, 1], focal: [0, -2, 1.06], furniture: [0, 4, 0.92], display: [0, -1, 1.04] },
    custom: {}
  });

  let plannerState = null;
  let activeCategory = "addons";
  let selectedOnlyMode = false;
  let reviewMode = false;
  let suppressSave = true;
  let saveTimer = 0;

  window.fiestaAccuratePlanner = Object.freeze({
    version: 3,
    itemConfig,
    eventProfiles,
    inspirationReferences
  });

  function normalizeQuantity(value) {
    return Math.max(1, Math.min(500, Number(value) || 1));
  }

  function getOptionalItemsFromForm() {
    return elements.itemOptions.flatMap((option) => {
      const checkbox = option.querySelector("input[type='checkbox']");
      const quantity = option.querySelector("input[type='number']");
      if (!checkbox?.checked) return [];
      return [{
        name: checkbox.value,
        quantity: normalizeQuantity(quantity?.value),
        included: false
      }];
    });
  }

  function getSelectedColorsFromForm() {
    return elements.paletteInputs.filter((input) => input.checked).map((input) => input.value);
  }

  function collectState() {
    const includedItems = elements.basePackage.value === "Backdrop Styling Package"
      ? packageItems.map((item) => ({ ...item }))
      : [];
    const selectedItems = getOptionalItemsFromForm();
    const profile = eventProfiles[elements.eventType.value] || eventProfiles["Custom Event"];
    const selectedSetting = venueMap[elements.venueSetting.value] || "";

    return Object.freeze({
      eventType: elements.eventType.value,
      themeStyle: elements.themeStyle.value,
      venueSetting: elements.venueSetting.value,
      resolvedSetting: selectedSetting || profile.setting,
      settingIsSuggested: !selectedSetting,
      guestCount: elements.guestCount.value ? normalizeQuantity(elements.guestCount.value) : null,
      basePackage: elements.basePackage.value,
      colors: Object.freeze(getSelectedColorsFromForm()),
      customColors: elements.customColors.value.trim(),
      notes: elements.packageNotes.value.trim(),
      layout: profile.layout,
      layoutDescription: profile.description,
      includedItems: Object.freeze(includedItems),
      selectedItems: Object.freeze(selectedItems),
      allItems: Object.freeze([...includedItems, ...selectedItems])
    });
  }

  function serializeState(state) {
    return {
      version: 3,
      eventType: state.eventType,
      themeStyle: state.themeStyle,
      venueSetting: state.venueSetting,
      guestCount: state.guestCount,
      basePackage: state.basePackage,
      colors: [...state.colors],
      customColors: state.customColors,
      notes: state.notes,
      items: state.selectedItems.map((item) => ({ name: item.name, quantity: item.quantity }))
    };
  }

  function setSelectValue(select, value) {
    if (!value) {
      select.value = "";
      return;
    }
    const option = [...select.options].find((candidate) => candidate.value === value);
    select.value = option ? value : "";
  }

  function restoreDraft() {
    let draft;
    try {
      const raw = localStorage.getItem(storageKey) || localStorage.getItem(legacyStorageKey);
      if (!raw) return false;
      draft = JSON.parse(raw);
    } catch {
      return false;
    }

    setSelectValue(elements.eventType, draft.eventType);
    setSelectValue(elements.themeStyle, draft.themeStyle);
    setSelectValue(elements.venueSetting, draft.venueSetting);
    setSelectValue(elements.basePackage, draft.basePackage);
    elements.guestCount.value = draft.guestCount || "";
    elements.customColors.value = draft.customColors || "";
    elements.packageNotes.value = draft.notes || draft.packageNotes || "";

    const savedColors = new Set(Array.isArray(draft.colors) ? draft.colors : []);
    if (savedColors.size) {
      elements.paletteInputs.forEach((input) => {
        input.checked = savedColors.has(input.value);
      });
    }

    const itemQuantities = new Map(
      (Array.isArray(draft.items) ? draft.items : []).map((item) => [item.name, normalizeQuantity(item.quantity)])
    );
    elements.itemOptions.forEach((option) => {
      const checkbox = option.querySelector("input[type='checkbox']");
      const quantity = option.querySelector("input[type='number']");
      checkbox.checked = itemQuantities.has(checkbox.value);
      quantity.value = itemQuantities.get(checkbox.value) || 1;
      quantity.disabled = !checkbox.checked;
    });

    if (elements.draftStatus) elements.draftStatus.textContent = "Saved design restored";
    return true;
  }

  function saveDraftSoon() {
    if (suppressSave) return;
    clearTimeout(saveTimer);
    if (elements.draftStatus) elements.draftStatus.textContent = "Saving design...";
    saveTimer = window.setTimeout(() => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(serializeState(plannerState)));
        if (elements.draftStatus) elements.draftStatus.textContent = "Design saved on this device";
      } catch {
        if (elements.draftStatus) elements.draftStatus.textContent = "Design could not be saved";
      }
    }, 260);
  }

  function setStatus(message, type = "") {
    if (!elements.customizerStatus) return;
    elements.customizerStatus.textContent = message;
    elements.customizerStatus.dataset.status = type;
  }

  function getCategoryForOption(option) {
    return option.closest("[data-category-panel]")?.dataset.categoryPanel || "addons";
  }

  function setActiveCategory(category, focusTab = false) {
    activeCategory = category;
    elements.categoryTabs.forEach((tab) => {
      const active = tab.dataset.categoryTab === category;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && focusTab) tab.focus();
    });
    elements.categoryPanels.forEach((panel) => {
      panel.hidden = panel.dataset.categoryPanel !== category;
    });
    filterItemBrowser();
  }

  function filterItemBrowser() {
    const query = elements.itemSearch.value.trim().toLowerCase();
    elements.categoryPanels.forEach((panel) => {
      let visibleCount = 0;
      panel.querySelectorAll(".addon-option").forEach((option) => {
        const checkbox = option.querySelector("input[type='checkbox']");
        const label = option.querySelector("span")?.textContent.toLowerCase() || "";
        const matchesSearch = !query || label.includes(query);
        const matchesSelection = !selectedOnlyMode || checkbox.checked;
        const visible = matchesSearch && matchesSelection;
        option.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      const empty = panel.querySelector(".item-empty");
      if (empty) empty.hidden = visibleCount > 0;
    });
  }

  function renderSelectedChips(state) {
    elements.selectedChips.replaceChildren();
    if (!state.selectedItems.length) {
      const empty = document.createElement("span");
      empty.className = "selected-chips-empty";
      empty.textContent = "No optional items selected yet";
      elements.selectedChips.appendChild(empty);
      return;
    }

    state.selectedItems.forEach((item) => {
      const chip = document.createElement("span");
      chip.className = "selected-chip";
      const label = document.createElement("span");
      label.textContent = item.name;
      const quantity = document.createElement("b");
      quantity.textContent = `x${item.quantity}`;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.dataset.removeItem = item.name;
      remove.setAttribute("aria-label", `Remove ${item.name}`);
      remove.textContent = "×";
      chip.append(label, quantity, remove);
      elements.selectedChips.appendChild(chip);
    });
  }

  function updateItemBrowser(state) {
    const addOnTotal = elements.itemOptions.filter((option) => getCategoryForOption(option) === "addons").length;
    const hireTotal = elements.itemOptions.filter((option) => getCategoryForOption(option) === "hire").length;
    const addOnSelected = state.selectedItems.filter((item) => itemConfig[item.name]?.category === "styling").length;
    const hireSelected = state.selectedItems.filter((item) => itemConfig[item.name]?.category === "hire").length;
    if (elements.addonsCount) elements.addonsCount.textContent = `${addOnSelected} / ${addOnTotal}`;
    if (elements.hireCount) elements.hireCount.textContent = `${hireSelected} / ${hireTotal}`;
    elements.selectedItemCount.textContent = `${state.selectedItems.length} ${state.selectedItems.length === 1 ? "selected item" : "selected items"}`;
    elements.mobileSelectedCount.textContent = `${state.selectedItems.length} optional ${state.selectedItems.length === 1 ? "item" : "items"} selected`;
    renderSelectedChips(state);
    filterItemBrowser();
  }

  function updateProgress(state) {
    const hasDetails = Boolean(state.eventType || state.themeStyle || state.venueSetting || state.guestCount);
    const hasItems = state.allItems.length > 0;
    elements.progressSteps.forEach((step) => {
      const name = step.dataset.progressStep;
      step.classList.toggle("is-complete", name === "details" ? hasDetails : name === "items" ? hasItems : reviewMode);
      step.classList.toggle("is-active", name === "review" ? reviewMode : name === "items" ? !reviewMode : false);
    });
  }

  function getSceneColors(state) {
    const chosen = state.colors.map((name) => colorValues[name]).filter(Boolean);
    const nonWhite = state.colors.filter((name) => name !== "White").map((name) => colorValues[name]);
    return {
      primary: nonWhite[0] || chosen[0] || "#563060",
      accent: nonWhite[1] || nonWhite[0] || "#b99052",
      light: chosen.includes(colorValues.White) ? colorValues.White : "#f7eee3"
    };
  }

  function visualCountForItem(item, config) {
    if (["arch", "backdrop", "marquee", "neon", "cake", "speaker"].includes(config.family)) return 0;
    if (config.family === "chairs") return Math.min(config.maxVisuals, Math.max(4, item.quantity));
    if (config.family === "tables") return Math.min(config.maxVisuals, Math.max(1, item.quantity));
    if (["balloons", "lighting", "flowers", "greenery", "bubbles", "party-light"].includes(config.family)) {
      return Math.min(config.maxVisuals, config.baseVisuals + Math.max(0, item.quantity - 1) * 2);
    }
    return Math.min(config.maxVisuals, Math.max(config.baseVisuals, item.quantity));
  }

  function setUnitPosition(unit, family, index, count, colors) {
    let x = 50;
    let y = 50;
    let size = 18;
    const progress = count <= 1 ? 0.5 : index / (count - 1);

    if (family === "balloons") {
      x = 4 + progress * 92;
      y = 70 - Math.sin(progress * Math.PI) * 64 + (index % 2) * 5;
      size = 18 + (index % 4) * 4;
    } else if (family === "lighting") {
      x = 3 + progress * 94;
      y = 62 - Math.sin(progress * Math.PI) * 52;
      size = 7;
    } else if (family === "tables") {
      const columns = Math.min(3, count);
      x = columns === 1 ? 50 : 14 + (index % columns) * (72 / (columns - 1));
      y = 26 + Math.floor(index / columns) * 46;
      size = count > 3 ? 28 : 36;
    } else if (family === "chairs") {
      const chairPositions = [
        [16, 16], [34, 12], [52, 10], [70, 12], [86, 16], [90, 52],
        [84, 84], [66, 88], [48, 90], [30, 88], [14, 84], [10, 52]
      ];
      [x, y] = chairPositions[index % chairPositions.length];
      size = count > 8 ? 18 : 22;
    } else if (["flowers", "greenery"].includes(family)) {
      const side = index % 2 === 0 ? 0 : 1;
      const row = Math.floor(index / 2);
      x = side === 0 ? 10 + row * 8 : 90 - row * 8;
      y = 30 + (row % 3) * 20;
      size = 18 + (index % 3) * 4;
    } else if (["napkins", "candles", "glassware", "place-settings", "chafing"].includes(family)) {
      const columns = Math.min(6, count);
      x = columns === 1 ? 50 : 12 + (index % columns) * (76 / (columns - 1));
      y = 34 + Math.floor(index / columns) * 42;
      size = 14;
    } else if (family === "bubbles") {
      x = 8 + ((index * 37) % 84);
      y = 8 + ((index * 23) % 76);
      size = 9 + (index % 4) * 4;
    } else if (family === "party-light") {
      x = 12 + progress * 76;
      y = 8 + (index % 3) * 18;
      size = 10;
    } else {
      const columns = Math.min(5, count);
      x = columns === 1 ? 50 : 14 + (index % columns) * (72 / (columns - 1));
      y = 40 + Math.floor(index / columns) * 35;
      size = 16;
    }

    unit.style.setProperty("--unit-x", `${x}%`);
    unit.style.setProperty("--unit-y", `${y}%`);
    unit.style.setProperty("--unit-size", `${size}px`);
    unit.style.setProperty("--unit-color", index % 3 === 0 ? colors.primary : index % 3 === 1 ? colors.accent : colors.light);
    unit.style.setProperty("--unit-delay", `${Math.min(index, 12) * 35}ms`);
  }

  function positionedBox(config, familyIndex, familyTotal, state) {
    const original = basePositions[config.family] || [20, 30, config.visualWidth, config.visualHeight];
    let [x, y, width, height] = original;

    if (["tables", "chairs"].includes(config.family) && familyTotal > 1) {
      const column = familyIndex % 2;
      const row = Math.floor(familyIndex / 2);
      x = config.family === "tables" ? 8 + column * 46 : 5 + column * 47;
      y = (config.family === "tables" ? 58 : 64) + row * 9;
      width = config.family === "tables" ? 42 : 43;
      height = config.family === "tables" ? 24 : 27;
    } else if (["flowers", "greenery"].includes(config.family) && familyTotal > 1) {
      const column = familyIndex % 2;
      x = 8 + column * 48;
      y = 46 + Math.floor(familyIndex / 2) * 6;
      width = 38;
      height = 20;
    } else if (["arch", "backdrop"].includes(config.family) && familyTotal > 1) {
      const inset = Math.min(familyIndex, 3) * 4;
      x += inset;
      y += familyIndex * 1.5;
      width -= inset * 2;
      height -= Math.min(familyIndex, 3) * 4;
    } else if (config.family === "balloons" && familyTotal > 1) {
      const column = familyIndex % 2;
      x = 8 + column * 42;
      y = 13 + Math.floor(familyIndex / 2) * 7;
      width = 50;
      height = 42;
    } else if (config.family === "speaker" && familyTotal > 1) {
      x = familyIndex % 2 === 0 ? 4 : 72;
      y = 56 + Math.floor(familyIndex / 2) * 4;
    } else if (["napkins", "candles", "glassware", "place-settings", "chafing"].includes(config.family) && familyTotal > 1) {
      const column = familyIndex % 2;
      x = 18 + column * 38;
      y = 61 + Math.floor(familyIndex / 2) * 6;
      width = 34;
      height = 14;
    }

    const adjustment = layoutAdjustments[state.layout]?.[config.zone] || [0, 0, 1];
    const scale = adjustment[2] || 1;
    const scaledWidth = width * scale;
    const scaledHeight = height * scale;
    x += adjustment[0] - (scaledWidth - width) / 2;
    y += adjustment[1] - (scaledHeight - height) / 2;
    width = scaledWidth;
    height = scaledHeight;

    return { x, y, width, height };
  }

  function createSceneObject(item, familyIndex, familyTotal, state, colors, itemIndex) {
    const config = itemConfig[item.name];
    if (!config) return null;
    const object = document.createElement("div");
    object.className = "preview-item";
    object.dataset.itemId = config.id;
    object.dataset.family = config.family;
    object.dataset.variant = config.variant;
    object.dataset.zone = config.zone;
    object.dataset.layer = String(config.layer);
    object.style.zIndex = config.layer;
    object.style.setProperty("--item-delay", `${Math.min(itemIndex, 12) * 55}ms`);

    const box = positionedBox(config, familyIndex, familyTotal, state);
    object.style.setProperty("--scene-x", `${box.x}%`);
    object.style.setProperty("--scene-y", `${box.y}%`);
    object.style.setProperty("--scene-width", `${box.width}%`);
    object.style.setProperty("--scene-height", `${box.height}%`);

    const unitCount = visualCountForItem(item, config);
    for (let unitIndex = 0; unitIndex < unitCount; unitIndex += 1) {
      const unit = document.createElement("i");
      unit.className = "visual-unit";
      setUnitPosition(unit, config.family, unitIndex, unitCount, colors);
      object.appendChild(unit);
    }

    if (config.text) {
      const text = document.createElement("strong");
      text.className = "scene-object-text";
      text.textContent = config.text;
      object.appendChild(text);
    }

    const label = document.createElement("span");
    label.className = "scene-object-label";
    label.textContent = `${config.previewCaption} ×${item.quantity}`;
    object.appendChild(label);

    return object;
  }

  function renderScene(state) {
    const items = state.allItems.filter((item) => itemConfig[item.name]);
    const colors = getSceneColors(state);
    elements.setupStage.dataset.layout = items.length || state.eventType ? state.layout : "empty";
    elements.setupStage.dataset.setting = state.resolvedSetting;
    elements.setupStage.style.setProperty("--scene-primary", colors.primary);
    elements.setupStage.style.setProperty("--scene-accent", colors.accent);
    elements.setupStage.style.setProperty("--scene-light", colors.light);
    elements.previewObjects.replaceChildren();
    elements.sceneItemKey.replaceChildren();

    const familyTotals = new Map();
    const familyIndexes = new Map();
    items.forEach((item) => {
      const family = itemConfig[item.name].family;
      familyTotals.set(family, (familyTotals.get(family) || 0) + 1);
    });

    items.forEach((item, index) => {
      const config = itemConfig[item.name];
      const familyIndex = familyIndexes.get(config.family) || 0;
      familyIndexes.set(config.family, familyIndex + 1);
      const object = createSceneObject(item, familyIndex, familyTotals.get(config.family), state, colors, index);
      if (object) elements.previewObjects.appendChild(object);

      const key = document.createElement("span");
      key.textContent = `${config.previewCaption} ×${item.quantity}`;
      key.dataset.layer = config.zone;
      elements.sceneItemKey.appendChild(key);
    });

    if (!items.length) {
      const emptyKey = document.createElement("span");
      emptyKey.textContent = state.eventType ? "Add hire or styling items to populate this layout" : "No items represented yet";
      elements.sceneItemKey.appendChild(emptyKey);
    }

    elements.stageEmpty.classList.toggle("is-hidden", items.length > 0);
    const emptyTitle = elements.stageEmpty.querySelector("strong");
    const emptyCopy = elements.stageEmpty.querySelector("span");
    if (state.eventType) {
      emptyTitle.textContent = `${state.eventType} layout ready`;
      emptyCopy.textContent = "Choose a package or individual items to place them in this live scene.";
    } else {
      emptyTitle.textContent = "Begin with your celebration";
      emptyCopy.textContent = "Choose an event type, setting or hire item to build the live scene.";
    }

    const density = items.length > 12 ? "detailed" : items.length > 7 ? "compact" : items.length ? "comfortable" : "empty";
    elements.setupStage.dataset.density = density;
    elements.sceneDensity.textContent = density === "empty"
      ? "Open canvas"
      : `${density[0].toUpperCase()}${density.slice(1)} scene · ${items.length} ${items.length === 1 ? "item" : "items"}`;
    elements.previewObjectCount.textContent = `${items.length} ${items.length === 1 ? "item" : "items"} represented`;
    elements.previewSelectionSummary.textContent = items.length
      ? items.slice(0, 3).map((item) => itemConfig[item.name].previewCaption).join(" · ") + (items.length > 3 ? ` · +${items.length - 3} more` : "")
      : "Choose details to begin your preview";

    const settingLabel = state.venueSetting || `${state.resolvedSetting[0].toUpperCase()}${state.resolvedSetting.slice(1)} suggestion`;
    elements.sceneSettingLabel.textContent = settingLabel;
    const colorLabel = [...state.colors, state.customColors].filter(Boolean).join(", ") || "colours to confirm";
    const itemLabel = items.length
      ? items.map((item) => `${itemConfig[item.name].previewCaption} x${item.quantity}`).join(", ")
      : "no hire items selected";
    elements.setupStage.setAttribute(
      "aria-label",
      `${state.eventType || "Event type to confirm"}; ${state.layoutDescription}; ${settingLabel}; ${colorLabel}; ${itemLabel}.`
    );
  }

  function stableHash(value) {
    let hash = 0;
    for (let index = 0; index < value.length; index += 1) {
      hash = ((hash << 5) - hash + value.charCodeAt(index)) | 0;
    }
    return Math.abs(hash);
  }

  function findInspiration(state) {
    if (!state.eventType && !state.themeStyle) return null;
    const selectedNames = new Set(state.allItems.map((item) => item.name));
    const conceptOnlyThemes = new Set(["Mermaid", "Princess", "Boho", "Custom Theme"]);
    const scored = inspirationReferences.map((reference) => {
      const itemMatches = reference.items.filter((item) => selectedNames.has(item));
      const eventMatch = Boolean(state.eventType && reference.events.includes(state.eventType));
      const themeMatch = Boolean(state.themeStyle && reference.themes.includes(state.themeStyle));
      const colorMatches = reference.colors.filter((color) => state.colors.includes(color));
      const productExact = reference.kind === "product" && itemMatches.length > 0;
      let score = productExact ? 120 : 0;
      score += eventMatch ? 48 : 0;
      score += themeMatch ? 52 : 0;
      score += itemMatches.length * 18;
      score += colorMatches.length * 3;
      const signature = `${state.eventType}|${state.themeStyle}|${[...selectedNames].join("|")}|${reference.src}`;
      score += (stableHash(signature) % 10) / 20;
      return { reference, score, itemMatches, eventMatch, themeMatch, colorMatches, productExact };
    }).sort((a, b) => b.score - a.score);

    const best = scored[0];
    if (!best || best.score < 42) return null;
    if (conceptOnlyThemes.has(state.themeStyle) && !best.productExact && !best.themeMatch) return null;
    return best;
  }

  function renderInspiration(state) {
    const match = findInspiration(state);
    if (!state.eventType && !state.themeStyle) {
      elements.inspirationFigure.hidden = true;
      elements.inspirationEmpty.hidden = false;
      elements.inspirationImage.src = blankImage;
      elements.inspirationImage.alt = "";
      elements.photoMatchBadge.textContent = "Awaiting event";
      elements.photoMatchTitle.textContent = "Choose an event or theme";
      elements.photoMatchReason.textContent = "No gallery photograph is treated as an exact preview of your booking.";
      return;
    }

    if (!match) {
      elements.inspirationFigure.hidden = true;
      elements.inspirationEmpty.hidden = false;
      elements.inspirationImage.src = blankImage;
      elements.inspirationImage.alt = "";
      elements.photoMatchBadge.textContent = "No verified match";
      elements.photoMatchTitle.textContent = "Your live scene remains accurate";
      elements.photoMatchReason.textContent = "There is no visually reviewed Fiesta photograph that clearly matches this event and theme. No unrelated image has been substituted.";
      return;
    }

    const { reference, productExact, eventMatch, themeMatch, itemMatches } = match;
    elements.inspirationEmpty.hidden = true;
    elements.inspirationFigure.hidden = false;
    elements.inspirationImage.src = reference.src;
    elements.inspirationImage.alt = `${reference.label}, shown as a separate Fiesta inspiration reference rather than an exact event preview`;
    elements.inspirationCaption.textContent = `Inspiration reference · ${reference.label}`;
    elements.photoMatchBadge.textContent = productExact ? "Item reference" : "Event inspiration";
    elements.photoMatchTitle.textContent = reference.label;

    const reasons = [];
    if (productExact) reasons.push(`shows ${itemMatches.join(", ")}`);
    if (eventMatch) reasons.push(`relates to ${state.eventType}`);
    if (themeMatch) reasons.push(`reflects ${state.themeStyle}`);
    elements.photoMatchReason.textContent = `${reasons.length ? `This photo ${reasons.join(" and ")}. ` : ""}It is inspiration only and does not represent every selected item, quantity, colour or final placement.`;
  }

  function summaryRow(label, value) {
    const row = document.createElement("div");
    row.className = "summary-row";
    const title = document.createElement("b");
    title.textContent = label;
    const copy = document.createElement("span");
    copy.textContent = value;
    row.append(title, copy);
    return row;
  }

  function summaryTagsRow(label, values, emptyText) {
    const row = document.createElement("div");
    row.className = "summary-row summary-tags-row";
    const title = document.createElement("b");
    title.textContent = label;
    const tags = document.createElement("span");
    tags.className = "summary-tags";
    if (!values.length) {
      const empty = document.createElement("span");
      empty.className = "summary-tag is-empty";
      empty.textContent = emptyText;
      tags.appendChild(empty);
    } else {
      values.forEach((value) => {
        const tag = document.createElement("span");
        tag.className = "summary-tag";
        tag.textContent = value;
        tags.appendChild(tag);
      });
    }
    row.append(title, tags);
    return row;
  }

  function confirmationItems(state) {
    const confirmations = [];
    if (!state.eventType) confirmations.push("Event type");
    if (!state.themeStyle) confirmations.push("Theme or style");
    if (!state.venueSetting) confirmations.push("Indoor, outdoor, marquee or ceremony setting");
    if (!state.guestCount) confirmations.push("Guest count");
    if (!state.colors.length && !state.customColors) confirmations.push("Colour palette");
    if (!state.allItems.length) confirmations.push("Hire and styling items");
    confirmations.push("Event date and exact venue");
    confirmations.push("Availability, delivery or pickup, setup and return arrangements");
    return confirmations;
  }

  function renderSummary(state) {
    const colors = [...state.colors, state.customColors ? `Custom: ${state.customColors}` : ""].filter(Boolean);
    const included = state.includedItems.map((item) => `${itemConfig[item.name].enquirySummary} ×${item.quantity}`);
    const selected = state.selectedItems.map((item) => `${itemConfig[item.name].enquirySummary} ×${item.quantity}`);
    const setting = state.venueSetting || `${state.resolvedSetting} suggested from the event type`;
    const confirmations = confirmationItems(state);

    elements.packageSummary.replaceChildren(
      summaryRow("Event type", state.eventType || "To confirm"),
      summaryRow("Theme", state.themeStyle || "To confirm"),
      summaryRow("Setting", setting),
      summaryRow("Guests", state.guestCount ? String(state.guestCount) : "To confirm"),
      summaryTagsRow("Colours", colors, "To confirm"),
      summaryRow("Catalogue section", state.basePackage || "To confirm"),
      summaryTagsRow("Package includes", included, "No package inclusions selected"),
      summaryTagsRow("Selected items", selected, "No optional items selected"),
      summaryTagsRow("Still to confirm", confirmations, "Nothing outstanding"),
      summaryRow("Notes", state.notes || "No notes added")
    );
  }

  function buildRequestMessage(state) {
    const colors = [...state.colors, state.customColors ? `Custom: ${state.customColors}` : ""].filter(Boolean);
    const included = state.includedItems.length
      ? state.includedItems.map((item) => `- ${itemConfig[item.name].enquirySummary}: ${item.quantity}`).join("\n")
      : "- No package inclusions selected";
    const selected = state.selectedItems.length
      ? state.selectedItems.map((item) => `- ${itemConfig[item.name].enquirySummary}: ${item.quantity}`).join("\n")
      : "- No optional items selected";
    const confirmations = confirmationItems(state).map((item) => `- ${item}`).join("\n");

    return [
      "Hello Fiesta Party Hire Yeppoon,",
      "",
      "I would like to discuss an event setup:",
      `Event type: ${state.eventType || "To confirm"}`,
      `Theme/style: ${state.themeStyle || "To confirm"}`,
      `Venue setting: ${state.venueSetting || "To confirm"}`,
      `Estimated guests: ${state.guestCount || "To confirm"}`,
      `Colours: ${colors.length ? colors.join(", ") : "To confirm"}`,
      `Catalogue section: ${state.basePackage || "To confirm"}`,
      "",
      "Package inclusions:",
      included,
      "",
      "Selected hire and styling items:",
      selected,
      "",
      "Still to confirm:",
      confirmations,
      "",
      `Notes: ${state.notes || "None yet"}`,
      "",
      "Could you please confirm suitable options, availability and pricing?"
    ].join("\n");
  }

  function announcePreview(state, reason = "updated") {
    const itemCount = state.allItems.length;
    elements.previewAnnouncement.textContent = "";
    window.setTimeout(() => {
      elements.previewAnnouncement.textContent = `Live preview ${reason}: ${state.eventType || "event type to confirm"}, ${state.venueSetting || `${state.resolvedSetting} suggested`}, ${itemCount} ${itemCount === 1 ? "item" : "items"} represented.`;
    }, 30);
  }

  function updatePlanner({ announce = false, save = true, reason = "updated" } = {}) {
    plannerState = collectState();
    elements.catalogueIncludes.hidden = plannerState.basePackage !== "Backdrop Styling Package";
    renderScene(plannerState);
    renderInspiration(plannerState);
    renderSummary(plannerState);
    updateItemBrowser(plannerState);
    updateProgress(plannerState);
    if (!elements.requestMessageWrap.hidden) elements.requestMessage.value = buildRequestMessage(plannerState);
    if (announce) announcePreview(plannerState, reason);
    if (save) saveDraftSoon();
  }

  function clearOptionalItems() {
    elements.itemOptions.forEach((option) => {
      const checkbox = option.querySelector("input[type='checkbox']");
      const quantity = option.querySelector("input[type='number']");
      checkbox.checked = false;
      quantity.value = 1;
      quantity.disabled = true;
    });
  }

  function hasMeaningfulChanges() {
    if (!plannerState) return false;
    const defaultColors = plannerState.colors.length === 2 && plannerState.colors.includes("Gold") && plannerState.colors.includes("White");
    return Boolean(
      plannerState.eventType
      || plannerState.themeStyle
      || plannerState.venueSetting
      || plannerState.guestCount
      || plannerState.basePackage
      || plannerState.customColors
      || plannerState.notes
      || plannerState.selectedItems.length
      || !defaultColors
    );
  }

  function resetPlanner() {
    elements.form.reset();
    clearOptionalItems();
    elements.itemSearch.value = "";
    selectedOnlyMode = false;
    elements.selectedOnly.classList.remove("is-active");
    elements.selectedOnly.setAttribute("aria-pressed", "false");
    reviewMode = false;
    elements.requestMessageWrap.hidden = true;
    elements.requestMessage.value = "";
    try {
      localStorage.removeItem(storageKey);
      localStorage.removeItem(legacyStorageKey);
    } catch {
      // The planner remains fully functional when storage is unavailable.
    }
    setActiveCategory("addons");
    updatePlanner({ announce: true, save: false, reason: "reset" });
    if (elements.draftStatus) elements.draftStatus.textContent = "Draft saves automatically";
    setStatus("Your planner has been reset.", "success");
  }

  function reviewRequest() {
    reviewMode = true;
    updateProgress(plannerState);
    root.querySelector(".summary-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setStatus("Your live design and request summary are ready to review.", "success");
  }

  function handleFormInput(event) {
    if (event.target === elements.itemSearch) {
      filterItemBrowser();
      return;
    }

    const option = event.target.closest(".addon-option");
    if (option) {
      const checkbox = option.querySelector("input[type='checkbox']");
      const quantity = option.querySelector("input[type='number']");
      quantity.disabled = !checkbox.checked;
      if (event.target === quantity) quantity.value = normalizeQuantity(quantity.value);
    }

    reviewMode = false;
    const visualControl = event.target !== elements.packageNotes;
    updatePlanner({ announce: visualControl, reason: "updated from your selections" });
  }

  elements.itemOptions.forEach((option) => {
    const checkbox = option.querySelector("input[type='checkbox']");
    const quantity = option.querySelector("input[type='number']");
    quantity.disabled = !checkbox.checked;
    option.dataset.itemCategory = getCategoryForOption(option);
    const config = itemConfig[checkbox.value];
    if (config) option.dataset.previewFamily = config.family;
  });

  elements.form.addEventListener("input", handleFormInput);

  elements.categoryTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => setActiveCategory(tab.dataset.categoryTab));
    tab.addEventListener("keydown", (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % elements.categoryTabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + elements.categoryTabs.length) % elements.categoryTabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = elements.categoryTabs.length - 1;
      setActiveCategory(elements.categoryTabs[nextIndex].dataset.categoryTab, true);
    });
  });

  elements.selectedOnly.addEventListener("click", () => {
    selectedOnlyMode = !selectedOnlyMode;
    elements.selectedOnly.classList.toggle("is-active", selectedOnlyMode);
    elements.selectedOnly.setAttribute("aria-pressed", String(selectedOnlyMode));
    filterItemBrowser();
  });

  elements.clearItemSelections.addEventListener("click", () => {
    clearOptionalItems();
    updatePlanner({ announce: true, reason: "cleared of optional items" });
    setStatus("Optional item selections cleared.", "success");
  });

  elements.selectedChips.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-item]");
    if (!button) return;
    const option = elements.itemOptions.find((candidate) => candidate.querySelector("input[type='checkbox']")?.value === button.dataset.removeItem);
    if (!option) return;
    const checkbox = option.querySelector("input[type='checkbox']");
    const quantity = option.querySelector("input[type='number']");
    checkbox.checked = false;
    quantity.value = 1;
    quantity.disabled = true;
    updatePlanner({ announce: true, reason: `${button.dataset.removeItem} removed` });
  });

  elements.reviewPackage.addEventListener("click", reviewRequest);
  elements.mobileReviewPackage.addEventListener("click", reviewRequest);

  elements.sendPackageRequest.addEventListener("click", () => {
    reviewMode = true;
    elements.requestMessage.value = buildRequestMessage(plannerState);
    elements.requestMessageWrap.hidden = false;
    updateProgress(plannerState);
    elements.requestMessageWrap.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setStatus("Your enquiry message is ready to copy.", "success");
  });

  elements.resetPackage.addEventListener("click", () => {
    if (hasMeaningfulChanges() && elements.resetConfirmDialog?.showModal) {
      elements.resetConfirmDialog.showModal();
      return;
    }
    resetPlanner();
  });

  elements.confirmReset?.addEventListener("click", resetPlanner);
  elements.resetConfirmDialog?.addEventListener("click", (event) => {
    if (event.target === elements.resetConfirmDialog) elements.resetConfirmDialog.close("cancel");
  });

  elements.buildPackagePreview.addEventListener("click", () => {
    elements.setupStage.classList.remove("is-refreshing");
    void elements.setupStage.offsetWidth;
    elements.setupStage.classList.add("is-refreshing");
    updatePlanner({ announce: true, reason: "rebuilt from the current selections" });
    setStatus("Live scene rebuilt from your current selections.", "success");
  });

  elements.copyPackageRequest.addEventListener("click", async () => {
    elements.requestMessage.select();
    try {
      await navigator.clipboard.writeText(elements.requestMessage.value);
    } catch {
      document.execCommand("copy");
    }
    elements.copyPackageRequest.textContent = "Copied";
    setStatus("Request message copied.", "success");
    window.setTimeout(() => {
      elements.copyPackageRequest.textContent = "Copy message";
    }, 1400);
  });

  elements.inspirationImage.addEventListener("error", () => {
    elements.inspirationFigure.hidden = true;
    elements.inspirationEmpty.hidden = false;
    elements.inspirationImage.src = blankImage;
    elements.inspirationImage.alt = "";
    elements.photoMatchBadge.textContent = "Reference unavailable";
    elements.photoMatchReason.textContent = "The live scene is still based on your selections; an unavailable photograph has not been replaced with an unrelated image.";
  });

  const restored = restoreDraft();
  setActiveCategory("addons");
  updatePlanner({ announce: restored, save: false, reason: restored ? "restored from your saved design" : "ready" });
  suppressSave = false;
})();
