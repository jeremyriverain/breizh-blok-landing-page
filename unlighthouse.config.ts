const device = process.env.DEVICE ?? "mobile";

export default {
  site: "http://localhost:8764",
  urls: ["/", "/contribute"],
  outputPath: `.unlighthouse/${device}`,
  scanner: {
    device,
  },
  ci: {
    budget: {
      performance: 100,
      accessibility: 100,
      "best-practices": 100,
      seo: 100,
    },
  },
};
