for(var i = 0; i < 210; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('login')) == ('1')) {

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u145','hidden','none',500);

	SetPanelVisibility('u196','toggle','none',500);

}

});

$axure.eventManager.mouseover('u122', function(e) {
if (!IsTrueMouseOver('u122',e)) return;
if (true) {

	SetPanelState('u119', 'pd1u119','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u122', function(e) {
if (!IsTrueMouseOut('u122',e)) return;
if (true) {

	SetPanelState('u119', 'pd0u119','none','',500,'none','',500);

}
});
gv_vAlignTable['u122'] = 'top';gv_vAlignTable['u207'] = 'center';
$axure.eventManager.mouseover('u130', function(e) {
if (!IsTrueMouseOver('u130',e)) return;
if (true) {

	SetPanelState('u125', 'pd1u125','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u130', function(e) {
if (!IsTrueMouseOut('u130',e)) return;
if (true) {

	SetPanelState('u125', 'pd0u125','none','',500,'none','',500);

}
});
gv_vAlignTable['u130'] = 'top';gv_vAlignTable['u2'] = 'center';document.getElementById('u79_img').tabIndex = 0;

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

	SetPanelVisibility('u0','hidden','none',500);

}
});
gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u153'] = 'center';gv_vAlignTable['u140'] = 'center';document.getElementById('u135_img').tabIndex = 0;

u135.style.cursor = 'pointer';
$axure.eventManager.click('u135', function(e) {

if ((GetGlobalVariableValue('login')) != ('1')) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('login')) == ('1')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('学品空间.html');

}
});

$axure.eventManager.mouseover('u135', function(e) {
if (!IsTrueMouseOver('u135',e)) return;
if ((GetGlobalVariableValue('login')) == ('1')) {

}
});

$axure.eventManager.mouseout('u135', function(e) {
if (!IsTrueMouseOut('u135',e)) return;
if (true) {

}
});
document.getElementById('u103_img').tabIndex = 0;

u103.style.cursor = 'pointer';
$axure.eventManager.click('u103', function(e) {

if (true) {

}
});
gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u48'] = 'center';document.getElementById('u105_img').tabIndex = 0;

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if (true) {

}
});
gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u172'] = 'center';gv_vAlignTable['u11'] = 'center';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	SetPanelState('u9', 'pd1u9','none','',500,'none','',500);

}
});
gv_vAlignTable['u205'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u62'] = 'center';u141.tabIndex = 0;

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u21'] = 'center';document.getElementById('u133_img').tabIndex = 0;

u133.style.cursor = 'pointer';
$axure.eventManager.click('u133', function(e) {

if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u133', function(e) {
if (!IsTrueMouseOver('u133',e)) return;
if (true) {

	SetPanelState('u125', 'pd1u125','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u133', function(e) {
if (!IsTrueMouseOut('u133',e)) return;
if (true) {

	SetPanelState('u125', 'pd0u125','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u200', function(e) {
if (!IsTrueMouseOver('u200',e)) return;
if (true) {

	SetPanelState('u199', 'pd1u199','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u200', function(e) {
if (!IsTrueMouseOut('u200',e)) return;
if (true) {

	SetPanelState('u199', 'pd0u199','none','',500,'none','',500);

}
});
u7.tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}
});
gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u78'] = 'center';document.getElementById('u179_img').tabIndex = 0;
HookHover('u179', false);

u179.style.cursor = 'pointer';
$axure.eventManager.click('u179', function(e) {

if (true) {

	SetPanelVisibility('u151','hidden','none',500);

}
});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u149'] = 'top';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u118'] = 'center';
$axure.eventManager.mouseover('u197', function(e) {
if (!IsTrueMouseOver('u197',e)) return;
if (true) {

	SetPanelState('u199', 'pd1u199','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u197', function(e) {
if (!IsTrueMouseOut('u197',e)) return;
if (true) {

	SetPanelState('u199', 'pd0u199','none','',500,'none','',500);

}
});
document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelVisibility('u0','hidden','none',500);

}
});
gv_vAlignTable['u176'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u174'] = 'center';gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u144'] = 'center';u202.tabIndex = 0;

u202.style.cursor = 'pointer';
$axure.eventManager.click('u202', function(e) {

if (true) {

	SetPanelVisibility('u196','hidden','none',500);

	SetPanelVisibility('u199','hidden','none',500);

	SetPanelVisibility('u142','','none',500);

	SetPanelVisibility('u145','','none',500);

}
});

$axure.eventManager.mouseover('u202', function(e) {
if (!IsTrueMouseOver('u202',e)) return;
if (true) {

	SetPanelState('u199', 'pd1u199','none','',500,'none','',500);

}
});
gv_vAlignTable['u82'] = 'center';document.getElementById('u75_img').tabIndex = 0;

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

}
});
u30.tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u46'] = 'center';document.getElementById('u71_img').tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

}
});
gv_vAlignTable['u198'] = 'center';u5.tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('发现页面.html');

}
});
gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u127'] = 'center';document.getElementById('u43_img').tabIndex = 0;

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u169'] = 'center';document.getElementById('u131_img').tabIndex = 0;

u131.style.cursor = 'pointer';
$axure.eventManager.click('u131', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('学习页面.html');

}
});

$axure.eventManager.mouseover('u131', function(e) {
if (!IsTrueMouseOver('u131',e)) return;
if (true) {

	SetPanelState('u119', 'pd1u119','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u131', function(e) {
if (!IsTrueMouseOut('u131',e)) return;
if (true) {

	SetPanelState('u119', 'pd0u119','none','',500,'none','',500);

}
});
u150.tabIndex = 0;

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

	SetPanelState('u148', 'pd1u148','none','',500,'none','',500);

}
});
gv_vAlignTable['u150'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u40'] = 'top';document.getElementById('u139_img').tabIndex = 0;

u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

SetGlobalVariableValue('check', '0');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('搜索页面.html');

	SetPanelState('u148', 'pd0u148','none','',500,'none','',500);

}
});
document.getElementById('u87_img').tabIndex = 0;

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u193'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u155'] = 'center';document.getElementById('u109_img').tabIndex = 0;

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

}
});
gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u50'] = 'center';document.getElementById('u63_img').tabIndex = 0;

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u123', function(e) {
if (!IsTrueMouseOver('u123',e)) return;
if (true) {

	SetPanelState('u119', 'pd1u119','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u123', function(e) {
if (!IsTrueMouseOut('u123',e)) return;
if (true) {

	SetPanelState('u119', 'pd0u119','none','',500,'none','',500);

}
});
gv_vAlignTable['u123'] = 'top';gv_vAlignTable['u170'] = 'top';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u134'] = 'center';document.getElementById('u177_img').tabIndex = 0;

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

	SetPanelState('u181', 'pd0u181','none','',500,'none','',500);

	SetPanelState('u186', 'pd0u186','none','',500,'none','',500);

	SetPanelState('u191', 'pd0u191','none','',500,'none','',500);

}
});
gv_vAlignTable['u209'] = 'center';
$axure.eventManager.mouseover('u128', function(e) {
if (!IsTrueMouseOver('u128',e)) return;
if (true) {

	SetPanelState('u125', 'pd1u125','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u128', function(e) {
if (!IsTrueMouseOut('u128',e)) return;
if (true) {

	SetPanelState('u125', 'pd0u125','none','',500,'none','',500);

}
});
gv_vAlignTable['u128'] = 'top';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u185'] = 'center';document.getElementById('u73_img').tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

}
});
document.getElementById('u69_img').tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

}
});
gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u163'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u188'] = 'center';document.getElementById('u117_img').tabIndex = 0;

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u13'] = 'center';document.getElementById('u113_img').tabIndex = 0;

u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

	SetPanelVisibility('u0','hidden','none',500);

}
});
gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u132'] = 'center';document.getElementById('u175_img').tabIndex = 0;

u175.style.cursor = 'pointer';
$axure.eventManager.click('u175', function(e) {

if (true) {

	SetPanelVisibility('u151','hidden','none',500);

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});

$axure.eventManager.mouseover('u129', function(e) {
if (!IsTrueMouseOver('u129',e)) return;
if (true) {

	SetPanelState('u125', 'pd1u125','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u129', function(e) {
if (!IsTrueMouseOut('u129',e)) return;
if (true) {

	SetPanelState('u125', 'pd0u125','none','',500,'none','',500);

}
});
gv_vAlignTable['u129'] = 'top';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u183'] = 'center';gv_vAlignTable['u39'] = 'center';document.getElementById('u171_img').tabIndex = 0;

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

	SetPanelVisibility('u151','hidden','none',500);

}
});
u31.tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u178'] = 'center';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	SetPanelState('u19', 'pd1u19','none','',500,'none','',500);

}
});
gv_vAlignTable['u96'] = 'center';document.getElementById('u146_img').tabIndex = 0;

u146.style.cursor = 'pointer';
$axure.eventManager.click('u146', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u124', function(e) {
if (!IsTrueMouseOver('u124',e)) return;
if (true) {

	SetPanelState('u119', 'pd1u119','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u124', function(e) {
if (!IsTrueMouseOut('u124',e)) return;
if (true) {

	SetPanelState('u119', 'pd0u119','none','',500,'none','',500);

}
});
gv_vAlignTable['u124'] = 'top';gv_vAlignTable['u80'] = 'center';document.getElementById('u93_img').tabIndex = 0;

u93.style.cursor = 'pointer';
$axure.eventManager.click('u93', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});
gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u201'] = 'center';gv_vAlignTable['u165'] = 'center';document.getElementById('u59_img').tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

SetGlobalVariableValue('login', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u161'] = 'center';document.getElementById('u45_img').tabIndex = 0;

u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

}
});
document.getElementById('u143_img').tabIndex = 0;

u143.style.cursor = 'pointer';
$axure.eventManager.click('u143', function(e) {

if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

}
});
document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

}
});
gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u136'] = 'center';gv_vAlignTable['u180'] = 'center';