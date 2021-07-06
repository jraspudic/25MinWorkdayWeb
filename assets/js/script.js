const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

const navbar = document.getElementsByClassName("navbar")[0];

//navbar active link
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//scrollTop to remove box shadow on navbar
document.addEventListener("scroll", (e) => {
  if (window.scrollY == 0) {
    navbar.style.boxShadow = "unset";
  } else {
    navbar.style.boxShadow = "0px 2px 8px 2px #ddd";
  }
});

// tabs
const featureTabs = document.querySelectorAll("[data-tab-target]");
const featureTabsContents = document.querySelectorAll(
  "[data-feature-tab-content]"
);

featureTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    featureTabsContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    featureTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    //when you click a new tab, always make the first paragraph from that tab active, and change to image of that paragraph!
    let featureDetailTabs = target.querySelectorAll(".feature-tab-content");
    //remove active from all images
    featureDetailTabsContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    featureDetailTabs.forEach((detailTab, index) => {
      if (index == 0) {
        detailTab.classList.add("active");
        var target = document.querySelector(detailTab.dataset.detailTabTarget);
        target.classList.add("active");
      } else {
        detailTab.classList.remove("active");
      }
    });
    target.classList.add("active");
  });
});

// feature detail tabs
const featureDetailTabs = document.querySelectorAll("[data-detail-tab-target]");
const featureDetailTabsContents = document.querySelectorAll(
  "[data-detail-tab-content]"
);
featureDetailTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.detailTabTarget);
    featureDetailTabsContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    featureDetailTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    target.classList.add("active");
  });
});

//remove notification div

const removeNotificationIcon = document.getElementById(
  "removeNotificationIcon"
);

removeNotificationIcon.addEventListener("click", () => {
  let notificationDiv = document.querySelector(".top-page-notification");
  if (notificationDiv) {
    notificationDiv.remove();
    window.localStorage.setItem("notificationRemoved", true);
  }
});

var notificationRemoved = window.localStorage.getItem("notificationRemoved");

if (notificationRemoved) {
  let notificationDiv = document.querySelector(".top-page-notification");
  notificationDiv.remove();
}
