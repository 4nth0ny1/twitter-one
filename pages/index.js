import { useState, useEffect } from "react";
import Tweets from "../components/Tweets/Tweets";

export default function Home() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    (async () => {
      const getTweets = await fetch("/api/tweet");
      console.log(getTweets);
      const getTweetsJson = await getTweets.json();
      setTweets(getTweetsJson);
    })();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-5xl py-12">twitter one</h1>
      <Tweets tweets={tweets} setTweets={setTweets} />
    </div>
  );
}
