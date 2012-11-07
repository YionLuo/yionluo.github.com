for(var i = 0; i < 438; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u180', 'pd0u180','none','',500,'none','',500);

	SetPanelState('u161', 'pd0u161','none','',500,'none','',500);

	SetPanelState('u142', 'pd0u142','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd3u102','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd3u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd4u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd5u142','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelState('u82', 'pd3u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u82','hidden','none',500);

}

if ((GetGlobalVariableValue('login')) == ('1')) {

	SetPanelVisibility('u376','hidden','none',500);

	SetPanelVisibility('u379','hidden','none',500);

	SetPanelVisibility('u430','toggle','none',500);

}

});
gv_vAlignTable['u370'] = 'center';gv_vAlignTable['u167'] = 'center';document.getElementById('u36_img').tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	SetPanelVisibility('u43','toggle','none',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u180', 'pd0u180','none','',500,'none','',500);

	SetPanelState('u161', 'pd0u161','none','',500,'none','',500);

	SetPanelState('u142', 'pd0u142','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd3u102','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd3u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd4u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd5u142','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelState('u82', 'pd3u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u82','hidden','none',500);

}
});
gv_vAlignTable['u194'] = 'center';gv_vAlignTable['u152'] = 'center';u231.tabIndex = 0;

u231.style.cursor = 'pointer';
$axure.eventManager.click('u231', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
document.getElementById('u347_img').tabIndex = 0;

u347.style.cursor = 'pointer';
$axure.eventManager.click('u347', function(e) {

if (true) {

	SetPanelVisibility('u234','hidden','none',500);

}
});
gv_vAlignTable['u298'] = 'center';u139.tabIndex = 0;

u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u201'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u215'] = 'center';gv_vAlignTable['u126'] = 'center';document.getElementById('u413_img').tabIndex = 0;
HookHover('u413', false);

u413.style.cursor = 'pointer';
$axure.eventManager.click('u413', function(e) {

if (true) {

	SetPanelVisibility('u385','hidden','none',500);

}
});
gv_vAlignTable['u332'] = 'center';gv_vAlignTable['u275'] = 'top';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u389'] = 'center';gv_vAlignTable['u165'] = 'center';gv_vAlignTable['u378'] = 'center';gv_vAlignTable['u138'] = 'center';u100.tabIndex = 0;

u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u236'] = 'center';document.getElementById('u214_img').tabIndex = 0;

u214.style.cursor = 'pointer';
$axure.eventManager.click('u214', function(e) {

if (true) {

	SetPanelState('u199', 'pd1u199','none','',500,'none','',500);

	SetPanelState('u204', 'pd0u204','none','',500,'none','',500);

	SetPanelState('u209', 'pd1u209','none','',500,'none','',500);

	SetPanelState('u82', 'pd3u82','none','',500,'swing','left',500);

	SetPanelState('u102', 'pd1u102','none','',500,'swing','down',500);

	SetPanelState('u122', 'pd4u122','none','',500,'swing','right',500);

	SetPanelState('u142', 'pd5u142','none','',500,'swing','left',500);

	SetPanelState('u161', 'pd3u161','none','',500,'swing','down',500);

	SetPanelState('u180', 'pd2u180','none','',500,'swing','right',500);

}
});
u192.tabIndex = 0;

u192.style.cursor = 'pointer';
$axure.eventManager.click('u192', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u269'] = 'center';document.getElementById('u321_img').tabIndex = 0;

u321.style.cursor = 'pointer';
$axure.eventManager.click('u321', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
u150.tabIndex = 0;

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u436.tabIndex = 0;

u436.style.cursor = 'pointer';
$axure.eventManager.click('u436', function(e) {

if (true) {

	SetPanelVisibility('u430','hidden','none',500);

	SetPanelVisibility('u433','hidden','none',500);

	SetPanelVisibility('u376','','none',500);

	SetPanelVisibility('u379','','none',500);

}
});

$axure.eventManager.mouseover('u436', function(e) {
if (!IsTrueMouseOver('u436',e)) return;
if (true) {

	SetPanelState('u433', 'pd1u433','none','',500,'none','',500);

}
});
gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u346'] = 'center';gv_vAlignTable['u318'] = 'center';gv_vAlignTable['u330'] = 'center';gv_vAlignTable['u286'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u344'] = 'center';gv_vAlignTable['u163'] = 'center';gv_vAlignTable['u63'] = 'top';u177.tabIndex = 0;

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u37'] = 'center';u112.tabIndex = 0;

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u419'] = 'center';document.getElementById('u307_img').tabIndex = 0;

u307.style.cursor = 'pointer';
$axure.eventManager.click('u307', function(e) {

if (true) {

}
});
gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u424'] = 'center';
$axure.eventManager.mouseover('u357', function(e) {
if (!IsTrueMouseOver('u357',e)) return;
if (true) {

	SetPanelState('u353', 'pd1u353','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u357', function(e) {
if (!IsTrueMouseOut('u357',e)) return;
if (true) {

	SetPanelState('u353', 'pd0u353','none','',500,'none','',500);

}
});
gv_vAlignTable['u357'] = 'top';gv_vAlignTable['u79'] = 'center';u176.tabIndex = 0;

u176.style.cursor = 'pointer';
$axure.eventManager.click('u176', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
document.getElementById('u411_img').tabIndex = 0;

u411.style.cursor = 'pointer';
$axure.eventManager.click('u411', function(e) {

if (true) {

	SetPanelState('u415', 'pd0u415','none','',500,'none','',500);

	SetPanelState('u420', 'pd0u420','none','',500,'none','',500);

	SetPanelState('u425', 'pd0u425','none','',500,'none','',500);

}
});
u149.tabIndex = 0;

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u111.tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u391'] = 'center';gv_vAlignTable['u306'] = 'center';gv_vAlignTable['u284'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u342'] = 'center';
$axure.eventManager.mouseover('u356', function(e) {
if (!IsTrueMouseOver('u356',e)) return;
if (true) {

	SetPanelState('u353', 'pd1u353','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u356', function(e) {
if (!IsTrueMouseOut('u356',e)) return;
if (true) {

	SetPanelState('u353', 'pd0u353','none','',500,'none','',500);

}
});
gv_vAlignTable['u356'] = 'top';gv_vAlignTable['u175'] = 'center';u229.tabIndex = 0;

u229.style.cursor = 'pointer';
$axure.eventManager.click('u229', function(e) {

if (true) {

}
});
gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u110'] = 'center';document.getElementById('u305_img').tabIndex = 0;

u305.style.cursor = 'pointer';
$axure.eventManager.click('u305', function(e) {

if (true) {

}
});
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u124'] = 'center';document.getElementById('u279_img').tabIndex = 0;

u279.style.cursor = 'pointer';
$axure.eventManager.click('u279', function(e) {

if (true) {

	SetPanelState('u234', 'pd0u234','none','',500,'none','',500);

}
});
document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelVisibility('u46','toggle','none',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u180', 'pd0u180','none','',500,'none','',500);

	SetPanelState('u161', 'pd0u161','none','',500,'none','',500);

	SetPanelState('u142', 'pd0u142','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd3u102','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd3u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd4u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd5u142','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelState('u82', 'pd3u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u82','hidden','none',500);

}
});
u241.tabIndex = 0;

u241.style.cursor = 'pointer';
$axure.eventManager.click('u241', function(e) {

if (true) {

	SetPanelState('u248', 'pd1u248','none','',500,'none','',500);

}
});
gv_vAlignTable['u160'] = 'center';document.getElementById('u297_img').tabIndex = 0;

u297.style.cursor = 'pointer';
$axure.eventManager.click('u297', function(e) {

if (true) {

	SetPanelState('u234', 'pd0u234','none','',500,'none','',500);

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u355'] = 'center';gv_vAlignTable['u25'] = 'top';document.getElementById('u309_img').tabIndex = 0;

u309.style.cursor = 'pointer';
$axure.eventManager.click('u309', function(e) {

if (true) {

}
});
u228.tabIndex = 0;

u228.style.cursor = 'pointer';
$axure.eventManager.click('u228', function(e) {

if (true) {

}
});
gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u304'] = 'center';gv_vAlignTable['u282'] = 'center';gv_vAlignTable['u263'] = 'center';gv_vAlignTable['u186'] = 'center';u240.tabIndex = 0;

u240.style.cursor = 'pointer';
$axure.eventManager.click('u240', function(e) {

if (true) {

	SetPanelState('u243', 'pd1u243','none','',500,'none','',500);

}
});
gv_vAlignTable['u296'] = 'center';gv_vAlignTable['u33'] = 'top';u173.tabIndex = 0;

u173.style.cursor = 'pointer';
$axure.eventManager.click('u173', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u422'] = 'center';document.getElementById('u343_img').tabIndex = 0;

u343.style.cursor = 'pointer';
$axure.eventManager.click('u343', function(e) {

if (true) {

}
});
gv_vAlignTable['u213'] = 'center';document.getElementById('u303_img').tabIndex = 0;

u303.style.cursor = 'pointer';
$axure.eventManager.click('u303', function(e) {

if (true) {

}
});
gv_vAlignTable['u94'] = 'center';
$axure.eventManager.mouseover('u358', function(e) {
if (!IsTrueMouseOver('u358',e)) return;
if (true) {

	SetPanelState('u353', 'pd1u353','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u358', function(e) {
if (!IsTrueMouseOut('u358',e)) return;
if (true) {

	SetPanelState('u353', 'pd0u353','none','',500,'none','',500);

}
});
gv_vAlignTable['u358'] = 'top';gv_vAlignTable['u5'] = 'center';u136.tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});

$axure.eventManager.mouseover('u434', function(e) {
if (!IsTrueMouseOver('u434',e)) return;
if (true) {

	SetPanelState('u433', 'pd1u433','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u434', function(e) {
if (!IsTrueMouseOut('u434',e)) return;
if (true) {

	SetPanelState('u433', 'pd0u433','none','',500,'none','',500);

}
});
u172.tabIndex = 0;

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u410'] = 'center';gv_vAlignTable['u267'] = 'center';gv_vAlignTable['u399'] = 'center';gv_vAlignTable['u302'] = 'center';gv_vAlignTable['u280'] = 'center';u121.tabIndex = 0;

u121.style.cursor = 'pointer';
$axure.eventManager.click('u121', function(e) {

if (true) {

	SetPanelState('u420', 'pd1u420','none','',500,'none','',500);

}
});
document.getElementById('u409_img').tabIndex = 0;

u409.style.cursor = 'pointer';
$axure.eventManager.click('u409', function(e) {

if (true) {

	SetPanelVisibility('u385','hidden','none',500);

	self.location.href=$axure.globalVariableProvider.getLinkUrl('对比页面.html');

}
});
gv_vAlignTable['u316'] = 'center';gv_vAlignTable['u294'] = 'center';u135.tabIndex = 0;

u135.style.cursor = 'pointer';
$axure.eventManager.click('u135', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u273'] = 'center';gv_vAlignTable['u252'] = 'center';gv_vAlignTable['u171'] = 'center';u239.tabIndex = 0;

u239.style.cursor = 'pointer';
$axure.eventManager.click('u239', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('发现页面.html');

}
});
u120.tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u169.tabIndex = 0;

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
document.getElementById('u293_img').tabIndex = 0;

u293.style.cursor = 'pointer';
$axure.eventManager.click('u293', function(e) {

if (true) {

SetGlobalVariableValue('login', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u432'] = 'center';document.getElementById('u373_img').tabIndex = 0;

u373.style.cursor = 'pointer';
$axure.eventManager.click('u373', function(e) {

if (true) {

SetGlobalVariableValue('check', '0');

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

	SetPanelState('u382', 'pd0u382','none','',500,'none','',500);

}
});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u238'] = 'center';document.getElementById('u200_img').tabIndex = 0;

u200.style.cursor = 'pointer';
$axure.eventManager.click('u200', function(e) {

if (true) {

	SetPanelState('u82', 'pd0u82','none','',500,'swing','left',500);

	SetPanelState('u102', 'pd0u102','none','',500,'swing','down',500);

	SetPanelState('u122', 'pd0u122','none','',500,'swing','right',500);

	SetPanelState('u142', 'pd0u142','none','',500,'swing','left',500);

	SetPanelState('u161', 'pd0u161','none','',500,'swing','down',500);

	SetPanelState('u180', 'pd0u180','none','',500,'swing','right',500);

	SetPanelState('u199', 'pd0u199','none','',500,'none','',500);

	SetPanelState('u204', 'pd0u204','none','',500,'none','',500);

	SetPanelState('u209', 'pd0u209','none','',500,'none','',500);

}
});
gv_vAlignTable['u314'] = 'center';gv_vAlignTable['u77'] = 'center';document.getElementById('u369_img').tabIndex = 0;

u369.style.cursor = 'pointer';
$axure.eventManager.click('u369', function(e) {

if ((GetGlobalVariableValue('login')) != ('1')) {

	SetPanelState('u234', 'pd2u234','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('login')) == ('1')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('学品空间.html');

}
});

$axure.eventManager.mouseover('u369', function(e) {
if (!IsTrueMouseOver('u369',e)) return;
if ((GetGlobalVariableValue('login')) == ('1')) {

}
});

$axure.eventManager.mouseout('u369', function(e) {
if (!IsTrueMouseOut('u369',e)) return;
if (true) {

}
});

$axure.eventManager.mouseover('u431', function(e) {
if (!IsTrueMouseOver('u431',e)) return;
if (true) {

	SetPanelState('u433', 'pd1u433','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u431', function(e) {
if (!IsTrueMouseOut('u431',e)) return;
if (true) {

	SetPanelState('u433', 'pd0u433','none','',500,'none','',500);

}
});
gv_vAlignTable['u250'] = 'center';gv_vAlignTable['u429'] = 'center';gv_vAlignTable['u58'] = 'top';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

	SetPanelVisibility('u40','toggle','none',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u180', 'pd0u180','none','',500,'none','',500);

	SetPanelState('u161', 'pd0u161','none','',500,'none','',500);

	SetPanelState('u142', 'pd0u142','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd3u102','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd3u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd4u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd5u142','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelState('u82', 'pd3u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u82','hidden','none',500);

}
});
gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u61'] = 'top';u95.tabIndex = 0;

u95.style.cursor = 'pointer';
$axure.eventManager.click('u95', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u191.tabIndex = 0;

u191.style.cursor = 'pointer';
$axure.eventManager.click('u191', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u368'] = 'center';document.getElementById('u327_img').tabIndex = 0;

u327.style.cursor = 'pointer';
$axure.eventManager.click('u327', function(e) {

if (true) {

	SetPanelState('u234', 'pd1u234','none','',500,'none','',500);

}
});
gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u274'] = 'top';document.getElementById('u277_img').tabIndex = 0;

u277.style.cursor = 'pointer';
$axure.eventManager.click('u277', function(e) {

if (true) {

	SetPanelState('u234', 'pd1u234','none','',500,'none','',500);

}
});
document.getElementById('u47_img').tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	SetPanelVisibility('u46','toggle','none',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u180', 'pd0u180','none','',500,'none','',500);

	SetPanelState('u161', 'pd0u161','none','',500,'none','',500);

	SetPanelState('u142', 'pd0u142','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd3u102','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd3u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd4u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd5u142','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelState('u82', 'pd3u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u82','hidden','none',500);

}
});
document.getElementById('u212_img').tabIndex = 0;

u212.style.cursor = 'pointer';
$axure.eventManager.click('u212', function(e) {

if (true) {

	SetPanelState('u209', 'pd2u209','none','',500,'none','',500);

	SetPanelState('u204', 'pd0u204','none','',500,'none','',500);

	SetPanelState('u199', 'pd1u199','none','',500,'none','',500);

	SetPanelState('u82', 'pd1u82','none','',500,'swing','left',500);

	SetPanelState('u102', 'pd2u102','none','',500,'swing','down',500);

	SetPanelState('u122', 'pd5u122','none','',500,'swing','right',500);

	SetPanelState('u142', 'pd4u142','none','',500,'swing','left',500);

	SetPanelState('u161', 'pd1u161','none','',500,'swing','down',500);

	SetPanelState('u180', 'pd4u180','none','',500,'swing','right',500);

}
});
u131.tabIndex = 0;

u131.style.cursor = 'pointer';
$axure.eventManager.click('u131', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u276'] = 'top';gv_vAlignTable['u211'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u406'] = 'center';u384.tabIndex = 0;

u384.style.cursor = 'pointer';
$axure.eventManager.click('u384', function(e) {

if (true) {

	SetPanelState('u382', 'pd1u382','none','',500,'none','',500);

}
});
gv_vAlignTable['u384'] = 'top';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u260'] = 'center';document.getElementById('u210_img').tabIndex = 0;

u210.style.cursor = 'pointer';
$axure.eventManager.click('u210', function(e) {

if (true) {

	SetPanelState('u209', 'pd1u209','none','',500,'none','',500);

	SetPanelState('u82', 'pd3u82','none','',500,'swing','left',500);

	SetPanelState('u102', 'pd1u102','none','',500,'swing','down',500);

	SetPanelState('u122', 'pd4u122','none','',500,'swing','right',500);

	SetPanelState('u142', 'pd5u142','none','',500,'swing','left',500);

	SetPanelState('u161', 'pd3u161','none','',500,'swing','down',500);

	SetPanelState('u180', 'pd2u180','none','',500,'swing','right',500);

}
});
document.getElementById('u44_img').tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	SetPanelVisibility('u43','toggle','none',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u180', 'pd0u180','none','',500,'none','',500);

	SetPanelState('u161', 'pd0u161','none','',500,'none','',500);

	SetPanelState('u142', 'pd0u142','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd3u102','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd3u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd4u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd5u142','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelState('u82', 'pd3u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u82','hidden','none',500);

}
});
document.getElementById('u405_img').tabIndex = 0;

u405.style.cursor = 'pointer';
$axure.eventManager.click('u405', function(e) {

if (true) {

	SetPanelVisibility('u385','hidden','none',500);

}
});
gv_vAlignTable['u383'] = 'top';document.getElementById('u341_img').tabIndex = 0;

u341.style.cursor = 'pointer';
$axure.eventManager.click('u341', function(e) {

if (true) {

}
});
gv_vAlignTable['u397'] = 'center';u157.tabIndex = 0;

u157.style.cursor = 'pointer';
$axure.eventManager.click('u157', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u35'] = 'center';u91.tabIndex = 0;

u91.style.cursor = 'pointer';
$axure.eventManager.click('u91', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u227.tabIndex = 0;

u227.style.cursor = 'pointer';
$axure.eventManager.click('u227', function(e) {

if (true) {

}
});
gv_vAlignTable['u328'] = 'center';gv_vAlignTable['u435'] = 'center';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u404'] = 'top';gv_vAlignTable['u86'] = 'center';u265.tabIndex = 0;

u265.style.cursor = 'pointer';
$axure.eventManager.click('u265', function(e) {

if (true) {

	SetPanelState('u234', 'pd1u234','none','',500,'none','',500);

}
});
gv_vAlignTable['u340'] = 'center';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u156'] = 'center';u188.tabIndex = 0;

u188.style.cursor = 'pointer';
$axure.eventManager.click('u188', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
document.getElementById('u207_img').tabIndex = 0;

u207.style.cursor = 'pointer';
$axure.eventManager.click('u207', function(e) {

if (true) {

	SetPanelState('u199', 'pd1u199','none','',500,'none','',500);

	SetPanelState('u209', 'pd0u209','none','',500,'none','',500);

	SetPanelState('u204', 'pd1u204','none','',500,'none','',500);

	SetPanelState('u82', 'pd2u82','none','',500,'swing','left',500);

	SetPanelState('u102', 'pd0u102','none','',500,'swing','down',500);

	SetPanelState('u122', 'pd1u122','none','',500,'swing','right',500);

	SetPanelState('u142', 'pd4u142','none','',500,'swing','left',500);

	SetPanelState('u161', 'pd5u161','none','',500,'swing','down',500);

	SetPanelState('u180', 'pd4u180','none','',500,'swing','right',500);

}
});
gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u403'] = 'center';gv_vAlignTable['u381'] = 'center';gv_vAlignTable['u372'] = 'center';gv_vAlignTable['u417'] = 'center';gv_vAlignTable['u395'] = 'center';gv_vAlignTable['u29'] = 'top';document.getElementById('u272_img').tabIndex = 0;

u272.style.cursor = 'pointer';
$axure.eventManager.click('u272', function(e) {

if (true) {

	SetPanelVisibility('u234','hidden','none',500);

}
});
document.getElementById('u367_img').tabIndex = 0;

u367.style.cursor = 'pointer';
$axure.eventManager.click('u367', function(e) {

if (true) {

	SetPanelState('u234', 'pd3u234','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u367', function(e) {
if (!IsTrueMouseOver('u367',e)) return;
if (true) {

	SetPanelState('u359', 'pd1u359','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u367', function(e) {
if (!IsTrueMouseOut('u367',e)) return;
if (true) {

	SetPanelState('u359', 'pd0u359','none','',500,'none','',500);

}
});
gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u308'] = 'center';gv_vAlignTable['u56'] = 'center';document.getElementById('u380_img').tabIndex = 0;

u380.style.cursor = 'pointer';
$axure.eventManager.click('u380', function(e) {

if (true) {

	SetPanelState('u234', 'pd0u234','none','',500,'none','',500);

}
});
u119.tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u208'] = 'center';gv_vAlignTable['u352'] = 'center';gv_vAlignTable['u271'] = 'center';gv_vAlignTable['u366'] = 'center';gv_vAlignTable['u98'] = 'center';document.getElementById('u339_img').tabIndex = 0;

u339.style.cursor = 'pointer';
$axure.eventManager.click('u339', function(e) {

if (true) {

}
});
gv_vAlignTable['u401'] = 'center';u158.tabIndex = 0;

u158.style.cursor = 'pointer';
$axure.eventManager.click('u158', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u393'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u408'] = 'center';document.getElementById('u351_img').tabIndex = 0;

u351.style.cursor = 'pointer';
$axure.eventManager.click('u351', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
document.getElementById('u365_img').tabIndex = 0;

u365.style.cursor = 'pointer';
$axure.eventManager.click('u365', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('学习页面.html');

}
});

$axure.eventManager.mouseover('u365', function(e) {
if (!IsTrueMouseOver('u365',e)) return;
if (true) {

	SetPanelState('u353', 'pd1u353','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u365', function(e) {
if (!IsTrueMouseOut('u365',e)) return;
if (true) {

	SetPanelState('u353', 'pd0u353','none','',500,'none','',500);

}
});
u92.tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u338'] = 'center';gv_vAlignTable['u300'] = 'center';u116.tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u414'] = 'center';gv_vAlignTable['u233'] = 'center';gv_vAlignTable['u350'] = 'center';gv_vAlignTable['u247'] = 'center';gv_vAlignTable['u198'] = 'center';
$axure.eventManager.mouseover('u364', function(e) {
if (!IsTrueMouseOver('u364',e)) return;
if (true) {

	SetPanelState('u359', 'pd1u359','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u364', function(e) {
if (!IsTrueMouseOut('u364',e)) return;
if (true) {

	SetPanelState('u359', 'pd0u359','none','',500,'none','',500);

}
});
gv_vAlignTable['u364'] = 'top';u101.tabIndex = 0;

u101.style.cursor = 'pointer';
$axure.eventManager.click('u101', function(e) {

if (true) {

	SetPanelState('u385', 'pd0u385','none','',500,'none','',500);

	SetPanelState('u415', 'pd1u415','none','',500,'none','',500);

}
});
gv_vAlignTable['u190'] = 'center';u115.tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
document.getElementById('u313_img').tabIndex = 0;

u313.style.cursor = 'pointer';
$axure.eventManager.click('u313', function(e) {

if (true) {

	SetPanelVisibility('u234','hidden','none',500);

}
});
gv_vAlignTable['u427'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u62'] = 'top';
$axure.eventManager.mouseover('u363', function(e) {
if (!IsTrueMouseOver('u363',e)) return;
if (true) {

	SetPanelState('u359', 'pd1u359','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u363', function(e) {
if (!IsTrueMouseOut('u363',e)) return;
if (true) {

	SetPanelState('u359', 'pd0u359','none','',500,'none','',500);

}
});
gv_vAlignTable['u363'] = 'top';u132.tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
document.getElementById('u377_img').tabIndex = 0;

u377.style.cursor = 'pointer';
$axure.eventManager.click('u377', function(e) {

if (true) {

	SetPanelState('u234', 'pd1u234','none','',500,'none','',500);

}
});
gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u312'] = 'center';gv_vAlignTable['u290'] = 'center';gv_vAlignTable['u278'] = 'center';u187.tabIndex = 0;

u187.style.cursor = 'pointer';
$axure.eventManager.click('u187', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u326'] = 'center';gv_vAlignTable['u412'] = 'center';gv_vAlignTable['u14'] = 'center';
$axure.eventManager.mouseover('u362', function(e) {
if (!IsTrueMouseOver('u362',e)) return;
if (true) {

	SetPanelState('u359', 'pd1u359','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u362', function(e) {
if (!IsTrueMouseOut('u362',e)) return;
if (true) {

	SetPanelState('u359', 'pd0u359','none','',500,'none','',500);

}
});
gv_vAlignTable['u362'] = 'top';u99.tabIndex = 0;

u99.style.cursor = 'pointer';
$axure.eventManager.click('u99', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u168.tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u230.tabIndex = 0;

u230.style.cursor = 'pointer';
$axure.eventManager.click('u230', function(e) {

if (true) {

}
});
gv_vAlignTable['u361'] = 'center';u375.tabIndex = 0;

u375.style.cursor = 'pointer';
$axure.eventManager.click('u375', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u348'] = 'center';gv_vAlignTable['u310'] = 'center';gv_vAlignTable['u179'] = 'center';gv_vAlignTable['u324'] = 'center';gv_vAlignTable['u257'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u374'] = 'center';gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u184'] = 'center';u242.tabIndex = 0;

u242.style.cursor = 'pointer';
$axure.eventManager.click('u242', function(e) {

if (true) {

	SetPanelState('u253', 'pd1u253','none','',500,'none','',500);

}
});
u96.tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
document.getElementById('u337_img').tabIndex = 0;

u337.style.cursor = 'pointer';
$axure.eventManager.click('u337', function(e) {

if (true) {

}
});
gv_vAlignTable['u288'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u322'] = 'center';u141.tabIndex = 0;

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	SetPanelState('u425', 'pd1u425','none','',500,'none','',500);

}
});
gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u255'] = 'center';u140.tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u196.tabIndex = 0;

u196.style.cursor = 'pointer';
$axure.eventManager.click('u196', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u245'] = 'center';gv_vAlignTable['u387'] = 'center';gv_vAlignTable['u23'] = 'top';u154.tabIndex = 0;

u154.style.cursor = 'pointer';
$axure.eventManager.click('u154', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u264.tabIndex = 0;

u264.style.cursor = 'pointer';
$axure.eventManager.click('u264', function(e) {

if (true) {

	SetPanelState('u234', 'pd0u234','none','',500,'none','',500);

}
});
gv_vAlignTable['u203'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u320'] = 'center';u195.tabIndex = 0;

u195.style.cursor = 'pointer';
$axure.eventManager.click('u195', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
document.getElementById('u41_img').tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	SetPanelVisibility('u40','toggle','none',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u180', 'pd0u180','none','',500,'none','',500);

	SetPanelState('u161', 'pd0u161','none','',500,'none','',500);

	SetPanelState('u142', 'pd0u142','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd0u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd3u102','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (true)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd0u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd3u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd4u142','none','',500,'none','',500);

	SetPanelState('u161', 'pd5u161','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (true)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelState('u82', 'pd1u82','none','',500,'none','',500);

	SetPanelState('u102', 'pd2u102','none','',500,'none','',500);

	SetPanelState('u122', 'pd4u122','none','',500,'none','',500);

	SetPanelState('u142', 'pd5u142','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (true)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelState('u82', 'pd3u82','none','',500,'none','',500);

}

if (((GetWidgetVisibility('u40')) == (false)) && (((GetWidgetVisibility('u43')) == (false)) && ((GetWidgetVisibility('u46')) == (false)))) {

	SetPanelVisibility('u180','hidden','none',500);

	SetPanelVisibility('u161','hidden','none',500);

	SetPanelVisibility('u142','hidden','none',500);

	SetPanelVisibility('u122','hidden','none',500);

	SetPanelVisibility('u102','hidden','none',500);

	SetPanelVisibility('u82','hidden','none',500);

}
});
gv_vAlignTable['u334'] = 'center';u153.tabIndex = 0;

u153.style.cursor = 'pointer';
$axure.eventManager.click('u153', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
