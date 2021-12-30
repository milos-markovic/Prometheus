tailwind.config = {
  theme: {
    extend: {
      colors: (theme) => ({
        "light": "#e0dcdc",
        "dark": "#1d1d1d",
        "dashboard-input": "#333333",
        "gray-2": "#343434",
        "gray-3": "#e5e5e5",
        "gray-4": "#edebeb",
        "gray-5": "#989797",
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
        "black-10": "#202020",
        "black-20": "#1e1e1e"
      }),
      maxWidth: {
        desktop: "1440px",
      },
      gridTemplateColumns: {
        // layout: "407px 485px 475px 480px 334px",
      },
      spacing: {

      },
      fontFamily: {
        primary: "DM Sans",
      },
      boxShadow: { 
        "iner": "inset 0px 1px 2px 0px rgba(134,134,134,0.35)",
        "box": "0px 5px 18px 0px rgba(0,0,0,0.71)",
        "light-box": "0px 5px 18px 0px rgba(0,0,0,0.20)",
        "create-box": "1px 1px 9px 0px rgba(0,0,0,0.30)",
        "footerTop-box": "0px -5px 10px -10px rgba(0,0,0,0.20)",
        "img-box": "0px 3px 9px 0px rgba(0,0,0,0.67)",
        "light-topImg-box": "0px 5px 18px 0px rgba(0,0,0,0.35)",
        "light-img-box": "0px 3px 9px 0px rgba(0,0,0,0.20)",
        "iner-h": "inset 0px -1px 2px 0px rgba(134,134,134,0.35)",
        "iner-side": "inset 0px -1px 2px 0px rgba(134,134,134,0.35)",
      },
      backgroundImage: { 
        "footer": "linear-gradient(to bottom, #232323 0, #232323 7.5%, #222222 7.5%, #222222 24.6%, #212121 24.6%, #212121 42%, #202020 42%, #202020 59.9%, #1f1f1f 59.9%, #1f1f1f 77.8%, #1e1e1e 77.8%, #1e1e1e 100%);",
        "light-footer": "linear-gradient(to bottom, #edecec 0, #edebeb 100%)",
        "item-card": "linear-gradient(to bottom, #232323 0, #232323 6%, #222222 6%, #222222 13%, #212121 13%, #212121 29%, #202020 29%, #202020 46%, #1f1f1f 46%, #1f1f1f 61%, #1e1e1e 61%, #1e1e1e 80%, #1d1d1d 80%, #1d1d1d 100%);",
        "aside": "linear-gradient(to bottom, #222222 0, #222222 15.1%, #212121 15.1%, #212121 31.4%, #202020 31.4%, #202020 47.9%, #1f1f1f 47.9%, #1f1f1f 66%, #1e1e1e 66%, #1e1e1e 87.4%, #1d1d1d 87.4%, #1d1d1d 100%);",
        "body": "linear-gradient(to bottom, #232323 0, #232323 2.7%, #222222 2.7%, #222222 17.1%, #212121 17.1%, #212121 30.9%, #202020 30.9%, #202020 45.7%, #1f1f1f 45.7%, #1f1f1f 61.6%, #1e1e1e 61.6%, #1e1e1e 80.8%, #1d1d1d 80.8%, #1d1d1d 100% );",
        "header-dashboard": "linear-gradient(to bottom, #252525 0, #252525 20%, #262626 20%, #262626 100% );",
        "header-wallet": "linear-gradient(to bottom, #242424 0, #242424 33%, #252525 33%, #252525 66%, #262626 66%, #262626 100%);",
        "top-gradient": "linear-gradient(to bottom, rgba(29,29,29,.9), rgba(29,29,29,.7) 60%, rgba(29,29,29,.5) 80%, rgba(29,29,29,0) 100% ); ",
        "top-gradient-light": "linear-gradient(to bottom, rgba(224,220,220,.9), rgba(224,220,220,.7) 60%, rgba(224,220,220,.5) 80%, rgba(224,220,220,0) 100% ); ",
        "bottom-gradient": "linear-gradient(to bottom, rgba(29,29,29,0), rgba(29,29,29,.6) 50%, rgba(29,29,29,.7) 70%, rgba(29,29,29,.8) 80%, rgba(29,29,29,1) 100% ); ",
        "bottom-light-gradient": "linear-gradient(to bottom, rgba(224,220,220,0), rgba(224,220,220,.6) 50%, rgba(224,220,220,.7) 70%, rgba(224,220,220,.8) 80%, rgba(224,220,220,1) 100% ); "
      },
      screens: {
        'xs': {'max': '400px'},
      }
    },
  },
  darkMode: 'class'
};
