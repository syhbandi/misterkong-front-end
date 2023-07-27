import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
type PostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type Error = {
  message: string;
};

const Posts = () => {
  // const [Posts, setPosts] = useState<PostType[]>([] as PostType[]);
  const query = useQuery<PostType[], AxiosError>({
    queryKey: ["posts"],
    queryFn: () =>
      axios.get(import.meta.env.VITE_API_URL + "posts").then((res) => res.data),
  });

  if (query.isLoading) return <>Loading...</>;
  if (query.isError) return <>{query.error.message}</>;

  return (
    <div className="container mx-auto max-w-7xl px-6">
      {query.data.map((post) => (
        <div key={post.id} className="mb-3">
          <h1 className="text-lg font-semibold">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
