import type { TooltipComponentFormatterCallbackParams } from "echarts";

export function generatorFormat(
  params: TooltipComponentFormatterCallbackParams
) {
  if (!Array.isArray(params)) {
    const data = params.data as Record<string, unknown>;
    const tips = data.tips as string[];
    const dom = document.createElement("div");
    dom.style.fontSize = "10px";
    dom.style.lineHeight = "10px";
    const title = document.createElement("div");
    title.style.display = "flex";
    title.style.alignItems = "center";
    const dot = document.createElement("p");
    const titleText = document.createElement("span");
    titleText.textContent = data.name as string;
    titleText.style.marginLeft = "4px";
    titleText.style.fontSize = "12px";
    dot.style.width = "8px";
    dot.style.height = "8px";
    dot.style.borderRadius = "50%";
    dot.style.margin = "0";
    dot.style.padding = "0";
    dot.style.backgroundColor = params.color as string;
    title.appendChild(dot);
    title.appendChild(titleText);
    if (!tips?.length) {
      const titleValue = document.createElement("span");
      titleValue.textContent = data.value as string;
      titleValue.style.marginLeft = "8px";
      titleValue.style.fontSize = "12px";
      titleValue.style.fontWeight = "600";
      title.appendChild(titleValue);
    }
    dom.appendChild(title);
    if (tips?.length) {
      tips.forEach((tip) => {
        const line = document.createElement("p");
        line.textContent = tip;
        line.style.color = " #4E5969";
        dom.appendChild(line);
      });
    }
    return dom;
  }
  return "";
}
