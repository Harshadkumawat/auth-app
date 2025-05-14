import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-700 animate-pulse">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <h1 className="text-3xl font-bold text-gray-800">🏡 Welcome Home!</h1>
    </div>
  );
};

export default Home;

