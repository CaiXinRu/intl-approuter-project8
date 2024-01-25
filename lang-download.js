// google spreadsheets 文件：https://docs.google.com/spreadsheets/d/1hxZdpAPrMKObpak0lVCDTpfyf2TPO1EMq1bie4wLt_w/edit?usp=sharing
// 本機執行工具，取得遠端 google-spreadsheet 文件的CSV，再轉成json格式儲存
// 在TERMINAL輸入指令node lang-download.js即可載入語言包

const fs = require("fs").promises; // 使用 fs.promises 可以使 fs 操作變為 Promise-based
const { parse } = require("csv-parse");
const axios = require("axios");

const LANG_PATHS = {
  tw: "./src/dictionaries/zh/",
  en: "./src/dictionaries/en/",
};

const SOURCE_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS_eh7-Uz3t7BPGRYpGDqSNSFfKWLup03rubnU19Z1B-EHr7i1serW5g--yPTZiY6zDzVb7mJpot5xe/pub?output=csv";

const TAB_ARRAY = [
  { gid: "0", fileName: "about.json" },
  { gid: "1843368633", fileName: "home.json" },
  { gid: "1299602173", fileName: "navigation.json" },
  { gid: "533824863", fileName: "our-story.json" },
  { gid: "540474866", fileName: "press.json" },
  { gid: "413827936", fileName: "case-studies.json" },
  { gid: "751564703", fileName: "contact-us.json" },
];

async function fetchCsvFromUrl(url) {
  const res = await axios.get(url);
  return new Promise((resolve, reject) => {
    parse(res.data, { columns: true }, (err, output) =>
      err ? reject(err) : resolve(output)
    );
  });
}

async function getLangs(gidVal, languages) {
  if (!gidVal) {
    throw new Error("param of gidVal on getLangs is missing !");
  }

  try {
    const langList = await fetchCsvFromUrl(`${SOURCE_CSV_URL}&gid=${gidVal}`);
    const translations = {};

    languages.forEach((lang) => {
      translations[lang] = {};
    });

    langList.forEach((item) => {
      if (!item.key) return;

      languages.forEach((lang) => {
        translations[lang][item.key.trim()] = item[lang]?.trim() || "";
      });
    });

    return translations;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

async function writeJsonFile(path, data) {
  try {
    await fs.access(path);
    console.log(`${path} 存在`);
  } catch (err) {
    console.log(`${path} 不存在，請新增此路徑檔案`);
  }

  const jsonData = JSON.stringify(data, null, 2);
  try {
    await fs.writeFile(path, jsonData);
    console.log(`${path} 文件寫入成功 `);
  } catch (err) {
    console.error(`${path} 文件寫入失敗 `);
    console.error(err.message);
  }
}

async function generateDictionaryFile(TAB_ARRAY) {
  try {
    let code = `
    import { getRequestConfig } from "next-intl/server";

    export default getRequestConfig(async ({ locale }) => {
      const messages = {`;

    for (const item of TAB_ARRAY) {
      code += `...(await import(\`../dictionaries/\${locale}/${item.fileName}\`)).default,`;
    }

    code += `
      };
      return {
        messages,
      };
    });

    `;

    await fs.writeFile("./src/lib/dictionary.ts", code);
    console.log("./src/lib/dictionary.ts" + "文件寫入成功");
  } catch (err) {
    console.error("./src/lib/dictionary.ts" + "文件寫入失敗");
    console.error(err.message);
  }
}

async function main() {
  const languages = Object.keys(LANG_PATHS);
  await generateDictionaryFile(TAB_ARRAY);
  for (const item of TAB_ARRAY) {
    try {
      const translations = await getLangs(item.gid, languages);

      if (languages.some((lang) => !Object.keys(translations[lang]).length)) {
        console.warn(
          ` ${item.gid}, ${item.fileName} 語系可能全都是空白的語言包, 已中止運行`
        );
        console.log("---");
        return;
      }

      languages.forEach((lang) => {
        writeJsonFile(
          `${LANG_PATHS[lang]}${item.fileName}`,
          translations[lang]
        );
      });

      console.log("---");
    } catch (err) {
      console.error(err.message);
    }
  }
}

main();
