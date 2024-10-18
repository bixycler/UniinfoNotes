const htmlEntityMap = {
    "Æ": [
        "&AElig;"
    ],
    "&": [
        "&amp;",
        "&AMP;"
    ],
    "Á": [
        "&Aacute;"
    ],
    "Ă": [
        "&Abreve;"
    ],
    "Â": [
        "&Acirc;"
    ],
    "А": [
        "&Acy;"
    ],
    "𝔄": [
        "&Afr;"
    ],
    "À": [
        "&Agrave;"
    ],
    "Α": [
        "&Alpha;"
    ],
    "Ā": [
        "&Amacr;"
    ],
    "⩓": [
        "&And;"
    ],
    "Ą": [
        "&Aogon;"
    ],
    "𝔸": [
        "&Aopf;"
    ],
    "⁡": [
        "&af;",
        "&ApplyFunction;"
    ],
    "Å": [
        "&angst;",
        "&Aring;"
    ],
    "𝒜": [
        "&Ascr;"
    ],
    "≔": [
        "&Assign;",
        "&colone;",
        "&coloneq;"
    ],
    "Ã": [
        "&Atilde;"
    ],
    "Ä": [
        "&Auml;"
    ],
    "∖": [
        "&setmn;",
        "&ssetmn;",
        "&setminus;",
        "&Backslash;",
        "&smallsetminus;"
    ],
    "⫧": [
        "&Barv;"
    ],
    "⌆": [
        "&Barwed;",
        "&doublebarwedge;"
    ],
    "Б": [
        "&Bcy;"
    ],
    "∵": [
        "&becaus;",
        "&because;",
        "&Because;"
    ],
    "ℬ": [
        "&Bscr;",
        "&bernou;",
        "&Bernoullis;"
    ],
    "Β": [
        "&Beta;"
    ],
    "𝔅": [
        "&Bfr;"
    ],
    "𝔹": [
        "&Bopf;"
    ],
    "˘": [
        "&breve;",
        "&Breve;"
    ],
    "≎": [
        "&bump;",
        "&Bumpeq;",
        "&HumpDownHump;"
    ],
    "Ч": [
        "&CHcy;"
    ],
    "©": [
        "&copy;",
        "&COPY;"
    ],
    "Ć": [
        "&Cacute;"
    ],
    "⋒": [
        "&Cap;"
    ],
    "ⅅ": [
        "&DD;",
        "&CapitalDifferentialD;"
    ],
    "ℭ": [
        "&Cfr;",
        "&Cayleys;"
    ],
    "Č": [
        "&Ccaron;"
    ],
    "Ç": [
        "&Ccedil;"
    ],
    "Ĉ": [
        "&Ccirc;"
    ],
    "∰": [
        "&Cconint;"
    ],
    "Ċ": [
        "&Cdot;"
    ],
    "¸": [
        "&cedil;",
        "&Cedilla;"
    ],
    "·": [
        "&middot;",
        "&centerdot;",
        "&CenterDot;"
    ],
    "Χ": [
        "&Chi;"
    ],
    "⊙": [
        "&odot;",
        "&CircleDot;"
    ],
    "⊖": [
        "&ominus;",
        "&CircleMinus;"
    ],
    "⊕": [
        "&oplus;",
        "&CirclePlus;"
    ],
    "⊗": [
        "&otimes;",
        "&CircleTimes;"
    ],
    "∲": [
        "&cwconint;",
        "&ClockwiseContourIntegral;"
    ],
    "”": [
        "&rdquo;",
        "&rdquor;",
        "&CloseCurlyDoubleQuote;"
    ],
    "’": [
        "&rsquo;",
        "&rsquor;",
        "&CloseCurlyQuote;"
    ],
    "∷": [
        "&Colon;",
        "&Proportion;"
    ],
    "⩴": [
        "&Colone;"
    ],
    "≡": [
        "&equiv;",
        "&Congruent;"
    ],
    "∯": [
        "&Conint;",
        "&DoubleContourIntegral;"
    ],
    "∮": [
        "&oint;",
        "&conint;",
        "&ContourIntegral;"
    ],
    "ℂ": [
        "&Copf;",
        "&complexes;"
    ],
    "∐": [
        "&coprod;",
        "&Coproduct;"
    ],
    "∳": [
        "&awconint;",
        "&CounterClockwiseContourIntegral;"
    ],
    "⨯": [
        "&Cross;"
    ],
    "𝒞": [
        "&Cscr;"
    ],
    "⋓": [
        "&Cup;"
    ],
    "≍": [
        "&CupCap;",
        "&asympeq;"
    ],
    "⤑": [
        "&DDotrahd;"
    ],
    "Ђ": [
        "&DJcy;"
    ],
    "Ѕ": [
        "&DScy;"
    ],
    "Џ": [
        "&DZcy;"
    ],
    "‡": [
        "&Dagger;",
        "&ddagger;"
    ],
    "↡": [
        "&Darr;"
    ],
    "⫤": [
        "&Dashv;",
        "&DoubleLeftTee;"
    ],
    "Ď": [
        "&Dcaron;"
    ],
    "Д": [
        "&Dcy;"
    ],
    "∇": [
        "&Del;",
        "&nabla;"
    ],
    "Δ": [
        "&Delta;"
    ],
    "𝔇": [
        "&Dfr;"
    ],
    "´": [
        "&acute;",
        "&DiacriticalAcute;"
    ],
    "˙": [
        "&dot;",
        "&DiacriticalDot;"
    ],
    "˝": [
        "&dblac;",
        "&DiacriticalDoubleAcute;"
    ],
    "`": [
        "&grave;",
        "&DiacriticalGrave;"
    ],
    "˜": [
        "&tilde;",
        "&DiacriticalTilde;"
    ],
    "⋄": [
        "&diam;",
        "&diamond;",
        "&Diamond;"
    ],
    "ⅆ": [
        "&dd;",
        "&DifferentialD;"
    ],
    "𝔻": [
        "&Dopf;"
    ],
    "¨": [
        "&die;",
        "&Dot;",
        "&uml;",
        "&DoubleDot;"
    ],
    "⃜": [
        "&DotDot;"
    ],
    "≐": [
        "&doteq;",
        "&esdot;",
        "&DotEqual;"
    ],
    "⇓": [
        "&dArr;",
        "&Downarrow;",
        "&DoubleDownArrow;"
    ],
    "⇐": [
        "&lArr;",
        "&Leftarrow;",
        "&DoubleLeftArrow;"
    ],
    "⇔": [
        "&iff;",
        "&hArr;",
        "&Leftrightarrow;",
        "&DoubleLeftRightArrow;"
    ],
    "⟸": [
        "&xlArr;",
        "&Longleftarrow;",
        "&DoubleLongLeftArrow;"
    ],
    "⟺": [
        "&xhArr;",
        "&Longleftrightarrow;",
        "&DoubleLongLeftRightArrow;"
    ],
    "⟹": [
        "&xrArr;",
        "&Longrightarrow;",
        "&DoubleLongRightArrow;"
    ],
    "⇒": [
        "&rArr;",
        "&Implies;",
        "&Rightarrow;",
        "&DoubleRightArrow;"
    ],
    "⊨": [
        "&vDash;",
        "&DoubleRightTee;"
    ],
    "⇑": [
        "&uArr;",
        "&Uparrow;",
        "&DoubleUpArrow;"
    ],
    "⇕": [
        "&vArr;",
        "&Updownarrow;",
        "&DoubleUpDownArrow;"
    ],
    "∥": [
        "&par;",
        "&spar;",
        "&parallel;",
        "&shortparallel;",
        "&DoubleVerticalBar;"
    ],
    "↓": [
        "&darr;",
        "&downarrow;",
        "&DownArrow;",
        "&ShortDownArrow;"
    ],
    "⤓": [
        "&DownArrowBar;"
    ],
    "⇵": [
        "&duarr;",
        "&DownArrowUpArrow;"
    ],
    "̑": [
        "&DownBreve;"
    ],
    "⥐": [
        "&DownLeftRightVector;"
    ],
    "⥞": [
        "&DownLeftTeeVector;"
    ],
    "↽": [
        "&lhard;",
        "&DownLeftVector;",
        "&leftharpoondown;"
    ],
    "⥖": [
        "&DownLeftVectorBar;"
    ],
    "⥟": [
        "&DownRightTeeVector;"
    ],
    "⇁": [
        "&rhard;",
        "&DownRightVector;",
        "&rightharpoondown;"
    ],
    "⥗": [
        "&DownRightVectorBar;"
    ],
    "⊤": [
        "&top;",
        "&DownTee;"
    ],
    "↧": [
        "&mapstodown;",
        "&DownTeeArrow;"
    ],
    "𝒟": [
        "&Dscr;"
    ],
    "Đ": [
        "&Dstrok;"
    ],
    "Ŋ": [
        "&ENG;"
    ],
    "Ð": [
        "&ETH;"
    ],
    "É": [
        "&Eacute;"
    ],
    "Ě": [
        "&Ecaron;"
    ],
    "Ê": [
        "&Ecirc;"
    ],
    "Э": [
        "&Ecy;"
    ],
    "Ė": [
        "&Edot;"
    ],
    "𝔈": [
        "&Efr;"
    ],
    "È": [
        "&Egrave;"
    ],
    "∈": [
        "&in;",
        "&isin;",
        "&isinv;",
        "&Element;"
    ],
    "Ē": [
        "&Emacr;"
    ],
    "◻": [
        "&EmptySmallSquare;"
    ],
    "▫": [
        "&EmptyVerySmallSquare;"
    ],
    "Ę": [
        "&Eogon;"
    ],
    "𝔼": [
        "&Eopf;"
    ],
    "Ε": [
        "&Epsilon;"
    ],
    "⩵": [
        "&Equal;"
    ],
    "≂": [
        "&esim;",
        "&eqsim;",
        "&EqualTilde;"
    ],
    "⇌": [
        "&rlhar;",
        "&Equilibrium;",
        "&rightleftharpoons;"
    ],
    "ℰ": [
        "&Escr;",
        "&expectation;"
    ],
    "⩳": [
        "&Esim;"
    ],
    "Η": [
        "&Eta;"
    ],
    "Ë": [
        "&Euml;"
    ],
    "∃": [
        "&exist;",
        "&Exists;"
    ],
    "ⅇ": [
        "&ee;",
        "&exponentiale;",
        "&ExponentialE;"
    ],
    "Ф": [
        "&Fcy;"
    ],
    "𝔉": [
        "&Ffr;"
    ],
    "◼": [
        "&FilledSmallSquare;"
    ],
    "▪": [
        "&squf;",
        "&squarf;",
        "&blacksquare;",
        "&FilledVerySmallSquare;"
    ],
    "𝔽": [
        "&Fopf;"
    ],
    "∀": [
        "&forall;",
        "&ForAll;"
    ],
    "ℱ": [
        "&Fscr;",
        "&Fouriertrf;"
    ],
    "Ѓ": [
        "&GJcy;"
    ],
    ">": [
        "&gt;",
        "&GT;"
    ],
    "Γ": [
        "&Gamma;"
    ],
    "Ϝ": [
        "&Gammad;"
    ],
    "Ğ": [
        "&Gbreve;"
    ],
    "Ģ": [
        "&Gcedil;"
    ],
    "Ĝ": [
        "&Gcirc;"
    ],
    "Г": [
        "&Gcy;"
    ],
    "Ġ": [
        "&Gdot;"
    ],
    "𝔊": [
        "&Gfr;"
    ],
    "⋙": [
        "&Gg;",
        "&ggg;"
    ],
    "𝔾": [
        "&Gopf;"
    ],
    "≥": [
        "&ge;",
        "&geq;",
        "&GreaterEqual;"
    ],
    "⋛": [
        "&gel;",
        "&gtreqless;",
        "&GreaterEqualLess;"
    ],
    "≧": [
        "&gE;",
        "&geqq;",
        "&GreaterFullEqual;"
    ],
    "⪢": [
        "&GreaterGreater;"
    ],
    "≷": [
        "&gl;",
        "&gtrless;",
        "&GreaterLess;"
    ],
    "⩾": [
        "&ges;",
        "&geqslant;",
        "&GreaterSlantEqual;"
    ],
    "≳": [
        "&gsim;",
        "&gtrsim;",
        "&GreaterTilde;"
    ],
    "𝒢": [
        "&Gscr;"
    ],
    "≫": [
        "&gg;",
        "&Gt;",
        "&NestedGreaterGreater;"
    ],
    "Ъ": [
        "&HARDcy;"
    ],
    "ˇ": [
        "&caron;",
        "&Hacek;"
    ],
    "^": [
        "&Hat;"
    ],
    "Ĥ": [
        "&Hcirc;"
    ],
    "ℌ": [
        "&Hfr;",
        "&Poincareplane;"
    ],
    "ℋ": [
        "&Hscr;",
        "&hamilt;",
        "&HilbertSpace;"
    ],
    "ℍ": [
        "&Hopf;",
        "&quaternions;"
    ],
    "─": [
        "&boxh;",
        "&HorizontalLine;"
    ],
    "Ħ": [
        "&Hstrok;"
    ],
    "≏": [
        "&bumpe;",
        "&bumpeq;",
        "&HumpEqual;"
    ],
    "Е": [
        "&IEcy;"
    ],
    "Ĳ": [
        "&IJlig;"
    ],
    "Ё": [
        "&IOcy;"
    ],
    "Í": [
        "&Iacute;"
    ],
    "Î": [
        "&Icirc;"
    ],
    "И": [
        "&Icy;"
    ],
    "İ": [
        "&Idot;"
    ],
    "ℑ": [
        "&Im;",
        "&Ifr;",
        "&image;",
        "&imagpart;"
    ],
    "Ì": [
        "&Igrave;"
    ],
    "Ī": [
        "&Imacr;"
    ],
    "ⅈ": [
        "&ii;",
        "&ImaginaryI;"
    ],
    "∬": [
        "&Int;"
    ],
    "∫": [
        "&int;",
        "&Integral;"
    ],
    "⋂": [
        "&xcap;",
        "&bigcap;",
        "&Intersection;"
    ],
    "⁣": [
        "&ic;",
        "&InvisibleComma;"
    ],
    "⁢": [
        "&it;",
        "&InvisibleTimes;"
    ],
    "Į": [
        "&Iogon;"
    ],
    "𝕀": [
        "&Iopf;"
    ],
    "Ι": [
        "&Iota;"
    ],
    "ℐ": [
        "&Iscr;",
        "&imagline;"
    ],
    "Ĩ": [
        "&Itilde;"
    ],
    "І": [
        "&Iukcy;"
    ],
    "Ï": [
        "&Iuml;"
    ],
    "Ĵ": [
        "&Jcirc;"
    ],
    "Й": [
        "&Jcy;"
    ],
    "𝔍": [
        "&Jfr;"
    ],
    "𝕁": [
        "&Jopf;"
    ],
    "𝒥": [
        "&Jscr;"
    ],
    "Ј": [
        "&Jsercy;"
    ],
    "Є": [
        "&Jukcy;"
    ],
    "Х": [
        "&KHcy;"
    ],
    "Ќ": [
        "&KJcy;"
    ],
    "Κ": [
        "&Kappa;"
    ],
    "Ķ": [
        "&Kcedil;"
    ],
    "К": [
        "&Kcy;"
    ],
    "𝔎": [
        "&Kfr;"
    ],
    "𝕂": [
        "&Kopf;"
    ],
    "𝒦": [
        "&Kscr;"
    ],
    "Љ": [
        "&LJcy;"
    ],
    "<": [
        "&lt;",
        "&LT;"
    ],
    "Ĺ": [
        "&Lacute;"
    ],
    "Λ": [
        "&Lambda;"
    ],
    "⟪": [
        "&Lang;"
    ],
    "ℒ": [
        "&Lscr;",
        "&lagran;",
        "&Laplacetrf;"
    ],
    "↞": [
        "&Larr;",
        "&twoheadleftarrow;"
    ],
    "Ľ": [
        "&Lcaron;"
    ],
    "Ļ": [
        "&Lcedil;"
    ],
    "Л": [
        "&Lcy;"
    ],
    "⟨": [
        "&lang;",
        "&langle;",
        "&LeftAngleBracket;"
    ],
    "←": [
        "&larr;",
        "&slarr;",
        "&leftarrow;",
        "&LeftArrow;",
        "&ShortLeftArrow;"
    ],
    "⇤": [
        "&larrb;",
        "&LeftArrowBar;"
    ],
    "⇆": [
        "&lrarr;",
        "&leftrightarrows;",
        "&LeftArrowRightArrow;"
    ],
    "⌈": [
        "&lceil;",
        "&LeftCeiling;"
    ],
    "⟦": [
        "&lobrk;",
        "&LeftDoubleBracket;"
    ],
    "⥡": [
        "&LeftDownTeeVector;"
    ],
    "⇃": [
        "&dharl;",
        "&LeftDownVector;",
        "&downharpoonleft;"
    ],
    "⥙": [
        "&LeftDownVectorBar;"
    ],
    "⌊": [
        "&lfloor;",
        "&LeftFloor;"
    ],
    "↔": [
        "&harr;",
        "&leftrightarrow;",
        "&LeftRightArrow;"
    ],
    "⥎": [
        "&LeftRightVector;"
    ],
    "⊣": [
        "&dashv;",
        "&LeftTee;"
    ],
    "↤": [
        "&mapstoleft;",
        "&LeftTeeArrow;"
    ],
    "⥚": [
        "&LeftTeeVector;"
    ],
    "⊲": [
        "&vltri;",
        "&LeftTriangle;",
        "&vartriangleleft;"
    ],
    "⧏": [
        "&LeftTriangleBar;"
    ],
    "⊴": [
        "&ltrie;",
        "&trianglelefteq;",
        "&LeftTriangleEqual;"
    ],
    "⥑": [
        "&LeftUpDownVector;"
    ],
    "⥠": [
        "&LeftUpTeeVector;"
    ],
    "↿": [
        "&uharl;",
        "&LeftUpVector;",
        "&upharpoonleft;"
    ],
    "⥘": [
        "&LeftUpVectorBar;"
    ],
    "↼": [
        "&lharu;",
        "&LeftVector;",
        "&leftharpoonup;"
    ],
    "⥒": [
        "&LeftVectorBar;"
    ],
    "⋚": [
        "&leg;",
        "&lesseqgtr;",
        "&LessEqualGreater;"
    ],
    "≦": [
        "&lE;",
        "&leqq;",
        "&LessFullEqual;"
    ],
    "≶": [
        "&lg;",
        "&lessgtr;",
        "&LessGreater;"
    ],
    "⪡": [
        "&LessLess;"
    ],
    "⩽": [
        "&les;",
        "&leqslant;",
        "&LessSlantEqual;"
    ],
    "≲": [
        "&lsim;",
        "&lesssim;",
        "&LessTilde;"
    ],
    "𝔏": [
        "&Lfr;"
    ],
    "⋘": [
        "&Ll;"
    ],
    "⇚": [
        "&lAarr;",
        "&Lleftarrow;"
    ],
    "Ŀ": [
        "&Lmidot;"
    ],
    "⟵": [
        "&xlarr;",
        "&longleftarrow;",
        "&LongLeftArrow;"
    ],
    "⟷": [
        "&xharr;",
        "&longleftrightarrow;",
        "&LongLeftRightArrow;"
    ],
    "⟶": [
        "&xrarr;",
        "&longrightarrow;",
        "&LongRightArrow;"
    ],
    "𝕃": [
        "&Lopf;"
    ],
    "↙": [
        "&swarr;",
        "&swarrow;",
        "&LowerLeftArrow;"
    ],
    "↘": [
        "&searr;",
        "&searrow;",
        "&LowerRightArrow;"
    ],
    "↰": [
        "&lsh;",
        "&Lsh;"
    ],
    "Ł": [
        "&Lstrok;"
    ],
    "≪": [
        "&ll;",
        "&Lt;",
        "&NestedLessLess;"
    ],
    "⤅": [
        "&Map;"
    ],
    "М": [
        "&Mcy;"
    ],
    " ": [
        "&MediumSpace;"
    ],
    "ℳ": [
        "&Mscr;",
        "&phmmat;",
        "&Mellintrf;"
    ],
    "𝔐": [
        "&Mfr;"
    ],
    "∓": [
        "&mp;",
        "&mnplus;",
        "&MinusPlus;"
    ],
    "𝕄": [
        "&Mopf;"
    ],
    "Μ": [
        "&Mu;"
    ],
    "Њ": [
        "&NJcy;"
    ],
    "Ń": [
        "&Nacute;"
    ],
    "Ň": [
        "&Ncaron;"
    ],
    "Ņ": [
        "&Ncedil;"
    ],
    "Н": [
        "&Ncy;"
    ],
    "​": [
        "&ZeroWidthSpace;",
        "&NegativeThinSpace;",
        "&NegativeThickSpace;",
        "&NegativeMediumSpace;",
        "&NegativeVeryThinSpace;"
    ],
    "\n": [
        "&NewLine;"
    ],
    "𝔑": [
        "&Nfr;"
    ],
    "⁠": [
        "&NoBreak;"
    ],
    " ": [
        "&nbsp;",
        "&NonBreakingSpace;"
    ],
    "ℕ": [
        "&Nopf;",
        "&naturals;"
    ],
    "⫬": [
        "&Not;"
    ],
    "≢": [
        "&nequiv;",
        "&NotCongruent;"
    ],
    "≭": [
        "&NotCupCap;"
    ],
    "∦": [
        "&npar;",
        "&nspar;",
        "&nparallel;",
        "&nshortparallel;",
        "&NotDoubleVerticalBar;"
    ],
    "∉": [
        "&notin;",
        "&notinva;",
        "&NotElement;"
    ],
    "≠": [
        "&ne;",
        "&NotEqual;"
    ],
    "≂̸": [
        "&nesim;",
        "&NotEqualTilde;"
    ],
    "∄": [
        "&nexist;",
        "&nexists;",
        "&NotExists;"
    ],
    "≯": [
        "&ngt;",
        "&ngtr;",
        "&NotGreater;"
    ],
    "≱": [
        "&nge;",
        "&ngeq;",
        "&NotGreaterEqual;"
    ],
    "≧̸": [
        "&ngE;",
        "&ngeqq;",
        "&NotGreaterFullEqual;"
    ],
    "≫̸": [
        "&nGtv;",
        "&NotGreaterGreater;"
    ],
    "≹": [
        "&ntgl;",
        "&NotGreaterLess;"
    ],
    "⩾̸": [
        "&nges;",
        "&ngeqslant;",
        "&NotGreaterSlantEqual;"
    ],
    "≵": [
        "&ngsim;",
        "&NotGreaterTilde;"
    ],
    "≎̸": [
        "&nbump;",
        "&NotHumpDownHump;"
    ],
    "≏̸": [
        "&nbumpe;",
        "&NotHumpEqual;"
    ],
    "⋪": [
        "&nltri;",
        "&ntriangleleft;",
        "&NotLeftTriangle;"
    ],
    "⧏̸": [
        "&NotLeftTriangleBar;"
    ],
    "⋬": [
        "&nltrie;",
        "&ntrianglelefteq;",
        "&NotLeftTriangleEqual;"
    ],
    "≮": [
        "&nlt;",
        "&nless;",
        "&NotLess;"
    ],
    "≰": [
        "&nle;",
        "&nleq;",
        "&NotLessEqual;"
    ],
    "≸": [
        "&ntlg;",
        "&NotLessGreater;"
    ],
    "≪̸": [
        "&nLtv;",
        "&NotLessLess;"
    ],
    "⩽̸": [
        "&nles;",
        "&nleqslant;",
        "&NotLessSlantEqual;"
    ],
    "≴": [
        "&nlsim;",
        "&NotLessTilde;"
    ],
    "⪢̸": [
        "&NotNestedGreaterGreater;"
    ],
    "⪡̸": [
        "&NotNestedLessLess;"
    ],
    "⊀": [
        "&npr;",
        "&nprec;",
        "&NotPrecedes;"
    ],
    "⪯̸": [
        "&npre;",
        "&npreceq;",
        "&NotPrecedesEqual;"
    ],
    "⋠": [
        "&nprcue;",
        "&NotPrecedesSlantEqual;"
    ],
    "∌": [
        "&notni;",
        "&notniva;",
        "&NotReverseElement;"
    ],
    "⋫": [
        "&nrtri;",
        "&ntriangleright;",
        "&NotRightTriangle;"
    ],
    "⧐̸": [
        "&NotRightTriangleBar;"
    ],
    "⋭": [
        "&nrtrie;",
        "&ntrianglerighteq;",
        "&NotRightTriangleEqual;"
    ],
    "⊏̸": [
        "&NotSquareSubset;"
    ],
    "⋢": [
        "&nsqsube;",
        "&NotSquareSubsetEqual;"
    ],
    "⊐̸": [
        "&NotSquareSuperset;"
    ],
    "⋣": [
        "&nsqsupe;",
        "&NotSquareSupersetEqual;"
    ],
    "⊂⃒": [
        "&vnsub;",
        "&nsubset;",
        "&NotSubset;"
    ],
    "⊈": [
        "&nsube;",
        "&nsubseteq;",
        "&NotSubsetEqual;"
    ],
    "⊁": [
        "&nsc;",
        "&nsucc;",
        "&NotSucceeds;"
    ],
    "⪰̸": [
        "&nsce;",
        "&nsucceq;",
        "&NotSucceedsEqual;"
    ],
    "⋡": [
        "&nsccue;",
        "&NotSucceedsSlantEqual;"
    ],
    "≿̸": [
        "&NotSucceedsTilde;"
    ],
    "⊃⃒": [
        "&vnsup;",
        "&nsupset;",
        "&NotSuperset;"
    ],
    "⊉": [
        "&nsupe;",
        "&nsupseteq;",
        "&NotSupersetEqual;"
    ],
    "≁": [
        "&nsim;",
        "&NotTilde;"
    ],
    "≄": [
        "&nsime;",
        "&nsimeq;",
        "&NotTildeEqual;"
    ],
    "≇": [
        "&ncong;",
        "&NotTildeFullEqual;"
    ],
    "≉": [
        "&nap;",
        "&napprox;",
        "&NotTildeTilde;"
    ],
    "∤": [
        "&nmid;",
        "&nsmid;",
        "&nshortmid;",
        "&NotVerticalBar;"
    ],
    "𝒩": [
        "&Nscr;"
    ],
    "Ñ": [
        "&Ntilde;"
    ],
    "Ν": [
        "&Nu;"
    ],
    "Œ": [
        "&OElig;"
    ],
    "Ó": [
        "&Oacute;"
    ],
    "Ô": [
        "&Ocirc;"
    ],
    "О": [
        "&Ocy;"
    ],
    "Ő": [
        "&Odblac;"
    ],
    "𝔒": [
        "&Ofr;"
    ],
    "Ò": [
        "&Ograve;"
    ],
    "Ō": [
        "&Omacr;"
    ],
    "Ω": [
        "&ohm;",
        "&Omega;"
    ],
    "Ο": [
        "&Omicron;"
    ],
    "𝕆": [
        "&Oopf;"
    ],
    "“": [
        "&ldquo;",
        "&OpenCurlyDoubleQuote;"
    ],
    "‘": [
        "&lsquo;",
        "&OpenCurlyQuote;"
    ],
    "⩔": [
        "&Or;"
    ],
    "𝒪": [
        "&Oscr;"
    ],
    "Ø": [
        "&Oslash;"
    ],
    "Õ": [
        "&Otilde;"
    ],
    "⨷": [
        "&Otimes;"
    ],
    "Ö": [
        "&Ouml;"
    ],
    "‾": [
        "&oline;",
        "&OverBar;"
    ],
    "⏞": [
        "&OverBrace;"
    ],
    "⎴": [
        "&tbrk;",
        "&OverBracket;"
    ],
    "⏜": [
        "&OverParenthesis;"
    ],
    "∂": [
        "&part;",
        "&PartialD;"
    ],
    "П": [
        "&Pcy;"
    ],
    "𝔓": [
        "&Pfr;"
    ],
    "Φ": [
        "&Phi;"
    ],
    "Π": [
        "&Pi;"
    ],
    "±": [
        "&pm;",
        "&plusmn;",
        "&PlusMinus;"
    ],
    "ℙ": [
        "&Popf;",
        "&primes;"
    ],
    "⪻": [
        "&Pr;"
    ],
    "≺": [
        "&pr;",
        "&prec;",
        "&Precedes;"
    ],
    "⪯": [
        "&pre;",
        "&preceq;",
        "&PrecedesEqual;"
    ],
    "≼": [
        "&prcue;",
        "&preccurlyeq;",
        "&PrecedesSlantEqual;"
    ],
    "≾": [
        "&prsim;",
        "&precsim;",
        "&PrecedesTilde;"
    ],
    "″": [
        "&Prime;"
    ],
    "∏": [
        "&prod;",
        "&Product;"
    ],
    "∝": [
        "&prop;",
        "&vprop;",
        "&propto;",
        "&varpropto;",
        "&Proportional;"
    ],
    "𝒫": [
        "&Pscr;"
    ],
    "Ψ": [
        "&Psi;"
    ],
    "\"": [
        "&quot;",
        "&QUOT;"
    ],
    "𝔔": [
        "&Qfr;"
    ],
    "ℚ": [
        "&Qopf;",
        "&rationals;"
    ],
    "𝒬": [
        "&Qscr;"
    ],
    "⤐": [
        "&RBarr;",
        "&drbkarow;"
    ],
    "®": [
        "&reg;",
        "&REG;",
        "&circledR;"
    ],
    "Ŕ": [
        "&Racute;"
    ],
    "⟫": [
        "&Rang;"
    ],
    "↠": [
        "&Rarr;",
        "&twoheadrightarrow;"
    ],
    "⤖": [
        "&Rarrtl;"
    ],
    "Ř": [
        "&Rcaron;"
    ],
    "Ŗ": [
        "&Rcedil;"
    ],
    "Р": [
        "&Rcy;"
    ],
    "ℜ": [
        "&Re;",
        "&Rfr;",
        "&real;",
        "&realpart;"
    ],
    "∋": [
        "&ni;",
        "&niv;",
        "&SuchThat;",
        "&ReverseElement;"
    ],
    "⇋": [
        "&lrhar;",
        "&leftrightharpoons;",
        "&ReverseEquilibrium;"
    ],
    "⥯": [
        "&duhar;",
        "&ReverseUpEquilibrium;"
    ],
    "Ρ": [
        "&Rho;"
    ],
    "⟩": [
        "&rang;",
        "&rangle;",
        "&RightAngleBracket;"
    ],
    "→": [
        "&rarr;",
        "&srarr;",
        "&rightarrow;",
        "&RightArrow;",
        "&ShortRightArrow;"
    ],
    "⇥": [
        "&rarrb;",
        "&RightArrowBar;"
    ],
    "⇄": [
        "&rlarr;",
        "&rightleftarrows;",
        "&RightArrowLeftArrow;"
    ],
    "⌉": [
        "&rceil;",
        "&RightCeiling;"
    ],
    "⟧": [
        "&robrk;",
        "&RightDoubleBracket;"
    ],
    "⥝": [
        "&RightDownTeeVector;"
    ],
    "⇂": [
        "&dharr;",
        "&RightDownVector;",
        "&downharpoonright;"
    ],
    "⥕": [
        "&RightDownVectorBar;"
    ],
    "⌋": [
        "&rfloor;",
        "&RightFloor;"
    ],
    "⊢": [
        "&vdash;",
        "&RightTee;"
    ],
    "↦": [
        "&map;",
        "&mapsto;",
        "&RightTeeArrow;"
    ],
    "⥛": [
        "&RightTeeVector;"
    ],
    "⊳": [
        "&vrtri;",
        "&RightTriangle;",
        "&vartriangleright;"
    ],
    "⧐": [
        "&RightTriangleBar;"
    ],
    "⊵": [
        "&rtrie;",
        "&trianglerighteq;",
        "&RightTriangleEqual;"
    ],
    "⥏": [
        "&RightUpDownVector;"
    ],
    "⥜": [
        "&RightUpTeeVector;"
    ],
    "↾": [
        "&uharr;",
        "&RightUpVector;",
        "&upharpoonright;"
    ],
    "⥔": [
        "&RightUpVectorBar;"
    ],
    "⇀": [
        "&rharu;",
        "&RightVector;",
        "&rightharpoonup;"
    ],
    "⥓": [
        "&RightVectorBar;"
    ],
    "ℝ": [
        "&Ropf;",
        "&reals;"
    ],
    "⥰": [
        "&RoundImplies;"
    ],
    "⇛": [
        "&rAarr;",
        "&Rrightarrow;"
    ],
    "ℛ": [
        "&Rscr;",
        "&realine;"
    ],
    "↱": [
        "&rsh;",
        "&Rsh;"
    ],
    "⧴": [
        "&RuleDelayed;"
    ],
    "Щ": [
        "&SHCHcy;"
    ],
    "Ш": [
        "&SHcy;"
    ],
    "Ь": [
        "&SOFTcy;"
    ],
    "Ś": [
        "&Sacute;"
    ],
    "⪼": [
        "&Sc;"
    ],
    "Š": [
        "&Scaron;"
    ],
    "Ş": [
        "&Scedil;"
    ],
    "Ŝ": [
        "&Scirc;"
    ],
    "С": [
        "&Scy;"
    ],
    "𝔖": [
        "&Sfr;"
    ],
    "↑": [
        "&uarr;",
        "&uparrow;",
        "&UpArrow;",
        "&ShortUpArrow;"
    ],
    "Σ": [
        "&Sigma;"
    ],
    "∘": [
        "&compfn;",
        "&SmallCircle;"
    ],
    "𝕊": [
        "&Sopf;"
    ],
    "√": [
        "&Sqrt;",
        "&radic;"
    ],
    "□": [
        "&squ;",
        "&square;",
        "&Square;"
    ],
    "⊓": [
        "&sqcap;",
        "&SquareIntersection;"
    ],
    "⊏": [
        "&sqsub;",
        "&sqsubset;",
        "&SquareSubset;"
    ],
    "⊑": [
        "&sqsube;",
        "&sqsubseteq;",
        "&SquareSubsetEqual;"
    ],
    "⊐": [
        "&sqsup;",
        "&sqsupset;",
        "&SquareSuperset;"
    ],
    "⊒": [
        "&sqsupe;",
        "&sqsupseteq;",
        "&SquareSupersetEqual;"
    ],
    "⊔": [
        "&sqcup;",
        "&SquareUnion;"
    ],
    "𝒮": [
        "&Sscr;"
    ],
    "⋆": [
        "&Star;",
        "&sstarf;"
    ],
    "⋐": [
        "&Sub;",
        "&Subset;"
    ],
    "⊆": [
        "&sube;",
        "&subseteq;",
        "&SubsetEqual;"
    ],
    "≻": [
        "&sc;",
        "&succ;",
        "&Succeeds;"
    ],
    "⪰": [
        "&sce;",
        "&succeq;",
        "&SucceedsEqual;"
    ],
    "≽": [
        "&sccue;",
        "&succcurlyeq;",
        "&SucceedsSlantEqual;"
    ],
    "≿": [
        "&scsim;",
        "&succsim;",
        "&SucceedsTilde;"
    ],
    "∑": [
        "&sum;",
        "&Sum;"
    ],
    "⋑": [
        "&Sup;",
        "&Supset;"
    ],
    "⊃": [
        "&sup;",
        "&supset;",
        "&Superset;"
    ],
    "⊇": [
        "&supe;",
        "&supseteq;",
        "&SupersetEqual;"
    ],
    "Þ": [
        "&THORN;"
    ],
    "™": [
        "&trade;",
        "&TRADE;"
    ],
    "Ћ": [
        "&TSHcy;"
    ],
    "Ц": [
        "&TScy;"
    ],
    "\t": [
        "&Tab;"
    ],
    "Τ": [
        "&Tau;"
    ],
    "Ť": [
        "&Tcaron;"
    ],
    "Ţ": [
        "&Tcedil;"
    ],
    "Т": [
        "&Tcy;"
    ],
    "𝔗": [
        "&Tfr;"
    ],
    "∴": [
        "&there4;",
        "&therefore;",
        "&Therefore;"
    ],
    "Θ": [
        "&Theta;"
    ],
    "  ": [
        "&ThickSpace;"
    ],
    " ": [
        "&thinsp;",
        "&ThinSpace;"
    ],
    "∼": [
        "&sim;",
        "&Tilde;",
        "&thksim;",
        "&thicksim;"
    ],
    "≃": [
        "&sime;",
        "&simeq;",
        "&TildeEqual;"
    ],
    "≅": [
        "&cong;",
        "&TildeFullEqual;"
    ],
    "≈": [
        "&ap;",
        "&asymp;",
        "&thkap;",
        "&approx;",
        "&TildeTilde;",
        "&thickapprox;"
    ],
    "𝕋": [
        "&Topf;"
    ],
    "⃛": [
        "&tdot;",
        "&TripleDot;"
    ],
    "𝒯": [
        "&Tscr;"
    ],
    "Ŧ": [
        "&Tstrok;"
    ],
    "Ú": [
        "&Uacute;"
    ],
    "↟": [
        "&Uarr;"
    ],
    "⥉": [
        "&Uarrocir;"
    ],
    "Ў": [
        "&Ubrcy;"
    ],
    "Ŭ": [
        "&Ubreve;"
    ],
    "Û": [
        "&Ucirc;"
    ],
    "У": [
        "&Ucy;"
    ],
    "Ű": [
        "&Udblac;"
    ],
    "𝔘": [
        "&Ufr;"
    ],
    "Ù": [
        "&Ugrave;"
    ],
    "Ū": [
        "&Umacr;"
    ],
    "_": [
        "&lowbar;",
        "&UnderBar;"
    ],
    "⏟": [
        "&UnderBrace;"
    ],
    "⎵": [
        "&bbrk;",
        "&UnderBracket;"
    ],
    "⏝": [
        "&UnderParenthesis;"
    ],
    "⋃": [
        "&xcup;",
        "&Union;",
        "&bigcup;"
    ],
    "⊎": [
        "&uplus;",
        "&UnionPlus;"
    ],
    "Ų": [
        "&Uogon;"
    ],
    "𝕌": [
        "&Uopf;"
    ],
    "⤒": [
        "&UpArrowBar;"
    ],
    "⇅": [
        "&udarr;",
        "&UpArrowDownArrow;"
    ],
    "↕": [
        "&varr;",
        "&updownarrow;",
        "&UpDownArrow;"
    ],
    "⥮": [
        "&udhar;",
        "&UpEquilibrium;"
    ],
    "⊥": [
        "&bot;",
        "&perp;",
        "&UpTee;",
        "&bottom;"
    ],
    "↥": [
        "&mapstoup;",
        "&UpTeeArrow;"
    ],
    "↖": [
        "&nwarr;",
        "&nwarrow;",
        "&UpperLeftArrow;"
    ],
    "↗": [
        "&nearr;",
        "&nearrow;",
        "&UpperRightArrow;"
    ],
    "ϒ": [
        "&Upsi;",
        "&upsih;"
    ],
    "Υ": [
        "&Upsilon;"
    ],
    "Ů": [
        "&Uring;"
    ],
    "𝒰": [
        "&Uscr;"
    ],
    "Ũ": [
        "&Utilde;"
    ],
    "Ü": [
        "&Uuml;"
    ],
    "⊫": [
        "&VDash;"
    ],
    "⫫": [
        "&Vbar;"
    ],
    "В": [
        "&Vcy;"
    ],
    "⊩": [
        "&Vdash;"
    ],
    "⫦": [
        "&Vdashl;"
    ],
    "⋁": [
        "&Vee;",
        "&xvee;",
        "&bigvee;"
    ],
    "‖": [
        "&Vert;",
        "&Verbar;"
    ],
    "∣": [
        "&mid;",
        "&smid;",
        "&shortmid;",
        "&VerticalBar;"
    ],
    "|": [
        "&vert;",
        "&verbar;",
        "&VerticalLine;"
    ],
    "❘": [
        "&VerticalSeparator;"
    ],
    "≀": [
        "&wr;",
        "&wreath;",
        "&VerticalTilde;"
    ],
    " ": [
        "&hairsp;",
        "&VeryThinSpace;"
    ],
    "𝔙": [
        "&Vfr;"
    ],
    "𝕍": [
        "&Vopf;"
    ],
    "𝒱": [
        "&Vscr;"
    ],
    "⊪": [
        "&Vvdash;"
    ],
    "Ŵ": [
        "&Wcirc;"
    ],
    "⋀": [
        "&Wedge;",
        "&xwedge;",
        "&bigwedge;"
    ],
    "𝔚": [
        "&Wfr;"
    ],
    "𝕎": [
        "&Wopf;"
    ],
    "𝒲": [
        "&Wscr;"
    ],
    "𝔛": [
        "&Xfr;"
    ],
    "Ξ": [
        "&Xi;"
    ],
    "𝕏": [
        "&Xopf;"
    ],
    "𝒳": [
        "&Xscr;"
    ],
    "Я": [
        "&YAcy;"
    ],
    "Ї": [
        "&YIcy;"
    ],
    "Ю": [
        "&YUcy;"
    ],
    "Ý": [
        "&Yacute;"
    ],
    "Ŷ": [
        "&Ycirc;"
    ],
    "Ы": [
        "&Ycy;"
    ],
    "𝔜": [
        "&Yfr;"
    ],
    "𝕐": [
        "&Yopf;"
    ],
    "𝒴": [
        "&Yscr;"
    ],
    "Ÿ": [
        "&Yuml;"
    ],
    "Ж": [
        "&ZHcy;"
    ],
    "Ź": [
        "&Zacute;"
    ],
    "Ž": [
        "&Zcaron;"
    ],
    "З": [
        "&Zcy;"
    ],
    "Ż": [
        "&Zdot;"
    ],
    "Ζ": [
        "&Zeta;"
    ],
    "ℨ": [
        "&Zfr;",
        "&zeetrf;"
    ],
    "ℤ": [
        "&Zopf;",
        "&integers;"
    ],
    "𝒵": [
        "&Zscr;"
    ],
    "á": [
        "&aacute;"
    ],
    "ă": [
        "&abreve;"
    ],
    "∾": [
        "&ac;",
        "&mstpos;"
    ],
    "∾̳": [
        "&acE;"
    ],
    "∿": [
        "&acd;"
    ],
    "â": [
        "&acirc;"
    ],
    "а": [
        "&acy;"
    ],
    "æ": [
        "&aelig;"
    ],
    "𝔞": [
        "&afr;"
    ],
    "à": [
        "&agrave;"
    ],
    "ℵ": [
        "&aleph;",
        "&alefsym;"
    ],
    "α": [
        "&alpha;"
    ],
    "ā": [
        "&amacr;"
    ],
    "⨿": [
        "&amalg;"
    ],
    "∧": [
        "&and;",
        "&wedge;"
    ],
    "⩕": [
        "&andand;"
    ],
    "⩜": [
        "&andd;"
    ],
    "⩘": [
        "&andslope;"
    ],
    "⩚": [
        "&andv;"
    ],
    "∠": [
        "&ang;",
        "&angle;"
    ],
    "⦤": [
        "&ange;"
    ],
    "∡": [
        "&angmsd;",
        "&measuredangle;"
    ],
    "⦨": [
        "&angmsdaa;"
    ],
    "⦩": [
        "&angmsdab;"
    ],
    "⦪": [
        "&angmsdac;"
    ],
    "⦫": [
        "&angmsdad;"
    ],
    "⦬": [
        "&angmsdae;"
    ],
    "⦭": [
        "&angmsdaf;"
    ],
    "⦮": [
        "&angmsdag;"
    ],
    "⦯": [
        "&angmsdah;"
    ],
    "∟": [
        "&angrt;"
    ],
    "⊾": [
        "&angrtvb;"
    ],
    "⦝": [
        "&angrtvbd;"
    ],
    "∢": [
        "&angsph;"
    ],
    "⍼": [
        "&angzarr;"
    ],
    "ą": [
        "&aogon;"
    ],
    "𝕒": [
        "&aopf;"
    ],
    "⩰": [
        "&apE;"
    ],
    "⩯": [
        "&apacir;"
    ],
    "≊": [
        "&ape;",
        "&approxeq;"
    ],
    "≋": [
        "&apid;"
    ],
    "'": [
        "&apos;"
    ],
    "å": [
        "&aring;"
    ],
    "𝒶": [
        "&ascr;"
    ],
    "*": [
        "&ast;",
        "&midast;"
    ],
    "ã": [
        "&atilde;"
    ],
    "ä": [
        "&auml;"
    ],
    "⨑": [
        "&awint;"
    ],
    "⫭": [
        "&bNot;"
    ],
    "≌": [
        "&bcong;",
        "&backcong;"
    ],
    "϶": [
        "&bepsi;",
        "&backepsilon;"
    ],
    "‵": [
        "&bprime;",
        "&backprime;"
    ],
    "∽": [
        "&bsim;",
        "&backsim;"
    ],
    "⋍": [
        "&bsime;",
        "&backsimeq;"
    ],
    "⊽": [
        "&barvee;"
    ],
    "⌅": [
        "&barwed;",
        "&barwedge;"
    ],
    "⎶": [
        "&bbrktbrk;"
    ],
    "б": [
        "&bcy;"
    ],
    "„": [
        "&bdquo;",
        "&ldquor;"
    ],
    "⦰": [
        "&bemptyv;"
    ],
    "β": [
        "&beta;"
    ],
    "ℶ": [
        "&beth;"
    ],
    "≬": [
        "&twixt;",
        "&between;"
    ],
    "𝔟": [
        "&bfr;"
    ],
    "◯": [
        "&xcirc;",
        "&bigcirc;"
    ],
    "⨀": [
        "&xodot;",
        "&bigodot;"
    ],
    "⨁": [
        "&xoplus;",
        "&bigoplus;"
    ],
    "⨂": [
        "&xotime;",
        "&bigotimes;"
    ],
    "⨆": [
        "&xsqcup;",
        "&bigsqcup;"
    ],
    "★": [
        "&starf;",
        "&bigstar;"
    ],
    "▽": [
        "&xdtri;",
        "&bigtriangledown;"
    ],
    "△": [
        "&xutri;",
        "&bigtriangleup;"
    ],
    "⨄": [
        "&xuplus;",
        "&biguplus;"
    ],
    "⤍": [
        "&rbarr;",
        "&bkarow;"
    ],
    "⧫": [
        "&lozf;",
        "&blacklozenge;"
    ],
    "▴": [
        "&utrif;",
        "&blacktriangle;"
    ],
    "▾": [
        "&dtrif;",
        "&blacktriangledown;"
    ],
    "◂": [
        "&ltrif;",
        "&blacktriangleleft;"
    ],
    "▸": [
        "&rtrif;",
        "&blacktriangleright;"
    ],
    "␣": [
        "&blank;"
    ],
    "▒": [
        "&blk12;"
    ],
    "░": [
        "&blk14;"
    ],
    "▓": [
        "&blk34;"
    ],
    "█": [
        "&block;"
    ],
    "=⃥": [
        "&bne;"
    ],
    "≡⃥": [
        "&bnequiv;"
    ],
    "⌐": [
        "&bnot;"
    ],
    "𝕓": [
        "&bopf;"
    ],
    "⋈": [
        "&bowtie;"
    ],
    "╗": [
        "&boxDL;"
    ],
    "╔": [
        "&boxDR;"
    ],
    "╖": [
        "&boxDl;"
    ],
    "╓": [
        "&boxDr;"
    ],
    "═": [
        "&boxH;"
    ],
    "╦": [
        "&boxHD;"
    ],
    "╩": [
        "&boxHU;"
    ],
    "╤": [
        "&boxHd;"
    ],
    "╧": [
        "&boxHu;"
    ],
    "╝": [
        "&boxUL;"
    ],
    "╚": [
        "&boxUR;"
    ],
    "╜": [
        "&boxUl;"
    ],
    "╙": [
        "&boxUr;"
    ],
    "║": [
        "&boxV;"
    ],
    "╬": [
        "&boxVH;"
    ],
    "╣": [
        "&boxVL;"
    ],
    "╠": [
        "&boxVR;"
    ],
    "╫": [
        "&boxVh;"
    ],
    "╢": [
        "&boxVl;"
    ],
    "╟": [
        "&boxVr;"
    ],
    "⧉": [
        "&boxbox;"
    ],
    "╕": [
        "&boxdL;"
    ],
    "╒": [
        "&boxdR;"
    ],
    "┐": [
        "&boxdl;"
    ],
    "┌": [
        "&boxdr;"
    ],
    "╥": [
        "&boxhD;"
    ],
    "╨": [
        "&boxhU;"
    ],
    "┬": [
        "&boxhd;"
    ],
    "┴": [
        "&boxhu;"
    ],
    "⊟": [
        "&minusb;",
        "&boxminus;"
    ],
    "⊞": [
        "&plusb;",
        "&boxplus;"
    ],
    "⊠": [
        "&timesb;",
        "&boxtimes;"
    ],
    "╛": [
        "&boxuL;"
    ],
    "╘": [
        "&boxuR;"
    ],
    "┘": [
        "&boxul;"
    ],
    "└": [
        "&boxur;"
    ],
    "│": [
        "&boxv;"
    ],
    "╪": [
        "&boxvH;"
    ],
    "╡": [
        "&boxvL;"
    ],
    "╞": [
        "&boxvR;"
    ],
    "┼": [
        "&boxvh;"
    ],
    "┤": [
        "&boxvl;"
    ],
    "├": [
        "&boxvr;"
    ],
    "¦": [
        "&brvbar;"
    ],
    "𝒷": [
        "&bscr;"
    ],
    "⁏": [
        "&bsemi;"
    ],
    "\\": [
        "&bsol;"
    ],
    "⧅": [
        "&bsolb;"
    ],
    "⟈": [
        "&bsolhsub;"
    ],
    "•": [
        "&bull;",
        "&bullet;"
    ],
    "⪮": [
        "&bumpE;"
    ],
    "ć": [
        "&cacute;"
    ],
    "∩": [
        "&cap;"
    ],
    "⩄": [
        "&capand;"
    ],
    "⩉": [
        "&capbrcup;"
    ],
    "⩋": [
        "&capcap;"
    ],
    "⩇": [
        "&capcup;"
    ],
    "⩀": [
        "&capdot;"
    ],
    "∩︀": [
        "&caps;"
    ],
    "⁁": [
        "&caret;"
    ],
    "⩍": [
        "&ccaps;"
    ],
    "č": [
        "&ccaron;"
    ],
    "ç": [
        "&ccedil;"
    ],
    "ĉ": [
        "&ccirc;"
    ],
    "⩌": [
        "&ccups;"
    ],
    "⩐": [
        "&ccupssm;"
    ],
    "ċ": [
        "&cdot;"
    ],
    "⦲": [
        "&cemptyv;"
    ],
    "¢": [
        "&cent;"
    ],
    "𝔠": [
        "&cfr;"
    ],
    "ч": [
        "&chcy;"
    ],
    "✓": [
        "&check;",
        "&checkmark;"
    ],
    "χ": [
        "&chi;"
    ],
    "○": [
        "&cir;"
    ],
    "⧃": [
        "&cirE;"
    ],
    "ˆ": [
        "&circ;"
    ],
    "≗": [
        "&cire;",
        "&circeq;"
    ],
    "↺": [
        "&olarr;",
        "&circlearrowleft;"
    ],
    "↻": [
        "&orarr;",
        "&circlearrowright;"
    ],
    "Ⓢ": [
        "&oS;",
        "&circledS;"
    ],
    "⊛": [
        "&oast;",
        "&circledast;"
    ],
    "⊚": [
        "&ocir;",
        "&circledcirc;"
    ],
    "⊝": [
        "&odash;",
        "&circleddash;"
    ],
    "⨐": [
        "&cirfnint;"
    ],
    "⫯": [
        "&cirmid;"
    ],
    "⧂": [
        "&cirscir;"
    ],
    "♣": [
        "&clubs;",
        "&clubsuit;"
    ],
    ":": [
        "&colon;"
    ],
    ",": [
        "&comma;"
    ],
    "@": [
        "&commat;"
    ],
    "∁": [
        "&comp;",
        "&complement;"
    ],
    "⩭": [
        "&congdot;"
    ],
    "𝕔": [
        "&copf;"
    ],
    "℗": [
        "&copysr;"
    ],
    "↵": [
        "&crarr;"
    ],
    "✗": [
        "&cross;"
    ],
    "𝒸": [
        "&cscr;"
    ],
    "⫏": [
        "&csub;"
    ],
    "⫑": [
        "&csube;"
    ],
    "⫐": [
        "&csup;"
    ],
    "⫒": [
        "&csupe;"
    ],
    "⋯": [
        "&ctdot;"
    ],
    "⤸": [
        "&cudarrl;"
    ],
    "⤵": [
        "&cudarrr;"
    ],
    "⋞": [
        "&cuepr;",
        "&curlyeqprec;"
    ],
    "⋟": [
        "&cuesc;",
        "&curlyeqsucc;"
    ],
    "↶": [
        "&cularr;",
        "&curvearrowleft;"
    ],
    "⤽": [
        "&cularrp;"
    ],
    "∪": [
        "&cup;"
    ],
    "⩈": [
        "&cupbrcap;"
    ],
    "⩆": [
        "&cupcap;"
    ],
    "⩊": [
        "&cupcup;"
    ],
    "⊍": [
        "&cupdot;"
    ],
    "⩅": [
        "&cupor;"
    ],
    "∪︀": [
        "&cups;"
    ],
    "↷": [
        "&curarr;",
        "&curvearrowright;"
    ],
    "⤼": [
        "&curarrm;"
    ],
    "⋎": [
        "&cuvee;",
        "&curlyvee;"
    ],
    "⋏": [
        "&cuwed;",
        "&curlywedge;"
    ],
    "¤": [
        "&curren;"
    ],
    "∱": [
        "&cwint;"
    ],
    "⌭": [
        "&cylcty;"
    ],
    "⥥": [
        "&dHar;"
    ],
    "†": [
        "&dagger;"
    ],
    "ℸ": [
        "&daleth;"
    ],
    "‐": [
        "&dash;",
        "&hyphen;"
    ],
    "⤏": [
        "&rBarr;",
        "&dbkarow;"
    ],
    "ď": [
        "&dcaron;"
    ],
    "д": [
        "&dcy;"
    ],
    "⇊": [
        "&ddarr;",
        "&downdownarrows;"
    ],
    "⩷": [
        "&eDDot;",
        "&ddotseq;"
    ],
    "°": [
        "&deg;"
    ],
    "δ": [
        "&delta;"
    ],
    "⦱": [
        "&demptyv;"
    ],
    "⥿": [
        "&dfisht;"
    ],
    "𝔡": [
        "&dfr;"
    ],
    "♦": [
        "&diams;",
        "&diamondsuit;"
    ],
    "ϝ": [
        "&gammad;",
        "&digamma;"
    ],
    "⋲": [
        "&disin;"
    ],
    "÷": [
        "&div;",
        "&divide;"
    ],
    "⋇": [
        "&divonx;",
        "&divideontimes;"
    ],
    "ђ": [
        "&djcy;"
    ],
    "⌞": [
        "&dlcorn;",
        "&llcorner;"
    ],
    "⌍": [
        "&dlcrop;"
    ],
    "$": [
        "&dollar;"
    ],
    "𝕕": [
        "&dopf;"
    ],
    "≑": [
        "&eDot;",
        "&doteqdot;"
    ],
    "∸": [
        "&minusd;",
        "&dotminus;"
    ],
    "∔": [
        "&plusdo;",
        "&dotplus;"
    ],
    "⊡": [
        "&sdotb;",
        "&dotsquare;"
    ],
    "⌟": [
        "&drcorn;",
        "&lrcorner;"
    ],
    "⌌": [
        "&drcrop;"
    ],
    "𝒹": [
        "&dscr;"
    ],
    "ѕ": [
        "&dscy;"
    ],
    "⧶": [
        "&dsol;"
    ],
    "đ": [
        "&dstrok;"
    ],
    "⋱": [
        "&dtdot;"
    ],
    "▿": [
        "&dtri;",
        "&triangledown;"
    ],
    "⦦": [
        "&dwangle;"
    ],
    "џ": [
        "&dzcy;"
    ],
    "⟿": [
        "&dzigrarr;"
    ],
    "é": [
        "&eacute;"
    ],
    "⩮": [
        "&easter;"
    ],
    "ě": [
        "&ecaron;"
    ],
    "≖": [
        "&ecir;",
        "&eqcirc;"
    ],
    "ê": [
        "&ecirc;"
    ],
    "≕": [
        "&ecolon;",
        "&eqcolon;"
    ],
    "э": [
        "&ecy;"
    ],
    "ė": [
        "&edot;"
    ],
    "≒": [
        "&efDot;",
        "&fallingdotseq;"
    ],
    "𝔢": [
        "&efr;"
    ],
    "⪚": [
        "&eg;"
    ],
    "è": [
        "&egrave;"
    ],
    "⪖": [
        "&egs;",
        "&eqslantgtr;"
    ],
    "⪘": [
        "&egsdot;"
    ],
    "⪙": [
        "&el;"
    ],
    "⏧": [
        "&elinters;"
    ],
    "ℓ": [
        "&ell;"
    ],
    "⪕": [
        "&els;",
        "&eqslantless;"
    ],
    "⪗": [
        "&elsdot;"
    ],
    "ē": [
        "&emacr;"
    ],
    "∅": [
        "&empty;",
        "&emptyv;",
        "&emptyset;",
        "&varnothing;"
    ],
    " ": [
        "&emsp13;"
    ],
    " ": [
        "&emsp14;"
    ],
    " ": [
        "&emsp;"
    ],
    "ŋ": [
        "&eng;"
    ],
    " ": [
        "&ensp;"
    ],
    "ę": [
        "&eogon;"
    ],
    "𝕖": [
        "&eopf;"
    ],
    "⋕": [
        "&epar;"
    ],
    "⧣": [
        "&eparsl;"
    ],
    "⩱": [
        "&eplus;"
    ],
    "ε": [
        "&epsi;",
        "&epsilon;"
    ],
    "ϵ": [
        "&epsiv;",
        "&varepsilon;",
        "&straightepsilon;"
    ],
    "=": [
        "&equals;"
    ],
    "≟": [
        "&equest;",
        "&questeq;"
    ],
    "⩸": [
        "&equivDD;"
    ],
    "⧥": [
        "&eqvparsl;"
    ],
    "≓": [
        "&erDot;",
        "&risingdotseq;"
    ],
    "⥱": [
        "&erarr;"
    ],
    "ℯ": [
        "&escr;"
    ],
    "η": [
        "&eta;"
    ],
    "ð": [
        "&eth;"
    ],
    "ë": [
        "&euml;"
    ],
    "€": [
        "&euro;"
    ],
    "!": [
        "&excl;"
    ],
    "ф": [
        "&fcy;"
    ],
    "♀": [
        "&female;"
    ],
    "ﬃ": [
        "&ffilig;"
    ],
    "ﬀ": [
        "&fflig;"
    ],
    "ﬄ": [
        "&ffllig;"
    ],
    "𝔣": [
        "&ffr;"
    ],
    "ﬁ": [
        "&filig;"
    ],
    "fj": [
        "&fjlig;"
    ],
    "♭": [
        "&flat;"
    ],
    "ﬂ": [
        "&fllig;"
    ],
    "▱": [
        "&fltns;"
    ],
    "ƒ": [
        "&fnof;"
    ],
    "𝕗": [
        "&fopf;"
    ],
    "⋔": [
        "&fork;",
        "&pitchfork;"
    ],
    "⫙": [
        "&forkv;"
    ],
    "⨍": [
        "&fpartint;"
    ],
    "½": [
        "&half;",
        "&frac12;"
    ],
    "⅓": [
        "&frac13;"
    ],
    "¼": [
        "&frac14;"
    ],
    "⅕": [
        "&frac15;"
    ],
    "⅙": [
        "&frac16;"
    ],
    "⅛": [
        "&frac18;"
    ],
    "⅔": [
        "&frac23;"
    ],
    "⅖": [
        "&frac25;"
    ],
    "¾": [
        "&frac34;"
    ],
    "⅗": [
        "&frac35;"
    ],
    "⅜": [
        "&frac38;"
    ],
    "⅘": [
        "&frac45;"
    ],
    "⅚": [
        "&frac56;"
    ],
    "⅝": [
        "&frac58;"
    ],
    "⅞": [
        "&frac78;"
    ],
    "⁄": [
        "&frasl;"
    ],
    "⌢": [
        "&frown;",
        "&sfrown;"
    ],
    "𝒻": [
        "&fscr;"
    ],
    "⪌": [
        "&gEl;",
        "&gtreqqless;"
    ],
    "ǵ": [
        "&gacute;"
    ],
    "γ": [
        "&gamma;"
    ],
    "⪆": [
        "&gap;",
        "&gtrapprox;"
    ],
    "ğ": [
        "&gbreve;"
    ],
    "ĝ": [
        "&gcirc;"
    ],
    "г": [
        "&gcy;"
    ],
    "ġ": [
        "&gdot;"
    ],
    "⪩": [
        "&gescc;"
    ],
    "⪀": [
        "&gesdot;"
    ],
    "⪂": [
        "&gesdoto;"
    ],
    "⪄": [
        "&gesdotol;"
    ],
    "⋛︀": [
        "&gesl;"
    ],
    "⪔": [
        "&gesles;"
    ],
    "𝔤": [
        "&gfr;"
    ],
    "ℷ": [
        "&gimel;"
    ],
    "ѓ": [
        "&gjcy;"
    ],
    "⪒": [
        "&glE;"
    ],
    "⪥": [
        "&gla;"
    ],
    "⪤": [
        "&glj;"
    ],
    "≩": [
        "&gnE;",
        "&gneqq;"
    ],
    "⪊": [
        "&gnap;",
        "&gnapprox;"
    ],
    "⪈": [
        "&gne;",
        "&gneq;"
    ],
    "⋧": [
        "&gnsim;"
    ],
    "𝕘": [
        "&gopf;"
    ],
    "ℊ": [
        "&gscr;"
    ],
    "⪎": [
        "&gsime;"
    ],
    "⪐": [
        "&gsiml;"
    ],
    "⪧": [
        "&gtcc;"
    ],
    "⩺": [
        "&gtcir;"
    ],
    "⋗": [
        "&gtdot;",
        "&gtrdot;"
    ],
    "⦕": [
        "&gtlPar;"
    ],
    "⩼": [
        "&gtquest;"
    ],
    "⥸": [
        "&gtrarr;"
    ],
    "≩︀": [
        "&gvnE;",
        "&gvertneqq;"
    ],
    "ъ": [
        "&hardcy;"
    ],
    "⥈": [
        "&harrcir;"
    ],
    "↭": [
        "&harrw;",
        "&leftrightsquigarrow;"
    ],
    "ℏ": [
        "&hbar;",
        "&hslash;",
        "&planck;",
        "&plankv;"
    ],
    "ĥ": [
        "&hcirc;"
    ],
    "♥": [
        "&hearts;",
        "&heartsuit;"
    ],
    "…": [
        "&mldr;",
        "&hellip;"
    ],
    "⊹": [
        "&hercon;"
    ],
    "𝔥": [
        "&hfr;"
    ],
    "⤥": [
        "&searhk;",
        "&hksearow;"
    ],
    "⤦": [
        "&swarhk;",
        "&hkswarow;"
    ],
    "⇿": [
        "&hoarr;"
    ],
    "∻": [
        "&homtht;"
    ],
    "↩": [
        "&larrhk;",
        "&hookleftarrow;"
    ],
    "↪": [
        "&rarrhk;",
        "&hookrightarrow;"
    ],
    "𝕙": [
        "&hopf;"
    ],
    "―": [
        "&horbar;"
    ],
    "𝒽": [
        "&hscr;"
    ],
    "ħ": [
        "&hstrok;"
    ],
    "⁃": [
        "&hybull;"
    ],
    "í": [
        "&iacute;"
    ],
    "î": [
        "&icirc;"
    ],
    "и": [
        "&icy;"
    ],
    "е": [
        "&iecy;"
    ],
    "¡": [
        "&iexcl;"
    ],
    "𝔦": [
        "&ifr;"
    ],
    "ì": [
        "&igrave;"
    ],
    "⨌": [
        "&qint;",
        "&iiiint;"
    ],
    "∭": [
        "&tint;",
        "&iiint;"
    ],
    "⧜": [
        "&iinfin;"
    ],
    "℩": [
        "&iiota;"
    ],
    "ĳ": [
        "&ijlig;"
    ],
    "ī": [
        "&imacr;"
    ],
    "ı": [
        "&imath;",
        "&inodot;"
    ],
    "⊷": [
        "&imof;"
    ],
    "Ƶ": [
        "&imped;"
    ],
    "℅": [
        "&incare;"
    ],
    "∞": [
        "&infin;"
    ],
    "⧝": [
        "&infintie;"
    ],
    "⊺": [
        "&intcal;",
        "&intercal;"
    ],
    "⨗": [
        "&intlarhk;"
    ],
    "⨼": [
        "&iprod;",
        "&intprod;"
    ],
    "ё": [
        "&iocy;"
    ],
    "į": [
        "&iogon;"
    ],
    "𝕚": [
        "&iopf;"
    ],
    "ι": [
        "&iota;"
    ],
    "¿": [
        "&iquest;"
    ],
    "𝒾": [
        "&iscr;"
    ],
    "⋹": [
        "&isinE;"
    ],
    "⋵": [
        "&isindot;"
    ],
    "⋴": [
        "&isins;"
    ],
    "⋳": [
        "&isinsv;"
    ],
    "ĩ": [
        "&itilde;"
    ],
    "і": [
        "&iukcy;"
    ],
    "ï": [
        "&iuml;"
    ],
    "ĵ": [
        "&jcirc;"
    ],
    "й": [
        "&jcy;"
    ],
    "𝔧": [
        "&jfr;"
    ],
    "ȷ": [
        "&jmath;"
    ],
    "𝕛": [
        "&jopf;"
    ],
    "𝒿": [
        "&jscr;"
    ],
    "ј": [
        "&jsercy;"
    ],
    "є": [
        "&jukcy;"
    ],
    "κ": [
        "&kappa;"
    ],
    "ϰ": [
        "&kappav;",
        "&varkappa;"
    ],
    "ķ": [
        "&kcedil;"
    ],
    "к": [
        "&kcy;"
    ],
    "𝔨": [
        "&kfr;"
    ],
    "ĸ": [
        "&kgreen;"
    ],
    "х": [
        "&khcy;"
    ],
    "ќ": [
        "&kjcy;"
    ],
    "𝕜": [
        "&kopf;"
    ],
    "𝓀": [
        "&kscr;"
    ],
    "⤛": [
        "&lAtail;"
    ],
    "⤎": [
        "&lBarr;"
    ],
    "⪋": [
        "&lEg;",
        "&lesseqqgtr;"
    ],
    "⥢": [
        "&lHar;"
    ],
    "ĺ": [
        "&lacute;"
    ],
    "⦴": [
        "&laemptyv;"
    ],
    "λ": [
        "&lambda;"
    ],
    "⦑": [
        "&langd;"
    ],
    "⪅": [
        "&lap;",
        "&lessapprox;"
    ],
    "«": [
        "&laquo;"
    ],
    "⤟": [
        "&larrbfs;"
    ],
    "⤝": [
        "&larrfs;"
    ],
    "↫": [
        "&larrlp;",
        "&looparrowleft;"
    ],
    "⤹": [
        "&larrpl;"
    ],
    "⥳": [
        "&larrsim;"
    ],
    "↢": [
        "&larrtl;",
        "&leftarrowtail;"
    ],
    "⪫": [
        "&lat;"
    ],
    "⤙": [
        "&latail;"
    ],
    "⪭": [
        "&late;"
    ],
    "⪭︀": [
        "&lates;"
    ],
    "⤌": [
        "&lbarr;"
    ],
    "❲": [
        "&lbbrk;"
    ],
    "{": [
        "&lcub;",
        "&lbrace;"
    ],
    "[": [
        "&lsqb;",
        "&lbrack;"
    ],
    "⦋": [
        "&lbrke;"
    ],
    "⦏": [
        "&lbrksld;"
    ],
    "⦍": [
        "&lbrkslu;"
    ],
    "ľ": [
        "&lcaron;"
    ],
    "ļ": [
        "&lcedil;"
    ],
    "л": [
        "&lcy;"
    ],
    "⤶": [
        "&ldca;"
    ],
    "⥧": [
        "&ldrdhar;"
    ],
    "⥋": [
        "&ldrushar;"
    ],
    "↲": [
        "&ldsh;"
    ],
    "≤": [
        "&le;",
        "&leq;"
    ],
    "⇇": [
        "&llarr;",
        "&leftleftarrows;"
    ],
    "⋋": [
        "&lthree;",
        "&leftthreetimes;"
    ],
    "⪨": [
        "&lescc;"
    ],
    "⩿": [
        "&lesdot;"
    ],
    "⪁": [
        "&lesdoto;"
    ],
    "⪃": [
        "&lesdotor;"
    ],
    "⋚︀": [
        "&lesg;"
    ],
    "⪓": [
        "&lesges;"
    ],
    "⋖": [
        "&ltdot;",
        "&lessdot;"
    ],
    "⥼": [
        "&lfisht;"
    ],
    "𝔩": [
        "&lfr;"
    ],
    "⪑": [
        "&lgE;"
    ],
    "⥪": [
        "&lharul;"
    ],
    "▄": [
        "&lhblk;"
    ],
    "љ": [
        "&ljcy;"
    ],
    "⥫": [
        "&llhard;"
    ],
    "◺": [
        "&lltri;"
    ],
    "ŀ": [
        "&lmidot;"
    ],
    "⎰": [
        "&lmoust;",
        "&lmoustache;"
    ],
    "≨": [
        "&lnE;",
        "&lneqq;"
    ],
    "⪉": [
        "&lnap;",
        "&lnapprox;"
    ],
    "⪇": [
        "&lne;",
        "&lneq;"
    ],
    "⋦": [
        "&lnsim;"
    ],
    "⟬": [
        "&loang;"
    ],
    "⇽": [
        "&loarr;"
    ],
    "⟼": [
        "&xmap;",
        "&longmapsto;"
    ],
    "↬": [
        "&rarrlp;",
        "&looparrowright;"
    ],
    "⦅": [
        "&lopar;"
    ],
    "𝕝": [
        "&lopf;"
    ],
    "⨭": [
        "&loplus;"
    ],
    "⨴": [
        "&lotimes;"
    ],
    "∗": [
        "&lowast;"
    ],
    "◊": [
        "&loz;",
        "&lozenge;"
    ],
    "(": [
        "&lpar;"
    ],
    "⦓": [
        "&lparlt;"
    ],
    "⥭": [
        "&lrhard;"
    ],
    "‎": [
        "&lrm;"
    ],
    "⊿": [
        "&lrtri;"
    ],
    "‹": [
        "&lsaquo;"
    ],
    "𝓁": [
        "&lscr;"
    ],
    "⪍": [
        "&lsime;"
    ],
    "⪏": [
        "&lsimg;"
    ],
    "‚": [
        "&sbquo;",
        "&lsquor;"
    ],
    "ł": [
        "&lstrok;"
    ],
    "⪦": [
        "&ltcc;"
    ],
    "⩹": [
        "&ltcir;"
    ],
    "⋉": [
        "&ltimes;"
    ],
    "⥶": [
        "&ltlarr;"
    ],
    "⩻": [
        "&ltquest;"
    ],
    "⦖": [
        "&ltrPar;"
    ],
    "◃": [
        "&ltri;",
        "&triangleleft;"
    ],
    "⥊": [
        "&lurdshar;"
    ],
    "⥦": [
        "&luruhar;"
    ],
    "≨︀": [
        "&lvnE;",
        "&lvertneqq;"
    ],
    "∺": [
        "&mDDot;"
    ],
    "¯": [
        "&macr;",
        "&strns;"
    ],
    "♂": [
        "&male;"
    ],
    "✠": [
        "&malt;",
        "&maltese;"
    ],
    "▮": [
        "&marker;"
    ],
    "⨩": [
        "&mcomma;"
    ],
    "м": [
        "&mcy;"
    ],
    "—": [
        "&mdash;"
    ],
    "𝔪": [
        "&mfr;"
    ],
    "℧": [
        "&mho;"
    ],
    "µ": [
        "&micro;"
    ],
    "⫰": [
        "&midcir;"
    ],
    "−": [
        "&minus;"
    ],
    "⨪": [
        "&minusdu;"
    ],
    "⫛": [
        "&mlcp;"
    ],
    "⊧": [
        "&models;"
    ],
    "𝕞": [
        "&mopf;"
    ],
    "𝓂": [
        "&mscr;"
    ],
    "μ": [
        "&mu;"
    ],
    "⊸": [
        "&mumap;",
        "&multimap;"
    ],
    "⋙̸": [
        "&nGg;"
    ],
    "≫⃒": [
        "&nGt;"
    ],
    "⇍": [
        "&nlArr;",
        "&nLeftarrow;"
    ],
    "⇎": [
        "&nhArr;",
        "&nLeftrightarrow;"
    ],
    "⋘̸": [
        "&nLl;"
    ],
    "≪⃒": [
        "&nLt;"
    ],
    "⇏": [
        "&nrArr;",
        "&nRightarrow;"
    ],
    "⊯": [
        "&nVDash;"
    ],
    "⊮": [
        "&nVdash;"
    ],
    "ń": [
        "&nacute;"
    ],
    "∠⃒": [
        "&nang;"
    ],
    "⩰̸": [
        "&napE;"
    ],
    "≋̸": [
        "&napid;"
    ],
    "ŉ": [
        "&napos;"
    ],
    "♮": [
        "&natur;",
        "&natural;"
    ],
    "⩃": [
        "&ncap;"
    ],
    "ň": [
        "&ncaron;"
    ],
    "ņ": [
        "&ncedil;"
    ],
    "⩭̸": [
        "&ncongdot;"
    ],
    "⩂": [
        "&ncup;"
    ],
    "н": [
        "&ncy;"
    ],
    "–": [
        "&ndash;"
    ],
    "⇗": [
        "&neArr;"
    ],
    "⤤": [
        "&nearhk;"
    ],
    "≐̸": [
        "&nedot;"
    ],
    "⤨": [
        "&toea;",
        "&nesear;"
    ],
    "𝔫": [
        "&nfr;"
    ],
    "↮": [
        "&nharr;",
        "&nleftrightarrow;"
    ],
    "⫲": [
        "&nhpar;"
    ],
    "⋼": [
        "&nis;"
    ],
    "⋺": [
        "&nisd;"
    ],
    "њ": [
        "&njcy;"
    ],
    "≦̸": [
        "&nlE;",
        "&nleqq;"
    ],
    "↚": [
        "&nlarr;",
        "&nleftarrow;"
    ],
    "‥": [
        "&nldr;"
    ],
    "𝕟": [
        "&nopf;"
    ],
    "¬": [
        "&not;"
    ],
    "⋹̸": [
        "&notinE;"
    ],
    "⋵̸": [
        "&notindot;"
    ],
    "⋷": [
        "&notinvb;"
    ],
    "⋶": [
        "&notinvc;"
    ],
    "⋾": [
        "&notnivb;"
    ],
    "⋽": [
        "&notnivc;"
    ],
    "⫽⃥": [
        "&nparsl;"
    ],
    "∂̸": [
        "&npart;"
    ],
    "⨔": [
        "&npolint;"
    ],
    "↛": [
        "&nrarr;",
        "&nrightarrow;"
    ],
    "⤳̸": [
        "&nrarrc;"
    ],
    "↝̸": [
        "&nrarrw;"
    ],
    "𝓃": [
        "&nscr;"
    ],
    "⊄": [
        "&nsub;"
    ],
    "⫅̸": [
        "&nsubE;",
        "&nsubseteqq;"
    ],
    "⊅": [
        "&nsup;"
    ],
    "⫆̸": [
        "&nsupE;",
        "&nsupseteqq;"
    ],
    "ñ": [
        "&ntilde;"
    ],
    "ν": [
        "&nu;"
    ],
    "#": [
        "&num;"
    ],
    "№": [
        "&numero;"
    ],
    " ": [
        "&numsp;"
    ],
    "⊭": [
        "&nvDash;"
    ],
    "⤄": [
        "&nvHarr;"
    ],
    "≍⃒": [
        "&nvap;"
    ],
    "⊬": [
        "&nvdash;"
    ],
    "≥⃒": [
        "&nvge;"
    ],
    ">⃒": [
        "&nvgt;"
    ],
    "⧞": [
        "&nvinfin;"
    ],
    "⤂": [
        "&nvlArr;"
    ],
    "≤⃒": [
        "&nvle;"
    ],
    "<⃒": [
        "&nvlt;"
    ],
    "⊴⃒": [
        "&nvltrie;"
    ],
    "⤃": [
        "&nvrArr;"
    ],
    "⊵⃒": [
        "&nvrtrie;"
    ],
    "∼⃒": [
        "&nvsim;"
    ],
    "⇖": [
        "&nwArr;"
    ],
    "⤣": [
        "&nwarhk;"
    ],
    "⤧": [
        "&nwnear;"
    ],
    "ó": [
        "&oacute;"
    ],
    "ô": [
        "&ocirc;"
    ],
    "о": [
        "&ocy;"
    ],
    "ő": [
        "&odblac;"
    ],
    "⨸": [
        "&odiv;"
    ],
    "⦼": [
        "&odsold;"
    ],
    "œ": [
        "&oelig;"
    ],
    "⦿": [
        "&ofcir;"
    ],
    "𝔬": [
        "&ofr;"
    ],
    "˛": [
        "&ogon;"
    ],
    "ò": [
        "&ograve;"
    ],
    "⧁": [
        "&ogt;"
    ],
    "⦵": [
        "&ohbar;"
    ],
    "⦾": [
        "&olcir;"
    ],
    "⦻": [
        "&olcross;"
    ],
    "⧀": [
        "&olt;"
    ],
    "ō": [
        "&omacr;"
    ],
    "ω": [
        "&omega;"
    ],
    "ο": [
        "&omicron;"
    ],
    "⦶": [
        "&omid;"
    ],
    "𝕠": [
        "&oopf;"
    ],
    "⦷": [
        "&opar;"
    ],
    "⦹": [
        "&operp;"
    ],
    "∨": [
        "&or;",
        "&vee;"
    ],
    "⩝": [
        "&ord;"
    ],
    "ℴ": [
        "&oscr;",
        "&order;",
        "&orderof;"
    ],
    "ª": [
        "&ordf;"
    ],
    "º": [
        "&ordm;"
    ],
    "⊶": [
        "&origof;"
    ],
    "⩖": [
        "&oror;"
    ],
    "⩗": [
        "&orslope;"
    ],
    "⩛": [
        "&orv;"
    ],
    "ø": [
        "&oslash;"
    ],
    "⊘": [
        "&osol;"
    ],
    "õ": [
        "&otilde;"
    ],
    "⨶": [
        "&otimesas;"
    ],
    "ö": [
        "&ouml;"
    ],
    "⌽": [
        "&ovbar;"
    ],
    "¶": [
        "&para;"
    ],
    "⫳": [
        "&parsim;"
    ],
    "⫽": [
        "&parsl;"
    ],
    "п": [
        "&pcy;"
    ],
    "%": [
        "&percnt;"
    ],
    ".": [
        "&period;"
    ],
    "‰": [
        "&permil;"
    ],
    "‱": [
        "&pertenk;"
    ],
    "𝔭": [
        "&pfr;"
    ],
    "φ": [
        "&phi;"
    ],
    "ϕ": [
        "&phiv;",
        "&varphi;",
        "&straightphi;"
    ],
    "☎": [
        "&phone;"
    ],
    "π": [
        "&pi;"
    ],
    "ϖ": [
        "&piv;",
        "&varpi;"
    ],
    "ℎ": [
        "&planckh;"
    ],
    "+": [
        "&plus;"
    ],
    "⨣": [
        "&plusacir;"
    ],
    "⨢": [
        "&pluscir;"
    ],
    "⨥": [
        "&plusdu;"
    ],
    "⩲": [
        "&pluse;"
    ],
    "⨦": [
        "&plussim;"
    ],
    "⨧": [
        "&plustwo;"
    ],
    "⨕": [
        "&pointint;"
    ],
    "𝕡": [
        "&popf;"
    ],
    "£": [
        "&pound;"
    ],
    "⪳": [
        "&prE;"
    ],
    "⪷": [
        "&prap;",
        "&precapprox;"
    ],
    "⪹": [
        "&prnap;",
        "&precnapprox;"
    ],
    "⪵": [
        "&prnE;",
        "&precneqq;"
    ],
    "⋨": [
        "&prnsim;",
        "&precnsim;"
    ],
    "′": [
        "&prime;"
    ],
    "⌮": [
        "&profalar;"
    ],
    "⌒": [
        "&profline;"
    ],
    "⌓": [
        "&profsurf;"
    ],
    "⊰": [
        "&prurel;"
    ],
    "𝓅": [
        "&pscr;"
    ],
    "ψ": [
        "&psi;"
    ],
    " ": [
        "&puncsp;"
    ],
    "𝔮": [
        "&qfr;"
    ],
    "𝕢": [
        "&qopf;"
    ],
    "⁗": [
        "&qprime;"
    ],
    "𝓆": [
        "&qscr;"
    ],
    "⨖": [
        "&quatint;"
    ],
    "?": [
        "&quest;"
    ],
    "⤜": [
        "&rAtail;"
    ],
    "⥤": [
        "&rHar;"
    ],
    "∽̱": [
        "&race;"
    ],
    "ŕ": [
        "&racute;"
    ],
    "⦳": [
        "&raemptyv;"
    ],
    "⦒": [
        "&rangd;"
    ],
    "⦥": [
        "&range;"
    ],
    "»": [
        "&raquo;"
    ],
    "⥵": [
        "&rarrap;"
    ],
    "⤠": [
        "&rarrbfs;"
    ],
    "⤳": [
        "&rarrc;"
    ],
    "⤞": [
        "&rarrfs;"
    ],
    "⥅": [
        "&rarrpl;"
    ],
    "⥴": [
        "&rarrsim;"
    ],
    "↣": [
        "&rarrtl;",
        "&rightarrowtail;"
    ],
    "↝": [
        "&rarrw;",
        "&rightsquigarrow;"
    ],
    "⤚": [
        "&ratail;"
    ],
    "∶": [
        "&ratio;"
    ],
    "❳": [
        "&rbbrk;"
    ],
    "}": [
        "&rcub;",
        "&rbrace;"
    ],
    "]": [
        "&rsqb;",
        "&rbrack;"
    ],
    "⦌": [
        "&rbrke;"
    ],
    "⦎": [
        "&rbrksld;"
    ],
    "⦐": [
        "&rbrkslu;"
    ],
    "ř": [
        "&rcaron;"
    ],
    "ŗ": [
        "&rcedil;"
    ],
    "р": [
        "&rcy;"
    ],
    "⤷": [
        "&rdca;"
    ],
    "⥩": [
        "&rdldhar;"
    ],
    "↳": [
        "&rdsh;"
    ],
    "▭": [
        "&rect;"
    ],
    "⥽": [
        "&rfisht;"
    ],
    "𝔯": [
        "&rfr;"
    ],
    "⥬": [
        "&rharul;"
    ],
    "ρ": [
        "&rho;"
    ],
    "ϱ": [
        "&rhov;",
        "&varrho;"
    ],
    "⇉": [
        "&rrarr;",
        "&rightrightarrows;"
    ],
    "⋌": [
        "&rthree;",
        "&rightthreetimes;"
    ],
    "˚": [
        "&ring;"
    ],
    "‏": [
        "&rlm;"
    ],
    "⎱": [
        "&rmoust;",
        "&rmoustache;"
    ],
    "⫮": [
        "&rnmid;"
    ],
    "⟭": [
        "&roang;"
    ],
    "⇾": [
        "&roarr;"
    ],
    "⦆": [
        "&ropar;"
    ],
    "𝕣": [
        "&ropf;"
    ],
    "⨮": [
        "&roplus;"
    ],
    "⨵": [
        "&rotimes;"
    ],
    ")": [
        "&rpar;"
    ],
    "⦔": [
        "&rpargt;"
    ],
    "⨒": [
        "&rppolint;"
    ],
    "›": [
        "&rsaquo;"
    ],
    "𝓇": [
        "&rscr;"
    ],
    "⋊": [
        "&rtimes;"
    ],
    "▹": [
        "&rtri;",
        "&triangleright;"
    ],
    "⧎": [
        "&rtriltri;"
    ],
    "⥨": [
        "&ruluhar;"
    ],
    "℞": [
        "&rx;"
    ],
    "ś": [
        "&sacute;"
    ],
    "⪴": [
        "&scE;"
    ],
    "⪸": [
        "&scap;",
        "&succapprox;"
    ],
    "š": [
        "&scaron;"
    ],
    "ş": [
        "&scedil;"
    ],
    "ŝ": [
        "&scirc;"
    ],
    "⪶": [
        "&scnE;",
        "&succneqq;"
    ],
    "⪺": [
        "&scnap;",
        "&succnapprox;"
    ],
    "⋩": [
        "&scnsim;",
        "&succnsim;"
    ],
    "⨓": [
        "&scpolint;"
    ],
    "с": [
        "&scy;"
    ],
    "⋅": [
        "&sdot;"
    ],
    "⩦": [
        "&sdote;"
    ],
    "⇘": [
        "&seArr;"
    ],
    "§": [
        "&sect;"
    ],
    ";": [
        "&semi;"
    ],
    "⤩": [
        "&tosa;",
        "&seswar;"
    ],
    "✶": [
        "&sext;"
    ],
    "𝔰": [
        "&sfr;"
    ],
    "♯": [
        "&sharp;"
    ],
    "щ": [
        "&shchcy;"
    ],
    "ш": [
        "&shcy;"
    ],
    "­": [
        "&shy;"
    ],
    "σ": [
        "&sigma;"
    ],
    "ς": [
        "&sigmaf;",
        "&sigmav;",
        "&varsigma;"
    ],
    "⩪": [
        "&simdot;"
    ],
    "⪞": [
        "&simg;"
    ],
    "⪠": [
        "&simgE;"
    ],
    "⪝": [
        "&siml;"
    ],
    "⪟": [
        "&simlE;"
    ],
    "≆": [
        "&simne;"
    ],
    "⨤": [
        "&simplus;"
    ],
    "⥲": [
        "&simrarr;"
    ],
    "⨳": [
        "&smashp;"
    ],
    "⧤": [
        "&smeparsl;"
    ],
    "⌣": [
        "&smile;",
        "&ssmile;"
    ],
    "⪪": [
        "&smt;"
    ],
    "⪬": [
        "&smte;"
    ],
    "⪬︀": [
        "&smtes;"
    ],
    "ь": [
        "&softcy;"
    ],
    "/": [
        "&sol;"
    ],
    "⧄": [
        "&solb;"
    ],
    "⌿": [
        "&solbar;"
    ],
    "𝕤": [
        "&sopf;"
    ],
    "♠": [
        "&spades;",
        "&spadesuit;"
    ],
    "⊓︀": [
        "&sqcaps;"
    ],
    "⊔︀": [
        "&sqcups;"
    ],
    "𝓈": [
        "&sscr;"
    ],
    "☆": [
        "&star;"
    ],
    "⊂": [
        "&sub;",
        "&subset;"
    ],
    "⫅": [
        "&subE;",
        "&subseteqq;"
    ],
    "⪽": [
        "&subdot;"
    ],
    "⫃": [
        "&subedot;"
    ],
    "⫁": [
        "&submult;"
    ],
    "⫋": [
        "&subnE;",
        "&subsetneqq;"
    ],
    "⊊": [
        "&subne;",
        "&subsetneq;"
    ],
    "⪿": [
        "&subplus;"
    ],
    "⥹": [
        "&subrarr;"
    ],
    "⫇": [
        "&subsim;"
    ],
    "⫕": [
        "&subsub;"
    ],
    "⫓": [
        "&subsup;"
    ],
    "♪": [
        "&sung;"
    ],
    "¹": [
        "&sup1;"
    ],
    "²": [
        "&sup2;"
    ],
    "³": [
        "&sup3;"
    ],
    "⫆": [
        "&supE;",
        "&supseteqq;"
    ],
    "⪾": [
        "&supdot;"
    ],
    "⫘": [
        "&supdsub;"
    ],
    "⫄": [
        "&supedot;"
    ],
    "⟉": [
        "&suphsol;"
    ],
    "⫗": [
        "&suphsub;"
    ],
    "⥻": [
        "&suplarr;"
    ],
    "⫂": [
        "&supmult;"
    ],
    "⫌": [
        "&supnE;",
        "&supsetneqq;"
    ],
    "⊋": [
        "&supne;",
        "&supsetneq;"
    ],
    "⫀": [
        "&supplus;"
    ],
    "⫈": [
        "&supsim;"
    ],
    "⫔": [
        "&supsub;"
    ],
    "⫖": [
        "&supsup;"
    ],
    "⇙": [
        "&swArr;"
    ],
    "⤪": [
        "&swnwar;"
    ],
    "ß": [
        "&szlig;"
    ],
    "⌖": [
        "&target;"
    ],
    "τ": [
        "&tau;"
    ],
    "ť": [
        "&tcaron;"
    ],
    "ţ": [
        "&tcedil;"
    ],
    "т": [
        "&tcy;"
    ],
    "⌕": [
        "&telrec;"
    ],
    "𝔱": [
        "&tfr;"
    ],
    "θ": [
        "&theta;"
    ],
    "ϑ": [
        "&thetav;",
        "&thetasym;",
        "&vartheta;"
    ],
    "þ": [
        "&thorn;"
    ],
    "×": [
        "&times;"
    ],
    "⨱": [
        "&timesbar;"
    ],
    "⨰": [
        "&timesd;"
    ],
    "⌶": [
        "&topbot;"
    ],
    "⫱": [
        "&topcir;"
    ],
    "𝕥": [
        "&topf;"
    ],
    "⫚": [
        "&topfork;"
    ],
    "‴": [
        "&tprime;"
    ],
    "▵": [
        "&utri;",
        "&triangle;"
    ],
    "≜": [
        "&trie;",
        "&triangleq;"
    ],
    "◬": [
        "&tridot;"
    ],
    "⨺": [
        "&triminus;"
    ],
    "⨹": [
        "&triplus;"
    ],
    "⧍": [
        "&trisb;"
    ],
    "⨻": [
        "&tritime;"
    ],
    "⏢": [
        "&trpezium;"
    ],
    "𝓉": [
        "&tscr;"
    ],
    "ц": [
        "&tscy;"
    ],
    "ћ": [
        "&tshcy;"
    ],
    "ŧ": [
        "&tstrok;"
    ],
    "⥣": [
        "&uHar;"
    ],
    "ú": [
        "&uacute;"
    ],
    "ў": [
        "&ubrcy;"
    ],
    "ŭ": [
        "&ubreve;"
    ],
    "û": [
        "&ucirc;"
    ],
    "у": [
        "&ucy;"
    ],
    "ű": [
        "&udblac;"
    ],
    "⥾": [
        "&ufisht;"
    ],
    "𝔲": [
        "&ufr;"
    ],
    "ù": [
        "&ugrave;"
    ],
    "▀": [
        "&uhblk;"
    ],
    "⌜": [
        "&ulcorn;",
        "&ulcorner;"
    ],
    "⌏": [
        "&ulcrop;"
    ],
    "◸": [
        "&ultri;"
    ],
    "ū": [
        "&umacr;"
    ],
    "ų": [
        "&uogon;"
    ],
    "𝕦": [
        "&uopf;"
    ],
    "υ": [
        "&upsi;",
        "&upsilon;"
    ],
    "⇈": [
        "&uuarr;",
        "&upuparrows;"
    ],
    "⌝": [
        "&urcorn;",
        "&urcorner;"
    ],
    "⌎": [
        "&urcrop;"
    ],
    "ů": [
        "&uring;"
    ],
    "◹": [
        "&urtri;"
    ],
    "𝓊": [
        "&uscr;"
    ],
    "⋰": [
        "&utdot;"
    ],
    "ũ": [
        "&utilde;"
    ],
    "ü": [
        "&uuml;"
    ],
    "⦧": [
        "&uwangle;"
    ],
    "⫨": [
        "&vBar;"
    ],
    "⫩": [
        "&vBarv;"
    ],
    "⦜": [
        "&vangrt;"
    ],
    "⊊︀": [
        "&vsubne;",
        "&varsubsetneq;"
    ],
    "⫋︀": [
        "&vsubnE;",
        "&varsubsetneqq;"
    ],
    "⊋︀": [
        "&vsupne;",
        "&varsupsetneq;"
    ],
    "⫌︀": [
        "&vsupnE;",
        "&varsupsetneqq;"
    ],
    "в": [
        "&vcy;"
    ],
    "⊻": [
        "&veebar;"
    ],
    "≚": [
        "&veeeq;"
    ],
    "⋮": [
        "&vellip;"
    ],
    "𝔳": [
        "&vfr;"
    ],
    "𝕧": [
        "&vopf;"
    ],
    "𝓋": [
        "&vscr;"
    ],
    "⦚": [
        "&vzigzag;"
    ],
    "ŵ": [
        "&wcirc;"
    ],
    "⩟": [
        "&wedbar;"
    ],
    "≙": [
        "&wedgeq;"
    ],
    "℘": [
        "&wp;",
        "&weierp;"
    ],
    "𝔴": [
        "&wfr;"
    ],
    "𝕨": [
        "&wopf;"
    ],
    "𝓌": [
        "&wscr;"
    ],
    "𝔵": [
        "&xfr;"
    ],
    "ξ": [
        "&xi;"
    ],
    "⋻": [
        "&xnis;"
    ],
    "𝕩": [
        "&xopf;"
    ],
    "𝓍": [
        "&xscr;"
    ],
    "ý": [
        "&yacute;"
    ],
    "я": [
        "&yacy;"
    ],
    "ŷ": [
        "&ycirc;"
    ],
    "ы": [
        "&ycy;"
    ],
    "¥": [
        "&yen;"
    ],
    "𝔶": [
        "&yfr;"
    ],
    "ї": [
        "&yicy;"
    ],
    "𝕪": [
        "&yopf;"
    ],
    "𝓎": [
        "&yscr;"
    ],
    "ю": [
        "&yucy;"
    ],
    "ÿ": [
        "&yuml;"
    ],
    "ź": [
        "&zacute;"
    ],
    "ž": [
        "&zcaron;"
    ],
    "з": [
        "&zcy;"
    ],
    "ż": [
        "&zdot;"
    ],
    "ζ": [
        "&zeta;"
    ],
    "𝔷": [
        "&zfr;"
    ],
    "ж": [
        "&zhcy;"
    ],
    "⇝": [
        "&zigrarr;"
    ],
    "𝕫": [
        "&zopf;"
    ],
    "𝓏": [
        "&zscr;"
    ],
    "‍": [
        "&zwj;"
    ],
    "‌": [
        "&zwnj;"
    ]
};