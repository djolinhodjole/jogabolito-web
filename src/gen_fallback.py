import json
d=json.load(open('data.json',encoding='utf-8'))
J=lambda x: json.dumps(x,ensure_ascii=False)
odm=[{"Polozka":a,"Castka":b} for a,b in d['odm']]
s=f"""const FALLBACK = {{
  Hraci: {J(d['roster'])}
    .map(([Jmeno,Cislo,Stav,Pozice])=>({{Jmeno,Cislo,Stav,Pozice,Foto:""}})),
  Zapasy: {J(d['matches'])}
    .map(([Kolo,Datum,Cas,Hriste,Doma,Souper,GJ,GS,Nasobic])=>({{Kolo,Datum,Cas,Hriste,Doma,Souper,"Goly JB":GJ,"Goly souper":GS,Nasobic}})),
  Statistiky: {J(d['rows'])}
    .map(([Kolo,Hrac,Goly,Asistence,Nula,Zlute,Cervene,Poznamka=""])=>({{Kolo,Hrac,Goly,Asistence,Nula,Zlute,Cervene,Poznamka}})),
  Odmeny: {J(odm)}
}};
"""
open('fallback.js','w',encoding='utf-8').write(s)
