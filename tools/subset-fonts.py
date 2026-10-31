# Requires fonttools==4.68.0 and brotli==1.2.1. Re-run after adding website copy.
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont
import json
root=Path(__file__).resolve().parents[1]
text=''.join(p.read_text() for p in (root/'app').rglob('*') if p.suffix in ('.ts','.tsx'))
chars=set(map(ord,text))|set(range(32,127))|set(range(0x2000,0x2070))
report={}
for weight in ('Regular','Semibold'):
 original=root/f'public/fonts/MiSans-{weight}.woff2'; target=root/f'public/fonts/MiSans-{weight}-site-20261031.woff2'
 options=subset.Options(); options.flavor='woff2'; options.recalc_timestamp=False
 font=subset.load_font(str(original),options); sub=subset.Subsetter(options=options); sub.populate(unicodes=chars); sub.subset(font); subset.save_font(font,str(target),options)
 before=set(TTFont(original).getBestCmap()); after=set(TTFont(target).getBestCmap()); assert (chars&before)<=after
 report[weight]={'original_bytes':original.stat().st_size,'subset_bytes':target.stat().st_size,'requested_characters':len(chars),'covered_required_glyphs':len(chars&before)}
css=root/'app/globals.css';s=css.read_text()
for weight in ('Regular','Semibold'): s=s.replace(f'/fonts/MiSans-{weight}.woff2',f'/fonts/MiSans-{weight}-site-20261031.woff2')
css.write_text(s)
(root/'docs/font-subset-2026-10-31.json').write_text(json.dumps(report,indent=2))
print(json.dumps(report,indent=2))
