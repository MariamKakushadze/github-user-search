import "./userInfo.css";
import Footer from "./footer";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserInfo({ theme, searchUser, setResult }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = async () => {
      try {
        const { data } = await axios?.get(
          `https://api.github.com/users/${searchUser}`
        );
        setData(data);
        setResult(true);
      } catch (error) {
        console.log(error);
        setResult(false);
      }
    };
    userData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchUser]);

  let date = new Date(data.created_at);
  let gitDate = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div
      className="userInfo"
      style={{ background: theme ? "#FFF" : "#1e2a47" }}
    >
      <div className="profile">
        <img className="prPhoto" src={data.avatar_url} alt=""></img>
        <div className="briefInfo">
          <p className="userName" style={{ color: theme ? "#2B3442" : "#FFF" }}>
            {data.name}
          </p>
          <p className="userId">@{data.login}</p>
          <p
            className="creationDate"
            style={{ color: theme ? "#697C9A" : "#FFF" }}
          >
            Joined {gitDate}
          </p>
        </div>
      </div>
      <span className="bio" style={{ color: theme ? "#4B6A9B" : "#FFF" }}>
        {data.bio || "Not Available"}
      </span>
      <div
        className="folowersInfo"
        style={{ background: theme ? "#F6F8FF" : "#141d2f" }}
      >
        <div
          className="followers"
          style={{ color: theme ? "#2B3442" : "#FFF" }}
        >
          <h5>Repos</h5>
          <span>{data.public_repos}</span>
        </div>
        <div
          className="followers"
          style={{ color: theme ? "#2B3442" : "#FFF" }}
        >
          <h5>Followers</h5>
          <span>{data.followers}</span>
        </div>
        <div
          className="followers"
          style={{ color: theme ? "#2B3442" : "#FFF" }}
        >
          <h5>Following</h5>
          <span>{data.following}</span>
        </div>
      </div>
      <Footer data={data} theme={theme} />
    </div>
  );
}
