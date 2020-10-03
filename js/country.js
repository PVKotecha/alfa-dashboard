var countrypicker = function(a) {
    "use strict";
    a = a && a.hasOwnProperty("default") ? a.default : a;
    var S = [
            ["AF", "AFG", "004", "ISO 3166-2:AF"],
            ["AX", "ALA", "248", "ISO 3166-2:AX"],
            ["AL", "ALB", "008", "ISO 3166-2:AL"],
            ["DZ", "DZA", "012", "ISO 3166-2:DZ"],
            ["AS", "ASM", "016", "ISO 3166-2:AS"],
            ["AD", "AND", "020", "ISO 3166-2:AD"],
            ["AO", "AGO", "024", "ISO 3166-2:AO"],
            ["AI", "AIA", "660", "ISO 3166-2:AI"],
            ["AQ", "ATA", "010", "ISO 3166-2:AQ"],
            ["AG", "ATG", "028", "ISO 3166-2:AG"],
            ["AR", "ARG", "032", "ISO 3166-2:AR"],
            ["AM", "ARM", "051", "ISO 3166-2:AM"],
            ["AW", "ABW", "533", "ISO 3166-2:AW"],
            ["AU", "AUS", "036", "ISO 3166-2:AU"],
            ["AT", "AUT", "040", "ISO 3166-2:AT"],
            ["AZ", "AZE", "031", "ISO 3166-2:AZ"],
            ["BS", "BHS", "044", "ISO 3166-2:BS"],
            ["BH", "BHR", "048", "ISO 3166-2:BH"],
            ["BD", "BGD", "050", "ISO 3166-2:BD"],
            ["BB", "BRB", "052", "ISO 3166-2:BB"],
            ["BY", "BLR", "112", "ISO 3166-2:BY"],
            ["BE", "BEL", "056", "ISO 3166-2:BE"],
            ["BZ", "BLZ", "084", "ISO 3166-2:BZ"],
            ["BJ", "BEN", "204", "ISO 3166-2:BJ"],
            ["BM", "BMU", "060", "ISO 3166-2:BM"],
            ["BT", "BTN", "064", "ISO 3166-2:BT"],
            ["BO", "BOL", "068", "ISO 3166-2:BO"],
            ["BQ", "BES", "535", "ISO 3166-2:BQ"],
            ["BA", "BIH", "070", "ISO 3166-2:BA"],
            ["BW", "BWA", "072", "ISO 3166-2:BW"],
            ["BV", "BVT", "074", "ISO 3166-2:BV"],
            ["BR", "BRA", "076", "ISO 3166-2:BR"],
            ["IO", "IOT", "086", "ISO 3166-2:IO"],
            ["BN", "BRN", "096", "ISO 3166-2:BN"],
            ["BG", "BGR", "100", "ISO 3166-2:BG"],
            ["BF", "BFA", "854", "ISO 3166-2:BF"],
            ["BI", "BDI", "108", "ISO 3166-2:BI"],
            ["KH", "KHM", "116", "ISO 3166-2:KH"],
            ["CM", "CMR", "120", "ISO 3166-2:CM"],
            ["CA", "CAN", "124", "ISO 3166-2:CA"],
            ["CV", "CPV", "132", "ISO 3166-2:CV"],
            ["KY", "CYM", "136", "ISO 3166-2:KY"],
            ["CF", "CAF", "140", "ISO 3166-2:CF"],
            ["TD", "TCD", "148", "ISO 3166-2:TD"],
            ["CL", "CHL", "152", "ISO 3166-2:CL"],
            ["CN", "CHN", "156", "ISO 3166-2:CN"],
            ["CX", "CXR", "162", "ISO 3166-2:CX"],
            ["CC", "CCK", "166", "ISO 3166-2:CC"],
            ["CO", "COL", "170", "ISO 3166-2:CO"],
            ["KM", "COM", "174", "ISO 3166-2:KM"],
            ["CG", "COG", "178", "ISO 3166-2:CG"],
            ["CD", "COD", "180", "ISO 3166-2:CD"],
            ["CK", "COK", "184", "ISO 3166-2:CK"],
            ["CR", "CRI", "188", "ISO 3166-2:CR"],
            ["CI", "CIV", "384", "ISO 3166-2:CI"],
            ["HR", "HRV", "191", "ISO 3166-2:HR"],
            ["CU", "CUB", "192", "ISO 3166-2:CU"],
            ["CW", "CUW", "531", "ISO 3166-2:CW"],
            ["CY", "CYP", "196", "ISO 3166-2:CY"],
            ["CZ", "CZE", "203", "ISO 3166-2:CZ"],
            ["DK", "DNK", "208", "ISO 3166-2:DK"],
            ["DJ", "DJI", "262", "ISO 3166-2:DJ"],
            ["DM", "DMA", "212", "ISO 3166-2:DM"],
            ["DO", "DOM", "214", "ISO 3166-2:DO"],
            ["EC", "ECU", "218", "ISO 3166-2:EC"],
            ["EG", "EGY", "818", "ISO 3166-2:EG"],
            ["SV", "SLV", "222", "ISO 3166-2:SV"],
            ["GQ", "GNQ", "226", "ISO 3166-2:GQ"],
            ["ER", "ERI", "232", "ISO 3166-2:ER"],
            ["EE", "EST", "233", "ISO 3166-2:EE"],
            ["ET", "ETH", "231", "ISO 3166-2:ET"],
            ["FK", "FLK", "238", "ISO 3166-2:FK"],
            ["FO", "FRO", "234", "ISO 3166-2:FO"],
            ["FJ", "FJI", "242", "ISO 3166-2:FJ"],
            ["FI", "FIN", "246", "ISO 3166-2:FI"],
            ["FR", "FRA", "250", "ISO 3166-2:FR"],
            ["GF", "GUF", "254", "ISO 3166-2:GF"],
            ["PF", "PYF", "258", "ISO 3166-2:PF"],
            ["TF", "ATF", "260", "ISO 3166-2:TF"],
            ["GA", "GAB", "266", "ISO 3166-2:GA"],
            ["GM", "GMB", "270", "ISO 3166-2:GM"],
            ["GE", "GEO", "268", "ISO 3166-2:GE"],
            ["DE", "DEU", "276", "ISO 3166-2:DE"],
            ["GH", "GHA", "288", "ISO 3166-2:GH"],
            ["GI", "GIB", "292", "ISO 3166-2:GI"],
            ["GR", "GRC", "300", "ISO 3166-2:GR"],
            ["GL", "GRL", "304", "ISO 3166-2:GL"],
            ["GD", "GRD", "308", "ISO 3166-2:GD"],
            ["GP", "GLP", "312", "ISO 3166-2:GP"],
            ["GU", "GUM", "316", "ISO 3166-2:GU"],
            ["GT", "GTM", "320", "ISO 3166-2:GT"],
            ["GG", "GGY", "831", "ISO 3166-2:GG"],
            ["GN", "GIN", "324", "ISO 3166-2:GN"],
            ["GW", "GNB", "624", "ISO 3166-2:GW"],
            ["GY", "GUY", "328", "ISO 3166-2:GY"],
            ["HT", "HTI", "332", "ISO 3166-2:HT"],
            ["HM", "HMD", "334", "ISO 3166-2:HM"],
            ["VA", "VAT", "336", "ISO 3166-2:VA"],
            ["HN", "HND", "340", "ISO 3166-2:HN"],
            ["HK", "HKG", "344", "ISO 3166-2:HK"],
            ["HU", "HUN", "348", "ISO 3166-2:HU"],
            ["IS", "ISL", "352", "ISO 3166-2:IS"],
            ["IN", "IND", "356", "ISO 3166-2:IN"],
            ["ID", "IDN", "360", "ISO 3166-2:ID"],
            ["IR", "IRN", "364", "ISO 3166-2:IR"],
            ["IQ", "IRQ", "368", "ISO 3166-2:IQ"],
            ["IE", "IRL", "372", "ISO 3166-2:IE"],
            ["IM", "IMN", "833", "ISO 3166-2:IM"],
            ["IL", "ISR", "376", "ISO 3166-2:IL"],
            ["IT", "ITA", "380", "ISO 3166-2:IT"],
            ["JM", "JAM", "388", "ISO 3166-2:JM"],
            ["JP", "JPN", "392", "ISO 3166-2:JP"],
            ["JE", "JEY", "832", "ISO 3166-2:JE"],
            ["JO", "JOR", "400", "ISO 3166-2:JO"],
            ["KZ", "KAZ", "398", "ISO 3166-2:KZ"],
            ["KE", "KEN", "404", "ISO 3166-2:KE"],
            ["KI", "KIR", "296", "ISO 3166-2:KI"],
            ["KP", "PRK", "408", "ISO 3166-2:KP"],
            ["KR", "KOR", "410", "ISO 3166-2:KR"],
            ["KW", "KWT", "414", "ISO 3166-2:KW"],
            ["KG", "KGZ", "417", "ISO 3166-2:KG"],
            ["LA", "LAO", "418", "ISO 3166-2:LA"],
            ["LV", "LVA", "428", "ISO 3166-2:LV"],
            ["LB", "LBN", "422", "ISO 3166-2:LB"],
            ["LS", "LSO", "426", "ISO 3166-2:LS"],
            ["LR", "LBR", "430", "ISO 3166-2:LR"],
            ["LY", "LBY", "434", "ISO 3166-2:LY"],
            ["LI", "LIE", "438", "ISO 3166-2:LI"],
            ["LT", "LTU", "440", "ISO 3166-2:LT"],
            ["LU", "LUX", "442", "ISO 3166-2:LU"],
            ["MO", "MAC", "446", "ISO 3166-2:MO"],
            ["MK", "MKD", "807", "ISO 3166-2:MK"],
            ["MG", "MDG", "450", "ISO 3166-2:MG"],
            ["MW", "MWI", "454", "ISO 3166-2:MW"],
            ["MY", "MYS", "458", "ISO 3166-2:MY"],
            ["MV", "MDV", "462", "ISO 3166-2:MV"],
            ["ML", "MLI", "466", "ISO 3166-2:ML"],
            ["MT", "MLT", "470", "ISO 3166-2:MT"],
            ["MH", "MHL", "584", "ISO 3166-2:MH"],
            ["MQ", "MTQ", "474", "ISO 3166-2:MQ"],
            ["MR", "MRT", "478", "ISO 3166-2:MR"],
            ["MU", "MUS", "480", "ISO 3166-2:MU"],
            ["YT", "MYT", "175", "ISO 3166-2:YT"],
            ["MX", "MEX", "484", "ISO 3166-2:MX"],
            ["FM", "FSM", "583", "ISO 3166-2:FM"],
            ["MD", "MDA", "498", "ISO 3166-2:MD"],
            ["MC", "MCO", "492", "ISO 3166-2:MC"],
            ["MN", "MNG", "496", "ISO 3166-2:MN"],
            ["ME", "MNE", "499", "ISO 3166-2:ME"],
            ["MS", "MSR", "500", "ISO 3166-2:MS"],
            ["MA", "MAR", "504", "ISO 3166-2:MA"],
            ["MZ", "MOZ", "508", "ISO 3166-2:MZ"],
            ["MM", "MMR", "104", "ISO 3166-2:MM"],
            ["NA", "NAM", "516", "ISO 3166-2:NA"],
            ["NR", "NRU", "520", "ISO 3166-2:NR"],
            ["NP", "NPL", "524", "ISO 3166-2:NP"],
            ["NL", "NLD", "528", "ISO 3166-2:NL"],
            ["NC", "NCL", "540", "ISO 3166-2:NC"],
            ["NZ", "NZL", "554", "ISO 3166-2:NZ"],
            ["NI", "NIC", "558", "ISO 3166-2:NI"],
            ["NE", "NER", "562", "ISO 3166-2:NE"],
            ["NG", "NGA", "566", "ISO 3166-2:NG"],
            ["NU", "NIU", "570", "ISO 3166-2:NU"],
            ["NF", "NFK", "574", "ISO 3166-2:NF"],
            ["MP", "MNP", "580", "ISO 3166-2:MP"],
            ["NO", "NOR", "578", "ISO 3166-2:NO"],
            ["OM", "OMN", "512", "ISO 3166-2:OM"],
            ["PK", "PAK", "586", "ISO 3166-2:PK"],
            ["PW", "PLW", "585", "ISO 3166-2:PW"],
            ["PS", "PSE", "275", "ISO 3166-2:PS"],
            ["PA", "PAN", "591", "ISO 3166-2:PA"],
            ["PG", "PNG", "598", "ISO 3166-2:PG"],
            ["PY", "PRY", "600", "ISO 3166-2:PY"],
            ["PE", "PER", "604", "ISO 3166-2:PE"],
            ["PH", "PHL", "608", "ISO 3166-2:PH"],
            ["PN", "PCN", "612", "ISO 3166-2:PN"],
            ["PL", "POL", "616", "ISO 3166-2:PL"],
            ["PT", "PRT", "620", "ISO 3166-2:PT"],
            ["PR", "PRI", "630", "ISO 3166-2:PR"],
            ["QA", "QAT", "634", "ISO 3166-2:QA"],
            ["RE", "REU", "638", "ISO 3166-2:RE"],
            ["RO", "ROU", "642", "ISO 3166-2:RO"],
            ["RU", "RUS", "643", "ISO 3166-2:RU"],
            ["RW", "RWA", "646", "ISO 3166-2:RW"],
            ["BL", "BLM", "652", "ISO 3166-2:BL"],
            ["SH", "SHN", "654", "ISO 3166-2:SH"],
            ["KN", "KNA", "659", "ISO 3166-2:KN"],
            ["LC", "LCA", "662", "ISO 3166-2:LC"],
            ["MF", "MAF", "663", "ISO 3166-2:MF"],
            ["PM", "SPM", "666", "ISO 3166-2:PM"],
            ["VC", "VCT", "670", "ISO 3166-2:VC"],
            ["WS", "WSM", "882", "ISO 3166-2:WS"],
            ["SM", "SMR", "674", "ISO 3166-2:SM"],
            ["ST", "STP", "678", "ISO 3166-2:ST"],
            ["SA", "SAU", "682", "ISO 3166-2:SA"],
            ["SN", "SEN", "686", "ISO 3166-2:SN"],
            ["RS", "SRB", "688", "ISO 3166-2:RS"],
            ["SC", "SYC", "690", "ISO 3166-2:SC"],
            ["SL", "SLE", "694", "ISO 3166-2:SL"],
            ["SG", "SGP", "702", "ISO 3166-2:SG"],
            ["SX", "SXM", "534", "ISO 3166-2:SX"],
            ["SK", "SVK", "703", "ISO 3166-2:SK"],
            ["SI", "SVN", "705", "ISO 3166-2:SI"],
            ["SB", "SLB", "090", "ISO 3166-2:SB"],
            ["SO", "SOM", "706", "ISO 3166-2:SO"],
            ["ZA", "ZAF", "710", "ISO 3166-2:ZA"],
            ["GS", "SGS", "239", "ISO 3166-2:GS"],
            ["SS", "SSD", "728", "ISO 3166-2:SS"],
            ["ES", "ESP", "724", "ISO 3166-2:ES"],
            ["LK", "LKA", "144", "ISO 3166-2:LK"],
            ["SD", "SDN", "729", "ISO 3166-2:SD"],
            ["SR", "SUR", "740", "ISO 3166-2:SR"],
            ["SJ", "SJM", "744", "ISO 3166-2:SJ"],
            ["SZ", "SWZ", "748", "ISO 3166-2:SZ"],
            ["SE", "SWE", "752", "ISO 3166-2:SE"],
            ["CH", "CHE", "756", "ISO 3166-2:CH"],
            ["SY", "SYR", "760", "ISO 3166-2:SY"],
            ["TW", "TWN", "158", "ISO 3166-2:TW"],
            ["TJ", "TJK", "762", "ISO 3166-2:TJ"],
            ["TZ", "TZA", "834", "ISO 3166-2:TZ"],
            ["TH", "THA", "764", "ISO 3166-2:TH"],
            ["TL", "TLS", "626", "ISO 3166-2:TL"],
            ["TG", "TGO", "768", "ISO 3166-2:TG"],
            ["TK", "TKL", "772", "ISO 3166-2:TK"],
            ["TO", "TON", "776", "ISO 3166-2:TO"],
            ["TT", "TTO", "780", "ISO 3166-2:TT"],
            ["TN", "TUN", "788", "ISO 3166-2:TN"],
            ["TR", "TUR", "792", "ISO 3166-2:TR"],
            ["TM", "TKM", "795", "ISO 3166-2:TM"],
            ["TC", "TCA", "796", "ISO 3166-2:TC"],
            ["TV", "TUV", "798", "ISO 3166-2:TV"],
            ["UG", "UGA", "800", "ISO 3166-2:UG"],
            ["UA", "UKR", "804", "ISO 3166-2:UA"],
            ["AE", "ARE", "784", "ISO 3166-2:AE"],
            ["GB", "GBR", "826", "ISO 3166-2:GB"],
            ["US", "USA", "840", "ISO 3166-2:US"],
            ["UM", "UMI", "581", "ISO 3166-2:UM"],
            ["UY", "URY", "858", "ISO 3166-2:UY"],
            ["UZ", "UZB", "860", "ISO 3166-2:UZ"],
            ["VU", "VUT", "548", "ISO 3166-2:VU"],
            ["VE", "VEN", "862", "ISO 3166-2:VE"],
            ["VN", "VNM", "704", "ISO 3166-2:VN"],
            ["VG", "VGB", "092", "ISO 3166-2:VG"],
            ["VI", "VIR", "850", "ISO 3166-2:VI"],
            ["WF", "WLF", "876", "ISO 3166-2:WF"],
            ["EH", "ESH", "732", "ISO 3166-2:EH"],
            ["YE", "YEM", "887", "ISO 3166-2:YE"],
            ["ZM", "ZMB", "894", "ISO 3166-2:ZM"],
            ["ZW", "ZWE", "716", "ISO 3166-2:ZW"],
            ["XK", "XKX", "", "ISO 3166-2:XK"]
        ],
        I = Object.freeze({
            default: S
        }),
        n = {},
        e = {},
        O = {},
        t = {},
        i = {};

    function r(a) {
        return String("000" + (a || "")).slice(-3)
    }

    function o(a) {
        return O[a]
    }

    function M(a) {
        return e[a]
    }

    function u(a) {
        var S = r(a);
        return M(t[S])
    }

    function A(a) {
        var S = r(a);
        return t[S]
    }

    function l(a) {
        if ("string" == typeof a) {
            if (/^[0-9]*$/.test(a)) return A(a);
            if (2 === a.length) return a.toUpperCase();
            if (3 === a.length) return o(a.toUpperCase())
        }
        if ("number" == typeof a) return A(a)
    }(I && S || I).forEach(function(a) {
        var S = a;
        e[S[0]] = S[1], O[S[1]] = S[0], t[S[2]] = S[0], i[S[0]] = S[2]
    });
    var s = {
            registerLocale: function(a) {
                if (!a.locale) throw new TypeError("Missing localeData.locale");
                if (!a.coutryCode) throw new TypeError("Missing localeData.countries");
                n[a.locale] = a.coutryCode
            },
            alpha3ToAlpha2: o,
            alpha2ToAlpha3: M,
            alpha3ToNumeric: function(a) {
                return i[o(a)]
            },
            alpha2ToNumeric: function(a) {
                return i[a]
            },
            numericToAlpha3: u,
            numericToAlpha2: A,
            toAlpha3: function(a) {
                if ("string" == typeof a) {
                    if (/^[0-9]*$/.test(a)) return u(a);
                    if (2 === a.length) return M(a.toUpperCase());
                    if (3 === a.length) return a.toUpperCase()
                }
                if ("number" == typeof a) return u(a)
            },
            toAlpha2: l,
            getName: function(a, S) {
                try {
                    return n[S.toLowerCase()][l(a)]
                } catch (a) {
                    return
                }
            },
            getNames: function(a) {
                var S = n[a.toLowerCase()];
                return void 0 === S ? {} : S
            },
            getAlpha2Code: function(a, S) {
                try {
                    var I, e = n[S.toLowerCase()];
                    for (I in e)
                        if (e.hasOwnProperty(I) && e[I].toLowerCase() === a.toLowerCase()) return I;
                    return
                } catch (a) {
                    return
                }
            },
            getAlpha2Codes: function() {
                return e
            },
            getAlpha3Code: function(a, S) {
                var I = this.getAlpha2Code(a, S);
                return I ? this.toAlpha3(I) : void 0
            },
            getAlpha3Codes: function() {
                return O
            },
            getNumericCodes: function() {
                return t
            },
            langs: function() {
                return Object.keys(n)
            },
            isValid: function(a) {
                return O.hasOwnProperty(a) || e.hasOwnProperty(a) || t.hasOwnProperty(a)
            }
        },
        C = {
            locale: "en",
            countries: {
                AU: "Australia",
                AF: "Afghanistan",
                AL: "Albania",
                DZ: "Algeria",
                AS: "American Samoa",
                AD: "Andorra",
                AO: "Angola",
                AI: "Anguilla",
                AQ: "Antarctica",
                AG: "Antigua and Barbuda",
                AR: "Argentina",
                AM: "Armenia",
                AW: "Aruba",
                AT: "Austria",
                AZ: "Azerbaijan",
                BS: "Bahamas",
                BH: "Bahrain",
                BD: "Bangladesh",
                BB: "Barbados",
                BY: "Belarus",
                BE: "Belgium",
                BZ: "Belize",
                BJ: "Benin",
                BM: "Bermuda",
                BT: "Bhutan",
                BO: "Bolivia",
                BA: "Bosnia and Herzegovina",
                BW: "Botswana",
                BV: "Bouvet Island",
                BR: "Brazil",
                IO: "British Indian Ocean Territory",
                BN: "Brunei Darussalam",
                BG: "Bulgaria",
                BF: "Burkina Faso",
                BI: "Burundi",
                KH: "Cambodia",
                CM: "Cameroon",
                CA: "Canada",
                CV: "Cape Verde",
                KY: "Cayman Islands",
                CF: "Central African Republic",
                TD: "Chad",
                CL: "Chile",
                CN: "China",
                CX: "Christmas Island",
                CC: "Cocos (Keeling) Islands",
                CO: "Colombia",
                KM: "Comoros",
                CG: "Congo",
                CD: "Congo, the Democratic Republic of the",
                CK: "Cook Islands",
                CR: "Costa Rica",
                CI: "Cote D'Ivoire",
                HR: "Croatia",
                CU: "Cuba",
                CY: "Cyprus",
                CZ: "Czech Republic",
                DK: "Denmark",
                DJ: "Djibouti",
                DM: "Dominica",
                DO: "Dominican Republic",
                EC: "Ecuador",
                EG: "Egypt",
                SV: "El Salvador",
                GQ: "Equatorial Guinea",
                ER: "Eritrea",
                EE: "Estonia",
                ET: "Ethiopia",
                FK: "Falkland Islands (Malvinas)",
                FO: "Faroe Islands",
                FJ: "Fiji",
                FI: "Finland",
                FR: "France",
                GF: "French Guiana",
                PF: "French Polynesia",
                TF: "French Southern Territories",
                GA: "Gabon",
                GM: "Gambia",
                GE: "Georgia",
                DE: "Germany",
                GH: "Ghana",
                GI: "Gibraltar",
                GR: "Greece",
                GL: "Greenland",
                GD: "Grenada",
                GP: "Guadeloupe",
                GU: "Guam",
                GT: "Guatemala",
                GN: "Guinea",
                GW: "Guinea-Bissau",
                GY: "Guyana",
                HT: "Haiti",
                HM: "Heard Island and Mcdonald Islands",
                VA: "Holy See (Vatican City State)",
                HN: "Honduras",
                HK: "Hong Kong",
                HU: "Hungary",
                IS: "Iceland",
                IN: "India",
                ID: "Indonesia",
                IR: "Iran, Islamic Republic of",
                IQ: "Iraq",
                IE: "Ireland",
                IL: "Israel",
                IT: "Italy",
                JM: "Jamaica",
                JP: "Japan",
                JO: "Jordan",
                KZ: "Kazakhstan",
                KE: "Kenya",
                KI: "Kiribati",
                KP: "North Korea",
                KR: "South Korea",
                KW: "Kuwait",
                KG: "Kyrgyzstan",
                LA: "Lao People's Democratic Republic",
                LV: "Latvia",
                LB: "Lebanon",
                LS: "Lesotho",
                LR: "Liberia",
                LY: "Libyan Arab Jamahiriya",
                LI: "Liechtenstein",
                LT: "Lithuania",
                LU: "Luxembourg",
                MO: "Macao",
                MK: "Macedonia, the Former Yugoslav Republic of",
                MG: "Madagascar",
                MW: "Malawi",
                MY: "Malaysia",
                MV: "Maldives",
                ML: "Mali",
                MT: "Malta",
                MH: "Marshall Islands",
                MQ: "Martinique",
                MR: "Mauritania",
                MU: "Mauritius",
                YT: "Mayotte",
                MX: "Mexico",
                FM: "Micronesia, Federated States of",
                MD: "Moldova, Republic of",
                MC: "Monaco",
                MN: "Mongolia",
                MS: "Montserrat",
                MA: "Morocco",
                MZ: "Mozambique",
                MM: "Myanmar",
                NA: "Namibia",
                NR: "Nauru",
                NP: "Nepal",
                NL: "Netherlands",
                NC: "New Caledonia",
                NZ: "New Zealand",
                NI: "Nicaragua",
                NE: "Niger",
                NG: "Nigeria",
                NU: "Niue",
                NF: "Norfolk Island",
                MP: "Northern Mariana Islands",
                NO: "Norway",
                OM: "Oman",
                PK: "Pakistan",
                PW: "Palau",
                PS: "Palestinian Territory, Occupied",
                PA: "Panama",
                PG: "Papua New Guinea",
                PY: "Paraguay",
                PE: "Peru",
                PH: "Philippines",
                PN: "Pitcairn",
                PL: "Poland",
                PT: "Portugal",
                PR: "Puerto Rico",
                QA: "Qatar",
                RE: "Reunion",
                RO: "Romania",
                RU: "Russian Federation",
                RW: "Rwanda",
                SH: "Saint Helena",
                KN: "Saint Kitts and Nevis",
                LC: "Saint Lucia",
                PM: "Saint Pierre and Miquelon",
                VC: "Saint Vincent and the Grenadines",
                WS: "Samoa",
                SM: "San Marino",
                ST: "Sao Tome and Principe",
                SA: "Saudi Arabia",
                SN: "Senegal",
                SC: "Seychelles",
                SL: "Sierra Leone",
                SG: "Singapore",
                SK: "Slovakia",
                SI: "Slovenia",
                SB: "Solomon Islands",
                SO: "Somalia",
                ZA: "South Africa",
                GS: "South Georgia and the South Sandwich Islands",
                ES: "Spain",
                LK: "Sri Lanka",
                SD: "Sudan",
                SR: "Suriname",
                SJ: "Svalbard and Jan Mayen",
                SZ: "Swaziland",
                SE: "Sweden",
                CH: "Switzerland",
                SY: "Syrian Arab Republic",
                TW: "Taiwan",
                TJ: "Tajikistan",
                TZ: "Tanzania, United Republic of",
                TH: "Thailand",
                TL: "Timor-Leste",
                TG: "Togo",
                TK: "Tokelau",
                TO: "Tonga",
                TT: "Trinidad and Tobago",
                TN: "Tunisia",
                TR: "Turkey",
                TM: "Turkmenistan",
                TC: "Turks and Caicos Islands",
                TV: "Tuvalu",
                UG: "Uganda",
                UA: "Ukraine",
                AE: "United Arab Emirates",
                GB: "United Kingdom",
                US: "United States of America",
                UM: "United States Minor Outlying Islands",
                UY: "Uruguay",
                UZ: "Uzbekistan",
                VU: "Vanuatu",
                VE: "Venezuela",
                VN: "Viet Nam",
                VG: "Virgin Islands, British",
                VI: "Virgin Islands, U.S.",
                WF: "Wallis and Futuna",
                EH: "Western Sahara",
                YE: "Yemen",
                ZM: "Zambia",
                ZW: "Zimbabwe",
                AX: "Åland Islands",
                BQ: "Bonaire, Sint Eustatius and Saba",
                CW: "Curaçao",
                GG: "Guernsey",
                IM: "Isle of Man",
                JE: "Jersey",
                ME: "Montenegro",
                BL: "Saint Barthélemy",
                MF: "Saint Martin (French part)",
                RS: "Serbia",
                SX: "Sint Maarten (Dutch part)",
                SS: "South Sudan",
                XK: "Kosovo"
            },
            coutryCode: {
				AU: {
                    name: "Australia",
                    codeVal: "+61"
                },
                AF: {
                    name: "Afghanistan",
                    codeVal: "+93"
                },
                AL: {
                    name: "Albania",
                    codeVal: "+355"
                },
				DZ: {
                    name: "Algeria",
                    codeVal: "+213"
                },
				AS: {
                    name: "American Samoa",
                    codeVal: "+684"
                },
				AD: {
                    name: "Andorra",
                    codeVal: "+376"
                },
				AO: {
                    name: "Angola",
                    codeVal: "+244"
                },
				AI: {
                    name: "Anguilla",
                    codeVal: "+264"
                },
				AQ: {
                    name: "Antarctica",
                    codeVal: "+672"
                },
				AG: {
                    name: "Antigua and Barbuda",
                    codeVal: "+268"
                },
				AR: {
                    name: "Argentina",
                    codeVal: "+54"
                },
				AM: {
                    name: "Armenia",
                    codeVal: "+374"
                },
				AW: {
                    name: "Aruba",
                    codeVal: "+297"
                },
				AT: {
                    name: "Austria",
                    codeVal: "+43"
                },
				AZ: {
                    name: "Azerbaijan",
                    codeVal: "+994"
                },
				BS: {
                    name: "Bahamas",
                    codeVal: "+242"
                },
				BH: {
                    name: "Bahrain",
                    codeVal: "+973"
                },
				BD: {
                    name: "Bangladesh",
                    codeVal: "+880"
                },
				BB: {
                    name: "Barbados",
                    codeVal: "+246"
                },
				BY: {
                    name: "Belarus",
                    codeVal: "+375"
                },
				BE: {
                    name: "Belgium",
                    codeVal: "+32"
                },
				BZ: {
                    name: "Belize",
                    codeVal: "+501"
                },
				BJ: {
                    name: "Benin",
                    codeVal: "+229"
                },
				BM: {
                    name: "Bermuda",
                    codeVal: "+441"
                },
				BT: {
                    name: "Bhutan",
                    codeVal: "+975"
                },
				BO: {
                    name: "Bolivia",
                    codeVal: "+591"
                },
				BA: {
                    name: "Bosnia and Herzegovina",
                    codeVal: "+387"
                },
				BW: {
                    name: "Botswana",
                    codeVal: "+267"
                },
				BR: {
                    name: "Brazil",
                    codeVal: "+55"
                },
				BN: {
                    name: "Brunei",
                    codeVal: "+673"
                },
				BG: {
                    name: "Bulgaria",
                    codeVal: "+359"
                },
				BF: {
                    name: "Burkina Faso",
                    codeVal: "+226"
                },
				BI: {
                    name: "Burundi",
                    codeVal: "+257"
                },
				KH: {
                    name: "Cambodia",
                    codeVal: "+855"
                },
				CM: {
                    name: "Cameroon",
                    codeVal: "+237"
                },
				CA: {
                    name: "Canada",
                    codeVal: "+1"
                },
				CV: {
                    name: "Cape Verde",
                    codeVal: "+238"
                },
				CA: {
                    name: "Canada",
                    codeVal: "+1"
                },
				KY: {
                    name: "Cayman Islands",
                    codeVal: "+345"
                },
				CF: {
                    name: "Central African Republic",
                    codeVal: "+236"
                },
				TD: {
                    name: "Chad",
                    codeVal: "+235"
                },
				CL: {
                    name: "Chile",
                    codeVal: "+56"
                },
				CN: {
                    name: "China",
                    codeVal: "+86"
                },
				// CX: {
                //     name: "Christmas Island",
                //     codeVal: "+61"
                // },
				// CC: {
                //     name: "Cocos Islands",
                //     codeVal: "+61"
                // },
				CO: {
                    name: "Colombia",
                    codeVal: "+57"
                },
				KM: {
                    name: "Comoros",
                    codeVal: "+269"
                },
				CK: {
                    name: "Cook Islands",
                    codeVal: "+682"
                },
				CR: {
                    name: "Costa Rica",
                    codeVal: "+506"
                },
				HR: {
                    name: "Croatia",
                    codeVal: "+385"
                },
				CU: {
                    name: "Cuba",
                    codeVal: "+53"
                },
				CW: {
                    name: "Curacao",
                    codeVal: "+599"
                },
				CY: {
                    name: "Cyprus",
                    codeVal: "+357"
                },
				CZ: {
                    name: "Czech Republic",
                    codeVal: "+420"
                },
				CD: {
                    name: "Democratic Republic of the Congo",
                    codeVal: "+243"
                },
				DK: {
                    name: "Denmark",
                    codeVal: "+45"
                },
				DJ: {
                    name: "Djibouti",
                    codeVal: "+253"
                },
				DM: {
                    name: "Dominica",
                    codeVal: "+767"
                },
				DK: {
                    name: "Dominican Republic",
                    codeVal: "+809"
                },
				TL: {
                    name: "East Timor",
                    codeVal: "+670"
                },
				EC: {
                    name: "Ecuador",
                    codeVal: "+593"
                },
				EG: {
                    name: "Egypt",
                    codeVal: "+20"
                },
				SV: {
                    name: "El Salvador",
                    codeVal: "+503"
                },
				GQ: {
                    name: "Equatorial Guinea",
                    codeVal: "+240"
                },
				ER: {
                    name: "Eritrea",
                    codeVal: "+291"
                },
				EE: {
                    name: "Estonia",
                    codeVal: "+372"
                },
				ET: {
                    name: "Ethiopia",
                    codeVal: "+251"
                },
				FK: {
                    name: "Falkland Islands",
                    codeVal: "+500"
                },
				FO: {
                    name: "Faroe Islands",
                    codeVal: "+298"
                },
				FJ: {
                    name: "Fiji",
                    codeVal: "+679"
                },
				FI: {
                    name: "Finland",
                    codeVal: "+358"
                },
				FR: {
                    name: "France",
                    codeVal: "+33"
                },
				PF: {
                    name: "French Polynesia",
                    codeVal: "+689"
                },
				GA: {
                    name: "Gabon",
                    codeVal: "+241"
                },
				GM: {
                    name: "Gambia",
                    codeVal: "+220"
                },
				GE: {
                    name: "Georgia",
                    codeVal: "+995"
                },
				DE: {
                    name: "Germany",
                    codeVal: "+49"
                },
				GH: {
                    name: "Ghana",
                    codeVal: "+233"
                },
				GI: {
                    name: "Gibraltar",
                    codeVal: "+350"
                },
				GR: {
                    name: "Greece",
                    codeVal: "+30"
                },
				GL: {
                    name: "Greenland",
                    codeVal: "+299"
                },
				GD: {
                    name: "Grenada",
                    codeVal: "+473"
                },
				GU: {
                    name: "Guam",
                    codeVal: "+671"
                },
				GT: {
                    name: "Guatemala",
                    codeVal: "+502"
                },
				GG: {
                    name: "Guernsey",
                    codeVal: "+44"
                },
				GN: {
                    name: "Guinea",
                    codeVal: "+224"
                },
				GW: {
                    name: "Guinea-Bissau",
                    codeVal: "+245"
                },
				GY: {
                    name: "Guyana",
                    codeVal: "+592"
                },
				HT: {
                    name: "Haiti",
                    codeVal: "+509"
                },
				HN: {
                    name: "Honduras",
                    codeVal: "+504"
                },
				HK: {
                    name: "Hong Kong",
                    codeVal: "+852"
                },
				HU: {
                    name: "Hungary",
                    codeVal: "+36"
                },
				IS: {
                    name: "Iceland",
                    codeVal: "+354"
                },
				IN: {
                    name: "India",
                    codeVal: "+91"
                },
				ID: {
                    name: "Indonesia",
                    codeVal: "+62"
                },
				IR: {
                    name: "Iran",
                    codeVal: "+98"
                },
				IQ: {
                    name: "Iraq",
                    codeVal: "+964"
                },
				IE: {
                    name: "Ireland",
                    codeVal: "+353"
                },
				IL: {
                    name: "Israel",
                    codeVal: "+972"
                },
				IT: {
                    name: "Italy",
                    codeVal: "+39"
                },
				CI: {
                    name: "Ivory Coast",
                    codeVal: "+225"
                },
				JM: {
                    name: "Jamaica",
                    codeVal: "+876"
                },
				JP: {
                    name: "Japan",
                    codeVal: "+81"
                },
				JE: {
                    name: "Jersey",
                    codeVal: "+1534"
                },
				JO: {
                    name: "Jordan",
                    codeVal: "+962"
                },
				KZ: {
                    name: "Kazakhstan",
                    codeVal: "+7"
                },
				KE: {
                    name: "Kenya",
                    codeVal: "+254"
                },
				XK: {
                    name: "Kosovo",
                    codeVal: "+383"
                },
				KG: {
                    name: "Kuwait",
                    codeVal: "+996"
                },
				GY: {
                    name: "Kyrgyzstan",
                    codeVal: "+592"
                },
				LA: {
                    name: "Laos",
                    codeVal: "+856"
                },
				LV: {
                    name: "Latvia",
                    codeVal: "+371"
                },
				LB: {
                    name: "Lebanon",
                    codeVal: "+961"
                }, 
				LS: {
                    name: "Lesotho",
                    codeVal: "+266"
                }, 
				LR: {
                    name: "Liberia",
                    codeVal: "+231"
                }, 
				LY: {
                    name: "Libya",
                    codeVal: "+218"
                }, 
				LI: {
                    name: "Liechtenstein",
                    codeVal: "+423"
                }, 
				LT: {
                    name: "Lithuania",
                    codeVal: "+370"
                }, 
				LU: {
                    name: "Luxembourg",
                    codeVal: "+352"
                }, 
				MO: {
                    name: "Macau",
                    codeVal: "+853"
                }, 
				MK: {
                    name: "Macedonia",
                    codeVal: "+389"
                },
				MG: {
                    name: "Madagascar",
                    codeVal: "+261"
                },
				MW: {
                    name: "Malawi",
                    codeVal: "+265"
                }, 
				MY: {
                    name: "Malaysia",
                    codeVal: "+60"
                }, 
				MV: {
                    name: "Maldives",
                    codeVal: "+960"
                }, 
				ML: {
                    name: "Mali",
                    codeVal: "+223"
                }, 
				MT: {
                    name: "Malta",
                    codeVal: "+356"
                }, 
				MU: {
                    name: "Mauritius",
                    codeVal: "+230"
                }, 
				MX: {
                    name: "Mexico",
                    codeVal: "+52"
                }, 
				MD: {
                    name: "Moldova",
                    codeVal: "+373"
                }, 
				MC: {
                    name: "Monaco",
                    codeVal: "+377"
                }, 
				MN: {
                    name: "Mongolia",
                    codeVal: "+976"
                }, 
				MA: {
                    name: "Morocco",
                    codeVal: "+212"
                }, 
				MZ: {
                    name: "Mozambique",
                    codeVal: "+258"
                }, 
				MM: {
                    name: "Myanmar",
                    codeVal: "+95"
                }, 
				NA: {
                    name: "Namibia",
                    codeVal: "+264"
                }, 
				NP: {
                    name: "Nepal",
                    codeVal: "+977"
                }, 
				NL: {
                    name: "Netherlands",
                    codeVal: "+31"
                },
				NZ: {
                    name: "New Zealand",
                    codeVal: "+64"
                },
				NE: {
                    name: "Niger",
                    codeVal: "+227"
                },
				NG: {
                    name: "Nigeria",
                    codeVal: "+234"
                },
				KP: {
                    name: "North Korea",
                    codeVal: "+850"
                },
				NO: {
                    name: "Norway",
                    codeVal: "+47"
                },
				OM: {
                    name: "Oman",
                    codeVal: "+968"
                },
				PK: {
                    name: "Pakistan",
                    codeVal: "+92"
                },
				PS: {
                    name: "Palestine",
                    codeVal: "+970"
                },
				PA: {
                    name: "Panama",
                    codeVal: "+507"
                },
				PG: {
                    name: "Papua New Guinea",
                    codeVal: "+675"
                },
				PY: {
                    name: "Paraguay",
                    codeVal: "+595"
                },
				PE: {
                    name: "Peru",
                    codeVal: "+51"
                },
				PH: {
                    name: "Philippines",
                    codeVal: "+63"
                },
				PL: {
                    name: "Poland",
                    codeVal: "+48"
                },
				PT: {
                    name: "Portugal",
                    codeVal: "+351"
                },
				QA: {
                    name: "Qatar",
                    codeVal: "+974"
                },
				CG: {
                    name: "Republic of the Congo",
                    codeVal: "+242"
                },
				RO: {
                    name: "Romania",
                    codeVal: "+40"
                },
				RU: {
                    name: "Russia",
                    codeVal: "+7"
                },
				RW: {
                    name: "Rwanda",
                    codeVal: "+250"
                },
				SA: {
                    name: "Saudi Arabia",
                    codeVal: "+966"
                },
				SN: {
                    name: "Senegal",
                    codeVal: "+221"
                },
				RS: {
                    name: "Serbia",
                    codeVal: "+381"
                },
				SC: {
                    name: "Seychelles",
                    codeVal: "+248"
                },
				SG: {
                    name: "Singapore",
                    codeVal: "+65"
                },
				SK: {
                    name: "Slovakia",
                    codeVal: "+421"
                },
				SI: {
                    name: "Slovenia",
                    codeVal: "+386"
                },
				SB: {
                    name: "Solomon Islands",
                    codeVal: "+677"
                },
				SO: {
                    name: "Somalia",
                    codeVal: "+252"
                },
				ZA: {
                    name: "South Africa",
                    codeVal: "+27"
                },
				KR: {
                    name: "South Korea",
                    codeVal: "+82"
                },
				SS: {
                    name: "South Sudan",
                    codeVal: "+211"
                },
				ES: {
                    name: "Spain",
                    codeVal: "+34"
                },
				LK: {
                    name: "Sri Lanka",
                    codeVal: "+94"
                },
				SD: {
                    name: "Sudan",
                    codeVal: "+249"
                },
				SE: {
                    name: "Sweden",
                    codeVal: "+46"
                },
				CH: {
                    name: "Switzerland",
                    codeVal: "+41"
                },
				SY: {
                    name: "Syria",
                    codeVal: "+963"
                },
				TW: {
                    name: "Taiwan",
                    codeVal: "+886"
                },
				TJ: {
                    name: "Tajikistan",
                    codeVal: "+992"
                },
				TZ: {
                    name: "Tanzania",
                    codeVal: "+255"
                },
				TH: {
                    name: "Thailand",
                    codeVal: "+66"
                },
				TN: {
                    name: "Tunisia",
                    codeVal: "+216"
                },
				TR: {
                    name: "Turkey",
                    codeVal: "+90"
                },
				TM: {
                    name: "Turkmenistan",
                    codeVal: "+993"
                },
				UG: {
                    name: "Uganda",
                    codeVal: "+	256"
                },
				UA: {
                    name: "Ukraine",
                    codeVal: "+380"
                },
				AE: {
                    name: "United Arab Emirates",
                    codeVal: "+971"
                },
				GB: {
                    name: "United Kingdom",
                    codeVal: "+44"
                },
				US: {
                    name: "United States",
                    codeVal: "+1"
                },
				UY: {
                    name: "Uruguay",
                    codeVal: "+598"
                },
				UZ: {
                    name: "Uzbekistan",
                    codeVal: "+998"
                },
				VU: {
                    name: "Vanuatu",
                    codeVal: "+678"
                },
				VA: {
                    name: "Vatican",
                    codeVal: "+379"
                },
				VE: {
                    name: "Venezuela",
                    codeVal: "+58"
                },
				VN: {
                    name: "Vietnam",
                    codeVal: "+84"
                },
				YE: {
                    name: "Yemen",
                    codeVal: "+967"
                },
				ZM: {
                    name: "Zambia",
                    codeVal: "+260"
                },
				ZW: {
                    name: "Zimbabwe",
                    codeVal: "+263"
                },
				// Xk: {
                //     name: "Kosovo",
                //     codeVal: "+91"
                // },
            }
        };
    s.registerLocale(C);
    var G = s.getNames("en"),
        T = Object.keys(G).map(function(a) {
            return {
                name: G[a],
                code: a
            }
        }),
        N = function(S) {
            a(this).each(function(S, I) {
                var n = a(I),
                    e = n.data("flag"),
                    O = T,
                    t = n.data("countries");
                t && t.length && (t = t.toUpperCase().split(","), O = O.filter(function(a) {
                    return t.includes(a.code)
                }));
                var i = [];
                e ? a.each(O, function(a, S) {
                    i.push('<option\n\t\t\t\t\t\tdata-tokens="' + S.code + " " + S.name.codeVal + '"\n\t\t\t\t\t\tdata-icon="inline-flag flag ' + S.code.toLowerCase() + '"\n\t\t\t\t\t\tclass="option-with-flag"\n\t\t\t\t\t\tvalue="' + S.name.codeVal + '">' + S.name.codeVal + "</option>")
                }) : a.each(O, function(a, S) {
                    i.push('<option\n\t\t\t\t\tdata-countrycode="' + S.code + '\n\t\t\t\t\tdata-tokens="' + S.code + " " + S.name.codeVal + '"\n\t\t\t\t\tvalue="' + S.name.codeVal + '">' + S.name.codeVal + "</option>")
                }), n.addClass("f16").html(i.join("\n"));
                var r = n.data("default");
                r && n.val(r.split(",").map(function(a) {
                    return a.trim()
                }))
            })
        };
    return a.fn.countrypicker = N, a(".countrypicker").countrypicker(), N
}($);
//# sourceMappingURL=bootstrap-select-country.min.js.map