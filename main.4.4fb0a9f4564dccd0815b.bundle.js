(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{10:function(e,a,t){e.exports=t.p+"f7c2594cec9c67871e61384767388691.webp"},15:function(e,a,t){t(16),t(35),e.exports=t(32)},30:function(e,a,t){var l={"./main.mdx":31};function n(e){var a=c(e);return t(a)}function c(e){if(!t.o(l,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return l[e]}n.keys=function(){return Object.keys(l)},n.resolve=c,e.exports=n,n.id=30},31:function(e,a,t){"use strict";t.r(a),t.d(a,"slides",(function(){return s})),t.d(a,"fusumaProps",(function(){return p})),t.d(a,"default",(function(){return b}));var l=t(2),n=t.n(l),c=t(1);function r(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},c=Object.keys(e);for(l=0;l<c.length;l++)t=c[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)t=c[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}var s=[function(e){return Object(c.a)(n.a.Fragment,null,Object(c.a)("h1",null,"W3C CSS spec/draft を読む時に役立つValue Processingの概念"),Object(c.a)("p",null,"@arayaryoma"),Object(c.a)("p",null,"2020/09/01 #納涼_study"))},function(e){return Object(c.a)(n.a.Fragment,null,Object(c.a)("p",null,"W3C Understanding the CSS Specifications(",Object(c.a)("a",u({parentName:"p"},{href:"https://www.w3.org/Style/CSS/read)%E3%81%AB%E3%81%AFCSS"}),"https://www.w3.org/Style/CSS/read)にはCSS")," specはまずこれを読めと書いてある。"),Object(c.a)("p",null,"この中でも、",Object(c.a)("a",u({parentName:"p"},{href:"https://www.w3.org/TR/css-cascade-4/"}),"CSS Cascading and Inheritance"),"に記述されているValue ProcessingはCSSのspec/draftを読む際にたいへん役立つためここで紹介する。"),Object(c.a)("p",null,Object(c.a)("img",u({src:t(9)},{alt:"Screen capture of https://www.w3.org/Style/CSS/read"}))))},function(e){return Object(c.a)(n.a.Fragment,null,Object(c.a)("p",null,Object(c.a)("a",u({parentName:"p"},{href:"https://www.w3.org/TR/css-cascade-4/#value-stages"}),"Value Processing"),"には、UAが、parseしてtree化したdocumentのelementに対してstyleを適用する、\n最終的な値を計算するときの処理手順が記載されている。"),Object(c.a)("p",null,"この一連の計算ではparseされたstylesheetの値は下記の順に計算/変換されていく。"),Object(c.a)("p",null,"これらの語彙はCSS spec/draftのいたるところで出てくるため、これを知っておくとspec/draftがかなり読みやすくなる。"),Object(c.a)("ol",null,Object(c.a)("li",{parentName:"ol"},"declared values"),Object(c.a)("li",{parentName:"ol"},"cascadced values"),Object(c.a)("li",{parentName:"ol"},"specified values"),Object(c.a)("li",{parentName:"ol"},"computed values"),Object(c.a)("li",{parentName:"ol"},"used values"),Object(c.a)("li",{parentName:"ol"},"actual values")))},function(e){return Object(c.a)(n.a.Fragment,null,Object(c.a)("h2",null,"declared values"),Object(c.a)("p",null,"stylesheetで宣言された値。同じpropertyに対し複数存在する可能性があり、順不同リストとしてcascading(別の章)に渡される。"))},function(e){return Object(c.a)(n.a.Fragment,null,Object(c.a)("h2",null,"cascaded values"),Object(c.a)("p",null,"cascadingの結果の値。declared valuesの中で、cascadeに勝利したもの。"))},function(e){return Object(c.a)(n.a.Fragment,null,Object(c.a)("h2",null,"specified values"),Object(c.a)("p",null,"cascaded valueにdefaultingを通した結果。"),Object(c.a)("p",null,"stylesheetの作成者が指定したすべてのelementのすべてのpropertyに存在することが保証されている。"),Object(c.a)("h3",null,"*",Object(c.a)("a",u({parentName:"h3"},{href:"https://www.w3.org/TR/css-cascade-4/#defaulting"}),"defaulting")),Object(c.a)("p",null,"Initial values, Inheritance, keywordからspecified valueを決定する"))},function(e){return Object(c.a)(n.a.Fragment,null,Object(c.a)("h2",null,"computed values"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"相対値は絶対値化される "),Object(c.a)("li",{parentName:"ul"},"計算コストが高い絶対値化はここでは行わない(",Object(c.a)("inlineCode",{parentName:"li"},"width: auto"),"など)"),Object(c.a)("li",{parentName:"ul"},"継承ではこの値が親から子へ継承される"),Object(c.a)("li",{parentName:"ul"},"property definition tableで定義されている方法で解決される。"),Object(c.a)("li",{parentName:"ul"},"getComputedStyle()はこの値を返すわけではない"),Object(c.a)("li",{parentName:"ul"},"Chrome Devtools のComputedもこの値ではない")))},function(e){return Object(c.a)(n.a.Fragment,null,Object(c.a)("h2",null,"used values"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"レイアウトで使われる絶対理論値"),Object(c.a)("li",{parentName:"ul"},"widthなどは祖先のレイアウトを決定してからじゃないと解決できないため、ここで初めて絶対値化される。")))},function(e){return Object(c.a)(n.a.Fragment,null,Object(c.a)("h2",null,"actual values"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"used valuesがそのまま使えない場合はもう1ステップある"),Object(c.a)("li",{parentName:"ul"},"floatはintに丸められる"),Object(c.a)("li",{parentName:"ul"},"「ここを見ればすべてのレイアウト結果がわかる」というわけではない",Object(c.a)("ul",{parentName:"li"},Object(c.a)("li",{parentName:"ul"},Object(c.a)("inlineCode",{parentName:"li"},"page-break-after")," など")))))},function(e){return Object(c.a)(n.a.Fragment,null,Object(c.a)("h2",null,Object(c.a)("a",u({parentName:"h2"},{href:"https://www.w3.org/TR/css-cascade-4/#stages-examples"}),"value processingの例")),Object(c.a)("p",null,Object(c.a)("img",u({src:t(10)},{alt:"example table"}))))}],p=[{},{},{},{},{},{},{},{},{},{}],i={};function b(e){var a=e.components,l=r(e,["components"]);return Object(c.a)("wrapper",u({},i,l,{components:a,mdxType:"MDXLayout"}),Object(c.a)("h1",null,"W3C CSS spec/draft を読む時に役立つValue Processingの概念"),Object(c.a)("p",null,"@arayaryoma"),Object(c.a)("p",null,"2020/09/01 #納涼_study"),Object(c.a)("hr",null),Object(c.a)("p",null,"W3C Understanding the CSS Specifications(",Object(c.a)("a",u({parentName:"p"},{href:"https://www.w3.org/Style/CSS/read)%E3%81%AB%E3%81%AFCSS"}),"https://www.w3.org/Style/CSS/read)にはCSS")," specはまずこれを読めと書いてある。"),Object(c.a)("p",null,"この中でも、",Object(c.a)("a",u({parentName:"p"},{href:"https://www.w3.org/TR/css-cascade-4/"}),"CSS Cascading and Inheritance"),"に記述されているValue ProcessingはCSSのspec/draftを読む際にたいへん役立つためここで紹介する。"),Object(c.a)("p",null,Object(c.a)("img",u({src:t(9)},{alt:"Screen capture of https://www.w3.org/Style/CSS/read"}))),Object(c.a)("hr",null),Object(c.a)("p",null,Object(c.a)("a",u({parentName:"p"},{href:"https://www.w3.org/TR/css-cascade-4/#value-stages"}),"Value Processing"),"には、UAが、parseしてtree化したdocumentのelementに対してstyleを適用する、\n最終的な値を計算するときの処理手順が記載されている。"),Object(c.a)("p",null,"この一連の計算ではparseされたstylesheetの値は下記の順に計算/変換されていく。"),Object(c.a)("p",null,"これらの語彙はCSS spec/draftのいたるところで出てくるため、これを知っておくとspec/draftがかなり読みやすくなる。"),Object(c.a)("ol",null,Object(c.a)("li",{parentName:"ol"},"declared values"),Object(c.a)("li",{parentName:"ol"},"cascadced values"),Object(c.a)("li",{parentName:"ol"},"specified values"),Object(c.a)("li",{parentName:"ol"},"computed values"),Object(c.a)("li",{parentName:"ol"},"used values"),Object(c.a)("li",{parentName:"ol"},"actual values")),Object(c.a)("hr",null),Object(c.a)("h2",null,"declared values"),Object(c.a)("p",null,"stylesheetで宣言された値。同じpropertyに対し複数存在する可能性があり、順不同リストとしてcascading(別の章)に渡される。"),Object(c.a)("hr",null),Object(c.a)("h2",null,"cascaded values"),Object(c.a)("p",null,"cascadingの結果の値。declared valuesの中で、cascadeに勝利したもの。"),Object(c.a)("hr",null),Object(c.a)("h2",null,"specified values"),Object(c.a)("p",null,"cascaded valueにdefaultingを通した結果。"),Object(c.a)("p",null,"stylesheetの作成者が指定したすべてのelementのすべてのpropertyに存在することが保証されている。"),Object(c.a)("h3",null,"*",Object(c.a)("a",u({parentName:"h3"},{href:"https://www.w3.org/TR/css-cascade-4/#defaulting"}),"defaulting")),Object(c.a)("p",null,"Initial values, Inheritance, keywordからspecified valueを決定する"),Object(c.a)("hr",null),Object(c.a)("h2",null,"computed values"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"相対値は絶対値化される "),Object(c.a)("li",{parentName:"ul"},"計算コストが高い絶対値化はここでは行わない(",Object(c.a)("inlineCode",{parentName:"li"},"width: auto"),"など)"),Object(c.a)("li",{parentName:"ul"},"継承ではこの値が親から子へ継承される"),Object(c.a)("li",{parentName:"ul"},"property definition tableで定義されている方法で解決される。"),Object(c.a)("li",{parentName:"ul"},"getComputedStyle()はこの値を返すわけではない"),Object(c.a)("li",{parentName:"ul"},"Chrome Devtools のComputedもこの値ではない")),Object(c.a)("hr",null),Object(c.a)("h2",null,"used values"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"レイアウトで使われる絶対理論値"),Object(c.a)("li",{parentName:"ul"},"widthなどは祖先のレイアウトを決定してからじゃないと解決できないため、ここで初めて絶対値化される。")),Object(c.a)("hr",null),Object(c.a)("h2",null,"actual values"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"used valuesがそのまま使えない場合はもう1ステップある"),Object(c.a)("li",{parentName:"ul"},"floatはintに丸められる"),Object(c.a)("li",{parentName:"ul"},"「ここを見ればすべてのレイアウト結果がわかる」というわけではない",Object(c.a)("ul",{parentName:"li"},Object(c.a)("li",{parentName:"ul"},Object(c.a)("inlineCode",{parentName:"li"},"page-break-after")," など")))),Object(c.a)("hr",null),Object(c.a)("h2",null,Object(c.a)("a",u({parentName:"h2"},{href:"https://www.w3.org/TR/css-cascade-4/#stages-examples"}),"value processingの例")),Object(c.a)("p",null,Object(c.a)("img",u({src:t(10)},{alt:"example table"}))))}b.isMDXComponent=!0},33:function(e,a,t){var l=t(3),n=t(34);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var c={insert:"head",singleton:!1},r=(l(n,c),n.locals?n.locals:{});e.exports=r},34:function(e,a,t){},9:function(e,a,t){e.exports=t.p+"9877eb9a3ab9af9d32727213ccf36ceb.webp"}},[[15,6,7]],[1,9]]);