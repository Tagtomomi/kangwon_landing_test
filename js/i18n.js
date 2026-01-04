// i18n Translation System
const i18n = {
    currentLang: 'ko', // 기본 언어: 한국어
    
    translations: {
        ko: {
            // Header & Navigation
            'nav.intro': '메인',
            'nav.vision': '비전',
            'nav.video': '홍보영상',
            'nav.campus': '캠퍼스 소개',
            'nav.together': '함께하기',
            'header.univ-link': '강원대학교 바로가기',
            
            // Section 1
            'sec1.text1': '위대한',
            'sec1.text2': '도약',
            
            // Section 2
            'sec2.date': '2026년 3월,',
            'sec2.main': '통합 강원대학교 공식 출범합니다',
            'sec2.sub1': '춘천 삼척 강릉 원주 ',
            'sec2.sub2': '4개의 캠퍼스가',
            'sec2.sub3': '하나의 비전으로 융합되어 ',
            'sec2.sub4': '글로컬 대학도시',
            'sec2.sub5': '로 힘차게 도약합니다.',
            
            // Section 3
            'sec3.badge': '강원 1도 1국립대학',
            'sec3.title': '위대한 도약',
            'sec3.subtitle': '4개 캠퍼스의 시너지가 모여<br />글로컬 대학도시를 구현합니다',
            'sec3.campus.chuncheon': '춘천 캠퍼스',
            'sec3.campus.gangneung': '강릉 캠퍼스',
            'sec3.campus.samcheok': '삼척 캠퍼스',
            'sec3.campus.wonju': '원주 캠퍼스',
            'sec3.overlay.line1': '통합 강원대학교의',
            'sec3.overlay.line2': '지역 혁신 생태계',
            'sec3.final.title': '통합 강원대학교',
            'sec3.final.desc': '지역 혁신 생태계의 시작',
            
            // Section 4
            'sec4.line1': '흩어져 있던 캠퍼스의<span class="sec4-mobile-br"><br></span> <span class="sec4-text-bold">힘을 하나로</span> 모아,',
            'sec4.line2': '<span class="sec4-text-bold">지역을 넘어 세계로</span> 나아가는',
            'sec4.line3': '<span class="sec4-text-bold">글로컬(Global + Local)</span><span class="sec4-mobile-br"><br></span> <span class="sec4-text-bold">혁신대학</span>을 구현합니다.',
            
            // Section 5
            'sec5.text': '4개의 캠퍼스<br />하나의 미래',
            
            // Section 6
            'sec6.title': '캠퍼스를 소개합니다',
            'sec6.link': '바로가기',
            'sec6.campus.chuncheon': '춘천 캠퍼스',
            'sec6.campus.gangneung': '강릉 캠퍼스',
            'sec6.campus.samcheok': '삼척 캠퍼스',
            'sec6.campus.wonju': '원주 캠퍼스',
            'sec6.tag.research': '종합 연구',
            'sec6.tag.global': '글로벌 교육',
            'sec6.tag.innovation': '혁신인재',
            'sec6.desc.chuncheon': '국제 교류 통합 체계 구축<br />학사구조 혁신 지원 온라인 교육 플랫폼',
            'sec6.desc.gangneung': '지역산업 연계 교육, 연구<br />지역 인재 확보, 지역정주 프로그램',
            'sec6.desc.samcheok': '집중교육 프로그램 통합 운영<br />캠퍼스 이동식 창업교육 연합운영',
            'sec6.desc.wonju': '혁신/기업도시 연계 문제해결형 교육<br />산학융합 캠퍼스 구축',
            'sec6.tag.marine': '해양과학',
            'sec6.tag.energy': '에너지',
            'sec6.tag.environment': '환경',
            'sec6.tag.tourism': '관광',
            'sec6.tag.culture': '문화',
            'sec6.tag.art': '예술',
            'sec6.tag.medical': '의료',
            'sec6.tag.health': '보건',
            'sec6.tag.welfare': '복지',
            'sec6.tag.education': '교육·연구',
            'sec6.tag.talent': '인재확보',
            'sec6.tag.local': '지역정주',
            'sec6.tag.intensive': '집중교육센터',
            'sec6.tag.venture': '창업미네르바스쿨',
            'sec6.tag.field': '현장체험 오픈센터',
            'sec6.tag.industry': '산학융합',
            
            // Section 7
            'sec7.text.gray1': '통합 강원대학교의',
            'sec7.text.white': '새로운 도약을',
            'sec7.text.gray2': '응원해 주세요',
            'sec7.support.title': '응원 하트 보내기',
            'sec7.support.count': '명이 응원했습니다',
            'sec7.support.button': '응원 메시지 보내기',
            'sec7.support.note': '클릭 시 인스타그램 페이지로 이동됩니다.',
            'sec7.social.youtube': '강원대학교 유튜브 바로가기',
            'sec7.social.instagram': '강원대학교 인스타그램 바로가기',
            
            // Footer
            'footer.desc.line1': '4개 캠퍼스가 하나로 통합되어',
            'footer.desc.line2': '새로운 미래를 향해 도약하는 강원대학교입니다.',
            'footer.section.title': '캠퍼스 안내',
            'footer.campus.chuncheon': '춘천캠퍼스',
            'footer.campus.gangneung': '강릉캠퍼스',
            'footer.campus.samcheok': '삼척캠퍼스',
            'footer.campus.wonju': '원주캠퍼스',
            'footer.campus.headquarters': '본부',
            'footer.campus.address.chuncheon': '강원도 춘천시 강원대학길 1(효자동) 강원대학교 춘천캠퍼스',
            'footer.campus.address.gangneung': '강원특별자치도 강릉시 죽헌길 7 국립 강릉원주대학교 강릉캠퍼스',
            'footer.campus.address.samcheok': '강원도 삼척시 중앙로 346 강원대학교 삼척캠퍼스',
            'footer.campus.address.wonju': '강원특별자치도 원주시 흥업면 남원로 150 강릉원주대학교 원주캠퍼스',
            'footer.link.privacy': '개인정보 처리방침',
            'footer.link.email': '이메일주소수집거부',
            'footer.link.phone': '전화번호검색',
            'footer.link.info': '대학정보공시',
        },
        en: {
            // Header & Navigation
            'nav.intro': 'Main',
            'nav.vision': 'Vision',
            'nav.video': 'Promotional Video',
            'nav.campus': 'Campus',
            'nav.together': 'Join Us',
            'header.univ-link': 'Kangwon National University',
            
            // Section 1
            'sec1.text1': 'The Great',
            'sec1.text2': 'Leap',
            
            // Section 2
            'sec2.date': 'This March 2026,',
            'sec2.main': 'Kangwon National University officially launches',
            'sec2.sub1': 'Chuncheon,Samcheok,Gangneung,Wonju-',
            'sec2.sub2': 'Four Campuses',
            'sec2.sub3': 'unite by one vision,',
            'sec2.sub4': 'leaping forward as a',
            'sec2.sub5': 'Glocal university city.',
            
            // Section 3
            'sec3.badge': 'Gangwon One Province, One University',
            'sec3.title': 'The Great Leap',
            'sec3.subtitle': 'The synergy of four campuses<br />creates a glocal university city',
            'sec3.campus.chuncheon': 'Chuncheon Campus',
            'sec3.campus.gangneung': 'Gangneung Campus',
            'sec3.campus.samcheok': 'Samcheok Campus',
            'sec3.campus.wonju': 'Wonju Campus',
            'sec3.overlay.line1': 'The Regional Innovation Ecosystem',
            'sec3.overlay.line2': 'of Integrated Kangwon University',
            'sec3.final.title': 'Integrated Kangwon University',
            'sec3.final.desc': 'The Beginning of Regional Innovation Ecosystem',
            
            // Section 4
            'sec4.line1': 'By uniting the strengths<span class="sec4-mobile-br"><br></span>of our once-scattered campuses,',
            'sec4.line2': 'we build a <span class="sec4-text-bold">glocal (global + local)</span><span class="sec4-mobile-br"><br></span><span class="sec4-text-bold">innovation university</span>',
            'sec4.line3': '<span class="sec4-text-bold">that advances beyond the region to the world</span>.',
            
            // Section 5
            'sec5.text': 'Four Campuses<br />One Future',
            
            // Section 6
            'sec6.title': 'Introducing Our Campuses',
            'sec6.link': 'Visit',
            'sec6.campus.chuncheon': 'Chuncheon Campus',
            'sec6.campus.gangneung': 'Gangneung Campus',
            'sec6.campus.samcheok': 'Samcheok Campus',
            'sec6.campus.wonju': 'Wonju Campus',
            'sec6.tag.research': 'Comprehensive Research',
            'sec6.tag.global': 'Global Education',
            'sec6.tag.innovation': 'Innovative Talent',
            'sec6.desc.chuncheon': 'Integrated international exchange system<br />Academic structure innovation support online education platform',
            'sec6.desc.gangneung': 'Regional industry-linked education and research<br />Regional talent acquisition and regional settlement programs',
            'sec6.desc.samcheok': 'Integrated operation of intensive education programs<br />Inter-campus mobile venture education joint operation',
            'sec6.desc.wonju': 'Innovation/enterprise city-linked problem-solving education<br />Industry-academia convergence campus construction',
            'sec6.tag.marine': 'Marine Science',
            'sec6.tag.energy': 'Energy',
            'sec6.tag.environment': 'Environment',
            'sec6.tag.tourism': 'Tourism',
            'sec6.tag.culture': 'Culture',
            'sec6.tag.art': 'Arts',
            'sec6.tag.medical': 'Medical',
            'sec6.tag.health': 'Health',
            'sec6.tag.welfare': 'Welfare',
            'sec6.tag.education': 'Education·Research',
            'sec6.tag.talent': 'Talent Acquisition',
            'sec6.tag.local': 'Regional Settlement',
            'sec6.tag.intensive': 'Intensive Education Center',
            'sec6.tag.venture': 'Venture Minerva School',
            'sec6.tag.field': 'Field Experience Open Center',
            'sec6.tag.industry': 'Industry-Academia Convergence',
            
            // Section 7
            'sec7.text.gray1': 'Join us in supporting',
            'sec7.text.white': 'Integrated Kangwon National University\'s new leap!',
            'sec7.text.gray2': '',
            'sec7.support.title': 'Send Support Heart',
            'sec7.support.count': 'people supported',
            'sec7.support.button': 'Send Support Message',
            'sec7.support.note': 'Click to go to Instagram page.',
            'sec7.social.youtube': 'Kangwon University YouTube',
            'sec7.social.instagram': 'Kangwon University Instagram',
            
            // Footer
            'footer.desc.line1': 'Four campuses unite as one',
            'footer.desc.line2': 'Kangwon University leaping toward a new future.',
            'footer.section.title': 'Campus Information',
            'footer.campus.chuncheon': 'Chuncheon Campus',
            'footer.campus.gangneung': 'Gangneung Campus',
            'footer.campus.samcheok': 'Samcheok Campus',
            'footer.campus.wonju': 'Wonju Campus',
            'footer.campus.headquarters': 'Headquarters',
            'footer.campus.address.chuncheon': 'Kangwon National University (Chuncheon Campus), 1 Gangwondaehak-gil, Chuncheon-si, Gangwon-do, Republic of Korea (24341)',
            'footer.campus.address.gangneung': 'Gangneung-Wonju National University, 7 Jukheon-gil, Gangneung-si, Gangwon-do',
            'footer.campus.address.samcheok': 'Kangwon National University (Samcheok Campus), 346 Jungang-ro, Samcheok-si, Gangwon-do 25913, Republic of Korea',
            'footer.campus.address.wonju': 'Gangneung-Wonju National University, 150 Namwon-ro, Heungeop-myeon, Wonju-si, Gangwon-do',
            'footer.link.privacy': 'Privacy Policy',
            'footer.link.email': 'Email Collection Refusal',
            'footer.link.phone': 'Phone Directory',
            'footer.link.info': 'University Information Disclosure',
        }
    },
    
    // 캠퍼스 데이터 가져오기 (동적 업데이트용)
    getCampusData: function() {
        const lang = this.currentLang;
        return [
            {
                name: this.translations[lang]['sec6.campus.chuncheon'],
                image: 'images/sec6/campus_detail_춘천.png',
                url: 'https://wwwk.kangwon.ac.kr/www/index.do',
                tags: [
                    this.translations[lang]['sec6.tag.research'],
                    this.translations[lang]['sec6.tag.global'],
                    this.translations[lang]['sec6.tag.innovation']
                ],
                desc: this.translations[lang]['sec6.desc.chuncheon']
            },
            {
                name: this.translations[lang]['sec6.campus.samcheok'],
                image: 'images/sec6/campus_detail_삼척.png',
                url: 'https://wwwk.kangwon.ac.kr/www/index.do',
                tags: [
                    this.translations[lang]['sec6.tag.intensive'],
                    this.translations[lang]['sec6.tag.venture']
                ],
                desc: this.translations[lang]['sec6.desc.samcheok']
            },
            {
                name: this.translations[lang]['sec6.campus.gangneung'],
                image: 'images/sec6/campus_detail_강릉.png',
                url: 'https://www.gwnu.ac.kr/sites/kr/intro/index.html',
                tags: [
                    this.translations[lang]['sec6.tag.education'],
                    this.translations[lang]['sec6.tag.talent'],
                    this.translations[lang]['sec6.tag.local']
                ],
                desc: this.translations[lang]['sec6.desc.gangneung']
            },
            {
                name: this.translations[lang]['sec6.campus.wonju'],
                image: 'images/sec6/campus_detail_원주.png',
                url: 'https://www.gwnu.ac.kr/sites/kr/intro/index.html',
                tags: [
                    this.translations[lang]['sec6.tag.field'],
                    this.translations[lang]['sec6.tag.industry']
                ],
                desc: this.translations[lang]['sec6.desc.wonju']
            }
        ];
    },
    
    // 언어 변경 함수
    setLanguage: function(lang) {
        if (!this.translations[lang]) {
            console.warn(`Language "${lang}" not found`);
            return;
        }
        
        this.currentLang = lang;
        document.documentElement.setAttribute('lang', lang);
        
        // 영문일 때 body에 lang-en 클래스 추가, 한글일 때 제거
        if (lang === 'en') {
            document.body.classList.add('lang-en');
        } else {
            document.body.classList.remove('lang-en');
        }
        
        // 영문일 때 전체 폰트 크기를 4px 작게 조절 (섹션2 인라인 스타일 제외)
        const adjustFontSizes = (isEnglish) => {
            // 모든 요소를 가져오되, 스크립트, 스타일, noscript 태그는 제외
            const allElements = document.querySelectorAll('*:not(script):not(style):not(noscript)');
            
            allElements.forEach(element => {
                // 섹션2 인라인 스타일 요소는 제외 (한글 버전 유지)
                if (element.classList.contains('sec2-main-text-inline') || 
                    element.classList.contains('sec2-sub-text-inline')) {
                    return;
                }
                
                const computedStyle = window.getComputedStyle(element);
                const fontSize = computedStyle.fontSize;
                
                // font-size가 있고 0이 아닌 경우에만 처리
                if (fontSize && fontSize !== '0px' && parseFloat(fontSize) > 0) {
                    const currentSize = parseFloat(fontSize);
                    
                    if (isEnglish) {
                        // 원본 font-size 저장 (한 번만)
                        if (!element.dataset.originalFontSize) {
                            element.dataset.originalFontSize = fontSize;
                        }
                        // 4px 작게 조정
                        element.style.fontSize = (currentSize - 2) + 'px';
                    } else {
                        // 원본으로 복원
                        if (element.dataset.originalFontSize) {
                            element.style.fontSize = element.dataset.originalFontSize;
                            delete element.dataset.originalFontSize;
                        } else {
                            element.style.fontSize = '';
                        }
                    }
                }
            });
        };
        
        // 언어 변경 시 폰트 크기 조절 적용
        adjustFontSizes(lang === 'en');
        
        // 모든 data-i18n 속성을 가진 요소 업데이트
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translations[lang][key];
            
            if (translation !== undefined) {
                // HTML 포함 여부 확인
                if (translation.includes('<br />') || translation.includes('<span')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // 언어 표시 업데이트 및 활성화 상태 관리
        // KR 버튼
        const krButtons = document.querySelectorAll('.header-lang, .mobile-lang-kr');
        krButtons.forEach(button => {
            button.textContent = 'KR';
            if (lang === 'ko') {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // EN 버튼
        const enButtons = document.querySelectorAll('.lang-btn-en, .mobile-lang-en');
        enButtons.forEach(button => {
            button.textContent = 'EN';
            if (lang === 'en') {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Section 6 캠퍼스 데이터 업데이트 (동적 업데이트)
        if (typeof window.updateCampusData === 'function') {
            window.updateCampusData(this.getCampusData());
        }
        
        // Section 6 캠퍼스 미리보기 이미지 업데이트 (언어에 따라)
        const campusPreviewImages = document.querySelectorAll('.sec6-campus-preview-img');
        const campusImageMap = {
            'ko': {
                0: 'images/sec6/campus_intro_춘천.png',
                1: 'images/sec6/campus_intro_삼척.png',
                2: 'images/sec6/campus_intro_강릉.png',
                3: 'images/sec6/campus_intro_원주.png'
            },
            'en': {
                0: 'images/sec6/campus_intro_춘천_eng.png',
                1: 'images/sec6/campus_intro_삼척_eng.png',
                2: 'images/sec6/campus_intro_강릉_eng.png',
                3: 'images/sec6/campus_intro_원주_eng.png'
            }
        };
        
        campusPreviewImages.forEach((img, index) => {
            const campusIndex = index;
            if (campusImageMap[lang] && campusImageMap[lang][campusIndex]) {
                img.src = campusImageMap[lang][campusIndex];
            }
        });
        
        // localStorage에 저장
        localStorage.setItem('preferredLanguage', lang);
    },
    
    // 초기화 함수
    init: function() {
        // 저장된 언어 설정 불러오기, 없으면 기본값 'ko' 사용
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && this.translations[savedLang]) {
            this.setLanguage(savedLang);
        } else {
            // 저장된 언어가 없으면 기본값 'ko'로 설정
            this.setLanguage('ko');
        }
        
        // KR 버튼 이벤트 리스너
        const krButtons = document.querySelectorAll('.header-lang, .mobile-lang-kr');
        krButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.setLanguage('ko');
            });
        });
        
        // EN 버튼 이벤트 리스너
        const enButtons = document.querySelectorAll('.lang-btn-en, .mobile-lang-en');
        enButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.setLanguage('en');
            });
        });
    }
};

// DOM 로드 후 초기화
document.addEventListener('DOMContentLoaded', function() {
    i18n.init();
});

