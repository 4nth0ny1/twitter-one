import Tweet from "./Tweet";

export default function Tweets({ tweets, setTweets }) {
  return (
    <>
      <div>
        {tweets.map((tweet) => (
          <div key={tweet._id}>
            <Tweet tweet={tweet} setTweets={setTweets} />
          </div>
        ))}
      </div>
    </>
  );
}
