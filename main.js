const tab1 = document.querySelector(".tab-1");
const tab2 = document.querySelector(".tab-2");
const tabs = document.querySelectorAll(".tab");
const tabHead1 = document.querySelector(".tab-head-1");
const tabHead2 = document.querySelector(".tab-head-2");
const tabHeads = document.querySelectorAll(".tab-head");
function showTab(tabNum) {
  const displayableTab = eval(`tab${tabNum}`);
  const activeTab = eval(`tabHead${tabNum}`);
  tabs.forEach((tab) => (tab.style.display = "none"));
  displayableTab.style.display = "flex";
  tabHeads.forEach((tabHead) => tabHead.classList.remove("active"));
  activeTab.classList.add("active");
}
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const dots = document.querySelectorAll(".dot");
const testimonial1 = document.querySelector(".testimonial1");
const testimonial2 = document.querySelector(".testimonial2");
const testimonial3 = document.querySelector(".testimonial3");
const testimonials = document.querySelectorAll(".testimonial");
function handleTestimonials(e) {
  const activeNum = e.target.getAttribute("name");
  const displayableTestimonail = eval(`testimonial${activeNum}`);
  const displayableDot = eval(`dot${activeNum}`);
  testimonials.forEach((testimonial) => {
    testimonial.style.display = "none";
  });
  displayableTestimonail.style.display = "flex";
  dots.forEach((dot) => dot.classList.remove("activeDot"));
  displayableDot.classList.add("activeDot");
}
dots.forEach((dot) => dot.addEventListener("click", handleTestimonials));