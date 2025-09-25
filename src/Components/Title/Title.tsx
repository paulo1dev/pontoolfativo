import React from "react";
import css from "./Title.module.css";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
    </div>
  );
};

export default Title;
