import React from "react";

export const ArticleComponent = ({ article }) => (
  <div className="article-container">
    <div className="article-header">
      <img
        src={article.author.profileImage}
        alt="Author"
        className="author-image"
      />
      <div className="article-info">
        <h2>{article.title}</h2>
        <p>By: {article.author.name}</p>
      </div>
    </div>
    <p className="article-content">{article.content}</p>
    <div className="article-footer">
      <img
        src={article.channel.image}
        alt="Channel"
        className="channel-image"
      />
      <p>Channel: {article.channel.name}</p>
      <div className="article-stats">
        <p>Likes: {article.likeCount}</p>
        <p>Comments: {article.commentCount}</p>
      </div>
    </div>
  </div>
);
