const projectCases = {
  "life-service-app": {
    title: "惠买生活 App",
    kicker: "C 端产品 · 本地生活 · 电商导购",
    summary: "围绕本地生活与电商导购场景，梳理内容层级、核心路径与移动端购买体验。",
    folder: "life-app",
    pdf: "life-service-app.pdf",
    heights: [788, 788, 788, 788, 788, 1182, 788, 1123, 908, 2484, 1260, 788, 788, 827]
  },
  "app-redesign": {
    title: "App Redesign",
    kicker: "C 端产品 · 体验改版 · 交互动效",
    summary: "通过信息层级、状态反馈与关键路径重构，让产品界面更清晰，也让高频操作更顺手。",
    folder: "app-redesign",
    pdf: "app-redesign.pdf",
    heights: [1048, 788, 788, 788, 933, 788, 937, 1132, 788, 788, 1786, 788, 878, 1620, 1055, 1101, 788]
  },
  "crm-workflow-system": {
    title: "CRM 业务流系统",
    kicker: "B 端系统 · CRM · 业务流程",
    summary: "围绕客户、线索、审批与状态流转，建立适合高频业务操作的后台信息架构。",
    folder: "crm-workflow",
    pdf: "crm-workflow-system.pdf",
    heights: [788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 897, 788, 788]
  },
  "aigc-visual-system": {
    title: "AIGC 视觉系统",
    kicker: "AIGC · 视觉系统 · 组件表达",
    summary: "探索 AI 工具、运营内容与界面组件的统一表达，兼顾生成效率与品牌一致性。",
    folder: "aigc-visual-system",
    pdf: "aigc-visual-system.pdf",
    heights: [1491, 788, 1110, 788, 1313, 788, 788, 788, 788, 1022, 788, 788]
  },
  "smart-park-visualization": {
    title: "智慧园区可视化",
    kicker: "数据可视化 · 智慧园区 · 监控大屏",
    summary: "整合地图、监控与预警状态，让复杂园区数据可以被快速识别、定位和处理。",
    folder: "smart-park",
    pdf: "smart-park-visualization.pdf",
    heights: [788, 788, 788, 788, 3097, 2771, 788, 2503, 788, 788, 788, 4095, 2092, 3164]
  },
  "icon-system": {
    title: "图标与组件系统",
    kicker: "设计系统 · 图标 · 组件规范",
    summary: "统一图标语言、组件状态与使用规范，为多业务界面建立稳定、可复用的视觉基础。",
    folder: "icon-system",
    pdf: "icon-system.pdf",
    heights: [788, 788, 1126, 788, 788]
  },
  "vehicle-interface": {
    title: "车机出行界面",
    kicker: "车机 HMI · 出行场景 · 信息安全",
    summary: "面向驾驶场景组织信息优先级与交互入口，在有限注意力下保持操作清晰和安全。",
    folder: "vehicle-interface",
    pdf: "vehicle-interface.pdf",
    heights: [1035]
  }
};

const params = new URLSearchParams(window.location.search);
const project = projectCases[params.get("id")];
const title = document.querySelector("[data-case-title]");
const kicker = document.querySelector("[data-case-kicker]");
const summary = document.querySelector("[data-case-summary]");
const description = document.querySelector("[data-case-description]");
const total = document.querySelector("[data-total-pages]");
const pagesContainer = document.querySelector("[data-case-pages]");
const download = document.querySelector("[data-case-download]");

if (!project) {
  document.title = "未找到案例 | 毛鑫磊作品集";
  title.textContent = "没有找到这个案例";
  summary.textContent = "它可能已经移动，请返回作品列表重新选择。";
  kicker.textContent = "404 · 项目案例";
  total.textContent = "00";
  download.removeAttribute("download");
  download.textContent = "返回作品集";
} else {
  document.title = `${project.title} | 毛鑫磊作品集`;
  description.content = `${project.title} UI/UX 项目案例。`;
  title.textContent = project.title;
  kicker.textContent = project.kicker;
  summary.textContent = project.summary;
  total.textContent = String(project.heights.length).padStart(2, "0");
  pagesContainer.setAttribute("aria-label", `${project.title} 案例页面`);
  download.href = `../../assets/project-pdfs/${project.pdf}`;

  project.heights.forEach((height, index) => {
    const pageNumber = String(index + 1).padStart(2, "0");
    const figure = document.createElement("figure");
    const image = document.createElement("img");

    figure.className = "case-page";
    figure.dataset.casePage = pageNumber;
    image.src = `../../assets/case-previews/${project.folder}/page-${pageNumber}.webp`;
    image.width = 1400;
    image.height = height;
    image.alt = `${project.title} 项目页面 ${index + 1}`;
    image.decoding = "async";

    if (index === 0) {
      image.fetchPriority = "high";
    } else {
      image.loading = "lazy";
    }

    figure.append(image);
    pagesContainer.append(figure);
  });
}
