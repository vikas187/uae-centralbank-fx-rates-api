'use strict';

const express = require('express');
const request = require('request-promise');
const cheerio = require('cheerio');
const moment = require('moment');
const app = express();
const port = process.env.PORT || 8081;

app.get('/', async function handle(req, res) {
    try {

        const rates = {};
        const url = 'https://www.centralbank.ae/en/fx-rates';
        const html = await request.get(url);
        const $ = cheerio.load(html);
        const records = $("#ratesDateTable tbody tr td");
        const date = moment($($("#ratesDatePicker > h3 > span > span")[0]).text().substring(5) + 'T00:00:00+04:00', 'DD-MM-YYYY').format('YYYY-MM-DD');
        for (let i = 0; i < records.length; i++) {
            const currency = $(records[i]).text();
            const rate = parseFloat($(records[i + 1]).text());
            i++;
            const key = (ref[currency] || {}).code || currency;
            rates[key] = { currency, code: null, ...ref[currency], rate };
        }
        res.json({ url, reference: 'AED', 'note': 'GST Timezone', date, rates, 'repo': 'https://github.com/roaatech/uae-centralbank-fx-rates-api' });

    } catch (e) {
        res.json({ success: false, error: JSON.stringify(e) }).status(500).send();
    }
});

app.listen(port);

console.log('Listing to port 8081');


const ref = {
    "US Dollar": {
        "currency": "US Dollar",
        "code": "USD",
        "symbol": "$"
    },
    "Argentine Peso": {
        "currency": "Argentine Peso",
        "code": "ARS",
        "symbol": ""
    },
    "Australian Dollar": {
        "currency": "Australian Dollar",
        "code": "AUD",
        "symbol": "$"
    },
    "Bangladesh Taka": {
        "currency": "Bangladesh Taka",
        "code": "BDT",
        "symbol": ""
    },
    "Bahrani Dinar": {
        "currency": "Bahrani Dinar",
        "code": "BHD",
        "symbol": ""
    },
    "Brunei Dollar": {
        "currency": "Brunei Dollar",
        "code": "BND",
        "symbol": "$"
    },
    "Brazilian Real": {
        "currency": "Brazilian Real",
        "code": "BRL",
        "symbol": ""
    },
    "Botswana Pula": {
        "currency": "Botswana Pula",
        "code": "BWP",
        "symbol": ""
    },
    "Belarus Rouble": {
        "currency": "Belarus Rouble",
        "code": "BYN",
        "symbol": ""
    },
    "Canadian Dollar": {
        "currency": "Canadian Dollar",
        "code": "CAD",
        "symbol": "$"
    },
    "Swiss Franc": {
        "currency": "Swiss Franc",
        "code": "CHF",
        "symbol": ""
    },
    "Chilean Peso": {
        "currency": "Chilean Peso",
        "code": "CLP",
        "symbol": ""
    },
    "Chinese Yuan - Offshore": {
        "currency": "Chinese Yuan - Offshore",
        "code": "CNY",
        "symbol": ""
    },
    "Chinese Yuan": {
        "currency": "Chinese Yuan",
        "code": "CNY",
        "symbol": ""
    },
    "Colombian Peso": {
        "currency": "Colombian Peso",
        "code": "COP",
        "symbol": ""
    },
    "Czech Koruna": {
        "currency": "Czech Koruna",
        "code": "CZK",
        "symbol": ""
    },
    "Danish Krone": {
        "currency": "Danish Krone",
        "code": "DKK",
        "symbol": ""
    },
    "Algerian Dinar": {
        "currency": "Algerian Dinar",
        "code": "DZD",
        "symbol": ""
    },
    "Egypt Pound": {
        "currency": "Egypt Pound",
        "code": "EGP",
        "symbol": ""
    },
    "Euro": {
        "currency": "Euro",
        "code": "EUR",
        "symbol": "€"
    },
    "GB Pound": {
        "currency": "GB Pound",
        "code": "GBP",
        "symbol": "£"
    },
    "Hongkong Dollar": {
        "currency": "Hongkong Dollar",
        "code": "HKD",
        "symbol": "$"
    },
    "Hungarian Forint": {
        "currency": "Hungarian Forint",
        "code": "HUF",
        "symbol": ""
    },
    "Indonesia Rupiah": {
        "currency": "Indonesia Rupiah",
        "code": "IDR",
        "symbol": ""
    },
    "Indian Rupee": {
        "currency": "Indian Rupee",
        "code": "INR",
        "symbol": ""
    },
    "Iceland Krona": {
        "currency": "Iceland Krona",
        "code": "ISK",
        "symbol": ""
    },
    "Jordan Dinar": {
        "currency": "Jordan Dinar",
        "code": "JOD",
        "symbol": ""
    },
    "Japanese Yen": {
        "currency": "Japanese Yen",
        "code": "JPY",
        "symbol": ""
    },
    "Kenya Shilling": {
        "currency": "Kenya Shilling",
        "code": "KES",
        "symbol": ""
    },
    "Korean Won": {
        "currency": "Korean Won",
        "code": "KRW",
        "symbol": ""
    },
    "Kuwaiti Dinar": {
        "currency": "Kuwaiti Dinar",
        "code": "KWD",
        "symbol": ""
    },
    "Kazakhstan Tenge": {
        "currency": "Kazakhstan Tenge",
        "code": "KZT",
        "symbol": ""
    },
    "Lebanon Pound": {
        "currency": "Lebanon Pound",
        "code": "LBP",
        "symbol": ""
    },
    "Sri Lanka Rupee": {
        "currency": "Sri Lanka Rupee",
        "code": "LKR",
        "symbol": ""
    },
    "Moroccan Dirham": {
        "currency": "Moroccan Dirham",
        "code": "MAD",
        "symbol": ""
    },
    "Macedonia Denar": {
        "currency": "Macedonia Denar",
        "code": "MKD",
        "symbol": ""
    },
    "Mexican Peso": {
        "currency": "Mexican Peso",
        "code": "MXN",
        "symbol": ""
    },
    "Malaysia Ringgit": {
        "currency": "Malaysia Ringgit",
        "code": "MYR",
        "symbol": ""
    },
    "Nigerian Naira": {
        "currency": "Nigerian Naira",
        "code": "NGN",
        "symbol": ""
    },
    "Norwegian Krone": {
        "currency": "Norwegian Krone",
        "code": "NOK",
        "symbol": ""
    },
    "NewZealand Dollar": {
        "currency": "NewZealand Dollar",
        "code": "NZD",
        "symbol": ""
    },
    "Omani Rial": {
        "currency": "Omani Rial",
        "code": "OMR",
        "symbol": ""
    },
    "Peru Sol": {
        "currency": "Peru Sol",
        "code": "PEN",
        "symbol": ""
    },
    "Philippine Piso": {
        "currency": "Philippine Piso",
        "code": "PHP",
        "symbol": ""
    },
    "Pakistan Rupee": {
        "currency": "Pakistan Rupee",
        "code": "PKR",
        "symbol": ""
    },
    "Polish Zloty": {
        "currency": "Polish Zloty",
        "code": "PLN",
        "symbol": ""
    },
    "Qatari Riyal": {
        "currency": "Qatari Riyal",
        "code": "QAR",
        "symbol": ""
    },
    "Serbian Dinar": {
        "currency": "Serbian Dinar",
        "code": "RSD",
        "symbol": ""
    },
    "Russia Rouble": {
        "currency": "Russia Rouble",
        "code": "RUB",
        "symbol": ""
    },
    "Saudi Riyal": {
        "currency": "Saudi Riyal",
        "code": "SAR",
        "symbol": ""
    },
    "Swedish Krona": {
        "currency": "Swedish Krona",
        "code": "SWK",
        "symbol": ""
    },
    "Singapore Dollar": {
        "currency": "Singapore Dollar",
        "code": "SGD",
        "symbol": ""
    },
    "Thai Baht": {
        "currency": "Thai Baht",
        "code": "THB",
        "symbol": ""
    },
    "Tunisian Dinar": {
        "currency": "Tunisian Dinar",
        "code": "TND",
        "symbol": ""
    },
    "Turkish Lira": {
        "currency": "Turkish Lira",
        "code": "TRY",
        "symbol": "₺"
    },
    "Trin Tob Dollar": {
        "currency": "Trin Tob Dollar",
        "code": "TTD",
        "symbol": ""
    },
    "Taiwan Dollar": {
        "currency": "Taiwan Dollar",
        "code": "TWD",
        "symbol": ""
    },
    "Tanzania Shilling": {
        "currency": "Tanzania Shilling",
        "code": "TZS",
        "symbol": ""
    },
    "Uganda Shilling": {
        "currency": "Uganda Shilling",
        "code": "UGX",
        "symbol": ""
    },
    "Vietnam Dong": {
        "currency": "Vietnam Dong",
        "code": "VND",
        "symbol": ""
    },
    "South Africa Rand": {
        "currency": "South Africa Rand",
        "code": "ZAR",
        "symbol": ""
    },
    "Zambian Kwacha": {
        "currency": "Zambian Kwacha",
        "code": "ZMW",
        "symbol": ""
    }
};