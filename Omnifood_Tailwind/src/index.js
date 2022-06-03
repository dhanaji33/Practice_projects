import styles from "./style.css";
const section1 = document.querySelector(".section1");
const header = document.getElementsByTagName("header")[1];
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: [0, 0.25, 0.5, 0.75, 1],
  }
);
observer.observe(section1);
