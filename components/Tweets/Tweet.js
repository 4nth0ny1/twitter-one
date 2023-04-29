export default function Tweet({ tweet, setTweet }) {
  const { _id, postedAt, body, user: twitterUser } = tweet;
  return (
    <div className="flex flex-row p-4 border-2 rounded-xl m-4">
      <div className="p-4 w-1/4">
        <img
          className="w-[50px] rounded-xl"
          src={twitterUser.picture}
          alt="twitterUser"
        ></img>
        <p>{twitterUser.nickname}</p>
        <p>{twitterUser.name}</p>
      </div>
      <div className="flex flex-col justify-center w-full">
        <p>{tweet.body}</p>
      </div>
      <div className="">
        <p>{tweet.likes.length}</p>
      </div>
    </div>
  );
}
