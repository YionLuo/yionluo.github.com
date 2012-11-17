for(var i = 0; i < 314; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('login')) == ('1')) {

	SetPanelVisibility('u252','hidden','none',500);

	SetPanelVisibility('u255','hidden','none',500);

}

if (true) {

SetGlobalVariableValue('good1', '10');

SetGlobalVariableValue('good2', '10');

SetGlobalVariableValue('good3', '10');

SetGlobalVariableValue('good4', '10');

SetGlobalVariableValue('good5', '10');

}

if ((GetGlobalVariableValue('login')) == ('1')) {

	SetPanelVisibility('u252','hidden','none',500);

	SetPanelVisibility('u255','hidden','none',500);

	SetPanelVisibility('u306','toggle','none',500);

}

});

widgetIdToPanelStateChangeFunction['u2'] = function() {
var e = windowEvent;

if ((GetPanelState('u2')) == ('pd0u2')) {
function waitu22c2502c784046dd87e60d0549db3b011() {

	SetPanelState('u2', 'pd1u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);
}
setTimeout(waitu22c2502c784046dd87e60d0549db3b011, 3000);

}

if (((GetPanelState('u2')) == ('pd1u2')) && ((GetGlobalVariableValue('ismoving')) == ('1'))) {
function waitu3af393dccf4c47458f31f03779ef6f651() {

	SetPanelState('u2', 'pd2u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);
}
setTimeout(waitu3af393dccf4c47458f31f03779ef6f651, 3000);

}

if (((GetPanelState('u2')) == ('pd2u2')) && ((GetGlobalVariableValue('ismoving')) == ('1'))) {
function waitu05fd22a1acb1480598b4887c5f88f3401() {

	SetPanelState('u2', 'pd3u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);
}
setTimeout(waitu05fd22a1acb1480598b4887c5f88f3401, 3000);

}

if (((GetPanelState('u2')) == ('pd3u2')) && ((GetGlobalVariableValue('ismoving')) == ('1'))) {
function waitu5e6298b4e9d846b2a91cd732ddef52b51() {

	SetPanelState('u2', 'pd4u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd4u13','none','',500,'none','',500);
}
setTimeout(waitu5e6298b4e9d846b2a91cd732ddef52b51, 3000);

}

if (((GetPanelState('u2')) == ('pd4u2')) && ((GetGlobalVariableValue('ismoving')) == ('1'))) {
function waitu294a206c3ef74f6f9bc8bdd4cbc14ae51() {

	SetPanelState('u2', 'pd0u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);
}
setTimeout(waitu294a206c3ef74f6f9bc8bdd4cbc14ae51, 3000);

}

}

$axure.eventManager.mouseover('u36', function(e) {
if (!IsTrueMouseOver('u36',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd2u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u36', function(e) {
if (!IsTrueMouseOut('u36',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u194'] = 'center';
$axure.eventManager.mouseover('u72', function(e) {
if (!IsTrueMouseOver('u72',e)) return;
if (true) {

	SetPanelState('u101', 'pd1u101','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u72', function(e) {
if (!IsTrueMouseOut('u72',e)) return;
if (true) {

	SetPanelState('u101', 'pd0u101','none','',500,'none','',500);

}
});
gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u152'] = 'top';gv_vAlignTable['u231'] = 'center';
$axure.eventManager.mouseover('u60', function(e) {
if (!IsTrueMouseOver('u60',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd4u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd4u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u60', function(e) {
if (!IsTrueMouseOut('u60',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u78', function(e) {
if (!IsTrueMouseOver('u78',e)) return;
if (true) {

	SetPanelState('u89', 'pd1u89','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u78', function(e) {
if (!IsTrueMouseOut('u78',e)) return;
if (true) {

	SetPanelState('u89', 'pd0u89','none','',500,'none','',500);

}
});
gv_vAlignTable['u166'] = 'center';gv_vAlignTable['u298'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u1'] = 'center';document.getElementById('u215_img').tabIndex = 0;

u215.style.cursor = 'pointer';
$axure.eventManager.click('u215', function(e) {

if (true) {

}
});
document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

SetGlobalVariableValue('good', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});

$axure.eventManager.mouseover('u11', function(e) {
if (!IsTrueMouseOver('u11',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

}
});

$axure.eventManager.mouseout('u11', function(e) {
if (!IsTrueMouseOut('u11',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u151'] = 'top';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u202'] = 'center';
$axure.eventManager.mouseover('u26', function(e) {
if (!IsTrueMouseOver('u26',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd2u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u26', function(e) {
if (!IsTrueMouseOut('u26',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u100'] = 'center';
$axure.eventManager.mouseover('u54', function(e) {
if (!IsTrueMouseOver('u54',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd1u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u54', function(e) {
if (!IsTrueMouseOut('u54',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u214'] = 'center';gv_vAlignTable['u192'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u269'] = 'center';gv_vAlignTable['u150'] = 'top';document.getElementById('u287_img').tabIndex = 0;

u287.style.cursor = 'pointer';
$axure.eventManager.click('u287', function(e) {

if (true) {

	SetPanelState('u291', 'pd0u291','none','',500,'none','',500);

	SetPanelState('u296', 'pd0u296','none','',500,'none','',500);

	SetPanelState('u301', 'pd0u301','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u48', function(e) {
if (!IsTrueMouseOver('u48',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd3u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u48', function(e) {
if (!IsTrueMouseOut('u48',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u24', function(e) {
if (!IsTrueMouseOver('u24',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd1u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u24', function(e) {
if (!IsTrueMouseOut('u24',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
document.getElementById('u80_img').tabIndex = 0;

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

}
});
gv_vAlignTable['u65'] = 'center';document.getElementById('u227_img').tabIndex = 0;

u227.style.cursor = 'pointer';
$axure.eventManager.click('u227', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});

$axure.eventManager.mouseover('u42', function(e) {
if (!IsTrueMouseOver('u42',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd0u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u42', function(e) {
if (!IsTrueMouseOut('u42',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u37'] = 'center';
$axure.eventManager.mouseover('u93', function(e) {
if (!IsTrueMouseOver('u93',e)) return;
if (true) {

	SetPanelState('u92', 'pd1u92','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u93', function(e) {
if (!IsTrueMouseOut('u93',e)) return;
if (true) {

	SetPanelState('u92', 'pd0u92','none','',500,'none','',500);

}
});
gv_vAlignTable['u112'] = 'center';
$axure.eventManager.mouseover('u46', function(e) {
if (!IsTrueMouseOver('u46',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd2u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u46', function(e) {
if (!IsTrueMouseOut('u46',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u307', function(e) {
if (!IsTrueMouseOver('u307',e)) return;
if (true) {

	SetPanelState('u309', 'pd1u309','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u307', function(e) {
if (!IsTrueMouseOut('u307',e)) return;
if (true) {

	SetPanelState('u309', 'pd0u309','none','',500,'none','',500);

}
});
document.getElementById('u285_img').tabIndex = 0;

u285.style.cursor = 'pointer';
$axure.eventManager.click('u285', function(e) {

if (true) {

	SetPanelVisibility('u261','hidden','none',500);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('对比页面.html');

}
});

$axure.eventManager.mouseover('u18', function(e) {
if (!IsTrueMouseOver('u18',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd3u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u18', function(e) {
if (!IsTrueMouseOut('u18',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u50', function(e) {
if (!IsTrueMouseOver('u50',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd4u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd4u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u50', function(e) {
if (!IsTrueMouseOut('u50',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u176'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u284'] = 'center';gv_vAlignTable['u12'] = 'center';document.getElementById('u148_img').tabIndex = 0;

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	SetPanelVisibility('u110','hidden','none',500);

}
});
gv_vAlignTable['u305'] = 'center';
$axure.eventManager.mouseover('u20', function(e) {
if (!IsTrueMouseOver('u20',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd4u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd4u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u20', function(e) {
if (!IsTrueMouseOut('u20',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u279'] = 'center';document.getElementById('u241_img').tabIndex = 0;

u241.style.cursor = 'pointer';
$axure.eventManager.click('u241', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('学习页面.html');

}
});

$axure.eventManager.mouseover('u241', function(e) {
if (!IsTrueMouseOver('u241',e)) return;
if (true) {

	SetPanelState('u229', 'pd1u229','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u241', function(e) {
if (!IsTrueMouseOut('u241',e)) return;
if (true) {

	SetPanelState('u229', 'pd0u229','none','',500,'none','',500);

}
});
gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u228'] = 'center';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u282'] = 'center';
$axure.eventManager.mouseover('u76', function(e) {
if (!IsTrueMouseOver('u76',e)) return;
if (true) {

	SetPanelState('u107', 'pd1u107','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u76', function(e) {
if (!IsTrueMouseOut('u76',e)) return;
if (true) {

	SetPanelState('u107', 'pd0u107','none','',500,'none','',500);

}
});
gv_vAlignTable['u123'] = 'center';
$axure.eventManager.mouseover('u240', function(e) {
if (!IsTrueMouseOver('u240',e)) return;
if (true) {

	SetPanelState('u235', 'pd1u235','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u240', function(e) {
if (!IsTrueMouseOut('u240',e)) return;
if (true) {

	SetPanelState('u235', 'pd0u235','none','',500,'none','',500);

}
});
gv_vAlignTable['u240'] = 'top';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u254'] = 'center';document.getElementById('u173_img').tabIndex = 0;

u173.style.cursor = 'pointer';
$axure.eventManager.click('u173', function(e) {

if (true) {

	SetPanelState('u110', 'pd0u110','none','',500,'none','',500);

}
});
document.getElementById('u213_img').tabIndex = 0;

u213.style.cursor = 'pointer';
$axure.eventManager.click('u213', function(e) {

if (true) {

}
});
gv_vAlignTable['u303'] = 'center';document.getElementById('u281_img').tabIndex = 0;

u281.style.cursor = 'pointer';
$axure.eventManager.click('u281', function(e) {

if (true) {

	SetPanelVisibility('u261','hidden','none',500);

}
});
gv_vAlignTable['u94'] = 'center';document.getElementById('u5_img').tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

SetGlobalVariableValue('good', '4');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});

$axure.eventManager.mouseover('u5', function(e) {
if (!IsTrueMouseOver('u5',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

}
});

$axure.eventManager.mouseout('u5', function(e) {
if (!IsTrueMouseOut('u5',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u295'] = 'center';gv_vAlignTable['u136'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u109'] = 'center';document.getElementById('u253_img').tabIndex = 0;

u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if (true) {

	SetPanelState('u110', 'pd1u110','none','',500,'none','',500);

}
});
gv_vAlignTable['u172'] = 'center';gv_vAlignTable['u267'] = 'center';gv_vAlignTable['u280'] = 'top';gv_vAlignTable['u121'] = 'center';
$axure.eventManager.mouseover('u108', function(e) {
if (!IsTrueMouseOver('u108',e)) return;
if (true) {

	SetPanelState('u107', 'pd1u107','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u108', function(e) {
if (!IsTrueMouseOut('u108',e)) return;
if (true) {

	SetPanelState('u107', 'pd0u107','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u64', function(e) {
if (!IsTrueMouseOver('u64',e)) return;
if (true) {

	SetPanelState('u86', 'pd1u86','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u64', function(e) {
if (!IsTrueMouseOut('u64',e)) return;
if (true) {

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u239', function(e) {
if (!IsTrueMouseOver('u239',e)) return;
if (true) {

	SetPanelState('u235', 'pd1u235','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u239', function(e) {
if (!IsTrueMouseOut('u239',e)) return;
if (true) {

	SetPanelState('u235', 'pd0u235','none','',500,'none','',500);

}
});
gv_vAlignTable['u239'] = 'top';gv_vAlignTable['u293'] = 'center';gv_vAlignTable['u21'] = 'center';u251.tabIndex = 0;

u251.style.cursor = 'pointer';
$axure.eventManager.click('u251', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u265'] = 'center';document.getElementById('u82_img').tabIndex = 0;

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

}
});

$axure.eventManager.mouseover('u16', function(e) {
if (!IsTrueMouseOver('u16',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd2u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u16', function(e) {
if (!IsTrueMouseOut('u16',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u238', function(e) {
if (!IsTrueMouseOver('u238',e)) return;
if (true) {

	SetPanelState('u235', 'pd1u235','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u238', function(e) {
if (!IsTrueMouseOut('u238',e)) return;
if (true) {

	SetPanelState('u235', 'pd0u235','none','',500,'none','',500);

}
});
gv_vAlignTable['u238'] = 'top';gv_vAlignTable['u200'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u250'] = 'center';gv_vAlignTable['u147'] = 'center';
$axure.eventManager.mouseover('u58', function(e) {
if (!IsTrueMouseOver('u58',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd3u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u58', function(e) {
if (!IsTrueMouseOut('u58',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u34', function(e) {
if (!IsTrueMouseOver('u34',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd1u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u34', function(e) {
if (!IsTrueMouseOut('u34',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u90', function(e) {
if (!IsTrueMouseOver('u90',e)) return;
if (true) {

	SetPanelState('u89', 'pd1u89','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u90', function(e) {
if (!IsTrueMouseOut('u90',e)) return;
if (true) {

	SetPanelState('u89', 'pd0u89','none','',500,'none','',500);

}
});
gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u164'] = 'center';
$axure.eventManager.mouseover('u52', function(e) {
if (!IsTrueMouseOver('u52',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd0u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u52', function(e) {
if (!IsTrueMouseOut('u52',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u263'] = 'center';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u277'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u190'] = 'center';
$axure.eventManager.mouseover('u28', function(e) {
if (!IsTrueMouseOver('u28',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd3u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u28', function(e) {
if (!IsTrueMouseOut('u28',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u145'] = 'center';u118.tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	SetPanelState('u129', 'pd1u129','none','',500,'none','',500);

}
});
gv_vAlignTable['u131'] = 'center';document.getElementById('u249_img').tabIndex = 0;

u249.style.cursor = 'pointer';
$axure.eventManager.click('u249', function(e) {

if (true) {

SetGlobalVariableValue('check', '0');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('搜索页面.html');

	SetPanelState('u258', 'pd0u258','none','',500,'none','',500);

}
});
gv_vAlignTable['u85'] = 'center';
$axure.eventManager.mouseover('u22', function(e) {
if (!IsTrueMouseOver('u22',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd0u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u22', function(e) {
if (!IsTrueMouseOut('u22',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u275'] = 'center';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u248'] = 'center';gv_vAlignTable['u210'] = 'center';
$axure.eventManager.mouseover('u44', function(e) {
if (!IsTrueMouseOver('u44',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd1u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u44', function(e) {
if (!IsTrueMouseOut('u44',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u30', function(e) {
if (!IsTrueMouseOver('u30',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd4u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd4u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u30', function(e) {
if (!IsTrueMouseOut('u30',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u224'] = 'center';gv_vAlignTable['u143'] = 'center';u260.tabIndex = 0;

u260.style.cursor = 'pointer';
$axure.eventManager.click('u260', function(e) {

if (true) {

	SetPanelState('u258', 'pd1u258','none','',500,'none','',500);

}
});
gv_vAlignTable['u260'] = 'top';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

SetGlobalVariableValue('good', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});

$axure.eventManager.mouseover('u9', function(e) {
if (!IsTrueMouseOver('u9',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

}
});

$axure.eventManager.mouseout('u9', function(e) {
if (!IsTrueMouseOut('u9',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u59'] = 'center';document.getElementById('u189_img').tabIndex = 0;

u189.style.cursor = 'pointer';
$axure.eventManager.click('u189', function(e) {

if (true) {

	SetPanelVisibility('u110','hidden','none',500);

}
});
gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u106'] = 'center';document.getElementById('u223_img').tabIndex = 0;

u223.style.cursor = 'pointer';
$axure.eventManager.click('u223', function(e) {

if (true) {

	SetPanelVisibility('u110','hidden','none',500);

}
});
gv_vAlignTable['u237'] = 'center';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u188'] = 'center';gv_vAlignTable['u273'] = 'center';
$axure.eventManager.mouseover('u105', function(e) {
if (!IsTrueMouseOver('u105',e)) return;
if (true) {

	SetPanelState('u104', 'pd1u104','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u105', function(e) {
if (!IsTrueMouseOut('u105',e)) return;
if (true) {

	SetPanelState('u104', 'pd0u104','none','',500,'none','',500);

}
});
gv_vAlignTable['u222'] = 'center';gv_vAlignTable['u311'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u29'] = 'center';document.getElementById('u155_img').tabIndex = 0;

u155.style.cursor = 'pointer';
$axure.eventManager.click('u155', function(e) {

if (true) {

	SetPanelState('u110', 'pd0u110','none','',500,'none','',500);

}
});
gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u308'] = 'center';gv_vAlignTable['u259'] = 'top';
$axure.eventManager.mouseover('u232', function(e) {
if (!IsTrueMouseOver('u232',e)) return;
if (true) {

	SetPanelState('u229', 'pd1u229','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u232', function(e) {
if (!IsTrueMouseOut('u232',e)) return;
if (true) {

	SetPanelState('u229', 'pd0u229','none','',500,'none','',500);

}
});
gv_vAlignTable['u232'] = 'top';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u208'] = 'center';gv_vAlignTable['u271'] = 'center';u312.tabIndex = 0;

u312.style.cursor = 'pointer';
$axure.eventManager.click('u312', function(e) {

if (true) {

	SetPanelVisibility('u306','hidden','none',500);

	SetPanelVisibility('u309','hidden','none',500);

	SetPanelVisibility('u252','','none',500);

	SetPanelVisibility('u255','','none',500);

}
});

$axure.eventManager.mouseover('u312', function(e) {
if (!IsTrueMouseOver('u312',e)) return;
if (true) {

	SetPanelState('u309', 'pd1u309','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u74', function(e) {
if (!IsTrueMouseOver('u74',e)) return;
if (true) {

	SetPanelState('u104', 'pd1u104','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u74', function(e) {
if (!IsTrueMouseOut('u74',e)) return;
if (true) {

	SetPanelState('u104', 'pd0u104','none','',500,'none','',500);

}
});
gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u220'] = 'center';document.getElementById('u3_img').tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

SetGlobalVariableValue('good', '5');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});

$axure.eventManager.mouseover('u3', function(e) {
if (!IsTrueMouseOver('u3',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

}
});

$axure.eventManager.mouseout('u3', function(e) {
if (!IsTrueMouseOut('u3',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
u117.tabIndex = 0;

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

	SetPanelState('u124', 'pd1u124','none','',500,'none','',500);

}
});
gv_vAlignTable['u31'] = 'center';
$axure.eventManager.mouseover('u234', function(e) {
if (!IsTrueMouseOver('u234',e)) return;
if (true) {

	SetPanelState('u229', 'pd1u229','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u234', function(e) {
if (!IsTrueMouseOut('u234',e)) return;
if (true) {

	SetPanelState('u229', 'pd0u229','none','',500,'none','',500);

}
});
gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u73'] = 'center';
$axure.eventManager.mouseover('u102', function(e) {
if (!IsTrueMouseOver('u102',e)) return;
if (true) {

	SetPanelState('u101', 'pd1u101','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u102', function(e) {
if (!IsTrueMouseOut('u102',e)) return;
if (true) {

	SetPanelState('u101', 'pd0u101','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u56', function(e) {
if (!IsTrueMouseOver('u56',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd2u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u56', function(e) {
if (!IsTrueMouseOut('u56',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u300'] = 'center';u116.tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

	SetPanelState('u119', 'pd1u119','none','',500,'none','',500);

}
});
gv_vAlignTable['u186'] = 'center';
$axure.eventManager.mouseover('u233', function(e) {
if (!IsTrueMouseOver('u233',e)) return;
if (true) {

	SetPanelState('u229', 'pd1u229','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u233', function(e) {
if (!IsTrueMouseOut('u233',e)) return;
if (true) {

	SetPanelState('u229', 'pd0u229','none','',500,'none','',500);

}
});
gv_vAlignTable['u233'] = 'top';
$axure.eventManager.mouseover('u87', function(e) {
if (!IsTrueMouseOver('u87',e)) return;
if (true) {

	SetPanelState('u86', 'pd1u86','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u87', function(e) {
if (!IsTrueMouseOut('u87',e)) return;
if (true) {

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u68', function(e) {
if (!IsTrueMouseOver('u68',e)) return;
if (true) {

	SetPanelState('u95', 'pd1u95','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u68', function(e) {
if (!IsTrueMouseOut('u68',e)) return;
if (true) {

	SetPanelState('u95', 'pd0u95','none','',500,'none','',500);

}
});
gv_vAlignTable['u226'] = 'center';gv_vAlignTable['u198'] = 'center';u115.tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('发现页面.html');

}
});
document.getElementById('u7_img').tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

SetGlobalVariableValue('good', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});

$axure.eventManager.mouseover('u7', function(e) {
if (!IsTrueMouseOver('u7',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

}
});

$axure.eventManager.mouseout('u7', function(e) {
if (!IsTrueMouseOut('u7',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u246'] = 'center';
$axure.eventManager.mouseover('u62', function(e) {
if (!IsTrueMouseOver('u62',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd0u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u62', function(e) {
if (!IsTrueMouseOut('u62',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
document.getElementById('u219_img').tabIndex = 0;

u219.style.cursor = 'pointer';
$axure.eventManager.click('u219', function(e) {

if (true) {

}
});
gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u57'] = 'center';document.getElementById('u169_img').tabIndex = 0;

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

SetGlobalVariableValue('login', '1');

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u290'] = 'center';
$axure.eventManager.mouseover('u38', function(e) {
if (!IsTrueMouseOver('u38',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd3u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u38', function(e) {
if (!IsTrueMouseOut('u38',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u70', function(e) {
if (!IsTrueMouseOver('u70',e)) return;
if (true) {

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u70', function(e) {
if (!IsTrueMouseOut('u70',e)) return;
if (true) {

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u14', function(e) {
if (!IsTrueMouseOver('u14',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd1u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u14', function(e) {
if (!IsTrueMouseOut('u14',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u218'] = 'center';
$axure.eventManager.mouseover('u99', function(e) {
if (!IsTrueMouseOver('u99',e)) return;
if (true) {

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u99', function(e) {
if (!IsTrueMouseOut('u99',e)) return;
if (true) {

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

}
});
gv_vAlignTable['u286'] = 'center';
$axure.eventManager.mouseover('u32', function(e) {
if (!IsTrueMouseOver('u32',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd0u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u32', function(e) {
if (!IsTrueMouseOut('u32',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u244'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u83'] = 'center';
$axure.eventManager.mouseover('u310', function(e) {
if (!IsTrueMouseOver('u310',e)) return;
if (true) {

	SetPanelState('u309', 'pd1u309','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u310', function(e) {
if (!IsTrueMouseOut('u310',e)) return;
if (true) {

	SetPanelState('u309', 'pd0u309','none','',500,'none','',500);

}
});
document.getElementById('u179_img').tabIndex = 0;

u179.style.cursor = 'pointer';
$axure.eventManager.click('u179', function(e) {

if (true) {

}
});
document.getElementById('u185_img').tabIndex = 0;

u185.style.cursor = 'pointer';
$axure.eventManager.click('u185', function(e) {

if (true) {

}
});

$axure.eventManager.mouseover('u40', function(e) {
if (!IsTrueMouseOver('u40',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd4u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd4u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u40', function(e) {
if (!IsTrueMouseOut('u40',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
document.getElementById('u243_img').tabIndex = 0;

u243.style.cursor = 'pointer';
$axure.eventManager.click('u243', function(e) {

if (true) {

	SetPanelState('u110', 'pd3u110','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u243', function(e) {
if (!IsTrueMouseOver('u243',e)) return;
if (true) {

	SetPanelState('u235', 'pd1u235','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u243', function(e) {
if (!IsTrueMouseOut('u243',e)) return;
if (true) {

	SetPanelState('u235', 'pd0u235','none','',500,'none','',500);

}
});
gv_vAlignTable['u257'] = 'center';gv_vAlignTable['u69'] = 'center';document.getElementById('u289_img').tabIndex = 0;
HookHover('u289', false);

u289.style.cursor = 'pointer';
$axure.eventManager.click('u289', function(e) {

if (true) {

	SetPanelVisibility('u261','hidden','none',500);

}
});
gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u242'] = 'center';
$axure.eventManager.mouseover('u96', function(e) {
if (!IsTrueMouseOver('u96',e)) return;
if (true) {

	SetPanelState('u95', 'pd1u95','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u96', function(e) {
if (!IsTrueMouseOut('u96',e)) return;
if (true) {

	SetPanelState('u95', 'pd0u95','none','',500,'none','',500);

}
});
document.getElementById('u256_img').tabIndex = 0;

u256.style.cursor = 'pointer';
$axure.eventManager.click('u256', function(e) {

if (true) {

	SetPanelState('u110', 'pd0u110','none','',500,'none','',500);

}
});
gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u174'] = 'center';document.getElementById('u183_img').tabIndex = 0;

u183.style.cursor = 'pointer';
$axure.eventManager.click('u183', function(e) {

if (true) {

}
});
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u288'] = 'center';u141.tabIndex = 0;

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	SetPanelState('u110', 'pd1u110','none','',500,'none','',500);

}
});
document.getElementById('u197_img').tabIndex = 0;

u197.style.cursor = 'pointer';
$axure.eventManager.click('u197', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u204'] = 'center';gv_vAlignTable['u182'] = 'center';
$axure.eventManager.mouseover('u66', function(e) {
if (!IsTrueMouseOver('u66',e)) return;
if (true) {

	SetPanelState('u92', 'pd1u92','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u66', function(e) {
if (!IsTrueMouseOut('u66',e)) return;
if (true) {

	SetPanelState('u92', 'pd0u92','none','',500,'none','',500);

}
});
gv_vAlignTable['u178'] = 'center';u140.tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

	SetPanelState('u110', 'pd0u110','none','',500,'none','',500);

}
});
gv_vAlignTable['u196'] = 'center';document.getElementById('u245_img').tabIndex = 0;

u245.style.cursor = 'pointer';
$axure.eventManager.click('u245', function(e) {

if ((GetGlobalVariableValue('login')) != ('1')) {

	SetPanelState('u110', 'pd2u110','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('login')) == ('1')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('学品空间.html');

}
});

$axure.eventManager.mouseover('u245', function(e) {
if (!IsTrueMouseOver('u245',e)) return;
if ((GetGlobalVariableValue('login')) == ('1')) {

}
});

$axure.eventManager.mouseout('u245', function(e) {
if (!IsTrueMouseOut('u245',e)) return;
if (true) {

}
});
gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u154'] = 'center';document.getElementById('u203_img').tabIndex = 0;

u203.style.cursor = 'pointer';
$axure.eventManager.click('u203', function(e) {

if (true) {

	SetPanelState('u110', 'pd1u110','none','',500,'none','',500);

}
});
document.getElementById('u181_img').tabIndex = 0;

u181.style.cursor = 'pointer';
$axure.eventManager.click('u181', function(e) {

if (true) {

}
});
document.getElementById('u84_img').tabIndex = 0;

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

}
});
gv_vAlignTable['u4'] = 'center';document.getElementById('u217_img').tabIndex = 0;

u217.style.cursor = 'pointer';
$axure.eventManager.click('u217', function(e) {

if (true) {

}
});
gv_vAlignTable['u41'] = 'center';document.getElementById('u153_img').tabIndex = 0;

u153.style.cursor = 'pointer';
$axure.eventManager.click('u153', function(e) {

if (true) {

	SetPanelState('u110', 'pd1u110','none','',500,'none','',500);

}
});
