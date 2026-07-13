(() => {
  const groups = [
    { folder: "portfolio-previews", count: 2, digits: 3 },
    { folder: "case-previews/ai-dashboard", count: 13, digits: 2 },
    { folder: "case-previews/life-app", count: 14, digits: 2 },
    { folder: "case-previews/app-redesign", count: 17, digits: 2 },
    { folder: "case-previews/crm-workflow", count: 14, digits: 2 },
    { folder: "case-previews/aigc-visual-system", count: 12, digits: 2 },
    { folder: "case-previews/smart-environment", count: 8, digits: 2 },
    { folder: "case-previews/smart-park", count: 6, digits: 2 },
    { folder: "case-previews/icon-system", count: 5, digits: 2 },
    { folder: "case-previews/vehicle-interface", count: 1, digits: 2 },
    { folder: "case-previews/ip-character", count: 9, digits: 2 }
  ];
  const heights = [
    788, 788, 788, 788, 783, 788, 1408, 1104, 788, 788, 788, 788, 871, 846, 788, 788, 788, 788,
    788, 788, 1182, 788, 1123, 908, 2484, 1260, 788, 788, 827, 1048, 788, 788, 788, 933, 788, 937,
    1132, 788, 788, 1786, 788, 878, 1620, 1055, 1101, 788, 788, 788, 788, 788, 788, 788, 788, 788,
    788, 788, 788, 897, 788, 788, 1491, 788, 1110, 788, 1313, 788, 788, 788, 788, 1022, 788, 788, 788,
    788, 788, 788, 3097, 2771, 788, 2503, 788, 788, 788, 4095, 2092, 3164, 788, 788, 1126, 788, 788,
    1035, 1793, 1827, 1611, 1303, 1303, 1303, 1303, 2580, 1255
  ];
  const container = document.querySelector("[data-portfolio-pages]");
  let portfolioIndex = 0;

  groups.forEach((group) => {
    for (let localIndex = 1; localIndex <= group.count; localIndex += 1) {
      const globalPage = portfolioIndex + 1;
      const globalLabel = String(globalPage).padStart(3, "0");
      const localLabel = String(localIndex).padStart(group.digits, "0");
      const figure = document.createElement("figure");
      const image = document.createElement("img");

      figure.className = "case-page";
      figure.dataset.casePage = globalLabel;
      image.src = `../assets/${group.folder}/page-${localLabel}.webp`;
      image.width = 1400;
      image.height = heights[portfolioIndex];
      image.alt = globalPage === 1 ? "毛鑫磊 UI/UX 完整作品集封面" : `完整作品集第 ${globalPage} 页`;
      image.decoding = "async";

      if (globalPage === 1) {
        image.fetchPriority = "high";
      } else {
        image.loading = "lazy";
      }

      figure.append(image);
      container.append(figure);
      portfolioIndex += 1;
    }
  });

  if (portfolioIndex !== heights.length) {
    throw new Error("Portfolio page configuration is incomplete.");
  }
})();
