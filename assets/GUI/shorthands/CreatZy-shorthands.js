const shorthandMap = {
    "‘’": {
        "i": "2",
        "codePoint": "U+2018+2019",
        "name": "single quotation marks",
        "entities": "&lsquo;&rsquo;, &lsquo;&rsquor;, &OpenCurlyQuote;&CloseCurlyQuote;",
        "code": "{}'",
        "keywords": [
            "single curly quotes"
        ]
    },
    "‘": {
        "i": "3",
        "codePoint": "U+2018",
        "name": "left single quotation mark",
        "entities": "&lsquo;, &OpenCurlyQuote;",
        "code": "{'",
        "keywords": [
            "left single curly quote",
            "open single curly quote"
        ]
    },
    "’": {
        "i": "4",
        "codePoint": "U+2019",
        "name": "right single quotation mark",
        "entities": "&rsquo;, &rsquor;, &CloseCurlyQuote;",
        "code": "}'",
        "keywords": [
            "right single curly quote",
            "close single curly quote"
        ]
    },
    "“”": {
        "i": "5",
        "codePoint": "U+201C+201D",
        "name": "double quotation marks",
        "entities": "&ldquo;&rdquo;, &ldquo;&rdquor;, &OpenCurlyDoubleQuote;&CloseCurlyDoubleQuote;",
        "code": "{}\"",
        "keywords": [
            "double curly quotes"
        ]
    },
    "“": {
        "i": "6",
        "codePoint": "U+201C",
        "name": "left double quotation mark",
        "entities": "&ldquo;, &OpenCurlyDoubleQuote;",
        "code": "{\"",
        "keywords": [
            "left double curly quote",
            "open double curly quote"
        ]
    },
    "”": {
        "i": "7",
        "codePoint": "U+201D",
        "name": "right double quotation mark",
        "entities": "&rdquo;, &rdquor;, &CloseCurlyDoubleQuote;",
        "code": "}\"",
        "keywords": [
            "right double curly quote",
            "close double curly quote"
        ]
    },
    "❛❜": {
        "i": "8",
        "codePoint": "U+275B+275C",
        "name": "heavy single comma quotation marks ornament",
        "entities": "",
        "code": "{}''",
        "keywords": [
            "single curly quotes ornament"
        ]
    },
    "❛": {
        "i": "9",
        "codePoint": "U+275B",
        "name": "heavy single turned comma quotation mark ornament",
        "entities": "",
        "code": "{''",
        "keywords": [
            "left single curly quote ornament",
            "open single curly quote ornament"
        ]
    },
    "❜": {
        "i": "10",
        "codePoint": "U+275C",
        "name": "heavy single comma quotation mark ornament",
        "entities": "",
        "code": "}''",
        "keywords": [
            "right single curly quote ornament",
            "close single curly quote ornament"
        ]
    },
    "❝❞": {
        "i": "11",
        "codePoint": "U+275D+275E",
        "name": "heavy double comma quotation marks ornament",
        "entities": "",
        "code": "{}\"\"",
        "keywords": [
            "double curly quotes ornament"
        ]
    },
    "❝": {
        "i": "12",
        "codePoint": "U+275D",
        "name": "heavy double turned comma quotation mark ornament",
        "entities": "",
        "code": "{\"\"",
        "keywords": [
            "left double curly quote ornament",
            "open double curly quote ornament"
        ]
    },
    "❞": {
        "i": "13",
        "codePoint": "U+275E",
        "name": "heavy double comma quotation mark ornament",
        "entities": "",
        "code": "}\"\"",
        "keywords": [
            "right double curly quote ornament",
            "close double curly quote ornament"
        ]
    },
    "‹›": {
        "i": "14",
        "codePoint": "U+2039+203A",
        "name": "single angle quotation marks",
        "entities": "&lsaquo;&rsaquo;",
        "code": "{}.",
        "keywords": [
            "single guillemets"
        ]
    },
    "‹": {
        "i": "15",
        "codePoint": "U+2039",
        "name": "single left-pointing angle quotation mark",
        "entities": "&lsaquo;",
        "code": "{.",
        "keywords": [
            "left single guillemet",
            "open single guillemet"
        ]
    },
    "›": {
        "i": "16",
        "codePoint": "U+203A",
        "name": "single right-pointing angle quotation mark",
        "entities": "&rsaquo;",
        "code": "}.",
        "keywords": [
            "right single guillemet",
            "close single guillemet"
        ]
    },
    "«»": {
        "i": "17",
        "codePoint": "U+00AB+00BB",
        "name": "double angle quotation marks",
        "entities": "&laquo;&raquo;",
        "code": "{};",
        "keywords": [
            "double guillemets"
        ]
    },
    "«": {
        "i": "18",
        "codePoint": "U+00AB",
        "name": "left-pointing double angle quotation mark",
        "entities": "&laquo;",
        "code": "{;",
        "keywords": [
            "left double guillemet",
            "open double guillemet"
        ]
    },
    "»": {
        "i": "19",
        "codePoint": "U+00BB",
        "name": "right-pointing double angle quotation mark",
        "entities": "&raquo;",
        "code": "};",
        "keywords": [
            "right double guillemet",
            "close double guillemet"
        ]
    },
    "⟨⟩": {
        "i": "20",
        "codePoint": "U+27E8+27E9",
        "name": "mathematical angle brackets",
        "entities": "&lang;&rang;, &langle;&rangle;, &LeftAngleBracket;&RightAngleBracket;",
        "code": "{}[",
        "keywords": [
            ""
        ]
    },
    "⟨": {
        "i": "21",
        "codePoint": "U+27E8",
        "name": "mathematical left angle bracket",
        "entities": "&lang;, &langle;, &LeftAngleBracket;",
        "code": "{[",
        "keywords": [
            "mathematical open angle bracket"
        ]
    },
    "⟩": {
        "i": "22",
        "codePoint": "U+27E9",
        "name": "mathematical right angle bracket",
        "entities": "&rang;, &rangle;, &RightAngleBracket;",
        "code": "}]",
        "keywords": [
            "mathematical close angle bracket"
        ]
    },
    "⟪⟫": {
        "i": "23",
        "codePoint": "U+27EA+27EB",
        "name": "mathematical double angle brackets",
        "entities": "&Lang;&Rang;",
        "code": "{}{",
        "keywords": [
            ""
        ]
    },
    "⟪": {
        "i": "24",
        "codePoint": "U+27EA",
        "name": "mathematical left double angle bracket",
        "entities": "&Lang;",
        "code": "{{",
        "keywords": [
            "mathematical open double angle bracket"
        ]
    },
    "⟫": {
        "i": "25",
        "codePoint": "U+27EB",
        "name": "mathematical right double angle bracket",
        "entities": "&Rang;",
        "code": "}}",
        "keywords": [
            "mathematical close double angle bracket"
        ]
    },
    "⸨⸩": {
        "i": "26",
        "codePoint": "U+2E28+2E29",
        "name": "double parentheses",
        "entities": "",
        "code": "{}(",
        "keywords": [
            ""
        ]
    },
    "⸨": {
        "i": "27",
        "codePoint": "U+2E28",
        "name": "left double parenthesis",
        "entities": "",
        "code": "{(",
        "keywords": [
            "open double parenthesis"
        ]
    },
    "⸩": {
        "i": "28",
        "codePoint": "U+2E29",
        "name": "right double parenthesis",
        "entities": "",
        "code": "})",
        "keywords": [
            "close double parenthesis"
        ]
    },
    "·": {
        "i": "30",
        "codePoint": "U+00B7",
        "name": "middle dot",
        "entities": "&middot;, &centerdot;, &CenterDot;",
        "code": ".",
        "keywords": [
            "center dot",
            "Georgian comma",
            "Greek middle dot",
            "interpunct",
            "interpoint"
        ]
    },
    " ": {
        "i": "31",
        "codePoint": "U+00A0",
        "name": "no-break space",
        "entities": "&nbsp;, &NonBreakingSpace;",
        "code": ".nbsp",
        "keywords": [
            "non-breaking space"
        ]
    },
    "␣": {
        "i": "32",
        "codePoint": "U+2423",
        "name": "open box",
        "entities": "&blank;",
        "code": ".blank",
        "keywords": [
            "blank"
        ]
    },
    "‑": {
        "i": "33",
        "codePoint": "U+2011",
        "name": "non-breaking hyphen",
        "entities": "",
        "code": "-",
        "keywords": [
            ""
        ]
    },
    "–": {
        "i": "34",
        "codePoint": "U+2013",
        "name": "en dash",
        "entities": "&ndash;",
        "code": "--",
        "keywords": [
            ""
        ]
    },
    "—": {
        "i": "35",
        "codePoint": "U+2014",
        "name": "em dash",
        "entities": "&mdash;",
        "code": "---",
        "keywords": [
            ""
        ]
    },
    "―": {
        "i": "36",
        "codePoint": "U+2015",
        "name": "horizontal bar",
        "entities": "&horbar;",
        "code": "---'",
        "keywords": [
            "quotation dash"
        ]
    },
    "‒": {
        "i": "37",
        "codePoint": "U+2012",
        "name": "figure dash",
        "entities": "",
        "code": "-0",
        "keywords": [
            "numerical separator"
        ]
    },
    "§": {
        "i": "38",
        "codePoint": "U+00A7",
        "name": "section sign",
        "entities": "&sect;",
        "code": ".S",
        "keywords": [
            ""
        ]
    },
    "¶": {
        "i": "39",
        "codePoint": "U+00B6",
        "name": "pilcrow sign",
        "entities": "&para;",
        "code": ".P",
        "keywords": [
            "paragraph sign"
        ]
    },
    "¡": {
        "i": "40",
        "codePoint": "U+00A1",
        "name": "inverted exclamation mark",
        "entities": "&iexcl;",
        "code": ".i!",
        "keywords": [
            ""
        ]
    },
    "¿": {
        "i": "41",
        "codePoint": "U+00BF",
        "name": "inverted question mark",
        "entities": "&iquest;",
        "code": ".i?",
        "keywords": [
            "turned question mark"
        ]
    },
    "‣": {
        "i": "42",
        "codePoint": "U+2023",
        "name": "triangular bullet",
        "entities": "",
        "code": ".>",
        "keywords": [
            ""
        ]
    },
    "…": {
        "i": "43",
        "codePoint": "U+2026",
        "name": "horizontal ellipsis",
        "entities": "&hellip;, &mldr;",
        "code": "...",
        "keywords": [
            "three dot leader",
            "m leader"
        ]
    },
    "※": {
        "i": "44",
        "codePoint": "U+203B",
        "name": "reference mark",
        "entities": "",
        "code": ".ref",
        "keywords": [
            ""
        ]
    },
    "‼": {
        "i": "45",
        "codePoint": "U+203C",
        "name": "double exclamation mark",
        "entities": "",
        "code": ".!!",
        "keywords": [
            ""
        ]
    },
    "‽": {
        "i": "46",
        "codePoint": "U+203D",
        "name": "interrobang",
        "entities": "",
        "code": ".!?",
        "keywords": [
            ""
        ]
    },
    "±": {
        "i": "48",
        "codePoint": "U+00B1",
        "name": "plus-minus sign",
        "entities": "&plusmn;, &pm;, &PlusMinus;",
        "code": "=+-",
        "keywords": [
            "plus-or-minus sign"
        ]
    },
    "∓": {
        "i": "49",
        "codePoint": "U+2213",
        "name": "minus-or-plus sign",
        "entities": "&mnplus;, &mp;, &MinusPlus;",
        "code": "=-+",
        "keywords": [
            "minus-plus sign"
        ]
    },
    "×": {
        "i": "50",
        "codePoint": "U+00D7",
        "name": "multiplication sign",
        "entities": "&times;",
        "code": "=x",
        "keywords": [
            "times"
        ]
    },
    "÷": {
        "i": "51",
        "codePoint": "U+00F7",
        "name": "division sign",
        "entities": "&divide;, &div;",
        "code": "=%",
        "keywords": [
            ""
        ]
    },
    "⋇": {
        "i": "52",
        "codePoint": "U+22C7",
        "name": "division times",
        "entities": "&divonx;, &divideontimes;",
        "code": "=x%",
        "keywords": [
            "interunion"
        ]
    },
    "⋅": {
        "i": "53",
        "codePoint": "U+22C5",
        "name": "dot operator",
        "entities": "&sdot;",
        "code": "=.",
        "keywords": [
            "small dot"
        ]
    },
    "∙": {
        "i": "54",
        "codePoint": "U+2219",
        "name": "bullet operator",
        "entities": "",
        "code": "=.b",
        "keywords": [
            ""
        ]
    },
    "∘": {
        "i": "55",
        "codePoint": "U+2218",
        "name": "ring operator",
        "entities": "&compfn;, &SmallCircle;",
        "code": "=.f",
        "keywords": [
            "composition function",
            "small circle"
        ]
    },
    "°": {
        "i": "56",
        "codePoint": "U+00B0",
        "name": "degree sign",
        "entities": "&deg;",
        "code": "=o",
        "keywords": [
            ""
        ]
    },
    "∞": {
        "i": "57",
        "codePoint": "U+221E",
        "name": "infinity",
        "entities": "&infin;",
        "code": "=8",
        "keywords": [
            ""
        ]
    },
    "√": {
        "i": "58",
        "codePoint": "U+221A",
        "name": "square root",
        "entities": "&radic;, &Sqrt;",
        "code": "=v",
        "keywords": [
            "radical sign"
        ]
    },
    "∀": {
        "i": "59",
        "codePoint": "U+2200",
        "name": "for all",
        "entities": "&forall;, &ForAll;",
        "code": "=A",
        "keywords": [
            ""
        ]
    },
    "∃": {
        "i": "60",
        "codePoint": "U+2203",
        "name": "there exists",
        "entities": "&exist;, &Exists;",
        "code": "=E",
        "keywords": [
            ""
        ]
    },
    "∄": {
        "i": "61",
        "codePoint": "U+2204",
        "name": "there does not exist",
        "entities": "&nexist;, &NotExists;, &nexists;",
        "code": "=!E",
        "keywords": [
            ""
        ]
    },
    "∅": {
        "i": "62",
        "codePoint": "U+2205",
        "name": "empty set",
        "entities": "&empty;, &emptyset;, &emptyv;, &varnothing;",
        "code": "=0",
        "keywords": [
            "null set",
            "empty variable",
            "variable nothing"
        ]
    },
    "∂": {
        "i": "63",
        "codePoint": "U+2202",
        "name": "partial differential",
        "entities": "&part;, &PartialD;",
        "code": "=d",
        "keywords": [
            ""
        ]
    },
    "∈": {
        "i": "64",
        "codePoint": "U+2208",
        "name": "element of",
        "entities": "&isin;, &isinv;, &Element;, &in;",
        "code": "=in",
        "keywords": [
            "in set"
        ]
    },
    "∉": {
        "i": "65",
        "codePoint": "U+2209",
        "name": "not an element of",
        "entities": "&notin;, &NotElement;, &notinva;",
        "code": "=!in",
        "keywords": [
            "not in set"
        ]
    },
    "∋": {
        "i": "66",
        "codePoint": "U+220B",
        "name": "contains as member",
        "entities": "&niv;, &ReverseElement;, &ni;, &SuchThat;",
        "code": "=ni",
        "keywords": [
            "reversed element",
            "reversed in set",
            "such that"
        ]
    },
    "∌": {
        "i": "67",
        "codePoint": "U+220C",
        "name": "does not contain as member",
        "entities": "&notni;, &notniva;, &NotReverseElement;",
        "code": "=!ni",
        "keywords": [
            "not reversed element",
            "not reversed in set"
        ]
    },
    "∏": {
        "i": "68",
        "codePoint": "U+220F",
        "name": "n-ary product",
        "entities": "&prod;, &Product;",
        "code": "=P",
        "keywords": [
            "product sign"
        ]
    },
    "∑": {
        "i": "69",
        "codePoint": "U+2211",
        "name": "n-ary summation",
        "entities": "&sum;, &Sum;",
        "code": "=S",
        "keywords": [
            "sum sign"
        ]
    },
    "∫": {
        "i": "70",
        "codePoint": "U+222B",
        "name": "integral",
        "entities": "&int;, &Integral;",
        "code": "=Si",
        "keywords": [
            "integral sign"
        ]
    },
    "∩": {
        "i": "71",
        "codePoint": "U+2229",
        "name": "intersection",
        "entities": "&cap;",
        "code": "=cap",
        "keywords": [
            "cap"
        ]
    },
    "∪": {
        "i": "72",
        "codePoint": "U+222A",
        "name": "union",
        "entities": "&cup;",
        "code": "=cup",
        "keywords": [
            "cup"
        ]
    },
    "∥": {
        "i": "73",
        "codePoint": "U+2225",
        "name": "parallel to",
        "entities": "&par;, &parallel;, &DoubleVerticalBar;, &spar;, &shortparallel;",
        "code": "=||",
        "keywords": [
            "double vertical bar"
        ]
    },
    "⊥": {
        "i": "74",
        "codePoint": "U+22A5",
        "name": "up tack",
        "entities": "&bottom;, &bot;, &perp;, &UpTee;",
        "code": "=T",
        "keywords": [
            "orthogonal to",
            "perpendicular",
            "bottom tack",
            "up tee"
        ]
    },
    "≡": {
        "i": "75",
        "codePoint": "U+2261",
        "name": "identical to",
        "entities": "&equiv;, &Congruent;",
        "code": "===",
        "keywords": [
            "equivalent",
            "congruent"
        ]
    },
    "≢": {
        "i": "76",
        "codePoint": "U+2262",
        "name": "not identical to",
        "entities": "&nequiv;, &NotCongruent;",
        "code": "=!==",
        "keywords": [
            "not equivalent",
            "not congruent"
        ]
    },
    "≠": {
        "i": "77",
        "codePoint": "U+2260",
        "name": "not equal to",
        "entities": "&ne;, &NotEqual;",
        "code": "=!=",
        "keywords": [
            "different from"
        ]
    },
    "≈": {
        "i": "78",
        "codePoint": "U+2248",
        "name": "almost equal to",
        "entities": "&asymp;, &ap;, &TildeTilde;, &approx;, &thkap;, &thickapprox;",
        "code": "=~",
        "keywords": [
            "approximate"
        ]
    },
    "≅": {
        "i": "79",
        "codePoint": "U+2245",
        "name": "approximately equal to",
        "entities": "&cong;, &TildeFullEqual;",
        "code": "=~=",
        "keywords": [
            "congruent to"
        ]
    },
    "≆": {
        "i": "80",
        "codePoint": "U+2246",
        "name": "approximately but not actually equal to",
        "entities": "&simne;",
        "code": "=~!=",
        "keywords": [
            "similar but not equal to"
        ]
    },
    "≇": {
        "i": "81",
        "codePoint": "U+2247",
        "name": "neither approximately nor actually equal to",
        "entities": "&ncong;, &NotTildeFullEqual;",
        "code": "=!~=",
        "keywords": [
            "not congruent to"
        ]
    },
    "≏": {
        "i": "82",
        "codePoint": "U+224F",
        "name": "difference between",
        "entities": "&bumpe;, &HumpEqual;, &bumpeq;",
        "code": "=b=",
        "keywords": [
            "hump equals"
        ]
    },
    "≏̸": {
        "i": "83",
        "codePoint": "U+224F+0338",
        "name": "not difference between",
        "entities": "&nbumpe;, &NotHumpEqual;, &bumpe;&#x338;, &HumpEqual;&#x338;, &bumpeq;&#x338;",
        "code": "=!b=",
        "keywords": [
            "not hump equals"
        ]
    },
    "≟": {
        "i": "84",
        "codePoint": "U+225F",
        "name": "questioned equal to",
        "entities": "&equest;, &questeq;",
        "code": "=?=",
        "keywords": [
            "test equals"
        ]
    },
    "≤": {
        "i": "85",
        "codePoint": "U+2264",
        "name": "less-than or equal to",
        "entities": "&le;, &leq;",
        "code": "=<=",
        "keywords": [
            ""
        ]
    },
    "≥": {
        "i": "86",
        "codePoint": "U+2265",
        "name": "greater-than or equal to",
        "entities": "&ge;, &GreaterEqual;, &geq;",
        "code": "=>=",
        "keywords": [
            ""
        ]
    },
    "≪": {
        "i": "87",
        "codePoint": "U+226A",
        "name": "much less-than",
        "entities": "&Lt;, &NestedLessLess;, &ll;",
        "code": "=<<",
        "keywords": [
            ""
        ]
    },
    "≫": {
        "i": "88",
        "codePoint": "U+226B",
        "name": "much greater-than",
        "entities": "&Gt;, &NestedGreaterGreater;, &gg;",
        "code": "=>>",
        "keywords": [
            ""
        ]
    },
    "⇔": {
        "i": "90",
        "codePoint": "U+21D4",
        "name": "left right double arrow",
        "entities": "&hArr;, &Leftrightarrow;, &DoubleLeftRightArrow;, &iff;",
        "code": "/=\\",
        "keywords": [
            "iff",
            "if and only if"
        ]
    },
    "⇒": {
        "i": "91",
        "codePoint": "U+21D2",
        "name": "rightwards double arrow",
        "entities": "&rArr;, &Rightarrow;, &Implies;, &DoubleRightArrow;",
        "code": "/=",
        "keywords": [
            "implies",
            "imply"
        ]
    },
    "⇐": {
        "i": "92",
        "codePoint": "U+21D0",
        "name": "leftwards double arrow",
        "entities": "&lArr;, &Leftarrow;, &DoubleLeftArrow;",
        "code": "\\=",
        "keywords": [
            ""
        ]
    },
    "⇑": {
        "i": "93",
        "codePoint": "U+21D1",
        "name": "upwards double arrow",
        "entities": "&uArr;, &Uparrow;, &DoubleUpArrow;",
        "code": "/||",
        "keywords": [
            ""
        ]
    },
    "⇓": {
        "i": "94",
        "codePoint": "U+21D3",
        "name": "downwards double arrow",
        "entities": "&dArr;, &Downarrow;, &DoubleDownArrow;",
        "code": "\\||",
        "keywords": [
            ""
        ]
    },
    "⇏": {
        "i": "95",
        "codePoint": "U+21CF",
        "name": "rightwards double arrow with stroke",
        "entities": "&nrArr;, &nRightarrow;",
        "code": "/!=",
        "keywords": [
            "not implies",
            "not imply"
        ]
    },
    "⇍": {
        "i": "96",
        "codePoint": "U+21CD",
        "name": "leftwards double arrow with stroke",
        "entities": "&nlArr;, &nLeftarrow;",
        "code": "\\!=",
        "keywords": [
            ""
        ]
    },
    "⇌": {
        "i": "97",
        "codePoint": "U+21CC",
        "name": "rightwards harpoon over leftwards harpoon",
        "entities": "&rlhar;, &rightleftharpoons;, &Equilibrium;",
        "code": "/_\\_",
        "keywords": [
            "equilibrium"
        ]
    },
    "⇋": {
        "i": "98",
        "codePoint": "U+21CB",
        "name": "leftwards harpoon over rightwards harpoon",
        "entities": "&lrhar;, &ReverseEquilibrium;, &leftrightharpoons;",
        "code": "\\_/_",
        "keywords": [
            "reverse equilibrium"
        ]
    },
    "⇄": {
        "i": "99",
        "codePoint": "U+21C4",
        "name": "rightwards arrow over leftwards arrow",
        "entities": "&rlarr;, &rightleftarrows;, &RightArrowLeftArrow;",
        "code": "/-\\-",
        "keywords": [
            ""
        ]
    },
    "⇆": {
        "i": "100",
        "codePoint": "U+21C6",
        "name": "leftwards arrow over rightwards arrow",
        "entities": "&lrarr;, &leftrightarrows;, &LeftArrowRightArrow;",
        "code": "\\-/-",
        "keywords": [
            ""
        ]
    },
    "⇀": {
        "i": "101",
        "codePoint": "U+21C0",
        "name": "rightwards harpoon with barb upwards",
        "entities": "&rharu;, &RightVector;, &rightharpoonup;",
        "code": "/_",
        "keywords": [
            "right vector"
        ]
    },
    "⇁": {
        "i": "102",
        "codePoint": "U+21C1",
        "name": "rightwards harpoon with barb downwards",
        "entities": "&rhard;, &rightharpoondown;, &DownRightVector;",
        "code": "",
        "keywords": [
            "down right vector"
        ]
    },
    "↼": {
        "i": "103",
        "codePoint": "U+21BC",
        "name": "leftwards harpoon with barb upwards",
        "entities": "&lharu;, &LeftVector;, &leftharpoonup;",
        "code": "",
        "keywords": [
            "left vector"
        ]
    },
    "↽": {
        "i": "104",
        "codePoint": "U+21BD",
        "name": "leftwards harpoon with barb downwards",
        "entities": "&lhard;, &leftharpoondown;, &DownLeftVector;",
        "code": "\\_",
        "keywords": [
            "down left vector"
        ]
    },
    "↾": {
        "i": "105",
        "codePoint": "U+21BE",
        "name": "upwards harpoon with barb rightwards",
        "entities": "&uharr;, &upharpoonright;, &RightUpVector;",
        "code": "",
        "keywords": [
            "right up vector"
        ]
    },
    "↿": {
        "i": "106",
        "codePoint": "U+21BF",
        "name": "upwards harpoon with barb leftwards",
        "entities": "&uharl;, &upharpoonleft;, &LeftUpVector;",
        "code": "",
        "keywords": [
            "left up vector"
        ]
    },
    "⇂": {
        "i": "107",
        "codePoint": "U+21C2",
        "name": "downwards harpoon with barb rightwards",
        "entities": "&dharr;, &RightDownVector;, &downharpoonright;",
        "code": "",
        "keywords": [
            "right down vector"
        ]
    },
    "⇃": {
        "i": "108",
        "codePoint": "U+21C3",
        "name": "downwards harpoon with barb leftwards",
        "entities": "&dharl;, &LeftDownVector;, &downharpoonleft;",
        "code": "",
        "keywords": [
            "left down vector"
        ]
    },
    "↔": {
        "i": "109",
        "codePoint": "U+2194",
        "name": "left right arrow",
        "entities": "&harr;, &leftrightarrow;, &LeftRightArrow;, ",
        "code": "/-\\",
        "keywords": [
            "horizontal double-headed arrow"
        ]
    },
    "→": {
        "i": "110",
        "codePoint": "U+2192",
        "name": "rightwards arrow",
        "entities": "&rarr;, &rightarrow;, &RightArrow;, &srarr;, &ShortRightArrow;, ",
        "code": "/-",
        "keywords": [
            ""
        ]
    },
    "←": {
        "i": "111",
        "codePoint": "U+2190",
        "name": "leftwards arrow",
        "entities": "&larr;, &leftarrow;, &LeftArrow;, &slarr;, &ShortLeftArrow;, ",
        "code": "\\-",
        "keywords": [
            ""
        ]
    },
    "↕": {
        "i": "112",
        "codePoint": "U+2195",
        "name": "up down arrow",
        "entities": "&varr;, &updownarrow;, &UpDownArrow;, ",
        "code": "/|\\",
        "keywords": [
            "vertical double-headed arrow"
        ]
    },
    "↑": {
        "i": "113",
        "codePoint": "U+2191",
        "name": "upwards arrow",
        "entities": "&uarr;, &uparrow;, &UpArrow;, &ShortUpArrow;, ",
        "code": "/|",
        "keywords": [
            ""
        ]
    },
    "↓": {
        "i": "114",
        "codePoint": "U+2193",
        "name": "downwards arrow",
        "entities": "&darr;, &downarrow;, &DownArrow;, &ShortDownArrow;, ",
        "code": "\\|",
        "keywords": [
            ""
        ]
    },
    "⇿": {
        "i": "115",
        "codePoint": "U+21FF",
        "name": "left right open-headed arrow",
        "entities": "&hoarr;",
        "code": "",
        "keywords": [
            "horizontal open-headed arrow"
        ]
    },
    "⇾": {
        "i": "116",
        "codePoint": "U+21FE",
        "name": "rightwards open-headed arrow",
        "entities": "&roarr;",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⇽": {
        "i": "117",
        "codePoint": "U+21FD",
        "name": "leftwards open-headed arrow",
        "entities": "&loarr;",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "↣": {
        "i": "118",
        "codePoint": "U+21A3",
        "name": "rightwards arrow with tail",
        "entities": "&rarrtl;, &rightarrowtail;, ",
        "code": "/-/",
        "keywords": [
            ""
        ]
    },
    "↢": {
        "i": "119",
        "codePoint": "U+21A2",
        "name": "leftwards arrow with tail",
        "entities": "&larrtl;, &leftarrowtail;",
        "code": "\\-\\",
        "keywords": [
            ""
        ]
    },
    "⤚": {
        "i": "120",
        "codePoint": "U+291A",
        "name": "rightwards arrow-tail",
        "entities": "&ratail;",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⤙": {
        "i": "121",
        "codePoint": "U+2919",
        "name": "leftwards arrow-tail",
        "entities": "&latail;",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "↦": {
        "i": "122",
        "codePoint": "U+21A6",
        "name": "rightwards arrow from bar",
        "entities": "&map;, &RightTeeArrow;, &mapsto;, ",
        "code": "/T",
        "keywords": [
            "maps to",
            "right tee arrow"
        ]
    },
    "↤": {
        "i": "123",
        "codePoint": "U+21A4",
        "name": "leftwards arrow from bar",
        "entities": "&LeftTeeArrow;, &mapstoleft;, ",
        "code": "\\T",
        "keywords": [
            "maps to leftward",
            "left tee arrow"
        ]
    },
    "↥": {
        "i": "124",
        "codePoint": "U+21A5",
        "name": "upwards arrow from bar",
        "entities": "&UpTeeArrow;, &mapstoup;, ",
        "code": "/|T",
        "keywords": [
            "maps to upward",
            "up tee arrow"
        ]
    },
    "↧": {
        "i": "125",
        "codePoint": "U+21A7",
        "name": "downwards arrow from bar",
        "entities": "&DownTeeArrow;, &mapstodown;",
        "code": "\\|T",
        "keywords": [
            "maps to downward",
            "down tee arrow"
        ]
    },
    "⟷": {
        "i": "126",
        "codePoint": "U+27F7",
        "name": "long left right arrow",
        "entities": "&xharr;, &longleftrightarrow;, &LongLeftRightArrow;",
        "code": "/--\\",
        "keywords": [
            "long double-headed arrow"
        ]
    },
    "⟶": {
        "i": "127",
        "codePoint": "U+27F6",
        "name": "long rightwards arrow",
        "entities": "&xrarr;, &longrightarrow;, &LongRightArrow;",
        "code": "/--",
        "keywords": [
            ""
        ]
    },
    "⟵": {
        "i": "128",
        "codePoint": "U+27F5",
        "name": "long leftwards arrow",
        "entities": "&xlarr;, &longleftarrow;, &LongLeftArrow;",
        "code": "\\--",
        "keywords": [
            ""
        ]
    },
    "⟺": {
        "i": "129",
        "codePoint": "U+27FA",
        "name": "long left right double arrow",
        "entities": "&xhArr;, &Longleftrightarrow;, &DoubleLongLeftRightArrow;",
        "code": "/==\\",
        "keywords": [
            "long double-headed double arrow"
        ]
    },
    "⟹": {
        "i": "130",
        "codePoint": "U+27F9",
        "name": "long rightwards double arrow",
        "entities": "&xrArr;, &Longrightarrow;, &DoubleLongRightArrow;",
        "code": "/==",
        "keywords": [
            ""
        ]
    },
    "⟸": {
        "i": "131",
        "codePoint": "U+27F8",
        "name": "long leftwards double arrow",
        "entities": "&xlArr;, &Longleftarrow;, &DoubleLongLeftArrow;",
        "code": "\\==",
        "keywords": [
            ""
        ]
    },
    "⬌": {
        "i": "132",
        "codePoint": "U+2B0C",
        "name": "left right black arrow",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⮕": {
        "i": "133",
        "codePoint": "U+2B95",
        "name": "rightwards black arrow",
        "entities": "",
        "code": "",
        "keywords": [
            "rightwards thick arrow"
        ]
    },
    "⬅": {
        "i": "134",
        "codePoint": "U+2B05",
        "name": "leftwards black arrow",
        "entities": "",
        "code": "",
        "keywords": [
            "leftwards thick arrow"
        ]
    },
    "⬍": {
        "i": "135",
        "codePoint": "U+2B0D",
        "name": "up down black arrow",
        "entities": "",
        "code": "",
        "keywords": [
            "up down thick arrow"
        ]
    },
    "⬆": {
        "i": "136",
        "codePoint": "U+2B06",
        "name": "upwards black arrow",
        "entities": "",
        "code": "",
        "keywords": [
            "upwards thick arrow"
        ]
    },
    "⬇": {
        "i": "137",
        "codePoint": "U+2B07",
        "name": "downwards black arrow",
        "entities": "",
        "code": "",
        "keywords": [
            "downwards thick arrow"
        ]
    },
    "➡": {
        "i": "138",
        "codePoint": "U+27A1",
        "name": "black rightwards arrow",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "➳": {
        "i": "139",
        "codePoint": "U+27B3",
        "name": "white-feathered rightwards arrow",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "➻": {
        "i": "140",
        "codePoint": "U+27BB",
        "name": "heavy teardrop-shanked rightwards arrow",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "↷": {
        "i": "141",
        "codePoint": "U+21B7",
        "name": "clockwise top semicircle arrow",
        "entities": "&curarr;, &curvearrowright;, ",
        "code": "",
        "keywords": [
            "curve arrow right"
        ]
    },
    "↶": {
        "i": "142",
        "codePoint": "U+21B6",
        "name": "anticlockwise top semicircle arrow",
        "entities": "&cularr;, &curvearrowleft;, ",
        "code": "",
        "keywords": [
            "curve arrow left"
        ]
    },
    "↻": {
        "i": "143",
        "codePoint": "U+21BB",
        "name": "clockwise open circle arrow",
        "entities": "&orarr;, &circlearrowright;, ",
        "code": "",
        "keywords": [
            "circle arrow right",
            "open right arrow"
        ]
    },
    "↺": {
        "i": "144",
        "codePoint": "U+21BA",
        "name": "anticlockwise open circle arrow",
        "entities": "&olarr;, &circlearrowleft;",
        "code": "",
        "keywords": [
            "circle arrow left",
            "open left arrow"
        ]
    },
    "⤾": {
        "i": "145",
        "codePoint": "U+293E",
        "name": "lower right semicircular clockwise arrow",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⤿": {
        "i": "146",
        "codePoint": "U+293F",
        "name": "lower left semicircular anticlockwise arrow",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⟳": {
        "i": "147",
        "codePoint": "U+27F3",
        "name": "clockwise gapped circle arrow",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⟲": {
        "i": "148",
        "codePoint": "U+27F2",
        "name": "anticlockwise gapped circle arrow",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⥁": {
        "i": "150",
        "codePoint": "U+2941",
        "name": "clockwise closed circle arrow",
        "entities": "",
        "code": ".o/",
        "keywords": [
            "clockwise circle"
        ]
    },
    "⥀": {
        "i": "151",
        "codePoint": "U+2940",
        "name": "anticlockwise closed circle arrow",
        "entities": "",
        "code": ".o\\",
        "keywords": [
            "anticlockwise circle"
        ]
    },
    "◯": {
        "i": "152",
        "codePoint": "U+25EF",
        "name": "large circle",
        "entities": "&xcirc;, &bigcirc;",
        "code": ".O",
        "keywords": [
            "big circle"
        ]
    },
    "○": {
        "i": "153",
        "codePoint": "U+25CB",
        "name": "white circle",
        "entities": "&cir;",
        "code": ".o",
        "keywords": [
            "empty circle"
        ]
    },
    "●": {
        "i": "154",
        "codePoint": "U+25CF",
        "name": "black circle",
        "entities": "",
        "code": ".o*",
        "keywords": [
            "filled circle"
        ]
    },
    "⦾": {
        "i": "155",
        "codePoint": "U+29BE",
        "name": "circled white bullet",
        "entities": "&olcir;",
        "code": ".oO",
        "keywords": [
            "circled light circle",
            "double circle"
        ]
    },
    "⊚": {
        "i": "156",
        "codePoint": "U+229A",
        "name": "circled ring operator",
        "entities": "&ocir;, &circledcirc;",
        "code": "=oo",
        "keywords": [
            "double circle operator"
        ]
    },
    "◎": {
        "i": "157",
        "codePoint": "U+25CE",
        "name": "bullseye",
        "entities": "",
        "code": ".oo",
        "keywords": [
            "small double circle"
        ]
    },
    "◉": {
        "i": "158",
        "codePoint": "U+25C9",
        "name": "fisheye",
        "entities": "",
        "code": ".O*",
        "keywords": [
            "small circled bullet"
        ]
    },
    "⦿": {
        "i": "159",
        "codePoint": "U+29BF",
        "name": "circled bullet",
        "entities": "&ofcir;",
        "code": ".o+",
        "keywords": [
            ""
        ]
    },
    "☉": {
        "i": "160",
        "codePoint": "U+2609",
        "name": "Sun",
        "entities": "",
        "code": ".o.",
        "keywords": [
            "circled dot",
            "target circle"
        ]
    },
    "⊙": {
        "i": "161",
        "codePoint": "U+2299",
        "name": "circled dot operator",
        "entities": "&odot;, &CircleDot;",
        "code": "=o.",
        "keywords": [
            "target circle operator"
        ]
    },
    "•": {
        "i": "162",
        "codePoint": "U+2022",
        "name": "bullet",
        "entities": "&bull;, &bullet;",
        "code": ".*",
        "keywords": [
            "black small circle"
        ]
    },
    "◦": {
        "i": "163",
        "codePoint": "U+25E6",
        "name": "white bullet",
        "entities": "",
        "code": ".+",
        "keywords": [
            "hollow bullet"
        ]
    },
    "⚬": {
        "i": "164",
        "codePoint": "U+26AC",
        "name": "medium small white circle",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⬤": {
        "i": "165",
        "codePoint": "U+2B24",
        "name": "black large circle",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⬭": {
        "i": "166",
        "codePoint": "U+2B2D",
        "name": "white horizontal ellipse",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⬯": {
        "i": "167",
        "codePoint": "U+2B2F",
        "name": "white vertical ellipse",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⬬": {
        "i": "168",
        "codePoint": "U+2B2C",
        "name": "black horizontal ellipse",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⬮": {
        "i": "169",
        "codePoint": "U+2B2E",
        "name": "black vertical ellipse",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⌀": {
        "i": "170",
        "codePoint": "U+2300",
        "name": "diameter sign",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "ø": {
        "i": "171",
        "codePoint": "U+00F8",
        "name": "Latin small letter o with stroke",
        "entities": "&oslash;",
        "code": "",
        "keywords": [
            "Latin small letter o slash"
        ]
    },
    "Ø": {
        "i": "172",
        "codePoint": "U+00D8",
        "name": "Latin capital letter O with stroke",
        "entities": "&Oslash;",
        "code": "",
        "keywords": [
            "Latin capital letter O slash"
        ]
    },
    "φ": {
        "i": "173",
        "codePoint": "U+03C6",
        "name": "Greek small letter phi",
        "entities": "&phi;",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "Φ": {
        "i": "174",
        "codePoint": "U+03A6",
        "name": "Greek capital letter Phi",
        "entities": "&Phi;",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "ϕ": {
        "i": "175",
        "codePoint": "U+03D5",
        "name": "Greek phi symbol",
        "entities": "&phiv;, &straightphi;, &varphi;",
        "code": "",
        "keywords": [
            "straight phi",
            "variant phi"
        ]
    },
    "©": {
        "i": "176",
        "codePoint": "U+00A9",
        "name": "copyright sign",
        "entities": "&copy;, &COPY;",
        "code": ".(C)",
        "keywords": [
            ""
        ]
    },
    "🄯": {
        "i": "177",
        "codePoint": "U+1F12F",
        "name": "copyleft symbol",
        "entities": "",
        "code": ".(CL)",
        "keywords": [
            ""
        ]
    },
    "®": {
        "i": "178",
        "codePoint": "U+00AE",
        "name": "registered sign",
        "entities": "&reg;, &circledR;, &REG;",
        "code": ".(R)",
        "keywords": [
            "registered trademark symbol"
        ]
    },
    "℗": {
        "i": "179",
        "codePoint": "U+2117",
        "name": "sound recording copyright",
        "entities": "&copysr;",
        "code": ".(P)",
        "keywords": [
            "phonogram copyright symbol"
        ]
    },
    "🙂": {
        "i": "181",
        "codePoint": "U+1F642",
        "name": "slightly smiling face",
        "entities": "",
        "code": ":-)",
        "keywords": [
            "smile"
        ]
    },
    "😊": {
        "i": "182",
        "codePoint": "U+1F60A",
        "name": "smiling face with smiling eyes",
        "entities": "",
        "code": ":)",
        "keywords": [
            "flushed",
            "crush",
            "embarrassed"
        ]
    },
    "☺️": {
        "i": "183",
        "codePoint": "U+263A+FE0F",
        "name": "smiling face",
        "entities": "",
        "code": ":-}",
        "keywords": [
            "blush",
            "massage",
            "happiness"
        ]
    },
    "😉": {
        "i": "184",
        "codePoint": "U+1F609",
        "name": "winking face",
        "entities": "",
        "code": ";)",
        "keywords": [
            "mischievous",
            "secret"
        ]
    },
    "😀": {
        "i": "185",
        "codePoint": "U+1F600",
        "name": "grinning face",
        "entities": "",
        "code": ":-))",
        "keywords": [
            "grin"
        ]
    },
    "😃": {
        "i": "186",
        "codePoint": "U+1F603",
        "name": "smiling face with open mouth",
        "entities": "",
        "code": ":-D",
        "keywords": [
            "grinning face with big eyes",
            "happy",
            "haha"
        ]
    },
    "😄": {
        "i": "187",
        "codePoint": "U+1F604",
        "name": "smiling face with open mouth and smiling eyes",
        "entities": "",
        "code": ":))",
        "keywords": [
            "grinning face with smiling eyes",
            "joy",
            "funny"
        ]
    },
    "😁": {
        "i": "188",
        "codePoint": "U+1F601",
        "name": "grinning face with smiling eyes",
        "entities": "",
        "code": ":D",
        "keywords": [
            "beaming face with smiling eyes",
            "kawaii"
        ]
    },
    "😆": {
        "i": "189",
        "codePoint": "U+1F606",
        "name": "smiling face with open mouth and tightly-closed eyes",
        "entities": "",
        "code": ":XD",
        "keywords": [
            "grinning squinting face",
            "lol",
            "satisfied",
            "glad"
        ]
    },
    "😅": {
        "i": "190",
        "codePoint": "U+1F605",
        "name": "smiling face with open mouth and cold sweat",
        "entities": "",
        "code": ":’D",
        "keywords": [
            "grinning face with sweat",
            "hot",
            "laugh",
            "relief"
        ]
    },
    "🤣": {
        "i": "191",
        "codePoint": "U+1F923",
        "name": "rolling on the floor laughing",
        "entities": "",
        "code": ":’XD",
        "keywords": [
            "rolling",
            "floor",
            "laughing",
            "rofl"
        ]
    },
    "😂": {
        "i": "192",
        "codePoint": "U+1F602",
        "name": "face with tears of joy",
        "entities": "",
        "code": ":”D",
        "keywords": [
            "cry",
            "weep",
            "happytears"
        ]
    },
    "😗": {
        "i": "193",
        "codePoint": "U+1F617",
        "name": "kissing face",
        "entities": "",
        "code": ":-*",
        "keywords": [
            ""
        ]
    },
    "😚": {
        "i": "194",
        "codePoint": "U+1F61A",
        "name": "kissing face with closed eyes",
        "entities": "",
        "code": ":*",
        "keywords": [
            "infatuation"
        ]
    },
    "😙": {
        "i": "195",
        "codePoint": "U+1F619",
        "name": "kissing face with smiling eyes",
        "entities": "",
        "code": ":^*",
        "keywords": [
            ""
        ]
    },
    "😘": {
        "i": "196",
        "codePoint": "U+1F618",
        "name": "face throwing a kiss",
        "entities": "",
        "code": ":*3",
        "keywords": [
            "face blowing a kiss",
            "valentines"
        ]
    },
    "🥰": {
        "i": "197",
        "codePoint": "U+1F970",
        "name": "smiling face with smiling eyes and three hearts",
        "entities": "",
        "code": ":)3",
        "keywords": [
            "smiling face with hearts",
            "love",
            "hearts",
            "adore"
        ]
    },
    "😍": {
        "i": "198",
        "codePoint": "U+1F60D",
        "name": "smiling face with heart-shaped eyes",
        "entities": "",
        "code": ":o3",
        "keywords": [
            "smiling face with heart-eyes",
            "affection"
        ]
    },
    "🙃": {
        "i": "199",
        "codePoint": "U+1F643",
        "name": "upside-down face",
        "entities": "",
        "code": ":(-:",
        "keywords": [
            "flipped"
        ]
    },
    "😟": {
        "i": "200",
        "codePoint": "U+1F61F",
        "name": "worried face",
        "entities": "",
        "code": ":^(",
        "keywords": [
            "concern"
        ]
    },
    "🙁": {
        "i": "201",
        "codePoint": "U+1F641",
        "name": "slightly frowning face",
        "entities": "",
        "code": ":(",
        "keywords": [
            "frowning"
        ]
    },
    "☹️": {
        "i": "202",
        "codePoint": "U+2639+FE0F",
        "name": "frowning face",
        "entities": "",
        "code": ":-(",
        "keywords": [
            "upset",
            "frown"
        ]
    },
    "😮": {
        "i": "203",
        "codePoint": "U+1F62E",
        "name": "face with open mouth",
        "entities": "",
        "code": ":O",
        "keywords": [
            "surprise",
            "impressed",
            "wow",
            "whoa"
        ]
    },
    "😯": {
        "i": "204",
        "codePoint": "U+1F62F",
        "name": "hushed face",
        "entities": "",
        "code": ":o",
        "keywords": [
            "woo",
            "shh"
        ]
    },
    "😲": {
        "i": "205",
        "codePoint": "U+1F632",
        "name": "astonished face",
        "entities": "",
        "code": ":0",
        "keywords": [
            "xox",
            "surprised",
            "poisoned"
        ]
    },
    "😦": {
        "i": "206",
        "codePoint": "U+1F626",
        "name": "frowning face with open mouth",
        "entities": "",
        "code": ":-(o",
        "keywords": [
            "aw",
            "what"
        ]
    },
    "😧": {
        "i": "207",
        "codePoint": "U+1F627",
        "name": "anguished face",
        "entities": "",
        "code": ":(o",
        "keywords": [
            "stunned"
        ]
    },
    "😋": {
        "i": "208",
        "codePoint": "U+1F60B",
        "name": "face savouring delicious food",
        "entities": "",
        "code": ":)p",
        "keywords": [
            "face savoring food",
            "yummy",
            "nom",
            "delicious",
            "savouring"
        ]
    },
    "😛": {
        "i": "209",
        "codePoint": "U+1F61B",
        "name": "face with stuck-out tongue",
        "entities": "",
        "code": ":p",
        "keywords": [
            "face with tongue",
            "prank"
        ]
    },
    "😜": {
        "i": "210",
        "codePoint": "U+1F61C",
        "name": "face with stuck-out tongue and winking eye",
        "entities": "",
        "code": ";p",
        "keywords": [
            "winking face with tongue",
            "childish",
            "wink"
        ]
    },
    "🤪": {
        "i": "211",
        "codePoint": "U+1F92A",
        "name": "grinning face with one large and one small eye",
        "entities": "",
        "code": ":/p",
        "keywords": [
            "zany face",
            "goofy",
            "crazy"
        ]
    },
    "😝": {
        "i": "212",
        "codePoint": "U+1F61D",
        "name": "face with stuck-out tongue and tightly-closed eyes",
        "entities": "",
        "code": ":xp",
        "keywords": [
            "squinting face with tongue",
            "playful"
        ]
    },
    "🤑": {
        "i": "213",
        "codePoint": "U+1F911",
        "name": "money-mouth face",
        "entities": "",
        "code": ":p$",
        "keywords": [
            "rich"
        ]
    },
    "😐": {
        "i": "214",
        "codePoint": "U+1F610",
        "name": "neutral face",
        "entities": "",
        "code": ":-|",
        "keywords": [
            "indifference",
            "meh",
            "neutral"
        ]
    },
    "😑": {
        "i": "215",
        "codePoint": "U+1F611",
        "name": "expressionless face",
        "entities": "",
        "code": ":|",
        "keywords": [
            "indifferent",
            "deadpan"
        ]
    },
    "😶": {
        "i": "216",
        "codePoint": "U+1F636",
        "name": "face without mouth",
        "entities": "",
        "code": ":",
        "keywords": [
            ""
        ]
    },
    "😕": {
        "i": "217",
        "codePoint": "U+1F615",
        "name": "confused face",
        "entities": "",
        "code": ":(/",
        "keywords": [
            "huh",
            "weird"
        ]
    },
    "🫤": {
        "i": "218",
        "codePoint": "U+1FAE4",
        "name": "face with diagonal mouth",
        "entities": "",
        "code": ":/",
        "keywords": [
            "skeptic",
            "confuse"
        ]
    },
    "😥": {
        "i": "219",
        "codePoint": "U+1F625",
        "name": "disappointed but relieved face",
        "entities": "",
        "code": ":,(",
        "keywords": [
            "sad but relieved face",
            "phew"
        ]
    },
    "😢": {
        "i": "220",
        "codePoint": "U+1F622",
        "name": "crying face",
        "entities": "",
        "code": ":’(",
        "keywords": [
            "tears"
        ]
    },
    "😭": {
        "i": "221",
        "codePoint": "U+1F62D",
        "name": "loudly crying face",
        "entities": "",
        "code": ":”(",
        "keywords": [
            "sobbing"
        ]
    },
    "🤐": {
        "i": "222",
        "codePoint": "U+1F910",
        "name": "zipper-mouth face",
        "entities": "",
        "code": ":#",
        "keywords": [
            "sealed",
            "zipper"
        ]
    },
    "🤫": {
        "i": "223",
        "codePoint": "U+1F92B",
        "name": "face with finger covering closed lips",
        "entities": "",
        "code": ":!",
        "keywords": [
            "shushing face",
            "quiet",
            "shhh"
        ]
    },
    "🤔": {
        "i": "224",
        "codePoint": "U+1F914",
        "name": "thinking face",
        "entities": "",
        "code": ":?",
        "keywords": [
            "hmmm",
            "think",
            "consider"
        ]
    },
    "🫡": {
        "i": "225",
        "codePoint": "U+1FAE1",
        "name": "saluting face",
        "entities": "",
        "code": ":!!",
        "keywords": [
            "respect",
            "salute"
        ]
    },
    "😎": {
        "i": "226",
        "codePoint": "U+1F60E",
        "name": "smiling face with sunglasses",
        "entities": "",
        "code": ":B)",
        "keywords": [
            "cool",
            "summer",
            "beach",
            "sunglass"
        ]
    },
    "🤓": {
        "i": "227",
        "codePoint": "U+1F913",
        "name": "nerd face",
        "entities": "",
        "code": ":B.)",
        "keywords": [
            "nerdy",
            "geek",
            "dork"
        ]
    },
    "🧐": {
        "i": "228",
        "codePoint": "U+1F9D0",
        "name": "face with monocle",
        "entities": "",
        "code": ":%",
        "keywords": [
            "stuffy",
            "wealthy"
        ]
    },
    "😵": {
        "i": "229",
        "codePoint": "U+1F635",
        "name": "dizzy face",
        "entities": "",
        "code": ":xx",
        "keywords": [
            "face with crossed-out eyes",
            "spent",
            "unconscious"
        ]
    },
    "😵‍💫": {
        "i": "230",
        "codePoint": "U+1F635+200D+1F4AB",
        "name": "face with spiral eyes",
        "entities": "",
        "code": ":@@",
        "keywords": [
            "nauseous",
            "nausea"
        ]
    },
    "😡": {
        "i": "231",
        "codePoint": "U+1F621",
        "name": "pouting face",
        "entities": "",
        "code": ":>:[",
        "keywords": [
            "enraged face",
            "hate",
            "despise"
        ]
    },
    "😠": {
        "i": "232",
        "codePoint": "U+1F620",
        "name": "angry face",
        "entities": "",
        "code": ":>:(",
        "keywords": [
            "mad",
            "annoyed"
        ]
    },
    "❤️": {
        "i": "233",
        "codePoint": "U+2764+FE0F",
        "name": "red heart",
        "entities": "",
        "code": "..<3",
        "keywords": [
            ""
        ]
    },
    "👍": {
        "i": "234",
        "codePoint": "U+1F44D",
        "name": "thumbs up sign",
        "entities": "",
        "code": "..+^",
        "keywords": [
            "thumbs up",
            "thumbsup",
            "yes",
            "accept",
            "+1"
        ]
    },
    "👎": {
        "i": "235",
        "codePoint": "U+1F44E",
        "name": "thumbs down sign",
        "entities": "",
        "code": "..-v",
        "keywords": [
            "thumbs down",
            "thumbsdown",
            "dislike",
            "-1"
        ]
    },
    "⬆️": {
        "i": "236",
        "codePoint": "U+2B06+FE0F",
        "name": "up arrow",
        "entities": "",
        "code": "../|",
        "keywords": [
            "continue"
        ]
    },
    "➡️": {
        "i": "237",
        "codePoint": "U+27A1+FE0F",
        "name": "right arrow",
        "entities": "",
        "code": "../-",
        "keywords": [
            "next"
        ]
    },
    "⬇️": {
        "i": "238",
        "codePoint": "U+2B07+FE0F",
        "name": "down arrow",
        "entities": "",
        "code": "..\\|",
        "keywords": [
            "bottom"
        ]
    },
    "⬅️": {
        "i": "239",
        "codePoint": "U+2B05+FE0F",
        "name": "left arrow",
        "entities": "",
        "code": "..\\-",
        "keywords": [
            "previous"
        ]
    },
    "⭕": {
        "i": "240",
        "codePoint": "U+2B55",
        "name": "heavy large circle",
        "entities": "",
        "code": "..O",
        "keywords": [
            "hollow red circle"
        ]
    },
    "♾️": {
        "i": "241",
        "codePoint": "U+267E+FE0F",
        "name": "infinity",
        "entities": "",
        "code": "..8",
        "keywords": [
            "forever"
        ]
    },
    "☑️": {
        "i": "242",
        "codePoint": "U+2611+FE0F",
        "name": "check box with check",
        "entities": "",
        "code": "..v@",
        "keywords": [
            "ok",
            "confirm",
            "black-square"
        ]
    },
    "✔️": {
        "i": "243",
        "codePoint": "U+2714+FE0F",
        "name": "check mark",
        "entities": "",
        "code": "..v",
        "keywords": [
            "nike",
            "tick"
        ]
    },
    "❌": {
        "i": "244",
        "codePoint": "U+274C",
        "name": "cross mark",
        "entities": "",
        "code": "..x",
        "keywords": [
            "delete",
            "remove",
            "cancel"
        ]
    },
    "❎": {
        "i": "245",
        "codePoint": "U+274E",
        "name": "negative squared cross mark",
        "entities": "",
        "code": "..x@",
        "keywords": [
            "cross mark button",
            "deny"
        ]
    },
    "♎": {
        "i": "246",
        "codePoint": "U+264E",
        "name": "libra",
        "entities": "",
        "code": "..=b=",
        "keywords": [
            "Libra"
        ]
    },
    "🫠": {
        "i": "248",
        "codePoint": "U+1FAE0",
        "name": "melting face",
        "entities": "",
        "code": "",
        "keywords": [
            "heat"
        ]
    },
    "😇": {
        "i": "249",
        "codePoint": "U+1F607",
        "name": "smiling face with halo",
        "entities": "",
        "code": "",
        "keywords": [
            "angel",
            "halo",
            "innocent"
        ]
    },
    "🤩": {
        "i": "250",
        "codePoint": "U+1F929",
        "name": "grinning face with star eyes",
        "entities": "",
        "code": "",
        "keywords": [
            "star-struck",
            "starry",
            "grinning"
        ]
    },
    "🥲": {
        "i": "251",
        "codePoint": "U+1F972",
        "name": "smiling face with tear",
        "entities": "",
        "code": "",
        "keywords": [
            "pretend"
        ]
    },
    "🤗": {
        "i": "252",
        "codePoint": "U+1F917",
        "name": "hugging face",
        "entities": "",
        "code": "",
        "keywords": [
            "smiling face with open hands",
            "hug"
        ]
    },
    "🤭": {
        "i": "253",
        "codePoint": "U+1F92D",
        "name": "smiling face with smiling eyes and hand covering mouth",
        "entities": "",
        "code": "",
        "keywords": [
            "face with hand over mouth",
            "whoops",
            "shock"
        ]
    },
    "🫢": {
        "i": "254",
        "codePoint": "U+1FAE2",
        "name": "face with open eyes and hand over mouth",
        "entities": "",
        "code": "",
        "keywords": [
            "silence"
        ]
    },
    "🫣": {
        "i": "255",
        "codePoint": "U+1FAE3",
        "name": "face with peeking eye",
        "entities": "",
        "code": "",
        "keywords": [
            "frightening"
        ]
    },
    "🤨": {
        "i": "256",
        "codePoint": "U+1F928",
        "name": "face with one eyebrow raised",
        "entities": "",
        "code": "",
        "keywords": [
            "face with raised eyebrow",
            "distrust",
            "scepticism",
            "disapproval",
            "disbelief",
            "suspicious"
        ]
    },
    "🫥": {
        "i": "257",
        "codePoint": "U+1FAE5",
        "name": "dotted line face",
        "entities": "",
        "code": "",
        "keywords": [
            "invisible",
            "lonely",
            "isolation",
            "depression"
        ]
    },
    "😶‍🌫️": {
        "i": "258",
        "codePoint": "U+1F636+200D+1F32B+FE0F",
        "name": "face in clouds",
        "entities": "",
        "code": "",
        "keywords": [
            "steam",
            "dream"
        ]
    },
    "😏": {
        "i": "259",
        "codePoint": "U+1F60F",
        "name": "smirking face",
        "entities": "",
        "code": "",
        "keywords": [
            "mean",
            "smug",
            "sarcasm"
        ]
    },
    "😒": {
        "i": "260",
        "codePoint": "U+1F612",
        "name": "unamused face",
        "entities": "",
        "code": "",
        "keywords": [
            "bored",
            "straight face",
            "serious",
            "unimpressed",
            "skeptical",
            "dubious",
            "ugh"
        ]
    },
    "🙄": {
        "i": "261",
        "codePoint": "U+1F644",
        "name": "face with rolling eyes",
        "entities": "",
        "code": "",
        "keywords": [
            "eyeroll",
            "frustrated"
        ]
    },
    "😬": {
        "i": "262",
        "codePoint": "U+1F62C",
        "name": "grimacing face",
        "entities": "",
        "code": "",
        "keywords": [
            "grimace"
        ]
    },
    "😮‍💨": {
        "i": "263",
        "codePoint": "U+1F62E+200D+1F4A8",
        "name": "face exhaling",
        "entities": "",
        "code": "",
        "keywords": [
            "relieve",
            "sigh"
        ]
    },
    "🤥": {
        "i": "264",
        "codePoint": "U+1F925",
        "name": "lying face",
        "entities": "",
        "code": "",
        "keywords": [
            "lie",
            "pinocchio"
        ]
    },
    "🫨": {
        "i": "265",
        "codePoint": "U+1FAE8",
        "name": "shaking face",
        "entities": "",
        "code": "",
        "keywords": [
            "blurry",
            "earthquake"
        ]
    },
    "🙂‍↔️": {
        "i": "266",
        "codePoint": "U+1F642+200D+2194+FE0F",
        "name": "head shaking horizontally",
        "entities": "",
        "code": "",
        "keywords": [
            "disapprove",
            "indiffernt"
        ]
    },
    "🙂‍↕️": {
        "i": "267",
        "codePoint": "U+1F642+200D+2195+FE0F",
        "name": "head shaking vertically",
        "entities": "",
        "code": "",
        "keywords": [
            "down",
            "nod"
        ]
    },
    "😌": {
        "i": "268",
        "codePoint": "U+1F60C",
        "name": "relieved face",
        "entities": "",
        "code": "",
        "keywords": [
            "relaxed"
        ]
    },
    "😔": {
        "i": "269",
        "codePoint": "U+1F614",
        "name": "pensive face",
        "entities": "",
        "code": "",
        "keywords": [
            "sad",
            "depressed"
        ]
    },
    "😪": {
        "i": "270",
        "codePoint": "U+1F62A",
        "name": "sleepy face",
        "entities": "",
        "code": "",
        "keywords": [
            "tired",
            "rest",
            "nap"
        ]
    },
    "🤤": {
        "i": "271",
        "codePoint": "U+1F924",
        "name": "drooling face",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "😴": {
        "i": "272",
        "codePoint": "U+1F634",
        "name": "sleeping face",
        "entities": "",
        "code": "",
        "keywords": [
            "sleepy"
        ]
    },
    "😷": {
        "i": "273",
        "codePoint": "U+1F637",
        "name": "face with medical mask",
        "entities": "",
        "code": "",
        "keywords": [
            "sick",
            "ill",
            "disease",
            "covid"
        ]
    },
    "🤒": {
        "i": "274",
        "codePoint": "U+1F912",
        "name": "face with thermometer",
        "entities": "",
        "code": "",
        "keywords": [
            "temperature",
            "cold",
            "fever"
        ]
    },
    "🤕": {
        "i": "275",
        "codePoint": "U+1F915",
        "name": "face with head-bandage",
        "entities": "",
        "code": "",
        "keywords": [
            "injured",
            "clumsy",
            "bandage"
        ]
    },
    "🤢": {
        "i": "276",
        "codePoint": "U+1F922",
        "name": "nauseated face",
        "entities": "",
        "code": "",
        "keywords": [
            "vomit",
            "gross",
            "green",
            "throw up"
        ]
    },
    "🤮": {
        "i": "277",
        "codePoint": "U+1F92E",
        "name": "face with open mouth vomiting",
        "entities": "",
        "code": "",
        "keywords": [
            "face vomiting"
        ]
    },
    "🤧": {
        "i": "278",
        "codePoint": "U+1F927",
        "name": "sneezing face",
        "entities": "",
        "code": "",
        "keywords": [
            "gesundheit",
            "sneeze",
            "allergy"
        ]
    },
    "🥵": {
        "i": "279",
        "codePoint": "U+1F975",
        "name": "overheated face",
        "entities": "",
        "code": "",
        "keywords": [
            "hot face",
            "feverish",
            "sweating"
        ]
    },
    "🥶": {
        "i": "280",
        "codePoint": "U+1F976",
        "name": "freezing face",
        "entities": "",
        "code": "",
        "keywords": [
            "cold face",
            "blue",
            "freezing",
            "frozen",
            "frostbite",
            "icicles"
        ]
    },
    "🥴": {
        "i": "281",
        "codePoint": "U+1F974",
        "name": "face with uneven eyes and wavy mouth",
        "entities": "",
        "code": "",
        "keywords": [
            "woozy face",
            "intoxicated",
            "tipsy",
            "wavy"
        ]
    },
    "🤯": {
        "i": "282",
        "codePoint": "U+1F92F",
        "name": "shocked face with exploding head",
        "entities": "",
        "code": "",
        "keywords": [
            "exploding head",
            "shocked",
            "mind",
            "blown"
        ]
    },
    "🤠": {
        "i": "283",
        "codePoint": "U+1F920",
        "name": "face with cowboy hat",
        "entities": "",
        "code": "",
        "keywords": [
            "cowboy hat face",
            "cowgirl",
            "hat"
        ]
    },
    "🥳": {
        "i": "284",
        "codePoint": "U+1F973",
        "name": "face with party horn and party hat",
        "entities": "",
        "code": "",
        "keywords": [
            "partying face",
            "celebration",
            "woohoo"
        ]
    },
    "🥸": {
        "i": "285",
        "codePoint": "U+1F978",
        "name": "disguised face",
        "entities": "",
        "code": "",
        "keywords": [
            "pretent",
            "brows"
        ]
    },
    "😳": {
        "i": "286",
        "codePoint": "U+1F633",
        "name": "flushed face",
        "entities": "",
        "code": "",
        "keywords": [
            "shy",
            "flattered"
        ]
    },
    "🥺": {
        "i": "287",
        "codePoint": "U+1F97A",
        "name": "face with pleading eyes",
        "entities": "",
        "code": "",
        "keywords": [
            "pleading face",
            "begging",
            "mercy",
            "grievance"
        ]
    },
    "🥹": {
        "i": "288",
        "codePoint": "U+1F979",
        "name": "face holding back tears",
        "entities": "",
        "code": "",
        "keywords": [
            "touched",
            "gratitude"
        ]
    },
    "😨": {
        "i": "289",
        "codePoint": "U+1F628",
        "name": "fearful face",
        "entities": "",
        "code": "",
        "keywords": [
            "scared",
            "terrified"
        ]
    },
    "😰": {
        "i": "290",
        "codePoint": "U+1F630",
        "name": "face with open mouth and cold sweat",
        "entities": "",
        "code": "",
        "keywords": [
            "anxious face with sweat",
            "nervous",
            "sweat"
        ]
    },
    "😱": {
        "i": "291",
        "codePoint": "U+1F631",
        "name": "face screaming in fear",
        "entities": "",
        "code": "",
        "keywords": [
            "munch",
            "omg"
        ]
    },
    "😖": {
        "i": "292",
        "codePoint": "U+1F616",
        "name": "confounded face",
        "entities": "",
        "code": "",
        "keywords": [
            "confused",
            "unwell"
        ]
    },
    "😣": {
        "i": "293",
        "codePoint": "U+1F623",
        "name": "persevering face",
        "entities": "",
        "code": "",
        "keywords": [
            "no",
            "oops"
        ]
    },
    "😞": {
        "i": "294",
        "codePoint": "U+1F61E",
        "name": "disappointed face",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "😓": {
        "i": "295",
        "codePoint": "U+1F613",
        "name": "face with cold sweat",
        "entities": "",
        "code": "",
        "keywords": [
            "downcast face with sweat",
            "exercise"
        ]
    },
    "😩": {
        "i": "296",
        "codePoint": "U+1F629",
        "name": "weary face",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "😫": {
        "i": "297",
        "codePoint": "U+1F62B",
        "name": "tired face",
        "entities": "",
        "code": "",
        "keywords": [
            "whine"
        ]
    },
    "🥱": {
        "i": "298",
        "codePoint": "U+1F971",
        "name": "yawning face",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "😤": {
        "i": "299",
        "codePoint": "U+1F624",
        "name": "face with look of triumph",
        "entities": "",
        "code": "",
        "keywords": [
            "face with steam from nose",
            "gas",
            "proud",
            "pride",
            "triumph"
        ]
    },
    "🤬": {
        "i": "300",
        "codePoint": "U+1F92C",
        "name": "serious face with symbols covering mouth",
        "entities": "",
        "code": "",
        "keywords": [
            "face with symbols on mouth",
            "swearing",
            "cursing",
            "cussing",
            "profanity",
            "expletive"
        ]
    },
    "😈": {
        "i": "301",
        "codePoint": "U+1F608",
        "name": "smiling face with horns",
        "entities": "",
        "code": "",
        "keywords": [
            "devil"
        ]
    },
    "👿": {
        "i": "302",
        "codePoint": "U+1F47F",
        "name": "imp",
        "entities": "",
        "code": "",
        "keywords": [
            "angry face with horns",
            "horns"
        ]
    },
    "💀": {
        "i": "303",
        "codePoint": "U+1F480",
        "name": "skull",
        "entities": "",
        "code": "",
        "keywords": [
            "dead",
            "creepy",
            "dead"
        ]
    },
    "☠️": {
        "i": "304",
        "codePoint": "U+2620+FE0F",
        "name": "skull and crossbones",
        "entities": "",
        "code": "",
        "keywords": [
            "poison",
            "deadly",
            "scary"
        ]
    },
    "💩": {
        "i": "305",
        "codePoint": "U+1F4A9",
        "name": "pile of poo",
        "entities": "",
        "code": "",
        "keywords": [
            "hankey",
            "shitface",
            "fail",
            "turd",
            "shit"
        ]
    },
    "🤡": {
        "i": "306",
        "codePoint": "U+1F921",
        "name": "clown face",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👹": {
        "i": "307",
        "codePoint": "U+1F479",
        "name": "Japanese ogre",
        "entities": "",
        "code": "",
        "keywords": [
            "ogre",
            "monster",
            "mask",
            "demon"
        ]
    },
    "👺": {
        "i": "308",
        "codePoint": "U+1F47A",
        "name": "Japanese goblin",
        "entities": "",
        "code": "",
        "keywords": [
            "goblin",
            "red"
        ]
    },
    "👻": {
        "i": "309",
        "codePoint": "U+1F47B",
        "name": "ghost",
        "entities": "",
        "code": "",
        "keywords": [
            "halloween",
            "spooky"
        ]
    },
    "👽": {
        "i": "310",
        "codePoint": "U+1F47D",
        "name": "extraterrestrial alien",
        "entities": "",
        "code": "",
        "keywords": [
            "alien",
            "UFO",
            "paul"
        ]
    },
    "👾": {
        "i": "311",
        "codePoint": "U+1F47E",
        "name": "alien monster",
        "entities": "",
        "code": "",
        "keywords": [
            "game",
            "arcade"
        ]
    },
    "🤖": {
        "i": "312",
        "codePoint": "U+1F916",
        "name": "robot face",
        "entities": "",
        "code": "",
        "keywords": [
            "robot",
            "computer",
            "machine",
            "bot"
        ]
    },
    "😺": {
        "i": "313",
        "codePoint": "U+1F63A",
        "name": "smiling cat face with open mouth",
        "entities": "",
        "code": "",
        "keywords": [
            "grinning cat",
            "animal"
        ]
    },
    "😸": {
        "i": "314",
        "codePoint": "U+1F638",
        "name": "grinning cat face with smiling eyes",
        "entities": "",
        "code": "",
        "keywords": [
            "grinning cat with smiling eyes",
            "cats"
        ]
    },
    "😹": {
        "i": "315",
        "codePoint": "U+1F639",
        "name": "cat face with tears of joy",
        "entities": "",
        "code": "",
        "keywords": [
            "cat with tears of joy"
        ]
    },
    "😻": {
        "i": "316",
        "codePoint": "U+1F63B",
        "name": "smiling cat face with heart-shaped eyes",
        "entities": "",
        "code": "",
        "keywords": [
            "smiling cat with heart-eyes"
        ]
    },
    "😼": {
        "i": "317",
        "codePoint": "U+1F63C",
        "name": "cat face with wry smile",
        "entities": "",
        "code": "",
        "keywords": [
            "cat with wry smile",
            "smirk"
        ]
    },
    "😽": {
        "i": "318",
        "codePoint": "U+1F63D",
        "name": "kissing cat face with closed eyes",
        "entities": "",
        "code": "",
        "keywords": [
            "kissing cat"
        ]
    },
    "🙀": {
        "i": "319",
        "codePoint": "U+1F640",
        "name": "weary cat face",
        "entities": "",
        "code": "",
        "keywords": [
            "weary cat",
            "scream"
        ]
    },
    "😿": {
        "i": "320",
        "codePoint": "U+1F63F",
        "name": "crying cat face",
        "entities": "",
        "code": "",
        "keywords": [
            "crying cat"
        ]
    },
    "😾": {
        "i": "321",
        "codePoint": "U+1F63E",
        "name": "pouting cat face",
        "entities": "",
        "code": "",
        "keywords": [
            "pouting cat"
        ]
    },
    "🙈": {
        "i": "322",
        "codePoint": "U+1F648",
        "name": "see-no-evil monkey",
        "entities": "",
        "code": "",
        "keywords": [
            "nature"
        ]
    },
    "🙉": {
        "i": "323",
        "codePoint": "U+1F649",
        "name": "hear-no-evil monkey",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🙊": {
        "i": "324",
        "codePoint": "U+1F64A",
        "name": "speak-no-evil monkey",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💌": {
        "i": "325",
        "codePoint": "U+1F48C",
        "name": "love letter",
        "entities": "",
        "code": "",
        "keywords": [
            "email"
        ]
    },
    "💘": {
        "i": "326",
        "codePoint": "U+1F498",
        "name": "heart with arrow",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💝": {
        "i": "327",
        "codePoint": "U+1F49D",
        "name": "heart with ribbon",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💖": {
        "i": "328",
        "codePoint": "U+1F496",
        "name": "sparkling heart",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💗": {
        "i": "329",
        "codePoint": "U+1F497",
        "name": "growing heart",
        "entities": "",
        "code": "",
        "keywords": [
            "like"
        ]
    },
    "💓": {
        "i": "330",
        "codePoint": "U+1F493",
        "name": "beating heart",
        "entities": "",
        "code": "",
        "keywords": [
            "pink"
        ]
    },
    "💞": {
        "i": "331",
        "codePoint": "U+1F49E",
        "name": "revolving hearts",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💕": {
        "i": "332",
        "codePoint": "U+1F495",
        "name": "two hearts",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💟": {
        "i": "333",
        "codePoint": "U+1F49F",
        "name": "heart decoration",
        "entities": "",
        "code": "",
        "keywords": [
            "purple-square"
        ]
    },
    "❣️": {
        "i": "334",
        "codePoint": "U+2763+FE0F",
        "name": "heart exclamation",
        "entities": "",
        "code": "",
        "keywords": [
            "decoration"
        ]
    },
    "💔": {
        "i": "335",
        "codePoint": "U+1F494",
        "name": "broken heart",
        "entities": "",
        "code": "",
        "keywords": [
            "sorry",
            "break",
            "heartbreak"
        ]
    },
    "❤️‍🔥": {
        "i": "336",
        "codePoint": "U+2764+FE0F+200D+1F525",
        "name": "heart on fire",
        "entities": "",
        "code": "",
        "keywords": [
            "passionate",
            "enthusiastic"
        ]
    },
    "❤️‍🩹": {
        "i": "337",
        "codePoint": "U+2764+FE0F+200D+1FA79",
        "name": "mending heart",
        "entities": "",
        "code": "",
        "keywords": [
            "broken heart",
            "wounded"
        ]
    },
    "🩷": {
        "i": "338",
        "codePoint": "U+1FA77",
        "name": "pink heart",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧡": {
        "i": "339",
        "codePoint": "U+1F9E1",
        "name": "orange heart",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💛": {
        "i": "340",
        "codePoint": "U+1F49B",
        "name": "yellow heart",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💚": {
        "i": "341",
        "codePoint": "U+1F49A",
        "name": "green heart",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💙": {
        "i": "342",
        "codePoint": "U+1F499",
        "name": "blue heart",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🩵": {
        "i": "343",
        "codePoint": "U+1FA75",
        "name": "light blue heart",
        "entities": "",
        "code": "",
        "keywords": [
            "baby blue"
        ]
    },
    "💜": {
        "i": "344",
        "codePoint": "U+1F49C",
        "name": "purple heart",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤎": {
        "i": "345",
        "codePoint": "U+1F90E",
        "name": "brown heart",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🖤": {
        "i": "346",
        "codePoint": "U+1F5A4",
        "name": "black heart",
        "entities": "",
        "code": "",
        "keywords": [
            "evil"
        ]
    },
    "🩶": {
        "i": "347",
        "codePoint": "U+1FA76",
        "name": "grey heart",
        "entities": "",
        "code": "",
        "keywords": [
            "silver",
            "monochrome"
        ]
    },
    "🤍": {
        "i": "348",
        "codePoint": "U+1F90D",
        "name": "white heart",
        "entities": "",
        "code": "",
        "keywords": [
            "pure"
        ]
    },
    "💋": {
        "i": "349",
        "codePoint": "U+1F48B",
        "name": "kiss mark",
        "entities": "",
        "code": "",
        "keywords": [
            "lips"
        ]
    },
    "💯": {
        "i": "350",
        "codePoint": "U+1F4AF",
        "name": "hundred points symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "hundred points",
            "score",
            "perfect",
            "century",
            "exam",
            "quiz",
            "hundred"
        ]
    },
    "💢": {
        "i": "351",
        "codePoint": "U+1F4A2",
        "name": "anger symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "angry"
        ]
    },
    "💥": {
        "i": "352",
        "codePoint": "U+1F4A5",
        "name": "collision symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "collision",
            "explode",
            "explosion"
        ]
    },
    "💫": {
        "i": "353",
        "codePoint": "U+1F4AB",
        "name": "dizzy symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "dizzy",
            "shoot"
        ]
    },
    "💦": {
        "i": "354",
        "codePoint": "U+1F4A6",
        "name": "splashing sweat symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "sweat droplets",
            "water"
        ]
    },
    "💨": {
        "i": "355",
        "codePoint": "U+1F4A8",
        "name": "dash symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "dashing away",
            "wind",
            "air",
            "fast",
            "shoo",
            "fart",
            "puff"
        ]
    },
    "🕳️": {
        "i": "356",
        "codePoint": "U+1F573+FE0F",
        "name": "hole",
        "entities": "",
        "code": "",
        "keywords": [
            "embarrassing"
        ]
    },
    "💬": {
        "i": "357",
        "codePoint": "U+1F4AC",
        "name": "speech balloon",
        "entities": "",
        "code": "",
        "keywords": [
            "bubble",
            "message",
            "chatting"
        ]
    },
    "👁️‍🗨️": {
        "i": "358",
        "codePoint": "U+1F441+FE0F+200D+1F5E8+FE0F",
        "name": "eye in speech bubble",
        "entities": "",
        "code": "",
        "keywords": [
            "info"
        ]
    },
    "🗨️": {
        "i": "359",
        "codePoint": "U+1F5E8+FE0F",
        "name": "left speech bubble",
        "entities": "",
        "code": "",
        "keywords": [
            "words",
            "talk"
        ]
    },
    "🗯️": {
        "i": "360",
        "codePoint": "U+1F5EF+FE0F",
        "name": "right anger bubble",
        "entities": "",
        "code": "",
        "keywords": [
            "caption",
            "speech"
        ]
    },
    "💭": {
        "i": "361",
        "codePoint": "U+1F4AD",
        "name": "thought balloon",
        "entities": "",
        "code": "",
        "keywords": [
            "thinking"
        ]
    },
    "💤": {
        "i": "362",
        "codePoint": "U+1F4A4",
        "name": "sleeping symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "ZZZ"
        ]
    },
    "👋": {
        "i": "363",
        "codePoint": "U+1F44B",
        "name": "waving hand sign",
        "entities": "",
        "code": "",
        "keywords": [
            "waving hand",
            "wave",
            "goodbye",
            "solong",
            "farewell",
            "hello",
            "hi"
        ]
    },
    "🤚": {
        "i": "364",
        "codePoint": "U+1F91A",
        "name": "raised back of hand",
        "entities": "",
        "code": "",
        "keywords": [
            "fingers",
            "raised",
            "backhand"
        ]
    },
    "🖐️": {
        "i": "365",
        "codePoint": "U+1F590+FE0F",
        "name": "hand with fingers splayed",
        "entities": "",
        "code": "",
        "keywords": [
            "hand"
        ]
    },
    "✋": {
        "i": "366",
        "codePoint": "U+270B",
        "name": "raised hand",
        "entities": "",
        "code": "",
        "keywords": [
            "stop",
            "highfive",
            "ban"
        ]
    },
    "🖖": {
        "i": "367",
        "codePoint": "U+1F596",
        "name": "raised hand with part between middle and ring fingers",
        "entities": "",
        "code": "",
        "keywords": [
            "vulcan salute",
            "spock",
            "star trek"
        ]
    },
    "🫱": {
        "i": "368",
        "codePoint": "U+1FAF1",
        "name": "rightwards hand",
        "entities": "",
        "code": "",
        "keywords": [
            "palm"
        ]
    },
    "🫲": {
        "i": "369",
        "codePoint": "U+1FAF2",
        "name": "leftwards hand",
        "entities": "",
        "code": "",
        "keywords": [
            "offer"
        ]
    },
    "🫳": {
        "i": "370",
        "codePoint": "U+1FAF3",
        "name": "palm down hand",
        "entities": "",
        "code": "",
        "keywords": [
            "drop"
        ]
    },
    "🫴": {
        "i": "371",
        "codePoint": "U+1FAF4",
        "name": "palm up hand",
        "entities": "",
        "code": "",
        "keywords": [
            "demand"
        ]
    },
    "🫷": {
        "i": "372",
        "codePoint": "U+1FAF7",
        "name": "leftwards pushing hand",
        "entities": "",
        "code": "",
        "keywords": [
            "pressing"
        ]
    },
    "🫸": {
        "i": "373",
        "codePoint": "U+1FAF8",
        "name": "rightwards pushing hand",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👌": {
        "i": "374",
        "codePoint": "U+1F44C",
        "name": "ok hand sign",
        "entities": "",
        "code": "",
        "keywords": [
            "OK hand",
            "limbs",
            "okay"
        ]
    },
    "🤌": {
        "i": "375",
        "codePoint": "U+1F90C",
        "name": "pinched fingers",
        "entities": "",
        "code": "",
        "keywords": [
            "size"
        ]
    },
    "🤏": {
        "i": "376",
        "codePoint": "U+1F90F",
        "name": "pinching hand",
        "entities": "",
        "code": "",
        "keywords": [
            "tiny",
            "small"
        ]
    },
    "✌️": {
        "i": "377",
        "codePoint": "U+270C+FE0F",
        "name": "victory hand",
        "entities": "",
        "code": "",
        "keywords": [
            "ohyeah",
            "peace",
            "victory",
            "two"
        ]
    },
    "🤞": {
        "i": "378",
        "codePoint": "U+1F91E",
        "name": "hand with index and middle fingers crossed",
        "entities": "",
        "code": "",
        "keywords": [
            "crossed fingers",
            "good",
            "lucky"
        ]
    },
    "🫰": {
        "i": "379",
        "codePoint": "U+1FAF0",
        "name": "hand with index finger and thumb crossed",
        "entities": "",
        "code": "",
        "keywords": [
            "expensive"
        ]
    },
    "🤟": {
        "i": "380",
        "codePoint": "U+1F91F",
        "name": "i love you hand sign",
        "entities": "",
        "code": "",
        "keywords": [
            "love-you gesture"
        ]
    },
    "🤘": {
        "i": "381",
        "codePoint": "U+1F918",
        "name": "sign of the horns",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤙": {
        "i": "382",
        "codePoint": "U+1F919",
        "name": "call me hand",
        "entities": "",
        "code": "",
        "keywords": [
            "hands",
            "shaka"
        ]
    },
    "👈": {
        "i": "383",
        "codePoint": "U+1F448",
        "name": "white left pointing backhand index",
        "entities": "",
        "code": "",
        "keywords": [
            "backhand index pointing left",
            "direction"
        ]
    },
    "👉": {
        "i": "384",
        "codePoint": "U+1F449",
        "name": "white right pointing backhand index",
        "entities": "",
        "code": "",
        "keywords": [
            "backhand index pointing right",
            "right"
        ]
    },
    "👆": {
        "i": "385",
        "codePoint": "U+1F446",
        "name": "white up pointing backhand index",
        "entities": "",
        "code": "",
        "keywords": [
            "backhand index pointing up",
            "up"
        ]
    },
    "🖕": {
        "i": "386",
        "codePoint": "U+1F595",
        "name": "reversed hand with middle finger extended",
        "entities": "",
        "code": "",
        "keywords": [
            "middle finger",
            "rude",
            "middle",
            "flipping"
        ]
    },
    "👇": {
        "i": "387",
        "codePoint": "U+1F447",
        "name": "white down pointing backhand index",
        "entities": "",
        "code": "",
        "keywords": [
            "backhand index pointing down"
        ]
    },
    "☝️": {
        "i": "388",
        "codePoint": "U+261D+FE0F",
        "name": "index pointing up",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🫵": {
        "i": "389",
        "codePoint": "U+1FAF5",
        "name": "index pointing at the viewer",
        "entities": "",
        "code": "",
        "keywords": [
            "you",
            "recruit"
        ]
    },
    "✊": {
        "i": "390",
        "codePoint": "U+270A",
        "name": "raised fist",
        "entities": "",
        "code": "",
        "keywords": [
            "grasp"
        ]
    },
    "👊": {
        "i": "391",
        "codePoint": "U+1F44A",
        "name": "fisted hand sign",
        "entities": "",
        "code": "",
        "keywords": [
            "oncoming fist",
            "violence",
            "fist",
            "hit",
            "attack"
        ]
    },
    "🤛": {
        "i": "392",
        "codePoint": "U+1F91B",
        "name": "left-facing fist",
        "entities": "",
        "code": "",
        "keywords": [
            "fistbump"
        ]
    },
    "🤜": {
        "i": "393",
        "codePoint": "U+1F91C",
        "name": "right-facing fist",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👏": {
        "i": "394",
        "codePoint": "U+1F44F",
        "name": "clapping hands sign",
        "entities": "",
        "code": "",
        "keywords": [
            "clapping hands",
            "praise",
            "applause",
            "congrats",
            "yay"
        ]
    },
    "🙌": {
        "i": "395",
        "codePoint": "U+1F64C",
        "name": "person raising both hands in celebration",
        "entities": "",
        "code": "",
        "keywords": [
            "raising hands",
            "gesture",
            "hooray",
            "yea"
        ]
    },
    "🫶": {
        "i": "396",
        "codePoint": "U+1FAF6",
        "name": "heart hands",
        "entities": "",
        "code": "",
        "keywords": [
            "appreciation",
            "support"
        ]
    },
    "👐": {
        "i": "397",
        "codePoint": "U+1F450",
        "name": "open hands sign",
        "entities": "",
        "code": "",
        "keywords": [
            "open hands",
            "open"
        ]
    },
    "🤲": {
        "i": "398",
        "codePoint": "U+1F932",
        "name": "palms up together",
        "entities": "",
        "code": "",
        "keywords": [
            "cupped",
            "prayer"
        ]
    },
    "🤝": {
        "i": "399",
        "codePoint": "U+1F91D",
        "name": "handshake",
        "entities": "",
        "code": "",
        "keywords": [
            "agreement",
            "shake"
        ]
    },
    "🙏": {
        "i": "400",
        "codePoint": "U+1F64F",
        "name": "person with folded hands",
        "entities": "",
        "code": "",
        "keywords": [
            "folded hands",
            "please",
            "hope",
            "wish",
            "namaste",
            "thank you",
            "thanks",
            "appreciate"
        ]
    },
    "✍️": {
        "i": "401",
        "codePoint": "U+270D+FE0F",
        "name": "writing hand",
        "entities": "",
        "code": "",
        "keywords": [
            "compose"
        ]
    },
    "💅": {
        "i": "402",
        "codePoint": "U+1F485",
        "name": "nail polish",
        "entities": "",
        "code": "",
        "keywords": [
            "beauty",
            "manicure",
            "finger",
            "nail",
            "slay"
        ]
    },
    "🤳": {
        "i": "403",
        "codePoint": "U+1F933",
        "name": "selfie",
        "entities": "",
        "code": "",
        "keywords": [
            "phone"
        ]
    },
    "💪": {
        "i": "404",
        "codePoint": "U+1F4AA",
        "name": "flexed biceps",
        "entities": "",
        "code": "",
        "keywords": [
            "arm",
            "flex",
            "strong",
            "biceps"
        ]
    },
    "🦾": {
        "i": "405",
        "codePoint": "U+1F9BE",
        "name": "mechanical arm",
        "entities": "",
        "code": "",
        "keywords": [
            "accessibility"
        ]
    },
    "🦿": {
        "i": "406",
        "codePoint": "U+1F9BF",
        "name": "mechanical leg",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦵": {
        "i": "407",
        "codePoint": "U+1F9B5",
        "name": "leg",
        "entities": "",
        "code": "",
        "keywords": [
            "kick",
            "limb"
        ]
    },
    "🦶": {
        "i": "408",
        "codePoint": "U+1F9B6",
        "name": "foot",
        "entities": "",
        "code": "",
        "keywords": [
            "stomp"
        ]
    },
    "👂": {
        "i": "409",
        "codePoint": "U+1F442",
        "name": "ear",
        "entities": "",
        "code": "",
        "keywords": [
            "hear",
            "listen"
        ]
    },
    "🦻": {
        "i": "410",
        "codePoint": "U+1F9BB",
        "name": "ear with hearing aid",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👃": {
        "i": "411",
        "codePoint": "U+1F443",
        "name": "nose",
        "entities": "",
        "code": "",
        "keywords": [
            "smell",
            "sniff"
        ]
    },
    "🧠": {
        "i": "412",
        "codePoint": "U+1F9E0",
        "name": "brain",
        "entities": "",
        "code": "",
        "keywords": [
            "smart",
            "intelligent"
        ]
    },
    "🫀": {
        "i": "413",
        "codePoint": "U+1FAC0",
        "name": "anatomical heart",
        "entities": "",
        "code": "",
        "keywords": [
            "heartbeat"
        ]
    },
    "🫁": {
        "i": "414",
        "codePoint": "U+1FAC1",
        "name": "lungs",
        "entities": "",
        "code": "",
        "keywords": [
            "breathe"
        ]
    },
    "🦷": {
        "i": "415",
        "codePoint": "U+1F9B7",
        "name": "tooth",
        "entities": "",
        "code": "",
        "keywords": [
            "teeth",
            "dentist"
        ]
    },
    "🦴": {
        "i": "416",
        "codePoint": "U+1F9B4",
        "name": "bone",
        "entities": "",
        "code": "",
        "keywords": [
            "skeleton"
        ]
    },
    "👀": {
        "i": "417",
        "codePoint": "U+1F440",
        "name": "eyes",
        "entities": "",
        "code": "",
        "keywords": [
            "look",
            "stalk",
            "peek"
        ]
    },
    "👁️": {
        "i": "418",
        "codePoint": "U+1F441+FE0F",
        "name": "eye",
        "entities": "",
        "code": "",
        "keywords": [
            "see",
            "stare"
        ]
    },
    "👅": {
        "i": "419",
        "codePoint": "U+1F445",
        "name": "tongue",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👄": {
        "i": "420",
        "codePoint": "U+1F444",
        "name": "mouth",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🫦": {
        "i": "421",
        "codePoint": "U+1FAE6",
        "name": "biting lip",
        "entities": "",
        "code": "",
        "keywords": [
            "flirt",
            "sexy",
            "pain",
            "worry"
        ]
    },
    "👶": {
        "i": "422",
        "codePoint": "U+1F476",
        "name": "baby",
        "entities": "",
        "code": "",
        "keywords": [
            "toddler"
        ]
    },
    "🧒": {
        "i": "423",
        "codePoint": "U+1F9D2",
        "name": "child",
        "entities": "",
        "code": "",
        "keywords": [
            "gender-neutral",
            "young"
        ]
    },
    "👦": {
        "i": "424",
        "codePoint": "U+1F466",
        "name": "boy",
        "entities": "",
        "code": "",
        "keywords": [
            "male",
            "guy",
            "teenager"
        ]
    },
    "👧": {
        "i": "425",
        "codePoint": "U+1F467",
        "name": "girl",
        "entities": "",
        "code": "",
        "keywords": [
            "female"
        ]
    },
    "🧑": {
        "i": "426",
        "codePoint": "U+1F9D1",
        "name": "adult",
        "entities": "",
        "code": "",
        "keywords": [
            "person"
        ]
    },
    "👱": {
        "i": "427",
        "codePoint": "U+1F471",
        "name": "person with blond hair",
        "entities": "",
        "code": "",
        "keywords": [
            "person blond hair",
            "hairstyle"
        ]
    },
    "👨": {
        "i": "428",
        "codePoint": "U+1F468",
        "name": "man",
        "entities": "",
        "code": "",
        "keywords": [
            "mustache",
            "father",
            "dad",
            "sir"
        ]
    },
    "🧔": {
        "i": "429",
        "codePoint": "U+1F9D4",
        "name": "bearded person",
        "entities": "",
        "code": "",
        "keywords": [
            "person beard",
            "bewhiskered"
        ]
    },
    "🧔‍♂️": {
        "i": "430",
        "codePoint": "U+1F9D4+200D+2642+FE0F",
        "name": "man beard",
        "entities": "",
        "code": "",
        "keywords": [
            "facial hair"
        ]
    },
    "🧔‍♀️": {
        "i": "431",
        "codePoint": "U+1F9D4+200D+2640+FE0F",
        "name": "woman beard",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍🦰": {
        "i": "432",
        "codePoint": "U+1F468+200D+1F9B0",
        "name": "man red hair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍🦱": {
        "i": "433",
        "codePoint": "U+1F468+200D+1F9B1",
        "name": "man curly hair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍🦳": {
        "i": "434",
        "codePoint": "U+1F468+200D+1F9B3",
        "name": "man white hair",
        "entities": "",
        "code": "",
        "keywords": [
            "old"
        ]
    },
    "👨‍🦲": {
        "i": "435",
        "codePoint": "U+1F468+200D+1F9B2",
        "name": "man bald",
        "entities": "",
        "code": "",
        "keywords": [
            "hairless"
        ]
    },
    "👩": {
        "i": "436",
        "codePoint": "U+1F469",
        "name": "woman",
        "entities": "",
        "code": "",
        "keywords": [
            "girls",
            "lady"
        ]
    },
    "👩‍🦰": {
        "i": "437",
        "codePoint": "U+1F469+200D+1F9B0",
        "name": "woman red hair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🦰": {
        "i": "438",
        "codePoint": "U+1F9D1+200D+1F9B0",
        "name": "person red hair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍🦱": {
        "i": "439",
        "codePoint": "U+1F469+200D+1F9B1",
        "name": "woman curly hair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🦱": {
        "i": "440",
        "codePoint": "U+1F9D1+200D+1F9B1",
        "name": "person curly hair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍🦳": {
        "i": "441",
        "codePoint": "U+1F469+200D+1F9B3",
        "name": "woman white hair",
        "entities": "",
        "code": "",
        "keywords": [
            "elder"
        ]
    },
    "🧑‍🦳": {
        "i": "442",
        "codePoint": "U+1F9D1+200D+1F9B3",
        "name": "person white hair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍🦲": {
        "i": "443",
        "codePoint": "U+1F469+200D+1F9B2",
        "name": "woman bald",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🦲": {
        "i": "444",
        "codePoint": "U+1F9D1+200D+1F9B2",
        "name": "person bald",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👱‍♀️": {
        "i": "445",
        "codePoint": "U+1F471+200D+2640+FE0F",
        "name": "woman blond hair",
        "entities": "",
        "code": "",
        "keywords": [
            "blonde"
        ]
    },
    "👱‍♂️": {
        "i": "446",
        "codePoint": "U+1F471+200D+2642+FE0F",
        "name": "man blond hair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧓": {
        "i": "447",
        "codePoint": "U+1F9D3",
        "name": "older adult",
        "entities": "",
        "code": "",
        "keywords": [
            "older person",
            "human",
            "senior"
        ]
    },
    "👴": {
        "i": "448",
        "codePoint": "U+1F474",
        "name": "older man",
        "entities": "",
        "code": "",
        "keywords": [
            "old man",
            "men"
        ]
    },
    "👵": {
        "i": "449",
        "codePoint": "U+1F475",
        "name": "older woman",
        "entities": "",
        "code": "",
        "keywords": [
            "old woman",
            "women"
        ]
    },
    "🙍": {
        "i": "450",
        "codePoint": "U+1F64D",
        "name": "person frowning",
        "entities": "",
        "code": "",
        "keywords": [
            "worried"
        ]
    },
    "🙍‍♂️": {
        "i": "451",
        "codePoint": "U+1F64D+200D+2642+FE0F",
        "name": "man frowning",
        "entities": "",
        "code": "",
        "keywords": [
            "discouraged"
        ]
    },
    "🙍‍♀️": {
        "i": "452",
        "codePoint": "U+1F64D+200D+2640+FE0F",
        "name": "woman frowning",
        "entities": "",
        "code": "",
        "keywords": [
            "unhappy"
        ]
    },
    "🙎": {
        "i": "453",
        "codePoint": "U+1F64E",
        "name": "person with pouting face",
        "entities": "",
        "code": "",
        "keywords": [
            "person pouting"
        ]
    },
    "🙎‍♂️": {
        "i": "454",
        "codePoint": "U+1F64E+200D+2642+FE0F",
        "name": "man pouting",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🙎‍♀️": {
        "i": "455",
        "codePoint": "U+1F64E+200D+2640+FE0F",
        "name": "woman pouting",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🙅": {
        "i": "456",
        "codePoint": "U+1F645",
        "name": "face with no good gesture",
        "entities": "",
        "code": "",
        "keywords": [
            "person gesturing NO",
            "decline"
        ]
    },
    "🙅‍♂️": {
        "i": "457",
        "codePoint": "U+1F645+200D+2642+FE0F",
        "name": "man gesturing NO",
        "entities": "",
        "code": "",
        "keywords": [
            "nope"
        ]
    },
    "🙅‍♀️": {
        "i": "458",
        "codePoint": "U+1F645+200D+2640+FE0F",
        "name": "woman gesturing NO",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🙆": {
        "i": "459",
        "codePoint": "U+1F646",
        "name": "face with ok gesture",
        "entities": "",
        "code": "",
        "keywords": [
            "person gesturing OK",
            "agree"
        ]
    },
    "🙆‍♂️": {
        "i": "460",
        "codePoint": "U+1F646+200D+2642+FE0F",
        "name": "man gesturing OK",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🙆‍♀️": {
        "i": "461",
        "codePoint": "U+1F646+200D+2640+FE0F",
        "name": "woman gesturing OK",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💁": {
        "i": "462",
        "codePoint": "U+1F481",
        "name": "information desk person",
        "entities": "",
        "code": "",
        "keywords": [
            "person tipping hand"
        ]
    },
    "💁‍♂️": {
        "i": "463",
        "codePoint": "U+1F481+200D+2642+FE0F",
        "name": "man tipping hand",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💁‍♀️": {
        "i": "464",
        "codePoint": "U+1F481+200D+2640+FE0F",
        "name": "woman tipping hand",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🙋": {
        "i": "465",
        "codePoint": "U+1F64B",
        "name": "happy person raising one hand",
        "entities": "",
        "code": "",
        "keywords": [
            "person raising hand",
            "question"
        ]
    },
    "🙋‍♂️": {
        "i": "466",
        "codePoint": "U+1F64B+200D+2642+FE0F",
        "name": "man raising hand",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🙋‍♀️": {
        "i": "467",
        "codePoint": "U+1F64B+200D+2640+FE0F",
        "name": "woman raising hand",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧏": {
        "i": "468",
        "codePoint": "U+1F9CF",
        "name": "deaf person",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧏‍♂️": {
        "i": "469",
        "codePoint": "U+1F9CF+200D+2642+FE0F",
        "name": "deaf man",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧏‍♀️": {
        "i": "470",
        "codePoint": "U+1F9CF+200D+2640+FE0F",
        "name": "deaf woman",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🙇": {
        "i": "471",
        "codePoint": "U+1F647",
        "name": "person bowing deeply",
        "entities": "",
        "code": "",
        "keywords": [
            "person bowing",
            "respectiful"
        ]
    },
    "🙇‍♂️": {
        "i": "472",
        "codePoint": "U+1F647+200D+2642+FE0F",
        "name": "man bowing",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🙇‍♀️": {
        "i": "473",
        "codePoint": "U+1F647+200D+2640+FE0F",
        "name": "woman bowing",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤦": {
        "i": "474",
        "codePoint": "U+1F926",
        "name": "face palm",
        "entities": "",
        "code": "",
        "keywords": [
            "person facepalming",
            "disappointed"
        ]
    },
    "🤦‍♂️": {
        "i": "475",
        "codePoint": "U+1F926+200D+2642+FE0F",
        "name": "man facepalming",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤦‍♀️": {
        "i": "476",
        "codePoint": "U+1F926+200D+2640+FE0F",
        "name": "woman facepalming",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤷": {
        "i": "477",
        "codePoint": "U+1F937",
        "name": "shrug",
        "entities": "",
        "code": "",
        "keywords": [
            "person shrugging",
            "regardless"
        ]
    },
    "🤷‍♂️": {
        "i": "478",
        "codePoint": "U+1F937+200D+2642+FE0F",
        "name": "man shrugging",
        "entities": "",
        "code": "",
        "keywords": [
            "doubt"
        ]
    },
    "🤷‍♀️": {
        "i": "479",
        "codePoint": "U+1F937+200D+2640+FE0F",
        "name": "woman shrugging",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍⚕️": {
        "i": "480",
        "codePoint": "U+1F9D1+200D+2695+FE0F",
        "name": "health worker",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍⚕️": {
        "i": "481",
        "codePoint": "U+1F468+200D+2695+FE0F",
        "name": "man health worker",
        "entities": "",
        "code": "",
        "keywords": [
            "doctor",
            "therapist"
        ]
    },
    "👩‍⚕️": {
        "i": "482",
        "codePoint": "U+1F469+200D+2695+FE0F",
        "name": "woman health worker",
        "entities": "",
        "code": "",
        "keywords": [
            "nurse",
            "healthcare"
        ]
    },
    "🧑‍🎓": {
        "i": "483",
        "codePoint": "U+1F9D1+200D+1F393",
        "name": "student",
        "entities": "",
        "code": "",
        "keywords": [
            "learn"
        ]
    },
    "👨‍🎓": {
        "i": "484",
        "codePoint": "U+1F468+200D+1F393",
        "name": "man student",
        "entities": "",
        "code": "",
        "keywords": [
            "graduate"
        ]
    },
    "👩‍🎓": {
        "i": "485",
        "codePoint": "U+1F469+200D+1F393",
        "name": "woman student",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🏫": {
        "i": "486",
        "codePoint": "U+1F9D1+200D+1F3EB",
        "name": "teacher",
        "entities": "",
        "code": "",
        "keywords": [
            "professor"
        ]
    },
    "👨‍🏫": {
        "i": "487",
        "codePoint": "U+1F468+200D+1F3EB",
        "name": "man teacher",
        "entities": "",
        "code": "",
        "keywords": [
            "instructor"
        ]
    },
    "👩‍🏫": {
        "i": "488",
        "codePoint": "U+1F469+200D+1F3EB",
        "name": "woman teacher",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍⚖️": {
        "i": "489",
        "codePoint": "U+1F9D1+200D+2696+FE0F",
        "name": "judge",
        "entities": "",
        "code": "",
        "keywords": [
            "law"
        ]
    },
    "👨‍⚖️": {
        "i": "490",
        "codePoint": "U+1F468+200D+2696+FE0F",
        "name": "man judge",
        "entities": "",
        "code": "",
        "keywords": [
            "justice"
        ]
    },
    "👩‍⚖️": {
        "i": "491",
        "codePoint": "U+1F469+200D+2696+FE0F",
        "name": "woman judge",
        "entities": "",
        "code": "",
        "keywords": [
            "court"
        ]
    },
    "🧑‍🌾": {
        "i": "492",
        "codePoint": "U+1F9D1+200D+1F33E",
        "name": "farmer",
        "entities": "",
        "code": "",
        "keywords": [
            "crops"
        ]
    },
    "👨‍🌾": {
        "i": "493",
        "codePoint": "U+1F468+200D+1F33E",
        "name": "man farmer",
        "entities": "",
        "code": "",
        "keywords": [
            "rancher"
        ]
    },
    "👩‍🌾": {
        "i": "494",
        "codePoint": "U+1F469+200D+1F33E",
        "name": "woman farmer",
        "entities": "",
        "code": "",
        "keywords": [
            "gardener"
        ]
    },
    "🧑‍🍳": {
        "i": "495",
        "codePoint": "U+1F9D1+200D+1F373",
        "name": "cook",
        "entities": "",
        "code": "",
        "keywords": [
            "food",
            "kitchen",
            "culinary"
        ]
    },
    "👨‍🍳": {
        "i": "496",
        "codePoint": "U+1F468+200D+1F373",
        "name": "man cook",
        "entities": "",
        "code": "",
        "keywords": [
            "chef"
        ]
    },
    "👩‍🍳": {
        "i": "497",
        "codePoint": "U+1F469+200D+1F373",
        "name": "woman cook",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🔧": {
        "i": "498",
        "codePoint": "U+1F9D1+200D+1F527",
        "name": "mechanic",
        "entities": "",
        "code": "",
        "keywords": [
            "worker",
            "technician"
        ]
    },
    "👨‍🔧": {
        "i": "499",
        "codePoint": "U+1F468+200D+1F527",
        "name": "man mechanic",
        "entities": "",
        "code": "",
        "keywords": [
            "plumber"
        ]
    },
    "👩‍🔧": {
        "i": "500",
        "codePoint": "U+1F469+200D+1F527",
        "name": "woman mechanic",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🏭": {
        "i": "501",
        "codePoint": "U+1F9D1+200D+1F3ED",
        "name": "factory worker",
        "entities": "",
        "code": "",
        "keywords": [
            "labor"
        ]
    },
    "👨‍🏭": {
        "i": "502",
        "codePoint": "U+1F468+200D+1F3ED",
        "name": "man factory worker",
        "entities": "",
        "code": "",
        "keywords": [
            "assembly"
        ]
    },
    "👩‍🏭": {
        "i": "503",
        "codePoint": "U+1F469+200D+1F3ED",
        "name": "woman factory worker",
        "entities": "",
        "code": "",
        "keywords": [
            "industrial"
        ]
    },
    "🧑‍💼": {
        "i": "504",
        "codePoint": "U+1F9D1+200D+1F4BC",
        "name": "office worker",
        "entities": "",
        "code": "",
        "keywords": [
            "business"
        ]
    },
    "👨‍💼": {
        "i": "505",
        "codePoint": "U+1F468+200D+1F4BC",
        "name": "man office worker",
        "entities": "",
        "code": "",
        "keywords": [
            "manager"
        ]
    },
    "👩‍💼": {
        "i": "506",
        "codePoint": "U+1F469+200D+1F4BC",
        "name": "woman office worker",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🔬": {
        "i": "507",
        "codePoint": "U+1F9D1+200D+1F52C",
        "name": "scientist",
        "entities": "",
        "code": "",
        "keywords": [
            "chemistry"
        ]
    },
    "👨‍🔬": {
        "i": "508",
        "codePoint": "U+1F468+200D+1F52C",
        "name": "man scientist",
        "entities": "",
        "code": "",
        "keywords": [
            "biologist",
            "engineer"
        ]
    },
    "👩‍🔬": {
        "i": "509",
        "codePoint": "U+1F469+200D+1F52C",
        "name": "woman scientist",
        "entities": "",
        "code": "",
        "keywords": [
            "chemist",
            "physicist"
        ]
    },
    "🧑‍💻": {
        "i": "510",
        "codePoint": "U+1F9D1+200D+1F4BB",
        "name": "technologist",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍💻": {
        "i": "511",
        "codePoint": "U+1F468+200D+1F4BB",
        "name": "man technologist",
        "entities": "",
        "code": "",
        "keywords": [
            "coder",
            "programmer"
        ]
    },
    "👩‍💻": {
        "i": "512",
        "codePoint": "U+1F469+200D+1F4BB",
        "name": "woman technologist",
        "entities": "",
        "code": "",
        "keywords": [
            "developer",
            "software"
        ]
    },
    "🧑‍🎤": {
        "i": "513",
        "codePoint": "U+1F9D1+200D+1F3A4",
        "name": "singer",
        "entities": "",
        "code": "",
        "keywords": [
            "song",
            "performer"
        ]
    },
    "👨‍🎤": {
        "i": "514",
        "codePoint": "U+1F468+200D+1F3A4",
        "name": "man singer",
        "entities": "",
        "code": "",
        "keywords": [
            "rockstar"
        ]
    },
    "👩‍🎤": {
        "i": "515",
        "codePoint": "U+1F469+200D+1F3A4",
        "name": "woman singer",
        "entities": "",
        "code": "",
        "keywords": [
            "entertainer"
        ]
    },
    "🧑‍🎨": {
        "i": "516",
        "codePoint": "U+1F9D1+200D+1F3A8",
        "name": "artist",
        "entities": "",
        "code": "",
        "keywords": [
            "painting",
            "creativity"
        ]
    },
    "👨‍🎨": {
        "i": "517",
        "codePoint": "U+1F468+200D+1F3A8",
        "name": "man artist",
        "entities": "",
        "code": "",
        "keywords": [
            "painter"
        ]
    },
    "👩‍🎨": {
        "i": "518",
        "codePoint": "U+1F469+200D+1F3A8",
        "name": "woman artist",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍✈️": {
        "i": "519",
        "codePoint": "U+1F9D1+200D+2708+FE0F",
        "name": "pilot",
        "entities": "",
        "code": "",
        "keywords": [
            "plane"
        ]
    },
    "👨‍✈️": {
        "i": "520",
        "codePoint": "U+1F468+200D+2708+FE0F",
        "name": "man pilot",
        "entities": "",
        "code": "",
        "keywords": [
            "aviator"
        ]
    },
    "👩‍✈️": {
        "i": "521",
        "codePoint": "U+1F469+200D+2708+FE0F",
        "name": "woman pilot",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🚀": {
        "i": "522",
        "codePoint": "U+1F9D1+200D+1F680",
        "name": "astronaut",
        "entities": "",
        "code": "",
        "keywords": [
            "outerspace"
        ]
    },
    "👨‍🚀": {
        "i": "523",
        "codePoint": "U+1F468+200D+1F680",
        "name": "man astronaut",
        "entities": "",
        "code": "",
        "keywords": [
            "space"
        ]
    },
    "👩‍🚀": {
        "i": "524",
        "codePoint": "U+1F469+200D+1F680",
        "name": "woman astronaut",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🚒": {
        "i": "525",
        "codePoint": "U+1F9D1+200D+1F692",
        "name": "firefighter",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍🚒": {
        "i": "526",
        "codePoint": "U+1F468+200D+1F692",
        "name": "man firefighter",
        "entities": "",
        "code": "",
        "keywords": [
            "fireman"
        ]
    },
    "👩‍🚒": {
        "i": "527",
        "codePoint": "U+1F469+200D+1F692",
        "name": "woman firefighter",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👮": {
        "i": "528",
        "codePoint": "U+1F46E",
        "name": "police officer",
        "entities": "",
        "code": "",
        "keywords": [
            "cop"
        ]
    },
    "👮‍♂️": {
        "i": "529",
        "codePoint": "U+1F46E+200D+2642+FE0F",
        "name": "man police officer",
        "entities": "",
        "code": "",
        "keywords": [
            "police",
            "legal"
        ]
    },
    "👮‍♀️": {
        "i": "530",
        "codePoint": "U+1F46E+200D+2640+FE0F",
        "name": "woman police officer",
        "entities": "",
        "code": "",
        "keywords": [
            "policewoman"
        ]
    },
    "🕵️": {
        "i": "531",
        "codePoint": "U+1F575+FE0F",
        "name": "detective",
        "entities": "",
        "code": "",
        "keywords": [
            "spy"
        ]
    },
    "🕵️‍♂️": {
        "i": "532",
        "codePoint": "U+1F575+FE0F+200D+2642+FE0F",
        "name": "man detective",
        "entities": "",
        "code": "",
        "keywords": [
            "crime"
        ]
    },
    "🕵️‍♀️": {
        "i": "533",
        "codePoint": "U+1F575+FE0F+200D+2640+FE0F",
        "name": "woman detective",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💂": {
        "i": "534",
        "codePoint": "U+1F482",
        "name": "guardsman",
        "entities": "",
        "code": "",
        "keywords": [
            "guard",
            "protect"
        ]
    },
    "💂‍♂️": {
        "i": "535",
        "codePoint": "U+1F482+200D+2642+FE0F",
        "name": "man guard",
        "entities": "",
        "code": "",
        "keywords": [
            "uk",
            "royal"
        ]
    },
    "💂‍♀️": {
        "i": "536",
        "codePoint": "U+1F482+200D+2640+FE0F",
        "name": "woman guard",
        "entities": "",
        "code": "",
        "keywords": [
            "gb"
        ]
    },
    "🥷": {
        "i": "537",
        "codePoint": "U+1F977",
        "name": "ninja",
        "entities": "",
        "code": "",
        "keywords": [
            "ninjutsu",
            "skills"
        ]
    },
    "👷": {
        "i": "538",
        "codePoint": "U+1F477",
        "name": "construction worker",
        "entities": "",
        "code": "",
        "keywords": [
            "build"
        ]
    },
    "👷‍♂️": {
        "i": "539",
        "codePoint": "U+1F477+200D+2642+FE0F",
        "name": "man construction worker",
        "entities": "",
        "code": "",
        "keywords": [
            "wip"
        ]
    },
    "👷‍♀️": {
        "i": "540",
        "codePoint": "U+1F477+200D+2640+FE0F",
        "name": "woman construction worker",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🫅": {
        "i": "541",
        "codePoint": "U+1FAC5",
        "name": "person with crown",
        "entities": "",
        "code": "",
        "keywords": [
            "royalty"
        ]
    },
    "🤴": {
        "i": "542",
        "codePoint": "U+1F934",
        "name": "prince",
        "entities": "",
        "code": "",
        "keywords": [
            "king"
        ]
    },
    "👸": {
        "i": "543",
        "codePoint": "U+1F478",
        "name": "princess",
        "entities": "",
        "code": "",
        "keywords": [
            "blond",
            "queen"
        ]
    },
    "👳": {
        "i": "544",
        "codePoint": "U+1F473",
        "name": "man with turban",
        "entities": "",
        "code": "",
        "keywords": [
            "person wearing turban",
            "headdress"
        ]
    },
    "👳‍♂️": {
        "i": "545",
        "codePoint": "U+1F473+200D+2642+FE0F",
        "name": "man wearing turban",
        "entities": "",
        "code": "",
        "keywords": [
            "indian",
            "arabs"
        ]
    },
    "👳‍♀️": {
        "i": "546",
        "codePoint": "U+1F473+200D+2640+FE0F",
        "name": "woman wearing turban",
        "entities": "",
        "code": "",
        "keywords": [
            "hinduism"
        ]
    },
    "👲": {
        "i": "547",
        "codePoint": "U+1F472",
        "name": "man with gua pi mao",
        "entities": "",
        "code": "",
        "keywords": [
            "person with skullcap"
        ]
    },
    "🧕": {
        "i": "548",
        "codePoint": "U+1F9D5",
        "name": "person with headscarf",
        "entities": "",
        "code": "",
        "keywords": [
            "woman with headscarf",
            "hijab",
            "mantilla",
            "tichel"
        ]
    },
    "🤵": {
        "i": "549",
        "codePoint": "U+1F935",
        "name": "man in tuxedo",
        "entities": "",
        "code": "",
        "keywords": [
            "person in tuxedo",
            "couple",
            "groom"
        ]
    },
    "🤵‍♂️": {
        "i": "550",
        "codePoint": "U+1F935+200D+2642+FE0F",
        "name": "man in tuxedo",
        "entities": "",
        "code": "",
        "keywords": [
            "formal"
        ]
    },
    "🤵‍♀️": {
        "i": "551",
        "codePoint": "U+1F935+200D+2640+FE0F",
        "name": "woman in tuxedo",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👰": {
        "i": "552",
        "codePoint": "U+1F470",
        "name": "bride with veil",
        "entities": "",
        "code": "",
        "keywords": [
            "person with veil",
            "bride"
        ]
    },
    "👰‍♂️": {
        "i": "553",
        "codePoint": "U+1F470+200D+2642+FE0F",
        "name": "man with veil",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👰‍♀️": {
        "i": "554",
        "codePoint": "U+1F470+200D+2640+FE0F",
        "name": "woman with veil",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤰": {
        "i": "555",
        "codePoint": "U+1F930",
        "name": "pregnant woman",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🫃": {
        "i": "556",
        "codePoint": "U+1FAC3",
        "name": "pregnant man",
        "entities": "",
        "code": "",
        "keywords": [
            "belly"
        ]
    },
    "🫄": {
        "i": "557",
        "codePoint": "U+1FAC4",
        "name": "pregnant person",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤱": {
        "i": "558",
        "codePoint": "U+1F931",
        "name": "breast-feeding",
        "entities": "",
        "code": "",
        "keywords": [
            "nursing"
        ]
    },
    "👩‍🍼": {
        "i": "559",
        "codePoint": "U+1F469+200D+1F37C",
        "name": "woman feeding baby",
        "entities": "",
        "code": "",
        "keywords": [
            "birth"
        ]
    },
    "👨‍🍼": {
        "i": "560",
        "codePoint": "U+1F468+200D+1F37C",
        "name": "man feeding baby",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🍼": {
        "i": "561",
        "codePoint": "U+1F9D1+200D+1F37C",
        "name": "person feeding baby",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👼": {
        "i": "562",
        "codePoint": "U+1F47C",
        "name": "baby angel",
        "entities": "",
        "code": "",
        "keywords": [
            "heaven"
        ]
    },
    "🎅": {
        "i": "563",
        "codePoint": "U+1F385",
        "name": "father christmas",
        "entities": "",
        "code": "",
        "keywords": [
            "festival"
        ]
    },
    "🤶": {
        "i": "564",
        "codePoint": "U+1F936",
        "name": "mother christmas",
        "entities": "",
        "code": "",
        "keywords": [
            "xmas"
        ]
    },
    "🧑‍🎄": {
        "i": "565",
        "codePoint": "U+1F9D1+200D+1F384",
        "name": "mx claus",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦸": {
        "i": "566",
        "codePoint": "U+1F9B8",
        "name": "superhero",
        "entities": "",
        "code": "",
        "keywords": [
            "marvel"
        ]
    },
    "🦸‍♂️": {
        "i": "567",
        "codePoint": "U+1F9B8+200D+2642+FE0F",
        "name": "man superhero",
        "entities": "",
        "code": "",
        "keywords": [
            "hero",
            "superpowers"
        ]
    },
    "🦸‍♀️": {
        "i": "568",
        "codePoint": "U+1F9B8+200D+2640+FE0F",
        "name": "woman superhero",
        "entities": "",
        "code": "",
        "keywords": [
            "heroine"
        ]
    },
    "🦹": {
        "i": "569",
        "codePoint": "U+1F9B9",
        "name": "supervillain",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦹‍♂️": {
        "i": "570",
        "codePoint": "U+1F9B9+200D+2642+FE0F",
        "name": "man supervillain",
        "entities": "",
        "code": "",
        "keywords": [
            "bad"
        ]
    },
    "🦹‍♀️": {
        "i": "571",
        "codePoint": "U+1F9B9+200D+2640+FE0F",
        "name": "woman supervillain",
        "entities": "",
        "code": "",
        "keywords": [
            "criminal"
        ]
    },
    "🧙": {
        "i": "572",
        "codePoint": "U+1F9D9",
        "name": "mage",
        "entities": "",
        "code": "",
        "keywords": [
            "magic"
        ]
    },
    "🧙‍♂️": {
        "i": "573",
        "codePoint": "U+1F9D9+200D+2642+FE0F",
        "name": "man mage",
        "entities": "",
        "code": "",
        "keywords": [
            "sorcerer"
        ]
    },
    "🧙‍♀️": {
        "i": "574",
        "codePoint": "U+1F9D9+200D+2640+FE0F",
        "name": "woman mage",
        "entities": "",
        "code": "",
        "keywords": [
            "witch"
        ]
    },
    "🧚": {
        "i": "575",
        "codePoint": "U+1F9DA",
        "name": "fairy",
        "entities": "",
        "code": "",
        "keywords": [
            "wings"
        ]
    },
    "🧚‍♂️": {
        "i": "576",
        "codePoint": "U+1F9DA+200D+2642+FE0F",
        "name": "man fairy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧚‍♀️": {
        "i": "577",
        "codePoint": "U+1F9DA+200D+2640+FE0F",
        "name": "woman fairy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧛": {
        "i": "578",
        "codePoint": "U+1F9DB",
        "name": "vampire",
        "entities": "",
        "code": "",
        "keywords": [
            "blood"
        ]
    },
    "🧛‍♂️": {
        "i": "579",
        "codePoint": "U+1F9DB+200D+2642+FE0F",
        "name": "man vampire",
        "entities": "",
        "code": "",
        "keywords": [
            "dracula"
        ]
    },
    "🧛‍♀️": {
        "i": "580",
        "codePoint": "U+1F9DB+200D+2640+FE0F",
        "name": "woman vampire",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧜": {
        "i": "581",
        "codePoint": "U+1F9DC",
        "name": "merperson",
        "entities": "",
        "code": "",
        "keywords": [
            "sea"
        ]
    },
    "🧜‍♂️": {
        "i": "582",
        "codePoint": "U+1F9DC+200D+2642+FE0F",
        "name": "merman",
        "entities": "",
        "code": "",
        "keywords": [
            "triton"
        ]
    },
    "🧜‍♀️": {
        "i": "583",
        "codePoint": "U+1F9DC+200D+2640+FE0F",
        "name": "mermaid",
        "entities": "",
        "code": "",
        "keywords": [
            "merwoman",
            "ariel"
        ]
    },
    "🧝": {
        "i": "584",
        "codePoint": "U+1F9DD",
        "name": "elf",
        "entities": "",
        "code": "",
        "keywords": [
            "magical"
        ]
    },
    "🧝‍♂️": {
        "i": "585",
        "codePoint": "U+1F9DD+200D+2642+FE0F",
        "name": "man elf",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧝‍♀️": {
        "i": "586",
        "codePoint": "U+1F9DD+200D+2640+FE0F",
        "name": "woman elf",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧞": {
        "i": "587",
        "codePoint": "U+1F9DE",
        "name": "genie",
        "entities": "",
        "code": "",
        "keywords": [
            "wishes"
        ]
    },
    "🧞‍♂️": {
        "i": "588",
        "codePoint": "U+1F9DE+200D+2642+FE0F",
        "name": "man genie",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧞‍♀️": {
        "i": "589",
        "codePoint": "U+1F9DE+200D+2640+FE0F",
        "name": "woman genie",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧟": {
        "i": "590",
        "codePoint": "U+1F9DF",
        "name": "zombie",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧟‍♂️": {
        "i": "591",
        "codePoint": "U+1F9DF+200D+2642+FE0F",
        "name": "man zombie",
        "entities": "",
        "code": "",
        "keywords": [
            "undead"
        ]
    },
    "🧟‍♀️": {
        "i": "592",
        "codePoint": "U+1F9DF+200D+2640+FE0F",
        "name": "woman zombie",
        "entities": "",
        "code": "",
        "keywords": [
            "walking dead"
        ]
    },
    "🧌": {
        "i": "593",
        "codePoint": "U+1F9CC",
        "name": "troll",
        "entities": "",
        "code": "",
        "keywords": [
            "mystical"
        ]
    },
    "💆": {
        "i": "594",
        "codePoint": "U+1F486",
        "name": "face massage",
        "entities": "",
        "code": "",
        "keywords": [
            "person getting massage",
            "relax"
        ]
    },
    "💆‍♂️": {
        "i": "595",
        "codePoint": "U+1F486+200D+2642+FE0F",
        "name": "man getting massage",
        "entities": "",
        "code": "",
        "keywords": [
            "head"
        ]
    },
    "💆‍♀️": {
        "i": "596",
        "codePoint": "U+1F486+200D+2640+FE0F",
        "name": "woman getting massage",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💇": {
        "i": "597",
        "codePoint": "U+1F487",
        "name": "haircut",
        "entities": "",
        "code": "",
        "keywords": [
            "person getting haircut"
        ]
    },
    "💇‍♂️": {
        "i": "598",
        "codePoint": "U+1F487+200D+2642+FE0F",
        "name": "man getting haircut",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💇‍♀️": {
        "i": "599",
        "codePoint": "U+1F487+200D+2640+FE0F",
        "name": "woman getting haircut",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚶": {
        "i": "600",
        "codePoint": "U+1F6B6",
        "name": "pedestrian",
        "entities": "",
        "code": "",
        "keywords": [
            "person walking",
            "move"
        ]
    },
    "🚶‍♂️": {
        "i": "601",
        "codePoint": "U+1F6B6+200D+2642+FE0F",
        "name": "man walking",
        "entities": "",
        "code": "",
        "keywords": [
            "feet"
        ]
    },
    "🚶‍♀️": {
        "i": "602",
        "codePoint": "U+1F6B6+200D+2640+FE0F",
        "name": "woman walking",
        "entities": "",
        "code": "",
        "keywords": [
            "steps"
        ]
    },
    "🚶‍➡️": {
        "i": "603",
        "codePoint": "U+1F6B6+200D+27A1+FE0F",
        "name": "person walking facing right",
        "entities": "",
        "code": "",
        "keywords": [
            "peerson"
        ]
    },
    "🚶‍♀️‍➡️": {
        "i": "604",
        "codePoint": "U+1F6B6+200D+2640+FE0F+200D+27A1+FE0F",
        "name": "woman walking facing right",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚶‍♂️‍➡️": {
        "i": "605",
        "codePoint": "U+1F6B6+200D+2642+FE0F+200D+27A1+FE0F",
        "name": "man walking facing right",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧍": {
        "i": "606",
        "codePoint": "U+1F9CD",
        "name": "standing person",
        "entities": "",
        "code": "",
        "keywords": [
            "person standing",
            "still"
        ]
    },
    "🧍‍♂️": {
        "i": "607",
        "codePoint": "U+1F9CD+200D+2642+FE0F",
        "name": "man standing",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧍‍♀️": {
        "i": "608",
        "codePoint": "U+1F9CD+200D+2640+FE0F",
        "name": "woman standing",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧎": {
        "i": "609",
        "codePoint": "U+1F9CE",
        "name": "kneeling person",
        "entities": "",
        "code": "",
        "keywords": [
            "person kneeling",
            "pray"
        ]
    },
    "🧎‍♂️": {
        "i": "610",
        "codePoint": "U+1F9CE+200D+2642+FE0F",
        "name": "man kneeling",
        "entities": "",
        "code": "",
        "keywords": [
            "respectful"
        ]
    },
    "🧎‍♀️": {
        "i": "611",
        "codePoint": "U+1F9CE+200D+2640+FE0F",
        "name": "woman kneeling",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧎‍➡️": {
        "i": "612",
        "codePoint": "U+1F9CE+200D+27A1+FE0F",
        "name": "person kneeling facing right",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧎‍♀️‍➡️": {
        "i": "613",
        "codePoint": "U+1F9CE+200D+2640+FE0F+200D+27A1+FE0F",
        "name": "woman kneeling facing right",
        "entities": "",
        "code": "",
        "keywords": [
            "worship"
        ]
    },
    "🧎‍♂️‍➡️": {
        "i": "614",
        "codePoint": "U+1F9CE+200D+2642+FE0F+200D+27A1+FE0F",
        "name": "man kneeling facing right",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🦯": {
        "i": "615",
        "codePoint": "U+1F9D1+200D+1F9AF",
        "name": "person with white cane",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🦯‍➡️": {
        "i": "616",
        "codePoint": "U+1F9D1+200D+1F9AF+200D+27A1+FE0F",
        "name": "person with white cane facing right",
        "entities": "",
        "code": "",
        "keywords": [
            "walk",
            "walk"
        ]
    },
    "👨‍🦯": {
        "i": "617",
        "codePoint": "U+1F468+200D+1F9AF",
        "name": "man with white cane",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍🦯‍➡️": {
        "i": "618",
        "codePoint": "U+1F468+200D+1F9AF+200D+27A1+FE0F",
        "name": "man with white cane facing right",
        "entities": "",
        "code": "",
        "keywords": [
            "visually impaired"
        ]
    },
    "👩‍🦯": {
        "i": "619",
        "codePoint": "U+1F469+200D+1F9AF",
        "name": "woman with white cane",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍🦯‍➡️": {
        "i": "620",
        "codePoint": "U+1F469+200D+1F9AF+200D+27A1+FE0F",
        "name": "woman with white cane facing right",
        "entities": "",
        "code": "",
        "keywords": [
            "stick"
        ]
    },
    "🧑‍🦼": {
        "i": "621",
        "codePoint": "U+1F9D1+200D+1F9BC",
        "name": "person in motorized wheelchair",
        "entities": "",
        "code": "",
        "keywords": [
            "disability"
        ]
    },
    "🧑‍🦼‍➡️": {
        "i": "622",
        "codePoint": "U+1F9D1+200D+1F9BC+200D+27A1+FE0F",
        "name": "person in motorized wheelchair facing right",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍🦼": {
        "i": "623",
        "codePoint": "U+1F468+200D+1F9BC",
        "name": "man in motorized wheelchair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍🦼‍➡️": {
        "i": "624",
        "codePoint": "U+1F468+200D+1F9BC+200D+27A1+FE0F",
        "name": "man in motorized wheelchair facing right",
        "entities": "",
        "code": "",
        "keywords": [
            "mobility"
        ]
    },
    "👩‍🦼": {
        "i": "625",
        "codePoint": "U+1F469+200D+1F9BC",
        "name": "woman in motorized wheelchair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍🦼‍➡️": {
        "i": "626",
        "codePoint": "U+1F469+200D+1F9BC+200D+27A1+FE0F",
        "name": "woman in motorized wheelchair facing right",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🦽": {
        "i": "627",
        "codePoint": "U+1F9D1+200D+1F9BD",
        "name": "person in manual wheelchair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🦽‍➡️": {
        "i": "628",
        "codePoint": "U+1F9D1+200D+1F9BD+200D+27A1+FE0F",
        "name": "person in manual wheelchair facing right",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍🦽": {
        "i": "629",
        "codePoint": "U+1F468+200D+1F9BD",
        "name": "man in manual wheelchair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍🦽‍➡️": {
        "i": "630",
        "codePoint": "U+1F468+200D+1F9BD+200D+27A1+FE0F",
        "name": "man in manual wheelchair facing right",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍🦽": {
        "i": "631",
        "codePoint": "U+1F469+200D+1F9BD",
        "name": "woman in manual wheelchair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍🦽‍➡️": {
        "i": "632",
        "codePoint": "U+1F469+200D+1F9BD+200D+27A1+FE0F",
        "name": "woman in manual wheelchair facing right",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏃": {
        "i": "633",
        "codePoint": "U+1F3C3",
        "name": "runner",
        "entities": "",
        "code": "",
        "keywords": [
            "person running"
        ]
    },
    "🏃‍♂️": {
        "i": "634",
        "codePoint": "U+1F3C3+200D+2642+FE0F",
        "name": "man running",
        "entities": "",
        "code": "",
        "keywords": [
            "walking",
            "running"
        ]
    },
    "🏃‍♀️": {
        "i": "635",
        "codePoint": "U+1F3C3+200D+2640+FE0F",
        "name": "woman running",
        "entities": "",
        "code": "",
        "keywords": [
            "race"
        ]
    },
    "🏃‍➡️": {
        "i": "636",
        "codePoint": "U+1F3C3+200D+27A1+FE0F",
        "name": "person running facing right",
        "entities": "",
        "code": "",
        "keywords": [
            "jog"
        ]
    },
    "🏃‍♀️‍➡️": {
        "i": "637",
        "codePoint": "U+1F3C3+200D+2640+FE0F+200D+27A1+FE0F",
        "name": "woman running facing right",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏃‍♂️‍➡️": {
        "i": "638",
        "codePoint": "U+1F3C3+200D+2642+FE0F+200D+27A1+FE0F",
        "name": "man running facing right",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💃": {
        "i": "639",
        "codePoint": "U+1F483",
        "name": "dancer",
        "entities": "",
        "code": "",
        "keywords": [
            "woman dancing",
            "fun"
        ]
    },
    "🕺": {
        "i": "640",
        "codePoint": "U+1F57A",
        "name": "man dancing",
        "entities": "",
        "code": "",
        "keywords": [
            "dancer"
        ]
    },
    "🕴️": {
        "i": "641",
        "codePoint": "U+1F574+FE0F",
        "name": "person in suit levitating",
        "entities": "",
        "code": "",
        "keywords": [
            "suit",
            "levitate",
            "hover",
            "jump"
        ]
    },
    "👯": {
        "i": "642",
        "codePoint": "U+1F46F",
        "name": "woman with bunny ears",
        "entities": "",
        "code": "",
        "keywords": [
            "people with bunny ears",
            "perform",
            "costume"
        ]
    },
    "👯‍♂️": {
        "i": "643",
        "codePoint": "U+1F46F+200D+2642+FE0F",
        "name": "men with bunny ears",
        "entities": "",
        "code": "",
        "keywords": [
            "bunny",
            "boys"
        ]
    },
    "👯‍♀️": {
        "i": "644",
        "codePoint": "U+1F46F+200D+2640+FE0F",
        "name": "women with bunny ears",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧖": {
        "i": "645",
        "codePoint": "U+1F9D6",
        "name": "person in steamy room",
        "entities": "",
        "code": "",
        "keywords": [
            "spa"
        ]
    },
    "🧖‍♂️": {
        "i": "646",
        "codePoint": "U+1F9D6+200D+2642+FE0F",
        "name": "man in steamy room",
        "entities": "",
        "code": "",
        "keywords": [
            "steamroom"
        ]
    },
    "🧖‍♀️": {
        "i": "647",
        "codePoint": "U+1F9D6+200D+2640+FE0F",
        "name": "woman in steamy room",
        "entities": "",
        "code": "",
        "keywords": [
            "sauna"
        ]
    },
    "🧗": {
        "i": "648",
        "codePoint": "U+1F9D7",
        "name": "person climbing",
        "entities": "",
        "code": "",
        "keywords": [
            "sport"
        ]
    },
    "🧗‍♂️": {
        "i": "649",
        "codePoint": "U+1F9D7+200D+2642+FE0F",
        "name": "man climbing",
        "entities": "",
        "code": "",
        "keywords": [
            "sports"
        ]
    },
    "🧗‍♀️": {
        "i": "650",
        "codePoint": "U+1F9D7+200D+2640+FE0F",
        "name": "woman climbing",
        "entities": "",
        "code": "",
        "keywords": [
            "hobby"
        ]
    },
    "🤺": {
        "i": "651",
        "codePoint": "U+1F93A",
        "name": "fencer",
        "entities": "",
        "code": "",
        "keywords": [
            "person fencing",
            "fencing",
            "sword"
        ]
    },
    "🏇": {
        "i": "652",
        "codePoint": "U+1F3C7",
        "name": "horse racing",
        "entities": "",
        "code": "",
        "keywords": [
            "betting",
            "competition",
            "gambling"
        ]
    },
    "⛷️": {
        "i": "653",
        "codePoint": "U+26F7+FE0F",
        "name": "skier",
        "entities": "",
        "code": "",
        "keywords": [
            "winter"
        ]
    },
    "🏂": {
        "i": "654",
        "codePoint": "U+1F3C2",
        "name": "snowboarder",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏌️": {
        "i": "655",
        "codePoint": "U+1F3CC+FE0F",
        "name": "person golfing",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏌️‍♂️": {
        "i": "656",
        "codePoint": "U+1F3CC+FE0F+200D+2642+FE0F",
        "name": "man golfing",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏌️‍♀️": {
        "i": "657",
        "codePoint": "U+1F3CC+FE0F+200D+2640+FE0F",
        "name": "woman golfing",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏄": {
        "i": "658",
        "codePoint": "U+1F3C4",
        "name": "surfer",
        "entities": "",
        "code": "",
        "keywords": [
            "person surfing"
        ]
    },
    "🏄‍♂️": {
        "i": "659",
        "codePoint": "U+1F3C4+200D+2642+FE0F",
        "name": "man surfing",
        "entities": "",
        "code": "",
        "keywords": [
            "ocean"
        ]
    },
    "🏄‍♀️": {
        "i": "660",
        "codePoint": "U+1F3C4+200D+2640+FE0F",
        "name": "woman surfing",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚣": {
        "i": "661",
        "codePoint": "U+1F6A3",
        "name": "rowboat",
        "entities": "",
        "code": "",
        "keywords": [
            "person rowing boat"
        ]
    },
    "🚣‍♂️": {
        "i": "662",
        "codePoint": "U+1F6A3+200D+2642+FE0F",
        "name": "man rowing boat",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚣‍♀️": {
        "i": "663",
        "codePoint": "U+1F6A3+200D+2640+FE0F",
        "name": "woman rowing boat",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏊": {
        "i": "664",
        "codePoint": "U+1F3CA",
        "name": "swimmer",
        "entities": "",
        "code": "",
        "keywords": [
            "person swimming",
            "pool"
        ]
    },
    "🏊‍♂️": {
        "i": "665",
        "codePoint": "U+1F3CA+200D+2642+FE0F",
        "name": "man swimming",
        "entities": "",
        "code": "",
        "keywords": [
            "athlete"
        ]
    },
    "🏊‍♀️": {
        "i": "666",
        "codePoint": "U+1F3CA+200D+2640+FE0F",
        "name": "woman swimming",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⛹️": {
        "i": "667",
        "codePoint": "U+26F9+FE0F",
        "name": "person bouncing ball",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⛹️‍♂️": {
        "i": "668",
        "codePoint": "U+26F9+FE0F+200D+2642+FE0F",
        "name": "man bouncing ball",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⛹️‍♀️": {
        "i": "669",
        "codePoint": "U+26F9+FE0F+200D+2640+FE0F",
        "name": "woman bouncing ball",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏋️": {
        "i": "670",
        "codePoint": "U+1F3CB+FE0F",
        "name": "person lifting weights",
        "entities": "",
        "code": "",
        "keywords": [
            "training"
        ]
    },
    "🏋️‍♂️": {
        "i": "671",
        "codePoint": "U+1F3CB+FE0F+200D+2642+FE0F",
        "name": "man lifting weights",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏋️‍♀️": {
        "i": "672",
        "codePoint": "U+1F3CB+FE0F+200D+2640+FE0F",
        "name": "woman lifting weights",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚴": {
        "i": "673",
        "codePoint": "U+1F6B4",
        "name": "bicyclist",
        "entities": "",
        "code": "",
        "keywords": [
            "person biking",
            "bike"
        ]
    },
    "🚴‍♂️": {
        "i": "674",
        "codePoint": "U+1F6B4+200D+2642+FE0F",
        "name": "man biking",
        "entities": "",
        "code": "",
        "keywords": [
            "cyclist"
        ]
    },
    "🚴‍♀️": {
        "i": "675",
        "codePoint": "U+1F6B4+200D+2640+FE0F",
        "name": "woman biking",
        "entities": "",
        "code": "",
        "keywords": [
            "hipster"
        ]
    },
    "🚵": {
        "i": "676",
        "codePoint": "U+1F6B5",
        "name": "mountain bicyclist",
        "entities": "",
        "code": "",
        "keywords": [
            "person mountain biking"
        ]
    },
    "🚵‍♂️": {
        "i": "677",
        "codePoint": "U+1F6B5+200D+2642+FE0F",
        "name": "man mountain biking",
        "entities": "",
        "code": "",
        "keywords": [
            "transportation"
        ]
    },
    "🚵‍♀️": {
        "i": "678",
        "codePoint": "U+1F6B5+200D+2640+FE0F",
        "name": "woman mountain biking",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤸": {
        "i": "679",
        "codePoint": "U+1F938",
        "name": "person doing cartwheel",
        "entities": "",
        "code": "",
        "keywords": [
            "person cartwheeling",
            "gymnastic"
        ]
    },
    "🤸‍♂️": {
        "i": "680",
        "codePoint": "U+1F938+200D+2642+FE0F",
        "name": "man cartwheeling",
        "entities": "",
        "code": "",
        "keywords": [
            "gymnastics"
        ]
    },
    "🤸‍♀️": {
        "i": "681",
        "codePoint": "U+1F938+200D+2640+FE0F",
        "name": "woman cartwheeling",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤼": {
        "i": "682",
        "codePoint": "U+1F93C",
        "name": "wrestlers",
        "entities": "",
        "code": "",
        "keywords": [
            "people wrestling"
        ]
    },
    "🤼‍♂️": {
        "i": "683",
        "codePoint": "U+1F93C+200D+2642+FE0F",
        "name": "men wrestling",
        "entities": "",
        "code": "",
        "keywords": [
            "wrestlers"
        ]
    },
    "🤼‍♀️": {
        "i": "684",
        "codePoint": "U+1F93C+200D+2640+FE0F",
        "name": "women wrestling",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤽": {
        "i": "685",
        "codePoint": "U+1F93D",
        "name": "water polo",
        "entities": "",
        "code": "",
        "keywords": [
            "person playing water polo"
        ]
    },
    "🤽‍♂️": {
        "i": "686",
        "codePoint": "U+1F93D+200D+2642+FE0F",
        "name": "man playing water polo",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤽‍♀️": {
        "i": "687",
        "codePoint": "U+1F93D+200D+2640+FE0F",
        "name": "woman playing water polo",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤾": {
        "i": "688",
        "codePoint": "U+1F93E",
        "name": "handball",
        "entities": "",
        "code": "",
        "keywords": [
            "person playing handball"
        ]
    },
    "🤾‍♂️": {
        "i": "689",
        "codePoint": "U+1F93E+200D+2642+FE0F",
        "name": "man playing handball",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤾‍♀️": {
        "i": "690",
        "codePoint": "U+1F93E+200D+2640+FE0F",
        "name": "woman playing handball",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🤹": {
        "i": "691",
        "codePoint": "U+1F939",
        "name": "juggling",
        "entities": "",
        "code": "",
        "keywords": [
            "person juggling",
            "performance"
        ]
    },
    "🤹‍♂️": {
        "i": "692",
        "codePoint": "U+1F939+200D+2642+FE0F",
        "name": "man juggling",
        "entities": "",
        "code": "",
        "keywords": [
            "juggle",
            "multitask"
        ]
    },
    "🤹‍♀️": {
        "i": "693",
        "codePoint": "U+1F939+200D+2640+FE0F",
        "name": "woman juggling",
        "entities": "",
        "code": "",
        "keywords": [
            "skill"
        ]
    },
    "🧘": {
        "i": "694",
        "codePoint": "U+1F9D8",
        "name": "person in lotus position",
        "entities": "",
        "code": "",
        "keywords": [
            "meditate"
        ]
    },
    "🧘‍♂️": {
        "i": "695",
        "codePoint": "U+1F9D8+200D+2642+FE0F",
        "name": "man in lotus position",
        "entities": "",
        "code": "",
        "keywords": [
            "meditation",
            "serenity",
            "mindfulness"
        ]
    },
    "🧘‍♀️": {
        "i": "696",
        "codePoint": "U+1F9D8+200D+2640+FE0F",
        "name": "woman in lotus position",
        "entities": "",
        "code": "",
        "keywords": [
            "yoga",
            "zen"
        ]
    },
    "🛀": {
        "i": "697",
        "codePoint": "U+1F6C0",
        "name": "bath",
        "entities": "",
        "code": "",
        "keywords": [
            "person taking bath",
            "clean"
        ]
    },
    "🛌": {
        "i": "698",
        "codePoint": "U+1F6CC",
        "name": "sleeping accommodation",
        "entities": "",
        "code": "",
        "keywords": [
            "person in bed"
        ]
    },
    "🧑‍🤝‍🧑": {
        "i": "699",
        "codePoint": "U+1F9D1+200D+1F91D+200D+1F9D1",
        "name": "people holding hands",
        "entities": "",
        "code": "",
        "keywords": [
            "friendship"
        ]
    },
    "👭": {
        "i": "700",
        "codePoint": "U+1F46D",
        "name": "two women holding hands",
        "entities": "",
        "code": "",
        "keywords": [
            "women holding hands",
            "pair"
        ]
    },
    "👫": {
        "i": "701",
        "codePoint": "U+1F46B",
        "name": "man and woman holding hands",
        "entities": "",
        "code": "",
        "keywords": [
            "woman and man holding hands",
            "people"
        ]
    },
    "👬": {
        "i": "702",
        "codePoint": "U+1F46C",
        "name": "two men holding hands",
        "entities": "",
        "code": "",
        "keywords": [
            "men holding hands",
            "bromance"
        ]
    },
    "💏": {
        "i": "703",
        "codePoint": "U+1F48F",
        "name": "kiss",
        "entities": "",
        "code": "",
        "keywords": [
            "dating"
        ]
    },
    "👩‍❤️‍💋‍👨": {
        "i": "704",
        "codePoint": "U+1F469+200D+2764+FE0F+200D+1F48B+200D+1F468",
        "name": "kiss woman, man",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍❤️‍💋‍👨": {
        "i": "705",
        "codePoint": "U+1F468+200D+2764+FE0F+200D+1F48B+200D+1F468",
        "name": "kiss man, man",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍❤️‍💋‍👩": {
        "i": "706",
        "codePoint": "U+1F469+200D+2764+FE0F+200D+1F48B+200D+1F469",
        "name": "kiss woman, woman",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💑": {
        "i": "707",
        "codePoint": "U+1F491",
        "name": "couple with heart",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍❤️‍👨": {
        "i": "708",
        "codePoint": "U+1F469+200D+2764+FE0F+200D+1F468",
        "name": "couple with heart woman, man",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍❤️‍👨": {
        "i": "709",
        "codePoint": "U+1F468+200D+2764+FE0F+200D+1F468",
        "name": "couple with heart man, man",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍❤️‍👩": {
        "i": "710",
        "codePoint": "U+1F469+200D+2764+FE0F+200D+1F469",
        "name": "couple with heart woman, woman",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍👩‍👦": {
        "i": "711",
        "codePoint": "U+1F468+200D+1F469+200D+1F466",
        "name": "family man, woman, boy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍👩‍👧": {
        "i": "712",
        "codePoint": "U+1F468+200D+1F469+200D+1F467",
        "name": "family man, woman, girl",
        "entities": "",
        "code": "",
        "keywords": [
            "home"
        ]
    },
    "👨‍👩‍👧‍👦": {
        "i": "713",
        "codePoint": "U+1F468+200D+1F469+200D+1F467+200D+1F466",
        "name": "family man, woman, girl, boy",
        "entities": "",
        "code": "",
        "keywords": [
            "parents"
        ]
    },
    "👨‍👩‍👦‍👦": {
        "i": "714",
        "codePoint": "U+1F468+200D+1F469+200D+1F466+200D+1F466",
        "name": "family man, woman, boy, boy",
        "entities": "",
        "code": "",
        "keywords": [
            "children"
        ]
    },
    "👨‍👩‍👧‍👧": {
        "i": "715",
        "codePoint": "U+1F468+200D+1F469+200D+1F467+200D+1F467",
        "name": "family man, woman, girl, girl",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍👨‍👦": {
        "i": "716",
        "codePoint": "U+1F468+200D+1F468+200D+1F466",
        "name": "family man, man, boy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍👨‍👧": {
        "i": "717",
        "codePoint": "U+1F468+200D+1F468+200D+1F467",
        "name": "family man, man, girl",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍👨‍👧‍👦": {
        "i": "718",
        "codePoint": "U+1F468+200D+1F468+200D+1F467+200D+1F466",
        "name": "family man, man, girl, boy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍👨‍👦‍👦": {
        "i": "719",
        "codePoint": "U+1F468+200D+1F468+200D+1F466+200D+1F466",
        "name": "family man, man, boy, boy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍👨‍👧‍👧": {
        "i": "720",
        "codePoint": "U+1F468+200D+1F468+200D+1F467+200D+1F467",
        "name": "family man, man, girl, girl",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍👩‍👦": {
        "i": "721",
        "codePoint": "U+1F469+200D+1F469+200D+1F466",
        "name": "family woman, woman, boy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍👩‍👧": {
        "i": "722",
        "codePoint": "U+1F469+200D+1F469+200D+1F467",
        "name": "family woman, woman, girl",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍👩‍👧‍👦": {
        "i": "723",
        "codePoint": "U+1F469+200D+1F469+200D+1F467+200D+1F466",
        "name": "family woman, woman, girl, boy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍👩‍👦‍👦": {
        "i": "724",
        "codePoint": "U+1F469+200D+1F469+200D+1F466+200D+1F466",
        "name": "family woman, woman, boy, boy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍👩‍👧‍👧": {
        "i": "725",
        "codePoint": "U+1F469+200D+1F469+200D+1F467+200D+1F467",
        "name": "family woman, woman, girl, girl",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍👦": {
        "i": "726",
        "codePoint": "U+1F468+200D+1F466",
        "name": "family man, boy",
        "entities": "",
        "code": "",
        "keywords": [
            "parent"
        ]
    },
    "👨‍👦‍👦": {
        "i": "727",
        "codePoint": "U+1F468+200D+1F466+200D+1F466",
        "name": "family man, boy, boy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍👧": {
        "i": "728",
        "codePoint": "U+1F468+200D+1F467",
        "name": "family man, girl",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍👧‍👦": {
        "i": "729",
        "codePoint": "U+1F468+200D+1F467+200D+1F466",
        "name": "family man, girl, boy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👨‍👧‍👧": {
        "i": "730",
        "codePoint": "U+1F468+200D+1F467+200D+1F467",
        "name": "family man, girl, girl",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍👦": {
        "i": "731",
        "codePoint": "U+1F469+200D+1F466",
        "name": "family woman, boy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍👦‍👦": {
        "i": "732",
        "codePoint": "U+1F469+200D+1F466+200D+1F466",
        "name": "family woman, boy, boy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍👧": {
        "i": "733",
        "codePoint": "U+1F469+200D+1F467",
        "name": "family woman, girl",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍👧‍👦": {
        "i": "734",
        "codePoint": "U+1F469+200D+1F467+200D+1F466",
        "name": "family woman, girl, boy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👩‍👧‍👧": {
        "i": "735",
        "codePoint": "U+1F469+200D+1F467+200D+1F467",
        "name": "family woman, girl, girl",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🗣️": {
        "i": "736",
        "codePoint": "U+1F5E3+FE0F",
        "name": "speaking head",
        "entities": "",
        "code": "",
        "keywords": [
            "user",
            "say"
        ]
    },
    "👤": {
        "i": "737",
        "codePoint": "U+1F464",
        "name": "bust in silhouette",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👥": {
        "i": "738",
        "codePoint": "U+1F465",
        "name": "busts in silhouette",
        "entities": "",
        "code": "",
        "keywords": [
            "group"
        ]
    },
    "🫂": {
        "i": "739",
        "codePoint": "U+1FAC2",
        "name": "people hugging",
        "entities": "",
        "code": "",
        "keywords": [
            "care"
        ]
    },
    "👪": {
        "i": "740",
        "codePoint": "U+1F46A",
        "name": "family",
        "entities": "",
        "code": "",
        "keywords": [
            "mom",
            "mother"
        ]
    },
    "🧑‍🧑‍🧒": {
        "i": "741",
        "codePoint": "U+1F9D1+200D+1F9D1+200D+1F9D2",
        "name": "family adult, adult, child",
        "entities": "",
        "code": "",
        "keywords": [
            "kid"
        ]
    },
    "🧑‍🧑‍🧒‍🧒": {
        "i": "742",
        "codePoint": "U+1F9D1+200D+1F9D1+200D+1F9D2+200D+1F9D2",
        "name": "family adult, adult, child, child",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🧒": {
        "i": "743",
        "codePoint": "U+1F9D1+200D+1F9D2",
        "name": "family adult, child",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧑‍🧒‍🧒": {
        "i": "744",
        "codePoint": "U+1F9D1+200D+1F9D2+200D+1F9D2",
        "name": "family adult, child, child",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👣": {
        "i": "745",
        "codePoint": "U+1F463",
        "name": "footprints",
        "entities": "",
        "code": "",
        "keywords": [
            "tracking"
        ]
    },
    "🐵": {
        "i": "746",
        "codePoint": "U+1F435",
        "name": "monkey face",
        "entities": "",
        "code": "",
        "keywords": [
            "circus"
        ]
    },
    "🐒": {
        "i": "747",
        "codePoint": "U+1F412",
        "name": "monkey",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦍": {
        "i": "748",
        "codePoint": "U+1F98D",
        "name": "gorilla",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦧": {
        "i": "749",
        "codePoint": "U+1F9A7",
        "name": "orangutan",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐶": {
        "i": "750",
        "codePoint": "U+1F436",
        "name": "dog face",
        "entities": "",
        "code": "",
        "keywords": [
            "friend",
            "woof",
            "puppy"
        ]
    },
    "🐕": {
        "i": "751",
        "codePoint": "U+1F415",
        "name": "dog",
        "entities": "",
        "code": "",
        "keywords": [
            "doge",
            "faithful"
        ]
    },
    "🦮": {
        "i": "752",
        "codePoint": "U+1F9AE",
        "name": "guide dog",
        "entities": "",
        "code": "",
        "keywords": [
            "blind"
        ]
    },
    "🐕‍🦺": {
        "i": "753",
        "codePoint": "U+1F415+200D+1F9BA",
        "name": "service dog",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐩": {
        "i": "754",
        "codePoint": "U+1F429",
        "name": "poodle",
        "entities": "",
        "code": "",
        "keywords": [
            "101"
        ]
    },
    "🐺": {
        "i": "755",
        "codePoint": "U+1F43A",
        "name": "wolf face",
        "entities": "",
        "code": "",
        "keywords": [
            "wolf",
            "wild"
        ]
    },
    "🦊": {
        "i": "756",
        "codePoint": "U+1F98A",
        "name": "fox face",
        "entities": "",
        "code": "",
        "keywords": [
            "fox"
        ]
    },
    "🦝": {
        "i": "757",
        "codePoint": "U+1F99D",
        "name": "raccoon",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐱": {
        "i": "758",
        "codePoint": "U+1F431",
        "name": "cat face",
        "entities": "",
        "code": "",
        "keywords": [
            "meow",
            "kitten"
        ]
    },
    "🐈": {
        "i": "759",
        "codePoint": "U+1F408",
        "name": "cat",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐈‍⬛": {
        "i": "760",
        "codePoint": "U+1F408+200D+2B1B",
        "name": "black cat",
        "entities": "",
        "code": "",
        "keywords": [
            "superstition"
        ]
    },
    "🦁": {
        "i": "761",
        "codePoint": "U+1F981",
        "name": "lion face",
        "entities": "",
        "code": "",
        "keywords": [
            "lion"
        ]
    },
    "🐯": {
        "i": "762",
        "codePoint": "U+1F42F",
        "name": "tiger face",
        "entities": "",
        "code": "",
        "keywords": [
            "roar"
        ]
    },
    "🐅": {
        "i": "763",
        "codePoint": "U+1F405",
        "name": "tiger",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐆": {
        "i": "764",
        "codePoint": "U+1F406",
        "name": "leopard",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐴": {
        "i": "765",
        "codePoint": "U+1F434",
        "name": "horse face",
        "entities": "",
        "code": "",
        "keywords": [
            "brown"
        ]
    },
    "🫎": {
        "i": "766",
        "codePoint": "U+1FACE",
        "name": "moose",
        "entities": "",
        "code": "",
        "keywords": [
            "shrek",
            "canada",
            "sweden",
            "sven"
        ]
    },
    "🫏": {
        "i": "767",
        "codePoint": "U+1FACF",
        "name": "donkey",
        "entities": "",
        "code": "",
        "keywords": [
            "eeyore",
            "mule"
        ]
    },
    "🐎": {
        "i": "768",
        "codePoint": "U+1F40E",
        "name": "horse",
        "entities": "",
        "code": "",
        "keywords": [
            "gamble",
            "luck"
        ]
    },
    "🦄": {
        "i": "769",
        "codePoint": "U+1F984",
        "name": "unicorn face",
        "entities": "",
        "code": "",
        "keywords": [
            "unicorn"
        ]
    },
    "🦓": {
        "i": "770",
        "codePoint": "U+1F993",
        "name": "zebra face",
        "entities": "",
        "code": "",
        "keywords": [
            "zebra",
            "stripes",
            "safari"
        ]
    },
    "🦌": {
        "i": "771",
        "codePoint": "U+1F98C",
        "name": "deer",
        "entities": "",
        "code": "",
        "keywords": [
            "venison"
        ]
    },
    "🦬": {
        "i": "772",
        "codePoint": "U+1F9AC",
        "name": "bison",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐮": {
        "i": "773",
        "codePoint": "U+1F42E",
        "name": "cow face",
        "entities": "",
        "code": "",
        "keywords": [
            "beef",
            "milk"
        ]
    },
    "🐂": {
        "i": "774",
        "codePoint": "U+1F402",
        "name": "ox",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐃": {
        "i": "775",
        "codePoint": "U+1F403",
        "name": "water buffalo",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐄": {
        "i": "776",
        "codePoint": "U+1F404",
        "name": "cow",
        "entities": "",
        "code": "",
        "keywords": [
            "moo"
        ]
    },
    "🐷": {
        "i": "777",
        "codePoint": "U+1F437",
        "name": "pig face",
        "entities": "",
        "code": "",
        "keywords": [
            "oink"
        ]
    },
    "🐖": {
        "i": "778",
        "codePoint": "U+1F416",
        "name": "pig",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐗": {
        "i": "779",
        "codePoint": "U+1F417",
        "name": "boar",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐽": {
        "i": "780",
        "codePoint": "U+1F43D",
        "name": "pig nose",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐏": {
        "i": "781",
        "codePoint": "U+1F40F",
        "name": "ram",
        "entities": "",
        "code": "",
        "keywords": [
            "sheep"
        ]
    },
    "🐑": {
        "i": "782",
        "codePoint": "U+1F411",
        "name": "sheep",
        "entities": "",
        "code": "",
        "keywords": [
            "ewe",
            "wool",
            "shipit"
        ]
    },
    "🐐": {
        "i": "783",
        "codePoint": "U+1F410",
        "name": "goat",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐪": {
        "i": "784",
        "codePoint": "U+1F42A",
        "name": "dromedary camel",
        "entities": "",
        "code": "",
        "keywords": [
            "camel",
            "hump"
        ]
    },
    "🐫": {
        "i": "785",
        "codePoint": "U+1F42B",
        "name": "bactrian camel",
        "entities": "",
        "code": "",
        "keywords": [
            "two-hump camel"
        ]
    },
    "🦙": {
        "i": "786",
        "codePoint": "U+1F999",
        "name": "llama",
        "entities": "",
        "code": "",
        "keywords": [
            "alpaca"
        ]
    },
    "🦒": {
        "i": "787",
        "codePoint": "U+1F992",
        "name": "giraffe face",
        "entities": "",
        "code": "",
        "keywords": [
            "giraffe",
            "spots"
        ]
    },
    "🐘": {
        "i": "788",
        "codePoint": "U+1F418",
        "name": "elephant",
        "entities": "",
        "code": "",
        "keywords": [
            "th"
        ]
    },
    "🦣": {
        "i": "789",
        "codePoint": "U+1F9A3",
        "name": "mammoth",
        "entities": "",
        "code": "",
        "keywords": [
            "tusks"
        ]
    },
    "🦏": {
        "i": "790",
        "codePoint": "U+1F98F",
        "name": "rhinoceros",
        "entities": "",
        "code": "",
        "keywords": [
            "horn"
        ]
    },
    "🦛": {
        "i": "791",
        "codePoint": "U+1F99B",
        "name": "hippopotamus",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐭": {
        "i": "792",
        "codePoint": "U+1F42D",
        "name": "mouse face",
        "entities": "",
        "code": "",
        "keywords": [
            "rodent"
        ]
    },
    "🐁": {
        "i": "793",
        "codePoint": "U+1F401",
        "name": "mouse",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐀": {
        "i": "794",
        "codePoint": "U+1F400",
        "name": "rat",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐹": {
        "i": "795",
        "codePoint": "U+1F439",
        "name": "hamster face",
        "entities": "",
        "code": "",
        "keywords": [
            "hamster"
        ]
    },
    "🐰": {
        "i": "796",
        "codePoint": "U+1F430",
        "name": "rabbit face",
        "entities": "",
        "code": "",
        "keywords": [
            "pet"
        ]
    },
    "🐇": {
        "i": "797",
        "codePoint": "U+1F407",
        "name": "rabbit",
        "entities": "",
        "code": "",
        "keywords": [
            "spring"
        ]
    },
    "🐿️": {
        "i": "798",
        "codePoint": "U+1F43F+FE0F",
        "name": "chipmunk",
        "entities": "",
        "code": "",
        "keywords": [
            "squirrel"
        ]
    },
    "🦫": {
        "i": "799",
        "codePoint": "U+1F9AB",
        "name": "beaver",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦔": {
        "i": "800",
        "codePoint": "U+1F994",
        "name": "hedgehog",
        "entities": "",
        "code": "",
        "keywords": [
            "spiny"
        ]
    },
    "🦇": {
        "i": "801",
        "codePoint": "U+1F987",
        "name": "bat",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐻": {
        "i": "802",
        "codePoint": "U+1F43B",
        "name": "bear face",
        "entities": "",
        "code": "",
        "keywords": [
            "bear"
        ]
    },
    "🐻‍❄️": {
        "i": "803",
        "codePoint": "U+1F43B+200D+2744+FE0F",
        "name": "polar bear",
        "entities": "",
        "code": "",
        "keywords": [
            "arctic"
        ]
    },
    "🐨": {
        "i": "804",
        "codePoint": "U+1F428",
        "name": "koala",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐼": {
        "i": "805",
        "codePoint": "U+1F43C",
        "name": "panda face",
        "entities": "",
        "code": "",
        "keywords": [
            "panda"
        ]
    },
    "🦥": {
        "i": "806",
        "codePoint": "U+1F9A5",
        "name": "sloth",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦦": {
        "i": "807",
        "codePoint": "U+1F9A6",
        "name": "otter",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦨": {
        "i": "808",
        "codePoint": "U+1F9A8",
        "name": "skunk",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦘": {
        "i": "809",
        "codePoint": "U+1F998",
        "name": "kangaroo",
        "entities": "",
        "code": "",
        "keywords": [
            "australia",
            "joey",
            "hop",
            "marsupial"
        ]
    },
    "🦡": {
        "i": "810",
        "codePoint": "U+1F9A1",
        "name": "badger",
        "entities": "",
        "code": "",
        "keywords": [
            "honey"
        ]
    },
    "🐾": {
        "i": "811",
        "codePoint": "U+1F43E",
        "name": "paw prints",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦃": {
        "i": "812",
        "codePoint": "U+1F983",
        "name": "turkey",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐔": {
        "i": "813",
        "codePoint": "U+1F414",
        "name": "chicken",
        "entities": "",
        "code": "",
        "keywords": [
            "cluck"
        ]
    },
    "🐓": {
        "i": "814",
        "codePoint": "U+1F413",
        "name": "rooster",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐣": {
        "i": "815",
        "codePoint": "U+1F423",
        "name": "hatching chick",
        "entities": "",
        "code": "",
        "keywords": [
            "born"
        ]
    },
    "🐤": {
        "i": "816",
        "codePoint": "U+1F424",
        "name": "baby chick",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐥": {
        "i": "817",
        "codePoint": "U+1F425",
        "name": "front-facing baby chick",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐦": {
        "i": "818",
        "codePoint": "U+1F426",
        "name": "bird",
        "entities": "",
        "code": "",
        "keywords": [
            "tweet"
        ]
    },
    "🐧": {
        "i": "819",
        "codePoint": "U+1F427",
        "name": "penguin",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🕊️": {
        "i": "820",
        "codePoint": "U+1F54A+FE0F",
        "name": "dove",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦅": {
        "i": "821",
        "codePoint": "U+1F985",
        "name": "eagle",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦆": {
        "i": "822",
        "codePoint": "U+1F986",
        "name": "duck",
        "entities": "",
        "code": "",
        "keywords": [
            "mallard"
        ]
    },
    "🦢": {
        "i": "823",
        "codePoint": "U+1F9A2",
        "name": "swan",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦉": {
        "i": "824",
        "codePoint": "U+1F989",
        "name": "owl",
        "entities": "",
        "code": "",
        "keywords": [
            "hoot"
        ]
    },
    "🦤": {
        "i": "825",
        "codePoint": "U+1F9A4",
        "name": "dodo",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🪶": {
        "i": "826",
        "codePoint": "U+1FAB6",
        "name": "feather",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦩": {
        "i": "827",
        "codePoint": "U+1F9A9",
        "name": "flamingo",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦚": {
        "i": "828",
        "codePoint": "U+1F99A",
        "name": "peacock",
        "entities": "",
        "code": "",
        "keywords": [
            "peahen"
        ]
    },
    "🦜": {
        "i": "829",
        "codePoint": "U+1F99C",
        "name": "parrot",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🪽": {
        "i": "830",
        "codePoint": "U+1FABD",
        "name": "wing",
        "entities": "",
        "code": "",
        "keywords": [
            "birds",
            "flying"
        ]
    },
    "🐦‍⬛": {
        "i": "831",
        "codePoint": "U+1F426+200D+2B1B",
        "name": "black bird",
        "entities": "",
        "code": "",
        "keywords": [
            "crow"
        ]
    },
    "🪿": {
        "i": "832",
        "codePoint": "U+1FABF",
        "name": "goose",
        "entities": "",
        "code": "",
        "keywords": [
            "silly",
            "jemima",
            "goosebumps"
        ]
    },
    "🐦‍🔥": {
        "i": "833",
        "codePoint": "U+1F426+200D+1F525",
        "name": "phoenix",
        "entities": "",
        "code": "",
        "keywords": [
            "immortal",
            "mythtical",
            "reborn"
        ]
    },
    "🐸": {
        "i": "834",
        "codePoint": "U+1F438",
        "name": "frog face",
        "entities": "",
        "code": "",
        "keywords": [
            "frog",
            "croak",
            "toad"
        ]
    },
    "🐊": {
        "i": "835",
        "codePoint": "U+1F40A",
        "name": "crocodile",
        "entities": "",
        "code": "",
        "keywords": [
            "reptile",
            "alligator"
        ]
    },
    "🐢": {
        "i": "836",
        "codePoint": "U+1F422",
        "name": "turtle",
        "entities": "",
        "code": "",
        "keywords": [
            "slow",
            "tortoise"
        ]
    },
    "🦎": {
        "i": "837",
        "codePoint": "U+1F98E",
        "name": "lizard",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐍": {
        "i": "838",
        "codePoint": "U+1F40D",
        "name": "snake",
        "entities": "",
        "code": "",
        "keywords": [
            "hiss",
            "python"
        ]
    },
    "🐲": {
        "i": "839",
        "codePoint": "U+1F432",
        "name": "dragon face",
        "entities": "",
        "code": "",
        "keywords": [
            "myth"
        ]
    },
    "🐉": {
        "i": "840",
        "codePoint": "U+1F409",
        "name": "dragon",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦕": {
        "i": "841",
        "codePoint": "U+1F995",
        "name": "sauropod",
        "entities": "",
        "code": "",
        "keywords": [
            "dinosaur",
            "brachiosaurus",
            "brontosaurus",
            "diplodocus"
        ]
    },
    "🦖": {
        "i": "842",
        "codePoint": "U+1F996",
        "name": "t-rex",
        "entities": "",
        "code": "",
        "keywords": [
            "T-Rex",
            "tyrannosaurus",
            "extinct"
        ]
    },
    "🐳": {
        "i": "843",
        "codePoint": "U+1F433",
        "name": "spouting whale",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐋": {
        "i": "844",
        "codePoint": "U+1F40B",
        "name": "whale",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐬": {
        "i": "845",
        "codePoint": "U+1F42C",
        "name": "dolphin",
        "entities": "",
        "code": "",
        "keywords": [
            "flipper",
            "fins"
        ]
    },
    "🦭": {
        "i": "846",
        "codePoint": "U+1F9AD",
        "name": "seal",
        "entities": "",
        "code": "",
        "keywords": [
            "creature"
        ]
    },
    "🐟": {
        "i": "847",
        "codePoint": "U+1F41F",
        "name": "fish",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐠": {
        "i": "848",
        "codePoint": "U+1F420",
        "name": "tropical fish",
        "entities": "",
        "code": "",
        "keywords": [
            "swim",
            "nemo"
        ]
    },
    "🐡": {
        "i": "849",
        "codePoint": "U+1F421",
        "name": "blowfish",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦈": {
        "i": "850",
        "codePoint": "U+1F988",
        "name": "shark",
        "entities": "",
        "code": "",
        "keywords": [
            "jaws"
        ]
    },
    "🐙": {
        "i": "851",
        "codePoint": "U+1F419",
        "name": "octopus",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐚": {
        "i": "852",
        "codePoint": "U+1F41A",
        "name": "spiral shell",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🪸": {
        "i": "853",
        "codePoint": "U+1FAB8",
        "name": "coral",
        "entities": "",
        "code": "",
        "keywords": [
            "reef"
        ]
    },
    "🪼": {
        "i": "854",
        "codePoint": "U+1FABC",
        "name": "jellyfish",
        "entities": "",
        "code": "",
        "keywords": [
            "sting",
            "tentacles"
        ]
    },
    "🐌": {
        "i": "855",
        "codePoint": "U+1F40C",
        "name": "snail",
        "entities": "",
        "code": "",
        "keywords": [
            "shell"
        ]
    },
    "🦋": {
        "i": "856",
        "codePoint": "U+1F98B",
        "name": "butterfly",
        "entities": "",
        "code": "",
        "keywords": [
            "insect",
            "caterpillar"
        ]
    },
    "🐛": {
        "i": "857",
        "codePoint": "U+1F41B",
        "name": "bug",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐜": {
        "i": "858",
        "codePoint": "U+1F41C",
        "name": "ant",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐝": {
        "i": "859",
        "codePoint": "U+1F41D",
        "name": "honeybee",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🪲": {
        "i": "860",
        "codePoint": "U+1FAB2",
        "name": "beetle",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🐞": {
        "i": "861",
        "codePoint": "U+1F41E",
        "name": "lady beetle",
        "entities": "",
        "code": "",
        "keywords": [
            "ladybug"
        ]
    },
    "🦗": {
        "i": "862",
        "codePoint": "U+1F997",
        "name": "cricket",
        "entities": "",
        "code": "",
        "keywords": [
            "chirp"
        ]
    },
    "🪳": {
        "i": "863",
        "codePoint": "U+1FAB3",
        "name": "cockroach",
        "entities": "",
        "code": "",
        "keywords": [
            "pests"
        ]
    },
    "🕷️": {
        "i": "864",
        "codePoint": "U+1F577+FE0F",
        "name": "spider",
        "entities": "",
        "code": "",
        "keywords": [
            "arachnid"
        ]
    },
    "🕸️": {
        "i": "865",
        "codePoint": "U+1F578+FE0F",
        "name": "spider web",
        "entities": "",
        "code": "",
        "keywords": [
            "silk"
        ]
    },
    "🦂": {
        "i": "866",
        "codePoint": "U+1F982",
        "name": "scorpion",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦟": {
        "i": "867",
        "codePoint": "U+1F99F",
        "name": "mosquito",
        "entities": "",
        "code": "",
        "keywords": [
            "malaria"
        ]
    },
    "🪰": {
        "i": "868",
        "codePoint": "U+1FAB0",
        "name": "fly",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🪱": {
        "i": "869",
        "codePoint": "U+1FAB1",
        "name": "worm",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦠": {
        "i": "870",
        "codePoint": "U+1F9A0",
        "name": "microbe",
        "entities": "",
        "code": "",
        "keywords": [
            "amoeba",
            "germs",
            "virus"
        ]
    },
    "💐": {
        "i": "871",
        "codePoint": "U+1F490",
        "name": "bouquet",
        "entities": "",
        "code": "",
        "keywords": [
            "flowers"
        ]
    },
    "🌸": {
        "i": "872",
        "codePoint": "U+1F338",
        "name": "cherry blossom",
        "entities": "",
        "code": "",
        "keywords": [
            "plant"
        ]
    },
    "💮": {
        "i": "873",
        "codePoint": "U+1F4AE",
        "name": "white flower",
        "entities": "",
        "code": "",
        "keywords": [
            "japanese"
        ]
    },
    "🪷": {
        "i": "874",
        "codePoint": "U+1FAB7",
        "name": "lotus",
        "entities": "",
        "code": "",
        "keywords": [
            "flower",
            "calm"
        ]
    },
    "🏵️": {
        "i": "875",
        "codePoint": "U+1F3F5+FE0F",
        "name": "rosette",
        "entities": "",
        "code": "",
        "keywords": [
            "military"
        ]
    },
    "🌹": {
        "i": "876",
        "codePoint": "U+1F339",
        "name": "rose",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🥀": {
        "i": "877",
        "codePoint": "U+1F940",
        "name": "wilted flower",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌺": {
        "i": "878",
        "codePoint": "U+1F33A",
        "name": "hibiscus",
        "entities": "",
        "code": "",
        "keywords": [
            "vegetable"
        ]
    },
    "🌻": {
        "i": "879",
        "codePoint": "U+1F33B",
        "name": "sunflower",
        "entities": "",
        "code": "",
        "keywords": [
            "fall"
        ]
    },
    "🌼": {
        "i": "880",
        "codePoint": "U+1F33C",
        "name": "blossom",
        "entities": "",
        "code": "",
        "keywords": [
            "yellow"
        ]
    },
    "🌷": {
        "i": "881",
        "codePoint": "U+1F337",
        "name": "tulip",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🪻": {
        "i": "882",
        "codePoint": "U+1FABB",
        "name": "hyacinth",
        "entities": "",
        "code": "",
        "keywords": [
            "lavender"
        ]
    },
    "🌱": {
        "i": "883",
        "codePoint": "U+1F331",
        "name": "seedling",
        "entities": "",
        "code": "",
        "keywords": [
            "grass",
            "lawn"
        ]
    },
    "🪴": {
        "i": "884",
        "codePoint": "U+1FAB4",
        "name": "potted plant",
        "entities": "",
        "code": "",
        "keywords": [
            "greenery"
        ]
    },
    "🌲": {
        "i": "885",
        "codePoint": "U+1F332",
        "name": "evergreen tree",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌳": {
        "i": "886",
        "codePoint": "U+1F333",
        "name": "deciduous tree",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌴": {
        "i": "887",
        "codePoint": "U+1F334",
        "name": "palm tree",
        "entities": "",
        "code": "",
        "keywords": [
            "mojito",
            "tropical"
        ]
    },
    "🌵": {
        "i": "888",
        "codePoint": "U+1F335",
        "name": "cactus",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌾": {
        "i": "889",
        "codePoint": "U+1F33E",
        "name": "ear of rice",
        "entities": "",
        "code": "",
        "keywords": [
            "sheaf of rice"
        ]
    },
    "🌿": {
        "i": "890",
        "codePoint": "U+1F33F",
        "name": "herb",
        "entities": "",
        "code": "",
        "keywords": [
            "medicine",
            "weed"
        ]
    },
    "☘️": {
        "i": "891",
        "codePoint": "U+2618+FE0F",
        "name": "shamrock",
        "entities": "",
        "code": "",
        "keywords": [
            "irish",
            "clover"
        ]
    },
    "🍀": {
        "i": "892",
        "codePoint": "U+1F340",
        "name": "four leaf clover",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍁": {
        "i": "893",
        "codePoint": "U+1F341",
        "name": "maple leaf",
        "entities": "",
        "code": "",
        "keywords": [
            "ca"
        ]
    },
    "🍂": {
        "i": "894",
        "codePoint": "U+1F342",
        "name": "fallen leaf",
        "entities": "",
        "code": "",
        "keywords": [
            "leaves"
        ]
    },
    "🍃": {
        "i": "895",
        "codePoint": "U+1F343",
        "name": "leaf fluttering in wind",
        "entities": "",
        "code": "",
        "keywords": [
            "tree"
        ]
    },
    "🪹": {
        "i": "896",
        "codePoint": "U+1FAB9",
        "name": "empty nest",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🪺": {
        "i": "897",
        "codePoint": "U+1FABA",
        "name": "nest with eggs",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍄": {
        "i": "898",
        "codePoint": "U+1F344",
        "name": "mushroom",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍇": {
        "i": "899",
        "codePoint": "U+1F347",
        "name": "grapes",
        "entities": "",
        "code": "",
        "keywords": [
            "fruit"
        ]
    },
    "🍈": {
        "i": "900",
        "codePoint": "U+1F348",
        "name": "melon",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍉": {
        "i": "901",
        "codePoint": "U+1F349",
        "name": "watermelon",
        "entities": "",
        "code": "",
        "keywords": [
            "picnic"
        ]
    },
    "🍊": {
        "i": "902",
        "codePoint": "U+1F34A",
        "name": "tangerine",
        "entities": "",
        "code": "",
        "keywords": [
            "orange"
        ]
    },
    "🍋": {
        "i": "903",
        "codePoint": "U+1F34B",
        "name": "lemon",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍋‍🟩": {
        "i": "904",
        "codePoint": "U+1F34B+200D+1F7E9",
        "name": "lime",
        "entities": "",
        "code": "",
        "keywords": [
            "acidic",
            "citric"
        ]
    },
    "🍌": {
        "i": "905",
        "codePoint": "U+1F34C",
        "name": "banana",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍍": {
        "i": "906",
        "codePoint": "U+1F34D",
        "name": "pineapple",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🥭": {
        "i": "907",
        "codePoint": "U+1F96D",
        "name": "mango",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍎": {
        "i": "908",
        "codePoint": "U+1F34E",
        "name": "red apple",
        "entities": "",
        "code": "",
        "keywords": [
            "mac"
        ]
    },
    "🍏": {
        "i": "909",
        "codePoint": "U+1F34F",
        "name": "green apple",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍐": {
        "i": "910",
        "codePoint": "U+1F350",
        "name": "pear",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍑": {
        "i": "911",
        "codePoint": "U+1F351",
        "name": "peach",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍒": {
        "i": "912",
        "codePoint": "U+1F352",
        "name": "cherries",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍓": {
        "i": "913",
        "codePoint": "U+1F353",
        "name": "strawberry",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🫐": {
        "i": "914",
        "codePoint": "U+1FAD0",
        "name": "blueberries",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🥝": {
        "i": "915",
        "codePoint": "U+1F95D",
        "name": "kiwifruit",
        "entities": "",
        "code": "",
        "keywords": [
            "kiwi fruit"
        ]
    },
    "🍅": {
        "i": "916",
        "codePoint": "U+1F345",
        "name": "tomato",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🫒": {
        "i": "917",
        "codePoint": "U+1FAD2",
        "name": "olive",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🥥": {
        "i": "918",
        "codePoint": "U+1F965",
        "name": "coconut",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🥑": {
        "i": "919",
        "codePoint": "U+1F951",
        "name": "avocado",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍆": {
        "i": "920",
        "codePoint": "U+1F346",
        "name": "aubergine",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🥔": {
        "i": "921",
        "codePoint": "U+1F954",
        "name": "potato",
        "entities": "",
        "code": "",
        "keywords": [
            "tuber",
            "vegatable",
            "starch"
        ]
    },
    "🥕": {
        "i": "922",
        "codePoint": "U+1F955",
        "name": "carrot",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌽": {
        "i": "923",
        "codePoint": "U+1F33D",
        "name": "ear of maize",
        "entities": "",
        "code": "",
        "keywords": [
            "ear of corn"
        ]
    },
    "🌶️": {
        "i": "924",
        "codePoint": "U+1F336+FE0F",
        "name": "hot pepper",
        "entities": "",
        "code": "",
        "keywords": [
            "spicy",
            "chilli",
            "chili"
        ]
    },
    "🫑": {
        "i": "925",
        "codePoint": "U+1FAD1",
        "name": "bell pepper",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🥒": {
        "i": "926",
        "codePoint": "U+1F952",
        "name": "cucumber",
        "entities": "",
        "code": "",
        "keywords": [
            "pickle"
        ]
    },
    "🥬": {
        "i": "927",
        "codePoint": "U+1F96C",
        "name": "leafy green",
        "entities": "",
        "code": "",
        "keywords": [
            "bok choy",
            "cabbage",
            "kale"
        ]
    },
    "🥦": {
        "i": "928",
        "codePoint": "U+1F966",
        "name": "broccoli",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧄": {
        "i": "929",
        "codePoint": "U+1F9C4",
        "name": "garlic",
        "entities": "",
        "code": "",
        "keywords": [
            "spice"
        ]
    },
    "🧅": {
        "i": "930",
        "codePoint": "U+1F9C5",
        "name": "onion",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🥜": {
        "i": "931",
        "codePoint": "U+1F95C",
        "name": "peanuts",
        "entities": "",
        "code": "",
        "keywords": [
            "nut"
        ]
    },
    "🫘": {
        "i": "932",
        "codePoint": "U+1FAD8",
        "name": "beans",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌰": {
        "i": "933",
        "codePoint": "U+1F330",
        "name": "chestnut",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🫚": {
        "i": "934",
        "codePoint": "U+1FADA",
        "name": "ginger root",
        "entities": "",
        "code": "",
        "keywords": [
            "gingerbread"
        ]
    },
    "🫛": {
        "i": "935",
        "codePoint": "U+1FADB",
        "name": "pea pod",
        "entities": "",
        "code": "",
        "keywords": [
            "cozy"
        ]
    },
    "🍄‍🟫": {
        "i": "936",
        "codePoint": "U+1F344+200D+1F7EB",
        "name": "brown mushroom",
        "entities": "",
        "code": "",
        "keywords": [
            "toadstool",
            "fungus"
        ]
    },
    "🍞": {
        "i": "937",
        "codePoint": "U+1F35E",
        "name": "bread",
        "entities": "",
        "code": "",
        "keywords": [
            "wheat",
            "toast"
        ]
    },
    "🥐": {
        "i": "938",
        "codePoint": "U+1F950",
        "name": "croissant",
        "entities": "",
        "code": "",
        "keywords": [
            "french"
        ]
    },
    "🥖": {
        "i": "939",
        "codePoint": "U+1F956",
        "name": "baguette bread",
        "entities": "",
        "code": "",
        "keywords": [
            "france"
        ]
    },
    "🫓": {
        "i": "940",
        "codePoint": "U+1FAD3",
        "name": "flatbread",
        "entities": "",
        "code": "",
        "keywords": [
            "flour"
        ]
    },
    "🥨": {
        "i": "941",
        "codePoint": "U+1F968",
        "name": "pretzel",
        "entities": "",
        "code": "",
        "keywords": [
            "twisted",
            "germany"
        ]
    },
    "🥯": {
        "i": "942",
        "codePoint": "U+1F96F",
        "name": "bagel",
        "entities": "",
        "code": "",
        "keywords": [
            "bakery",
            "schmear"
        ]
    },
    "🥞": {
        "i": "943",
        "codePoint": "U+1F95E",
        "name": "pancakes",
        "entities": "",
        "code": "",
        "keywords": [
            "breakfast",
            "flapjacks",
            "hotcakes"
        ]
    },
    "🧇": {
        "i": "944",
        "codePoint": "U+1F9C7",
        "name": "waffle",
        "entities": "",
        "code": "",
        "keywords": [
            "brunch"
        ]
    },
    "🧀": {
        "i": "945",
        "codePoint": "U+1F9C0",
        "name": "cheese wedge",
        "entities": "",
        "code": "",
        "keywords": [
            "chadder",
            "swiss"
        ]
    },
    "🍖": {
        "i": "946",
        "codePoint": "U+1F356",
        "name": "meat on bone",
        "entities": "",
        "code": "",
        "keywords": [
            "drumstick"
        ]
    },
    "🍗": {
        "i": "947",
        "codePoint": "U+1F357",
        "name": "poultry leg",
        "entities": "",
        "code": "",
        "keywords": [
            "meat"
        ]
    },
    "🥩": {
        "i": "948",
        "codePoint": "U+1F969",
        "name": "cut of meat",
        "entities": "",
        "code": "",
        "keywords": [
            "cut",
            "chop",
            "lambchop",
            "porkchop"
        ]
    },
    "🥓": {
        "i": "949",
        "codePoint": "U+1F953",
        "name": "bacon",
        "entities": "",
        "code": "",
        "keywords": [
            "pork"
        ]
    },
    "🍔": {
        "i": "950",
        "codePoint": "U+1F354",
        "name": "hamburger",
        "entities": "",
        "code": "",
        "keywords": [
            "fast food",
            "cheeseburger",
            "mcdonalds",
            "burger king"
        ]
    },
    "🍟": {
        "i": "951",
        "codePoint": "U+1F35F",
        "name": "french fries",
        "entities": "",
        "code": "",
        "keywords": [
            "chips"
        ]
    },
    "🍕": {
        "i": "952",
        "codePoint": "U+1F355",
        "name": "slice of pizza",
        "entities": "",
        "code": "",
        "keywords": [
            "pizza",
            "party"
        ]
    },
    "🌭": {
        "i": "953",
        "codePoint": "U+1F32D",
        "name": "hot dog",
        "entities": "",
        "code": "",
        "keywords": [
            "frankfurter",
            "america"
        ]
    },
    "🥪": {
        "i": "954",
        "codePoint": "U+1F96A",
        "name": "sandwich",
        "entities": "",
        "code": "",
        "keywords": [
            "lunch"
        ]
    },
    "🌮": {
        "i": "955",
        "codePoint": "U+1F32E",
        "name": "taco",
        "entities": "",
        "code": "",
        "keywords": [
            "mexican"
        ]
    },
    "🌯": {
        "i": "956",
        "codePoint": "U+1F32F",
        "name": "burrito",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🫔": {
        "i": "957",
        "codePoint": "U+1FAD4",
        "name": "tamale",
        "entities": "",
        "code": "",
        "keywords": [
            "masa"
        ]
    },
    "🥙": {
        "i": "958",
        "codePoint": "U+1F959",
        "name": "stuffed flatbread",
        "entities": "",
        "code": "",
        "keywords": [
            "stuffed",
            "gyro"
        ]
    },
    "🧆": {
        "i": "959",
        "codePoint": "U+1F9C6",
        "name": "falafel",
        "entities": "",
        "code": "",
        "keywords": [
            "mediterranean"
        ]
    },
    "🥚": {
        "i": "960",
        "codePoint": "U+1F95A",
        "name": "egg",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍳": {
        "i": "961",
        "codePoint": "U+1F373",
        "name": "cooking",
        "entities": "",
        "code": "",
        "keywords": [
            "skillet"
        ]
    },
    "🥘": {
        "i": "962",
        "codePoint": "U+1F958",
        "name": "shallow pan of food",
        "entities": "",
        "code": "",
        "keywords": [
            "casserole",
            "paella"
        ]
    },
    "🍲": {
        "i": "963",
        "codePoint": "U+1F372",
        "name": "pot of food",
        "entities": "",
        "code": "",
        "keywords": [
            "soup",
            "hot pot"
        ]
    },
    "🫕": {
        "i": "964",
        "codePoint": "U+1FAD5",
        "name": "fondue",
        "entities": "",
        "code": "",
        "keywords": [
            "cheese",
            "pot"
        ]
    },
    "🥣": {
        "i": "965",
        "codePoint": "U+1F963",
        "name": "bowl with spoon",
        "entities": "",
        "code": "",
        "keywords": [
            "cereal",
            "oatmeal",
            "porridge"
        ]
    },
    "🥗": {
        "i": "966",
        "codePoint": "U+1F957",
        "name": "green salad",
        "entities": "",
        "code": "",
        "keywords": [
            "healthy",
            "lettuce"
        ]
    },
    "🍿": {
        "i": "967",
        "codePoint": "U+1F37F",
        "name": "popcorn",
        "entities": "",
        "code": "",
        "keywords": [
            "movie theater",
            "films",
            "drama"
        ]
    },
    "🧈": {
        "i": "968",
        "codePoint": "U+1F9C8",
        "name": "butter",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧂": {
        "i": "969",
        "codePoint": "U+1F9C2",
        "name": "salt shaker",
        "entities": "",
        "code": "",
        "keywords": [
            "salt",
            "condiment",
            "shaker"
        ]
    },
    "🥫": {
        "i": "970",
        "codePoint": "U+1F96B",
        "name": "canned food",
        "entities": "",
        "code": "",
        "keywords": [
            "tomatoes"
        ]
    },
    "🍱": {
        "i": "971",
        "codePoint": "U+1F371",
        "name": "bento box",
        "entities": "",
        "code": "",
        "keywords": [
            "box"
        ]
    },
    "🍘": {
        "i": "972",
        "codePoint": "U+1F358",
        "name": "rice cracker",
        "entities": "",
        "code": "",
        "keywords": [
            "snack",
            "senbei"
        ]
    },
    "🍙": {
        "i": "973",
        "codePoint": "U+1F359",
        "name": "rice ball",
        "entities": "",
        "code": "",
        "keywords": [
            "onigiri",
            "omusubi"
        ]
    },
    "🍚": {
        "i": "974",
        "codePoint": "U+1F35A",
        "name": "cooked rice",
        "entities": "",
        "code": "",
        "keywords": [
            "asian"
        ]
    },
    "🍛": {
        "i": "975",
        "codePoint": "U+1F35B",
        "name": "curry and rice",
        "entities": "",
        "code": "",
        "keywords": [
            "curry rice"
        ]
    },
    "🍜": {
        "i": "976",
        "codePoint": "U+1F35C",
        "name": "steaming bowl",
        "entities": "",
        "code": "",
        "keywords": [
            "noodle",
            "ramen"
        ]
    },
    "🍝": {
        "i": "977",
        "codePoint": "U+1F35D",
        "name": "spaghetti",
        "entities": "",
        "code": "",
        "keywords": [
            "italian",
            "pasta"
        ]
    },
    "🍠": {
        "i": "978",
        "codePoint": "U+1F360",
        "name": "roasted sweet potato",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍢": {
        "i": "979",
        "codePoint": "U+1F362",
        "name": "oden",
        "entities": "",
        "code": "",
        "keywords": [
            "skewer"
        ]
    },
    "🍣": {
        "i": "980",
        "codePoint": "U+1F363",
        "name": "sushi",
        "entities": "",
        "code": "",
        "keywords": [
            "rice"
        ]
    },
    "🍤": {
        "i": "981",
        "codePoint": "U+1F364",
        "name": "fried shrimp",
        "entities": "",
        "code": "",
        "keywords": [
            "appetizer"
        ]
    },
    "🍥": {
        "i": "982",
        "codePoint": "U+1F365",
        "name": "fish cake with swirl design",
        "entities": "",
        "code": "",
        "keywords": [
            "fish cake with swirl",
            "japan",
            "narutomaki",
            "kamaboko",
            "surimi"
        ]
    },
    "🥮": {
        "i": "983",
        "codePoint": "U+1F96E",
        "name": "Moon cake",
        "entities": "",
        "code": "",
        "keywords": [
            "moon cake",
            "autumn"
        ]
    },
    "🍡": {
        "i": "984",
        "codePoint": "U+1F361",
        "name": "dango",
        "entities": "",
        "code": "",
        "keywords": [
            "dessert",
            "barbecue"
        ]
    },
    "🥟": {
        "i": "985",
        "codePoint": "U+1F95F",
        "name": "dumpling",
        "entities": "",
        "code": "",
        "keywords": [
            "empanada",
            "pierogi",
            "potsticker",
            "gyoza"
        ]
    },
    "🥠": {
        "i": "986",
        "codePoint": "U+1F960",
        "name": "fortune cookie",
        "entities": "",
        "code": "",
        "keywords": [
            "prophecy"
        ]
    },
    "🥡": {
        "i": "987",
        "codePoint": "U+1F961",
        "name": "takeout box",
        "entities": "",
        "code": "",
        "keywords": [
            "leftovers"
        ]
    },
    "🦀": {
        "i": "988",
        "codePoint": "U+1F980",
        "name": "crab",
        "entities": "",
        "code": "",
        "keywords": [
            "crustacean"
        ]
    },
    "🦞": {
        "i": "989",
        "codePoint": "U+1F99E",
        "name": "lobster",
        "entities": "",
        "code": "",
        "keywords": [
            "bisque",
            "claws"
        ]
    },
    "🦐": {
        "i": "990",
        "codePoint": "U+1F990",
        "name": "shrimp",
        "entities": "",
        "code": "",
        "keywords": [
            "seafood"
        ]
    },
    "🦑": {
        "i": "991",
        "codePoint": "U+1F991",
        "name": "squid",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦪": {
        "i": "992",
        "codePoint": "U+1F9AA",
        "name": "oyster",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍦": {
        "i": "993",
        "codePoint": "U+1F366",
        "name": "soft ice cream",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍧": {
        "i": "994",
        "codePoint": "U+1F367",
        "name": "shaved ice",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍨": {
        "i": "995",
        "codePoint": "U+1F368",
        "name": "ice cream",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍩": {
        "i": "996",
        "codePoint": "U+1F369",
        "name": "doughnut",
        "entities": "",
        "code": "",
        "keywords": [
            "sweet",
            "donut"
        ]
    },
    "🍪": {
        "i": "997",
        "codePoint": "U+1F36A",
        "name": "cookie",
        "entities": "",
        "code": "",
        "keywords": [
            "oreo",
            "chocolate"
        ]
    },
    "🎂": {
        "i": "998",
        "codePoint": "U+1F382",
        "name": "birthday cake",
        "entities": "",
        "code": "",
        "keywords": [
            "cake"
        ]
    },
    "🍰": {
        "i": "999",
        "codePoint": "U+1F370",
        "name": "shortcake",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧁": {
        "i": "1000",
        "codePoint": "U+1F9C1",
        "name": "cupcake",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🥧": {
        "i": "1001",
        "codePoint": "U+1F967",
        "name": "pie",
        "entities": "",
        "code": "",
        "keywords": [
            "pastry"
        ]
    },
    "🍫": {
        "i": "1002",
        "codePoint": "U+1F36B",
        "name": "chocolate bar",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍬": {
        "i": "1003",
        "codePoint": "U+1F36C",
        "name": "candy",
        "entities": "",
        "code": "",
        "keywords": [
            "lolly"
        ]
    },
    "🍭": {
        "i": "1004",
        "codePoint": "U+1F36D",
        "name": "lollipop",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍮": {
        "i": "1005",
        "codePoint": "U+1F36E",
        "name": "custard",
        "entities": "",
        "code": "",
        "keywords": [
            "pudding",
            "flan"
        ]
    },
    "🍯": {
        "i": "1006",
        "codePoint": "U+1F36F",
        "name": "honey pot",
        "entities": "",
        "code": "",
        "keywords": [
            "bees"
        ]
    },
    "🍼": {
        "i": "1007",
        "codePoint": "U+1F37C",
        "name": "baby bottle",
        "entities": "",
        "code": "",
        "keywords": [
            "container"
        ]
    },
    "🥛": {
        "i": "1008",
        "codePoint": "U+1F95B",
        "name": "glass of milk",
        "entities": "",
        "code": "",
        "keywords": [
            "beverage"
        ]
    },
    "☕": {
        "i": "1009",
        "codePoint": "U+2615",
        "name": "hot beverage",
        "entities": "",
        "code": "",
        "keywords": [
            "caffeine",
            "latte",
            "espresso",
            "coffee",
            "mug"
        ]
    },
    "🫖": {
        "i": "1010",
        "codePoint": "U+1FAD6",
        "name": "teapot",
        "entities": "",
        "code": "",
        "keywords": [
            "drink"
        ]
    },
    "🍵": {
        "i": "1011",
        "codePoint": "U+1F375",
        "name": "teacup without handle",
        "entities": "",
        "code": "",
        "keywords": [
            "bowl"
        ]
    },
    "🍶": {
        "i": "1012",
        "codePoint": "U+1F376",
        "name": "sake bottle and cup",
        "entities": "",
        "code": "",
        "keywords": [
            "sake",
            "wine",
            "booze"
        ]
    },
    "🍾": {
        "i": "1013",
        "codePoint": "U+1F37E",
        "name": "bottle with popping cork",
        "entities": "",
        "code": "",
        "keywords": [
            "bottle"
        ]
    },
    "🍷": {
        "i": "1014",
        "codePoint": "U+1F377",
        "name": "wine glass",
        "entities": "",
        "code": "",
        "keywords": [
            "drunk"
        ]
    },
    "🍸": {
        "i": "1015",
        "codePoint": "U+1F378",
        "name": "cocktail glass",
        "entities": "",
        "code": "",
        "keywords": [
            "alcohol"
        ]
    },
    "🍹": {
        "i": "1016",
        "codePoint": "U+1F379",
        "name": "tropical drink",
        "entities": "",
        "code": "",
        "keywords": [
            "cocktail"
        ]
    },
    "🍺": {
        "i": "1017",
        "codePoint": "U+1F37A",
        "name": "beer mug",
        "entities": "",
        "code": "",
        "keywords": [
            "pub"
        ]
    },
    "🍻": {
        "i": "1018",
        "codePoint": "U+1F37B",
        "name": "clinking beer mugs",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🥂": {
        "i": "1019",
        "codePoint": "U+1F942",
        "name": "clinking glasses",
        "entities": "",
        "code": "",
        "keywords": [
            "celebrate",
            "cheers",
            "champagne"
        ]
    },
    "🥃": {
        "i": "1020",
        "codePoint": "U+1F943",
        "name": "tumbler glass",
        "entities": "",
        "code": "",
        "keywords": [
            "liquor",
            "bourbon",
            "scotch",
            "whisky",
            "glass",
            "shot"
        ]
    },
    "🫗": {
        "i": "1021",
        "codePoint": "U+1FAD7",
        "name": "pouring liquid",
        "entities": "",
        "code": "",
        "keywords": [
            "cup"
        ]
    },
    "🥤": {
        "i": "1022",
        "codePoint": "U+1F964",
        "name": "cup with straw",
        "entities": "",
        "code": "",
        "keywords": [
            "soda"
        ]
    },
    "🧋": {
        "i": "1023",
        "codePoint": "U+1F9CB",
        "name": "bubble tea",
        "entities": "",
        "code": "",
        "keywords": [
            "taiwan",
            "boba",
            "milk tea",
            "straw"
        ]
    },
    "🧃": {
        "i": "1024",
        "codePoint": "U+1F9C3",
        "name": "beverage box",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧉": {
        "i": "1025",
        "codePoint": "U+1F9C9",
        "name": "mate drink",
        "entities": "",
        "code": "",
        "keywords": [
            "mate",
            "tea"
        ]
    },
    "🧊": {
        "i": "1026",
        "codePoint": "U+1F9CA",
        "name": "ice cube",
        "entities": "",
        "code": "",
        "keywords": [
            "ice"
        ]
    },
    "🥢": {
        "i": "1027",
        "codePoint": "U+1F962",
        "name": "chopsticks",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🍽️": {
        "i": "1028",
        "codePoint": "U+1F37D+FE0F",
        "name": "fork and knife with plate",
        "entities": "",
        "code": "",
        "keywords": [
            "eat",
            "meal",
            "dinner",
            "restaurant"
        ]
    },
    "🍴": {
        "i": "1029",
        "codePoint": "U+1F374",
        "name": "fork and knife",
        "entities": "",
        "code": "",
        "keywords": [
            "cutlery"
        ]
    },
    "🥄": {
        "i": "1030",
        "codePoint": "U+1F944",
        "name": "spoon",
        "entities": "",
        "code": "",
        "keywords": [
            "tableware"
        ]
    },
    "🔪": {
        "i": "1031",
        "codePoint": "U+1F52A",
        "name": "hocho",
        "entities": "",
        "code": "",
        "keywords": [
            "kitchen knife",
            "knife",
            "blade"
        ]
    },
    "🫙": {
        "i": "1032",
        "codePoint": "U+1FAD9",
        "name": "jar",
        "entities": "",
        "code": "",
        "keywords": [
            "sauce"
        ]
    },
    "🏺": {
        "i": "1033",
        "codePoint": "U+1F3FA",
        "name": "amphora",
        "entities": "",
        "code": "",
        "keywords": [
            "vase"
        ]
    },
    "🌍": {
        "i": "1034",
        "codePoint": "U+1F30D",
        "name": "earth globe europe-africa",
        "entities": "",
        "code": "",
        "keywords": [
            "globe showing Europe-Africa",
            "globe",
            "international"
        ]
    },
    "🌎": {
        "i": "1035",
        "codePoint": "U+1F30E",
        "name": "earth globe americas",
        "entities": "",
        "code": "",
        "keywords": [
            "globe showing Americas",
            "world",
            "USA"
        ]
    },
    "🌏": {
        "i": "1036",
        "codePoint": "U+1F30F",
        "name": "earth globe asia-australia",
        "entities": "",
        "code": "",
        "keywords": [
            "globe showing Asia-Australia",
            "east"
        ]
    },
    "🌐": {
        "i": "1037",
        "codePoint": "U+1F310",
        "name": "globe with meridians",
        "entities": "",
        "code": "",
        "keywords": [
            "earth",
            "internet",
            "interweb",
            "i18n"
        ]
    },
    "🗺️": {
        "i": "1038",
        "codePoint": "U+1F5FA+FE0F",
        "name": "world map",
        "entities": "",
        "code": "",
        "keywords": [
            "location"
        ]
    },
    "🗾": {
        "i": "1039",
        "codePoint": "U+1F5FE",
        "name": "silhouette of japan",
        "entities": "",
        "code": "",
        "keywords": [
            "map of Japan",
            "nation",
            "asia"
        ]
    },
    "🧭": {
        "i": "1040",
        "codePoint": "U+1F9ED",
        "name": "compass",
        "entities": "",
        "code": "",
        "keywords": [
            "magnetic",
            "navigation",
            "orienteering"
        ]
    },
    "🏔️": {
        "i": "1041",
        "codePoint": "U+1F3D4+FE0F",
        "name": "snow-capped mountain",
        "entities": "",
        "code": "",
        "keywords": [
            "photo"
        ]
    },
    "⛰️": {
        "i": "1042",
        "codePoint": "U+26F0+FE0F",
        "name": "mountain",
        "entities": "",
        "code": "",
        "keywords": [
            "environment"
        ]
    },
    "🌋": {
        "i": "1043",
        "codePoint": "U+1F30B",
        "name": "volcano",
        "entities": "",
        "code": "",
        "keywords": [
            "disaster"
        ]
    },
    "🗻": {
        "i": "1044",
        "codePoint": "U+1F5FB",
        "name": "mount fuji",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏕️": {
        "i": "1045",
        "codePoint": "U+1F3D5+FE0F",
        "name": "camping",
        "entities": "",
        "code": "",
        "keywords": [
            "outdoors"
        ]
    },
    "🏖️": {
        "i": "1046",
        "codePoint": "U+1F3D6+FE0F",
        "name": "beach with umbrella",
        "entities": "",
        "code": "",
        "keywords": [
            "weather",
            "sunny",
            "sand"
        ]
    },
    "🏜️": {
        "i": "1047",
        "codePoint": "U+1F3DC+FE0F",
        "name": "desert",
        "entities": "",
        "code": "",
        "keywords": [
            "warm",
            "saharah"
        ]
    },
    "🏝️": {
        "i": "1048",
        "codePoint": "U+1F3DD+FE0F",
        "name": "desert island",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏞️": {
        "i": "1049",
        "codePoint": "U+1F3DE+FE0F",
        "name": "national park",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏟️": {
        "i": "1050",
        "codePoint": "U+1F3DF+FE0F",
        "name": "stadium",
        "entities": "",
        "code": "",
        "keywords": [
            "place",
            "venue"
        ]
    },
    "🏛️": {
        "i": "1051",
        "codePoint": "U+1F3DB+FE0F",
        "name": "classical building",
        "entities": "",
        "code": "",
        "keywords": [
            "art",
            "culture"
        ]
    },
    "🏗️": {
        "i": "1052",
        "codePoint": "U+1F3D7+FE0F",
        "name": "building construction",
        "entities": "",
        "code": "",
        "keywords": [
            "working"
        ]
    },
    "🧱": {
        "i": "1053",
        "codePoint": "U+1F9F1",
        "name": "brick",
        "entities": "",
        "code": "",
        "keywords": [
            "bricks"
        ]
    },
    "🪨": {
        "i": "1054",
        "codePoint": "U+1FAA8",
        "name": "rock",
        "entities": "",
        "code": "",
        "keywords": [
            "stone"
        ]
    },
    "🪵": {
        "i": "1055",
        "codePoint": "U+1FAB5",
        "name": "wood",
        "entities": "",
        "code": "",
        "keywords": [
            "timber",
            "trunk"
        ]
    },
    "🛖": {
        "i": "1056",
        "codePoint": "U+1F6D6",
        "name": "hut",
        "entities": "",
        "code": "",
        "keywords": [
            "structure"
        ]
    },
    "🏘️": {
        "i": "1057",
        "codePoint": "U+1F3D8+FE0F",
        "name": "houses",
        "entities": "",
        "code": "",
        "keywords": [
            "buildings"
        ]
    },
    "🏚️": {
        "i": "1058",
        "codePoint": "U+1F3DA+FE0F",
        "name": "derelict house",
        "entities": "",
        "code": "",
        "keywords": [
            "abandon",
            "evict",
            "broken"
        ]
    },
    "🏠": {
        "i": "1059",
        "codePoint": "U+1F3E0",
        "name": "house building",
        "entities": "",
        "code": "",
        "keywords": [
            "house",
            "building"
        ]
    },
    "🏡": {
        "i": "1060",
        "codePoint": "U+1F3E1",
        "name": "house with garden",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏢": {
        "i": "1061",
        "codePoint": "U+1F3E2",
        "name": "office building",
        "entities": "",
        "code": "",
        "keywords": [
            "bureau",
            "work"
        ]
    },
    "🏣": {
        "i": "1062",
        "codePoint": "U+1F3E3",
        "name": "Japanese post office",
        "entities": "",
        "code": "",
        "keywords": [
            "communication"
        ]
    },
    "🏤": {
        "i": "1063",
        "codePoint": "U+1F3E4",
        "name": "european post office",
        "entities": "",
        "code": "",
        "keywords": [
            "post office"
        ]
    },
    "🏥": {
        "i": "1064",
        "codePoint": "U+1F3E5",
        "name": "hospital",
        "entities": "",
        "code": "",
        "keywords": [
            "surgery"
        ]
    },
    "🏦": {
        "i": "1065",
        "codePoint": "U+1F3E6",
        "name": "bank",
        "entities": "",
        "code": "",
        "keywords": [
            "sales",
            "enterprise"
        ]
    },
    "🏨": {
        "i": "1066",
        "codePoint": "U+1F3E8",
        "name": "hotel",
        "entities": "",
        "code": "",
        "keywords": [
            "accomodation",
            "checkin"
        ]
    },
    "🏩": {
        "i": "1067",
        "codePoint": "U+1F3E9",
        "name": "love hotel",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏪": {
        "i": "1068",
        "codePoint": "U+1F3EA",
        "name": "convenience store",
        "entities": "",
        "code": "",
        "keywords": [
            "shopping",
            "groceries"
        ]
    },
    "🏫": {
        "i": "1069",
        "codePoint": "U+1F3EB",
        "name": "school",
        "entities": "",
        "code": "",
        "keywords": [
            "education",
            "teach"
        ]
    },
    "🏬": {
        "i": "1070",
        "codePoint": "U+1F3EC",
        "name": "department store",
        "entities": "",
        "code": "",
        "keywords": [
            "mall"
        ]
    },
    "🏭": {
        "i": "1071",
        "codePoint": "U+1F3ED",
        "name": "factory",
        "entities": "",
        "code": "",
        "keywords": [
            "industry",
            "pollution",
            "smoke"
        ]
    },
    "🏯": {
        "i": "1072",
        "codePoint": "U+1F3EF",
        "name": "Japanese castle",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏰": {
        "i": "1073",
        "codePoint": "U+1F3F0",
        "name": "european castle",
        "entities": "",
        "code": "",
        "keywords": [
            "castle",
            "history"
        ]
    },
    "💒": {
        "i": "1074",
        "codePoint": "U+1F492",
        "name": "wedding",
        "entities": "",
        "code": "",
        "keywords": [
            "marriage"
        ]
    },
    "🗼": {
        "i": "1075",
        "codePoint": "U+1F5FC",
        "name": "tokyo tower",
        "entities": "",
        "code": "",
        "keywords": [
            "Tokyo tower"
        ]
    },
    "🗽": {
        "i": "1076",
        "codePoint": "U+1F5FD",
        "name": "statue of liberty",
        "entities": "",
        "code": "",
        "keywords": [
            "Statue of Liberty",
            "american",
            "newyork"
        ]
    },
    "⛪": {
        "i": "1077",
        "codePoint": "U+26EA",
        "name": "church",
        "entities": "",
        "code": "",
        "keywords": [
            "religion",
            "christ"
        ]
    },
    "🕌": {
        "i": "1078",
        "codePoint": "U+1F54C",
        "name": "mosque",
        "entities": "",
        "code": "",
        "keywords": [
            "islam",
            "minaret"
        ]
    },
    "🛕": {
        "i": "1079",
        "codePoint": "U+1F6D5",
        "name": "hindu temple",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🕍": {
        "i": "1080",
        "codePoint": "U+1F54D",
        "name": "synagogue",
        "entities": "",
        "code": "",
        "keywords": [
            "judaism"
        ]
    },
    "⛩️": {
        "i": "1081",
        "codePoint": "U+26E9+FE0F",
        "name": "shinto shrine",
        "entities": "",
        "code": "",
        "keywords": [
            "temple",
            "kyoto"
        ]
    },
    "🕋": {
        "i": "1082",
        "codePoint": "U+1F54B",
        "name": "kaaba",
        "entities": "",
        "code": "",
        "keywords": [
            "mecca"
        ]
    },
    "⛲": {
        "i": "1083",
        "codePoint": "U+26F2",
        "name": "fountain",
        "entities": "",
        "code": "",
        "keywords": [
            "fresh"
        ]
    },
    "⛺": {
        "i": "1084",
        "codePoint": "U+26FA",
        "name": "tent",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌁": {
        "i": "1085",
        "codePoint": "U+1F301",
        "name": "foggy",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌃": {
        "i": "1086",
        "codePoint": "U+1F303",
        "name": "night with stars",
        "entities": "",
        "code": "",
        "keywords": [
            "evening",
            "city",
            "downtown"
        ]
    },
    "🏙️": {
        "i": "1087",
        "codePoint": "U+1F3D9+FE0F",
        "name": "cityscape",
        "entities": "",
        "code": "",
        "keywords": [
            "night life",
            "urban"
        ]
    },
    "🌄": {
        "i": "1088",
        "codePoint": "U+1F304",
        "name": "sunrise over mountains",
        "entities": "",
        "code": "",
        "keywords": [
            "view"
        ]
    },
    "🌅": {
        "i": "1089",
        "codePoint": "U+1F305",
        "name": "sunrise",
        "entities": "",
        "code": "",
        "keywords": [
            "morning"
        ]
    },
    "🌆": {
        "i": "1090",
        "codePoint": "U+1F306",
        "name": "cityscape at dusk",
        "entities": "",
        "code": "",
        "keywords": [
            "sky"
        ]
    },
    "🌇": {
        "i": "1091",
        "codePoint": "U+1F307",
        "name": "sunset over buildings",
        "entities": "",
        "code": "",
        "keywords": [
            "sunset",
            "good morning",
            "dawn"
        ]
    },
    "🌉": {
        "i": "1092",
        "codePoint": "U+1F309",
        "name": "bridge at night",
        "entities": "",
        "code": "",
        "keywords": [
            "sanfrancisco"
        ]
    },
    "♨️": {
        "i": "1093",
        "codePoint": "U+2668+FE0F",
        "name": "hot springs",
        "entities": "",
        "code": "",
        "keywords": [
            "bath"
        ]
    },
    "🎠": {
        "i": "1094",
        "codePoint": "U+1F3A0",
        "name": "carousel horse",
        "entities": "",
        "code": "",
        "keywords": [
            "carnival"
        ]
    },
    "🛝": {
        "i": "1095",
        "codePoint": "U+1F6DD",
        "name": "playground slide",
        "entities": "",
        "code": "",
        "keywords": [
            "park"
        ]
    },
    "🎡": {
        "i": "1096",
        "codePoint": "U+1F3A1",
        "name": "ferris wheel",
        "entities": "",
        "code": "",
        "keywords": [
            "londoneye"
        ]
    },
    "🎢": {
        "i": "1097",
        "codePoint": "U+1F3A2",
        "name": "roller coaster",
        "entities": "",
        "code": "",
        "keywords": [
            "playground"
        ]
    },
    "💈": {
        "i": "1098",
        "codePoint": "U+1F488",
        "name": "barber pole",
        "entities": "",
        "code": "",
        "keywords": [
            "hair",
            "salon",
            "style"
        ]
    },
    "🎪": {
        "i": "1099",
        "codePoint": "U+1F3AA",
        "name": "circus tent",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚂": {
        "i": "1100",
        "codePoint": "U+1F682",
        "name": "steam locomotive",
        "entities": "",
        "code": "",
        "keywords": [
            "locomotive",
            "vehicle"
        ]
    },
    "🚃": {
        "i": "1101",
        "codePoint": "U+1F683",
        "name": "railway car",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚄": {
        "i": "1102",
        "codePoint": "U+1F684",
        "name": "high-speed train",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚅": {
        "i": "1103",
        "codePoint": "U+1F685",
        "name": "high-speed train with bullet nose",
        "entities": "",
        "code": "",
        "keywords": [
            "bullet train",
            "speed"
        ]
    },
    "🚆": {
        "i": "1104",
        "codePoint": "U+1F686",
        "name": "train",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚇": {
        "i": "1105",
        "codePoint": "U+1F687",
        "name": "metro",
        "entities": "",
        "code": "",
        "keywords": [
            "blue-square",
            "mrt",
            "underground",
            "tube"
        ]
    },
    "🚈": {
        "i": "1106",
        "codePoint": "U+1F688",
        "name": "light rail",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚉": {
        "i": "1107",
        "codePoint": "U+1F689",
        "name": "station",
        "entities": "",
        "code": "",
        "keywords": [
            "public"
        ]
    },
    "🚊": {
        "i": "1108",
        "codePoint": "U+1F68A",
        "name": "tram",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚝": {
        "i": "1109",
        "codePoint": "U+1F69D",
        "name": "monorail",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚞": {
        "i": "1110",
        "codePoint": "U+1F69E",
        "name": "mountain railway",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚋": {
        "i": "1111",
        "codePoint": "U+1F68B",
        "name": "tram car",
        "entities": "",
        "code": "",
        "keywords": [
            "carriage"
        ]
    },
    "🚌": {
        "i": "1112",
        "codePoint": "U+1F68C",
        "name": "bus",
        "entities": "",
        "code": "",
        "keywords": [
            "car"
        ]
    },
    "🚍": {
        "i": "1113",
        "codePoint": "U+1F68D",
        "name": "oncoming bus",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚎": {
        "i": "1114",
        "codePoint": "U+1F68E",
        "name": "trolleybus",
        "entities": "",
        "code": "",
        "keywords": [
            "bart"
        ]
    },
    "🚐": {
        "i": "1115",
        "codePoint": "U+1F690",
        "name": "minibus",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚑": {
        "i": "1116",
        "codePoint": "U+1F691",
        "name": "ambulance",
        "entities": "",
        "code": "",
        "keywords": [
            "health",
            "911"
        ]
    },
    "🚒": {
        "i": "1117",
        "codePoint": "U+1F692",
        "name": "fire engine",
        "entities": "",
        "code": "",
        "keywords": [
            "cars"
        ]
    },
    "🚓": {
        "i": "1118",
        "codePoint": "U+1F693",
        "name": "police car",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚔": {
        "i": "1119",
        "codePoint": "U+1F694",
        "name": "oncoming police car",
        "entities": "",
        "code": "",
        "keywords": [
            "enforcement"
        ]
    },
    "🚕": {
        "i": "1120",
        "codePoint": "U+1F695",
        "name": "taxi",
        "entities": "",
        "code": "",
        "keywords": [
            "uber"
        ]
    },
    "🚖": {
        "i": "1121",
        "codePoint": "U+1F696",
        "name": "oncoming taxi",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚗": {
        "i": "1122",
        "codePoint": "U+1F697",
        "name": "automobile",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚘": {
        "i": "1123",
        "codePoint": "U+1F698",
        "name": "oncoming automobile",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚙": {
        "i": "1124",
        "codePoint": "U+1F699",
        "name": "recreational vehicle",
        "entities": "",
        "code": "",
        "keywords": [
            "sport utility vehicle"
        ]
    },
    "🛻": {
        "i": "1125",
        "codePoint": "U+1F6FB",
        "name": "pickup truck",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚚": {
        "i": "1126",
        "codePoint": "U+1F69A",
        "name": "delivery truck",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚛": {
        "i": "1127",
        "codePoint": "U+1F69B",
        "name": "articulated lorry",
        "entities": "",
        "code": "",
        "keywords": [
            "express"
        ]
    },
    "🚜": {
        "i": "1128",
        "codePoint": "U+1F69C",
        "name": "tractor",
        "entities": "",
        "code": "",
        "keywords": [
            "farming",
            "agriculture"
        ]
    },
    "🏎️": {
        "i": "1129",
        "codePoint": "U+1F3CE+FE0F",
        "name": "racing car",
        "entities": "",
        "code": "",
        "keywords": [
            "formula",
            "f1"
        ]
    },
    "🏍️": {
        "i": "1130",
        "codePoint": "U+1F3CD+FE0F",
        "name": "motorcycle",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🛵": {
        "i": "1131",
        "codePoint": "U+1F6F5",
        "name": "motor scooter",
        "entities": "",
        "code": "",
        "keywords": [
            "vespa",
            "sasha"
        ]
    },
    "🦽": {
        "i": "1132",
        "codePoint": "U+1F9BD",
        "name": "manual wheelchair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🦼": {
        "i": "1133",
        "codePoint": "U+1F9BC",
        "name": "motorized wheelchair",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🛺": {
        "i": "1134",
        "codePoint": "U+1F6FA",
        "name": "auto rickshaw",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚲": {
        "i": "1135",
        "codePoint": "U+1F6B2",
        "name": "bicycle",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🛴": {
        "i": "1136",
        "codePoint": "U+1F6F4",
        "name": "scooter",
        "entities": "",
        "code": "",
        "keywords": [
            "kick scooter"
        ]
    },
    "🛹": {
        "i": "1137",
        "codePoint": "U+1F6F9",
        "name": "skateboard",
        "entities": "",
        "code": "",
        "keywords": [
            "board"
        ]
    },
    "🛼": {
        "i": "1138",
        "codePoint": "U+1F6FC",
        "name": "roller skate",
        "entities": "",
        "code": "",
        "keywords": [
            "footwear"
        ]
    },
    "🚏": {
        "i": "1139",
        "codePoint": "U+1F68F",
        "name": "bus stop",
        "entities": "",
        "code": "",
        "keywords": [
            "wait"
        ]
    },
    "🛣️": {
        "i": "1140",
        "codePoint": "U+1F6E3+FE0F",
        "name": "motorway",
        "entities": "",
        "code": "",
        "keywords": [
            "road",
            "cupertino",
            "interstate",
            "highway"
        ]
    },
    "🛤️": {
        "i": "1141",
        "codePoint": "U+1F6E4+FE0F",
        "name": "railway track",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🛢️": {
        "i": "1142",
        "codePoint": "U+1F6E2+FE0F",
        "name": "oil drum",
        "entities": "",
        "code": "",
        "keywords": [
            "barrell"
        ]
    },
    "⛽": {
        "i": "1143",
        "codePoint": "U+26FD",
        "name": "fuel pump",
        "entities": "",
        "code": "",
        "keywords": [
            "gas station",
            "petroleum"
        ]
    },
    "🛞": {
        "i": "1144",
        "codePoint": "U+1F6DE",
        "name": "wheel",
        "entities": "",
        "code": "",
        "keywords": [
            "transport"
        ]
    },
    "🚨": {
        "i": "1145",
        "codePoint": "U+1F6A8",
        "name": "police cars revolving light",
        "entities": "",
        "code": "",
        "keywords": [
            "police car light",
            "emergency",
            "alert",
            "pinged"
        ]
    },
    "🚥": {
        "i": "1146",
        "codePoint": "U+1F6A5",
        "name": "horizontal traffic light",
        "entities": "",
        "code": "",
        "keywords": [
            "signal"
        ]
    },
    "🚦": {
        "i": "1147",
        "codePoint": "U+1F6A6",
        "name": "vertical traffic light",
        "entities": "",
        "code": "",
        "keywords": [
            "driving"
        ]
    },
    "🛑": {
        "i": "1148",
        "codePoint": "U+1F6D1",
        "name": "octagonal sign",
        "entities": "",
        "code": "",
        "keywords": [
            "stop sign"
        ]
    },
    "🚧": {
        "i": "1149",
        "codePoint": "U+1F6A7",
        "name": "construction sign",
        "entities": "",
        "code": "",
        "keywords": [
            "construction",
            "progress",
            "caution"
        ]
    },
    "⚓": {
        "i": "1150",
        "codePoint": "U+2693",
        "name": "anchor",
        "entities": "",
        "code": "",
        "keywords": [
            "boat"
        ]
    },
    "🛟": {
        "i": "1151",
        "codePoint": "U+1F6DF",
        "name": "ring buoy",
        "entities": "",
        "code": "",
        "keywords": [
            "life saver",
            "life preserver"
        ]
    },
    "⛵": {
        "i": "1152",
        "codePoint": "U+26F5",
        "name": "sailboat",
        "entities": "",
        "code": "",
        "keywords": [
            "sailing"
        ]
    },
    "🛶": {
        "i": "1153",
        "codePoint": "U+1F6F6",
        "name": "canoe",
        "entities": "",
        "code": "",
        "keywords": [
            "paddle"
        ]
    },
    "🚤": {
        "i": "1154",
        "codePoint": "U+1F6A4",
        "name": "speedboat",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🛳️": {
        "i": "1155",
        "codePoint": "U+1F6F3+FE0F",
        "name": "passenger ship",
        "entities": "",
        "code": "",
        "keywords": [
            "yacht",
            "cruise"
        ]
    },
    "⛴️": {
        "i": "1156",
        "codePoint": "U+26F4+FE0F",
        "name": "ferry",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🛥️": {
        "i": "1157",
        "codePoint": "U+1F6E5+FE0F",
        "name": "motor boat",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚢": {
        "i": "1158",
        "codePoint": "U+1F6A2",
        "name": "ship",
        "entities": "",
        "code": "",
        "keywords": [
            "titanic",
            "deploy"
        ]
    },
    "✈️": {
        "i": "1159",
        "codePoint": "U+2708+FE0F",
        "name": "airplane",
        "entities": "",
        "code": "",
        "keywords": [
            "flight"
        ]
    },
    "🛩️": {
        "i": "1160",
        "codePoint": "U+1F6E9+FE0F",
        "name": "small airplane",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🛫": {
        "i": "1161",
        "codePoint": "U+1F6EB",
        "name": "airplane departure",
        "entities": "",
        "code": "",
        "keywords": [
            "airport",
            "landing"
        ]
    },
    "🛬": {
        "i": "1162",
        "codePoint": "U+1F6EC",
        "name": "airplane arriving",
        "entities": "",
        "code": "",
        "keywords": [
            "airplane arrival",
            "boarding"
        ]
    },
    "🪂": {
        "i": "1163",
        "codePoint": "U+1FA82",
        "name": "parachute",
        "entities": "",
        "code": "",
        "keywords": [
            "glide"
        ]
    },
    "💺": {
        "i": "1164",
        "codePoint": "U+1F4BA",
        "name": "seat",
        "entities": "",
        "code": "",
        "keywords": [
            "sit"
        ]
    },
    "🚁": {
        "i": "1165",
        "codePoint": "U+1F681",
        "name": "helicopter",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚟": {
        "i": "1166",
        "codePoint": "U+1F69F",
        "name": "suspension railway",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚠": {
        "i": "1167",
        "codePoint": "U+1F6A0",
        "name": "mountain cableway",
        "entities": "",
        "code": "",
        "keywords": [
            "ski"
        ]
    },
    "🚡": {
        "i": "1168",
        "codePoint": "U+1F6A1",
        "name": "aerial tramway",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🛰️": {
        "i": "1169",
        "codePoint": "U+1F6F0+FE0F",
        "name": "satellite",
        "entities": "",
        "code": "",
        "keywords": [
            "gps",
            "orbit",
            "spaceflight",
            "ISS"
        ]
    },
    "🚀": {
        "i": "1170",
        "codePoint": "U+1F680",
        "name": "rocket",
        "entities": "",
        "code": "",
        "keywords": [
            "launch",
            "staffmode",
            "NASA",
            "outer space"
        ]
    },
    "🛸": {
        "i": "1171",
        "codePoint": "U+1F6F8",
        "name": "flying saucer",
        "entities": "",
        "code": "",
        "keywords": [
            "ufo"
        ]
    },
    "🛎️": {
        "i": "1172",
        "codePoint": "U+1F6CE+FE0F",
        "name": "bellhop bell",
        "entities": "",
        "code": "",
        "keywords": [
            "service"
        ]
    },
    "🧳": {
        "i": "1173",
        "codePoint": "U+1F9F3",
        "name": "luggage",
        "entities": "",
        "code": "",
        "keywords": [
            "packing"
        ]
    },
    "⌛": {
        "i": "1174",
        "codePoint": "U+231B",
        "name": "hourglass",
        "entities": "",
        "code": "",
        "keywords": [
            "hourglass done",
            "time",
            "clock",
            "test"
        ]
    },
    "⏳": {
        "i": "1175",
        "codePoint": "U+23F3",
        "name": "hourglass with flowing sand",
        "entities": "",
        "code": "",
        "keywords": [
            "hourglass not done",
            "oldschool",
            "countdown"
        ]
    },
    "⌚": {
        "i": "1176",
        "codePoint": "U+231A",
        "name": "watch",
        "entities": "",
        "code": "",
        "keywords": [
            "accessories"
        ]
    },
    "⏰": {
        "i": "1177",
        "codePoint": "U+23F0",
        "name": "alarm clock",
        "entities": "",
        "code": "",
        "keywords": [
            "wake"
        ]
    },
    "⏱️": {
        "i": "1178",
        "codePoint": "U+23F1+FE0F",
        "name": "stopwatch",
        "entities": "",
        "code": "",
        "keywords": [
            "deadline"
        ]
    },
    "⏲️": {
        "i": "1179",
        "codePoint": "U+23F2+FE0F",
        "name": "timer clock",
        "entities": "",
        "code": "",
        "keywords": [
            "alarm"
        ]
    },
    "🕰️": {
        "i": "1180",
        "codePoint": "U+1F570+FE0F",
        "name": "mantelpiece clock",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🕛": {
        "i": "1181",
        "codePoint": "U+1F55B",
        "name": "clock face twelve oclock",
        "entities": "",
        "code": "",
        "keywords": [
            "twelve o’clock",
            "12",
            "00:00",
            "0000",
            "12:00",
            "1200",
            "noon",
            "midnight",
            "midday"
        ]
    },
    "🕧": {
        "i": "1182",
        "codePoint": "U+1F567",
        "name": "clock face twelve-thirty",
        "entities": "",
        "code": "",
        "keywords": [
            "twelve-thirty",
            "00:30",
            "0030",
            "12:30",
            "1230",
            "late"
        ]
    },
    "🕐": {
        "i": "1183",
        "codePoint": "U+1F550",
        "name": "clock face one oclock",
        "entities": "",
        "code": "",
        "keywords": [
            "one o’clock",
            "1",
            "1:00",
            "100",
            "13:00",
            "1300"
        ]
    },
    "🕜": {
        "i": "1184",
        "codePoint": "U+1F55C",
        "name": "clock face one-thirty",
        "entities": "",
        "code": "",
        "keywords": [
            "one-thirty",
            "1:30",
            "130",
            "13:30",
            "1330",
            "early"
        ]
    },
    "🕑": {
        "i": "1185",
        "codePoint": "U+1F551",
        "name": "clock face two oclock",
        "entities": "",
        "code": "",
        "keywords": [
            "two o’clock",
            "2",
            "2:00",
            "200",
            "14:00",
            "1400"
        ]
    },
    "🕝": {
        "i": "1186",
        "codePoint": "U+1F55D",
        "name": "clock face two-thirty",
        "entities": "",
        "code": "",
        "keywords": [
            "two-thirty",
            "2:30",
            "230",
            "14:30",
            "1430"
        ]
    },
    "🕒": {
        "i": "1187",
        "codePoint": "U+1F552",
        "name": "clock face three oclock",
        "entities": "",
        "code": "",
        "keywords": [
            "three o’clock",
            "3:00",
            "300",
            "15:00",
            "1500"
        ]
    },
    "🕞": {
        "i": "1188",
        "codePoint": "U+1F55E",
        "name": "clock face three-thirty",
        "entities": "",
        "code": "",
        "keywords": [
            "three-thirty",
            "3:30",
            "330",
            "15:30",
            "1530"
        ]
    },
    "🕓": {
        "i": "1189",
        "codePoint": "U+1F553",
        "name": "clock face four oclock",
        "entities": "",
        "code": "",
        "keywords": [
            "four o’clock",
            "4",
            "4:00",
            "400",
            "16:00",
            "1600"
        ]
    },
    "🕟": {
        "i": "1190",
        "codePoint": "U+1F55F",
        "name": "clock face four-thirty",
        "entities": "",
        "code": "",
        "keywords": [
            "four-thirty",
            "4:30",
            "430",
            "16:30",
            "1630"
        ]
    },
    "🕔": {
        "i": "1191",
        "codePoint": "U+1F554",
        "name": "clock face five oclock",
        "entities": "",
        "code": "",
        "keywords": [
            "five o’clock",
            "5",
            "5:00",
            "500",
            "17:00",
            "1700"
        ]
    },
    "🕠": {
        "i": "1192",
        "codePoint": "U+1F560",
        "name": "clock face five-thirty",
        "entities": "",
        "code": "",
        "keywords": [
            "five-thirty",
            "5:30",
            "530",
            "17:30",
            "1730"
        ]
    },
    "🕕": {
        "i": "1193",
        "codePoint": "U+1F555",
        "name": "clock face six oclock",
        "entities": "",
        "code": "",
        "keywords": [
            "six o’clock",
            "6",
            "6:00",
            "600",
            "18:00",
            "1800",
            "dusk"
        ]
    },
    "🕡": {
        "i": "1194",
        "codePoint": "U+1F561",
        "name": "clock face six-thirty",
        "entities": "",
        "code": "",
        "keywords": [
            "six-thirty",
            "6:30",
            "630",
            "18:30",
            "1830"
        ]
    },
    "🕖": {
        "i": "1195",
        "codePoint": "U+1F556",
        "name": "clock face seven oclock",
        "entities": "",
        "code": "",
        "keywords": [
            "seven o’clock",
            "7",
            "7:00",
            "700",
            "19:00",
            "1900"
        ]
    },
    "🕢": {
        "i": "1196",
        "codePoint": "U+1F562",
        "name": "clock face seven-thirty",
        "entities": "",
        "code": "",
        "keywords": [
            "seven-thirty",
            "7:30",
            "730",
            "19:30",
            "1930"
        ]
    },
    "🕗": {
        "i": "1197",
        "codePoint": "U+1F557",
        "name": "clock face eight oclock",
        "entities": "",
        "code": "",
        "keywords": [
            "eight o’clock",
            "8",
            "8:00",
            "800",
            "20:00",
            "2000"
        ]
    },
    "🕣": {
        "i": "1198",
        "codePoint": "U+1F563",
        "name": "clock face eight-thirty",
        "entities": "",
        "code": "",
        "keywords": [
            "eight-thirty",
            "8:30",
            "830",
            "20:30",
            "2030"
        ]
    },
    "🕘": {
        "i": "1199",
        "codePoint": "U+1F558",
        "name": "clock face nine oclock",
        "entities": "",
        "code": "",
        "keywords": [
            "nine o’clock",
            "9",
            "9:00",
            "900",
            "21:00",
            "2100"
        ]
    },
    "🕤": {
        "i": "1200",
        "codePoint": "U+1F564",
        "name": "clock face nine-thirty",
        "entities": "",
        "code": "",
        "keywords": [
            "nine-thirty",
            "9:30",
            "930",
            "21:30",
            "2130"
        ]
    },
    "🕙": {
        "i": "1201",
        "codePoint": "U+1F559",
        "name": "clock face ten oclock",
        "entities": "",
        "code": "",
        "keywords": [
            "ten o’clock",
            "10",
            "10:00",
            "1000",
            "22:00",
            "2200"
        ]
    },
    "🕥": {
        "i": "1202",
        "codePoint": "U+1F565",
        "name": "clock face ten-thirty",
        "entities": "",
        "code": "",
        "keywords": [
            "ten-thirty",
            "10:30",
            "1030",
            "22:30",
            "2230"
        ]
    },
    "🕚": {
        "i": "1203",
        "codePoint": "U+1F55A",
        "name": "clock face eleven oclock",
        "entities": "",
        "code": "",
        "keywords": [
            "eleven o’clock",
            "11",
            "11:00",
            "1100",
            "23:00",
            "2300"
        ]
    },
    "🕦": {
        "i": "1204",
        "codePoint": "U+1F566",
        "name": "clock face eleven-thirty",
        "entities": "",
        "code": "",
        "keywords": [
            "eleven-thirty",
            "11:30",
            "1130",
            "23:30",
            "2330"
        ]
    },
    "🌑": {
        "i": "1205",
        "codePoint": "U+1F311",
        "name": "new Moon symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "new moon",
            "twilight"
        ]
    },
    "🌒": {
        "i": "1206",
        "codePoint": "U+1F312",
        "name": "waxing crescent Moon symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "waxing crescent moon",
            "planet"
        ]
    },
    "🌓": {
        "i": "1207",
        "codePoint": "U+1F313",
        "name": "first quarter Moon symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "first quarter moon",
            "sleep"
        ]
    },
    "🌔": {
        "i": "1208",
        "codePoint": "U+1F314",
        "name": "waxing gibbous Moon symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "waxing gibbous moon",
            "gray"
        ]
    },
    "🌕": {
        "i": "1209",
        "codePoint": "U+1F315",
        "name": "full Moon symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "full moon"
        ]
    },
    "🌖": {
        "i": "1210",
        "codePoint": "U+1F316",
        "name": "waning gibbous Moon symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "waning gibbous moon"
        ]
    },
    "🌗": {
        "i": "1211",
        "codePoint": "U+1F317",
        "name": "last quarter Moon symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "last quarter moon"
        ]
    },
    "🌘": {
        "i": "1212",
        "codePoint": "U+1F318",
        "name": "waning crescent Moon symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "waning crescent moon"
        ]
    },
    "🌙": {
        "i": "1213",
        "codePoint": "U+1F319",
        "name": "crescent Moon",
        "entities": "",
        "code": "",
        "keywords": [
            "crescent moon",
            "night"
        ]
    },
    "🌚": {
        "i": "1214",
        "codePoint": "U+1F31A",
        "name": "new Moon with face",
        "entities": "",
        "code": "",
        "keywords": [
            "new moon face"
        ]
    },
    "🌛": {
        "i": "1215",
        "codePoint": "U+1F31B",
        "name": "first quarter Moon with face",
        "entities": "",
        "code": "",
        "keywords": [
            "first quarter moon face"
        ]
    },
    "🌜": {
        "i": "1216",
        "codePoint": "U+1F31C",
        "name": "last quarter Moon with face",
        "entities": "",
        "code": "",
        "keywords": [
            "last quarter moon face"
        ]
    },
    "🌡️": {
        "i": "1217",
        "codePoint": "U+1F321+FE0F",
        "name": "thermometer",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "☀️": {
        "i": "1218",
        "codePoint": "U+2600+FE0F",
        "name": "sun",
        "entities": "",
        "code": "",
        "keywords": [
            "brightness"
        ]
    },
    "🌝": {
        "i": "1219",
        "codePoint": "U+1F31D",
        "name": "full Moon with face",
        "entities": "",
        "code": "",
        "keywords": [
            "full moon face"
        ]
    },
    "🌞": {
        "i": "1220",
        "codePoint": "U+1F31E",
        "name": "Sun with face",
        "entities": "",
        "code": "",
        "keywords": [
            "sun with face"
        ]
    },
    "🪐": {
        "i": "1221",
        "codePoint": "U+1FA90",
        "name": "ringed planet",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⭐": {
        "i": "1222",
        "codePoint": "U+2B50",
        "name": "white medium star",
        "entities": "",
        "code": "",
        "keywords": [
            "star"
        ]
    },
    "🌟": {
        "i": "1223",
        "codePoint": "U+1F31F",
        "name": "glowing star",
        "entities": "",
        "code": "",
        "keywords": [
            "awesome"
        ]
    },
    "🌠": {
        "i": "1224",
        "codePoint": "U+1F320",
        "name": "shooting star",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌌": {
        "i": "1225",
        "codePoint": "U+1F30C",
        "name": "milky way",
        "entities": "",
        "code": "",
        "keywords": [
            "stars"
        ]
    },
    "☁️": {
        "i": "1226",
        "codePoint": "U+2601+FE0F",
        "name": "cloud",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⛅": {
        "i": "1227",
        "codePoint": "U+26C5",
        "name": "Sun behind cloud",
        "entities": "",
        "code": "",
        "keywords": [
            "sun behind cloud",
            "cloudy"
        ]
    },
    "⛈️": {
        "i": "1228",
        "codePoint": "U+26C8+FE0F",
        "name": "cloud with lightning and rain",
        "entities": "",
        "code": "",
        "keywords": [
            "lightning"
        ]
    },
    "🌤️": {
        "i": "1229",
        "codePoint": "U+1F324+FE0F",
        "name": "sun behind small cloud",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌥️": {
        "i": "1230",
        "codePoint": "U+1F325+FE0F",
        "name": "sun behind large cloud",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌦️": {
        "i": "1231",
        "codePoint": "U+1F326+FE0F",
        "name": "sun behind rain cloud",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌧️": {
        "i": "1232",
        "codePoint": "U+1F327+FE0F",
        "name": "cloud with rain",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌨️": {
        "i": "1233",
        "codePoint": "U+1F328+FE0F",
        "name": "cloud with snow",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌩️": {
        "i": "1234",
        "codePoint": "U+1F329+FE0F",
        "name": "cloud with lightning",
        "entities": "",
        "code": "",
        "keywords": [
            "thunder"
        ]
    },
    "🌪️": {
        "i": "1235",
        "codePoint": "U+1F32A+FE0F",
        "name": "tornado",
        "entities": "",
        "code": "",
        "keywords": [
            "twister"
        ]
    },
    "🌫️": {
        "i": "1236",
        "codePoint": "U+1F32B+FE0F",
        "name": "fog",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌬️": {
        "i": "1237",
        "codePoint": "U+1F32C+FE0F",
        "name": "wind face",
        "entities": "",
        "code": "",
        "keywords": [
            "gust"
        ]
    },
    "🌀": {
        "i": "1238",
        "codePoint": "U+1F300",
        "name": "cyclone",
        "entities": "",
        "code": "",
        "keywords": [
            "swirl",
            "vortex",
            "spiral",
            "whirlpool",
            "spin",
            "hurricane",
            "typhoon"
        ]
    },
    "🌈": {
        "i": "1239",
        "codePoint": "U+1F308",
        "name": "rainbow",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🌂": {
        "i": "1240",
        "codePoint": "U+1F302",
        "name": "closed umbrella",
        "entities": "",
        "code": "",
        "keywords": [
            "rain",
            "drizzle"
        ]
    },
    "☂️": {
        "i": "1241",
        "codePoint": "U+2602+FE0F",
        "name": "umbrella",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "☔": {
        "i": "1242",
        "codePoint": "U+2614",
        "name": "umbrella with rain drops",
        "entities": "",
        "code": "",
        "keywords": [
            "rainy"
        ]
    },
    "⛱️": {
        "i": "1243",
        "codePoint": "U+26F1+FE0F",
        "name": "umbrella on ground",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⚡": {
        "i": "1244",
        "codePoint": "U+26A1",
        "name": "high voltage sign",
        "entities": "",
        "code": "",
        "keywords": [
            "high voltage",
            "lightning bolt",
            "zap"
        ]
    },
    "❄️": {
        "i": "1245",
        "codePoint": "U+2744+FE0F",
        "name": "snowflake",
        "entities": "",
        "code": "",
        "keywords": [
            "season"
        ]
    },
    "☃️": {
        "i": "1246",
        "codePoint": "U+2603+FE0F",
        "name": "snowman",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⛄": {
        "i": "1247",
        "codePoint": "U+26C4",
        "name": "snowman without snow",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "☄️": {
        "i": "1248",
        "codePoint": "U+2604+FE0F",
        "name": "comet",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔥": {
        "i": "1249",
        "codePoint": "U+1F525",
        "name": "fire",
        "entities": "",
        "code": "",
        "keywords": [
            "flame"
        ]
    },
    "💧": {
        "i": "1250",
        "codePoint": "U+1F4A7",
        "name": "droplet",
        "entities": "",
        "code": "",
        "keywords": [
            "drip"
        ]
    },
    "🌊": {
        "i": "1251",
        "codePoint": "U+1F30A",
        "name": "water wave",
        "entities": "",
        "code": "",
        "keywords": [
            "tsunami"
        ]
    },
    "🎃": {
        "i": "1252",
        "codePoint": "U+1F383",
        "name": "jack-o-lantern",
        "entities": "",
        "code": "",
        "keywords": [
            "light",
            "pumpkin"
        ]
    },
    "🎄": {
        "i": "1253",
        "codePoint": "U+1F384",
        "name": "christmas tree",
        "entities": "",
        "code": "",
        "keywords": [
            "Christmas tree",
            "vacation",
            "december"
        ]
    },
    "🎆": {
        "i": "1254",
        "codePoint": "U+1F386",
        "name": "fireworks",
        "entities": "",
        "code": "",
        "keywords": [
            "congratulations"
        ]
    },
    "🎇": {
        "i": "1255",
        "codePoint": "U+1F387",
        "name": "firework sparkler",
        "entities": "",
        "code": "",
        "keywords": [
            "sparkler",
            "shine"
        ]
    },
    "🧨": {
        "i": "1256",
        "codePoint": "U+1F9E8",
        "name": "firecracker",
        "entities": "",
        "code": "",
        "keywords": [
            "dynamite",
            "explosive"
        ]
    },
    "✨": {
        "i": "1257",
        "codePoint": "U+2728",
        "name": "sparkles",
        "entities": "",
        "code": "",
        "keywords": [
            "shiny"
        ]
    },
    "🎈": {
        "i": "1258",
        "codePoint": "U+1F388",
        "name": "balloon",
        "entities": "",
        "code": "",
        "keywords": [
            "birthday"
        ]
    },
    "🎉": {
        "i": "1259",
        "codePoint": "U+1F389",
        "name": "party popper",
        "entities": "",
        "code": "",
        "keywords": [
            "tada"
        ]
    },
    "🎊": {
        "i": "1260",
        "codePoint": "U+1F38A",
        "name": "confetti ball",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🎋": {
        "i": "1261",
        "codePoint": "U+1F38B",
        "name": "tanabata tree",
        "entities": "",
        "code": "",
        "keywords": [
            "branch",
            "tanzaku"
        ]
    },
    "🎍": {
        "i": "1262",
        "codePoint": "U+1F38D",
        "name": "pine decoration",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🎎": {
        "i": "1263",
        "codePoint": "U+1F38E",
        "name": "Japanese dolls",
        "entities": "",
        "code": "",
        "keywords": [
            "toy"
        ]
    },
    "🎏": {
        "i": "1264",
        "codePoint": "U+1F38F",
        "name": "carp streamer",
        "entities": "",
        "code": "",
        "keywords": [
            "koinobori",
            "carp"
        ]
    },
    "🎐": {
        "i": "1265",
        "codePoint": "U+1F390",
        "name": "wind chime",
        "entities": "",
        "code": "",
        "keywords": [
            "ding"
        ]
    },
    "🎑": {
        "i": "1266",
        "codePoint": "U+1F391",
        "name": "Moon viewing ceremony",
        "entities": "",
        "code": "",
        "keywords": [
            "moon viewing ceremony",
            "tsukimi"
        ]
    },
    "🧧": {
        "i": "1267",
        "codePoint": "U+1F9E7",
        "name": "red gift envelope",
        "entities": "",
        "code": "",
        "keywords": [
            "red envelope",
            "gift"
        ]
    },
    "🎀": {
        "i": "1268",
        "codePoint": "U+1F380",
        "name": "ribbon",
        "entities": "",
        "code": "",
        "keywords": [
            "bowtie"
        ]
    },
    "🎁": {
        "i": "1269",
        "codePoint": "U+1F381",
        "name": "wrapped present",
        "entities": "",
        "code": "",
        "keywords": [
            "wrapped gift",
            "present"
        ]
    },
    "🎗️": {
        "i": "1270",
        "codePoint": "U+1F397+FE0F",
        "name": "reminder ribbon",
        "entities": "",
        "code": "",
        "keywords": [
            "cause",
            "awareness"
        ]
    },
    "🎟️": {
        "i": "1271",
        "codePoint": "U+1F39F+FE0F",
        "name": "admission tickets",
        "entities": "",
        "code": "",
        "keywords": [
            "concert",
            "entrance"
        ]
    },
    "🎫": {
        "i": "1272",
        "codePoint": "U+1F3AB",
        "name": "ticket",
        "entities": "",
        "code": "",
        "keywords": [
            "event",
            "pass"
        ]
    },
    "🎖️": {
        "i": "1273",
        "codePoint": "U+1F396+FE0F",
        "name": "military medal",
        "entities": "",
        "code": "",
        "keywords": [
            "award",
            "army"
        ]
    },
    "🏆": {
        "i": "1274",
        "codePoint": "U+1F3C6",
        "name": "trophy",
        "entities": "",
        "code": "",
        "keywords": [
            "win",
            "ftw",
            "ceremony"
        ]
    },
    "🏅": {
        "i": "1275",
        "codePoint": "U+1F3C5",
        "name": "sports medal",
        "entities": "",
        "code": "",
        "keywords": [
            "winning"
        ]
    },
    "🥇": {
        "i": "1276",
        "codePoint": "U+1F947",
        "name": "first place medal",
        "entities": "",
        "code": "",
        "keywords": [
            "1st place medal",
            "first"
        ]
    },
    "🥈": {
        "i": "1277",
        "codePoint": "U+1F948",
        "name": "second place medal",
        "entities": "",
        "code": "",
        "keywords": [
            "2nd place medal",
            "second"
        ]
    },
    "🥉": {
        "i": "1278",
        "codePoint": "U+1F949",
        "name": "third place medal",
        "entities": "",
        "code": "",
        "keywords": [
            "3rd place medal",
            "third"
        ]
    },
    "⚽": {
        "i": "1279",
        "codePoint": "U+26BD",
        "name": "soccer ball",
        "entities": "",
        "code": "",
        "keywords": [
            "football"
        ]
    },
    "⚾": {
        "i": "1280",
        "codePoint": "U+26BE",
        "name": "baseball",
        "entities": "",
        "code": "",
        "keywords": [
            "balls"
        ]
    },
    "🥎": {
        "i": "1281",
        "codePoint": "U+1F94E",
        "name": "softball",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏀": {
        "i": "1282",
        "codePoint": "U+1F3C0",
        "name": "basketball and hoop",
        "entities": "",
        "code": "",
        "keywords": [
            "basketball",
            "NBA"
        ]
    },
    "🏐": {
        "i": "1283",
        "codePoint": "U+1F3D0",
        "name": "volleyball",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏈": {
        "i": "1284",
        "codePoint": "U+1F3C8",
        "name": "American football",
        "entities": "",
        "code": "",
        "keywords": [
            "american football",
            "NFL"
        ]
    },
    "🏉": {
        "i": "1285",
        "codePoint": "U+1F3C9",
        "name": "rugby football",
        "entities": "",
        "code": "",
        "keywords": [
            "team"
        ]
    },
    "🎾": {
        "i": "1286",
        "codePoint": "U+1F3BE",
        "name": "tennis racquet and ball",
        "entities": "",
        "code": "",
        "keywords": [
            "tennis"
        ]
    },
    "🥏": {
        "i": "1287",
        "codePoint": "U+1F94F",
        "name": "flying disc",
        "entities": "",
        "code": "",
        "keywords": [
            "frisbee",
            "ultimate"
        ]
    },
    "🎳": {
        "i": "1288",
        "codePoint": "U+1F3B3",
        "name": "bowling",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏏": {
        "i": "1289",
        "codePoint": "U+1F3CF",
        "name": "cricket bat and ball",
        "entities": "",
        "code": "",
        "keywords": [
            "cricket game"
        ]
    },
    "🏑": {
        "i": "1290",
        "codePoint": "U+1F3D1",
        "name": "field hockey stick and ball",
        "entities": "",
        "code": "",
        "keywords": [
            "field hockey"
        ]
    },
    "🏒": {
        "i": "1291",
        "codePoint": "U+1F3D2",
        "name": "ice hockey stick and puck",
        "entities": "",
        "code": "",
        "keywords": [
            "ice hockey"
        ]
    },
    "🥍": {
        "i": "1292",
        "codePoint": "U+1F94D",
        "name": "lacrosse stick and ball",
        "entities": "",
        "code": "",
        "keywords": [
            "lacrosse",
            "ball"
        ]
    },
    "🏓": {
        "i": "1293",
        "codePoint": "U+1F3D3",
        "name": "table tennis paddle and ball",
        "entities": "",
        "code": "",
        "keywords": [
            "ping pong",
            "pingpong"
        ]
    },
    "🏸": {
        "i": "1294",
        "codePoint": "U+1F3F8",
        "name": "badminton racquet and shuttlecock",
        "entities": "",
        "code": "",
        "keywords": [
            "badminton"
        ]
    },
    "🥊": {
        "i": "1295",
        "codePoint": "U+1F94A",
        "name": "boxing glove",
        "entities": "",
        "code": "",
        "keywords": [
            "fighting"
        ]
    },
    "🥋": {
        "i": "1296",
        "codePoint": "U+1F94B",
        "name": "martial arts uniform",
        "entities": "",
        "code": "",
        "keywords": [
            "judo",
            "karate",
            "taekwondo"
        ]
    },
    "🥅": {
        "i": "1297",
        "codePoint": "U+1F945",
        "name": "goal net",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⛳": {
        "i": "1298",
        "codePoint": "U+26F3",
        "name": "flag in hole",
        "entities": "",
        "code": "",
        "keywords": [
            "flag"
        ]
    },
    "⛸️": {
        "i": "1299",
        "codePoint": "U+26F8+FE0F",
        "name": "ice skate",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🎣": {
        "i": "1300",
        "codePoint": "U+1F3A3",
        "name": "fishing pole and fish",
        "entities": "",
        "code": "",
        "keywords": [
            "fishing pole"
        ]
    },
    "🤿": {
        "i": "1301",
        "codePoint": "U+1F93F",
        "name": "diving mask",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🎽": {
        "i": "1302",
        "codePoint": "U+1F3BD",
        "name": "running shirt with sash",
        "entities": "",
        "code": "",
        "keywords": [
            "running shirt",
            "play",
            "pageant"
        ]
    },
    "🎿": {
        "i": "1303",
        "codePoint": "U+1F3BF",
        "name": "ski and ski boot",
        "entities": "",
        "code": "",
        "keywords": [
            "skis",
            "snow"
        ]
    },
    "🛷": {
        "i": "1304",
        "codePoint": "U+1F6F7",
        "name": "sled",
        "entities": "",
        "code": "",
        "keywords": [
            "sleigh",
            "luge",
            "toboggan"
        ]
    },
    "🥌": {
        "i": "1305",
        "codePoint": "U+1F94C",
        "name": "curling stone",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🎯": {
        "i": "1306",
        "codePoint": "U+1F3AF",
        "name": "direct hit",
        "entities": "",
        "code": "",
        "keywords": [
            "bullseye",
            "bar",
            "target",
            "bullseye"
        ]
    },
    "🪀": {
        "i": "1307",
        "codePoint": "U+1FA80",
        "name": "yo-yo",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🪁": {
        "i": "1308",
        "codePoint": "U+1FA81",
        "name": "kite",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔫": {
        "i": "1309",
        "codePoint": "U+1F52B",
        "name": "pistol",
        "entities": "",
        "code": "",
        "keywords": [
            "revolver"
        ]
    },
    "🎱": {
        "i": "1310",
        "codePoint": "U+1F3B1",
        "name": "billiards",
        "entities": "",
        "code": "",
        "keywords": [
            "pool 8 ball"
        ]
    },
    "🔮": {
        "i": "1311",
        "codePoint": "U+1F52E",
        "name": "crystal ball",
        "entities": "",
        "code": "",
        "keywords": [
            "disco"
        ]
    },
    "🪄": {
        "i": "1312",
        "codePoint": "U+1FA84",
        "name": "magic wand",
        "entities": "",
        "code": "",
        "keywords": [
            "supernature"
        ]
    },
    "🎮": {
        "i": "1313",
        "codePoint": "U+1F3AE",
        "name": "video game",
        "entities": "",
        "code": "",
        "keywords": [
            "console",
            "PS4",
            "controller"
        ]
    },
    "🕹️": {
        "i": "1314",
        "codePoint": "U+1F579+FE0F",
        "name": "joystick",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🎰": {
        "i": "1315",
        "codePoint": "U+1F3B0",
        "name": "slot machine",
        "entities": "",
        "code": "",
        "keywords": [
            "bet",
            "vegas",
            "fruit machine",
            "casino"
        ]
    },
    "🎲": {
        "i": "1316",
        "codePoint": "U+1F3B2",
        "name": "game die",
        "entities": "",
        "code": "",
        "keywords": [
            "dice",
            "random",
            "tabletop"
        ]
    },
    "🧩": {
        "i": "1317",
        "codePoint": "U+1F9E9",
        "name": "jigsaw puzzle piece",
        "entities": "",
        "code": "",
        "keywords": [
            "puzzle piece",
            "interlocking",
            "puzzle",
            "piece"
        ]
    },
    "🧸": {
        "i": "1318",
        "codePoint": "U+1F9F8",
        "name": "teddy bear",
        "entities": "",
        "code": "",
        "keywords": [
            "plush"
        ]
    },
    "🪅": {
        "i": "1319",
        "codePoint": "U+1FA85",
        "name": "pinata",
        "entities": "",
        "code": "",
        "keywords": [
            "piñata",
            "mexico"
        ]
    },
    "🪩": {
        "i": "1320",
        "codePoint": "U+1FAA9",
        "name": "mirror ball",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🪆": {
        "i": "1321",
        "codePoint": "U+1FA86",
        "name": "nesting dolls",
        "entities": "",
        "code": "",
        "keywords": [
            "matryoshka"
        ]
    },
    "♠️": {
        "i": "1322",
        "codePoint": "U+2660+FE0F",
        "name": "spade suit",
        "entities": "",
        "code": "",
        "keywords": [
            "poker"
        ]
    },
    "♥️": {
        "i": "1323",
        "codePoint": "U+2665+FE0F",
        "name": "heart suit",
        "entities": "",
        "code": "",
        "keywords": [
            "cards"
        ]
    },
    "♦️": {
        "i": "1324",
        "codePoint": "U+2666+FE0F",
        "name": "diamond suit",
        "entities": "",
        "code": "",
        "keywords": [
            "suits"
        ]
    },
    "♣️": {
        "i": "1325",
        "codePoint": "U+2663+FE0F",
        "name": "club suit",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "♟️": {
        "i": "1326",
        "codePoint": "U+265F+FE0F",
        "name": "chess pawn",
        "entities": "",
        "code": "",
        "keywords": [
            "expendable"
        ]
    },
    "🃏": {
        "i": "1327",
        "codePoint": "U+1F0CF",
        "name": "playing card black joker",
        "entities": "",
        "code": "",
        "keywords": [
            "joker"
        ]
    },
    "🀄": {
        "i": "1328",
        "codePoint": "U+1F004",
        "name": "mahjong tile red dragon",
        "entities": "",
        "code": "",
        "keywords": [
            "mahjong red dragon",
            "chinese"
        ]
    },
    "🎴": {
        "i": "1329",
        "codePoint": "U+1F3B4",
        "name": "flower playing cards",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🎭": {
        "i": "1330",
        "codePoint": "U+1F3AD",
        "name": "performing arts",
        "entities": "",
        "code": "",
        "keywords": [
            "acting",
            "theater"
        ]
    },
    "🖼️": {
        "i": "1331",
        "codePoint": "U+1F5BC+FE0F",
        "name": "framed picture",
        "entities": "",
        "code": "",
        "keywords": [
            "photography"
        ]
    },
    "🎨": {
        "i": "1332",
        "codePoint": "U+1F3A8",
        "name": "artist palette",
        "entities": "",
        "code": "",
        "keywords": [
            "design",
            "paint",
            "colors"
        ]
    },
    "🧵": {
        "i": "1333",
        "codePoint": "U+1F9F5",
        "name": "spool of thread",
        "entities": "",
        "code": "",
        "keywords": [
            "thread",
            "needle",
            "sewing",
            "spool",
            "string"
        ]
    },
    "🪡": {
        "i": "1334",
        "codePoint": "U+1FAA1",
        "name": "sewing needle",
        "entities": "",
        "code": "",
        "keywords": [
            "stitches"
        ]
    },
    "🧶": {
        "i": "1335",
        "codePoint": "U+1F9F6",
        "name": "ball of yarn",
        "entities": "",
        "code": "",
        "keywords": [
            "yarn",
            "crochet",
            "knit"
        ]
    },
    "🪢": {
        "i": "1336",
        "codePoint": "U+1FAA2",
        "name": "knot",
        "entities": "",
        "code": "",
        "keywords": [
            "rope",
            "scout"
        ]
    },
    "👓": {
        "i": "1337",
        "codePoint": "U+1F453",
        "name": "eyeglasses",
        "entities": "",
        "code": "",
        "keywords": [
            "glasses",
            "fashion",
            "eyesight"
        ]
    },
    "🕶️": {
        "i": "1338",
        "codePoint": "U+1F576+FE0F",
        "name": "sunglasses",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🥽": {
        "i": "1339",
        "codePoint": "U+1F97D",
        "name": "goggles",
        "entities": "",
        "code": "",
        "keywords": [
            "protection",
            "safety"
        ]
    },
    "🥼": {
        "i": "1340",
        "codePoint": "U+1F97C",
        "name": "lab coat",
        "entities": "",
        "code": "",
        "keywords": [
            "experiment"
        ]
    },
    "🦺": {
        "i": "1341",
        "codePoint": "U+1F9BA",
        "name": "safety vest",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👔": {
        "i": "1342",
        "codePoint": "U+1F454",
        "name": "necktie",
        "entities": "",
        "code": "",
        "keywords": [
            "shirt",
            "suitup"
        ]
    },
    "👕": {
        "i": "1343",
        "codePoint": "U+1F455",
        "name": "t-shirt",
        "entities": "",
        "code": "",
        "keywords": [
            "cloth",
            "casual",
            "tee"
        ]
    },
    "👖": {
        "i": "1344",
        "codePoint": "U+1F456",
        "name": "jeans",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧣": {
        "i": "1345",
        "codePoint": "U+1F9E3",
        "name": "scarf",
        "entities": "",
        "code": "",
        "keywords": [
            "neck"
        ]
    },
    "🧤": {
        "i": "1346",
        "codePoint": "U+1F9E4",
        "name": "gloves",
        "entities": "",
        "code": "",
        "keywords": [
            "clothes"
        ]
    },
    "🧥": {
        "i": "1347",
        "codePoint": "U+1F9E5",
        "name": "coat",
        "entities": "",
        "code": "",
        "keywords": [
            "jacket"
        ]
    },
    "🧦": {
        "i": "1348",
        "codePoint": "U+1F9E6",
        "name": "socks",
        "entities": "",
        "code": "",
        "keywords": [
            "stockings"
        ]
    },
    "👗": {
        "i": "1349",
        "codePoint": "U+1F457",
        "name": "dress",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👘": {
        "i": "1350",
        "codePoint": "U+1F458",
        "name": "kimono",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🥻": {
        "i": "1351",
        "codePoint": "U+1F97B",
        "name": "sari",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🩱": {
        "i": "1352",
        "codePoint": "U+1FA71",
        "name": "one-piece swimsuit",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🩲": {
        "i": "1353",
        "codePoint": "U+1FA72",
        "name": "briefs",
        "entities": "",
        "code": "",
        "keywords": [
            "clothing"
        ]
    },
    "🩳": {
        "i": "1354",
        "codePoint": "U+1FA73",
        "name": "shorts",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👙": {
        "i": "1355",
        "codePoint": "U+1F459",
        "name": "bikini",
        "entities": "",
        "code": "",
        "keywords": [
            "swimming"
        ]
    },
    "👚": {
        "i": "1356",
        "codePoint": "U+1F45A",
        "name": "womans clothes",
        "entities": "",
        "code": "",
        "keywords": [
            "woman’s clothes"
        ]
    },
    "🪭": {
        "i": "1357",
        "codePoint": "U+1FAAD",
        "name": "folding hand fan",
        "entities": "",
        "code": "",
        "keywords": [
            "flamenco"
        ]
    },
    "👛": {
        "i": "1358",
        "codePoint": "U+1F45B",
        "name": "purse",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👜": {
        "i": "1359",
        "codePoint": "U+1F45C",
        "name": "handbag",
        "entities": "",
        "code": "",
        "keywords": [
            "accessory"
        ]
    },
    "👝": {
        "i": "1360",
        "codePoint": "U+1F45D",
        "name": "pouch",
        "entities": "",
        "code": "",
        "keywords": [
            "clutch bag",
            "bag"
        ]
    },
    "🛍️": {
        "i": "1361",
        "codePoint": "U+1F6CD+FE0F",
        "name": "shopping bags",
        "entities": "",
        "code": "",
        "keywords": [
            "buy",
            "purchase"
        ]
    },
    "🎒": {
        "i": "1362",
        "codePoint": "U+1F392",
        "name": "school satchel",
        "entities": "",
        "code": "",
        "keywords": [
            "backpack"
        ]
    },
    "🩴": {
        "i": "1363",
        "codePoint": "U+1FA74",
        "name": "thong sandal",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "👞": {
        "i": "1364",
        "codePoint": "U+1F45E",
        "name": "mans shoe",
        "entities": "",
        "code": "",
        "keywords": [
            "man’s shoe"
        ]
    },
    "👟": {
        "i": "1365",
        "codePoint": "U+1F45F",
        "name": "athletic shoe",
        "entities": "",
        "code": "",
        "keywords": [
            "running shoe",
            "shoes",
            "sneakers"
        ]
    },
    "🥾": {
        "i": "1366",
        "codePoint": "U+1F97E",
        "name": "hiking boot",
        "entities": "",
        "code": "",
        "keywords": [
            "backpacking",
            "hiking"
        ]
    },
    "🥿": {
        "i": "1367",
        "codePoint": "U+1F97F",
        "name": "flat shoe",
        "entities": "",
        "code": "",
        "keywords": [
            "ballet",
            "slip-on",
            "slipper"
        ]
    },
    "👠": {
        "i": "1368",
        "codePoint": "U+1F460",
        "name": "high-heeled shoe",
        "entities": "",
        "code": "",
        "keywords": [
            "pumps",
            "stiletto"
        ]
    },
    "👡": {
        "i": "1369",
        "codePoint": "U+1F461",
        "name": "womans sandal",
        "entities": "",
        "code": "",
        "keywords": [
            "woman’s sandal",
            "flip flops"
        ]
    },
    "🩰": {
        "i": "1370",
        "codePoint": "U+1FA70",
        "name": "ballet shoes",
        "entities": "",
        "code": "",
        "keywords": [
            "dance"
        ]
    },
    "👢": {
        "i": "1371",
        "codePoint": "U+1F462",
        "name": "womans boots",
        "entities": "",
        "code": "",
        "keywords": [
            "woman’s boot"
        ]
    },
    "🪮": {
        "i": "1372",
        "codePoint": "U+1FAAE",
        "name": "hair pick",
        "entities": "",
        "code": "",
        "keywords": [
            "afro",
            "comb"
        ]
    },
    "👑": {
        "i": "1373",
        "codePoint": "U+1F451",
        "name": "crown",
        "entities": "",
        "code": "",
        "keywords": [
            "kod",
            "leader",
            "lord"
        ]
    },
    "👒": {
        "i": "1374",
        "codePoint": "U+1F452",
        "name": "womans hat",
        "entities": "",
        "code": "",
        "keywords": [
            "woman’s hat"
        ]
    },
    "🎩": {
        "i": "1375",
        "codePoint": "U+1F3A9",
        "name": "top hat",
        "entities": "",
        "code": "",
        "keywords": [
            "gentleman",
            "classy"
        ]
    },
    "🎓": {
        "i": "1376",
        "codePoint": "U+1F393",
        "name": "graduation cap",
        "entities": "",
        "code": "",
        "keywords": [
            "college",
            "degree",
            "university",
            "graduation"
        ]
    },
    "🧢": {
        "i": "1377",
        "codePoint": "U+1F9E2",
        "name": "billed cap",
        "entities": "",
        "code": "",
        "keywords": [
            "cap"
        ]
    },
    "🪖": {
        "i": "1378",
        "codePoint": "U+1FA96",
        "name": "military helmet",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⛑️": {
        "i": "1379",
        "codePoint": "U+26D1+FE0F",
        "name": "rescue worker’s helmet",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📿": {
        "i": "1380",
        "codePoint": "U+1F4FF",
        "name": "prayer beads",
        "entities": "",
        "code": "",
        "keywords": [
            "dhikr",
            "religious"
        ]
    },
    "💄": {
        "i": "1381",
        "codePoint": "U+1F484",
        "name": "lipstick",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💍": {
        "i": "1382",
        "codePoint": "U+1F48D",
        "name": "ring",
        "entities": "",
        "code": "",
        "keywords": [
            "propose",
            "diamond",
            "engagement"
        ]
    },
    "💎": {
        "i": "1383",
        "codePoint": "U+1F48E",
        "name": "gem stone",
        "entities": "",
        "code": "",
        "keywords": [
            "ruby",
            "jewelry"
        ]
    },
    "🔇": {
        "i": "1384",
        "codePoint": "U+1F507",
        "name": "speaker with cancellation stroke",
        "entities": "",
        "code": "",
        "keywords": [
            "muted speaker",
            "sound"
        ]
    },
    "🔈": {
        "i": "1385",
        "codePoint": "U+1F508",
        "name": "speaker",
        "entities": "",
        "code": "",
        "keywords": [
            "speaker low volume",
            "volume",
            "broadcast"
        ]
    },
    "🔉": {
        "i": "1386",
        "codePoint": "U+1F509",
        "name": "speaker with one sound wave",
        "entities": "",
        "code": "",
        "keywords": [
            "speaker medium volume",
            "speaker"
        ]
    },
    "🔊": {
        "i": "1387",
        "codePoint": "U+1F50A",
        "name": "speaker with three sound waves",
        "entities": "",
        "code": "",
        "keywords": [
            "speaker high volume",
            "noise",
            "noisy"
        ]
    },
    "📢": {
        "i": "1388",
        "codePoint": "U+1F4E2",
        "name": "public address loudspeaker",
        "entities": "",
        "code": "",
        "keywords": [
            "loudspeaker"
        ]
    },
    "📣": {
        "i": "1389",
        "codePoint": "U+1F4E3",
        "name": "cheering megaphone",
        "entities": "",
        "code": "",
        "keywords": [
            "megaphone"
        ]
    },
    "📯": {
        "i": "1390",
        "codePoint": "U+1F4EF",
        "name": "postal horn",
        "entities": "",
        "code": "",
        "keywords": [
            "instrument"
        ]
    },
    "🔔": {
        "i": "1391",
        "codePoint": "U+1F514",
        "name": "bell",
        "entities": "",
        "code": "",
        "keywords": [
            "notification",
            "chime"
        ]
    },
    "🔕": {
        "i": "1392",
        "codePoint": "U+1F515",
        "name": "bell with cancellation stroke",
        "entities": "",
        "code": "",
        "keywords": [
            "bell with slash",
            "mute",
            "silent"
        ]
    },
    "🎼": {
        "i": "1393",
        "codePoint": "U+1F3BC",
        "name": "musical score",
        "entities": "",
        "code": "",
        "keywords": [
            "treble",
            "clef"
        ]
    },
    "🎵": {
        "i": "1394",
        "codePoint": "U+1F3B5",
        "name": "musical note",
        "entities": "",
        "code": "",
        "keywords": [
            "tone"
        ]
    },
    "🎶": {
        "i": "1395",
        "codePoint": "U+1F3B6",
        "name": "multiple musical notes",
        "entities": "",
        "code": "",
        "keywords": [
            "musical notes",
            "music"
        ]
    },
    "🎙️": {
        "i": "1396",
        "codePoint": "U+1F399+FE0F",
        "name": "studio microphone",
        "entities": "",
        "code": "",
        "keywords": [
            "sing",
            "recording"
        ]
    },
    "🎚️": {
        "i": "1397",
        "codePoint": "U+1F39A+FE0F",
        "name": "level slider",
        "entities": "",
        "code": "",
        "keywords": [
            "scale"
        ]
    },
    "🎛️": {
        "i": "1398",
        "codePoint": "U+1F39B+FE0F",
        "name": "control knobs",
        "entities": "",
        "code": "",
        "keywords": [
            "dial"
        ]
    },
    "🎤": {
        "i": "1399",
        "codePoint": "U+1F3A4",
        "name": "microphone",
        "entities": "",
        "code": "",
        "keywords": [
            "PA",
            "talkshow"
        ]
    },
    "🎧": {
        "i": "1400",
        "codePoint": "U+1F3A7",
        "name": "headphone",
        "entities": "",
        "code": "",
        "keywords": [
            "gadgets"
        ]
    },
    "📻": {
        "i": "1401",
        "codePoint": "U+1F4FB",
        "name": "radio",
        "entities": "",
        "code": "",
        "keywords": [
            "podcast",
            "program"
        ]
    },
    "🎷": {
        "i": "1402",
        "codePoint": "U+1F3B7",
        "name": "saxophone",
        "entities": "",
        "code": "",
        "keywords": [
            "jazz",
            "blues"
        ]
    },
    "🪗": {
        "i": "1403",
        "codePoint": "U+1FA97",
        "name": "accordion",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🎸": {
        "i": "1404",
        "codePoint": "U+1F3B8",
        "name": "guitar",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🎹": {
        "i": "1405",
        "codePoint": "U+1F3B9",
        "name": "musical keyboard",
        "entities": "",
        "code": "",
        "keywords": [
            "piano"
        ]
    },
    "🎺": {
        "i": "1406",
        "codePoint": "U+1F3BA",
        "name": "trumpet",
        "entities": "",
        "code": "",
        "keywords": [
            "brass"
        ]
    },
    "🎻": {
        "i": "1407",
        "codePoint": "U+1F3BB",
        "name": "violin",
        "entities": "",
        "code": "",
        "keywords": [
            "orchestra",
            "symphony"
        ]
    },
    "🪕": {
        "i": "1408",
        "codePoint": "U+1FA95",
        "name": "banjo",
        "entities": "",
        "code": "",
        "keywords": [
            "instructment"
        ]
    },
    "🥁": {
        "i": "1409",
        "codePoint": "U+1F941",
        "name": "drum with drumsticks",
        "entities": "",
        "code": "",
        "keywords": [
            "drum",
            "drumsticks",
            "snare"
        ]
    },
    "🪘": {
        "i": "1410",
        "codePoint": "U+1FA98",
        "name": "long drum",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🪇": {
        "i": "1411",
        "codePoint": "U+1FA87",
        "name": "maracas",
        "entities": "",
        "code": "",
        "keywords": [
            "percussion"
        ]
    },
    "🪈": {
        "i": "1412",
        "codePoint": "U+1FA88",
        "name": "flute",
        "entities": "",
        "code": "",
        "keywords": [
            "bamboo",
            "pied piper"
        ]
    },
    "📱": {
        "i": "1413",
        "codePoint": "U+1F4F1",
        "name": "mobile phone",
        "entities": "",
        "code": "",
        "keywords": [
            "technology",
            "apple"
        ]
    },
    "📲": {
        "i": "1414",
        "codePoint": "U+1F4F2",
        "name": "mobile phone with rightwards arrow at left",
        "entities": "",
        "code": "",
        "keywords": [
            "mobile phone with arrow",
            "iphone",
            "incoming"
        ]
    },
    "☎️": {
        "i": "1415",
        "codePoint": "U+260E+FE0F",
        "name": "telephone",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📞": {
        "i": "1416",
        "codePoint": "U+1F4DE",
        "name": "telephone receiver",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📟": {
        "i": "1417",
        "codePoint": "U+1F4DF",
        "name": "pager",
        "entities": "",
        "code": "",
        "keywords": [
            "bbcall",
            "90s"
        ]
    },
    "📠": {
        "i": "1418",
        "codePoint": "U+1F4E0",
        "name": "fax machine",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔋": {
        "i": "1419",
        "codePoint": "U+1F50B",
        "name": "battery",
        "entities": "",
        "code": "",
        "keywords": [
            "power",
            "energy",
            "sustain"
        ]
    },
    "🪫": {
        "i": "1420",
        "codePoint": "U+1FAAB",
        "name": "low battery",
        "entities": "",
        "code": "",
        "keywords": [
            "drained"
        ]
    },
    "🔌": {
        "i": "1421",
        "codePoint": "U+1F50C",
        "name": "electric plug",
        "entities": "",
        "code": "",
        "keywords": [
            "charger"
        ]
    },
    "💻": {
        "i": "1422",
        "codePoint": "U+1F4BB",
        "name": "personal computer",
        "entities": "",
        "code": "",
        "keywords": [
            "laptop",
            "screen",
            "display",
            "monitor"
        ]
    },
    "🖥️": {
        "i": "1423",
        "codePoint": "U+1F5A5+FE0F",
        "name": "desktop computer",
        "entities": "",
        "code": "",
        "keywords": [
            "computing"
        ]
    },
    "🖨️": {
        "i": "1424",
        "codePoint": "U+1F5A8+FE0F",
        "name": "printer",
        "entities": "",
        "code": "",
        "keywords": [
            "paper",
            "ink"
        ]
    },
    "⌨️": {
        "i": "1425",
        "codePoint": "U+2328+FE0F",
        "name": "keyboard",
        "entities": "",
        "code": "",
        "keywords": [
            "type",
            "text"
        ]
    },
    "🖱️": {
        "i": "1426",
        "codePoint": "U+1F5B1+FE0F",
        "name": "computer mouse",
        "entities": "",
        "code": "",
        "keywords": [
            "click"
        ]
    },
    "🖲️": {
        "i": "1427",
        "codePoint": "U+1F5B2+FE0F",
        "name": "trackball",
        "entities": "",
        "code": "",
        "keywords": [
            "trackpad"
        ]
    },
    "💽": {
        "i": "1428",
        "codePoint": "U+1F4BD",
        "name": "minidisc",
        "entities": "",
        "code": "",
        "keywords": [
            "computer disk",
            "record",
            "data"
        ]
    },
    "💾": {
        "i": "1429",
        "codePoint": "U+1F4BE",
        "name": "floppy disk",
        "entities": "",
        "code": "",
        "keywords": [
            "save",
            "80s"
        ]
    },
    "💿": {
        "i": "1430",
        "codePoint": "U+1F4BF",
        "name": "optical disc",
        "entities": "",
        "code": "",
        "keywords": [
            "optical disk",
            "disk",
            "disc"
        ]
    },
    "📀": {
        "i": "1431",
        "codePoint": "U+1F4C0",
        "name": "dvd",
        "entities": "",
        "code": "",
        "keywords": [
            "cd"
        ]
    },
    "🧮": {
        "i": "1432",
        "codePoint": "U+1F9EE",
        "name": "abacus",
        "entities": "",
        "code": "",
        "keywords": [
            "calculation"
        ]
    },
    "🎥": {
        "i": "1433",
        "codePoint": "U+1F3A5",
        "name": "movie camera",
        "entities": "",
        "code": "",
        "keywords": [
            "film"
        ]
    },
    "🎞️": {
        "i": "1434",
        "codePoint": "U+1F39E+FE0F",
        "name": "film frames",
        "entities": "",
        "code": "",
        "keywords": [
            "movie"
        ]
    },
    "📽️": {
        "i": "1435",
        "codePoint": "U+1F4FD+FE0F",
        "name": "film projector",
        "entities": "",
        "code": "",
        "keywords": [
            "video"
        ]
    },
    "🎬": {
        "i": "1436",
        "codePoint": "U+1F3AC",
        "name": "clapper board",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📺": {
        "i": "1437",
        "codePoint": "U+1F4FA",
        "name": "television",
        "entities": "",
        "code": "",
        "keywords": [
            "show"
        ]
    },
    "📷": {
        "i": "1438",
        "codePoint": "U+1F4F7",
        "name": "camera",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📸": {
        "i": "1439",
        "codePoint": "U+1F4F8",
        "name": "camera with flash",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📹": {
        "i": "1440",
        "codePoint": "U+1F4F9",
        "name": "video camera",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📼": {
        "i": "1441",
        "codePoint": "U+1F4FC",
        "name": "videocassette",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔍": {
        "i": "1442",
        "codePoint": "U+1F50D",
        "name": "left-pointing magnifying glass",
        "entities": "",
        "code": "",
        "keywords": [
            "magnifying glass tilted left",
            "search",
            "find"
        ]
    },
    "🔎": {
        "i": "1443",
        "codePoint": "U+1F50E",
        "name": "right-pointing magnifying glass",
        "entities": "",
        "code": "",
        "keywords": [
            "magnifying glass tilted right",
            "zoom"
        ]
    },
    "🕯️": {
        "i": "1444",
        "codePoint": "U+1F56F+FE0F",
        "name": "candle",
        "entities": "",
        "code": "",
        "keywords": [
            "wax"
        ]
    },
    "💡": {
        "i": "1445",
        "codePoint": "U+1F4A1",
        "name": "electric light bulb",
        "entities": "",
        "code": "",
        "keywords": [
            "light bulb",
            "electricity",
            "idea"
        ]
    },
    "🔦": {
        "i": "1446",
        "codePoint": "U+1F526",
        "name": "electric torch",
        "entities": "",
        "code": "",
        "keywords": [
            "flashlight",
            "dark",
            "sight"
        ]
    },
    "🏮": {
        "i": "1447",
        "codePoint": "U+1F3EE",
        "name": "izakaya lantern",
        "entities": "",
        "code": "",
        "keywords": [
            "red paper lantern"
        ]
    },
    "🪔": {
        "i": "1448",
        "codePoint": "U+1FA94",
        "name": "diya lamp",
        "entities": "",
        "code": "",
        "keywords": [
            "lighting"
        ]
    },
    "📔": {
        "i": "1449",
        "codePoint": "U+1F4D4",
        "name": "notebook with decorative cover",
        "entities": "",
        "code": "",
        "keywords": [
            "classroom",
            "study"
        ]
    },
    "📕": {
        "i": "1450",
        "codePoint": "U+1F4D5",
        "name": "closed book",
        "entities": "",
        "code": "",
        "keywords": [
            "read"
        ]
    },
    "📖": {
        "i": "1451",
        "codePoint": "U+1F4D6",
        "name": "open book",
        "entities": "",
        "code": "",
        "keywords": [
            "book"
        ]
    },
    "📗": {
        "i": "1452",
        "codePoint": "U+1F4D7",
        "name": "green book",
        "entities": "",
        "code": "",
        "keywords": [
            "library"
        ]
    },
    "📘": {
        "i": "1453",
        "codePoint": "U+1F4D8",
        "name": "blue book",
        "entities": "",
        "code": "",
        "keywords": [
            "knowledge"
        ]
    },
    "📙": {
        "i": "1454",
        "codePoint": "U+1F4D9",
        "name": "orange book",
        "entities": "",
        "code": "",
        "keywords": [
            "textbook"
        ]
    },
    "📚": {
        "i": "1455",
        "codePoint": "U+1F4DA",
        "name": "books",
        "entities": "",
        "code": "",
        "keywords": [
            "literature"
        ]
    },
    "📓": {
        "i": "1456",
        "codePoint": "U+1F4D3",
        "name": "notebook",
        "entities": "",
        "code": "",
        "keywords": [
            "stationery"
        ]
    },
    "📒": {
        "i": "1457",
        "codePoint": "U+1F4D2",
        "name": "ledger",
        "entities": "",
        "code": "",
        "keywords": [
            "notes"
        ]
    },
    "📃": {
        "i": "1458",
        "codePoint": "U+1F4C3",
        "name": "page with curl",
        "entities": "",
        "code": "",
        "keywords": [
            "documents"
        ]
    },
    "📜": {
        "i": "1459",
        "codePoint": "U+1F4DC",
        "name": "scroll",
        "entities": "",
        "code": "",
        "keywords": [
            "ancient"
        ]
    },
    "📄": {
        "i": "1460",
        "codePoint": "U+1F4C4",
        "name": "page facing up",
        "entities": "",
        "code": "",
        "keywords": [
            "office"
        ]
    },
    "📰": {
        "i": "1461",
        "codePoint": "U+1F4F0",
        "name": "newspaper",
        "entities": "",
        "code": "",
        "keywords": [
            "press"
        ]
    },
    "🗞️": {
        "i": "1462",
        "codePoint": "U+1F5DE+FE0F",
        "name": "rolled-up newspaper",
        "entities": "",
        "code": "",
        "keywords": [
            "headline"
        ]
    },
    "📑": {
        "i": "1463",
        "codePoint": "U+1F4D1",
        "name": "bookmark tabs",
        "entities": "",
        "code": "",
        "keywords": [
            "favorite",
            "order",
            "tidy"
        ]
    },
    "🔖": {
        "i": "1464",
        "codePoint": "U+1F516",
        "name": "bookmark",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏷️": {
        "i": "1465",
        "codePoint": "U+1F3F7+FE0F",
        "name": "label",
        "entities": "",
        "code": "",
        "keywords": [
            "sale",
            "tag"
        ]
    },
    "💰": {
        "i": "1466",
        "codePoint": "U+1F4B0",
        "name": "money bag",
        "entities": "",
        "code": "",
        "keywords": [
            "dollar",
            "coins"
        ]
    },
    "🪙": {
        "i": "1467",
        "codePoint": "U+1FA99",
        "name": "coin",
        "entities": "",
        "code": "",
        "keywords": [
            "money"
        ]
    },
    "💴": {
        "i": "1468",
        "codePoint": "U+1F4B4",
        "name": "banknote with yen sign",
        "entities": "",
        "code": "",
        "keywords": [
            "yen banknote",
            "currency"
        ]
    },
    "💵": {
        "i": "1469",
        "codePoint": "U+1F4B5",
        "name": "banknote with dollar sign",
        "entities": "",
        "code": "",
        "keywords": [
            "dollar banknote",
            "bill"
        ]
    },
    "💶": {
        "i": "1470",
        "codePoint": "U+1F4B6",
        "name": "banknote with euro sign",
        "entities": "",
        "code": "",
        "keywords": [
            "euro banknote"
        ]
    },
    "💷": {
        "i": "1471",
        "codePoint": "U+1F4B7",
        "name": "banknote with pound sign",
        "entities": "",
        "code": "",
        "keywords": [
            "pound banknote",
            "british",
            "sterling",
            "england"
        ]
    },
    "💸": {
        "i": "1472",
        "codePoint": "U+1F4B8",
        "name": "money with wings",
        "entities": "",
        "code": "",
        "keywords": [
            "bills"
        ]
    },
    "💳": {
        "i": "1473",
        "codePoint": "U+1F4B3",
        "name": "credit card",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧾": {
        "i": "1474",
        "codePoint": "U+1F9FE",
        "name": "receipt",
        "entities": "",
        "code": "",
        "keywords": [
            "accounting",
            "expenses"
        ]
    },
    "💹": {
        "i": "1475",
        "codePoint": "U+1F4B9",
        "name": "chart with upwards trend and yen sign",
        "entities": "",
        "code": "",
        "keywords": [
            "chart increasing with yen",
            "green-square"
        ]
    },
    "✉️": {
        "i": "1476",
        "codePoint": "U+2709+FE0F",
        "name": "envelope",
        "entities": "",
        "code": "",
        "keywords": [
            "letter",
            "postal"
        ]
    },
    "📧": {
        "i": "1477",
        "codePoint": "U+1F4E7",
        "name": "e-mail symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "e-mail",
            "inbox"
        ]
    },
    "📨": {
        "i": "1478",
        "codePoint": "U+1F4E8",
        "name": "incoming envelope",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📩": {
        "i": "1479",
        "codePoint": "U+1F4E9",
        "name": "envelope with downwards arrow above",
        "entities": "",
        "code": "",
        "keywords": [
            "envelope with arrow"
        ]
    },
    "📤": {
        "i": "1480",
        "codePoint": "U+1F4E4",
        "name": "outbox tray",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📥": {
        "i": "1481",
        "codePoint": "U+1F4E5",
        "name": "inbox tray",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📦": {
        "i": "1482",
        "codePoint": "U+1F4E6",
        "name": "package",
        "entities": "",
        "code": "",
        "keywords": [
            "mail",
            "cardboard",
            "moving"
        ]
    },
    "📫": {
        "i": "1483",
        "codePoint": "U+1F4EB",
        "name": "closed mailbox with raised flag",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📪": {
        "i": "1484",
        "codePoint": "U+1F4EA",
        "name": "closed mailbox with lowered flag",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📬": {
        "i": "1485",
        "codePoint": "U+1F4EC",
        "name": "open mailbox with raised flag",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📭": {
        "i": "1486",
        "codePoint": "U+1F4ED",
        "name": "open mailbox with lowered flag",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📮": {
        "i": "1487",
        "codePoint": "U+1F4EE",
        "name": "postbox",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🗳️": {
        "i": "1488",
        "codePoint": "U+1F5F3+FE0F",
        "name": "ballot box with ballot",
        "entities": "",
        "code": "",
        "keywords": [
            "election"
        ]
    },
    "✏️": {
        "i": "1489",
        "codePoint": "U+270F+FE0F",
        "name": "pencil",
        "entities": "",
        "code": "",
        "keywords": [
            "write"
        ]
    },
    "✒️": {
        "i": "1490",
        "codePoint": "U+2712+FE0F",
        "name": "black nib",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🖋️": {
        "i": "1491",
        "codePoint": "U+1F58B+FE0F",
        "name": "fountain pen",
        "entities": "",
        "code": "",
        "keywords": [
            "writing"
        ]
    },
    "🖊️": {
        "i": "1492",
        "codePoint": "U+1F58A+FE0F",
        "name": "pen",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🖌️": {
        "i": "1493",
        "codePoint": "U+1F58C+FE0F",
        "name": "paintbrush",
        "entities": "",
        "code": "",
        "keywords": [
            "drawing"
        ]
    },
    "🖍️": {
        "i": "1494",
        "codePoint": "U+1F58D+FE0F",
        "name": "crayon",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📝": {
        "i": "1495",
        "codePoint": "U+1F4DD",
        "name": "memo",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💼": {
        "i": "1496",
        "codePoint": "U+1F4BC",
        "name": "briefcase",
        "entities": "",
        "code": "",
        "keywords": [
            "job",
            "career"
        ]
    },
    "📁": {
        "i": "1497",
        "codePoint": "U+1F4C1",
        "name": "file folder",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📂": {
        "i": "1498",
        "codePoint": "U+1F4C2",
        "name": "open file folder",
        "entities": "",
        "code": "",
        "keywords": [
            "load"
        ]
    },
    "🗂️": {
        "i": "1499",
        "codePoint": "U+1F5C2+FE0F",
        "name": "card index dividers",
        "entities": "",
        "code": "",
        "keywords": [
            "organizing"
        ]
    },
    "📅": {
        "i": "1500",
        "codePoint": "U+1F4C5",
        "name": "calendar",
        "entities": "",
        "code": "",
        "keywords": [
            "schedule"
        ]
    },
    "📆": {
        "i": "1501",
        "codePoint": "U+1F4C6",
        "name": "tear-off calendar",
        "entities": "",
        "code": "",
        "keywords": [
            "planning"
        ]
    },
    "🗒️": {
        "i": "1502",
        "codePoint": "U+1F5D2+FE0F",
        "name": "spiral notepad",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🗓️": {
        "i": "1503",
        "codePoint": "U+1F5D3+FE0F",
        "name": "spiral calendar",
        "entities": "",
        "code": "",
        "keywords": [
            "date"
        ]
    },
    "📇": {
        "i": "1504",
        "codePoint": "U+1F4C7",
        "name": "card index",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📈": {
        "i": "1505",
        "codePoint": "U+1F4C8",
        "name": "chart with upwards trend",
        "entities": "",
        "code": "",
        "keywords": [
            "chart increasing",
            "graph",
            "recovery",
            "success"
        ]
    },
    "📉": {
        "i": "1506",
        "codePoint": "U+1F4C9",
        "name": "chart with downwards trend",
        "entities": "",
        "code": "",
        "keywords": [
            "chart decreasing",
            "presentation",
            "recession",
            "failure"
        ]
    },
    "📊": {
        "i": "1507",
        "codePoint": "U+1F4CA",
        "name": "bar chart",
        "entities": "",
        "code": "",
        "keywords": [
            "stats"
        ]
    },
    "📋": {
        "i": "1508",
        "codePoint": "U+1F4CB",
        "name": "clipboard",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📌": {
        "i": "1509",
        "codePoint": "U+1F4CC",
        "name": "pushpin",
        "entities": "",
        "code": "",
        "keywords": [
            "mark"
        ]
    },
    "📍": {
        "i": "1510",
        "codePoint": "U+1F4CD",
        "name": "round pushpin",
        "entities": "",
        "code": "",
        "keywords": [
            "map"
        ]
    },
    "📎": {
        "i": "1511",
        "codePoint": "U+1F4CE",
        "name": "paperclip",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🖇️": {
        "i": "1512",
        "codePoint": "U+1F587+FE0F",
        "name": "linked paperclips",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📏": {
        "i": "1513",
        "codePoint": "U+1F4CF",
        "name": "straight ruler",
        "entities": "",
        "code": "",
        "keywords": [
            "calculate",
            "length",
            "sketch"
        ]
    },
    "📐": {
        "i": "1514",
        "codePoint": "U+1F4D0",
        "name": "triangular ruler",
        "entities": "",
        "code": "",
        "keywords": [
            "math",
            "architect"
        ]
    },
    "✂️": {
        "i": "1515",
        "codePoint": "U+2702+FE0F",
        "name": "scissors",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🗃️": {
        "i": "1516",
        "codePoint": "U+1F5C3+FE0F",
        "name": "card file box",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🗄️": {
        "i": "1517",
        "codePoint": "U+1F5C4+FE0F",
        "name": "file cabinet",
        "entities": "",
        "code": "",
        "keywords": [
            "filing"
        ]
    },
    "🗑️": {
        "i": "1518",
        "codePoint": "U+1F5D1+FE0F",
        "name": "wastebasket",
        "entities": "",
        "code": "",
        "keywords": [
            "bin",
            "rubbish",
            "toss"
        ]
    },
    "🔒": {
        "i": "1519",
        "codePoint": "U+1F512",
        "name": "lock",
        "entities": "",
        "code": "",
        "keywords": [
            "locked",
            "security",
            "password",
            "padlock"
        ]
    },
    "🔓": {
        "i": "1520",
        "codePoint": "U+1F513",
        "name": "open lock",
        "entities": "",
        "code": "",
        "keywords": [
            "unlocked",
            "privacy"
        ]
    },
    "🔏": {
        "i": "1521",
        "codePoint": "U+1F50F",
        "name": "lock with ink pen",
        "entities": "",
        "code": "",
        "keywords": [
            "locked with pen"
        ]
    },
    "🔐": {
        "i": "1522",
        "codePoint": "U+1F510",
        "name": "closed lock with key",
        "entities": "",
        "code": "",
        "keywords": [
            "locked with key"
        ]
    },
    "🔑": {
        "i": "1523",
        "codePoint": "U+1F511",
        "name": "key",
        "entities": "",
        "code": "",
        "keywords": [
            "lock"
        ]
    },
    "🗝️": {
        "i": "1524",
        "codePoint": "U+1F5DD+FE0F",
        "name": "old key",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔨": {
        "i": "1525",
        "codePoint": "U+1F528",
        "name": "hammer",
        "entities": "",
        "code": "",
        "keywords": [
            "tools"
        ]
    },
    "🪓": {
        "i": "1526",
        "codePoint": "U+1FA93",
        "name": "axe",
        "entities": "",
        "code": "",
        "keywords": [
            "tool"
        ]
    },
    "⛏️": {
        "i": "1527",
        "codePoint": "U+26CF+FE0F",
        "name": "pick",
        "entities": "",
        "code": "",
        "keywords": [
            "dig"
        ]
    },
    "⚒️": {
        "i": "1528",
        "codePoint": "U+2692+FE0F",
        "name": "hammer and pick",
        "entities": "",
        "code": "",
        "keywords": [
            "create"
        ]
    },
    "🛠️": {
        "i": "1529",
        "codePoint": "U+1F6E0+FE0F",
        "name": "hammer and wrench",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🗡️": {
        "i": "1530",
        "codePoint": "U+1F5E1+FE0F",
        "name": "dagger",
        "entities": "",
        "code": "",
        "keywords": [
            "weapon"
        ]
    },
    "⚔️": {
        "i": "1531",
        "codePoint": "U+2694+FE0F",
        "name": "crossed swords",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "💣": {
        "i": "1532",
        "codePoint": "U+1F4A3",
        "name": "bomb",
        "entities": "",
        "code": "",
        "keywords": [
            "boom",
            "terrorism"
        ]
    },
    "🪃": {
        "i": "1533",
        "codePoint": "U+1FA83",
        "name": "boomerang",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🏹": {
        "i": "1534",
        "codePoint": "U+1F3F9",
        "name": "bow and arrow",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🛡️": {
        "i": "1535",
        "codePoint": "U+1F6E1+FE0F",
        "name": "shield",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🪚": {
        "i": "1536",
        "codePoint": "U+1FA9A",
        "name": "carpentry saw",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔧": {
        "i": "1537",
        "codePoint": "U+1F527",
        "name": "wrench",
        "entities": "",
        "code": "",
        "keywords": [
            "diy",
            "ikea"
        ]
    },
    "🪛": {
        "i": "1538",
        "codePoint": "U+1FA9B",
        "name": "screwdriver",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔩": {
        "i": "1539",
        "codePoint": "U+1F529",
        "name": "nut and bolt",
        "entities": "",
        "code": "",
        "keywords": [
            "handy"
        ]
    },
    "⚙️": {
        "i": "1540",
        "codePoint": "U+2699+FE0F",
        "name": "gear",
        "entities": "",
        "code": "",
        "keywords": [
            "cog"
        ]
    },
    "🗜️": {
        "i": "1541",
        "codePoint": "U+1F5DC+FE0F",
        "name": "clamp",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⚖️": {
        "i": "1542",
        "codePoint": "U+2696+FE0F",
        "name": "balance scale",
        "entities": "",
        "code": "",
        "keywords": [
            "fairness",
            "weight"
        ]
    },
    "🦯": {
        "i": "1543",
        "codePoint": "U+1F9AF",
        "name": "probing cane",
        "entities": "",
        "code": "",
        "keywords": [
            "white cane"
        ]
    },
    "🔗": {
        "i": "1544",
        "codePoint": "U+1F517",
        "name": "link symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "link",
            "rings",
            "url"
        ]
    },
    "⛓️‍💥": {
        "i": "1545",
        "codePoint": "U+26D3+FE0F+200D+1F4A5",
        "name": "broken chain",
        "entities": "",
        "code": "",
        "keywords": [
            "constraint"
        ]
    },
    "⛓️": {
        "i": "1546",
        "codePoint": "U+26D3+FE0F",
        "name": "chains",
        "entities": "",
        "code": "",
        "keywords": [
            "arrest"
        ]
    },
    "🪝": {
        "i": "1547",
        "codePoint": "U+1FA9D",
        "name": "hook",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧰": {
        "i": "1548",
        "codePoint": "U+1F9F0",
        "name": "toolbox",
        "entities": "",
        "code": "",
        "keywords": [
            "fix",
            "maintainer"
        ]
    },
    "🧲": {
        "i": "1549",
        "codePoint": "U+1F9F2",
        "name": "magnet",
        "entities": "",
        "code": "",
        "keywords": [
            "attraction"
        ]
    },
    "🪜": {
        "i": "1550",
        "codePoint": "U+1FA9C",
        "name": "ladder",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⚗️": {
        "i": "1551",
        "codePoint": "U+2697+FE0F",
        "name": "alembic",
        "entities": "",
        "code": "",
        "keywords": [
            "distilling"
        ]
    },
    "🧪": {
        "i": "1552",
        "codePoint": "U+1F9EA",
        "name": "test tube",
        "entities": "",
        "code": "",
        "keywords": [
            "lab"
        ]
    },
    "🧫": {
        "i": "1553",
        "codePoint": "U+1F9EB",
        "name": "petri dish",
        "entities": "",
        "code": "",
        "keywords": [
            "bacteria",
            "biology"
        ]
    },
    "🧬": {
        "i": "1554",
        "codePoint": "U+1F9EC",
        "name": "dna double helix",
        "entities": "",
        "code": "",
        "keywords": [
            "dna",
            "genetics",
            "life"
        ]
    },
    "🔬": {
        "i": "1555",
        "codePoint": "U+1F52C",
        "name": "microscope",
        "entities": "",
        "code": "",
        "keywords": [
            "laboratory",
            "zoomin"
        ]
    },
    "🔭": {
        "i": "1556",
        "codePoint": "U+1F52D",
        "name": "telescope",
        "entities": "",
        "code": "",
        "keywords": [
            "science",
            "astronomy"
        ]
    },
    "📡": {
        "i": "1557",
        "codePoint": "U+1F4E1",
        "name": "satellite antenna",
        "entities": "",
        "code": "",
        "keywords": [
            "future"
        ]
    },
    "💉": {
        "i": "1558",
        "codePoint": "U+1F489",
        "name": "syringe",
        "entities": "",
        "code": "",
        "keywords": [
            "drugs"
        ]
    },
    "🩸": {
        "i": "1559",
        "codePoint": "U+1FA78",
        "name": "drop of blood",
        "entities": "",
        "code": "",
        "keywords": [
            "period",
            "hurt",
            "harm",
            "wound"
        ]
    },
    "💊": {
        "i": "1560",
        "codePoint": "U+1F48A",
        "name": "pill",
        "entities": "",
        "code": "",
        "keywords": [
            "pharmacy",
            "drug"
        ]
    },
    "🩹": {
        "i": "1561",
        "codePoint": "U+1FA79",
        "name": "adhesive bandage",
        "entities": "",
        "code": "",
        "keywords": [
            "heal"
        ]
    },
    "🩼": {
        "i": "1562",
        "codePoint": "U+1FA7C",
        "name": "crutch",
        "entities": "",
        "code": "",
        "keywords": [
            "assist"
        ]
    },
    "🩺": {
        "i": "1563",
        "codePoint": "U+1FA7A",
        "name": "stethoscope",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🩻": {
        "i": "1564",
        "codePoint": "U+1FA7B",
        "name": "x-ray",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚪": {
        "i": "1565",
        "codePoint": "U+1F6AA",
        "name": "door",
        "entities": "",
        "code": "",
        "keywords": [
            "entry",
            "exit"
        ]
    },
    "🛗": {
        "i": "1566",
        "codePoint": "U+1F6D7",
        "name": "elevator",
        "entities": "",
        "code": "",
        "keywords": [
            "lift"
        ]
    },
    "🪞": {
        "i": "1567",
        "codePoint": "U+1FA9E",
        "name": "mirror",
        "entities": "",
        "code": "",
        "keywords": [
            "reflection"
        ]
    },
    "🪟": {
        "i": "1568",
        "codePoint": "U+1FA9F",
        "name": "window",
        "entities": "",
        "code": "",
        "keywords": [
            "scenery"
        ]
    },
    "🛏️": {
        "i": "1569",
        "codePoint": "U+1F6CF+FE0F",
        "name": "bed",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🛋️": {
        "i": "1570",
        "codePoint": "U+1F6CB+FE0F",
        "name": "couch and lamp",
        "entities": "",
        "code": "",
        "keywords": [
            "chill"
        ]
    },
    "🪑": {
        "i": "1571",
        "codePoint": "U+1FA91",
        "name": "chair",
        "entities": "",
        "code": "",
        "keywords": [
            "furniture"
        ]
    },
    "🚽": {
        "i": "1572",
        "codePoint": "U+1F6BD",
        "name": "toilet",
        "entities": "",
        "code": "",
        "keywords": [
            "wc",
            "washroom",
            "potty"
        ]
    },
    "🪠": {
        "i": "1573",
        "codePoint": "U+1FAA0",
        "name": "plunger",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚿": {
        "i": "1574",
        "codePoint": "U+1F6BF",
        "name": "shower",
        "entities": "",
        "code": "",
        "keywords": [
            "bathroom"
        ]
    },
    "🛁": {
        "i": "1575",
        "codePoint": "U+1F6C1",
        "name": "bathtub",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🪤": {
        "i": "1576",
        "codePoint": "U+1FAA4",
        "name": "mouse trap",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🪒": {
        "i": "1577",
        "codePoint": "U+1FA92",
        "name": "razor",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧴": {
        "i": "1578",
        "codePoint": "U+1F9F4",
        "name": "lotion bottle",
        "entities": "",
        "code": "",
        "keywords": [
            "moisturizer",
            "sunscreen"
        ]
    },
    "🧷": {
        "i": "1579",
        "codePoint": "U+1F9F7",
        "name": "safety pin",
        "entities": "",
        "code": "",
        "keywords": [
            "diaper"
        ]
    },
    "🧹": {
        "i": "1580",
        "codePoint": "U+1F9F9",
        "name": "broom",
        "entities": "",
        "code": "",
        "keywords": [
            "cleaning",
            "sweeping"
        ]
    },
    "🧺": {
        "i": "1581",
        "codePoint": "U+1F9FA",
        "name": "basket",
        "entities": "",
        "code": "",
        "keywords": [
            "laundry"
        ]
    },
    "🧻": {
        "i": "1582",
        "codePoint": "U+1F9FB",
        "name": "roll of paper",
        "entities": "",
        "code": "",
        "keywords": [
            "roll"
        ]
    },
    "🪣": {
        "i": "1583",
        "codePoint": "U+1FAA3",
        "name": "bucket",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🧼": {
        "i": "1584",
        "codePoint": "U+1F9FC",
        "name": "bar of soap",
        "entities": "",
        "code": "",
        "keywords": [
            "soap",
            "bathing",
            "lather"
        ]
    },
    "🫧": {
        "i": "1585",
        "codePoint": "U+1FAE7",
        "name": "bubbles",
        "entities": "",
        "code": "",
        "keywords": [
            "carbonation",
            "sparkling"
        ]
    },
    "🪥": {
        "i": "1586",
        "codePoint": "U+1FAA5",
        "name": "toothbrush",
        "entities": "",
        "code": "",
        "keywords": [
            "hygiene",
            "dental"
        ]
    },
    "🧽": {
        "i": "1587",
        "codePoint": "U+1F9FD",
        "name": "sponge",
        "entities": "",
        "code": "",
        "keywords": [
            "absorbing",
            "porous"
        ]
    },
    "🧯": {
        "i": "1588",
        "codePoint": "U+1F9EF",
        "name": "fire extinguisher",
        "entities": "",
        "code": "",
        "keywords": [
            "quench"
        ]
    },
    "🛒": {
        "i": "1589",
        "codePoint": "U+1F6D2",
        "name": "shopping trolley",
        "entities": "",
        "code": "",
        "keywords": [
            "shopping cart",
            "trolley"
        ]
    },
    "🚬": {
        "i": "1590",
        "codePoint": "U+1F6AC",
        "name": "smoking symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "cigarette",
            "kills",
            "tobacco",
            "joint"
        ]
    },
    "⚰️": {
        "i": "1591",
        "codePoint": "U+26B0+FE0F",
        "name": "coffin",
        "entities": "",
        "code": "",
        "keywords": [
            "die",
            "graveyard",
            "cemetery",
            "casket",
            "funeral"
        ]
    },
    "🪦": {
        "i": "1592",
        "codePoint": "U+1FAA6",
        "name": "headstone",
        "entities": "",
        "code": "",
        "keywords": [
            "death",
            "grave"
        ]
    },
    "⚱️": {
        "i": "1593",
        "codePoint": "U+26B1+FE0F",
        "name": "funeral urn",
        "entities": "",
        "code": "",
        "keywords": [
            "rip",
            "ashes"
        ]
    },
    "🧿": {
        "i": "1594",
        "codePoint": "U+1F9FF",
        "name": "nazar amulet",
        "entities": "",
        "code": "",
        "keywords": [
            "bead",
            "charm"
        ]
    },
    "🪬": {
        "i": "1595",
        "codePoint": "U+1FAAC",
        "name": "hamsa",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🗿": {
        "i": "1596",
        "codePoint": "U+1F5FF",
        "name": "moyai",
        "entities": "",
        "code": "",
        "keywords": [
            "moai",
            "easter island"
        ]
    },
    "🪧": {
        "i": "1597",
        "codePoint": "U+1FAA7",
        "name": "placard",
        "entities": "",
        "code": "",
        "keywords": [
            "announcement"
        ]
    },
    "🪪": {
        "i": "1598",
        "codePoint": "U+1FAAA",
        "name": "identification card",
        "entities": "",
        "code": "",
        "keywords": [
            "document"
        ]
    },
    "🏧": {
        "i": "1599",
        "codePoint": "U+1F3E7",
        "name": "automated teller machine",
        "entities": "",
        "code": "",
        "keywords": [
            "ATM sign",
            "cash"
        ]
    },
    "🚮": {
        "i": "1600",
        "codePoint": "U+1F6AE",
        "name": "put litter in its place symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "litter in bin sign",
            "sign"
        ]
    },
    "🚰": {
        "i": "1601",
        "codePoint": "U+1F6B0",
        "name": "potable water symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "potable water",
            "liquid"
        ]
    },
    "♿": {
        "i": "1602",
        "codePoint": "U+267F",
        "name": "wheelchair symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "disabled"
        ]
    },
    "🚹": {
        "i": "1603",
        "codePoint": "U+1F6B9",
        "name": "mens symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "men’s room",
            "gender"
        ]
    },
    "🚺": {
        "i": "1604",
        "codePoint": "U+1F6BA",
        "name": "womens symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "women’s room",
            "loo"
        ]
    },
    "🚻": {
        "i": "1605",
        "codePoint": "U+1F6BB",
        "name": "restroom",
        "entities": "",
        "code": "",
        "keywords": [
            "refresh"
        ]
    },
    "🚼": {
        "i": "1606",
        "codePoint": "U+1F6BC",
        "name": "baby symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "orange-square"
        ]
    },
    "🚾": {
        "i": "1607",
        "codePoint": "U+1F6BE",
        "name": "water closet",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🛂": {
        "i": "1608",
        "codePoint": "U+1F6C2",
        "name": "passport control",
        "entities": "",
        "code": "",
        "keywords": [
            "custom"
        ]
    },
    "🛃": {
        "i": "1609",
        "codePoint": "U+1F6C3",
        "name": "customs",
        "entities": "",
        "code": "",
        "keywords": [
            "passport",
            "border"
        ]
    },
    "🛄": {
        "i": "1610",
        "codePoint": "U+1F6C4",
        "name": "baggage claim",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🛅": {
        "i": "1611",
        "codePoint": "U+1F6C5",
        "name": "left luggage",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⚠️": {
        "i": "1612",
        "codePoint": "U+26A0+FE0F",
        "name": "warning",
        "entities": "",
        "code": "",
        "keywords": [
            "exclamation",
            "error",
            "problem",
            "issue"
        ]
    },
    "🚸": {
        "i": "1613",
        "codePoint": "U+1F6B8",
        "name": "children crossing",
        "entities": "",
        "code": "",
        "keywords": [
            "yellow-diamond"
        ]
    },
    "⛔": {
        "i": "1614",
        "codePoint": "U+26D4",
        "name": "no entry",
        "entities": "",
        "code": "",
        "keywords": [
            "limit",
            "denied"
        ]
    },
    "🚫": {
        "i": "1615",
        "codePoint": "U+1F6AB",
        "name": "no entry sign",
        "entities": "",
        "code": "",
        "keywords": [
            "prohibited",
            "forbid",
            "disallow"
        ]
    },
    "🚳": {
        "i": "1616",
        "codePoint": "U+1F6B3",
        "name": "no bicycles",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🚭": {
        "i": "1617",
        "codePoint": "U+1F6AD",
        "name": "no smoking symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "no smoking"
        ]
    },
    "🚯": {
        "i": "1618",
        "codePoint": "U+1F6AF",
        "name": "do not litter symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "no littering",
            "trash",
            "garbage"
        ]
    },
    "🚱": {
        "i": "1619",
        "codePoint": "U+1F6B1",
        "name": "non-potable water symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "non-potable water",
            "faucet",
            "tap"
        ]
    },
    "🚷": {
        "i": "1620",
        "codePoint": "U+1F6B7",
        "name": "no pedestrians",
        "entities": "",
        "code": "",
        "keywords": [
            "rules",
            "crossing"
        ]
    },
    "📵": {
        "i": "1621",
        "codePoint": "U+1F4F5",
        "name": "no mobile phones",
        "entities": "",
        "code": "",
        "keywords": [
            "circle"
        ]
    },
    "🔞": {
        "i": "1622",
        "codePoint": "U+1F51E",
        "name": "no one under eighteen symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "no one under eighteen",
            "18",
            "minor"
        ]
    },
    "☢️": {
        "i": "1623",
        "codePoint": "U+2622+FE0F",
        "name": "radioactive",
        "entities": "",
        "code": "",
        "keywords": [
            "nuclear"
        ]
    },
    "☣️": {
        "i": "1624",
        "codePoint": "U+2623+FE0F",
        "name": "biohazard",
        "entities": "",
        "code": "",
        "keywords": [
            "danger"
        ]
    },
    "↗️": {
        "i": "1625",
        "codePoint": "U+2197+FE0F",
        "name": "up-right arrow",
        "entities": "",
        "code": "",
        "keywords": [
            "point",
            "northeast"
        ]
    },
    "↘️": {
        "i": "1626",
        "codePoint": "U+2198+FE0F",
        "name": "down-right arrow",
        "entities": "",
        "code": "",
        "keywords": [
            "diagonal",
            "southeast"
        ]
    },
    "↙️": {
        "i": "1627",
        "codePoint": "U+2199+FE0F",
        "name": "down-left arrow",
        "entities": "",
        "code": "",
        "keywords": [
            "southwest"
        ]
    },
    "↖️": {
        "i": "1628",
        "codePoint": "U+2196+FE0F",
        "name": "up-left arrow",
        "entities": "",
        "code": "",
        "keywords": [
            "northwest"
        ]
    },
    "↕️": {
        "i": "1629",
        "codePoint": "U+2195+FE0F",
        "name": "up-down arrow",
        "entities": "",
        "code": "",
        "keywords": [
            "way",
            "vertical"
        ]
    },
    "↔️": {
        "i": "1630",
        "codePoint": "U+2194+FE0F",
        "name": "left-right arrow",
        "entities": "",
        "code": "",
        "keywords": [
            "shape",
            "horizontal",
            "sideways"
        ]
    },
    "↩️": {
        "i": "1631",
        "codePoint": "U+21A9+FE0F",
        "name": "right arrow curving left",
        "entities": "",
        "code": "",
        "keywords": [
            "back",
            "undo",
            "enter"
        ]
    },
    "↪️": {
        "i": "1632",
        "codePoint": "U+21AA+FE0F",
        "name": "left arrow curving right",
        "entities": "",
        "code": "",
        "keywords": [
            "return",
            "rotate"
        ]
    },
    "⤴️": {
        "i": "1633",
        "codePoint": "U+2934+FE0F",
        "name": "right arrow curving up",
        "entities": "",
        "code": "",
        "keywords": [
            "top"
        ]
    },
    "⤵️": {
        "i": "1634",
        "codePoint": "U+2935+FE0F",
        "name": "right arrow curving down",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔃": {
        "i": "1635",
        "codePoint": "U+1F503",
        "name": "clockwise downwards and upwards open circle arrows",
        "entities": "",
        "code": "",
        "keywords": [
            "clockwise vertical arrows",
            "sync",
            "repeat"
        ]
    },
    "🔄": {
        "i": "1636",
        "codePoint": "U+1F504",
        "name": "anticlockwise downwards and upwards open circle arrows",
        "entities": "",
        "code": "",
        "keywords": [
            "counterclockwise arrows button",
            "cycle"
        ]
    },
    "🔙": {
        "i": "1637",
        "codePoint": "U+1F519",
        "name": "back with leftwards arrow above",
        "entities": "",
        "code": "",
        "keywords": [
            "BACK arrow",
            "arrow"
        ]
    },
    "🔚": {
        "i": "1638",
        "codePoint": "U+1F51A",
        "name": "end with leftwards arrow above",
        "entities": "",
        "code": "",
        "keywords": [
            "END arrow"
        ]
    },
    "🔛": {
        "i": "1639",
        "codePoint": "U+1F51B",
        "name": "on with exclamation mark with left right arrow above",
        "entities": "",
        "code": "",
        "keywords": [
            "ON! arrow"
        ]
    },
    "🔜": {
        "i": "1640",
        "codePoint": "U+1F51C",
        "name": "soon with rightwards arrow above",
        "entities": "",
        "code": "",
        "keywords": [
            "SOON arrow"
        ]
    },
    "🔝": {
        "i": "1641",
        "codePoint": "U+1F51D",
        "name": "top with upwards arrow above",
        "entities": "",
        "code": "",
        "keywords": [
            "TOP arrow"
        ]
    },
    "🛐": {
        "i": "1642",
        "codePoint": "U+1F6D0",
        "name": "place of worship",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⚛️": {
        "i": "1643",
        "codePoint": "U+269B+FE0F",
        "name": "atom symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "physics"
        ]
    },
    "🕉️": {
        "i": "1644",
        "codePoint": "U+1F549+FE0F",
        "name": "om",
        "entities": "",
        "code": "",
        "keywords": [
            "buddhism",
            "jainism"
        ]
    },
    "✡️": {
        "i": "1645",
        "codePoint": "U+2721+FE0F",
        "name": "star of David",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "☸️": {
        "i": "1646",
        "codePoint": "U+2638+FE0F",
        "name": "wheel of dharma",
        "entities": "",
        "code": "",
        "keywords": [
            "sikhism"
        ]
    },
    "☯️": {
        "i": "1647",
        "codePoint": "U+262F+FE0F",
        "name": "yin yang",
        "entities": "",
        "code": "",
        "keywords": [
            "balance"
        ]
    },
    "✝️": {
        "i": "1648",
        "codePoint": "U+271D+FE0F",
        "name": "latin cross",
        "entities": "",
        "code": "",
        "keywords": [
            "christianity"
        ]
    },
    "☦️": {
        "i": "1649",
        "codePoint": "U+2626+FE0F",
        "name": "orthodox cross",
        "entities": "",
        "code": "",
        "keywords": [
            "suppedaneum"
        ]
    },
    "☪️": {
        "i": "1650",
        "codePoint": "U+262A+FE0F",
        "name": "star and crescent",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "☮️": {
        "i": "1651",
        "codePoint": "U+262E+FE0F",
        "name": "peace symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "hippie"
        ]
    },
    "🕎": {
        "i": "1652",
        "codePoint": "U+1F54E",
        "name": "menorah with nine branches",
        "entities": "",
        "code": "",
        "keywords": [
            "menorah",
            "hanukkah",
            "candles"
        ]
    },
    "🔯": {
        "i": "1653",
        "codePoint": "U+1F52F",
        "name": "six pointed star with middle dot",
        "entities": "",
        "code": "",
        "keywords": [
            "dotted six-pointed star",
            "jewish",
            "hexagram"
        ]
    },
    "🪯": {
        "i": "1654",
        "codePoint": "U+1FAAF",
        "name": "khanda",
        "entities": "",
        "code": "",
        "keywords": [
            "Sikhism"
        ]
    },
    "♈": {
        "i": "1655",
        "codePoint": "U+2648",
        "name": "aries",
        "entities": "",
        "code": "",
        "keywords": [
            "Aries",
            "zodiac"
        ]
    },
    "♉": {
        "i": "1656",
        "codePoint": "U+2649",
        "name": "taurus",
        "entities": "",
        "code": "",
        "keywords": [
            "Taurus",
            "astrology"
        ]
    },
    "♊": {
        "i": "1657",
        "codePoint": "U+264A",
        "name": "gemini",
        "entities": "",
        "code": "",
        "keywords": [
            "Gemini"
        ]
    },
    "♋": {
        "i": "1658",
        "codePoint": "U+264B",
        "name": "cancer",
        "entities": "",
        "code": "",
        "keywords": [
            "Cancer"
        ]
    },
    "♌": {
        "i": "1659",
        "codePoint": "U+264C",
        "name": "leo",
        "entities": "",
        "code": "",
        "keywords": [
            "Leo"
        ]
    },
    "♍": {
        "i": "1660",
        "codePoint": "U+264D",
        "name": "virgo",
        "entities": "",
        "code": "",
        "keywords": [
            "Virgo"
        ]
    },
    "♏": {
        "i": "1661",
        "codePoint": "U+264F",
        "name": "scorpius",
        "entities": "",
        "code": "",
        "keywords": [
            "Scorpio"
        ]
    },
    "♐": {
        "i": "1662",
        "codePoint": "U+2650",
        "name": "sagittarius",
        "entities": "",
        "code": "",
        "keywords": [
            "Sagittarius"
        ]
    },
    "♑": {
        "i": "1663",
        "codePoint": "U+2651",
        "name": "capricorn",
        "entities": "",
        "code": "",
        "keywords": [
            "Capricorn"
        ]
    },
    "♒": {
        "i": "1664",
        "codePoint": "U+2652",
        "name": "aquarius",
        "entities": "",
        "code": "",
        "keywords": [
            "Aquarius"
        ]
    },
    "♓": {
        "i": "1665",
        "codePoint": "U+2653",
        "name": "pisces",
        "entities": "",
        "code": "",
        "keywords": [
            "Pisces"
        ]
    },
    "⛎": {
        "i": "1666",
        "codePoint": "U+26CE",
        "name": "ophiuchus",
        "entities": "",
        "code": "",
        "keywords": [
            "Ophiuchus",
            "constellation"
        ]
    },
    "🔀": {
        "i": "1667",
        "codePoint": "U+1F500",
        "name": "twisted rightwards arrows",
        "entities": "",
        "code": "",
        "keywords": [
            "shuffle tracks button",
            "shuffle"
        ]
    },
    "🔁": {
        "i": "1668",
        "codePoint": "U+1F501",
        "name": "clockwise rightwards and leftwards open circle arrows",
        "entities": "",
        "code": "",
        "keywords": [
            "repeat button",
            "loop"
        ]
    },
    "🔂": {
        "i": "1669",
        "codePoint": "U+1F502",
        "name": "clockwise rightwards and leftwards open circle arrows with circled one overlay",
        "entities": "",
        "code": "",
        "keywords": [
            "repeat single button"
        ]
    },
    "▶️": {
        "i": "1670",
        "codePoint": "U+25B6+FE0F",
        "name": "play button",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⏩": {
        "i": "1671",
        "codePoint": "U+23E9",
        "name": "black right-pointing double triangle",
        "entities": "",
        "code": "",
        "keywords": [
            "fast-forward button"
        ]
    },
    "⏭️": {
        "i": "1672",
        "codePoint": "U+23ED+FE0F",
        "name": "next track button",
        "entities": "",
        "code": "",
        "keywords": [
            "forward"
        ]
    },
    "⏯️": {
        "i": "1673",
        "codePoint": "U+23EF+FE0F",
        "name": "play or pause button",
        "entities": "",
        "code": "",
        "keywords": [
            "pause"
        ]
    },
    "◀️": {
        "i": "1674",
        "codePoint": "U+25C0+FE0F",
        "name": "reverse button",
        "entities": "",
        "code": "",
        "keywords": [
            "left"
        ]
    },
    "⏪": {
        "i": "1675",
        "codePoint": "U+23EA",
        "name": "black left-pointing double triangle",
        "entities": "",
        "code": "",
        "keywords": [
            "fast reverse button"
        ]
    },
    "⏮️": {
        "i": "1676",
        "codePoint": "U+23EE+FE0F",
        "name": "last track button",
        "entities": "",
        "code": "",
        "keywords": [
            "backward"
        ]
    },
    "🔼": {
        "i": "1677",
        "codePoint": "U+1F53C",
        "name": "up-pointing small red triangle",
        "entities": "",
        "code": "",
        "keywords": [
            "upwards button",
            "triangle"
        ]
    },
    "⏫": {
        "i": "1678",
        "codePoint": "U+23EB",
        "name": "black up-pointing double triangle",
        "entities": "",
        "code": "",
        "keywords": [
            "fast up button"
        ]
    },
    "🔽": {
        "i": "1679",
        "codePoint": "U+1F53D",
        "name": "down-pointing small red triangle",
        "entities": "",
        "code": "",
        "keywords": [
            "downwards button"
        ]
    },
    "⏬": {
        "i": "1680",
        "codePoint": "U+23EC",
        "name": "black down-pointing double triangle",
        "entities": "",
        "code": "",
        "keywords": [
            "fast down button"
        ]
    },
    "⏸️": {
        "i": "1681",
        "codePoint": "U+23F8+FE0F",
        "name": "pause button",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⏹️": {
        "i": "1682",
        "codePoint": "U+23F9+FE0F",
        "name": "stop button",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⏺️": {
        "i": "1683",
        "codePoint": "U+23FA+FE0F",
        "name": "record button",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⏏️": {
        "i": "1684",
        "codePoint": "U+23CF+FE0F",
        "name": "eject button",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🎦": {
        "i": "1685",
        "codePoint": "U+1F3A6",
        "name": "cinema",
        "entities": "",
        "code": "",
        "keywords": [
            "curtain",
            "stage"
        ]
    },
    "🔅": {
        "i": "1686",
        "codePoint": "U+1F505",
        "name": "low brightness symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "dim button",
            "afternoon"
        ]
    },
    "🔆": {
        "i": "1687",
        "codePoint": "U+1F506",
        "name": "high brightness symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "bright button"
        ]
    },
    "📶": {
        "i": "1688",
        "codePoint": "U+1F4F6",
        "name": "antenna with bars",
        "entities": "",
        "code": "",
        "keywords": [
            "antenna bars",
            "reception",
            "connection",
            "bluetooth",
            "bars"
        ]
    },
    "🛜": {
        "i": "1689",
        "codePoint": "U+1F6DC",
        "name": "wireless",
        "entities": "",
        "code": "",
        "keywords": [
            "wifi",
            "contactless"
        ]
    },
    "📳": {
        "i": "1690",
        "codePoint": "U+1F4F3",
        "name": "vibration mode",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "📴": {
        "i": "1691",
        "codePoint": "U+1F4F4",
        "name": "mobile phone off",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "♀️": {
        "i": "1692",
        "codePoint": "U+2640+FE0F",
        "name": "female sign",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "♂️": {
        "i": "1693",
        "codePoint": "U+2642+FE0F",
        "name": "male sign",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⚧️": {
        "i": "1694",
        "codePoint": "U+26A7+FE0F",
        "name": "transgender symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "transgender"
        ]
    },
    "✖️": {
        "i": "1695",
        "codePoint": "U+2716+FE0F",
        "name": "multiply",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "➕": {
        "i": "1696",
        "codePoint": "U+2795",
        "name": "heavy plus sign",
        "entities": "",
        "code": "",
        "keywords": [
            "plus",
            "addition",
            "more",
            "increase"
        ]
    },
    "➖": {
        "i": "1697",
        "codePoint": "U+2796",
        "name": "heavy minus sign",
        "entities": "",
        "code": "",
        "keywords": [
            "minus",
            "subtract",
            "less"
        ]
    },
    "➗": {
        "i": "1698",
        "codePoint": "U+2797",
        "name": "heavy division sign",
        "entities": "",
        "code": "",
        "keywords": [
            "divide",
            "divide"
        ]
    },
    "🟰": {
        "i": "1699",
        "codePoint": "U+1F7F0",
        "name": "heavy equals sign",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "‼️": {
        "i": "1700",
        "codePoint": "U+203C+FE0F",
        "name": "double exclamation mark",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⁉️": {
        "i": "1701",
        "codePoint": "U+2049+FE0F",
        "name": "exclamation question mark",
        "entities": "",
        "code": "",
        "keywords": [
            "wat"
        ]
    },
    "❓": {
        "i": "1702",
        "codePoint": "U+2753",
        "name": "black question mark ornament",
        "entities": "",
        "code": "",
        "keywords": [
            "red question mark"
        ]
    },
    "❔": {
        "i": "1703",
        "codePoint": "U+2754",
        "name": "white question mark ornament",
        "entities": "",
        "code": "",
        "keywords": [
            "white question mark",
            "doubts"
        ]
    },
    "❕": {
        "i": "1704",
        "codePoint": "U+2755",
        "name": "white exclamation mark ornament",
        "entities": "",
        "code": "",
        "keywords": [
            "white exclamation mark",
            "punctuation"
        ]
    },
    "❗": {
        "i": "1705",
        "codePoint": "U+2757",
        "name": "heavy exclamation mark symbol",
        "entities": "",
        "code": "",
        "keywords": [
            "red exclamation mark"
        ]
    },
    "〰️": {
        "i": "1706",
        "codePoint": "U+3030+FE0F",
        "name": "wavy dash",
        "entities": "",
        "code": "",
        "keywords": [
            "draw",
            "line",
            "moustache"
        ]
    },
    "💱": {
        "i": "1707",
        "codePoint": "U+1F4B1",
        "name": "currency exchange",
        "entities": "",
        "code": "",
        "keywords": [
            "travel"
        ]
    },
    "💲": {
        "i": "1708",
        "codePoint": "U+1F4B2",
        "name": "heavy dollar sign",
        "entities": "",
        "code": "",
        "keywords": [
            "payment",
            "buck"
        ]
    },
    "⚕️": {
        "i": "1709",
        "codePoint": "U+2695+FE0F",
        "name": "medical symbol",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "♻️": {
        "i": "1710",
        "codePoint": "U+267B+FE0F",
        "name": "recycling symbol",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⚜️": {
        "i": "1711",
        "codePoint": "U+269C+FE0F",
        "name": "fleur-de-lis",
        "entities": "",
        "code": "",
        "keywords": [
            "decorative"
        ]
    },
    "🔱": {
        "i": "1712",
        "codePoint": "U+1F531",
        "name": "trident emblem",
        "entities": "",
        "code": "",
        "keywords": [
            "spear"
        ]
    },
    "📛": {
        "i": "1713",
        "codePoint": "U+1F4DB",
        "name": "name badge",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔰": {
        "i": "1714",
        "codePoint": "U+1F530",
        "name": "Japanese symbol for beginner",
        "entities": "",
        "code": "",
        "keywords": [
            "badge"
        ]
    },
    "✅": {
        "i": "1715",
        "codePoint": "U+2705",
        "name": "white heavy check mark",
        "entities": "",
        "code": "",
        "keywords": [
            "check mark button",
            "vote",
            "answer"
        ]
    },
    "➰": {
        "i": "1716",
        "codePoint": "U+27B0",
        "name": "curly loop",
        "entities": "",
        "code": "",
        "keywords": [
            "scribble",
            "squiggle"
        ]
    },
    "➿": {
        "i": "1717",
        "codePoint": "U+27BF",
        "name": "double curly loop",
        "entities": "",
        "code": "",
        "keywords": [
            "tape",
            "cassette"
        ]
    },
    "〽️": {
        "i": "1718",
        "codePoint": "U+303D+FE0F",
        "name": "part alternation mark",
        "entities": "",
        "code": "",
        "keywords": [
            "economics"
        ]
    },
    "✳️": {
        "i": "1719",
        "codePoint": "U+2733+FE0F",
        "name": "eight-spoked asterisk",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "✴️": {
        "i": "1720",
        "codePoint": "U+2734+FE0F",
        "name": "eight-pointed star",
        "entities": "",
        "code": "",
        "keywords": [
            "polygon"
        ]
    },
    "❇️": {
        "i": "1721",
        "codePoint": "U+2747+FE0F",
        "name": "sparkle",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "©️": {
        "i": "1722",
        "codePoint": "U+00A9+FE0F",
        "name": "copyright",
        "entities": "",
        "code": "",
        "keywords": [
            "ip",
            "license"
        ]
    },
    "®️": {
        "i": "1723",
        "codePoint": "U+00AE+FE0F",
        "name": "registered",
        "entities": "",
        "code": "",
        "keywords": [
            "alphabet"
        ]
    },
    "™️": {
        "i": "1724",
        "codePoint": "U+2122+FE0F",
        "name": "trade mark",
        "entities": "",
        "code": "",
        "keywords": [
            "trademark",
            "brand"
        ]
    },
    "*️⃣": {
        "i": "1726",
        "codePoint": "U+002A+FE0F+20E3",
        "name": "keycap *",
        "entities": "",
        "code": "",
        "keywords": [
            "keycap"
        ]
    },
    "0️⃣": {
        "i": "1727",
        "codePoint": "U+0030+FE0F+20E3",
        "name": "keycap 0",
        "entities": "",
        "code": "",
        "keywords": [
            "0",
            "null",
            "zero"
        ]
    },
    "1️⃣": {
        "i": "1728",
        "codePoint": "U+0031+FE0F+20E3",
        "name": "keycap 1",
        "entities": "",
        "code": "",
        "keywords": [
            "one"
        ]
    },
    "2️⃣": {
        "i": "1729",
        "codePoint": "U+0032+FE0F+20E3",
        "name": "keycap 2",
        "entities": "",
        "code": "",
        "keywords": [
            "numbers"
        ]
    },
    "3️⃣": {
        "i": "1730",
        "codePoint": "U+0033+FE0F+20E3",
        "name": "keycap 3",
        "entities": "",
        "code": "",
        "keywords": [
            "prime",
            "three"
        ]
    },
    "4️⃣": {
        "i": "1731",
        "codePoint": "U+0034+FE0F+20E3",
        "name": "keycap 4",
        "entities": "",
        "code": "",
        "keywords": [
            "four"
        ]
    },
    "5️⃣": {
        "i": "1732",
        "codePoint": "U+0035+FE0F+20E3",
        "name": "keycap 5",
        "entities": "",
        "code": "",
        "keywords": [
            "five"
        ]
    },
    "6️⃣": {
        "i": "1733",
        "codePoint": "U+0036+FE0F+20E3",
        "name": "keycap 6",
        "entities": "",
        "code": "",
        "keywords": [
            "six"
        ]
    },
    "7️⃣": {
        "i": "1734",
        "codePoint": "U+0037+FE0F+20E3",
        "name": "keycap 7",
        "entities": "",
        "code": "",
        "keywords": [
            "seven"
        ]
    },
    "8️⃣": {
        "i": "1735",
        "codePoint": "U+0038+FE0F+20E3",
        "name": "keycap 8",
        "entities": "",
        "code": "",
        "keywords": [
            "eight"
        ]
    },
    "9️⃣": {
        "i": "1736",
        "codePoint": "U+0039+FE0F+20E3",
        "name": "keycap 9",
        "entities": "",
        "code": "",
        "keywords": [
            "nine"
        ]
    },
    "🔟": {
        "i": "1737",
        "codePoint": "U+1F51F",
        "name": "keycap ten",
        "entities": "",
        "code": "",
        "keywords": [
            "keycap 10",
            "ten"
        ]
    },
    "🔠": {
        "i": "1738",
        "codePoint": "U+1F520",
        "name": "input symbol for Latin capital letters",
        "entities": "",
        "code": "",
        "keywords": [
            "input latin uppercase",
            "letters",
            "uppercase"
        ]
    },
    "🔡": {
        "i": "1739",
        "codePoint": "U+1F521",
        "name": "input symbol for Latin small letters",
        "entities": "",
        "code": "",
        "keywords": [
            "input latin lowercase",
            "lowercase"
        ]
    },
    "🔢": {
        "i": "1740",
        "codePoint": "U+1F522",
        "name": "input symbol for numbers",
        "entities": "",
        "code": "",
        "keywords": [
            "input numbers",
            "1234"
        ]
    },
    "🔣": {
        "i": "1741",
        "codePoint": "U+1F523",
        "name": "input symbol for symbols",
        "entities": "",
        "code": "",
        "keywords": [
            "input symbols",
            "note",
            "ampersand",
            "percent",
            "glyphs",
            "characters"
        ]
    },
    "🔤": {
        "i": "1742",
        "codePoint": "U+1F524",
        "name": "input symbol for Latin letters",
        "entities": "",
        "code": "",
        "keywords": [
            "input latin letters"
        ]
    },
    "🅰️": {
        "i": "1743",
        "codePoint": "U+1F170+FE0F",
        "name": "A button (blood type)",
        "entities": "",
        "code": "",
        "keywords": [
            "red-square"
        ]
    },
    "🆎": {
        "i": "1744",
        "codePoint": "U+1F18E",
        "name": "negative squared ab",
        "entities": "",
        "code": "",
        "keywords": [
            "AB button (blood type)"
        ]
    },
    "🅱️": {
        "i": "1745",
        "codePoint": "U+1F171+FE0F",
        "name": "B button (blood type)",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🆑": {
        "i": "1746",
        "codePoint": "U+1F191",
        "name": "squared cl",
        "entities": "",
        "code": "",
        "keywords": [
            "CL button"
        ]
    },
    "🆒": {
        "i": "1747",
        "codePoint": "U+1F192",
        "name": "squared cool",
        "entities": "",
        "code": "",
        "keywords": [
            "COOL button"
        ]
    },
    "🆓": {
        "i": "1748",
        "codePoint": "U+1F193",
        "name": "squared free",
        "entities": "",
        "code": "",
        "keywords": [
            "FREE button"
        ]
    },
    "ℹ️": {
        "i": "1749",
        "codePoint": "U+2139+FE0F",
        "name": "information",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🆔": {
        "i": "1750",
        "codePoint": "U+1F194",
        "name": "squared id",
        "entities": "",
        "code": "",
        "keywords": [
            "ID button"
        ]
    },
    "Ⓜ️": {
        "i": "1751",
        "codePoint": "U+24C2+FE0F",
        "name": "circled M",
        "entities": "",
        "code": "",
        "keywords": [
            "blue-circle"
        ]
    },
    "🆕": {
        "i": "1752",
        "codePoint": "U+1F195",
        "name": "squared new",
        "entities": "",
        "code": "",
        "keywords": [
            "NEW button",
            "start"
        ]
    },
    "🆖": {
        "i": "1753",
        "codePoint": "U+1F196",
        "name": "squared ng",
        "entities": "",
        "code": "",
        "keywords": [
            "NG button",
            "icon"
        ]
    },
    "🅾️": {
        "i": "1754",
        "codePoint": "U+1F17E+FE0F",
        "name": "O button (blood type)",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🆗": {
        "i": "1755",
        "codePoint": "U+1F197",
        "name": "squared ok",
        "entities": "",
        "code": "",
        "keywords": [
            "OK button"
        ]
    },
    "🅿️": {
        "i": "1756",
        "codePoint": "U+1F17F+FE0F",
        "name": "P button",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🆘": {
        "i": "1757",
        "codePoint": "U+1F198",
        "name": "squared sos",
        "entities": "",
        "code": "",
        "keywords": [
            "SOS button",
            "help"
        ]
    },
    "🆙": {
        "i": "1758",
        "codePoint": "U+1F199",
        "name": "squared up with exclamation mark",
        "entities": "",
        "code": "",
        "keywords": [
            "UP! button",
            "above",
            "high"
        ]
    },
    "🆚": {
        "i": "1759",
        "codePoint": "U+1F19A",
        "name": "squared vs",
        "entities": "",
        "code": "",
        "keywords": [
            "VS button"
        ]
    },
    "🈁": {
        "i": "1760",
        "codePoint": "U+1F201",
        "name": "squared katakana koko",
        "entities": "",
        "code": "",
        "keywords": [
            "Japanese “here” button",
            "here",
            "destination"
        ]
    },
    "🈂️": {
        "i": "1761",
        "codePoint": "U+1F202+FE0F",
        "name": "Japanese “service charge” button",
        "entities": "",
        "code": "",
        "keywords": [
            "katakana"
        ]
    },
    "🈷️": {
        "i": "1762",
        "codePoint": "U+1F237+FE0F",
        "name": "Japanese “monthly amount” button",
        "entities": "",
        "code": "",
        "keywords": [
            "month",
            "moon"
        ]
    },
    "🈶": {
        "i": "1763",
        "codePoint": "U+1F236",
        "name": "squared cjk unified ideograph-6709",
        "entities": "",
        "code": "",
        "keywords": [
            "Japanese “not free of charge” button",
            "have"
        ]
    },
    "🈯": {
        "i": "1764",
        "codePoint": "U+1F22F",
        "name": "squared cjk unified ideograph-6307",
        "entities": "",
        "code": "",
        "keywords": [
            "Japanese “reserved” button"
        ]
    },
    "🉐": {
        "i": "1765",
        "codePoint": "U+1F250",
        "name": "circled ideograph advantage",
        "entities": "",
        "code": "",
        "keywords": [
            "Japanese “bargain” button",
            "kanji",
            "obtain",
            "get"
        ]
    },
    "🈹": {
        "i": "1766",
        "codePoint": "U+1F239",
        "name": "squared cjk unified ideograph-5272",
        "entities": "",
        "code": "",
        "keywords": [
            "Japanese “discount” button",
            "pink-square"
        ]
    },
    "🈚": {
        "i": "1767",
        "codePoint": "U+1F21A",
        "name": "squared cjk unified ideograph-7121",
        "entities": "",
        "code": "",
        "keywords": [
            "Japanese “free of charge” button",
            "nothing"
        ]
    },
    "🈲": {
        "i": "1768",
        "codePoint": "U+1F232",
        "name": "squared cjk unified ideograph-7981",
        "entities": "",
        "code": "",
        "keywords": [
            "Japanese “prohibited” button",
            "forbidden",
            "restricted"
        ]
    },
    "🉑": {
        "i": "1769",
        "codePoint": "U+1F251",
        "name": "circled ideograph accept",
        "entities": "",
        "code": "",
        "keywords": [
            "Japanese “acceptable” button",
            "orange-circle"
        ]
    },
    "🈸": {
        "i": "1770",
        "codePoint": "U+1F238",
        "name": "squared cjk unified ideograph-7533",
        "entities": "",
        "code": "",
        "keywords": [
            "Japanese “application” button"
        ]
    },
    "🈴": {
        "i": "1771",
        "codePoint": "U+1F234",
        "name": "squared cjk unified ideograph-5408",
        "entities": "",
        "code": "",
        "keywords": [
            "Japanese “passing grade” button",
            "join"
        ]
    },
    "🈳": {
        "i": "1772",
        "codePoint": "U+1F233",
        "name": "squared cjk unified ideograph-7a7a",
        "entities": "",
        "code": "",
        "keywords": [
            "Japanese “vacancy” button",
            "empty"
        ]
    },
    "㊗️": {
        "i": "1773",
        "codePoint": "U+3297+FE0F",
        "name": "Japanese “congratulations” button",
        "entities": "",
        "code": "",
        "keywords": [
            "red-circle"
        ]
    },
    "㊙️": {
        "i": "1774",
        "codePoint": "U+3299+FE0F",
        "name": "Japanese “secret” button",
        "entities": "",
        "code": "",
        "keywords": [
            "sshh"
        ]
    },
    "🈺": {
        "i": "1775",
        "codePoint": "U+1F23A",
        "name": "squared cjk unified ideograph-55b6",
        "entities": "",
        "code": "",
        "keywords": [
            "Japanese “open for business” button",
            "opening hours"
        ]
    },
    "🈵": {
        "i": "1776",
        "codePoint": "U+1F235",
        "name": "squared cjk unified ideograph-6e80",
        "entities": "",
        "code": "",
        "keywords": [
            "Japanese “no vacancy” button",
            "full"
        ]
    },
    "🔴": {
        "i": "1777",
        "codePoint": "U+1F534",
        "name": "large red circle",
        "entities": "",
        "code": "",
        "keywords": [
            "red circle"
        ]
    },
    "🟠": {
        "i": "1778",
        "codePoint": "U+1F7E0",
        "name": "large orange circle",
        "entities": "",
        "code": "",
        "keywords": [
            "orange circle"
        ]
    },
    "🟡": {
        "i": "1779",
        "codePoint": "U+1F7E1",
        "name": "large yellow circle",
        "entities": "",
        "code": "",
        "keywords": [
            "yellow circle"
        ]
    },
    "🟢": {
        "i": "1780",
        "codePoint": "U+1F7E2",
        "name": "large green circle",
        "entities": "",
        "code": "",
        "keywords": [
            "green circle"
        ]
    },
    "🔵": {
        "i": "1781",
        "codePoint": "U+1F535",
        "name": "large blue circle",
        "entities": "",
        "code": "",
        "keywords": [
            "blue circle",
            "button"
        ]
    },
    "🟣": {
        "i": "1782",
        "codePoint": "U+1F7E3",
        "name": "large purple circle",
        "entities": "",
        "code": "",
        "keywords": [
            "purple circle"
        ]
    },
    "🟤": {
        "i": "1783",
        "codePoint": "U+1F7E4",
        "name": "large brown circle",
        "entities": "",
        "code": "",
        "keywords": [
            "brown circle"
        ]
    },
    "⚫": {
        "i": "1784",
        "codePoint": "U+26AB",
        "name": "medium black circle",
        "entities": "",
        "code": "",
        "keywords": [
            "black circle"
        ]
    },
    "⚪": {
        "i": "1785",
        "codePoint": "U+26AA",
        "name": "medium white circle",
        "entities": "",
        "code": "",
        "keywords": [
            "white circle"
        ]
    },
    "🟥": {
        "i": "1786",
        "codePoint": "U+1F7E5",
        "name": "large red square",
        "entities": "",
        "code": "",
        "keywords": [
            "red square"
        ]
    },
    "🟧": {
        "i": "1787",
        "codePoint": "U+1F7E7",
        "name": "large orange square",
        "entities": "",
        "code": "",
        "keywords": [
            "orange square"
        ]
    },
    "🟨": {
        "i": "1788",
        "codePoint": "U+1F7E8",
        "name": "large yellow square",
        "entities": "",
        "code": "",
        "keywords": [
            "yellow square"
        ]
    },
    "🟩": {
        "i": "1789",
        "codePoint": "U+1F7E9",
        "name": "large green square",
        "entities": "",
        "code": "",
        "keywords": [
            "green square"
        ]
    },
    "🟦": {
        "i": "1790",
        "codePoint": "U+1F7E6",
        "name": "large blue square",
        "entities": "",
        "code": "",
        "keywords": [
            "blue square"
        ]
    },
    "🟪": {
        "i": "1791",
        "codePoint": "U+1F7EA",
        "name": "large purple square",
        "entities": "",
        "code": "",
        "keywords": [
            "purple square"
        ]
    },
    "🟫": {
        "i": "1792",
        "codePoint": "U+1F7EB",
        "name": "large brown square",
        "entities": "",
        "code": "",
        "keywords": [
            "brown square"
        ]
    },
    "⬛": {
        "i": "1793",
        "codePoint": "U+2B1B",
        "name": "black large square",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "⬜": {
        "i": "1794",
        "codePoint": "U+2B1C",
        "name": "white large square",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "◼️": {
        "i": "1795",
        "codePoint": "U+25FC+FE0F",
        "name": "black medium square",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "◻️": {
        "i": "1796",
        "codePoint": "U+25FB+FE0F",
        "name": "white medium square",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "◾": {
        "i": "1797",
        "codePoint": "U+25FE",
        "name": "black medium small square",
        "entities": "",
        "code": "",
        "keywords": [
            "black medium-small square"
        ]
    },
    "◽": {
        "i": "1798",
        "codePoint": "U+25FD",
        "name": "white medium small square",
        "entities": "",
        "code": "",
        "keywords": [
            "white medium-small square"
        ]
    },
    "▪️": {
        "i": "1799",
        "codePoint": "U+25AA+FE0F",
        "name": "black small square",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "▫️": {
        "i": "1800",
        "codePoint": "U+25AB+FE0F",
        "name": "white small square",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔶": {
        "i": "1801",
        "codePoint": "U+1F536",
        "name": "large orange diamond",
        "entities": "",
        "code": "",
        "keywords": [
            "jewel"
        ]
    },
    "🔷": {
        "i": "1802",
        "codePoint": "U+1F537",
        "name": "large blue diamond",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔸": {
        "i": "1803",
        "codePoint": "U+1F538",
        "name": "small orange diamond",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔹": {
        "i": "1804",
        "codePoint": "U+1F539",
        "name": "small blue diamond",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔺": {
        "i": "1805",
        "codePoint": "U+1F53A",
        "name": "up-pointing red triangle",
        "entities": "",
        "code": "",
        "keywords": [
            "red triangle pointed up"
        ]
    },
    "🔻": {
        "i": "1806",
        "codePoint": "U+1F53B",
        "name": "down-pointing red triangle",
        "entities": "",
        "code": "",
        "keywords": [
            "red triangle pointed down"
        ]
    },
    "💠": {
        "i": "1807",
        "codePoint": "U+1F4A0",
        "name": "diamond shape with a dot inside",
        "entities": "",
        "code": "",
        "keywords": [
            "diamond with a dot",
            "gem",
            "crystal",
            "fancy"
        ]
    },
    "🔘": {
        "i": "1808",
        "codePoint": "U+1F518",
        "name": "radio button",
        "entities": "",
        "code": "",
        "keywords": [
            "input"
        ]
    },
    "🔳": {
        "i": "1809",
        "codePoint": "U+1F533",
        "name": "white square button",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🔲": {
        "i": "1810",
        "codePoint": "U+1F532",
        "name": "black square button",
        "entities": "",
        "code": "",
        "keywords": [
            "frame"
        ]
    },
    "🏁": {
        "i": "1811",
        "codePoint": "U+1F3C1",
        "name": "chequered flag",
        "entities": "",
        "code": "",
        "keywords": [
            "contest",
            "finishline",
            "gokart"
        ]
    },
    "🚩": {
        "i": "1812",
        "codePoint": "U+1F6A9",
        "name": "triangular flag on post",
        "entities": "",
        "code": "",
        "keywords": [
            "triangular flag",
            "milestone"
        ]
    },
    "🎌": {
        "i": "1813",
        "codePoint": "U+1F38C",
        "name": "crossed flags",
        "entities": "",
        "code": "",
        "keywords": [
            "country"
        ]
    },
    "🏴": {
        "i": "1814",
        "codePoint": "U+1F3F4",
        "name": "waving black flag",
        "entities": "",
        "code": "",
        "keywords": [
            "black flag",
            "pirate"
        ]
    },
    "🏳️": {
        "i": "1815",
        "codePoint": "U+1F3F3+FE0F",
        "name": "white flag",
        "entities": "",
        "code": "",
        "keywords": [
            "losing",
            "loser",
            "lost",
            "surrender",
            "give up"
        ]
    },
    "🏳️‍🌈": {
        "i": "1816",
        "codePoint": "U+1F3F3+FE0F+200D+1F308",
        "name": "rainbow flag",
        "entities": "",
        "code": "",
        "keywords": [
            "gay",
            "lgbt",
            "queer",
            "homosexual",
            "lesbian",
            "bisexual"
        ]
    },
    "🏳️‍⚧️": {
        "i": "1817",
        "codePoint": "U+1F3F3+FE0F+200D+26A7+FE0F",
        "name": "transgender flag",
        "entities": "",
        "code": "",
        "keywords": [
            "lgbtq"
        ]
    },
    "🏴‍☠️": {
        "i": "1818",
        "codePoint": "U+1F3F4+200D+2620+FE0F",
        "name": "pirate flag",
        "entities": "",
        "code": "",
        "keywords": [
            "crossbones"
        ]
    },
    "🇦🇨": {
        "i": "1819",
        "codePoint": "U+1F1E6+1F1E8",
        "name": "flag Ascension Island",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇦🇩": {
        "i": "1820",
        "codePoint": "U+1F1E6+1F1E9",
        "name": "flag Andorra",
        "entities": "",
        "code": "",
        "keywords": [
            "ad",
            "andorra"
        ]
    },
    "🇦🇪": {
        "i": "1821",
        "codePoint": "U+1F1E6+1F1EA",
        "name": "flag United Arab Emirates",
        "entities": "",
        "code": "",
        "keywords": [
            "united",
            "arab",
            "emirates"
        ]
    },
    "🇦🇫": {
        "i": "1822",
        "codePoint": "U+1F1E6+1F1EB",
        "name": "flag Afghanistan",
        "entities": "",
        "code": "",
        "keywords": [
            "af",
            "afghanistan"
        ]
    },
    "🇦🇬": {
        "i": "1823",
        "codePoint": "U+1F1E6+1F1EC",
        "name": "flag Antigua & Barbuda",
        "entities": "",
        "code": "",
        "keywords": [
            "antigua",
            "barbuda"
        ]
    },
    "🇦🇮": {
        "i": "1824",
        "codePoint": "U+1F1E6+1F1EE",
        "name": "flag Anguilla",
        "entities": "",
        "code": "",
        "keywords": [
            "ai",
            "anguilla"
        ]
    },
    "🇦🇱": {
        "i": "1825",
        "codePoint": "U+1F1E6+1F1F1",
        "name": "flag Albania",
        "entities": "",
        "code": "",
        "keywords": [
            "al",
            "albania"
        ]
    },
    "🇦🇲": {
        "i": "1826",
        "codePoint": "U+1F1E6+1F1F2",
        "name": "flag Armenia",
        "entities": "",
        "code": "",
        "keywords": [
            "am",
            "armenia"
        ]
    },
    "🇦🇴": {
        "i": "1827",
        "codePoint": "U+1F1E6+1F1F4",
        "name": "flag Angola",
        "entities": "",
        "code": "",
        "keywords": [
            "ao",
            "angola"
        ]
    },
    "🇦🇶": {
        "i": "1828",
        "codePoint": "U+1F1E6+1F1F6",
        "name": "flag Antarctica",
        "entities": "",
        "code": "",
        "keywords": [
            "aq",
            "antarctica"
        ]
    },
    "🇦🇷": {
        "i": "1829",
        "codePoint": "U+1F1E6+1F1F7",
        "name": "flag Argentina",
        "entities": "",
        "code": "",
        "keywords": [
            "ar",
            "argentina"
        ]
    },
    "🇦🇸": {
        "i": "1830",
        "codePoint": "U+1F1E6+1F1F8",
        "name": "flag American Samoa",
        "entities": "",
        "code": "",
        "keywords": [
            "ws"
        ]
    },
    "🇦🇹": {
        "i": "1831",
        "codePoint": "U+1F1E6+1F1F9",
        "name": "flag Austria",
        "entities": "",
        "code": "",
        "keywords": [
            "at",
            "austria"
        ]
    },
    "🇦🇺": {
        "i": "1832",
        "codePoint": "U+1F1E6+1F1FA",
        "name": "flag Australia",
        "entities": "",
        "code": "",
        "keywords": [
            "au"
        ]
    },
    "🇦🇼": {
        "i": "1833",
        "codePoint": "U+1F1E6+1F1FC",
        "name": "flag Aruba",
        "entities": "",
        "code": "",
        "keywords": [
            "aruba"
        ]
    },
    "🇦🇽": {
        "i": "1834",
        "codePoint": "U+1F1E6+1F1FD",
        "name": "flag Åland Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "Åland"
        ]
    },
    "🇦🇿": {
        "i": "1835",
        "codePoint": "U+1F1E6+1F1FF",
        "name": "flag Azerbaijan",
        "entities": "",
        "code": "",
        "keywords": [
            "az",
            "azerbaijan"
        ]
    },
    "🇧🇦": {
        "i": "1836",
        "codePoint": "U+1F1E7+1F1E6",
        "name": "flag Bosnia & Herzegovina",
        "entities": "",
        "code": "",
        "keywords": [
            "bosnia",
            "herzegovina"
        ]
    },
    "🇧🇧": {
        "i": "1837",
        "codePoint": "U+1F1E7+1F1E7",
        "name": "flag Barbados",
        "entities": "",
        "code": "",
        "keywords": [
            "bb",
            "barbados"
        ]
    },
    "🇧🇩": {
        "i": "1838",
        "codePoint": "U+1F1E7+1F1E9",
        "name": "flag Bangladesh",
        "entities": "",
        "code": "",
        "keywords": [
            "bd",
            "bangladesh"
        ]
    },
    "🇧🇪": {
        "i": "1839",
        "codePoint": "U+1F1E7+1F1EA",
        "name": "flag Belgium",
        "entities": "",
        "code": "",
        "keywords": [
            "be",
            "belgium"
        ]
    },
    "🇧🇫": {
        "i": "1840",
        "codePoint": "U+1F1E7+1F1EB",
        "name": "flag Burkina Faso",
        "entities": "",
        "code": "",
        "keywords": [
            "burkina",
            "faso"
        ]
    },
    "🇧🇬": {
        "i": "1841",
        "codePoint": "U+1F1E7+1F1EC",
        "name": "flag Bulgaria",
        "entities": "",
        "code": "",
        "keywords": [
            "bg",
            "bulgaria"
        ]
    },
    "🇧🇭": {
        "i": "1842",
        "codePoint": "U+1F1E7+1F1ED",
        "name": "flag Bahrain",
        "entities": "",
        "code": "",
        "keywords": [
            "bh",
            "bahrain"
        ]
    },
    "🇧🇮": {
        "i": "1843",
        "codePoint": "U+1F1E7+1F1EE",
        "name": "flag Burundi",
        "entities": "",
        "code": "",
        "keywords": [
            "bi",
            "burundi"
        ]
    },
    "🇧🇯": {
        "i": "1844",
        "codePoint": "U+1F1E7+1F1EF",
        "name": "flag Benin",
        "entities": "",
        "code": "",
        "keywords": [
            "bj",
            "benin"
        ]
    },
    "🇧🇱": {
        "i": "1845",
        "codePoint": "U+1F1E7+1F1F1",
        "name": "flag St. Barthélemy",
        "entities": "",
        "code": "",
        "keywords": [
            "saint",
            "barthélemy"
        ]
    },
    "🇧🇲": {
        "i": "1846",
        "codePoint": "U+1F1E7+1F1F2",
        "name": "flag Bermuda",
        "entities": "",
        "code": "",
        "keywords": [
            "bm",
            "bermuda"
        ]
    },
    "🇧🇳": {
        "i": "1847",
        "codePoint": "U+1F1E7+1F1F3",
        "name": "flag Brunei",
        "entities": "",
        "code": "",
        "keywords": [
            "bn",
            "darussalam",
            "brunei"
        ]
    },
    "🇧🇴": {
        "i": "1848",
        "codePoint": "U+1F1E7+1F1F4",
        "name": "flag Bolivia",
        "entities": "",
        "code": "",
        "keywords": [
            "bo",
            "bolivia"
        ]
    },
    "🇧🇶": {
        "i": "1849",
        "codePoint": "U+1F1E7+1F1F6",
        "name": "flag Caribbean Netherlands",
        "entities": "",
        "code": "",
        "keywords": [
            "bonaire"
        ]
    },
    "🇧🇷": {
        "i": "1850",
        "codePoint": "U+1F1E7+1F1F7",
        "name": "flag Brazil",
        "entities": "",
        "code": "",
        "keywords": [
            "br",
            "brazil"
        ]
    },
    "🇧🇸": {
        "i": "1851",
        "codePoint": "U+1F1E7+1F1F8",
        "name": "flag Bahamas",
        "entities": "",
        "code": "",
        "keywords": [
            "bs",
            "bahamas"
        ]
    },
    "🇧🇹": {
        "i": "1852",
        "codePoint": "U+1F1E7+1F1F9",
        "name": "flag Bhutan",
        "entities": "",
        "code": "",
        "keywords": [
            "bt",
            "bhutan"
        ]
    },
    "🇧🇻": {
        "i": "1853",
        "codePoint": "U+1F1E7+1F1FB",
        "name": "flag Bouvet Island",
        "entities": "",
        "code": "",
        "keywords": [
            "norway"
        ]
    },
    "🇧🇼": {
        "i": "1854",
        "codePoint": "U+1F1E7+1F1FC",
        "name": "flag Botswana",
        "entities": "",
        "code": "",
        "keywords": [
            "bw",
            "botswana"
        ]
    },
    "🇧🇾": {
        "i": "1855",
        "codePoint": "U+1F1E7+1F1FE",
        "name": "flag Belarus",
        "entities": "",
        "code": "",
        "keywords": [
            "by",
            "belarus"
        ]
    },
    "🇧🇿": {
        "i": "1856",
        "codePoint": "U+1F1E7+1F1FF",
        "name": "flag Belize",
        "entities": "",
        "code": "",
        "keywords": [
            "bz",
            "belize"
        ]
    },
    "🇨🇦": {
        "i": "1857",
        "codePoint": "U+1F1E8+1F1E6",
        "name": "flag Canada",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇨🇨": {
        "i": "1858",
        "codePoint": "U+1F1E8+1F1E8",
        "name": "flag Cocos (Keeling) Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "cocos",
            "keeling"
        ]
    },
    "🇨🇩": {
        "i": "1859",
        "codePoint": "U+1F1E8+1F1E9",
        "name": "flag Congo - Kinshasa",
        "entities": "",
        "code": "",
        "keywords": [
            "congo",
            "democratic"
        ]
    },
    "🇨🇫": {
        "i": "1860",
        "codePoint": "U+1F1E8+1F1EB",
        "name": "flag Central African Republic",
        "entities": "",
        "code": "",
        "keywords": [
            "central",
            "african"
        ]
    },
    "🇨🇬": {
        "i": "1861",
        "codePoint": "U+1F1E8+1F1EC",
        "name": "flag Congo - Brazzaville",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇨🇭": {
        "i": "1862",
        "codePoint": "U+1F1E8+1F1ED",
        "name": "flag Switzerland",
        "entities": "",
        "code": "",
        "keywords": [
            "ch",
            "switzerland"
        ]
    },
    "🇨🇮": {
        "i": "1863",
        "codePoint": "U+1F1E8+1F1EE",
        "name": "flag Côte d’Ivoire",
        "entities": "",
        "code": "",
        "keywords": [
            "ivory",
            "coast"
        ]
    },
    "🇨🇰": {
        "i": "1864",
        "codePoint": "U+1F1E8+1F1F0",
        "name": "flag Cook Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "islands"
        ]
    },
    "🇨🇱": {
        "i": "1865",
        "codePoint": "U+1F1E8+1F1F1",
        "name": "flag Chile",
        "entities": "",
        "code": "",
        "keywords": [
            "chile"
        ]
    },
    "🇨🇲": {
        "i": "1866",
        "codePoint": "U+1F1E8+1F1F2",
        "name": "flag Cameroon",
        "entities": "",
        "code": "",
        "keywords": [
            "cm",
            "cameroon"
        ]
    },
    "🇨🇳": {
        "i": "1867",
        "codePoint": "U+1F1E8+1F1F3",
        "name": "flag China",
        "entities": "",
        "code": "",
        "keywords": [
            "china",
            "prc"
        ]
    },
    "🇨🇴": {
        "i": "1868",
        "codePoint": "U+1F1E8+1F1F4",
        "name": "flag Colombia",
        "entities": "",
        "code": "",
        "keywords": [
            "co",
            "colombia"
        ]
    },
    "🇨🇵": {
        "i": "1869",
        "codePoint": "U+1F1E8+1F1F5",
        "name": "flag Clipperton Island",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇨🇷": {
        "i": "1870",
        "codePoint": "U+1F1E8+1F1F7",
        "name": "flag Costa Rica",
        "entities": "",
        "code": "",
        "keywords": [
            "costa",
            "rica"
        ]
    },
    "🇨🇺": {
        "i": "1871",
        "codePoint": "U+1F1E8+1F1FA",
        "name": "flag Cuba",
        "entities": "",
        "code": "",
        "keywords": [
            "cu",
            "cuba"
        ]
    },
    "🇨🇻": {
        "i": "1872",
        "codePoint": "U+1F1E8+1F1FB",
        "name": "flag Cape Verde",
        "entities": "",
        "code": "",
        "keywords": [
            "cabo",
            "verde"
        ]
    },
    "🇨🇼": {
        "i": "1873",
        "codePoint": "U+1F1E8+1F1FC",
        "name": "flag Curaçao",
        "entities": "",
        "code": "",
        "keywords": [
            "curaçao",
            "curacao"
        ]
    },
    "🇨🇽": {
        "i": "1874",
        "codePoint": "U+1F1E8+1F1FD",
        "name": "flag Christmas Island",
        "entities": "",
        "code": "",
        "keywords": [
            "christmas",
            "island"
        ]
    },
    "🇨🇾": {
        "i": "1875",
        "codePoint": "U+1F1E8+1F1FE",
        "name": "flag Cyprus",
        "entities": "",
        "code": "",
        "keywords": [
            "cy",
            "cyprus"
        ]
    },
    "🇨🇿": {
        "i": "1876",
        "codePoint": "U+1F1E8+1F1FF",
        "name": "flag Czechia",
        "entities": "",
        "code": "",
        "keywords": [
            "cz",
            "czechia"
        ]
    },
    "🇩🇪": {
        "i": "1877",
        "codePoint": "U+1F1E9+1F1EA",
        "name": "flag Germany",
        "entities": "",
        "code": "",
        "keywords": [
            "german"
        ]
    },
    "🇩🇬": {
        "i": "1878",
        "codePoint": "U+1F1E9+1F1EC",
        "name": "flag Diego Garcia",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇩🇯": {
        "i": "1879",
        "codePoint": "U+1F1E9+1F1EF",
        "name": "flag Djibouti",
        "entities": "",
        "code": "",
        "keywords": [
            "dj",
            "djibouti"
        ]
    },
    "🇩🇰": {
        "i": "1880",
        "codePoint": "U+1F1E9+1F1F0",
        "name": "flag Denmark",
        "entities": "",
        "code": "",
        "keywords": [
            "dk",
            "denmark"
        ]
    },
    "🇩🇲": {
        "i": "1881",
        "codePoint": "U+1F1E9+1F1F2",
        "name": "flag Dominica",
        "entities": "",
        "code": "",
        "keywords": [
            "dm",
            "dominica"
        ]
    },
    "🇩🇴": {
        "i": "1882",
        "codePoint": "U+1F1E9+1F1F4",
        "name": "flag Dominican Republic",
        "entities": "",
        "code": "",
        "keywords": [
            "dominican",
            "republic"
        ]
    },
    "🇩🇿": {
        "i": "1883",
        "codePoint": "U+1F1E9+1F1FF",
        "name": "flag Algeria",
        "entities": "",
        "code": "",
        "keywords": [
            "dz",
            "algeria"
        ]
    },
    "🇪🇦": {
        "i": "1884",
        "codePoint": "U+1F1EA+1F1E6",
        "name": "flag Ceuta & Melilla",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇪🇨": {
        "i": "1885",
        "codePoint": "U+1F1EA+1F1E8",
        "name": "flag Ecuador",
        "entities": "",
        "code": "",
        "keywords": [
            "ec",
            "ecuador"
        ]
    },
    "🇪🇪": {
        "i": "1886",
        "codePoint": "U+1F1EA+1F1EA",
        "name": "flag Estonia",
        "entities": "",
        "code": "",
        "keywords": [
            "ee",
            "estonia"
        ]
    },
    "🇪🇬": {
        "i": "1887",
        "codePoint": "U+1F1EA+1F1EC",
        "name": "flag Egypt",
        "entities": "",
        "code": "",
        "keywords": [
            "eg",
            "egypt"
        ]
    },
    "🇪🇭": {
        "i": "1888",
        "codePoint": "U+1F1EA+1F1ED",
        "name": "flag Western Sahara",
        "entities": "",
        "code": "",
        "keywords": [
            "western",
            "sahara"
        ]
    },
    "🇪🇷": {
        "i": "1889",
        "codePoint": "U+1F1EA+1F1F7",
        "name": "flag Eritrea",
        "entities": "",
        "code": "",
        "keywords": [
            "er",
            "eritrea"
        ]
    },
    "🇪🇸": {
        "i": "1890",
        "codePoint": "U+1F1EA+1F1F8",
        "name": "flag Spain",
        "entities": "",
        "code": "",
        "keywords": [
            "spain"
        ]
    },
    "🇪🇹": {
        "i": "1891",
        "codePoint": "U+1F1EA+1F1F9",
        "name": "flag Ethiopia",
        "entities": "",
        "code": "",
        "keywords": [
            "et",
            "ethiopia"
        ]
    },
    "🇪🇺": {
        "i": "1892",
        "codePoint": "U+1F1EA+1F1FA",
        "name": "flag European Union",
        "entities": "",
        "code": "",
        "keywords": [
            "european",
            "union"
        ]
    },
    "🇫🇮": {
        "i": "1893",
        "codePoint": "U+1F1EB+1F1EE",
        "name": "flag Finland",
        "entities": "",
        "code": "",
        "keywords": [
            "fi",
            "finland"
        ]
    },
    "🇫🇯": {
        "i": "1894",
        "codePoint": "U+1F1EB+1F1EF",
        "name": "flag Fiji",
        "entities": "",
        "code": "",
        "keywords": [
            "fj",
            "fiji"
        ]
    },
    "🇫🇰": {
        "i": "1895",
        "codePoint": "U+1F1EB+1F1F0",
        "name": "flag Falkland Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "falkland",
            "malvinas"
        ]
    },
    "🇫🇲": {
        "i": "1896",
        "codePoint": "U+1F1EB+1F1F2",
        "name": "flag Micronesia",
        "entities": "",
        "code": "",
        "keywords": [
            "micronesia",
            "federated"
        ]
    },
    "🇫🇴": {
        "i": "1897",
        "codePoint": "U+1F1EB+1F1F4",
        "name": "flag Faroe Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "faroe"
        ]
    },
    "🇫🇷": {
        "i": "1898",
        "codePoint": "U+1F1EB+1F1F7",
        "name": "flag France",
        "entities": "",
        "code": "",
        "keywords": [
            "banner"
        ]
    },
    "🇬🇦": {
        "i": "1899",
        "codePoint": "U+1F1EC+1F1E6",
        "name": "flag Gabon",
        "entities": "",
        "code": "",
        "keywords": [
            "ga",
            "gabon"
        ]
    },
    "🇬🇧": {
        "i": "1900",
        "codePoint": "U+1F1EC+1F1E7",
        "name": "flag United Kingdom",
        "entities": "",
        "code": "",
        "keywords": [
            "kingdom",
            "great",
            "britain",
            "UK",
            "union jack"
        ]
    },
    "🇬🇩": {
        "i": "1901",
        "codePoint": "U+1F1EC+1F1E9",
        "name": "flag Grenada",
        "entities": "",
        "code": "",
        "keywords": [
            "gd",
            "grenada"
        ]
    },
    "🇬🇪": {
        "i": "1902",
        "codePoint": "U+1F1EC+1F1EA",
        "name": "flag Georgia",
        "entities": "",
        "code": "",
        "keywords": [
            "ge",
            "georgia"
        ]
    },
    "🇬🇫": {
        "i": "1903",
        "codePoint": "U+1F1EC+1F1EB",
        "name": "flag French Guiana",
        "entities": "",
        "code": "",
        "keywords": [
            "guiana"
        ]
    },
    "🇬🇬": {
        "i": "1904",
        "codePoint": "U+1F1EC+1F1EC",
        "name": "flag Guernsey",
        "entities": "",
        "code": "",
        "keywords": [
            "gg",
            "guernsey"
        ]
    },
    "🇬🇭": {
        "i": "1905",
        "codePoint": "U+1F1EC+1F1ED",
        "name": "flag Ghana",
        "entities": "",
        "code": "",
        "keywords": [
            "gh",
            "ghana"
        ]
    },
    "🇬🇮": {
        "i": "1906",
        "codePoint": "U+1F1EC+1F1EE",
        "name": "flag Gibraltar",
        "entities": "",
        "code": "",
        "keywords": [
            "gi",
            "gibraltar"
        ]
    },
    "🇬🇱": {
        "i": "1907",
        "codePoint": "U+1F1EC+1F1F1",
        "name": "flag Greenland",
        "entities": "",
        "code": "",
        "keywords": [
            "gl",
            "greenland"
        ]
    },
    "🇬🇲": {
        "i": "1908",
        "codePoint": "U+1F1EC+1F1F2",
        "name": "flag Gambia",
        "entities": "",
        "code": "",
        "keywords": [
            "gm",
            "gambia"
        ]
    },
    "🇬🇳": {
        "i": "1909",
        "codePoint": "U+1F1EC+1F1F3",
        "name": "flag Guinea",
        "entities": "",
        "code": "",
        "keywords": [
            "gn",
            "guinea"
        ]
    },
    "🇬🇵": {
        "i": "1910",
        "codePoint": "U+1F1EC+1F1F5",
        "name": "flag Guadeloupe",
        "entities": "",
        "code": "",
        "keywords": [
            "gp",
            "guadeloupe"
        ]
    },
    "🇬🇶": {
        "i": "1911",
        "codePoint": "U+1F1EC+1F1F6",
        "name": "flag Equatorial Guinea",
        "entities": "",
        "code": "",
        "keywords": [
            "equatorial"
        ]
    },
    "🇬🇷": {
        "i": "1912",
        "codePoint": "U+1F1EC+1F1F7",
        "name": "flag Greece",
        "entities": "",
        "code": "",
        "keywords": [
            "gr",
            "greece"
        ]
    },
    "🇬🇸": {
        "i": "1913",
        "codePoint": "U+1F1EC+1F1F8",
        "name": "flag South Georgia & South Sandwich Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "south"
        ]
    },
    "🇬🇹": {
        "i": "1914",
        "codePoint": "U+1F1EC+1F1F9",
        "name": "flag Guatemala",
        "entities": "",
        "code": "",
        "keywords": [
            "gt",
            "guatemala"
        ]
    },
    "🇬🇺": {
        "i": "1915",
        "codePoint": "U+1F1EC+1F1FA",
        "name": "flag Guam",
        "entities": "",
        "code": "",
        "keywords": [
            "gu",
            "guam"
        ]
    },
    "🇬🇼": {
        "i": "1916",
        "codePoint": "U+1F1EC+1F1FC",
        "name": "flag Guinea-Bissau",
        "entities": "",
        "code": "",
        "keywords": [
            "gw",
            "bissau"
        ]
    },
    "🇬🇾": {
        "i": "1917",
        "codePoint": "U+1F1EC+1F1FE",
        "name": "flag Guyana",
        "entities": "",
        "code": "",
        "keywords": [
            "gy",
            "guyana"
        ]
    },
    "🇭🇰": {
        "i": "1918",
        "codePoint": "U+1F1ED+1F1F0",
        "name": "flag Hong Kong SAR China",
        "entities": "",
        "code": "",
        "keywords": [
            "hong",
            "kong"
        ]
    },
    "🇭🇲": {
        "i": "1919",
        "codePoint": "U+1F1ED+1F1F2",
        "name": "flag Heard & McDonald Islands",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇭🇳": {
        "i": "1920",
        "codePoint": "U+1F1ED+1F1F3",
        "name": "flag Honduras",
        "entities": "",
        "code": "",
        "keywords": [
            "hn",
            "honduras"
        ]
    },
    "🇭🇷": {
        "i": "1921",
        "codePoint": "U+1F1ED+1F1F7",
        "name": "flag Croatia",
        "entities": "",
        "code": "",
        "keywords": [
            "hr",
            "croatia"
        ]
    },
    "🇭🇹": {
        "i": "1922",
        "codePoint": "U+1F1ED+1F1F9",
        "name": "flag Haiti",
        "entities": "",
        "code": "",
        "keywords": [
            "ht",
            "haiti"
        ]
    },
    "🇭🇺": {
        "i": "1923",
        "codePoint": "U+1F1ED+1F1FA",
        "name": "flag Hungary",
        "entities": "",
        "code": "",
        "keywords": [
            "hu",
            "hungary"
        ]
    },
    "🇮🇨": {
        "i": "1924",
        "codePoint": "U+1F1EE+1F1E8",
        "name": "flag Canary Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "canary"
        ]
    },
    "🇮🇩": {
        "i": "1925",
        "codePoint": "U+1F1EE+1F1E9",
        "name": "flag Indonesia",
        "entities": "",
        "code": "",
        "keywords": [
            "indonesia"
        ]
    },
    "🇮🇪": {
        "i": "1926",
        "codePoint": "U+1F1EE+1F1EA",
        "name": "flag Ireland",
        "entities": "",
        "code": "",
        "keywords": [
            "ie",
            "ireland"
        ]
    },
    "🇮🇱": {
        "i": "1927",
        "codePoint": "U+1F1EE+1F1F1",
        "name": "flag Israel",
        "entities": "",
        "code": "",
        "keywords": [
            "il",
            "israel"
        ]
    },
    "🇮🇲": {
        "i": "1928",
        "codePoint": "U+1F1EE+1F1F2",
        "name": "flag Isle of Man",
        "entities": "",
        "code": "",
        "keywords": [
            "isle"
        ]
    },
    "🇮🇳": {
        "i": "1929",
        "codePoint": "U+1F1EE+1F1F3",
        "name": "flag India",
        "entities": "",
        "code": "",
        "keywords": [
            "in",
            "india"
        ]
    },
    "🇮🇴": {
        "i": "1930",
        "codePoint": "U+1F1EE+1F1F4",
        "name": "flag British Indian Ocean Territory",
        "entities": "",
        "code": "",
        "keywords": [
            "territory"
        ]
    },
    "🇮🇶": {
        "i": "1931",
        "codePoint": "U+1F1EE+1F1F6",
        "name": "flag Iraq",
        "entities": "",
        "code": "",
        "keywords": [
            "iq",
            "iraq"
        ]
    },
    "🇮🇷": {
        "i": "1932",
        "codePoint": "U+1F1EE+1F1F7",
        "name": "flag Iran",
        "entities": "",
        "code": "",
        "keywords": [
            "iran",
            "islamic"
        ]
    },
    "🇮🇸": {
        "i": "1933",
        "codePoint": "U+1F1EE+1F1F8",
        "name": "flag Iceland",
        "entities": "",
        "code": "",
        "keywords": [
            "is",
            "iceland"
        ]
    },
    "🇮🇹": {
        "i": "1934",
        "codePoint": "U+1F1EE+1F1F9",
        "name": "flag Italy",
        "entities": "",
        "code": "",
        "keywords": [
            "italy"
        ]
    },
    "🇯🇪": {
        "i": "1935",
        "codePoint": "U+1F1EF+1F1EA",
        "name": "flag Jersey",
        "entities": "",
        "code": "",
        "keywords": [
            "je",
            "jersey"
        ]
    },
    "🇯🇲": {
        "i": "1936",
        "codePoint": "U+1F1EF+1F1F2",
        "name": "flag Jamaica",
        "entities": "",
        "code": "",
        "keywords": [
            "jm",
            "jamaica"
        ]
    },
    "🇯🇴": {
        "i": "1937",
        "codePoint": "U+1F1EF+1F1F4",
        "name": "flag Jordan",
        "entities": "",
        "code": "",
        "keywords": [
            "jo",
            "jordan"
        ]
    },
    "🇯🇵": {
        "i": "1938",
        "codePoint": "U+1F1EF+1F1F5",
        "name": "flag Japan",
        "entities": "",
        "code": "",
        "keywords": [
            "jp",
            "ja"
        ]
    },
    "🇰🇪": {
        "i": "1939",
        "codePoint": "U+1F1F0+1F1EA",
        "name": "flag Kenya",
        "entities": "",
        "code": "",
        "keywords": [
            "ke",
            "kenya"
        ]
    },
    "🇰🇬": {
        "i": "1940",
        "codePoint": "U+1F1F0+1F1EC",
        "name": "flag Kyrgyzstan",
        "entities": "",
        "code": "",
        "keywords": [
            "kg",
            "kyrgyzstan"
        ]
    },
    "🇰🇭": {
        "i": "1941",
        "codePoint": "U+1F1F0+1F1ED",
        "name": "flag Cambodia",
        "entities": "",
        "code": "",
        "keywords": [
            "kh",
            "cambodia"
        ]
    },
    "🇰🇮": {
        "i": "1942",
        "codePoint": "U+1F1F0+1F1EE",
        "name": "flag Kiribati",
        "entities": "",
        "code": "",
        "keywords": [
            "ki",
            "kiribati"
        ]
    },
    "🇰🇲": {
        "i": "1943",
        "codePoint": "U+1F1F0+1F1F2",
        "name": "flag Comoros",
        "entities": "",
        "code": "",
        "keywords": [
            "km",
            "comoros"
        ]
    },
    "🇰🇳": {
        "i": "1944",
        "codePoint": "U+1F1F0+1F1F3",
        "name": "flag St. Kitts & Nevis",
        "entities": "",
        "code": "",
        "keywords": [
            "kitts",
            "nevis"
        ]
    },
    "🇰🇵": {
        "i": "1945",
        "codePoint": "U+1F1F0+1F1F5",
        "name": "flag North Korea",
        "entities": "",
        "code": "",
        "keywords": [
            "north"
        ]
    },
    "🇰🇷": {
        "i": "1946",
        "codePoint": "U+1F1F0+1F1F7",
        "name": "flag South Korea",
        "entities": "",
        "code": "",
        "keywords": [
            "korea"
        ]
    },
    "🇰🇼": {
        "i": "1947",
        "codePoint": "U+1F1F0+1F1FC",
        "name": "flag Kuwait",
        "entities": "",
        "code": "",
        "keywords": [
            "kw",
            "kuwait"
        ]
    },
    "🇰🇾": {
        "i": "1948",
        "codePoint": "U+1F1F0+1F1FE",
        "name": "flag Cayman Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "cayman"
        ]
    },
    "🇰🇿": {
        "i": "1949",
        "codePoint": "U+1F1F0+1F1FF",
        "name": "flag Kazakhstan",
        "entities": "",
        "code": "",
        "keywords": [
            "kz",
            "kazakhstan"
        ]
    },
    "🇱🇦": {
        "i": "1950",
        "codePoint": "U+1F1F1+1F1E6",
        "name": "flag Laos",
        "entities": "",
        "code": "",
        "keywords": [
            "lao",
            "laos"
        ]
    },
    "🇱🇧": {
        "i": "1951",
        "codePoint": "U+1F1F1+1F1E7",
        "name": "flag Lebanon",
        "entities": "",
        "code": "",
        "keywords": [
            "lb",
            "lebanon"
        ]
    },
    "🇱🇨": {
        "i": "1952",
        "codePoint": "U+1F1F1+1F1E8",
        "name": "flag St. Lucia",
        "entities": "",
        "code": "",
        "keywords": [
            "lucia"
        ]
    },
    "🇱🇮": {
        "i": "1953",
        "codePoint": "U+1F1F1+1F1EE",
        "name": "flag Liechtenstein",
        "entities": "",
        "code": "",
        "keywords": [
            "li",
            "liechtenstein"
        ]
    },
    "🇱🇰": {
        "i": "1954",
        "codePoint": "U+1F1F1+1F1F0",
        "name": "flag Sri Lanka",
        "entities": "",
        "code": "",
        "keywords": [
            "sri",
            "lanka"
        ]
    },
    "🇱🇷": {
        "i": "1955",
        "codePoint": "U+1F1F1+1F1F7",
        "name": "flag Liberia",
        "entities": "",
        "code": "",
        "keywords": [
            "lr",
            "liberia"
        ]
    },
    "🇱🇸": {
        "i": "1956",
        "codePoint": "U+1F1F1+1F1F8",
        "name": "flag Lesotho",
        "entities": "",
        "code": "",
        "keywords": [
            "ls",
            "lesotho"
        ]
    },
    "🇱🇹": {
        "i": "1957",
        "codePoint": "U+1F1F1+1F1F9",
        "name": "flag Lithuania",
        "entities": "",
        "code": "",
        "keywords": [
            "lt",
            "lithuania"
        ]
    },
    "🇱🇺": {
        "i": "1958",
        "codePoint": "U+1F1F1+1F1FA",
        "name": "flag Luxembourg",
        "entities": "",
        "code": "",
        "keywords": [
            "lu",
            "luxembourg"
        ]
    },
    "🇱🇻": {
        "i": "1959",
        "codePoint": "U+1F1F1+1F1FB",
        "name": "flag Latvia",
        "entities": "",
        "code": "",
        "keywords": [
            "lv",
            "latvia"
        ]
    },
    "🇱🇾": {
        "i": "1960",
        "codePoint": "U+1F1F1+1F1FE",
        "name": "flag Libya",
        "entities": "",
        "code": "",
        "keywords": [
            "ly",
            "libya"
        ]
    },
    "🇲🇦": {
        "i": "1961",
        "codePoint": "U+1F1F2+1F1E6",
        "name": "flag Morocco",
        "entities": "",
        "code": "",
        "keywords": [
            "ma",
            "morocco"
        ]
    },
    "🇲🇨": {
        "i": "1962",
        "codePoint": "U+1F1F2+1F1E8",
        "name": "flag Monaco",
        "entities": "",
        "code": "",
        "keywords": [
            "mc",
            "monaco"
        ]
    },
    "🇲🇩": {
        "i": "1963",
        "codePoint": "U+1F1F2+1F1E9",
        "name": "flag Moldova",
        "entities": "",
        "code": "",
        "keywords": [
            "moldova"
        ]
    },
    "🇲🇪": {
        "i": "1964",
        "codePoint": "U+1F1F2+1F1EA",
        "name": "flag Montenegro",
        "entities": "",
        "code": "",
        "keywords": [
            "me",
            "montenegro"
        ]
    },
    "🇲🇫": {
        "i": "1965",
        "codePoint": "U+1F1F2+1F1EB",
        "name": "flag St. Martin",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇲🇬": {
        "i": "1966",
        "codePoint": "U+1F1F2+1F1EC",
        "name": "flag Madagascar",
        "entities": "",
        "code": "",
        "keywords": [
            "mg",
            "madagascar"
        ]
    },
    "🇲🇭": {
        "i": "1967",
        "codePoint": "U+1F1F2+1F1ED",
        "name": "flag Marshall Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "marshall"
        ]
    },
    "🇲🇰": {
        "i": "1968",
        "codePoint": "U+1F1F2+1F1F0",
        "name": "flag North Macedonia",
        "entities": "",
        "code": "",
        "keywords": [
            "macedonia"
        ]
    },
    "🇲🇱": {
        "i": "1969",
        "codePoint": "U+1F1F2+1F1F1",
        "name": "flag Mali",
        "entities": "",
        "code": "",
        "keywords": [
            "ml",
            "mali"
        ]
    },
    "🇲🇲": {
        "i": "1970",
        "codePoint": "U+1F1F2+1F1F2",
        "name": "flag Myanmar (Burma)",
        "entities": "",
        "code": "",
        "keywords": [
            "mm",
            "myanmar"
        ]
    },
    "🇲🇳": {
        "i": "1971",
        "codePoint": "U+1F1F2+1F1F3",
        "name": "flag Mongolia",
        "entities": "",
        "code": "",
        "keywords": [
            "mn",
            "mongolia"
        ]
    },
    "🇲🇴": {
        "i": "1972",
        "codePoint": "U+1F1F2+1F1F4",
        "name": "flag Macao SAR China",
        "entities": "",
        "code": "",
        "keywords": [
            "macao"
        ]
    },
    "🇲🇵": {
        "i": "1973",
        "codePoint": "U+1F1F2+1F1F5",
        "name": "flag Northern Mariana Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "northern",
            "mariana"
        ]
    },
    "🇲🇶": {
        "i": "1974",
        "codePoint": "U+1F1F2+1F1F6",
        "name": "flag Martinique",
        "entities": "",
        "code": "",
        "keywords": [
            "mq",
            "martinique"
        ]
    },
    "🇲🇷": {
        "i": "1975",
        "codePoint": "U+1F1F2+1F1F7",
        "name": "flag Mauritania",
        "entities": "",
        "code": "",
        "keywords": [
            "mr",
            "mauritania"
        ]
    },
    "🇲🇸": {
        "i": "1976",
        "codePoint": "U+1F1F2+1F1F8",
        "name": "flag Montserrat",
        "entities": "",
        "code": "",
        "keywords": [
            "ms",
            "montserrat"
        ]
    },
    "🇲🇹": {
        "i": "1977",
        "codePoint": "U+1F1F2+1F1F9",
        "name": "flag Malta",
        "entities": "",
        "code": "",
        "keywords": [
            "mt",
            "malta"
        ]
    },
    "🇲🇺": {
        "i": "1978",
        "codePoint": "U+1F1F2+1F1FA",
        "name": "flag Mauritius",
        "entities": "",
        "code": "",
        "keywords": [
            "mu",
            "mauritius"
        ]
    },
    "🇲🇻": {
        "i": "1979",
        "codePoint": "U+1F1F2+1F1FB",
        "name": "flag Maldives",
        "entities": "",
        "code": "",
        "keywords": [
            "mv",
            "maldives"
        ]
    },
    "🇲🇼": {
        "i": "1980",
        "codePoint": "U+1F1F2+1F1FC",
        "name": "flag Malawi",
        "entities": "",
        "code": "",
        "keywords": [
            "mw",
            "malawi"
        ]
    },
    "🇲🇽": {
        "i": "1981",
        "codePoint": "U+1F1F2+1F1FD",
        "name": "flag Mexico",
        "entities": "",
        "code": "",
        "keywords": [
            "mx"
        ]
    },
    "🇲🇾": {
        "i": "1982",
        "codePoint": "U+1F1F2+1F1FE",
        "name": "flag Malaysia",
        "entities": "",
        "code": "",
        "keywords": [
            "my",
            "malaysia"
        ]
    },
    "🇲🇿": {
        "i": "1983",
        "codePoint": "U+1F1F2+1F1FF",
        "name": "flag Mozambique",
        "entities": "",
        "code": "",
        "keywords": [
            "mz",
            "mozambique"
        ]
    },
    "🇳🇦": {
        "i": "1984",
        "codePoint": "U+1F1F3+1F1E6",
        "name": "flag Namibia",
        "entities": "",
        "code": "",
        "keywords": [
            "na",
            "namibia"
        ]
    },
    "🇳🇨": {
        "i": "1985",
        "codePoint": "U+1F1F3+1F1E8",
        "name": "flag New Caledonia",
        "entities": "",
        "code": "",
        "keywords": [
            "new",
            "caledonia"
        ]
    },
    "🇳🇪": {
        "i": "1986",
        "codePoint": "U+1F1F3+1F1EA",
        "name": "flag Niger",
        "entities": "",
        "code": "",
        "keywords": [
            "ne",
            "niger"
        ]
    },
    "🇳🇫": {
        "i": "1987",
        "codePoint": "U+1F1F3+1F1EB",
        "name": "flag Norfolk Island",
        "entities": "",
        "code": "",
        "keywords": [
            "norfolk"
        ]
    },
    "🇳🇬": {
        "i": "1988",
        "codePoint": "U+1F1F3+1F1EC",
        "name": "flag Nigeria",
        "entities": "",
        "code": "",
        "keywords": [
            "nigeria"
        ]
    },
    "🇳🇮": {
        "i": "1989",
        "codePoint": "U+1F1F3+1F1EE",
        "name": "flag Nicaragua",
        "entities": "",
        "code": "",
        "keywords": [
            "ni",
            "nicaragua"
        ]
    },
    "🇳🇱": {
        "i": "1990",
        "codePoint": "U+1F1F3+1F1F1",
        "name": "flag Netherlands",
        "entities": "",
        "code": "",
        "keywords": [
            "nl",
            "netherlands"
        ]
    },
    "🇳🇴": {
        "i": "1991",
        "codePoint": "U+1F1F3+1F1F4",
        "name": "flag Norway",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇳🇵": {
        "i": "1992",
        "codePoint": "U+1F1F3+1F1F5",
        "name": "flag Nepal",
        "entities": "",
        "code": "",
        "keywords": [
            "np",
            "nepal"
        ]
    },
    "🇳🇷": {
        "i": "1993",
        "codePoint": "U+1F1F3+1F1F7",
        "name": "flag Nauru",
        "entities": "",
        "code": "",
        "keywords": [
            "nr",
            "nauru"
        ]
    },
    "🇳🇺": {
        "i": "1994",
        "codePoint": "U+1F1F3+1F1FA",
        "name": "flag Niue",
        "entities": "",
        "code": "",
        "keywords": [
            "nu",
            "niue"
        ]
    },
    "🇳🇿": {
        "i": "1995",
        "codePoint": "U+1F1F3+1F1FF",
        "name": "flag New Zealand",
        "entities": "",
        "code": "",
        "keywords": [
            "zealand"
        ]
    },
    "🇴🇲": {
        "i": "1996",
        "codePoint": "U+1F1F4+1F1F2",
        "name": "flag Oman",
        "entities": "",
        "code": "",
        "keywords": [
            "oman"
        ]
    },
    "🇵🇦": {
        "i": "1997",
        "codePoint": "U+1F1F5+1F1E6",
        "name": "flag Panama",
        "entities": "",
        "code": "",
        "keywords": [
            "pa",
            "panama"
        ]
    },
    "🇵🇪": {
        "i": "1998",
        "codePoint": "U+1F1F5+1F1EA",
        "name": "flag Peru",
        "entities": "",
        "code": "",
        "keywords": [
            "pe",
            "peru"
        ]
    },
    "🇵🇫": {
        "i": "1999",
        "codePoint": "U+1F1F5+1F1EB",
        "name": "flag French Polynesia",
        "entities": "",
        "code": "",
        "keywords": [
            "polynesia"
        ]
    },
    "🇵🇬": {
        "i": "2000",
        "codePoint": "U+1F1F5+1F1EC",
        "name": "flag Papua New Guinea",
        "entities": "",
        "code": "",
        "keywords": [
            "papua"
        ]
    },
    "🇵🇭": {
        "i": "2001",
        "codePoint": "U+1F1F5+1F1ED",
        "name": "flag Philippines",
        "entities": "",
        "code": "",
        "keywords": [
            "ph",
            "philippines"
        ]
    },
    "🇵🇰": {
        "i": "2002",
        "codePoint": "U+1F1F5+1F1F0",
        "name": "flag Pakistan",
        "entities": "",
        "code": "",
        "keywords": [
            "pk",
            "pakistan"
        ]
    },
    "🇵🇱": {
        "i": "2003",
        "codePoint": "U+1F1F5+1F1F1",
        "name": "flag Poland",
        "entities": "",
        "code": "",
        "keywords": [
            "pl",
            "poland"
        ]
    },
    "🇵🇲": {
        "i": "2004",
        "codePoint": "U+1F1F5+1F1F2",
        "name": "flag St. Pierre & Miquelon",
        "entities": "",
        "code": "",
        "keywords": [
            "pierre",
            "miquelon"
        ]
    },
    "🇵🇳": {
        "i": "2005",
        "codePoint": "U+1F1F5+1F1F3",
        "name": "flag Pitcairn Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "pitcairn"
        ]
    },
    "🇵🇷": {
        "i": "2006",
        "codePoint": "U+1F1F5+1F1F7",
        "name": "flag Puerto Rico",
        "entities": "",
        "code": "",
        "keywords": [
            "puerto",
            "rico"
        ]
    },
    "🇵🇸": {
        "i": "2007",
        "codePoint": "U+1F1F5+1F1F8",
        "name": "flag Palestinian Territories",
        "entities": "",
        "code": "",
        "keywords": [
            "palestine",
            "palestinian"
        ]
    },
    "🇵🇹": {
        "i": "2008",
        "codePoint": "U+1F1F5+1F1F9",
        "name": "flag Portugal",
        "entities": "",
        "code": "",
        "keywords": [
            "pt",
            "portugal"
        ]
    },
    "🇵🇼": {
        "i": "2009",
        "codePoint": "U+1F1F5+1F1FC",
        "name": "flag Palau",
        "entities": "",
        "code": "",
        "keywords": [
            "pw",
            "palau"
        ]
    },
    "🇵🇾": {
        "i": "2010",
        "codePoint": "U+1F1F5+1F1FE",
        "name": "flag Paraguay",
        "entities": "",
        "code": "",
        "keywords": [
            "py",
            "paraguay"
        ]
    },
    "🇶🇦": {
        "i": "2011",
        "codePoint": "U+1F1F6+1F1E6",
        "name": "flag Qatar",
        "entities": "",
        "code": "",
        "keywords": [
            "qa",
            "qatar"
        ]
    },
    "🇷🇪": {
        "i": "2012",
        "codePoint": "U+1F1F7+1F1EA",
        "name": "flag Réunion",
        "entities": "",
        "code": "",
        "keywords": [
            "réunion",
            "reunion"
        ]
    },
    "🇷🇴": {
        "i": "2013",
        "codePoint": "U+1F1F7+1F1F4",
        "name": "flag Romania",
        "entities": "",
        "code": "",
        "keywords": [
            "ro",
            "romania"
        ]
    },
    "🇷🇸": {
        "i": "2014",
        "codePoint": "U+1F1F7+1F1F8",
        "name": "flag Serbia",
        "entities": "",
        "code": "",
        "keywords": [
            "rs",
            "serbia"
        ]
    },
    "🇷🇺": {
        "i": "2015",
        "codePoint": "U+1F1F7+1F1FA",
        "name": "flag Russia",
        "entities": "",
        "code": "",
        "keywords": [
            "russian",
            "federation",
            "russia"
        ]
    },
    "🇷🇼": {
        "i": "2016",
        "codePoint": "U+1F1F7+1F1FC",
        "name": "flag Rwanda",
        "entities": "",
        "code": "",
        "keywords": [
            "rw",
            "rwanda"
        ]
    },
    "🇸🇦": {
        "i": "2017",
        "codePoint": "U+1F1F8+1F1E6",
        "name": "flag Saudi Arabia",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇸🇧": {
        "i": "2018",
        "codePoint": "U+1F1F8+1F1E7",
        "name": "flag Solomon Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "solomon"
        ]
    },
    "🇸🇨": {
        "i": "2019",
        "codePoint": "U+1F1F8+1F1E8",
        "name": "flag Seychelles",
        "entities": "",
        "code": "",
        "keywords": [
            "sc",
            "seychelles"
        ]
    },
    "🇸🇩": {
        "i": "2020",
        "codePoint": "U+1F1F8+1F1E9",
        "name": "flag Sudan",
        "entities": "",
        "code": "",
        "keywords": [
            "sd",
            "sudan"
        ]
    },
    "🇸🇪": {
        "i": "2021",
        "codePoint": "U+1F1F8+1F1EA",
        "name": "flag Sweden",
        "entities": "",
        "code": "",
        "keywords": [
            "se"
        ]
    },
    "🇸🇬": {
        "i": "2022",
        "codePoint": "U+1F1F8+1F1EC",
        "name": "flag Singapore",
        "entities": "",
        "code": "",
        "keywords": [
            "sg",
            "singapore"
        ]
    },
    "🇸🇭": {
        "i": "2023",
        "codePoint": "U+1F1F8+1F1ED",
        "name": "flag St. Helena",
        "entities": "",
        "code": "",
        "keywords": [
            "helena",
            "ascension",
            "tristan",
            "cunha"
        ]
    },
    "🇸🇮": {
        "i": "2024",
        "codePoint": "U+1F1F8+1F1EE",
        "name": "flag Slovenia",
        "entities": "",
        "code": "",
        "keywords": [
            "si",
            "slovenia"
        ]
    },
    "🇸🇯": {
        "i": "2025",
        "codePoint": "U+1F1F8+1F1EF",
        "name": "flag Svalbard & Jan Mayen",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇸🇰": {
        "i": "2026",
        "codePoint": "U+1F1F8+1F1F0",
        "name": "flag Slovakia",
        "entities": "",
        "code": "",
        "keywords": [
            "sk",
            "slovakia"
        ]
    },
    "🇸🇱": {
        "i": "2027",
        "codePoint": "U+1F1F8+1F1F1",
        "name": "flag Sierra Leone",
        "entities": "",
        "code": "",
        "keywords": [
            "sierra",
            "leone"
        ]
    },
    "🇸🇲": {
        "i": "2028",
        "codePoint": "U+1F1F8+1F1F2",
        "name": "flag San Marino",
        "entities": "",
        "code": "",
        "keywords": [
            "san",
            "marino"
        ]
    },
    "🇸🇳": {
        "i": "2029",
        "codePoint": "U+1F1F8+1F1F3",
        "name": "flag Senegal",
        "entities": "",
        "code": "",
        "keywords": [
            "sn",
            "senegal"
        ]
    },
    "🇸🇴": {
        "i": "2030",
        "codePoint": "U+1F1F8+1F1F4",
        "name": "flag Somalia",
        "entities": "",
        "code": "",
        "keywords": [
            "so",
            "somalia"
        ]
    },
    "🇸🇷": {
        "i": "2031",
        "codePoint": "U+1F1F8+1F1F7",
        "name": "flag Suriname",
        "entities": "",
        "code": "",
        "keywords": [
            "sr",
            "suriname"
        ]
    },
    "🇸🇸": {
        "i": "2032",
        "codePoint": "U+1F1F8+1F1F8",
        "name": "flag South Sudan",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇸🇹": {
        "i": "2033",
        "codePoint": "U+1F1F8+1F1F9",
        "name": "flag São Tomé & Príncipe",
        "entities": "",
        "code": "",
        "keywords": [
            "sao",
            "tome",
            "principe"
        ]
    },
    "🇸🇻": {
        "i": "2034",
        "codePoint": "U+1F1F8+1F1FB",
        "name": "flag El Salvador",
        "entities": "",
        "code": "",
        "keywords": [
            "el",
            "salvador"
        ]
    },
    "🇸🇽": {
        "i": "2035",
        "codePoint": "U+1F1F8+1F1FD",
        "name": "flag Sint Maarten",
        "entities": "",
        "code": "",
        "keywords": [
            "sint",
            "maarten",
            "dutch"
        ]
    },
    "🇸🇾": {
        "i": "2036",
        "codePoint": "U+1F1F8+1F1FE",
        "name": "flag Syria",
        "entities": "",
        "code": "",
        "keywords": [
            "syrian",
            "syria"
        ]
    },
    "🇸🇿": {
        "i": "2037",
        "codePoint": "U+1F1F8+1F1FF",
        "name": "flag Eswatini",
        "entities": "",
        "code": "",
        "keywords": [
            "sz",
            "eswatini"
        ]
    },
    "🇹🇦": {
        "i": "2038",
        "codePoint": "U+1F1F9+1F1E6",
        "name": "flag Tristan da Cunha",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇹🇨": {
        "i": "2039",
        "codePoint": "U+1F1F9+1F1E8",
        "name": "flag Turks & Caicos Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "turks",
            "caicos"
        ]
    },
    "🇹🇩": {
        "i": "2040",
        "codePoint": "U+1F1F9+1F1E9",
        "name": "flag Chad",
        "entities": "",
        "code": "",
        "keywords": [
            "td",
            "chad"
        ]
    },
    "🇹🇫": {
        "i": "2041",
        "codePoint": "U+1F1F9+1F1EB",
        "name": "flag French Southern Territories",
        "entities": "",
        "code": "",
        "keywords": [
            "southern",
            "territories"
        ]
    },
    "🇹🇬": {
        "i": "2042",
        "codePoint": "U+1F1F9+1F1EC",
        "name": "flag Togo",
        "entities": "",
        "code": "",
        "keywords": [
            "tg",
            "togo"
        ]
    },
    "🇹🇭": {
        "i": "2043",
        "codePoint": "U+1F1F9+1F1ED",
        "name": "flag Thailand",
        "entities": "",
        "code": "",
        "keywords": [
            "thailand"
        ]
    },
    "🇹🇯": {
        "i": "2044",
        "codePoint": "U+1F1F9+1F1EF",
        "name": "flag Tajikistan",
        "entities": "",
        "code": "",
        "keywords": [
            "tj",
            "tajikistan"
        ]
    },
    "🇹🇰": {
        "i": "2045",
        "codePoint": "U+1F1F9+1F1F0",
        "name": "flag Tokelau",
        "entities": "",
        "code": "",
        "keywords": [
            "tk",
            "tokelau"
        ]
    },
    "🇹🇱": {
        "i": "2046",
        "codePoint": "U+1F1F9+1F1F1",
        "name": "flag Timor-Leste",
        "entities": "",
        "code": "",
        "keywords": [
            "timor",
            "leste"
        ]
    },
    "🇹🇲": {
        "i": "2047",
        "codePoint": "U+1F1F9+1F1F2",
        "name": "flag Turkmenistan",
        "entities": "",
        "code": "",
        "keywords": [
            "turkmenistan"
        ]
    },
    "🇹🇳": {
        "i": "2048",
        "codePoint": "U+1F1F9+1F1F3",
        "name": "flag Tunisia",
        "entities": "",
        "code": "",
        "keywords": [
            "tn",
            "tunisia"
        ]
    },
    "🇹🇴": {
        "i": "2049",
        "codePoint": "U+1F1F9+1F1F4",
        "name": "flag Tonga",
        "entities": "",
        "code": "",
        "keywords": [
            "to",
            "tonga"
        ]
    },
    "🇹🇷": {
        "i": "2050",
        "codePoint": "U+1F1F9+1F1F7",
        "name": "flag Türkiye",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇹🇹": {
        "i": "2051",
        "codePoint": "U+1F1F9+1F1F9",
        "name": "flag Trinidad & Tobago",
        "entities": "",
        "code": "",
        "keywords": [
            "trinidad",
            "tobago"
        ]
    },
    "🇹🇻": {
        "i": "2052",
        "codePoint": "U+1F1F9+1F1FB",
        "name": "flag Tuvalu",
        "entities": "",
        "code": "",
        "keywords": [
            "tuvalu"
        ]
    },
    "🇹🇼": {
        "i": "2053",
        "codePoint": "U+1F1F9+1F1FC",
        "name": "flag Taiwan",
        "entities": "",
        "code": "",
        "keywords": [
            "tw"
        ]
    },
    "🇹🇿": {
        "i": "2054",
        "codePoint": "U+1F1F9+1F1FF",
        "name": "flag Tanzania",
        "entities": "",
        "code": "",
        "keywords": [
            "tanzania"
        ]
    },
    "🇺🇦": {
        "i": "2055",
        "codePoint": "U+1F1FA+1F1E6",
        "name": "flag Ukraine",
        "entities": "",
        "code": "",
        "keywords": [
            "ua",
            "ukraine"
        ]
    },
    "🇺🇬": {
        "i": "2056",
        "codePoint": "U+1F1FA+1F1EC",
        "name": "flag Uganda",
        "entities": "",
        "code": "",
        "keywords": [
            "ug",
            "uganda"
        ]
    },
    "🇺🇲": {
        "i": "2057",
        "codePoint": "U+1F1FA+1F1F2",
        "name": "flag U.S. Outlying Islands",
        "entities": "",
        "code": "",
        "keywords": [
            ""
        ]
    },
    "🇺🇳": {
        "i": "2058",
        "codePoint": "U+1F1FA+1F1F3",
        "name": "flag United Nations",
        "entities": "",
        "code": "",
        "keywords": [
            "un"
        ]
    },
    "🇺🇸": {
        "i": "2059",
        "codePoint": "U+1F1FA+1F1F8",
        "name": "flag United States",
        "entities": "",
        "code": "",
        "keywords": [
            "states"
        ]
    },
    "🇺🇾": {
        "i": "2060",
        "codePoint": "U+1F1FA+1F1FE",
        "name": "flag Uruguay",
        "entities": "",
        "code": "",
        "keywords": [
            "uy",
            "uruguay"
        ]
    },
    "🇺🇿": {
        "i": "2061",
        "codePoint": "U+1F1FA+1F1FF",
        "name": "flag Uzbekistan",
        "entities": "",
        "code": "",
        "keywords": [
            "uz",
            "uzbekistan"
        ]
    },
    "🇻🇦": {
        "i": "2062",
        "codePoint": "U+1F1FB+1F1E6",
        "name": "flag Vatican City",
        "entities": "",
        "code": "",
        "keywords": [
            "vatican"
        ]
    },
    "🇻🇨": {
        "i": "2063",
        "codePoint": "U+1F1FB+1F1E8",
        "name": "flag St. Vincent & Grenadines",
        "entities": "",
        "code": "",
        "keywords": [
            "vincent",
            "grenadines"
        ]
    },
    "🇻🇪": {
        "i": "2064",
        "codePoint": "U+1F1FB+1F1EA",
        "name": "flag Venezuela",
        "entities": "",
        "code": "",
        "keywords": [
            "ve",
            "bolivarian",
            "venezuela"
        ]
    },
    "🇻🇬": {
        "i": "2065",
        "codePoint": "U+1F1FB+1F1EC",
        "name": "flag British Virgin Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "virgin",
            "bvi"
        ]
    },
    "🇻🇮": {
        "i": "2066",
        "codePoint": "U+1F1FB+1F1EE",
        "name": "flag U.S. Virgin Islands",
        "entities": "",
        "code": "",
        "keywords": [
            "us"
        ]
    },
    "🇻🇳": {
        "i": "2067",
        "codePoint": "U+1F1FB+1F1F3",
        "name": "flag Vietnam",
        "entities": "",
        "code": "",
        "keywords": [
            "vn",
            "viet nam",
            "vietnam"
        ]
    },
    "🇻🇺": {
        "i": "2068",
        "codePoint": "U+1F1FB+1F1FA",
        "name": "flag Vanuatu",
        "entities": "",
        "code": "",
        "keywords": [
            "vu",
            "vanuatu"
        ]
    },
    "🇼🇫": {
        "i": "2069",
        "codePoint": "U+1F1FC+1F1EB",
        "name": "flag Wallis & Futuna",
        "entities": "",
        "code": "",
        "keywords": [
            "wallis",
            "futuna"
        ]
    },
    "🇼🇸": {
        "i": "2070",
        "codePoint": "U+1F1FC+1F1F8",
        "name": "flag Samoa",
        "entities": "",
        "code": "",
        "keywords": [
            "samoa"
        ]
    },
    "🇽🇰": {
        "i": "2071",
        "codePoint": "U+1F1FD+1F1F0",
        "name": "flag Kosovo",
        "entities": "",
        "code": "",
        "keywords": [
            "xk",
            "kosovo"
        ]
    },
    "🇾🇪": {
        "i": "2072",
        "codePoint": "U+1F1FE+1F1EA",
        "name": "flag Yemen",
        "entities": "",
        "code": "",
        "keywords": [
            "ye",
            "yemen"
        ]
    },
    "🇾🇹": {
        "i": "2073",
        "codePoint": "U+1F1FE+1F1F9",
        "name": "flag Mayotte",
        "entities": "",
        "code": "",
        "keywords": [
            "yt",
            "mayotte"
        ]
    },
    "🇿🇦": {
        "i": "2074",
        "codePoint": "U+1F1FF+1F1E6",
        "name": "flag South Africa",
        "entities": "",
        "code": "",
        "keywords": [
            "africa"
        ]
    },
    "🇿🇲": {
        "i": "2075",
        "codePoint": "U+1F1FF+1F1F2",
        "name": "flag Zambia",
        "entities": "",
        "code": "",
        "keywords": [
            "zm",
            "zambia"
        ]
    },
    "🇿🇼": {
        "i": "2076",
        "codePoint": "U+1F1FF+1F1FC",
        "name": "flag Zimbabwe",
        "entities": "",
        "code": "",
        "keywords": [
            "zw",
            "zimbabwe"
        ]
    },
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿": {
        "i": "2077",
        "codePoint": "U+1F3F4+E0067+E0062+E0065+E006E+E0067+E007F",
        "name": "flag England",
        "entities": "",
        "code": "",
        "keywords": [
            "english"
        ]
    },
    "🏴󠁧󠁢󠁳󠁣󠁴󠁿": {
        "i": "2078",
        "codePoint": "U+1F3F4+E0067+E0062+E0073+E0063+E0074+E007F",
        "name": "flag Scotland",
        "entities": "",
        "code": "",
        "keywords": [
            "scottish"
        ]
    },
    "🏴󠁧󠁢󠁷󠁬󠁳󠁿": {
        "i": "2079",
        "codePoint": "U+1F3F4+E0067+E0062+E0077+E006C+E0073+E007F",
        "name": "flag Wales",
        "entities": "",
        "code": "",
        "keywords": [
            "welsh"
        ]
    }
};
