const stubs = [
  {
    "name": "Colombia",
    "topLevelDomain": [".co"],
    "alpha2Code": "CO",
    "alpha3Code": "COL",
    "callingCodes": ["57"],
    "capital": "Bogotá",
    "altSpellings": ["CO", "Republic of Colombia", "República de Colombia"],
    "region": "Americas",
    "subregion": "South America",
    "population": 48759958,
    "latlng": [4.0, -72.0],
    "demonym": "Colombian",
    "area": 1141748.0,
    "gini": 55.9,
    "timezones": ["UTC-05:00"],
    "borders": ["BRA", "ECU", "PAN", "PER", "VEN"],
    "nativeName": "Colombia",
    "numericCode": "170",
    "currencies": [{
        "code": "COP",
        "name": "Colombian peso",
        "symbol": "$"
    }],
    "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
    }],
    "translations": {
        "de": "Kolumbien",
        "es": "Colombia",
        "fr": "Colombie",
        "ja": "コロンビア",
        "it": "Colombia",
        "br": "Colômbia",
        "pt": "Colômbia"
    },
    "flag": "https://restcountries.eu/data/col.svg",
    "regionalBlocs": [{
        "acronym": "PA",
        "name": "Pacific Alliance",
        "otherAcronyms": [],
        "otherNames": ["Alianza del Pacífico"]
    }, {
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
    }]
  },
  {"name":"Poland","topLevelDomain":[".pl"],"alpha2Code":"PL","alpha3Code":"POL","callingCodes":["48"],"capital":"Warsaw","altSpellings":["PL","Republic of Poland","Rzeczpospolita Polska"],"region":"Europe","subregion":"Eastern Europe","population":38437239,"latlng":[52.0,20.0],"demonym":"Polish","area":312679.0,"gini":34.1,"timezones":["UTC+01:00"],"borders":["BLR","CZE","DEU","LTU","RUS","SVK","UKR"],"nativeName":"Polska","numericCode":"616","currencies":[{"code":"PLN","name":"Polish złoty","symbol":"zł"}],"languages":[{"iso639_1":"pl","iso639_2":"pol","name":"Polish","nativeName":"język polski"}],"translations":{"de":"Polen","es":"Polonia","fr":"Pologne","ja":"ポーランド","it":"Polonia","br":"Polônia","pt":"Polónia","nl":"Polen","hr":"Poljska","fa":"لهستان"},"flag":"https://restcountries.eu/data/pol.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],"cioc":"POL"},
  {"name":"Germany","topLevelDomain":[".de"],"alpha2Code":"DE","alpha3Code":"DEU","callingCodes":["49"],"capital":"Berlin","altSpellings":["DE","Federal Republic of Germany","Bundesrepublik Deutschland"],"region":"Europe","subregion":"Western Europe","population":81770900,"latlng":[51.0,9.0],"demonym":"German","area":357114.0,"gini":28.3,"timezones":["UTC+01:00"],"borders":["AUT","BEL","CZE","DNK","FRA","LUX","NLD","POL","CHE"],"nativeName":"Deutschland","numericCode":"276","currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"languages":[{"iso639_1":"de","iso639_2":"deu","name":"German","nativeName":"Deutsch"}],"translations":{"de":"Deutschland","es":"Alemania","fr":"Allemagne","ja":"ドイツ","it":"Germania","br":"Alemanha","pt":"Alemanha","nl":"Duitsland","hr":"Njemačka","fa":"آلمان"},"flag":"https://restcountries.eu/data/deu.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],"cioc":"GER"},  
  {"name":"Japan","topLevelDomain":[".jp"],"alpha2Code":"JP","alpha3Code":"JPN","callingCodes":["81"],"capital":"Tokyo","altSpellings":["JP","Nippon","Nihon"],"region":"Asia","subregion":"Eastern Asia","population":126960000,"latlng":[36.0,138.0],"demonym":"Japanese","area":377930.0,"gini":38.1,"timezones":["UTC+09:00"],"borders":[],"nativeName":"日本","numericCode":"392","currencies":[{"code":"JPY","name":"Japanese yen","symbol":"¥"}],"languages":[{"iso639_1":"ja","iso639_2":"jpn","name":"Japanese","nativeName":"日本語 (にほんご)"}],"translations":{"de":"Japan","es":"Japón","fr":"Japon","ja":"日本","it":"Giappone","br":"Japão","pt":"Japão","nl":"Japan","hr":"Japan","fa":"ژاپن"},"flag":"https://restcountries.eu/data/jpn.svg","regionalBlocs":[],"cioc":"JPN"},
  {"name":"China","topLevelDomain":[".cn"],"alpha2Code":"CN","alpha3Code":"CHN","callingCodes":["86"],"capital":"Beijing","altSpellings":["CN","Zhōngguó","Zhongguo","Zhonghua","People's Republic of China","中华人民共和国","Zhōnghuá Rénmín Gònghéguó"],"region":"Asia","subregion":"Eastern Asia","population":1377422166,"latlng":[35.0,105.0],"demonym":"Chinese","area":9640011.0,"gini":47.0,"timezones":["UTC+08:00"],"borders":["AFG","BTN","MMR","HKG","IND","KAZ","PRK","KGZ","LAO","MAC","MNG","PAK","RUS","TJK","VNM"],"nativeName":"中国","numericCode":"156","currencies":[{"code":"CNY","name":"Chinese yuan","symbol":"¥"}],"languages":[{"iso639_1":"zh","iso639_2":"zho","name":"Chinese","nativeName":"中文 (Zhōngwén)"}],"translations":{"de":"China","es":"China","fr":"Chine","ja":"中国","it":"Cina","br":"China","pt":"China","nl":"China","hr":"Kina","fa":"چین"},"flag":"https://restcountries.eu/data/chn.svg","regionalBlocs":[],"cioc":"CHN"},{"name":"Macao","topLevelDomain":[".mo"],"alpha2Code":"MO","alpha3Code":"MAC","callingCodes":["853"],"capital":"","altSpellings":["MO","澳门","Macao Special Administrative Region of the People's Republic of China","中華人民共和國澳門特別行政區","Região Administrativa Especial de Macau da República Popular da China"],"region":"Asia","subregion":"Eastern Asia","population":649100,"latlng":[22.16666666,113.55],"demonym":"Chinese","area":30.0,"gini":null,"timezones":["UTC+08:00"],"borders":["CHN"],"nativeName":"澳門","numericCode":"446","currencies":[{"code":"MOP","name":"Macanese pataca","symbol":"P"}],"languages":[{"iso639_1":"zh","iso639_2":"zho","name":"Chinese","nativeName":"中文 (Zhōngwén)"},{"iso639_1":"pt","iso639_2":"por","name":"Portuguese","nativeName":"Português"}],"translations":{"de":"Macao","es":"Macao","fr":"Macao","ja":"マカオ","it":"Macao","br":"Macau","pt":"Macau","nl":"Macao","hr":"Makao","fa":"مکائو"},"flag":"https://restcountries.eu/data/mac.svg","regionalBlocs":[],"cioc":""},{"name":"Taiwan","topLevelDomain":[".tw"],"alpha2Code":"TW","alpha3Code":"TWN","callingCodes":["886"],"capital":"Taipei","altSpellings":["TW","Táiwān","Republic of China","中華民國","Zhōnghuá Mínguó"],"region":"Asia","subregion":"Eastern Asia","population":23503349,"latlng":[23.5,121.0],"demonym":"Taiwanese","area":36193.0,"gini":null,"timezones":["UTC+08:00"],"borders":[],"nativeName":"臺灣","numericCode":"158","currencies":[{"code":"TWD","name":"New Taiwan dollar","symbol":"$"}],"languages":[{"iso639_1":"zh","iso639_2":"zho","name":"Chinese","nativeName":"中文 (Zhōngwén)"}],"translations":{"de":"Taiwan","es":"Taiwán","fr":"Taïwan","ja":"台湾（中華民国）","it":"Taiwan","br":"Taiwan","pt":"Taiwan","nl":"Taiwan","hr":"Tajvan","fa":"تایوان"},"flag":"https://restcountries.eu/data/twn.svg","regionalBlocs":[],"cioc":"TPE"},
  {"name":"Russian Federation","topLevelDomain":[".ru"],"alpha2Code":"RU","alpha3Code":"RUS","callingCodes":["7"],"capital":"Moscow","altSpellings":["RU","Rossiya","Russian Federation","Российская Федерация","Rossiyskaya Federatsiya"],"region":"Europe","subregion":"Eastern Europe","population":146599183,"latlng":[60.0,100.0],"demonym":"Russian","area":1.7124442E7,"gini":40.1,"timezones":["UTC+03:00","UTC+04:00","UTC+06:00","UTC+07:00","UTC+08:00","UTC+09:00","UTC+10:00","UTC+11:00","UTC+12:00"],"borders":["AZE","BLR","CHN","EST","FIN","GEO","KAZ","PRK","LVA","LTU","MNG","NOR","POL","UKR"],"nativeName":"Россия","numericCode":"643","currencies":[{"code":"RUB","name":"Russian ruble","symbol":"₽"}],"languages":[{"iso639_1":"ru","iso639_2":"rus","name":"Russian","nativeName":"Русский"}],"translations":{"de":"Russland","es":"Rusia","fr":"Russie","ja":"ロシア連邦","it":"Russia","br":"Rússia","pt":"Rússia","nl":"Rusland","hr":"Rusija","fa":"روسیه"},"flag":"https://restcountries.eu/data/rus.svg","regionalBlocs":[{"acronym":"EEU","name":"Eurasian Economic Union","otherAcronyms":["EAEU"],"otherNames":[]}],"cioc":"RUS"},
  {"name":"France","topLevelDomain":[".fr"],"alpha2Code":"FR","alpha3Code":"FRA","callingCodes":["33"],"capital":"Paris","altSpellings":["FR","French Republic","République française"],"region":"Europe","subregion":"Western Europe","population":66710000,"latlng":[46.0,2.0],"demonym":"French","area":640679.0,"gini":32.7,"timezones":["UTC-10:00","UTC-09:30","UTC-09:00","UTC-08:00","UTC-04:00","UTC-03:00","UTC+01:00","UTC+03:00","UTC+04:00","UTC+05:00","UTC+11:00","UTC+12:00"],"borders":["AND","BEL","DEU","ITA","LUX","MCO","ESP","CHE"],"nativeName":"France","numericCode":"250","currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"languages":[{"iso639_1":"fr","iso639_2":"fra","name":"French","nativeName":"français"}],"translations":{"de":"Frankreich","es":"Francia","fr":"France","ja":"フランス","it":"Francia","br":"França","pt":"França","nl":"Frankrijk","hr":"Francuska","fa":"فرانسه"},"flag":"https://restcountries.eu/data/fra.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],"cioc":"FRA"},
];


export default stubs;