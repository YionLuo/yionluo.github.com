for(var i = 0; i < 255; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('login')) == ('1')) {

	SetPanelVisibility('u193','hidden','none',500);

	SetPanelVisibility('u196','hidden','none',500);

	SetPanelVisibility('u247','toggle','none',500);

}

});
gv_vAlignTable['u115'] = 'center';document.getElementById('u122_img').tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

}
});
gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u165'] = 'center';document.getElementById('u130_img').tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	SetPanelVisibility('u51','hidden','none',500);

}
});
gv_vAlignTable['u236'] = 'center';gv_vAlignTable['u17'] = 'center';document.getElementById('u222_img').tabIndex = 0;

u222.style.cursor = 'pointer';
$axure.eventManager.click('u222', function(e) {

if (true) {

	SetPanelVisibility('u202','hidden','none',500);

}
});
gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u212'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u101'] = 'center';document.getElementById('u186_img').tabIndex = 0;

u186.style.cursor = 'pointer';
$axure.eventManager.click('u186', function(e) {

if ((GetGlobalVariableValue('login')) != ('1')) {

	SetPanelState('u51', 'pd2u51','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('login')) == ('1')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('学品空间.html');

}
});

$axure.eventManager.mouseover('u186', function(e) {
if (!IsTrueMouseOver('u186',e)) return;
if ((GetGlobalVariableValue('login')) == ('1')) {

}
});

$axure.eventManager.mouseout('u186', function(e) {
if (!IsTrueMouseOut('u186',e)) return;
if (true) {

}
});
gv_vAlignTable['u14'] = 'center';document.getElementById('u48_img').tabIndex = 0;

u48.style.cursor = 'pointer';
$axure.eventManager.click('u48', function(e) {

if (true) {

	SetPanelState('u45', 'pd1u45','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u40', 'pd1u40','none','',500,'none','',500);

	SetPanelState('u35', 'pd0u35','none','',500,'none','',500);

	SetPanelState('u50', 'pd1u50','none','',500,'none','',500);

}
});
gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u241'] = 'center';gv_vAlignTable['u27'] = 'center';document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u67'] = 'center';document.getElementById('u120_img').tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

}
});
gv_vAlignTable['u189'] = 'center';document.getElementById('u110_img').tabIndex = 0;

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

SetGlobalVariableValue('login', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u163'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u62'] = 'center';document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	SetPanelState('u10', 'pd0u10','none','',500,'none','',500);

	SetPanelState('u15', 'pd0u15','none','',500,'none','',500);

	SetPanelState('u20', 'pd0u20','none','',500,'none','',500);

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

}
});
document.getElementById('u89_img').tabIndex = 0;

u89.style.cursor = 'pointer';
$axure.eventManager.click('u89', function(e) {

if (true) {

	SetPanelVisibility('u51','hidden','none',500);

}
});
gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u200'] = 'top';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u47'] = 'center';document.getElementById('u184_img').tabIndex = 0;

u184.style.cursor = 'pointer';
$axure.eventManager.click('u184', function(e) {

if (true) {

	SetPanelState('u51', 'pd3u51','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u184', function(e) {
if (!IsTrueMouseOver('u184',e)) return;
if (true) {

	SetPanelState('u176', 'pd1u176','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u184', function(e) {
if (!IsTrueMouseOut('u184',e)) return;
if (true) {

	SetPanelState('u176', 'pd0u176','none','',500,'none','',500);

}
});
gv_vAlignTable['u155'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u214'] = 'center';gv_vAlignTable['u44'] = 'center';
$axure.eventManager.mouseover('u179', function(e) {
if (!IsTrueMouseOver('u179',e)) return;
if (true) {

	SetPanelState('u176', 'pd1u176','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u179', function(e) {
if (!IsTrueMouseOut('u179',e)) return;
if (true) {

	SetPanelState('u176', 'pd0u176','none','',500,'none','',500);

}
});
gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u231'] = 'center';u57.tabIndex = 0;

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

	SetPanelState('u60', 'pd1u60','none','',500,'none','',500);

}
});
u253.tabIndex = 0;

u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if (true) {

	SetPanelVisibility('u247','hidden','none',500);

	SetPanelVisibility('u250','hidden','none',500);

	SetPanelVisibility('u193','','none',500);

	SetPanelVisibility('u196','','none',500);

}
});

$axure.eventManager.mouseover('u253', function(e) {
if (!IsTrueMouseOver('u253',e)) return;
if (true) {

	SetPanelState('u250', 'pd1u250','none','',500,'none','',500);

}
});
gv_vAlignTable['u191'] = 'center';gv_vAlignTable['u161'] = 'center';gv_vAlignTable['u125'] = 'center';document.getElementById('u41_img').tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	SetPanelState('u40', 'pd0u40','none','',500,'none','',500);

	SetPanelState('u35', 'pd0u35','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u45', 'pd0u45','none','',500,'none','',500);

	SetPanelState('u50', 'pd3u50','none','',500,'none','',500);

}
});
gv_vAlignTable['u172'] = 'center';document.getElementById('u158_img').tabIndex = 0;

u158.style.cursor = 'pointer';
$axure.eventManager.click('u158', function(e) {

if (true) {

}
});
gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u208'] = 'center';document.getElementById('u197_img').tabIndex = 0;

u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', function(e) {

if (true) {

	SetPanelState('u51', 'pd0u51','none','',500,'none','',500);

}
});
gv_vAlignTable['u131'] = 'center';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelState('u35', 'pd1u35','none','',500,'none','',500);

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

	SetPanelState('u40', 'pd1u40','none','',500,'none','',500);

	SetPanelState('u45', 'pd0u45','none','',500,'none','',500);

	SetPanelState('u50', 'pd2u50','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u174', function(e) {
if (!IsTrueMouseOver('u174',e)) return;
if (true) {

	SetPanelState('u170', 'pd1u170','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u174', function(e) {
if (!IsTrueMouseOut('u174',e)) return;
if (true) {

	SetPanelState('u170', 'pd0u170','none','',500,'none','',500);

}
});
gv_vAlignTable['u174'] = 'top';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u145'] = 'center';document.getElementById('u182_img').tabIndex = 0;

u182.style.cursor = 'pointer';
$axure.eventManager.click('u182', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('学习页面.html');

}
});

$axure.eventManager.mouseover('u182', function(e) {
if (!IsTrueMouseOver('u182',e)) return;
if (true) {

	SetPanelState('u170', 'pd1u170','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u182', function(e) {
if (!IsTrueMouseOut('u182',e)) return;
if (true) {

	SetPanelState('u170', 'pd0u170','none','',500,'none','',500);

}
});
gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u249'] = 'center';u81.tabIndex = 0;

u81.style.cursor = 'pointer';
$axure.eventManager.click('u81', function(e) {

if (true) {

	SetPanelState('u51', 'pd0u51','none','',500,'none','',500);

}
});
gv_vAlignTable['u252'] = 'center';gv_vAlignTable['u204'] = 'center';document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	SetPanelState('u20', 'pd1u20','none','',500,'none','',500);

	SetPanelState('u10', 'pd1u10','none','',500,'none','',500);

	SetPanelState('u15', 'pd0u15','none','',500,'none','',500);

	SetPanelState('u25', 'pd1u25','none','',500,'none','',500);

}
});
document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	SetPanelState('u51', 'pd1u51','none','',500,'none','',500);

}
});
u82.tabIndex = 0;

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

	SetPanelState('u51', 'pd1u51','none','',500,'none','',500);

}
});
document.getElementById('u228_img').tabIndex = 0;

u228.style.cursor = 'pointer';
$axure.eventManager.click('u228', function(e) {

if (true) {

	SetPanelState('u232', 'pd0u232','none','',500,'none','',500);

	SetPanelState('u237', 'pd0u237','none','',500,'none','',500);

	SetPanelState('u242', 'pd0u242','none','',500,'none','',500);

}
});
gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u88'] = 'center';document.getElementById('u114_img').tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

	SetPanelState('u51', 'pd0u51','none','',500,'none','',500);

}
});
gv_vAlignTable['u223'] = 'center';document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	SetPanelState('u30', 'pd1u30','none','',500,'none','',500);

	SetPanelState('u35', 'pd0u35','none','',500,'none','',500);

	SetPanelState('u40', 'pd1u40','none','',500,'none','',500);

	SetPanelState('u45', 'pd0u45','none','',500,'none','',500);

	SetPanelState('u50', 'pd0u50','none','',500,'none','',500);

}
});
document.getElementById('u160_img').tabIndex = 0;

u160.style.cursor = 'pointer';
$axure.eventManager.click('u160', function(e) {

if (true) {

}
});
gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u221'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u183'] = 'center';document.getElementById('u126_img').tabIndex = 0;

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

}
});

$axure.eventManager.mouseover('u251', function(e) {
if (!IsTrueMouseOver('u251',e)) return;
if (true) {

	SetPanelState('u250', 'pd1u250','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u251', function(e) {
if (!IsTrueMouseOut('u251',e)) return;
if (true) {

	SetPanelState('u250', 'pd0u250','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u181', function(e) {
if (!IsTrueMouseOver('u181',e)) return;
if (true) {

	SetPanelState('u176', 'pd1u176','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u181', function(e) {
if (!IsTrueMouseOut('u181',e)) return;
if (true) {

	SetPanelState('u176', 'pd0u176','none','',500,'none','',500);

}
});
gv_vAlignTable['u181'] = 'top';gv_vAlignTable['u198'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u169'] = 'center';u56.tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('发现页面.html');

}
});
gv_vAlignTable['u187'] = 'center';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u151'] = 'center';document.getElementById('u168_img').tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u227'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u53'] = 'center';u192.tabIndex = 0;

u192.style.cursor = 'pointer';
$axure.eventManager.click('u192', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u121'] = 'center';document.getElementById('u164_img').tabIndex = 0;

u164.style.cursor = 'pointer';
$axure.eventManager.click('u164', function(e) {

if (true) {

	SetPanelVisibility('u51','hidden','none',500);

}
});
gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u239'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u91'] = 'top';document.getElementById('u94_img').tabIndex = 0;

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

	SetPanelState('u51', 'pd1u51','none','',500,'none','',500);

}
});
document.getElementById('u190_img').tabIndex = 0;

u190.style.cursor = 'pointer';
$axure.eventManager.click('u190', function(e) {

if (true) {

SetGlobalVariableValue('check', '0');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('搜索页面.html');

	SetPanelState('u199', 'pd0u199','none','',500,'none','',500);

}
});
gv_vAlignTable['u185'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u234'] = 'center';gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u24'] = 'center';document.getElementById('u230_img').tabIndex = 0;
HookHover('u230', false);

u230.style.cursor = 'pointer';
$axure.eventManager.click('u230', function(e) {

if (true) {

	SetPanelVisibility('u202','hidden','none',500);

}
});
gv_vAlignTable['u229'] = 'center';document.getElementById('u156_img').tabIndex = 0;

u156.style.cursor = 'pointer';
$axure.eventManager.click('u156', function(e) {

if (true) {

}
});
gv_vAlignTable['u210'] = 'center';gv_vAlignTable['u246'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u141'] = 'center';
$axure.eventManager.mouseover('u175', function(e) {
if (!IsTrueMouseOver('u175',e)) return;
if (true) {

	SetPanelState('u170', 'pd1u170','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u175', function(e) {
if (!IsTrueMouseOut('u175',e)) return;
if (true) {

	SetPanelState('u170', 'pd0u170','none','',500,'none','',500);

}
});
gv_vAlignTable['u175'] = 'top';document.getElementById('u226_img').tabIndex = 0;

u226.style.cursor = 'pointer';
$axure.eventManager.click('u226', function(e) {

if (true) {

	SetPanelVisibility('u202','hidden','none',500);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('对比页面.html');

}
});
gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u86'] = 'center';
$axure.eventManager.mouseover('u173', function(e) {
if (!IsTrueMouseOver('u173',e)) return;
if (true) {

	SetPanelState('u170', 'pd1u170','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u173', function(e) {
if (!IsTrueMouseOut('u173',e)) return;
if (true) {

	SetPanelState('u170', 'pd0u170','none','',500,'none','',500);

}
});
gv_vAlignTable['u173'] = 'top';gv_vAlignTable['u111'] = 'center';document.getElementById('u154_img').tabIndex = 0;

u154.style.cursor = 'pointer';
$axure.eventManager.click('u154', function(e) {

if (true) {

}
});
gv_vAlignTable['u178'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u96_img').tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	SetPanelState('u51', 'pd0u51','none','',500,'none','',500);

}
});
gv_vAlignTable['u49'] = 'center';document.getElementById('u124_img').tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

}
});
gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u93'] = 'top';gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u12'] = 'center';u201.tabIndex = 0;

u201.style.cursor = 'pointer';
$axure.eventManager.click('u201', function(e) {

if (true) {

	SetPanelState('u199', 'pd1u199','none','',500,'none','',500);

}
});
gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u117'] = 'center';u59.tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

	SetPanelState('u70', 'pd1u70','none','',500,'none','',500);

}
});
gv_vAlignTable['u244'] = 'center';gv_vAlignTable['u90'] = 'center';document.getElementById('u18_img').tabIndex = 0;

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

	SetPanelState('u15', 'pd1u15','none','',500,'none','',500);

	SetPanelState('u10', 'pd1u10','none','',500,'none','',500);

	SetPanelState('u20', 'pd0u20','none','',500,'none','',500);

	SetPanelState('u25', 'pd2u25','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u248', function(e) {
if (!IsTrueMouseOver('u248',e)) return;
if (true) {

	SetPanelState('u250', 'pd1u250','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u248', function(e) {
if (!IsTrueMouseOut('u248',e)) return;
if (true) {

	SetPanelState('u250', 'pd0u250','none','',500,'none','',500);

}
});
gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u220'] = 'center';gv_vAlignTable['u107'] = 'center';u58.tabIndex = 0;

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

	SetPanelState('u65', 'pd1u65','none','',500,'none','',500);

}
});
gv_vAlignTable['u72'] = 'center';
$axure.eventManager.mouseover('u180', function(e) {
if (!IsTrueMouseOver('u180',e)) return;
if (true) {

	SetPanelState('u176', 'pd1u176','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u180', function(e) {
if (!IsTrueMouseOut('u180',e)) return;
if (true) {

	SetPanelState('u176', 'pd0u176','none','',500,'none','',500);

}
});
gv_vAlignTable['u180'] = 'top';document.getElementById('u194_img').tabIndex = 0;

u194.style.cursor = 'pointer';
$axure.eventManager.click('u194', function(e) {

if (true) {

	SetPanelState('u51', 'pd1u51','none','',500,'none','',500);

}
});
