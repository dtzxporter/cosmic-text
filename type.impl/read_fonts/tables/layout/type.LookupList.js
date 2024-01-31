(function() {var type_impls = {
"read_fonts":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TableRef%3C'a,+LookupListMarker%3CT%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#703-726\">source</a><a href=\"#impl-TableRef%3C'a,+LookupListMarker%3CT%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; <a class=\"type\" href=\"read_fonts/tables/layout/type.LookupList.html\" title=\"type read_fonts::tables::layout::LookupList\">LookupList</a>&lt;'a, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.lookup_count\" class=\"method\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#705-708\">source</a><h4 class=\"code-header\">pub fn <a href=\"read_fonts/tables/layout/type.LookupList.html#tymethod.lookup_count\" class=\"fn\">lookup_count</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u16.html\">u16</a></h4></section></summary><div class=\"docblock\"><p>Number of lookups in this table</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lookup_offsets\" class=\"method\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#712-715\">source</a><h4 class=\"code-header\">pub fn <a href=\"read_fonts/tables/layout/type.LookupList.html#tymethod.lookup_offsets\" class=\"fn\">lookup_offsets</a>(&amp;self) -&gt; &amp;'a [<a class=\"struct\" href=\"font_types/raw/struct.BigEndian.html\" title=\"struct font_types::raw::BigEndian\">BigEndian</a>&lt;<a class=\"struct\" href=\"font_types/offset/struct.Offset16.html\" title=\"struct font_types::offset::Offset16\">Offset16</a>&gt;]</h4></section></summary><div class=\"docblock\"><p>Array of offsets to Lookup tables, from beginning of LookupList\n— zero based (first lookup is Lookup index = 0)</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lookups\" class=\"method\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#718-725\">source</a><h4 class=\"code-header\">pub fn <a href=\"read_fonts/tables/layout/type.LookupList.html#tymethod.lookups\" class=\"fn\">lookups</a>(&amp;self) -&gt; <a class=\"struct\" href=\"read_fonts/struct.ArrayOfOffsets.html\" title=\"struct read_fonts::ArrayOfOffsets\">ArrayOfOffsets</a>&lt;'a, T, <a class=\"struct\" href=\"font_types/offset/struct.Offset16.html\" title=\"struct font_types::offset::Offset16\">Offset16</a>&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"read_fonts/trait.FontRead.html\" title=\"trait read_fonts::FontRead\">FontRead</a>&lt;'a&gt;,</span></h4></section></summary><div class=\"docblock\"><p>A dynamically resolving wrapper for <a href=\"read_fonts/struct.TableRef.html#method.lookup_offsets\" title=\"method read_fonts::TableRef::lookup_offsets\"><code>lookup_offsets</code></a>.</p>\n</div></details></div></details>",0,"read_fonts::tables::gpos::PositionLookupList","read_fonts::tables::gsub::SubstitutionLookupList"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FontRead%3C'a%3E-for-TableRef%3C'a,+LookupListMarker%3CT%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#673-684\">source</a><a href=\"#impl-FontRead%3C'a%3E-for-TableRef%3C'a,+LookupListMarker%3CT%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; <a class=\"trait\" href=\"read_fonts/trait.FontRead.html\" title=\"trait read_fonts::FontRead\">FontRead</a>&lt;'a&gt; for <a class=\"type\" href=\"read_fonts/tables/layout/type.LookupList.html\" title=\"type read_fonts::tables::layout::LookupList\">LookupList</a>&lt;'a, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/read_fonts/generated/generated_layout.rs.html#674-683\">source</a><a href=\"#method.read\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"read_fonts/trait.FontRead.html#tymethod.read\" class=\"fn\">read</a>(data: <a class=\"struct\" href=\"read_fonts/struct.FontData.html\" title=\"struct read_fonts::FontData\">FontData</a>&lt;'a&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"read_fonts/enum.ReadError.html\" title=\"enum read_fonts::ReadError\">ReadError</a>&gt;</h4></section></summary><div class='docblock'>Read an instace of <code>Self</code> from the provided data, performing validation. <a href=\"read_fonts/trait.FontRead.html#tymethod.read\">Read more</a></div></details></div></details>","FontRead<'a>","read_fonts::tables::gpos::PositionLookupList","read_fonts::tables::gsub::SubstitutionLookupList"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()