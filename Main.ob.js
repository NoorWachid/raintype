const _0x7018=['Board','\x20keystroke','\x20word','focus','random','Timer','hidden','textContent','addEventListener','Type\x20here...','TypeBox','toFixed','TypedWrong','push','value','span','input','slice','Active','classList','appendChild','createElement','start','ActiveWrong','smooth','length','scrollIntoView','click','Input','w/m','getElementById','placeholder','now','Wpm','data'];(function(_0x36e878,_0x70184d){const _0x288280=function(_0x39d66e){while(--_0x39d66e){_0x36e878['push'](_0x36e878['shift']());}};_0x288280(++_0x70184d);}(_0x7018,0x1d1));const _0x2882=function(_0x36e878,_0x70184d){_0x36e878=_0x36e878-0x0;let _0x288280=_0x7018[_0x36e878];return _0x288280;};const _0x27e058=_0x2882,typeBox=document[_0x27e058('0x14')](_0x27e058('0x0')),board=document['getElementById'](_0x27e058('0x19')),input=document['getElementById'](_0x27e058('0x12')),info=document['getElementById']('Info'),timer=document[_0x27e058('0x14')](_0x27e058('0x1e')),currentWpm=document['getElementById']('CurrentWpm'),scoreBox=document[_0x27e058('0x14')]('ScoreBox'),wpm=document[_0x27e058('0x14')](_0x27e058('0x17')),accuracy=document[_0x27e058('0x14')]('Accuracy'),wordDetail=document[_0x27e058('0x14')]('WordDetail'),keystrokeDetail=document['getElementById']('KeystrokeDetail'),restartBtn=document['getElementById']('RestartBtn');let indexCounter=0x0,charCounter=0x0,correctCharCounter=0x0,wordCounter=0x0,corretWordCounter=0x0,wordMin=0x6e,wordAboutGen=0x14,wordScaleGen=0x32,running=![],timeoutMax=0x3c,timeout=0x0,intervalId=0x0,beginPoint=0x0,elements=[],prevTypedWord='';function Initialize(){const _0x2ec9b4=_0x27e058;input[_0x2ec9b4('0x21')]('blur',_0x39d66e=>input[_0x2ec9b4('0x15')]=_0x2ec9b4('0x22')),input[_0x2ec9b4('0x21')](_0x2ec9b4('0x1c'),_0x180624=>input[_0x2ec9b4('0x15')]=''),input[_0x2ec9b4('0x21')](_0x2ec9b4('0x6'),OnInput),restartBtn[_0x2ec9b4('0x21')](_0x2ec9b4('0x11'),_0x58a895=>{const _0x11f9da=_0x2ec9b4;Reset(),input[_0x11f9da('0x1c')]();}),info['hidden']=!![],scoreBox[_0x2ec9b4('0x1f')]=!![];}function Reset(){const _0x25de35=_0x27e058;elements=[],indexCounter=0x0,charCounter=0x0,correctCharCounter=0x0,wordCounter=0x0,correntWordCounter=0x0,beginPoint=0x0,input[_0x25de35('0x4')]='',running=![],Generate(wordMin),elements[indexCounter][_0x25de35('0x10')](),clearInterval(intervalId),info[_0x25de35('0x1f')]=!![];}function Start(){const _0x376040=_0x27e058;timeout=timeoutMax,OnTick(),intervalId=setInterval(OnTick,0x3e8),beginPoint=Date[_0x376040('0x16')](),info[_0x376040('0x1f')]=![];}function Finish(){const _0x1e0c5d=_0x27e058,_0x5a07b4=charCounter>=0x0?correctCharCounter/charCounter*0x64:0x0;wpm['textContent']=CalculateWpm()['toFixed'](0x1),accuracy['textContent']=_0x5a07b4[_0x1e0c5d('0x1')](0x1),wordDetail[_0x1e0c5d('0x20')]=correntWordCounter+'/'+wordCounter,wordDetail['textContent']+=wordCounter>0x1?'\x20words':_0x1e0c5d('0x1b'),keystrokeDetail[_0x1e0c5d('0x20')]=correctCharCounter+'/'+charCounter,keystrokeDetail[_0x1e0c5d('0x20')]+=charCounter>0x1?'\x20keystrokes':_0x1e0c5d('0x1a'),clearInterval(intervalId),timer['hidden']=!![],typeBox['hidden']=!![],scoreBox['hidden']=![];}function OnTick(){const _0x24e951=_0x27e058;timeout<=0x0&&Finish(),timer[_0x24e951('0x20')]=timeout+'s\x20',currentWpm[_0x24e951('0x20')]=CalculateWpm()[_0x24e951('0x1')](0x1)+_0x24e951('0x13'),timeout--;}function OnInput(_0x545adb){const _0x504122=_0x27e058;!running&&(running=!![],Start());if(_0x545adb[_0x504122('0x18')]!='\x20'){const _0xc5e69e=elements[indexCounter][_0x504122('0x20')][_0x504122('0x7')](0x0,input['value'][_0x504122('0xf')]);input['value']!=_0xc5e69e?elements[indexCounter][_0x504122('0x9')]=[_0x504122('0xd')]:elements[indexCounter]['classList']=[_0x504122('0x8')],prevTypedWord=input[_0x504122('0x4')];}else indexCounter+wordAboutGen>elements[_0x504122('0xf')]&&Generate(wordScaleGen),elements[indexCounter][_0x504122('0x10')]({'behavior':_0x504122('0xe'),'block':_0x504122('0xc'),'inline':_0x504122('0xc')}),prevTypedWord==elements[indexCounter][_0x504122('0x20')]?(elements[indexCounter][_0x504122('0x9')]=['Typed'],correctCharCounter+=input[_0x504122('0x4')][_0x504122('0xf')],correntWordCounter++):elements[indexCounter][_0x504122('0x9')]=[_0x504122('0x2')],charCounter+=input['value']['length'],wordCounter++,indexCounter++,input[_0x504122('0x4')]='',elements[indexCounter]['classList']=[_0x504122('0x8')];}function Generate(_0x28b624){const _0x47d0e6=_0x27e058;for(let _0x164603=0x0;_0x164603<_0x28b624;++_0x164603){const _0x33e4fe=words[Math['floor'](Math[_0x47d0e6('0x1d')]()*words[_0x47d0e6('0xf')])],_0x567325=document[_0x47d0e6('0xb')](_0x47d0e6('0x5')),_0x23a298=document[_0x47d0e6('0xb')](_0x47d0e6('0x5'));_0x567325[_0x47d0e6('0x20')]=_0x33e4fe,_0x23a298['textContent']='\x20',board[_0x47d0e6('0xa')](_0x567325),board[_0x47d0e6('0xa')](_0x23a298),elements[_0x47d0e6('0x3')](_0x567325);};}function CalculateWpm(){const _0x496d89=Date['now']()-beginPoint;return correctCharCounter/0x5/(_0x496d89/0xea60);}Initialize(),Reset();