import base64
def d(p,mt): return f'data:{mt};base64,'+base64.b64encode(open(p,'rb').read()).decode()
SITE_URL=''  # e.g. https://jogabolito.netlify.app -- fill once known
OG=('<meta property="og:type" content="website">\n<meta property="og:title" content="Joga Bolíto F.C.">\n<meta property="og:description" content="Zápasy, tabulka, hráči a rewards. Hanspaulská liga Praha.">\n<meta property="og:image" content="'+SITE_URL+('/' if SITE_URL else '')+'og.jpg">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="theme-color" content="#121016">')
import subprocess,os
subprocess.run(['python3','gen_fallback.py'],check=True)
b=open('script5_body.js',encoding='utf-8').read();f=open('fallback.js',encoding='utf-8').read()
open('script5.js','w',encoding='utf-8').write(b.replace('__FALLBACK__',f))
t=open('template5.html',encoding='utf-8').read()
rep={'__CREST_NAVY__':d('crest_navy_s.png','image/png'),'__CREST_CREAM__':d('crest_cream_s.png','image/png'),
 '__IMG_HUDDLE__':d('bw_huddle.jpg','image/jpeg'),'__IMG_HUDDLE2__':d('bw_huddle2.jpg','image/jpeg'),'__IMG_FELIX__':d('bw_felix.jpg','image/jpeg'),'__IMG_TEAMWIN__':d('bw_teamwin.jpg','image/jpeg'),'__IMG_KEEPER__':d('bw_keeper.jpg','image/jpeg'),
 '__IMG_UNBOX__':d('bw_unbox.jpg','image/jpeg'),'__IMG_TEAM__':d('bw_team.jpg','image/jpeg'),
 '__SCRIPT__':open('script5.js',encoding='utf-8').read()}
rep['__FLAG__']=d('flag.png','image/png')
t=t.replace('__SCRIPT__',rep.pop('__SCRIPT__'))
for k,v in rep.items(): t=t.replace(k,v)
os.makedirs('../public',exist_ok=True)
i=t.index('<style>'); head=t[:i]; rest=t[i:]; j=rest.index('</style>')+len('</style>')
open('../public/index.html','w',encoding='utf-8').write('<!doctype html>\n<html lang="cs">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'+head+rest[:j]+'\n<link rel="icon" href="'+rep['__CREST_NAVY__']+'">\n<link rel="apple-touch-icon" href="icon.png">\n'+OG+'\n</head>\n<body>\n'+rest[j:]+'\n</body>\n</html>\n')
