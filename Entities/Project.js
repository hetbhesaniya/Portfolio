export const Project = {
  async list(order = "-created_date") {
    return [
      {
        id: "1",
        title: "Midas Core + Incentives API",
        description:
          "Spring Boot + Kafka integration; implemented /balance endpoint and event-driven processing.",
        technologies: ["Java 17", "Maven", "Kafka", "REST"],
        image_url: "https://picsum.photos/seed/midas/800/400",
        demo_url: "https://example.com/demo",
        github_url: "https://github.com/you/midas-core"
      },
      {
        id: "2",
        title: "NLP Coursework (IFT 536)",
        description:
          "RAG experiments, transformer baselines, evaluation pipelines.",
        technologies: ["Python", "PyTorch", "HF Transformers"],
        image_url: "https://picsum.photos/seed/nlp/800/400",
        github_url: "https://github.com/you/nlp-labs"
      }
    ];
  }
};
