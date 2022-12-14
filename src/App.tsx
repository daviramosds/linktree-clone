import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Card } from "./components/Card";
import { client } from "./lib/apollo";
import "./styles/global.css";

const GET_LINKS_QUERY = gql`
  query MyQuery {
    links {
      id
      title
      url
    }
  }
`;

interface LinkInterface {
  id: string;
  title: string;
  url: string;
}

function App() {
  const { data, loading, error } = useQuery(GET_LINKS_QUERY);

  if (loading) return <p>Loading...</p>;

  const { links } = data;

  return (
    <div className="bg-zinc-400 bg-cover bg-center h-screen w-screen md:p-12 p-2">
      <main className="h-full mx-auto md:max-w-[600px] p-10 flex flex-col items-center relative backdrop-filter backdrop-blur-lg bg-semitransparent rounded">
        <img
          src="https://github.com/daviramosds.png"
          className="w-24 h-24 rounded-full"
          draggable={false}
        ></img>
        <h4 className="text-base my-4 font-medium">@davirds</h4>
        {links.map((link: LinkInterface) => {
          return <Card key={link.id} title={link.title} url={link.url} />;
        })}
      </main>
    </div>
  );
}

export default App;
