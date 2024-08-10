// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImageUrl(data.message);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);
  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div className="randomimage">
      <img src={imageUrl} alt="A Random Dog"></img>
    </div>
  );
}
export default App;
