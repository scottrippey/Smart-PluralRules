"object"!=typeof Smart&&(Smart={}),function(){var a={},b=null,c=null;Smart.Plurals={getRule:function(d){var e,f,g,h;if(!d)return c||(c=this.getRule(b));d=","+d.toLowerCase()+",";for(e in a)if(a.hasOwnProperty(e)&&(f=-1!==e.indexOf(d)))return a[e];return g=d.indexOf("-"),-1!==g?(h=d.substring(1,g),this.getRule(h)):null},setDefaultRule:function(a){b=a.toLowerCase(),c=null},defineRule:function(c,d){c=","+c.toLowerCase()+",";var e;return e="string"==typeof d?this.getRule(d):function(a,b){return"number"==typeof b?d(a,b):"number"==typeof b.length?b[d(a,b.length)]:void 0},a[c]=e,b||this.setDefaultRule(c.split(",")[1]),e}}}(),Smart.Plurals.defineRule("english,en,de,nl,sv,da,no,nn,nb,fo,es,pt,it,bg,el,fi,et,he,eo,hu,tr",function(a,b){var c,d,e=1===a;return 2===b?e?0:1:(c=0===a,3===b?c?0:e?1:2:(d=0>a,d?0:c?1:e?2:3))}),Smart.Plurals.defineRule("czech,cs,sk",function(a,b){var c,d=1===a;return 2===b?d?0:1:(c=a>=2&&4>=a,d?0:c?1:2)}),Smart.Plurals.defineRule("french,fr,pt-br",function(a){var b=0===a||1===a;return b?0:1}),Smart.Plurals.defineRule("irish,ga",function(a,b){var c,d=1===a;return 2===b?d?0:1:(c=2===a,d?0:c?1:2)}),Smart.Plurals.defineRule("latvian,lv",function(a,b){var c,d=a%10===1&&a%100!=11;return 2===b?d?0:1:(c=0===a,c?0:d?1:2)}),Smart.Plurals.defineRule("lithuanian,lt",function(a,b){var c,d=a%10===1&&a%100!=11;return 2===b?d?0:1:(c=a%100>=12&&19>=a%100,d?0:c?1:2)}),Smart.Plurals.defineRule("polish,pl",function(a,b){var c,d=1===a;return 2===b?d?0:1:(c=a%10>=2&&4>=a%10&&(10>a%100||a%100>=20),d?0:c?1:2)}),Smart.Plurals.defineRule("romanian,ro",function(a,b){var c,d=1===a;return 2===b?d?0:1:(c=0===a||a%100>=1&&19>=a%100,d?0:c?1:2)}),Smart.Plurals.defineRule("russian,ru,uk,sr,hr",function(a,b){var c,d=a%10===1&&a%100!=11;return 2===b?d?0:1:(c=a%10>=2&&4>=a%10&&(10>a%100||a%100>=20),d?0:c?1:2)}),Smart.Plurals.defineRule("slovenian,sl",function(a,b){var c,d,e=a%100===1;return 2===b?e?0:1:(c=a%100===2,3===b?e?0:c?1:2:(d=a%100===3||a%100===4,e?0:c?1:d?2:3))});