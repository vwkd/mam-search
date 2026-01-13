export const params_data = {
  query: {
    key: "tor[text]",
  },

  field: {
    values: {
      title: {
        key: "tor[srchIn][title]",
      },
      description: {
        key: "tor[srchIn][description]",
      },
      tags: {
        key: "tor[srchIn][tags]",
      },
      author: {
        key: "tor[srchIn][author]",
      },
      narrator: {
        key: "tor[srchIn][narrator]",
      },
      series: {
        key: "tor[srchIn][series]",
      },
      fileTypes: {
        key: "tor[srchIn][fileTypes]",
      },
      filenames: {
        key: "tor[srchIn][filenames]",
      },
    },
    value: "true",
    defaultValue: ["title", "author"],
  },

  subset: {
    key: "tor[searchType]",
    values: {
      all: {
        // "All torrents"
        value: "all",
      },
      active: {
        // "Active"
        value: "active",
      },
      inactive: {
        // "Inactive"
        value: "inactive",
      },
      fl: {
        // "Freeleech"
        value: "fl",
      },
      vip: {
        // "VIP"
        value: "VIP",
      },
      flvip: {
        // "Freeleech or VIP"
        value: "fl-VIP",
      },
      nvip: {
        // "Not VIP"
        value: "nVIP",
      },
      nmeta: {
        // "Missing meta"
        value: "nMeta",
      },
      ncat: {
        // "Missing new categories"
        value: "nMeta2",
      },
    },
    defaultValue: ["all"],
  },

  location: {
    key: "tor[searchIn]",
    values: {
      all: {
        // "All Torrents"
        value: "torrents",
      },
      bookmarks: {
        // "My Bookmarks"
        value: "bookmarks",
      },
      new: {
        // "Flagged New"
        value: "new",
      },
      uploads: {
        // "My Uploads"
        value: "mine",
      },
      reseedRequests: {
        // "All Reseed Requests"
        value: "allReseed",
      },
      reseeds: {
        // "Torrents I could reseed"
        value: "myReseed",
      },
    },
    defaultValue: ["all"],
  },

  category: {
    key: "tor[cat][]",
    values: {
      // --- "AudioBooks" ---
      AB_AA: {
        // "Action/Adventure"
        value: "39",
      },
      AB_A: {
        // "Art"
        value: "49",
      },
      AB_Bi: {
        // "Biographical"
        value: "50",
      },
      AB_Bu: {
        // "Business"
        value: "83",
      },
      AB_CI: {
        // "Computer/Internet"
        value: "51",
      },
      AB_C: {
        // "Crafts"
        value: "97",
      },
      AB_CT: {
        // "Crime/Thriller"
        value: "40",
      },
      AB_Fa: {
        // "Fantasy"
        value: "41",
      },
      AB_Fo: {
        // "Food"
        value: "106",
      },
      AB_GF: {
        // "General Fiction"
        value: "42",
      },
      AB_GNF: {
        // "General Non-Fic"
        value: "52",
      },
      AB_HF: {
        // "Historical Fiction"
        value: "98",
      },
      AB_Hi: {
        // "History"
        value: "54",
      },
      AB_HG: {
        // "Home/Garden"
        value: "55",
      },
      AB_Ho: {
        // "Horror"
        value: "43",
      },
      AB_Hu: {
        // "Humor"
        value: "99",
      },
      AB_I: {
        // "Instructional"
        value: "84",
      },
      AB_J: {
        // "Juvenile"
        value: "44",
      },
      AB_L: {
        // "Language"
        value: "56",
      },
      AB_LC: {
        // "Literary Classics"
        value: "45",
      },
      AB_MST: {
        // "Math/Science/Tech"
        value: "57",
      },
      AB_Me: {
        // "Medical"
        value: "85",
      },
      AB_My: {
        // "Mystery"
        value: "87",
      },
      AB_N: {
        // "Nature"
        value: "119",
      },
      AB_P: {
        // "Philosophy"
        value: "88",
      },
      AB_PSR: {
        // "Pol/Soc/Relig"
        value: "58",
      },
      AB_Re: {
        // "Recreation"
        value: "59",
      },
      AB_Ro: {
        // "Romance"
        value: "46",
      },
      AB_SF: {
        // "Science Fiction"
        value: "47",
      },
      AB_SH: {
        // "Self-Help"
        value: "53",
      },
      AB_TA: {
        // "Travel/Adventure"
        value: "89",
      },
      AB_TC: {
        // "True Crime"
        value: "100",
      },
      AB_UF: {
        // "Urban Fantasy"
        value: "108",
      },
      AB_W: {
        // "Western"
        value: "48",
      },
      AB_YA: {
        // "Young Adult"
        value: "111",
      },
      // --- "E-Books" ---
      EB_AA: {
        // "Action/Adventure"
        value: "60",
      },
      EB_A: {
        // "Art"
        value: "71",
      },
      EB_Bi: {
        // "Biographical"
        value: "72",
      },
      EB_Bu: {
        // "Business"
        value: "90",
      },
      EB_CG: {
        // "Comics/Graphic novels"
        value: "61",
      },
      EB_CI: {
        // "Computer/Internet"
        value: "73",
      },
      EB_C: {
        // "Crafts"
        value: "101",
      },
      EB_CT: {
        // "Crime/Thriller"
        value: "62",
      },
      EB_Fa: {
        // "Fantasy"
        value: "63",
      },
      EB_Fo: {
        // "Food"
        value: "107",
      },
      EB_GF: {
        // "General Fiction"
        value: "64",
      },
      EB_GNF: {
        // "General Non-Fiction"
        value: "74",
      },
      EB_HF: {
        // "Historical Fiction"
        value: "102",
      },
      EB_Hi: {
        // "History"
        value: "76",
      },
      EB_HG: {
        // "Home/Garden"
        value: "77",
      },
      EB_Ho: {
        // "Horror"
        value: "65",
      },
      EB_Hu: {
        // "Humor"
        value: "103",
      },
      EB_IM: {
        // "Illusion/Magic"
        value: "115",
      },
      EB_I: {
        // "Instructional"
        value: "91",
      },
      EB_J: {
        // "Juvenile"
        value: "66",
      },
      EB_L: {
        // "Language"
        value: "78",
      },
      EB_LC: {
        // "Literary Classics"
        value: "67",
      },
      EB_MN: {
        // "Magazines/Newspapers"
        value: "79",
      },
      EB_MST: {
        // "Math/Science/Tech"
        value: "80",
      },
      EB_Me: {
        // "Medical"
        value: "92",
      },
      EB_MC: {
        // "Mixed Collections"
        value: "118",
      },
      EB_My: {
        // "Mystery"
        value: "94",
      },
      EB_N: {
        // "Nature"
        value: "120",
      },
      EB_P: {
        // "Philosophy"
        value: "95",
      },
      EB_PSR: {
        // "Pol/Soc/Relig"
        value: "81",
      },
      EB_Re: {
        // "Recreation"
        value: "82",
      },
      EB_Ro: {
        // "Romance"
        value: "68",
      },
      EB_SF: {
        // "Science Fiction"
        value: "69",
      },
      EB_SH: {
        // "Self-Help"
        value: "75",
      },
      EB_TA: {
        // "Travel/Adventure"
        value: "96",
      },
      EB_TC: {
        // "True Crime"
        value: "104",
      },
      EB_UF: {
        // "Urban Fantasy"
        value: "109",
      },
      EB_W: {
        // "Western"
        value: "70",
      },
      EB_YA: {
        // "Young Adult"
        value: "112",
      },
      // --- "Musicology" ---
      M_GBT: {
        // "Guitar/Bass Tabs"
        value: "19",
      },
      M_IS: {
        // "Individual Sheet"
        value: "20",
      },
      M_ISMP3: {
        // "Individual Sheet MP3"
        value: "24",
      },
      M_IBV: {
        // "Instructional Book with Video"
        value: "126",
      },
      M_IMM: {
        // "Instructional Media - Music"
        value: "22",
      },
      M_LLLTPJW: {
        // "Lick Library - LTP/Jam With"
        value: "113",
      },
      M_LLTQL: {
        // "Lick Library - Techniques/QL"
        value: "114",
      },
      M_MCE: {
        // "Music - Complete Editions"
        value: "17",
      },
      M_MB: {
        // "Music Book"
        value: "26",
      },
      M_MBMP3: {
        // "Music Book MP3"
        value: "27",
      },
      M_SC: {
        // "Sheet Collection"
        value: "30",
      },
      M_SCMP3: {
        // "Sheet Collection MP3"
        value: "31",
      },
      // --- "Radio" ---
      R_C: {
        // "Comedy"
        value: "127",
      },
      R_D: {
        // "Drama"
        value: "130",
      },
      R_FD: {
        // "Factual/Documentary"
        value: "128",
      },
      R_R: {
        // "Reading"
        value: "132",
      },
      // --- "general" ---
      all: {
        // "All Categories"
        value: "0",
      },
    },
    // beware: default is always present, even if selected
    defaultValue: ["all"],
  },

  language: {
    key: "tor[browse_lang][]",
    values: {
      en: {
        // "English"
        value: "1",
      },
      af: {
        // "Afrikaans"
        value: "17",
      },
      ar: {
        // "Arabic"
        value: "32",
      },
      bn: {
        // "Bengali"
        value: "35",
      },
      bs: {
        // "Bosnian"
        value: "51",
      },
      bg: {
        // "Bulgarian"
        value: "18",
      },
      my: {
        // "Burmese"
        value: "6",
      },
      yue: {
        // "Cantonese"
        value: "44",
      },
      ca: {
        // "Catalan"
        value: "19",
      },
      zh: {
        // "Chinese"
        value: "2",
      },
      hr: {
        // "Croatian"
        value: "49",
      },
      cs: {
        // "Czech"
        value: "20",
      },
      da: {
        // "Danish"
        value: "21",
      },
      nl: {
        // "Dutch"
        value: "22",
      },
      et: {
        // "Estonian"
        value: "61",
      },
      fa: {
        // "Farsi"
        value: "39",
      },
      fi: {
        // "Finnish"
        value: "23",
      },
      fr: {
        // "French"
        value: "36",
      },
      de: {
        // "German"
        value: "37",
      },
      el: {
        // "Greek"
        value: "26",
      },
      grc: {
        // "Greek, Ancient"
        value: "59",
      },
      gu: {
        // "Gujarati"
        value: "3",
      },
      he: {
        // "Hebrew"
        value: "27",
      },
      hi: {
        // "Hindi"
        value: "8",
      },
      hu: {
        // "Hungarian"
        value: "28",
      },
      is: {
        // "Icelandic"
        value: "63",
      },
      id: {
        // "Indonesian"
        value: "53",
      },
      ga: {
        // "Irish"
        value: "56",
      },
      it: {
        // "Italian"
        value: "43",
      },
      ja: {
        // "Japanese"
        value: "38",
      },
      jv: {
        // "Javanese"
        value: "12",
      },
      kn: {
        // "Kannada"
        value: "5",
      },
      ko: {
        // "Korean"
        value: "41",
      },
      lt: {
        // "Lithuanian"
        value: "50",
      },
      la: {
        // "Latin"
        value: "46",
      },
      lv: {
        // "Latvian"
        value: "62",
      },
      ms: {
        // "Malay"
        value: "33",
      },
      ml: {
        // "Malayalam"
        value: "58",
      },
      gv: {
        // "Manx"
        value: "57",
      },
      mr: {
        // "Marathi"
        value: "9",
      },
      no: {
        // "Norwegian"
        value: "48",
      },
      pl: {
        // "Polish"
        value: "45",
      },
      pt: {
        // "Portuguese"
        value: "34",
      },
      "pt-BR": {
        // "Brazilian Portuguese (BP)"
        value: "52",
      },
      pa: {
        // "Punjabi"
        value: "14",
      },
      ro: {
        // "Romanian"
        value: "30",
      },
      ru: {
        // "Russian"
        value: "16",
      },
      gd: {
        // "Scottish Gaelic"
        value: "24",
      },
      sa: {
        // "Sanskrit"
        value: "60",
      },
      sr: {
        // "Serbian"
        value: "31",
      },
      sl: {
        // "Slovenian"
        value: "54",
      },
      es: {
        // "Spanish"
        value: "4",
      },
      "es-ES": {
        // "Castilian Spanish"
        value: "55",
      },
      sv: {
        // "Swedish"
        value: "40",
      },
      tl: {
        // "Tagalog"
        value: "29",
      },
      ta: {
        // "Tamil"
        value: "11",
      },
      te: {
        // "Telugu"
        value: "10",
      },
      th: {
        // "Thai"
        value: "7",
      },
      tr: {
        // "Turkish"
        value: "42",
      },
      uk: {
        // "Ukrainian"
        value: "25",
      },
      ur: {
        // "Urdu"
        value: "15",
      },
      vi: {
        // "Vietnamese"
        value: "13",
      },
      und: {
        // "Other"
        value: "47",
      },
    },
  },

  include: {
    key: "tor[browseFlagsHideVsShow]",
    defaultValue: false,
    // "0": "Not containing"
    // "1": "Only containing"
  },

  filter: {
    key: "tor[browseFlags][]",
    values: {
      // "Crude Language"
      crude: {
        value: "2",
      },
      // "Violence"
      violence: {
        value: "4",
      },
      // "Some Explicit Sexual Content"
      someExplicit: {
        value: "8",
      },
      // "Explicit Sexual Content"
      explicit: {
        value: "16",
      },
      // "Abridged"
      abridged: {
        value: "32",
      },
      // "LGBT"
      lgbt: {
        value: "64",
      },
    },
  },

  startDate: {
    key: "tor[startDate]",
  },

  endDate: {
    key: "tor[endDate]",
  },

  minSize: {
    key: "tor[minSize]",
  },

  maxSize: {
    key: "tor[maxSize]",
  },

  unit: {
    key: "tor[unit]",
    values: {
      B: {
        // 2**0, 1024**0
        value: "1",
      },
      KiB: {
        // 2**10, 1024**1
        value: "1024",
      },
      MiB: {
        // 2**20, 1024**2
        value: "1048576",
      },
      GiB: {
        // 2**30, 1024**3
        value: "1073741824",
      },
    },
    defaultValue: "B",
  },

  minSeeders: {
    key: "tor[minSeeders]",
  },

  maxSeeders: {
    key: "tor[maxSeeders]",
  },

  minLeechers: {
    key: "tor[minLeechers]",
  },

  maxLeechers: {
    key: "tor[maxLeechers]",
  },

  minSnatched: {
    key: "tor[minSnatched]",
  },

  maxSnatched: {
    key: "tor[maxSnatched]",
  },

  hash: {
    key: "tor[hash]",
  },

  sort: {
    key: "tor[sortType]",
    defaultValue: "default",
  },

  firstPage: {
    key: "tor[startNumber]",
    defaultValue: 0,
  },
} as const;
