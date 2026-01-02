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
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not(.nav-link[data-section])');
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
        fadeIn: 800,           // 카드 페이드 인 + 둥둥 떠오름: 0.8초
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
    
    // 모바일용 타이밍 (텍스트 먼저, 그 다음 캠퍼스)
    const MOBILE_DURATIONS = {
        textTitle: 800,        // 타이틀 나타남: 0.8초
        textSubtitle: 800,     // 서브타이틀 나타남: 0.8초
        textCompleteWait: 2000, // 텍스트 완료 후 대기: 2초 (캠퍼스가 나타나기 전)
        campusGridFadeIn: 800, // 캠퍼스 2x2 그리드로 나타남: 0.8초
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
        totalDuration = DURATIONS.fadeIn + DURATIONS.textDelay + DURATIONS.textTitle + DURATIONS.textSubtitle + 
                       DURATIONS.textCompleteWait + DURATIONS.cardMerge + DURATIONS.textHide + 
                       DURATIONS.whiteTransition + DURATIONS.mergeToCircle + DURATIONS.whiteFadeOut + DURATIONS.backgroundTransition;
    }
    
    // 섹션 3 활성화 여부 확인
    function checkSec3Active() {
        if (!sec3) return false;
        
        // 이미 완전히 완료된 경우 다시 활성화하지 않음
        if (isSec3PermanentlyComplete) {
            return false;
        }
        
        const sec3Top = sec3.offsetTop;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // 섹션 3이 화면 세로 중앙에 도달했는지 확인
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
            // PC: 기존 순서 유지 (캠퍼스 먼저 → 텍스트 → 합쳐지는 효과)
            // 1. 페이드 인 + 둥둥 떠오름 (0 ~ fadeIn)
            fadeInProgress = Math.min(1, elapsed / DURATIONS.fadeIn);
            
            // 2. 텍스트 나타남 (fadeIn + textDelay ~ fadeIn + textDelay + textTitle + textSubtitle)
            textStartTime = DURATIONS.fadeIn + DURATIONS.textDelay;
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
        
        // 4. 화이트로 변하기 시작 (원이 겹치기 시작하는 중간 지점부터, 더 빠르게 시작)
        const whiteStartProgress = 0.3; // mergeProgress 30% 지점부터 화이트로 변하기 시작 (더 일찍 시작)
        const cardMergeDuration = isMobile ? MOBILE_DURATIONS.cardMerge : DURATIONS.cardMerge;
        const whiteStartTime = mergeStartTime + (cardMergeDuration * whiteStartProgress);
        const whiteEndTime = mergeEndTime; // 합쳐지기가 완료될 때까지
        // 초반에는 은은하게, 후반으로 갈수록 빠르게 강해지도록 비선형 보간 적용 (pow 함수)
        const rawWhiteProgress = mergeProgress < whiteStartProgress ? 0 : 
                                 mergeProgress >= 1 ? 1 : 
                                 (mergeProgress - whiteStartProgress) / (1 - whiteStartProgress);
        // pow 함수를 사용하여 더 빠르게 증가 (지수 1.8로 낮춰서 더 빠르게)
        const whiteProgress = Math.pow(rawWhiteProgress, 1.8);
        
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
            // 모바일에서는 initialTop을 0으로 설정 (텍스트 아래 위치 기준)
            const initialTop = isMobile ? 0 : initialTops[index];
            
            let campusOpacity = 0;
            let translateXValue, translateY, rotation = 0;
            
            if (isMobile) {
                // 모바일: 2x2 그리드로 먼저 나타남 (텍스트 아래)
                const campusGridProgress = elapsed < campusGridStartTime ? 0 : 
                                         elapsed >= campusGridEndTime ? 1 : 
                                         (elapsed - campusGridStartTime) / (campusGridEndTime - campusGridStartTime);
                
                // 텍스트 위치 계산 (모바일에서 텍스트는 top: 120px에 위치)
                // CSS 기준: top: 120px, badge(40px) + gap(17px) + title(42px) + gap(17px) + subtitle(28px) = 144px
                // 텍스트 하단: 120 + 144 = 264px, 그리드 시작: 264 + 40(여백) = 304px
                const textTop = 120;
                const textHeight = 144; // badge + gaps + title + subtitle
                const textBottomY = textTop + textHeight + 40; // 텍스트 하단 + 40px 여백
                
                // 2x2 그리드 위치 계산 (텍스트 아래 중앙 기준)
                // index 0: 왼쪽 위 (chuncheon), index 1: 오른쪽 위 (gangneung)
                // index 2: 왼쪽 아래 (samcheok), index 3: 오른쪽 아래 (wonju)
                const campusSize = 75; // 모바일에서 150px / 2 = 75px
                const gridGap = 20; // 그리드 간격
                
                const gridPositions = [
                    { x: -campusSize - gridGap/2, y: -campusSize - gridGap/2 },  // chuncheon: 왼쪽 위
                    { x: campusSize + gridGap/2, y: -campusSize - gridGap/2 },  // gangneung: 오른쪽 위
                    { x: -campusSize - gridGap/2, y: campusSize + gridGap/2 },   // samcheok: 왼쪽 아래
                    { x: campusSize + gridGap/2, y: campusSize + gridGap/2 }     // wonju: 오른쪽 아래
                ];
                
                const gridPos = gridPositions[index];
                
                if (elapsed < mergeStartTime) {
                    // 2x2 그리드 상태 유지 (텍스트 아래)
                    const gridCenterY = textBottomY; // 텍스트 아래에 그리드 중심 위치
                    
                    translateXValue = `calc(50% + ${gridPos.x}px)`;
                    translateY = gridCenterY + gridPos.y - initialTop;
                    campusOpacity = campusGridProgress;
                } else {
                    // 합쳐지는 애니메이션 시작
                    // 2x2 그리드에서 화면 중앙으로 합쳐지는 애니메이션
                    const adjustedProgress = Math.min(1, mergeProgress);
                    const currentX = gridPos.x * (1 - adjustedProgress);
                    const currentY = gridPos.y * (1 - adjustedProgress);
                    
                    // 합쳐질 때는 화면 중앙으로 이동
                    const gridCenterY = textBottomY;
                    const finalCenterY = contentHeight * 0.5;
                    const centerY = gridCenterY + (finalCenterY - gridCenterY) * adjustedProgress;
                    
                    translateXValue = `calc(50% + ${currentX}px)`;
                    translateY = centerY + currentY - initialTop;
                    campusOpacity = 1;
                }
            } else {
                // PC: 기존 로직
                // 초기 페이드 인 시 둥둥 떠오름
                const initialFloatUpY = 30 * (1 - fadeInProgress);
                
                // 텍스트 애니메이션이 진행되는 동안 둥둥 떠다니는 효과
                // 텍스트 완료 후 대기 시간까지 계속 떠다님
                const textCompleteTime = textEndTime + DURATIONS.textCompleteWait;
                let floatingY = 0;
                if (elapsed < textCompleteTime && fadeInProgress >= 1) {
                    // sin 함수를 사용하여 부드러운 떠다니는 효과 (각 카드마다 다른 주기)
                    // 시간 기반으로 유지하되 현재 시간 사용
                    const floatPeriods = [2000, 2200, 2400, 2600]; // 각 카드마다 다른 주기 (밀리초)
                    const floatAmplitude = 15; // 떠다니는 범위 (픽셀)
                    const currentTime = Date.now(); // 현재 시간 사용
                    const floatCycle = (currentTime / floatPeriods[index]) * Math.PI * 2;
                    floatingY = Math.sin(floatCycle) * floatAmplitude;
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
                translateY = initialFloatUpY + floatingY + mergeY + curveOffset;
                
                campusOpacity = Math.min(1, fadeInProgress);
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
                    // mergeProgress 0.4부터 하얀색 효과 시작 (원이 겹치기 시작하는 중간 지점)
                    if (whiteProgress > 0) {
                        // whiteProgress에 따라 각 색상에서 하얀색으로 점진적 변환
                        // 초반(whiteProgress 0~0.3): 매우 은은하게
                        // 중반(whiteProgress 0.3~0.7): 점점 강해짐
                        // 후반(whiteProgress 0.7~1.0): 빠르게 강해짐
                        const glowR = Math.round(baseR + (255 - baseR) * whiteProgress);
                        const glowG = Math.round(baseG + (255 - baseG) * whiteProgress);
                        const glowB = Math.round(baseB + (255 - baseB) * whiteProgress);
                        
                        // overlay에 하얀빛 효과 (whiteProgress에 따라 더 빠르게 증가)
                        // 초반에는 약하게, 후반으로 갈수록 빠르게 강하게
                        const glowOpacityMultiplier = whiteProgress < 0.2 ? whiteProgress * 0.5 : // 초반: 더 빠르게 시작
                                                      whiteProgress < 0.5 ? 0.1 + (whiteProgress - 0.2) * 0.6 : // 중반: 빠르게 강해짐
                                                      0.28 + (whiteProgress - 0.5) * 0.72; // 후반: 매우 빠르게 강해짐
                        const glowOpacity = overlayOpacity + (0.4 * glowOpacityMultiplier); // 0.3 → 0.4로 증가하여 더 강하게
                        overlay.style.transition = 'background 0.15s ease-out'; // 0.2s → 0.15s로 더 빠르게
                        overlay.style.background = `rgba(${glowR}, ${glowG}, ${glowB}, ${Math.min(1, glowOpacity)})`;
                        
                        // blur와 box-shadow로 하얀빛 효과 (더 빠르게 증가)
                        if (imageWrapper) {
                            // blur: 더 빠르게 증가
                            const glowBlur = whiteProgress < 0.2 ? whiteProgress * 8 : // 초반: 0~1.6px (더 빠르게)
                                           whiteProgress < 0.5 ? 1.6 + (whiteProgress - 0.2) * 20 : // 중반: 1.6~7.6px (더 빠르게)
                                           7.6 + (whiteProgress - 0.5) * 42.4; // 후반: 7.6~50px (더 빠르게)
                            imageWrapper.style.filter = `blur(${glowBlur}px)`;
                            
                            // 하얀빛 box-shadow 효과 (더 빠르게 강해짐)
                            const glowShadowIntensity = whiteProgress < 0.2 ? 0.8 + (whiteProgress * 0.2) : // 초반: 0.8~0.84 (더 빠르게)
                                                       whiteProgress < 0.5 ? 0.84 + (whiteProgress - 0.2) * 0.4 : // 중반: 0.84~0.96 (더 빠르게)
                                                       0.96 + (whiteProgress - 0.5) * 0.24; // 후반: 0.96~1.2 (더 빠르게)
                            const glowShadowBlur = whiteProgress < 0.2 ? 100 + (whiteProgress * 20) : // 초반: 100~104px (더 빠르게)
                                                  whiteProgress < 0.5 ? 104 + (whiteProgress - 0.2) * 40 : // 중반: 104~116px (더 빠르게)
                                                  116 + (whiteProgress - 0.5) * 34; // 후반: 116~150px (더 빠르게)
                            imageWrapper.style.boxShadow = `0px 0px ${glowShadowBlur}px rgba(${glowR}, ${glowG}, ${glowB}, ${glowShadowIntensity})`;
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
                    
                    if (campusCircle) campusCircle.style.display = 'none';
                    if (campusDot) campusDot.style.display = 'none';
                    
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
                    // 하단 campusInfo 페이드아웃 (whiteProgress에 따라)
                    // 하지만 campusName은 campusInfo 밖으로 이동시켜 독립적으로 제어
                    if (campusInfo) {
                        const bottomInfoOpacity = Math.max(0, 1 - (whiteProgress * 1.5)); // 빠르게 사라짐
                        // campusInfo 내의 circle과 dot만 opacity 조정
                        if (campusCircle) campusCircle.style.opacity = bottomInfoOpacity;
                        if (campusDot) campusDot.style.opacity = bottomInfoOpacity;
                        // campusInfo 자체는 opacity 유지 (campusName이 밖으로 나가므로)
                        campusInfo.style.opacity = bottomInfoOpacity;
                        campusInfo.style.transition = 'opacity 0.3s ease-out';
                    }
                    
                    // 동그라미 중앙에 하얀색 캠퍼스명 표시
                if (campusName) {
                        // 중앙 텍스트는 whiteProgress에 따라 나타남
                        const centerTextOpacity = Math.min(1, whiteProgress * 1.5); // 빠르게 나타남
                        
                        // campusName을 campusInfo 밖으로 이동 (campus의 직접 자식으로)
                        // campusName을 이미지 위에 배치 (campus 기준으로 absolute)
                    campusName.style.position = 'absolute';
                        campusName.style.left = '50%';
                        // imageWrapper의 중앙 위치 계산 (초기 top + translateY + imageWrapper 높이/2)
                        const initialTops = [131, 131, 586.10, 586.10];
                        const initialTop = initialTops[index];
                        const imageWrapperCenter = initialTop + translateY + 90; // 180px / 2 = 90px
                        campusName.style.top = `${imageWrapperCenter}px`;
                        campusName.style.transform = 'translate(-50%, -50%)';
                        campusName.style.fontSize = '16px';
                        campusName.style.lineHeight = '1.2';
                        campusName.style.color = 'white';
                        campusName.style.textShadow = '0px 0px 4px rgba(0, 0, 0, 0.5)';
                    campusName.style.justifyContent = 'center';
                        campusName.style.alignItems = 'center';
                    campusName.style.display = 'flex';
                    campusName.style.flexDirection = 'column';
                    campusName.style.margin = '0';
                        // campusInfo의 opacity와 독립적으로 제어하기 위해 opacity를 직접 설정
                        // 하지만 campusInfo가 opacity 0이면 자식도 보이지 않으므로, 
                        // campusName을 campusInfo 밖으로 이동시켜야 함
                        campusName.style.opacity = centerTextOpacity;
                        campusName.style.transition = 'opacity 0.3s ease-out';
                        campusName.style.textAlign = 'center';
                        campusName.style.whiteSpace = 'nowrap';
                        campusName.style.zIndex = '10';
                        campusName.style.pointerEvents = 'none';
                        
                        // campusName을 campusInfo 밖으로 이동 (DOM에서)
                        if (campusName.parentElement === campusInfo && !campusName.dataset.moved) {
                            campus.appendChild(campusName);
                            campusName.dataset.moved = 'true';
                        }
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
                        if (campusInfo && campusName.parentElement === campus) {
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
                if (campusCircle) campusCircle.style.display = '';
                if (campusDot) campusDot.style.display = '';
                
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
        
        // 배경 전환 효과 (오버레이로 새 배경 이미지 페이드인)
        if (sec3 && backgroundTransitionProgress > 0) {
            // 새 배경 이미지를 오버레이로 추가 (기존 배경은 유지)
            if (!sec3.querySelector('.sec3-background-image-overlay')) {
                const bgImageOverlay = document.createElement('div');
                bgImageOverlay.className = 'sec3-background-image-overlay';
                bgImageOverlay.style.position = 'absolute';
                bgImageOverlay.style.top = '0';
                bgImageOverlay.style.left = '0';
                bgImageOverlay.style.width = '100%';
                bgImageOverlay.style.height = '100%';
                bgImageOverlay.style.backgroundImage = 'url(images/sec3/sec_vison_bg.png)';
                bgImageOverlay.style.backgroundSize = 'cover';
                bgImageOverlay.style.backgroundPosition = 'center';
                bgImageOverlay.style.backgroundRepeat = 'no-repeat';
                bgImageOverlay.style.zIndex = '5';
                bgImageOverlay.style.pointerEvents = 'none';
                bgImageOverlay.style.willChange = 'opacity';
                bgImageOverlay.style.opacity = '0';
                sec3.appendChild(bgImageOverlay);
            }
            
            const bgImageOverlay = sec3.querySelector('.sec3-background-image-overlay');
            if (bgImageOverlay) {
                // 새 배경 이미지가 페이드인되면서 나타남
                bgImageOverlay.style.opacity = backgroundTransitionProgress;
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
                bgOverlay.style.zIndex = '15';
                bgOverlay.style.pointerEvents = 'none';
                bgOverlay.style.willChange = 'opacity';
                bgOverlay.style.transition = 'opacity 0.8s ease-out';
                sec3.appendChild(bgOverlay);
            }
            
            const bgOverlay = sec3.querySelector('.sec3-background-overlay');
            if (bgOverlay) {
                // 하얀색 오버레이가 페이드아웃되면서 새 배경이 나타남
                bgOverlay.style.opacity = 1 - backgroundTransitionProgress;
            }
        }
        
        // 배경 전환이 완료되면 오버레이 유지 (배경을 완전히 바꾸지 않음)
        if (sec3 && backgroundTransitionProgress >= 1) {
            if (!sec3.dataset.backgroundFinalized) {
                // 하얀색 오버레이 완전히 제거
                const bgOverlay = sec3.querySelector('.sec3-background-overlay');
                if (bgOverlay) {
                    bgOverlay.style.opacity = '0';
                    bgOverlay.style.display = 'none';
                }
                
                // 배지 완전히 숨기기
                if (sec3Badge) {
                    sec3Badge.style.opacity = '0';
                    sec3Badge.style.display = 'none';
                }
                
                sec3.dataset.backgroundFinalized = 'true';
            }
        }
        
        // 최종 텍스트 오버레이 (원으로 합쳐진 후 - 화면이 하얗게 덮일 때)
        let textOverlayOpacity = 0;
        if (textOverlay) {
            // mergeCircleProgress가 0.8 이상일 때부터 나타나기 시작
            if (mergeCircleProgress >= 0.8) {
                const textProgress = (mergeCircleProgress - 0.8) / 0.2; // 0.8~1.0 구간을 0~1로 변환
                textOverlayOpacity = textProgress;
                textOverlay.style.opacity = textOverlayOpacity;
                
                // 텍스트 색상을 하얀색으로 변경
                const textLines = textOverlay.querySelectorAll('.sec3-text-overlay-line1, .sec3-text-overlay-line2');
                textLines.forEach(line => {
                    line.style.color = 'white';
                });
            } else {
                textOverlayOpacity = 0;
                textOverlay.style.opacity = 0;
            }
            
            // 배경 전환이 진행될 때도 텍스트가 보이도록
            if (backgroundTransitionProgress > 0) {
                textOverlayOpacity = 1;
                textOverlay.style.opacity = 1;
                const textLines = textOverlay.querySelectorAll('.sec3-text-overlay-line1, .sec3-text-overlay-line2');
                textLines.forEach(line => {
                    line.style.color = 'white';
                });
            }
        }
        
        // 애니메이션 완전 완료 체크: 배경 전환 완료 + 텍스트 오버레이 완전히 나타남
        // 배경 전환이 완료되고 텍스트 오버레이가 완전히 나타났을 때만 완료로 간주
        isAnimationFullyComplete = backgroundTransitionProgress >= 1 && textOverlayOpacity >= 1;
        
        // 애니메이션 완료 상태 업데이트
        if (progress >= 1) {
            if (sec3 && !sec3.classList.contains('animation-complete')) {
                sec3.classList.add('animation-complete');
                // 배경 전환 완료 후 최종 상태로 고정 (렉 방지)
                if (!sec3.dataset.backgroundFinalized) {
                    // 배경 이미지는 오버레이로 유지 (기존 배경은 그대로)
                    
                    const bgOverlay = sec3.querySelector('.sec3-background-overlay');
                    if (bgOverlay) {
                        bgOverlay.style.opacity = '0';
                        bgOverlay.style.display = 'none';
                    }
                    
                    const sec3Badge = document.querySelector('.sec3-badge');
                    if (sec3Badge) {
                        sec3Badge.style.opacity = '0';
                        sec3Badge.style.display = 'none';
                    }
                    
                    sec3.dataset.backgroundFinalized = 'true';
                }
            }
        } else {
            // 애니메이션이 완료되지 않았으면 완료 상태 제거
            if (sec3 && sec3.classList.contains('animation-complete')) {
                sec3.classList.remove('animation-complete');
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
                sec3.classList.add('is-active');
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
                sec3.classList.add('is-active');
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
                    sec3.classList.remove('is-active');
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
                if (!sec3.classList.contains('animation-complete')) {
                    sec3.classList.add('animation-complete');
                }
                // 섹션 3을 영구적으로 완료 상태로 표시 (다시 활성화되지 않음)
                isSec3PermanentlyComplete = true;
                isSec3Active = false;
                sec3.classList.remove('is-active');
                // 더 이상 스크롤 입력을 받지 않도록 virtualScrollProgress를 1로 고정
                virtualScrollProgress = 1;
            } else if (virtualScrollProgress >= 1 && !isAnimationFullyComplete) {
                // progress는 1이지만 배경/텍스트가 아직 완전히 나타나지 않음: 잠금 유지
                lockScroll();
                if (sec3.classList.contains('animation-complete')) {
                    sec3.classList.remove('animation-complete');
                }
            } else if (virtualScrollProgress < 1 && virtualScrollProgress > 0) {
                // 애니메이션 진행 중: 스크롤 잠금 유지 (역방향 스크롤 시 다시 잠금)
                lockScroll();
                if (sec3.classList.contains('animation-complete')) {
                    sec3.classList.remove('animation-complete');
                }
            }
        } else {
            // 섹션 3이 비활성화되었을 때
            if (wasActive) {
                unlockScroll();
                sec3.classList.remove('is-active');
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
                }, 800);
                setTimeout(() => {
                    if (sec1Subtitle2) {
                        sec1Subtitle2.classList.add('visible');
                    }
                }, 1000);
            }
        }
    }
    
    // 페이지 로드 시 즉시 실행
    handleSec1TextAnimation();
    window.addEventListener('scroll', handleSec1TextAnimation);
    
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
                    }, 200);
                    
                    // 두 번째 줄 약간의 딜레이 후 나타남
                    setTimeout(() => {
                        sec4TextLine2.classList.add('visible');
                    }, 500);
                    
                    // 세 번째 줄 마지막으로 나타남
                    setTimeout(() => {
                        sec4TextLine3.classList.add('visible');
                    }, 800);
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
    
    // Section 6 campus navigation
    const campusCard = document.querySelector('.sec6-campus-card');
    const navItem = document.querySelector('.sec6-nav-item');
    const navDashes = document.querySelectorAll('.sec6-nav-dash');
    const campusName = document.querySelector('.sec6-campus-name');
    const campusTags = document.querySelector('.sec6-campus-tags');
    const campusDesc = document.querySelector('.sec6-campus-desc');
    const campusLink = document.getElementById('sec6-campus-link');
    
    // 캠퍼스 데이터
    const campusData = [
        {
            name: '춘천 캠퍼스',
            image: 'images/sec6/campus_img_춘천.png',
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
    
    let currentCampusIndex = 0;
    let isAnimating = false;
    
    function updateCampus(index, withAnimation = false) {
        if (index < 0 || index >= campusData.length) return;
        if (isAnimating && withAnimation) return;
        
        currentCampusIndex = index;
        const campus = campusData[index];
        
        if (withAnimation && campusCard) {
            isAnimating = true;
            
            // 부드러운 크로스페이드 효과
            campusCard.style.opacity = '0';
            campusCard.style.transition = 'opacity 0.4s ease-in-out';
            
            setTimeout(() => {
                // 콘텐츠 업데이트
                campusCard.className = 'sec6-campus-card';
                if (index === 0) {
                    campusCard.classList.add('sec6-campus-chuncheon');
                } else if (index === 1) {
                    campusCard.style.backgroundImage = `url(${campus.image})`;
                } else if (index === 2) {
                    campusCard.style.backgroundImage = `url(${campus.image})`;
                } else if (index === 3) {
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
                        tagElement.textContent = tag;
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
                
                // 페이드 인
                setTimeout(() => {
                    campusCard.style.opacity = '1';
                    
                    setTimeout(() => {
                        campusCard.style.transition = '';
                        isAnimating = false;
                    }, 400);
                }, 50);
                
            }, 200);
        } else {
            // 애니메이션 없이 즉시 업데이트
            if (campusCard) {
                campusCard.className = 'sec6-campus-card';
                if (index === 0) {
                    campusCard.classList.add('sec6-campus-chuncheon');
                } else if (index === 1) {
                    campusCard.style.backgroundImage = `url(${campus.image})`;
                } else if (index === 2) {
                    campusCard.style.backgroundImage = `url(${campus.image})`;
                } else if (index === 3) {
                    campusCard.style.backgroundImage = `url(${campus.image})`;
                }
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
                    tagElement.textContent = tag;
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
            
            // 타이틀 먼저 나타나기
            if (sec6Title) {
                setTimeout(() => {
                    sec6Title.classList.add('show');
                }, 200);
            }
            
            // 배경 이미지 4개를 차례대로 빠르게 보여주기 (각각 0.8초씩)
            sec6IntroImages.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add('show');
                }, 300 + (index * 800)); // 첫 번째는 0.3초 후, 이후 각각 0.8초 간격
            });
            
            // 마지막 배경 이미지가 보여진 후 카드와 네비게이션 함께 나타나기
            const cardDelay = 300 + (sec6IntroImages.length * 800) + 300; // 마지막 이미지 후 0.3초 추가 대기
            
            setTimeout(() => {
                // 카드와 네비게이션 함께 나타나기
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
            }, cardDelay);
        }
    }
    
    window.addEventListener('scroll', handleSec6Animation, { passive: true });
    handleSec6Animation(); // 초기 실행
});
