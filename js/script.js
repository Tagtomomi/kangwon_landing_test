// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // 로고 클릭 시 맨 위로 스크롤
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        logoContainer.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // 모바일 메뉴가 열려있으면 닫기
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
    
    // 네비게이션 메뉴 스크롤 이동
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // 모바일 메뉴가 열려있으면 닫기
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });
    
    // Smooth scroll for other anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not(.nav-link[data-section]):not(.sec6-campus-link)');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Scroll button functionality
    const scrollBtn = document.querySelector('.sec1-scroll-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function() {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Header scroll effect - change header style when scrolling past sec1
    const header = document.querySelector('.header');
    const sec1 = document.querySelector('.sec1');
    
    function handleScroll() {
        if (sec1) {
            const sec1Bottom = sec1.offsetTop + sec1.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            
            if (scrollPosition > sec1Bottom) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    // Section 2 animation on scroll - text lines appear one by one from bottom
    const sec2 = document.querySelector('.sec2');
    const sec2Content = document.querySelector('.sec2-content');
    const sec2TextLine1 = document.querySelector('.sec2-text-line-1');
    const sec2TextLine2 = document.querySelector('.sec2-text-line-2');
    const sec2SubLine1 = document.querySelector('.sec2-sub-line-1');
    const sec2SubLine2 = document.querySelector('.sec2-sub-line-2');
    
    let sec2AnimationTriggered = false;
    
    function handleSec2Animation() {
        if (sec2 && sec2Content) {
            const sec2Top = sec2.offsetTop;
            const sec2Height = sec2.offsetHeight;
            const triggerPoint = sec2Top - window.innerHeight * 0.5;
            
            if (window.scrollY >= triggerPoint && window.scrollY < sec2Top + sec2Height) {
                sec2Content.classList.add('visible');
                
                if (!sec2AnimationTriggered) {
                    sec2AnimationTriggered = true;
                    
                    // 1. 첫 번째 줄 먼저 나타남
                    setTimeout(() => {
                        if (sec2TextLine1) {
                            sec2TextLine1.classList.add('visible');
                        }
                    }, 200);
                    
                    // 2. 두 번째 줄 약간의 딜레이 후 나타남
                    setTimeout(() => {
                        if (sec2TextLine2) {
                            sec2TextLine2.classList.add('visible');
                        }
                    }, 500);
                    
                    // 3. 세 번째 줄 (첫 번째 서브텍스트)
                    setTimeout(() => {
                        if (sec2SubLine1) {
                            sec2SubLine1.classList.add('visible');
                        }
                    }, 800);
                    
                    // 4. 네 번째 줄 (두 번째 서브텍스트)
                    setTimeout(() => {
                        if (sec2SubLine2) {
                            sec2SubLine2.classList.add('visible');
                        }
                    }, 1100);
                }
            } else if (window.scrollY < triggerPoint) {
                // 스크롤이 위로 올라가면 애니메이션 리셋
                sec2AnimationTriggered = false;
                sec2Content.classList.remove('visible');
                if (sec2TextLine1) sec2TextLine1.classList.remove('visible');
                if (sec2TextLine2) sec2TextLine2.classList.remove('visible');
                if (sec2SubLine1) sec2SubLine1.classList.remove('visible');
                if (sec2SubLine2) sec2SubLine2.classList.remove('visible');
            }
        }
    }
    
    window.addEventListener('scroll', handleSec2Animation);
    handleSec2Animation(); // Check initial state
    
    // 섹션2 스크롤 막기 제거 - 각 섹션이 100vh로 고정되어 자연스럽게 스크롤됨
    
    // Section 5 animation on scroll - text appears from bottom
    const sec5 = document.querySelector('.sec5');
    const sec5Text = document.querySelector('.sec5-text');
    
    function handleSec5Animation() {
        if (sec5 && sec5Text) {
            const sec5Top = sec5.offsetTop;
            const sec5Height = sec5.offsetHeight;
            // 모바일에서는 트리거 포인트를 조금 더 일찍 설정
            const isMobile = window.innerWidth <= 769;
            const triggerRatio = isMobile ? 0.3 : 0.5;
            const triggerPoint = sec5Top - window.innerHeight * triggerRatio;
            
            if (window.scrollY >= triggerPoint && window.scrollY < sec5Top + sec5Height) {
                sec5Text.classList.add('visible');
            } else if (window.scrollY < triggerPoint) {
                sec5Text.classList.remove('visible');
            }
        }
    }
    
    window.addEventListener('scroll', handleSec5Animation);
    handleSec5Animation(); // Check initial state
    
    // Section 3 scroll-based animation
    const sec3 = document.querySelector('.sec3-scrollfx');
    const sec3Content = document.querySelector('.sec3-scrollfx .sec3-content');
    const campuses = document.querySelectorAll('.sec3-scrollfx .sec3-campus');
    const flashOverlay = document.querySelector('.sec3-flash-overlay');
    const textOverlay = document.querySelector('.sec3-text-overlay');
    const sec3Title = document.querySelector('.sec3-scrollfx .sec3-title');
    const sec3Subtitle = document.querySelector('.sec3-scrollfx .sec3-subtitle');
    
    // 모바일 버전 Section 3
    const sec3Mobile = document.querySelector('.sec3-mobile');
    const sec3MobileContent = document.querySelector('.sec3-mobile-content');
    const campusesMobile = document.querySelectorAll('.sec3-mobile-campus');
    const flashOverlayMobile = document.querySelector('.sec3-mobile-flash-overlay');
    const textOverlayMobile = document.querySelector('.sec3-mobile-text-overlay');
    const sec3MobileTitle = document.querySelector('.sec3-mobile-title');
    const sec3MobileSubtitle = document.querySelector('.sec3-mobile-subtitle');
    
    // 스크롤 기반 애니메이션을 위한 설정
    const SCROLL_RANGE = 2000; // 애니메이션이 진행될 스크롤 범위 (픽셀)
    
    // 가상 스크롤 progress (실제 스크롤은 막고 이 값으로 애니메이션 제어)
    let virtualScrollProgress = 0;
    let isSec3Active = false;
    let lockedScrollPosition = 0;
    let touchStartY = 0;
    let lastTouchY = 0;
    
    // 애니메이션 완료 상태 추적 (배경 전환 + 텍스트 오버레이 완료 여부)
    let isAnimationFullyComplete = false;
    let isSec3PermanentlyComplete = false; // 섹션 3이 완전히 완료되어 더 이상 활성화되지 않도록
    
    // 배경 이미지 프리로딩 (렉 방지)
    const backgroundImage = new Image();
    backgroundImage.src = 'images/sec3/sec_vison_bg.png';
    
    // 모바일 감지
    const isMobile = window.innerWidth <= 769;
    
    // 애니메이션 타이밍 (밀리초)
    const DURATIONS = {
        fadeIn: 1200,          // 각 카드 페이드 인 시간: 1.2초 (더 천천히)
        fadeInDelay: 300,      // 각 카드 간 딜레이: 0.3초
        textDelay: 400,        // 텍스트 시작 지연: 0.4초
        textTitle: 800,        // 타이틀 나타남: 0.8초
        textSubtitle: 800,     // 서브타이틀 나타남: 0.8초
        textCompleteWait: 2000, // 텍스트 완료 후 대기: 2초
        cardMerge: 3000,       // 카드 합치기: 4초 (2x2 배치를 더 오래 보여주기 위해 증가)
        textHide: 300,         // 텍스트 사라짐: 0.3초
        whiteTransition: 200,  // 화이트로 변함: 0.6초 (합쳐지는 중간부터 시작)
        mergeToCircle: 500,    // 하나의 화이트 원으로 합쳐짐: 0.5초 (커지는 시간)
        whiteFadeOut: 300,     // 하얀색 페이드아웃: 0.3초 (유지 시간 짧게)
        backgroundTransition: 800 // 배경 전환: 0.8초
    };
    
    // 캠퍼스 페이드인 순서: 춘천(0), 삼석(2), 강릉(1), 원주(3)
    const CAMPUS_FADE_ORDER = [0, 2, 1, 3]; // HTML 순서를 원하는 순서로 매핑
    const CAMPUS_FADE_DELAYS = [0, 300, 600, 900]; // 각 캠퍼스의 딜레이 (밀리초)
    
    // 모바일용 타이밍 (텍스트 먼저, 그 다음 캠퍼스)
    const MOBILE_DURATIONS = {
        textTitle: 800,        // 타이틀 나타남: 0.8초
        textSubtitle: 800,     // 서브타이틀 나타남: 0.8초
        textCompleteWait: 2000, // 텍스트 완료 후 대기: 2초 (캠퍼스가 나타나기 전)
        campusGridFadeIn: 2100, // 캠퍼스 2x2 그리드로 나타남: 2.1초 (원주 900ms 딜레이 + 1200ms 페이드인)
        campusGridWait: 2000,  // 2x2 그리드 유지: 2초
        cardMerge: 100,       // 카드 합치기: 4초
        textHide: 300,         // 텍스트 사라짐: 0.3초
        whiteTransition: 600,  // 화이트로 변함: 0.6초
        mergeToCircle: 500,    // 하나의 화이트 원으로 합쳐짐: 0.5초 (커지는 시간)
        whiteFadeOut: 300,     // 하얀색 페이드아웃: 0.3초 (유지 시간 짧게)
        backgroundTransition: 800 // 배경 전환: 0.8초
    };
    
    // 총 애니메이션 시간 계산
    let totalDuration;
    if (isMobile) {
        totalDuration = MOBILE_DURATIONS.textTitle + MOBILE_DURATIONS.textSubtitle + 
                       MOBILE_DURATIONS.textCompleteWait + MOBILE_DURATIONS.campusGridFadeIn + 
                       MOBILE_DURATIONS.campusGridWait + MOBILE_DURATIONS.cardMerge + 
                       MOBILE_DURATIONS.textHide + MOBILE_DURATIONS.whiteTransition + 
                       MOBILE_DURATIONS.mergeToCircle + MOBILE_DURATIONS.whiteFadeOut + 
                       MOBILE_DURATIONS.backgroundTransition;
    } else {
        // 마지막 캠퍼스 페이드인 완료 시간 계산 (춘천: 0ms, 삼석: 300ms, 강릉: 600ms, 원주: 900ms + 600ms 페이드인)
        const lastCampusFadeInEnd = Math.max(...CAMPUS_FADE_DELAYS) + DURATIONS.fadeIn;
        totalDuration = lastCampusFadeInEnd + DURATIONS.textDelay + DURATIONS.textTitle + DURATIONS.textSubtitle + 
                       DURATIONS.textCompleteWait + DURATIONS.cardMerge + DURATIONS.textHide + 
                       DURATIONS.whiteTransition + DURATIONS.mergeToCircle + DURATIONS.whiteFadeOut + DURATIONS.backgroundTransition;
    }
    
    // 섹션 3 활성화 여부 확인
    function checkSec3Active() {
        // 모바일 버전 체크
        if (isMobile && sec3Mobile) {
            if (isSec3PermanentlyComplete) {
                return false;
            }
            const sec3MobileTop = sec3Mobile.offsetTop;
            const scrollY = window.scrollY;
            const headerHeight = header ? header.offsetHeight : 0;
            return scrollY >= sec3MobileTop - headerHeight && scrollY < sec3MobileTop + sec3Mobile.offsetHeight;
        }
        
        // PC 버전 체크
        if (!sec3) return false;
        
        // 이미 완전히 완료된 경우 다시 활성화하지 않음
        if (isSec3PermanentlyComplete) {
            return false;
        }
        
        const sec3Top = sec3.offsetTop;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const headerHeight = header ? header.offsetHeight : 0;
        
        // PC: 섹션 3이 화면 세로 중앙에 도달했는지 확인
        // 섹션의 상단이 화면 중앙(뷰포트 하단에서 windowHeight * 0.5 지점)에 도달했을 때
        const sec3Center = sec3Top + (sec3.offsetHeight * 0.5);
        const viewportCenter = scrollY + windowHeight * 0.5;
        
        // 섹션 3의 중앙이 뷰포트 중앙 근처에 있을 때 활성화 (약간의 여유 공간)
        const threshold = windowHeight * 0.2; // 20% 여유
        return Math.abs(sec3Center - viewportCenter) < threshold && 
               scrollY < sec3Top + sec3.offsetHeight;
    }
    
    // 스크롤 잠금/해제 함수
    function lockScroll() {
        if (isSec3Active && lockedScrollPosition !== undefined) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            window.scrollTo(0, lockedScrollPosition);
        }
    }
    
    function unlockScroll() {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }
    
    // 가상 스크롤 progress 계산
    function getSec3ScrollProgress() {
        return Math.max(0, Math.min(1, virtualScrollProgress));
    }
    
    function animateSec3() {
        // 모바일 버전 처리
        if (isMobile && sec3Mobile) {
            if (!sec3MobileContent || campusesMobile.length !== 4) {
                return;
            }
            return animateSec3Mobile();
        }
        
        // PC 버전 처리
        if (!sec3 || !sec3Content || campuses.length !== 4) {
            return;
        }
        
        // 스크롤 위치에서 progress 계산 (0 ~ 1)
        const progress = getSec3ScrollProgress();
        
        // progress를 시간 단위로 변환 (기존 로직과 호환성을 위해)
        const elapsed = progress * totalDuration;
        
        let fadeInProgress, textStartTime, textEndTime, textProgress, mergeStartTime, mergeEndTime, campusGridStartTime, campusGridEndTime;
        
        if (isMobile) {
            // 모바일: 텍스트 먼저 → 캠퍼스 2x2 그리드 → 합쳐지는 효과
            fadeInProgress = 0; // 모바일에서는 캠퍼스가 나중에 나타남
            
            // 1. 텍스트 나타남 (0 ~ textTitle + textSubtitle)
            textStartTime = 0;
            textEndTime = MOBILE_DURATIONS.textTitle + MOBILE_DURATIONS.textSubtitle;
            textProgress = elapsed < textStartTime ? 0 : 
                          elapsed >= textEndTime ? 1 : 
                          (elapsed - textStartTime) / (textEndTime - textStartTime);
            
            // 2. 텍스트 완료 후 대기 (2초)
            const textWaitEndTime = textEndTime + MOBILE_DURATIONS.textCompleteWait;
            
            // 3. 캠퍼스 2x2 그리드로 나타남
            campusGridStartTime = textWaitEndTime;
            campusGridEndTime = campusGridStartTime + MOBILE_DURATIONS.campusGridFadeIn;
            const campusGridWaitEndTime = campusGridEndTime + MOBILE_DURATIONS.campusGridWait;
            
            // 4. 합쳐지는 애니메이션 시작 (2x2 그리드 유지 후)
            mergeStartTime = campusGridWaitEndTime;
            mergeEndTime = mergeStartTime + MOBILE_DURATIONS.cardMerge;
        } else {
            // PC: 순차적 페이드인 (춘천 → 삼석 → 강릉 → 원주)
            // 마지막 캠퍼스 페이드인 완료 시간
            const lastCampusFadeInEnd = Math.max(...CAMPUS_FADE_DELAYS) + DURATIONS.fadeIn;
            fadeInProgress = 1; // 개별 페이드인은 각 캠퍼스마다 별도로 처리
            
            // 2. 텍스트 나타남 (마지막 캠퍼스 페이드인 완료 후 + textDelay)
            textStartTime = lastCampusFadeInEnd + DURATIONS.textDelay;
            textEndTime = textStartTime + DURATIONS.textTitle + DURATIONS.textSubtitle;
            textProgress = elapsed < textStartTime ? 0 : 
                          elapsed >= textEndTime ? 1 : 
                          (elapsed - textStartTime) / (textEndTime - textStartTime);
            
            // 3. 합쳐지는 애니메이션 시작 (텍스트 완료 + 대기 후)
            mergeStartTime = textEndTime + DURATIONS.textCompleteWait;
            mergeEndTime = mergeStartTime + DURATIONS.cardMerge;
            campusGridStartTime = 0;
            campusGridEndTime = 0;
        }
        const rawMergeProgress = elapsed < mergeStartTime ? 0 : 
                                 elapsed >= mergeEndTime ? 1 : 
                                 (elapsed - mergeStartTime) / (mergeEndTime - mergeStartTime);
        
        // easing function을 사용하여 자연스러운 곡선 애니메이션
        // easeOutCubic: t * (2 - t) * t 또는 더 부드러운 easeInOutCubic 사용
        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }
        const mergeProgress = easeInOutCubic(rawMergeProgress);
        
        // overlay opacity: 30% → 90%로 자연스럽게 증가
        // easing 함수를 사용하여 부드럽게 증가
        function easeOutQuad(t) {
            return t * (2 - t);
        }
        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }
        
        // mergeProgress에 따라 부드럽게 30% → 90%로 증가
        // 초반에는 천천히, 중반부터 빠르게 증가하도록 easing 적용
        const easedProgress = easeInOutQuad(mergeProgress);
        const overlayOpacity = 0.3 + (0.6 * easedProgress); // 30% → 90%로 부드럽게 증가
        
        // 70% 도달 시 캠퍼스 이름 텍스트 숨기기
        const shouldHideCampusInfo = overlayOpacity >= 0.7;
        
        // 4. 화이트로 변하기 시작 (원이 겹치기 시작하는 중간 지점부터, 서서히 강렬해지게)
        const whiteStartProgress = 0.2; // mergeProgress 20% 지점부터 화이트로 변하기 시작 (더 일찍 시작)
        const cardMergeDuration = isMobile ? MOBILE_DURATIONS.cardMerge : DURATIONS.cardMerge;
        const whiteStartTime = mergeStartTime + (cardMergeDuration * whiteStartProgress);
        const whiteEndTime = mergeEndTime; // 합쳐지기가 완료될 때까지
        // 서서히 강렬해지도록 부드러운 easing 적용
        const rawWhiteProgress = mergeProgress < whiteStartProgress ? 0 : 
                                 mergeProgress >= 1 ? 1 : 
                                 (mergeProgress - whiteStartProgress) / (1 - whiteStartProgress);
        // easeInOutCubic을 사용하여 서서히 강렬해지게 (초반은 천천히, 중반부터 빠르게, 후반은 다시 천천히)
        // 이미 위에서 정의된 easeInOutCubic 함수 사용
        const whiteProgress = easeInOutCubic(rawWhiteProgress);
        
        // 5. 텍스트 사라짐 (mergeProgress 1.0에 도달한 후)
        const textHideDuration = isMobile ? MOBILE_DURATIONS.textHide : DURATIONS.textHide;
        const textHideStartTime = mergeEndTime;
        const textHideEndTime = textHideStartTime + textHideDuration;
        const textHideProgress = elapsed < textHideStartTime ? 0 : 
                                 elapsed >= textHideEndTime ? 1 : 
                                 (elapsed - textHideStartTime) / (textHideEndTime - textHideStartTime);
        
        // 6. 하나의 화이트 원으로 합쳐짐 (텍스트 사라진 후)
        const mergeToCircleDuration = isMobile ? MOBILE_DURATIONS.mergeToCircle : DURATIONS.mergeToCircle;
        const mergeCircleStartTime = textHideEndTime;
        const mergeCircleEndTime = mergeCircleStartTime + mergeToCircleDuration;
        const rawMergeCircleProgress = elapsed < mergeCircleStartTime ? 0 : 
                                      elapsed >= mergeCircleEndTime ? 1 : 
                                      (elapsed - mergeCircleStartTime) / (mergeCircleEndTime - mergeCircleStartTime);
        // easing 함수를 사용하여 원이 나타나는 속도는 빠르게, 커지는 속도는 조금 느리게
        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }
        // 원이 나타나는 속도는 빠르게 (opacity용)
        const mergeCircleProgress = easeOutCubic(rawMergeCircleProgress);
        
        // 크기가 커지는 속도는 조금 느리게 (easeInOutQuad 사용)
        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }
        const sizeProgress = easeInOutQuad(rawMergeCircleProgress);
        
        // 7. 하얀색 페이드아웃 (화이트 원이 완전히 커진 후)
        const whiteFadeOutDuration = isMobile ? MOBILE_DURATIONS.whiteFadeOut : DURATIONS.whiteFadeOut;
        const whiteFadeOutStartTime = mergeCircleEndTime;
        const whiteFadeOutEndTime = whiteFadeOutStartTime + whiteFadeOutDuration;
        const whiteFadeOutProgress = elapsed < whiteFadeOutStartTime ? 0 : 
                                    elapsed >= whiteFadeOutEndTime ? 1 : 
                                    (elapsed - whiteFadeOutStartTime) / (whiteFadeOutEndTime - whiteFadeOutStartTime);
        
        // 8. 배경 전환 (하얀색 페이드아웃과 동시에 시작)
        const backgroundTransitionDuration = isMobile ? MOBILE_DURATIONS.backgroundTransition : DURATIONS.backgroundTransition;
        const backgroundTransitionStartTime = whiteFadeOutStartTime;
        const backgroundTransitionEndTime = backgroundTransitionStartTime + backgroundTransitionDuration;
        const backgroundTransitionProgress = elapsed < backgroundTransitionStartTime ? 0 : 
                                           elapsed >= backgroundTransitionEndTime ? 1 : 
                                           (elapsed - backgroundTransitionStartTime) / (backgroundTransitionEndTime - backgroundTransitionStartTime);
        
        // 배지 페이드아웃 (mergeCircleProgress가 시작될 때부터 페이드아웃 시작)
        const badgeFadeOutStartTime = mergeCircleStartTime;
        const badgeFadeOutDuration = mergeToCircleDuration + whiteFadeOutDuration; // 원이 합쳐지는 동안 페이드아웃
        const badgeFadeOutEndTime = badgeFadeOutStartTime + badgeFadeOutDuration;
        const badgeFadeOutProgress = elapsed < badgeFadeOutStartTime ? 0 : 
                                     elapsed >= badgeFadeOutEndTime ? 1 : 
                                     (elapsed - badgeFadeOutStartTime) / (badgeFadeOutEndTime - badgeFadeOutStartTime);
        
        // 카드 페이드 인 + 둥둥 떠오름
        campuses.forEach((campus, index) => {
            const initialTops = [131, 131, 586.10, 586.10];
            const contentHeight = sec3Content.offsetHeight;
            const centerTopPx = contentHeight * 0.5;
            // 모바일에서는 춘천 캠퍼스의 top을 0으로 설정
            const initialTop = isMobile ? 0 : initialTops[index];
            
            let campusOpacity = 0;
            let translateXValue, translateY, rotation = 0;
            
            if (isMobile) {
                // 모바일: 순차적 페이드인 (춘천 → 삼석 → 강릉 → 원주)
                // 캠퍼스 순서: 춘천(0), 삼석(2), 강릉(1), 원주(3)
                const campusOrderIndex = CAMPUS_FADE_ORDER.indexOf(index);
                const campusFadeDelay = CAMPUS_FADE_DELAYS[campusOrderIndex] || 0;
                
                // 텍스트 완료 후 캠퍼스가 나타나기 시작
                const textEndTime = MOBILE_DURATIONS.textTitle + MOBILE_DURATIONS.textSubtitle;
                const textWaitEndTime = textEndTime + MOBILE_DURATIONS.textCompleteWait;
                const campusFadeStartTime = textWaitEndTime + campusFadeDelay;
                const campusFadeEndTime = campusFadeStartTime + DURATIONS.fadeIn;
                
                // 각 캠퍼스의 개별 페이드인 진행도 계산
                let individualFadeProgress = 0;
                if (elapsed < campusFadeStartTime) {
                    individualFadeProgress = 0;
                } else if (elapsed >= campusFadeEndTime) {
                    individualFadeProgress = 1;
                } else {
                    individualFadeProgress = (elapsed - campusFadeStartTime) / DURATIONS.fadeIn;
                }
                
                // 텍스트 위치 계산 (모바일에서 텍스트는 top: 120px에 위치)
                // CSS 기준: top: 120px, badge(40px) + gap(17px) + title(42px) + gap(17px) + subtitle(28px) = 144px
                // 텍스트 하단: 120 + 144 = 264px
                const textTop = 120;
                const textHeight = 144; // badge + gaps + title + subtitle
                const textBottomY = textTop + textHeight; // 텍스트 하단
                const textToCampusGap = 20; // 텍스트와 캠퍼스 사이 간격
                
                // 모바일 캠퍼스 시작 위치 (텍스트 바로 밑)
                // 춘천과 강릉: 텍스트 바로 밑
                // 삼척과 원주: 춘천 강릉 바로 아래 (거의 붙여서)
                const chuncheonStartPercent = -60; // -60%
                const chuncheonStartPx = -85; // -85px
                const gridGap = 20; // 캠퍼스 간 간격 (가로)
                const verticalGap = 0; // 캠퍼스 간 간격 (세로, 바로 아래)
                
                const campusWidth = 130; // 이미지 너비
                const campusHeight = 130; // 이미지 높이
                
                // 텍스트 하단 기준으로 캠퍼스 위치 계산
                const firstRowTop = textBottomY + textToCampusGap; // 춘천, 강릉 위치
                const secondRowTop = firstRowTop + campusHeight + verticalGap; // 삼척, 원주 위치 (바로 아래)
                
                // 각 캠퍼스의 초기 위치 (텍스트 기준)
                const mobileStartPositions = [
                    { percent: chuncheonStartPercent, px: chuncheonStartPx, y: firstRowTop },  // chuncheon(0): 첫 번째 줄 왼쪽
                    { percent: chuncheonStartPercent, px: chuncheonStartPx + campusWidth + gridGap, y: firstRowTop },  // gangneung(1): 첫 번째 줄 오른쪽
                    { percent: chuncheonStartPercent, px: chuncheonStartPx, y: secondRowTop },  // samcheok(2): 두 번째 줄 왼쪽
                    { percent: chuncheonStartPercent, px: chuncheonStartPx + campusWidth + gridGap, y: secondRowTop }  // wonju(3): 두 번째 줄 오른쪽
                ];
                
                const startPos = mobileStartPositions[index];
                
                if (elapsed < mergeStartTime) {
                    // 초기 위치 유지 (텍스트 바로 밑)
                    translateXValue = `calc(${startPos.percent}% + ${startPos.px}px)`;
                    translateY = startPos.y;
                    campusOpacity = individualFadeProgress;
                } else {
                    // 합쳐지는 애니메이션 시작
                    // 초기 위치에서 화면 중앙으로 합쳐지는 애니메이션
                    const adjustedProgress = Math.min(1, mergeProgress);
                    
                    // X축: 초기 위치에서 중앙(-50%)으로 이동
                    const finalPercent = -50; // 최종 중앙 위치
                    const finalPx = 0; // 최종 중앙 위치 (px)
                    const currentPercent = startPos.percent + ((finalPercent - startPos.percent) * adjustedProgress);
                    const currentPx = startPos.px + ((finalPx - startPos.px) * adjustedProgress);
                    
                    // Y축: 초기 위치에서 중앙으로 이동
                    const initialY = startPos.y;
                    const finalCenterY = contentHeight * 0.5;
                    const centerY = initialY + (finalCenterY - initialY) * adjustedProgress;
                    
                    translateXValue = `calc(${currentPercent}% + ${currentPx}px)`;
                    translateY = centerY;
                    campusOpacity = individualFadeProgress;
                }
            } else {
            // PC: 순차적 페이드인 (둥둥 효과 제거)
            // 캠퍼스 순서: 춘천(0), 삼석(2), 강릉(1), 원주(3)
            const campusOrderIndex = CAMPUS_FADE_ORDER.indexOf(index);
            const campusFadeDelay = CAMPUS_FADE_DELAYS[campusOrderIndex] || 0;
            const campusFadeStartTime = campusFadeDelay;
            const campusFadeEndTime = campusFadeStartTime + DURATIONS.fadeIn;
            
            // 각 캠퍼스의 개별 페이드인 진행도 계산
            let individualFadeProgress = 0;
            if (elapsed < campusFadeStartTime) {
                individualFadeProgress = 0;
            } else if (elapsed >= campusFadeEndTime) {
                individualFadeProgress = 1;
            } else {
                individualFadeProgress = (elapsed - campusFadeStartTime) / DURATIONS.fadeIn;
            }
            
            // translateX 계산 (자연스러운 곡선 경로를 위해 각 카드마다 약간씩 다른 easing 적용)
            const easingOffsets = [0, 0.05, 0.03, 0.08]; // 각 카드마다 약간씩 다른 타이밍
            const adjustedProgress = Math.min(1, mergeProgress + easingOffsets[index]);
            
            if (index === 0 || index === 3) {
                // 왼쪽 카드들 (chuncheon, wonju): -150% - 200px → -50%
                const currentPercent = -150 + (100 * adjustedProgress);
                const currentPx = 200 * (1 - adjustedProgress);
                translateXValue = `calc(${currentPercent}% - ${currentPx}px)`;
            } else {
                // 오른쪽 카드들 (gangneung, samcheok): 50% + 200px → -50%
                const currentPercent = 50 - (100 * adjustedProgress);
                const currentPx = 200 * (1 - adjustedProgress);
                translateXValue = `calc(${currentPercent}% + ${currentPx}px)`;
            }
            
            // translateY 계산 (자연스러운 곡선을 위해 약간의 부드러운 움직임 추가)
            // 각 카드마다 약간씩 다른 Y offset을 줘서 더 자연스럽게
            const yEasingOffsets = [0, 0.02, -0.02, 0.04];
            const yAdjustedProgress = Math.min(1, mergeProgress + yEasingOffsets[index]);
            const mergeY = (centerTopPx - initialTop) * yAdjustedProgress;
            
            // 합쳐질 때 약간의 곡선 효과를 위한 추가 Y offset (시작과 끝에서는 작고 중간에 크게)
            const curveOffset = Math.sin(mergeProgress * Math.PI) * 10; // sin 곡선으로 약간의 상하 움직임
            translateY = mergeY + curveOffset;
            
            campusOpacity = individualFadeProgress;
            }
            
            // mergeCircleProgress가 있을 때는 transform을 나중에 설정하므로 여기서는 설정하지 않음
            if (mergeCircleProgress === 0) {
                campus.style.transform = `translateX(${translateXValue}) translateY(${translateY}px) rotate(${rotation}deg)`;
            }
            campus.style.opacity = campusOpacity;
            
            // overlay background opacity 제어 및 디자인 변경
            const overlay = campus.querySelector('.sec3-campus-overlay');
            const imageWrapper = campus.querySelector('.sec3-campus-image-wrapper');
            const campusInfo = campus.querySelector('.sec3-campus-info');
            const campusName = campus.querySelector('.sec3-campus-name');
            
                // mergeProgress가 0보다 크면 (이동 시작하면) 새 디자인 적용
                if (mergeProgress > 0) {
                    // 각 학교의 고유 색상 정의
                    const campusColors = [
                        [26, 88, 175],   // chuncheon - 파란색
                        [23, 201, 255],  // gangneung - 하늘색
                        [255, 106, 32],  // samcheok - 주황색
                        [74, 214, 171]   // wonju - 청록색
                    ];
                    const [baseR, baseG, baseB] = campusColors[index];
                    
                    // whiteProgress를 가장 먼저 체크하여 4개 원이 합쳐지기 전에 하얀색 효과 시작
                    // mergeProgress 20%부터 하얀색 효과 시작 (원이 겹치기 시작하는 중간 지점)
                    if (whiteProgress > 0) {
                        // whiteProgress에 따라 각 색상에서 하얀색으로 점진적 변환 (서서히 강렬해지게)
                        // whiteProgress를 사용하여 부드럽게 하얀색으로 변환
                        const glowR = Math.round(baseR + (255 - baseR) * whiteProgress);
                        const glowG = Math.round(baseG + (255 - baseG) * whiteProgress);
                        const glowB = Math.round(baseB + (255 - baseB) * whiteProgress);
                        
                        // overlay에 하얀빛 효과 (서서히 강렬해지게)
                        // overlayOpacity는 이미 30% → 90%로 증가하고 있으므로, whiteProgress에 따라 추가로 증가
                        // 거의 색 다 덮을 정도로 (0.9 → 0.98 정도)
                        const additionalOpacity = whiteProgress * 0.08; // 추가로 8% 증가하여 거의 덮을 정도로
                        const glowOpacity = Math.min(0.98, overlayOpacity + additionalOpacity);
                        overlay.style.transition = 'background 0.3s ease-out'; // 부드럽게
                        overlay.style.background = `rgba(${glowR}, ${glowG}, ${glowB}, ${glowOpacity})`;
                        
                        // blur와 box-shadow로 하얀빛 효과 (서서히 강렬해지게)
                        if (imageWrapper) {
                            // blur: 0 → 50px로 서서히 증가 (부드럽게)
                            const glowBlur = whiteProgress * 50; // 0 → 50px로 선형 증가
                            imageWrapper.style.filter = `blur(${glowBlur}px)`;
                            imageWrapper.style.transition = 'filter 0.3s ease-out'; // 부드럽게
                            
                            // 하얀빛 box-shadow 효과 (서서히 강해짐)
                            const glowShadowIntensity = 0.8 + (whiteProgress * 0.4); // 0.8 → 1.2로 서서히 증가
                            const glowShadowBlur = 100 + (whiteProgress * 50); // 100 → 150px로 서서히 증가
                            imageWrapper.style.boxShadow = `0px 0px ${glowShadowBlur}px rgba(${glowR}, ${glowG}, ${glowB}, ${glowShadowIntensity})`;
                            imageWrapper.style.transition = 'box-shadow 0.3s ease-out'; // 부드럽게
                        }
                    } else if (mergeCircleProgress > 0) {
                        // mergeCircleProgress가 있으면 적용 (4개 원이 하나로 합쳐진 후)
                        // mergeCircleProgress에 따라 색상을 하얀색으로 변환
                        const whiteBlend = mergeCircleProgress;
                        const finalR = Math.round(baseR + (255 - baseR) * whiteBlend);
                        const finalG = Math.round(baseG + (255 - baseG) * whiteBlend);
                        const finalB = Math.round(baseB + (255 - baseB) * whiteBlend);
                        
                        // blur와 box-shadow로 빛처럼 보이게
                        if (imageWrapper) {
                            // blur 강도: mergeCircleProgress에 따라 증가 (0 → 50px)
                            const blurAmount = mergeCircleProgress * 50;
                            imageWrapper.style.filter = `blur(${blurAmount}px)`;
                            
                            // box-shadow: 각 색깔의 빛 효과 (100px 100px 100px 스타일)
                            const shadowOpacity = 0.8 - (mergeCircleProgress * 0.3);
                            const shadowBlur = 100;
                            imageWrapper.style.boxShadow = `100px 100px ${shadowBlur}px rgba(${finalR}, ${finalG}, ${finalB}, ${shadowOpacity})`;
                        }
                        
                        // overlay 색상 변경 (하얀색으로 점진적 변환)
                        if (overlay) {
                            const overlayOpacity = 0.7 + (0.3 * (1 - mergeCircleProgress * 0.5));
                            overlay.style.background = `rgba(${finalR}, ${finalG}, ${finalB}, ${overlayOpacity})`;
                        }
                        
                        // 완전히 합쳐질 때는 하얀색으로 (mergeCircleProgress 0.7 이상)
                        if (mergeCircleProgress >= 0.7) {
                            const circleWhiteProgress = (mergeCircleProgress - 0.7) / 0.3; // 0.7~1.0 구간을 0~1로 변환
                            
                            // 거의 하얀색으로
                            if (overlay) {
                                const whiteOpacity = 0.7 + (0.3 * circleWhiteProgress);
                                overlay.style.background = `rgba(255, 255, 255, ${whiteOpacity})`;
                            }
                            if (imageWrapper) {
                                const finalBlur = 50;
                                imageWrapper.style.filter = `blur(${finalBlur}px)`;
                                // 하얀색 빛 효과
                                const whiteShadowOpacity = 0.5 + (0.5 * circleWhiteProgress);
                                imageWrapper.style.boxShadow = `100px 100px 100px rgba(255, 255, 255, ${whiteShadowOpacity})`;
                            }
                        }
                    } else {
                        // 초기 이동 단계에서는 기존 색상 유지
                        // transition을 추가하여 부드럽게 opacity 변경
                        overlay.style.transition = 'background 0.3s ease-out';
                        overlay.style.background = `rgba(${baseR}, ${baseG}, ${baseB}, ${overlayOpacity})`;
                
                        if (imageWrapper) {
                            const shadowIntensity = 0.8;
                            imageWrapper.style.boxShadow = `0px 0px 100px rgba(${baseR}, ${baseG}, ${baseB}, ${shadowIntensity})`;
                            imageWrapper.style.filter = 'none';
                        }
                    }
                    
                    // 원래 동그라미 크기 유지 (180px)
                    if (imageWrapper) {
                        imageWrapper.style.width = '180px';
                        imageWrapper.style.height = '180px';
                    }
                    
                    // 하단 캠퍼스명 페이드아웃 처리
                    const campusCircle = campus.querySelector('.sec3-campus-circle');
                    const campusDot = campus.querySelector('.sec3-campus-dot');
                    
                    // 합쳐지기 시작하면 캠퍼스명과 점(dot) 완전히 숨기기
                    if (mergeProgress > 0) {
                        if (campusCircle) {
                            campusCircle.style.display = 'none';
                            campusCircle.style.opacity = '0';
                        }
                        if (campusDot) {
                            campusDot.style.display = 'none';
                            campusDot.style.opacity = '0';
                        }
                        if (campusName) {
                            campusName.style.opacity = '0';
                            campusName.style.visibility = 'hidden';
                            campusName.style.display = 'none';
                        }
                    } else {
                        // mergeProgress가 0이면 정상 표시
                        if (campusCircle) campusCircle.style.display = '';
                        if (campusDot) campusDot.style.display = '';
                    }
                    
                    // overlayOpacity가 70% 이상일 때 우측 원과 하단 캠퍼스명이 동시에 페이드아웃
                    // 우측 원: index 1, 2 (gangneung, samcheok)
                    const isRightCampus = (index === 1 || index === 2);
                    if (overlayOpacity >= 0.7) {
                        const fadeOutProgress = (overlayOpacity - 0.7) / 0.2; // 0.7~0.9 구간을 0~1로 변환
                        const fadeOutOpacity = 1 - fadeOutProgress;
                        
                        // 우측 원 페이드아웃
                        if (isRightCampus) {
                            campus.style.opacity = Math.min(1, fadeInProgress) * fadeOutOpacity;
                            campus.style.transition = 'opacity 0.3s ease-out';
                        }
                        
                        // 하단 캠퍼스명 페이드아웃 (모든 원)
                        if (campusInfo) {
                            campusInfo.style.opacity = fadeOutOpacity;
                            campusInfo.style.transition = 'opacity 0.3s ease-out';
                            if (campusCircle) campusCircle.style.opacity = fadeOutOpacity;
                            if (campusDot) campusDot.style.opacity = fadeOutOpacity;
                        }
                    }
                    
                    // whiteProgress가 시작되면 하단 캠퍼스명 페이드아웃하고 중앙에 표시
                    if (whiteProgress > 0) {
                    // 하단 campusInfo 페이드아웃 (whiteProgress에 따라 서서히)
                    // 하지만 campusName은 campusInfo 밖으로 이동시켜 독립적으로 제어
                    if (campusInfo) {
                        // 점(circle, dot)을 먼저 사라지게 (whiteProgress 0.3부터 시작)
                        const dotFadeStart = 0.3;
                        const dotFadeProgress = whiteProgress < dotFadeStart ? 0 : 
                                               (whiteProgress - dotFadeStart) / (1 - dotFadeStart);
                        const dotOpacity = Math.max(0, 1 - dotFadeProgress);
                        
                        if (campusCircle) {
                            campusCircle.style.opacity = dotOpacity;
                            campusCircle.style.transition = 'opacity 0.4s ease-out';
                        }
                        if (campusDot) {
                            campusDot.style.opacity = dotOpacity;
                            campusDot.style.transition = 'opacity 0.4s ease-out';
                        }
                        
                        // campusInfo 자체는 whiteProgress에 따라 서서히 사라짐
                        const bottomInfoOpacity = Math.max(0, 1 - whiteProgress);
                        campusInfo.style.opacity = bottomInfoOpacity;
                        campusInfo.style.transition = 'opacity 0.4s ease-out';
                    }
                    
                    // 캠퍼스명 글자 숨기기
                if (campusName) {
                        campusName.style.opacity = '0';
                        campusName.style.visibility = 'hidden';
                    }
                } else {
                    // whiteProgress가 0이면 하단 정보 유지
                    // 우측 원과 하단 캠퍼스명이 동시에 페이드아웃
                    const isRightCampus = (index === 1 || index === 2);
                    if (overlayOpacity >= 0.7) {
                        const fadeOutProgress = (overlayOpacity - 0.7) / 0.2; // 0.7~0.9 구간을 0~1로 변환
                        const fadeOutOpacity = 1 - fadeOutProgress;
                        
                        // 우측 원 페이드아웃
                        if (isRightCampus) {
                            campus.style.opacity = Math.min(1, fadeInProgress) * fadeOutOpacity;
                            campus.style.transition = 'opacity 0.3s ease-out';
                        }
                        
                        // 하단 캠퍼스명 페이드아웃
                        if (campusInfo) {
                            campusInfo.style.opacity = fadeOutOpacity;
                            campusInfo.style.transition = 'opacity 0.3s ease-out';
                            if (campusCircle) {
                                campusCircle.style.opacity = fadeOutOpacity;
                            }
                            if (campusDot) {
                                campusDot.style.opacity = fadeOutOpacity;
                            }
                        }
                    } else {
                        // overlayOpacity가 70% 미만일 때는 모두 보이게
                        if (isRightCampus) {
                            campus.style.opacity = Math.min(1, fadeInProgress);
                        }
                        if (campusInfo) {
                            campusInfo.style.opacity = 1;
                            if (campusCircle) campusCircle.style.opacity = '';
                            if (campusDot) campusDot.style.opacity = '';
                        }
                    }
                    
                    // campusName을 원래 위치로 되돌림
                    if (campusName && campusName.dataset.moved === 'true') {
                        // campusName을 campusInfo 안으로 다시 이동
                        if (campusInfo && (campusName.parentElement === imageWrapper || campusName.parentElement === campus)) {
                            campusInfo.appendChild(campusName);
                            campusName.dataset.moved = '';
                        }
                        campusName.style.position = '';
                        campusName.style.left = '';
                        campusName.style.top = '';
                        campusName.style.transform = '';
                        campusName.style.fontSize = '';
                        campusName.style.lineHeight = '';
                        campusName.style.color = '';
                        campusName.style.textShadow = '';
                        campusName.style.justifyContent = '';
                        campusName.style.alignItems = '';
                        campusName.style.display = '';
                        campusName.style.flexDirection = '';
                        campusName.style.margin = '';
                        campusName.style.opacity = '';
                        campusName.style.textAlign = '';
                        campusName.style.whiteSpace = '';
                        campusName.style.zIndex = '';
                        campusName.style.pointerEvents = '';
                    }
                }
            } else {
                // 원래 디자인 유지
                const baseColors = [
                    [26, 88, 175],   // chuncheon
                    [23, 201, 255],  // gangneung
                    [255, 106, 32],  // samcheok
                    [74, 214, 171]   // wonju
                ];
                const [r, g, b] = baseColors[index];
                // transition을 추가하여 부드럽게 opacity 변경
                overlay.style.transition = 'background 0.3s ease-out';
                overlay.style.background = `rgba(${r}, ${g}, ${b}, ${overlayOpacity})`;
                
                if (imageWrapper) {
                    imageWrapper.style.boxShadow = '';
                    imageWrapper.style.filter = 'none';
                    imageWrapper.style.width = '';
                    imageWrapper.style.height = '';
                }
                
                if (campusInfo) {
                    campusInfo.style.position = '';
                    campusInfo.style.left = '';
                    campusInfo.style.top = '';
                    campusInfo.style.width = '';
                    campusInfo.style.height = '';
                    campusInfo.style.display = '';
                    campusInfo.style.flexDirection = '';
                    campusInfo.style.justifyContent = '';
                    campusInfo.style.alignItems = '';
                    
                    // overlay opacity 70% 도달 시 캠퍼스 이름 텍스트 숨기기
                    if (overlayOpacity >= 0.7) {
                        campusInfo.style.opacity = 0;
                        campusInfo.style.transition = 'opacity 0.3s ease-out';
                    } else {
                        campusInfo.style.opacity = 1;
                    }
                }
                
                const campusCircle = campus.querySelector('.sec3-campus-circle');
                const campusDot = campus.querySelector('.sec3-campus-dot');
                if (campusCircle) {
                    campusCircle.style.display = '';
                    campusCircle.style.opacity = '';
                }
                if (campusDot) {
                    campusDot.style.display = '';
                    campusDot.style.opacity = '';
                }
                
                // mergeProgress가 시작되면 캠퍼스명 숨기기
                if (mergeProgress > 0 && campusName) {
                    campusName.style.opacity = '0';
                    campusName.style.visibility = 'hidden';
                    campusName.style.display = 'none';
                }
                
                if (campusName) {
                    campusName.style.position = '';
                    campusName.style.left = '';
                    campusName.style.top = '';
                    campusName.style.fontSize = '';
                    campusName.style.lineHeight = '';
                    campusName.style.textShadow = '';
                    campusName.style.justifyContent = '';
                    campusName.style.display = '';
                    campusName.style.flexDirection = '';
                    campusName.style.margin = '';
                }
            }
            
            // mergeCircleProgress가 있을 때 4개의 기존 원을 작게 만들고 페이드아웃
            if (mergeCircleProgress > 0) {
                // 4개의 원을 작게 만들고 페이드아웃
                const shrinkScale = 1 - (mergeCircleProgress * 0.8); // 1 → 0.2로 축소
                const fadeOut = 1 - mergeCircleProgress; // 완전히 사라지게
                
                campus.style.transform = `translateX(${translateXValue}) translateY(${translateY}px) rotate(${rotation}deg) scale(${shrinkScale})`;
                campus.style.opacity = Math.min(1, fadeInProgress) * fadeOut;
            }
        });
        
        // 텍스트 표시
        if (sec3Title && sec3Subtitle) {
            const titleProgress = Math.min(1, Math.max(0, (textProgress - 0) / 0.5));
            const subtitleProgress = Math.min(1, Math.max(0, (textProgress - 0.5) / 0.5));
            
            if (textHideProgress > 0) {
                // 텍스트 사라짐
                sec3Title.style.opacity = 1 - textHideProgress;
                sec3Subtitle.style.opacity = 1 - textHideProgress;
            } else {
                // 텍스트 나타남
                if (titleProgress > 0.1) {
                    sec3Title.classList.add('visible');
                }
                if (subtitleProgress > 0.1) {
                    sec3Subtitle.classList.add('visible');
                }
            }
        }
        
        // 새로운 하얀색 원 (flashOverlay) - 작게 시작해서 점점 커지면서 화면 전체를 덮음
        if (flashOverlay) {
            if (mergeCircleProgress > 0) {
                // 작게 시작해서 점점 커지게 (크기는 sizeProgress 사용하여 조금 느리게)
                const startSize = 200; // 시작 크기 (작게)
                const maxSize = Math.max(window.innerWidth, window.innerHeight) * 2; // 화면 전체를 덮을 수 있는 크기
                const currentSize = startSize + (maxSize - startSize) * sizeProgress;
                
                // 중앙에 위치
                flashOverlay.style.position = 'absolute';
                flashOverlay.style.top = '50%';
                flashOverlay.style.left = '50%';
                flashOverlay.style.transform = 'translate(-50%, -50%)';
                flashOverlay.style.width = currentSize + 'px';
                flashOverlay.style.height = currentSize + 'px';
                flashOverlay.style.borderRadius = '50%';
                
                // blur와 빛 효과
                const blurAmount = 50 + (mergeCircleProgress * 100); // 50px → 150px로 증가
                const shadowBlur = 100 + (mergeCircleProgress * 200); // 100px → 300px로 증가
                flashOverlay.style.filter = `blur(${blurAmount}px)`;
                flashOverlay.style.boxShadow = `0 0 ${shadowBlur}px rgba(255, 255, 255, ${0.8 + mergeCircleProgress * 0.2})`;
                
                // 하얀색 배경 (투명도 포함)
                const whiteOpacity = 0.3 + (mergeCircleProgress * 0.7); // 0.3 → 1.0으로 증가
                flashOverlay.style.background = `rgba(255, 255, 255, ${whiteOpacity})`;
                
                // mergeCircleProgress가 완료되면 페이드아웃
                if (mergeCircleProgress >= 1 && whiteFadeOutProgress > 0) {
                    flashOverlay.style.opacity = 1 - whiteFadeOutProgress;
                } else {
                    // opacity는 점점 증가
                flashOverlay.style.opacity = mergeCircleProgress;
                }
                flashOverlay.style.zIndex = '20';
                flashOverlay.style.pointerEvents = 'none';
            } else {
                flashOverlay.style.opacity = 0;
            }
        }
        
        // 배지 페이드아웃 (원이 합쳐지기 시작할 때부터)
        const sec3Badge = document.querySelector('.sec3-badge');
        if (sec3Badge) {
            if (!sec3Badge.dataset.transitionSet) {
                sec3Badge.style.transition = 'opacity 0.8s ease-out';
                sec3Badge.style.willChange = 'opacity';
                sec3Badge.dataset.transitionSet = 'true';
            }
            sec3Badge.style.opacity = 1 - badgeFadeOutProgress;
        }
        
        // 이미지 페이드인 효과 (배경 전환 대신 이미지가 페이드인)
        if (sec3 && backgroundTransitionProgress > 0) {
            // 새 이미지를 추가 (기존 배경은 유지)
            if (!sec3.querySelector('.sec3-background-image-overlay')) {
                const bgImageOverlay = document.createElement('img');
                bgImageOverlay.className = 'sec3-background-image-overlay';
                bgImageOverlay.src = 'images/sec3/sec_vison_bg.png';
                bgImageOverlay.alt = '비전 배경';
                bgImageOverlay.style.position = 'absolute';
                bgImageOverlay.style.top = '0';
                bgImageOverlay.style.left = '0';
                bgImageOverlay.style.width = '100%';
                bgImageOverlay.style.height = '100%';
                bgImageOverlay.style.objectFit = 'cover';
                bgImageOverlay.style.objectPosition = 'center';
                bgImageOverlay.style.zIndex = '5';
                bgImageOverlay.style.pointerEvents = 'none';
                bgImageOverlay.style.willChange = 'opacity';
                bgImageOverlay.style.opacity = '0';
                bgImageOverlay.style.transition = 'opacity 0.8s ease-out';
                sec3.appendChild(bgImageOverlay);
            }
            
            const bgImageOverlay = sec3.querySelector('.sec3-background-image-overlay');
            if (bgImageOverlay) {
                // 이미지가 페이드인되면서 나타남
                bgImageOverlay.style.opacity = backgroundTransitionProgress;
                
                // animation-complete 상태에서 섹션 크기에 맞춰 이미지 크기 조정
                if (sec3.classList.contains('animation-complete')) {
                    const sec3Rect = sec3.getBoundingClientRect();
                    bgImageOverlay.style.width = sec3Rect.width + 'px';
                    bgImageOverlay.style.height = sec3Rect.height + 'px';
                } else {
                    // 일반 상태에서는 100% 유지
                    bgImageOverlay.style.width = '100%';
                    bgImageOverlay.style.height = '100%';
                }
            }
            
            // 하얀색 오버레이 페이드아웃 (기존 로직 유지)
            if (!sec3.querySelector('.sec3-background-overlay')) {
                const bgOverlay = document.createElement('div');
                bgOverlay.className = 'sec3-background-overlay';
                bgOverlay.style.position = 'absolute';
                bgOverlay.style.top = '0';
                bgOverlay.style.left = '0';
                bgOverlay.style.width = '100%';
                bgOverlay.style.height = '100%';
                bgOverlay.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                bgOverlay.style.zIndex = '10';
                bgOverlay.style.pointerEvents = 'none';
                bgOverlay.style.willChange = 'opacity';
                bgOverlay.style.transition = 'opacity 0.8s ease-out';
                sec3.appendChild(bgOverlay);
            }
            
            const bgOverlay = sec3.querySelector('.sec3-background-overlay');
            if (bgOverlay) {
                // 하얀색 오버레이가 페이드아웃되면서 이미지가 나타남
                bgOverlay.style.opacity = 1 - backgroundTransitionProgress;
            }
        }
        
        // 배경 전환이 완료되면 오버레이 유지 (배경을 완전히 바꾸지 않음)
        if (sec3 && backgroundTransitionProgress >= 1) {
            // 하얀색 오버레이 완전히 제거
            const bgOverlay = sec3.querySelector('.sec3-background-overlay');
            if (bgOverlay && bgOverlay.style.opacity !== '0') {
                bgOverlay.style.opacity = '0';
                bgOverlay.style.display = 'none';
            }
            
            // 배지 완전히 숨기기
            if (sec3Badge && sec3Badge.style.opacity !== '0') {
                sec3Badge.style.opacity = '0';
                sec3Badge.style.display = 'none';
            }
        }
        
        // 최종 텍스트 오버레이 (이미지 페이드인과 함께 나타남, 이미지보다 위에 표시)
        let textOverlayOpacity = 0;
        if (textOverlay) {
            // 이미지 페이드인이 시작되면 텍스트도 함께 나타남
            if (backgroundTransitionProgress > 0) {
                // 이미지와 함께 페이드인 (약간의 딜레이를 주어 이미지가 먼저 나타나도록)
                const textFadeStart = 0.2; // 이미지가 20% 나타난 후 텍스트 시작
                const textFadeProgress = backgroundTransitionProgress < textFadeStart ? 0 : 
                                       (backgroundTransitionProgress - textFadeStart) / (1 - textFadeStart);
                textOverlayOpacity = Math.min(1, textFadeProgress);
                textOverlay.style.opacity = textOverlayOpacity;
                textOverlay.style.zIndex = '30'; // 이미지(z-index: 5)보다 위에 표시
                
                // 텍스트 색상을 하얀색으로 변경
                const textLines = textOverlay.querySelectorAll('.sec3-text-overlay-line1, .sec3-text-overlay-line2');
                textLines.forEach(line => {
                    line.style.color = 'white';
                });
            } else {
                textOverlayOpacity = 0;
                textOverlay.style.opacity = 0;
            }
        }
        
        // 애니메이션 완전 완료 체크: 배경 전환 완료 + 텍스트 오버레이 완전히 나타남
        // 배경 전환이 완료되고 텍스트 오버레이가 완전히 나타났을 때만 완료로 간주
        isAnimationFullyComplete = backgroundTransitionProgress >= 1 && textOverlayOpacity >= 1;
        
        // 애니메이션 완료 상태 업데이트 (CSS 스타일링용)
        if (progress >= 1 && isAnimationFullyComplete) {
            if (sec3 && !sec3.classList.contains('animation-complete')) {
                sec3.classList.add('animation-complete');
                
                // animation-complete 상태가 되면 오버레이 이미지 크기를 섹션 크기에 맞춤
                const bgImageOverlay = sec3.querySelector('.sec3-background-image-overlay');
                if (bgImageOverlay) {
                    // 섹션 크기 측정 및 이미지 크기 조정
                    const updateImageSize = () => {
                        const sec3Rect = sec3.getBoundingClientRect();
                        bgImageOverlay.style.width = sec3Rect.width + 'px';
                        bgImageOverlay.style.height = sec3Rect.height + 'px';
                    };
                    
                    // 즉시 업데이트 (다음 프레임에서 실행하여 레이아웃 완료 후 측정)
                    requestAnimationFrame(() => {
                        requestAnimationFrame(updateImageSize);
                    });
                    
                    // 리사이즈 이벤트 리스너 추가 (반응형 대응)
                    if (!bgImageOverlay.dataset.resizeListenerAdded) {
                        window.addEventListener('resize', updateImageSize);
                        bgImageOverlay.dataset.resizeListenerAdded = 'true';
                    }
                }
            }
        } else {
            // 애니메이션이 완료되지 않았으면 완료 상태 제거
            if (sec3 && sec3.classList.contains('animation-complete')) {
                sec3.classList.remove('animation-complete');
                
                // 오버레이 이미지 크기를 100%로 되돌림
                const bgImageOverlay = sec3.querySelector('.sec3-background-image-overlay');
                if (bgImageOverlay) {
                    bgImageOverlay.style.width = '100%';
                    bgImageOverlay.style.height = '100%';
                }
            }
        }
    }
    
    // 모바일 버전 애니메이션 함수
    function animateSec3Mobile() {
        if (!sec3Mobile || !sec3MobileContent || campusesMobile.length !== 4) {
            return;
        }
        
        const progress = getSec3ScrollProgress();
        const elapsed = progress * totalDuration;
        
        // 모바일: 텍스트 먼저 → 캠퍼스 2x2 그리드 → 합쳐지는 효과
        const textStartTime = 0;
        const textEndTime = MOBILE_DURATIONS.textTitle + MOBILE_DURATIONS.textSubtitle;
        const textProgress = elapsed < textStartTime ? 0 : 
                          elapsed >= textEndTime ? 1 : 
                          (elapsed - textStartTime) / (textEndTime - textStartTime);
        
        const textWaitEndTime = textEndTime + MOBILE_DURATIONS.textCompleteWait;
        const campusGridStartTime = textWaitEndTime;
        const campusGridEndTime = campusGridStartTime + MOBILE_DURATIONS.campusGridFadeIn;
        const campusGridWaitEndTime = campusGridEndTime + MOBILE_DURATIONS.campusGridWait;
        const mergeStartTime = campusGridWaitEndTime;
        const mergeEndTime = mergeStartTime + MOBILE_DURATIONS.cardMerge;
        
        const rawMergeProgress = elapsed < mergeStartTime ? 0 : 
                                 elapsed >= mergeEndTime ? 1 : 
                                 (elapsed - mergeStartTime) / (mergeEndTime - mergeStartTime);
        
        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }
        const mergeProgress = easeInOutCubic(rawMergeProgress);
        
        const overlayOpacity = Math.min(0.9, 0.3 + (mergeProgress * 0.6));
        const whiteStartProgress = 0.2;
        const rawWhiteProgress = mergeProgress < whiteStartProgress ? 0 : 
                                 mergeProgress >= 1 ? 1 : 
                                 (mergeProgress - whiteStartProgress) / (1 - whiteStartProgress);
        const whiteProgress = easeInOutCubic(rawWhiteProgress);
        
        const textHideDuration = MOBILE_DURATIONS.textHide;
        const textHideStartTime = mergeEndTime;
        const textHideEndTime = textHideStartTime + textHideDuration;
        const textHideProgress = elapsed < textHideStartTime ? 0 : 
                                 elapsed >= textHideEndTime ? 1 : 
                                 (elapsed - textHideStartTime) / (textHideEndTime - textHideStartTime);
        
        const mergeToCircleDuration = MOBILE_DURATIONS.mergeToCircle;
        const mergeCircleStartTime = textHideEndTime;
        const mergeCircleEndTime = mergeCircleStartTime + mergeToCircleDuration;
        const rawMergeCircleProgress = elapsed < mergeCircleStartTime ? 0 : 
                                      elapsed >= mergeCircleEndTime ? 1 : 
                                      (elapsed - mergeCircleStartTime) / (mergeCircleEndTime - mergeCircleStartTime);
        
        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }
        const mergeCircleProgress = easeOutCubic(rawMergeCircleProgress);
        
        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }
        const sizeProgress = easeInOutQuad(rawMergeCircleProgress);
        
        const whiteFadeOutDuration = MOBILE_DURATIONS.whiteFadeOut;
        const whiteFadeOutStartTime = mergeCircleEndTime;
        const whiteFadeOutEndTime = whiteFadeOutStartTime + whiteFadeOutDuration;
        const whiteFadeOutProgress = elapsed < whiteFadeOutStartTime ? 0 : 
                                    elapsed >= whiteFadeOutEndTime ? 1 : 
                                    (elapsed - whiteFadeOutStartTime) / (whiteFadeOutEndTime - whiteFadeOutStartTime);
        
        const backgroundTransitionDuration = MOBILE_DURATIONS.backgroundTransition;
        const backgroundTransitionStartTime = whiteFadeOutStartTime;
        const backgroundTransitionEndTime = backgroundTransitionStartTime + backgroundTransitionDuration;
        const backgroundTransitionProgress = elapsed < backgroundTransitionStartTime ? 0 : 
                                           elapsed >= backgroundTransitionEndTime ? 1 : 
                                           (elapsed - backgroundTransitionStartTime) / (backgroundTransitionEndTime - backgroundTransitionStartTime);
        
        const badgeFadeOutStartTime = mergeCircleStartTime;
        const badgeFadeOutDuration = mergeToCircleDuration + whiteFadeOutDuration;
        const badgeFadeOutEndTime = badgeFadeOutStartTime + badgeFadeOutDuration;
        const badgeFadeOutProgress = elapsed < badgeFadeOutStartTime ? 0 : 
                                     elapsed >= badgeFadeOutEndTime ? 1 : 
                                     (elapsed - badgeFadeOutStartTime) / (badgeFadeOutEndTime - badgeFadeOutStartTime);
        
        // 캠퍼스 애니메이션
        const contentHeight = sec3MobileContent.offsetHeight;
        const centerTopPx = contentHeight * 0.5;
        
        // 그리드 컨테이너 위치 계산 (한 번만 계산하고 캐싱)
        const campusesContainer = document.querySelector('.sec3-mobile-campuses');
        if (!campusesContainer) return;
        
        // 초기 위치를 캐싱 (mergeStartTime이 되기 전에 한 번만 계산)
        if (!campusesContainer.dataset.initialPositionsCalculated || elapsed >= mergeStartTime) {
            const containerRect = campusesContainer.getBoundingClientRect();
            const contentRect = sec3MobileContent.getBoundingClientRect();
            const containerLeft = containerRect.left - contentRect.left;
            const containerTop = containerRect.top - contentRect.top;
            const containerWidth = containerRect.width;
            const gridGap = 30;
            const campusWidth = 130;
            const campusHeight = 130;
            
            // 그리드 내 각 셀의 위치 계산
            const cellWidth = (containerWidth - gridGap) / 2;
            const leftColX = containerLeft + cellWidth / 2;
            const rightColX = containerLeft + cellWidth + gridGap + cellWidth / 2;
            const firstRowY = containerTop + campusHeight / 2;
            const secondRowY = containerTop + campusHeight + gridGap + campusHeight / 2;
            
            // 각 캠퍼스의 초기 위치 저장
            campusesContainer.dataset.chuncheonX = leftColX;
            campusesContainer.dataset.chuncheonY = firstRowY;
            campusesContainer.dataset.gangneungX = rightColX;
            campusesContainer.dataset.gangneungY = firstRowY;
            campusesContainer.dataset.samcheokX = leftColX;
            campusesContainer.dataset.samcheokY = secondRowY;
            campusesContainer.dataset.wonjuX = rightColX;
            campusesContainer.dataset.wonjuY = secondRowY;
            campusesContainer.dataset.initialPositionsCalculated = 'true';
        }
        
        // 저장된 초기 위치 사용
        const mobileStartPositions = [
            // 춘천: 왼쪽 위
            { x: parseFloat(campusesContainer.dataset.chuncheonX), y: parseFloat(campusesContainer.dataset.chuncheonY) },
            // 강릉: 오른쪽 위
            { x: parseFloat(campusesContainer.dataset.gangneungX), y: parseFloat(campusesContainer.dataset.gangneungY) },
            // 삼척: 왼쪽 아래
            { x: parseFloat(campusesContainer.dataset.samcheokX), y: parseFloat(campusesContainer.dataset.samcheokY) },
            // 원주: 오른쪽 아래
            { x: parseFloat(campusesContainer.dataset.wonjuX), y: parseFloat(campusesContainer.dataset.wonjuY) }
        ];
        
        const campusWidth = 130;
        const campusHeight = 130;
        
        campusesMobile.forEach((campus, index) => {
            const campusOrderIndex = CAMPUS_FADE_ORDER.indexOf(index);
            const campusFadeDelay = CAMPUS_FADE_DELAYS[campusOrderIndex] || 0;
            const textEndTime = MOBILE_DURATIONS.textTitle + MOBILE_DURATIONS.textSubtitle;
            const textWaitEndTime = textEndTime + MOBILE_DURATIONS.textCompleteWait;
            const campusFadeStartTime = textWaitEndTime + campusFadeDelay;
            const campusFadeEndTime = campusFadeStartTime + DURATIONS.fadeIn;
            
            let individualFadeProgress = 0;
            if (elapsed < campusFadeStartTime) {
                individualFadeProgress = 0;
            } else if (elapsed >= campusFadeEndTime) {
                individualFadeProgress = 1;
            } else {
                individualFadeProgress = (elapsed - campusFadeStartTime) / DURATIONS.fadeIn;
            }
            
            const startPos = mobileStartPositions[index];
            let translateX, translateY, campusOpacity;
            
            // 중앙 위치 (화면 중앙)
            const centerX = sec3MobileContent.offsetWidth / 2;
            const centerY = contentHeight * 0.5;
            
            if (elapsed < mergeStartTime) {
                // 그리드 위치 유지 (transform 없음, grid가 자연스럽게 배치)
                campus.style.position = 'relative';
                campus.style.transform = '';
                campus.style.left = '';
                campus.style.top = '';
                campusOpacity = individualFadeProgress;
            } else {
                // 합쳐지는 애니메이션 시작
                campus.style.position = 'absolute';
                const adjustedProgress = Math.min(1, mergeProgress);
                
                // 초기 위치에서 중앙으로 이동
                const currentX = startPos.x + (centerX - startPos.x) * adjustedProgress;
                const currentY = startPos.y + (centerY - startPos.y) * adjustedProgress;
                
                // 캠퍼스 이미지의 중심점 기준으로 위치 조정
                translateX = currentX - campusWidth / 2;
                translateY = currentY - campusHeight / 2;
                
                campus.style.left = translateX + 'px';
                campus.style.top = translateY + 'px';
                campus.style.transform = '';
                campusOpacity = individualFadeProgress;
            }
            
            campus.style.opacity = campusOpacity;
            
            const overlay = campus.querySelector('.sec3-mobile-campus-overlay');
            const imageWrapper = campus.querySelector('.sec3-mobile-campus-image-wrapper');
            const campusName = campus.querySelector('.sec3-mobile-campus-name');
            
            const campusColors = [
                [26, 88, 175],
                [23, 201, 255],
                [255, 106, 32],
                [74, 214, 171]
            ];
            const [baseR, baseG, baseB] = campusColors[index];
            
            if (whiteProgress > 0) {
                const glowR = Math.round(baseR + (255 - baseR) * whiteProgress);
                const glowG = Math.round(baseG + (255 - baseG) * whiteProgress);
                const glowB = Math.round(baseB + (255 - baseB) * whiteProgress);
                const additionalOpacity = whiteProgress * 0.08;
                const glowOpacity = Math.min(0.98, overlayOpacity + additionalOpacity);
                if (overlay) {
                    overlay.style.transition = 'background 0.3s ease-out';
                    overlay.style.background = `rgba(${glowR}, ${glowG}, ${glowB}, ${glowOpacity})`;
                }
                if (imageWrapper) {
                    const glowBlur = whiteProgress * 50;
                    imageWrapper.style.filter = `blur(${glowBlur}px)`;
                    imageWrapper.style.transition = 'filter 0.3s ease-out';
                    const glowShadowIntensity = 0.8 + (whiteProgress * 0.4);
                    const glowShadowBlur = 100 + (whiteProgress * 50);
                    imageWrapper.style.boxShadow = `0px 0px ${glowShadowBlur}px rgba(${glowR}, ${glowG}, ${glowB}, ${glowShadowIntensity})`;
                    imageWrapper.style.transition = 'box-shadow 0.3s ease-out';
                }
            } else if (mergeCircleProgress > 0) {
                const whiteBlend = mergeCircleProgress;
                const finalR = Math.round(baseR + (255 - baseR) * whiteBlend);
                const finalG = Math.round(baseG + (255 - baseG) * whiteBlend);
                const finalB = Math.round(baseB + (255 - baseB) * whiteBlend);
                
                if (imageWrapper) {
                    const blurAmount = mergeCircleProgress * 50;
                    imageWrapper.style.filter = `blur(${blurAmount}px)`;
                    const shadowOpacity = 0.8 - (mergeCircleProgress * 0.3);
                    imageWrapper.style.boxShadow = `100px 100px 100px rgba(${finalR}, ${finalG}, ${finalB}, ${shadowOpacity})`;
                }
                if (overlay) {
                    const overlayOpacity = 0.7 + (0.3 * (1 - mergeCircleProgress * 0.5));
                    overlay.style.background = `rgba(${finalR}, ${finalG}, ${finalB}, ${overlayOpacity})`;
                }
                
                if (mergeCircleProgress >= 0.7) {
                    const circleWhiteProgress = (mergeCircleProgress - 0.7) / 0.3;
                    if (overlay) {
                        const whiteOpacity = 0.7 + (0.3 * circleWhiteProgress);
                        overlay.style.background = `rgba(255, 255, 255, ${whiteOpacity})`;
                    }
                    if (imageWrapper) {
                        imageWrapper.style.filter = `blur(50px)`;
                        const whiteShadowOpacity = 0.5 + (0.5 * circleWhiteProgress);
                        imageWrapper.style.boxShadow = `100px 100px 100px rgba(255, 255, 255, ${whiteShadowOpacity})`;
                    }
                }
            } else {
                if (overlay) {
                    overlay.style.transition = 'background 0.3s ease-out';
                    overlay.style.background = `rgba(${baseR}, ${baseG}, ${baseB}, ${overlayOpacity})`;
                }
            }
            
            if (mergeProgress > 0 && campusName) {
                campusName.style.opacity = '0';
                campusName.style.visibility = 'hidden';
                campusName.style.display = 'none';
            }
            
            if (mergeCircleProgress > 0) {
                const shrinkScale = 1 - (mergeCircleProgress * 0.8);
                const fadeOut = 1 - mergeCircleProgress;
                campus.style.transform = `scale(${shrinkScale})`;
                campus.style.opacity = Math.min(1, individualFadeProgress) * fadeOut;
            }
        });
        
        // 텍스트 표시
        if (sec3MobileTitle && sec3MobileSubtitle) {
            const titleProgress = Math.min(1, Math.max(0, (textProgress - 0) / 0.5));
            const subtitleProgress = Math.min(1, Math.max(0, (textProgress - 0.5) / 0.5));
            
            if (textHideProgress > 0) {
                sec3MobileTitle.style.opacity = 1 - textHideProgress;
                sec3MobileSubtitle.style.opacity = 1 - textHideProgress;
            } else {
                sec3MobileTitle.style.opacity = titleProgress;
                sec3MobileSubtitle.style.opacity = subtitleProgress;
            }
        }
        
        // 플래시 오버레이
        if (flashOverlayMobile) {
            if (mergeCircleProgress > 0) {
                const startSize = 200;
                const maxSize = Math.max(window.innerWidth, window.innerHeight) * 2;
                const currentSize = startSize + (maxSize - startSize) * sizeProgress;
                
                flashOverlayMobile.style.position = 'absolute';
                flashOverlayMobile.style.top = '50%';
                flashOverlayMobile.style.left = '50%';
                flashOverlayMobile.style.transform = 'translate(-50%, -50%)';
                flashOverlayMobile.style.width = currentSize + 'px';
                flashOverlayMobile.style.height = currentSize + 'px';
                flashOverlayMobile.style.borderRadius = '50%';
                
                const blurAmount = 50 + (mergeCircleProgress * 100);
                const shadowBlur = 100 + (mergeCircleProgress * 200);
                flashOverlayMobile.style.filter = `blur(${blurAmount}px)`;
                flashOverlayMobile.style.boxShadow = `0 0 ${shadowBlur}px rgba(255, 255, 255, ${0.8 + mergeCircleProgress * 0.2})`;
                
                const whiteOpacity = 0.3 + (mergeCircleProgress * 0.7);
                flashOverlayMobile.style.background = `rgba(255, 255, 255, ${whiteOpacity})`;
                
                if (mergeCircleProgress >= 1 && whiteFadeOutProgress > 0) {
                    flashOverlayMobile.style.opacity = 1 - whiteFadeOutProgress;
                } else {
                    flashOverlayMobile.style.opacity = mergeCircleProgress;
                }
                flashOverlayMobile.style.zIndex = '20';
                flashOverlayMobile.style.pointerEvents = 'none';
            } else {
                flashOverlayMobile.style.opacity = 0;
            }
        }
        
        // 배지 페이드아웃
        const sec3MobileBadge = document.querySelector('.sec3-mobile-badge');
        if (sec3MobileBadge) {
            if (!sec3MobileBadge.dataset.transitionSet) {
                sec3MobileBadge.style.transition = 'opacity 0.8s ease-out';
                sec3MobileBadge.style.willChange = 'opacity';
                sec3MobileBadge.dataset.transitionSet = 'true';
            }
            sec3MobileBadge.style.opacity = 1 - badgeFadeOutProgress;
        }
        
        // 배경 전환
        if (sec3Mobile && backgroundTransitionProgress > 0) {
            if (!sec3Mobile.querySelector('.sec3-mobile-background-image-overlay')) {
                const bgImageOverlay = document.createElement('img');
                bgImageOverlay.className = 'sec3-mobile-background-image-overlay';
                bgImageOverlay.src = 'images/sec3/sec_vison_bg.png';
                bgImageOverlay.alt = '비전 배경';
                bgImageOverlay.style.position = 'absolute';
                bgImageOverlay.style.top = '0';
                bgImageOverlay.style.left = '0';
                bgImageOverlay.style.width = '100%';
                bgImageOverlay.style.height = '100%';
                bgImageOverlay.style.objectFit = 'cover';
                bgImageOverlay.style.objectPosition = 'center';
                bgImageOverlay.style.zIndex = '5';
                bgImageOverlay.style.pointerEvents = 'none';
                bgImageOverlay.style.willChange = 'opacity';
                bgImageOverlay.style.opacity = '0';
                bgImageOverlay.style.transition = 'opacity 0.8s ease-out';
                sec3Mobile.appendChild(bgImageOverlay);
            }
            
            const bgImageOverlay = sec3Mobile.querySelector('.sec3-mobile-background-image-overlay');
            if (bgImageOverlay) {
                bgImageOverlay.style.opacity = backgroundTransitionProgress;
            }
            
            if (!sec3Mobile.querySelector('.sec3-mobile-background-overlay')) {
                const bgOverlay = document.createElement('div');
                bgOverlay.className = 'sec3-mobile-background-overlay';
                bgOverlay.style.position = 'absolute';
                bgOverlay.style.top = '0';
                bgOverlay.style.left = '0';
                bgOverlay.style.width = '100%';
                bgOverlay.style.height = '100%';
                bgOverlay.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                bgOverlay.style.zIndex = '10';
                bgOverlay.style.pointerEvents = 'none';
                bgOverlay.style.willChange = 'opacity';
                bgOverlay.style.transition = 'opacity 0.8s ease-out';
                sec3Mobile.appendChild(bgOverlay);
            }
            
            const bgOverlay = sec3Mobile.querySelector('.sec3-mobile-background-overlay');
            if (bgOverlay) {
                bgOverlay.style.opacity = 1 - backgroundTransitionProgress;
            }
        }
        
        // 텍스트 오버레이
        let textOverlayOpacity = 0;
        if (textOverlayMobile) {
            if (backgroundTransitionProgress > 0) {
                const textFadeStart = 0.2;
                const textFadeProgress = backgroundTransitionProgress < textFadeStart ? 0 : 
                                       (backgroundTransitionProgress - textFadeStart) / (1 - textFadeStart);
                textOverlayOpacity = Math.min(1, textFadeProgress);
                textOverlayMobile.style.opacity = textOverlayOpacity;
                textOverlayMobile.style.zIndex = '30';
                
                const textLines = textOverlayMobile.querySelectorAll('.sec3-mobile-text-overlay-line1, .sec3-mobile-text-overlay-line2');
                textLines.forEach(line => {
                    line.style.color = 'white';
                });
            } else {
                textOverlayOpacity = 0;
                textOverlayMobile.style.opacity = 0;
            }
        }
        
        isAnimationFullyComplete = backgroundTransitionProgress >= 1 && textOverlayOpacity >= 1;
        
        if (progress >= 1 && isAnimationFullyComplete) {
            if (sec3Mobile && !sec3Mobile.classList.contains('animation-complete')) {
                sec3Mobile.classList.add('animation-complete');
            }
        } else {
            if (sec3Mobile && sec3Mobile.classList.contains('animation-complete')) {
                sec3Mobile.classList.remove('animation-complete');
            }
        }
    }
    
    // 스크롤 이벤트 처리
    function handleSec3Scroll(e) {
        if (!sec3) return;
        
        // 완료된 상태에서 역방향 스크롤 처리
        if (isSec3PermanentlyComplete && e && (e.type === 'wheel' || e.type === 'touchmove')) {
            let delta = 0;
            if (e.type === 'wheel') {
                delta = e.deltaY;
            } else if (e.type === 'touchmove' && e.touches && e.touches.length > 0) {
                const currentTouchY = e.touches[0].clientY;
                if (lastTouchY !== 0) {
                    delta = lastTouchY - currentTouchY;
                }
                lastTouchY = currentTouchY;
            }
            
            // 역방향(위로) 스크롤만 처리
            if (delta < 0) {
                e.preventDefault();
                e.stopPropagation();
                
                // 다시 활성화
                isSec3PermanentlyComplete = false;
                isSec3Active = true;
                if (isMobile && sec3Mobile) {
                    sec3Mobile.classList.add('is-active');
                } else if (sec3) {
                    sec3.classList.add('is-active');
                }
                lockedScrollPosition = window.scrollY;
                lockScroll();
                
                // progress 감소 (완료 상태에서는 1에서 시작)
                if (virtualScrollProgress >= 1) {
                    const scrollSpeed = 0.0008;
                    virtualScrollProgress += delta * scrollSpeed;
                    virtualScrollProgress = Math.max(0, Math.min(1, virtualScrollProgress));
                }
                
                window.scrollTo(0, lockedScrollPosition);
                
                // 애니메이션 업데이트
                animateSec3();
                
                // progress가 1 미만이 되면 완료 상태 해제
                if (virtualScrollProgress < 1) {
                    // 완료 상태는 유지하되, progress를 감소시킴
                }
                return;
            } else {
                // 아래로 스크롤은 무시 (다음 섹션으로 이동 가능)
                return;
            }
        }
        
        const wasActive = isSec3Active;
        isSec3Active = checkSec3Active();
        
        if (isSec3Active) {
            // 섹션 3이 활성화되었을 때
            if (!wasActive) {
                // 처음 활성화될 때 현재 스크롤 위치 저장 및 잠금
                lockedScrollPosition = window.scrollY;
                virtualScrollProgress = 0;
                lockScroll();
                if (isMobile && sec3Mobile) {
                    sec3Mobile.classList.add('is-active');
                } else if (sec3) {
                    sec3.classList.add('is-active');
                }
            }
            
            // 스크롤 입력을 가상 progress로 변환
            if (e && (e.type === 'wheel' || e.type === 'touchmove')) {
                e.preventDefault();
                e.stopPropagation();
                
                // 스크롤 delta 계산 (마우스 휠 또는 터치)
                let delta = 0;
                if (e.type === 'wheel') {
                    delta = e.deltaY;
                } else if (e.type === 'touchmove' && e.touches && e.touches.length > 0) {
                    // 터치 스크롤 처리
                    const currentTouchY = e.touches[0].clientY;
                    if (lastTouchY !== 0) {
                        delta = lastTouchY - currentTouchY; // 위로 스와이프 = 양수
                    }
                    lastTouchY = currentTouchY;
                }
                
                // delta를 progress로 변환 (스크롤 속도 조절 가능)
                // 양수 delta = 아래로 스크롤 = progress 증가
                // 음수 delta = 위로 스크롤 = progress 감소 (역방향)
                const scrollSpeed = 0.0008; // 스크롤 민감도 조절 (낮을수록 느림)
                virtualScrollProgress += delta * scrollSpeed;
                virtualScrollProgress = Math.max(0, Math.min(1, virtualScrollProgress));
                
                // progress가 0 이하로 내려가면 섹션 비활성화
                if (virtualScrollProgress <= 0) {
                    if (isMobile && sec3Mobile) {
                        sec3Mobile.classList.remove('is-active');
                    } else if (sec3) {
                        sec3.classList.remove('is-active');
                    }
                    isSec3Active = false;
                    virtualScrollProgress = 0;
                    unlockScroll();
                } else {
                    // progress가 0과 1 사이면 스크롤 잠금 유지 (애니메이션 진행 중)
                    lockScroll();
                }
                
                // 실제 스크롤은 막기
                window.scrollTo(0, lockedScrollPosition);
            }
            
            // 애니메이션 업데이트
            animateSec3();
            
            // progress 상태 및 완료 상태에 따른 처리
            // 배경 전환과 텍스트 오버레이가 완전히 나타난 후에만 스크롤 잠금 해제
            if (virtualScrollProgress >= 1 && isAnimationFullyComplete) {
                // 애니메이션 완전히 완료: 스크롤 잠금 해제 및 섹션 3 영구 비활성화
                unlockScroll();
                // 섹션 3을 영구적으로 완료 상태로 표시 (다시 활성화되지 않음)
                isSec3PermanentlyComplete = true;
                isSec3Active = false;
                if (isMobile && sec3Mobile) {
                    sec3Mobile.classList.remove('is-active');
                } else if (sec3) {
                    sec3.classList.remove('is-active');
                }
                // 더 이상 스크롤 입력을 받지 않도록 virtualScrollProgress를 1로 고정
                virtualScrollProgress = 1;
            } else if (virtualScrollProgress >= 1 && !isAnimationFullyComplete) {
                // progress는 1이지만 배경/텍스트가 아직 완전히 나타나지 않음: 잠금 유지
                lockScroll();
            } else if (virtualScrollProgress < 1 && virtualScrollProgress > 0) {
                // 애니메이션 진행 중: 스크롤 잠금 유지 (역방향 스크롤 시 다시 잠금)
                lockScroll();
            }
        } else {
            // 섹션 3이 비활성화되었을 때
            if (wasActive) {
                unlockScroll();
                if (isMobile && sec3Mobile) {
                    sec3Mobile.classList.remove('is-active');
                } else if (sec3) {
                    sec3.classList.remove('is-active');
                }
                // progress가 0이 아니면 유지 (다시 들어왔을 때 이어서 진행)
                // progress가 0이면 초기화
                if (virtualScrollProgress <= 0) {
                    virtualScrollProgress = 0;
                }
            }
            
            // 섹션 3이 비활성화된 상태에서는 wheel/touchmove 이벤트를 막지 않음
            if (e && (e.type === 'wheel' || e.type === 'touchmove')) {
                // 이벤트를 막지 않고 통과시킴
                return;
            }
        }
    }
    
    // 섹션 3 진입/이탈 감지
    function handleSec3Visibility() {
        handleSec3Scroll();
    }
    
    // 터치 시작 처리
    function handleTouchStart(e) {
        if (isSec3Active && e.touches && e.touches.length > 0) {
            touchStartY = e.touches[0].clientY;
            lastTouchY = touchStartY;
        }
    }
    
    // 터치 종료 처리
    function handleTouchEnd(e) {
        if (isSec3Active) {
            lastTouchY = 0;
        }
    }
    
    // 스크롤 및 휠 이벤트 리스너 등록
    window.addEventListener('scroll', handleSec3Visibility, { passive: true });
    
    // wheel과 touchmove 이벤트는 섹션 3이 활성화되었거나 완료된 상태에서 역방향 스크롤 처리
    window.addEventListener('wheel', function(e) {
        if (isSec3Active || isSec3PermanentlyComplete) {
            handleSec3Scroll(e);
        }
    }, { passive: false });
    
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    
    window.addEventListener('touchmove', function(e) {
        if (isSec3Active || isSec3PermanentlyComplete) {
            handleSec3Scroll(e);
        }
    }, { passive: false });
    
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    handleSec3Visibility(); // 초기 실행
    
    // Section 1 text animations - appear on page load
    const sec1Text1 = document.querySelector('.sec1-text-1');
    const sec1Text2 = document.querySelector('.sec1-text-2');
    const sec1Subtitle1 = document.querySelector('.sec1-subtitle-1');
    const sec1Subtitle2 = document.querySelector('.sec1-subtitle-2');
    const sec1Subtitle1Wrapper = document.querySelector('.sec1-subtitle-1-wrapper');
    
    // 폰트 로드 확인 함수
    function waitForFont(fontFamily, callback, timeout = 3000) {
        if ('fonts' in document && document.fonts) {
            let fontLoaded = false;
            const startTime = Date.now();
            
            // 폰트 로드 확인 함수
            function checkFont() {
                const now = Date.now();
                
                // 타임아웃 체크
                if ((now - startTime) > timeout) {
                    if (!fontLoaded) {
                        fontLoaded = true;
                        callback();
                    }
                    return;
                }
                
                // 폰트가 로드되었는지 확인
                try {
                    if (document.fonts.check(`16px "${fontFamily}"`)) {
                        if (!fontLoaded) {
                            fontLoaded = true;
                            callback();
                        }
                        return;
                    }
                } catch (e) {
                    // 에러 발생 시 무시하고 계속 진행
                }
                
                // 아직 로드되지 않았으면 재시도
                requestAnimationFrame(checkFont);
            }
            
            // document.fonts.ready가 완료된 후 확인 시작
            if (document.fonts.ready) {
                document.fonts.ready.then(() => {
                    checkFont();
                }).catch(() => {
                    // 에러 발생 시 체크 시작
                    checkFont();
                });
            } else {
                // ready가 없으면 바로 체크 시작
                checkFont();
            }
            
            // 타임아웃 설정 (안전장치)
            setTimeout(() => {
                if (!fontLoaded) {
                    fontLoaded = true;
                    callback();
                }
            }, timeout);
        } else {
            // Font Loading API 미지원 브라우저는 약간의 딜레이 후 실행
            setTimeout(() => {
                callback();
            }, 100);
        }
    }
    
    function handleSec1TextAnimation() {
        // 페이지 로드 시 또는 스크롤 위치에 따라 트리거
        const sec1 = document.querySelector('.sec1');
        if (sec1) {
            const sec1Top = sec1.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            
            // sec1이 뷰포트에 들어오면 애니메이션 시작
            if (scrollY < sec1Top + windowHeight * 0.8) {
                // "위대한" 먼저 나타남
                if (sec1Text1) {
                    sec1Text1.classList.add('visible');
                }
                // "도약" 약간의 딜레이 후 나타남
                setTimeout(() => {
                    if (sec1Text2) {
                        sec1Text2.classList.add('visible');
                    }
                }, 300);
                // 영문 텍스트 좌->우로 나타남
                setTimeout(() => {
                    if (sec1Subtitle1) {
                        sec1Subtitle1.classList.add('visible');
                    }
                    // wrapper에도 visible 추가하여 divider 애니메이션 트리거
                    if (sec1Subtitle1Wrapper) {
                        sec1Subtitle1Wrapper.classList.add('visible');
                    }
                }, 400);
                setTimeout(() => {
                    if (sec1Subtitle2) {
                        sec1Subtitle2.classList.add('visible');
                    }
                }, 500);
            }
        }
    }
    
    // 폰트 로드를 기다린 후 애니메이션 시작
    waitForFont('강원교육튼튼체', () => {
        handleSec1TextAnimation();
        window.addEventListener('scroll', handleSec1TextAnimation);
    });
    
    // Section 4 text scroll animation - 각 줄이 한 줄씩 순차적으로 나타남
    const sec4 = document.querySelector('.sec4');
    const sec4TextLine1 = document.querySelector('.sec4-text-line-1');
    const sec4TextLine2 = document.querySelector('.sec4-text-line-2');
    const sec4TextLine3 = document.querySelector('.sec4-text-line-3');
    
    let sec4AnimationTriggered = false;
    
    function handleSec4TextAnimation() {
        if (sec4 && sec4TextLine1 && sec4TextLine2 && sec4TextLine3) {
            const sec4Top = sec4.offsetTop;
            const sec4Height = sec4.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            
            // sec4가 뷰포트에 들어왔는지 확인 (50% 지점)
            const triggerPoint = sec4Top - windowHeight * 0.5;
            
            if (scrollY >= triggerPoint && scrollY < sec4Top + sec4Height) {
                if (!sec4AnimationTriggered) {
                    sec4AnimationTriggered = true;
                    
                    // 첫 번째 줄 먼저 나타남
                    setTimeout(() => {
                        sec4TextLine1.classList.add('visible');
                    }, 100);
                    
                    // 두 번째 줄 약간의 딜레이 후 나타남
                    setTimeout(() => {
                        sec4TextLine2.classList.add('visible');
                    }, 250);
                    
                    // 세 번째 줄 마지막으로 나타남
                    setTimeout(() => {
                        sec4TextLine3.classList.add('visible');
                    }, 400);
                }
            } else if (scrollY < triggerPoint) {
                // 스크롤이 위로 올라가면 애니메이션 리셋
                sec4AnimationTriggered = false;
                sec4TextLine1.classList.remove('visible');
                sec4TextLine2.classList.remove('visible');
                sec4TextLine3.classList.remove('visible');
            }
        }
    }
    
    window.addEventListener('scroll', handleSec4TextAnimation);
    handleSec4TextAnimation(); // Check initial state
    
    // Section 4 infinite logo slider
    const logoTrack = document.querySelector('.sec4-logo-track');
    if (logoTrack) {
        // 원본 로고 아이템들 (처음 4개)
        const logoItems = logoTrack.querySelectorAll('.sec4-logo-item');
        const originalItems = Array.from(logoItems).slice(0, 4); // 원본 4개만
        
        // 기존 아이템 제거 후 원본만 남기기
        logoItems.forEach((item, index) => {
            if (index >= 4) {
                item.remove();
            }
        });
        
        // 복제본을 여러 번 추가하여 충분한 길이 확보 (원본 + 복제본 3세트 = 총 16개)
        // 무한 루프를 위해 복제본을 충분히 추가
        for (let i = 0; i < 3; i++) {
            originalItems.forEach(item => {
                const clone = item.cloneNode(true);
                logoTrack.appendChild(clone);
            });
        }
        
        // 이미지 로드 후 CSS 애니메이션 변수 설정
        function setupMarqueeAnimation() {
            const allItems = logoTrack.querySelectorAll('.sec4-logo-item');
            if (allItems.length >= 4) {
                // 원본 4개의 실제 너비 측정 (정확한 계산을 위해)
                let totalWidth = 0;
                for (let i = 0; i < 4; i++) {
                    const item = allItems[i];
                    const itemWidth = item.offsetWidth;
                    const gap = i < 3 ? 100 : 0; // 마지막 아이템은 gap 없음
                    totalWidth += itemWidth + gap;
                }
                
                // CSS 변수 설정 (애니메이션 거리와 지속 시간)
                // 애니메이션이 정확히 원본 4개 너비만큼 이동하면, 복제본이 원본과 같은 위치에 옴
                const duration = 20; // 초 단위 (20초에 한 사이클)
                logoTrack.style.setProperty('--sec4-marquee-distance', `${totalWidth}px`);
                logoTrack.style.setProperty('--sec4-marquee-duration', `${duration}s`);
                
                // 디버깅용 (필요시 주석 해제)
                // console.log('Marquee distance:', totalWidth, 'px');
            }
        }
        
        // 모든 이미지가 로드될 때까지 대기
        const logoImages = logoTrack.querySelectorAll('.sec4-logo img');
        let loadedImages = 0;
        const totalImages = logoImages.length;
        
        if (totalImages > 0) {
            // 모든 이미지가 이미 로드되었는지 확인
            let allLoaded = true;
            logoImages.forEach(img => {
                if (!img.complete) {
                    allLoaded = false;
                }
            });
            
            if (allLoaded) {
                // 모든 이미지가 이미 로드되었으면 즉시 설정
                setTimeout(setupMarqueeAnimation, 100); // 약간의 지연으로 레이아웃 안정화
            } else {
                // 이미지 로드 대기
                logoImages.forEach(img => {
                    if (img.complete) {
                        loadedImages++;
                        if (loadedImages === totalImages) {
                            setTimeout(setupMarqueeAnimation, 100);
                        }
                    } else {
                        img.addEventListener('load', () => {
                            loadedImages++;
                            if (loadedImages === totalImages) {
                                setTimeout(setupMarqueeAnimation, 100);
                            }
                        });
                        img.addEventListener('error', () => {
                            loadedImages++;
                            if (loadedImages === totalImages) {
                                setTimeout(setupMarqueeAnimation, 100);
                            }
                        });
                    }
                });
            }
        } else {
            // 이미지가 없으면 즉시 설정
            setupMarqueeAnimation();
        }
    }
    
    // Section 7 support heart click
    const heartIcon = document.getElementById('sec7-heart-icon');
    const supportCount = document.getElementById('sec7-support-count');
    
    if (heartIcon && supportCount) {
        let count = 567; // 기본 응원수
        
        heartIcon.addEventListener('click', function() {
            count++;
            supportCount.textContent = count.toLocaleString();
            
            // 하트 애니메이션 효과
            heartIcon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                heartIcon.style.transform = 'scale(1)';
            }, 200);
        });
    }
    
    // Section 7 scroll animations
    const sec7 = document.getElementById('sec7');
    const sec7Text = document.querySelector('.sec7-text');
    const sec7SupportCard = document.querySelector('.sec7-support-card');
    const sec7SocialButtons = document.querySelector('.sec7-social-buttons');
    
    let sec7AnimationTriggered = false;
    
    function handleSec7Animation() {
        if (!sec7 || sec7AnimationTriggered) return;
        
        const sec7Top = sec7.offsetTop;
        const sec7Height = sec7.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        
        // 섹션 7이 뷰포트에 들어왔는지 확인 (50% 지점)
        const triggerPoint = sec7Top - windowHeight * 0.5;
        
        if (scrollY >= triggerPoint && scrollY < sec7Top + sec7Height) {
            sec7AnimationTriggered = true;
            
            // 1. 타이틀 텍스트 밑에서 위로 올라오는 효과
            setTimeout(() => {
                if (sec7Text) {
                    sec7Text.classList.add('visible');
                }
            }, 200);
            
            // 2. 응원하기 컨테이너 확대되면서 나타나는 효과
            setTimeout(() => {
                if (sec7SupportCard) {
                    sec7SupportCard.classList.add('visible');
                }
            }, 600);
            
            // 3. 소셜 버튼들 밑에서 올라오는 효과
            setTimeout(() => {
                if (sec7SocialButtons) {
                    sec7SocialButtons.classList.add('visible');
                }
            }, 1000);
        } else if (scrollY < triggerPoint) {
            // 스크롤이 위로 올라가면 애니메이션 리셋
            sec7AnimationTriggered = false;
            if (sec7Text) sec7Text.classList.remove('visible');
            if (sec7SupportCard) sec7SupportCard.classList.remove('visible');
            if (sec7SocialButtons) sec7SocialButtons.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', handleSec7Animation, { passive: true });
    handleSec7Animation(); // 초기 실행
    
    // Section 6 campus navigation
    const campusCard = document.querySelector('.sec6-campus-card');
    const navItem = document.querySelector('.sec6-nav-item');
    const navDashes = document.querySelectorAll('.sec6-nav-dash');
    const campusName = document.querySelector('.sec6-campus-name');
    const campusTags = document.querySelector('.sec6-campus-tags');
    const campusDesc = document.querySelector('.sec6-campus-desc');
    const campusLink = document.getElementById('sec6-campus-link');
    
    // 캠퍼스 데이터 (i18n에서 가져오거나 기본값 사용)
    let campusData = [];
    
    // i18n에서 캠퍼스 데이터 업데이트 함수
    function updateCampusDataFromI18n() {
        if (typeof i18n !== 'undefined' && i18n.getCampusData) {
            campusData = i18n.getCampusData();
        } else {
            // i18n이 아직 로드되지 않은 경우 기본값 사용
            campusData = [
                {
                    name: '춘천 캠퍼스',
                    image: 'images/sec6/campus_detail_춘천.png',
                    url: 'https://wwwk.kangwon.ac.kr/www/index.do',
                    tags: ['종합 연구', '글로벌 교육', '혁신인재'],
                    desc: '국제 교류 통합 체계 구축<br/>학사구조 혁신 지원 온라인 교육 플랫폼'
                },
                {
                    name: '삼척 캠퍼스',
                    image: 'images/sec6/campus_detail_삼척.png',
                    url: 'https://wwwk.kangwon.ac.kr/www/index.do',
                    tags: ['해양과학', '에너지', '환경'],
                    desc: '해양과학 특성화 대학<br/>지속가능한 에너지 연구'
                },
                {
                    name: '강릉 캠퍼스',
                    image: 'images/sec6/campus_detail_강릉.png',
                    url: 'https://www.gwnu.ac.kr/sites/kr/intro/index.html',
                    tags: ['관광', '문화', '예술'],
                    desc: '관광문화 특성화 대학<br/>글로벌 문화예술 교육'
                },
                {
                    name: '원주 캠퍼스',
                    image: 'images/sec6/campus_detail_원주.png',
                    url: 'https://www.gwnu.ac.kr/sites/kr/intro/index.html',
                    tags: ['의료', '보건', '복지'],
                    desc: '의료보건 특성화 대학<br/>지역 건강증진 연구'
                }
            ];
        }
    }
    
    // 전역 함수로 노출 (i18n에서 호출 가능하도록)
    window.updateCampusData = function(newData) {
        campusData = newData;
        // 현재 캠퍼스 인덱스로 다시 업데이트
        if (typeof updateCampus === 'function') {
            updateCampus(currentCampusIndex, false);
        }
    };
    
    // 초기 캠퍼스 데이터 로드
    updateCampusDataFromI18n();
    
    let currentCampusIndex = 0;
    let isAnimating = false;
    
    function updateCampus(index, withAnimation = false) {
        if (index < 0 || index >= campusData.length) return;
        if (isAnimating && withAnimation) return;
        
        currentCampusIndex = index;
        const campus = campusData[index];
        
        if (withAnimation && campusCard) {
            isAnimating = true;
            
            // 부드러운 크로스페이드 효과 - 오버레이와 함께 페이드 아웃
            campusCard.classList.add('fade-out');
            campusCard.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                // 콘텐츠 업데이트
                campusCard.className = 'sec6-campus-card';
                campusCard.style.backgroundImage = `url(${campus.image})`;
                
                // 캠퍼스 이름 변경
                if (campusName) {
                    campusName.style.opacity = '0';
                    campusName.textContent = campus.name;
                }
                
                // 태그 변경
                if (campusTags) {
                    campusTags.style.opacity = '0';
                    campusTags.innerHTML = '';
                    campus.tags.forEach(tag => {
                        const tagElement = document.createElement('div');
                        tagElement.className = 'sec6-tag';
                        // HTML 포함 여부 확인
                        if (tag.includes('<br />') || tag.includes('<span')) {
                            tagElement.innerHTML = tag;
                        } else {
                            tagElement.textContent = tag;
                        }
                        campusTags.appendChild(tagElement);
                    });
                }
                
                // 설명 변경
                if (campusDesc) {
                    campusDesc.style.opacity = '0';
                    campusDesc.innerHTML = campus.desc;
                }
                
                // 바로가기 링크 업데이트
                if (campusLink) {
                    campusLink.href = campus.url;
                }
                
                // 페이드 인 - 오버레이 제거와 함께
                setTimeout(() => {
                    campusCard.classList.remove('fade-out');
                    campusCard.style.opacity = '1';
                    
                    // 텍스트 콘텐츠도 페이드 인
                    if (campusName) {
                        campusName.style.transition = 'opacity 0.6s ease-in-out 0.2s';
                        campusName.style.opacity = '1';
                    }
                    if (campusTags) {
                        campusTags.style.transition = 'opacity 0.6s ease-in-out 0.3s';
                        campusTags.style.opacity = '1';
                    }
                    if (campusDesc) {
                        campusDesc.style.transition = 'opacity 0.6s ease-in-out 0.4s';
                        campusDesc.style.opacity = '1';
                    }
                    
                    setTimeout(() => {
                        campusCard.style.transition = '';
                        if (campusName) campusName.style.transition = '';
                        if (campusTags) campusTags.style.transition = '';
                        if (campusDesc) campusDesc.style.transition = '';
                        isAnimating = false;
                    }, 800);
                }, 50);
                
            }, 400);
        } else {
            // 애니메이션 없이 즉시 업데이트
            if (campusCard) {
                campusCard.className = 'sec6-campus-card';
                campusCard.style.backgroundImage = `url(${campus.image})`;
            }
            
            // 캠퍼스 이름 변경
            if (campusName) {
                campusName.textContent = campus.name;
            }
            
            // 태그 변경
            if (campusTags) {
                campusTags.innerHTML = '';
                campus.tags.forEach(tag => {
                    const tagElement = document.createElement('div');
                    tagElement.className = 'sec6-tag';
                    // HTML 포함 여부 확인
                    if (tag.includes('<br />') || tag.includes('<span')) {
                        tagElement.innerHTML = tag;
                    } else {
                        tagElement.textContent = tag;
                    }
                    campusTags.appendChild(tagElement);
                });
            }
            
            // 설명 변경
            if (campusDesc) {
                campusDesc.innerHTML = campus.desc;
            }
            
            // 바로가기 링크 업데이트
            if (campusLink) {
                campusLink.href = campus.url;
            }
        }
        
        // 네비게이션 업데이트
        if (navItem) {
            if (index === 0) {
                navItem.classList.add('sec6-nav-active');
            } else {
                navItem.classList.remove('sec6-nav-active');
            }
        }
        
        navDashes.forEach((dash, i) => {
            if (index === i + 1) {
                dash.classList.add('active');
            } else {
                dash.classList.remove('active');
            }
        });
    }
    
    // 자동 전환 함수
    function nextCampus() {
        currentCampusIndex = (currentCampusIndex + 1) % campusData.length;
        updateCampus(currentCampusIndex, true);
    }
    
    // 자동 전환 시작 (2.5초마다) - 초기에는 시작하지 않음, 카드가 나타난 후 시작
    let autoSlideInterval = null;
    
    // 자동 전환 리셋 함수
    function resetAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
        autoSlideInterval = setInterval(nextCampus, 2500);
    }
    
    // 네비게이션 클릭 이벤트
    if (navItem) {
        navItem.addEventListener('click', function() {
            updateCampus(0);
            resetAutoSlide();
        });
    }
    
    navDashes.forEach((dash, index) => {
        dash.addEventListener('click', function() {
            updateCampus(index + 1);
            resetAutoSlide();
        });
    });
    
    // 초기 설정
    updateCampus(0);
    
    // sec6-campus-link 클릭 시 외부 링크로 이동 보장
    if (campusLink) {
        campusLink.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // 외부 링크인 경우 (http:// 또는 https://로 시작)
            if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
                // 기본 동작 허용 (외부 링크로 이동)
                // target="_blank"가 이미 HTML에 설정되어 있음
                return true;
            }
        });
    }
    
    // Section 6 entrance animation - 배경 4개 차례대로 보여주고 카드 나타나게
    const sec6 = document.getElementById('sec6');
    const sec6IntroImages = document.querySelectorAll('.sec6-campus-intro-img');
    const sec6Card = document.querySelector('.sec6-campus-card');
    const sec6Title = document.querySelector('.sec6-title');
    const sec6Navigation = document.querySelector('.sec6-campus-navigation');
    
    let sec6AnimationStarted = false;
    
    function handleSec6Animation() {
        if (!sec6 || sec6AnimationStarted) return;
        
        const sec6Top = sec6.offsetTop;
        const sec6Height = sec6.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        
        // 섹션 6이 뷰포트에 들어왔는지 확인 (50% 지점)
        const triggerPoint = sec6Top - windowHeight * 0.5;
        
        if (scrollY >= triggerPoint && scrollY < sec6Top + sec6Height) {
            sec6AnimationStarted = true;
            
            // 모든 요소를 한번에 나타나게 하기
            setTimeout(() => {
                // 타이틀
                if (sec6Title) {
                    sec6Title.classList.add('show');
                }
                
                // 배경 이미지 4개 모두 동시에
                sec6IntroImages.forEach((img) => {
                    img.classList.add('show');
                });
                
                // 카드와 네비게이션 함께
                if (sec6Card) {
                    sec6Card.classList.add('show');
                }
                if (sec6Navigation) {
                    sec6Navigation.classList.add('show');
                }
                
                // 카드가 나타난 후 자동 슬라이드 시작
                if (!autoSlideInterval) {
                    autoSlideInterval = setInterval(nextCampus, 2500);
                }
            }, 200);
        }
    }
    
    window.addEventListener('scroll', handleSec6Animation, { passive: true });
    handleSec6Animation(); // 초기 실행
});
