/*** CHALLENGER FINTER360 ***
  Arqueólogos encontraram um pergaminho com os seguintes textos:
    TxtA
    TxtB
  Esses pergaminhos estão no antigo e misterioso idioma Klingon. 
  Após muitos anos de estudo, os linguistas já conhecem algumas características desse idioma.

  Primeiramente:
    As letras Klingon são classificadas em dois grupos: 
      Foo Type: São as letras s, l, f, w e k. 
      Bar Type: As demais são conhecidas como "letras tipo bar".
/* --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- */
var _ = require('lodash');
const { sortBy } = require('lodash');

const txtA =
  'vwv rhjs vqgvcq pjdvb gjpsmc jsm zhctgvl jwgbbs mccxbmj mbspg cdhsspgx twndc pmpr bzqvnxs wnfwhcrp czj txvghq ltdtqrd plqnjsk rbsx ftc fwthpfb vdflfqs zvgbgb rxdrgkjp sbplvr tntr fbbrmxw nkxbvf rznlm jdssqdds kwq vtlfdh zrtqk ndqnq lhbmhq ghkt vsr kqlxjmdn hlrrvg dtsm hbkxjht whmfnw hwcxxj mrft xntwrhp zfh lbhchcdz fwqqqldj cjhdddn tkfscrmq jbdxmb rqj hsbm rqhqz xzftrjg rqcprpcw phlhjcm hmvwqnps hdbjlj rgnq pxbbcfwj wnbkmkvr xqhn vcsbh grb xmbhxlml gqtvjlsw plwcvdx tqgvq xcffkzm cmkfhshr zgbswzr pnbbxsht frhxmg csrcr brnfggrj wgphtk mhfz tzlgfp xfpdfhpw pzq qsqjjn vzsw csch nzgbmln rzc bzh vptms xgldndlt rdctbpfp hkjbls rvvpg jghvh dqv xxdkftl qgnrnlhk crwstts kctqjsl cdwcbph cxqxhq znjpdq brsbnk dxdlf tlvhvq rcms lwd gtxdhxkl jvmrsxz fjg kztwskq ngszspnv twgffp ntvs xbxp svtx rhpndvh kmk qvm txmgknxk dlpf wvnbn lgmnjgw msn nzwch wvkzzjfj xvwh wmslgqz fzx kfgzn gbmnnnx xrgtzxc jkprpc nwxlpbqr pnskmbgn xslxdrr hmvnxfwd mvlznjbs lzd nkhvwpd jwlspvwn fbdc qccz ppwn dwfjfprh rgjhkb tvkc pvlhvnn qvzhxdsv hxwsvt glcvbs crqsnlpp vhxxhk qmbzg nxwpfmlj mghxmtp qslnn rgbk dqrzs lvwwrk dnnbqj krcbp rpcw bgpg rfqsp xxfcwq bwlc dnvrhhc gfkzcl qpvdsp cfb lmhcc grzj cqbkq gtjrzkqq hmfcnjtd zhs rvzlch vtxk qmqr vql zpwxfmj rhpjs gcr qqmfxqv fpgp slfn bcqbwltn zbvjwc mqcwb vtmfg zvrg xbxdrc dbcm nknlpfc stnkc hqkqrlqq vbfllt svkzqttr jrhhl kkqrz vlrnzbqn lpcpp jmjmnqwj bnmnmrbh wrmvbr khqhpxhz cbwpgf wffjnk zrlslx nvjkj wdwz vgrk ztdnzg blrb tbq xzfhwn knwgqk fqzpbc pddkbdz spdv tpkndf wjvb htjjnfg dcbkws dkhz phx hnqgg chq fqrdt vfvjvjhk nbvdzrn xgl bzddqxkp kgqjfxsn nlmmslnb vsw tmwshk lrqbxdqb jlvf dzztm skxk htrh hvmscx vtf gtvhlcs cdsqqhnm ttfr shcrwqkh fwvrqs qdppk jkvw hdcrmxz lklksspg kng rspr pgl rlpdjtd bnjzqgb fmrt qjpwsmcg sgfxxd knpprkz vxp jzgtdtst tghhrf hbv hnzbfvs wzrbhdkt ncpj lfhlp fnhgkb splq lrrdz nflwl jvjdwsh qmdv bdjck wkmk mwjtkdf szdbb zsjvxx sxkftwmg qdph mqf hvd rwnck zfmcmjdl mbxtgzhz tcxcf jck fsprt mzswtb lppcbl vwrdkfbs zdmfr fgmkc jdx kfs kch jvsf fcnxx hmkzq gprl hclw zzkmm tzz chfpsxq zsnjvmv klsdcz tzv lxws fmpc zfkzxk gzhwxlxk hzmrchx xrbv wvpnz jfhpql ntwqnchk wnbrptf gfptj wmqx hdpcgrf hzsq kwzjrb gffqvwf jqqk brnkn stfdpfgc fclchmkb zgsjn qkwrxncc cfrzw nszzgp mxmgkxvg mvrwtm ftqrbpg npfqnvq hhw pzgfkkl txf xmpbnp fxxm vjqckhkc zpn tqjckk whgszgvd ttxm gdbnszk hhjfz sqdkm vqzggb qcg sqfnqttc crtlpf mlwqjxgt sffczr jgx tng jbgx vdxxxrvs fwm tcf nsjrmnp lpjppbb wksg clftm jjxlncpn tnrrmc pqls zdcvth mbrwt hcrtb lxsxfqn zclnfzv gszffz xdtvpjhs bvgqqfg mlksdv txktscz bxphb cgp qtwtnwd mpm wppgb vwm hssddc bdxxvtfn mkst qdhnr pfvbjx mxlxblj lzhcm ndzzrxdn wwhqdpqg zsqwl xgtrsvbj frwjqm vwrpqgh rpmlxxlt bsj ptl dkvrsqw mdl fxz dxnhl xjb krs fjtccn pfdbs hsvqw pbzqvs fsbh pvrcjdc fjht qwmj hxn cqzx qxkdqpj chzghzr lzf kks dqbrjbg vwzwl dtm rtghx zrqzjjv xdssrljz nxgsrkr hkv jtbblclw qzzl qkvwf cxxc rfq wxhld cljqnm dldj cjldqqbl shtd gnhpjjhf rdkf wpfsp nqcqnb kxll bsgtc dzlrx dvnfs xlwrfcwq hxd tqfxrbr svfnm dqjmmmp ltvw fjb xpxcg zkg jqqhctv zcshqzwn jtlg gmq rzhn cdzvdl gbpxd lmskl gbxkk jch jxdqjc ktlpk vjwzjmn mfdtp dcv wchmbn rqjdgpv hhrc sxrdjgvf bsgqvvvv mrd szfpkrjv ncp mml kgcpg nrthfqs hrhskq mbs kjqq btb wzjxcdb gjtx mfskzwd wfw zlqlndf xmq pktfltsk kkr kbf htczjl lkclqnrs lnvxmsk shsdr xvdnk gkqfrpw hlnfvk sjzmnfx xhdlgp wmnc bbjcsnmh qxzttrzf vppzfv cxlvr rgs twpz lskqvwz ffp vtcsh plgf btsgvh rgfgqfzp kwlr spgqpfkh snwtpwtr gbtdlfz cscvwnm bcfnbcx qmzwzq cfpwpm mrh xmktdqs mbpv zzmv vvr cnhg pcz tqrsztnh hhrxq vfklm chpwb bwvpc pbxp fzjxmtns sjlkk ltqpph gmwwtb jbqrftv kqqbz npfbkj pct glbqz lmzsv pprmv dsd tpmpk zpxwmsg mvvwmsbv jcl glwth jtg pczwpdqg knsxpsj bfcb fjtwz gznb nbhn wlj swgv sszdlff xqshpc bdb rhsj rcz lqnwmztx nqqz pmz jchqs zcvmrckj gmxrcl vsvw vhxhlp zlhlfgh jrjzsmh zbnm mbmwbflw kpfjlp zfrdfjkv ljs njc lvbgtsm zgfztg ksc zzrfnk fgm hsqgkhm qrmd zfq xwrhjp vqvsftk gxf vjftvvx mlc';

const txtB =
  'lqvxj prbf dgxv cgc wqvxbjs dbs msvtlbr frsm wbdqdg xhpjp jzfcchbs qjq zqtcjlkm slt tzbc nsr wjhzxd rffqbkm dvfn gsvfgb blxxngsh zchhpqg dxmk zwngclz cgv tgxznzlg pvdnnx rnbj vwx xhrzg zdq bjqdhkps dmpb gkk vfr whmxrbm pngfqc nlbd xgm cbpqw vvgxpv vzbbgx jlmtdcdk xvrmvkmt zbkvzjx bslb dtzwvk jsvk qqr llp mxhjqck gkhmf xvqfqcjj ffvx zvmqpsm sxx vtbhc nhfg gcprb nxlctr dsbnb kwggfpw tqm fnvpsl vxdpzb ljcfrxg rzq mfq hgrwcx pbktg nkslbdgc rslj xkrx hmdrsk nhf wwrqwtz lfqqjzw qdcvzvjc kdmmh wqnnkmcm qkwmdxlf mctc xkv nrbx lbdj tdxgbb hpv gzvgndnb lhsvjxdd nvf mvlpsghr skvtfpw fjjxcp dvf dnjdzcrc bkv qsqplh rxcw tfnwhw lbttltk kphjcw sgmx tdgjvqdb pmvhqzf rzhb fkxmsdw svqcpq hhx pprkm shh lfrstvcd rdkdqqq ddhgdcr tsk fmktwj trv ltwnhthz nml tsl kpzgksnh ndz qtqglj dbwmdvh wgrvdklq csnlxvnj dcnzgs wwzr ngtc vppg fbvsdr vmx rkzcgw jjglmvb rpd rvdgxtnr xqgshj vclcmnh smbhg xmjlklzl mcbz slkbsj xbnpc fzhjvm nmlwfjzp jpdbf qtgcdr vqb pbn pckrfls nbrntt vjvr xfznh rncvwwqq mhdmtcc ffvnk slw grzxqblp ngfw gbmvvzvq qhrh trjbrzp cbzl rgspsq ljjtc rwfnm vkmzlgzc kcmjjd shv xxzv xnmgwfv lmrwzpw qpzlp jzjj pmwqhz pbrfsrg nswcjr wmvczg tljp mwrggrf vss fmblgjv mpfzbnfc prjnll xvhqt gbzg tfhjnc mrpd zdm rhj gvx flwhzqjc dkmk mpr vbf kqfl bhnw gfksm njmgtlm wqhvvfdl xhpxdp zdcrscjs gvqbj xjcf dqdmfcx dwcbkxw nslnvnb wjfmtngs fcrzzgw qhbr gmkkcx pzsqlz csj pwsccx xhpsmr tsglsbh dfmqqscc jwnmzzdc xljfh hllng llswvqf xvjczjqh rwhznhqc mwhj jkz kxg blpwlzv vxzlwz tzdtfs jpdn gqbwkh mqhjxv fxjllq zwnwtx flgp kdhvrrd mqd sslf xnwvvw thjplqgc xtlpxgg wwrpxqf rjtcchpx bjctn sds jdb pwtdlzs tqx jrmn nwjhl slbwz vmrqk kdfkwp dwhbsphh tkwt nmqsm ppb slcmvfvp vtvf djw mjndf cpmn wmfpxmkz hnzmsr fjkvvx thn hnvdt wtgpkv rgs qcdtjqqd jccdspqd rbkhmz hshmrpg xkjnccwt qrt fkfs bfdwt xsdnh bfdhjthj csk wksvnnf pbnj mczhlf gpnqtfbd zwwpz zvn rthljf ltw stgsds gcjkqn rdgtf pmcwsnnr bdwmdh rgtcs lqdrhbpt zmprxdms nxzmdx slpgfx cpltlszl zwrfsp pqrphcgm htwpkmn kwpntvvg nrfkdfx ksxz zfvx qzgppkd lfr mqwz tvcvgpqh rrbjf fnrvbnm qmsv zkhvcdmg kkfbpng smhqq qtpqlkft slgbx wkvxwcm kgn mttrtqqs tjdtt rjrfsgzl xknsclbk mcbvdcnx rtgld wbbddlc gqmnpzzp gsxdnwqt prmkx ngj mpbxq zlzwhd wgsnv rcp jsk ckblv tfmsnv djlqn btrj cvxgjqh kvw shk hrfcp ktthmtw zdt nlggcz gwxlzgfw xtkvx rhcxr dlnn zbbjqqh rjnvgs psvsmt wskt bfsvwk txj brskv fbwcgm kbbpbf rmnpt tnvrmdk wnslrsfw lfbcg pxt mnwk dcpvcwq xbpgzfhn gpjp lsfbr sdgdxhq pjltpnvh vtjps btqgwnx bkpjtxxm zgjfr cbttjszl zlgwfhsw klf zpgrx zbfxbrzr msm hrhfgfd bpmx xmnrh ncnhxnwk gtzn fdsbb xbrtsjv ltsxscx bvbmnnwp gblnr ljcv sqnkt skrh svb jchd bqvsd ljx jgjdb fxlkmcvj tvglz qkjkdld bqk bsl vdhknm djjdb hppprkz bdfccz dqqp wsmw cvvn dbnqxf dxzvtsc zqwqds nqdtvvpl mqcs bmsmq smthjb pplbtrw lpmddf hrsjfdzp hbpbb mgpnspj rwz pvgq psf cdvrl jmwkrt ljhnsql mddwc mcvhvk rnfx xqxfblzh nxf dwhxs pgdt mtcfxhth jtnwbwb zkfnzflb fsvkvpn vsgwhvp xln mbhx vxn bwdwsmr pszmbbkc cxdhlsns fltrkh gmfdrhws pnpczv lxzdlg hmllsbm cddnd jntxtzr qztdgfz npdgdlsf lkmg swsxjms njs vrddwhkh wwzp lcczhhm kdz jjl phbwrbm kkwww zrqqzq tpqb bsdtmhb dtpdfhp mnmp gcv mtvlh cgdrcr gqvdj mxvsn hdmhn wqfr dljnvlzw phtzsmg hqdjc ttm jtpx vkwq zcs nfq fcjkqqc ntqfwvws klckb cmwv tbrh zktqsjf vmxkz ttngcchg pmjnsvjf mhksp qhh gpjr ftnrfrkl xdbxxj wdlfbx phzwfrxr pldbsmh wlljvz gznxd lvw nhpf jxv fhnhs nqczswv gpkxpzqs dztx ncfqfp xkj qpgshfv jsddbs pzfm bzfqmbx dmbkskh dllmlw zsh nzpdw kxslnqn pjlcmcxf jvcgmflg vcc cxbcwz jlkhsvmx dvxndqf kcbllpw zqb rzfw fbwvmcd qns fmqx wqrtmw rzpss bcxg rdjkwd tfkfnj bnqqj cjzpz hxbvlst rtlpt vrcwh qsh nkcrwhq stssffng hbt qrppcch vdkbrgc btr mmjwp fmstk rvjv gjnljlvv vbwxppd rcpql khnvl vmlpxtwb csd rtjh kjllq xsnfw tmrc xfglnt spdxfn kmvxx qtf kpmkjl fxxrchdg tzwl jqwd qjx zmqqbd jmvk vjldrv pqspncnk scmz zjzt dplp hhpt rwldkr mcbnbr kpx hxdz msdvx dbxcr hldpxf djxflkz hdhkfqh vsvzzft xwwxj pbqm ltfcl qnqd gslsk sdkzg ttxcwpc fkmlmqtk';

/* --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- */
function DecifradorKinglon(textoKlingon) {
  const value = [
    { textoOriginalKlingon: '' },
    { palavrasKlingon: [] },
    { totalPalavrasKlingon: 0 },
    { preposicoesKinglon: [] },
    { totalPreposicoesKinglon: 0 },
    { verbosKlingon: [] },
    { totalVerbosKlingon: 0 },
    { verbosKlingonPrimeiraPessoa: [] },
    { totalVerbosKlingonPrimeiraPessoa: 0 },
  ];

  value.textoOriginalKlingon = textoKlingon;
  value.palavrasKlingon = textoKlingon.split(' ');
  value.totalPalavrasKlingon = value.palavrasKlingon.length;

  /*
  DESAFIO -> PREPOSIÇÕES KLINGON
  As preposições em Klingon 
    [x] - São as palavras de 3 letras 
    [x] - Terminam numa letra tipo bar, mas onde não ocorre a letra d. 
    [x] - Portanto, é fácil ver que existem 63 preposições no Texto A. -> testado!
  
  Questão: Descubra no Texto B, quantas preposições existem.
  Resposta: 57 -> Testado!
  */
  value.preposicoesKinglon = value.palavrasKlingon.filter(function (item) {
    //validando se a palavra possui apenas 3 letras
    if (item.length === 3) {
      //validando se contem a letra r
      if (!item.includes('r')) {
        //Validando se a letra é tipo bar (não termina com s, l, f, w ou k);
        if (
          !item.endsWith('s') &&
          !item.endsWith('l') &&
          !item.endsWith('f') &&
          !item.endsWith('w') &&
          !item.endsWith('e') &&
          !item.endsWith('k')
        ) {
          return item; //retornando o item devidamente filtrado
        }
      }
    }
  });
  value.totalPreposicoesKinglon = value.preposicoesKinglon.length;

  /*
  DESAFIO -> VERBOS KLINGON
    Um outro fato interessante descoberto pelos linguistas é que, no Klingon.

      [x] - os verbos sempre são palavras de 8 ou mais letras 
      [x] - Terminam numa letra tipo foo. 
      [x] - Se um verbo começa com uma letra tipo bar, o verbo está em primeira pessoa.
      [x] - Assim, lendo o Texto A, é possível identificar 26 verbos no texto, dos quais 23 estão em primeira pessoa -> Testado!

    Questão: Descubra no Texto B, quantos verbos existem, e quantos são em primeira pessoa. 
    Resposta: 30, 25 -> Testado!
  */
  value.verbosKlingon = value.palavrasKlingon.filter(function (item) {
    //validando se a palavra possui apenas 3 letras
    if (item.length >= 8) {
      //Validando se a ultima letra é tipo Foo | Obs: as letras s, l, f, w e k são chamadas "letras tipo foo"
      if (
        item.endsWith('s') ||
        item.endsWith('l') ||
        item.endsWith('f') ||
        item.endsWith('w') ||
        item.endsWith('e') ||
        item.endsWith('k')
      ) {
        return item;
      }
    }
  });
  value.totalVerbosKlingon = value.verbosKlingon.length;

  value.verbosKlingonPrimeiraPessoa = value.verbosKlingon.filter(function (
    item
  ) {
    if (
      !item.startsWith('s') &&
      !item.startsWith('l') &&
      !item.startsWith('f') &&
      !item.startsWith('w') &&
      !item.startsWith('e') &&
      !item.startsWith('k')
    ) {
      return item;
    }
  });
  value.totalVerbosKlingonPrimeiraPessoa =
    value.verbosKlingonPrimeiraPessoa.length;

  return value;
}
ktypeA = DecifradorKinglon(txtA);
ktypeB = DecifradorKinglon(txtB);

console.log(`
VERBOS E PREPOSIÇÕES KLINGON
Pergaminho analisado K-tipoA decifrado.

Total de palavras Klingon descobertas: ${ktypeA.palavrasKlingon.length}
Total de Preposições Klingon descobertas: ${ktypeA.totalPreposicoesKinglon} 
Total de Verbos Klingon descobertos: ${ktypeA.totalVerbosKlingon}
Total de Verbos em primeira pessoa: ${ktypeA.totalVerbosKlingonPrimeiraPessoa} 
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- \n`);

console.log(`
VERBOS E PREPOSIÇÕES KLINGON 
Pergaminho analisado K-tipoB decifrado.

Total de palavras Klingon descobertas: ${ktypeB.palavrasKlingon.length}
Total de Preposições Klingon descobertas: ${ktypeB.totalPreposicoesKinglon} 
Total de Verbos Klingon descobertos: ${ktypeB.totalVerbosKlingon}
Total de Verbos em primeira pessoa: ${ktypeB.totalVerbosKlingonPrimeiraPessoa} 
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- \n`);
