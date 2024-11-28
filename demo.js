let [name, setName] = useState();
console.log(el);
el2();

function useState() {
  return [
    "hans",
    (value) => {
      console.log("inside");
    },
  ];
}
