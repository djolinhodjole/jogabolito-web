/* ===== Nastavení =====
   Vložte ID Google Sheetu (část URL mezi /d/ a /edit). Sheet musí být sdílený
   "Kdokoli s odkazem může zobrazit". Prázdné = web použije data níže. */
const SHEET_ID = "";

__FALLBACK__
FALLBACK.Tabulka=[[1,"Bílá dáma",6,6,0,0,"45:10",12],[2,"Joga Bolíto",6,4,0,2,"37:11",8],[3,"Halandovo kladivo FK",5,4,0,1,"27:11",8],[4,"Kung Funited",6,3,2,1,"19:7",8],[5,"Milion plus xG",5,3,0,2,"26:10",6],[6,"Kopačky na pivu",6,3,0,3,"21:17",6],[7,"Příkopy FC",5,2,0,3,"16:13",4],[8,"Lobotomici",4,1,2,1,"11:14",4],[9,"Medfúci",5,1,2,2,"8:22",4],[10,"Páni pivsonů FC",6,1,1,4,"7:28",3],[11,"Prague Underground",6,0,2,4,"7:43",2],[12,"G Yetti Maniacs",6,0,1,5,"4:42",1]]
  .map(([Poradi,Tym,Z,V,R,P,Skore,Body])=>({Poradi,Tym,Z,V,R,P,Skore,Body}));

/* ===== Texty CZ / EN ===== */
const I18N={
 cs:{nav_home:"Domů",nav_matches:"Zápasy",nav_table:"Tabulka",nav_players:"Hráči",next_match:"Další zápas",round:"kolo",league:"Hanspaulská liga",
  season_title:"Sezóna v číslech",cta1_l:"Rozpis a výsledky",cta1_t:"Zápasy →",cta1_d:"Všech 11 kol, adresy hřišť a skóre.",cta2_t:"Tabulka →",cta2_d:"Kde stojíme. Top 3 postupují.",
  cta3_l:"Soupiska a rewards",cta3_t:"Hráči →",cta3_d:"Góly, asistence a odměny každého hráče.",th_team:"Tým",th_p:"Zápasy",th_w:"Výhry",th_d:"Remízy",th_l:"Prohry",th_gd:"Skóre",th_pts:"Body",
  promo:"Postup",releg:"Sestup",sort_by:"Seřadit podle",s_num:"Číslo",s_g:"Góly",s_a:"Asistence",enter:"Klikni na vlajku",pos:{"brankář":"Brankář","obránce":"Obránce","záložník":"Záložník","útočník":"Útočník"},tick_m:x=>`${x} ${x===1?"zápas":x>=2&&x<=4?"zápasy":"zápasů"}`,tick_title:"Top hráči",rw_toggle:"Reward system",bonus_title:"Na konci sezóny",bonus_text:"Navíc dostanou tři hráči bonus za celou sezónu.",bonus_names:{},
  asof:k=>`Stav po ${k}. kole`,record:(w,d,l,gf,ga)=>`${w} výhry · ${d} remízy · ${l} prohry · skóre ${gf}:${ga}`,
  place:p=>`${p}. místo`,pts:x=>`${x} ${x===1?"bod":x>=2&&x<=4?"body":"bodů"}`,home_match:"Domácí zápas",away_match:"Venkovní zápas",home:"Doma",away:"Venku",
  round_n:k=>`${k}. kolo`,next_tag:"Další zápas · ",top_scorer:"Nejlepší střelec",top_assist:"Nejvíc asistencí",paid:"Rewards vyplaceno",kitty:"Kč z týmové kasičky",
  bilance:"Bilance",wdl:"Výhry · remízy · prohry",season:"Sezóna",players_n:x=>`${x} hráčů · klikni na kartu`,
  rw_title:"Jak funguje Rewards",rw_text:"Z týmové kasičky dostává hráč odměnu za každý svůj gól, asistenci a vychytanou nulu. Čím víc pomůže týmu, tím víc dostane.",
  per_goal:"Za gól",per_assist:"Za asistenci",per_cs:"Za vychytanou nulu",most_rw:"Nejvíc rewards",
  goals:x=>`${x} ${x===1?"gól":x>=2&&x<=4?"góly":"gólů"}`,assists:x=>`${x} ${x===1?"asistence":x>=2&&x<=4?"asistence":"asistencí"}`,
  injured:"Zraněný",out:"Mimo soupisku",open_card:"otevřít kartu",idle:"Nenastoupil",inj_out:"Zraněný – nehrál",tab_wait:k=>`Tabulka je po ${k}. kole. Aktualizujeme ji, jakmile ji zveřejní PSMF.`,tab_wait_short:"Čekáme na PSMF",photo_soon:"Fotka brzy",facts:"Fakta",f_debut:"Debut",f_best:"Nejlepší zápas",f_avg:"G/A na zápas",f_share:"Podíl na gólech týmu",season_stats:"Statistiky sezóny",per_match:"Zápas po zápase",tap:"Statistiky ↻",detail:"Detail po zápasech →",
  k_m:"zápasy",k_g:"góly",k_a:"asistence",k_y:"žluté",k_r:"červené",k_cs:"vychytané nuly",
  t_m:"Zápasy",t_g:"Góly",t_a:"Asistence",t_y:"Žluté karty",t_r:"Červené karty",t_cs:"Vychytané nuly",ga:"G/A",
  matches_h:"Zápasy",md_open:"detail zápasu",md_tbd:"Zápas se ještě nehrál.",md_timeline:"Průběh zápasu",md_goals:"Góly",md_assists:"Asistence",md_none:"Střelci k tomuto zápasu zatím nejsou doplnění.",md_note:"Přesné minuty a soupeřovy střelce doplníme od dalších zápasů.",notes:{"zranění":"zranění"},played:"✓ odehráno",cs_one:"vychytaná nula",yellow:"žlutá",red:"červená",none:"Zatím bez odehraného zápasu.",close:"Zavřít",
  src_live:"Data: Google Sheet (živě)",src_off:k=>`Data: stav po ${k}. kole`,res:{V:"V",P:"P",R:"R"},res_t:{V:"Výhra",P:"Prohra",R:"Remíza",N:"Nadcházející"},
  days:["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota"],date:(d,m)=>`${d}. ${["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"][m]}`,
  status:{"aktivní":"Aktivní","zraněný":"Zraněný","mimo soupisku":"Mimo soupisku"},cur:"Kč"},
 en:{nav_home:"Home",nav_matches:"Matches",nav_table:"Table",nav_players:"Players",next_match:"Next match",round:"round",league:"Hanspaulka League",
  season_title:"Season in numbers",cta1_l:"Fixtures & results",cta1_t:"Matches →",cta1_d:"All 11 rounds, pitch addresses and scores.",cta2_t:"Table →",cta2_d:"Where we stand. Top 3 go up.",
  cta3_l:"Squad & rewards",cta3_t:"Players →",cta3_d:"Goals, assists and rewards for every player.",th_team:"Team",th_p:"Played",th_w:"Won",th_d:"Drawn",th_l:"Lost",th_gd:"Goals",th_pts:"Points",
  promo:"Promotion",releg:"Relegation",sort_by:"Sort by",s_num:"Number",s_g:"Goals",s_a:"Assists",enter:"Tap the flag to enter",pos:{"brankář":"Goalkeeper","obránce":"Defender","záložník":"Midfielder","útočník":"Forward"},tick_m:x=>`${x} match${x===1?"":"es"}`,tick_title:"Top players",rw_toggle:"Reward system",bonus_title:"End of season",bonus_text:"Three players also earn a bonus for the whole season.",bonus_names:{"MVP sezóny":"Season MVP","Nejlepší střelec sezóny":"Season top scorer","Nejvíce asistencí sezóny":"Season most assists"},
  asof:k=>`After round ${k}`,record:(w,d,l,gf,ga)=>`${w} won · ${d} drawn · ${l} lost · goals ${gf}:${ga}`,
  place:p=>`${p}${p%10===1&&p!==11?"st":p%10===2&&p!==12?"nd":p%10===3&&p!==13?"rd":"th"} place`,pts:x=>`${x} pts`,home_match:"Home match",away_match:"Away match",home:"Home",away:"Away",
  round_n:k=>`Round ${k}`,next_tag:"Next match · ",top_scorer:"Top scorer",top_assist:"Most assists",paid:"Rewards paid",kitty:"CZK from the team kitty",
  bilance:"Record",wdl:"Wins · draws · losses",season:"Season",players_n:x=>`${x} players · tap a card`,
  rw_title:"How Rewards work",rw_text:"Every goal, assist and clean sheet earns the player a reward from the team kitty. The more you help the team, the more you get.",
  per_goal:"Per goal",per_assist:"Per assist",per_cs:"Per clean sheet",most_rw:"Most rewards",
  goals:x=>`${x} goal${x===1?"":"s"}`,assists:x=>`${x} assist${x===1?"":"s"}`,
  injured:"Injured",out:"Not in squad",open_card:"open card",idle:"Didn't play",inj_out:"Injured – didn't play",tab_wait:k=>`Table shown after round ${k}. We'll update it as soon as PSMF publishes it.`,tab_wait_short:"Waiting for PSMF",photo_soon:"Photo coming soon",facts:"Facts",f_debut:"Debut",f_best:"Best match",f_avg:"G/A per match",f_share:"Share of team goals",season_stats:"Season stats",per_match:"Match by match",tap:"Stats ↻",detail:"Match by match →",
  k_m:"matches",k_g:"goals",k_a:"assists",k_y:"yellow",k_r:"red",k_cs:"clean sheets",
  t_m:"Matches",t_g:"Goals",t_a:"Assists",t_y:"Yellow cards",t_r:"Red cards",t_cs:"Clean sheets",ga:"G/A",
  matches_h:"Matches",md_open:"match details",md_tbd:"This match hasn't been played yet.",md_timeline:"Match timeline",md_goals:"Goals",md_assists:"Assists",md_none:"Scorers for this match haven't been added yet.",md_note:"Exact minutes and opposition scorers will be added from the next matches.",notes:{"zranění":"injured"},played:"✓ played",cs_one:"clean sheet",yellow:"yellow",red:"red",none:"No matches yet.",close:"Close",
  src_live:"Data: Google Sheet (live)",src_off:k=>`Data: after round ${k}`,res:{V:"W",P:"L",R:"D"},res_t:{V:"Win",P:"Loss",R:"Draw",N:"Upcoming"},
  days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],date:(d,m)=>`${d} ${["January","February","March","April","May","June","July","August","September","October","November","December"][m]}`,
  status:{"aktivní":"Active","zraněný":"Injured","mimo soupisku":"Not in squad"},cur:"CZK"}
};
let LANG="cs";
const T=k=>I18N[LANG][k];

function parseCSV(text){
  const rows=[];let row=[],cell="",q=false;
  for(let i=0;i<text.length;i++){const c=text[i];
    if(q){ if(c=='"'){ if(text[i+1]=='"'){cell+='"';i++;} else q=false; } else cell+=c; }
    else if(c=='"') q=true; else if(c==','){row.push(cell);cell="";}
    else if(c=='\n'||c=='\r'){ if(c=='\r'&&text[i+1]=='\n')i++; row.push(cell);rows.push(row);row=[];cell=""; }
    else cell+=c;}
  if(cell!==""||row.length){row.push(cell);rows.push(row);}
  const head=(rows.shift()||[]).map(h=>h.trim());
  return rows.filter(r=>r.some(v=>String(v).trim()!=="")).map(r=>Object.fromEntries(head.map((h,i)=>[h,(r[i]??"").trim()])));
}
async function loadSheet(name){
  const url=`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(name)}`;
  const r=await fetch(url); if(!r.ok) throw new Error(name); return parseCSV(await r.text());
}
async function loadAll(){
  if(!SHEET_ID) return {data:FALLBACK,live:false};
  try{
    const [Hraci,Zapasy,Statistiky,Odmeny]=await Promise.all(["Hraci","Zapasy","Statistiky","Odmeny"].map(loadSheet));
    let Tabulka=FALLBACK.Tabulka; try{const t=await loadSheet("Tabulka"); if(t.length) Tabulka=t;}catch(e){}
    let Udalosti=[]; try{Udalosti=await loadSheet("Udalosti");}catch(e){}
    return {data:{Hraci,Zapasy,Statistiky,Odmeny,Tabulka,Udalosti},live:true};
  }catch(e){ return {data:FALLBACK,live:false}; }
}

const n=v=>{const x=parseFloat(String(v??"").replace(/\s/g,"").replace(",","."));return isNaN(x)?0:x};
const has=v=>String(v??"").trim()!=="";
const kc=v=>v.toLocaleString(LANG==="cs"?"cs-CZ":"en-GB")+" "+T("cur");
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const $=id=>document.getElementById(id);
const HRISTE={ZABEH:"Záběhlická 82/3, Praha 10",BECH:"Na Korunce 580, Praha 9",TEMPO:"Ve Lhotce 1045/3, Praha 4",DEKAN:"Děkanská vinice I 987/5, Praha 4"};
const posTxt=p=>{const k=String(p||"").trim().toLowerCase();return k?(I18N[LANG].pos[k]||p):"";};
const statusTxt=s=>{const k=String(s||"").trim().toLowerCase();return I18N[LANG].status[k]||s||"";};

let DATA=null, S=null, SORT="num";

function compute(data){
  const players=data.Hraci.filter(p=>has(p.Jmeno));
  const info=Object.fromEntries(players.map(p=>[p.Jmeno.trim(),{num:has(p.Cislo)?String(n(p.Cislo)):"",stav:p.Stav||"",foto:(p.Foto||"").trim(),pos:(p.Pozice||"").trim()}]));
  const matches=data.Zapasy.filter(m=>has(m.Kolo)).sort((a,b)=>n(a.Kolo)-n(b.Kolo));
  const byKolo=Object.fromEntries(matches.map(m=>[String(n(m.Kolo)),m]));
  const mult=k=>{const m=byKolo[k];return m&&has(m.Nasobic)?n(m.Nasobic):1};
  const price=k=>{const r=data.Odmeny.find(o=>(o.Polozka||"").toLowerCase().startsWith(k));return r?n(r.Castka):0};
  const P={g:price("gól"),a:price("asist"),cs:price("vychyt")};
  const tot={};
  const get=k=>tot[k]||(tot[k]={name:k,g:0,a:0,cs:0,y:0,r:0,kc:0,rounds:new Set(),log:[]});
  for(const p of players) get(p.Jmeno.trim());
  for(const s of data.Statistiky){ if(!has(s.Hrac)) continue;
    const t=get(s.Hrac.trim());
    const g=n(s.Goly),a=n(s.Asistence),cs=n(s.Nula),y=n(s.Zlute),r=n(s.Cervene);
    const k=has(s.Kolo)?String(n(s.Kolo)):"";
    t.g+=g;t.a+=a;t.cs+=cs;t.y+=y;t.r+=r;t.kc+=(g*P.g+a*P.a+cs*P.cs)*(k?mult(k):1);
    if(k){t.rounds.add(k);t.log.push({k,g,a,cs,y,r,note:(s.Poznamka||"").trim()});}
  }
  return {players,info,matches,byKolo,P,tot,list:Object.values(tot)};
}

function render(){
  if(!DATA) return;
  const {data,live}=DATA;
  const {players,info,matches,byKolo,P,tot,list}=S=compute(data);
  S.data=data; S.addr=m=>has(m.Adresa)?m.Adresa:(HRISTE[(m.Hriste||"").trim().toUpperCase()]||"");
  const num=name=>info[name]?.num||"";

  // static texts
  document.documentElement.lang=LANG;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const v=T(el.dataset.i18n); if(typeof v==="string") el.textContent=v;});
  $("lang").textContent=LANG==="cs"?"EN":"CZ";

  const isDone=m=>has(m["Goly JB"])&&has(m["Goly souper"]);
  const played=matches.filter(isDone);
  let W=0,D=0,L=0,gf=0,ga=0;
  for(const m of played){const a=n(m["Goly JB"]),b=n(m["Goly souper"]);gf+=a;ga+=b;a>b?W++:a<b?L++:D++;}
  const last=played[played.length-1];
  $("asof").textContent=last?T("asof")(n(last.Kolo)):"";
  $("record").textContent=T("record")(W,D,L,gf,ga);
  const me=(data.Tabulka||[]).find(t=>(t.Tym||"").toLowerCase().includes("joga"));
  $("season-line").textContent=`${me?T("place")(n(me.Poradi))+" · ":""}${T("pts")(W*2+D)} · ${gf}:${ga}`;

  // next match
  const nextM=matches.find(m=>!isDone(m));
  const lastKolo=matches.length?n(matches[matches.length-1].Kolo):0;
  const addr=m=>has(m.Adresa)?m.Adresa:(HRISTE[(m.Hriste||"").trim().toUpperCase()]||"");
  if(nextM){
    const home=(nextM.Doma||"").toLowerCase().startsWith("a");
    $("next-title").innerHTML=`Joga Bolíto vs<br>${esc(nextM.Souper)}`;
    $("next-round").textContent=n(nextM.Kolo); $("next-of").textContent=`/ ${lastKolo}`;
    const ad=addr(nextM)||nextM.Hriste||""; const parts=ad.split(",");
    $("next-addr").innerHTML=parts.length>1?`${esc(parts[0].trim())}<br>${esc(parts.slice(1).join(",").trim())}`:esc(ad);
    const [d,mo,yr]=String(nextM.Datum).split(".").map(x=>parseInt(x,10));
    const dt=new Date(yr||2026,(mo||1)-1,d||1);
    $("next-date").innerHTML=`${T("days")[dt.getDay()]}<br>${T("date")(d,(mo||1)-1)}<br>${esc(nextM.Cas)}`;
    $("next-home").textContent=home?T("home_match"):T("away_match");
  }else{ $("next-label").textContent=T("season"); $("next-title").textContent="Joga Bolíto F.C."; }

  // season numbers
  const topBy=k=>[...list].sort((x,y)=>y[k]-x[k]||x.name.localeCompare(y.name,"cs"))[0];
  const tg=topBy("g"),ta=topBy("a"),tk=topBy("kc");
  const who=t=>`${esc(t.name)}${num(t.name)?" · "+num(t.name):""}`;
  const sumKc=list.reduce((s,t)=>s+t.kc,0);
  $("season").innerHTML=[
    [T("top_scorer"),tg&&tg.g?tg.g:"–",tg&&tg.g?who(tg):""],
    [T("top_assist"),ta&&ta.a?ta.a:"–",ta&&ta.a?who(ta):""],
    [T("paid"),sumKc.toLocaleString(LANG==="cs"?"cs-CZ":"en-GB"),T("kitty")],
    [T("bilance"),`${W}–${D}–${L}`,T("wdl")]
  ].map(([l,b,w])=>`<div><span class="lab muted">${l}</span><span class="big j">${b}</span><span class="who">${w}</span></div>`).join("");

  // matches
  $("matches").innerHTML=matches.map(m=>{
    const done=isDone(m), a=n(m["Goly JB"]), b=n(m["Goly souper"]);
    const res=!done?"N":a>b?"V":a<b?"P":"R";
    const home=(m.Doma||"").toLowerCase().startsWith("a");
    const isNext=m===nextM; const ad=addr(m);
    return `<button class="match${isNext?" next":""}" data-m="${n(m.Kolo)}" aria-label="${T("round_n")(n(m.Kolo))} – vs ${esc(m.Souper)} – ${T("md_open")}">
      <div class="badge ${res}" title="${T("res_t")[res]}">${res==="N"?"–":T("res")[res]}</div>
      <div class="m-meta"><b>${esc(m.Datum)}</b>${isNext?T("next_tag"):""}${T("round_n")(n(m.Kolo))} · ${esc(m.Cas)}</div>
      <div class="m-opp"><small>${home?T("home"):T("away")}</small>vs ${esc(m.Souper)}${ad?`<em>${esc(ad)}</em>`:""}</div>
      <div class="score num${done?"":" tbd"}">${done?`${a}<i>:</i>${b}`:`–<i>:</i>–`}</div>
    </button>`}).join("");

  // league
  const tab=(data.Tabulka||[]).filter(t=>has(t.Tym)).sort((x,y)=>n(x.Poradi)-n(y.Poradi));
  const nT=tab.length;
  {const tr=me?n(me.Z):0; const lastPlayed=last?n(last.Kolo):0; const box=$("table-note");
   if(box){ if(me&&lastPlayed>tr){box.hidden=false;box.innerHTML=`<span class="tn-dot" aria-hidden="true"></span><span><b>${T("tab_wait_short")}</b> ${T("tab_wait")(tr)}</span>`;} else box.hidden=true; } }
  $("league").innerHTML=tab.map(t=>{const p=n(t.Poradi);
    const cls=[p<=3?"up":"",p>nT-3?"down":"",(t.Tym||"").toLowerCase().includes("joga")?"me":""].join(" ");
    return `<tr class="${cls}"><td class="pos">${p}.</td><td class="team">${esc(t.Tym)}</td><td>${esc(t.Z)}</td><td>${esc(t.V)}</td><td>${esc(t.R)}</td><td>${esc(t.P)}</td><td>${esc(t.Skore)}</td><td class="pts">${esc(t.Body)}</td></tr>`}).join("");

  // players
  $("squad-count").textContent=T("players_n")(players.filter(p=>has(p.Cislo)).length);
  $("explain").innerHTML=`<div class="intro"><b>${T("rw_title")}</b><span>${T("rw_text")}</span></div>`
    +[[T("per_goal"),P.g],[T("per_assist"),P.a],[T("per_cs"),P.cs]].map(([l,v])=>`<div><small>${l}</small><span class="j">${kc(v)}</span></div>`).join("");
  const bonus=data.Odmeny.filter(o=>/sez[oó]n/i.test(o.Polozka||""));
  $("explain-bonus").innerHTML=bonus.length?`<div class="intro"><b>${T("bonus_title")}</b><span>${T("bonus_text")}</span></div>`
    +bonus.map(o=>`<div><small>${esc(T("bonus_names")[(o.Polozka||"").trim()]||o.Polozka)}</small><span class="j">${kc(n(o.Castka))}</span></div>`).join(""):"";
  $("leaders").innerHTML=[[T("top_scorer"),tg,"g",T("goals")],[T("top_assist"),ta,"a",T("assists")],[T("most_rw"),tk,"kc",kc]]
    .map(([l,t,k,f])=>t&&t[k]?`<button data-p="${esc(t.name)}"><span class="lab muted">${l}</span><span class="big j">${esc(t.name)}</span><span class="who">${f(t[k])}</span></button>`:"").join("");
  $("keys").innerHTML=[["🏟️",T("k_m")],["⚽",T("k_g")],["🅰️",T("k_a")],["🟨",T("k_y")],["🟥",T("k_r")],["🧤",T("k_cs")]].map(([e,l])=>`<span>${e} ${l}</span>`).join("");
  renderPlayers();

  // top players ticker
  const top=[...list].filter(t=>t.g+t.a>0).sort((x,y)=>(y.g+y.a)-(x.g+x.a)||y.g-x.g).slice(0,6);
  const item=t=>`<span class="tk"><b class="j">${num(t.name)||"–"}</b><b class="j">${esc(t.name)}</b><span>🏟️ ${T("tick_m")(t.rounds.size)}</span><span>🔥 ${t.g+t.a} G/A</span></span>`;
  const run=top.map(item).join('<span class="tk-sep" aria-hidden="true">✦</span>');
  document.querySelectorAll(".ticker").forEach(el=>{
    el.setAttribute("aria-label",T("tick_title")+": "+top.map(t=>`${t.name} ${t.g+t.a} G/A`).join(", "));
    el.innerHTML=`<span class="tk-label lab">${T("tick_title")}</span><div class="tk-viewport"><div class="tk-track" aria-hidden="true">${run}<span class="tk-sep">✦</span>${run}<span class="tk-sep">✦</span></div></div>`;
  });

  $("source").textContent=live?T("src_live"):T("src_off")(last?n(last.Kolo):0);
}

function renderPlayers(){
  const {list,info}=S;
  const numOf=t=>info[t.name]?.num?n(info[t.name].num):999;
  const arr=list.filter(t=>info[t.name]?.num||t.rounds.size||t.g||t.a)
    .sort((x,y)=>SORT==="num"?numOf(x)-numOf(y):(y[SORT]-x[SORT]||numOf(x)-numOf(y)));
  $("players").innerHTML=arr.map(t=>{
    const inf=info[t.name]||{num:"",stav:"",foto:""};
    const st=(inf.stav||"").toLowerCase();
    const tag=st.startsWith("zran")?`<span class="tag">${T("injured")}</span>`:(st.startsWith("mimo")?`<span class="tag off">${T("out")}</span>`:"");
    const photo=inf.foto?`<img class="photo" src="${esc(inf.foto)}" alt="" loading="lazy">`:`<span class="ph-empty"><img class="crest-light" src="__CREST_NAVY__" alt=""><img class="crest-dark" src="__CREST_CREAM__" alt=""></span>`;
    return `<div class="pcard" data-card="${esc(t.name)}">
      <button class="flip" data-zoom="${esc(t.name)}" aria-haspopup="dialog" aria-label="${esc(t.name)} – ${T("open_card")}">
        <span class="inner">
          <span class="pf front${inf.foto?"":" nophoto"}">${photo}${inf.pos?`<span class="pos">${esc(posTxt(inf.pos))}</span>`:""}${tag}
            <span class="meta"><span class="n num">${inf.num||"–"}</span><span class="nm">${esc(t.name)}</span></span></span>
        </span>
      </button>
    </div>`}).join("");
  requestAnimationFrame(fitNames);
}

function fitNames(){
  document.querySelectorAll(".pf .nm").forEach(el=>{
    el.style.fontSize="";
    let fs=parseFloat(getComputedStyle(el).fontSize);
    while(el.scrollWidth>el.clientWidth&&fs>10){fs-=0.5;el.style.fontSize=fs+"px";}
  });
}
window.addEventListener("resize",()=>{clearTimeout(window.__fit);window.__fit=setTimeout(fitNames,120);});
if(document.fonts){
  document.fonts.ready.then(()=>fitNames());
  document.fonts.addEventListener&&document.fonts.addEventListener("loadingdone",()=>fitNames());
  document.fonts.load("800 24px Archivo").then(()=>fitNames()).catch(()=>{});
}
window.addEventListener("load",()=>fitNames());

function openMatch(k){
  const m=S.byKolo[String(k)]; if(!m) return;
  const done=has(m["Goly JB"])&&has(m["Goly souper"]);
  const a=n(m["Goly JB"]),b=n(m["Goly souper"]);
  const home=(m.Doma||"").toLowerCase().startsWith("a");
  const res=!done?"N":a>b?"V":a<b?"P":"R";
  const ev=(S.data.Udalosti||[]).filter(e=>String(n(e.Kolo))===String(k)&&(has(e.Strelec)||has(e.Asistence)));
  const isUs=e=>!String(e.Tym||"").toLowerCase().startsWith("s");
  const num=nm=>S.info[nm]?.num||"";
  let body="";
  if(!done){
    body=`<p class="md-empty">${T("md_tbd")}</p>`;
  }else if(ev.length){
    const rows=[...ev].sort((x,y)=>n(x.Minuta)-n(y.Minuta)).map(e=>{
      const us=isUs(e);
      return `<div class="ev ${us?"us":"them"}"><span class="min num">${has(e.Minuta)?esc(e.Minuta)+"'":""}</span><span class="ev-ball">⚽</span>
        <span class="ev-txt"><b>${esc(e.Strelec||"?")}</b>${us&&num((e.Strelec||"").trim())?` <i>${num((e.Strelec||"").trim())}</i>`:""}${has(e.Asistence)?`<small>🅰️ ${esc(e.Asistence)}</small>`:""}</span>
        <span class="ev-side">${us?"Joga Bolíto":esc(m.Souper)}</span></div>`}).join("");
    body=`<h4>${T("md_timeline")}</h4><div class="evlist">${rows}</div>`;
  }else{
    const st=(S.data.Statistiky||[]).filter(r=>String(n(r.Kolo))===String(k)&&has(r.Hrac));
    const sc=st.filter(r=>n(r.Goly)>0).sort((x,y)=>n(y.Goly)-n(x.Goly));
    const as=st.filter(r=>n(r.Asistence)>0).sort((x,y)=>n(y.Asistence)-n(x.Asistence));
    const cs=st.filter(r=>n(r.Nula)>0);
    const li=(arr,key,emo)=>arr.map(r=>`<div class="mrow"><span>${emo} <b>${esc(r.Hrac)}</b>${num(r.Hrac.trim())?` <i class="muted">${num(r.Hrac.trim())}</i>`:""}</span><span>${n(r[key])>1?"× "+n(r[key]):""}</span></div>`).join("");
    body=(sc.length?`<h4>${T("md_goals")}</h4>${li(sc,"Goly","⚽")}`:"")
      +(as.length?`<h4 style="margin-top:18px">${T("md_assists")}</h4>${li(as,"Asistence","🅰️")}`:"")
      +(cs.length?`<h4 style="margin-top:18px">${T("t_cs")}</h4>${li(cs,"Nula","🧤")}`:"")
      +(!sc.length&&!as.length?`<p class="md-empty">${T("md_none")}</p>`:"");
  }
  const ad=S.addr(m);
  $("dlg-in").innerHTML=`<span class="dlg-crest" aria-hidden="true"><img class="crest-light" src="__CREST_NAVY__" alt=""><img class="crest-dark" src="__CREST_CREAM__" alt=""></span>
    <div class="dlg-head md-head"><div style="min-width:0;flex:1">
      <span class="st">${T("round_n")(n(m.Kolo))} · ${esc(m.Datum)} · ${esc(m.Cas)} · ${home?T("home"):T("away")}</span>
      <h3 id="dlg-name" style="margin-top:8px">Joga Bolíto <span class="muted" style="font-size:.6em">vs</span> ${esc(m.Souper)}</h3>
      ${ad?`<span class="st" style="text-transform:none;letter-spacing:0;font-weight:600">${esc(ad)}</span>`:""}
    </div><button class="close" aria-label="${T("close")}">×</button></div>
    <div class="md-score num"><span class="badge ${res}">${res==="N"?"–":T("res")[res]}</span><b class="j">${done?`${a} : ${b}`:"– : –"}</b></div>
    <div class="dlg-body">${body}</div>`;
  const d=$("dlg"); if(!d.open) d.showModal(); d.querySelector(".close").focus();
}

/* ===== Profily hráčů =====
   Sem se doplní fotky a vlastní fakta. Příklad:
   "Sultan": { foto: "foto/sultan.jpg", fakta: [["Silná noha","Pravá"],["Oblíbený hráč","Neymar"]] } */
const PROFILY = {};

let PZ = null; // {card, name}
function cardBack(name){
  const t=S.tot[name]; const inf=S.info[name]||{num:"",stav:"",pos:""};
  const prof=PROFILY[name]||{}; const foto=prof.foto||inf.foto||"";
  const inj=(inf.stav||"").toLowerCase().startsWith("zran");
  const mp=t.rounds.size;
  const tiles=[[T("t_m"),mp],[T("t_g"),t.g],[T("t_a"),t.a],[T("ga"),t.g+t.a],[T("t_y"),t.y],[T("t_r"),t.r]];
  if(t.cs) tiles.push([T("t_cs"),t.cs]);
  // computed facts
  const logs=[...t.log].sort((a,b)=>n(a.k)-n(b.k));
  const playedLogs=logs.filter(l=>!(l.note||"").toLowerCase().startsWith("zran")||l.g||l.a||l.cs);
  const opp=k=>(S.byKolo[k]||{}).Souper||"";
  const facts=[];
  if(playedLogs.length){
    const best=[...playedLogs].sort((x,y)=>(y.g+y.a)-(x.g+x.a)||y.g-x.g||n(x.k)-n(y.k))[0];
    if(best&&best.g+best.a>0){const p=[];if(best.g)p.push(T("goals")(best.g));if(best.a)p.push(T("assists")(best.a));
      facts.push([T("f_best"),`${T("round_n")(best.k)} · vs ${esc(opp(best.k))} · ${p.join(", ")}`]);}
    const ga=t.g+t.a; facts.push([T("f_avg"),(ga/Math.max(1,mp)).toLocaleString(LANG==="cs"?"cs-CZ":"en-GB",{maximumFractionDigits:2})]);
    const teamG=S.matches.filter(m=>has(m["Goly JB"])).reduce((s,m)=>s+n(m["Goly JB"]),0);
    if(teamG&&ga) facts.push([T("f_share"),Math.round(ga/teamG*100)+" %"]);
  }
  for(const [k,v] of (prof.fakta||[])) facts.push([esc(k),esc(v)]);
  const byK=Object.fromEntries(logs.map(l=>[l.k,l]));
  const injNow=(inf.stav||"").toLowerCase().startsWith("zran");
  const lastK=logs.length?Math.max(...logs.map(l=>n(l.k))):0;
  const log=S.matches.filter(m=>has(m["Goly JB"])&&has(m["Goly souper"])).map(m=>{const k=String(n(m.Kolo));const l=byK[k];const parts=[];let cls="";
    if(l){
      if(l.g) parts.push("⚽ "+T("goals")(l.g)); if(l.a) parts.push("🅰️ "+T("assists")(l.a));
      if(l.cs) parts.push("🧤 "+T("cs_one")); if(l.y) parts.push("🟨 "+T("yellow")); if(l.r) parts.push("🟥 "+T("red"));
      if(l.note) parts.push(T("notes")[l.note.toLowerCase()]||l.note);
      if(!parts.length) parts.push(T("played"));
    }else{cls=" idle"; parts.push(injNow&&n(k)>lastK?T("inj_out"):T("idle"));}
    const sc=`${n(m["Goly JB"])}:${n(m["Goly souper"])}`;
    return `<div class="pz-row${cls}"><span class="pz-k num">${k}.</span><span class="pz-o">vs ${esc(m.Souper||"")}<i class="num">${sc}</i></span><span class="pz-v">${parts.join(" · ")}</span></div>`}).join("");
  const crest=`<img class="crest-light" src="__CREST_NAVY__" alt=""><img class="crest-dark" src="__CREST_CREAM__" alt="">`;
  return `<button class="pz-x" data-pz-close aria-label="${T("close")}">×</button>
  <div class="pz-grid">
    <div class="pz-photo${foto?"":" empty"}">
      ${foto?`<img class="pz-img" src="${esc(foto)}" alt="${esc(name)}">`:`<span class="pz-crest">${crest}</span><span class="pz-soon lab">${T("photo_soon")}</span>`}
      <span class="pz-id"><span class="pz-num num">${inf.num||"–"}</span><span class="pz-nm">${esc(name)}</span></span>
    </div>
    <div class="pz-info">
      <div class="pz-tags">${inf.pos?`<span class="pz-tag">${esc(posTxt(inf.pos))}</span>`:""}<span class="pz-tag${inj?" inj":""}">${esc(statusTxt(inf.stav))}</span></div>
      <h3 class="pz-title" id="pz-title">${esc(name)}</h3>
      <div class="pz-rw"><span class="lab">Rewards</span><b class="num">${kc(t.kc)}</b></div>
      <h4 class="pz-h lab">${T("season_stats")}</h4>
      <div class="pz-tiles num">${tiles.map(([l,v])=>`<div><small>${l}</small><b>${v}</b></div>`).join("")}</div>
      ${facts.length?`<h4 class="pz-h lab">${T("facts")}</h4><div class="pz-facts">${facts.map(([k,v])=>`<div class="pz-row"><span class="pz-fk">${k}</span><span class="pz-fv">${v}</span></div>`).join("")}</div>`:""}
      <h4 class="pz-h lab">${T("per_match")}</h4>
      <div class="pz-log">${log||`<p class="src">${T("none")}</p>`}</div>
    </div>
  </div>`;
}
function pzTarget(){
  const vw=document.documentElement.clientWidth, vh=window.innerHeight;
  const small=vw<720;
  const W=small?vw-20:Math.min(vw-64,1000), H=small?vh-24:Math.min(vh-56,720);
  return {left:(vw-W)/2,top:(vh-H)/2,width:W,height:H};
}
function pzRect(card){
  if(card){const r=card.querySelector(".flip").getBoundingClientRect(); if(r.width) return {left:r.left,top:r.top,width:r.width,height:r.height};}
  const t=pzTarget(); return {left:t.left+t.width*.35,top:t.top+t.height*.3,width:t.width*.3,height:t.height*.4};
}
const pzSet=(el,r)=>{el.style.left=r.left+"px";el.style.top=r.top+"px";el.style.width=r.width+"px";el.style.height=r.height+"px";};
function openCard(name,card){
  if(!S||!S.tot[name]) return;
  if(PZ) closeCard(true);
  const pz=$("pz"), box=pz.querySelector(".pz-card");
  const front=card?card.querySelector(".front").outerHTML:"";
  pz.querySelector(".pz-front").innerHTML=front;
  pz.querySelector(".pz-back").innerHTML=cardBack(name);
  pz.classList.remove("open","closing"); pz.hidden=false;
  pzSet(box,pzRect(card));
  if(card) card.classList.add("lifted");
  document.documentElement.classList.add("pz-lock");
  PZ={card,name,last:document.activeElement};
  box.getBoundingClientRect();
  requestAnimationFrame(()=>{pzSet(box,pzTarget());pz.classList.add("open");});
  setTimeout(()=>{const x=pz.querySelector(".pz-x"); x&&x.focus({preventScroll:true});},60);
}
function closeCard(instant){
  if(!PZ) return;
  const pz=$("pz"), box=pz.querySelector(".pz-card"); const {card,last}=PZ; PZ=null;
  const done=()=>{pz.hidden=true;pz.classList.remove("open","closing");if(card)card.classList.remove("lifted");document.documentElement.classList.remove("pz-lock");};
  const reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(instant||reduce){done();last&&last.focus&&last.focus({preventScroll:true});return;}
  pz.querySelector(".pz-info")&&(pz.querySelector(".pz-info").scrollTop=0);
  pz.classList.add("closing"); pz.classList.remove("open"); pzSet(box,pzRect(card));
  setTimeout(()=>{done();last&&last.focus&&last.focus({preventScroll:true});},620);
}
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&PZ){e.preventDefault();closeCard();}});
window.addEventListener("resize",()=>{if(PZ) pzSet($("pz").querySelector(".pz-card"),pzTarget());});
window.addEventListener("hashchange",()=>{if(PZ) closeCard(true);});

/* pages */
const PAGES=["domu","zapasy","tabulka","hraci"];
function showPage(){
  let p=(location.hash||"").replace("#","");
  if(!PAGES.includes(p)) p="domu";
  for(const id of PAGES) $("page-"+id).hidden=id!==p;
  document.querySelectorAll("nav.links a").forEach(a=>{ if(a.getAttribute("href")==="#"+p) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  window.scrollTo(0,0);
}
window.addEventListener("hashchange",showPage);
window.addEventListener("hashchange",()=>{try{const p=(location.hash||"").replace("#","")||"domu";if(window.goatcounter&&window.goatcounter.count)window.goatcounter.count({path:"/"+p,title:p});}catch(e){}});
showPage();

document.addEventListener("click",e=>{
  const s=e.target.closest("[data-sort]");
  if(s){SORT=s.dataset.sort;document.querySelectorAll("#sort button").forEach(b=>b.setAttribute("aria-pressed",String(b===s)));renderPlayers();return;}
  const z=e.target.closest("[data-zoom]"); if(z){openCard(z.dataset.zoom,z.closest(".pcard"));return;}
  if(e.target.closest("[data-pz-close]")){closeCard();return;}
  const b=e.target.closest("[data-p]"); if(b){openCard(b.dataset.p,document.querySelector(`.pcard[data-card="${CSS.escape(b.dataset.p)}"]`));return;}
  const mb=e.target.closest("[data-m]"); if(mb){openMatch(mb.dataset.m);return;}
  const d=$("dlg"); if(e.target.closest(".close")||e.target===d) d.close();
});

/* preferences: theme, language, font */
(function(){
  const root=document.documentElement;
  const get=k=>{try{return localStorage.getItem(k);}catch(e){return null;}};
  const put=(k,v)=>{try{localStorage.setItem(k,v);}catch(e){}};
  const setTheme=t=>{root.setAttribute("data-jb",t);$("theme").setAttribute("aria-pressed",String(t==="dark"));};
  setTheme(get("jb-theme")||"light");
  $("theme").addEventListener("click",()=>{const t=root.getAttribute("data-jb")==="dark"?"light":"dark";setTheme(t);put("jb-theme",t);});
  LANG=get("jb-lang")==="en"?"en":"cs";
  $("lang").addEventListener("click",()=>{LANG=LANG==="cs"?"en":"cs";put("jb-lang",LANG);render();});
})();

loadAll().then(d=>{DATA=d;render();});
