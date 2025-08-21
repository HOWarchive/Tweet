
import { useState } from "react";
import { Input } from "./components/ui/input";
import { Badge } from "./components/ui/badge";

const tweets = [
  {
    id: "001",
    text: "I no longer have a manager. I can’t be managed.",
    date: "2018-04-25",
    tags: ["freedom", "ego", "business"]
  }
];

export default function KanyeTweetArchive() {
  const [query, setQuery] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  const filteredTweets = tweets
    .filter((tweet) => {
      const matchesQuery = tweet.text.toLowerCase().includes(query.toLowerCase());
      const matchesTag = tagFilter ? tweet.tags.includes(tagFilter) : true;
      return matchesQuery && matchesTag;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const allTags = Array.from(new Set(tweets.flatMap((tweet) => tweet.tags))).sort();

  return (
    <div className="min-h-screen bg-[#f7f9f9] text-black p-4 max-w-2xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-6 text-center">Kanye Tweet Archive</h1>

      <Input
        placeholder="Search tweets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4 border border-gray-300 rounded-full px-4 py-2"
      />

      <div className="flex flex-wrap gap-2 mb-6">
        {allTags.map((tag) => (
          <Badge
            key={tag}
            className={`cursor-pointer ${tagFilter === tag ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => setTagFilter(tag)}
          >
            #{tag}
          </Badge>
        ))}
      </div>

      <div className="space-y-4">
        {filteredTweets.map((tweet) => (
          <div
            key={tweet.id}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start gap-3 mb-2">
              <img
                src="/kanye-avatar.jpg"
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-bold leading-tight">
                  ye <span className="text-gray-500 font-normal">@kanyewest · {tweet.date}</span>
                </div>
                <p className="text-[15px] mt-1 whitespace-pre-wrap leading-snug">{tweet.text}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {tweet.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="cursor-pointer"
                  onClick={() => setTagFilter(tag)}
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
