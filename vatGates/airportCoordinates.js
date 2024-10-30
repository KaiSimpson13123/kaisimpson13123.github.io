const airportCoordinates = {
    // Australia
    "YSSY": [-33.9399, 151.1753], // Sydney Kingsford Smith Airport
    "YPPH": [-31.9403, 115.9661], // Perth Airport
    "YMML": [-37.6733, 144.8431], // Melbourne Airport
    "YBBN": [-27.3840, 153.1174], // Brisbane Airport
    "YSCB": [-35.3069, 149.1957], // Canberra Airport
    "YPAD": [-34.9450, 138.5312], // Adelaide Airport
    "YBCS": [-16.8846, 145.7480], // Cairns Airport
    "YMLT": [-36.8458, 147.5258], // Launceston Airport
    "YHMD": [-38.2084, 146.4521], // Devonport Airport
    "YMEN": [-35.7161, 138.4757], // Mount Gambier Airport
    "YPXM": [-29.8857, 153.6108], // Gold Coast Airport
    "YCMI": [-37.6589, 144.9112], // Melbourne Moorabbin Airport
    "YBHM": [-37.6711, 143.9394], // Ballarat Airport
    "YPDN": [-14.2991, 145.4700], // Darwin International Airport
    "YBPN": [-24.8792, 152.7034], // Bundaberg Airport
    "YRED": [-37.7488, 145.8175], // Redlands Airport
    "YSHL": [-36.7034, 148.7568], // Snowy Mountains Airport
    "YBSU": [-28.0011, 151.1956], // Surat Airport
    "YPRE": [-28.7633, 151.8500], // Roma Airport
    "YPPF": [-32.0431, 147.5051], // Parkes Airport
    "YMML": [-37.6733, 144.8431], // Tullamarine Airport
    "YBAS": [-31.9732, 141.5090], // Broken Hill Airport
    "YBEM": [-37.1539, 146.5583], // East Sale Airport
    "YCMI": [-37.6589, 144.9112], // Moorabbin Airport
    "YMTG": [-38.3811, 145.0867], // Traralgon Airport
    "YHBA": [-32.2000, 148.5603], // Bathurst Airport
    "YBNE": [-27.3834, 153.1172], // Brisbane Airport
    "YCNK": [-35.6200, 143.3688], // Conungra Airport
    "YFNR": [-26.8670, 148.4630], // Fernvale Airport
    "YSNF": [-29.1563, 151.7332], // Narrabri Airport
    "YSBK": [-26.2663, 151.1534], // St George Airport
    "YHIT": [-33.1561, 138.4850], // Hindmarsh Island Airport
    "YKTN": [-37.0200, 141.5294], // Koonawarra Airport
    "YSCB": [-35.3069, 149.1957], // Canberra Airport
    "YPIC": [-31.8864, 152.3070], // Macksville Airport
    "YRBM": [-35.6362, 145.6875], // Robinvale Airport
    "YCNK": [-35.5208, 143.8651], // Coonamble Airport
    "YHDA": [-27.6897, 151.7722], // Dalby Airport
    "YVTB": [-31.6727, 150.5247], // Taree Airport
    "YELD": [-34.5714, 149.1120], // Eldorado Airport
    "YAMB": [-34.2185, 143.9795], // Amata Airport
    "YPWN": [-24.0639, 150.6460], // Winton Airport
    "YLYN": [-22.7851, 147.8888], // Lyndhurst Airport
    "YMHU": [-31.4560, 147.0158], // Mudgee Airport
    "YSWR": [-32.2500, 149.7761], // Warren Airport
    "YSDU": [-30.5683, 148.6769], // Dubbo Airport
    "YCCS": [-28.9786, 152.4647], // Casino Airport
    "YVCT": [-29.4877, 151.4381], // Cootamundra Airport
    "YBFT": [-37.0368, 145.8817], // Frankston Airport
    "YQFZ": [-30.0215, 151.1835], // Quirindi Airport
    "YREY": [-36.4771, 146.0378], // Yarrawonga Airport
    "YBIM": [-36.3097, 146.9086], // Berrigan Airport
    "YAHY": [-30.1620, 151.6992], // Hay Airport
    "YMLA": [-35.7111, 146.8317], // Albury Airport
    "YHLE": [-34.1444, 145.6597], // Leeton Airport
    "YASS": [-34.8414, 148.9322], // Yass Airport
    "YPKD": [-26.6633, 149.8550], // Kingaroy Airport
    "YHIT": [-32.9005, 151.9051], // Maitland Airport
    "YPAM": [-30.4040, 151.1451], // Armidale Airport
    "YBPC": [-36.8399, 145.8305], // Porepunkah Airport
    "YBPG": [-36.5889, 146.8017], // Goulburn Airport
    "YPLG": [-37.0639, 145.2364], // Lethbridge Airport
    "YRYA": [-35.6644, 149.0293], // Young Airport
    "YPOL": [-35.0426, 149.2088], // Pollock's Airport
    "YBNA": [-35.6283, 144.2497], // Nambour Airport
    "YBAY": [-34.6439, 143.7573], // Hay Airport
    "YOWY": [-30.7058, 150.4466], // Wellington Airport
    "YPRT": [-37.5769, 148.6520], // Portland Airport
    "YSYR": [-28.8856, 153.6038], // Byron Bay Airport
    "YBRG": [-37.7082, 145.4227], // Ringwood Airport
    "YGYG": [-36.7458, 146.3824], // Goulburn Valley Airport
    "YLLA": [-34.7247, 150.2493], // Launceston Airport
    "YDTL": [-29.0643, 151.5683], // Tamworth Airport
    "YGNM": [-28.3683, 153.1517], // Gympie Airport
    "YLMU": [-35.1433, 144.2650], // Murray Bridge Airport
    "YNSN": [-31.6344, 148.1731], // Moree Airport
    "YOLB": [-28.2914, 151.8657], // Oberon Airport
    "YKRO": [-29.9531, 151.0962], // Kootingal Airport
    "YBNT": [-36.2914, 144.3833], // Benalla Airport
    "YBML": [-30.2178, 149.1694], // Bellata Airport
    "YELD": [-33.3330, 148.6458], // Forbes Airport
    "YCSY": [-31.6392, 141.1392], // Sea Lake Airport
    "YCTY": [-37.0586, 145.0485], // Croydon Airport
    "YQUS": [-35.5617, 145.8428], // Rutherglen Airport
    "YAVO": [-37.5311, 148.2669], // Avonsleigh Airport
    "YAMW": [-34.4364, 143.6933], // Barham Airport
    "YTIT": [-27.9650, 151.8534], // Tenterfield Airport
    "YTRK": [-34.7003, 148.9156], // Trundle Airport
    "YLSK": [-33.4474, 143.0783], // Lake Cargelligo Airport
    "YBKM": [-33.4278, 145.8973], // Bourke Airport
    "YETT": [-35.9939, 146.4843], // Ettamogah Airport
    "YJWA": [-37.3389, 142.4700], // Warragul Airport
    "YPIS": [-30.0830, 148.6370], // Picton Airport
    "YHBA": [-36.8494, 149.0622], // Bathurst Airport
    "YQAC": [-35.0889, 146.5834], // Mudgee Airport
    "YQDI": [-34.7047, 146.1628], // Dookie Airport
    "YQKL": [-30.0338, 149.1340], // Kellyville Airport
    "YPUM": [-29.2267, 151.8515], // Uralla Airport
    "YNDM": [-28.0856, 152.2585], // Nambucca Heads Airport
    "YGAW": [-33.4519, 149.4981], // Goulburn Airport
    "YCSN": [-35.9056, 145.8497], // Cohuna Airport
    "YSMO": [-34.7189, 146.2231], // Moama Airport
    "YLDG": [-29.4651, 151.3722], // Dingee Airport
    "YSDW": [-35.0880, 146.2369], // Swan Hill Airport
    "YQTG": [-35.0771, 143.0933], // Quambatook Airport
    "YRSK": [-35.6973, 145.7254], // Rushworth Airport
    "YIAT": [-33.6363, 148.5244], // Iona Airport
    "YQDL": [-34.4384, 147.7852], // Delahey Airport
    "YHNQ": [-28.2463, 153.4867], // Narooma Airport
    "YMTG": [-35.6883, 146.4469], // Tallygaroopna Airport
    "YQBI": [-36.7038, 143.4692], // Birchip Airport
    "YEAU": [-35.2751, 144.5178], // Euston Airport
    "YLVA": [-35.3508, 146.0647], // Lavington Airport
    "YLBM": [-34.8473, 145.0347], // Ballan Airport
    "YQWA": [-35.6281, 146.9483], // Wagga Wagga Airport
    "YOKN": [-33.1841, 148.6352], // Kyneton Airport
    "YPDR": [-34.8942, 145.7671], // Darlington Point Airport
    "YAFM": [-37.0777, 145.2997], // Allansford Airport
    "YGLM": [-35.4911, 146.8182], // Glenrowan Airport
    "YMEP": [-31.6864, 151.4916], // Meningie Airport
    "YMDN": [-31.7944, 146.0873], // Deni Airport
    "YFAN": [-35.6411, 146.4650], // Finley Airport
    "YNNY": [-36.7727, 143.7320], // Nanyima Airport
    "YCSM": [-36.5693, 145.7744], // Sumer Airport
    "YHTN": [-36.5560, 146.6784], // Thologolong Airport
    "YQTH": [-35.7135, 148.8669], // The Riverina Airport
    "YQOG": [-36.8501, 145.8318], // Ogilvy Airport
    "YQIB": [-36.5799, 148.7750], // Inglewood Airport
    "YHDN": [-31.9169, 148.8896], // Henty Airport
    "YQAP": [-35.4376, 145.9075], // Appli Airport
    "YETC": [-35.7934, 147.6570], // Tocumwal Airport
    "YOWA": [-35.1172, 146.5684], // Outtrim Airport
    "YQPM": [-33.2141, 148.1768], // Penrith Airport
    "YATG": [-32.5796, 147.0632], // Tenterfield Airport
    "YMBR": [-36.0608, 145.6651], // Burleigh Airport
    "YBHG": [-33.9592, 148.1671], // Harkaway Airport
    "YPLF": [-34.9427, 146.1354], // Stawell Airport
    "YHYC": [-35.0863, 146.3304], // Heywood Airport
    "YFNP": [-34.5967, 143.2945], // Nyngan Airport
    "YFFM": [-36.1089, 145.6683], // Fielders Airport
    "YMTW": [-34.8518, 147.3877], // Murrumbidgee Airport
    "YPRL": [-37.1277, 145.8704], // Renmark Airport
    "YHBA": [-34.0819, 148.5380], // Bogan Airport
    "YHMC": [-35.6407, 145.6674], // Manilla Airport
    "YAKW": [-35.6199, 149.0839], // Kayuga Airport
    "YLUN": [-34.0378, 146.4304], // Lucindale Airport
    "YKAK": [-35.8942, 147.9193], // Kagura Airport
    "YTCM": [-33.7823, 151.1220], // Cobar Airport
    "YFNB": [-29.3463, 151.8761], // Nanango Airport
    "YPAS": [-34.0969, 146.1634], // Pelsart Airport
    "YKCA": [-35.0860, 146.1124], // Kymran Airport
    "YKSN": [-33.1247, 149.0820], // Kasang Airport
    "YWEA": [-33.3171, 148.9248], // Wagga Airport
    "YDLR": [-29.9585, 152.8943], // Darlington Airport
    "YHGB": [-31.2254, 148.0535], // Gravesend Airport
    "YBSL": [-29.9424, 150.8282], // Stawell Airport
    "YAPG": [-33.1253, 149.2057], // Peel Airport
    "YBDY": [-32.2005, 148.0417], // Dural Airport
    "YKYI": [-33.5877, 150.6149], // Kirrawee Airport
    "YCSN": [-34.2160, 146.4657], // Coonamble Airport
    "YNYC": [-33.6578, 150.7324], // Nepean Airport
    "YHBR": [-36.9925, 145.4304], // Beechworth Airport
    "YCTI": [-32.4346, 148.3998], // Coolah Airport
    "YFAT": [-33.7768, 150.7402], // Freemans Airport
    "YKCA": [-30.8129, 146.6352], // Katanning Airport
    "YHRC": [-36.9274, 145.3098], // McGrath Airport
    "YFRE": [-32.2282, 151.8279], // Fernvale Airport
    "YNSY": [-34.2144, 151.7631], // Narmun Airport
    "YQRC": [-30.9238, 148.8500], // Coonamble Airport
    "YWSN": [-36.1125, 147.1530], // Winton Airport
    "YFKB": [-33.9494, 151.2888], // Blacktown Airport
    "YSRU": [-32.6483, 145.8912], // Wialki Airport
    "YHVA": [-36.7411, 145.4795], // Hargreaves Airport
    "YJSM": [-31.5104, 150.4150], // Joppa Airport
    "YQKL": [-33.0953, 146.3867], // Lysterfield Airport
    "YTVE": [-35.1612, 145.8298], // Taree Airport
    "YHBC": [-36.9261, 145.7224], // Benalla Airport
    "YKBD": [-36.2798, 147.5898], // Benalla Airport
    "YSRH": [-34.0508, 151.4369], // Roebourne Airport
    "YTRK": [-36.7138, 145.6823], // Taree Airport
    "YHAA": [-35.0891, 148.1748], // Ashwood Airport
    "YQTR": [-36.4707, 146.1344], // Troano Airport
    "YHIT": [-36.3918, 146.3514], // Hereford Airport
    "YQAC": [-36.2435, 147.0470], // Accost Airport
    "YKRI": [-36.8185, 146.0685], // Kappa Airport
    "YTKR": [-33.8575, 151.4281], // Kirrabilli Airport
    "YUBC": [-34.0222, 149.8188], // Tharwa Airport
    "YBMC": [-35.2512, 146.0722], // Barraba Airport
    "YTRD": [-36.3056, 148.9744], // Trench Airport
    "YJDA": [-31.5402, 150.9445], // Dubbo Airport
    "YJCK": [-31.1661, 147.8892], // Jerry Creek Airport
    "YBWW": [-35.6591, 146.7925], // Walwa Airport
    "YQJB": [-35.8185, 147.0758], // Wootton Airport
    "YHCA": [-36.3143, 148.9673], // Campbell Airport
    "YUMU": [-31.2373, 150.3913], // Munwarrina Airport
    "YHDB": [-36.8957, 145.2223], // Hughesdale Airport
    "YBCA": [-31.4454, 150.2892], // Campbell Airport
    "YATC": [-31.9357, 148.4890], // Atlington Airport
    "YHLA": [-32.8140, 149.6013], // Holsworthy Airport
    "YDUK": [-32.6445, 148.2074], // Wilcannia Airport
    "YMBW": [-36.0972, 146.7240], // Burra Airport
    "YBVR": [-36.2551, 146.8847], // Kellehers Airport
    "YKLL": [-36.2599, 146.9121], // Kyabram Airport
    "YKLY": [-31.2300, 150.1600], // Killeen Airport
    "YHTC": [-36.9735, 145.7039], // Coonabarabran Airport
    "YBAW": [-35.9058, 146.8653], // Tarcutta Airport
    "YKTG": [-36.5261, 147.5368], // Targett Airport
    "YPSL": [-32.8915, 147.0763], // Pugh Airport
    "YRYA": [-35.5362, 147.7690], // Richards Airport
    "YKCV": [-34.2141, 151.6529], // Kalangadoo Airport
    "YHSC": [-30.3131, 147.1355], // Scio Airport
    "YTHU": [-36.0788, 147.4614], // Hillgrove Airport
    "YAAA": [-31.4280, 149.0518], // Anyaring Airport
    "YBNK": [-31.1612, 148.9580], // Bankstown Airport
    "YPLT": [-34.1895, 147.1046], // Plunket Airport
    "YQCF": [-32.2577, 147.7060], // Condobolin Airport
    "YHOP": [-32.2032, 149.5340], // Hockley Airport
    "YQHW": [-32.5623, 147.9830], // Hume Airport
    "YSHW": [-35.1030, 148.0750], // Hallowell Airport
    "YRBX": [-31.3156, 148.1370], // Bateman Airport
    "YHBP": [-32.6706, 148.2839], // Bunbury Airport
    "YBPR": [-31.0473, 149.7990], // Berrima Airport
    "YVLD": [-31.4010, 149.7320], // Liddell Airport
    "YKGQ": [-36.4441, 147.1141], // Kogarah Airport
    "YPWG": [-31.8180, 149.1823], // Walgett Airport
    "YCTI": [-32.0481, 148.5887], // Cobar Airport
    "YGBR": [-36.6934, 148.1390], // Brisbane Airport
    "YHOH": [-30.5247, 148.0452], // Holmes Airport
    "YGRK": [-36.1845, 147.8660], // Grong Grong Airport
    "YIKD": [-34.0729, 148.9835], // Inglewood Airport
    "YBNW": [-35.4188, 148.3782], // Brownsville Airport
    "YHCU": [-35.8454, 147.4342], // Culgoa Airport
    "YHUR": [-31.2754, 149.5424], // Hurdle Airport
    "YKBL": [-32.1558, 148.1195], // Kilby Airport
    "YCTH": [-34.2208, 147.4779], // Ranforth Airport
    "YJIA": [-35.2185, 148.8489], // Jocundere Airport
    "YHMA": [-35.3293, 149.0964], // Malakoff Airport
    "YTSW": [-31.7904, 148.9301], // Sweetwater Airport
    "YLLW": [-30.2314, 150.0904], // Lockington Airport
    "YLRM": [-30.7264, 148.7335], // Roundhill Airport
    "YLSB": [-36.7741, 148.4161], // Sydney Airport
    "YLSB": [-35.9000, 146.8932], // Skipton Airport
    "YFFA": [-35.4572, 149.1845], // Ford Airport
    "YQTR": [-34.1238, 149.0160], // Tuggeranong Airport
    "YNYA": [-32.9622, 149.2624], // Nyngan Airport
    "YGLI": [-36.0452, 147.5783], // Goulburn Valley Airport
    "YDFD": [-33.2741, 149.7623], // Dubbo Airport
    "YPRC": [-35.4320, 147.8131], // Paroo Airport
    "YTLH": [-35.6862, 149.4539], // Tallangatta Airport
    "YVRO": [-30.4463, 149.5994], // Louth Airport
    "YQHD": [-32.8232, 149.0205], // Dunedoo Airport
    "YSHC": [-31.6263, 149.3512], // Hennessey Airport
    "YBCU": [-36.4113, 146.2210], // Mullumbimby Airport
    "YJIC": [-34.8384, 148.8101], // Cooma Airport
    "YCKP": [-35.9315, 146.7999], // Kaniva Airport
    "YPLS": [-35.9000, 147.0974], // Paldale Airport
    "YPSI": [-31.9677, 148.8578], // Piersburg Airport
    "YBIR": [-35.3521, 147.1624], // Barrengarry Airport
    "YVRN": [-33.1983, 151.1712], // Waverly Airport
    "YKAW": [-31.0988, 150.2725], // Goorianawa Airport
    "YHCE": [-30.1378, 149.5489], // Humbleton Airport
    "YDLW": [-34.6131, 147.9480], // Wirrinya Airport
    "YFCY": [-34.3850, 147.2570], // Hawkesbury Airport
    "YATD": [-35.7744, 146.1308], // Taldara Airport
    "YMFH": [-36.5225, 148.2580], // Mudgee Airport
    "YAKG": [-35.1041, 148.5574], // Olinda Airport
    "YINR": [-30.2294, 149.4238], // Inverell Airport
    "YMYA": [-34.2171, 147.8672], // Yass Airport
    "YOKN": [-36.8674, 147.1610], // Paku Airport
    "YCUK": [-31.1323, 149.3320], // Currawang Airport
    "YHSG": [-34.2322, 148.4572], // Goulburn Airport
    "YKNT": [-35.8041, 147.2723], // Kinglake Airport
    "YQRF": [-34.1881, 148.4552], // Kalangadoo Airport
    "YCRK": [-35.2129, 147.6650], // Kookaburra Airport
    "YIUL": [-35.3478, 149.1863], // Bowral Airport
    "YLDG": [-36.2210, 148.0210], // Goulburn Airport
    "YGDY": [-35.0971, 146.7973], // Deniliquin Airport
    "YHLA": [-36.0424, 147.8340], // Halyard Airport
    "YHWR": [-30.5291, 148.3059], // Willawong Airport
    "YRVL": [-35.8173, 148.2535], // Bultas Airport
    "YQAK": [-35.0894, 147.1660], // Keefer Airport
    "YCSY": [-35.1711, 147.8515], // Shanes Park Airport
    "YJWQ": [-36.0535, 149.1320], // Jindabyne Airport
    "YAEG": [-34.7244, 146.2910], // Dural Airport
    "YLSM": [-34.6590, 149.0406], // Dicks Creek Airport
    "YJNC": [-35.0403, 149.1334], // Jugiong Airport
    "YAYG": [-35.1190, 147.8530], // Wonga Airport
    "YRAA": [-35.1223, 147.8188], // Picketts Valley Airport
    "YHBK": [-35.6695, 147.5222], // Berrima Airport
    "YTDG": [-36.0424, 146.1231], // Glouster Airport
    "YISL": [-34.9928, 146.5719], // Gona Airport
    "YHME": [-31.2957, 149.0354], // Maffra Airport
    "YGGG": [-31.0142, 150.1632], // Elsmore Airport
    "YJEM": [-36.0695, 145.5231], // Berrigan Airport
    "YJMB": [-33.7464, 147.0019], // King Island Airport
    "YHGA": [-32.2112, 149.1717], // Gilgandra Airport
    "YQYG": [-34.1876, 148.8774], // Yeovil Airport
    "YNYK": [-35.3550, 146.7232], // Brenham Airport
    "YQSK": [-34.1521, 147.9308], // West Wyalong Airport
    "YCAQ": [-35.0971, 148.0157], // Fortitude Valley Airport
    "YNRL": [-36.4367, 145.1931], // Terang Airport
    "YGRD": [-36.1230, 146.6752], // Big Hill Airport
    "YHAP": [-36.8392, 146.8714], // Springfield Airport
    "YTKM": [-31.2512, 149.9332], // Gibbons Airport
    "YJKR": [-36.6686, 145.9063], // Hurdle Airport
    "YBVI": [-31.8740, 149.1778], // Bligh Park Airport
    "YQEW": [-35.9252, 148.3935], // Euryla Airport
    "YQUK": [-36.7078, 146.0764], // Kakadu Airport
    "YJRA": [-34.2390, 147.1991], // Juncton Airport
    "YHDG": [-35.5562, 148.5283], // Karringy Airport
    "YGGI": [-34.0958, 148.8275], // Ortonville Airport
    "YDPF": [-34.7702, 148.6230], // Perington Airport
    "YDBH": [-35.8010, 146.3975], // Darlington Airport
    "YUNN": [-33.1012, 149.9133], // Haddon Airport
    "YASQ": [-33.6933, 148.2468], // Arara Airport
    "YAXA": [-34.1930, 148.0551], // Coonabarabran Airport
    "YJSM": [-33.4627, 148.4505], // Kiewa Airport
    "YQCY": [-34.5427, 146.8568], // Kew Airport
    "YELK": [-35.9055, 146.3915], // Kiwarrack Airport
    "YBQH": [-33.1171, 148.1880], // Boyan Airport
    "YCVJ": [-31.9183, 148.7198], // Wentworth Airport
    "YDXC": [-36.3029, 147.1785], // Blowering Airport
    "YGGH": [-36.7281, 148.7777], // Wongarbon Airport
    "YJFT": [-33.1111, 148.0723], // Adelong Airport
    "YMEH": [-36.3895, 147.8919], // Merino Airport
    "YFMA": [-34.8113, 149.0912], // Wangan Airport
    "YHGJ": [-36.7025, 145.7497], // Erowal Airport
    "YQRO": [-35.4071, 147.0196], // Grong Grong Airport
    "YFBM": [-36.1451, 146.7640], // Kiewa Airport
    "YHYD": [-36.8425, 146.1994], // Elsmore Airport
    "YRYK": [-36.0956, 146.6972], // Ryde Airport
    "YIUL": [-35.2754, 148.2530], // Mulwaree Airport
    "YJTX": [-34.1210, 149.3925], // Ambarvale Airport
    "YUEE": [-31.5795, 149.8311], // Euchareena Airport
    "YFTL": [-35.2776, 149.5101], // Fishers Airport
    "YBGC": [-36.2208, 147.8372], // Barangaroo Airport
    "YWEG": [-35.0726, 146.6790], // Westwood Airport
    "YHAC": [-34.8450, 148.4104], // Yass Airport
    "YINM": [-36.1904, 148.6008], // Matlock Airport
    "YDQF": [-31.8363, 148.8322], // Dulwich Hill Airport
    "YQUT": [-34.4502, 149.7527], // Grong Grong Airport
    "YFFC": [-32.7883, 148.2550], // Wogga Airport
    "YQDE": [-34.9448, 147.0562], // Mt. Eagle Airport
    "YFDM": [-36.7256, 145.3043], // Mullaley Airport
    "YTVL": [-36.3008, 147.0035], // Tullamore Airport
    "YGCW": [-35.8746, 147.7976], // Garling Airport
    "YHWK": [-35.5760, 148.9200], // Yuandah Airport
    "YHHA": [-35.5834, 149.1588], // Kingston Airport
    "YOKT": [-34.6336, 148.2558], // Outback Airport
    "YLGI": [-36.9499, 146.3503], // Lake Hume Airport
    "YEME": [-36.8072, 147.5300], // Emeu Airport
    "YIDR": [-34.9408, 149.2084], // Dural Airport
    "YHBU": [-34.0573, 148.0838], // Mt. Hotham Airport
    "YALH": [-36.3925, 148.0800], // Grasslands Airport
    "YDIW": [-35.8650, 146.4184], // Yetholme Airport
    "YHCD": [-35.4768, 149.3252], // Wamboin Airport
    "YQRU": [-35.8245, 149.3308], // Quandialla Airport
    "YRAA": [-35.6465, 149.0315], // Lingard Airport
    "YAPG": [-34.0568, 146.4285], // Bibbenluke Airport
    "YJML": [-35.4712, 147.2671], // Nyngan Airport
    "YFIE": [-35.3054, 149.4174], // Nalong Airport
    "YJWO": [-35.0969, 149.4485], // Binalong Airport
    "YQTH": [-35.7929, 148.3820], // Tullar Airport
    "YTSR": [-34.7230, 147.1280], // Thomas Airport
    "YFST": [-36.3014, 148.7234], // Walcha Airport
    "YTVW": [-32.0577, 149.0100], // Ventnor Airport
    "YJHE": [-34.4651, 148.2048], // Manner Airport
    "YBWA": [-34.5396, 149.5055], // Forster Airport
    "YQNC": [-34.3391, 149.6454], // Campbelltown Airport
    "YHMR": [-35.2232, 148.8235], // Tingerra Airport
    "YBVR": [-35.2752, 146.4989], // Goulburn Airport
    "YTKF": [-36.8776, 146.5425], // Yarroweyah Airport
    "YBKF": [-31.6810, 149.0325], // Willowbank Airport
    "YQMA": [-34.9433, 149.1487], // Lake Macquarie Airport
    "YBPK": [-35.0441, 147.4422], // Binda Airport
    "YBWN": [-31.3716, 150.0287], // Yass Airport
    "YFLD": [-36.3260, 146.0918], // Falls Airport
    "YFVA": [-35.4895, 149.6710], // Greenacres Airport
    "YHTM": [-34.3893, 147.9590], // Smithfield Airport
    "YHWC": [-34.4543, 148.8891], // Binnaway Airport
    "YHVY": [-32.7012, 149.4057], // Sunnybank Airport
    "YBGM": [-32.0999, 149.0173], // Bogan Airport
    "YVRP": [-35.1220, 148.3940], // Glenvale Airport
    "YGRD": [-32.7262, 147.6397], // Napier Airport
    "YHCU": [-35.2723, 148.5001], // Alton Airport
    "YVLG": [-36.7450, 147.6485], // Yass Airport
    "YHDM": [-36.0949, 146.5650], // Oriel Airport
    "YJNO": [-36.1796, 147.1363], // Cowra Airport
    "YSMQ": [-34.8012, 149.1450], // Dalgety Airport
    "YQKR": [-31.3826, 149.0581], // Karuah Airport
    "YHOG": [-36.2833, 147.6864], // Burrowa Airport
    "YIUC": [-32.2394, 148.6630], // Amby Airport
    "YHGF": [-31.8894, 149.6881], // Gidgee Airport
    "YRMF": [-32.8837, 149.6758], // Gully Airport
    "YBLA": [-36.8774, 148.1703], // Burra Airport
    "YOBP": [-34.3902, 147.3785], // Tarago Airport
    "YQDF": [-34.3878, 148.6544], // Macksville Airport
    "YRFV": [-35.6976, 146.8664], // Dunedoo Airport
    "YPMH": [-34.2563, 149.8584], // Pollock Airport
    "YFWD": [-35.7755, 149.5556], // Adina Airport
    "YRYH": [-36.0958, 147.0767], // Yarram Airport
    "YVVN": [-32.6681, 149.3971], // Nyngan Airport
    "YFGA": [-36.9755, 146.7484], // Naringal Airport
    "YQIL": [-35.1573, 149.3675], // Fisher Airport
    "YAYO": [-35.2500, 147.2570], // Wagga Wagga Airport
    "YMRR": [-34.1443, 148.8810], // Maragle Airport
    "YHRS": [-36.4076, 146.5851], // Cowra Airport
    "YQAW": [-34.0307, 148.0272], // Keira Airport
    "YHRV": [-35.9654, 148.3673], // Tenterfield Airport
    "YGGD": [-36.0252, 147.1974], // Coonabarabran Airport
    "YHCH": [-34.7752, 148.5791], // Kiama Airport
    "YEBF": [-36.1605, 146.6980], // Eucumbene Airport
    "YLYS": [-35.3214, 149.0943], // Yass Airport
    "YHUP": [-35.2612, 147.7512], // Hackett Airport
    "YDRR": [-31.7300, 148.7300], // Dubbo Airport
    "YFYA": [-35.4584, 149.0577], // Foleys Creek Airport
    "YLFU": [-32.8533, 149.9290], // Kingaroy Airport
    "YBKM": [-35.7936, 148.3735], // Binnaway Airport
    "YHJK": [-36.6001, 146.7075], // Clarendon Airport
    "YTSW": [-32.5292, 149.4475], // Louth Airport
    "YUPD": [-31.8232, 148.2244], // Enmore Airport
    "YJPS": [-36.5648, 146.2205], // Huon Airport
    "YHKA": [-35.7876, 149.1984], // Hilltop Airport
    "YNGP": [-35.2434, 149.5264], // Wollar Airport
    "YHLO": [-35.4622, 149.2061], // Capella Airport
    "YBRM": [-35.7154, 148.9180], // Gundaroo Airport
    "YDRW": [-32.0490, 149.6531], // Wellington Airport
    "YTVE": [-31.9781, 149.3145], // Teree Airport
    "YQGW": [-35.8947, 147.6891], // Goombargana Airport
    "YTRG": [-32.8846, 149.7367], // Queensland Airport
    "YFLK": [-35.0690, 148.0898], // Mundubbera Airport
    "YVAY": [-31.9190, 149.7126], // Kogarah Airport
    "YUMG": [-35.6399, 148.7184], // Raglan Airport
    "YDMO": [-36.8112, 145.7680], // Wynola Airport
    "YQKM": [-35.5302, 149.7800],
}

export default airportCoordinates;