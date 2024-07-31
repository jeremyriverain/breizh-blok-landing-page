const device = process.env.DEVICE ?? "mobile";

export default {
  site: "http://localhost:8764",
  urls: ["/", "/contribute"],
  outputPath: `.unlighthouse/${device}`,
  scanner: {
    device,
  },
};
