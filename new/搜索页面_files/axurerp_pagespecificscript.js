for(var i = 0; i < 236; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

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

});
u132.tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u156'] = 'center';document.getElementById('u207_img').tabIndex = 0;

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
gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u79'] = 'center';u140.tabIndex = 0;

u140.style.cursor = 'pointer';
$axure.eventManager.click('u140', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u135.tabIndex = 0;

u135.style.cursor = 'pointer';
$axure.eventManager.click('u135', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

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
gv_vAlignTable['u42'] = 'center';u229.tabIndex = 0;

u229.style.cursor = 'pointer';
$axure.eventManager.click('u229', function(e) {

if (true) {

}
});
u101.tabIndex = 0;

u101.style.cursor = 'pointer';
$axure.eventManager.click('u101', function(e) {

if (true) {

}
});
gv_vAlignTable['u186'] = 'center';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u48'] = 'center';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u235'] = 'center';gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u65'] = 'center';u120.tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u75'] = 'center';document.getElementById('u34_img').tabIndex = 0;

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
gv_vAlignTable['u39'] = 'center';document.getElementById('u47_img').tabIndex = 0;

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
gv_vAlignTable['u213'] = 'center';gv_vAlignTable['u184'] = 'center';u149.tabIndex = 0;

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u99.tabIndex = 0;

u99.style.cursor = 'pointer';
$axure.eventManager.click('u99', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u233'] = 'center';u112.tabIndex = 0;

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

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
gv_vAlignTable['u179'] = 'center';gv_vAlignTable['u57'] = 'top';u119.tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u203'] = 'center';document.getElementById('u41_img').tabIndex = 0;

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
u172.tabIndex = 0;

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u158.tabIndex = 0;

u158.style.cursor = 'pointer';
$axure.eventManager.click('u158', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u208'] = 'center';gv_vAlignTable['u118'] = 'center';u231.tabIndex = 0;

u231.style.cursor = 'pointer';
$axure.eventManager.click('u231', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u88'] = 'center';document.getElementById('u38_img').tabIndex = 0;

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
u176.tabIndex = 0;

u176.style.cursor = 'pointer';
$axure.eventManager.click('u176', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u128'] = 'center';u191.tabIndex = 0;

u191.style.cursor = 'pointer';
$axure.eventManager.click('u191', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u10'] = 'center';u100.tabIndex = 0;

u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u23'] = 'top';u153.tabIndex = 0;

u153.style.cursor = 'pointer';
$axure.eventManager.click('u153', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
document.getElementById('u36_img').tabIndex = 0;

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
u95.tabIndex = 0;

u95.style.cursor = 'pointer';
$axure.eventManager.click('u95', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u61'] = 'top';u195.tabIndex = 0;

u195.style.cursor = 'pointer';
$axure.eventManager.click('u195', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u116.tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u160'] = 'center';u157.tabIndex = 0;

u157.style.cursor = 'pointer';
$axure.eventManager.click('u157', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

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
gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u198'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u98'] = 'center';document.getElementById('u214_img').tabIndex = 0;

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
u169.tabIndex = 0;

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u56'] = 'center';u150.tabIndex = 0;

u150.style.cursor = 'pointer';
$axure.eventManager.click('u150', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u187.tabIndex = 0;

u187.style.cursor = 'pointer';
$axure.eventManager.click('u187', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u106'] = 'center';u168.tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u154.tabIndex = 0;

u154.style.cursor = 'pointer';
$axure.eventManager.click('u154', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u227.tabIndex = 0;

u227.style.cursor = 'pointer';
$axure.eventManager.click('u227', function(e) {

if (true) {

}
});
u139.tabIndex = 0;

u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u104'] = 'center';u192.tabIndex = 0;

u192.style.cursor = 'pointer';
$axure.eventManager.click('u192', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u121.tabIndex = 0;

u121.style.cursor = 'pointer';
$axure.eventManager.click('u121', function(e) {

if (true) {

}
});
gv_vAlignTable['u211'] = 'center';gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u81'] = 'center';u228.tabIndex = 0;

u228.style.cursor = 'pointer';
$axure.eventManager.click('u228', function(e) {

if (true) {

}
});
u177.tabIndex = 0;

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u190'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u163'] = 'center';u91.tabIndex = 0;

u91.style.cursor = 'pointer';
$axure.eventManager.click('u91', function(e) {

if (true) {

SetGlobalVariableValue('pic', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

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
gv_vAlignTable['u24'] = 'top';u188.tabIndex = 0;

u188.style.cursor = 'pointer';
$axure.eventManager.click('u188', function(e) {

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
document.getElementById('u210_img').tabIndex = 0;

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
document.getElementById('u200_img').tabIndex = 0;

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
gv_vAlignTable['u29'] = 'top';u141.tabIndex = 0;

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

}
});
gv_vAlignTable['u175'] = 'center';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u58'] = 'top';u173.tabIndex = 0;

u173.style.cursor = 'pointer';
$axure.eventManager.click('u173', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

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
gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u3'] = 'center';u96.tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

SetGlobalVariableValue('pic', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u146'] = 'center';u196.tabIndex = 0;

u196.style.cursor = 'pointer';
$axure.eventManager.click('u196', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
u115.tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u148'] = 'center';gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u201'] = 'center';gv_vAlignTable['u165'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u215'] = 'center';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u35'] = 'center';u136.tabIndex = 0;

u136.style.cursor = 'pointer';
$axure.eventManager.click('u136', function(e) {

if (true) {

SetGlobalVariableValue('pic', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});
gv_vAlignTable['u194'] = 'center';