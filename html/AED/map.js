function set_state_fill(state_id, color) {
    // sets state to color
    // state_id is two letter abbr
    // color is rgb
    "use strict";
    
    var x = document.getElementsByClassName("state");
    for (var i = 0; i < x.length; i++) {
        if (x[i].id == state_id) {
            x[i].style.fill = color;
            return;
        }
    }
    
}

function get_state_color(state) {
    "use strict";
    
    var x = document.getElementsByClassName("state");
    for (var i = 0; i < x.length; i++) {
        if (x[i].id == state_id) {
            return x[i].style.fill;
        }
    }
    
}

function get_election(election_type) {
    "use strict";
    // retrieve election year, view type
    // from HTML
    // passes value to map colorer
    
    var select = document.getElementById("election-year");
    var election_year = select.options[select.selectedIndex].value;
    
    select = document.getElementById("view-type");
    var view_type = select.options[select.selectedIndex].value;
    color_states(get_election_data(election_type, election_year),
                 view_type,
                 1); // use default rule of 1 for now
    
}

function get_election_data(election_type, election_year) {

    var elections = {'US_president': {'1972': {'AL': {'Democratic': 256923, 'Republican': 728701, 'Total': 1006093}, 'AK': {'Democratic': 32967, 'Republican': 55349, 'Total': 95219}, 'AZ': {'Democratic': 198540, 'Republican': 402812, 'Total': 653505}, 'AR': {'Democratic': 198899, 'Republican': 445751, 'Total': 647666}, 'CA': {'Democratic': 3475847, 'Republican': 4602096, 'Total': 8367862}, 'CO': {'Democratic': 329980, 'Republican': 597189, 'Total': 953884}, 'CT': {'Democratic': 555498, 'Republican': 810763, 'Total': 1384277}, 'DE': {'Democratic': 92283, 'Republican': 140357, 'Total': 235516}, 'DC': {'Democratic': 127627, 'Republican': 35226, 'Total': 163421}, 'FL': {'Democratic': 718117, 'Republican': 1857759, 'Total': 2583283}, 'GA': {'Democratic': 289529, 'Republican': 881496, 'Total': 1174772}, 'HI': {'Democratic': 101409, 'Republican': 168865, 'Total': 270274}, 'ID': {'Democratic': 80826, 'Republican': 199384, 'Total': 310379}, 'IL': {'Democratic': 1913472, 'Republican': 2788179, 'Total': 4723236}, 'IN': {'Democratic': 708568, 'Republican': 1405154, 'Total': 2125529}, 'IA': {'Democratic': 496206, 'Republican': 706207, 'Total': 1225944}, 'KS': {'Democratic': 270287, 'Republican': 619812, 'Total': 916095}, 'KY': {'Democratic': 371159, 'Republican': 676446, 'Total': 1067499}, 'LA': {'Democratic': 298142, 'Republican': 686852, 'Total': 1051491}, 'ME': {'Democratic': 160584, 'Republican': 256458, 'Total': 417271}, 'MD': {'Democratic': 505781, 'Republican': 829305, 'Total': 1353812}, 'MA': {'Democratic': 1332540, 'Republican': 1112078, 'Total': 2458756}, 'MI': {'Democratic': 1459435, 'Republican': 1961721, 'Total': 3490325}, 'MN': {'Democratic': 802346, 'Republican': 898269, 'Total': 1741652}, 'MS': {'Democratic': 126782, 'Republican': 505125, 'Total': 645963}, 'MO': {'Democratic': 698531, 'Republican': 1154058, 'Total': 1852589}, 'MT': {'Democratic': 120197, 'Republican': 183976, 'Total': 317603}, 'NE': {'Democratic': 169991, 'Republican': 406298, 'Total': 576289}, 'NV': {'Democratic': 66016, 'Republican': 115750, 'Total': 181766}, 'NH': {'Democratic': 116435, 'Republican': 213724, 'Total': 334055}, 'NJ': {'Democratic': 1102211, 'Republican': 1845502, 'Total': 2997229}, 'NM': {'Democratic': 141084, 'Republican': 235606, 'Total': 385931}, 'NY': {'Democratic': 2951084, 'Republican': 4192778, 'Total': 7161830}, 'NC': {'Democratic': 438705, 'Republican': 1054889, 'Total': 1518612}, 'ND': {'Democratic': 100384, 'Republican': 174109, 'Total': 280514}, 'OH': {'Democratic': 1558889, 'Republican': 2441827, 'Total': 4094787}, 'OK': {'Democratic': 247147, 'Republican': 759025, 'Total': 1029900}, 'OR': {'Democratic': 392760, 'Republican': 486686, 'Total': 927946}, 'PA': {'Democratic': 1796951, 'Republican': 2714521, 'Total': 4592105}, 'RI': {'Democratic': 194645, 'Republican': 220383, 'Total': 415808}, 'SC': {'Democratic': 189270, 'Republican': 478427, 'Total': 677880}, 'SD': {'Democratic': 139945, 'Republican': 166476, 'Total': 307415}, 'TN': {'Democratic': 357293, 'Republican': 813147, 'Total': 1201182}, 'TX': {'Democratic': 1154291, 'Republican': 2298896, 'Total': 3472714}, 'UT': {'Democratic': 126284, 'Republican': 323643, 'Total': 478476}, 'VT': {'Democratic': 68174, 'Republican': 117149, 'Total': 186947}, 'VA': {'Democratic': 438887, 'Republican': 988493, 'Total': 1457019}, 'WA': {'Democratic': 568334, 'Republican': 837135, 'Total': 1470847}, 'WV': {'Democratic': 277435, 'Republican': 484964, 'Total': 762399}, 'WI': {'Democratic': 810174, 'Republican': 989430, 'Total': 1852890}, 'WY': {'Democratic': 44358, 'Republican': 100464, 'Total': 145570}, '_COLORS': {'Democratic': 'Blue', 'Republican': 'Red'}}, '1976': {'AL': {'Democratic': 659170, 'Republican': 504070, 'Total': 1182850}, 'AK': {'Democratic': 44058, 'Republican': 71555, 'Total': 123574}, 'AZ': {'Democratic': 295602, 'Republican': 418642, 'Total': 742719}, 'AR': {'Democratic': 499614, 'Republican': 268753, 'Total': 769396}, 'CA': {'Democratic': 3742284, 'Republican': 3882244, 'Total': 7867117}, 'CO': {'Democratic': 460353, 'Republican': 584367, 'Total': 1081135}, 'CT': {'Democratic': 647895, 'Republican': 719261, 'Total': 1381526}, 'DE': {'Democratic': 122596, 'Republican': 109831, 'Total': 235834}, 'DC': {'Democratic': 137818, 'Republican': 27873, 'Total': 168830}, 'FL': {'Democratic': 1636000, 'Republican': 1469531, 'Total': 3150631}, 'GA': {'Democratic': 979409, 'Republican': 483743, 'Total': 1467458}, 'HI': {'Democratic': 147375, 'Republican': 140003, 'Total': 291301}, 'ID': {'Democratic': 126549, 'Republican': 204151, 'Total': 340932}, 'IL': {'Democratic': 2271295, 'Republican': 2364269, 'Total': 4718833}, 'IN': {'Democratic': 1014714, 'Republican': 1183958, 'Total': 2220362}, 'IA': {'Democratic': 619931, 'Republican': 632863, 'Total': 1279306}, 'KS': {'Democratic': 430421, 'Republican': 502752, 'Total': 957845}, 'KY': {'Democratic': 615717, 'Republican': 531852, 'Total': 1167142}, 'LA': {'Democratic': 661365, 'Republican': 587446, 'Total': 1278439}, 'ME': {'Democratic': 232279, 'Republican': 236320, 'Total': 483208}, 'MD': {'Democratic': 759612, 'Republican': 672661, 'Total': 1432273}, 'MA': {'Democratic': 1429475, 'Republican': 1030276, 'Total': 2547557}, 'MI': {'Democratic': 1696714, 'Republican': 1893742, 'Total': 3653749}, 'MN': {'Democratic': 1070440, 'Republican': 819395, 'Total': 1949931}, 'MS': {'Democratic': 381309, 'Republican': 366846, 'Total': 769360}, 'MO': {'Democratic': 998387, 'Republican': 927443, 'Total': 1953600}, 'MT': {'Democratic': 149259, 'Republican': 173703, 'Total': 328734}, 'NE': {'Democratic': 233692, 'Republican': 359705, 'Total': 607668}, 'NV': {'Democratic': 92479, 'Republican': 101273, 'Total': 201876}, 'NH': {'Democratic': 147635, 'Republican': 185935, 'Total': 339618}, 'NJ': {'Democratic': 1444653, 'Republican': 1509688, 'Total': 3014472}, 'NM': {'Democratic': 201148, 'Republican': 211419, 'Total': 416590}, 'NY': {'Democratic': 3389558, 'Republican': 3100791, 'Total': 6525225}, 'NC': {'Democratic': 927365, 'Republican': 741960, 'Total': 1677906}, 'ND': {'Democratic': 136078, 'Republican': 153470, 'Total': 297094}, 'OH': {'Democratic': 2011621, 'Republican': 2000505, 'Total': 4111873}, 'OK': {'Democratic': 532442, 'Republican': 545708, 'Total': 1092251}, 'OR': {'Democratic': 490407, 'Republican': 492120, 'Total': 1029876}, 'PA': {'Democratic': 2328677, 'Republican': 2205604, 'Total': 4620787}, 'RI': {'Democratic': 227636, 'Republican': 181249, 'Total': 411170}, 'SC': {'Democratic': 450825, 'Republican': 346140, 'Total': 802594}, 'SD': {'Democratic': 147068, 'Republican': 151505, 'Total': 300678}, 'TN': {'Democratic': 825879, 'Republican': 633969, 'Total': 1476346}, 'TX': {'Democratic': 2082319, 'Republican': 1953300, 'Total': 4071884}, 'UT': {'Democratic': 182110, 'Republican': 337908, 'Total': 541198}, 'VT': {'Democratic': 81044, 'Republican': 102085, 'Total': 187855}, 'VA': {'Democratic': 813896, 'Republican': 836554, 'Total': 1697094}, 'WA': {'Democratic': 717323, 'Republican': 777732, 'Total': 1555534}, 'WV': {'Democratic': 435914, 'Republican': 314760, 'Total': 750674}, 'WI': {'Democratic': 1040232, 'Republican': 1004987, 'Total': 2101336}, 'WY': {'Democratic': 62239, 'Republican': 92717, 'Total': 156343}, '_COLORS': {'Democratic': 'Blue', 'Republican': 'Red'}}, '1980': {'AL': {'Democratic': 636730, 'Republican': 654192, 'Total': 1341929}, 'AK': {'Democratic': 41842, 'Republican': 86112, 'Total': 158445}, 'AZ': {'Democratic': 246843, 'Republican': 529688, 'Total': 873945}, 'AR': {'Democratic': 398041, 'Republican': 403164, 'Total': 837582}, 'CA': {'Democratic': 3083661, 'Republican': 4524858, 'Total': 8587063}, 'CO': {'Democratic': 367973, 'Republican': 652264, 'Total': 1184415}, 'CT': {'Democratic': 541732, 'Republican': 677210, 'Total': 1406285}, 'DE': {'Democratic': 105754, 'Republican': 111252, 'Total': 235668}, 'DC': {'Democratic': 130231, 'Republican': 23313, 'Total': 173889}, 'FL': {'Democratic': 1419475, 'Republican': 2046951, 'Total': 3687026}, 'GA': {'Democratic': 890733, 'Republican': 654168, 'Total': 1597467}, 'HI': {'Democratic': 135879, 'Republican': 130112, 'Total': 303287}, 'ID': {'Democratic': 110192, 'Republican': 290699, 'Total': 437431}, 'IL': {'Democratic': 1981413, 'Republican': 2358049, 'Total': 4749721}, 'IN': {'Democratic': 844197, 'Republican': 1255656, 'Total': 2242033}, 'IA': {'Democratic': 508672, 'Republican': 676026, 'Total': 1317661}, 'KS': {'Democratic': 326150, 'Republican': 566812, 'Total': 979795}, 'KY': {'Democratic': 616417, 'Republican': 635274, 'Total': 1294627}, 'LA': {'Democratic': 708453, 'Republican': 792853, 'Total': 1548591}, 'ME': {'Democratic': 220974, 'Republican': 238522, 'Total': 523011}, 'MD': {'Democratic': 726161, 'Republican': 680606, 'Total': 1540496}, 'MA': {'Democratic': 1053802, 'Republican': 1057631, 'Total': 2524298}, 'MI': {'Democratic': 1661532, 'Republican': 1915225, 'Total': 3909725}, 'MN': {'Democratic': 954174, 'Republican': 873241, 'Total': 2051953}, 'MS': {'Democratic': 429281, 'Republican': 441089, 'Total': 892620}, 'MO': {'Democratic': 931182, 'Republican': 1074181, 'Total': 2099824}, 'MT': {'Democratic': 118032, 'Republican': 206814, 'Total': 363952}, 'NE': {'Democratic': 166851, 'Republican': 419937, 'Total': 640854}, 'NV': {'Democratic': 66666, 'Republican': 155017, 'Total': 247885}, 'NH': {'Democratic': 108864, 'Republican': 221705, 'Total': 383999}, 'NJ': {'Democratic': 1147364, 'Republican': 1546557, 'Total': 2975684}, 'NM': {'Democratic': 167826, 'Republican': 250779, 'Total': 456237}, 'NY': {'Democratic': 2728372, 'Republican': 2893831, 'Total': 6201959}, 'NC': {'Democratic': 875635, 'Republican': 915018, 'Total': 1855833}, 'ND': {'Democratic': 79189, 'Republican': 193695, 'Total': 301545}, 'OH': {'Democratic': 1752414, 'Republican': 2206545, 'Total': 4283603}, 'OK': {'Democratic': 402026, 'Republican': 695570, 'Total': 1149708}, 'OR': {'Democratic': 456890, 'Republican': 571044, 'Total': 1181516}, 'PA': {'Democratic': 1937540, 'Republican': 2261872, 'Total': 4561501}, 'RI': {'Democratic': 198342, 'Republican': 154793, 'Total': 416072}, 'SC': {'Democratic': 427560, 'Republican': 441207, 'Total': 890083}, 'SD': {'Democratic': 103855, 'Republican': 198343, 'Total': 327703}, 'TN': {'Democratic': 783051, 'Republican': 787761, 'Total': 1617616}, 'TX': {'Democratic': 1881147, 'Republican': 2510705, 'Total': 4541637}, 'UT': {'Democratic': 124266, 'Republican': 439687, 'Total': 604222}, 'VT': {'Democratic': 81891, 'Republican': 94598, 'Total': 213207}, 'VA': {'Democratic': 752174, 'Republican': 989609, 'Total': 1866032}, 'WA': {'Democratic': 650193, 'Republican': 865244, 'Total': 1742394}, 'WV': {'Democratic': 367462, 'Republican': 334206, 'Total': 737715}, 'WI': {'Democratic': 981584, 'Republican': 1088845, 'Total': 2273221}, 'WY': {'Democratic': 49427, 'Republican': 110700, 'Total': 176713}, '_COLORS': {'Democratic': 'Blue', 'Republican': 'Red'}}, '1984': {'AL': {'Democratic': 551899, 'Republican': 872849, 'Total': 1441713}, 'AK': {'Democratic': 62007, 'Republican': 138377, 'Total': 207605}, 'AZ': {'Democratic': 333854, 'Republican': 681416, 'Total': 1025897}, 'AR': {'Democratic': 338646, 'Republican': 534774, 'Total': 884406}, 'CA': {'Democratic': 3922519, 'Republican': 5467009, 'Total': 9505423}, 'CO': {'Democratic': 454974, 'Republican': 821818, 'Total': 1295381}, 'CT': {'Democratic': 569597, 'Republican': 890877, 'Total': 1466900}, 'DE': {'Democratic': 101656, 'Republican': 152190, 'Total': 254572}, 'DC': {'Democratic': 180408, 'Republican': 29009, 'Total': 211288}, 'FL': {'Democratic': 1448816, 'Republican': 2730350, 'Total': 4180051}, 'GA': {'Democratic': 706628, 'Republican': 1068722, 'Total': 1776093}, 'HI': {'Democratic': 147154, 'Republican': 185050, 'Total': 335846}, 'ID': {'Democratic': 108510, 'Republican': 297523, 'Total': 411144}, 'IL': {'Democratic': 2086499, 'Republican': 2707103, 'Total': 4819088}, 'IN': {'Democratic': 841481, 'Republican': 1377230, 'Total': 2233069}, 'IA': {'Democratic': 605620, 'Republican': 703088, 'Total': 1319805}, 'KS': {'Democratic': 333149, 'Republican': 677296, 'Total': 1021991}, 'KY': {'Democratic': 539589, 'Republican': 822782, 'Total': 1370461}, 'LA': {'Democratic': 651586, 'Republican': 1037299, 'Total': 1706822}, 'ME': {'Democratic': 214515, 'Republican': 336500, 'Total': 553144}, 'MD': {'Democratic': 787935, 'Republican': 879918, 'Total': 1675873}, 'MA': {'Democratic': 1239606, 'Republican': 1310936, 'Total': 2559453}, 'MI': {'Democratic': 1529638, 'Republican': 2251571, 'Total': 3801658}, 'MN': {'Democratic': 1036364, 'Republican': 1032603, 'Total': 2084449}, 'MS': {'Democratic': 352192, 'Republican': 581477, 'Total': 940192}, 'MO': {'Democratic': 848583, 'Republican': 1274188, 'Total': 2122771}, 'MT': {'Democratic': 146742, 'Republican': 232450, 'Total': 384377}, 'NE': {'Democratic': 187866, 'Republican': 460054, 'Total': 652090}, 'NV': {'Democratic': 91655, 'Republican': 188770, 'Total': 286667}, 'NH': {'Democratic': 120395, 'Republican': 267051, 'Total': 388954}, 'NJ': {'Democratic': 1261323, 'Republican': 1933630, 'Total': 3217862}, 'NM': {'Democratic': 201769, 'Republican': 307101, 'Total': 514370}, 'NY': {'Democratic': 3119609, 'Republican': 3664763, 'Total': 6806810}, 'NC': {'Democratic': 824287, 'Republican': 1346481, 'Total': 2175361}, 'ND': {'Democratic': 104429, 'Republican': 200336, 'Total': 308971}, 'OH': {'Democratic': 1825440, 'Republican': 2678560, 'Total': 4547619}, 'OK': {'Democratic': 385080, 'Republican': 861530, 'Total': 1255676}, 'OR': {'Democratic': 536479, 'Republican': 685700, 'Total': 1226527}, 'PA': {'Democratic': 2228131, 'Republican': 2584323, 'Total': 4844903}, 'RI': {'Democratic': 197106, 'Republican': 212080, 'Total': 410492}, 'SC': {'Democratic': 344470, 'Republican': 615539, 'Total': 968540}, 'SD': {'Democratic': 116113, 'Republican': 200267, 'Total': 317867}, 'TN': {'Democratic': 711714, 'Republican': 990212, 'Total': 1711993}, 'TX': {'Democratic': 1949276, 'Republican': 3433428, 'Total': 5397571}, 'UT': {'Democratic': 155369, 'Republican': 469105, 'Total': 629656}, 'VT': {'Democratic': 95730, 'Republican': 135865, 'Total': 234561}, 'VA': {'Democratic': 796250, 'Republican': 1337078, 'Total': 2146635}, 'WA': {'Democratic': 807352, 'Republican': 1051670, 'Total': 1883910}, 'WV': {'Democratic': 328125, 'Republican': 405483, 'Total': 735742}, 'WI': {'Democratic': 995847, 'Republican': 1198800, 'Total': 2212016}, 'WY': {'Democratic': 53370, 'Republican': 133241, 'Total': 188968}, '_COLORS': {'Democratic': 'Blue', 'Republican': 'Red'}}, '1988': {'AL': {'Democratic': 549506, 'Republican': 815576, 'Total': 1378476}, 'AK': {'Democratic': 72584, 'Republican': 119251, 'Total': 200116}, 'AZ': {'Democratic': 454029, 'Republican': 702541, 'Total': 1171873}, 'AR': {'Democratic': 349237, 'Republican': 466578, 'Total': 827738}, 'CA': {'Democratic': 4702233, 'Republican': 5054917, 'Total': 9887064}, 'CO': {'Democratic': 621453, 'Republican': 728177, 'Total': 1372394}, 'CT': {'Democratic': 676584, 'Republican': 750241, 'Total': 1443394}, 'DE': {'Democratic': 108647, 'Republican': 139639, 'Total': 249891}, 'DC': {'Democratic': 159407, 'Republican': 27590, 'Total': 192877}, 'FL': {'Democratic': 1656701, 'Republican': 2618885, 'Total': 4302313}, 'GA': {'Democratic': 714792, 'Republican': 1081331, 'Total': 1809672}, 'HI': {'Democratic': 192364, 'Republican': 158625, 'Total': 354461}, 'ID': {'Democratic': 147272, 'Republican': 253881, 'Total': 408968}, 'IL': {'Democratic': 2215940, 'Republican': 2310939, 'Total': 4559120}, 'IN': {'Democratic': 860643, 'Republican': 1297763, 'Total': 2168621}, 'IA': {'Democratic': 670557, 'Republican': 545355, 'Total': 1225614}, 'KS': {'Democratic': 422636, 'Republican': 554049, 'Total': 993044}, 'KY': {'Democratic': 580368, 'Republican': 734281, 'Total': 1322517}, 'LA': {'Democratic': 734281, 'Republican': 883702, 'Total': 1628202}, 'ME': {'Democratic': 243569, 'Republican': 307131, 'Total': 555035}, 'MD': {'Democratic': 826304, 'Republican': 876167, 'Total': 1714358}, 'MA': {'Democratic': 1401406, 'Republican': 1194644, 'Total': 2632805}, 'MI': {'Democratic': 1675783, 'Republican': 1965486, 'Total': 3669163}, 'MN': {'Democratic': 1109471, 'Republican': 962337, 'Total': 2096790}, 'MS': {'Democratic': 363921, 'Republican': 557890, 'Total': 931527}, 'MO': {'Democratic': 1001619, 'Republican': 1084953, 'Total': 2093228}, 'MT': {'Democratic': 168936, 'Republican': 190412, 'Total': 365674}, 'NE': {'Democratic': 259646, 'Republican': 398447, 'Total': 662372}, 'NV': {'Democratic': 132738, 'Republican': 206040, 'Total': 350067}, 'NH': {'Democratic': 163696, 'Republican': 281537, 'Total': 450525}, 'NJ': {'Democratic': 1320352, 'Republican': 1743192, 'Total': 3099553}, 'NM': {'Democratic': 244497, 'Republican': 270341, 'Total': 521287}, 'NY': {'Democratic': 3347882, 'Republican': 3081871, 'Total': 6485683}, 'NC': {'Democratic': 890167, 'Republican': 1237258, 'Total': 2134370}, 'ND': {'Democratic': 127739, 'Republican': 166559, 'Total': 297261}, 'OH': {'Democratic': 1939629, 'Republican': 2416549, 'Total': 4393699}, 'OK': {'Democratic': 483423, 'Republican': 678367, 'Total': 1171036}, 'OR': {'Democratic': 616206, 'Republican': 560126, 'Total': 1201694}, 'PA': {'Democratic': 2194944, 'Republican': 2300087, 'Total': 4536251}, 'RI': {'Democratic': 225123, 'Republican': 177761, 'Total': 404620}, 'SC': {'Democratic': 370554, 'Republican': 606443, 'Total': 986009}, 'SD': {'Democratic': 145560, 'Republican': 165415, 'Total': 312991}, 'TN': {'Democratic': 679794, 'Republican': 947233, 'Total': 1636250}, 'TX': {'Democratic': 2352748, 'Republican': 3036829, 'Total': 5427410}, 'UT': {'Democratic': 207343, 'Republican': 428442, 'Total': 647008}, 'VT': {'Democratic': 115775, 'Republican': 124331, 'Total': 243333}, 'VA': {'Democratic': 859799, 'Republican': 1309162, 'Total': 2191609}, 'WA': {'Democratic': 933516, 'Republican': 903835, 'Total': 1865253}, 'WV': {'Democratic': 341016, 'Republican': 310065, 'Total': 653311}, 'WI': {'Democratic': 1126794, 'Republican': 1047499, 'Total': 2191608}, 'WY': {'Democratic': 67113, 'Republican': 106867, 'Total': 176551}, '_COLORS': {'Democratic': 'Blue', 'Republican': 'Red'}}, '1992': {'AL': {'Democratic': 690080, 'Republican': 804283, 'Total': 1688060}, 'AK': {'Democratic': 78294, 'Republican': 102000, 'Total': 258506}, 'AZ': {'Democratic': 543050, 'Republican': 572086, 'Total': 1487006}, 'AR': {'Democratic': 505823, 'Republican': 337324, 'Total': 950653}, 'CA': {'Democratic': 5121325, 'Republican': 3630574, 'Total': 11131721}, 'CO': {'Democratic': 629681, 'Republican': 562850, 'Total': 1569180}, 'CT': {'Democratic': 682318, 'Republican': 578313, 'Total': 1616332}, 'DE': {'Democratic': 126054, 'Republican': 102313, 'Total': 289620}, 'DC': {'Democratic': 192619, 'Republican': 20698, 'Total': 227572}, 'FL': {'Democratic': 2072698, 'Republican': 2173310, 'Total': 5314392}, 'GA': {'Democratic': 1008966, 'Republican': 995252, 'Total': 2321133}, 'HI': {'Democratic': 179310, 'Republican': 136822, 'Total': 372842}, 'ID': {'Democratic': 137013, 'Republican': 202645, 'Total': 482114}, 'IL': {'Democratic': 2453350, 'Republican': 1734096, 'Total': 5050157}, 'IN': {'Democratic': 848420, 'Republican': 989375, 'Total': 2305871}, 'IA': {'Democratic': 586353, 'Republican': 504891, 'Total': 1354607}, 'KS': {'Democratic': 390434, 'Republican': 449951, 'Total': 1157256}, 'KY': {'Democratic': 665104, 'Republican': 617178, 'Total': 1492900}, 'LA': {'Democratic': 815971, 'Republican': 733386, 'Total': 1790017}, 'ME': {'Democratic': 263420, 'Republican': 206504, 'Total': 679499}, 'MD': {'Democratic': 988571, 'Republican': 707094, 'Total': 1985046}, 'MA': {'Democratic': 1318662, 'Republican': 805049, 'Total': 2773574}, 'MI': {'Democratic': 1871182, 'Republican': 1554940, 'Total': 4274673}, 'MN': {'Democratic': 1020997, 'Republican': 747841, 'Total': 2347948}, 'MS': {'Democratic': 400258, 'Republican': 487793, 'Total': 981793}, 'MO': {'Democratic': 1053873, 'Republican': 811159, 'Total': 2391270}, 'MT': {'Democratic': 154507, 'Republican': 144207, 'Total': 410583}, 'NE': {'Democratic': 217344, 'Republican': 344346, 'Total': 739283}, 'NV': {'Democratic': 189148, 'Republican': 175828, 'Total': 506318}, 'NH': {'Democratic': 209040, 'Republican': 202484, 'Total': 537215}, 'NJ': {'Democratic': 1436206, 'Republican': 1356865, 'Total': 3343594}, 'NM': {'Democratic': 261617, 'Republican': 212824, 'Total': 569986}, 'NY': {'Democratic': 3444450, 'Republican': 2346649, 'Total': 6926925}, 'NC': {'Democratic': 1114042, 'Republican': 1134661, 'Total': 2611850}, 'ND': {'Democratic': 99168, 'Republican': 136244, 'Total': 308133}, 'OH': {'Democratic': 1984942, 'Republican': 1894310, 'Total': 4939964}, 'OK': {'Democratic': 473066, 'Republican': 592929, 'Total': 1390359}, 'OR': {'Democratic': 621314, 'Republican': 475757, 'Total': 1462643}, 'PA': {'Democratic': 2239164, 'Republican': 1791841, 'Total': 4959810}, 'RI': {'Democratic': 213299, 'Republican': 131601, 'Total': 453477}, 'SC': {'Democratic': 479514, 'Republican': 577507, 'Total': 1202527}, 'SD': {'Democratic': 124888, 'Republican': 136718, 'Total': 336254}, 'TN': {'Democratic': 933521, 'Republican': 841300, 'Total': 1982638}, 'TX': {'Democratic': 2281815, 'Republican': 2496071, 'Total': 6154018}, 'UT': {'Democratic': 183429, 'Republican': 322632, 'Total': 743998}, 'VT': {'Democratic': 133592, 'Republican': 88122, 'Total': 289701}, 'VA': {'Democratic': 1038650, 'Republican': 1150517, 'Total': 2558665}, 'WA': {'Democratic': 993037, 'Republican': 731234, 'Total': 2287565}, 'WV': {'Democratic': 331001, 'Republican': 241974, 'Total': 683677}, 'WI': {'Democratic': 1041066, 'Republican': 930855, 'Total': 2531114}, 'WY': {'Democratic': 68160, 'Republican': 79347, 'Total': 199884}, '_COLORS': {'Democratic': 'Blue', 'Republican': 'Red'}}, '1996': {'AL': {'Democratic': 662165, 'Republican': 769044, 'Total': 1534349}, 'AK': {'Democratic': 80380, 'Republican': 122746, 'Total': 241620}, 'AZ': {'Democratic': 653288, 'Republican': 622073, 'Total': 1404405}, 'AR': {'Democratic': 475171, 'Republican': 325416, 'Total': 884262}, 'CA': {'Democratic': 5119835, 'Republican': 3828380, 'Total': 10019484}, 'CO': {'Democratic': 671152, 'Republican': 691848, 'Total': 1510704}, 'CT': {'Democratic': 735740, 'Republican': 483109, 'Total': 1392614}, 'DE': {'Democratic': 140355, 'Republican': 99062, 'Total': 270845}, 'DC': {'Democratic': 158220, 'Republican': 17339, 'Total': 185726}, 'FL': {'Democratic': 2546870, 'Republican': 2244536, 'Total': 5303794}, 'GA': {'Democratic': 1053849, 'Republican': 1080843, 'Total': 2299071}, 'HI': {'Democratic': 205012, 'Republican': 113943, 'Total': 360120}, 'ID': {'Democratic': 165443, 'Republican': 256595, 'Total': 491719}, 'IL': {'Democratic': 2341744, 'Republican': 1587021, 'Total': 4311391}, 'IN': {'Democratic': 887424, 'Republican': 1006693, 'Total': 2135842}, 'IA': {'Democratic': 620258, 'Republican': 492644, 'Total': 1234075}, 'KS': {'Democratic': 387659, 'Republican': 583245, 'Total': 1074300}, 'KY': {'Democratic': 636614, 'Republican': 623283, 'Total': 1388708}, 'LA': {'Democratic': 927837, 'Republican': 712586, 'Total': 1783959}, 'ME': {'Democratic': 312788, 'Republican': 186378, 'Total': 605897}, 'MD': {'Democratic': 966207, 'Republican': 681530, 'Total': 1780870}, 'MA': {'Democratic': 1571763, 'Republican': 718107, 'Total': 2556785}, 'MI': {'Democratic': 1989653, 'Republican': 1481212, 'Total': 3848844}, 'MN': {'Democratic': 1120438, 'Republican': 766476, 'Total': 2192640}, 'MS': {'Democratic': 394022, 'Republican': 439838, 'Total': 893857}, 'MO': {'Democratic': 1025935, 'Republican': 890016, 'Total': 2158065}, 'MT': {'Democratic': 167922, 'Republican': 179652, 'Total': 407261}, 'NE': {'Democratic': 236761, 'Republican': 363467, 'Total': 677415}, 'NV': {'Democratic': 203974, 'Republican': 199244, 'Total': 464279}, 'NH': {'Democratic': 246214, 'Republican': 196532, 'Total': 499175}, 'NJ': {'Democratic': 1652329, 'Republican': 1103078, 'Total': 3075807}, 'NM': {'Democratic': 273495, 'Republican': 232751, 'Total': 556074}, 'NY': {'Democratic': 3756177, 'Republican': 1933492, 'Total': 6316129}, 'NC': {'Democratic': 1107849, 'Republican': 1225938, 'Total': 2515807}, 'ND': {'Democratic': 106905, 'Republican': 125050, 'Total': 266411}, 'OH': {'Democratic': 2148222, 'Republican': 1859883, 'Total': 4534434}, 'OK': {'Democratic': 488105, 'Republican': 582315, 'Total': 1206713}, 'OR': {'Democratic': 649641, 'Republican': 538152, 'Total': 1377760}, 'PA': {'Democratic': 2215819, 'Republican': 1801169, 'Total': 4506118}, 'RI': {'Democratic': 233050, 'Republican': 104683, 'Total': 390284}, 'SC': {'Democratic': 504051, 'Republican': 573458, 'Total': 1149457}, 'SD': {'Democratic': 139333, 'Republican': 150543, 'Total': 323826}, 'TN': {'Democratic': 909146, 'Republican': 863530, 'Total': 1894105}, 'TX': {'Democratic': 2459683, 'Republican': 2736167, 'Total': 5611644}, 'UT': {'Democratic': 221633, 'Republican': 361911, 'Total': 665629}, 'VT': {'Democratic': 137894, 'Republican': 80352, 'Total': 258449}, 'VA': {'Democratic': 1091060, 'Republican': 1138350, 'Total': 2416642}, 'WA': {'Democratic': 1123323, 'Republican': 840712, 'Total': 2253837}, 'WV': {'Democratic': 327812, 'Republican': 233946, 'Total': 636459}, 'WI': {'Democratic': 1071971, 'Republican': 845029, 'Total': 2196169}, 'WY': {'Democratic': 77934, 'Republican': 105388, 'Total': 211571}, '_COLORS': {'Democratic': 'Blue', 'Republican': 'Red'}}, '2000': {'AL': {'Democratic': 692611, 'Republican': 941173, 'Total': 1666272}, 'AK': {'Democratic': 79004, 'Republican': 167398, 'Total': 285560}, 'AZ': {'Democratic': 685341, 'Republican': 781652, 'Total': 1532016}, 'AR': {'Democratic': 422768, 'Republican': 472940, 'Total': 921781}, 'CA': {'Democratic': 5861203, 'Republican': 4567429, 'Total': 10965856}, 'CO': {'Democratic': 738227, 'Republican': 883748, 'Total': 1741368}, 'CT': {'Democratic': 816015, 'Republican': 561094, 'Total': 1459525}, 'DE': {'Democratic': 180068, 'Republican': 137288, 'Total': 327622}, 'DC': {'Democratic': 171923, 'Republican': 18073, 'Total': 201894}, 'FL': {'Democratic': 2912253, 'Republican': 2912790, 'Total': 5963110}, 'GA': {'Democratic': 1116230, 'Republican': 1419720, 'Total': 2596804}, 'HI': {'Democratic': 205286, 'Republican': 137845, 'Total': 367951}, 'ID': {'Democratic': 138637, 'Republican': 336937, 'Total': 501621}, 'IL': {'Democratic': 2589026, 'Republican': 2019421, 'Total': 4742123}, 'IN': {'Democratic': 901980, 'Republican': 1245836, 'Total': 2199302}, 'IA': {'Democratic': 638517, 'Republican': 634373, 'Total': 1315563}, 'KS': {'Democratic': 399276, 'Republican': 622332, 'Total': 1072218}, 'KY': {'Democratic': 638898, 'Republican': 872492, 'Total': 1544187}, 'LA': {'Democratic': 792344, 'Republican': 927871, 'Total': 1765656}, 'ME': {'Democratic': 319951, 'Republican': 286616, 'Total': 651817}, 'MD': {'Democratic': 1145782, 'Republican': 813797, 'Total': 2025480}, 'MA': {'Democratic': 1616487, 'Republican': 878502, 'Total': 2702984}, 'MI': {'Democratic': 2170418, 'Republican': 1953139, 'Total': 4232501}, 'MN': {'Democratic': 1168266, 'Republican': 1109659, 'Total': 2438685}, 'MS': {'Democratic': 404614, 'Republican': 572844, 'Total': 994184}, 'MO': {'Democratic': 1111138, 'Republican': 1189924, 'Total': 2359892}, 'MT': {'Democratic': 137126, 'Republican': 240178, 'Total': 410997}, 'NE': {'Democratic': 231780, 'Republican': 433862, 'Total': 697019}, 'NV': {'Democratic': 279978, 'Republican': 301575, 'Total': 608970}, 'NH': {'Democratic': 266348, 'Republican': 273559, 'Total': 569081}, 'NJ': {'Democratic': 1788850, 'Republican': 1284173, 'Total': 3187226}, 'NM': {'Democratic': 286783, 'Republican': 286417, 'Total': 598605}, 'NY': {'Democratic': 4107697, 'Republican': 2403374, 'Total': 6821999}, 'NC': {'Democratic': 1257692, 'Republican': 1631163, 'Total': 2911262}, 'ND': {'Democratic': 95284, 'Republican': 174852, 'Total': 288256}, 'OH': {'Democratic': 2186190, 'Republican': 2351209, 'Total': 4705457}, 'OK': {'Democratic': 474276, 'Republican': 744337, 'Total': 1234229}, 'OR': {'Democratic': 720342, 'Republican': 713577, 'Total': 1533968}, 'PA': {'Democratic': 2485967, 'Republican': 2281127, 'Total': 4913119}, 'RI': {'Democratic': 249508, 'Republican': 130555, 'Total': 409112}, 'SC': {'Democratic': 565561, 'Republican': 785937, 'Total': 1382717}, 'SD': {'Democratic': 118804, 'Republican': 190700, 'Total': 316269}, 'TN': {'Democratic': 981720, 'Republican': 1061949, 'Total': 2076181}, 'TX': {'Democratic': 2433746, 'Republican': 3799639, 'Total': 6407637}, 'UT': {'Democratic': 203053, 'Republican': 515096, 'Total': 770754}, 'VT': {'Democratic': 149022, 'Republican': 119775, 'Total': 294308}, 'VA': {'Democratic': 1217290, 'Republican': 1437490, 'Total': 2739447}, 'WA': {'Democratic': 1247652, 'Republican': 1108864, 'Total': 2487433}, 'WV': {'Democratic': 295497, 'Republican': 336475, 'Total': 648124}, 'WI': {'Democratic': 1242987, 'Republican': 1237279, 'Total': 2598607}, 'WY': {'Democratic': 60481, 'Republican': 147947, 'Total': 218351}, '_COLORS': {'Democratic': 'Blue', 'Republican': 'Red'}}, '2004': {'AL': {'Democratic': 693933, 'Republican': 1176394, 'Total': 1883449}, 'AK': {'Democratic': 111025, 'Republican': 190889, 'Total': 312598}, 'AZ': {'Democratic': 893524, 'Republican': 1104294, 'Total': 2012585}, 'AR': {'Democratic': 469953, 'Republican': 572898, 'Total': 1054945}, 'CA': {'Democratic': 6745485, 'Republican': 5509826, 'Total': 12421353}, 'CO': {'Democratic': 1001732, 'Republican': 1101255, 'Total': 2130330}, 'CT': {'Democratic': 857488, 'Republican': 693826, 'Total': 1578769}, 'DE': {'Democratic': 200152, 'Republican': 171660, 'Total': 375190}, 'DC': {'Democratic': 202970, 'Republican': 21256, 'Total': 227586}, 'FL': {'Democratic': 3583544, 'Republican': 3964522, 'Total': 7609810}, 'GA': {'Democratic': 1366149, 'Republican': 1914254, 'Total': 3301875}, 'HI': {'Democratic': 231708, 'Republican': 194191, 'Total': 429013}, 'ID': {'Democratic': 181098, 'Republican': 409235, 'Total': 598447}, 'IL': {'Democratic': 2891550, 'Republican': 2345946, 'Total': 5274322}, 'IN': {'Democratic': 969011, 'Republican': 1479438, 'Total': 2468002}, 'IA': {'Democratic': 741898, 'Republican': 751957, 'Total': 1506908}, 'KS': {'Democratic': 434993, 'Republican': 736456, 'Total': 1187756}, 'KY': {'Democratic': 712733, 'Republican': 1069439, 'Total': 1795882}, 'LA': {'Democratic': 820299, 'Republican': 1102169, 'Total': 1943106}, 'ME': {'Democratic': 396842, 'Republican': 330201, 'Total': 740752}, 'MD': {'Democratic': 1334493, 'Republican': 1024703, 'Total': 2386678}, 'MA': {'Democratic': 1803800, 'Republican': 1071109, 'Total': 2912388}, 'MI': {'Democratic': 2479183, 'Republican': 2313746, 'Total': 4839252}, 'MN': {'Democratic': 1445014, 'Republican': 1346695, 'Total': 2828387}, 'MS': {'Democratic': 458094, 'Republican': 684981, 'Total': 1152145}, 'MO': {'Democratic': 1259171, 'Republican': 1455713, 'Total': 2731364}, 'MT': {'Democratic': 173710, 'Republican': 266063, 'Total': 450445}, 'NE': {'Democratic': 254328, 'Republican': 512814, 'Total': 778186}, 'NV': {'Democratic': 397190, 'Republican': 418690, 'Total': 829587}, 'NH': {'Democratic': 340511, 'Republican': 331237, 'Total': 677738}, 'NJ': {'Democratic': 1911430, 'Republican': 1670003, 'Total': 3611691}, 'NM': {'Democratic': 370942, 'Republican': 376930, 'Total': 756304}, 'NY': {'Democratic': 4314280, 'Republican': 2962567, 'Total': 7391036}, 'NC': {'Democratic': 1525849, 'Republican': 1961166, 'Total': 3501007}, 'ND': {'Democratic': 111052, 'Republican': 196651, 'Total': 312833}, 'OH': {'Democratic': 2741167, 'Republican': 2859768, 'Total': 5627908}, 'OK': {'Democratic': 503966, 'Republican': 959792, 'Total': 1463758}, 'OR': {'Democratic': 943163, 'Republican': 866831, 'Total': 1836782}, 'PA': {'Democratic': 2938095, 'Republican': 2793847, 'Total': 5769590}, 'RI': {'Democratic': 259765, 'Republican': 169046, 'Total': 437134}, 'SC': {'Democratic': 661699, 'Republican': 937974, 'Total': 1617730}, 'SD': {'Democratic': 149244, 'Republican': 232584, 'Total': 388215}, 'TN': {'Democratic': 1036477, 'Republican': 1384375, 'Total': 2437319}, 'TX': {'Democratic': 2832704, 'Republican': 4526917, 'Total': 7410765}, 'UT': {'Democratic': 241199, 'Republican': 663742, 'Total': 927844}, 'VT': {'Democratic': 184067, 'Republican': 121180, 'Total': 312309}, 'VA': {'Democratic': 1454742, 'Republican': 1716959, 'Total': 3198367}, 'WA': {'Democratic': 1510201, 'Republican': 1304894, 'Total': 2859084}, 'WV': {'Democratic': 326541, 'Republican': 423778, 'Total': 755887}, 'WI': {'Democratic': 1489504, 'Republican': 1478120, 'Total': 2997007}, 'WY': {'Democratic': 70776, 'Republican': 167629, 'Total': 243428}, '_COLORS': {'Democratic': 'Blue', 'Republican': 'Red'}}, '2008': {'AL': {'Democratic': 813479, 'Republican': 1266546, 'Total': 2099819}, 'AK': {'Democratic': 123594, 'Republican': 193841, 'Total': 326197}, 'AZ': {'Democratic': 1034707, 'Republican': 1230111, 'Total': 2293475}, 'AR': {'Democratic': 422310, 'Republican': 638017, 'Total': 1086617}, 'CA': {'Democratic': 8274473, 'Republican': 5011781, 'Total': 13561900}, 'CO': {'Democratic': 1288633, 'Republican': 1073629, 'Total': 2401462}, 'CT': {'Democratic': 997772, 'Republican': 629428, 'Total': 1646797}, 'DE': {'Democratic': 255459, 'Republican': 152374, 'Total': 412412}, 'DC': {'Democratic': 245800, 'Republican': 17367, 'Total': 265853}, 'FL': {'Democratic': 4282074, 'Republican': 4045624, 'Total': 8390744}, 'GA': {'Democratic': 1844123, 'Republican': 2048759, 'Total': 3924486}, 'HI': {'Democratic': 325871, 'Republican': 120566, 'Total': 453568}, 'ID': {'Democratic': 236440, 'Republican': 403012, 'Total': 655122}, 'IL': {'Democratic': 3419348, 'Republican': 2031179, 'Total': 5522371}, 'IN': {'Democratic': 1374039, 'Republican': 1345648, 'Total': 2751054}, 'IA': {'Democratic': 828940, 'Republican': 682379, 'Total': 1537123}, 'KS': {'Democratic': 514765, 'Republican': 699655, 'Total': 1235872}, 'KY': {'Democratic': 751985, 'Republican': 1048462, 'Total': 1826620}, 'LA': {'Democratic': 782989, 'Republican': 1148275, 'Total': 1960761}, 'ME': {'Democratic': 421923, 'Republican': 295273, 'Total': 731163}, 'MD': {'Democratic': 1629467, 'Republican': 959862, 'Total': 2631596}, 'MA': {'Democratic': 1904097, 'Republican': 1108854, 'Total': 3080985}, 'MI': {'Democratic': 2872579, 'Republican': 2048639, 'Total': 5001766}, 'MN': {'Democratic': 1573354, 'Republican': 1275409, 'Total': 2910369}, 'MS': {'Democratic': 554662, 'Republican': 724597, 'Total': 1289865}, 'MO': {'Democratic': 1441911, 'Republican': 1445814, 'Total': 2925205}, 'MT': {'Democratic': 231667, 'Republican': 242763, 'Total': 490302}, 'NE': {'Democratic': 333319, 'Republican': 452979, 'Total': 801281}, 'NV': {'Democratic': 533736, 'Republican': 412827, 'Total': 967848}, 'NH': {'Democratic': 384826, 'Republican': 316534, 'Total': 710970}, 'NJ': {'Democratic': 2215422, 'Republican': 1613207, 'Total': 3868237}, 'NM': {'Democratic': 472422, 'Republican': 346832, 'Total': 830158}, 'NY': {'Democratic': 4804945, 'Republican': 2752771, 'Total': 7640931}, 'NC': {'Democratic': 2142651, 'Republican': 2128474, 'Total': 4310789}, 'ND': {'Democratic': 141278, 'Republican': 168601, 'Total': 316621}, 'OH': {'Democratic': 2940044, 'Republican': 2677820, 'Total': 5708350}, 'OK': {'Democratic': 502496, 'Republican': 960165, 'Total': 1462661}, 'OR': {'Democratic': 1037291, 'Republican': 738475, 'Total': 1827864}, 'PA': {'Democratic': 3276363, 'Republican': 2655885, 'Total': 6013272}, 'RI': {'Democratic': 296571, 'Republican': 165391, 'Total': 471766}, 'SC': {'Democratic': 862449, 'Republican': 1034896, 'Total': 1920969}, 'SD': {'Democratic': 170924, 'Republican': 203054, 'Total': 381975}, 'TN': {'Democratic': 1087437, 'Republican': 1479178, 'Total': 2599749}, 'TX': {'Democratic': 3528633, 'Republican': 4479328, 'Total': 8077795}, 'UT': {'Democratic': 327670, 'Republican': 596030, 'Total': 952370}, 'VT': {'Democratic': 219262, 'Republican': 98974, 'Total': 325046}, 'VA': {'Democratic': 1959532, 'Republican': 1725005, 'Total': 3723260}, 'WA': {'Democratic': 1750848, 'Republican': 1229216, 'Total': 3036878}, 'WV': {'Democratic': 303857, 'Republican': 397466, 'Total': 713451}, 'WI': {'Democratic': 1677211, 'Republican': 1262393, 'Total': 2983417}, 'WY': {'Democratic': 82868, 'Republican': 164958, 'Total': 254658}, '_COLORS': {'Democratic': 'Blue', 'Republican': 'Red'}}, '2012': {'AL': {'Democratic': 795696, 'Republican': 1255925, 'Total': 2074338}, 'AK': {'Democratic': 122640, 'Republican': 164676, 'Total': 300495}, 'AZ': {'Democratic': 1025232, 'Republican': 1233654, 'Total': 2299254}, 'AR': {'Democratic': 394409, 'Republican': 647744, 'Total': 1069468}, 'CA': {'Democratic': 7854285, 'Republican': 4839958, 'Total': 13038547}, 'CO': {'Democratic': 1323101, 'Republican': 1185243, 'Total': 2569518}, 'CT': {'Democratic': 905083, 'Republican': 634892, 'Total': 1558960}, 'DE': {'Democratic': 242584, 'Republican': 165484, 'Total': 413921}, 'DC': {'Democratic': 267070, 'Republican': 21381, 'Total': 293764}, 'FL': {'Democratic': 4237756, 'Republican': 4163447, 'Total': 8474179}, 'GA': {'Democratic': 1773827, 'Republican': 2078688, 'Total': 3900050}, 'HI': {'Democratic': 306658, 'Republican': 121015, 'Total': 434697}, 'ID': {'Democratic': 212787, 'Republican': 420911, 'Total': 652274}, 'IL': {'Democratic': 3019512, 'Republican': 2135216, 'Total': 5242014}, 'IN': {'Democratic': 1152887, 'Republican': 1420543, 'Total': 2624534}, 'IA': {'Democratic': 822544, 'Republican': 730617, 'Total': 1582180}, 'KS': {'Democratic': 440726, 'Republican': 692634, 'Total': 1159971}, 'KY': {'Democratic': 679370, 'Republican': 1087190, 'Total': 1797212}, 'LA': {'Democratic': 809141, 'Republican': 1152262, 'Total': 1994065}, 'ME': {'Democratic': 401306, 'Republican': 292276, 'Total': 713180}, 'MD': {'Democratic': 1677844, 'Republican': 971869, 'Total': 2707327}, 'MA': {'Democratic': 1921290, 'Republican': 1188314, 'Total': 3167767}, 'MI': {'Democratic': 2564569, 'Republican': 2115256, 'Total': 4730961}, 'MN': {'Democratic': 1546167, 'Republican': 1320225, 'Total': 2936561}, 'MS': {'Democratic': 562949, 'Republican': 710746, 'Total': 1285584}, 'MO': {'Democratic': 1223796, 'Republican': 1482440, 'Total': 2757323}, 'MT': {'Democratic': 201839, 'Republican': 267928, 'Total': 484048}, 'NE': {'Democratic': 302081, 'Republican': 475064, 'Total': 794379}, 'NV': {'Democratic': 531373, 'Republican': 463567, 'Total': 1014918}, 'NH': {'Democratic': 369561, 'Republican': 329918, 'Total': 710972}, 'NJ': {'Democratic': 2125101, 'Republican': 1477568, 'Total': 3640292}, 'NM': {'Democratic': 415335, 'Republican': 335788, 'Total': 783758}, 'NY': {'Democratic': 4485741, 'Republican': 2490431, 'Total': 7081159}, 'NC': {'Democratic': 2178391, 'Republican': 2270395, 'Total': 4505372}, 'ND': {'Democratic': 124827, 'Republican': 188163, 'Total': 322627}, 'OH': {'Democratic': 2827709, 'Republican': 2661437, 'Total': 5580847}, 'OK': {'Democratic': 443547, 'Republican': 891325, 'Total': 1334872}, 'OR': {'Democratic': 970488, 'Republican': 754175, 'Total': 1789270}, 'PA': {'Democratic': 2990274, 'Republican': 2680434, 'Total': 5753670}, 'RI': {'Democratic': 279677, 'Republican': 157204, 'Total': 446049}, 'SC': {'Democratic': 865941, 'Republican': 1071645, 'Total': 1964118}, 'SD': {'Democratic': 145039, 'Republican': 210610, 'Total': 363815}, 'TN': {'Democratic': 960709, 'Republican': 1462330, 'Total': 2458577}, 'TX': {'Democratic': 3308124, 'Republican': 4569843, 'Total': 7993851}, 'UT': {'Democratic': 251813, 'Republican': 740600, 'Total': 1017440}, 'VT': {'Democratic': 199239, 'Republican': 92698, 'Total': 299290}, 'VA': {'Democratic': 1971820, 'Republican': 1822522, 'Total': 3854489}, 'WA': {'Democratic': 1755396, 'Republican': 1290670, 'Total': 3125516}, 'WV': {'Democratic': 238269, 'Republican': 417655, 'Total': 670438}, 'WI': {'Democratic': 1620985, 'Republican': 1407966, 'Total': 3068434}, 'WY': {'Democratic': 69286, 'Republican': 170962, 'Total': 249061}, '_COLORS': {'Democratic': 'Blue', 'Republican': 'Red'}}, '2016': {'AL': {'Democratic': 729547, 'Republican': 1318255, 'Total': 2123372}, 'AK': {'Democratic': 116454, 'Republican': 163387, 'Total': 318608}, 'AZ': {'Democratic': 1161167, 'Republican': 1252401, 'Total': 2573165}, 'AR': {'Democratic': 380494, 'Republican': 684872, 'Total': 1130676}, 'CA': {'Democratic': 8753788, 'Republican': 4483810, 'Total': 14181595}, 'CO': {'Democratic': 1338870, 'Republican': 1202484, 'Total': 2780247}, 'CT': {'Democratic': 897572, 'Republican': 673215, 'Total': 1644920}, 'DE': {'Democratic': 235603, 'Republican': 185127, 'Total': 443814}, 'DC': {'Democratic': 282830, 'Republican': 12723, 'Total': 311268}, 'FL': {'Democratic': 4504975, 'Republican': 4617886, 'Total': 9420039}, 'GA': {'Democratic': 1877963, 'Republican': 2089104, 'Total': 4114732}, 'HI': {'Democratic': 266891, 'Republican': 128847, 'Total': 428937}, 'ID': {'Democratic': 189765, 'Republican': 409055, 'Total': 690255}, 'IL': {'Democratic': 3090729, 'Republican': 2146015, 'Total': 5536424}, 'IN': {'Democratic': 1033126, 'Republican': 1557286, 'Total': 2734958}, 'IA': {'Democratic': 653669, 'Republican': 800983, 'Total': 1566031}, 'KS': {'Democratic': 427005, 'Republican': 671018, 'Total': 1184402}, 'KY': {'Democratic': 628854, 'Republican': 1202971, 'Total': 1924149}, 'LA': {'Democratic': 780154, 'Republican': 1178638, 'Total': 2029032}, 'ME': {'Democratic': 357735, 'Republican': 335593, 'Total': 747927}, 'MD': {'Democratic': 1677928, 'Republican': 943169, 'Total': 2781446}, 'MA': {'Democratic': 1995196, 'Republican': 1090893, 'Total': 3325046}, 'MI': {'Democratic': 2268839, 'Republican': 2279543, 'Total': 4799284}, 'MN': {'Democratic': 1367716, 'Republican': 1322951, 'Total': 2944813}, 'MS': {'Democratic': 485131, 'Republican': 700714, 'Total': 1209357}, 'MO': {'Democratic': 1071068, 'Republican': 1594511, 'Total': 2808605}, 'MT': {'Democratic': 177709, 'Republican': 279240, 'Total': 497147}, 'NE': {'Democratic': 284494, 'Republican': 495961, 'Total': 844227}, 'NV': {'Democratic': 539260, 'Republican': 512058, 'Total': 1125385}, 'NH': {'Democratic': 348526, 'Republican': 345790, 'Total': 744296}, 'NJ': {'Democratic': 2148278, 'Republican': 1601933, 'Total': 3874046}, 'NM': {'Democratic': 385234, 'Republican': 319667, 'Total': 798319}, 'NY': {'Democratic': 4556124, 'Republican': 2819534, 'Total': 7721453}, 'NC': {'Democratic': 2189316, 'Republican': 2362631, 'Total': 4741564}, 'ND': {'Democratic': 93758, 'Republican': 216794, 'Total': 344360}, 'OH': {'Democratic': 2394164, 'Republican': 2841005, 'Total': 5496487}, 'OK': {'Democratic': 420375, 'Republican': 949136, 'Total': 1452992}, 'OR': {'Democratic': 1002106, 'Republican': 782403, 'Total': 2001336}, 'PA': {'Democratic': 2926441, 'Republican': 2970733, 'Total': 6165478}, 'RI': {'Democratic': 252525, 'Republican': 180543, 'Total': 464144}, 'SC': {'Democratic': 855373, 'Republican': 1155389, 'Total': 2103027}, 'SD': {'Democratic': 117458, 'Republican': 227721, 'Total': 370093}, 'TN': {'Democratic': 870695, 'Republican': 1522925, 'Total': 2508027}, 'TX': {'Democratic': 3877868, 'Republican': 4685047, 'Total': 8969226}, 'UT': {'Democratic': 310676, 'Republican': 515231, 'Total': 1131430}, 'VT': {'Democratic': 178573, 'Republican': 95369, 'Total': 315067}, 'VA': {'Democratic': 1981473, 'Republican': 1769443, 'Total': 3984631}, 'WA': {'Democratic': 1742718, 'Republican': 1221747, 'Total': 3317019}, 'WV': {'Democratic': 188794, 'Republican': 489371, 'Total': 714423}, 'WI': {'Democratic': 1382536, 'Republican': 1405284, 'Total': 2976150}, 'WY': {'Democratic': 55973, 'Republican': 174419, 'Total': 255849}, '_COLORS': {'Democratic': 'Blue', 'Republican': 'Red'}}, '2020': {'AL': {'Democratic': 849624, 'Republican': 1441170, 'Total': 2323282}, 'AK': {'Democratic': 153778, 'Republican': 189951, 'Total': 359530}, 'AZ': {'Democratic': 1672143, 'Republican': 1661686, 'Total': 3387326}, 'AR': {'Democratic': 423932, 'Republican': 760647, 'Total': 1219069}, 'CA': {'Democratic': 11110250, 'Republican': 6006429, 'Total': 17500871}, 'CO': {'Democratic': 1804352, 'Republican': 1364607, 'Total': 3256980}, 'CT': {'Democratic': 1080680, 'Republican': 715291, 'Total': 1824273}, 'DE': {'Democratic': 296268, 'Republican': 200603, 'Total': 504346}, 'DC': {'Democratic': 317323, 'Republican': 18586, 'Total': 344356}, 'FL': {'Democratic': 5297045, 'Republican': 5668731, 'Total': 11067456}, 'GA': {'Democratic': 2473633, 'Republican': 2461854, 'Total': 4997716}, 'HI': {'Democratic': 366130, 'Republican': 196864, 'Total': 574469}, 'ID': {'Democratic': 287021, 'Republican': 554119, 'Total': 867884}, 'IL': {'Democratic': 3471915, 'Republican': 2446891, 'Total': 6033744}, 'IN': {'Democratic': 1242413, 'Republican': 1729516, 'Total': 3033112}, 'IA': {'Democratic': 759061, 'Republican': 897672, 'Total': 1690871}, 'KS': {'Democratic': 570323, 'Republican': 771406, 'Total': 1372303}, 'KY': {'Democratic': 772474, 'Republican': 1326646, 'Total': 2136768}, 'LA': {'Democratic': 856034, 'Republican': 1255776, 'Total': 2148062}, 'ME': {'Democratic': 435072, 'Republican': 360737, 'Total': 819461}, 'MD': {'Democratic': 1985023, 'Republican': 976414, 'Total': 3037030}, 'MA': {'Democratic': 2382202, 'Republican': 1167202, 'Total': 3631402}, 'MI': {'Democratic': 2804040, 'Republican': 2649852, 'Total': 5539302}, 'MN': {'Democratic': 1717077, 'Republican': 1484065, 'Total': 3277171}, 'MS': {'Democratic': 539508, 'Republican': 756789, 'Total': 1313894}, 'MO': {'Democratic': 1253014, 'Republican': 1718736, 'Total': 3025962}, 'MT': {'Democratic': 244786, 'Republican': 343602, 'Total': 603674}, 'NE': {'Democratic': 374583, 'Republican': 556846, 'Total': 956383}, 'NV': {'Democratic': 703486, 'Republican': 669890, 'Total': 1405376}, 'NH': {'Democratic': 424921, 'Republican': 365654, 'Total': 806182}, 'NJ': {'Democratic': 2608335, 'Republican': 1883274, 'Total': 4549353}, 'NM': {'Democratic': 501614, 'Republican': 401894, 'Total': 923965}, 'NY': {'Democratic': 5230985, 'Republican': 3244798, 'Total': 8594826}, 'NC': {'Democratic': 2684292, 'Republican': 2758775, 'Total': 5524804}, 'ND': {'Democratic': 114902, 'Republican': 235595, 'Total': 361819}, 'OH': {'Democratic': 2679165, 'Republican': 3154834, 'Total': 5922202}, 'OK': {'Democratic': 503890, 'Republican': 1020280, 'Total': 1560699}, 'OR': {'Democratic': 1340383, 'Republican': 958448, 'Total': 2374321}, 'PA': {'Democratic': 3458229, 'Republican': 3377674, 'Total': 6915283}, 'RI': {'Democratic': 307486, 'Republican': 199922, 'Total': 517757}, 'SC': {'Democratic': 1091541, 'Republican': 1385103, 'Total': 2513329}, 'SD': {'Democratic': 150471, 'Republican': 261043, 'Total': 422609}, 'TN': {'Democratic': 1143711, 'Republican': 1852475, 'Total': 3053851}, 'TX': {'Democratic': 5259126, 'Republican': 5890347, 'Total': 11315056}, 'UT': {'Democratic': 560282, 'Republican': 865140, 'Total': 1488289}, 'VT': {'Democratic': 242820, 'Republican': 112704, 'Total': 367428}, 'VA': {'Democratic': 2413568, 'Republican': 1962430, 'Total': 4460524}, 'WA': {'Democratic': 2369612, 'Republican': 1584651, 'Total': 4087631}, 'WV': {'Democratic': 235984, 'Republican': 545382, 'Total': 794731}, 'WI': {'Democratic': 1630866, 'Republican': 1610184, 'Total': 3298041}, 'WY': {'Democratic': 73491, 'Republican': 193559, 'Total': 276765}, '_COLORS': {'Democratic': 'Blue', 'Republican': 'Red'}}}, 'US_senate': {'2018': {'AL': {'Democrat': 694495, 'Republican': 1022457, 'Total': 1719589}, 'AK': {'Democrat': 125739, 'Republican': 145631, 'Total': 283134}, 'AZ': {'Democrat': 994341, 'Republican': 1330863, 'Total': 2376441}, 'AR': {'Democrat': 283218, 'Republican': 582406, 'Total': 891509}, 'CA': {'Democrat': 7721410, 'Republican': 4742825, 'Total': 12464235}, 'CO': {'Democrat': 1348888, 'Republican': 1080801, 'Total': 2525062}, 'CT': {'Democrat': 694510, 'Republican': 650138, 'Total': 1406803}, 'FL': {'Democrat': 4043723, 'Republican': 4076186, 'Total': 8220561}, 'GA': {'Democrat': 1923685, 'Republican': 1978408, 'Total': 3939409}, 'HI': {'Democrat': 244934, 'Republican': 131719, 'Total': 390843}, 'ID': {'Democrat': 231081, 'Republican': 361661, 'Total': 605131}, 'IL': {'Democrat': 2479746, 'Republican': 1765751, 'Total': 4547657}, 'IA': {'Democrat': 630986, 'Republican': 667275, 'Total': 1327638}, 'KS': {'Democrat': 506727, 'Republican': 453645, 'Total': 1055566}, 'ME': {'Democrat': 320962, 'Republican': 272311, 'Total': 630667}, 'MD': {'Democrat': 1002639, 'Republican': 1275644, 'Total': 2304512}, 'MA': {'Democrat': 885770, 'Republican': 1781341, 'Total': 2674615}, 'MI': {'Democrat': 2266193, 'Republican': 1859534, 'Total': 4250585}, 'MN': {'Democrat': 1393096, 'Republican': 1097705, 'Total': 2587287}, 'NE': {'Democrat': 286169, 'Republican': 411812, 'Total': 697981}, 'NV': {'Democrat': 480007, 'Republican': 440320, 'Total': 971799}, 'NH': {'Democrat': 262359, 'Republican': 302764, 'Total': 573602}, 'NM': {'Democrat': 398368, 'Republican': 298091, 'Total': 696459}, 'NY': {'Democrat': 3635340, 'Republican': 2207602, 'Total': 6097362}, 'OH': {'Democrat': 2070046, 'Republican': 2235825, 'Total': 4429582}, 'OK': {'Democrat': 500973, 'Republican': 644579, 'Total': 1186385}, 'OR': {'Democrat': 934498, 'Republican': 814988, 'Total': 1866997}, 'PA': {'Democrat': 2895652, 'Republican': 2039882, 'Total': 5012555}, 'RI': {'Democrat': 198122, 'Republican': 139932, 'Total': 376401}, 'SC': {'Democrat': 784182, 'Republican': 921342, 'Total': 1707569}, 'SD': {'Democrat': 161454, 'Republican': 172912, 'Total': 339214}, 'TN': {'Democrat': 864863, 'Republican': 1336106, 'Total': 2243294}, 'TX': {'Democrat': 3546615, 'Republican': 4656196, 'Total': 8343443}, 'VT': {'Democrat': 110335, 'Republican': 151261, 'Total': 274087}, 'WI': {'Democrat': 1324307, 'Republican': 1295080, 'Total': 2673308}, 'WY': {'Democrat': 55965, 'Republican': 136412, 'Total': 203238}, '_COLORS': {'Democrat': 'Blue', 'Republican': 'Red'}}, '2019': {'KY': {'Democrat': 709890, 'Republican': 704754, 'Total': 1443123}, 'LA': {'Democrat': 774498, 'Republican': 734268, 'Total': 1508784}, 'MS': {'Democrat': 414368, 'Republican': 459396, 'Total': 884911}, '_COLORS': {'Democrat': 'Blue', 'Republican': 'Red'}}, '2020': {'DE': {'Democrat': 292903, 'Republican': 190312, 'Total': 492635}, 'IN': {'Democrat': 968106, 'Republican': 1706739, 'Total': 3020414}, 'MO': {'Democrat': 1225771, 'Republican': 1720202, 'Total': 3012287}, 'MT': {'Democrat': 250860, 'Republican': 328548, 'Total': 603587}, 'NH': {'Democrat': 264639, 'Republican': 516609, 'Total': 793260}, 'NC': {'Democrat': 2834790, 'Republican': 2586605, 'Total': 5502778}, 'ND': {'Democrat': 90789, 'Republican': 235479, 'Total': 357659}, 'UT': {'Democrat': 442754, 'Republican': 918754, 'Total': 1458878}, 'VT': {'Democrat': 99214, 'Republican': 248412, 'Total': 362711}, 'WA': {'Democrat': 2294243, 'Republican': 1749066, 'Total': 4056454}, 'WV': {'Democrat': 237024, 'Republican': 497944, 'Total': 784287}, '_COLORS': {'Democrat': 'Blue', 'Republican': 'Red'}}}}

    return elections[election_type][election_year];
    
}

function color_states(data, view_type, rule) {
    "use strict";
    // colors states in accordance to specified rule
    // uses data
    
    var colors = {};
    var nat_env = {}
    for (var key in data) {
        if (key != '_COLORS') {
            for (var party in data[key]) {
                if (!(party in nat_env)) { // first occurrence of party
                    nat_env[party] = data[key][party];
                }
                else {
                    nat_env[party] += data[key][party];
                }
            }
        }
    }
    for (var key in data) { // get colors
        if (key != '_COLORS') {
            colors[key] = get_color_from_margin(data[key],
                                                data['_COLORS'],
                                                view_type,
                                                nat_env,
                                                rule);
        }
    }
    var states = document.getElementsByClassName("state");
    for (var i = 0; i < states.length; i++) { // save all objects to their state
        if (states[i].id in colors) { // color proper color if in dictionary
            states[i].style.fill = colors[states[i].id]
        }
        else {
            states[i].style.fill = "rgb(107, 110, 115)";
        }
    }
    
}

function get_color_from_margin(data, legend, view_type, nat_env, rule) {
    
    // Find first place party
    var currmax = 0;
    var maxname = "";
    for (var party in data) {
        if (party != 'Total' && data[party] > currmax) {
            currmax = data[party];
            maxname = party;
        }
    }
    // Find second place party
    var currsec = 0;
    var secname = "";
    for (var party in data) {
        if (party != 'Total' && party != maxname && data[party] > currsec) {
            currsec = data[party];
            secname = party;
        }
    }
    
    // color of winning party
    var color = legend[maxname];
    // compute MOV
    var margin = (currmax - currsec)/data['Total'];
    
    if (view_type == "bias") { // compute national environment
        margin -= (nat_env[maxname] - nat_env[secname])/nat_env['Total'];
        if (margin < 0) {
            color = legend[secname];
            margin *= -1;
        }
    }
    
    // Rule 0: 4 colors from YAPMS
    // Tossup: 0
    // Tilt: (0,2)
    // Lean: [2,5)
    // Likely: [5,10)
    // Solid: [10,100)
    if (rule == 0) {
        if (margin == 0) { // tossup
            return "rgb(107, 110, 115)";
        }
        else if (color == "Red") { // red party; Republican
            if (margin >= 0.1) { // solid
                return "rgb(191,29,41)";
            }
            else if (margin >= 0.05) { // Likely
                return "rgb(255,88,101)";
            }
            else if (margin >= 0.02) { // Lean
                return "rgb(255,139,152)";
            }
            else if (margin > 0) { // Tilt
                return "rgb(207,137,128)";
            }
        }
        else if (color == "Blue") { // blue party; Democratic
            if (margin >= 0.1) { // Solid
                return "rgb(28,64,140)";
            }
            else if (margin >= 0.05) { // Likely
                return "rgb(87,124,204)";
            }
            else if (margin >= 0.02) { // Lean
                return "rgb(138,175,255)";
            }
            else if (margin > 0) { // Tilt
                return "rgb(148,155,179)";
            }
        }
        else if (color == "Yellow") {
            if (margin >= 0.1) { // Solid
                return "rgb(230,183,0)";
            }
            else if (margin >= 0.05) { // Likely
                return "rgb(232,200,77)";
            }
            else if (margin >= 0.02) { // Lean
                return "rgb(255,231,138)";
            }
            else if (margin > 0) { // Tilt
                return "rgb(184,162,82)";
            }
        }
        else if (color == "Green") {
            if (margin >= 0.1) { // Solid
                return "rgb(28,140,40)";
            }
            else if (margin >= 0.05) { // Likely
                return "rgb(80,200,94)";
            }
            else if (margin >= 0.02) { // Lean
                return "rgb(138,255,151)";
            }
            else if (margin > 0) { // Tilt
                return "rgb(122,153,126)";
            }
        }
        else if (color == "Purple") {
            if (margin >= 0.1) { // Solid
                return "rgb(110,46,91)";
            }
            else if (margin >= 0.05) { // Likely
                return "rgb(171,106,153)";
            }
            else if (margin >= 0.02) { // Lean
                return "rgb(197,157,204)";
            }
            else if (margin > 0) { // Tilt
                return "rgb(178,146,154)";
            }
        }
    }
    
    // Rule 1: 4 color gradient scaled linearly
    // Tilt: 0+
    // Lean: 2+
    // Likely: 5+
    // Solid: 10+
    // weighted average based on distance
    if (rule == 1) {
        if (margin == 0) { // tossup
            return "rgb(107, 110, 115)";
        }
        else if (color == "Red") { // red party; Republican
            if (margin >= 0.1) { // Solid
                return "rgb(191,29,41)";
            }
            else if (margin >= 0.05) { // Likely
                var r = (0.1-margin)/0.05*255+(margin-0.05)/0.05*191,
                    g = (0.1-margin)/0.05*88+(margin-0.05)/0.05*29,
                    b = (0.1-margin)/0.05*101+(margin-0.05)/0.05*41;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
            else if (margin >= 0.02) { // Lean
                var r = (0.05-margin)/0.03*255+(margin-0.02)/0.03*255,
                    g = (0.05-margin)/0.03*139+(margin-0.02)/0.03*88,
                    b = (0.05-margin)/0.03*152+(margin-0.02)/0.03*101;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
            else if (margin > 0) { // Tilt
                var r = (0.02-margin)/0.02*207+margin/0.02*255,
                    g = (0.02-margin)/0.02*137+margin/0.02*139,
                    b = (0.02-margin)/0.02*128+margin/0.02*152;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
        }
        else if (color == "Blue") { // DEM
            if (margin >= 0.1) { // Solid
                return "rgb(28,64,140)";
            }
            else if (margin >= 0.05) { // Likely
                var r = (0.1-margin)/0.05*87+(margin-0.05)/0.05*28,
                    g = (0.1-margin)/0.05*124+(margin-0.05)/0.05*64,
                    b = (0.1-margin)/0.05*204+(margin-0.05)/0.05*140;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
            else if (margin >= 0.02) { // Lean
                var r = (0.05-margin)/0.03*138+(margin-0.02)/0.03*87,
                    g = (0.05-margin)/0.03*175+(margin-0.02)/0.03*124,
                    b = (0.05-margin)/0.03*255+(margin-0.02)/0.03*204;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
            else if (margin > 0) { // Tilt
                var r = (0.02-margin)/0.02*148+margin/0.02*138,
                    g = (0.02-margin)/0.02*155+margin/0.02*175,
                    b = (0.02-margin)/0.02*179+margin/0.02*255;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
        }
        else if (color == "Yellow") {
            if (margin >= 0.1) { // Solid
                return "rgb(230,183,0)";
            }
            else if (margin >= 0.05) { // Likely
                var r = (0.1-margin)/0.05*232+(margin-0.05)/0.05*230,
                    g = (0.1-margin)/0.05*200+(margin-0.05)/0.05*183,
                    b = (0.1-margin)/0.05*77;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
            else if (margin >= 0.02) { // Lean
                var r = (0.05-margin)/0.03*255+(margin-0.02)/0.03*232,
                    g = (0.05-margin)/0.03*231+(margin-0.02)/0.03*200,
                    b = (0.05-margin)/0.03*138+(margin-0.02)/0.03*77;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
            else if (margin > 0) { // Tilt
                var r = (0.02-margin)/0.02*184+margin/0.02*255,
                    g = (0.02-margin)/0.02*162+margin/0.02*162,
                    b = (0.02-margin)/0.02*82+margin/0.02*82;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
        }
        else if (color == "Green") {
            if (margin >= 0.1) { // Solid
                return "rgb(28,140,40)";
            }
            else if (margin >= 0.05) { // Likely
                var r = (0.1-margin)/0.05*80+(margin-0.05)/0.05*28,
                    g = (0.1-margin)/0.05*200+(margin-0.05)/0.05*140,
                    b = (0.1-margin)/0.05*94+(margin-0.05)/0.05*40;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
            else if (margin >= 0.02) { // Lean
                var r = (0.05-margin)/0.03*138+(margin-0.02)/0.03*80,
                    g = (0.05-margin)/0.03*255+(margin-0.02)/0.03*200,
                    b = (0.05-margin)/0.03*151+(margin-0.02)/0.03*94;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
            else if (margin > 0) { // Tilt
                var r = (0.02-margin)/0.02*122+margin/0.02*138,
                    g = (0.02-margin)/0.02*153+margin/0.02*255,
                    b = (0.02-margin)/0.02*126+margin/0.02*151;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
        }
        else if (color == "Purple") {
            if (margin >= 0.1) { // Solid
                return "rgb(110,46,91)";
            }
            else if (margin >= 0.05) { // Likely
                var r = (0.1-margin)/0.05*171+(margin-0.05)/0.05*110,
                    g = (0.1-margin)/0.05*106+(margin-0.05)/0.05*46,
                    b = (0.1-margin)/0.05*153+(margin-0.05)/0.05*91;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
            else if (margin >= 0.02) { // Lean
                var r = (0.05-margin)/0.03*197+(margin-0.02)/0.03*171,
                    g = (0.05-margin)/0.03*157+(margin-0.02)/0.03*106,
                    b = (0.05-margin)/0.03*204+(margin-0.02)/0.03*153;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
            else if (margin > 0) { // Tilt
                var r = (0.02-margin)/0.02*178+margin/0.02*197,
                    g = (0.02-margin)/0.02*146+margin/0.02*157,
                    b = (0.02-margin)/0.02*154+margin/0.02*204;
                return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
            }
        }
    }
    
    // Rule 2: 4 color gradient scaled linearly, start with white
    // Tilt: 0+
    // Lean: 2+
    // Likely: 5+
    // Solid: 10+
    // weighted average based on distance
    if (rule == 2) {
        if (margin >= 0.1) { // Solid REP
            var r = (1-margin)/0.9*255+(margin-0.1)/0.9*191,
                g = (1-margin)/0.9*88+(margin-0.1)/0.9*29,
                b = (1-margin)/0.9*101+(margin-0.1)/0.9*41;
            return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
        }
        else if (margin >= 0.05) { // Likely REP
            var r = (0.1-margin)/0.05*255+(margin-0.05)/0.05*255,
                g = (0.1-margin)/0.05*139+(margin-0.05)/0.05*88,
                b = (0.1-margin)/0.05*152+(margin-0.05)/0.05*101;
            return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
        }
        else if (margin >= 0.02) { // Lean REP
            var r = (0.05-margin)/0.03*207+(margin-0.02)/0.03*255,
                g = (0.05-margin)/0.03*137+(margin-0.02)/0.03*139,
                b = (0.05-margin)/0.03*128+(margin-0.02)/0.03*152;
            return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
        }
        else if (margin > 0) { // Tilt REP
            var r = (0.02-margin)/0.02*255+margin/0.02*207,
                g = (0.02-margin)/0.02*255+margin/0.02*137,
                b = (0.02-margin)/0.02*255+margin/0.02*128;
            return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
        }
        else if (margin <= -0.1) { // Solid DEM
            var r = (margin+1)/0.9*87+(-0.1-margin)/0.9*28,
                g = (margin+1)/0.9*124+(-0.1-margin)/0.9*64,
                b = (margin+1)/0.9*204+(-0.1-margin)/0.9*140;
            return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
        }
        else if (margin <= -0.05) { // Likely DEM
            var r = (margin+0.1)/0.05*138+(-0.05-margin)/0.05*87,
                g = (margin+0.1)/0.05*175+(-0.05-margin)/0.05*124,
                b = (margin+0.1)/0.05*255+(-0.05-margin)/0.05*204;
            return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
        }
        else if (margin <= -0.02) { // Lean DEM
            var r = (margin+0.05)/0.03*148+(-0.02-margin)/0.03*138,
                g = (margin+0.05)/0.03*155+(-0.02-margin)/0.03*175,
                b = (margin+0.05)/0.03*179+(-0.02-margin)/0.03*255;
            return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
        }
        else if (margin < 0) { // Tilt DEM
            var r = (margin+0.02)/0.02*255-margin/0.02*148,
                g = (margin+0.02)/0.02*255-margin/0.02*155,
                b = (margin+0.02)/0.02*255-margin/0.02*179;
            return "rgb("+r.toString()+","+g.toString()+","+b.toString()+")";
        }
        else { // Tossup
            return "rgb(255, 255, 255)";
        }
    }
    
}