// leicamain_rwd.js

(function($){
	// 선택자
	var win = $(window);
	var headBox = $('#headBox');
	var gnbBox = $('#gnb');
	var gnbMenu = $('#gnbBox');
	var gnbBtn = gnbMenu.find('.gnb_view_btn');
	var gnbList = gnbMenu.find('.gnb_list');

	// 다비아스 환경
	var winW = win.width(); // 갖춰진 사이즈 확인

	var mob700 = function(){
		// 버튼 클릭
		gnbBtn.on('click' ,['button'], function(e){
			e.preventDefault();
			gnbList.stop().slideToggle();
		});
	};
	
	var tablet1400 = function(){
		gnbList.on('mouseenter', function(){
			$(this).addClass('action');
		});

		headBox.on('mouseleave', function(){
			gnbList.removeClass('action');
		});
	};

	var pcFull = function(){
		gnbList.on('mouseenter', function(){
			gnbList.addClass('action');
		});
		gnbList.on('mouseleave', function(){
			gnbList.removeClass('action');
		});
	};

	// --------------------------------------------------
	// 디바이스 사이즈 체크
	// 위에서 변수처리를 하고 간단하게 if문으로 변수이름을 적어서 기능을 수행하게 한다.
	if(winW <= 700){ // 모바일 환경
		mob700();
	}else if(winW <= 1400){ // 태블릿 환경
		tablet1400();
	}else{
		pcFull(); // pc 환경
	}


	// ---------------------------------------------------
	// 모바일에서 메뉴가 나오고 크기를 늘리면 태블릿 기준에서 메뉴가 사라진다.
	// 그래서 새로고침을 해서 늘어난 크기에서도 메뉴가 나올수 있게 해야한다.

	win.on('resize', function(){
		var nowWinW = win.width(); // 변경된 사이즈 확인
		var deviceWidthCheck = winW !== nowWinW; // 기존 가로값과, 지금의 가로값이 변경되었다면
		if(deviceWidthCheck){ // 참이냐, 거짓이냐를 따지고
			location.reload(); // 참이면 새로고침을 해라
			window.location
		}
	});




})(jQuery);