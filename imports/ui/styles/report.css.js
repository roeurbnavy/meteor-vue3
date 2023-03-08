const cssPrinting = `
/* Font Face */
@font-face {
  font-family:"D-DIN";
  src: url("/fonts/D-DIN.eot");
  src: url("/fonts/D-DIN.eot?#iefix") format("embedded-opentype"),
  url("/fonts/D-DIN.woff2") format("woff2"),
  url("/fonts/D-DIN.woff") format("woff"),
  url("/fonts/D-DIN.ttf") format("truetype"),
  url("/fonts/D-DIN.svg#D-DIN") format("svg");
}
@font-face {
  font-family: 'Battambang';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/khmer/battambang-v9-khmer-regular.eot?#iefix') format('embedded-opentype'),
    url('/fonts/khmer/battambang-v9-khmer-regular.woff2') format('woff2'),
    url('/fonts/khmer/battambang-v9-khmer-regular.woff') format('woff'),
    url('/fonts/khmer/battambang-v9-khmer-regular.ttf') format('truetype'),
    url('/fonts/khmer/battambang-v9-khmer-regular.svg#Battambang') format('svg');
}
@font-face {
  font-family: 'Moul';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/khmer/moul-v8-khmer-regular.eot?#iefix') format('embedded-opentype'),
  url('/fonts/khmer/moul-v8-khmer-regular.woff2') format('woff2'),
  url('/fonts/khmer/moul-v8-khmer-regular.woff') format('woff'),
  url('/fonts/khmer/moul-v8-khmer-regular.ttf') format('truetype'),
  url('/fonts/khmer/moul-v8-khmer-regular.svg#Moul') format('svg');
}
@font-face {
  font-family: 'Bokor';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/khmer/bokor-v8-khmer-regular.eot?#iefix')
  format('embedded-opentype'),
  url('/fonts/khmer/bokor-v8-khmer-regular.woff2') format('woff2'),
  url('/fonts/khmer/bokor-v8-khmer-regular.woff') format('woff'),
  url('/fonts/khmer/bokor-v8-khmer-regular.ttf') format('truetype'),
  url('/fonts/khmer/bokor-v8-khmer-regular.svg#Bokor') format('svg');
}
@font-face {
  font-family: 'Fasthand';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/khmer/fasthand-v7-khmer-regular.eot?#iefix')
  format('embedded-opentype'),
  url('/fonts/khmer/fasthand-v7-khmer-regular.woff2') format('woff2'),
  url('/fonts/khmer/fasthand-v7-khmer-regular.woff') format('woff'),
  url('/fonts/khmer/fasthand-v7-khmer-regular.ttf') format('truetype'),
  url('/fonts/khmer/fasthand-v7-khmer-regular.svg#Fasthand') format('svg');
}
@font-face {
  font-family: 'Bahnschrift';
  src:url('/fonts/bahnschrift.woff') format('woff'),
    url('/fonts/bahnschrift.ttf') format('truetype'),
}
@font-face {
  font-family: 'Calibri';
  src: url('/fonts/report/Calibri.ttf') format('truetype');
}
/* content-regular - khmer */
@font-face {
  font-family: 'Content';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/khmer/content-v8-khmer-regular.eot'),
    url('/fonts/khmer/content-v8-khmer-regular.eot?#iefix') format('embedded-opentype'),
    url('/fonts/khmer/content-v8-khmer-regular.woff2') format('woff2'),
    url('/fonts/khmer/content-v8-khmer-regular.woff') format('woff'),
    url('/fonts/khmer/content-v8-khmer-regular.ttf') format('truetype'),
    url('/fonts/khmer/content-v8-khmer-regular.svg#Content') format('svg');
    /* Legacy iOS */
}

/* Khmer font */
.kh-moul {
  font-family:'D-DIN','Moul' !important;
}
.kh-battambang {
  font-family:'D-DIN','Battambang' !important;
}
.kh-fasthand {
  font-family:'D-DIN','Fasthand' !important;
}
.kh-bokor {
  font-family:'D-DIN','Bokor' !important;
}

/* Paper Size */
.a4-p {
  width: 21cm
}

.a4-l {
  width: 29.7cm
}

.a5-p {
  width: 14.8cm
}

.a5-l {
  width: 21cm
}

.a6-p {
  width: 10.5cm
}

.a6-l {
  /* width: 14.8cm */
  width: 18.9cm /* Mr. Cheng */
}

.mini{
  width: 8cm
}

/* USE FOR PRINT INVOICE ONLY*/
.in-a4-p {
  width: 21cm;
}

.in-a4-l {
  width: 29.7cm;
}

.in-a5-p {
  width: 14.8cm;
}

.in-a5-l {
  width: 21cm;
}

.in-a6-p {
  width: 10.5cm !important;
}

.in-a6-l {
  width: 18.9cm;
}

.in-mini {
  width: 8cm;
}
/* END USE FOR PRINT INVOICE ONLY*/
/* Report Body */
.report-body {
  font-size: 12px !important;
  font-family: Calibri !important;
}

/* Header */
.report-body .header {
  text-align: center;
  padding-bottom: 10px;
}

.report-body .header .company-name {
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 5px;
}

.report-body .header .report-name {
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  padding-bottom: 5px;
}

.report-body .header .report-period {
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 5px;
}

/* Filter */
.report-body .filter {
  padding-bottom: 15px;
}

.report-body .filter .title {
  font-weight: 500;
}

/* Content */
.report-body .content {
  padding-bottom: 5px;
}

.report-body .table-content {
  font-family: Calibri !important;
  font-size: 12px !important;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
  line-height: 23px;
}

.report-body .table-content th {
  border-bottom: 1px solid #ddd;
  padding: 0px 5px;
  background-color: #f5f7fa;
  text-align: left;
  text-transform: uppercase;
}

.report-body .table-content td {
  border-bottom: 1px solid #ddd;
  padding: 0px 5px;
  text-align: left;
  vertical-align: top;
}

.report-body .table-content tbody tr th {
  background-color: #fff !important;
}

/* Time Stamp */
.report-body .timestamp {
  font-size: 10px;
  font-weight: 300;
  font-style: italic;
  padding-bottom: 10px;
}

/* Footer */
.report-body .footer {
  font-size: 13px;
  padding-bottom: 10px;
}

.report-body .footer .title {
  font-weight: 600;
}

/* Signature */
.report-body .signature {
  padding-top: 20px;
  clear: both;
  text-align: center;
  font-weight: 500;
}

/* Note */
.report-body .note {
  border: 1px solid #2e2e2e;
  border-radius: 4px;
  font-weight: 500;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  margin-bottom: 22px;
  padding: 10px 15px
}

.report-body .note-textarea {
  text-align: right;
  margin: 0;
}

/* Grid */
.report-body .colspan-6 {
  flex-direction: column;
  width: 22%;
  float: left;
  flex:auto !important;
}

.report-body .colspan-8 {
  flex-direction: column;
  width: 30%;
  float: left;
  flex:auto !important;
}

.report-body .colspan-12 {
  flex-direction: column;
  width: 45%;
  float: left;
  flex:auto !important;
}

/* Text */
.text-left {
  text-align: left !important;
}
.text-right {
  text-align: right !important;
}
.text-center {
  text-align: center !important;
}
.text-bold {
  font-weight: bold
}
.text-italic {
  font-style: italic
}

.ra-text-left {
  text-align: left !important;
}
.ra-text-right {
  text-align: right !important;
}
.ra-text-center {
  text-align: center !important;
}
.ra-text-bold {
  font-weight: bold
}
.ra-text-italic {
  font-style: italic
}
.ra-text-underline {
  text-decoration-line: underline;
  text-decoration-style: solid;
}
.ra-text-dblunderline {
  text-decoration-line: underline;
  text-decoration-style: double;
}

/* Text transform */
.ra-text-capital {
  text-transform: capitalize;
}
.ra-text-lower {
  text-transform: lowercase;
}
.ra-text-upper {
  text-transform: uppercase;
}

/* Word break */
.ra-break-all {
  word-break: break-all;
}
.ra-break-work {
  word-break: break-word;
}

/* Set Margin To Logo Invoice */
.logo-img {
  margin-top: -25px !important;
}

/* Set Margin To Company Name Invoice */
.com-name{
  margin-top: -25px !important;
}


/* width 48mm for 34mm x 20mm */
.barcode-p{
  width:50mm
}

/*USE FOR PRINT INVOICE TEMPLATE*/
.template-text-right{
  text-align:right !important;
  padding-right:2px !important;
}
.template-text-left{
  text-align:left !important;
  padding-left:2px !important;
}
.template-text-center{
  text-align:center !important;
}
`

export default cssPrinting
