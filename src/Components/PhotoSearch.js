import React, { useState } from 'react';
import { Container, Button, Input } from 'semantic-ui-react';
import { createApi } from 'unsplash-js';

const unsplash  = createApi({
  accessKey: "bdH3L1xjlEtX9uj8vl8cejnipiR3eBN6mKu1Zu6TTgw",
});

export default function PhotoSearch() {

  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search.getPhotos({
      query: (query),
      page: 1,
      perPage: 10,
    })
    .then((json) => {
      setPics(json.response.results);
      //console.log(json);
    });
  };

  return (
    <>
      <Container>
        <form className="form" onSubmit={searchPhotos}> 
          <label className="label" htmlFor="query"> 
            {" "}
          </label>
          <Input
            type="text"
            name="query"
            className="input"
            placeholder={`Try "apple" or "lemon"`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit" className="button">
            Search
          </Button>
        </form>
      </Container>

      <Container>
        <div className="card-list">
          {
          pics.map((pic) =>
            <div className="card" key={pic.id}>
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.small}
                width="50%"
                height="50%"
                alt="Photo"
              ></img>
            </div>)
            }
        </div>
      </Container>
    </>
  );
}