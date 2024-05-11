/* Observer right0_5s(베이직) 스크롤 이벤트 -------------------------------------------------- */
// Intersection Observer right0_5s 생성
const observerright0_5s = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 화면에 들어옴
                entry.target.classList.add("fade-in");
            } else {
                // 화면에서 나감
                entry.target.classList.remove("fade-in");
            }
        });
    },
    // 화면에서 해당 요소가 10% (10% = 0.1) 이상 보일 경우 화면에 들어온 것으로 판단함
    { threshold: 0.1 }
);

// 관찰 대상 설정
const targetElementsright0_5s = document.querySelectorAll(".right0_5s");
targetElementsright0_5s.forEach((element) => {
    observerright0_5s.observe(element);
});