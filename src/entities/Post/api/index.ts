import { PostModel } from "../model/PostModel";

export const fetchPosts = async (ms = 1500): Promise<PostModel[]> => {
  const data = await import("@/public/mock.json");

  return new Promise((res) => setTimeout(() => res(data.default), ms));
};

export const fetchPostById = async (
  id: PostModel["id"],
  ms = 1500,
): Promise<PostModel> => {
  const data = await import("@/public/mock.json");
  const post = data.default.find((p) => p.id == id) as PostModel;

  return new Promise((res) => setTimeout(() => res(post), ms));
};
