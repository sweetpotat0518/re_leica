// leica_lensmenu.js

(function($){

	var wrap = $('#wrap');
	wrap.wrap('<div class="site_wrap"></div>');
	$('.site_wrap').css({width:'100%', height:'auto', overflowX:'hidden' });
	

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
		// cameraBg.hide();
	 
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
			// $(this).find(cameraBg).stop().slideUp(timed);
			gnbTitle.removeClass('action');
			gnbContent.find('li').removeClass('action');
			// cameraBg.stop().slideUp();
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
		var searchBoxP = searchBox.children('p');
		var searchBoxImg = searchBox.children('i');
		var buttonImg = searchBtn.find('i');

		searchBoxImg.css({display:'none'});
		searchBoxP.css({display:'none'});
		
	
		searchBtn.on('click', function(e){
			e.preventDefault();
			searchBox.addClass('action');
			buttonImg.css({'display':'none'});
			searchBoxP.css({display:'block'});
			searchBoxImg.css({display:'block'});
		});
	
		var headBox = $('#headBox');
		var hT =  headBox.offset().top;
		
		$(document).on('scroll', function(){
			var docST = $(document).scrollTop(); // 스크롤의 위치 파악
			searchBox.removeClass('action');
			buttonImg.css({'display':'block'});
			searchBoxP.css({display:'none'});
			searchBoxImg.css({display:'none'});
		});
	
	
// ---------------------------------------------

// mob 기준 하단메뉴---------------------------------
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





		// 카메라 메뉴 모달 윈도우 js-----------------------------------
// mob 기준 모달 윈도우 js-------------------------------------
mobModal = function(){
	var thumList = [
		'l5.jpg',
		'l3.jpg',
		'l4.jpg',
		'l2.jpg',
		'l1.jpg',
		'l6.jpg',
		'l9.jpg',
		'l8.jpg',
		'l12.jpg',
		'l11.jpg',
		'l10.jpg',
		'l7.jpg'
	];
	var bigList = [
		'l5.jpg',
		'l3.jpg',
		'l4.jpg',
		'l2.jpg',
		'l1.jpg',
		'l6.jpg',
		'l9.jpg',
		'l8.jpg',
		'l12.jpg',
		'l11.jpg',
		'l10.jpg',
		'l7.jpg'
	];

	var thumUrl = '../img/view_lens/';
	var bigUrl = '../img/lens_big/';

	var galleryList = {
		thumUrl : thumUrl,
		bigUrl : bigUrl,
		thumList : thumList,
		bigList : bigList
	}



  var lensBox = $('.lensBox');
	var lensModal = $('.lens_modal');
	var lensModalBtn = lensModal.find('button');
	var lensBoxUl = lensBox.find('ul');

	var n = 0;
	var lensBoxLlLink = lensBoxUl.find('li').children('a');

	lensBoxLlLink.on('click', function(e){
		e.preventDefault();
		var itIndex = $(this).parent().index();
		n = itIndex;

		lensModal.find('.lens_big').css({backgroundImage:'url('+ bigUrl + galleryList.bigList[itIndex] +')', backgroundSize:'80%', backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat',});
	
		// fadeIn 을 하고 방향키로 다음이미지 넘기기
		lensModal.fadeIn(function(){
			$(window).on('keyup', function(evt){
				var keyCode = evt.keyCode;
				// 왼쪽 37, 오른쪽 39, 빠져나가기 27
				if(keyCode == 37){
					n -= 1;
					if(n < 0){
						n = galleryList.thumList.length-1
					}
					lensModal.find('.lens_big').css({backgroundImage:'url('+ bigUrl + galleryList.bigList[n] +')'});
				}else if(keyCode == 39){
					n += 1;
					if(n > galleryList.thumList.length-1){
						n = 0;
					}
					lensModal.find('.lens_big').css({backgroundImage:'url('+ bigUrl + galleryList.bigList[n] +')'});
				}else if(keyCode == 27){
					// 빠져 나가고 포커스
					lensModal.fadeOut(400, function(){
						lensBoxLlLink.eq(0).focus();
					});
				}

			});
		});
	});

	lensModalBtn.on('click', function(e){
		e.preventDefault();
		lensModal.fadeOut(400);
	});
};
	
	
	



	// 카메라 메뉴 모달 윈도우 js-----------------------------------
// pc 기준 모달 윈도우 js-------------------------------------
pcModal = function(){
	var thumList = [
		'l5.jpg',
		'l3.jpg',
		'l4.jpg',
		'l2.jpg',
		'l1.jpg',
		'l6.jpg',
		'l9.jpg',
		'l8.jpg',
		'l12.jpg',
		'l11.jpg',
		'l10.jpg',
		'l7.jpg'
	];
	var bigList = [
		'l5.jpg',
		'l3.jpg',
		'l4.jpg',
		'l2.jpg',
		'l1.jpg',
		'l6.jpg',
		'l9.jpg',
		'l8.jpg',
		'l12.jpg',
		'l11.jpg',
		'l10.jpg',
		'l7.jpg'
	];

	var thumUrl = '../img/view_lens/';
	var bigUrl = '../img/lens_big/';

	var galleryList = {
		thumUrl : thumUrl,
		bigUrl : bigUrl,
		thumList : thumList,
		bigList : bigList
	}



  var lensBox = $('.lensBox');
	var lensModal = $('.lens_modal');
	var lensModalBtn = lensModal.find('button');
	var lensBoxUl = lensBox.find('ul');


	var n = 0;
	var lensBoxLlLink = lensBoxUl.find('li').children('a');

	lensBoxLlLink.on('click', function(e){
		e.preventDefault();
		var itIndex = $(this).parent().index();
		n = itIndex;

		lensModal.find('.lens_big').css({backgroundImage:'url('+ bigUrl + galleryList.bigList[itIndex] +')', backgroundSize:'50%', backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat',});
	
		// fadeIn 을 하고 방향키로 다음이미지 넘기기
		lensModal.fadeIn(function(){
			$(window).on('keyup', function(evt){
				var keyCode = evt.keyCode;
				// 왼쪽 37, 오른쪽 39, 빠져나가기 27
				if(keyCode == 37){
					n -= 1;
					if(n < 0){
						n = galleryList.thumList.length-1
					}
					lensModal.find('.lens_big').css({backgroundImage:'url('+ bigUrl + galleryList.bigList[n] +')'});
				}else if(keyCode == 39){
					n += 1;
					if(n > galleryList.thumList.length-1){
						n = 0;
					}
					lensModal.find('.lens_big').css({backgroundImage:'url('+ bigUrl + galleryList.bigList[n] +')'});
				}else if(keyCode == 27){
					// 빠져 나가고 포커스
					lensModal.fadeOut(400, function(){
						lensBoxLlLink.eq(0).focus();
					});
				}

			});
		});
	});

	lensModalBtn.on('click', function(e){
		e.preventDefault();
		lensModal.fadeOut(400);
	});
};


	// 반응형 js---------------------------------------------



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
	mobModal();
	accmenu();
}else if(winW < 1024){ // 모바일2 환경
	mobGnb();
	mobModal();
	accmenu();
}else if(winW <= 1440){ // 태블릿 환경
	pcModal();
	pcAccmenu();
}else if(winW <= 1920){ // pc 환경
	pcModal();
	pcAccmenu();
}else{
	pcModal();
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