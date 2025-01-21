export interface ServiceOffering {
  title: string;
  description: string;
}

export interface ServiceContent {
  name: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  offerings: string[];
  whyStrategicSolutions: {
    points: string[];
  };
} 