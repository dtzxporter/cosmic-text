var srcIndex = JSON.parse('{\
"bitflags":["",[],["external.rs","internal.rs","iter.rs","lib.rs","parser.rs","public.rs","traits.rs"]],\
"bytemuck":["",[],["allocation.rs","anybitpattern.rs","checked.rs","contiguous.rs","internal.rs","lib.rs","no_uninit.rs","offset_of.rs","pod.rs","pod_in_option.rs","transparent.rs","zeroable.rs","zeroable_in_option.rs"]],\
"cosmic_text":["",[["edit",[],["editor.rs","mod.rs"]],["font",[["fallback",[],["mod.rs","unix.rs"]]],["mod.rs","system.rs"]]],["attrs.rs","bidi_para.rs","buffer.rs","buffer_line.rs","cursor.rs","glyph_cache.rs","layout.rs","lib.rs","shape.rs","shape_plan_cache.rs","swash.rs"]],\
"font_types":["",[],["bbox.rs","fixed.rs","fword.rs","glyph_id.rs","lib.rs","longdatetime.rs","name_id.rs","offset.rs","pen.rs","point.rs","raw.rs","tag.rs","uint24.rs","version.rs"]],\
"fontconfig_parser":["",[["types",[["match_",[],["edit.rs","test.rs"]]],["alias.rs","config.rs","constant.rs","dir.rs","document.rs","match_.rs","property.rs","selectfont.rs","value.rs"]]],["error.rs","lib.rs","parser.rs","types.rs","util.rs"]],\
"fontdb":["",[],["lib.rs"]],\
"libc":["",[["unix",[["linux_like",[["linux",[["arch",[["generic",[],["mod.rs"]]],["mod.rs"]],["gnu",[["b64",[["x86_64",[],["align.rs","mod.rs","not_x32.rs"]]],["mod.rs"]]],["align.rs","mod.rs"]]],["align.rs","mod.rs","non_exhaustive.rs"]]],["mod.rs"]]],["align.rs","mod.rs"]]],["fixed_width_ints.rs","lib.rs","macros.rs"]],\
"libm":["",[["math",[],["acos.rs","acosf.rs","acosh.rs","acoshf.rs","asin.rs","asinf.rs","asinh.rs","asinhf.rs","atan.rs","atan2.rs","atan2f.rs","atanf.rs","atanh.rs","atanhf.rs","cbrt.rs","cbrtf.rs","ceil.rs","ceilf.rs","copysign.rs","copysignf.rs","cos.rs","cosf.rs","cosh.rs","coshf.rs","erf.rs","erff.rs","exp.rs","exp10.rs","exp10f.rs","exp2.rs","exp2f.rs","expf.rs","expm1.rs","expm1f.rs","expo2.rs","fabs.rs","fabsf.rs","fdim.rs","fdimf.rs","fenv.rs","floor.rs","floorf.rs","fma.rs","fmaf.rs","fmax.rs","fmaxf.rs","fmin.rs","fminf.rs","fmod.rs","fmodf.rs","frexp.rs","frexpf.rs","hypot.rs","hypotf.rs","ilogb.rs","ilogbf.rs","j0.rs","j0f.rs","j1.rs","j1f.rs","jn.rs","jnf.rs","k_cos.rs","k_cosf.rs","k_expo2.rs","k_expo2f.rs","k_sin.rs","k_sinf.rs","k_tan.rs","k_tanf.rs","ldexp.rs","ldexpf.rs","lgamma.rs","lgamma_r.rs","lgammaf.rs","lgammaf_r.rs","log.rs","log10.rs","log10f.rs","log1p.rs","log1pf.rs","log2.rs","log2f.rs","logf.rs","mod.rs","modf.rs","modff.rs","nextafter.rs","nextafterf.rs","pow.rs","powf.rs","rem_pio2.rs","rem_pio2_large.rs","rem_pio2f.rs","remainder.rs","remainderf.rs","remquo.rs","remquof.rs","rint.rs","rintf.rs","round.rs","roundf.rs","scalbn.rs","scalbnf.rs","sin.rs","sincos.rs","sincosf.rs","sinf.rs","sinh.rs","sinhf.rs","sqrt.rs","sqrtf.rs","tan.rs","tanf.rs","tanh.rs","tanhf.rs","tgamma.rs","tgammaf.rs","trunc.rs","truncf.rs"]]],["lib.rs","libm_helper.rs"]],\
"log":["",[],["__private_api.rs","lib.rs","macros.rs"]],\
"memmap2":["",[],["advice.rs","lib.rs","unix.rs"]],\
"rangemap":["",[],["inclusive_map.rs","inclusive_set.rs","lib.rs","map.rs","range_wrapper.rs","set.rs","std_ext.rs"]],\
"read_fonts":["",[["generated",[],["font.rs","generated_avar.rs","generated_base.rs","generated_bitmap.rs","generated_cbdt.rs","generated_cblc.rs","generated_cff.rs","generated_cff2.rs","generated_cmap.rs","generated_colr.rs","generated_cpal.rs","generated_ebdt.rs","generated_eblc.rs","generated_fvar.rs","generated_gdef.rs","generated_glyf.rs","generated_gpos.rs","generated_gsub.rs","generated_gvar.rs","generated_head.rs","generated_hhea.rs","generated_hmtx.rs","generated_hvar.rs","generated_layout.rs","generated_maxp.rs","generated_mvar.rs","generated_name.rs","generated_os2.rs","generated_post.rs","generated_postscript.rs","generated_sbix.rs","generated_stat.rs","generated_variations.rs","generated_vhea.rs","generated_vmtx.rs","generated_vvar.rs"]],["tables",[["postscript",[],["blend.rs","charstring.rs","dict.rs","fd_select.rs","index.rs","stack.rs","string.rs"]]],["avar.rs","base.rs","bitmap.rs","cbdt.rs","cblc.rs","cff.rs","cff2.rs","cmap.rs","colr.rs","cpal.rs","ebdt.rs","eblc.rs","fvar.rs","gdef.rs","glyf.rs","gpos.rs","gsub.rs","gvar.rs","head.rs","hhea.rs","hmtx.rs","hvar.rs","instance_record.rs","layout.rs","loca.rs","lookupflag.rs","maxp.rs","mvar.rs","name.rs","os2.rs","post.rs","postscript.rs","sbix.rs","stat.rs","value_record.rs","variations.rs","vhea.rs","vmtx.rs","vvar.rs"]]],["array.rs","font_data.rs","lib.rs","offset.rs","offset_array.rs","read.rs","table_provider.rs","table_ref.rs","tables.rs"]],\
"roxmltree":["",[],["lib.rs","parse.rs","tokenizer.rs"]],\
"rustc_hash":["",[],["lib.rs"]],\
"rustybuzz":["",[["aat",[],["extended_kerning.rs","feature_mappings.rs","feature_selector.rs","map.rs","metamorphosis.rs","mod.rs","tracking.rs"]],["complex",[],["arabic.rs","arabic_table.rs","hangul.rs","hebrew.rs","indic.rs","indic_machine.rs","indic_table.rs","khmer.rs","khmer_machine.rs","machine_cursor.rs","mod.rs","myanmar.rs","myanmar_machine.rs","syllabic.rs","thai.rs","universal.rs","universal_machine.rs","universal_table.rs","vowel_constraints.rs"]],["ot",[],["apply.rs","contextual.rs","feature.rs","kerning.rs","layout.rs","map.rs","matching.rs","mod.rs","position.rs","substitute.rs"]]],["buffer.rs","common.rs","face.rs","fallback.rs","glyph_set.rs","lib.rs","normalize.rs","plan.rs","shape.rs","tag.rs","tag_table.rs","text_parser.rs","unicode.rs","unicode_norm.rs"]],\
"self_cell":["",[],["lib.rs","unsafe_self_cell.rs"]],\
"slotmap":["",[],["basic.rs","dense.rs","hop.rs","lib.rs","secondary.rs","util.rs"]],\
"smallvec":["",[],["lib.rs"]],\
"swash":["",[["feature",[],["aat.rs","at.rs","mod.rs","util.rs"]],["internal",[],["aat.rs","at.rs","cmap.rs","fixed.rs","glyf.rs","head.rs","mod.rs","parse.rs","var.rs","vorg.rs","xmtx.rs"]],["scale",[["bitmap",[],["mod.rs","png.rs"]],["cff",[],["hint.rs","mod.rs","outlines.rs"]],["glyf",[],["cache.rs","hint.rs","mod.rs","proxy.rs","scale.rs","var.rs"]]],["color.rs","image.rs","mod.rs","outline.rs","proxy.rs"]],["shape",[],["aat.rs","at.rs","buffer.rs","cache.rs","cluster.rs","engine.rs","feature.rs","mod.rs","partition.rs"]],["text",[["cluster",[],["char.rs","cluster.rs","complex.rs","info.rs","mod.rs","myanmar.rs","parse.rs","simple.rs","token.rs"]]],["analyze.rs","compose.rs","lang.rs","lang_data.rs","mod.rs","unicode.rs","unicode_data.rs"]]],["attributes.rs","cache.rs","charmap.rs","font.rs","lib.rs","macros.rs","metrics.rs","palette.rs","setting.rs","strike.rs","string.rs","tag.rs","variation.rs"]],\
"sys_locale":["",[],["lib.rs","unix.rs"]],\
"tinyvec":["",[["array",[],["generated_impl.rs"]]],["array.rs","arrayvec.rs","arrayvec_drain.rs","lib.rs","slicevec.rs","tinyvec.rs"]],\
"tinyvec_macros":["",[],["lib.rs"]],\
"ttf_parser":["",[["ggg",[],["chained_context.rs","context.rs","feature_variations.rs","layout_table.rs","lookup.rs","mod.rs"]],["tables",[["cff",[],["argstack.rs","cff1.rs","cff2.rs","charset.rs","charstring.rs","dict.rs","encoding.rs","index.rs","mod.rs","std_names.rs"]],["cmap",[],["format0.rs","format10.rs","format12.rs","format13.rs","format14.rs","format2.rs","format4.rs","format6.rs","mod.rs"]]],["ankr.rs","avar.rs","cbdt.rs","cblc.rs","colr.rs","cpal.rs","feat.rs","fvar.rs","gdef.rs","glyf.rs","gpos.rs","gsub.rs","gvar.rs","head.rs","hhea.rs","hmtx.rs","hvar.rs","kern.rs","kerx.rs","loca.rs","math.rs","maxp.rs","mod.rs","morx.rs","mvar.rs","name.rs","os2.rs","post.rs","sbix.rs","svg.rs","trak.rs","vhea.rs","vorg.rs"]]],["aat.rs","language.rs","lib.rs","parser.rs","var_store.rs"]],\
"unicode_bidi":["",[["char_data",[],["mod.rs","tables.rs"]]],["data_source.rs","deprecated.rs","explicit.rs","format_chars.rs","implicit.rs","level.rs","lib.rs","prepare.rs","utf16.rs"]],\
"unicode_bidi_mirroring":["",[],["lib.rs"]],\
"unicode_ccc":["",[],["lib.rs"]],\
"unicode_linebreak":["",[],["lib.rs","shared.rs"]],\
"unicode_properties":["",[],["lib.rs","tables.rs"]],\
"unicode_script":["",[],["lib.rs","tables.rs"]],\
"unicode_segmentation":["",[],["grapheme.rs","lib.rs","sentence.rs","tables.rs","word.rs"]],\
"yazi":["",[],["decode.rs","encode.rs","lib.rs"]],\
"zeno":["",[],["command.rs","geometry.rs","hit_test.rs","lib.rs","mask.rs","path_builder.rs","path_data.rs","raster.rs","scratch.rs","segment.rs","stroke.rs","style.rs","svg_parser.rs","traversal.rs"]]\
}');
createSrcSidebar();
