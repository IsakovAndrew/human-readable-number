module.exports = function toReadable (number) {
var dg_val = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tn_val = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tw_val = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let s = number;
if (s < 10){
    return dg_val[s];
} else
if ( s < 20){
return tn_val[Math.abs(s-10)];
}else
if (s % 10 === 0 && s.toString().slice(1,2) !== '1' && s%100 !== 0){
    if (s<100 ){
        return tw_val[Math.abs(s / 10 -2)];
    }else if (s !== (Math.floor(s /100) * 100 +10) && s % 100 !== 0) {
    return dg_val[Math.floor(s /100)] + " hundred " + tw_val[Math.floor((s-Math.floor(s/100)*100)/10)-2];
}} else
if (s<100){
    return tw_val[Math.floor(s / 10 -2)] + ' ' + dg_val[s-Math.floor(s/10)*10];
}else
if (s % 100 === 0){
    return dg_val[Math.floor(s / 100)] + " hundred";
}else
if(s<1000){
    if ((s-Math.floor (s/100)*100) < 10){
        return dg_val[Math.floor(s /100)] + " hundred " + dg_val[s-(Math.floor(s/100)*100)];
    }else
    if((s-Math.floor(s/100)*100) < 20){
        return dg_val[Math.floor(s /100)] + " hundred " + tn_val[s-((Math.floor(s/100)*100)+10)];
    }else
    {return dg_val[Math.floor(s /100)] + " hundred " + tw_val[Math.floor((s-Math.floor(s/100)*100)/10)-2] + ' ' + dg_val[s-Math.floor(s/10)*10] ;}
}
}
