var countries = ['--select country--','America', 'Australia', 'Afghanisthan', 'Bangladesh', 'Brazil', 'China', 'Denmark', 'Egypt','Finland','France', 'Germany'
                ,'Greenland','Hongkong','India','Ireland','Israel','Japan', 'Korea', 'Nepal','Pakistan','Russia','Srilanka', 'Urkaine', 'Zimbabwe'];
var countryCodes = [{'America':12, 'Australia':61, 'Afghanisthan':93, 'Bangladesh':880, 'Brazil':55, 'China':86, 'Denmark':45, 'Egypt':20,'Finland':358,'France':33, 'Germany':49
                ,'Greenland':299,'Hongkong':852,'Indida':91,'Ireland':353,'Israel':972,'Japan':81, 'Korea':'850/82', 'Nepal':977,'Pakistan':92,'Russia':7,'Srilanka':94, 'Urkaine':380, 'Zimbabwe':263}];

function  myCountry(){
    var selectItem = document.getElementById('countryList');
    var options = "";
        for(i=0; i<countries.length; i++){
            options+=`<option>${countries[i]}</option>`;
        }
        selectItem.innerHTML = options;
}
myCountry();
function internationalCountryCodes(){
    var selectCode = document.getElementById('countryCode');
    var options = "";
    var codes = Object.values(countryCodes[0]);
    console.log(codes[1]);
    for(i=0; i<codes.length; i++){
        options+=`<option>+${codes[i]}</option>`
    }
    selectCode.innerHTML = options;
}
internationalCountryCodes();

var fullname = "";
function validateName(){
    fullname = document.getElementById('fullName').value;
    var beg = /^[A-Z]/;
    var blank = /[\s]$/;
    if(!fullname.match(beg) || fullname.match(blank)){
        document.getElementById('showFullNameError').innerHTML = '*Enter valid name!';
        document.getElementById('showFullNameError').style.color = 'tomato';
    } 
    else{
        document.getElementById('showFullNameError').innerHTML = '';
    }
}