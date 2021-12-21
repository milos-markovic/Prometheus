tailwind.config = {
  theme: {
    extend: {
      colors: (theme) => ({
        primary: "#3490dc",
        "secondary": "#1d1d1d",
        "dashboard-input": "#333333",
        "gray-10": "#a0a0a0",
        "gray-20": "#797979",
        "gray-30": "#eaeaea",
        "gray-40": "#848484",
        "gray-50": "#2f2f2f",
        "gray-60": "#9a9a9a",
        "gray-70": "#323232",
        "gray-80": "#262626",
        'gray-b': "#f0f0f0",
        "blue-10": "#4eb4e6",
      }),
      maxWidth: {
        desktop: "1440px",
      },
      gridTemplateColumns: {
        layout: "407px 485px 475px 480px 334px",
      },
      spacing: {
        "wallet-h": "200px",
        test: "725px",
        search: "350px",
        120: "41rem",
        110: "37.5rem",
        84: "23rem",
        "items-card-h": "460px",
      },
      fontFamily: {
        primary: "DM Sans",
      },
      boxShadow: { 
        "iner": "inset 0px 1px 2px 0px rgba(134,134,134,0.35)",
        "box": "0px 5px 18px 0px rgba(0,0,0,0.71)",
        "create-box": "1px 1px 9px 0px rgba(0,0,0,0.30)",
        "footerTop-box": "0px -5px 18px 0px rgba(0,0,0,0.71)",
        "img-box": "0px 3px 9px 0px rgba(0,0,0,0.67)",
        "iner-h": "inset 0px -1px 2px 0px rgba(134,134,134,0.35)",
        "iner-side": "inset 0px -1px 2px 0px rgba(134,134,134,0.35)",
      },
      backgroundImage: { 
        "test": "background-image: linear-gradient(to bottom, #242424 0, #242424 33%, #252525 33%, #252525 66%, #262626 66%, #262626 100%);"
      }
    },
  },
};
