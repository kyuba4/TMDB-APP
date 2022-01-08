module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        128: "32rem",
      },
      height: {
        128: "32rem",
      },
      gridTemplateColumns: {
        "responsive-grid": "repeat(auto-fit, minmax(230px, 1fr))",
      },
    },
  },
  plugins: [],
};
