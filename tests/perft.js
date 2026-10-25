const fs=require('fs');const h=fs.readFileSync(process.argv[2] || require('path').join(__dirname, '..', 'index.html'),'utf8');
const src=h.split('/*ENGINE-START*/')[1].split('/*ENGINE-END*/')[0];
const E=new Function(src+';return ENGINE();')();
const t=(n,fen,d,exp)=>{const p=fen?E.fromFen(fen):E.startPos();const t0=Date.now();const r=E.perft(p,d);console.log(n,d,r,exp,r===exp?'OK':'FEHLER',Date.now()-t0+'ms')};
t('start',null,4,197281);
t('kiwi','r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1',3,97862);
t('pos3','8/2p5/3p4/KP5r/1R3p1k/8/4P1P1/8 w - - 0 1',5,674624);
t('pos4','r3k2r/Pppp1ppp/1b3nbN/nP6/BBP1P3/q4N2/Pp1P2PP/R2Q1RK1 w kq - 0 1',4,422333);
t('pos5','rnbq1k1r/pp1Pbppp/2p5/8/2B5/8/PPP1NnPP/RNBQK2R w KQ - 1 8',3,62379);
for(const l of [1,5,8,10]){const p=E.startPos();const t0=Date.now();const m=E.chooseMove(p,l);console.log('lvl',l,E.uci(m),Date.now()-t0+'ms')}
const p=E.fromFen('6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1');console.log('mate1',E.uci(E.chooseMove(p,10)));
