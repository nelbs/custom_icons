 var icons = {
        "dsmr-reader": [0, 0, 24, 24, "m10.861 0.13554c-0.07643 0.017369-0.10477 0.058447-0.13256 0.13256-0.27791 0.85226-0.60262 1.5465-1.2325 2.6581-1.8527 3.2701-2.4563 5.1326-2.5767 7.9394-0.092636 2.1584 0.15021 3.6401 1.0395 6.5767 0.44466 1.4637 0.65627 2.0372 0.76743 2.0372 0.11116 0 1.279-1.9814 1.8163-3.1023 1.1672-2.3808 1.8065-5.0591 1.686-6.986-0.04632-0.70404-0.04613-0.70252 0.04651-0.19302 0.14822 0.78741 0.03624 3.2138-0.19535 4.3069-0.29644 1.3803-0.87044 2.9923-1.593 4.493-0.35202 0.74109-0.72135 1.5943-0.82325 1.9-0.54656 1.723-0.17623 3.0003 1.0651 3.6395 0.38907 0.19454 0.62874 0.25127 1.3884 0.27907 3.8722 0.16675 7.8645-2.4457 9.4208-6.179 0.58361-1.3988 0.76046-2.3068 0.76046-3.9465 0.0093-1.547-0.08313-2.1772-0.49999-3.4-0.8152-2.4363-2.6491-4.5678-4.9651-5.7813-0.37055-0.19454-0.6955-0.32314-0.73255-0.29535-0.02779 0.027791 0.09379 0.34096 0.27907 0.68371 0.26865 0.53729 0.40658 0.69654 0.86976 0.98371 1.8064 1.158 3.2792 3.2512 3.8813 5.5116 0.19454 0.75962 0.23259 1.1206 0.24186 2.1581 0 1.7601-0.27777 2.89-1.0837 4.4092-1.2413 2.3252-3.4014 4.0307-5.986 4.7069-0.82446 0.21306-2.3716 0.29473-2.8162 0.14651-0.5095-0.16674-0.96328-0.60184-1.0837-1.0465-0.12969-0.48171 0.01088-1.241 0.39069-2.1581 0.25938-0.6114 0.32336-0.69463 0.90696-1.0837 1.6489-1.1024 3.2149-3.057 4.0023-5.0302 1.158-2.8995 1.186-6.2066 0.05581-8.9301-0.49097-1.195-0.99221-1.9365-1.9186-2.8814-0.98195-0.99121-1.7221-1.4353-2.5651-1.5372-0.21306-0.023159-0.33752-0.028997-0.41395-0.011628zm-2.7093 3.9906c-0.075267-0.039371-0.31363 0.091796-0.79534 0.35581-3.4739 1.8898-5.5581 5.3088-5.5581 9.1162 0 1.5192 0.49118 3.5283 1.1674 4.7511l0.31395 0.58372-0.22325 0.29767c-0.23159 0.31496-0.42558 0.88072-0.42558 1.2791 0 0.34275 0.24968 1.1104 0.45348 1.3698l0.17674 0.22325 0.30465-0.18604 0.30697-0.19535 0.31395 0.49999c0.16675 0.27791 0.35368 0.50232 0.39999 0.50232 0.12969 0 0.73022-0.40964 0.73022-0.49302 0-0.03705-0.14724-0.28712-0.32325-0.5465l-0.31628-0.48139 0.31628-0.21163c0.17601-0.12042 0.33271-0.21395 0.36976-0.21395 0.027791 0 0.19612 0.23138 0.38139 0.5093l0.32325 0.5186 0.38837-0.23953c0.21306-0.12969 0.38135-0.27926 0.37209-0.32558-0.018527-0.046317-0.15879-0.29642-0.31628-0.55581-0.15748-0.25938-0.27666-0.48147-0.25814-0.49999 0.018527-0.009287 0.19379-0.11906 0.37906-0.23023 0.33349-0.2038 0.34368-0.21495 0.22325-0.45581-0.17601-0.32423-0.6668-0.78692-1.0744-0.99999-0.24085-0.12969-0.51149-0.1767-1.0395-0.16744l-0.70232 0.0093-0.38139-0.79534c-0.21306-0.43541-0.49123-1.2137-0.62092-1.7232-0.21306-0.79667-0.24883-1.1116-0.24883-2.2232 0-1.1024 0.045034-1.4358 0.24883-2.2232 0.63919-2.4363 2.132-4.4472 4.2441-5.7441 0.38907-0.23159 0.4915-0.3601 0.68604-0.83255 0.17138-0.4215 0.25899-0.63271 0.18372-0.67208zm-3.3627 15.091c0.11811-0.0139 0.22873 0.0189 0.4279 0.08837 0.15748 0.05558 0.28604 0.12802 0.28604 0.15581 0 0.07411-1.7887 1.2232-1.8814 1.2232-0.11116 0-0.064384-0.31324 0.11163-0.70232 0.12969-0.27791 0.27797-0.42619 0.57441-0.57441 0.23622-0.11579 0.36328-0.1768 0.48139-0.19069z"]

};


async function getIcon(name) {
    var svgDef = icons[name];
    var primaryPath = svgDef[4];
  return {
    path: primaryPath,
        viewBox:  svgDef[0] +" " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  };
}
window.customIconsets = window.customIconsets || {};
window.customIconsets["custom"] = getIcon;
