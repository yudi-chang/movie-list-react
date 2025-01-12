import React from "react";
import styles from "./EmptyMovies.module.scss";

const EmptyMovies = () => {
  return (
    <div className={`${styles['not-found-message']}`}>
      <img src="/images/not-found-logo.png" alt="Movie not found" />
      <h2 className="mt-28 text-3xl font-bold">No movies found</h2>
    </div>
  );
};

export default EmptyMovies;
