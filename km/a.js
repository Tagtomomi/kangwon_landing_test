document.addEventListener("DOMContentLoaded", function () {
  // GSAP 플러그인 등록 (한 번만 등록되어 있으면 생략 가능)
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  // 반응형 로직 실행
  mm.add(
    {
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)",
    },
    (context) => {
      let { isDesktop } = context.conditions;

      // 구슬 크기에 따른 중앙 보정값 계산
      let orbSize = isDesktop ? 150 : 90;
      let offset = orbSize / 2;

      // 타임라인 설정 (.sec3-new 전용)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sec3-new", // 새로 만든 클래스 트리거
          start: "top top",
          end: "+=5000", // 애니메이션 길이
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // 애니메이션 시퀀스
      tl.to(".sec3-new .intro-item", {
        y: 0,
        opacity: 1,
        duration: 3,
        stagger: 1,
        ease: "power2.out",
      })
        .to(".sec3-new .orb", { opacity: 1, duration: 2 }, "<")
        .to(".sec3-new .orb-label", { opacity: 1, duration: 2 }, "<")

        .to(".sec3-new .orb-label", { opacity: 0, duration: 1 })
        .call(() => {
          // 둥둥 떠다니는 애니메이션 일시 정지
          document
            .querySelectorAll(".sec3-new .orb-container")
            .forEach((el) => (el.style.animationPlayState = "paused"));
        })

        // [중앙 정렬]
        .to(".sec3-new .orb-container", {
          top: `calc(50% - ${offset}px)`,
          left: `calc(50% - ${offset}px)`,
          scale: 0.5,
          duration: 5,
          ease: "power2.inOut",
        })

        .addLabel("turnWhite")
        .to(
          ".sec3-new .orb-bg",
          { opacity: 0, duration: 2, ease: "power2.in" },
          "turnWhite"
        )
        .to(
          ".sec3-new .orb",
          {
            backgroundColor: "#fff",
            border: "none",
            filter: `blur(${isDesktop ? 20 : 10}px)`,
            boxShadow: isDesktop
              ? "0px 0px 150px 50px white"
              : "0px 0px 80px 30px white",
            duration: 2,
            ease: "power2.in",
          },
          "turnWhite"
        )

        .to(".sec3-new .flash-overlay", {
          opacity: 1,
          duration: 1,
          ease: "power2.in",
        })

        // 배경 교체
        .set(".sec3-new .intro-container", { opacity: 0 })
        .set(".sec3-new .orb-container", { opacity: 0 })
        .set(".sec3-new .bg-initial", { opacity: 0 })
        .set(".sec3-new .bg-final", { opacity: 1 })

        .to(".sec3-new .flash-overlay", {
          opacity: 0,
          duration: 3,
          ease: "power2.out",
        })
        .to(
          ".sec3-new .final-message",
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 3,
            ease: "back.out(1.7)",
          },
          "-=2.5"
        );

      // 역재생 시 애니메이션 복구
      tl.eventCallback("onReverseComplete", () => {
        document
          .querySelectorAll(".sec3-new .orb-container")
          .forEach((el) => (el.style.animationPlayState = "running"));
      });
    }
  );
});
