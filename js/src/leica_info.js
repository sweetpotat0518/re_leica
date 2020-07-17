// leica_info.js

(function($){

	var wrap = $('#wrap');
wrap.wrap('<div class="site_wrap"></div>');
$('.site_wrap').css({width:'100%', height:'auto', overflowX:'hidden' });

var siteWrap = $('.site_wrap');



// --------------------------------------------------



// ==================================================================================


	// 전체메뉴 왼쪽 슬라이드 ---------------------------------------------------
	var wrap = $('#wrap');
	var menuBtn = $('.pull');
	var menuBox = $('.menu');
	
	menuBtn.on('click', function(e){
		e.preventDefault();
		menuBox.addClass('action');
		wrap.stop().animate({marginLeft:'-70%'});
	});
	menuBox.on('mouseleave', function(e){
		e.preventDefault();
		wrap.stop().animate({marginLeft:'0', function(){
			menuBox.removeClass('action');
		}});
	});

	// unb menu---------------------------
	var unbBox = $('.unbBox');
	var login = $('.login');
	var join = $('.join');

	unbBox.on('click', function(e){
		e.preventDefault();
		unbBox.removeClass('action');
		$(this).find('a').addClass('action');
	});

	

	
	// gnb menu ---------------------------------------------------------

	// mob 기준 메뉴-----------------------------------
	var mobGnb = function(){
	var gnbDl  = menuBox.find('dl');
	var gnbTitle = menuBox.find('dt');
	var gnbTitleLink = gnbTitle.children('a');
	var gnbContent = gnbTitle.next('dd');
	var gnbConLink  = gnbContent.find('a');

	gnbContent.hide();
 
   gnbTitleLink.on('click focus', function(e){
  	e.preventDefault();
  	$(this).parentsUntil('ul').siblings('li').find('dd').stop().slideUp();
  	$(this).parent('dt').next('dd').stop().slideDown();
  	$(this).parent('dt').removeClass('action');
  	$(this).parent('dt').addClass('action');		
  });

  gnbDl.on('mouseleave', function(e){
  	e.preventDefault();
  	gnbContent.stop().slideUp();
  	gnbTitle.removeClass('action');
  	gnbContent.find('li').removeClass('action');
  });
  
  gnbConLink.on('focus', function(e){
  	e.preventDefault();
  	gnbTitle.removeClass('action');
  	$(this).parents('dd').prev('dt').addClass('action');
  	
  	gnbContent.find('li').removeClass('action');
  	$(this).parent('li').addClass('action');
	});
};


// pc 기준 gnb 메뉴--------------------------------------------------------

	var gnbDl  = menuBox.find('dl');
	var gnbTitle = menuBox.find('dt');
	var gnbTitleLink = gnbTitle.children('a');
	var gnbContent = gnbTitle.next('dd');
	var gnbConLink  = gnbContent.find('a');
	var gnbDiv = gnbContent.find('div');
	var timed = 500;

	gnbContent.hide();
 
   gnbTitleLink.on('mouseenter', function(e){
  	e.preventDefault();
  	$(this).parentsUntil('ul').siblings('li').find('dd').stop().slideUp(timed);
  	$(this).parent('dt').next('dd').stop().slideDown(timed);
  	$(this).parentsUntil('ul').siblings('li').find('dd').find('div').stop().slideUp(timed);
  	$(this).parent('dt').next('dd').find('div').stop().slideDown(timed);
  	$(this).parent('dt').removeClass('action');
		$(this).parent('dt').addClass('action');
	});

  gnbDl.on('mouseleave', function(e){
  	e.preventDefault();
  	$(this).find('dd').stop().slideUp(timed);
  	gnbTitle.removeClass('action');
		gnbContent.find('li').removeClass('action');
	});
	
  
  gnbConLink.on('focus', function(e){
  	e.preventDefault();
  	gnbTitle.removeClass('action');
  	$(this).parents('dd').prev('dt').addClass('action');
  	
  	gnbContent.find('li').removeClass('action');
  	$(this).parent('li').addClass('action');
	});




	// mob 검색창------------------------------------------------
	var gnb = $('.gnb');
	var btnArea = gnb.children('.btn_area_01');
	var searchBtn = btnArea.find('.button_01');
	var searchBox = btnArea.find('.searchBox');
	var buttonImg = searchBtn.find('i');
	

	searchBtn.on('click', function(e){
		e.preventDefault();
		searchBox.addClass('action');
		buttonImg.css({'display':'none'});
	});

	var headBox = $('#headBox');
  var hT =  headBox.offset().top;
  
  $(document).on('scroll', function(){
  	var docST = $(document).scrollTop(); // 스크롤의 위치 파악
		searchBox.removeClass('action');
		buttonImg.css({'display':'block'});
  });







// mob 하단 메뉴

	var accmenu = function(){
		var menuArea = $('.menu_area');
		var menuAreaDl  = menuArea.find('dl');
		var menuAreaDt = menuArea.find('dt');
		var menuAreaTitleLink = menuAreaDt.children('a');
		var menuContent = menuAreaDt.next('dd');
		var menuConLink  = menuContent.find('a');
	
		menuContent.hide();
	 
		menuAreaTitleLink.on('click', function(e){
			e.preventDefault();
			$(this).parentsUntil('ul').siblings('li').find('dd').stop().slideUp();
			$(this).parent('dt').next('dd').stop().slideDown();
			$(this).parent('dt').removeClass('action');
			$(this).parent('dt').addClass('action');		
		});
	
		menuAreaDl.on('mouseleave', function(e){
			e.preventDefault();
			menuContent.stop().slideUp();
			menuAreaDt.removeClass('action');
			menuContent.find('li').removeClass('action');
		});
		
		menuConLink.on('focus', function(e){
			e.preventDefault();
			menuAreaDt.removeClass('action');
			$(this).parents('dd').prev('dt').addClass('action');
			
			menuContent.find('li').removeClass('action');
			$(this).parent('li').addClass('action');
		});
	 };

	
	//  pc 기준 하단메뉴------------------------------------------------------
	var pcAccmenu = function(){
		var menuArea = $('.menu_area');
		var menuAreaDl  = menuArea.find('dl');
		var menuAreaDt = menuArea.find('dt');
		var menuAreaTitleLink = menuAreaDt.children('a');
		var menuContent = menuAreaDt.next('dd');
		var menuConLink  = menuContent.find('a');
	
		menuAreaTitleLink.on('click focus', function(e){
			e.preventDefault();
			$(this).parent('dt').removeClass('action');
			$(this).parent('dt').addClass('action');
		});
	
		menuConLink.on('click focus', function(e){
			e.preventDefault();
			menuContent.removeClass('action');
			menuConLink.removeClass('action');
			menuContent.find('li').removeClass('action');
			$(this).parent('li').addClass('action');
		});
	};




	// 선택자
var win = $(window);
var headBox = $('#headBox');
var gnbBox = $('#gnb');
var gnbMenu = $('#gnbBox');
var gnbBtn = gnbMenu.find('.gnb_view_btn');
var gnbList = gnbMenu.find('.gnb_list');

// 다비아스 환경
var winW = win.width(); // 갖춰진 사이즈 확인


	// 디바이스 사이즈 체크
// 위에서 변수처리를 하고 간단하게 if문으로 변수이름을 적어서 기능을 수행하게 한다.
if(winW <= 640){ // 모바일 환경
	mobGnb();
	mobSlide();
	accmenu();
}else if(winW < 1024){ // 모바일2 환경
	// mobGnb();
	mob2Slide();
	accmenu();
}else if(winW <= 1440){ // 태블릿 환경
	tabSlide(); 
	pcAccmenu();
}else if(winW <= 1920){ // pc 환경
	tabSlide();
	pcAccmenu();
}else{
	tabSlide();
	pcAccmenu();
}


// ---------------------------------------------------
// 모바일에서 메뉴가 나오고 크기를 늘리면 태블릿 기준에서 메뉴가 사라진다.
// 그래서 새로고침을 해서 늘어난 크기에서도 메뉴가 나올수 있게 해야한다.

win.on('resize', function(){
	var nowWinW = win.width(); // 변경된 사이즈 확인
	var deviceWidthCheck = winW !== nowWinW; // 기존 가로값과, 지금의 가로값이 변경되었다면
	if(deviceWidthCheck){ // 참이냐, 거짓이냐를 따지고
		location.reload(); // 참이면 새로고침을 해라
		// window.location
	}
});





var win = $(window);
var winW = win.innerWidth();
var winH = win.innerHeight();

var viewBox = $('#viewBox');
var viewDiv = viewBox.find('div');

// 박스 4개중 첫번째 top 부터 라는 뜻
var divImg = $('.img');
var imgArr = [];
var i=0;
for(; i < divImg.length; i++){
	imgArr[i] = divImg.eq(i).offset().top;
}
console.log(imgArr);

if(winW < 640){
	introDiv.remove();
}

// win.on('resize', function(){
//   if(winW < 640){
//   	introBox.children('div').remove();
//   }else{
// 		location.reload();
// 	}
// });

// 사항 연산자....  위에랑 똑같다.
win.on('resize', function(){
	winW = win.innerWidth();
	(winW < 640) ? introBox.children('div').remove() : location.reload();
});


// 스크롤 시 이미지가 따로 움직이게 기능수행
win.on('scroll', function(e){
	e.preventDefault();
	var winTop = win.scrollTop(); // 현재 스크롤 높이의 top
	var winTop2 = winTop + winH; // winH는 브라우저의 top 값
	// 이미지가 나오지전에 기능이 동작해서 움직여야하므로 브라우저의 높이를 더해준다.
	// div 박스와 브라우저 맨 top 사이 공간을 뜻한다.
	// console.log(winTop);

	// 상단 introBox 영역 ---------------------------------------------------------------
	// 반복문 for 로 처리가 가능 그래서 값을 순서대로 적어야한다.
	viewDiv.eq(0).css({backgroundPositionY:winTop/16*4});

	// 고정값이어서 나누기로 해서 설정을 해야 덜 움직인다.
	// 나누고 곱하는 이유는 많이 나누고 곱하면 미세한 값으로 움직이기 때문에
	// ==========================================================
	
	// 중간 기능 처리 contrntBox -------------------------------------------------------------
	// 반복문 for로 처리 가능하다.
	if(winTop2 > imgArr[0]){
		// console.log('!!!!!!!!---------------1');
		divImg.eq(0).css({backgroundPositionY:-(imgArr[0] - winTop2)/10 + '%'});
		divImg.eq(0).next('p').css({top:-(imgArr[0] - winTop2)/5});
	}
	
	
	
	
});







})(jQuery);