document.addEventListener("DOMContentLoaded", () => {
  const sideBannerWrap = document.querySelector(".side-banner-wrap");
  const sideBannerList = sideBannerWrap
    ? sideBannerWrap.querySelectorAll(".side-banner")
    : [];

  const sideBannerWrapMb = document.querySelector(".side-banner-wrap-mb");
  const sideBannerListMb = sideBannerWrapMb
    ? sideBannerWrapMb.querySelectorAll(".side-banner")
    : [];

  const style = {
    bgColorList: ["#edf4ff", "#def9fe", "#fff6de"],
  };

  sideBannerList.forEach((sideBanner, index) => {
    sideBanner.style.backgroundColor = style.bgColorList[index];
  });

  sideBannerListMb.forEach((sideBannerMb, index) => {
    sideBannerMb.style.backgroundColor = style.bgColorList[index];
  });
});
