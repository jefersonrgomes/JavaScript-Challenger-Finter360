/* NUMERAIS KLINGON
Mas como os Klingon escrevem números?
Bem, no Klingon, as palavras também são números dados em base 20, 

Onde cada letra é um dígito, e os dígitos são ordenados do menos significativo para o mais significativo (o inverso do nosso sistema). Ou seja, a primeira posição é a unidade, a segunda posição vale 20, a terceira vale 400, e assim por diante. Os valores das letras são dados pela ordem em que elas aparecem no alfabeto Klingon (que é diferente da nossa ordem, como vimos acima). 

[x] Ou seja, a primeira letra do alfabeto Klingon representa o dígito 0
    a segunda representa o dígito 1, e assim por diante.
    Por exemplo, a palavra vwv tem o valor numérico de 4852.

[x] Os números nesse problema podem ser grandes, 
    então se você está usando um tipo de dados de tamanho limitado, 
    tenha cuidado com possíveis overflows.

Os Klingons consideram um número bonito se ele satisfaz essas duas propriedades:

[ ] É maior ou igual a 440566
[ ] É divisível por 3

Ao consideramos o Texto A como uma lista de números (isto é, interpretando cada palavra como um número usando a convenção explicada acima), notamos que existem 126 números bonitos distintos.
E no Texto B, quantos números bonitos distintos existem?
Informe a seguir a URL do seu GitHub com o código fonte utilizado para resolver os desafios: *
Página 3 de 3
Nunca envie senhas pelo Formulários Google.
Este formulário foi criado em Finanças 360°. Denunciar abuso
Google Formulários
*/

// VARIAVEIS GERAIS //
const alfabetoKlingon = 'k b w r q d n f x j m l v h t c g z p s'.split(' ');
const txtB = 'lqvxj prbf dgxv cgc wqvxbjs dbs msvtlbr'.split(' ');
const txtA =
  'vwv rhjs vqgvcq pjdvb gjpsmc jsm zhctgvl jwgbbs mccxbmj mbspg cdhsspgx twndc pmpr bzqvnxs wnfwhcrp czj txvghq ltdtqrd plqnjsk rbsx ftc fwthpfb vdflfqs zvgbgb rxdrgkjp sbplvr tntr fbbrmxw nkxbvf rznlm jdssqdds kwq vtlfdh zrtqk ndqnq lhbmhq ghkt vsr kqlxjmdn hlrrvg dtsm hbkxjht whmfnw hwcxxj mrft xntwrhp zfh lbhchcdz fwqqqldj cjhdddn tkfscrmq jbdxmb rqj hsbm rqhqz xzftrjg rqcprpcw phlhjcm hmvwqnps hdbjlj rgnq pxbbcfwj wnbkmkvr xqhn vcsbh grb xmbhxlml gqtvjlsw plwcvdx tqgvq xcffkzm cmkfhshr zgbswzr pnbbxsht frhxmg csrcr brnfggrj wgphtk mhfz tzlgfp xfpdfhpw pzq qsqjjn vzsw csch nzgbmln rzc bzh vptms xgldndlt rdctbpfp hkjbls rvvpg jghvh dqv xxdkftl qgnrnlhk crwstts kctqjsl cdwcbph cxqxhq znjpdq brsbnk dxdlf tlvhvq rcms lwd gtxdhxkl jvmrsxz fjg kztwskq ngszspnv twgffp ntvs xbxp svtx rhpndvh kmk qvm txmgknxk dlpf wvnbn lgmnjgw msn nzwch wvkzzjfj xvwh wmslgqz fzx kfgzn gbmnnnx xrgtzxc jkprpc nwxlpbqr pnskmbgn xslxdrr hmvnxfwd mvlznjbs lzd nkhvwpd jwlspvwn fbdc qccz ppwn dwfjfprh rgjhkb tvkc pvlhvnn qvzhxdsv hxwsvt glcvbs crqsnlpp vhxxhk qmbzg nxwpfmlj mghxmtp qslnn rgbk dqrzs lvwwrk dnnbqj krcbp rpcw bgpg rfqsp xxfcwq bwlc dnvrhhc gfkzcl qpvdsp cfb lmhcc grzj cqbkq gtjrzkqq hmfcnjtd zhs rvzlch vtxk qmqr vql zpwxfmj rhpjs gcr qqmfxqv fpgp slfn bcqbwltn zbvjwc mqcwb vtmfg zvrg xbxdrc dbcm nknlpfc stnkc hqkqrlqq vbfllt svkzqttr jrhhl kkqrz vlrnzbqn lpcpp jmjmnqwj bnmnmrbh wrmvbr khqhpxhz cbwpgf wffjnk zrlslx nvjkj wdwz vgrk ztdnzg blrb tbq xzfhwn knwgqk fqzpbc pddkbdz spdv tpkndf wjvb htjjnfg dcbkws dkhz phx hnqgg chq fqrdt vfvjvjhk nbvdzrn xgl bzddqxkp kgqjfxsn nlmmslnb vsw tmwshk lrqbxdqb jlvf dzztm skxk htrh hvmscx vtf gtvhlcs cdsqqhnm ttfr shcrwqkh fwvrqs qdppk jkvw hdcrmxz lklksspg kng rspr pgl rlpdjtd bnjzqgb fmrt qjpwsmcg sgfxxd knpprkz vxp jzgtdtst tghhrf hbv hnzbfvs wzrbhdkt ncpj lfhlp fnhgkb splq lrrdz nflwl jvjdwsh qmdv bdjck wkmk mwjtkdf szdbb zsjvxx sxkftwmg qdph mqf hvd rwnck zfmcmjdl mbxtgzhz tcxcf jck fsprt mzswtb lppcbl vwrdkfbs zdmfr fgmkc jdx kfs kch jvsf fcnxx hmkzq gprl hclw zzkmm tzz chfpsxq zsnjvmv klsdcz tzv lxws fmpc zfkzxk gzhwxlxk hzmrchx xrbv wvpnz jfhpql ntwqnchk wnbrptf gfptj wmqx hdpcgrf hzsq kwzjrb gffqvwf jqqk brnkn stfdpfgc fclchmkb zgsjn qkwrxncc cfrzw nszzgp mxmgkxvg mvrwtm ftqrbpg npfqnvq hhw pzgfkkl txf xmpbnp fxxm vjqckhkc zpn tqjckk whgszgvd ttxm gdbnszk hhjfz sqdkm vqzggb qcg sqfnqttc crtlpf mlwqjxgt sffczr jgx tng jbgx vdxxxrvs fwm tcf nsjrmnp lpjppbb wksg clftm jjxlncpn tnrrmc pqls zdcvth mbrwt hcrtb lxsxfqn zclnfzv gszffz xdtvpjhs bvgqqfg mlksdv txktscz bxphb cgp qtwtnwd mpm wppgb vwm hssddc bdxxvtfn mkst qdhnr pfvbjx mxlxblj lzhcm ndzzrxdn wwhqdpqg zsqwl xgtrsvbj frwjqm vwrpqgh rpmlxxlt bsj ptl dkvrsqw mdl fxz dxnhl xjb krs fjtccn pfdbs hsvqw pbzqvs fsbh pvrcjdc fjht qwmj hxn cqzx qxkdqpj chzghzr lzf kks dqbrjbg vwzwl dtm rtghx zrqzjjv xdssrljz nxgsrkr hkv jtbblclw qzzl qkvwf cxxc rfq wxhld cljqnm dldj cjldqqbl shtd gnhpjjhf rdkf wpfsp nqcqnb kxll bsgtc dzlrx dvnfs xlwrfcwq hxd tqfxrbr svfnm dqjmmmp ltvw fjb xpxcg zkg jqqhctv zcshqzwn jtlg gmq rzhn cdzvdl gbpxd lmskl gbxkk jch jxdqjc ktlpk vjwzjmn mfdtp dcv wchmbn rqjdgpv hhrc sxrdjgvf bsgqvvvv mrd szfpkrjv ncp mml kgcpg nrthfqs hrhskq mbs kjqq btb wzjxcdb gjtx mfskzwd wfw zlqlndf xmq pktfltsk kkr kbf htczjl lkclqnrs lnvxmsk shsdr xvdnk gkqfrpw hlnfvk sjzmnfx xhdlgp wmnc bbjcsnmh qxzttrzf vppzfv cxlvr rgs twpz lskqvwz ffp vtcsh plgf btsgvh rgfgqfzp kwlr spgqpfkh snwtpwtr gbtdlfz cscvwnm bcfnbcx qmzwzq cfpwpm mrh xmktdqs mbpv zzmv vvr cnhg pcz tqrsztnh hhrxq vfklm chpwb bwvpc pbxp fzjxmtns sjlkk ltqpph gmwwtb jbqrftv kqqbz npfbkj pct glbqz lmzsv pprmv dsd tpmpk zpxwmsg mvvwmsbv jcl glwth jtg pczwpdqg knsxpsj bfcb fjtwz gznb nbhn wlj swgv sszdlff xqshpc bdb rhsj rcz lqnwmztx nqqz pmz jchqs zcvmrckj gmxrcl vsvw vhxhlp zlhlfgh jrjzsmh zbnm mbmwbflw kpfjlp zfrdfjkv ljs njc lvbgtsm zgfztg ksc zzrfnk fgm hsqgkhm qrmd zfq xwrhjp vqvsftk gxf vjftvvx mlc'.split(
    ' '
  );

const numeraisKlingon = [];

for (let i = 0; i < 20; i++) {
  numeraisKlingon.push(i);
}
/*
  [x] Ou seja, a primeira letra do alfabeto Klingon representa o dígito 0
      a segunda representa o dígito 1, e assim por diante.
      Por exemplo, a palavra vwv tem o valor numérico de 4852.

  [x] Os números nesse problema podem ser grandes, 
      então se você está usando um tipo de dados de tamanho limitado, 
      tenha cuidado com possíveis overflows.
*/

// --- --- --- --- --- --- --- --- --- --- //

const numeraisK = convertendoNumeraisKlingon(
  txtA,
  alfabetoKlingon,
  numeraisKlingon
);

var totalNumerosBonitosKlingon = numerosBonitosKlingon(numeraisK);
totalNumerosBonitosKlingon = new Set(totalNumerosBonitosKlingon);
totalNumerosBonitosKlingon = [...totalNumerosBonitosKlingon];

console.log(totalNumerosBonitosKlingon.length);

//[x] - Notamos que existem 126 números bonitos distintos.
// “o número x é divisível por n quando o resto é zero”.

function numerosBonitosKlingon(numerosKlingon) {
  let numerosBonitos = [];
  let v = 440566;
  for (let x = 0; x < numerosKlingon.length; x++) {
    let n = parseInt(numerosKlingon[x]);
    let a = n >= v;
    let b = n % 3 === 0;
    let c = n % 3;
    if (n > v && n % 3 === 0) numerosBonitos.push(numerosKlingon[x]);
  }
  return numerosBonitos;
}

function convertendoNumeraisKlingon(
  ArrayDefrases,
  alfaKlingon,
  numeraisKlingon
) {
  let novoArrayDeFrases = [];
  for (let i = 0; i < ArrayDefrases.length; i++) {
    let fraseArrayChar = ArrayDefrases[i].split('');
    fraseArrayChar = ConverterAlfabeto(
      fraseArrayChar,
      alfaKlingon,
      numeraisKlingon
    );
    novoArrayDeFrases.push(Number(fraseArrayChar.join('')));
  } 
  function ConverterAlfabeto(frase, alfaKlingon, numeraisKlingon) {
    for (let x = 0; x < frase.length; x++) {
      let f = frase[x].replace(/' '/g, '');
      for (let i = 0; i < alfaKlingon.length; i++) {
        if (f === alfaKlingon[i]) {
          frase[x] = numeraisKlingon[i];
        }
      }
    }
    return frase;
  }
  return novoArrayDeFrases;
}
