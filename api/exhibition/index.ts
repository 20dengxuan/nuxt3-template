import { Https } from "@/utils/https";

enum API {
  Recommend = "/exhibition/exhibition/recommend",
}

export const recommend = () => {
  return Https.get(API.Recommend);
};
