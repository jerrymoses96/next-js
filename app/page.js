"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page);
  };

  return (
    <section>
      <h1>Use Router</h1>
      <button
        className="bg-orange-400 rounded-2xl mx-5 px-5 py-3"
        onClick={() => navigate("about")}
      >
        
        Go to about page
      </button>
      <button
        className="bg-orange-400 rounded-2xl mx-5 px-5 py-3"
        onClick={() => navigate("login")}
      >
        
        Go to login page
      </button>
    </section>
  );
};

export default Home;
