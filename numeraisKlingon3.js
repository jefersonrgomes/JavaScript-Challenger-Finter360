/* NUMERAIS KLINGON
Mas como os Klingon escrevem números?
Bem, no Klingon, as palavras também são números dados em base 20, 

Onde 
[x] - cada letra é um dígito
[x] - os dígitos são ordenados do menos significativo para o mais significativo (o inverso do nosso sistema). 

Ou seja, a primeira posição é a unidade, 
a segunda posição vale 20, 
a terceira vale 400, e assim por diante. 

Os valores das letras são dados pela ordem em que elas aparecem no alfabeto Klingon 
(que é diferente da nossa ordem, como vimos acima). 

[x] Ou seja, a primeira letra do alfabeto Klingon representa o dígito 0
    a segunda representa o dígito 1, e assim por diante.
    Por exemplo, a palavra vwv tem o valor numérico de 4852.

[x] Os números nesse problema podem ser grandes, 
    então se você está usando um tipo de dados de tamanho limitado, 
    tenha cuidado com possíveis overflows.

Os Klingons consideram um número bonito se ele satisfaz essas duas propriedades:

[x] É maior ou igual a 440566
[x] É divisível por 3

Ao consideramos o Texto A como uma lista de números 
(isto é, interpretando cada palavra como um número usando a convenção explicada acima), 
notamos que existem 126 números bonitos distintos no texto A.
E no Texto B, quantos números bonitos distintos existem?

*/

// VARIAVEIS GERAIS //
const alfabetoKlingon = 'k b w r q d n f x j m l v h t c g z p s'.split(' ');

const txtA =
  'vwv rhjs vqgvcq pjdvb gjpsmc jsm zhctgvl jwgbbs mccxbmj mbspg cdhsspgx twndc pmpr bzqvnxs wnfwhcrp czj txvghq ltdtqrd plqnjsk rbsx ftc fwthpfb vdflfqs zvgbgb rxdrgkjp sbplvr tntr fbbrmxw nkxbvf rznlm jdssqdds kwq vtlfdh zrtqk ndqnq lhbmhq ghkt vsr kqlxjmdn hlrrvg dtsm hbkxjht whmfnw hwcxxj mrft xntwrhp zfh lbhchcdz fwqqqldj cjhdddn tkfscrmq jbdxmb rqj hsbm rqhqz xzftrjg rqcprpcw phlhjcm hmvwqnps hdbjlj rgnq pxbbcfwj wnbkmkvr xqhn vcsbh grb xmbhxlml gqtvjlsw plwcvdx tqgvq xcffkzm cmkfhshr zgbswzr pnbbxsht frhxmg csrcr brnfggrj wgphtk mhfz tzlgfp xfpdfhpw pzq qsqjjn vzsw csch nzgbmln rzc bzh vptms xgldndlt rdctbpfp hkjbls rvvpg jghvh dqv xxdkftl qgnrnlhk crwstts kctqjsl cdwcbph cxqxhq znjpdq brsbnk dxdlf tlvhvq rcms lwd gtxdhxkl jvmrsxz fjg kztwskq ngszspnv twgffp ntvs xbxp svtx rhpndvh kmk qvm txmgknxk dlpf wvnbn lgmnjgw msn nzwch wvkzzjfj xvwh wmslgqz fzx kfgzn gbmnnnx xrgtzxc jkprpc nwxlpbqr pnskmbgn xslxdrr hmvnxfwd mvlznjbs lzd nkhvwpd jwlspvwn fbdc qccz ppwn dwfjfprh rgjhkb tvkc pvlhvnn qvzhxdsv hxwsvt glcvbs crqsnlpp vhxxhk qmbzg nxwpfmlj mghxmtp qslnn rgbk dqrzs lvwwrk dnnbqj krcbp rpcw bgpg rfqsp xxfcwq bwlc dnvrhhc gfkzcl qpvdsp cfb lmhcc grzj cqbkq gtjrzkqq hmfcnjtd zhs rvzlch vtxk qmqr vql zpwxfmj rhpjs gcr qqmfxqv fpgp slfn bcqbwltn zbvjwc mqcwb vtmfg zvrg xbxdrc dbcm nknlpfc stnkc hqkqrlqq vbfllt svkzqttr jrhhl kkqrz vlrnzbqn lpcpp jmjmnqwj bnmnmrbh wrmvbr khqhpxhz cbwpgf wffjnk zrlslx nvjkj wdwz vgrk ztdnzg blrb tbq xzfhwn knwgqk fqzpbc pddkbdz spdv tpkndf wjvb htjjnfg dcbkws dkhz phx hnqgg chq fqrdt vfvjvjhk nbvdzrn xgl bzddqxkp kgqjfxsn nlmmslnb vsw tmwshk lrqbxdqb jlvf dzztm skxk htrh hvmscx vtf gtvhlcs cdsqqhnm ttfr shcrwqkh fwvrqs qdppk jkvw hdcrmxz lklksspg kng rspr pgl rlpdjtd bnjzqgb fmrt qjpwsmcg sgfxxd knpprkz vxp jzgtdtst tghhrf hbv hnzbfvs wzrbhdkt ncpj lfhlp fnhgkb splq lrrdz nflwl jvjdwsh qmdv bdjck wkmk mwjtkdf szdbb zsjvxx sxkftwmg qdph mqf hvd rwnck zfmcmjdl mbxtgzhz tcxcf jck fsprt mzswtb lppcbl vwrdkfbs zdmfr fgmkc jdx kfs kch jvsf fcnxx hmkzq gprl hclw zzkmm tzz chfpsxq zsnjvmv klsdcz tzv lxws fmpc zfkzxk gzhwxlxk hzmrchx xrbv wvpnz jfhpql ntwqnchk wnbrptf gfptj wmqx hdpcgrf hzsq kwzjrb gffqvwf jqqk brnkn stfdpfgc fclchmkb zgsjn qkwrxncc cfrzw nszzgp mxmgkxvg mvrwtm ftqrbpg npfqnvq hhw pzgfkkl txf xmpbnp fxxm vjqckhkc zpn tqjckk whgszgvd ttxm gdbnszk hhjfz sqdkm vqzggb qcg sqfnqttc crtlpf mlwqjxgt sffczr jgx tng jbgx vdxxxrvs fwm tcf nsjrmnp lpjppbb wksg clftm jjxlncpn tnrrmc pqls zdcvth mbrwt hcrtb lxsxfqn zclnfzv gszffz xdtvpjhs bvgqqfg mlksdv txktscz bxphb cgp qtwtnwd mpm wppgb vwm hssddc bdxxvtfn mkst qdhnr pfvbjx mxlxblj lzhcm ndzzrxdn wwhqdpqg zsqwl xgtrsvbj frwjqm vwrpqgh rpmlxxlt bsj ptl dkvrsqw mdl fxz dxnhl xjb krs fjtccn pfdbs hsvqw pbzqvs fsbh pvrcjdc fjht qwmj hxn cqzx qxkdqpj chzghzr lzf kks dqbrjbg vwzwl dtm rtghx zrqzjjv xdssrljz nxgsrkr hkv jtbblclw qzzl qkvwf cxxc rfq wxhld cljqnm dldj cjldqqbl shtd gnhpjjhf rdkf wpfsp nqcqnb kxll bsgtc dzlrx dvnfs xlwrfcwq hxd tqfxrbr svfnm dqjmmmp ltvw fjb xpxcg zkg jqqhctv zcshqzwn jtlg gmq rzhn cdzvdl gbpxd lmskl gbxkk jch jxdqjc ktlpk vjwzjmn mfdtp dcv wchmbn rqjdgpv hhrc sxrdjgvf bsgqvvvv mrd szfpkrjv ncp mml kgcpg nrthfqs hrhskq mbs kjqq btb wzjxcdb gjtx mfskzwd wfw zlqlndf xmq pktfltsk kkr kbf htczjl lkclqnrs lnvxmsk shsdr xvdnk gkqfrpw hlnfvk sjzmnfx xhdlgp wmnc bbjcsnmh qxzttrzf vppzfv cxlvr rgs twpz lskqvwz ffp vtcsh plgf btsgvh rgfgqfzp kwlr spgqpfkh snwtpwtr gbtdlfz cscvwnm bcfnbcx qmzwzq cfpwpm mrh xmktdqs mbpv zzmv vvr cnhg pcz tqrsztnh hhrxq vfklm chpwb bwvpc pbxp fzjxmtns sjlkk ltqpph gmwwtb jbqrftv kqqbz npfbkj pct glbqz lmzsv pprmv dsd tpmpk zpxwmsg mvvwmsbv jcl glwth jtg pczwpdqg knsxpsj bfcb fjtwz gznb nbhn wlj swgv sszdlff xqshpc bdb rhsj rcz lqnwmztx nqqz pmz jchqs zcvmrckj gmxrcl vsvw vhxhlp zlhlfgh jrjzsmh zbnm mbmwbflw kpfjlp zfrdfjkv ljs njc lvbgtsm zgfztg ksc zzrfnk fgm hsqgkhm qrmd zfq xwrhjp vqvsftk gxf vjftvvx mlc'.split(
    ' '
  );

const txtB =
  'lqvxj prbf dgxv cgc wqvxbjs dbs msvtlbr frsm wbdqdg xhpjp jzfcchbs qjq zqtcjlkm slt tzbc nsr wjhzxd rffqbkm dvfn gsvfgb blxxngsh zchhpqg dxmk zwngclz cgv tgxznzlg pvdnnx rnbj vwx xhrzg zdq bjqdhkps dmpb gkk vfr whmxrbm pngfqc nlbd xgm cbpqw vvgxpv vzbbgx jlmtdcdk xvrmvkmt zbkvzjx bslb dtzwvk jsvk qqr llp mxhjqck gkhmf xvqfqcjj ffvx zvmqpsm sxx vtbhc nhfg gcprb nxlctr dsbnb kwggfpw tqm fnvpsl vxdpzb ljcfrxg rzq mfq hgrwcx pbktg nkslbdgc rslj xkrx hmdrsk nhf wwrqwtz lfqqjzw qdcvzvjc kdmmh wqnnkmcm qkwmdxlf mctc xkv nrbx lbdj tdxgbb hpv gzvgndnb lhsvjxdd nvf mvlpsghr skvtfpw fjjxcp dvf dnjdzcrc bkv qsqplh rxcw tfnwhw lbttltk kphjcw sgmx tdgjvqdb pmvhqzf rzhb fkxmsdw svqcpq hhx pprkm shh lfrstvcd rdkdqqq ddhgdcr tsk fmktwj trv ltwnhthz nml tsl kpzgksnh ndz qtqglj dbwmdvh wgrvdklq csnlxvnj dcnzgs wwzr ngtc vppg fbvsdr vmx rkzcgw jjglmvb rpd rvdgxtnr xqgshj vclcmnh smbhg xmjlklzl mcbz slkbsj xbnpc fzhjvm nmlwfjzp jpdbf qtgcdr vqb pbn pckrfls nbrntt vjvr xfznh rncvwwqq mhdmtcc ffvnk slw grzxqblp ngfw gbmvvzvq qhrh trjbrzp cbzl rgspsq ljjtc rwfnm vkmzlgzc kcmjjd shv xxzv xnmgwfv lmrwzpw qpzlp jzjj pmwqhz pbrfsrg nswcjr wmvczg tljp mwrggrf vss fmblgjv mpfzbnfc prjnll xvhqt gbzg tfhjnc mrpd zdm rhj gvx flwhzqjc dkmk mpr vbf kqfl bhnw gfksm njmgtlm wqhvvfdl xhpxdp zdcrscjs gvqbj xjcf dqdmfcx dwcbkxw nslnvnb wjfmtngs fcrzzgw qhbr gmkkcx pzsqlz csj pwsccx xhpsmr tsglsbh dfmqqscc jwnmzzdc xljfh hllng llswvqf xvjczjqh rwhznhqc mwhj jkz kxg blpwlzv vxzlwz tzdtfs jpdn gqbwkh mqhjxv fxjllq zwnwtx flgp kdhvrrd mqd sslf xnwvvw thjplqgc xtlpxgg wwrpxqf rjtcchpx bjctn sds jdb pwtdlzs tqx jrmn nwjhl slbwz vmrqk kdfkwp dwhbsphh tkwt nmqsm ppb slcmvfvp vtvf djw mjndf cpmn wmfpxmkz hnzmsr fjkvvx thn hnvdt wtgpkv rgs qcdtjqqd jccdspqd rbkhmz hshmrpg xkjnccwt qrt fkfs bfdwt xsdnh bfdhjthj csk wksvnnf pbnj mczhlf gpnqtfbd zwwpz zvn rthljf ltw stgsds gcjkqn rdgtf pmcwsnnr bdwmdh rgtcs lqdrhbpt zmprxdms nxzmdx slpgfx cpltlszl zwrfsp pqrphcgm htwpkmn kwpntvvg nrfkdfx ksxz zfvx qzgppkd lfr mqwz tvcvgpqh rrbjf fnrvbnm qmsv zkhvcdmg kkfbpng smhqq qtpqlkft slgbx wkvxwcm kgn mttrtqqs tjdtt rjrfsgzl xknsclbk mcbvdcnx rtgld wbbddlc gqmnpzzp gsxdnwqt prmkx ngj mpbxq zlzwhd wgsnv rcp jsk ckblv tfmsnv djlqn btrj cvxgjqh kvw shk hrfcp ktthmtw zdt nlggcz gwxlzgfw xtkvx rhcxr dlnn zbbjqqh rjnvgs psvsmt wskt bfsvwk txj brskv fbwcgm kbbpbf rmnpt tnvrmdk wnslrsfw lfbcg pxt mnwk dcpvcwq xbpgzfhn gpjp lsfbr sdgdxhq pjltpnvh vtjps btqgwnx bkpjtxxm zgjfr cbttjszl zlgwfhsw klf zpgrx zbfxbrzr msm hrhfgfd bpmx xmnrh ncnhxnwk gtzn fdsbb xbrtsjv ltsxscx bvbmnnwp gblnr ljcv sqnkt skrh svb jchd bqvsd ljx jgjdb fxlkmcvj tvglz qkjkdld bqk bsl vdhknm djjdb hppprkz bdfccz dqqp wsmw cvvn dbnqxf dxzvtsc zqwqds nqdtvvpl mqcs bmsmq smthjb pplbtrw lpmddf hrsjfdzp hbpbb mgpnspj rwz pvgq psf cdvrl jmwkrt ljhnsql mddwc mcvhvk rnfx xqxfblzh nxf dwhxs pgdt mtcfxhth jtnwbwb zkfnzflb fsvkvpn vsgwhvp xln mbhx vxn bwdwsmr pszmbbkc cxdhlsns fltrkh gmfdrhws pnpczv lxzdlg hmllsbm cddnd jntxtzr qztdgfz npdgdlsf lkmg swsxjms njs vrddwhkh wwzp lcczhhm kdz jjl phbwrbm kkwww zrqqzq tpqb bsdtmhb dtpdfhp mnmp gcv mtvlh cgdrcr gqvdj mxvsn hdmhn wqfr dljnvlzw phtzsmg hqdjc ttm jtpx vkwq zcs nfq fcjkqqc ntqfwvws klckb cmwv tbrh zktqsjf vmxkz ttngcchg pmjnsvjf mhksp qhh gpjr ftnrfrkl xdbxxj wdlfbx phzwfrxr pldbsmh wlljvz gznxd lvw nhpf jxv fhnhs nqczswv gpkxpzqs dztx ncfqfp xkj qpgshfv jsddbs pzfm bzfqmbx dmbkskh dllmlw zsh nzpdw kxslnqn pjlcmcxf jvcgmflg vcc cxbcwz jlkhsvmx dvxndqf kcbllpw zqb rzfw fbwvmcd qns fmqx wqrtmw rzpss bcxg rdjkwd tfkfnj bnqqj cjzpz hxbvlst rtlpt vrcwh qsh nkcrwhq stssffng hbt qrppcch vdkbrgc btr mmjwp fmstk rvjv gjnljlvv vbwxppd rcpql khnvl vmlpxtwb csd rtjh kjllq xsnfw tmrc xfglnt spdxfn kmvxx qtf kpmkjl fxxrchdg tzwl jqwd qjx zmqqbd jmvk vjldrv pqspncnk scmz zjzt dplp hhpt rwldkr mcbnbr kpx hxdz msdvx dbxcr hldpxf djxflkz hdhkfqh vsvzzft xwwxj pbqm ltfcl qnqd gslsk sdkzg ttxcwpc fkmlmqtk'.split(
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
//totalNumerosBonitosKlingon = new Set(totalNumerosBonitosKlingon);
//totalNumerosBonitosKlingon = [...totalNumerosBonitosKlingon];

console.log(totalNumerosBonitosKlingon.length);

//[x] - Notamos que existem 126 números bonitos distintos.
// “o número x é divisível por n quando o resto é zero”.

function numerosBonitosKlingon(numerosKlingon) {
  let numerosBonitos = [];
  let v = 440566;
  for (let x = 0; x < numerosKlingon.length; x++) {
    let n = parseInt(numerosKlingon[x]);
    //VALUES FOR TEST
    //let a = n >= v;
    //let b = n % 3 === 0;
    //let c = n % 3;
    if (n >= v && n % 3 === 0) numerosBonitos.push(numerosKlingon[x]);
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
    novoArrayDeFrases.push(Number(fraseArrayChar));
  }

  function ConverterAlfabeto(frase, alfaKlingon, numeraisKlingon) {
    for (let x = 0; x < frase.length; x++) {
      let f = frase[x].replace(/' '/g, '');
      for (let i = 0; i < alfaKlingon.length; i++) {
        if (f === alfaKlingon[i]) {
          //let tam = frase.length - (x + 1);
          //let tam = x;
          let fraseTemp = numeraisKlingon[i];
          let bas = x * 2;
          let exponencial = Math.pow(10, x);

          if (x >= 1) {
            fraseTemp = fraseTemp * (exponencial * bas);
            frase[x] = fraseTemp;
          } else {
            frase[x] = fraseTemp;
          }
        }
      }
    }
    console.log(frase);
    //convertendo letraK em numeroK
    /*
    pegar o tamanho do array da frase convertida em numeral 

    ex. valor do tamanho = 5
    numero posição 4 letra * 80000 | position * ((tamanhoArray - posicaoArray) * (10 ^ (tamanhoArray - posicaoArray))
    numero posição 3 letra * 6000
    numero posição 2 * 400
    numero posição 1 * 20
    numero posição 0

      5-1 = 4
      4*2
      multiplo de 2
      multiplo de 12    
    somar todas posições do array e atribuir valor a um novoarray.push());
    
    v | 12 |  position * ((tamanhoArray - posicaoArray) * (10 ^ (tamanhoArray - posicaoArray))
    w | 2  |
    v | 12 |  
      
                        base, tam-1 * 
    valor da letra | * | (10^tam-1) * (tam-1*2)
            v = 12 | * |    100     *   4 
            w = 2  | * |    10      *   2

    Ou seja, a primeira posição é a unidade, 
    a segunda posição vale 20, 
    a terceira vale 400, e assim por diante. 
  

    v w v tem o valor numérico de 4852.
                       base, tam-1 *
    valor da letra | * | (10^tam) * (tam*2)
         
          v = 12 | * |    1       *   1
          w = 2  | * |    10      *   2
          v = 12 | * |    100     *   4
   
    v+w+v = 4852
    (taman -1) * 2
Ou seja, a primeira posição é a unidade, 
a segunda posição vale 20, 
a terceira vale 400, e assim por diante. 

    [x] Ou seja, a primeira letra do alfabeto Klingon representa o dígito 0
      a segunda representa o dígito 1, e assim por diante.
      Por exemplo, a palavra vwv tem o valor numérico de 4852.

*/

    var fraseSomada = frase.reduce(function (total, numero) {
      return total + numero;
    }, 0);

    return fraseSomada;
  }
  //onsole.log(novoArrayDeFrases);
  return novoArrayDeFrases;
}
