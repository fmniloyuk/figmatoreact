module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        black_900_7f: "#0000007f",
        deep_purple_A700_b2: "#690fd1b2",
        bluegray_50: "#e9ecef",
        pink_A200_cc: "#ff36a5cc",
        pink_900: "#802824",
        light_blue_A100: "#7cd4ff",
        blue_700_cc: "#016deacc",
        pink_901: "#6d1a16",
        red_800: "#cc2229",
        black_900_90: "#00000090",
        black_900_3f: "#0000003f",
        green_700: "#219653",
        red_A700_7f: "#fa01017f",
        light_blue_900: "#0052b1",
        white_A700_99: "#ffffff99",
        green_A700: "#0acd5e",
        black_900_00: "#00000000",
        green_A701: "#0acd5d",
        pink_A700: "#be096d",
        light_blue_A700: "#0478ff",
        deep_purple_A200: "#9747ff",
        red_A701: "#fa0101",
        red_A700: "#cd0c13",
        black_900_4c: "#0000004c",
        gray_600: "#7e7e7e",
        gray_204: "#eaeaea",
        gray_402: "#beccbe",
        gray_601: "#7f7f7f",
        gray_202: "#e8e8e8",
        black_900_0a: "#0000000a",
        gray_400: "#b9b9b9",
        gray_203: "#e7e7e7",
        gray_401: "#c4c4c4",
        blue_700: "#016dea",
        blue_701: "#016ce9",
        gray_800: "#4f4f4f",
        gray_602: "#727272",
        black_900_0f: "#0000000f",
        gray_200: "#ececec",
        black_900_0c: "#0000000c",
        light_blue_A700_b2: "#0478ffb2",
        gray_201: "#f0f0f0",
        white_A700_60: "#ffffff60",
        indigo_900_87: "#003c8187",
        white_A700_66: "#ffffff66",
        white_A700_63: "#ffffff63",
        black_900_11: "#00000011",
        black_900_99: "#00000099",
        bluegray_400: "#8d879f",
        black_900_19: "#0e0e0e19",
        black_900_14: "#00000014",
        white_A700: "#ffffff",
        black_900_59: "#00000059",
        gray_52: "#f2f6ff",
        gray_51: "#fafafa",
        red_900: "#a81c1e",
        red_500: "#f24e3d",
        amber_A400: "#ffc600",
        gray_50: "#fcfcfc",
        black_900_1e: "#0000001e",
        black_900_20: "#00000019",
        gray_100_16: "#f4f4f416",
        black_900: "#000000",
        teal_800: "#01903f",
        green_A700_26: "#0acd5e26",
        deep_purple_A700: "#690fd1",
        red_A700_cc: "#fa0101cc",
        deep_orange_A400: "#fa4001",
        black_900_bf: "#000000bf",
        black_900_26: "#00000026",
        gray_501: "#aaa9ad",
        gray_50_33: "#fcfcfc33",
        gray_502: "#969595",
        blue_801: "#1f57c3",
        gray_500: "#bfa68c",
        red_A700_19: "#fa010119",
        blue_800: "#005fcd",
        white_A700_a2: "#ffffffa2",
        gray_503: "#9aaa97",
        blue_700_87: "#016ce987",
        gray_504: "#959494",
        bluegray_100: "#d6d6d6",
        gray_101: "#f4f4f4",
        gray_102: "#f5f5f5",
        gray_300: "#e6e6e6",
        gray_100: "#f7f7f7",
        black_900_33: "#00000033",
        black_900_cc: "#000000cc",
        blue_700_b2: "#016deab2",
        bluegray_102: "#d5e0d5",
        bluegray_101: "#d9d9d9",
        indigo_900: "#003a7e",
        indigo_901: "#003c81",
      },
      borderRadius: {
        radius2: "2px",
        radius3: "3px",
        radius4: "4px",
        radius05: "0.5px",
        radius6: "6px",
        radius06: "0.6px",
        radius7: "7px",
        radius8: "8px",
        radius10: "10px",
        radius11: "11px",
        radius12: "12px",
        radius15: "15px",
        radius17: "17px",
        radius18: "18px",
        radius20: "20px",
        radius22: "22px",
        radius25: "25px",
        radius251: "2.5px",
        radius30: "30px",
        radius35: "35px",
        radius40: "40px",
        radius45: "4.5px",
        radius50: "50%",
        radius145: "14.5px",
        radius175: "17.5px",
        radius195: "19.5px",
        radius225: "22.5px",
        radius375: "37.5px",
        radius576: "5.76px",
        radius677: "6.77px",
        radius1025: "10.25px",
        radius1363: "13.63px",
        radius1365: "13.65px",
        radius1405: "14.05px",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#fa4001,#cd0c13,#a81c1e,#802824)",
        gradient1: "linear-gradient(90deg ,#016dea,#fa0101)",
        gradient2: "linear-gradient(90deg ,#fa0101,#016dea)",
        gradient3: "linear-gradient(270deg ,#aaa9ad,#8d879f)",
        gradient4: "linear-gradient(90deg ,#016dea,#005fcd,#0052b1,#003a7e)",
        gradient5: "linear-gradient(90deg ,#01903f,#0acd5e)",
        gradient6: "linear-gradient(310.27deg ,#0478ff,#690fd1)",
        gradient7: "linear-gradient(90deg ,#016ce987,#003c8187)",
        gradient8: "linear-gradient(90deg ,#016ce9,#003c81)",
        gradient9: "linear-gradient(180deg ,#00000000,#000000)",
        gradient10: "linear-gradient(310.27deg ,#0478ffb2,#690fd1b2)",
        gradient11: "linear-gradient(180deg ,#f4f4f4,#f4f4f416)",
      },
      boxShadow: {
        bs4: "0px 0px  40px 0px #0478ff",
        bs7: "0px 0px  25px 0px #0000004c",
        bs13: "0px 4px  4px 0px #0000003f",
        bs12: "0px 0px  5px 0px #00000019",
        bs2: "0px 0px  10px 0px #00000033",
        bs14: "0px 1px  30px 0px #0000001e",
        bs9: "2px 0px  6px 0px #0000003f",
        bs6: "0px 2px  5px 0px #00000019",
        bs1: "0px 0px  28.57px 0px #000000",
        bs11: "0px 4px  5px 0px #00000019",
        bs10: "0px 5px  10px 0px #0000000c",
        bs8: "0px 0px  10.15px 0px #0000003f",
        bs: "0px 4px  10px 0px #00000019",
        bs3: "0px 4px  10px 0px #00000026",
        bs5: "0px 4px  20px 0px #00000033",
      },
      borderWidth: { bw5: "5px", bw143: "1.43px" },
      fontFamily: {
        poppins: "Poppins",
        prompt: "Prompt",
        inter: "Inter",
        fontawesomefree: "Font Awesome 6 Free",
      },
      textShadow: {
        ts: "0px 1px  0px #0000003f",
        ts1: "0px 2.71px  0.68px #00000059",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
