# W3C CSS spec/draft を読む時に役立つValue Processingの概念

@arayaryoma

2020/09/01 #納涼_study

---

W3C Understanding the CSS Specifications(https://www.w3.org/Style/CSS/read)にはCSS specはまずこれを読めと書いてある。

この中でも、[CSS Cascading and Inheritance](https://www.w3.org/TR/css-cascade-4/)に記述されているValue ProcessingはCSSのspec/draftを読む際にたいへん役立つためここで紹介する。
![Screen capture of https://www.w3.org/Style/CSS/read](./learning-css-ss.png)

---
[Value Processing](https://www.w3.org/TR/css-cascade-4/#value-stages)には、UAが、parseしてtree化したdocumentのelementに対してstyleを適用する、
最終的な値を計算するときの処理手順が記載されている。

この一連の計算ではparseされたstylesheetの値は下記の順に計算/変換されていく。

これらの語彙はCSS spec/draftのいたるところで出てくるため、これを知っておくとspec/draftがかなり読みやすくなる。

1. declared values
2. cascadced values
3. specified values
4. computed values
5. used values
6. actual values

---
## declared values
stylesheetで宣言された値。複数存在する可能性があり、順不同リストとしてcascading(別の章)に渡される。

---
## cascaded values
cascadingの結果の値。declared valuesの中で、cascadeに勝利したもの。

---
## specified values

---
## computed values

---
## used values

---
## actual values