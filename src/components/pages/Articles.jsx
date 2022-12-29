import React from 'react';
import { useState, useEffect } from 'react';

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = 'http://localhost:3900/api/articles';
    try {
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {articles.map(article => (
        <article key={article._id} className="article-item">
          <div className="mask">
            <img src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" alt="" />
          </div>
          <div className="data">
            <h3 className="title">{article.title}</h3>
            <p className="description">{article.content}</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </div>
        </article>
      ))}
    </>
  );
};
