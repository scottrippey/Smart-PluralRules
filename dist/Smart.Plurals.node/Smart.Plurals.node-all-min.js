var Smart={};"object"!=typeof Smart&&(Smart={}),function(){var a={},b={},c=null,d=null;Smart.Plurals={getRule:function(e){if(!e)return d||(d=this.getRule(c));if(e=e.toLowerCase(),e in b)return b[e];var f=","+e+",";for(var g in a)if(a.hasOwnProperty(g)){var h=-1!==g.indexOf(f);if(h){var i=a[g];return b[i]}}if(-1!==e.indexOf("-")){var j=e.split("-")[0];return this.getRule(j)}return null},setDefaultRule:function(a){c=a.toLowerCase(),d=null},defineRule:function(a,c){a=a.toLowerCase();var d=function(a,b){return"number"!=typeof b&&"number"==typeof b.length?b[c(a,b.length)]:c(a,b)};b[a]=d},defineLanguageCodes:function(b,d){b=","+b.toLowerCase()+",",d=d.toLowerCase(),a[b]=d,c||this.setDefaultRule(b.split(",")[1])}}}(),Smart.Plurals.defineLanguageCodes("en,de,nl,sv,da,no,nn,nb,fo,es,pt,it,bg,el,fi,et,he,eo,hu,tr","english"),Smart.Plurals.defineRule("english",function(a,b){var c=1===a;if(2===b)return c?0:1;var d=0===a;if(3===b)return d?0:c?1:2;var e=0>a;return e?0:d?1:c?2:3}),Smart.Plurals.defineLanguageCodes("cs,sk","czech"),Smart.Plurals.defineRule("czech",function(a,b){var c=1===a;if(2===b)return c?0:1;var d=a>=2&&4>=a;return c?0:d?1:2}),Smart.Plurals.defineLanguageCodes("fr,pt-br","french"),Smart.Plurals.defineRule("french",function(a){var b=0===a||1===a;return b?0:1}),Smart.Plurals.defineLanguageCodes("ga","irish"),Smart.Plurals.defineRule("irish",function(a,b){var c=1===a;if(2===b)return c?0:1;var d=2===a;return c?0:d?1:2}),Smart.Plurals.defineLanguageCodes("lv","latvian"),Smart.Plurals.defineRule("latvian",function(a,b){var c=a%10===1&&a%100!=11;if(2===b)return c?0:1;var d=0===a;return d?0:c?1:2}),Smart.Plurals.defineLanguageCodes("lt","lithuanian"),Smart.Plurals.defineRule("lithuanian",function(a,b){var c=a%10===1&&a%100!=11;if(2===b)return c?0:1;var d=a%100>=12&&19>=a%100;return c?0:d?1:2}),Smart.Plurals.defineLanguageCodes("pl","polish"),Smart.Plurals.defineRule("polish",function(a,b){var c=1===a;if(2===b)return c?0:1;var d=a%10>=2&&4>=a%10&&(10>a%100||a%100>=20);return c?0:d?1:2}),Smart.Plurals.defineLanguageCodes("ro","romanian"),Smart.Plurals.defineRule("romanian",function(a,b){var c=1===a;if(2===b)return c?0:1;var d=0===a||a%100>=1&&19>=a%100;return c?0:d?1:2}),Smart.Plurals.defineLanguageCodes("ru,uk,sr,hr","russian"),Smart.Plurals.defineRule("russian",function(a,b){var c=a%10===1&&a%100!=11;if(2===b)return c?0:1;var d=a%10>=2&&4>=a%10&&(10>a%100||a%100>=20);return c?0:d?1:2}),Smart.Plurals.defineLanguageCodes("sl","slovenian"),Smart.Plurals.defineRule("slovenian",function(a,b){var c=a%100===1;if(2===b)return c?0:1;var d=a%100===2;if(3===b)return c?0:d?1:2;var e=a%100===3||a%100===4;return c?0:d?1:e?2:3}),module.exports=Smart;