$(function(){
	function position(d,p){
		$('.search-Listbox').css('display',d);
		$('.search-List').css({'background':'url(img/list.png)','background-position':p});
	}
	$('.search-List,.search-Listbox').mouseover(function(){
		position('block','-552px -200px');
	}).mouseout(function(){
		position('none','-877px -199px');
	});
	$('.nav-More,.more-List').mouseover(function() {
		$('.more-List').css('display','block');
		$('.nav-More').css('background-image','url(img/nav-More-Up.png)');
		$('.nav-More').css('background-color','#469fe1');

	}).mouseout(function() {
		$('.more-List').css('display','none');
		$('.nav-More').css('background-image','url(img/nav-More-Down.png)');
		$('.nav-More').css('background-color','rgb(55,147,214)');
	});;
	$('.hit-Title').find('a').eq(0).attr('id','special-Border');
		$('.hit-Title').find('a').eq(0).mouseover(function() {
			$('.hit-Title').find('a').eq(0).attr('id','special-Border');
			$('.hit-Content').css('display','block');
			$('.film-Content').css('display','none');
			$('.variety-Content').css('display','none');
			$('.hit-Title').find('a').eq(1).attr('id','');
			$('.hit-Title').find('a').eq(2).attr('id','');
		});
		$('.hit-Title').find('a').eq(1).mouseover(function() {
			$('.hit-Title').find('a').eq(1).attr('id','special-Border');
			$('.film-Content').css('display','block');
			$('.hit-Content').css('display','none');
			$('.variety-Content').css('display','none');
			$('.hit-Title').find('a').eq(0).attr('id','');
			$('.hit-Title').find('a').eq(2).attr('id','');
		});
		$('.hit-Title').find('a').eq(2).mouseover(function() {
			$('.hit-Title').find('a').eq(2).attr('id','special-Border');
			$('.variety-Content').css('display','block');
			$('.hit-Content').css('display','none');
			$('.film-Content').css('display','none');
			$('.hit-Title').find('a').eq(0).attr('id','');
			$('.hit-Title').find('a').eq(1).attr('id','');
		});
		$('.product-Nav,#nav-Button').mouseover(function() {
			$('#button-Picture').css('background-position','right -80px');
		}).mouseout(function() {
			$('#button-Picture').css('background-position','right top');
		});
		$('#button-Picture').click(function() {
			$('#button-Hide').css('display','block').css('width','350px');
			$('#button-Picture').css('background-position','right bottom').css('position','absolute');
			$('#button-Hide').mouseover(function() {
				$('#nav-Button').css('width','364px').css('right','278px');
				$('#button-Picture').css('background-position','right bottom').css('position','absolute');
				$('#button-Hide').css('display','block').css('width','350px');
			}).mouseout(function() {
				$('#button-Hide').css('width','0').css('display','none');
				$('#nav-Button').css('width','14px').css('right','279px');
			});
			$('#nav-Button').css('width','364px').css('right','278px');
		});
		$('.market-Content').find('li').eq(0).css('background-color','#458fce');
		$('.market-Content').find('li').eq(0).find('a').css('color','#fff');

});