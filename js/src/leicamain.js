// leicamain.js

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



// ---------------------------------------------------------------

// store 슬라이드--------------------------------------

// mob slide---------
var mobSlide = function(){

	var storeBox = $('#storeBox');
	var storeBtn = storeBox.find('.store_btn');
	var stBtn = storeBtn.find('button');

	var storeIndi = storeBox.find('.store_indicator');
	var storeIndiLi = storeIndi.find('li');

	var storeImg = $('.store_container');
	var storeImgUl = storeImg.children('ul');
	var storeLi = storeImgUl.find('li');
	var timed = 700;


	var liLast = storeLi.eq(-1).clone(true);
	storeImgUl.prepend(liLast);
	storeLi = storeImgUl.find('li');
	var storeLiLen = storeLi.length;
	// console.log(storeLiLen);
	var liWidth = 100 / storeLiLen;
	storeImgUl.css({'width':storeLiLen * 100 + '%', transform:'translateX(-'+ liWidth + '%)'});
	storeLi.css({width:liWidth + '%'});
	// console.log(storeLi);

		
	var n = 0;
	var k = n;
  btnOk = true;
	// button
	stBtn.on('click', function(e){
		e.preventDefault();
		var clickIt = $(this)[0];
		k = n;

		if(clickIt === $('.next')[0] && btnOk){
			btnOk = false;
			// 다음버튼 클릭시
			n += 1;

			// 다음 버튼 클릭시 다음 marginLeft로 다음내용 노출
			storeImgUl.stop().animate({'marginLeft':n * -100 + '%'}, function(){
				if(n >= storeLiLen -2){
					n = -1;
					storeImgUl.stop().css({'marginLeft':n * -100 + '%'});
				}
				btnOk = true;
			});
		}else if(btnOk){
			btnOk = false;
			// 이전버튼 클릭시
			n -= 1;
		
			storeImgUl.stop().animate({'marginLeft':n * -100 + '%'}, function(){

			  if(n < 0){
					n = storeLiLen -2;
					storeImgUl.stop().css({'marginLeft':n * -100 + '%'});
				}
					btnOk = true;
			});
		}
	

		storeIndiLi.eq(n).siblings('li').removeClass('active');
		storeIndiLi.eq(n).addClass('active');
		});



	// indicator
	storeIndiLi.find('a').on('click', function(e){
		e.preventDefault();
		
		e.bubbles = false;
		
		if(btnOk){
			btnOk = false;
		  var clickIt = $(this).parent('li');
		  var itIndex = clickIt.index();
		  k = n;
		  n = itIndex;
  
		  storeImgUl.stop().animate({'marginLeft':n * -100 + '%'}, function(){
		  	btnOk = true;
		});

		storeIndiLi.removeClass('active');
		storeIndiLi.eq(n).addClass('active');
		}
	});



	// 자동 슬라이드 기능--------------
	var SetSlideInterval;
	var mySlideGo = function(){
		SetSlideInterval = setInterval(function(){
			storeBox.find('.next').trigger('click');
		}, timed*3);
  };

  var myslideStop = function(){
	clearInterval(SetSlideInterval);
	};

	mySlideGo();

	storeBox.on({mouseenter:myslideStop, mouseleave:mySlideGo});
};


// mob2 slide-----------------------------



var mob2Slide = function(){
var storeBox = $('#storeBox');
	var storeBtn = storeBox.find('.store_btn');
	var stBtn = storeBtn.find('button');

	var storeIndi = storeBox.find('.store_indicator');
	var storeIndiLi = storeIndi.find('li');

	var storeImg = $('.store_container');
	var storeImgUl = storeImg.children('ul');
	var storeLi = storeImgUl.find('li');
	var timed = 700;


	var liLast = storeLi.eq(-1).clone(true);
	storeImgUl.prepend(liLast);
	storeLi = storeImgUl.find('li');
	var storeLiLen = storeLi.length;
	// console.log(storeLiLen);
	var liWidth = 50 / storeLiLen;
	storeImgUl.css({'width':storeLiLen * 100 + '%', transform:'translateX(-'+ liWidth + '%)'});
	storeLi.css({width:liWidth + '%'});
	console.log(storeLi);

		
	var n = 0;
	var k = n;
  btnOk = true;
	// button
	stBtn.on('click', function(e){
		e.preventDefault();
		var clickIt = $(this)[0];
		k = n;

		if(clickIt === $('.next')[0] && btnOk){
			btnOk = false;
			// 다음버튼 클릭시
			n += 1;

			// 다음 버튼 클릭시 다음 marginLeft로 다음내용 노출
			storeImgUl.stop().animate({'marginLeft':n * -50 + '%'}, function(){
				if(n >= storeLiLen -2){
					n = -1;
					storeImgUl.stop().css({'marginLeft':n * -50 + '%'});
				}
				btnOk = true;
			});
		}else if(btnOk){
			btnOk = false;
			// 이전버튼 클릭시
			n -= 1;
		
			storeImgUl.stop().animate({'marginLeft':n * -50 + '%'}, function(){

			  if(n < 0){
					n = storeLiLen -2;
					storeImgUl.stop().css({'marginLeft':n * -50 + '%'});
				}
					btnOk = true;
			});
		}
	

		storeIndiLi.eq(n).siblings('li').removeClass('active');
		storeIndiLi.eq(n).addClass('active');
		});



	// indicator
	var indiBtnck = true;
	storeIndiLi.find('a').on('click', function(e){
		e.preventDefault();
		e.bubbles = false;
		// console.log(e);
		console.log(indiBtnck);
		  var clickIt = $(this).parent('li');
		  var itIndex = clickIt.index();
		  k = n;
			n = itIndex;
			
		if(indiBtnck){
			indiBtnck = false;
  
		  storeImgUl.stop().animate({'marginLeft':n * -50 + '%'}, function(){
		  	indiBtnck = true;
		 });

		storeIndiLi.removeClass('active');
		storeIndiLi.eq(n).addClass('active');
		}
	});



	// 자동 슬라이드 기능--------------
	var SetSlideInterval;
	var mySlideGo = function(){
		SetSlideInterval = setInterval(function(){
			storeBox.find('.next').trigger('click');
		}, timed*3);
  };

  var myslideStop = function(){
	clearInterval(SetSlideInterval);
	};

	mySlideGo();

	storeBox.on({mouseenter:myslideStop, mouseleave:mySlideGo});
};




//  tab slide-------------------------------------------------------------------

tabSlide = function (){
  var storeBox = $('#storeBox');
	var storeBtn = storeBox.find('.store_btn');
	var stBtn = storeBtn.find('button');

	var storeIndi = storeBox.find('.store_indicator');
	var storeIndiLi = storeIndi.find('li');

	var storeImg = $('.store_container');
	var storeImgUl = storeImg.children('ul');
	var storeLi = storeImgUl.find('li');
	var timed = 700;


	var liLast = storeLi.eq(-1).clone(true);
	storeImgUl.prepend(liLast);
	storeLi = storeImgUl.find('li');
	var storeLiLen = storeLi.length;
	// console.log(storeLiLen);
	var liWidth = 33 / storeLiLen;
	storeImgUl.css({'width':storeLiLen * 100 + '%', transform:'translateX(-'+ liWidth + '%)'});
	storeLi.css({width:liWidth + '%'});
	console.log(storeLi);

		
	var n = 0;
	var k = n;
  btnOk = true;
	// button
	stBtn.on('click', function(e){
		e.preventDefault();
		var clickIt = $(this)[0];
		k = n;

		if(clickIt === $('.next')[0] && btnOk){
			btnOk = false;
			// 다음버튼 클릭시
			n += 1;

			// 다음 버튼 클릭시 다음 marginLeft로 다음내용 노출
			storeImgUl.stop().animate({'marginLeft':n * -33 + '%'}, function(){
				if(n >= storeLiLen -2){
					n = -1;
					storeImgUl.stop().css({'marginLeft':n * -33 + '%'});
				}
				btnOk = true;
			});
		}else if(btnOk){
			btnOk = false;
			// 이전버튼 클릭시
			n -= 1;
		
			storeImgUl.stop().animate({'marginLeft':n * -33 + '%'}, function(){

			  if(n < 0){
					n = storeLiLen -2;
					storeImgUl.stop().css({'marginLeft':n * -33 + '%'});
				}
					btnOk = true;
			});
		}
	

		storeIndiLi.eq(n).siblings('li').removeClass('active');
		storeIndiLi.eq(n).addClass('active');
		});



	// indicator
	var indiBtnck = true;
	storeIndiLi.find('a').on('click', function(e){
		e.preventDefault();
		e.bubbles = false;
		// console.log(e);
		console.log(indiBtnck);
		  var clickIt = $(this).parent('li');
		  var itIndex = clickIt.index();
		  k = n;
			n = itIndex;
			
		if(indiBtnck){
			indiBtnck = false;
  
		  storeImgUl.stop().animate({'marginLeft':n * -33 + '%'}, function(){
		  	indiBtnck = true;
		 });

		storeIndiLi.removeClass('active');
		storeIndiLi.eq(n).addClass('active');
		}
	});



	// 자동 슬라이드 기능--------------
	var SetSlideInterval;
	var mySlideGo = function(){
		SetSlideInterval = setInterval(function(){
			storeBox.find('.next').trigger('click');
		}, timed*3);
  };

  var myslideStop = function(){
	clearInterval(SetSlideInterval);
	};

	mySlideGo();

	storeBox.on({mouseenter:myslideStop, mouseleave:mySlideGo});
};

// 하단메뉴 아코디언 ----------------------------------------------------------

 var accmenu = function(){
  var menuArea = $('.menu_area');
  var menuAreaDl  = menuArea.find('dl');
	var menuAreaDt = menuArea.find('dt');
	var menuAreaTitleLink = menuAreaDt.children('a');
	var menuContent = menuAreaDt.next('dd');
	var menuConLink  = menuContent.find('a');

	menuContent.hide();
 
	menuAreaTitleLink.on('click focus', function(e){
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

// ----------------------------------------------------------------

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





})(jQuery);