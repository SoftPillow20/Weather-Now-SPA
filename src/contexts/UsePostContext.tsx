import type { PostContextType } from "../Types/types";
import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

function usePostContext(): PostContextType {
  const context = useContext(PostContext);

  if (!context)
    throw new Error("usePostContext must be used within PostProvider");

  return context;
}

export default usePostContext;
