import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

const Form = (props) => {
  const [query, setQuery] = useState();
  const gr = props.props.groups;
  console.log("123", props.props);
  console.log("135", gr);
  const submit = (event) => {
    event.preventDefault();
    if (query !== "") {
      gr.add(query);
    } else {
      return setQuery("");
    }
    alert(query);
    setQuery("");
    // console.log("123", event.keyCode);
  };
  const onchange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    // setQuery("");
  };
  return (
    <div>
      {/* <List list={gr.list} /> */}

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Add..."
          {...{query}}
          onChange={onchange}
          // value={query}
          // onKeyPress={onkeypress}
        />
        {/* <input type="submit" value="add" /> */}
      </form>
    </div>
  );
};
const List = observer((list) => (
  <div className="r2d16">
    <h3>{list.list.title}</h3>
    <ul>
      {list.list.map((item) => (
        <li key={item.title}>
          <Link to={`/${item.title}`}> {item.title}</Link>
        </li>
      ))}
    </ul>
  </div>
));
const Addable = (props) => {
  const [Addable, setAddable] = useState(false);
  // const [value, setInputValue] = useState("");
  // const onchange = (event) => {
  //   event.preventDefault();
  //   if (value === "") return;
  //   setInputValue(event.target.value);
  //   group.add(value);
  //   console.log(group);
  //   return group;
  // };
  const group = props.props;
  // group.add("test group")
  const Show = () => {
    setAddable((Addable) => !Addable);
    // setInputValue("");
    console.log("111" + group);
    console.log(Addable);
    console.log("66" + group.groups);
  };
  return (
    <div>
      <ul>{console.log("753" + group.groups.list)}</ul>
      {Addable === true ? <Form props={group} /> : ""}
      <br />
      <button onClick={Show}>Add</button>
    </div>
  );
};

export { Addable, List };
