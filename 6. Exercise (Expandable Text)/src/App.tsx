import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <>
      <h1>You can Expand the text using these buttons</h1>
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
        expedita, debitis, eius dignissimos ducimus totam quae natus
        exercitationem consectetur est tempore optio ipsam unde soluta. Iure
        dolorum, pariatur atque esse veritatis officiis eveniet, amet, dolorem
        blanditiis error quos harum officia itaque magnam perspiciatis
        voluptatum ut non earum at? Culpa numquam necessitatibus vel impedit
        repudiandae repellat consequuntur, aperiam accusamus eius temporibus qui
        quo praesentium nobis voluptatem, molestiae doloribus reprehenderit
        sapiente velit saepe, et molestias voluptate maiores. Est dolores
        voluptate numquam fugiat voluptatem, enim accusamus repudiandae a
        eligendi laborum omnis vel ratione nam in, quos nihil dolorem assumenda
        maxime nobis reprehenderit ipsam.
      </ExpandableText>
    </>
  );
}

export default App;
