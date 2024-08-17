let audioextensions = [
    '.WAV', '.aif', '.mp3', '.mid', '.bp', '.mtm', '.sabl', '.ec3', '.sty', '.wand', '.flp', '.gsm', '.abc', '.sdt',
    '.mp3', '.l', '.wproj', '.weba', '.alac', '.copy', '.nsf', '.mui', '.ust', '.flac', '.asd', '.sf2', '.xfs',
    '.aup', '.ptxt', '.voxal', '.apf', '.slp', '.amxd', '.sdx', '.rmt', '.gp', '.musicxml', '.mscx', '.smp', '.kc',
    '.nfa', '.pvf', '.wus', '.gmc', '.acp', '.aimppl', '.itls', '.phy', '.kt3', '.igp', '.sc2', '.xrns', '.gsf',
    '.h5s', '.2sf', '.mmpz', '.ftm', '.vpw', '.xmu', '.midi', '.mti', '.cdo', '.cgrp', '.cwb', '.sds', '.vsq',
    '.minigsf', '.sty', '.dtm', '.afc', '.mka', '.toc', '.fev', '.mp_', '.saf', '.dmse', '.dct', '.fsc', '.sngx',
    '.omg', '.mmlp', '.nki', '.efs', '.wow', '.pna', '.rad', '.dff', '.m4r', '.sfk', '.it', '.als', '.vdj', '.gsm',
    '.gp5', '.mid', '.4mp', '.xpf', '.apl', '.bun', '.eop', '.band', '.cue', '.ang', '.pcg', '.u8', '.rmj', '.zab',
    '.ogg', '.logic', '.rns', '.uni', '.uax', '.rx2', '.record', '.vag', '.ply', '.akp', '.sng', '.g726', '.abm',
    '.sfx', '.5xe', '.wax', '.acm', '.rex', '.wav', '.omf', '.rsf', '.vlc', '.alc', '.sfpack', '.rip', '.aria',
    '.sgp', '.dfc', '.mscz', '.fuz', '.rtm', '.au', '.dsm', '.cws', '.mini2sf', '.hbb', '.ovw', '.psm', '.emx',
    '.ncw', '.acd-zip', '.pla', '.sfl', '.ac3', '.pek', '.iti', '.vyf', '.dm', '.dcf', '.wfp', '.act', '.ins',
    '.rol', '.omx', '.rmx', '.vsqx', '.nst', '.q1', '.vqf', '.sseq', '.frg', '.h3e', '.nrt', '.q2', '.qcp', '.sesx',
    '.m3u8', '.flm', '.sdat', '.gbs', '.m4a', '.bww', '.rgrp', '.xmz', '.ptx', '.pts', '.ym', '.aob', '.wma', '.mxl',
    '.kin', '.trak', '.pcast', '.musa', '.sam', '.aa3', '.acd', '.bcs', '.bonk', '.sti', '.cidb', '.strm', '.acb',
    '.s3m', '.mpu', '.ckb', '.sbi', '.s3i', '.pandora', '.f32', '.isma', '.aup3', '.sbg', '.sph', '.tg', '.ins',
    '.sib', '.ram', '.syx', '.rso', '.3ga', '.gpk', '.at3', '.mtf', '.vgm', '.w01', '.oggstr', '.oma', '.med',
    '.0cc', '.aif', '.m3u', '.wave', '.stm', '.ksd', '.h5b', '.cdda', '.uw', '.b4s', '.note', '.wrk', '.cwt', '.cmf',
    '.awc', '.logicx', '.pkf', '.mod', '.ins', '.fsb', '.mtp', '.m4b', '.svd', '.mux', '.dra', '.zpa', '.kmp',
    '.opus', '.cts', '.wpp', '.caf', '.ptt', '.669', '.wfm', '.mus', '.ics', '.mo3', '.xa', '.aac', '.xspf',
    '.mx5template', '.sxt', '.box', '.tfmx', '.stap', '.wfb', '.dig', '.genh', '.ssnd', '.fpr', '.tsp', '.far',
    '.awb', '.thx', '.ptm', '.aiff', '.amf', '.vc3', '.mx4', '.dss', '.mpdp', '.mdr', '.emd', '.sd', '.rti', '.dmsa',
    '.h4b', '.aup3-shm', '.mmv', '.sou', '.agm', '.bdd', '.ais', '.cdr', '.h0', '.swa', '.rta', '.aa', '.wvc',
    '.bidule', '.iaa', '.gpbank', '.wem', '.a2p', '.lqt', '.ds', '.fls', '.vpl', '.mbr', '.lof', '.smf', '.h4e',
    '.nkx', '.mx3', '.cda', '.oga', '.bnk', '.nkm', '.d01', '.ftm', '.cwp', '.dsf', '.agr', '.mogg', '.sng',
    '.yookoo', '.ahx', '.zvd', '.vmd', '.wpk', '.vox', '.aud', '.mux', '.dtshd', '.prg', '.k25', '.bwg', '.bnl',
    '.lso', '.f4a', '.sf', '.w64', '.cpr', '.brstm', '.amr', '.wve', '.mxmf', '.dcm', '.pcm', '.iff', '.okt',
    '.wtpt', '.u', '.vip', '.gsflib', '.nsfe', '.drg', '.syw', '.aup3-wal', '.syh', '.rcy', '.sns', '.nml', '.m4p',
    '.xbmml', '.xwb', '.fpa', '.ra', '.raw', '.nwc', '.vpm', '.shn', '.nkc', '.mpa', '.dsp', '.gpx', '.mu3', '.tak',
    '.ab', '.jo', '.pk', '.dvf', '.8cm', '.xa', '.ftmx', '.igr', '.mdc', '.lwv', '.la', '.npl', '.caustic',
    '.2sflib', '.kar', '.odm', '.myr', '.obw', '.h5e', '.axa', '.dewf', '.tak', '.mx5', '.uwf', '.gio', '.adx',
    '.ppcx', '.syn', '.musx', '.mmm', '.sid', '.nvf', '.rmi', '.xp', '.dw', '.vpr', '.xsp', '.sample', '.ds2',
    '.psf', '.adt', '.wv', '.avastsounds', '.ear', '.a2m', '.pd', '.mmp', '.mpga', '.xma', '.5xb', '.bmml', '.all',
    '.dts', '.peak', '.eac3', '.song', '.cfa', '.seq', '.vce', '.hsb', '.ma1', '.nra', '.zpl', '.groove', '.psf1',
    '.vap', '.ktp', '.wyz', '.koz', '.gbproj', '.wut', '.vb', '.psf2', '.sdii', '.acd-bak', '.gro', '.wwu', '.cdlx',
    '.8med', '.krz', '.pca', '.efq', '.fdp', '.dpdoc', '.rcd', '.rpl', '.hca', '.msmpl_bank', '.efk', '.m5p', '.au',
    '.ssm', '.aea', '.rsn', '.sppack', '.bwf', '.esps', '.sfz', '.scs11', '.conform', '.st3', '.fzf', '.hbe',
    '.fzv', '.gig', '.naac', '.g721', '.k26', '.xopus', '.hbs', '.slx', '.capobundle', '.svp', '.6cm', '.m', '.tmc',
    '.m2', '.pac', '.mt2', '.ksc', '.rmf', '.mdl', '.sseq', '.dls', '.xm', '.caff', '.evr', '.mptm', '.aaxc',
    '.rdvxz', '.nsa', '.m3up', '.rng', '.mpd', '.sma', '.mwand', '.ots', '.bcstm', '.sap', '.tta', '.8svx', '.mts',
    '.mus', '.rfl', '.al', '.ksf', '.audionote', '.its', '.pho', '.jam', '.box', '.a2b', '.ape', '.sd', '.ddt',
    '.adg', '.ptf', '.amz', '.muz', '.adv', '.nmsv', '.aifc', '.usf', '.pno', '.mzp', '.smp', '.csh', '.miniusf',
    '.ove', '.ulaw', '.ses', '.dmf', '.aax', '.vrf', '.ams', '.imp', '.sth', '.xmf', '.sbk', '.fda', '.zvr', '.avr',
    '.r1m', '.mp2', '.mpc', '.5xs', '.psy', '.mmf', '.a52', '.prg', '.paf', '.nks', '.f2r', '.smpx', '.ovw', '.rbs',
    '.minincsf', '.pjunoxl', '.kit', '.dmc', '.bank', '.voc', '.mp1', '.aix', '.xsb', '.bfstm', '.wav', '.s3z',
    '.vgz', '.rvx', '.stw', '.bap', '.usflib', '.sprg', '.smp', '.3gpa', '.ppc', '.hdp', '.seg', '.gym', '.a2i',
    '.stx', '.kpl', '.imf', '.nkb', '.mgv', '.ult', '.mmp', '.emp', '.snd', '.vtx', '.exs', '.snd', '.mlp', '.spx',
    '.sb', '.kfn', '.fff', '.tm8', '.tm2', '.td0', '.val', '.sfap0', '.fap', '.adts', '.g723', '.snsf', '.atrac',
    '.f64', '.ircam', '.expressionmap', '.sd2f', '.zgr', '.fzb', '.rbs', '.tun', '.mt9', '.dwa', '.m1a', '.wfd',
    '.svq', '.ams', '.sfs', '.syn', '.df2', '.r', '.efa', '.bit', '.xt', '.swav', '.xi', '.cfxr', '.ariax', '.d00',
    '.c01', '.a2w', '.a2t', '.minipsf2', '.minipsf', '.ptcop', '.ckf', '.djr', '.emy', '.v2m', '.ofr', '.wtpl',
    '.ay', '.kt2', '.jam', '.alaw', '.fti', '.svx', '.dwd', '.pvc', '.ub', '.xmi', '.repeaks', '.jspf', '.fsm',
    '.cpt', '.narrative', '.mte', '.rax', '.snd', '.ntn', '.h3b', '.plst', '.xms', '.sfark', '.addoc', '.brr',
    '.nist', '.gpt', '.koala', '.g722', '.xoht', '.htk', '.svz', '.mrp', '.fxp', '.sdz', '.rxdoc', '.ota', '.s16',
    '.msmpl_all', '.edl', '.drm', '.mpa2', '.sw', '.pat', '.ase', '.pbf', '.mmjproject', '.ulw', '.voc', '.txw',
    '.vmo', '.cel', '.bfwav', '.sd2', '.jbx', '.vmf', '.hps', '.efe', '.rts', '.hes', '.gm', '.lvp', '.rmm', '.hma',
    '.erb', '.awb', '.hmi', '.guit', '.msv', '.vmf', '.djl', '.ima', '.voi', '.orc', '.efv', '.nap', '.jo-7z',
    '.gio', '.mws', '.evrc', '.pmpl', '.f3r', '.djp', , '.mpg', '.mov', '.wmv', '.rm', '.ty+', '.str', '.rxr',
    '.swf', '.aep', '.mkv', '.pz', '.plot', '.sfd', '.psv', '.piv', '.kine', '.prproj', '.veg', '.drp', '.inp',
    '.plotdoc', '.kdenlive', '.anm', '.pic', '.scm', '.vproj', '.cpvc', '.wlmp', '.msdvd', '.aec', '.bik', '.dcr',
    '.mswmm', '.webm', '.amc', '.scm', '.vpj', '.wpl', '.dir', '.cine', '.mp4', '.evo', '.fcp', '.fbr', '.srt',
    '.dcr', '.mse', '.rmvb', '.vob', '.clpi', '.flc', '.sbt', '.ssf', '.sub', '.pac', '.ifo', '.mxf', '.dmsm',
    '.vsp', '.rec', '.camproj', '.mvd', '.ivr', '.dmx', '.vp6', '.sqz', '.m4u', '.alpx', '.wmmp', '.dpa', '.av1',
    '.meta', '.vtt', '.tsv', '.mpeg', '.trp', '.rcd', '.gts', '.swi', '.db2', '.aepx', '.d3v', '.mpv', '.amx',
    '.mgv', '.mvp', '.screenflow', '.mani', '.hdmov', '.rms', '.video', '.ismv', '.3gp2', '.viv', '.asf', '.wmv',
    '.vc1', '.flv', '.psh', '.ser', '.zm2', '.ncor', '.ale', '.gfp', '.jtv', '.exi', '.siv', '.arcut', '.tvshow',
    '.pmf', '.rcut', '.g2m', '.meps', '.mys', '.dmsm3d', '.mpsub', '.m2ts', '.ogv', '.dv4', '.dxr', '.mproj', '.mp4v',
    '.mp4.infovid', '.dat', '.mob', '.ts', '.m1v', '.cme', '.mp5', '.idx', '.scc', '.zmv', '.dream', '.m2t', '.psb',
    '.mj2', '.mepx', '.iva', '.m4v', '.rm', '.mpeg4', '.trec', '.dzm', '.camrec', '.theater', '.mjpg', '.smv', '.tix',
    '.mnv', '.bk2', '.wp3', '.stx', '.vro', '.f4p', '.awlive', '.dash', '.xmv', '.mpg', '.vgz', '.wvm', '.mov', '.dzp',
    '.dv', '.tp', '.mts', '.pds', '.mep', '.sedprj', '.avb', '.sfvidcap', '.qtch', '.izzy', '.mv', '.avv', '.dvr-ms',
    '.dzt', '.kmproject', '.pclx', '.dmb', '.camv', '.m75', '.zm3', '.izz', '.dvr', '.vii', '.fli', '.int', '.tmv',
    '.ircp', '.ppj', '.m4s', '.mmp', '.ktn', '.ffd', '.cst', '.fbr', '.264', '.h264', '.bnp', '.playlist', '.wvx',
    '.avchd', '.dav', '.cpi', '.sbk', '.3mm', '.vep', '.vid', '.3g2', '.mp2v', '.xesc', '.sfera', '.rdb', '.m15',
    '.264', '.mvp', '.mpeg2', '.bsf', '.60d', '.jdr', '.xvid', '.lvix', '.pgi', '.890', '.san', '.d2v', '.ddat',
    '.yuv', '.aaf', '.movie', '.g64x', '.g64', '.ism', '.f4v', '.mpv2', '.mpl', '.media', '.ogx', '.3gpp', '.pro',
    '.pdrproj', '.tbc', '.hdv', '.f4f', '.dck', '.mvex', '.wve', '.mmv', '.hevc', '.mp21', '.xlmv', '.jss', '.dnc',
    '.rsx', '.tsp', '.mk3d', '.r3d', '.m4f', '.qtl', '.vcr', '.vp3', '.divx', '.bdmv', '.m2p', '.ogm', '.nut', '.moi',
    '.smk', '.rv', '.wcp', '.nuv', '.swt', '.k3g', '.spl', '.xml', '.wm', '.kmv', '.wrf', '.dpg', '.avi', '.bu', '.ced',
    '.rum', '.dvdmedia', '.tvlayer', '.tdt', '.3gpp2', '.lrec', '.3p2', '.mpe', '.exo', '.787', '.arf', '.tivo', '.flic',
    '.m2a', '.vp7', '.bmc', '.mtv', '.rmd', '.wmd', '.bdt3', '.nfv', '.tvs', '.lsx', '.lrv', '.gvi', '.aqt', '.mpg4',
    '.tpd', '.moov', '.aetx', '.jmv', '.dmsd', '.rmp', '.wxp', '.zoom', '.prel', '.mjp', '.v264', '.f4m', '.mvc', '.asx',
    '.imovieproj', '.nvc', '.y4m', '.ttxt', '.bvr', '.movie', '.irf', '.ajp', '.ftc', '.mve', '.imovielibrary', '.prtl',
    '.m2v', '.vse', '.aet', '.avp', '.zm1', '.mpgindex', '.m4e', '.zeg', '.tod', '.dvx', '.ave', '.avd', '.fvm', '.orv',
    '.bmk', '.roq', '.evo', '.ntp', '.vcv', '.tpr', '.hkm', '.pxv', '.m21', '.tda3mt', '.wot', '.vdr', '.smil',
    '.tvrecording', '.flh', '.axv', '.otrkey', '.n3r', '.sbz', '.lfpackage', '.wtv', '.bdm', '.plproj', '.ttml', '.ssm',
    '.sub', '.imoviemobile', '.rvid', '.fpdx', '.avs', '.ivf', '.peg', '.qt', '.sdv', '.dvt', '.vbc', '.braw',
    '.projector', '.m21', '.rvl', '.pjs', '.photoshow', '.cmproj', '.rcrec', '.gxf', '.mv8', '.vr', '.cmmtpl', '.ismc',
    '.insv', '.mpeg1', '.vivo', '.aegraphic', '.mpl', '.sec', '.mt2s', '.wmx', '.edl', '.vcpf', '.par', '.sec', '.qtm',
    '.pns', '.yog', '.rmd', '.w32', '.gifv', '.gcs', '.amv', '.xel', '.crec', '.clk', '.nsv', '.vix', '.av', '.thp',
    '.pvr', '.ravi', '.dv-avi', '.smi', '.fcproject', '.pssd', '.am', '.vfz', '.anim', '.ssa', '.seq', '.m1pg', '.vs4',
    '.blz', '.proqc', '.mpc', '.vfw', '.byu', '.qsv', '.bs4', '.fcarch', '.vlab', '.mxv', '.vmd', '.dif', '.mpls',
    '.mvb', '.modd', '.mod', '.qtz', '.tp0', '.xfl', '.viewlet', '.dce', '.ffm', '.gl', '.vem', '.ezt', '.spryzip',
    '.dlx', '.cmmp', '.cmrec', '.pro4dvd', '.vf', '.jts', '.axm', '.bix', '.vdo', '.aecap', '.imovieproject', '.dad',
    '.wsve', '.mpg2', '.vdx', '.xej', '.cvc', '.svi', '.exp', '.usf', '.stl', '.smi', '.fbz', '.dmss', '.ivs', '.lsf',
    '.fvt', '.jv', '.h261', '.cmv', '.cip', '.msh', '.seq', '.moff', '.scn', '.lxf', '.eyetv', '.pva', '.avm', '.mqv',
    '.gom', '.avs', '.wgi', '.rmv', '.avr', '.rcproject', '.eye', '.mjpeg', '.ismclip', '.tdx', '.ty', '.wfsp',
    '.pro5dvd', '.cx3', '.avc', '.anx', '.vmlt', '.vmlf', '.qtindex', '.bdt2', '.bik2', '.cam', '.cdxl', '.rts',
    '.drc', '.vsr', '.vp5', '.skm', '.avs', '.dmsd3d', '.pmp', '.mvy', '.h265', '.el8', '.camtemplate', '.anydesk',
    '.h266', '.gvp', '.mp21', '.tid', '.rp', '.qsmd', '.mpf', '.sml', '.lvf', '.av3', '.p64', '.h263', '.movie', '.vsh',
    '.flx', '.jnr', '.vft', '.kux', '.grasp', '.dsy', '.rts', '.pmv', '.h262', '.cel', '.tgv', '.ml20', '.tgq', '.rpl',
    '.rl2', '.paf', '.mvi', '.pjr'
]
let playpauseimg = document.getElementById("playpauseimg");
let restart = document.getElementById("restart");
let output = document.getElementById("songes");
let songe = document.getElementById("songe");
let lyrics = document.getElementById("lyrics");
let audio = document.getElementById("song");
let currentsongname = document.getElementById("currentsongname");
let volumemuted = document.getElementById("volumemuted");
let searsh = document.getElementById("searsh");
let vol = document.getElementById("vol");
let lo, fils = [], lyricslis = [], c = [], lrces = [];
let repeat = false;
let w = false;
let lasti = -1;
let currentsongid = -1;
let changetimevalue;
let oldvolume = 100;
let songeInterval;
let highperformance = false;
var mousePos;
var jsmediatags = window.jsmediatags;
document.onmousemove = handleMouseMove;
function upload() {
    document.getElementById("filelsoader").click();
    document.getElementById('unfocus').focus();
}
async function sItraker() {
    document.getElementById("send").innerText = "/" + (Math.floor((Number)(audio.duration) / 60)) + ":" + (Math.floor((Number)(audio.duration) % 60));
    document.getElementById("snow").innerText = (Math.floor((Number)(audio.currentTime) / 60)) + ":" + (Math.floor((Number)(audio.currentTime) % 60));
    songe.style.backgroundSize = " " + audio.currentTime / audio.duration * 100 + "%" + " 100%";
    songe.value = audio.currentTime / audio.duration * 100;
    try {
        navigator.mediaSession.setPositionState({
            duration: audio.duration,
            playbackRate: audio.playbackRate,
            position: audio.currentTime,
        });
    } catch { }
    if (lyricslis.length > 1) {
        for (let i = 1; i < lyricslis.length; i++) {
            if (audio.currentTime < (Number)(lyricslis[i].id) && audio.currentTime > (Number)(lyricslis[i - 1].id)) {
                try {
                    lyricslis[i - 1].style.color = "white";
                    lyricslis[i - 1].style.backgroundColor = "rgba(255, 255, 255, 0.7)";
                    let pos = lyricslis[i - 1].getBoundingClientRect();
                    let scr = (pos.top + (pos.bottom - pos.top) / 2) - window.innerHeight / 2;
                    if ((lasti != i - 1 && (scr < window.innerHeight / 2 && scr > 0)) || (w)) {
                        await Scroll(scr);
                    }
                    async function Scroll(pixels) {
                        lasti = i - 1;
                        if (w) {
                            await checkdirection(true)
                        } else if (pixels < window.screen.height * .2 && pixels > window.screen.height * -.2 && w == false) {
                            await checkdirection(false)
                        }
                        async function checkdirection(q) {
                            if (pixels > 1) {
                                await scrollpx(1)
                            }
                            if (pixels < -1) {
                                await scrollpx(-1)
                            }
                            if (pixels > -1 && pixels < 1) {
                                if (q) {
                                    w = false;
                                }
                                return;
                            }
                        }
                        async function scrollpx(n) {
                            lyrics.scrollTop += n;
                            scrollTimeout = setTimeout(function () {
                                pos = lyricslis[i - 1].getBoundingClientRect();
                                let scr = (pos.top + (pos.bottom - pos.top) / 2) - window.innerHeight / 2;
                                if (scr == pixels) { w = false; return; }
                                Scroll(scr);
                            }, Infinity);
                        }
                    }
                } catch { }
            } else {
                if (audio.currentTime > (Number)(lyricslis[lyricslis.length - 1].id)) {
                    lyricslis[lyricslis.length - 1].style.color = "white";
                    lyricslis[lyricslis.length - 1].style.backgroundColor = "rgba(255, 255, 255, 0.7)";
                } else {
                    lyricslis[lyricslis.length - 1].style.removeProperty("color")
                    lyricslis[lyricslis.length - 1].style.removeProperty("background-color")
                }
                try {
                    if (audio.currentTime > (Number)(lyricslis[i - 1].id)) {
                        lyricslis[i - 1].style.color = "white";
                    } else {
                        lyricslis[i - 1].style.removeProperty('color');
                    }
                    lyricslis[i - 1].style.removeProperty('background-color');
                } catch { }
            }
        }
    }
    if (!(document.activeElement === searsh)) {
        document.getElementById('unfocus').focus();
    }
}
function next() {
    findsonge('n')
}
function back() {
    findsonge('b')
}
function findsonge(q) {
    if (currentsongid == -1) {
        try { outputlist[0][0].click(); }
        catch { upload(); }
        return;
    }
    for (let i = 0; i < outputlist.length; i++) {
        if (outputlist[i][0].id == currentsongid) {
            if (q == 'n') {
                for (var j = 1; ; j++) {
                    if (i + j < outputlist.length) {
                        if (outputlist[i + j][0].style.display != 'none') {
                            outputlist[i + j][0].click(); return;
                        }
                    } else { i = 0; j = -1; }
                }
            } else {
                for (var j = 1; ; j++) {
                    if (i - j > -1) {
                        if (outputlist[i - j][0].style.display != 'none') {
                            outputlist[i - j][0].click(); return;
                        }
                    }
                    else { i = outputlist.length - 1; j = -1; }
                }
            }
        }
    }
}
audio.onended = function () {
    if (repeat) {
        audio.play();
    } else {
        next();
    }
};
function playpause() {
    if (currentsongid != -1) {
        let o = playpauseimg.src.substring(playpauseimg.src.lastIndexOf("/") + 1, playpauseimg.src.length)
        if (o == "plyr-pause.svg") {
            playpauseimg.src = "plyr-play.svg"
            audio.pause();
        } else {
            playpauseimg.src = "plyr-pause.svg";
            audio.play();
            if (!w) { w = true; }
        }
    } else {
        try { outputlist[0][0].click(); }
        catch { upload(); }
    }
}
function repeatfunc() {
    repeat = (!repeat);
    if (repeat)
        restart.style.filter = " brightness(0) invert(1)";
    else
        restart.style.filter = "none";
}
function handleMouseMove(event) {
    var eventDoc, doc, body, pageX, pageY;
    event = event || window.event;
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop || body && body.scrollTop || 0) -
            (doc && doc.clientTop || body && body.clientTop || 0);
    }
    mousePos = {
        x: event.pageX,
        y: event.pageY
    };
}
function changetime() {
    let pos = songe.getBoundingClientRect();
    changetimevalue = ((mousePos.x - pos.left) / (pos.right - pos.left)) * 100;
    try {
        audio.currentTime = audio.duration * changetimevalue / 100;
    } catch { }
    if (w != true) w = true;
}
var lastfolder = '';
let opensonge = function () {
    if (songeInterval != NaN) {
        clearInterval(songeInterval);
    }
    lastfolder = folder;
    if (currentsongid != -1) {
        document.getElementById(currentsongid).style.color="black";
        document.getElementById(currentsongid).style.backgroundColor="rgba(255, 255, 255, 0.3)";
    }
    currentsongid = this.id;
    try {
        audio.src = URL.createObjectURL(fils[this.id]);
    } catch { return }
    currentsongname.innerText = this.innerText;
    audio.play();
    if (this.children.length == 1) {
        st = Date.now();
        var worker = new Worker('worker.js');
        worker.postMessage({ lastbackgroundImage: Date.now(), i: this.id, file: fils[this.id], st, open: true });
        worker.addEventListener("message", getmessage);
    } else {
        lastbackgroundImage = Date.now();
        document.getElementsByClassName("soundImage")[0].src = this.children[0].src;
        document.getElementsByClassName("navbar-")[0].style.backgroundImage = "url(" + this.children[0].src + ")";
        updatenavigator(Date.now(), this.children[0], this.innerText)
    }

    playpauseimg.src = "plyr-pause.svg";
    this.style.color = "white";
    this.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    songeInterval = setInterval(sItraker, 100);
    loadlyrics(Date.now());
}
function resizeBase64Image(base64, maxSize) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = base64;
    return new Promise((resolve) => {
        image.onload = function () {
            let width = image.width;
            let height = image.height;
            if (width > height) {
                if (width > maxSize) {
                    height *= maxSize / width;
                    width = maxSize;
                }
            } else {
                if (height > maxSize) {
                    width *= maxSize / height;
                    height = maxSize;
                }
            }
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(image, 0, 0, width, height);
            resolve(canvas.toDataURL('image/jpeg'));
        };
    })

}

var lastnavigatorImage = Date.now();
var navigatorupdated = false;
async function updatenavigator(msglastbackgroundImage, img, Title) {
    if (msglastbackgroundImage > lastnavigatorImage) {
        lastnavigatorImage = msglastbackgroundImage;
        var r = await resizeBase64Image(img.src, 255)
        navigator.mediaSession.metadata = new MediaMetadata({
            title: "Title: " + Title,
            artist: "Artist: " + outputlist.find(x => x[0].id === currentsongid)[1],
            album: "Album: " + outputlist.find(x => x[0].id === currentsongid)[2],
            artwork: [{
                src: r,
            }]
        })
        const actionHandlers = new Map([
            ['play', () => { playpause(); }],
            ['pause', () => { playpause(); }],
            ['nexttrack', () => { next(); }],
            ['previoustrack', () => { back(); }],
            ['seekforward', () => {
                audio.currentTime += 5;
                if (w != true) {
                    w = true;
                }
            }],
            ['seekbackward', () => {
                audio.currentTime -= 5;
                if (w != true) {
                    w = true;
                }
            }],
            ['seekto', (d) => { audio.currentTime = d.seekTime }],
            ['togglemicrophone', () => { volume(); }],
            //['',()=>{}],
        ])
        for (const [a, h] of actionHandlers) {
            try {
                navigator.mediaSession.setActionHandler(a, h);
            } catch (e) {
                console.log("can't set " + a)
            }
        }
        navigator.mediaSession.playbackState = audio.paused ? "playing" : "paused";
        navigatorupdated = true;
    }
}
function imgSize(d) {
    return d.naturalWidth + "x" + d.naturalHeight
}
function volume() {
    let o = volumemuted.src.substring(volumemuted.src.lastIndexOf("/") + 1, volumemuted.src.length);
    if (o == "plyr-volume.svg") {
        volumemuted.src = "plyr-muted.svg"
        audio.muted = true;
        vol.style.backgroundSize = "0%" + " 100%";
        vol.value = 0;
        localStorage.setItem('oldvolume', vol.value);
    } else {
        volumemuted.src = "plyr-volume.svg"
        audio.muted = false;
        vol.style.backgroundSize = oldvolume + "%" + " 100%";
        vol.value = oldvolume;
        localStorage.setItem('oldvolume', vol.value);
    }
}
function changevol() {
    audio.volume = vol.value / 100;
    vol.style.backgroundSize = vol.value + '%' + '100%';
    if (audio.volume == 0) {
        volumemuted.src = 'plyr-muted.svg'
        audio.muted = true;
    } else {
        volumemuted.src = 'plyr-volume.svg'
        audio.muted = false;
    }
    oldvolume = vol.value;
    localStorage.setItem('oldvolume', vol.value);
}
function scrollvol(event) {
    if (checkScrollDirectionIsUp(event)) {
        vol.value = ((Number)(vol.value)) + 5; changevol();
    } else {
        vol.value -= 5; changevol();
    }
    function checkScrollDirectionIsUp(event) {
        if (event.wheelDelta) {
            return event.wheelDelta > 0;
        }
        return event.deltaY < 0;
    }
};
var st;
let lastollength;
let n = 0;
var folder = '';
var lastsongfromfolder = '';
function browseResult(event) {
    if (event.target.files.length <= 0) { return; }
    if (lastfolder != '') {
        localStorage.setItem(lastfolder, currentsongname.innerText)
    }
    folder = event.target.files[0].webkitRelativePath.substring(0, event.target.files[0].webkitRelativePath.indexOf('/'));
    lastsongfromfolder = localStorage.getItem(folder);
    output.innerHTML = '';
    lo = [];
    lrces = [];
    fils = [];
    n = 0;
    outputlist = [];
    currentsongid = -1;
    fils = event.target.files;
    loadNext(0);
}
searsh.addEventListener("input", () => {
    for (var i = 0; i < output.children.length; i++) {
        if (!output.children[i].innerText.toLowerCase().includes(searsh.value.toLowerCase())) {
            output.children[i].style.display = 'none'
        } else {
            output.children[i].style.removeProperty('display')
        }
    }
});
function loadNext(n) {
    st = Date.now();
    lastollength = lo.length;
    const chunkSize = highperformance === 'true' ? 16 : fils.length;
    const startIndex = 16 * n;
    const endIndex = Math.min(fils.length, startIndex + chunkSize);
    for (let i = startIndex; i < endIndex; i++) {
        loadFile(i);
    }
    if (output.children.length == 0) {
        searsh.style.display = 'none';
    }
    function loadFile(i) {
        const extensionStart = fils[i].name.lastIndexOf('.');
        const extension = fils[i].name.substring(extensionStart, fils[i].name.length);
        if (audioextensions.indexOf(extension) !== -1) {
            const item = document.createElement('li');
            item.id = '' + i;
            item.innerHTML = `<div>${fils[i].name.substring(0, extensionStart)}</div>`;
            item.onclick = opensonge;
            if (highperformance === 'true') {
                const worker = new Worker('worker.js');
                worker.postMessage({ i: lo.length, file: fils[i], st, open: false });
                worker.addEventListener('message', getmessage);
            } else {
                output.appendChild(item);
                searsh.style.removeProperty('display')
                outputlist[outputlist.length] = [item];
                if (item.innerText == lastsongfromfolder) {
                    item.click();
                }
            }
            lo[lo.length] = item;
        }
        if (extension === '.lrc') {
            lrces[lrces.length] = fils[i];
        }
    }
}

var lastbackgroundImage = Date.now();
var outputlist = [];
let getmessage = function (msg) {
    if (msg == undefined) return
    msg = msg.data;
    var open = msg.open
    let item = '';
    if (!open)
        item = lo[msg.i];
    else {
        item = document.getElementById(msg.i + "");
    }
    let img = document.createElement("img");
    img.className = "soundImage";
    if (msg.d != '') {
        img.src = 'data:' + msg.format + ';base64,' + window.btoa(msg.d);
    } else {
        img.src = "/a.png";
    }
    if (!open || item.children.length == 1) {
        item.innerHTML = img.outerHTML + item.innerHTML;
    }
    if (!open) {
        output.appendChild(item);
        searsh.style.removeProperty('display')
        outputlist[outputlist.length] = [item, msg.artist, msg.album];
        if (item.innerText == lastsongfromfolder) {
            item.click();
        }
    }
    if (!msg.open && output.childElementCount == lo.length) {
        console.log("last ol length: " + (lastollength))
        console.log("songes: " + (lo.length - lastollength))
        console.log("start: " + st)
        console.log("end: " + Date.now())
        console.log("total time: " + (Date.now() - st) / 1000 + "s")
        console.log("avarege time: " + (Date.now() - st) / (lo.length - lastollength) + "ms")
        n++;
        loadNext(n);
    }
    if (msg.open) {
        console.log("start: " + st)
        console.log("end: " + Date.now())
        console.log("total time: " + (Date.now() - st) / 1000 + "s")
        console.log("avarege time: " + (Date.now() - st) + "ms")
        outputlist.find(x => x[0].id === currentsongid)[1] = msg.artist;
        outputlist.find(x => x[0].id === currentsongid)[2] = msg.album;
    }
    if (msg.open && msg.lastbackgroundImage > lastbackgroundImage) {
        lastbackgroundImage = msg.lastbackgroundImage;
        updatenavigator(msg.lastbackgroundImage, img, item.innerText)
        document.getElementsByClassName("soundImage")[0].src = img.src;
        document.getElementsByClassName("navbar-")[0].style.backgroundImage = "url(" + img.src + ")";
    }
    delete this
}
function keyhandeler(event) {
    if (!(document.activeElement === searsh)) {
        if (event.key == 'm' || event.key == 'M') { volume(); return }
        if ((event.key == 'MediaTrackPrevious' && !navigatorupdated) || event.key == 'b' || event.key == 'B') { back(); return }
        if (event.key == 'MediaPlayPause' && !navigatorupdated) { playpause(); return }
        if ((event.key == 'MediaTrackNext' && !navigatorupdated) || event.key == 'n' || event.key == 'N') { next(); return }
        if (event.key == "r" || event.key == "R") { repeatfunc(); return }
        if (event.key == "u" || event.key == "U") { upload(); return }
        if (event.key == 'ArrowRight') { audio.currentTime += 5; if (w != true) { w = true; } return }
        if (event.key == 'ArrowLeft') { audio.currentTime -= 5; if (w != true) { w = true; } return }
        if (event.key == 'ArrowUp') { vol.value = ((Number)(vol.value)) + 5; changevol(); return }
        if (event.key == 'ArrowDown') { vol.value -= 5; changevol(); return }
        if (event.key == ' ') { playpause(); return }
    }
}
let lyricsclick = function (event) {
    if (event.target.id != '') {
        audio.currentTime = parseFloat(event.target.id);
        if (w != true) w = true;
    } else {
        audio.currentTime = parseFloat(event.target.parentElement.id);
        if (w != true) w = true;
    }
}
var lyricsd = Date.now();
function loadlyrics(d) {
    try {
        let read = new FileReader();
        let j = fileindex(currentsongname.innerText + ".lrc");
        read.readAsText(lrces[j]);
        read.onloadend = function () {
            let lines = read.result.split('\n');
            let output = "";
            for (let i = 0; i < lines.length; i++) {
                let minute = parseFloat(lines[i].substring(1, 3));
                let second = parseFloat(lines[i].substring(4, 9));
                if (isNaN(minute) || isNaN(second)) continue;
                let li = document.createElement("li");
                li.id = parseFloat((second)) + parseFloat((minute * 60));
                li.innerHTML = "<div>" + lines[i].substring(lines[i].indexOf("]") + 1, lines[i].length).trim() + "</div>";
                li.setAttribute('onclick', 'lyricsclick(event)');
                output += li.outerHTML;
            };
            if (d > lyricsd) {
                lyricsd = d;
                lyrics.scrollTop = 0;
                lyrics.innerHTML = output;
                lyricslis = lyrics.getElementsByTagName('li');
            }
        }
    } catch {
        if (d > lyricsd) {
            lyricsd = d;
            lyricslis = [];
            lyrics.innerText = '';
            let li = document.createElement("li");
            li.innerHTML = "<div>There Is No Lyrics</div>";
            lyrics.innerHTML = li.outerHTML;
        }
    }
};
function fileindex(fn) {
    for (let i = 0; i < lrces.length; i++) {
        if (lrces[i].name == fn)
            return i;
    }
}
function sethighperformance(event) {
    if (event.target.checked) {
        localStorage.setItem('highperformance', true);
        highperformance = 'true';
    }
}
function setlowperformance(event) {
    if (event.target.checked) {
        localStorage.setItem('highperformance', false);
        highperformance = 'false';
    }
}
window.onload = () => {
    var o = localStorage.getItem('highperformance');
    if (o == null) {
        localStorage.setItem('highperformance', false);
    } else {
        highperformance = o;
        if (highperformance == 'true')
            document.getElementById('highperformance').checked = true;
        else
            document.getElementById('lowperformance').checked = true;
    }
    var oldv = localStorage.getItem('oldvolume');
    if (oldv == null) {
        localStorage.setItem('oldvolume', 100);
    } else {
        oldvolume = oldv;
        vol.value = oldvolume
        changevol()
    }
    if ("mediaSession" in navigator) {
        const events = ['playing', 'paused', 'durationchange', 'timchange']
        for (const e of events) {
            audio.addEventListener(e, updatenavigator)
        }
    }
}
window.onunload = function () {
    if (lastfolder != '') {
        localStorage.setItem(lastfolder, currentsongname.innerText)
    }
};
function showsettings() {
    let set = document.getElementsByClassName('activate')[0].click();
}
document.addEventListener("mousemove",async function (e) {
    let distance = lyrics.offsetLeft + lyrics.offsetWidth - e.pageX;
    distance < 11 && distance > 0 ?await setup("--lyrics--scrollbar-width", "10") :await setdown("--lyrics--scrollbar-width", "5");
    distance = output.offsetLeft + output.offsetWidth - e.pageX;
    distance < 11 && distance > 0 ?await setup("--songes--scrollbar-width", "10") :await setdown("--songes--scrollbar-width", "5");
});
var r = document.querySelector(':root');
async function get(name) {
    var rs =await getComputedStyle(r);
    return await rs.getPropertyValue(name).substring(0, rs.getPropertyValue(name).indexOf("p"));
}
async function set(name,scrollbarwidth) {
    await r.style.setProperty(name, scrollbarwidth + "px");
}
async function setup(name, scrollbarwidth) {
    var current =await get(name)
    if ((Number)(current) < (Number)(scrollbarwidth)) {
        await set(name,(Number)(current) + 1);
        let distance = lyrics.offsetLeft + lyrics.offsetWidth - mousePos.x;
        if (distance < 11 && distance > 0) setTimeout(async() => {
            await setup(name, scrollbarwidth)
        }, 10)
        distance = output.offsetLeft + output.offsetWidth - mousePos.x;
        if (distance < 11 && distance > 0) setTimeout(async() => {
            await setup(name, scrollbarwidth)
        }, 10)
    }
}
async function setdown(name, scrollbarwidth) {
    var current =await get(name)
    if ((Number)(current) > (Number)(scrollbarwidth)) {
        await set(name,(Number)(current) - 1);
        let distance = lyrics.offsetLeft + lyrics.offsetWidth - mousePos.x;
        if (!(distance < 11 && distance > 0)) setTimeout(async() => {
            await setdown(name, scrollbarwidth)
        }, 10)
        distance = output.offsetLeft + output.offsetWidth - mousePos.x;
        if (!(distance < 11 && distance > 0)) setTimeout(async () => {
            await setdown(name, scrollbarwidth)
        }, 10)
    }
}