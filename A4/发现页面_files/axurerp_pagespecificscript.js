for(var i = 0; i < 237; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('login')) == ('1')) {

	SetPanelVisibility('u175','hidden','none',500);

	SetPanelVisibility('u178','hidden','none',500);

	SetPanelVisibility('u229','toggle','none',500);

}

});
gv_vAlignTable['u115'] = 'center';u32.tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelState('u184', 'pd1u184','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u156', function(e) {
if (!IsTrueMouseOver('u156',e)) return;
if (true) {

	SetPanelState('u152', 'pd1u152','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u156', function(e) {
if (!IsTrueMouseOut('u156',e)) return;
if (true) {

	SetPanelState('u152', 'pd0u152','none','',500,'none','',500);

}
});
gv_vAlignTable['u156'] = 'top';gv_vAlignTable['u207'] = 'center';gv_vAlignTable['u99'] = 'center';u64.tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

	SetPanelState('u33', 'pd1u33','none','',500,'none','',500);

}
});
gv_vAlignTable['u226'] = 'center';document.getElementById('u140_img').tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

}
});
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u151'] = 'center';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u186'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u105'] = 'center';u27.tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u235.tabIndex = 0;

u235.style.cursor = 'pointer';
$axure.eventManager.click('u235', function(e) {

if (true) {

	SetPanelVisibility('u229','hidden','none',500);

	SetPanelVisibility('u232','hidden','none',500);

	SetPanelVisibility('u175','','none',500);

	SetPanelVisibility('u178','','none',500);

}
});

$axure.eventManager.mouseover('u235', function(e) {
if (!IsTrueMouseOver('u235',e)) return;
if (true) {

	SetPanelState('u232', 'pd1u232','none','',500,'none','',500);

}
});
document.getElementById('u138_img').tabIndex = 0;

u138.style.cursor = 'pointer';
$axure.eventManager.click('u138', function(e) {

if (true) {

}
});
gv_vAlignTable['u11'] = 'center';document.getElementById('u120_img').tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
document.getElementById('u108_img').tabIndex = 0;

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

}
});
gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u200'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u89'] = 'center';document.getElementById('u208_img').tabIndex = 0;

u208.style.cursor = 'pointer';
$axure.eventManager.click('u208', function(e) {

if (true) {

	SetPanelVisibility('u184','hidden','none',500);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('对比页面.html');

}
});
gv_vAlignTable['u228'] = 'center';
$axure.eventManager.mouseover('u161', function(e) {
if (!IsTrueMouseOver('u161',e)) return;
if (true) {

	SetPanelState('u158', 'pd1u158','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u161', function(e) {
if (!IsTrueMouseOut('u161',e)) return;
if (true) {

	SetPanelState('u158', 'pd0u158','none','',500,'none','',500);

}
});
gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u72'] = 'center';document.getElementById('u112_img').tabIndex = 0;

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

	SetPanelVisibility('u33','hidden','none',500);

}
});
document.getElementById('u164_img').tabIndex = 0;

u164.style.cursor = 'pointer';
$axure.eventManager.click('u164', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('学习页面.html');

}
});

$axure.eventManager.mouseover('u164', function(e) {
if (!IsTrueMouseOver('u164',e)) return;
if (true) {

	SetPanelState('u152', 'pd1u152','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u164', function(e) {
if (!IsTrueMouseOut('u164',e)) return;
if (true) {

	SetPanelState('u152', 'pd0u152','none','',500,'none','',500);

}
});
u31.tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	SetPanelState('u33', 'pd3u33','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u233', function(e) {
if (!IsTrueMouseOver('u233',e)) return;
if (true) {

	SetPanelState('u232', 'pd1u232','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u233', function(e) {
if (!IsTrueMouseOut('u233',e)) return;
if (true) {

	SetPanelState('u232', 'pd0u232','none','',500,'none','',500);

}
});
document.getElementById('u146_img').tabIndex = 0;

u146.style.cursor = 'pointer';
$axure.eventManager.click('u146', function(e) {

if (true) {

	SetPanelVisibility('u33','hidden','none',500);

}
});

$axure.eventManager.mouseover('u162', function(e) {
if (!IsTrueMouseOver('u162',e)) return;
if (true) {

	SetPanelState('u158', 'pd1u158','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u162', function(e) {
if (!IsTrueMouseOut('u162',e)) return;
if (true) {

	SetPanelState('u158', 'pd0u158','none','',500,'none','',500);

}
});
gv_vAlignTable['u162'] = 'top';gv_vAlignTable['u44'] = 'center';document.getElementById('u78_img').tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	SetPanelState('u33', 'pd0u33','none','',500,'none','',500);

}
});
document.getElementById('u179_img').tabIndex = 0;

u179.style.cursor = 'pointer';
$axure.eventManager.click('u179', function(e) {

if (true) {

	SetPanelState('u33', 'pd0u33','none','',500,'none','',500);

}
});
gv_vAlignTable['u231'] = 'center';document.getElementById('u212_img').tabIndex = 0;
HookHover('u212', false);

u212.style.cursor = 'pointer';
$axure.eventManager.click('u212', function(e) {

if (true) {

	SetPanelVisibility('u184','hidden','none',500);

}
});
gv_vAlignTable['u125'] = 'center';u41.tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	SetPanelState('u52', 'pd1u52','none','',500,'none','',500);

}
});
document.getElementById('u172_img').tabIndex = 0;

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if (true) {

SetGlobalVariableValue('check', '0');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('搜索页面.html');

	SetPanelState('u181', 'pd0u181','none','',500,'none','',500);

}
});
gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u13'] = 'center';u38.tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u176_img').tabIndex = 0;

u176.style.cursor = 'pointer';
$axure.eventManager.click('u176', function(e) {

if (true) {

	SetPanelState('u33', 'pd1u33','none','',500,'none','',500);

}
});
u26.tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u174.tabIndex = 0;

u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u182'] = 'top';document.getElementById('u204_img').tabIndex = 0;

u204.style.cursor = 'pointer';
$axure.eventManager.click('u204', function(e) {

if (true) {

	SetPanelVisibility('u184','hidden','none',500);

}
});
gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u202'] = 'center';document.getElementById('u166_img').tabIndex = 0;

u166.style.cursor = 'pointer';
$axure.eventManager.click('u166', function(e) {

if (true) {

	SetPanelState('u33', 'pd3u33','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u166', function(e) {
if (!IsTrueMouseOver('u166',e)) return;
if (true) {

	SetPanelState('u158', 'pd1u158','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u166', function(e) {
if (!IsTrueMouseOut('u166',e)) return;
if (true) {

	SetPanelState('u158', 'pd0u158','none','',500,'none','',500);

}
});
gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u223'] = 'center';gv_vAlignTable['u160'] = 'center';
$axure.eventManager.mouseover('u157', function(e) {
if (!IsTrueMouseOver('u157',e)) return;
if (true) {

	SetPanelState('u152', 'pd1u152','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u157', function(e) {
if (!IsTrueMouseOut('u157',e)) return;
if (true) {

	SetPanelState('u152', 'pd0u152','none','',500,'none','',500);

}
});
gv_vAlignTable['u157'] = 'top';gv_vAlignTable['u221'] = 'center';document.getElementById('u92_img').tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

SetGlobalVariableValue('login', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u46'] = 'center';u183.tabIndex = 0;

u183.style.cursor = 'pointer';
$axure.eventManager.click('u183', function(e) {

if (true) {

	SetPanelState('u181', 'pd1u181','none','',500,'none','',500);

}
});
gv_vAlignTable['u183'] = 'top';gv_vAlignTable['u137'] = 'center';document.getElementById('u71_img').tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	SetPanelVisibility('u33','hidden','none',500);

}
});
gv_vAlignTable['u198'] = 'center';gv_vAlignTable['u203'] = 'top';gv_vAlignTable['u79'] = 'center';document.getElementById('u136_img').tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

}
});
gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u56'] = 'center';document.getElementById('u150_img').tabIndex = 0;

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u74'] = 'top';document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

}
});
document.getElementById('u106_img').tabIndex = 0;

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

}
});
document.getElementById('u168_img').tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if ((GetGlobalVariableValue('login')) != ('1')) {

	SetPanelState('u33', 'pd2u33','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('login')) == ('1')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('学品空间.html');

}
});

$axure.eventManager.mouseover('u168', function(e) {
if (!IsTrueMouseOver('u168',e)) return;
if ((GetGlobalVariableValue('login')) == ('1')) {

}
});

$axure.eventManager.mouseout('u168', function(e) {
if (!IsTrueMouseOut('u168',e)) return;
if (true) {

}
});
gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u1'] = 'center';u40.tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	SetPanelState('u47', 'pd1u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u87'] = 'center';document.getElementById('u104_img').tabIndex = 0;

u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

}
});
gv_vAlignTable['u192'] = 'center';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u211'] = 'center';document.getElementById('u102_img').tabIndex = 0;

u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

}
});

$axure.eventManager.mouseover('u155', function(e) {
if (!IsTrueMouseOver('u155',e)) return;
if (true) {

	SetPanelState('u152', 'pd1u152','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u155', function(e) {
if (!IsTrueMouseOut('u155',e)) return;
if (true) {

	SetPanelState('u152', 'pd0u152','none','',500,'none','',500);

}
});
gv_vAlignTable['u155'] = 'top';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u97'] = 'center';document.getElementById('u76_img').tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	SetPanelState('u33', 'pd1u33','none','',500,'none','',500);

}
});
gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u177'] = 'center';gv_vAlignTable['u209'] = 'center';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u173'] = 'center';gv_vAlignTable['u234'] = 'center';gv_vAlignTable['u147'] = 'center';
$axure.eventManager.mouseover('u163', function(e) {
if (!IsTrueMouseOver('u163',e)) return;
if (true) {

	SetPanelState('u158', 'pd1u158','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u163', function(e) {
if (!IsTrueMouseOut('u163',e)) return;
if (true) {

	SetPanelState('u158', 'pd0u158','none','',500,'none','',500);

}
});
gv_vAlignTable['u163'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u188'] = 'center';
$axure.eventManager.mouseover('u230', function(e) {
if (!IsTrueMouseOver('u230',e)) return;
if (true) {

	SetPanelState('u232', 'pd1u232','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u230', function(e) {
if (!IsTrueMouseOut('u230',e)) return;
if (true) {

	SetPanelState('u232', 'pd0u232','none','',500,'none','',500);

}
});
gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u213'] = 'center';document.getElementById('u126_img').tabIndex = 0;

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

	SetPanelState('u33', 'pd1u33','none','',500,'none','',500);

}
});
document.getElementById('u210_img').tabIndex = 0;

u210.style.cursor = 'pointer';
$axure.eventManager.click('u210', function(e) {

if (true) {

	SetPanelState('u214', 'pd0u214','none','',500,'none','',500);

	SetPanelState('u219', 'pd0u219','none','',500,'none','',500);

	SetPanelState('u224', 'pd0u224','none','',500,'none','',500);

}
});
u29.tabIndex = 0;

u29.style.cursor = 'pointer';
$axure.eventManager.click('u29', function(e) {

if (true) {

SetGlobalVariableValue('good', '4');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u127'] = 'center';u39.tabIndex = 0;

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if (true) {

	SetPanelState('u42', 'pd1u42','none','',500,'none','',500);

}
});
gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u145'] = 'center';u63.tabIndex = 0;

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	SetPanelState('u33', 'pd0u33','none','',500,'none','',500);

}
});
gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u96_img').tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	SetPanelState('u33', 'pd0u33','none','',500,'none','',500);

}
});
gv_vAlignTable['u196'] = 'center';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u205'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u165'] = 'center';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u143'] = 'center';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u180'] = 'center';u28.tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

SetGlobalVariableValue('good', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u194'] = 'center';